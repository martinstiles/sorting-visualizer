import React, { useState, useEffect } from 'react'
import getInitialBars from './initialBars'
import ButtonGroup from '../buttonGroup/buttonGroup'
import Bar from './bar'
import { mergeSortRunner } from '../../algorithms/mergeSort'

const speedLabelToSpeedMap = {
  slow: 500,
  medium: 250,
  fast: 100,
  instant: 0
}

var key = 0

const SortingSection = () => {
  const [bars, setBars] = useState([])
  const [runState, setRunState] = useState('random') // random -> running -> finished
  const [speed, setSpeed] = useState('medium')
  const [numIterations, setNumItertions] = useState(0)
  // componentDidMount
  useEffect(() => {
    const initialNodes = getInitialBars()
    setBars(initialNodes)
  }, [])

  const shuffleBars = () => {
    const initialBars = getInitialBars()
    setBars(initialBars)
    setRunState('random')
  }

  const runAlgorithm = (currentAlgorithm) => {
    setRunState('running') // SJEKK AT DENNE DISABLER KNAPPER
    const currentSpeed = speedLabelToSpeedMap[speed]
    if (currentAlgorithm === 'mergeSort') {
      console.log('NÅ SKAL MERGE SORT KJØRE')
      //setBars(mergeSort(bars, speed, 1))
      mergeSortRunner(bars, setBars, currentSpeed, setRunState)
    }
    setRunState('finished') // DENNE MÅ FLYTTES TIL VISUALISERING
  }


  return (
    <div style={{verticalAlign: 'bottom'}}>
      <ButtonGroup shuffleBars={shuffleBars} runAlgorithm={runAlgorithm} setSpeed={setSpeed} runState={runState} />
      <div style={{display: 'flex', flexDirection: 'row', marginTop: '2em', verticalAlign: 'bottom', alignItems: 'bottom'}}>
        {bars.map((bar) =>
          <Bar key={key++} type={bar.type} heigth={bar.value} />
        )}
      </div>
      {/*<h1> Number of merges: {numIterations || '--'} </h1>*/}
    </div>
  )
}

export default SortingSection