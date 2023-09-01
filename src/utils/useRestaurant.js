import { useState, useEffect } from "react";
import { RESTAURANT_URL } from "../constants"

const useRestuarant = (resId) => {
    const [restInformation, setRestInformation] = useState(null);
    const [recommended, setRecommended] = useState(null);

    useEffect(() => { getRestoInfo() }, []);

    async function getRestoInfo() {
        const data = await fetch(RESTAURANT_URL + resId);
        const json = await data.json();

        setRestInformation(json?.data?.cards[0]?.card?.card?.info);

        const [cards] = Object.values(json?.data?.cards[2]);
        const { REGULAR } = { ...cards.cardGroupMap };
        const cards1 = Object.values(REGULAR.cards).filter((e) => {
            return e.card?.card?.title === "Recommended";
        });
        setRecommended(...cards1);
    }
    return [restInformation, recommended];
};

export default useRestuarant;