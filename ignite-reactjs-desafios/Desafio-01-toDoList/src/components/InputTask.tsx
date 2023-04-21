import styles from "./InputTask.module.css"
import { PlusCircle } from "@phosphor-icons/react"

export function InputTask() {
    return (
        <form className={styles.form}>
            <input className={styles.inputForm} type="text" placeholder="Adicione uma nova tarefa" />

            <button className={styles.buttonForm}> 
                Criar
                <PlusCircle size={22} />
            </button>
        </form>    
    )
}