export const repeatImg = (image) => {
  let d = 0;
  for (let red = 1; red <= 32; red++) {
    for (let blue = 1; blue <= 4; blue++) {
      for (let green = 1; green <= 32; green++) {
        for (let step = 1; step <= 8; step++) {
          image.data[d + 0] = red * 8; //red
          image.data[d + 1] = green * 8; //green
          image.data[d + 2] = blue * step * 8; //blue
          image.data[d + 3] = 255; //alpha
          d += 4;
        }
      }
    }
  }

  return image;
};
