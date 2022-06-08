import Item from "./Item";
import style from './Lista.module.scss';
import {ITarefa} from '../../types/tarefa';
import { idText } from "typescript";

interface Props {
    tarefas: ITarefa[],
    selecionaTarefa: (tarefaSelecionada: ITarefa) => void
}


function Lista({ tarefas, selecionaTarefa } :Props) {
    return (
        <aside className={style.listaTarefas}>
            <h2>Estudo do dia</h2>
            <ul>
                {tarefas.map((item, index) => (
                    <Item 
                    selecionaTarefa = {selecionaTarefa}
                    key= {item.id}
                    /*
                    tarefa = {item.terafa}
                    tempo = {item.tempo}
                    ou */
                    {...item}

                    />
                ))}
            </ul>
        </aside>
    )
}

export default Lista;