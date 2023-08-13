import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { capitalizeFN } from "../../utils/functions";
import { useEffect } from "react";
import { getTypes, switchNavBar } from "../../Redux/actions";
import axios from "axios";
import { ENDPOINT } from "../../utils/actionsConstant";
import Flecha from '../../utils/assets/Flecha.png'
import { Link } from "react-router-dom";
import style from "./Form.module.css"


function Form() {
    const dispatch = useDispatch();
    const types = useSelector(state=>state.types)
    
    dispatch(switchNavBar(false))

    useEffect(() => {
        dispatch(getTypes());
        return () => {
            dispatch(switchNavBar(true))
        }
    },[dispatch])
    
  

    const [form, setForm] = useState({
        Nombre:'',
        Imagen:"https://upload.wikimedia.org/wikipedia/commons/6/62/MissingNo.png",
        Vida:'',
        Ataque:'',
        Defensa:'',
        Velocidad:'',
        Altura:'',
        Peso:'',
        Tipo:''
    });

    const [errors, setErrors] = useState({
        Nombre:'',
        Imagen:'',
        Vida:'',
        Ataque:'',
        Defensa:'',
        Velocidad:'',
        Altura:'',
        Peso:'',
        Tipo:''
    })
    
    const typeHandler = (event) => {
        
        setForm({...form, Tipo:[...form.Tipo, event.target.value]})
        console.log(form.Tipo)
    }

    const changeHandler = (event) => {
        const nombre = event.target.name;
        const valor = event.target.value;

        validate({...form,[nombre]:valor});
        setForm({...form,[nombre]:valor});
    }

    const submitHandler = (event) => {
        axios.post(`${ENDPOINT}/pokemons`, form)
        .then(res=>res, alert('Se guardó Tu Pokémon en la PC de alguien'))
        .catch(err=>alert(err))
    }

    const validate = (form) =>{
        console.log(form.Imagen)
        if(form.Imagen === "") setForm({...form, Imagen:"https://upload.wikimedia.org/wikipedia/commons/6/62/MissingNo.png"})
        // if(form.Nombre.length < 1) setErrors({...errors, Nombre:'Este campo es obligatorio'})
        // if(form.Vida.length < 1) setErrors({...errors, Vida:'Este campo es obligatorio'})
        // if(form.Ataque.length < 1) setErrors({...errors, Ataque:'Este campo es obligatorio'})
        // if(form.Defensa.length < 1) setErrors({...errors, Defensa:'Este campo es obligatorio'})

        // pasarlo a switch
    }

    
    return (
        
        <div>
            <Link to={'/home'}>
                <img className={style.flecha} src={Flecha} alt='Go Back'/>
            </Link>
            <form onSubmit={submitHandler}>
                <div>
                    <label>Nombre:</label>
                    <input type="text" value={form.Nombre}  onChange={changeHandler} name="Nombre"></input>
                    {errors.Nombre && <span>{errors.Nombre}</span>}
                </div>
                <div>
                    <label>Imagen:</label>
                    <input type="text" value={form.Imagen}  onChange={changeHandler} name="Imagen"></input>
                    {errors.Imagen && <span>{errors.Imagen}</span>}
                </div>
                <div>
                    <label>Vida:</label>
                    <input type="text" value={form.Vida}  onChange={changeHandler} name="Vida"></input>
                    {errors.Vida && <span>{errors.Vida}</span>}
                </div>
                <div>
                    <label>Ataque:</label>
                    <input type="text" value={form.Ataque}  onChange={changeHandler} name="Ataque"></input>
                    {errors.Ataque && <span>{errors.Ataque}</span>}
                </div>
                <div>
                    <label>Defensa:</label>
                    <input type="text" value={form.Defensa}  onChange={changeHandler} name="Defensa"></input>
                    {errors.Defensa && <span>{errors.Defensa}</span>}
                </div>
                <div>
                    <label>Velocidad:</label>
                    <input type="text" value={form.Velocidad}  onChange={changeHandler} name="Velocidad"></input>
                    {errors.Velocidad && <span>{errors.Velocidad}</span>}
                </div>
                <div>
                    <label>Altura:</label>
                    <input type="text" value={form.Altura}  onChange={changeHandler} name="Altura"></input>
                    {errors.Altura && <span>{errors.Altura}</span>}
                </div>
                <div>
                    <label>Peso:</label>
                    <input type="text" value={form.Peso}  onChange={changeHandler} name="Peso"></input>
                    {errors.Peso && <span>{errors.Peso}</span>}
                </div>
                <div>
                <span>Tipo 1:</span>
                <select defaultValue={'DEFAULT'}  onChange={typeHandler}>
                <option value='DEFAULT' selected disabled>Tipo 1:</option>
                {
                    types?.map((type) => {
                        const nombre = capitalizeFN(type.Nombre)
                        return(
                            <option value={type.Nombre} key={type.ID}>
                                {nombre}
                            </option>
                        )
                    })
                }
            </select>
                </div>
                <div>
                <span>Tipo 2:</span>
                <select defaultValue={'DEFAULT'}  onChange={typeHandler}>
                <option value='DEFAULT' selected disabled>Tipo 2:</option>
                {
                    types?.map((type) => {
                        const nombre = capitalizeFN(type.Nombre)
                        return(
                            <option value={type.Nombre} key={type.ID}>
                                {nombre}
                            </option>
                        )
                    })
                }
            </select>
                </div>

                <button type="submit">Guardar Pokémon</button>
            </form>
        </div>
    )
}

export default Form;