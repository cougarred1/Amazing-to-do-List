import express from "express";
import { createServer as createViteServer } from "vite";
//this is the server, the entrypoint of the entire application
import axios from 'axios';

async function createServer() {
  const app = express();

  // Create Vite server in middleware mode
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: "spa", // don't include Vite's default HTML handling middlewares
  });

  //set up a POST server route that will be used to create a task
  app.post("/tasks", (req, res) => {
    //deconstruct the task from the req.body, because it's what will be sent inside the req object  
    const { task } = req.body;

    res.status(201).json({ message: "Task successfully added!", task })
  })

  app.get("/tasks", (req, res) => {

    const { task } = req.body;

    res.status(200).json({ message: "Task successfully retrieved!", task})
  })

  
  // user defined routes first.
  app.get("/api/test", (_, res) => {
    return res.end("OK");
  });
  // Use vite's connect instance as middleware
  app.use(vite.middlewares);
  app.listen(3000, () => {
    console.log(`http://localhost:3000`);
  });
}

createServer();
