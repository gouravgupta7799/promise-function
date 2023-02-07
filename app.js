// updateLastUserActivityTime().then((m) => { console.log(`last use => ${m}`) })


let posts = [{ title: 'POST1' }, { title: 'POST2' }];

function printPost(){
  posts.forEach((post) => {
    console.log(post.title)
  })
}

let p1 = function () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push({ title: 'POST3' });
      resolve('person3');
    }, 1000)
  })
}

let p2 = function () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push({ title: 'POST4' });
      resolve('person4');
    }, 5000);
  })
}

function updateLastUserActivityTime() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let fullTime = new Date();
      resolve(fullTime)
    }, 1000)
  })
}

function deleteposts() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      item = posts.pop();
      resolve(item);
    }, 1000);
  })
}

// Promise.all([p1(), updateLastUserActivityTime()]).then((m) => {console.log(m)})
// Promise.all([p2(), updateLastUserActivityTime()]).then((m) => {console.log(m)})

Promise.all([p1(), p2(),]).then(() => printPost())

