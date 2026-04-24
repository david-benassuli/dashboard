'use client'

import { useState } from "react"

import type { PriorityType, StatusType, TaskType } from "../context/TasksContext"
import { useTask } from "../hooks/UseTask"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck, faTrash } from "@fortawesome/free-solid-svg-icons"

type Props = {
    task: TaskType,
    setEditingTaskId: React.Dispatch<React.SetStateAction<string | null>>
}

export function EditTaskRow(props: Props) {
    
    const {dispatchTasks} = useTask()

    function handleEditTask() {
        dispatchTasks({
            type: 'UPDATE_TASK',
            payload: {
                id: props.task.id,
                name: editTask,
                status: editStatus,
                priority: editPriority
            }
        })            

        props.setEditingTaskId(null)
    }

    function handleRemoveTask() {
        dispatchTasks({
            type: 'REMOVE_TASK',
            payload: props.task.id
        })
    }

    const [editTask, setEditTask] = useState(props.task.name)
    const [editStatus, setEditStatus] = useState(props.task.status)
    const [editPriority, setEditPriority] = useState(props.task.priority)

    return (
        <tr key={props.task.id}>
            <td>
                <input value={editTask} type="text" placeholder="Fazer compras..."
                    onChange={(e) => setEditTask(e.target.value)}
                />
            </td>

            <td>
                <select value={editStatus} name="" id="" onChange={(e) => setEditStatus(e.target.value as StatusType)}>
                    <option id="todo" value="A Fazer">A Fazer</option>
                    <option id="progress" value="Em Progresso">Em Progresso</option>
                    <option id="completed" value="Concluída">Concluída</option>
                </select>
            </td>

            <td>
                <select value={editPriority} name="" id="" onChange={(e) => setEditPriority(e.target.value as PriorityType)}>
                    <option id="low" value="Baixa">Baixa</option>
                    <option id="medium" value="Média">Média</option>
                    <option id="high" value="Alta">Alta</option>
                </select>
            </td>

            <td>
                <button id="btn-edit-confirm"
                    onClick={handleEditTask}
                    type="button"><FontAwesomeIcon icon={faCheck} /></button>
                <button id="btn-edit-remove"
                    onClick={handleRemoveTask}
                type="button"><FontAwesomeIcon icon={faTrash} /></button>
            </td>
        </tr>
    )
}