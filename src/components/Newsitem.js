import React,{ Component } from "react";

export class Newsitem extends Component{
   
    render(){
       let {title,description,imageUrl,newsUrl}=this.props;
        return(
            <>
               <div className="card" style={{width: "18rem"}}>
                    <img src={!imageUrl?"https://c.ndtvimg.com/2023-02/p2qjscsg_india-aid-to-turkey-earthquake_625x300_07_February_23.jpg":imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read more</a>
                    </div>
                </div> 

            </>
        )
    }
}
export default Newsitem;