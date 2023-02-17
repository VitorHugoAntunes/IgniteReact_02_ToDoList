import styles from './task.module.css';
import {TbTrash} from 'react-icons/tb';
import { ITask } from '../../App';
import {BsFillCheckCircleFill} from 'react-icons/bs';
import toast, { Toaster } from 'react-hot-toast';

interface Props {
    task: ITask;
    onDelete: (taskId: string) => void;
    onComplete: (taskId: string) => void;
}

export function Task({task, onDelete, onComplete}: Props){
    const completeNotification = () => toast.success('Tarefa concluída com sucesso');

    function completeTask() {
        onComplete(task.id);

        if(task.isCompleted === false) {
            completeNotification();
        }
        
    }

    function deleteTask(){
        onDelete(task.id);
    }

    return (
        <div className={styles.task}>
            <button 
                className={styles.checkContainer} 
                onClick={completeTask}
            >
               {task.isCompleted ? <BsFillCheckCircleFill /> : <div />}
            </button>
            <p className={task.isCompleted ? styles.textCompleted : ""}>
                {task.title}
            </p>
            <button className={styles.deleteButton} onClick={deleteTask}>
                <TbTrash size={20}/>
            </button>
            <Toaster position="top-right" />
            
        </div>
    )
}