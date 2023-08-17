import { useState } from "react"

function Form(props){
    console.log(props);
    const [nombre, setNombre] = useState('')
    const [color, setColor] = useState('')
    const [mensaje, setMensaje] = useState('')


    function laValidacion(event){
        event.preventDefault()
         if (nombre.length <= 3 && color.length < 6) {
            setMensaje('Por favor chequea que la información sea correcta')
            //console.log('todo bien');
            //props.onNombre(nombre)
            //setMensaje('')
        }else{
            //console.log('Por favor chequea que la información sea correcta');
            //setMensaje('Por favor chequea que la información sea correcta')
            console.log('todo bien');
            
         }
            
         
    }

    return(

        <form onSubmit={laValidacion}>
            <label htmlFor="nombre">Nombre</label>
            <input type="text" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
            <label htmlFor="color">Codigo de Color Hexadecimal</label>
            <input type="text" id="color" />

            {mensaje ? <div>{mensaje}</div> : null}
         
            <button type="submit">Submit</button>
        </form>

    )
}
export default Form