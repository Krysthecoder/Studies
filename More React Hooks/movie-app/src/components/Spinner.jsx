import { SpinnerRound } from "spinners-react";
import Styles  from "../styles/Spinner.module.css";

export function Spinner(){
    return(
        <div className={Styles.spinnerContainer}>
            <SpinnerRound size={60}/>
        </div>
    )
}