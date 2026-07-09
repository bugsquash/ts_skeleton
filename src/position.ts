export function position(x: number, y: number): Position {
  return {
    x,
    y
  };
}

export type Position = {
  x: number;
  y: number;
};
