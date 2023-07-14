

import React from "react"
import {ChatBubbleLeftRightIcon,PhoneIcon} from "@heroicons/react/24/solid"
export function CustomHeader({chat}){
   return (
    <div className="chat-header">
        <div className="flexbetween">
         <ChatBubbleLeftRightIcon className="icon-chat"></ChatBubbleLeftRightIcon>
         <h3 className="header-text">{chat.title}</h3>
        </div>
        <div className="flexbetween">
            <PhoneIcon className="icon-phone"></PhoneIcon>
            <p className="header-text">{chat.description}</p>
        </div>
    </div>
   )
}