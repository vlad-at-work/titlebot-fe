import { useState } from "react";
import logo from "./logo.svg";
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";
import LoadingError from "./LoadingError";
import "./App.css";

//     https://www.vlad.ai/

function App() {
  const [url, setUrl] = useState("https://vlad.ai");
  const [loading, setLoading] = useState(false);
  const [loadingError, setLoadingError] = useState(false);
  const [fetchResult, setFetchResult] = useState(null);

  const handleRequestButton = (e) => {
    setFetchResult(null);
    setLoading(true);
    setLoadingError(false);
    axios
      // .post("http://localhost:8080/title", {
      //   url: "https://vlad.ai",
      // })
      .post("http://localhost:8080/title", {
        url,
      })
      .then(function (response) {
        setLoading(false);
        setFetchResult(response);
        console.log(response);
      })
      .catch(function (error) {
        setLoading(false);
        setLoadingError(true);
        console.log(error);
      });
  };

  const handleRequestUrlChange = (e) => {
    console.log(e.target.value);
    setUrl(e.target.value);
  };

  return (
    <div className="container">
      <div className="container">
        <h1 className="title">Title + favicon grabber is here!</h1>
        <h2 className="subtitle">
          Type in any valid URL and you'll see the title and favicon of the URL.
        </h2>
        <div>
          <div className="columns">
            <div className="column"></div>
            <div className="column">
              <span className="label">URL Goes here:</span>
              <input
                className="input"
                value={url}
                onChange={handleRequestUrlChange}
              />
            </div>
            <div className="column"></div>
          </div>
        </div>
        <br />
        <button
          className="button is-large is-primary"
          disabled={loading}
          onClick={handleRequestButton}
        >
          Fetch!
        </button>
      </div>

      <br />

      {loadingError ? <LoadingError /> : null}
      {loading ? <ClipLoader /> : null}
      {fetchResult ? (
        <div className="container">
          <div className="card">
            <div className="card-content">
              <div className="columns">
                <div className="column"><img src={fetchResult?.data?.favicon} width="32" /></div>
                <div className="column"><div className="card-content">{fetchResult?.data?.title}</div></div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default App;
