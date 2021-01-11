import React from 'react';

export default function ContainedButtons({advance,start}) {



  return (
    <div style={{textAlign:"center"}}>
      <button disabled={! start} type="button" className="btn btn-success" style={{padding:'40px 40px',margin:"80px",FontSizes:"24px"}} onClick={()=>advance()}>
        Present
      </button>
       <button disabled={! start} type="button" className="btn btn-warning" style={{padding:'40px 40px',margin:"80px"}} onClick={()=>advance()}>
        Excusé
      </button>
      <button disabled={! start} type="button" className="btn btn-danger" style={{padding:'40px 40px',margin:"80px"}} onClick={()=>advance()}>
        Absent
      </button>

    </div>
  );
}