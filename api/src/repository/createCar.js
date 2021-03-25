import { sendResponse } from "../helper";
import { CarModel } from "../model";
import generateCarUid from "./generateCarUid";

export default async ({ car }) => {
    try {
        const _car = {
            uid: await generateCarUid(),
            ...car
        }

        const carData = await CarModel.create(_car);
        
        return sendResponse(carData);
    } catch (error) {
        console.error("Err in createCar", error);
    }
}