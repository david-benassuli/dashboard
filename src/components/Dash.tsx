'use client'

import { Card } from "./Card"
import { Tasks } from "./Tasks"

import { faLock } from "@fortawesome/free-solid-svg-icons"
import { faListCheck } from "@fortawesome/free-solid-svg-icons"
import { faCheck } from "@fortawesome/free-solid-svg-icons"
import { faClock } from "@fortawesome/free-solid-svg-icons"
import { useTask } from "../hooks/UseTask"

import { StatusType } from "../context/TasksContext"

export function Dash() {

    const {tasks} = useTask()

    const stats = tasks.reduce<Record<StatusType, number>>((acc, task) => {
        acc[task.status]++
        return acc
    }, {'A Fazer': 0, 'Em Progresso': 0, 'Concluída': 0})

    const hours = 5

    return (
        <section id="dash">
            <div id="cards">
                <Card id="project" icon={faLock} title="Projetos Ativos" count={stats['A Fazer']}></Card>
                <Card id="todo" icon={faListCheck} title="Tarefas Pendentes" count={stats['Em Progresso']}></Card>
                <Card id="completed" icon={faCheck} title="Projetos Concluídos" count={stats['Concluída']
                }></Card>
                <Card id="hours" icon={faClock} title="Horas Trabalhadas" count={hours}></Card>
            </div>

            <Tasks></Tasks>
        </section>
    )
}