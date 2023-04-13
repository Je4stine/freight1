"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const employees_routes_1 = __importDefault(require("./Routes/employees.routes"));
const shipments_routes_1 = __importDefault(require("./Routes/shipments.routes"));
const trucks_routes_1 = __importDefault(require("./Routes/trucks.routes"));
const app = (0, express_1.default)();
app.use(express_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.json());
app.get("/", (req, res) => {
    res.send("<h1>Server running on port 8080</h1>");
});
app.use('/api/employees', employees_routes_1.default);
app.use('/api/shipment', shipments_routes_1.default);
app.use('/api/truck', trucks_routes_1.default);
app.listen(8080, () => {
    console.log('Server listening on port 8080');
});
