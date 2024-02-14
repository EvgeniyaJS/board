function createChessboard() {
    const chessboard = document.createElement('div');
    chessboard.className = 'chessboard';

    for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 8; col++) {
            const cell = document.createElement('div');
            cell.className = 'cell';
            cell.classList.add((row + col) % 2 === 0 ? 'white' : 'black');
            chessboard.appendChild(cell);
        }
    }

    return chessboard;
}

const chessboardContainer: HTMLElement | null = document.getElementById('chessboard-container');
chessboardContainer?.appendChild(createChessboard());

