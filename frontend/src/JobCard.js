import React, { Component } from "react";

class JobCard extends Component {
  render() {
    const { title, salary, equity } = this.props.job;
    return (
      <div className="card">
        <div className="card-body">
          <h3>{title}</h3>
          <p>Salary: {salary}</p>
          <p>Equity: {equity}</p>
          <button>Apply</button>
        </div>
      </div>
    );
  }
}

export default JobCard;
