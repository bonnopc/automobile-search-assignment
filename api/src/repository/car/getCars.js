import { sendResponse, sendErrorResponse } from "../../helper";
import { CarModel } from "../../model";

export default async (req,res) => {
    try {
        const carsData = await CarModel.find();

        if(!carsData || !carsData.length) return res.status(500).json(sendErrorResponse("DATA_NOT_FOUND"))
        
        return res.status(200).json(sendResponse(carsData));
    } catch (error) {
        console.error("Err in getCars", error);
        return res.status(500).json(sendErrorResponse("DATA_NOT_FOUND"))
    }
}