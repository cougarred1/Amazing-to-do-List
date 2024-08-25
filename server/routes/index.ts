//this includes the express framework 
//use const to declare a variable, named 'express'
//that stores the functionality provided by the express framework
//require is used to include modules that are external to the file we called it in
//modules are pieces of code that are split into different files to be used in other parts of a application
//making it easy for recycling code and staying organized
const express = require('express');
import { createTask } from './listController.ts';
const router = express.Router()

router.route(`/tasks`).post(listController.createTask)

