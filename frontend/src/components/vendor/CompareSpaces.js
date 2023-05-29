import React, { useEffect, useState } from "react";
import { Octokit } from "@octokit/rest";
import { Link } from "react-router-dom";
const octokit = new Octokit({
  auth: "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",
});
const CompareSpaces = () => {
  const [devUsername, setDevUsername] = useState("");
  // const [devData, setDevData] = useState(null);

  const [compareDevs, setCompareDevs] = useState([]);

  const [repoData, setRepoData] = useState([]);

  const [devRank, setDevRank] = useState(null);

  // const searchDeveloper = async () => {
  //   const response = await fetch(`https://api.github.com/users/${devUsername}`);
  //   const data = await response.json();
  //   console.log(data);
  //   // setDevData(data);
  //   setCompareDevs([...compareDevs, data]);
  //   getUserTech(devUsername);
  // };

  const searchDeveloper = async () => {
    const { data } = await octokit.request("GET /users/{user}", {
      user: devUsername,
    });
    console.log(data);
    // setDevData(data);
    setCompareDevs([...compareDevs, data]);
    // getUserTech(devUsername);
  };

  useEffect(() => {
    // getDevRank("m-triple-m");
  }, []);

  const getUserTech = async (username) => {
    const res = await fetch(`https://api.github.com/users/${username}/repos`, {
      headers: {
        Authorization: `Bearer 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`,
      },
    });
    const repos = await res.json();
    const technologies = new Set(
      repos.map((repo) => repo.language).filter((language) => language !== null)
    );
    console.log(technologies);
  };

  const getDevContributionChart = async (username) => {
    fetch(`https://github.com/users/${username}/contributions`)
      .then((response) => response.text())
      .then((data) => {
        const parser = new DOMParser();
        const svg = parser
          .parseFromString(data, "image/svg+xml")
          .querySelector("svg");
        document.body.appendChild(svg);
      });
  };

  const getDevRank = (username) => {
    fetch(`https://api.github.com/users/${username}/repos`)
      .then((response) => response.json())
      .then((repos) => {
        const rankings = {};
        repos.forEach(async (repo) => {
          const {
            stargazers_count,
            forks_count,
            size,
            open_issues_count,
            watchers_count,
          } = repo;

          const res = await fetch(
            `https://api.github.com/repos/${username}/${repo.name}/contributors`
          );
          const contributors = await res.json();

          console.log(contributors);
          contributors.forEach((contributor) => {
            const { login } = contributor;
            if (rankings[login]) {
              rankings[login].score += stargazers_count;
              rankings[login].repositories.push(repo);
            } else {
              rankings[login] = {
                score: stargazers_count,
                repositories: [repo],
              };
            }
          });
        });
        const sortedRankings = Object.entries(rankings)
          .sort((a, b) => b[1].score - a[1].score)
          .reduce((obj, [key, value]) => {
            obj[key] = value;
            return obj;
          }, {});
        console.log(sortedRankings);
        setDevRank(sortedRankings);
      });
  };

  const devCard = (devData) => {
    if (devData !== null) {
      return (
        <div className="card">
          <img src={devData.avatar_url} className="card-img-top" alt="" />
          <div className="card-body">
            <div className="">
              <p className="text-center text-primary fw-bold">{devData.bio}</p>
              {devData.hireable && (
                <button className="w-100 btn btn-success my-4">
                  <i class="fas fa-laptop"></i> Hireable
                </button>
              )}
              <p>
                <strong>Location: {devData.location}</strong> 
              </p>
              <p>
                <strong>Username: </strong> {devData.login}
              </p>
              <p>
                <strong>Github Repositories: </strong> {devData.public_repos}
              </p>
              <p>
                <strong>Followers: </strong> {devData.followers}
              </p>
              <p>
                <strong>Followers: </strong> {devData.following}
              </p>
              <p>
                <strong>Gists: </strong> {devData.public_gists}
              </p>
              <p>
                <strong>Company: </strong> {devData.company}
              </p>
              <div className="d-flex">
                <Link
                  to={"/user/devdetails/" + devData.login}
                  className="btn btn-primary mt-4 me-2"
                >
                  View More
                </Link>
                <Link to={devData.url} className="btn btn-dark mt-4 me-2">
                  &nbsp;&nbsp;<i class="fa-brands fa-github"></i> Github Profile
                </Link>
              </div>
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <div>
      <header>
        <div className="container py-5">
          <p className="display-4 text-center fw-bold">Compare Developer</p>
        </div>
      </header>
      <hr />
      <div className="container">
        <div className="input-group">
          <input
            className="form-control"
            onChange={(e) => setDevUsername(e.target.value)}
          />
          <button className="btn btn-primary" onClick={searchDeveloper}>
            <i className="fas fa-search"></i> Search Developer
          </button>
        </div>
      </div>
      <div className="mt-5">
        <div className="container-fluid">
          <div className="row">
            {compareDevs.map((devData) => (
              <div className="col-md">{devCard(devData)}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompareSpaces;
