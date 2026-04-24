'use client'

import { createContext, Dispatch, ReactNode, RefObject, useReducer, useRef, useState } from "react";

export type StatusType = 'A Fazer' | 'Em Progresso' | 'Concluída'
export type PriorityType = 'Alta' | 'Média' | 'Baixa'

export const statusClassMap: Record<StatusType, string> = {
  'A Fazer': 'todo',
  'Em Progresso': 'progress',
  'Concluída': 'completed',
}

export type TaskType = {
    id: string
    name: string
    status: StatusType
    priority: PriorityType
}

 type TaskActionType =
  | { type: 'ADD_TASK'; payload: TaskType }
  | { type: 'REMOVE_TASK'; payload: string }
  | { type: 'UPDATE_TASK'; payload: TaskType }

type TasksContextType = {
    // Task List Type
    tasks: TaskType[]
    dispatchTasks: Dispatch<TaskActionType>

    // New Task Type
    showFormTask: boolean
    setShowFormTask: React.Dispatch<boolean>,
    inputRef: RefObject<HTMLInputElement | null>

    search: string,
    setSearch: React.Dispatch<string>,
}

type Props = {
    children: ReactNode
}

function reducerList(state: TaskType[], action: TaskActionType) {
    switch(action.type) {
        case 'ADD_TASK':
            return [...state, action.payload]
        case 'REMOVE_TASK':
            return state.filter(task => task.id !== action.payload)
        case 'UPDATE_TASK':
            return state.map(task => task.id === action.payload.id ? action.payload : task) 
        default: 
            return state
    }
}

export const TasksContext = createContext<TasksContextType | null>(null)

export function TasksProvider({children}: Props) {

    // Task List
    const [tasks, dispatchTasks] = useReducer(reducerList, [])

    // New Task
    const [showFormTask, setShowFormTask] = useState(false)
    const inputRef = useRef<HTMLInputElement | null>(null)

    // Search
    const [search, setSearch] = useState("")


    return (
        <TasksContext.Provider value={{
            // Task List Parameters
            tasks, dispatchTasks,

            // New Task Parameters
            showFormTask, setShowFormTask,
            inputRef,

            // Search
            search, setSearch

            }}> 
            {children}
        </TasksContext.Provider>
    )
}