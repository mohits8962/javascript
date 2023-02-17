// object destructuring

const band = {
  bandName: "led zepplin",
  famousSong: "stairway to heaven",
  year: 1968,
  anotherFamousSong: "kashmir",
};

// here using destructuring and rest operators
let { bandName, famousSong, ...restProps } = band;
console.log(bandName);
console.log(restProps);
