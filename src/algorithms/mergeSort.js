
import { getHelperBars, visualize } from './utils'

function merge (left, right, changedBarsInOrder) {
  let resultArray = [], leftIndex = 0, rightIndex = 0

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex].value <= right[rightIndex].value) {
      resultArray.push(left[leftIndex])
      leftIndex++
    } else {
      resultArray.push(right[rightIndex])
      rightIndex++
    }
  }

  const originalList = left.concat(right)
  const sortedList = resultArray
    .concat(left.slice(leftIndex))
    .concat(right.slice(rightIndex))

  changedBarsInOrder.push({
    before: originalList,
    after: sortedList
  })
  
  return sortedList
}

function mergeSort (unsortedArray, changedBarsInOrder) {
  if (unsortedArray.length <= 1) {
    return unsortedArray
  }

  const middle = Math.floor(unsortedArray.length / 2)
  const left = unsortedArray.slice(0, middle)
  const right = unsortedArray.slice(middle)

  return merge(
    mergeSort(left, changedBarsInOrder), mergeSort(right, changedBarsInOrder), changedBarsInOrder
  )
}

export const mergeSortRunner = (bars, setBars, speed, setRunState) => {
  const helperBars = getHelperBars(bars)

  var changedBarsInOrder = []
  const test = mergeSort(helperBars, changedBarsInOrder) // fills changedBarsInOrder
  visualize(bars, changedBarsInOrder, setBars, speed, setRunState)
  return test
}
