import { statusClassMap, type TaskType } from "../context/TasksContext"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPen } from "@fortawesome/free-solid-svg-icons"

type Props = {
    task: TaskType,
    setEditingTaskId: React.Dispatch<React.SetStateAction<string | null>>
}

export function TaskRow(props: Props) {
    return (
        <tr>
            <td>{props.task.name}</td>
            <td className={statusClassMap[props.task.status]}><p>{props.task.status}</p></td>
            <td>{props.task.priority}</td>
            <td id="edit"><button id="btn-edit" type="button"><FontAwesomeIcon icon={faPen} 
                onClick={() => {
                    props.setEditingTaskId(props.task.id)
                }}
            /></button></td>
        </tr>
    )
}