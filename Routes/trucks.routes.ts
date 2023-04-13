import express, { Request, Response } from 'express';
import Truck from "../Models/trucks";

const router = express.Router();


//create Trucks
router.get('/trucks', async (req: Request, res: Response) => {
    try {
        const trucks = await Truck.findAll();
        res.json(trucks);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
      }
  });



router.get('/trucks/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const trucks = await Truck.findByPk(id);
      if (!trucks) {
        res.status(404).json({ message: 'Trucks not found' });
      } else {
        res.json(trucks);
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });

router.post('/trucks', async (req: Request, res: Response) => {
    const { brand, load, capacity, year, numberOfRepairs } = req.body;
    try {
      const trucks = await Truck.create({
        brand, load, capacity, year, numberOfRepairs
      });
      res.status(201).json(trucks);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });


router.put('/trucks/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    const { brand, load, capacity, year, numberOfRepairs } = req.body;
    try {
      const trucks = await Truck.findByPk(id);
      if (!trucks) {
        res.status(404).json({ message: 'Trucks not found' });
      } else {
        await trucks.update({
            brand, load, capacity, year, numberOfRepairs
        });
        res.json(trucks);
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });


router.delete('/trucks/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const trucks = await Truck.findByPk(id);
      if (!trucks) {
        res.status(404).json({ message: 'Trucks not found' });
      } else {
        await trucks.destroy();
        res.sendStatus(204);
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });




export default router;