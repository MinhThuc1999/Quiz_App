import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div>
      <p className="home-logo">
        <img
          src="https://play-lh.googleusercontent.com/WkK8-_NYDo0f15qfGsZnn4iZ9G7Q-MMloycE5mdnClbUNnkQ50hZrkWi5xxubg5_F8E"
          alt=""
        />
      </p>
      <p>
        <button>
          <Link to={"/quiz"}>Start Quiz!</Link>
        </button>
      </p>
    </div>
  );
}

export default Home;
