import React from "react";

type AccordionPriopsType = {
  titleValue?: string
  collapsed: boolean
}


export const Accordion = (props: AccordionPriopsType) => {

      return (
        <div>
      <AccordionTitle title={"Hello"} />
      {!props.collapsed && <AccordionBody />}
      </div>

      )
      }






type AccordionTitlePropsType = {
  title: string
}

const AccordionTitle = (props: AccordionTitlePropsType) => {
return <h3>---{props.title}---</h3>
}


type AccordionBodyPropsType = {
  text?: string
}

const AccordionBody = (props: AccordionBodyPropsType) => {
  return (
    
    <ul>
      <li>Mother</li>
      <li>Fucker</li>
      <li>lol</li>
      
    </ul>
    
  )
}