import React, { Component } from 'react'
import Newsitem from './Newsitem'
import PropTypes from 'prop-types'

var mystyle={
    color:"red",
    marginTop:'70px'
}
export class News extends Component {
    articles =[
        // {
        //   "source": {
        //     "id": "reuters",
        //     "name": "Reuters"
        //   },
        //   "author": null,
        //   "title": "Bitcoin rises 5.5% to $19897 - Reuters",
        //   "description": "Bitcoin rose 5.54% to $19,897 at 22:13 GMT on Friday, adding $1,044 to its previous close.",
        //   "url": "https://www.reuters.com/technology/bitcoin-rises-55-19897-2023-01-13/",
        //   "urlToImage": "https://www.reuters.com/resizer/x2f-ufmS3E4Gt5u8Lu24vQUPfDA=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/U57W2HJZGRPTHE2MEDPR5RDSHQ.jpg",
        //   "publishedAt": "2023-01-13T22:24:00Z",
        //   "content": "Jan 13 (Reuters) - Bitcoin rose 5.54% to $19,897 at 22:13 GMT on Friday, adding $1,044 to its previous close.\r\nBitcoin, the world's biggest and best-known cryptocurrency, is up 20.6% from the year's … [+277 chars]"
        // },
        // {
        //   "source": {
        //     "id": "reuters",
        //     "name": "Reuters"
        //   },
        //   "author": null,
        //   "title": "Cryptoverse: Big investors edge back to bitcoin - Reuters",
        //   "description": "Big investors are dipping their toes into crypto waters again after a bumper month for bitcoin.",
        //   "url": "https://www.reuters.com/technology/cryptoverse-big-investors-edge-back-bitcoin-2023-01-31/",
        //   "urlToImage": "https://www.reuters.com/resizer/wVEBWtf3RmkXKgyvKm8NmhJ80-U=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/FE2DLHQ4UBOOPNWFOIS34JBLP4.jpg",
        //   "publishedAt": "2023-01-31T06:01:08Z",
        //   "content": "Jan 31 (Reuters) - Big investors are dipping their toes into crypto waters again after a bumper month for bitcoin.\r\nDigital asset investment products, often favored by institutional investors, saw in… [+4079 chars]"
        // },
       
        // {
        //   "source": {
        //     "id": "business-insider",
        //     "name": "Business Insider"
        //   },
        //   "author": "mchittum@insider.com (Morgan Chittum)",
        //   "title": "Silvergate and other crypto-linked stocks climb as bitcoin notches its highest price in 5 months",
        //   "description": "Silvergate stock surged more than 12% on Monday after bitcoin hit $23,000 over the weekend.",
        //   "url": "https://markets.businessinsider.com/news/stocks/silvergate-stock-price-si-coinbase-coin-crypto-bitcoin-notches-highs-2023-1",
        //   "urlToImage": "https://i.insider.com/63cea934b9a04b0019eda8ef?width=1200&format=jpeg",
        //   "publishedAt": "2023-01-23T17:20:50Z",
        //   "content": "Silvergate and other crypto-linked stocks are climbing after bitcoin notched a five-month high over the weekend.\r\nThe crypto-focused bank is up over 12% at $15.45 on Monday, after diving earlier this… [+2724 chars]"
        // },
        // {
        //   "source": {
        //     "id": "business-insider",
        //     "name": "Business Insider"
        //   },
        //   "author": "prosen@insider.com (Phil Rosen)",
        //   "title": "Is bitcoin being manipulated? A professor who proved it in 2017 sees more red flags, report says.",
        //   "description": "\"In a period of highly negative sentiment, we've seen suspiciously solid floors under bitcoin,\" finance professor John Griffin told Fortune.",
        //   "url": "https://markets.businessinsider.com/news/currencies/bitcoin-price-manipulation-token-crypto-markets-ether-btc-ftx-griffin-2023-2",
        //   "urlToImage": "https://i.insider.com/63dbc4cb0a08ae0018a6767b?width=1200&format=jpeg",
        //   "publishedAt": "2023-02-02T15:25:38Z",
        //   "content": "After a dismal outing last year, bitcoin has skyrocketed more than 40% to start the new year. But John Griffin, a finance professor at the University of Texas McCombs School of Business, thinks there… [+2506 chars]"
        // },
        // {
        //   "source": {
        //     "id": "business-insider",
        //     "name": "Business Insider"
        //   },
        //   "author": "bevans@insider.com (Brian Evans)",
        //   "title": "El Salvador passes law for bitcoin-backed 'volcano bonds' and eyes expanding to other cryptocurrencies",
        //   "description": "The bond issuance was originally planned for early 2022, and El Salvador seeks to raise $1 billion through the so-called volcano bonds.",
        //   "url": "https://markets.businessinsider.com/news/currencies/el-salvador-bitcoin-volcano-bonds-law-bitcoin-city-nayib-bukele-2023-1",
        //   "urlToImage": "https://i.insider.com/61f8015f45edd800183b53c3?width=1200&format=jpeg",
        //   "publishedAt": "2023-01-12T19:13:38Z",
        //   "content": "El Salvador's assembly passed legislation Wednesday that clears the way for bitcoin-backed \"volcano bonds\" to be issued and for cryptocurrencies other than bitcoin.\r\nAfter declaring bitcoin legal ten… [+1554 chars]"
        // },
        // {
        //   "source": {
        //     "id": "business-insider",
        //     "name": "Business Insider"
        //   },
        //   "author": "mchittum@insider.com (Morgan Chittum)",
        //   "title": "Cathie Wood's Ark Invest says bitcoin could hit $1.5 million by 2030, doubling down on its bullishness for the world's largest cryptocurrency",
        //   "description": "Ark Invest's bull case for bitcoin is $1.48 million, while its base case is $682,800 by 2030.",
        //   "url": "https://markets.businessinsider.com/news/currencies/cathie-wood-bitcoin-price-ark-invest-crypto-market-outlook-2030-2023-2",
        //   "urlToImage": "https://i.insider.com/61dede7a1025b20018bb4cfd?width=1200&format=jpeg",
        //   "publishedAt": "2023-02-01T16:39:45Z",
        //   "content": "Cathie Wood's Ark Investment Management said bitcoin could hit $1.48 million by 2030, a 6,326% increase from its current price.\r\nThat's under its bull-case scenario, while its base case sees bitcoin … [+2018 chars]"
        // },
        // {
        //   "source": {
        //     "id": "business-insider",
        //     "name": "Business Insider"
        //   },
        //   "author": "gglover@insider.com (George Glover)",
        //   "title": "Expect bitcoin to top $50,000 again within a few years, Anthony Scaramucci says – as crypto markets start 2023 with a bang",
        //   "description": "Investors are piling back into crypto markets, with bitcoin jumping 26% and ethereum up 29% year-to-date.",
        //   "url": "https://markets.businessinsider.com/news/currencies/crypto-bitcoin-price-outlook-anthony-scaramucci-ethereum-market-rally-ftx-2023-1",
        //   "urlToImage": "https://i.insider.com/63c543bfbcd21800196b7c10?width=1200&format=jpeg",
        //   "publishedAt": "2023-01-16T13:30:32Z",
        //   "content": "Bitcoin could top $50,000 in a few years' time as cryptocurrencies rebound from a nightmare year, according to Anthony Scaramucci.\r\nThe SkyBridge Capital founder said he's anticipating that 2023 will… [+1821 chars]"
        // },
        // {
        //   "source": {
        //     "id": "reuters",
        //     "name": "Reuters"
        //   },
        //   "author": null,
        //   "title": "Grayscale would appeal lawsuit against SEC if court rejects case ... - Reuters",
        //   "description": "Crypto asset manager Grayscale Investments is gearing up for a prolonged legal fight with the U.S. Securities and Exchange Commission to create a spot bitcoin exchange-traded fund, the company’s chief executive officer said.",
        //   "url": "https://www.reuters.com/technology/grayscale-would-appeal-lawsuit-against-sec-if-court-rejects-case-ceo-says-2023-01-25/",
        //   "urlToImage": "https://www.reuters.com/resizer/koRr6wzvqUCPOgJi5PPl7pgisIU=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/LL4HSL6N7FIZDCZW7D4JZM5WKU.jpg",
        //   "publishedAt": "2023-01-25T05:35:00Z",
        //   "content": "Jan 25 (Reuters) - Crypto asset manager Grayscale Investments is gearing up for a prolonged legal fight with the U.S. Securities and Exchange Commission to create a spot bitcoin exchange-traded fund,… [+2795 chars]"
        // },
        // {
        //   "source": {
        //     "id": "business-insider",
        //     "name": "Business Insider"
        //   },
        //   "author": "rhogg@insider.com (Ryan Hogg)",
        //   "title": "Tesla's bitcoin holdings fell nearly $1.8 billion in value last year, as Elon Musk called crypto a 'sideshow'",
        //   "description": "A bloodbath for crypto in 2022 saw Tesla's $1.5 billion bet on bitcoin backfire, as Elon Musk's carmaker dumped at least 75% of its position.",
        //   "url": "https://markets.businessinsider.com/news/currencies/tesla-crypto-bitcoin-elon-musk-fall-value-holdings-2022-sideshow-2023-2",
        //   "urlToImage": "https://i.insider.com/631567f8ed92be0018c5dd1d?width=1200&format=jpeg",
        //   "publishedAt": "2023-02-02T11:34:25Z",
        //   "content": "Tesla's bitcoin hoard plummeted by nearly $1.8 billion last year, as Elon Musk's carmaker dumped a big chunk of its holdings and cryptocurrency prices slumped.\r\nThe value of its \"fair market holdings… [+2222 chars]"
        // },
        // {
        //   "source": {
        //     "id": "reuters",
        //     "name": "Reuters"
        //   },
        //   "author": null,
        //   "title": "Exclusive: Binance moved $346 mln for seized crypto exchange ... - Reuters",
        //   "description": "Crypto giant Binance processed almost $346 million in bitcoin for the Bitzlato digital currency exchange, whose founder was arrested by U.S. authorities last week for allegedly running a \"money laundering engine,\" blockchain data seen by Reuters show.",
        //   "url": "https://www.reuters.com/business/finance/binance-moved-346-mln-seized-crypto-exchange-bitzlato-data-show-2023-01-24/",
        //   "urlToImage": "https://www.reuters.com/resizer/VltdzWQaz6Z8ait4zgD0qM7Vb6I=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/OPTKETLDXFNMXKBZPSFJGIBNAU.jpg",
        //   "publishedAt": "2023-01-24T12:01:00Z",
        //   "content": "LONDON, Jan 24 (Reuters) - Crypto giant Binance processed almost $346 million in bitcoin for the Bitzlato digital currency exchange, whose founder was arrested by U.S. authorities last week for alleg… [+6455 chars]"
        // },
        // {
        //   "source": {
        //     "id": null,
        //     "name": "Slashdot.org"
        //   },
        //   "author": "BeauHD",
        //   "title": "Bitcoin Retakes $20K, Leading As Broad Crypto Rally Continues",
        //   "description": "Bitcoin's (BTC) 2023 surge continues, with the crypto now above $20,000 for the first time since the FTX collapse in early November. CoinDesk reports: The largest cryptocurrency by market capitalization started the week near the $17,000 mark after hovering in…",
        //   "url": "https://news.slashdot.org/story/23/01/14/074219/bitcoin-retakes-20k-leading-as-broad-crypto-rally-continues",
        //   "urlToImage": "https://a.fsdn.com/sd/topics/bitcoin_64.png",
        //   "publishedAt": "2023-01-14T13:00:00Z",
        //   "content": "The largest cryptocurrency by market capitalization started the week near the $17,000 mark after hovering in the mid-$16,000 area since mid-December. Now at $20,250, bitcoin has gained more than 20% … [+697 chars]"
        // },
        // {
        //   "source": {
        //     "id": null,
        //     "name": "Entrepreneur"
        //   },
        //   "author": "Chad D. Cummings",
        //   "title": "How the Feds Could Regulate Crypto (and Why All Is Not Lost for Investors)",
        //   "description": "Threats of impending cryptocurrency regulation have dominated headlines in recent months, but all is not lost for crypto investors. Here are a few protections that stand in the way of a federal crypto showdown.",
        //   "url": "https://www.entrepreneur.com/money-finance/how-the-feds-could-regulate-cryptocurrency-post-ftx-collapse/440080",
        //   "urlToImage": "https://assets.entrepreneur.com/content/3x2/2000/1674492880-shutterstock-2169083271.jpg",
        //   "publishedAt": "2023-01-25T17:00:00Z",
        //   "content": "Each day seems to carry with it a new, ominous headline propounding the imminent demise of cryptocurrency. The death of Bitcoin has been predicted more than 450 times as of this writing. And yet, it … [+952 chars]"
        // }
        ]
        constructor(){
            super();
            console.log("hello i am constructor")
            this.state={
                articles:this.articles,
                lading:false
            }
        }
        static defaultProps={
            country:'in',
            category:'general'
        }
        static propTypes={
            country: PropTypes.string,
            category:PropTypes.string     
        }
        
