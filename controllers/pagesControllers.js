import { Viaje } from "../models/Viaje.js";
import { Testimonial } from "../models/Testimoniales.js";

const paginaInicio = async (req,res)=>{// request es lo que enviamos al servidor, mientras que res es lo que el servidor nos responde. 

    // consultar 3 viajes del modelo de viajes 
    const promiseDb = [];
    promiseDb.push(Viaje.findAll({limit: 3}));
    promiseDb.push(Testimonial.findAll({limit: 3}));

    try {

        const restult = await Promise.all(promiseDb);



        res.render('inicio',{
            pagina: 'Inicio',
            clase: 'home',
            viajes: restult[0],
            testimoniales: restult[1]
        });

        
    } catch (error) {
        console.log(error);
    }
}

const paginaNosotros = (req,res)=>{// request es lo que enviamos al servidor, mientras que res es lo que el servidor nos responde. 

    res.render('vistas',{
        pagina: 'Nosotros'
    })
}

const paginaTetimoniales = async (req,res)=>{// request es lo que enviamos al servidor, mientras que res es lo que el servidor nos responde. 

    try {
        const testimoniales = await Testimonial.findAll();

        res.render('testimoniales',{
            pagina: 'Testimoniales',
            testimoniales
        })
        
    } catch (error) {
        console.log(error);
    }
}

const paginaViajes = async (req,res)=>{// request es lo que enviamos al servidor, mientras que res es lo que el servidor nos responde. 

    // Consulta hacia la base de datos 
    const viajes = await Viaje.findAll();

    console.log(viajes);

    res.render('viajes',{
        pagina: 'Próximos Viajes',
        viajes
    })
}

// Viajes por su slug 
const paginaDetalleViaje = async (req,res) =>{
    console.log(req.params);
    const {slug} = req.params;
    try {
        const viaje = await Viaje.findOne({where: {slug}});
        res.render('dViajes',{
            pagina: 'Información Viaje',
            viaje
        })
        
    } catch (error) {
        console.log(error);
    }
}

export {
    paginaInicio,
    paginaNosotros,
    paginaTetimoniales, 
    paginaViajes,
    paginaDetalleViaje
}