'use client'

import { useContext } from "react";
import { TasksContext } from "../context/TasksContext";

export function useTask() {
    const context = useContext(TasksContext)

    if (!context) {
        throw new Error('Dados devem estar no provider')
    }

    return context
}