const data = [
  {
    'comment': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    'date': '2019-05-08T14:13:56.569Z',
    'id': 1,
    'rating': 4,
    'user': {
      'avatar_url': 'img/avatar-max.jpg',
      'id': 1,
      'is_pro': true,
      'name': 'Max',
    },
  },
  {
    'comment': 'Q jaj asij isjf aisdjf as.',
    'date': '2019-05-08T14:13:56.569Z',
    'id': 2,
    'rating': 2,
    'user': {
      'avatar_url': 'img/avatar.svg',
      'id': 2,
      'is_pro': false,
      'name': 'Avatar',
    },
  },
  {
    'comment': 'Fdsfkjas djf lasjd lf jsdf la flkh dklfhadk fksadf.',
    'date': '2019-05-08T14:13:56.569Z',
    'id': 3,
    'rating': 5,
    'user': {
      'avatar_url': 'img/avatar-angelina.jpg',
      'id': 3,
      'is_pro': true,
      'name': 'Angelina',
    },
  },
];

const reviews = data.map((review) => entriesObj(review));

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

export default reviews;
