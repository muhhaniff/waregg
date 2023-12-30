import API_ENDPOINT from '../globals/api-endpoint';

class TheRestaurantDbSource {
  static async listRestaurants() {
    const response = await fetch(API_ENDPOINT.LIST);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }

  // static async searchRestaurants(query) {
  //   const response = await fetch(API_ENDPOINT.SEARCH(query));
  //   const responseJson = await response.json();
  //   return responseJson.restaurants;
  // }

  // static async addReview(review) {
  //   const response = await fetch(API_ENDPOINT.REVIEW, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(review),
  //   });
  //   return response.json();
  // }
}

export default TheRestaurantDbSource;
