# disjoin

## Install
```
npm install disjoin
```

## Try it
```javascript
import disjoin from 'disjoin'

console.log(disjoin([[0,9], [2,12]]))
console.log(disjoin([[0,Infinity],[1,5],[4,6]]))
console.log(disjoin([[0,6],[1,2],[3,6],[6,6],[7,9],[7,8]]))

/* Output :
[[0,1],[2,9],[10,12]]
[[0,0],[1,3],[4,5],[6,6],[7,Infinity]]
[[0,0],[1,2],[3,5],[6,6],[7,8],[9,9]] */
```
