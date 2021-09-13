import React, { useEffect, useState } from "react";
import htmlContent from "./content.json";
import styles from "./App.module.scss";
import Header from "../src/component/header/header";
import Footer from "../src/component/footer/footer";
import Main from "../src/component/main/main";

function App() {
  const [htmlHeader, setHtmlHeader] = useState("");
  const [contentDescription, setContentDescription] = useState("");
  const [contentIndex, setContentIndex] = useState(0);
  const [nextPageLink, setNextPageLink] = useState("");
  const [previousPageLink, setPreviousPageLink] = useState("");

  useEffect(() => {
    const initialContentIndex = 0;
    setHtmlHeader(htmlContent.title);
    setContentDescription(htmlContent.content[initialContentIndex].description);
    setContentIndex(initialContentIndex);
    setNextPageLink(htmlContent.content[initialContentIndex + 1].title);
    setPreviousPageLink("This is the first page");
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
      setPreviousPageLink(htmlContent.content[currentContentIndex - 1].title);
    } else if (currentContentIndex === totalContentLength - 1) {
      setContentDescription(
        htmlContent.content[currentContentIndex].description
      );
      setContentIndex(currentContentIndex);
      setNextPageLink("This is the last page");
      setPreviousPageLink(htmlContent.content[currentContentIndex - 1].title);
    }
  };

  const handleClickBack = () => {
    const currentContentIndex = contentIndex - 1;
    console.log(currentContentIndex);
    if (currentContentIndex > 0) {
      setContentDescription(
        htmlContent.content[currentContentIndex].description
      );
      setContentIndex(currentContentIndex);
      setNextPageLink(htmlContent.content[currentContentIndex + 1].title);
      setPreviousPageLink(htmlContent.content[currentContentIndex - 1].title);
    } else if (currentContentIndex === 0) {
      setContentDescription(
        htmlContent.content[currentContentIndex].description
      );
      setContentIndex(currentContentIndex);
      setNextPageLink(htmlContent.content[currentContentIndex + 1].title);
      setPreviousPageLink("This is the first page");
    }
  };

  return (
    <div className={styles.App}>
      <Header header={htmlHeader} />
      <Main contentDescription={contentDescription} />
      <Footer
        handleClick={handleClick}
        handleClickBack={handleClickBack}
        previousPageLink={previousPageLink}
        nextPageLink={nextPageLink}
      />
    </div>
  );
}

export default App;
