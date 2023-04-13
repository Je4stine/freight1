import express, { Express, Request, Response } from 'express';
import bodyParser from 'body-parser';
import employeeRoute from './Routes/employees.routes';
import shipmentRoute from './Routes/shipments.routes';
import trucksRoute from './Routes/trucks.routes';


const app: Express = express();


app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", (req: Request, res: Response) => {
    res.send("<h1>Server running on port 8080</h1>" );
  });


app.use('/api', employeeRoute);

app.use('/api', shipmentRoute);

app.use('/api', trucksRoute);

app.listen(8080, () => {
  console.log('Server listening on port 8080');
});