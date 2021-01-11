import React from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
export default function GroupSizesColors() {
  

  return (
    <div style={{textAlign:"center"}}>
      <ButtonGroup color="secondary" aria-label="outlined secondary button group">
        <Button style={{color: "rgb(205, 2, 65)"}}>TOUS</Button>
        <Button style={{color: "rgb(205, 2, 65)"}}>ABSCENT</Button>
        <Button style={{color: "rgb(205, 2, 65)"}}>PRESENT</Button>
      </ButtonGroup>
    </div>
  );
}