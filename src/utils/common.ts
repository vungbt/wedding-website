export const getRandomNumber = (range: number) => {
  return Math.floor(Math.random() * range) + 1;
};

export const randomAvatar = () => {
  return `/avatars/${getRandomNumber(10)}.jpg`;
};

export const getImageById = (id: string) => {
  return `/image/NLV_000${id}`;
};
