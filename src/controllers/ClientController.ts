import { Request, Response } from 'express';
import Client from "../models/Client";

class ClientController {

    public async index(req: Request, res: Response) {

        Client.find((err: any, clients) => {        
            if(err) res.status(500).send("Error");
            res.status(200).send(clients);    
        });

    }   

}

const clientController = new ClientController();
export default clientController;