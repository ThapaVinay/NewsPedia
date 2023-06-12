import React from 'react'

const NewsItem = (props) => {
        let { title, description, imageUrl, newsUrl, date, source } = props;
        return (
            <div className='my-3 mx-3'>
                <div className="card" >
                    <div style={{
                        display: 'flex',
                        justifyContent: "flex-end",
                        position: 'absolute',
                        right: '0'
                    }}>
                        <span className="badge rounded-pill bg-success">
                            {source}
                        </span>
                    </div>

                    <img src={!imageUrl ? "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1024-512,f_auto,q_auto:best/newscms/2019_01/2705191/nbc-social-default.png" : imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>

                        {/* <p className="card-text"><small className="text-body-secondary">By {author? author : "Unknown"} on {new Date(date).toGMTString()}</small></p> */}
                        <p className="card-text"><small className="text-body-secondary">{new Date(date).toDateString()}</small></p>

                        <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
}
export default NewsItem
