import express, { Request, Response } from 'express';
import Shipment from "../Models/shipments";

const router = express.Router();




//create Shipment
router.get('/', async (req: Request, res: Response) => {
    try {
        const shipments = await Shipment.findAll();
        res.json(shipments);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
      }
  });


// get shipment by ID

router.get('/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const shipment = await Shipment.findByPk(id);
      if (!shipment) {
        res.status(404).json({ message: 'Shipment not found' });
      } else {
        res.json(shipment);
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });


router.post('/', async (req: Request, res: Response) => {
    const {  sender, phone1, phone2, destination,value } = req.body;
    try {
      const shipment = await Shipment.create({
        sender, phone1, phone2, destination,value
      });
      res.status(201).json(shipment);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });


router.put('/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    const {  sender, phone1, phone2, destination,value } = req.body;
    try {
      const shipment = await Shipment.findByPk(id);
      if (!shipment) {
        res.status(404).json({ message: 'Shipment not found' });
      } else {
        await shipment.update({
            sender, phone1, phone2, destination,value
        });
        res.json(shipment);
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });


router.delete('/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const shipments = await Shipment.findByPk(id);
      if (!shipments) {
        res.status(404).json({ message: 'Shipment not found' });
      } else {
        await shipments.destroy();
        res.sendStatus(204);
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });




export default router;