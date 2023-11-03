const ranEl = <Type,>(list: Type[]): Type => {
  const randomIndex = Math.floor(Math.random() * list.length);
  return list[randomIndex];
};
