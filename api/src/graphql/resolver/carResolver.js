import { getCars, createCar } from "../../repository";

export default {
    Query: {
        async cars (root, args) {
            return await getCars(args);
        },
    },
    Mutation: {
        async createCar (root, args) {
            return await createCar(args);
        }
    }
};