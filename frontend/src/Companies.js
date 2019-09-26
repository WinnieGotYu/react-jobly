import React, { Component } from "react";
import Search from "./Search";
import CompanyCard from "./CompanyCard";
import JoblyApi from "./JoblyApi";
import { Redirect } from "react-router-dom";

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
    this.setState({ companies: companies, loading: false });
  }

  async getSearch(searchValue) {
    let companies = await JoblyApi.getCompanies(searchValue);
    this.setState({ companies: companies, loading: false });
  }

  render() {
    return (
      <div className="Companies">
        <Search getSearch={this.getSearch} />
        {this.props.isLoggedIn ? (
          this.state.loading ? (
            <h1>Loading...</h1>
          ) : (
            <div>
              {this.state.companies.map(company => (
                <CompanyCard key={company.handle} company={company} />
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

export default Companies;
