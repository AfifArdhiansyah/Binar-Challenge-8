const CarController = require("../controllers/CarController");
const dayjs = require("dayjs");

const {Car, UserCar} = require("../models");
const carModel = Car;
const userCarModel = UserCar;

describe("CarController", () => {
    let carController;
    
    beforeEach(() => {
        carController = new CarController({ carModel, userCarModel, dayjs });
    });
    
    describe("handleListCars", () => {
        it("should return a list of cars", async () => {
        const req = {
            query: {
            pageSize: 10,
            page: 1,
            },
        };
    
        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };
    
        await carController.handleListCars(req, res);
    
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith({
            cars: expect.any(Array),
            meta: {
            pagination: expect.any(Object),
            },
        });
        });
    });
    
    describe("handleGetCar", () => {
        it("should return a single car", async () => {
        const req = {
            params: {
            id: 21,
            },
        };
    
        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };
    
        await carController.handleGetCar(req, res);
    
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith(
            expect.any(Object));
        });
    });
    
    describe("handleCreateCar", () => {
        it("should create a new car", async () => {
        const req = {
            body: {
                name: "Test Car",
                price: 100,
                size: "small",
                image: "http://localhost:3000/images/test-car.jpg",
            },
        };
    
        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };
    
        await carController.handleCreateCar(req, res);
    
        expect(res.status).toHaveBeenCalledWith(201);
        expect(res.json).toHaveBeenCalledWith(
            expect.any(Object));
        });
    });

    describe("handleUpdateCar", () => {
        it("should update an existing car", async () => {
        const req = {
            params: {
                id: 21,
            },
            body: {
                name: "Test Car",
                price: 100,
                size: "small",
                image: "http://localhost:3000/images/test-car.jpg",
            },
        };
    
        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };
    
        await carController.handleUpdateCar(req, res);
    
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith(
            expect.any(Object));
        });
    });

    describe("handleRentCar", () => {
        it("should rent a car", async () => {
        const req = {
            params: {
                id: 2,
            },
            body: {
                userId: 1,
                startDate: "2021-01-01",
                endDate: "2021-01-02",
            },
        };
    
        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };
    
        await carController.handleRentCar(req, res);
    
        expect(res.status).toHaveBeenCalledWith(201);
        expect(res.json).toHaveBeenCalledWith(
            expect.any(Object));
        });
    });

    describe("handleDeleteCar", () => {
        it("should delete an existing car", async () => {
        const req = {
            params: {
                id: 21,
            },
        };
    
        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };
    
        await carController.handleDeleteCar(req, res);
    
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith(
            expect.any(Object));
        });
    });
})