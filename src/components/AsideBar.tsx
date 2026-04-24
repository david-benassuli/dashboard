'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faTableCells } from '@fortawesome/free-solid-svg-icons'
import { faTableColumns } from "@fortawesome/free-solid-svg-icons"
import { faUsers } from "@fortawesome/free-solid-svg-icons"
import { faChartColumn } from "@fortawesome/free-solid-svg-icons"
import { faSun } from '@fortawesome/free-solid-svg-icons'
import { faMoon } from '@fortawesome/free-solid-svg-icons'
import { useTheme } from '../hooks/UseTheme'

export function AsideBar() {

    const {theme, toggleTheme} = useTheme()

    return (
        <aside>
            <menu>
                <ul>
                    <li id="active"><FontAwesomeIcon icon={faHome} className='icon' /> Dashboard</li>
                    <li><FontAwesomeIcon icon={faTableCells} className='icon'/> Projetos</li>
                    <li><FontAwesomeIcon icon={faTableColumns} className='icon'/> Tarefas</li>
                    <li><FontAwesomeIcon icon={faUsers} className='icon'/> Equipe</li>
                    <li><FontAwesomeIcon icon={faChartColumn} className='icon'/> Relatórios</li>
                </ul>
            </menu>
            <button
                onClick={toggleTheme}
            ><FontAwesomeIcon id={theme === 'light' ? 'sun' : 'moon'}
             icon={theme === 'light' ? faSun : faMoon} className='icon'/> Tema</button>
        </aside>
    )
}