import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { IconDefinition } from "@fortawesome/fontawesome-svg-core"

type CardProps = {
    title: string,
    count: number,
    icon: IconDefinition,
    id: string
}

export function Card(props: CardProps) {
    return (
        <div className="card">
            <FontAwesomeIcon id={props.id} className="icon-card" icon={props.icon}/>
            <div className="desc">
                <h2>{props.title}</h2>
                <p>{props.count}</p>
            </div>
        </div>
    )
}