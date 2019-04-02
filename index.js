module.exports = intervals =>
  [...intervals.reduce((acc, [first, last]) =>
    acc.set(first, (acc.get(first )||0) + 1).set(last+1,(acc.get(last+1)||0) - 1)
  , new Map)]
  .sort((a,b) => a[0]-b[0])
  .reduce(([prev, inside, res], [curr, change]) =>
    [curr, inside+change, (!inside || res.push([prev, curr-1]), res)]
  , [0, 0, []] )
  .pop()
