const initialState = {
  foils: {
    data: [
      {
        id: 1,
        name: 'Dąb',
        picture: 'dab.jpg',
        describe: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
      },
      {
        id: 2,
        name: 'Biała sosna',
        picture: 'bialasosna.jpg',
        describe: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
      },
      {
        id: 3,
        name: 'Buk',
        picture: 'buk.jpg',
        describe: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
      },
      {
        id: 4,
        name: 'Jesion',
        picture: 'jesion.jpg',
        describe: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
      },
    ],
    loading: {
      error: false,
    }
  }

}

export default initialState;