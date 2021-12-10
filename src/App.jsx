import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { DATA_URL } from "./config/config";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Home from "./components/Home";
import Publisher from "./components/Publisher";

function App() {
  const [articles, setArtcles] = useState([]);
  const [uniqueArticles, setUniqueArticles] = useState([]);
  useEffect(() => {
    fetch(DATA_URL)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setArtcles(res);
        return res;
      })
      .then((res) => {
        let publisherArr = res.map((obj) => {
          return obj.PUBLISHER;
        });
        let temp = new Set(publisherArr);
        setUniqueArticles(Array.from(temp));
      });
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" exact>
          <Home uniqueArticles={uniqueArticles} />
        </Route>

        <Route path="/:publisher" exact>
          <Publisher articles={articles} />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;

CATEGORY: "t";
HOSTNAME: "www.valuewalk.com";
ID: 967;
PUBLISHER: "ValueWalk";
TIMESTAMP: 1394470506062;
TITLE: "Microsoft Xbox One Titanfall Another Non-1080p Title";
URL: "http://www.valuewalk.com/2014/03/microsoft-xbox-one-titanfall/";
