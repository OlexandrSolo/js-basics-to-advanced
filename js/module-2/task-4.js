const CHINA = 100;
const CHILE = 250;
const AUSTRALIA = 170;
const JAMAICA = 120;

const getShippingCost = (country) => {
    if (typeof country !== "string" || !country.trim()) {
        return "Invalid date";
    };

    switch (country.toLowerCase()) {
        case "china":
            return `Shipping to ${country} will cost ${CHINA} credits`;
        case "chile":
            return `Shipping to ${country} will cost ${CHILE} credits`;
        case "australia":
            return `Shipping to ${country} will cost ${AUSTRALIA} credits`;
            break;
        case "jamaica":
            return `Shipping to ${country} will cost ${JAMAICA} credits`;
            break;
        default:
            return "Sorry, there is no delivery to your country";
    }
}

console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"