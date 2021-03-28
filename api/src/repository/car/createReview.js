import { sendErrorResponse, sendResponse } from "../../helper";
import { ReviewModel } from "../../model";

export default async (req, res) => {
    try {
        const { carUid, name, comment, rating } = req.body

        if(carUid){
            const _data = { carUid, name, comment, rating }

            const _review = await ReviewModel.create(_data)

            return res.status(200).json(sendResponse(_review));
        }
        
        return res.status(400).json(sendErrorResponse("NOT_ACCEPTABLE"));
    } catch (error) {
        console.error("Err in createReview", error);
        return res.status(500).json(sendErrorResponse("INTERNAL_SERVER_ERROR"));
    }
}