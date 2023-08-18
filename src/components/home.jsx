import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import "../assets/styles/home.css";
import { useState, useEffect } from "react";
import Load from "../assets/img/Interwind.gif";

const Home = () => {
  const [display, setDisplay] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    fetch(`https://api.github.com/users/MeekyBerry`)
      .then((response) => response.json())
      .then((data) => {
        setDisplay(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  const {
    name,
    followers,
    following,
    location,
    bio,
    avatar_url,
    public_repos,
  } = display || {};

  return (
    <div className="home">
      {loading ? (
        <div className="home--loading">
          <img
          src={Load}
          alt="Loading..."
          style={{
            width: "5rem",
            height: "5rem",
          }}
        />
        </div>
      ) : error ? (
        <p className="home--error">
          Network Error{" "}
          <span className="home--error__span"> please refresh the page.</span>
        </p>
      ) : (
        <div className="home--content">
          <Helmet>
            <title>Home Page</title>
            <meta name="description" content="Home" />
          </Helmet>
          <div className="home--container__top">
            <Link to="search" className="home--container__topLink">
              Click me to search for other users repositories <span>👈</span>
            </Link>
          </div>
          <div className="home--container">
                <p className="home--paragraph__text">
                 Search for your own or any user's repositories using
                  <strong> GitFolio</strong> and view them in the app. <br/>Test our error boundary component on the Test Error page.
                </p>
              <div className="home--wrapper">
                <h1 className="home--info__heading">{name} github profile</h1>
                <div className="home--info">
                  <div className="home--img">
                    <img
                      src={avatar_url}
                      alt="My img"
                      style={{
                        borderRadius: "1rem",
                        width: "100%",
                        height: "100%",
                        objectFit: "cover"
                      }}
                    />
                  </div>
                  <div className="home--container__bottom">
                    <p className="home--container__data intro">
                      <strong className="intro__strong">Intro </strong>
                      {bio}
                    </p>
                    <p className="home--container__data">
                      <strong>Followers: </strong>
                      {followers}{" "}
                    </p>
                    <p className="home--container__data">
                      <strong>Following: </strong>
                      {following}{" "}
                    </p>
                    <p className="home--container__data">
                      <strong>Public Repos: </strong>
                      {public_repos}{" "}
                    </p>
                    <p className="home--container__data">
                      <strong>Location: </strong>
                      {location}{" "}
                    </p>
                  </div>
                </div>
                <div className="home--button">
                  <button
                    className="home--btn"
                    onClick={() => navigate("/repos")}
                  >
                    View My Repos
                  </button>
                </div>
              </div>
            </div>
        </div>
      )}
    </div>
  );
};

export default Home;
