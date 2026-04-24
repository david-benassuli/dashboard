'use client'

import { useTask } from "../hooks/UseTask"
import { PriorityType, StatusType } from "../context/TasksContext"
import { useState } from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBan, faCheck } from "@fortawesome/free-solid-svg-icons"


export function FormTask() {
    
    const [newTask, setNewTask] = useState("")
    const [status, setStatus] = useState<StatusType>("A Fazer")
    const [priority, setPriority] = useState<PriorityType>("Baixa")
    
    const {dispatchTasks, inputRef, setShowFormTask} = useTask()
    
    function handleAddTask() {
        if (newTask.trim()) {
            dispatchTasks({
                type: 'ADD_TASK',
                payload: {
                    id: crypto.randomUUID(),
                    name: newTask,
                    status,
                    priority
                }   
            })
        }
        else window.alert('Por favor, digite a tarefa')
    }
    
    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
      e.preventDefault()
      handleAddTask()  
    }

    return (
        <form
            onSubmit={handleSubmit}
        id="form-task">
            <input ref={inputRef} type="text" placeholder="Fazer compras..."
                onChange={(e) => setNewTask(e.target.value)}
            />

            <select name="" id="" onChange={(e) => setStatus(e.target.value as StatusType)}>
                <option id="todo" value="A Fazer">A Fazer</option>
                <option id="progress" value="Em Progresso">Em Progresso</option>
                <option id="completed" value="Concluída">Concluída</option>
            </select>

            <select name="" id="" onChange={(e) => setPriority(e.target.value as PriorityType)}>
                <option id="low" value="Baixa">Baixa</option>
                <option id="medium" value="Média">Média</option>
                <option id="high" value="Alta">Alta</option>
            </select>

            <button id="confirm"
                onClick={() => handleAddTask()}
             type="button"><FontAwesomeIcon icon={faCheck} /></button>

            <button id="cancel"
                onClick={() => setShowFormTask(false)} 
            type="button"><FontAwesomeIcon icon={faBan} /></button>
        </form>
    )
}   