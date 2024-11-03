"use client";

import FakeCaptcha from "~/components/FakeCaptcha";
import Nav from "~/components/Nav";

type Matrix<N extends number, M extends number> = number[][] & { length: N } & {
  [K in keyof number[][]]: { length: M };
};

function createMatrix<N extends number, M extends number>(
  rows: N,
  cols: M,
  fillValue: number,
): Matrix<N, M> {
  // Initialize the matrix with the specified fill value
  return Array.from({ length: rows }, () =>
    Array<number>(cols).fill(fillValue),
  ) as Matrix<N, M>;
}

export default function Contact() {
  const handleCaptchaSubmit = (selected: number[]) => {
    const table = createMatrix(4, 4, 0);

    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        if (table[i]?.[j] !== undefined) {
          table[i]![j] = selected.includes(i * 4 + j) ? 1 : 0;
        }
      }
    }

    console.table(table);

    if (selected.length === 4) {
      return true;
    }

    return false;
  };

  return (
    <main className="flex min-h-screen flex-col items-center bg-gray-50">
      <Nav />

      <div className="mt-52"></div>

      <FakeCaptcha
        image="/captcha/1.jpg" // Replace with your desired image URL
        title="220Ω resistor" // Replace with your desired title
        onSubmit={handleCaptchaSubmit}
      />
    </main>
  );
}
