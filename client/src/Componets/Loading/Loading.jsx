import style from "./Loading.module.css"
import { switchNavBar } from "../../Redux/actions"
import { useEffect } from "react"
import { useDispatch } from "react-redux"

export default function Loading () {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(switchNavBar(false));
        return () => {
            dispatch(switchNavBar(true))
        }
    },[dispatch])
    
    return (
        <div className={style.loading}>
            <div>
                <img src="https://media.tenor.com/e6J4X97EZkIAAAAi/ash-now.gif" alt="Cargando"/>
            </div>
        </div>
    )
}