import {createContext, useContext, useState} from "react";

const CardFlipContext = createContext();

export const CardFlipProvider = ({children}) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const flipCard = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <CardFlipContext.Provider value={{isFlipped, flipCard}}>
            {children}
        </CardFlipContext.Provider>
    );
};
export const useCardFlip = () => useContext(CardFlipContext);
