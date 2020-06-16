export const visualize = (originalBars, changedNodesInOrder, setBars, speed, setRunState) =>  {
  // remove places where algorithm will stand still (no change)
  changedNodesInOrder = changedNodesInOrder.filter(obj => JSON.stringify(obj.before) !== JSON.stringify(obj.after))
  var c = 1

  // maps through all objects and updates bars in UI accordingly
  changedNodesInOrder.map(changeObject => {
    setTimeout(() => {
      const indexes = getIndexes(originalBars, changeObject)
      setColors(originalBars, "normal")

      indexes.map(object => {
        const index = object.index
        const newValue = object.newValue
        originalBars[index].value = newValue
        originalBars[index].type = "selected"
      })
      
      const newBars = getHelperBars(originalBars) // have to make a new object to force component to update on hook call (?)
      setBars(newBars)
    }, c*speed)
    c++
  })
  setTimeout(() => {
    setRunState('finished')
    setColors(originalBars, "correct")
    const newBars = getHelperBars(originalBars) // have to make a new object to force component to update on hook call (?)
    setBars(newBars)
  }, (c-1)*speed)
}

export const getHelperBars = (bars) => {
  const helperBars = []
  bars.map((bar) => {
    helperBars.push({
      value: bar.value,
      type: bar.type
    })
  })
  return helperBars
}

const setColors = (originalBars, color) => {
  originalBars.forEach(bar => {
    bar.type = color
  })
}

const getIndexes = (originalBars, changeObject) => {
  const indexes = []
  for (let i = 0; i < changeObject.before.length; i++) {
    const valueOfBarBefore = changeObject.before[i].value
    const valueOfBarAfter = changeObject.after[i].value
    const index = originalBars.findIndex(bar => bar.value === valueOfBarBefore)
    indexes.push({
      index,
      newValue: valueOfBarAfter
    })
  }
  return indexes
}
