"use client"

export default function Pokemon(props) {
    return (
        <article>
            <h2>{props.name}</h2>
            <p>{props.type}</p>
        </article>
    )
}