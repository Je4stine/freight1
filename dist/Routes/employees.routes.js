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
const employees_1 = __importDefault(require("../Models/employees"));
const router = express_1.default.Router();
//create employee
router.get('/employees', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const employees = yield employees_1.default.findAll();
        res.json(employees);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}));
router.get('/employees/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const employee = yield employees_1.default.findByPk(id);
        if (!employee) {
            res.status(404).json({ message: 'Employee not found' });
        }
        else {
            res.json(employee);
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}));
router.post('/employees', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, surname, seniority, category, specialization } = req.body;
    try {
        const employee = yield employees_1.default.create({
            name,
            surname,
            seniority,
            category,
            specialization,
        });
        res.status(201).json(employee);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}));
router.put('/employees/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { name, surname, seniority, category, specialization } = req.body;
    try {
        const employee = yield employees_1.default.findByPk(id);
        if (!employee) {
            res.status(404).json({ message: 'Employee not found' });
        }
        else {
            yield employee.update({
                name,
                surname,
                seniority,
                category,
                specialization,
            });
            res.json(employee);
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}));
router.delete('/employees/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const employee = yield employees_1.default.findByPk(id);
        if (!employee) {
            res.status(404).json({ message: 'Employee not found' });
        }
        else {
            yield employee.destroy();
            res.sendStatus(204);
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}));
exports.default = router;
