import React, { CSSProperties } from 'react'

type StyleProps = {
    styles: CSSProperties
}

function Container(props:StyleProps) {
  return (
    <div style={props.styles}>
    This is a text
    </div>
  )
}

export default Container
