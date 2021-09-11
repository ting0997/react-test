import React, { useEffect, useState } from "react";
import ipadMini from "./ipad-mini.jpg";
import iconFile from "./icons-file.svg";
import htmlContent from "./content.json";
import "./App.css";

function App() {
  const [htmlHeader, setHtmlHeader] = useState("");
  const [contentDescription, setContentDescription] = useState("");
  const [contentIndex, setContentIndex] = useState("");
  const [nextPageLink, setNextPageLink] = useState("");

  useEffect(() => {
    const initialContentIndex = 0;
    setHtmlHeader(htmlContent.title);
    setContentDescription(htmlContent.content[initialContentIndex].description);
    setContentIndex(initialContentIndex);
    setNextPageLink(htmlContent.content[initialContentIndex + 1].title);
  }, []);

  const handleClick = () => {
    const currentContentIndex = contentIndex + 1;
    const totalContentLength = htmlContent.content.length;
    if (currentContentIndex < totalContentLength - 1) {
      setContentDescription(
        htmlContent.content[currentContentIndex].description
      );
      setContentIndex(currentContentIndex);
      setNextPageLink(htmlContent.content[currentContentIndex + 1].title);
    } else if (currentContentIndex === totalContentLength - 1) {
      setNextPageLink("This is the last page");
    }
  };

  const handleClickBack = () => {
    const currentContentIndex = contentIndex - 1;
    if (currentContentIndex >= 0) {
      setContentDescription(
        htmlContent.content[currentContentIndex].description
      );
      setContentIndex(currentContentIndex);
      setNextPageLink(htmlContent.content[currentContentIndex + 1].title);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="App-title">
          <div
            className="header-image"
            style={{ backgroundImage: `url(${iconFile})` }}
          />
          <div>{htmlHeader}</div>
        </div>
        <div className="arrow-up"/>
      </header>
      <div className="App-main">
        <div
          className="App-image"
          style={{ backgroundImage: `url(${ipadMini})` }}
        />
        <section className="App-text">
          <div dangerouslySetInnerHTML={{ __html: `${contentDescription}` }} />
        </section>
      </div>

      <footer className="App-footer">
        <div className="back-options" onClick={handleClickBack}>
          <div className="arrow-left"/>
          {contentIndex ? "Back" : "This is the first page"}
        </div>
        <div className="previous-options" onClick={handleClick}>
          {nextPageLink}
          <div className="arrow-right"/>
        </div>
      </footer>
    </div>
  );
}

export default App;
