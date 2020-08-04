  function test1(){
    return new Promise(resolve=>setTimeout(resolve,5000))
  }
  async function test2(){
    for(let i=0;i<3;i++){
      await test1()
      console.log(i)
    }
  }
  test2()