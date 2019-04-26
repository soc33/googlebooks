import React from "react";
import { FormBtn } from "../Form";
import "./style.css";

function Card(props) {
  return (
    <div className="card mb-3" style={{ maxWidth: "540px" }}>
      <div className="row no-gutters">
        <div className="col-md-4 text-center">
          <a href={props.link} target="_blank" rel="noopener noreferrer" ><img src={props.image} className="card-img" alt={props.title} /></a>
          <FormBtn onClick={() => props.buttonAction(props.bookId)} buttoncn={props.buttoncn ? props.buttoncn : ""} buttontext={props.buttontext} id={props.bookId}/>
        </div>
        <div className="col-md-8">
          <div className="card-body">
                      <h5 className="card-title">{props.title}</h5>
                      <p>by {props.author}</p>
            <p className="card-text">{props.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
