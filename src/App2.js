import React, { Component } from "react";
import Popup from "reactjs-popup";
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
              <span className="navbar-brand">
                <img
                  src="../static/haymarket.png"
                  style={{
                    margin: "30 30 30 30",
                    display: "block",
                    width: "50%"
                  }}
                />
              </span>
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
          <div className="row justify-content-around">
            <div
              className="col-12 col-md-3 circle-background"
              style={{ backgroundColor: "rgb(78,195,210)" }}
              onClick={() =>
                window.open(
                  "https://login.microsoftonline.com/common/oauth2/authorize?response_type=code&client_id=e3910fb7-8dc1-44c8-9eed-834360032f61&scope=email&redirect_uri=https%3A%2F%2Faccounts.zoho.com%2Faccounts%2Foauthcallback&state=7fec5dbb8997ee21a1862494a66f33d58db7f5281ded42e516949e0f321abda9c98c51e99ebfe797ab037d4faa2de5bad6265d7fb5c833c992edd039a97ce69437b01a2c51d63c0c690bd4d5a555535e221a1f9ad3738b0b9750c6318b705352",
                  "_blank"
                )
              }
            >
              <Popup
                trigger={
                  <div className="hello">
                    <h3>
                      HR <br />
                      Self Service
                    </h3>
                  </div>
                }
                position="bottom center"
                on="hover"
                contentStyle={{ borderRadius: "5px", width: "30vw" }}
                className="popup"
              >
                <div className="row align-items-center">
                  <div className="col-md-6 ">
                    <img src="../static/microsoft_login.png" width={"100%"} />
                    {/* <iframe src="https://accounts.zoho.com/signin?servicename=zohopeople&signupurl=https://www.zoho.com/people/signup.html" width={'100%'}/> */}
                  </div>
                  <div className="col-md-6">
                    <p>
                      Access Zoho People by using your Microsoft Office 365
                      'username' and 'password' and enable single sign on
                      feature.
                    </p>
                  </div>
                </div>
              </Popup>
            </div>

            <div
              className="col-12 col-md-3 circle-background"
              style={{ backgroundColor: "rgb(242,123,48)" }}
              onClick={() =>
                window.open(
                  "https://login.microsoftonline.com/common/oauth2/authorize?response_type=code&client_id=68f7630c-af38-493e-af0d-42e1a23146a7&scope=email&redirect_uri=https%3A%2F%2Faccounts.zoho.com%2Faccounts%2Foauthcallback&state=7fec5dbb8997ee21a1862494a66f33d58db7f5281ded42e516949e0f321abda9c98c51e99ebfe797ab037d4faa2de5bae97025b2be9ddd828a024a0f271711646f84ecd995ebd933e87d8e1e7f01f15c432ece2277b5d38858c83c9583c1f33b",
                  "_blank"
                )
              }
            >
              <Popup
                trigger={
                  <div className="hello">
                    <h3>
                      Travel & <br />
                      Expense
                    </h3>
                  </div>
                }
                position="bottom center"
                on="hover"
                contentStyle={{ borderRadius: "5px", width: "30vw" }}
                className="popup"
              >
                <div className="row align-items-center">
                  <div className="col-md-6 ">
                    <img src="../static/microsoft_login.png" width={"100%"} />
                    {/* <iframe src="https://accounts.zoho.com/signin?servicename=zohopeople&signupurl=https://www.zoho.com/people/signup.html" width={'100%'}/> */}
                  </div>
                  <div className="col-md-6">
                    <p>
                      Access Zoho People by using your Microsoft Office 365
                      'username' and 'password' and enable single sign on
                      feature.
                    </p>
                  </div>
                </div>
              </Popup>
            </div>

            <div
              className="col-12 col-md-3 circle-background"
              style={{ backgroundColor: "rgb(234,31,77)" }}
              onClick={() => window.open("https://www.panalyt.com/", "_blank")}
            >
              <Popup
                trigger={
                  <div className="hello">
                    <h3>
                      People <br />
                      Analytics
                    </h3>
                  </div>
                }
                position="bottom center"
                on="hover"
                contentStyle={{ borderRadius: "5px", width: "30vw" }}
                className="popup"
              >
                <div className="row">
                  <div className="col-md-12">
                    <p>
                      Some Managers have access to useful data and analytics on
                      their team, via the Panalyt “People Analytics” tool. If
                      you have an account you access the tool by clicking this
                      link.
                    </p>
                    <p>This page also has an easy "forgot password" link</p>
                  </div>
                </div>
              </Popup>
            </div>
          </div>
        </div>
        <footer className="container-fluid">
          <div className="row align-items-center">
            <div className="col-6 col-md-2">
              <h4>Provided by:</h4>
            </div>
            <div className="col-6 col-md-3">
              <img src="../static/group1.png" style={{ width: "100%" }} />
            </div>
          </div>
        </footer>
      </>
    );
  }
}
