import React from "react";

export function Platforms() {
  return (
    <div className="flex flex-col items-center w-full px-48">
      <h2 className="text-4xl mb-4 font-semibold mt-10">Other Platforms</h2>
      <div className="flex flex-row items-center justify-around w-full p-20">
        <div className="flex flex-col items-center justify-center gap-4 p-16 py-4  hover:bg-blue-300 transition duration-300">
          <a
            className="flex flex-col items-center justify-center gap-4"
            href="
            https://github.com/The0Danktor"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="w-64 aspect-auto"
              src="/githublogo2.png"
              alt="linkedin logo"
            />
            <h3 className="text-black text-lg">Github</h3>
            <p></p>
          </a>
        </div>
        <div className="flex flex-col items-center gap-4 p-28 py-16  hover:bg-blue-300 transition duration-300">
          <a
            className="flex flex-col items-center justify-center gap-4"
            href="
            https://www.linkedin.com/in/jamie-de-leest-a72481231/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="w-40 aspect-auto"
              src="/linkedin.png"
              alt="linkedin logo"
            />
            <h3 className="text-black text-lg">Linkedin</h3>
            <p></p>
          </a>
        </div>
      </div>
    </div>
  );
}
