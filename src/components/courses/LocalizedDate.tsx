"use client"

import { useEffect, useState } from "react"

type LocalizedDateProps = {
    date: string
}

export default function LocalizedDate({ date }: LocalizedDateProps) {
    const [formatedDate, setFormatedDate] = useState(date);

    useEffect(() => {
        const local = new Date(date).toLocaleDateString(undefined, {
            year: "numeric",
            month: "short",
            day: "numeric"
        })

        setFormatedDate(local);
    }, [date])

    return (
        <span>{formatedDate}</span>
    )

}