import { useEffect, useState } from "react"
import { intervalToDuration } from "date-fns"

export default function TimeCounter() {
    const STARTED_CODING = new Date("2021-01-22T11:42:42.000Z");
    const [counterStr, setCounterStr] = useState(counterDistance());

    function counterDistance() {
        const duration = intervalToDuration({
            start: STARTED_CODING,
            end: new Date()
        })

        return Object
            .entries(duration)
            .map(([unity, value]) => `${value}${unity[0]}`)
            .join(' ')
    }

    function counterBlocks() {
        return counterStr
            .split(' ')
            .map(block => <span className="time-info">{ block }</span>)
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setCounterStr(counterDistance());
        }, 1000);

        return () => {
            clearTimeout(timer);
        }
    })

    return (
        <div className="time-counter">
            { counterBlocks() }
        </div>
    )
}