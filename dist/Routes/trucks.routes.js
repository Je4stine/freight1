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
const trucks_1 = __importDefault(require("../Models/trucks"));
const router = express_1.default.Router();
//create Trucks
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const trucks = yield trucks_1.default.findAll();
        res.json(trucks);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}));
router.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const trucks = yield trucks_1.default.findByPk(id);
        if (!trucks) {
            res.status(404).json({ message: 'Trucks not found' });
        }
        else {
            res.json(trucks);
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}));
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // const { brand, load, capacity, year, numberOfRepairs } = req.body;
    try {
        if (!req.body) {
            return res.status(400).json({ message: 'Request body is missing' });
        }
        const { brand, load, capacity, year, numberOfRepairs } = req.body;
        const trucks = yield trucks_1.default.create({
            brand, load, capacity, year, numberOfRepairs
        });
        res.status(201).json(trucks);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}));
router.put('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { brand, load, capacity, year, numberOfRepairs } = req.body;
    try {
        const trucks = yield trucks_1.default.findByPk(id);
        if (!trucks) {
            res.status(404).json({ message: 'Trucks not found' });
        }
        else {
            yield trucks.update({
                brand, load, capacity, year, numberOfRepairs
            });
            res.json(trucks);
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
        const trucks = yield trucks_1.default.findByPk(id);
        if (!trucks) {
            res.status(404).json({ message: 'Trucks not found' });
        }
        else {
            yield trucks.destroy();
            res.sendStatus(204);
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}));
exports.default = router;
