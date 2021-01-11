import React from 'react';
let top = {

    width: "100%",
    height: "150px",
    position: "relative",
    padding: "30px",
};

let frame = {
    width: "1050px",
    height: "185px",
    borderStyle: "solid",
    borderRadius: "25px",
    marginTop: "30px",
    marginBottom: "30px",
    borderTopWidth: "3px",
    borderRightWidth: "3px",
    borderLeftWidth: "3px",
    borderBottomWidth: "3px",
    paddingTop: "30px",
    margin: "auto",
    borderColor: "white",
};
export default function Commencer({Click,start,name,i}) {


    return (
        <div style={top}>
            <div style={frame}>
                <div style={{position:"absolute",top:"70%",left:"47.5%"}} >
                {! start ? <button type="button" className="btn btn-link" style={{color:"#e60057"}} onClick={() => Click()} > COMMENCER </button>: <div style={{color:"white"}}>{name[i]}</div>}
                </div>
            </div>
        </div>
    );
}