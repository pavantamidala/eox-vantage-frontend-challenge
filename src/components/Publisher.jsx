import React, { useEffect, useState } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import "../styles/Publisher.css";

function Publisher({ articles }) {
  let { publisher } = useParams();
  const [activePublisher, setActivePublisher] = useState("");
  let data = articles.filter((obj) => {
    return obj.PUBLISHER === publisher;
  });
  useEffect(() => {
    setActivePublisher(data[0].PUBLISHER);
  }, []);
  data.sort(function (a, b) {
    return new Date(b) - new Date(a);
  });
  return (
    <div className="wrapper-publisher">
      <div className="header">
        <div className="back">
          <Link to="/">Back To Publishers</Link>
        </div>
        <h2> Articles By {activePublisher} </h2>
      </div>
      <div className="publisher-container">
        {data.map((obj, i) => {
          return (
            <div className="single" key={i}>
              <div className="title">
                <p className="title">{obj.TITLE}</p>
              </div>
              <div className="description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod
                consequuntur numquam fugiat reiciendis modi at itaque? Accusamus
                ipsam magnam id.
              </div>
              <div className="time-publisher">
                <div className="time">
                  {new Date(obj.TIMESTAMP).toLocaleDateString()}
                </div>
                <div className="publisher"> by {obj.PUBLISHER}</div>
              </div>
              <div className="article-link">
                <div className="host">{obj.HOSTNAME}</div>
                <div className="link">
                  <a href={obj.URL}>link to article</a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Publisher;
