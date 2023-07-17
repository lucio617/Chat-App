import { PaperClipIcon, PaperAirplaneIcon, XMarkIcon } from "@heroicons/react/24/solid"
import { set } from "lodash-es"
import { useState } from "react"
import { MessageFormUi } from "./MessageFormUi"
import React from "react"

export function StandardMessageForm({ props, activeChat }) {


   const [message, setMessage] = useState("")
   const [attachment, setAttachment] = useState("")

   const handleChange = (e) => {
      e.preventDefault()
      const val=e.target.value.trim()
      if(val.length!=0)setMessage(e.target.value)
   }


   const handleSubmit = async () => {
      const date = new Date()
      .toISOString()
      .replace("T", " ")
      .replace("Z", `${Math.floor(Math.random() * 1000)}+00:00`);

      const at = attachment ? [{ blob: attachment, file: attachment.name }] : [];

      const form = {
         attachments: at,
         created: date,
         sender_username: props.username,
         text: message,
         activeChatId: activeChat.id
      };
      if(message!="" || attachment!="")props.onSubmit(form);
      setMessage("");
      setAttachment("");
   }
   return (
      <MessageFormUi setAttachment={setAttachment} message={message} handleChange={handleChange} handleSubmit={handleSubmit}></MessageFormUi>
   )
}

export default StandardMessageForm