import React, { useEffect, useState } from 'react';
import BoardComponents from './BoardComponent';
import LostFigures from './LostFigures';
import { Board } from '../../models/Board';
import { Colors } from '../../models/Colors';
import { Player } from '../../models/Player';
import styled from "styled-components";

function BoardView() {

    const [board, setBoard] = useState(new Board())
    const [whitePlayer, setWhitePlayer] = useState(new Player(Colors.WHITE))
    const [blackPlayer, setBlackPlayer] = useState(new Player(Colors.BLACK))
    const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null)


    useEffect(()=> {
        restart()
        setCurrentPlayer(whitePlayer)
    }, [])

    function swapPlayer() {
        setCurrentPlayer(currentPlayer?.color === Colors.WHITE ? blackPlayer : whitePlayer )
    }

    function restart() {
        const newBoard = new Board();
        newBoard.initCells()
        newBoard.addFigures()
        setBoard(newBoard)
    }

    return (
        <DivBody>
            <DivWrapper>
                <DivLostFigures>
                    <LostFigures
                        title='Pion noir'
                        figures={board.lostBlackFigurs}
                    />
                    <BoardComponents
                        board={board}
                        setBoard={setBoard}
                        currentPlayer={currentPlayer}
                        swapPlayer={swapPlayer}
                    />
                    <LostFigures
                        title='Pion blanc'
                        figures={board.lostWhiteFigurs}
                    />
                </DivLostFigures>
            </DivWrapper>
        </DivBody>
    );
}

const DivBody = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: #1B1B1B;
  justify-content: center;
`

const DivLostFigures = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-bottom: 30px;
  padding: 30px;
`
const DivWrapper = styled.div`
  height: 100%;
  width: 100%;
    display: flex;
  flex-direction: column;
  justify-content: center;
`
export default BoardView;
