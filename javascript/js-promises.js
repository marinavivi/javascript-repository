// resolved promise
const myPromise = new Promise((resolve, reject) => {

    setTimeout(() => {

      resolve('Success!');

    }, 300);
    
  });
  
  myPromise
    .then((res) => {
        console.log(res)
    })
    .catch((err) => {
        console.log(err)
    })

// rejected promise
const myPromise1 = new Promise((resolve, reject) => {

    setTimeout(() => {

      reject('Error!');

    }, 300);
    
  });
  
  myPromise1
    .then((res) => {
        console.log(res)
    })
    .catch((err) => {
        console.log(err)
    })

