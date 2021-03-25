import { sendResponse, sendErrorResponse } from "../helper";
import { CarModel } from "../model";

export default async () => {
    try {
        const carsData = await CarModel.find();

        if(!carsData || !carsData.length) return sendErrorResponse("DATA_NOT_FOUND")
        
        return sendResponse(carsData);
    } catch (error) {
        console.error("Err in getCars", error);
    }
}