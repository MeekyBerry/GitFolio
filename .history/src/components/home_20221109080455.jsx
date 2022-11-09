// HOME COMPONENT - This is the home page component for the app. It displays the app info message and a button to navigate to the repositories page.
// Display Name, followers and following count, location, current local time and bio from my github portfolio
import React from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import "../assets/styles/home.css";
import { useState, useEffect } from "react";

const Home = () => {
  const [display, setDisplay] = useState();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>No repos Found</p>;

  return (
    <div className="home">
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="Home" />
      </Helmet>
      <h1 className="home--heading">
        Meeky's Github Portfolio repositories display app!!!
      </h1>
      <div className="home--wrapper">
        <div className="home--info">
          <div className="home--img">
            <img
              src={display?.avatar_url}
              alt="Michael"
              style={{ borderRadius: "50%", width: "15rem", height: "15rem" }}
            />
          </div>
          <div className="home--container__bottom">
            <p className="home--container__data">
              <strong>Name: </strong>
              {display?.name}
            </p>
            <p className="home--container__data">
              <strong>Bio: </strong>
              {display?.bio}
            </p>
            <p className="home--container__data">
              <strong>Followers: </strong>
              {display?.followers}
            </p>
            <p className="home--container__data">
              <strong>Following: </strong>
              {display?.following}
            </p>
            <p className="home--container__data">
              <strong>Location: </strong>
              {display?.location}
            </p>
            <p className="home--container__data">
              <strong>Joined: </strong>
              {display?.created_at}
            </p>
            <p className="home--container__data">
              <strong>Local Time: </strong>
              {new Date().toLocaleTimeString()}
            </p>
            <p className="home--container__data">
              <strong>Public Repos: </strong>
              {display?.public_repos}
            </p>
            <p className="home--container__data">
              <strong>Public Gists: </strong>
              {display?.public_gists}
            </p>
            <p className="home--container__data">
              <strong>Blog: </strong>
              {display?.blog}
            </p>
            <p className="home--container__data">
              <strong>Twitter: </strong>
              {display?.twitter_username}
            </p>
            <p className="home--container__data">
              <strong>Company: </strong>
              {display?.company}
            </p>
            <p className="home--container__data">
              <strong>Updated: </strong>
              {display?.updated_at}
            </p>
            <p className="home--container__data">
              <strong>HTML URL: </strong>
              {display?.html_url}
            </p>
            <p className="home--container__data">
              <strong>Repos URL: </strong>
              {display?.repos_url}
            </p>
            <p className="home--container__data">
              <strong>Events URL: </strong>
              {display?.events_url}
            </p>
            <p className="home--container__data">
              <strong>Received Events URL: </strong>
              {display?.received_events_url}
            </p>
            <p className="home--container__data">
              <strong>Type: </strong>
              {display?.type}
            </p>
            <p className="home--container__data">
              <strong>Site Admin: </strong>
              {display?.site_admin}
            </p>
            <p className="home--container__data">
              <strong>Node ID: </strong>
              {display?.node_id}
            </p>
            <p className="home--container__data">
              <strong>Gravatar ID: </strong>
              {display?.gravatar_id}
            </p>
            <p className="home--container__data">
              <strong>URL: </strong>
              {display?.url}
            </p>
            <p className="home--container__data">
              <strong>Organizations URL: </strong>
              {display?.organizations_url}
            </p>
            <p className="home--container__data">
              <strong>Subscriptions URL: </strong>
              {display?.subscriptions_url}
            </p>
          </div>
        </div>
        <div className="home--paragraph">
          <h1 className="home--paragraph__heading">Hi, I'm Elue Michael</h1>
          <p className="home--paragraph__text">
            I'm a Frontend Developer. I love building beautiful and functional
            websites and apps. I'm also a student of AltSchool Africa School of
            Engineering. I'm currently learning React.
            <p>
              This is a React app that uses Github API to fetch and display a
              list of my github repositories and some extra data about each
              repository when "View Repositories" button is clicked. It also
              displays my name, followers and following count, location, current
              local time and bio from my github portfolio.
            </p>
          </p>
          <button className="home--btn" onClick={() => navigate("/portfolio")}>
            View Repositories
          </button>
        </div>
      </div>
      <footer className="footer">
        <p className="attribution">&copy;meekyberry2022</p>
      </footer>
    </div>
  );
};

export default Home;
