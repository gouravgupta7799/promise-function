
console.log('hi');

let posts = [];

let p1 = function () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push('first : person1');
      resolve('first person add');
    }, 5000)
  })
}
let p2 = function () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push('secound : person2');
      resolve('secound person add');
    }, 3000);
  })
}

function deleteposts (){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      item = posts.pop();
      resolve(item);
    }, 1000);
  })
}

let pre = async() => {
  await p1();
  await p2();
  console.log(posts);
  await deleteposts().then((m)=>{console.log(m)})
}
pre();