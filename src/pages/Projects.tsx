import React, { useEffect, useState } from "react";
import NavBar from "../Components/NavBar";

interface Repo {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  updated_at: string;
  owner: { login: string; avatar_url: string };
}

export function Projects() {
  const [repos, setRepos] = useState<Repo[]>([]);

  useEffect(() => {
    fetch(
      "https://api.github.com/users/The0Danktor/repos?type=public&sort=updated"
    )
      .then((response) => response.json())
      .then((data) => setRepos(data));
  }, []);

  return (
    <div className="flex flex-col h-full w-auto bg-stone-100 text-black ">
      <NavBar />
      <div className="flex flex-col  justify-center w-auto bg-stone-100">
        <div className="flex flex-col items-center  py-10">
          <h2 className="text-6xl mb-4 font-semibold ">My Projects</h2>
          <ul className="flex flex-col justify-between">
            {repos.map((repo) => (
              <li className=" mx-8 flex items-center" key={repo.id}>
                <img
                  className="w-64"
                  src="/githublogo2.png"
                  alt="github logo"
                />
                <div className="flex flex-col">
                  <a
                    className="text-black text-2xl font-semibold"
                    href={repo.html_url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {repo.name}
                  </a>
                  <p className="h-fit">
                    {repo.description
                      ? repo.description
                      : "No description available"}
                  </p>
                  <br />
                  <div className="flex flex-row items-center">
                    <img className="w-8 h-8 rounded-full m-2" src={repo.owner.avatar_url} alt="" />
                    <p className="text-base text-gray-500">
                      {/* change the string formate from 2022-11-1120:39:58Z  2022-11-11 */}
                      {repo.owner.login}
                      {" on "}
                      {repo.updated_at.substring(0, 10)}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
