import { sendErrorResponse, sendResponse } from "../../helper";
import { CarModel } from "../../model";

export default async (req, res) => {
    try {
        const uploadedImage = req.files.image;
        const { uid, name, price, description, image } = req.body

        if (uid && name && price && (image || uploadedImage)) {
            const API_URL = `${req.protocol}://${req.get('Host')}`

            const result = {
                name,
                price,
                description: description ? description : null,
                image: uploadedImage ? `${API_URL}/${uploadedImage.path}` : image
            }

            const _carData = await CarModel.findOneAndUpdate({ uid }, result)

            return res.status(200).json(sendResponse(_carData));
        }
        
        return res.status(400).json(sendErrorResponse("NOT_ACCEPTABLE"));
    } catch (error) {
        console.error("Err in updateCar", error);
        return res.status(500).json(sendErrorResponse("INTERNAL_SERVER_ERROR"));
    }
}