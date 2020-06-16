// FOR LOOP
// UNIQUE keys for every render, otherwise resetting wont work because the hook in each node

// RETURNS AND REMOVES RANDOM VALUE
const getRandomValue = (array) => {
  return array[Math.floor(Math.random() * array.length)]
}

const getInitialBars = () => {
  var sortedBars = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
  const bars = []
  const numOfBars = 20
  // Initialize the nodes
  for (let i = 0; i < numOfBars; i++) {
    const randomValue = getRandomValue(sortedBars)
    sortedBars = sortedBars.filter((bar) => bar !== randomValue) // Removes randomValue
    bars.push({
      value: randomValue,
      type: 'normal'
    })
   }
   return bars
}

export default getInitialBars

/*
IT WORKS
const a = getInitialBars()
console.log(a)
*/