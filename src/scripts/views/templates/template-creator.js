import CONFIG from '../../globals/config';
import createStars from '../../utils/stars';

const createRestaurantItemTemplate = (restaurant) => `
  <div class="template_restaurant-item">
    <img class="restaurant-thumbnail lazyload" data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" src="./images/loading/loading.png">
    <div class="restaurant-info">
      <h3 class="nama_resto"><a href="#/detail/${restaurant.id}">${restaurant.name}</a></h3>
      <div class="city-rating">
        <span class="city">${restaurant.city}</span>
        <span class="rating">${createStars(restaurant.rating)}&nbsp;${restaurant.rating}</span>
      </div>
      <p class="description">${restaurant.description}</p>
    </div>
  </div>
`;

const createRestaurantDetailTemplate = (restaurant) => `
  <div class="restaurant-detail">
    <h2 class="restaurant-title">${restaurant.name}</h2>
    <img class="restaurant-poster lazyload" data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" src="./images/loading/loading.png">
    <div class="restaurant-info">
      <h3>${restaurant.city}</h3>
      <p>Address: ${restaurant.address}</p> 
      <p>${restaurant.description}</p>
    </div>
    <div class="menu">
      <h4>Food</h4>
      <ul>
        ${restaurant.menus.foods.map((food) => `<li>${food.name}</li>`).join('')}
      </ul>
      <h4>Drinks</h4>
      <ul>
        ${restaurant.menus.drinks.map((drink) => `<li>${drink.name}</li>`).join('')}
      </ul>
    </div>
    <div class="restaurant-reviews">
      <h3>Customer Reviews</h3>
      ${restaurant.customerReviews.map((review) => `
        <div class="review-item">
          <h4>${review.name} | ${review.date}</h4>
          <p>${review.review}</p>
        </div>
      `).join('')}
    </div>
  </div>
`;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
};
