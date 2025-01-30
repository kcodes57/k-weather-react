import React from "react";
import "./CodedInfo.css";
export default function CodedInfo() {
  return (
    <footer className="CodedInfo">
      Coded by{" "}
      <a href="https://github.com/kcodes57" target="_blank" rel="noreferrer">
        Kirsten McIntyre
      </a>{" "}
      is open-sourced on{" "}
      <a
        href="https://github.com/kcodes57/k-weather-react"
        target="_blank"
        rel="noreferrer"
      >
        Github
      </a>{" "}
      and hosted on{" "}
      <a
        href="https://k-weather-react.netlify.app/"
        target="_blank"
        rel="noreferrer"
      >
        Netlify
      </a>
    </footer>
  );
}
