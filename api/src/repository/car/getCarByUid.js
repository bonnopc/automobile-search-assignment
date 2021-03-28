import { sendErrorResponse, sendResponse } from "../../helper";
import { CarModel } from "../../model";

export default async (req,res) => {
    try {
        const { uid } = req.params;
        const _car = await CarModel.findOne({ uid });

        if(!_car) return res.status(500).json(sendErrorResponse("DATA_NOT_FOUND"))
        
        return res.status(200).json(sendResponse(_car));
    } catch (error) {
        console.error("Err in getCarByUid", error);
        return res.status(500).json(sendErrorResponse("INTERNAL_SERVER_ERROR"));
    }
}