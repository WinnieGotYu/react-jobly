import React, { Component } from "react";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.getSearch(this.state.searchInput);
    this.setState({
      searchInput: ""
    });
  }

  render() {
    return (
      <div className="Search">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="searchInput"
            placeholder="Enter search term..."
            onChange={this.handleChange}
            value={this.state.searchInput}
          />
          <button> Submit </button>
        </form>
      </div>
    );
  }

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     companies: [],
  //     loading: true
  //   }
  // }
  // async componentDidMount() {
  //   let companies = await JoblyApi.getCompanies()
  //   this.setState({ companies: companies, loading: false })
  // }

  // render() {
  //   // let companies = JoblyApi.getCompany("scott-smith")
  //   // console.log(JoblyApi.getCompany("scott-smith"))
  //   return (
  //     <div className="Companies">
  //       <Search />
  //       {/* <pre>{JSON.stringify(this.state.companies, null, 4)}</pre> */}
  //       { this.state.loading
  //       ? <h1>Loading...</h1>
  //       : <div>
  //       {this.state.companies.map(company => <CompanyCard key={company.handle} company={company}/>)}
  //       </div> }
  //     </div>
  //   );
  // }
}

export default Search;
