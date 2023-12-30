/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurant', ({ I }) => {
  I.seeElement('#restaurants');
  I.see('You have no favorite restaurants yet.', '.no-favorites');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see('You have no favorite restaurants yet.', '.no-favorites');

  I.amOnPage('/#/home');

  I.waitForElement('.nama_resto', 30);
  I.seeElement('.nama_resto');
  const firstRestaurant = locate('.nama_resto').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.template_restaurant-item');
  const favoriteRestaurantName = await I.grabTextFrom('.nama_resto');

  assert.strictEqual(firstRestaurantName, favoriteRestaurantName);
});
