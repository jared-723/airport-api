import {Router} from 'express';

import {
    findAllPassengers,
    createPassenger,
    findOnePassenger,
    updateOnePassenger,
    deletePassenger
} from './passenger.controller.js'

export const router = Router();

//Init features



//Rutas

//endpoint 1: obtener todos los pasajeros
router.get("/passengers", findAllPassengers);

//endpoint 2: crear un pasajero
router.post("/passengers", createPassenger);

//endpoint 3 : obtener un pasajero por id
router.get("/passengers/:id", findOnePassenger);

//endpoint 4: actualizar informacion de un pasajero
router.patch("passengers/:id", updateOnePassenger);

//endpoint 5: eliminar la informacion de un pasajero
router.delete("passengers/:id", deletePassenger);

//end features


