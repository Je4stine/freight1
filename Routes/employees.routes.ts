import express, { Request, Response } from 'express';
import Employee from "../Models/employees";

const router = express.Router();


//create employee
router.get('/employees', async (req: Request, res: Response) => {
    try {
        const employees = await Employee.findAll();
        res.json(employees);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
      }
  });



router.get('/employees/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const employee = await Employee.findByPk(id);
      if (!employee) {
        res.status(404).json({ message: 'Employee not found' });
      } else {
        res.json(employee);
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });

router.post('/employees', async (req: Request, res: Response) => {
    const { name, surname, seniority, category, specialization } = req.body;
    try {
      const employee = await Employee.create({
        name,
        surname,
        seniority,
        category,
        specialization,
      });
      res.status(201).json(employee);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });


router.put('/employees/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name, surname, seniority, category, specialization } = req.body;
    try {
      const employee = await Employee.findByPk(id);
      if (!employee) {
        res.status(404).json({ message: 'Employee not found' });
      } else {
        await employee.update({
          name,
          surname,
          seniority,
          category,
          specialization,
        });
        res.json(employee);
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });


router.delete('/employees/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const employee = await Employee.findByPk(id);
      if (!employee) {
        res.status(404).json({ message: 'Employee not found' });
      } else {
        await employee.destroy();
        res.sendStatus(204);
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });




export default router;