setTimeout(Data = ()=>{
  let math = Math.random()
  return math
}, 2000)
async function async() {
  console.log('loading------');
  let data = await Data();
  console.log(data)
}

async()


 promise = ()=> new Promise((resolve, reject) => {
      let math = Math.round(Math.random() * -9)
      if (math > 1) {
        resolve("greater than 1");
      } else if (math < 1) {
        reject('less')
      }
})

async function dat() {
  try {
    let data = await promise();
    console.log(data)
  } catch (error) {
    console.error("Error Caught: ", error)
  }
}
dat()