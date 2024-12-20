"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.get('/', (req, res) => {
    const a = 10;
    res.send(a);
});
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
// Logs the current working directory
console.log(process.cwd());
exports.default = app;
