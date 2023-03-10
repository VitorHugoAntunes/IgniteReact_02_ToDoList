import todoLogo from '../../assets/todoLogo.svg';
import {AiOutlinePlusCircle} from 'react-icons/ai';

import styles from './header.module.css';
import { ChangeEvent, FormEvent, useState } from 'react';
interface Props {
    onAddTask: (taskTitle: string) => void;
}

export function Header({onAddTask}: Props){
    const [title, setTitle] = useState("");

    function handleSubmit(event: FormEvent){
        event.preventDefault();

        onAddTask(title);
        setTitle("");
    }

    function onChangeTitle(event: ChangeEvent<HTMLInputElement>){
        event.target.setCustomValidity('');
        setTitle(event.target.value);
    }

    function handleNewCommentInvalid(event: ChangeEvent<HTMLInputElement>){
        event.target.setCustomValidity('Este campo é obrigatório.');
    }

    return(
        <header className={styles.header}>
            <img src={todoLogo} alt="ToDo Logo image" />

            <form className={styles.newTaskForm} onSubmit={handleSubmit}>
                <input 
                    placeholder='Adicione uma nova tarefa' 
                    type="text"
                    onChange={onChangeTitle}
                    value={title} 
                    onInvalid={handleNewCommentInvalid}
                    required
                />
                <button>
                    Criar
                    <AiOutlinePlusCircle size={20} />
                </button>
            </form>
        </header>
    )
}