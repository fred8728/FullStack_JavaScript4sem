const promiseDemo = (msg, delay, makeError) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const err = Math.random() * 10 < 10;
      if (makeError && err) {
        return reject(new Error("UPPPS"));
      }
      return resolve(msg.toUpperCase());
    }, delay);
  });

/**
 * 
 */

const pd1 = promiseDemo("Hej med dig", 1000, false);

/**
 * pd1.then(data => console.log(data))
.catch(e=> console.log(e.message))
.finally(console.log('done'))
 */

async function asyncMetode() {
  const data1 = promiseDemo("hello 1", 1000, false); //hvis det først må gøres efter 5 sekunder så tilføj await foran promisedemo
  const data2 = promiseDemo("hello 2", 3000, false);
  const data3 = promiseDemo("hello 3", 4000, false);
  //console.log(data1, data2, data3)
  const promises = [data1, data2, data3]
  const results = await Promise.all(promises)
  results.forEach(r=>console.log(r))
}

async function test(){
  await asyncMetode();
}
test()

 /**
  * 
async function test() {
  try {
    const result = await asyncMetode();
    console.log(result);
  } catch (e) {
    console.log(e.message);
  } finally {
    console.log("done");
  }
}
  */

/**
 * async function test(){
 try{
 const data = await promiseDemo('hello', 1000, false)
 console.log(data)
 }catch(e){
   console.log(e.message)
 }finally {
   console.log('done')
 }
}

 */