        //component did mount is a lifecycle method


        async componentDidMount(props){
            console.log("cdm")
            const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5a47544820514919a72e8e73f068ecfe&page=1pageSize=30`
            let data= await fetch(url);
            let parsedData=await data.json()
             console.log(parsedData);
             this.setState({articles: parsedData.articles})

        }
  render() {
    console.log("render")
    return (
        <> 
           <h5><marquee style={mystyle}>PAY TO KEEP NEWS FREE</marquee></h5> 
           <div className="container my-3">
           <h3 style={{textAlign:"center",color:"white"}}>News-Teller Top headlines in {this.props.category}</h3>
           <div className="row my-4"  >
           {this.state.articles.map((element)=>{
                return <div className="col-md-4 my-3" key={element.url}>
                <Newsitem title={element.title?element.title.slice(0,45):"null"} description={element.description?element.description.slice(0,80):"null"} imageUrl={element.urlToImage} newsUrl={element.url} />
                </div>
           })}
           {/* <div className="col-md-4">
                <Newsitem title="myTitle" description="My desc" imageUrl="https://www.reuters.com/resizer/x2f-ufmS3E4Gt5u8Lu24vQUPfDA=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/U57W2HJZGRPTHE2MEDPR5RDSHQ.jpg"/>
                </div>
                <div className="col-md-4">
                <Newsitem title="myTitle" description="My desc"/>
                </div> */}
           </div>
        </div>
    </>
    )
  }
}

export default News
