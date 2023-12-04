"use client"

import Link from "next/link"

export default function PokelistItem(props) {
    return (
        <li>
            <Link href={`/pokemons/${props.name}`}>
                {props.name}
            </Link>
        </li>
    )
}