export default function q542(params) {
  function updateMatrix(mat) {
    const queue = [];

    const N = mat.length;
    const M = mat[0].length;

    for (let i = 0; i < N; i++) {
      for (let j = 0; j < M; j++) {
        if (mat[i][j] === 0) queue.push([i, j]);
        //
        else if (mat[i][j] === 1) mat[i][j] = -1;
      }
    }

    const directions = [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
    ];

    while (queue.length) {
      let [x, y] = queue.shift();

      for (const d of directions) {
        let [i, j] = d;
        if (x + i < 0 || x + i >= N || y + j < 0 || y + j >= M) continue;

        if (mat[x + i][y + j] === -1) {
          mat[x + i][y + j] = mat[x][y] + 1;
          queue.push([x + i, y + j]);
        }
      }
    }

    return mat;
  }
  return updateMatrix(params[0]);
}

export const cases542 = [
  {
    input: [
      [
        [0, 0, 0],
        [0, 1, 0],
        [0, 0, 0],
      ],
    ],
    output: [
      [0, 0, 0],
      [0, 1, 0],
      [0, 0, 0],
    ],
  },
];
