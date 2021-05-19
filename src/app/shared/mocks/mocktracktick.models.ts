export const MockAddress = {
  zipCode: '90210',
  city: 'Hollywood',
  street: 'Rock',
  country: 'USA',
  state: 'California',
};

export const MockSite = {
  id: '123',
  clientId: '123',
  title: 'Awesome Title',
  createdAt: '1/1/2020',
  updatedAt: '1/1/2021',
  contacts: {
    main: {
      id: '234',
      firstName: 'Martin',
      lastName: 'Brodeur',
      email: 'hockey@gmail.com',
      phoneNumber: '514-111-2222',
      jobTitle: 'goalie',
      address: MockAddress,
    },
  },
  address: MockAddress,
  images: ['images.gif'],
  tags: ['tag1'],
};
