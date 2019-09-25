import React, { Component } from 'react';
import Search from './Search';
import CompanyCard from './CompanyCard';
import JoblyApi from './JoblyApi'

class Companies extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    // let companies = JoblyApi.getCompany("scott-smith")
    // console.log(JoblyApi.getCompany("scott-smith"))
    return (
      <div>
        <Search />
        {/* <CompanyCard company={companies}/> */}
        <CompanyCard />
      </div>
    );
  }
}

export default Companies;