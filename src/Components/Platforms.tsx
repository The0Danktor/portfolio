import React from "react";

export function Platforms() {
  return (
    <div>
      <h2>Other Platforms</h2>
      <div className="flex flex-col items-center">
        <div className="flex flex-row items-center gap-4">
          <a
            href="
                https://www.linkedin.com/in/oliver-wood-0a0b1b1b9/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="w-8 h-8"
              src="./src/assets/linkedin.png"
              alt="linkedin logo"
            />
          <h3>
            Linkedin
          </h3>
          <p></p>
          </a>
        </div>
      </div>
    </div>
  );
}
