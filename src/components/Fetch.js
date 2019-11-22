import React, { Component } from "react";
import BreweryCart from "./BreweryCart";
import App from "../App";
import "./Fetch.css";
import LikeCounter from "./LikeComponent";

class Fetch extends Component {
  state = {
    loading: false,
    article: null,
    breweries: []
  };

  componentDidMount() {
    // const url = "https://jsonplaceholder.typicode.com/posts?_page=1&_limit=10"; // articles
    const url = "https://api.openbrewerydb.org/breweries";
    fetch(url)
      .then(resp => {
        return resp.json();
      })
      .then(json => {
        console.log("componentDidMount", json);
        this.setState({ loading: false, breweries: json });
      });
  }

  render() {
    console.log("render of todolist", this.state);
    if (this.state.loading) {
      return <div> loading...</div>;
    }

    return (
      <div>
        {/* <h1>App</h1> */}
        {this.state.breweries.map(brewery => (
          <>
            <h3>Name: {brewery.name}</h3>
            {/* <p>Id: {brewery.id}</p> */}
            <p>Brewery type: {brewery.brewery_type}</p>
            <p>State: {brewery.state}</p>
            <p>Postal code: {brewery.postal_code}</p>
            <p>city: {brewery.city}</p>
            <a href={brewery.website_url} Website></a>
            <LikeCounter />
          </>
        ))}
      </div>
    );
  }
}
export default Fetch;
