const AuthenticationController = require('../controllers/AuthenticationController');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { User, Role } = require('../models');
const roleModel = Role;
const userModel = User;

const authenticationController = new AuthenticationController({ bcrypt, jwt, roleModel, userModel, });

describe('AuthenticationController', () => {
    describe('handleLogin', () => {
        it('should return 201 and a token', async () => {
            const req = {
                body: {
                    email: 'fikri@binar.co.id',
                    password: '123456',
                }
            };
            const res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn()
            };
            const next = jest.fn();

            await authenticationController.handleLogin(req, res, next);

            expect(res.status).toHaveBeenCalledWith(201);
            expect(res.json).toHaveBeenCalledWith({
                accessToken: expect.any(String)
            });
        });
        it('should return 404 if email is not found', async () => {
            const req = {
                body: {
                    email: 'afif@binar.co.id',
                    password: '123456',
                }
            };
            const res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn()
            };
            const next = jest.fn();

            await authenticationController.handleLogin(req, res, next);

            expect(res.status).toHaveBeenCalledWith(404);
        });
        it('should return 401 if password is wrong', async () => {
            const req = {
                body: {
                    email: 'fikri@binar.co.id',
                    password: 'password salah',
                }
            };
            const res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn()
            };
            const next = jest.fn();

            await authenticationController.handleLogin(req, res, next);

            expect(res.status).toHaveBeenCalledWith(401);
        });

    describe('handleRegister', () => {
        it('should return 201 and a token', async () => {
            const req = {
                body: {
                    name: 'Test',
                    email: 'test@binar.co.id',
                    password: '123456',
                }
            };
            const res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn()
            };
            const next = jest.fn();

            await authenticationController.handleRegister(req, res, next);

            expect(res.status).toHaveBeenCalledWith(201);
            expect(res.json).toHaveBeenCalledWith({
                accessToken: expect.any(String)
            });
        });
        it('should return 422 if email is already registered', async () => {
            const req = {
                body: {
                    name: 'Fikri',
                    email: 'fikri@binar.co.id',
                    password: '123456',
                }
            };
            const res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn()
            };
            const next = jest.fn();

            await authenticationController.handleRegister(req, res, next);

            expect(res.status).toHaveBeenCalledWith(422);
        });
    });

    describe('handleGetUser', () => {
        it('should return 200 and user data', async () => {
            const req = {
                user: {
                    id: 1,
                }
            };
            const res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn()
            };
            const next = jest.fn();

            await authenticationController.handleGetUser(req, res, next);

            expect(res.status).toHaveBeenCalledWith(200);
            expect(res.json).toHaveBeenCalledWith(expect.any(Object));
        });
        it('should return 404 if user is not found', async () => {
            const req = {
                user: {
                    id: 100,
                }
            };
            const res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn()
            };
            const next = jest.fn();

            await authenticationController.handleGetUser(req, res, next);

            expect(res.status).toHaveBeenCalledWith(404);
        });
        it('should return 404 if role is not found', async () => {
            const req = {
                user: {
                    id: 100,
                }
            };
            const res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn()
            };
            const next = jest.fn();

            await authenticationController.handleGetUser(req, res, next);

            expect(res.status).toHaveBeenCalledWith(404);
        });
    });
});
});