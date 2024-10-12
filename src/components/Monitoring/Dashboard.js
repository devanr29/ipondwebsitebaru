import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import ProjectCards from "./ProjectCards";
import ProjectCardsB from "./ProjectCardsB"; // Import ProjectCardsB
import ProjectCardsC from "./ProjectCardsC"; // Import ProjectCardsC
import ProjectCardsD from "./ProjectCardsD";
import ProjectCardsE from "./ProjectCardsE";
import ProjectCardsF from "./ProjectCardsF";

import "./historychart.css"
import "./dashboard.css";

function Dashboard() {
  return (
    <Container fluid className="project-section" id="monitoring">
      <Container>
        <h1 className="project-heading">
          <strong className="Fluorescent-Blue">MONITORING</strong>
        </h1>
        <br />
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* Menampilkan ProjectCards (pH) */}
          <Col md={6} lg={4} className="project-card">
            <ProjectCards />
          </Col>

          {/* Menampilkan ProjectCardsB (Suhu) */}
          <Col md={6} lg={4} className="project-card">
            <ProjectCardsB />
          </Col>

          {/* Menampilkan ProjectCardsC (Kekeruhan) */}
          <Col md={6} lg={4} className="project-card">
            <ProjectCardsC />
          </Col>
          <Col md={20} lg={20} className="project-card">
           <ProjectCardsD/>
          </Col>
          <Col md={20} lg={20} className="project-card">
           <ProjectCardsE/>
          </Col>
          <Col md={20} lg={20} className="project-card">
           <ProjectCardsF/>
          </Col>
        </Row>
      </Container>
      <ScrollToTop />
    </Container>
  );
}

export default Dashboard;
