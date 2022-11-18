const { Op } = require("sequelize");
const ApplicationController = require("./ApplicationController");

class CarController extends ApplicationController {
  constructor({ carModel, userCarModel, dayjs }) {
    super();
    this.carModel = carModel;
    this.userCarModel = userCarModel;
    this.dayjs = dayjs;
  }

  handleListCars = async (req, res) => {
    const offset = this.getOffsetFromRequest(req);
    const limit = req.query.pageSize;
    const query = this.getListQueryFromRequest(req);
    const cars = await this.carModel.findAll(query);
    const carCount = await this.carModel.count({ where: query.where, include: query.include, });
    const pagination = this.buildPaginationObject(req, carCount);

    res.status(200).json({
      cars,
      meta: {
        pagination,
      }
    });
  }

  handleGetCar = async (req, res) => {
    const car = await this.getCarFromRequest(req); 

    res.status(200).json(car);
  }

  handleCreateCar = async (req, res) => {
    try {
      const {
        name,
        price,
        size,
        image,
      } = req.body;

      const car = await this.carModel.create({
        name,
        price,
        size,
        image,
        iscurrentlyrented: false,
      });

      res.status(201).json(car);
    }

    catch(err) {
      res.status(422).json({
        error: {
          name: err.name,
          message: err.message,
        }
      });
    }
  }

  handleRentCar = async (req, res, next) => {
    try {
      let { rentstartedat, rentendedat } = req.body;
      const car = await this.getCarFromRequest(req)

      if (!rentendedat) rentendedat = this.dayjs(rentstartedat).add(1, "day");

      const activeRent = await this.userCarModel.findOne({
        where: {
          carid: car.id,
          rentstartedat: {
            [Op.gte]: rentstartedat,
          },
          rentendedat: {
            [Op.lte]: rentendedat, 
          }
        }
      });

      if (!!activeRent) {
        const err = new CarAlreadyRentedError(car);
        res.status(422).json(err)
        return;
      }

      const userCar = await this.userCarModel.create({
        userid: req.body.userid,
        carid: car.id,
        rentstartedat,
        rentendedat,
      });

      res.status(201).json(userCar)
    }

    catch(err) {
      next(err);
    }
  }

  handleUpdateCar = async (req, res) => {
    try {
      const {
        name,
        price,
        size,
        image,
      } = req.body;

      const car = await this.getCarFromRequest(req);

      await car.update({
        name,
        price,
        size,
        image,
        iscurrentlyrented: false,
      });

      res.status(200).json(car);
    }

    catch(err) {
      res.status(422).json({
        error: {
          name: err.name,
          message: err.message,
        }
      });
    }
  }

  handleDeleteCar = async (req, res) => {
    const car = await this.carModel.destroy({where: {id: req.params.id}}).then(() => {
      res.status(200).json({message: "Car deleted successfully"});
    });
  }

  async getCarFromRequest(req) {
    const car = await this.carModel.findByPk(req.params.id);
    return car;
  }

  getListQueryFromRequest(req) {
    const { size, availableAt } = req.query;
    const offset = this.getOffsetFromRequest(req);
    const limit = req.query.pageSize || 10;
    const where = {};
    const include = {
      model: this.userCarModel,
      as: "userCar",
      required: false,
    }
    const exclude = ["createdAt", "updatedAt"];

    if (!!size) where.size = size;
    if (!!availableAt) {
      include.where = {
        rentendedat: {
          [Op.gte]: availableAt, 
        }
      }
    }

    const query = {
      include,
      exclude,
      where,
      limit,
      offset,
    };

    return query;
  }
}

module.exports = CarController;
