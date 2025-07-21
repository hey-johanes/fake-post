import React from 'react';
export default function Footer() {
  return (
    <div
      className="text-center py-4 d-block"
      style={{ backgroundColor: '#282c34' }}
    >
      <ul className="d-flex justify-content-center list-unstyled p-0 m-0">
        <li className="mx-2">
          <a
            href="https://github.com/hey-johanes"
            target="_blank"
            className="d-block mb-3"
            rel="noreferrer"
          >
            <img
              src="/icons/github-icon.svg"
              alt="github"
              width="28"
              height="29"
            />
          </a>
        </li>
        <li className="mx-2">
          <a
            href="https://www.youtube.com/@EduTechnology/videos"
            target="_blank"
            className="d-block mb-3"
            rel="noreferrer"
          >
            <img
              src="/icons/youtube-icon.svg"
              alt="youtube"
              width="28"
              height="29"
            />
          </a>
        </li>
        <li className="mx-2">
          <a
            href="https://www.linkedin.com/in/johanes-kristiadi/"
            target="_blank"
            className="d-block mb-3"
            rel="noreferrer"
          >
            <img
              src="/icons/linkedin-icon.svg"
              alt="linkedin"
              width="28"
              height="32"
            />
          </a>
        </li>
      </ul>
    </div>
  );
}
