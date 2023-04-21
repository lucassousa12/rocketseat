import styles from "./Tasks.module.css"

import Clipboard from "../assets/Clipboard.svg"
import { TaskCard } from "./TaskCard"

export function Tasks() {
    return (
        <section className={styles.tasks}>

            {/* Sessão dos contadores de Tarefas criadas e Concluidas. */}
            <div className={styles.tasksCounter}>
                <div className={styles.createTasks}>
                    <label>Tarefas criadas</label>
                    <span id={styles.createTasksCounter}>0</span>
                </div>

                <div className={styles.doneTasks}>
                    <label>Concluídas</label>
                    <span className={styles.doneTasksCounter}>0</span>
                </div>
            </div>

            {/* Sessão de mostragem das Tasks Criadas */}
            <div className={styles.TasksViewer}>

                <div className={styles.TasksViewerEmpty}>
                    <img src={Clipboard} alt="Imagem ilustrativa de uma prancheta." />
                    <p>
                        <strong>Você ainda não tem tarefas cadastradas</strong>
                        <br />
                        Crie tarefas e organize seus itens a fazer
                    </p>
                </div>

                <TaskCard />
                <TaskCard />
                <TaskCard />
                <TaskCard />

            </div>
        </section>    
    )
}