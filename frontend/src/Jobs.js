import React, { Component } from "react";
import Search from "./Search";
import JobCard from "./JobCard";
import JoblyApi from "./JoblyApi";
import { Redirect } from "react-router-dom";

class Jobs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: [],
      loading: true,
      searchValue: ""
    };
    this.getSearch = this.getSearch.bind(this);
  }
  async componentDidMount() {
    let jobs = await JoblyApi.getJobs();
    this.setState({ jobs: jobs, loading: false });
  }

  async getSearch(searchValue) {
    let jobs = await JoblyApi.getJobs(searchValue);
    this.setState({ jobs: jobs, loading: false });
  }
  
  render() {
    return (
      <div className="Jobs">
        <Search getSearch={this.getSearch} />
        { this.props.isLoggedIn ? 
        ( this.state.loading ? (
          <h1>Loading...</h1>
        ) : (
          <div>
            {this.state.jobs.map(job => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        )) : <Redirect to="/login" />
            }
      </div>
    );
  }
}

export default Jobs;
