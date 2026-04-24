'use client'

import { useTask } from "../hooks/UseTask"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"

import { FormTask } from "./FormTask"

import { PriorityType, StatusType, TaskType } from "../context/TasksContext"
import { useEffect, useState } from "react"
import { EditTaskRow } from "./EditTaskRow"
import { TaskRow } from "./TaskRow"

type FilterTasksType = {
    status: StatusType | 'Todas',
    priority: PriorityType | 'Todas'
}

function loadRows(
  tasks: TaskType[],
  setEditingTaskId: React.Dispatch<React.SetStateAction<string | null>>,
  editingTaskId: string | null,
  search: string
) {
    
    const normalizedSearch = search.trim().toLowerCase()

    return tasks
        .filter(task => {
            if (!normalizedSearch) return true
                
            return task.name.toLowerCase().includes(normalizedSearch)
            
        })
        .map(task => 
            editingTaskId === task.id ? <EditTaskRow key={task.id} task={task} setEditingTaskId={setEditingTaskId} /> : 
                <TaskRow key={task.id} task={task} setEditingTaskId={setEditingTaskId}/>
            
        )
}

// function filterTasks(filter: FilterTasksType, tasks: TaskType[]) {
//     return tasks.filter(task => {
//         const statusMatch =
//             filter.status === 'Todas' || task.status === filter.status

//         const priorityMatch =
//             filter.priority === 'Todas' || task.priority === filter.priority

//         return statusMatch && priorityMatch
//     })
// }

function filterTasks(filter: FilterTasksType, tasks: TaskType[]) {
    return tasks
        .filter(task => {
            return filter.status === 'Todas' || task.status === filter.status
        })
        .filter(task => {
            return filter.priority === 'Todas' || task.priority === filter.priority
        })
}

export function Tasks() {

    const handlePlus = () => {
        setShowFormTask(true)
        setTimeout(() => {
            inputRef.current?.focus()
        }, 0)
    }

    const {tasks, showFormTask, setShowFormTask, inputRef, search} = useTask()

    const [editingTaskId, setEditingTaskId] = useState<string | null>(null)
    const [filter, setFilter] = useState<FilterTasksType>({
        status: 'Todas',
        priority: 'Todas'
    })

    useEffect(() => {
        if (showFormTask) {
            inputRef.current?.focus()
        }
    }, [showFormTask])

    return (
        <div id="tasks">
            <header>
                <h2>Lista de Tarefas</h2>
                <div id="buttons">
                    <button
                        onClick={() => handlePlus()}
                    ><FontAwesomeIcon icon={faPlus}/></button>
                </div>
            </header>

            {showFormTask && <FormTask/>}

            <div id="filter">
                <div>
                    <button className={filter.status === 'Todas' ? 'btn-filter-active' : undefined}
                    onClick={() => setFilter(prev => ({ ...prev, status: 'Todas' }))}>Todas</button>

                    <button className={filter.status === 'A Fazer' ? 'btn-filter-active' : undefined}
                    onClick={() => setFilter(prev => ({ ...prev, status: 'A Fazer' }))}>A Fazer</button>

                    <button className={filter.status === 'Em Progresso' ? 'btn-filter-active' : undefined}
                    onClick={() => setFilter(prev => ({ ...prev, status: 'Em Progresso' }))}>Em Progresso</button>

                    <button className={filter.status === 'Concluída' ? 'btn-filter-active' : undefined}
                    onClick={() => setFilter(prev => ({ ...prev, status: 'Concluída' }))}>Concluída</button>

                </div>
                
                <div>
                    <button className={filter.priority === 'Todas' ? 'btn-filter-active' : undefined}
                    onClick={() => setFilter(prev => ({ ...prev, priority: 'Todas' }))}>Todas</button>

                    <button className={filter.priority === 'Alta' ? 'btn-filter-active' : undefined}
                    onClick={() => setFilter(prev => ({ ...prev, priority: 'Alta' }))}>Alta</button>

                    <button className={filter.priority === 'Média' ? 'btn-filter-active' : undefined}
                    onClick={() => setFilter(prev => ({ ...prev, priority: 'Média' }))}>Média</button>

                    <button className={filter.priority === 'Baixa' ? 'btn-filter-active' : undefined}
                    onClick={() => setFilter(prev => ({ ...prev, priority: 'Baixa' }))}>Baixa</button>

                </div>
            </div>

            <table id="list">
                <thead>
                    <tr>
                        <th>Tarefa</th>
                        <th>Status</th>
                        <th>Prioridade</th>
                    </tr>
                </thead>
                <tbody>
                    {loadRows(filterTasks(filter, tasks), setEditingTaskId, editingTaskId, search)}
                </tbody>
            </table>
        </div>
    )
}