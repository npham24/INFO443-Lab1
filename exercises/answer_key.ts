import { simpleInput, bigInput } from "./input";
import { simpleOutput, bigOutput} from "./output";
import { test } from "./test";

/*
    From: https://leetcode.com/problems/game-of-life/
    According to the Wikipedia's article: "The Game of Life, also known simply as Life, 
    is a cellular automaton devised by the British mathematician John Horton Conway in 1970."

    Given a board with m by n cells, each cell has an initial state live (1) or dead (0). 
    Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) 
    using the following four rules (taken from the above Wikipedia article):

    Any live cell with fewer than two live neighbors dies, as if caused by under-population.
    Any live cell with two or three live neighbors lives on to the next generation.
    Any live cell with more than three live neighbors dies, as if by over-population..
    Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
    Write a function to compute the next state (after one update) of the board given its current state. 

    The next state is created by applying the above rules simultaneously to every cell in the current state, 
    where births and deaths occur simultaneously.

    Example:

    Input: 
    [
        [0,1,0],
        [0,0,1],
        [1,1,1],
        [0,0,0]
    ]

    Output: 
    [
        [0,0,0],
        [1,0,1],
        [0,1,1],
        [0,1,0]
    ]
    Follow up:

    Could you solve it in-place? Remember that the board needs to be updated at the same time: 
    You cannot update some cells first and then use their updated values to update other cells.
    In this question, we represent the board using a 2D array. In principle, the board is infinite, 
    which would cause problems when the active area encroaches the border of the array. 
    How would you address these problems?
*/


/*
     1 => currently alive -> will stay alive
    -1 => currently alive -> will become dead
     0 => currently dead  -> will stay dead
    -2 => currently dead  -> will become alive
*/
function gameOfLife(board: number[][]): number[][] {   
    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[0].length; col++) {
            update(board, row, col);
        }
    }

    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[0].length; col++) {
            if (board[row][col] == -1) {
                board[row][col] = 0;
            }
            if (board[row][col] == -2) {
                board[row][col] = 1;
            }
        }
    }
    return board;
}

function update(board: number[][], row: number, col: number): void {
    const numOfAliveNeighbors: number = getNumOfAliveNeighbors(board, row, col);

    if (isAlive(board[row][col])) {
        if (numOfAliveNeighbors < 2) {
            board[row][col] = -1;
        } else if (numOfAliveNeighbors > 3) {
            board[row][col] = -1;
        } else if (2 <= numOfAliveNeighbors && numOfAliveNeighbors <= 3){
            board[row][col] = 1;
        }
    } else {
        if (numOfAliveNeighbors == 3) {
            board[row][col] = -2;
        }
    }
}

function getNumOfAliveNeighbors(board: number[][], row: number, col: number): number {
    let dirs: number[][] = [
        [0,   1],
        [0,  -1],
        [1,   0],
        [-1,  0],
        [1,   1],
        [-1,  1],
        [1,  -1],
        [-1, -1]
    ];

    let aliveNeighbors: number[][] = [];
    for (let dir of dirs) {
        const nextRow: number = row + dir[0];
        const nextCol: number = col + dir[1];
        if (isValid(board, nextRow, nextCol)) {
            if (isAlive(board[nextRow][nextCol])) {
                aliveNeighbors.push([nextRow, nextCol]);
            }
        }
    }
    return aliveNeighbors.length;
}

function isValid(board: number[][], row: number, col: number): boolean {
    return row >= 0 && col >= 0 && row < board.length && col < board[0].length;
}
            
function isAlive(neighbor: number): boolean {
    return neighbor == 1 || neighbor == -1;
}

test(simpleInput, simpleOutput, gameOfLife);
test(bigInput, bigOutput, gameOfLife);



