import React, { useEffect, useState } from "react";
import "../styles/Home.css";
import { useHistory } from "react-router-dom";
function Home({ uniqueArticles }) {
  const [searhcVal, setSearchVal] = useState("");
  const [names, setNames] = useState([]);

  const history = useHistory();
  //   useEffect(() => {
  //     setNames(uniqueArticles);
  //   });
  useEffect(() => {
    setNames(uniqueArticles);
    if (searhcVal) {
      let arr = names.filter((str) => {
        return str.toLowerCase().includes(searhcVal.toLowerCase());
      });
      setNames(arr);
    }
  }, [uniqueArticles, searhcVal]);

  //   uniqueArticles = names;
  function clickHandle(str) {
    history.push(`${str}`);
  }
  function changeHandle(val) {
    setSearchVal(val.target.value);
    let arr = names.filter((str) => {
      return str.toLowerCase().includes(searhcVal.toLowerCase());
    });
    setNames(arr);
  }
  return (
    <div className="home-wrapper">
      <div className="heading">
        <h2>All Publishers</h2>
      </div>
      <div className="search">
        <div className="label">Publisher:</div>
        <input type="text" onChange={changeHandle} value={searhcVal} />
      </div>
      <div className="buttons-container">
        {names.length
          ? names.map((str, i) => {
              return (
                <button
                  onClick={() => {
                    clickHandle(str);
                  }}
                  className="button"
                  key={i}
                >
                  {str}
                </button>
              );
            })
          : ""}
      </div>
      {!names.length && <h2 className="load">Loading ...</h2>}
    </div>
  );
}

export default Home;
