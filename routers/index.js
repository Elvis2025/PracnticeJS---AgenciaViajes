import express from "express";
import { guardarTestimonial } from "../controllers/testimonial.js";
import { paginaDetalleViaje, paginaInicio,paginaNosotros, paginaTetimoniales, paginaViajes } from "../controllers/pagesControllers.js";

const router = express.Router(); 

router.get('/',paginaInicio);
router.get('/nosotros', paginaNosotros);
router.get('/testimoniales',paginaTetimoniales);
router.get('/viajes',paginaViajes);
router.get('/viajes/:slug',paginaDetalleViaje);

router.post('/testimoniales',guardarTestimonial);

export default router;