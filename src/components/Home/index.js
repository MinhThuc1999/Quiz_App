import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
function Home() {
  const hanleClick = () => {};
  return (
    <div style={{ padding: "10%" }}>
      <p className="home-logo">
        <img
          src="https://play-lh.googleusercontent.com/WkK8-_NYDo0f15qfGsZnn4iZ9G7Q-MMloycE5mdnClbUNnkQ50hZrkWi5xxubg5_F8E"
          alt=""
        />
      </p>
      <p style={{ marginTop: "50px" }}>
        <Link to={"/quiz"}>
          <button className="button-submit">Start Quiz!</button>
        </Link>
      </p>
    </div>
  );
}

export default Home;
