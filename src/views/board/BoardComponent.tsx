import React, {FC, useEffect} from 'react'
import { useState } from 'react';
import { Board } from '../../models/Board'
import { Cell } from '../../models/Cell';
import { Player } from '../../models/Player';
import CellsComponent from './CellsComponent'
import styled from 'styled-components';
import { FigureNames } from '../../models/figuers/Figure';
import { Modal } from '../../components/modal/modal';
import {useNavigate} from "react-router-dom";
import { socket } from '../../socket';

interface PropsBoard {
  board: Board;
  setBoard: (board: Board) => void;
  currentPlayer: Player | null;
  swapPlayer: () => void;
}

const  BoardComponents: FC<PropsBoard>=({board, setBoard, swapPlayer, currentPlayer}) =>{

  function click(cell: Cell) {
    if(selectedCell && selectedCell !== cell && selectedCell.figure?.canMove(cell)) {
      selectedCell.moveFigure(cell)
      setSelectedCell(null)
      swapPlayer()
    } else  {
      if(cell.figure?.color === currentPlayer?.color)
        setSelectedCell(cell)
    }

  }

  const [selectedCell, setSelectedCell] = useState<Cell | null>(null)
  const [playerText, setPlayerText] = useState<string | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = useNavigate()

  const returnHome = () => {
    navigate('/')
}

  useEffect(() => {
    highlightCells()
    socket.emit('join', { gameId: '1234' });

    console.log("JE SUIS LA ")
    socket.on('join', (data) => {
      console.log(`COUCOU: ${JSON.stringify(data)}`);})

    console.log(board.getCopyBoard())
    return () => {
      socket.off('join');
    };
  }, [selectedCell])

  function highlightCells() {
    board.highlightCells(selectedCell)
    updateBoard()
  }

  function updateBoard() {
    finish()
    const newBoard = board.getCopyBoard()
    setBoard(newBoard)
    sendSocket()
  }

  function sendSocket() {
    socket.emit('game', { 
      boardUpdate: board.getCopyBoard(),
      turn : currentPlayer,
    });
  }

  function finish(){
    board.lostBlackFigurs.forEach((x) => {
        if (x.name === FigureNames.KING) {
          setPlayerText("Winner is White ")
          setIsModalOpen(true);
        }  
    })
    board.lostWhiteFigurs.forEach((x) => {
        if (x.name === FigureNames.KING) {
          setPlayerText("Winner is Black ")
          setIsModalOpen(true);
        }  
    })
}

  return (
    <DivCenterBoard>
    <DivPlayer>{playerText || `Au tour de : ${currentPlayer?.color}`}</DivPlayer>
     <DivBoard>
      {board.cells.map((row, index) =>
        <React.Fragment key={index}>
            {row.map(cell =>
              <CellsComponent
                click={click}
                cell={cell}
                key={cell.id}
                selected={cell.x === selectedCell?.x && cell.y === selectedCell?.y}
              />
              )}
        </React.Fragment>
      )}
    </DivBoard>
    <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}> 
      <h2> {playerText} </h2>
      <ButtonContainer onClick={() => returnHome()}>Retour lobby</ButtonContainer>
    </Modal>
    </DivCenterBoard>

  )
}

const DivCenterBoard = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const DivPlayer = styled.h3`
  color: white;
`
const DivBoard = styled.div`
  margin-bottom: 20px;
  width: calc(64px*8);
  height: calc(64px*8);
  display: flex;
  flex-wrap: wrap;
  border: 7px solid white;
  border-radius: 10px;
  transform: rotate(360deg)
  /* animation: rotate .3s linear infinite;  */
`
const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    cursor: pointer;
  
  &:hover {
    opacity: 0.8; // exemple de style de hover
  }
  `;
export default BoardComponents
