import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Widgets from "./components/Widgets";
import Login from "./components/Login";

import { useStateValue } from "./components/StateProvider";
import { Row, Col } from "react-bootstrap";

function App() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />
          <Row>
            <div className="body">
              <Col md={3}>
                <Sidebar />
              </Col>
              <Col md={6}>
                <Feed />
              </Col>
              <Col md={3}>
                <Widgets />
              </Col>
            </div>
          </Row>
        </>
      )}
    </div>
  );
}

export default App;
