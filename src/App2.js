import React, { Component } from "react";
import "./App2.css";
export class App2 extends Component {
  componentDidMount() {
    window.document.title = "Black Mountain";
    // document.body.style.backgroundColor = "#80b4ec";
  }
  render() {
    return (
      <>
        <header>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div>
              <a className="navbar-brand" href="#">
                <img
                  src="../static/haymarket.png"
                  style={{
                    margin: "30 30 30 30",
                    display: "block",
                    width: "50%"
                  }}
                />
              </a>
              <span className="navbar-text pull-right">
                Independence | Creativity | Expertise | Dynamism | Integrity
              </span>
            </div>
          </nav>
        </header>
        <div className="container-fluid" style={{ marginTop: "2vh" }}>
          <div className="row" style={{ height: "15vh" }}>
            <div className="col align-items-center">
              <h1 style={{ color: "rgb(127,127,127)", fontSize: "65px" }}>
                HR Portal
              </h1>
            </div>
          </div>
        </div>
        <div className="container">
          <div
            className="row align-items-center justify-space-around"
            style={{ height: "40vh" }}
          >
            <div
              className="col circle-background align-self-center"
              style={{ backgroundColor: "rgb(78,195,210)" }}
              onClick={() =>
                window.open(
                  "https://login.microsoftonline.com/common/oauth2/authorize?response_type=code&client_id=e3910fb7-8dc1-44c8-9eed-834360032f61&scope=email&redirect_uri=https%3A%2F%2Faccounts.zoho.com%2Faccounts%2Foauthcallback&state=7fec5dbb8997ee21a1862494a66f33d58db7f5281ded42e516949e0f321abda9c98c51e99ebfe797ab037d4faa2de5bad6265d7fb5c833c992edd039a97ce69437b01a2c51d63c0c690bd4d5a555535e221a1f9ad3738b0b9750c6318b705352",
                  "_blank"
                )
              }
            >
              <h3>
                HR <br />
                Self Service
              </h3>
            </div>

            <div
              className="col circle-background align-self-center"
              style={{ backgroundColor: "rgb(242,123,48)" }}
              onClick={() =>
                window.open(
                  "https://login.microsoftonline.com/common/oauth2/authorize?response_type=code&client_id=68f7630c-af38-493e-af0d-42e1a23146a7&scope=email&redirect_uri=https%3A%2F%2Faccounts.zoho.com%2Faccounts%2Foauthcallback&state=7fec5dbb8997ee21a1862494a66f33d58db7f5281ded42e516949e0f321abda9c98c51e99ebfe797ab037d4faa2de5bae97025b2be9ddd828a024a0f271711646f84ecd995ebd933e87d8e1e7f01f15c432ece2277b5d38858c83c9583c1f33b",
                  "_blank"
                )
              }
            >
              <h3>
                Travel &
                <br /> Expenses
              </h3>
            </div>

            <div
              className="col circle-background  align-self-center"
              style={{ backgroundColor: "rgb(234,31,77)" }}
              onClick={() => window.open("https://www.panalyt.com/", "_blank")}
            >
              <h3>
                People <br />
                Analytics
              </h3>
            </div>
          </div>
        </div>
        <footer
          className="container-fluid"
          style={{ position: "absolute", bottom: "0" }}
        >
          <div className="row align-items-end">
            <div className="col-2">
              <h4>Provided by:</h4>
            </div>
            <div className="col-3">
              <img src="../static/group1.png" width="70%" />
            </div>
          </div>
        </footer>
      </>
    );
  }
}
