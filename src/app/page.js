"use client"

import Card from "@/components/cards"

export default function Home() {
  return (
    <main>
      <h1 className="text-3xl">Hej verden</h1>
      <section>
        <Card 
          name="Lorem ipsum dolor sit amet" 
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,"/>
        <Card 
          name="Lorem ipsum dolor sit amet, consectetur" 
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
        <Card 
          name="Lorem ipsum dolor" 
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
      </section>
    </main>
  )
}