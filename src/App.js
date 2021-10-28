import React, { useState } from 'react';
import Header from "./components/Header.js";
import Form from "./components/Form.js";
import Footer from "./components/Footer.js";
import Alert from "./components/Alert";
import About from './components/About.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";



function App() {

  const [mode, setMode] = useState("light");
  const [colormode, setColorMode] = useState("black");
  const [alert, setAlert] = useState(null);

  const showalert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }


  const toggleDark = () => {
    if (mode === 'light') {
      setMode('dark');
      setColorMode('white');
      showalert("Dark mode has been enabled", "success");
    }
    else {
      setMode('light');
      setColorMode('black');
      showalert("Light mode has been enabled", "success");
    }

  }

  return (
    <>
      <Router>
        <Header mode={mode} colormode={colormode} toggleDark={toggleDark} />
        <Alert alert={alert} />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Form showalert={showalert} heading="Word Magic- word counter|character counter|copy text" />
          </Route>
        </Switch>
        <Footer mode={mode} colormode={colormode} />
      </Router>
    </>
  );
}

export default App;
