"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteById = exports.updateById = exports.create = exports.getOneById = exports.getAll = void 0;
const joi_1 = __importDefault(require("joi"));
// Dummy database
let planets = [
    { id: 1, name: 'Earth' },
    { id: 2, name: 'Mars' }
];
const planetSchema = joi_1.default.object({
    id: joi_1.default.number().integer().required(),
    name: joi_1.default.string().required()
});
const getAll = (req, res) => {
    res.status(200).json(planets);
};
exports.getAll = getAll;
const getOneById = (req, res) => {
    const planet = planets.find(p => p.id === parseInt(req.params.id));
    if (planet) {
        res.status(200).json(planet);
    }
    else {
        res.status(404).json({ msg: 'Planet not found' });
    }
};
exports.getOneById = getOneById;
const create = (req, res) => {
    const { error } = planetSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ msg: error.details[0].message });
    }
    const newPlanet = Object.assign({}, req.body);
    planets = [...planets, newPlanet];
    res.status(201).json({ msg: 'Planet created successfully' });
};
exports.create = create;
const updateById = (req, res) => {
    const { error } = planetSchema.validate(Object.assign(Object.assign({}, req.body), { id: parseInt(req.params.id) }));
    if (error) {
        return res.status(400).json({ msg: error.details[0].message });
    }
    const index = planets.findIndex(p => p.id === parseInt(req.params.id));
    if (index === -1) {
        return res.status(404).json({ msg: 'Planet not found' });
    }
    planets[index] = Object.assign(Object.assign({}, req.body), { id: parseInt(req.params.id) });
    res.status(200).json({ msg: 'Planet updated successfully' });
};
exports.updateById = updateById;
const deleteById = (req, res) => {
    const index = planets.findIndex(p => p.id === parseInt(req.params.id));
    if (index === -1) {
        return res.status(404).json({ msg: 'Planet not found' });
    }
    planets = planets.filter(p => p.id !== parseInt(req.params.id));
    res.status(200).json({ msg: 'Planet deleted successfully' });
};
exports.deleteById = deleteById;
