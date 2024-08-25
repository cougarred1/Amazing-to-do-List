//we will need to have a request and response
import { Request, Response } from 'express';

//create the object that will behave as the storage for all methods controlling the To-Do-List
const listHandler = {

  createTask(req: Request, res: Response) {
    const reponse = await fetch("/tasks", {
      method: "POST",
      body: JSON.stringify({})
    })
  },

  editTask(req: Request, res: Response) {

  },

  deleteTask(req: Request, res: Response) {

  }
}