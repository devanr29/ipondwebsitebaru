import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Tujuan komprehensif anda",
          "Dapat memonitoring kualitas air tambak melalui pH, kekeruhan, dan suhu",
          "Membantu anda mendapatkan informasi yang akurat melalui My I-Pond🙌🏻.",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 70,
      }}
    />
  );
}

export default Type;
