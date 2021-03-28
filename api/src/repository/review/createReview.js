import { roundNumber, sendErrorResponse, sendResponse } from "../../helper";
import { CarModel, ReviewModel } from "../../model";

export default async (req, res) => {
    try {
        const { carUid, name, comment, rating } = req.body

        if(carUid){
            if(rating !== 0){
                const _carData = await CarModel.findOne({ uid: carUid })

                const _prevRating = _carData.rating ? _carData.rating : 0;
                const _prevRatingCount = _carData.ratingCount ? _carData.ratingCount : 0;

                const currentRating = (_prevRating * _prevRatingCount) + rating;

                await CarModel.findOneAndUpdate({ uid: carUid }, { 
                    rating: roundNumber(currentRating,1),
                    ratingCount: _prevRatingCount + 1
                });
            }

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