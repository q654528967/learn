let a = new Set([1,2,4,5])
//console.log("a", typeof a)
let b = new Set([2,5,6,7])
let union = new Set([...a,...b])
//console.log("union", union)

let intersect = new Set([...a].filter(x=>b.has(x)))
//console.log("intersect", intersect)

let difference = new Set([...a].filter(x=>!b.has(x)))
//console.log("difference", difference)

/* for(let i of a){
  console.log(i)
} */

let c = new Set ([...a].map(el=>el*2))
console.log("c", c)




