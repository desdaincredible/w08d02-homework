import React, { Component } from 'react';

class ArticleContainer extends Component {
    constructor(){
        super();
        this.state = {
            articles: [],
        }
    }
    componentDidMount(){
        this.getArticles();
    }
    getArticles = async () => {
        // API call
        const searchURL = 'https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=e47262b0f8134548a5f8414e52d27d55';
        const result = await fetch(searchURL);
        const parsedResult = await result.json();
        const articlesArray = parsedResult.articles;
        const articlesShow = articlesArray.map((article) => {
            return (
                <div>
                    <h4>{ article.title }</h4>
                    <p>{ article.description } </p>
                    <a target="_blank" href={ article.url }><button className="btn btn-secondary">Read More</button></a>
                    <hr />
                </div>
            )
        })
        this.setState({
            articles: articlesShow
        })
    };
    render(){
        return(
            <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-sm-12">
            <h1>Articles</h1>
            { this.state.articles }
              </div>
            </div>
          </div>
        )
    }
}

export default ArticleContainer;