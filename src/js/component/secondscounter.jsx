import React from "react";

const SecondsCounter = (props) => {
    return (
      <>
        <div className="container d-flex justify-content-center align-items-center mt-5" id="background">
          <div className="row">
            <div className="col-3"><span className="badge bg-secondary" id="badge"><i className="fa fa-clock" id="clock"></i></span></div>   
            <div className="col-3 text-center">
              <h1>
                <span className="badge bg-secondary" id="badge" >{props.centenaSeconds}</span>
              </h1>
            </div>
            <div className="col-3 text-center">
              <h1>
                <span className="badge bg-secondary" id="badge" >{props.decenaSeconds}</span>
              </h1>
            </div>
            <div className="col-3 text-center">
              <h1>
                <span className="badge bg-secondary" id="badge" >{props.seconds}</span>
              </h1>
            </div>
          </div>
        </div>
      </>
    );
  };
  export default SecondsCounter;
  
  
  
  