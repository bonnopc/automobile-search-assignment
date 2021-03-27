import { Readable } from "stream"
import { getContentType } from "../../helper";
import fs from "fs"

export default async (request, h) => {
    try {
        const _fileName = request.params.fileName;
        const _dir = "uploads/" + _fileName;
        const _contentType = getContentType(_fileName)

        let stream = fs.createReadStream(_dir);
        let streamData = new Readable().wrap(stream);

        return h.response(streamData)
            .header('Content-Type', _contentType)
            .header('Content-Disposition', 'attachment; filename= ' + _fileName);

    } catch (error) {
        console.error("Err in createCar", error);
        return sendErrorResponse("INTERNAL_SERVER_ERROR");
    }
}