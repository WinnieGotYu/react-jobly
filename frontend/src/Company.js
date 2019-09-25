import React, { Component } from 'react';
import JoblyApi from './JoblyApi';
import CompanyCard from './CompanyCard'
import axios from 'axios';

class Company extends Component {
  constructor(props) {
    super(props);
    this.state = {
      company: {},
      loading: true
    }
  }
  async componentDidMount() {
    let handle = this.props.match.params.name;
    let company = await JoblyApi.getCompany(handle)
    this.setState({ company: company, loading: false })
  }

  render() { 
    return ( 
      <div>
        { this.state.loading 
        ? (<h1>Loading...</h1>) 
        : (<div>
          <pre>{JSON.stringify(this.state.company, null, 4)}</pre>
          <h2>{this.state.company.name}</h2>
          <p>{this.state.company.description}</p>
          {this.state.company.jobs.map(job => <CompanyCard key={job.id} job={job}/>)}
        </div>)}
      </div> 
    );
  }
}
 
export default Company;