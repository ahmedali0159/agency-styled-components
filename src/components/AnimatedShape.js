import React from 'react'
import styled from 'styled-components'

const Square = styled.div`
    width: 60px;
    height: 60px;
    background: #778beb;
    opacity: 0.7;
    position: absolute;
    top: -60px;
    left: -60px;
    z-index: -1;
    animation: square 25s linear alternate infinite;
    @keyframes square {
        to{
            transform: translate(100vw, 100vh);
        }
    }
`;

const Circle = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: #e66767;
    position: absolute;
    top: 200px;
    left: -100px;
    z-index: -1;
    animation: circle 25s linear alternate infinite;
    @keyframes circle {
        to{
            transform: translate(100vw, -100vh);
        }
    }
`;

const Rectangle = styled.div`
    width: 50px;
    height: 100px;
    background: #2ecc71;
    opacity: 0.7;
    position: absolute;
    top: 400px;
    left: -50px;
    z-index: -1;
    animation: rectangle 25s linear alternate infinite;
    @keyframes rectangle {
        to{
            transform: translate(100vw, -50vh);
        }
    }
`;



const AnimatedShape = () => {
    return (
        <>
        <Square></Square>
        <Circle></Circle>
        <Rectangle></Rectangle>
        </>
    )
}

export default AnimatedShape
