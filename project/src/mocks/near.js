const data = [
  {
    'city': {'name': 'Brussels', 'location': {'latitude': 50.846557, 'longitude': 4.351697, 'zoom': 13}},
    'preview_image': 'https://7.react.pages.academy/static/hotel/6.jpg',
    'images': ['https://7.react.pages.academy/static/hotel/11.jpg', 'https://7.react.pages.academy/static/hotel/13.jpg', 'https://7.react.pages.academy/static/hotel/5.jpg', 'https://7.react.pages.academy/static/hotel/14.jpg', 'https://7.react.pages.academy/static/hotel/3.jpg', 'https://7.react.pages.academy/static/hotel/6.jpg', 'https://7.react.pages.academy/static/hotel/18.jpg', 'https://7.react.pages.academy/static/hotel/20.jpg', 'https://7.react.pages.academy/static/hotel/1.jpg', 'https://7.react.pages.academy/static/hotel/2.jpg', 'https://7.react.pages.academy/static/hotel/17.jpg', 'https://7.react.pages.academy/static/hotel/16.jpg', 'https://7.react.pages.academy/static/hotel/8.jpg', 'https://7.react.pages.academy/static/hotel/15.jpg'],
    'title': 'Tile House',
    'is_favorite': false,
    'is_premium': true,
    'rating': 3.8,
    'type': 'hotel',
    'bedrooms': 5,
    'max_adults': 7,
    'price': 388,
    'goods': ['Laptop friendly workspace', 'Washer', 'Breakfast'],
    'host': {'id': 25, 'name': 'Angelina', 'is_pro': true, 'avatar_url': 'img/avatar-angelina.jpg'},
    'description': 'Discover daily local life in city center, friendly neighborhood, clandestine casino, karaoke, old-style artisans, art gallery and artist studio downstairs.',
    'location': {'latitude': 50.854557, 'longitude': 4.364697, 'zoom': 16},
    'id': 90,
  }, {
    'city': {'name': 'Brussels', 'location': {'latitude': 50.846557, 'longitude': 4.351697, 'zoom': 13}},
    'preview_image': 'https://7.react.pages.academy/static/hotel/17.jpg',
    'images': ['https://7.react.pages.academy/static/hotel/4.jpg', 'https://7.react.pages.academy/static/hotel/17.jpg', 'https://7.react.pages.academy/static/hotel/6.jpg', 'https://7.react.pages.academy/static/hotel/12.jpg', 'https://7.react.pages.academy/static/hotel/13.jpg', 'https://7.react.pages.academy/static/hotel/15.jpg', 'https://7.react.pages.academy/static/hotel/20.jpg', 'https://7.react.pages.academy/static/hotel/16.jpg', 'https://7.react.pages.academy/static/hotel/7.jpg', 'https://7.react.pages.academy/static/hotel/1.jpg', 'https://7.react.pages.academy/static/hotel/11.jpg', 'https://7.react.pages.academy/static/hotel/19.jpg', 'https://7.react.pages.academy/static/hotel/14.jpg', 'https://7.react.pages.academy/static/hotel/3.jpg'],
    'title': 'Tile House',
    'is_favorite': false,
    'is_premium': false,
    'rating': 4.5,
    'type': 'house',
    'bedrooms': 3,
    'max_adults': 9,
    'price': 672,
    'goods': ['Laptop friendly workspace', 'Washer', 'Breakfast'],
    'host': {'id': 25, 'name': 'Angelina', 'is_pro': true, 'avatar_url': 'img/avatar-angelina.jpg'},
    'description': 'I am happy to welcome you to my apartment in the city center! Three words: location, cosy and chic!',
    'location': {'latitude': 50.860557, 'longitude': 4.376697, 'zoom': 16},
    'id': 5,
  }, {
    'city': {'name': 'Brussels', 'location': {'latitude': 50.846557, 'longitude': 4.351697, 'zoom': 13}},
    'preview_image': 'https://7.react.pages.academy/static/hotel/15.jpg',
    'images': ['https://7.react.pages.academy/static/hotel/20.jpg', 'https://7.react.pages.academy/static/hotel/13.jpg', 'https://7.react.pages.academy/static/hotel/19.jpg', 'https://7.react.pages.academy/static/hotel/11.jpg', 'https://7.react.pages.academy/static/hotel/5.jpg', 'https://7.react.pages.academy/static/hotel/17.jpg', 'https://7.react.pages.academy/static/hotel/1.jpg', 'https://7.react.pages.academy/static/hotel/14.jpg', 'https://7.react.pages.academy/static/hotel/3.jpg', 'https://7.react.pages.academy/static/hotel/8.jpg', 'https://7.react.pages.academy/static/hotel/12.jpg', 'https://7.react.pages.academy/static/hotel/15.jpg', 'https://7.react.pages.academy/static/hotel/9.jpg', 'https://7.react.pages.academy/static/hotel/2.jpg'],
    'title': 'The Pondhouse - A Magical Place',
    'is_favorite': false,
    'is_premium': false,
    'rating': 2,
    'type': 'apartment',
    'bedrooms': 2,
    'max_adults': 6,
    'price': 307,
    'goods': ['Air conditioning', 'Laptop friendly workspace', 'Breakfast', 'Washer'],
    'host': {'id': 25, 'name': 'Angelina', 'is_pro': true, 'avatar_url': 'img/avatar-angelina.jpg'},
    'description': 'I rent out a very sunny and bright apartment only 7 minutes walking distance to the metro station. The apartment has a spacious living room with a kitchen, one bedroom and a bathroom with mit bath. A terrace can be used in summer.',
    'location': {'latitude': 50.862556999999995, 'longitude': 4.375697, 'zoom': 16},
    'id': 71,
  },
];

const near = data.map((n) => entriesObj(n));

function entriesObj(val) {
  if (val instanceof Array) {
    return val.map(entriesObj);
  } else if (val instanceof Object) {
    return Object.fromEntries(
      Object.entries(val).map((v) => [
        v[0].replace(/_+(.)/g, (match, word) => word.toUpperCase()),
        entriesObj(v[1]),
      ]),
    );
  } else {
    return val;
  }
}

export default near;
