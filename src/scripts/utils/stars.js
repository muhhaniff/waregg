// stars
const createStars = (rating) => {
  let stars = '';
  const fullStars = Math.floor(rating);
  const halfStar = Math.floor((rating % 1) * 10) >= 5 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStar;

  stars += '<i class="fas fa-star"></i>'.repeat(fullStars);
  if (halfStar) {
    stars += '<i class="fas fa-star-half-alt"></i>';
  }
  stars += '<i class="far fa-star"></i>'.repeat(emptyStars);

  return stars;
};

export default createStars;
