import React from "react";
import MainContent from "../MainContent/MainContent";
import { Spinner } from "../../components";
import "./Main.scss";

function Main() {
  const [loading, setloading] = React.useState(false);

  React.useEffect(() => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 3000);
  }, []);
  return <div className="main">{loading ? <Spinner /> : <MainContent />}</div>;
}

export default Main;
