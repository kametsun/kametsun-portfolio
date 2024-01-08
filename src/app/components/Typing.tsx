// @/src/app/components/Typing.tsx

"use client"

import React, {useEffect, useState} from "react";

interface TypingProps {
    text: string
}

export const Typing: React.FC<TypingProps> = ({text}) => {
    const [displayText, setDisplayText] = useState('')
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (currentIndex < text.length) {
                setDisplayText((prevText) => prevText + text[currentIndex])
                setCurrentIndex((prevIndex) => prevIndex + 1)
            } else {
                clearInterval(intervalId)
            }
        }, 50)

        return () => clearInterval(intervalId)
    }, [currentIndex,text]);

    return displayText
}