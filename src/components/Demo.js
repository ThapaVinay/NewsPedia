import React from 'react'
import NewsItem from './NewsItem'

function Demo(props) {

  const articles = [
    {
      "source": {
        "id": "techcrunch",
        "name": "TechCrunch"
      },
      "author": "Jagmeet Singh",
      "title": "Disney's Hotstar to offer free mobile cricket streaming in India to take on Reliance's JioCinema",
      "description": "Disney's Hotstar will offer free cricket streaming to mobile users in India, following Reliance's JioCinema comparable approach.",
      "url": "https://techcrunch.com/2023/06/09/disney-hotstar-free-mobile-cricket-streaming-jiocinema/",
      "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/06/GettyImages-1237878467.jpg?resize=1200,900",
      "publishedAt": "2023-06-09T13:09:20Z",
      "content": "Disney’s Hotstar will offer free streaming of cricket tournaments to mobile users in India, following Reliance’s JioCinema comparable approach that helped it attract millions of viewers.\r\nOn Friday, … [+2162 chars]"
    },
    {
      "source": {
        "id": "espn-cric-info",
        "name": "ESPN Cric Info"
      },
      "author": null,
      "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
      "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
      "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
      "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
      "publishedAt": "2020-04-27T11:41:47Z",
      "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
    },
    {
      "source": {
        "id": "espn-cric-info",
        "name": "ESPN Cric Info"
      },
      "author": null,
      "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
      "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
      "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
      "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
      "publishedAt": "2020-03-30T15:26:05Z",
      "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
    }
  ]

  return (
    <>
      <h2 className="text-center" style={{ fontSize: "30px", fontFamily: 'Lato, sans-serif', margin: "30px 0px", marginTop: "90px" }}> <strong>NewsPedia - Demo Headlines</strong></h2>

      <div className="container my-3">
        <div className='row'>
          {articles.map((element) => {

            return <div className="col-md-4" key={element.url}>
              <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
            </div>
          })}
        </div>
      </div>
    </>
  )
}

export default Demo
