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
const express_1 = __importDefault(require("express"));
const trips_1 = __importDefault(require("../Models/trips"));
const router = express_1.default.Router();
//create Trips
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const trips = yield trips_1.default.findAll();
        res.json(trips);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}));
router.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const trips = yield trips_1.default.findByPk(id);
        if (!trips) {
            res.status(404).json({ message: 'Trip not found' });
        }
        else {
            res.json(trips);
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}));
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { route } = req.body;
    try {
        const trips = yield trips_1.default.create({
            route
        });
        res.status(201).json(trips);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}));
router.put('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { route } = req.body;
    try {
        const trips = yield trips_1.default.findByPk(id);
        if (!trips) {
            res.status(404).json({ message: 'Trip not found' });
        }
        else {
            yield trips.update({
                route
            });
            res.json(trips);
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}));
router.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const trips = yield trips_1.default.findByPk(id);
        if (!trips) {
            res.status(404).json({ message: 'Trip not found' });
        }
        else {
            yield trips.destroy();
            res.sendStatus(204);
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}));
exports.default = router;
