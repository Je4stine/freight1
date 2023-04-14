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
const trips_1 = __importDefault(require("../Models/trips"));
describe('CRUD', () => {
    let tripId;
    beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
        yield trips_1.default.sync({ force: true });
    }));
    test('Create an Trips', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(Server_1.default)
            .post('/trips')
            .send({
            sender: 'Test Sender',
            phone1: '123456789',
            phone2: '987654321',
            destination: 'Test Destination',
            value: 1000,
        });
        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty('id');
        tripId = response.body.id;
    }));
    test('Get all Trips', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(Server_1.default).get('/trips');
        expect(response.status).toBe(200);
        expect(response.body).toHaveLength(1);
    }));
    test('Get an trips by id', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(Server_1.default).get(`/shipment/${tripId}`);
        expect(response.status).toBe(200);
        expect(response.body.id).toBe(tripId);
    }));
    test('Update an trip', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(Server_1.default)
            .put(`/tripId/${tripId}`)
            .send({
            sender: 'Test Sender',
            phone1: '123456789',
            phone2: '987654321',
            destination: 'Test Destination',
            value: 1000,
        });
        expect(response.status).toBe(200);
        expect(response.body.seniority).toBe(3);
    }));
    test('Delete a trip', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(Server_1.default).delete(`/trip/${tripId}`);
        expect(response.status).toBe(204);
    }));
    test('Get a trip by id after deletion', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(Server_1.default).get(`/trip/${tripId}`);
        expect(response.status).toBe(404);
    }));
});
