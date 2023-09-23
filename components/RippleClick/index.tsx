import { useState } from "react";
import style from "./style.module.css";
export default function RippleClick() {
    const mouseDownHandler = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        event.persist();
        const isTouch =
            "ontouchstart" in window ||
            navigator.maxTouchPoints > 0 ||
            navigator.maxTouchPoints > 0;
        if (!isTouch) {
            const { offsetX, offsetY } = event.nativeEvent;
            const circle = document.createElement('div')
            const x = offsetX
            const y = offsetY
            circle.classList.add(style['circle'])
            circle.style.left = `${x}px`
            circle.style.top = `${y}px`
            event.currentTarget.appendChild(circle)
        } else {
         /*    const { targetTouches: [targetEvent] = [] } = event.nativeEvent;
            if (targetEvent) {
                console.log(targetEvent);
                const { offsetX, offsetY } = event.nativeEvent;
                console.log(event.nativeEvent);
                console.log({ offsetX, offsetY });
                const { clientX, clientY } = targetEvent;
                const x = clientX - offsetLeft;
                const y = clientY - offsetTop;
                console.log(
                    `Touch event detected at positions X:${clientX - offsetLeft} and Y:${clientY - offsetTop
                    }`
                );
                console.log({
                    x,
                    y,
                    clientWidth,
                    clientHeight
                });
            } */
        }
    }
    return (
        <div className="absolute top-0 right-0 w-full h-full z-50" onClick={mouseDownHandler}>
        </div>
    )
}