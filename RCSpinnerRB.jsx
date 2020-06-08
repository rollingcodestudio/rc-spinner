import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

export default class LoadingScreen extends Component {
  render() {
    return (
      <Container>
        <Row style={{ height: "65vh" }}>
          <Col></Col>
          <Col md={2} className="my-auto shadow bg-light rounded py-4">
            <div className="m-auto" style={{ width: "4rem", height: "4rem" }}>
              <div className="spinner"></div>
              <p className="m-0 p-0 strong rclogo-center">{"< >"}</p>
            </div>
            <h1 className="mt-3 lead text-gray text-center">
              cargando datos...
            </h1>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    );
  }
}
