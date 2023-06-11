import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let { title, description, imageUrl, newsUrl, date, source } = this.props;
        return (
            <div className='my-3 mx-3'>
                <div className="card" >
                    <img src={!imageUrl ? "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1024-512,f_auto,q_auto:best/newscms/2019_01/2705191/nbc-social-default.png" : imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}
                            <span className="position-absolute top-0 translate-middle badge rounded-pill bg-success" style={{zIndex:"1", left:"90%"}}>
                                {source}
                            </span></h5>
                        <p className="card-text">{description}</p>

                        {/* <p className="card-text"><small className="text-body-secondary">By {author? author : "Unknown"} on {new Date(date).toGMTString()}</small></p> */}
                        <p className="card-text"><small className="text-body-secondary">{new Date(date).toDateString()}</small></p>

                        <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}
export default NewsItem
