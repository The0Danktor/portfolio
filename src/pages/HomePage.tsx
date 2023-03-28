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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                sapiente consectetur cum recusandae tempore harum numquam
                impedit doloribus nam. Iusto dolor veniam illum earum ipsum vero
                reprehenderit vitae obcaecati quae. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Autem sapiente consectetur cum
                recusandae tempore harum numquam impedit doloribus nam. Iusto
                dolor veniam illum earum ipsum vero reprehenderit vitae
                obcaecati quae. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Autem sapiente consectetur cum recusandae
                tempore harum numquam impedit doloribus nam. Iusto dolor veniam
                illum earum ipsum vero reprehenderit vitae obcaecati quae. Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Autem
                sapiente consectetur cum recusandae tempore harum numquam
                impedit doloribus nam. Iusto dolor
              </p>
              <Link
                className="text-white w-fit bg-blue-500 p-3 hover:text-white hover:shadow-lg hover:shadow-blue-300 transition duration-300"
                to="/Projects"
              >
                ABOUT ME
              </Link>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col justify-center items-center px-40 py-10">
            <h2 className="text-4xl font-semibold">Areas of Interests</h2>
            <div className="flex justify-around m-6 w-full">
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
        <div className="bg-white flex flex-col  items-center">
          <div className="bg-white px-40 flex flex-col items-center py-10">
            <h2 className="text-4xl mb-4 font-semibold">Skills Expertisse</h2>
            <div className="flex flex-row mb-2 justify-between">
              <span className="mx-2 text-base text-gray-500">1 - Basic</span>
              <span className="mx-2 text-base text-gray-500">2 - Novice</span>
              <span className="mx-2 text-base text-gray-500">3 - Intermediate</span>
            </div>
            <p className="text-base  text-gray-500"> 4 - Advanced 5 - Expert </p>
            <div className="flex flex-col  gap-12"></div>
          </div>
          <div className="flex flex-row justify-between">
            <SkillCatagory title="Software Development" skills={[ {title:"Backend(C#/EF)", level:4}, {title:" Frontend(React Typescript)", level:3} ] }/>
            <SkillCatagory title="Machine Learning" skills={[ {title:"Python", level:3}, {title:"Tensorflow", level:2} ] }/>
            <SkillCatagory title="Project Managment" skills={[ {title:"Scrum", level:3},  ] }/>
          </div>
        </div>
      </div>
    </div>
  );
}
