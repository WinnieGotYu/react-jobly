import React, { Component } from "react";
import JoblyApi from "./JoblyApi";
import JobCard from "./JobCard";
import { Redirect } from "react-router-dom";

class Company extends Component {
  constructor(props) {
    super(props);
    this.state = {
      company: {},
      loading: true
    };
    this.handleApply = this.handleApply.bind(this);
  }
  async componentDidMount() {
    let handle = this.props.match.params.name;
    let company = await JoblyApi.getCompany(handle);
    this.setState({ company: company, loading: false });
  }

  async handleApply(jobId) {
    await JoblyApi.apply(jobId);
    this.setState(st => ({
      company: {
        ...st.company,
        jobs: st.company.jobs.map(job => {
          return job.id === jobId ? { ...job, state: "applied" } : job;
        })
      }
    }));
  }

  render() {
    return (
      <div className="container">
        {this.props.isLoggedIn ? (
          this.state.loading ? (
            <h1>Loading...</h1>
          ) : (
            <div className="card-body">
              {/* <pre>{JSON.stringify(this.state.company, null, 4)}</pre> */}
              <h2>{this.state.company.name}</h2>
              <p>{this.state.company.description}</p>
              {this.state.company.jobs.map(job => (
                <JobCard
                  key={job.id}
                  job={job}
                  handleApply={this.handleApply}
                />
              ))}
            </div>
          )
        ) : (
          <Redirect to="/login" />
        )}
      </div>
    );
  }
}

export default Company;
