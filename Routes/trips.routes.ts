import express, { Request, Response } from 'express';
import Trip from "../Models/trips";

const router = express.Router();


//create Trips
router.get('/tripss', async (req: Request, res: Response) => {
    try {
        const trips = await Trip.findAll();
        res.json(trips);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
      }
  });



router.get('/trips/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const trips = await Trip.findByPk(id);
      if (!trips) {
        res.status(404).json({ message: 'Trip not found' });
      } else {
        res.json(trips);
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });

router.post('/trips', async (req: Request, res: Response) => {
    const { brand, load, capacity, year, numberOfRepairs } = req.body;
    try {
      const trips = await Trip.create({
        brand, load, capacity, year, numberOfRepairs
      });
      res.status(201).json(trips);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });


router.put('/trips/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    const { brand, load, capacity, year, numberOfRepairs } = req.body;
    try {
      const trips = await Trip.findByPk(id);
      if (!trips) {
        res.status(404).json({ message: 'Trip not found' });
      } else {
        await trips.update({
            brand, load, capacity, year, numberOfRepairs
        });
        res.json(trips);
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });


router.delete('/trips/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const trips = await Trip.findByPk(id);
      if (!trips) {
        res.status(404).json({ message: 'Trip not found' });
      } else {
        await trips.destroy();
        res.sendStatus(204);
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });




export default router;