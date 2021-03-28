import { ApiEndPoint } from "config";

const ApiClient = async (urlSuffix,options) => {
    try {
        const response = await fetch(`${ApiEndPoint.url}${urlSuffix}`,options);

        if(response.status !== 200 && response.status !== 201) return;

        return await response.json();

    } catch (error) {
        console.error("AT: ",urlSuffix, error);
        return;
    }
}

export default ApiClient;