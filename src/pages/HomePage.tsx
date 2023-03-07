import NavBar from "../Components/NavBar";
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

export function HomePage() {
  return (
    <div className=" font-mono flex flex-col h-full w-auto bg-stone-100 text-black ">
      <NavBar />
      <div className="flex flex-col  justify-center w-auto bg-stone-100">
        <div className="flex flex-row w-full justify-center">
          <div className="flex flex-row justify-around items-center mx-20 my-10 w-full ">
            <div className="flex flex-col">
              <h5 className="text-lg">I am</h5>
              <h2 className="text-4xl ">Jamie de Leest</h2>
              <p className="text-base my-3  text-gray-500">
                Computer Software Engineer
              </p>
              <div className="flex">
                <NavLink
                  className="text-white bg-gradient-to-l from-cyan-500 to-blue-500 p-3 hover:text-white hover:shadow-lg hover:shadow-blue-300 transition duration-300"
                  to="/Projects"
                >
                  MY PROJECTS
                </NavLink>
              </div>
            </div>
            <div className="bg-slate-600 w-96 h-96"></div>
          </div>
        </div>
        <div className="bg-white">
          <h1>PERSONAL DETAILS</h1>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              sapiente consectetur cum recusandae tempore harum numquam impedit
              doloribus nam. Iusto dolor veniam illum earum ipsum vero
              reprehenderit vitae obcaecati quae.
            </p>
            <a href="">ABOUT ME</a>
          </div>
        </div>
        <div>
          <div>
            <h1>Areas of Interests</h1>
            <div>
              <div>
                <h4>Machine Learning</h4>
              </div>
              <div>
                <h4>Data Science</h4>
              </div>
              <div>
                <h4>Software Development</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
