import CarListContainer from "modules/car/containers/CarListContainer"
import HomeContainer from "modules/home/containers/HomeContainer"

const Routes = [
    {
        path: "/",
        exact: true,
        component: HomeContainer
    },
    {
        path: "/cars",
        exact: true,
        component: CarListContainer
    }
]

export default Routes