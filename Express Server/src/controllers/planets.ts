import { Request, Response } from 'express';
import Joi from 'joi';

// Dummy database
let planets: { id: number, name: string }[] = [
  { id: 1, name: 'Earth' },
  { id: 2, name: 'Mars' }
];

const planetSchema = Joi.object({
  id: Joi.number().integer().required(),
  name: Joi.string().required()
});

export const getAll = (req: Request, res: Response) => {
  res.status(200).json(planets);
};

export const getOneById = (req: Request, res: Response) => {
  const planet = planets.find(p => p.id === parseInt(req.params.id));
  if (planet) {
    res.status(200).json(planet);
  } else {
    res.status(404).json({ msg: 'Planet not found' });
  }
};

export const create = (req: Request, res: Response) => {
  const { error } = planetSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ msg: error.details[0].message });
  }
  const newPlanet = { ...req.body };
  planets = [...planets, newPlanet];
  res.status(201).json({ msg: 'Planet created successfully' });
};

export const updateById = (req: Request, res: Response) => {
  const { error } = planetSchema.validate({ ...req.body, id: parseInt(req.params.id) });
  if (error) {
    return res.status(400).json({ msg: error.details[0].message });
  }
  const index = planets.findIndex(p => p.id === parseInt(req.params.id));
  if (index === -1) {
    return res.status(404).json({ msg: 'Planet not found' });
  }
  planets[index] = { ...req.body, id: parseInt(req.params.id) };
  res.status(200).json({ msg: 'Planet updated successfully' });
};

export const deleteById = (req: Request, res: Response) => {
  const index = planets.findIndex(p => p.id === parseInt(req.params.id));
  if (index === -1) {
    return res.status(404).json({ msg: 'Planet not found' });
  }
  planets = planets.filter(p => p.id !== parseInt(req.params.id));
  res.status(200).json({ msg: 'Planet deleted successfully' });
};
