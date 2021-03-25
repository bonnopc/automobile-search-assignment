import AddCarContainer from "modules/car/containers/AddCarContainer"
import CarDetailsContainer from "modules/car/containers/CarDetailsContainer"
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
    },
    {
        path: "/car/add",
        exact: true,
        component: AddCarContainer
    },
    {
        path: "/car/:uid",
        exact: true,
        component: CarDetailsContainer
    },
]

export default Routes