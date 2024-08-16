import Apply from "@/components/Apply";
import Approach from "@/components/Approach";
import { Benefits } from "@/components/Benefits";
import { Hero } from "@/components/Hero";
import { Posibilities } from "@/components/Posibilities";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";

export default function Home() {
  return (
    <>
      <Hero />
      <main className="relative bg-zinc-900 flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5 ">
        <div className="max-w-7xl w-full">
          <div>
            <FloatingNav navItems={navItems} />
            <Posibilities />
            <Approach />
            <Benefits />
          </div>
        </div>
      </main>
      <Apply />
    </>
  );
}
