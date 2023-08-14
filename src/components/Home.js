import React, { Component } from 'react';
import business from "./../components/images/business.png";
import science from "./../components/images/science.png";
import sports from "./../components/images/sports.png";
import headlines from "./../components/images/headlines.png";
import tech from "./../components/images/tech.png";
import us from "./../components/images/us_news.png";
import india from "./../components/images/india_news.png"
import health from "./../components/images/health.png"
import { Link } from 'react-router-dom';

var mystyle={
    color:"red"
}
export class Home extends Component {
  render() {
    return (
<>

      <div className="container">
      <br/><br/><br/>
        <h5><marquee style={mystyle}>PAY TO KEEP NEWS FREE</marquee></h5> 
           <h3 style={{textAlign:"center",color:"white"}}>News By Category</h3>
        <div className="row my-3">
            <div className="col-md-3 my-3">
                <div className="card abc" style={{width:"200px" , height:"220spx"}}>
                    <img src={headlines} style={{width:"200px" , height:"150px"}} className="card-img-top" alt="..." />
                    <div className="card-body">
                    <Link to="/News" className="btn btn-dark">Top headlines</Link>
                    </div>
                </div>
            </div>
            <div className="col-md-3 my-3">
                <div className="card abc" style={{width:"200px" , height:"220px"}}>
                    <img src={india} style={{width:"200px" , height:"150px"}} className="card-img-top" alt="..." />
                    <div className="card-body">
                    <Link to="/newsIndia" className="btn btn-dark">News India</Link>
                    </div>
                </div>
            </div>
            <div className="col-md-3 my-3">
                <div className="card abc" style={{width:"200px" , height:"220px"}}>
                    <img src={us} style={{width:"200px" , height:"150px"}} className="card-img-top" alt="..." />
                    <div className="card-body">
                    <Link to="/newsUs" className="btn btn-dark">News US</Link>
                    </div>
                </div>
            </div>
            <div className="col-md-3 my-3">
                <div className="card abc" style={{width:"200px" , height:"220px"}}>
                    <img src={business} style={{width:"200px" , height:"150px"}} className="card-img-top" alt="..." />
                    <div className="card-body">
                    <Link to="/businessNews" className="btn btn-dark">Business News</Link>
                    </div>
                </div>
            </div>
        </div>
        <div className="row my-3">
            <div className="col-md-3 my-3">
                <div className="card abc" style={{width:"200px" , height:"220px"}}>
                    <img src={sports} style={{width:"200px" , height:"150px"}} className="card-img-top" alt="..." />
                    <div className="card-body">
                    <Link to="/sportsNews" className="btn btn-dark">Sports News</Link>
                    </div>
                </div>
            </div>
            <div className="col-md-3 my-3">
                <div className="card abc" style={{width:"200px" , height:"220px"}}>
                    <img src={health} style={{width:"200px" , height:"150px"}} className="card-img-top" alt="..." />
                    <div className="card-body">
                    <Link to="/healthNews" className="btn btn-dark">Health</Link>
                    </div>
                </div>
            </div>
            <div className="col-md-3 my-3">
                <div className="card abc" style={{width:"200px" , height:"220px"}}>
                    <img src={tech} style={{width:"200px" , height:"150px"}} className="card-img-top" alt="..." />
                    <div className="card-body">
                    <Link to="/techNews" className="btn btn-dark">Technology</Link>
                    </div>
                </div>
            </div>
            <div className="col-md-3 my-3">
                <div className="card abc"  style={{width:"200px" , height:"220px"}}>
                    <img src={science} style={{width:"200px" , height:"150px"}} className="card-img-top" alt="..." />
                    <div className="card-body">
                    <Link to="/science" className="btn btn-dark">Science</Link>
                    </div>
                </div>
            </div>
        </div>
      </div>
      </>
    )
  }
}

export default Home