import { useEffect } from "react"

export default function HomeComponent(props){
    useEffect(() => {
        getCars()
    }, [])

    const getCars = async () => {
        await props.actionGetCars();
    } 

    return (
        <div>
            Home
        </div>
    )
}