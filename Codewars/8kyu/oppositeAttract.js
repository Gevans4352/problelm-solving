function lovefunc(flower1, flower2) {
  //flower1 = 1 -- odd number
  //flower2 = 4 -- even number
  if (
    (flower2 % 2 === 0 && flower1 % 2 !== 0) ||
    (flower1 % 2 === 0 && flower2 % 2 !== 0)
  ) {
    return true;
  } else {
    return false;
  }
}
