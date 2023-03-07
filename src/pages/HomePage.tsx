import NavBar from "../Components/NavBar";
import React, { useState, useEffect } from "react";

export function HomePage() {
  return (
    <div className="flex-row h-full w-auto bg-stone-100 text-black ">
      <NavBar />
      <div className="flex-col  justify-center w-auto">
        <div className="flex-row w-full justify-center">
          <div className="flex-row items-center justify-center w-full">
            <div className="">
              <h5>I am</h5>
              <h2>Jamie de Leest</h2>
              <p>Computer Software Engineer</p>
              <a href="">MY PROJECTS</a>
            </div>
            <div className=" bg-slate-600 w-96 h-96"></div>
          </div>
        </div>
        <div>
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
