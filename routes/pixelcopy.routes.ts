import { Router } from "express";

import { getPixelArts, getRandomPixelArts, postPixelArt } from "../controllers/pixelcopy.controller";


const pixelCopyRoute = Router();

pixelCopyRoute.get('/',         getPixelArts);
pixelCopyRoute.get('/random',   getRandomPixelArts)
pixelCopyRoute.post('/',        postPixelArt);


export default pixelCopyRoute;