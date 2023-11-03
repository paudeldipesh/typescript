export function add(x: number, y: number) {
  return x + y;
}

export function sample<Type>(arr: Type[]): Type {
  const index = Math.floor(Math.random() * arr.length);
  return arr[index];
}

export const check = 5862;
