const initialState = {
  foils: {
    data: [
      {
        id: '1',
        name: 'Dąb',
        picture: 'dab.jpg',
        describe: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        price: '100'
      },
      {
        id: '2',
        name: 'Biała sosna',
        picture: 'bialasosna.jpg',
        describe: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        price: '150'
      },
      {
        id: '3',
        name: 'Buk',
        picture: 'buk.jpg',
        describe: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        price: '120'
      },
      {
        id: '4',
        name: 'Jesion',
        picture: 'jesion.jpg',
        describe: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        price: '200'
      },
    ],
    loading: {
      error: false,
    }
  },
  
  orders:[]
}

export default initialState;