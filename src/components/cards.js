"use client"

export default function Card(props) {
    return (
        <article>
            <img src="/{}" alt=""/>
            <h1 className="text-xl">{props.name}</h1>
            <p>{props.text}</p>
        </article>
    )
}