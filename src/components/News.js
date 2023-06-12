import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'

export class News extends Component {


    static defaultProps = {
        country: 'in',
        pageSize: 20,
        category: "general"
    }

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
    }

    // we define use state inside the constructor
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
        if(this.props.category === 'general'){
            document.title = `NewsPedia - ${this.capitalize(this.props.category)}`;
        }
        else{
            document.title = `${this.capitalize(this.props.category)} - NewsPedia`;
        }
    }

    async updateNews() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2f8228e3f6d64628afcb69b98a66bf61&page=${this.state.page} &pageSize=${this.props.pageSize}`
        this.setState({ loading: true })
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        })
    }

    // it will run at the end after the render function
    async componentDidMount() {
        this.updateNews();
    }


    handlePrevClick = async () => {
        this.setState({
            page: this.state.page - 1
        })
        this.updateNews()

    }

    handleNextClick = async () => {
        this.setState({
            page: this.state.page + 1
        })
        this.updateNews()
    }

    capitalize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

    // can't change state inside the render function
    render() {
        return (
            <div className="container my-3">
                <h1 className="text-center" style={{ margin: "30px" }}> <strong>NewsPedia - Top {this.capitalize(this.props.category)} Headlines</strong></h1>
                {this.state.loading && <Spinner />}
                <div className='row'>
                    {!this.state.loading && this.state.articles.map((element) => {

                        return (<div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                        </div>)
                    })}
                </div>
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick} > &larr; Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick} >Next &rarr; </button>
                </div>
            </div>
        )
    }
}

export default News
