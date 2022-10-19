# The Challenge

For this challenge, we would like to see an application that will produce an image in which each colour occurs exactly once — with no repition and no unused colours.
For the purpose of this challenge; colours are made up of three components — red, green, and blue. We require you to break each colour component into 32 steps — 8, 16, 24 .. 256 — this means when combined, you will have 32,768 discrete colours to utilise.

# Criteria of Acceptance

- There should be no reuse and or repition of a single colour. Each colour component should have 32 steps.
- Your colour pallette should be made up of 32,768 unique colours. You are required to use all 32,768 unique colours.
- Do not make use of existing graphics or files.

# Nice-To-Haves

- The result should be aesthetically pleasing (or at least interesting). Elegance in algorithms and data structures.
- Clean and well documented code.
- A README.md file explaining your process.

# Tech used

- React
- CSS
- Canvas

# Algorithm

I created 2 images, one is `repeat-pattern`, and the other one is `coverage-pattern`

## Repeat-Pattern

![alt text](/public/Screenshot_1.png)

In `repeat-pattern`, it renders pixels by iterating 32 R,G,B colors, to make it aesthetically pleasing, I divided blue color into 2 steps.

```js
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
```

## Coverage-pattern

![alt text](/public/Screenshot_2.png)

In `coverage-pattern`, it renders pixels by finding the similar color
For each line, from left to right, find the most similar color and put it into the next
For each column, from top to bottom, find the most similiar color and put it into the next

```js
// get distance of 2 colors

const distance = (r1, g1, b1, r2, g2, b2) => {
  let r = r1 - r2;
  let g = g1 - g2;
  let b = b1 - b2;
  return Math.pow(r, 2) + Math.pow(g, 2) + Math.pow(b, 2);
};
```
