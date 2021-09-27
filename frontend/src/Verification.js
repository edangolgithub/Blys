import React, { Component } from "react";
import ReactCodeInput from "react-verification-code-input";
import { sendVerificationRequest } from "./Lib";
import Error from "./Error";
import { withRouter } from "react-router";
import ClockLoader from './Loader'
import "./App.css";

export class Verification extends Component {
  isCharNumber(c) {
    return c >= "0" && c <= "9";
  }
  constructor(props) {
    super(props);
    this.state = {
      data: "",
      verificationerror: false,
      verifying:false
    };
    this.verify = this.verify.bind(this);
    this.inputcompleted = this.inputcompleted.bind(this);
    this.inputchanged = this.inputchanged.bind(this);
  }
  async verify(e) {
    e.preventDefault();
    this.setState({verifying:true})
    this.setState({ verificationerror: false });
    const reply = await sendVerificationRequest(this.state.data);

    if (reply !== "ok") {
      this.setState({ verificationerror: true });
      this.setState({verifying:false})
    } else {
      this.props.history.push("/success");
    }
  }
  inputchanged(char) {
    if (!this.isCharNumber(char)) {
    }
  }
  inputcompleted(e) {
    this.setState({ data: e });
  }

  render() {
    return (
      <div className="App">
        <h3> Verification Code</h3>
        <div className="verification-para">
          <ReactCodeInput
            placeholder={["3", "2", "1", "4", "2", "0"]}
            className="validation-box"
            onComplete={this.inputcompleted}
            onChange={this.inputchanged}
          />
         {
         this.state.verifying ? (
             <button onClick={this.verify}> <ClockLoader /> </button>): <button onClick={this.verify}>Submit</button>
         }
        </div>
        <div>
          {this.state.verificationerror === true ? <Error /> : <span></span>}
        </div>
      </div>
    );
  }
}

export default withRouter(Verification);
