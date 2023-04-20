import React, {FC, useEffect} from 'react'
import { useState } from 'react';
import { Board } from '../../models/Board'
import { Cell } from '../../models/Cell';
import { Player } from '../../models/Player';
import CellsComponent from './CellsComponent'
import styled from 'styled-components';

interface PropsBoard {
  board: Board;
  setBoard: (board: Board) => void;
  currentPlayer: Player | null;
}

const  BoardComponents: FC<PropsBoard>=({board, setBoard, currentPlayer}) =>{

  function click(cell: Cell) {
    if(selectedCell && selectedCell !== cell && selectedCell.figure?.canMove(cell)) {
      selectedCell.moveFigure(cell)
      setSelectedCell(null)
    } else  {
      if(cell.figure?.color === currentPlayer?.color)
        setSelectedCell(cell)
    }

  }

  const [selectedCell, setSelectedCell] = useState<Cell | null>(null)

  useEffect(() => {
    highlightCells()
  }, [selectedCell])

  function highlightCells() {
    board.highlightCells(selectedCell)
    updateBoard()
  }

  function updateBoard() {
    const newBoard = board.getCopyBoard()
    console.log(newBoard)
    setBoard(newBoard)
  }

  return (
    <DivCenterBoard>
    <DivPlayer>Au tour de :  {currentPlayer?.color}</DivPlayer>
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
export default BoardComponents
