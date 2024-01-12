import { useState } from "react";
import "./App.css";
import Folder from "./Folder";
import { commentSection, folderData } from "./data";
import ReplySection from "./ReplySection";
import Test from "./Test";

const RenderReplySec = () => {
  return (
    <>
      {commentSection.map((item, index) => {
        return <ReplySection data={item} key={index} />;
      })}
    </>
  );
};

function App() {
  const [routeState, setRouteState] = useState(`${window.location.pathname}`);

  function ClickMe() {
    console.log(window.location);
    return (
      <>
        <a href="/folder" onClick={() => setRouteState("/folder")}>
          Folder
        </a>
        <br></br>
        <a href="/tweet" onClick={() => setRouteState("/tweet")}>
          Tweet
        </a>
        <br></br>
        <a href="/test" onClick={() => setRouteState("/test")}>
          Test
        </a>
      </>
    );
  }
  const renderComp = () => {
    console.log(routeState);
    switch (routeState) {
      case "/folder":
        return <Folder data={folderData} />;
      case "/tweet":
        return <RenderReplySec />;
      case "/test":
        return <Test />;
      case "/":
        return <ClickMe />;
      default:
        return <ClickMe />;
    }
  };
  return <div className="folder">{renderComp()}</div>;
}

export default App;

