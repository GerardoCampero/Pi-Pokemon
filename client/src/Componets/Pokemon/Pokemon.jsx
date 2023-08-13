import style from './Pokemon.module.css'
import { Link } from 'react-router-dom';
import { capitalizeFN } from '../../utils/functions';



const Pokemon = (props) => {
    const capitalize = capitalizeFN(props.Nombre);
    

    return(
        <div className={style.contenedor}>
            <Link to={`/detail/${props.ID}`}>
            <img className={style.pokeImg} src={props.Imagen}  alt='foto Pokemon'/>
            </Link>
            <Link  style={{ textDecoration: 'none', color: 'black' }} to={`/detail/${props.ID}`}>
            <p className={style.nombre}>{capitalize}</p>
            </Link>
        </div>
    );
}

export default Pokemon;