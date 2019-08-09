import React, { Component } from "react";
import { MdSchool } from "react-icons/md";
import Prism from "prismjs";
import "./prism.css";
export default class About extends Component {
  componentDidMount() {
    Prism.highlightAll();
  }
  render() {
    return (
      <div className="componentCard">
        <MdSchool />
        <h1>About Component</h1>
        <pre>
          <code className="language-javascript">
            {`
              onSubmit(e) {
                e.preventDefault();
                const job = {
                  title: 'Developer',
                  company: 'Facebook' 
                  };
                }
            `}
          </code>
        </pre>
      </div>
    );
  }
}
