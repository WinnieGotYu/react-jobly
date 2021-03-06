import React, { Component } from "react";

class JobCard extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(evt) {
    evt.preventDefault();
    this.props.handleApply(this.props.job.id);
  }

  render() {
    const { title, salary, equity, state } = this.props.job;
    return (
      <div className="card">
        <div className="card-body">
          <h3>{title}</h3>
          <p>Salary: {salary}</p>
          <p>Equity: {equity}</p>
          {state === "applied" ? (
            <button className="btn btn-secondary" disabled>Applied</button>
          ) : (
            <button className="btn btn-primary" onClick={this.handleClick}>Apply</button>
          )}
        </div>
      </div>
    );
  }
}

export default JobCard;
