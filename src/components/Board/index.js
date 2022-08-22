import React from 'react'
import Tile from '../Tile'
import styles from "./board.module.css"

const FEN = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR"
const boardConfig = FEN.split("/").map((row)  => {
    let symbolArr = []
    for(let i=0; i< row.length; i++) {
      if(parseInt(row[i])) {
        symbolArr.push(...Array(parseInt(row[i])).fill(""))
      } else {
        symbolArr.push(row[i])
      }
      
    }
    return symbolArr
})

console.log(boardConfig)


export default function Board() {
  return (
    <div className={styles.board}>
    {boardConfig.map((row, j) => {
                return  <div className={styles.row} key={j}>
                    {row.map((symbol, i) => {
                        return <Tile dark={(i+j)%2} symbol={symbol} key={i}/>
                    })}
                </div>
            })}
    </div>
  )
}
