import { sendErrorResponse, sendResponse } from "../../helper";
import { CarModel } from "../../model";
import generateCarUid from "./generateCarUid";

export default async (req, res) => {
    console.log("req CREATE CAR", req)
    try {
        const { image } = req.files;
        const { name, price, description } = req.body

        if (image && name && price) {
            const API_URL = `${req.protocol}://${req.get('Host')}`

            const result = {
                uid: await generateCarUid(),
                name,
                price,
                description,
                image: `${API_URL}/${image.path}`
            }

            const _carData = await CarModel.create(result)

            console.log("result==============>", _carData)

            return res.status(200).json(sendResponse(_carData));
            
        }
        
        return res.status(400).json(sendErrorResponse("NOT_ACCEPTABLE"));
    } catch (error) {
        console.error("Err in createCar", error);
        return res.status(500).json(sendErrorResponse("INTERNAL_SERVER_ERROR"));
    }
}