import React, { useEffect, useRef } from "react";
import { coverageImg } from "../imagePatterns/coverage";
import { repeatImg } from "../imagePatterns/repeatPattern";
const Canvas = () => {
  const canvas = useRef(null);

  // 256 * 128 = 32768
  const width = 256;
  const height = 128;

  useEffect(() => {
    genRepeatImg();
  });

  //basic simple pattern
  const genRepeatImg = () => {
    const ctx = canvas.current.getContext("2d");
    const image = ctx.createImageData(width, height);
    ctx.putImageData(repeatImg(image), 0, 0);
  };

  const genCoverageImg = () => {
    const ctx = canvas.current.getContext("2d");
    const image = ctx.createImageData(width, height);
    ctx.putImageData(coverageImg(image), 0, 0);
  };

  return (
    <div className="container">
      <h1 data-testid="title">
        This is 256 * 128 pixel image made up of 32,768 unique colours
      </h1>
      <canvas
        className="canvas"
        data-testid="canvas"
        ref={canvas}
        width={width}
        height={height}
      />
      <div className="button-container">
        <button
          data-testid="repeat-button"
          onClick={() => {
            genRepeatImg();
          }}
        >
          Repeat-Pattern
        </button>
        <button
          data-testid="coverage-button"
          onClick={() => {
            genCoverageImg();
          }}
        >
          Coverage
        </button>
      </div>
    </div>
  );
};

export default Canvas;
