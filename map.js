let map = new Map();
let a1 = ['a']
map.set(a1,'aaa')
map.get(a1)
//console.log("map.get(a1)", map.get(a1))

map.set(['a'],123)
map.get(['a'])
//console.log("map.get(['a'])", map.get(['a']))

let Obj = {'a':'aa','b':'bb'}
let Obc = new Map(Object.entries(Obj))
console.log(Obc.get('a'))
let yiwu = [120.049538,29.373417]
let shenzhen = [113.834243,22.652982]
let xiamen = [118.107444,24.538727]
let fanyu = [113.313383,23.053547]
let quanzhou = [118.585438,24.871435]
