'use client'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBell } from "@fortawesome/free-solid-svg-icons"
import { useTask } from "../hooks/UseTask"

export function Header() {

    const {search, setSearch} = useTask()

    return (
        <header id="header-main">
            <input value={search} type="text" placeholder="Buscar..."
                onChange={(e) => {
                    setSearch(e.target.value)
                }}
            />
            <div id="profile">
                <FontAwesomeIcon icon={faBell}/>
                {/* <img src="" alt="Profile" /> */}
            </div>
        </header>
    )
}