import React, { Component } from "react";
import ArticleCard from "./ArticleCard";
import App from "../App";
import "./Fetch.css";

class Fetch extends Component {
  state = {
    loading: false,
    article: null,
    articles: []
  };

  componentDidMount() {
    const url = "https://jsonplaceholder.typicode.com/posts?_page=1&_limit=10";
    fetch(url)
      .then(resp => {
        return resp.json();
      })
      .then(json => {
        console.log("componentDidMount", json);
        this.setState({ loading: false, articles: json });
      });
  }

  render() {
    console.log("render of todolist", this.state);
    if (this.state.loading) {
      return <div> loading...</div>;
    }

    return (
      <div>
        <h1>App</h1>
        {this.state.articles.map(article => (
          <>
            <h3>{article.title}</h3>
            <p>{article.body}</p>
          </>
        ))}
      </div>
    );
  }
}
export default Fetch;
