import React, { Component } from "react";
import { Link } from "react-router-dom";

class CompanyCard extends Component {
  render() {
    const { name, description, handle } = this.props.company;
    return (
      <Link to={`/companies/${handle}`} className="CompanyCard-a">
        <div className="CompanyCard">
          <h3>{name}</h3>
          <p>{description}</p>
        </div>
      </Link>
    );
  }
}

export default CompanyCard;
