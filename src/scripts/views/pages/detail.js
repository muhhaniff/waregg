import { createRestaurantDetailTemplate } from '../templates/template-creator';
import TheRestaurantDbSource from '../../data/therestaurantdb-source';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';

const Detail = {
  async render() {
    return `
      <div id="restaurant" class="restaurant"></div>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = window.location.hash.toLowerCase();
    const urlSplit = url.split('/');
    const id = urlSplit[urlSplit.length - 1];
    const restaurant = await TheRestaurantDbSource.detailRestaurant(id);
    const restaurantContainer = document.getElementById('restaurant');
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestaurant: FavoriteRestaurantIdb,
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        description: restaurant.description,
        pictureId: restaurant.pictureId,
        city: restaurant.city,
        rating: restaurant.rating,
      },
    });
  },
};

export default Detail;
