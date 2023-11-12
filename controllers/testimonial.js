import { Testimonial } from "../models/Testimoniales.js";
const guardarTestimonial = async (req,res) =>{

    // validar datos del formulario 
    const {nombre,correo,mensaje} = req.body;
    const errores = [];

    if(nombre.trim() === ''){
        errores.push({mensaje: 'El nombre se encentra vacio'});
    }
    if(correo.trim() === ''){
        errores.push({mensaje: 'El correro se encentra vacio'});
    }
    if(mensaje.trim() === ''){
        errores.push({mensaje: 'El mensaje se encentra vacio'});
    }


    if(errores.length > 0){

        // consulta los testimoniales existentes en la base de Datos 
        const testimoniales = await Testimonial.findAll();

        // Mostrar los errores en la vista 
        res.render('testimoniales',{
            pagina: 'Testimoniales',
            errores,
            nombre,
            correo,
            mensaje,
            testimoniales

        })

        console.log(errores);
    }else{
        // Guardar los datos en la base de datos
        try {
            await Testimonial.create({
                nombre,
                correo,
                mensaje
            });
            res.redirect('/testimoniales');
        } catch (error) {
            console.log(error);
        }

    }

}


export {
    guardarTestimonial
}