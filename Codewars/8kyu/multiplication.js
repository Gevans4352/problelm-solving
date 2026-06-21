//Your goal is to return multiplication table for number that is always an integer from 1 to 10.
//For example, a multiplication table (string) for number == 5 looks like below:

//solution
function multiTable(number) {
  let str = "";

  for (let i = 1; i <= 10; i++) {
    const val = i * number;
    str += `${i} * ${number} = ${val}`;
    if (i !== 10) {
      str += `\n`;
    }
  }

  return str;
}
