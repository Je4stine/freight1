"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const Server_1 = __importDefault(require("../Server"));
const trucks_1 = __importDefault(require("../Models/trucks"));
describe('CRUD', () => {
    let trucksId;
    beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
        yield trucks_1.default.sync({ force: true });
    }));
    test('Create a truck', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(Server_1.default)
            .post('/truck')
            .send({
            brand: 'Volvo',
            load: 'Heavy',
            capacity: '100 tons',
            year: 2020,
            numberOfRepairs: 0,
        });
        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty('id');
        trucksId = response.body.id;
    }));
    test('Get all trucks', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(Server_1.default).get('/truck');
        expect(response.status).toBe(200);
        expect(response.body).toHaveLength(1);
    }));
    test('Get a trucks by id', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(Server_1.default).get(`/truck/${trucksId}`);
        expect(response.status).toBe(200);
        expect(response.body.id).toBe(trucksId);
    }));
    test('Update a trucks', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(Server_1.default)
            .put(`/employees/${trucksId}`)
            .send({
            brand: 'Volvo',
            load: 'Heavy',
            capacity: '100 tons',
            year: 2020,
            numberOfRepairs: 0,
        });
        expect(response.status).toBe(200);
        expect(response.body.seniority).toBe(3);
    }));
    test('Delete a truck', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(Server_1.default).delete(`/truck/${trucksId}`);
        expect(response.status).toBe(204);
    }));
    test('Get a truck by id after deletion', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(Server_1.default).get(`/truck/${trucksId}`);
        expect(response.status).toBe(404);
    }));
});
