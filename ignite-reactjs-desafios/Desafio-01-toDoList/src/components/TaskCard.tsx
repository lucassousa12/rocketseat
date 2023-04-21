import { useState, BaseSyntheticEvent} from "react"
import styles from "./TaskCard.module.css"

import { Trash, Check } from "@phosphor-icons/react"

export function TaskCard() {

    const [check, setCheck] = useState(false);

    function taskCheckInput(event:BaseSyntheticEvent) {
        setCheck(event.target.checked);
        console.log(check);
        
    }

    return (
        <div className={styles.taskCard}>

            <div className={styles.taskCheck}>
                <label className={ check ? `${styles.taskChecked}` : `${styles.taskNotCheck}`} >
                    <input type="checkbox" id={styles.taskCheckInput} onChange={taskCheckInput}/>
                    <Check />
                </label>
            </div>

            <p className={styles.taskName}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, neque eaque error amet harum voluptatem reiciendis mollitia, natus voluptatibus enim, voluptate accusamus consectetur aliquid quam incidunt maiores veritatis sequi aliquam.
            </p>

            <button className={styles.deleteTask}>
                <Trash size={15}/>
            </button>

        </div>    
    )
}