/* eslint-disable no-undef */
const assert = require('assert');

Feature('UnLiking Restaurant');

Scenario('unliking one restaurant', async ({ I }) => {
  I.amOnPage('/#/home');
  I.waitForElement('.nama_resto', 30);
  I.seeElement('.nama_resto');
  const firstRestaurant = locate('.nama_resto').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.nama_resto');
  const likedRestaurantName = await I.grabTextFrom('.nama_resto');
  assert.strictEqual(firstRestaurantName, likedRestaurantName);

  I.click(likedRestaurantName);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.waitForElement('.no-favorites', 30);
  I.see('You have no favorite restaurants yet.', '.no-favorites');

  const unlikedRestaurantNames = await I.grabTextFromAll('.nama_resto');
  assert(!unlikedRestaurantNames.includes(firstRestaurantName), 'Restaurant is still present in favorites after unliking');
});
