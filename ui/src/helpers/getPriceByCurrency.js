import roundNumber from "./roundNumber";

export default function getPriceByCurrency(price,currency="USD",rates={}){
    try {
        if(rates[currency]) return roundNumber(price * rates[currency],1);
    } catch (error) {
        console.error("ERr on calculate currency", error)
    }

    return price;
}