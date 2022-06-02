// const {career, greeting} = require('./example2');

// console.log({career, greeting});

let obj = {
  hobby: "coding",
  career: "learning"
};

// console.log(obj.hobby);
// console.log(obj['hobby']);

// function getObjData(object, prop) {
//   return object[prop];
// }

// console.log(getObjData(obj, 'hobby'));

//Object destructuring
const {hobby, career, mojo} = obj;
console.log({hobby, career, mojo});


//Dot notation accessing a value.
// console.log(console);

//Reason for destructuring object
// function getSomeData(example) {
//   console.log(example.career, example.hobby)
// }

// getSomeData(obj);

//Same as below:
function getSomeData({career, hobby}) {
  console.log(career, hobby)
}

getSomeData(obj);