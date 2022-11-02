// React
import React, { useState } from "react";
// React
// Modules
import { Routes, Route } from "react-router-dom";
// Modules
// CSS
import styles from "./App.module.css";
// CSS
// Components
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Setting from "./Components/Setting/Setting";
import Home from "./Containers/Home/Home";
// Components

const App = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState<boolean>(false);
  const [themeColor, setThemeColor] = useState<string>("rgb(166, 33 , 196)");
  return (
    <div>
      <Header />
      <main
        className={`${styles.masterAppContainer}
                      flex flex-col items-center justify-start
                  `}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/setting"
            element={
              <Setting
                currentTheme={themeColor}
                setThemeColor={setThemeColor}
              />
            }
          />
        </Routes>
      </main>
      <Footer isUserLoggedIn={isUserLoggedIn} themeColor={themeColor} />
    </div>
  );
};

export default App;
