import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Avatar.png";
import Tilt from "react-parallax-tilt";


function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }} data-aos="fade-right">
              <span className="primary-header"> Tentang </span> Kami
            </h1>
            <p className="home-about-body" data-aos="fade-up">
              <br />
              Kami tim My I-Pond<i className="primary-header">
              </i>{" "}
              <br />
              <br />Website responsive untuk memantau kualitas air tambak nila secara realtime. {" "}
              <i className="primary-header"></i>
              <br />
              <br />Pantau kualitas air, jaga kesehatan ikan, hasilkan panen berkualitas tinggi.
              <i>
                <i className="primary-header"></i>
              </i>
              <br />
              <br />My I-Pond: Budidaya nila efisien, hasil panen maksimal, kesejahteraan petambak terjaga.{" "}
              <i className="primary-header"></i>
              <i className="primary-header"></i>
              <br />
              <br />{" "}
              <i className="primary-header"></i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                data-aos="fade-left"
                src={myImg}
                className="img-fluid"
                alt="avatar"
              />
            </Tilt>
          </Col>
        </Row>
        <Row>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
