import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Chat } from "./components/chat";
import { useState } from "react";
import { set } from "lodash-es";
import { Login } from "./components/Login";

function App() {
  const [user, setUser] = useState(null);
  const [secret, setSecret] = useState(null);
  const isAuth = Boolean(user) && Boolean(secret);
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              isAuth ? (
                <Navigate to="/chat"></Navigate>
              ) : (
                <Login setUser={setUser} setSecret={setSecret}></Login>
              )
            }
          ></Route>

          <Route
            path="/chat"
            element={
              isAuth ? (
                <Chat user={user} secret={secret}></Chat>
              ) : (
                <Navigate to="/"></Navigate>
              )
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
