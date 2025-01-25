import React from 'react'
import {ChevronDown, ChevronUp} from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
const accordion = (props) => {
  return (
    
     <Accordion className="w-1/2 p-4   " type="single" collapsible>
      <AccordionItem className=" text-2xl  " value="item-1">
        <AccordionTrigger className="h-3/5 bg-clr1">{props.heading}</AccordionTrigger>
        <AccordionContent className="text-md text-clr2">
          {props.des}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

export default accordion