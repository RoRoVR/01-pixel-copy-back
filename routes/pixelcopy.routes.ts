import { Router } from "express";

import { getPixelArts, postPixelArt } from "../controllers/pixelcopy.controller";


const pixelCopyRoute = Router();

pixelCopyRoute.get('/',     getPixelArts);
pixelCopyRoute.post('/',    postPixelArt);


export default pixelCopyRoute;