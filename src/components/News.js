import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
import error from './error.png'
import {Link} from "react-router-dom";

const News = (props) => {

    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)

    const capitalize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

    const updateNews = async () => {
        props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page} &pageSize=${props.pageSize}`
        setLoading(true)
        let data = await fetch(url);
        props.setProgress(30);
        let parsedData = await data.json();
        props.setProgress(70);
        setArticles(parsedData.articles)
        setLoading(false)
        setTotalResults(parsedData.totalResults)
        props.setProgress(100);
    }

    useEffect(() => {
        if (props.category === 'general') {
            document.title = `NewsPedia - ${capitalize(props.category)}`;
        }
        else {
            document.title = `${capitalize(props.category)} - NewsPedia`;
        }
        updateNews();
        // eslint-disable-next-line
    }, []);


    const fetchMoreData = async () => {

        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1} &pageSize=${props.pageSize}`
        setPage(page + 1)
        let data = await fetch(url);
        let parsedData = await data.json();

        setArticles(articles.concat(parsedData.articles));
        setTotalResults(parsedData.totalResults);
    };


    return (
        <>
            <h2 className="text-center" style={{ fontSize: "30px", fontFamily: 'Lato, sans-serif', margin: "30px 0px", marginTop: "90px" }}> <strong>NewsPedia - Top {capitalize(props.category)} Headlines</strong></h2>
            {loading && <Spinner />}
            {articles !== undefined ?
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResults}
                    loader={<Spinner />}>

                    <div className="container my-3">
                        <div className='row'>
                            {articles.map((element) => {

                                return <div className="col-md-4" key={element.url}>
                                    <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                                </div>
                            })}
                        </div>
                    </div>

                </InfiniteScroll> :
                (
                    <div class="text-center">
                        <img src={error} class="rounded newslogo" alt="..." />
                        <p className="text-center" style={{ fontSize: "30px", fontFamily: 'Lato, sans-serif', margin: "30px 0px", marginTop: "90px" }}>No articles to display</p>
                        <Link type="button" class="btn btn-success" to = "/NewsPedia/demo"><b>Demo Site</b></Link>
                    </div>
                )}

        </>
    )
}

News.defaultProps = {
    country: 'in',
    pageSize: 20,
    category: "general"
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
}

export default News
