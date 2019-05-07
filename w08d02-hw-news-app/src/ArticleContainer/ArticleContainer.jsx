import React, { Component } from 'react';
import Article from './Article/Article';

class ArticleContainer extends Component {
    constructor(){
        super();
        this.state = {
            articles: ['testing', 'one', 'two']
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
        this.setState({
            articles: parsedResult
        });
        console.log(this.state.articles)
    };
    render(){
        // const articlesList = this.state.articles.map((article) => {
        //     return(
        //         <div>Stuff</div>
        //         // <Article article={ article } />
        //     )
        // })
        return(
            <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-sm-6">
                <div className="center-text">  
            <h1>Articles</h1>
            <div key={ this.state.articles.title}>
            {
                JSON.stringify(this.state.articles.articles)
            }
            </div>
                </div>
              </div>
            </div>
          </div>
        )
    }
}

export default ArticleContainer;