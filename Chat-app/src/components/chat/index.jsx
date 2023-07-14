import {
  useMultiChatLogic,
  MultiChatSocket,
  MultiChatWindow,
} from "react-chat-engine-advanced";
import { CustomHeader } from "../customHeader/Header";
import { StandardMessageForm } from "@/components/customMessageForms/StandardMessageForm";
import { Ai } from "../customMessageForms/Ai";
import { AiCode } from "../customMessageForms/AiCode";
import { AiAssist } from "../customMessageForms/AiAssist";
export function Chat({ user, secret }) {
  const chatProps = useMultiChatLogic(
    import.meta.env.VITE_PROJECT_ID,
    user,
    secret
  );

  return (
    <div style={{ flexBasis: "100%" }}>
      <MultiChatSocket {...chatProps}></MultiChatSocket>
      <MultiChatWindow
        {...chatProps}
        style={{ height: "100vh" }}
        renderChatHeader={(chat) => <CustomHeader chat={chat}></CustomHeader>}
        renderMessageForm={(props) => {
          if (chatProps.chat?.title.startsWith("AiChat_")) {
            return <Ai props={props} activeChat={chatProps.chat}></Ai>;
          }
          if (chatProps.chat?.title.startsWith("AiCode_")) {
            return <AiCode props={props} activeChat={chatProps.chat}></AiCode>;
          }
          if (chatProps.chat?.title.startsWith("AiAssist_")) {
            return (
              <AiAssist props={props} activeChat={chatProps.chat}></AiAssist>
            );
          }
          {console.log("Standard Rendering")}
          return (
            
            <StandardMessageForm
              props={props}
              activeChat={chatProps.chat}
            ></StandardMessageForm>
          );
        }}
      ></MultiChatWindow>
    </div>
  );
}
