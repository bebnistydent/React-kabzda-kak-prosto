import React from "react";


type OnOffPropsType = {
  turned: boolean
}


export const OnOff = (props: OnOffPropsType) => {
  return (
    <div>
      {!props.turned && <IfOff/>|| <IfOn/>}
      
    </div>
  )
}

export const IfOn = () => {
  return (
    <div className="wrapper">
      <span className="green">On</span>
      <span className="light-green"></span>
    </div>
  )
};

export const IfOff = () => {
  return (
    <div className="wrapper">
      <span className="red">Off</span>
      <span className="light-red"></span>
    </div>

  )
}