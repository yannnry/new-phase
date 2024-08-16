// index.tsx
import React from "react";

export const navItems = [
  { name: "About", link: "#posibilities" },
  { name: "Approach", link: "#approach" },
  { name: "Benefits", link: "#benefits" },
  { name: "Apply!", link: "#apply" },
];

export const posibilities = [
  {
    category: "Guidance",
    title: "Coding and Developing just got better.",
    src: "/guidance.jpg",
    content: (
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
            The first rule of New Phase is that you boast about New Phase.
          </span>{" "}
          Enhance your coding and development experience with advanced tools and
          guidance. Keep a journal, jot down ideas quickly, and effortlessly
          convert notes into text.
        </p>
      </div>
    ),
  },
  {
    category: "Intelligent Automation",
    title: "You can do more with AI.",
    src: "/intelligent.jpg",
    content: (
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
            Transform your workflow with intelligent automation.
          </span>{" "}
          Leverage AI to streamline repetitive tasks, enhance productivity, and
          drive innovation in your projects. Discover new ways to integrate AI
          into your daily routines.
        </p>
      </div>
    ),
  },
  {
    category: "Career Growth",
    title: "Unlock your potential with ongoing learning and development.",
    src: "/career.jpg",
    content: (
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
            Boost your career with continuous learning.
          </span>{" "}
          Enhance your skills and advance your career by engaging in ongoing
          learning and professional development opportunities. Unlock new
          possibilities and achieve your career goals.
        </p>
      </div>
    ),
  },
  {
    category: "Team Collaboration",
    title:
      "Join skilled developers and programmers to drive innovation together.",
    src: "/collaboration.jpg",
    content: (
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
            Collaborate with a diverse team to innovate.
          </span>{" "}
          Work alongside talented developers and programmers to drive innovation
          and create groundbreaking solutions. Join a collaborative environment
          that fosters creativity and teamwork.
        </p>
      </div>
    ),
  },
  {
    category: "Impactful Projects",
    title: "Create solutions that transform businesses and make a real impact.",
    src: "/projects.jpg",
    content: (
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
            Work on projects that matter.
          </span>{" "}
          Develop solutions that address real-world challenges and drive
          meaningful change. Engage in projects that have a significant impact
          on businesses and communities.
        </p>
      </div>
    ),
  },
  {
    category: "Flexible Work Options",
    title: "Achieve balance with flexible hours and remote work options.",
    src: "/flexible.jpg",
    content: (
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
            Enjoy work-life balance with flexibility.
          </span>{" "}
          Benefit from adaptable work hours and remote options that allow you to
          create a work schedule that suits your lifestyle and needs. Achieve a
          better balance between work and personal life.
        </p>
      </div>
    ),
  },
  {
    category: "Cutting-Edge Technology",
    title: "Stay ahead with the latest industry tools and technologies.",
    src: "/cutting.jpg",
    content: (
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
            Embrace the latest technological advancements.
          </span>{" "}
          Stay competitive by keeping up with the latest industry tools and
          technologies. Leverage cutting-edge advancements to drive innovation
          and stay ahead in your field.
        </p>
      </div>
    ),
  },
];

export const socialMedia = [
  { id: 1, img: "/git.svg" },
  { id: 2, img: "/twit.svg" },
  { id: 3, img: "/link.svg" },
];
