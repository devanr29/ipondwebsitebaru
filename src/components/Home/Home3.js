import React from "react";
import { Container } from "react-bootstrap";
import { useState, useEffect } from "react";

function Home3({ Assets }) {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  let timeout = null;

  useEffect(() => {
    timeout =
      autoPlay &&
      setTimeout(() => {
        slideRight();
      }, 1500);
  });

  const slideRight = () => {
    setCurrent(current === Assets.length - 1 ? 0 : current + 1);
  };

  const slideLeft = () => {
    setCurrent(current === 0 ? Assets.length - 1 : current - 1);
  };

  console.log(current);

  return (
    <Container fluid className="home-section" id="documentation">
      <Container>
        <h1 style={{ fontSize: "2.6em" }} data-aos="fade-right">
          <span className="primary-header-documentation"> Dokumentasi </span>
        </h1>
        <br></br>
        <br></br>
      </Container>
      <div
        className="carousel"
        onMouseEnter={() => {
          setAutoPlay(false);
          clearTimeout(timeout);
        }}
        onMouseLeave={() => {
          setAutoPlay(true);
        }}
      >
        <div className="carousel_wrapper">
          {Assets.map((image, index) => {
            return (
              /* (condition) ? true : false */

              <div
                key={index}
                className={
                  index === current
                    ? "carousel_card carousel_card-active"
                    : "carousel_card"
                }
              >
                <img className="card_image" src={image.image} alt="" />
                <div className="card_overlay">
                  <h2 className="card_title">{image.title}</h2>
                  <p className="card-caption">{image.caption}</p>
                </div>
              </div>
            );
          })}
          <div className="carousel_arrow_left" onClick={slideLeft}>
            &lsaquo;
          </div>
          <div className="carousel_arrow_right" onClick={slideRight}>
            &rsaquo;
          </div>
          <div className="carousel_pagination">
            {Assets.map((_, index) => {
              return (
                <div
                  key={index}
                  className={
                    index === current
                      ? "pagination_dot pagination_dot-active"
                      : "pagination_dot"
                  }
                  onClick={() => setCurrent(index)}
                ></div>
              );
            })}
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Home3;
