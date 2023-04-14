import express, { Request, Response } from 'express';
import Trip from "../Models/trips";

const router = express.Router();


//create Trips
router.get('/', async (req: Request, res: Response) => {
    try {
        const trips = await Trip.findAll();
        res.json(trips);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
      }
  });



router.get('/:id', async (req: Request, res: Response) => {
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

router.post('/', async (req: Request, res: Response) => {
    const { route } = req.body;
    try {
      const trips = await Trip.create({
        route
      });
      res.status(201).json(trips);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });


router.put('/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    const { route } = req.body;
    try {
      const trips = await Trip.findByPk(id);
      if (!trips) {
        res.status(404).json({ message: 'Trip not found' });
      } else {
        await trips.update({
            route
        });
        res.json(trips);
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });

  

router.delete('/:id', async (req: Request, res: Response) => {
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