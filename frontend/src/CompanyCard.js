import React, { Component } from "react";
import { Link } from "react-router-dom";

class CompanyCard extends Component {
  render() {
    const { name, description, handle } = this.props.company;
    return (
      <Link to={`/companies/${handle}`} className="company-card">
        <div className="card">
          <div className="card-body">
            <h3>{name}</h3>
            <p>{description}</p>
          </div>
        </div>
      </Link>
    );
  }
}

export default CompanyCard;
