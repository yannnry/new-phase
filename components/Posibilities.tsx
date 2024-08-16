"use client";

import React from "react";
import { Card, Carousel } from "./ui/CarouselCards";
import { posibilities } from "@/data";

export function Posibilities() {
  const cards = posibilities.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <section id="posibilities">
      <div className=" w-full h-full pt-16 bg-zinc-50 dark:bg-zinc-900 text-center">
        <h1 className="heading mx-auto text-xl md:text-5xl font-bold ">
          Get to know the <span className="text-cyan-400">posibilities</span>{" "}
          with New Phase.
        </h1>

        <Carousel items={cards} />
      </div>
    </section>
  );
}
