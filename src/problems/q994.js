export default function q994(grid) {
  const orangesRotting = function (grid) {
    const queue = [];
    const N = grid.length;
    const M = grid[0].length;

    let freshCount = 0;
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < M; j++) {
        if (grid[i][j] === 2) queue.push([i, j]);
        else if (grid[i][j] === 1) freshCount++;
      }
    }

    let time = 0;
    const directions = [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
    ];
    while (queue.length && freshCount > 0) {
      let qLen = queue.length;
      for (let n = 0; n < qLen; n++) {
        let [x, y] = queue.shift();

        for (const [i, j] of directions) {
          let r = x + i;
          let c = y + j;

          if (r < 0 || r === N || c < 0 || c === M || grid[r][c] !== 1)
            continue;

          grid[r][c] = 2;
          freshCount--;
          queue.push([r, c]);
        }
      }
      time++;
    }

    return freshCount === 0 ? time : -1;
  };

  return orangesRotting(grid);
}

export const cases994 = [
  {
    input: [
      [2, 1, 1],
      [1, 1, 0],
      [0, 1, 1],
    ],
    output: 4,
  },
];
