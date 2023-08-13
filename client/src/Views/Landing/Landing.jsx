import { Link } from "react-router-dom";
import style from './Landing.module.css'
import oak from '../../utils/assets/ProfesorOak.png'
import texBox from '../../utils/assets/texBox.png'
import pokeLogo from '../../utils/assets/logo.png'


function Landing() {
    
    return (
        <div className={style.contenedor}>
            <img className={style.logo} src={pokeLogo} alt="Pokémon logo"/>
            <Link to={'/home'}>
            <p className={style.si} style={{ textDecoration: 'none', color: 'black' }}>Si!</p>
            </Link>
            <p className={style.text}>¿Deseas comenzar tu aventura Pokémon?</p>
            <img className={style.oak} src={oak} alt="Profesor Oak"/>
            <img className={style.texBox} src={texBox} alt="Text Box"/>
            <img className={style.texBoxSi} src={texBox} alt="Text Box"/>
         
        </div>
    )
}

export default Landing;