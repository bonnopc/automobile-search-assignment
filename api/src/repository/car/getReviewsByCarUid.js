import { sendResponse, sendErrorResponse } from "../../helper";
import { ReviewModel } from "../../model";

export default async (req,res) => {
    try {
        const { carUid } = req.params;
        const carsData = await ReviewModel.find({ carUid });

        console.log("carsData", carsData)

        if(carsData.length) return res.status(200).json(sendResponse(carsData));
        
        return res.status(404).json(sendErrorResponse("DATA_NOT_FOUND"))
    } catch (error) {
        console.error("Err in getReviewsByCarUid", error);
        return res.status(500).json(sendErrorResponse("DATA_NOT_FOUND"))
    }
}