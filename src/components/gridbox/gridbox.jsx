import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
    display: grid;
    margin: auto;
    justify-items: center;
    grid-template-columns: repeat(${props => props.columns}, 1fr);
    grid-template-rows: repeat(${props => props.rows}, 1fr);
    gap: ${props => props.gap};
    width: ${props => props.width};
    height: ${props => props.height}; 
`
Div.defaultProps = {
    columns: "1",
    rows: "1",
    gap: "8px",
    width: "100%",
    height: "auto",
}

function Gridbox(props) {

    // takes width, height, rows, colums
    return (
        <Div {...props}>{props.child}</Div>
    )
}

export default Gridbox