import React from "react";
import { BackgroundBeams } from "./ui/BackgroundBeams";
import { AnimatedModalDemo } from "./AnimatedModal";
import { socialMedia } from "@/data";
import Image from "next/image";

const Apply = () => {
  return (
    <>
      <footer className="bg-zinc-900 w-full" id="apply">
        <div className="w-full rounded-md relative flex flex-col items-center justify-center antialiased pt-8 pb-8 md:pt-12 md:pb-12">
          <div className="max-w-2xl mx-auto p-4">
            <h1 className="heading mx-auto text-xl md:text-5xl font-bold relative z-10 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center">
              Apply now here at New Phase!
            </h1>
            <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
              Welcome to New Phase, where we are on the lookout for talented
              developers like you. Join a phenomenal company that offers
              excellent pay and a plethora of benefits. Be a part of a team that
              values your skills and provides the support and rewards you
              deserve. If you&#39;re looking for a fantastic opportunity to grow
              and excel, New Phase is the place for you!
            </p>
            <div className="relative z-50 mt-4">
              <AnimatedModalDemo />
            </div>
          </div>

          <BackgroundBeams />
        </div>
        <div className="w-full pb-4 md:pb-6 flex flex-col md:flex-row md:justify-between md:items-center md:px-56">
          <p className="text-sm md:text-base font-light md:font-normal text-center md:text-left mb-4 md:mb-0">
            Copyright © 2024 New Phase
          </p>

          <div className="flex justify-center md:justify-end items-center gap-3">
            {socialMedia.map((info) => (
              <div
                key={info.id}
                className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
              >
                <Image src={info.img} alt="icons" width={20} height={20} />
              </div>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
};

export default Apply;
