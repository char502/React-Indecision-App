const bar = 10;
const foo = bar + 20;
const name = 'Another new word';

document.write(foo);

// const obj = {
//   name: 'Charlotte',
//   age: 26
// };

const work = new Promise((resolve, reject) => {
  resolve('Some data');
});

work.then(data => {
  // console.log(data);
});

function addNum(num) {
  alert(`${name} + This is a string + ${name}`);
  return num + 5;
}
addNum(3);
