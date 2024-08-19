import React from "react";
import { Compare } from "./ui/Compare";

export function Benefits() {
  return (
    <>
      <section id="benefits" className="z-10">
        <h2 className="heading mx-auto text-xl md:text-5xl font-bold mb-4 mt-28 pt-16 md:mb-24 text-center">
          <span className="text-cyan-400">Benefits</span> of applying.
        </h2>

        <div className="dark:bg-zinc-900 flex items-center justify-between gap-4 p-4 md:p-6">
          <div className="flex-1 text-center md:text-left">Company X</div>
          <Compare
            firstImage="/companyx.png"
            secondImage="/newphase.png"
            firstImageClassName="object-cover object-left-top"
            secondImageClassname="object-cover object-left-top"
            className="h-[200px] w-[200px] md:h-[700px] md:w-[700px]"
            slideMode="hover"
          />
          <div className="flex-1 text-center md:text-right">New Phase</div>
        </div>
      </section>
    </>
  );
}
