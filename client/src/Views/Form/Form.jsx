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
import formBG from '../../utils/assets/BulbaForm.jpg'
import pokeLogo from '../../utils/assets/pokelogoForm.png'


function Form() {
    const dispatch = useDispatch();
    const types = useSelector(state=>state.types)
    


    useEffect(() => {
        dispatch(switchNavBar(false))
        dispatch(getTypes());
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
            <img className={style.formBG} src={formBG} alt='BG Form'/>
            <form className={style.form} onSubmit={submitHandler}>
            <img className={style.pokeLogo} src={pokeLogo} alt='PokeLogo'/>
                <div>
                    <input className={style.input} type="text" placeholder="Nombre:" value={form.Nombre}  onChange={changeHandler} name="Nombre"></input>
                    <span className={style.highlight}></span>
                    <span className={style.bar}></span>
                    {errors.Nombre && <span>{errors.Nombre}</span>}
                </div>
                <div>
                    <input className={style.input} type="text" placeholder="Imagen:" value={form.Imagen}  onChange={changeHandler} name="Imagen"></input>
                    <span className={style.highlight}></span>
                    <span className={style.bar}></span>
                    {errors.Imagen && <span>{errors.Imagen}</span>}
                </div>
                <div>
                    <input className={style.input} type="text" placeholder="Vida:" value={form.Vida}  onChange={changeHandler} name="Vida"></input>
                    <span className={style.highlight}></span>
                    <span className={style.bar}></span>
                    {errors.Vida && <span>{errors.Vida}</span>}
                </div>
                <div>
                    <input className={style.input} type="text" placeholder="Ataque:" value={form.Ataque}  onChange={changeHandler} name="Ataque"></input>
                    <span className={style.highlight}></span>
                    <span className={style.bar}></span>
                    {errors.Ataque && <span>{errors.Ataque}</span>}
                </div>
                <div>
                    <input className={style.input} type="text" placeholder="Defensa:" value={form.Defensa}  onChange={changeHandler} name="Defensa"></input>
                    <span className={style.highlight}></span>
                    <span className={style.bar}></span>
                    {errors.Defensa && <span>{errors.Defensa}</span>}
                </div>
                <div>
                    <input className={style.input} type="text"  placeholder="Velocidad:"value={form.Velocidad}  onChange={changeHandler} name="Velocidad"></input>
                    <span className={style.highlight}></span>
                    <span className={style.bar}></span>
                    {errors.Velocidad && <span>{errors.Velocidad}</span>}
                </div>
                <div>
                    <input className={style.input} type="text" placeholder="Altura:" value={form.Altura}  onChange={changeHandler} name="Altura"></input>
                    <span className={style.highlight}></span>
                    <span className={style.bar}></span>
                    {errors.Altura && <span>{errors.Altura}</span>}
                </div>
                <div>
                    <input className={style.input} type="text" placeholder="Peso:" value={form.Peso}  onChange={changeHandler} name="Peso"></input>
                    <span className={style.highlight}></span>
                    <span className={style.bar}></span>
                    {errors.Peso && <span>{errors.Peso}</span>}
                </div>
                <div>
                <select className={style.select} defaultValue={'DEFAULT'}  onChange={typeHandler}>
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
                <select className={style.select} defaultValue={'DEFAULT'}  onChange={typeHandler}>
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

                <button className={style.savePkm} type="submit">Guardar Pokémon</button>
            </form>
        </div>
    )
}

export default Form;