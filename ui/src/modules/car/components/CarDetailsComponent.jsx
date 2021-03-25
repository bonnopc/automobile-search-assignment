import { useParams } from "react-router"

export default function CarDetailsComponent(props){
    const { uid } = useParams()

    return (
        <div>
            Car Details { uid }
        </div>
    )
}