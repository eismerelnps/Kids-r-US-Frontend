export const Rating = ({ max, value }) => {
  const stars = new Array(max);

  for (let i = 0; i < Math.floor(max); i++) {
    stars[i] = <i key={i} className="fa-solid fa-star color_light_gray"></i>;
  }

  for (let i = 0; i < Math.floor(value); i++) {
    stars[i] = <i key={i} className="fa-solid fa-star color_orange"></i>;
  }

  return <div>{stars}</div>;
};
