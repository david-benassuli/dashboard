import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

export function Title() {
    return (
        <div id='title'>
            <FontAwesomeIcon className='icon' id="icon-dash" icon={faBookmark}/> 
            <h1>Dashboard</h1>
        </div>
    )
}