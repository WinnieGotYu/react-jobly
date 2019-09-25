import React, { Component } from "react";

class CompanyCard extends Component {
  render() {
    const { name, description } = this.props.company;
    return (
      <div>
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
    );
  }
}

export default CompanyCard;
