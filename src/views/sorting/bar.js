import React, { useState } from 'react'

const typeToColorMap = {
  normal: `rgb(${[220,220,220]})`,
  correct: '#63C132',
  wrong: '#cf2e2e',
  selected: '#2d749a'
}

const Bar = (props) => {
  // NØDVENDIG? Mulig vi kan droppe denne og bare bruke props.type direkte
  //const [type, setType] = useState(props.type)
  const type = props.type || 'normal'
  const heigth = props.heigth || 10
  const style = {
    background: typeToColorMap[type],
    height: `${heigth*1.5}em`,
    width: '2em',
    marginRight: '1em',
  }

  return (
    <div key={props.key} style={style} />
  )
}

export default Bar