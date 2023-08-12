import style from './Pokemon.module.css'
import { Link } from 'react-router-dom';
import { capitalizeFN } from '../../utils/functions';


const Pokemon = (props) => {
    const capitalize = capitalizeFN(props.Nombre);

    return(
        <div className={style.container}>
            <p>{capitalize}</p>
            <Link to={`/detail/${props.ID}`}>
            <img src={props.Imagen} alt='foto Pokemon'/>
            </Link>
        </div>
    );
}

export default Pokemon;