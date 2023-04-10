import React, { useEffect, useState } from "react";

interface Repo {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  updated_at: string;
}

export function LatestProjects() {
  const [repos, setRepos] = useState<Repo[]>([]);

  useEffect(() => {
    fetch(
      "https://api.github.com/users/The0Danktor/repos?type=public&sort=updated&per_page=3"
    )
      .then((response) => response.json())
      .then((data) => setRepos(data));
  }, []);
  return (
    <div className="flex flex-col items-center  py-10">
      <h2 className="text-4xl mb-4 font-semibold ">My Latest Projects</h2>
      <p className="mx-2 text-base text-gray-500 pb-20">
        Take a look at my recent work.
      </p>
      <ul className="flex flex-row justify-between">
        {repos.map((repo) => (
          <li className="w-72 mx-8" key={repo.id}>
            <img className="" src="./src/assets/githublogo2.png" alt="github logo" />
            <p className="text-base text-gray-500 mb-6">{/* change the string formate from 2022-11-1120:39:58Z  2022-11-11 */}{repo.updated_at.substring(0, 10)}</p>
            <a className="text-black text-lg" href={repo.html_url} target="_blank" rel="noreferrer">
              {repo.name}
            </a>
            <br />
            <p className="h-fit">
              {repo.description ? repo.description : "No description available"}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
