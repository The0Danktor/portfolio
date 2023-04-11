import React from "react";



export function Footer() {
  return (
    <div className="flex w-full justify-around px-60 items-center bg-slate-900 text-white h-48">
      <div className="w-96 m-4">
        <h3 className="text-lg font-semibold">About This Page</h3>
        <p className="text-base text-gray-500">
          This website was coded in reactTS with vite. It is hosted on a vercel
          server.
        </p>
      </div>
      <div className="w-96 m-4">
        <h3 className="text-lg font-semibold">Contact Me</h3>
        <p className="text-base text-gray-500">You can contact me on this email:</p>
        <p className="text-base text-gray-500">jdeleest@live.nl</p>
      </div>
      <div className="w-96 m-4">
        <h3 className="text-lg font-semibold">Follow Me</h3>
        <p className="text-base text-gray-500">Follow me on github and linkedin</p>
        <div className="flex flex-row ">
          <a target="_blank" className="m-3" href="https://github.com/The0Danktor"><img src="/github.svg" alt=""  /></a>
          <a target="_blank" className="m-3" href="https://www.linkedin.com/in/jamie-de-leest-a72481231/">
            <img src="/linkedin.svg" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}
