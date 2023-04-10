import NavBar from "../Components/NavBar";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Intrests } from "../Components/Intrests";
import {
  AcademicCapIcon,
  ChartBarIcon,
  CommandLineIcon,
} from "@heroicons/react/24/outline";
import SkillCatagory from "../Components/SkillCatagory";
import { LatestProjects } from "../Components/LatestProjects";
import { Platforms } from "../Components/Platforms";

export function HomePage() {
  return (
    <div className="flex flex-col h-full w-auto bg-stone-100 text-black ">
      <NavBar />
      <div className="flex flex-col  justify-center w-auto bg-stone-100">
        <div className="flex flex-row  w-full justify-center">
          <div className="flex flex-row  justify-around items-center mx-20 my-10 w-full ">
            <div className="flex flex-col">
              <h5 className="text-lg">I am</h5>
              <h2 className="text-4xl ">Jamie de Leest</h2>
              <p className="text-base my-3 mb-10 text-gray-500">
                Computer Software Engineer
              </p>
              <div className="flex">
                <Link
                  className="text-white bg-gradient-to-l from-cyan-500 to-blue-500 p-3 hover:text-white hover:shadow-lg hover:shadow-blue-300 transition duration-300"
                  to="/Projects"
                >
                  MY PROJECTS
                </Link>
              </div>
            </div>
            <a href="https://fabiothomas.vercel.app/">
              <div className="bg-slate-600 w-96 h-96"></div>
            </a>
          </div>
        </div>
        <div className="bg-white flex flex-row justify-center">
          <div className="bg-white px-40 flex flex-col gap-12 py-10">
            <h2 className="text-4xl font-semibold">PERSONAL DETAILS</h2>
            <div className="flex flex-col  gap-12">
              <p className="border-l-2 pl-7 text-gray-500 font-light border-blue-500 max-w-5xl">
                Hello, I'm a computer software engineering student who's
                passionate about building software that solves real-world
                problems. My primary focus has been on backend development using
                C#, but I'm also skilled in frontend development with TypeScript
                and React.
                <br />
                <br />
                I've worked on a variety of projects, ranging from small web
                applications to large enterprise-level software solutions.
                Through these experiences, I've developed a deep understanding
                of software development principles and best practices. I'm
                always looking for new challenges to tackle and opportunities to
                learn.
                <br />
                <br />
                In addition to my experience in software engineering, I'm also
                interested in the field of data science and machine learning.
                I'm fascinated by the power of these technologies to uncover
                insights and solve complex problems. I've taken courses in data
                analysis, machine learning, and statistics, and I'm eager to
                apply these skills to real-world problems.
                <br />
                <br />
                I believe that the combination of my software engineering
                expertise and my growing data science knowledge makes me
                well-suited for building end-to-end software solutions that
                leverage the power of data. If you have any projects or
                opportunities that require a data-driven approach, I would love
                to hear more about them!
                <br />
                <br />
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col justify-center items-center px-40 py-10">
            <h2 className="text-4xl font-semibold">Areas of Interests</h2>
            <div className="flex justify-around items-center m-6 w-full">
              <Intrests
                title="Software Development"
                logo={<CommandLineIcon />}
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem"
              />
              <Intrests
                title="Machine Learning"
                logo={<AcademicCapIcon />}
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem"
              />
              <Intrests
                title="Data Science"
                logo={<ChartBarIcon />}
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem"
              />
            </div>
          </div>
        </div>
        <div className="bg-white flex flex-col  items-center pb-20">
          <div className="bg-white px-40 flex flex-col items-center py-10">
            <h2 className="text-4xl mb-4 font-semibold">Skills Expertisse</h2>
            <div className="flex flex-row mb-2 justify-between">
              <span className="mx-2 text-base text-gray-500">1 - Basic</span>
              <span className="mx-2 text-base text-gray-500">2 - Novice</span>
              <span className="mx-2 text-base text-gray-500">
                3 - Intermediate
              </span>
            </div>
            <p className="text-base  text-gray-500">
              {" "}
              4 - Advanced 5 - Expert{" "}
            </p>
            <div className="flex flex-col  gap-12"></div>
          </div>
          <div className="flex flex-row justify-between">
            <SkillCatagory
              title="Software Development"
              skills={[
                { title: "Backend(C#/EF)", level: 4 },
                { title: " Frontend(React Typescript)", level: 3 },
              ]}
            />
            <SkillCatagory
              title="Machine Learning"
              skills={[
                { title: "Python", level: 3 },
                { title: "Pandas", level: 2 },
                { title: "Tensorflow", level: 1 },
              ]}
            />
            <SkillCatagory
              title="Project Managment"
              skills={[
                { title: "Scrum", level: 3 },
                { title: "Git", level: 4 },
              ]}
            />
          </div>
        </div>
        <div className="flex flex-col  items-center ">
          <LatestProjects />
        </div>
        <div className="bg-white flex flex-col  items-center">
          <Platforms/>
        </div>
      </div>
      <div className="hidden w-[20%] w-[40%] w-[60%] w-[80%] w-[100%]"></div>
    </div>
  );
}
