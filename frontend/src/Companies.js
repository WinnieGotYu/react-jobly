import React, { Component } from "react";
import Search from "./Search";
import CompanyCard from "./CompanyCard";
import JoblyApi from "./JoblyApi";

class Companies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      companies: [],
      loading: true,
      searchValue: ""
    };
    this.getSearch = this.getSearch.bind(this);
  }
  async componentDidMount() {
    let companies = await JoblyApi.getCompanies();
    console.log(companies);
    this.setState({ companies: companies, loading: false });
  }

  async getSearch(searchValue) {
    let companies = await JoblyApi.getCompanies(searchValue);
    this.setState({ companies: companies, loading: false });
  }

  render() {
    // let companies = JoblyApi.getCompany("scott-smith")
    // console.log(JoblyApi.getCompany("scott-smith"))
    return (
      <div className="Companies">
        <Search getSearch={this.getSearch} />
        {/* <pre>{JSON.stringify(this.state.companies, null, 4)}</pre> */}
        {this.state.loading ? (
          <h1>Loading...</h1>
        ) : (
          <div>
            {this.state.companies.map(company => (
              <CompanyCard key={company.handle} company={company} />
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default Companies;
