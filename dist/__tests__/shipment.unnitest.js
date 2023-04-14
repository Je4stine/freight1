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
const shipments_1 = __importDefault(require("../Models/shipments"));
describe('CRUD', () => {
    let shipmentId;
    beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
        yield shipments_1.default.sync({ force: true });
    }));
    test('Create an Shipment', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(Server_1.default)
            .post('/shipments')
            .send({
            sender: 'Test Sender',
            phone1: '123456789',
            phone2: '987654321',
            destination: 'Test Destination',
            value: 1000,
        });
        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty('id');
        shipmentId = response.body.id;
    }));
    test('Get all shipments', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(Server_1.default).get('/shipments');
        expect(response.status).toBe(200);
        expect(response.body).toHaveLength(1);
    }));
    test('Get an shipment by id', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(Server_1.default).get(`/shipment/${shipmentId}`);
        expect(response.status).toBe(200);
        expect(response.body.id).toBe(shipmentId);
    }));
    test('Update an shipment', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(Server_1.default)
            .put(`/shipmentId/${shipmentId}`)
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
    test('Delete an shipment', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(Server_1.default).delete(`/shipment/${shipmentId}`);
        expect(response.status).toBe(204);
    }));
    test('Get an shipment by id after deletion', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(Server_1.default).get(`/shipment/${shipmentId}`);
        expect(response.status).toBe(404);
    }));
});
