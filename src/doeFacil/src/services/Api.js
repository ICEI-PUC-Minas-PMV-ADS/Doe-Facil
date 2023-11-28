

const FAKE_API = { 
  users: [
    { id: 1, firstName: 'John', lastName: 'Smith', cpf: '12345678909', email: 'john@example.com', phone: '11987654321', password: 'password123' },
    { id: 2, firstName: 'Mary', lastName: 'Johnson', cpf: '98765432100', email: 'mary@example.com', phone: '11912345678', password: 'password456' },
    { id: 3, firstName: 'Anna', lastName: 'Martins', cpf: '11122233344', email: 'anna@example.com', phone: '11911223344', password: 'password789' },
    { id: 4, firstName: 'Peter', lastName: 'Rocha', cpf: '55566677788', email: 'peter@example.com', phone: '11944556677', password: 'password101' },
    { id: 5, firstName: 'Lucas', lastName: 'Morais', cpf: '99988877766', email: 'lucas@example.com', phone: '11999887766', password: 'password202' }
  ],
  locations: [
    { locationId: 1, locationName: 'Hospital A', locationAddressId: 1, latitude: -23.5629, longitude: -46.6544 },
    { locationId: 2, locationName: 'Hospital B', locationAddressId: 2, latitude: -23.5630, longitude: -46.6545 },
    { locationId: 3, locationName: 'Hospital C', locationAddressId: 3, latitude: -23.5631, longitude: -46.6546 },
    { locationId: 4, locationName: 'Hospital D', locationAddressId: 4, latitude: -23.5632, longitude: -46.6547 },
    { locationId: 5, locationName: 'Hospital E', locationAddressId: 5, latitude: -23.5633, longitude: -46.6548 }
  ],
  localDonors: [
    { localDonorId: 1, locationId: 1, userId: 1, bloodType: 'O+' },
    { localDonorId: 2, locationId: 2, userId: 2, bloodType: 'A-' },
    { localDonorId: 3, locationId: 3, userId: 3, bloodType: 'B+' },
    { localDonorId: 4, locationId: 4, userId: 4, bloodType: 'AB-' },
    { localDonorId: 5, locationId: 5, userId: 5, bloodType: 'O-' }
  ],
  address: [
    {
      id: 1,
      street: 'Street A',
      number: '123',
      neighborhood: 'Bairro A',
      city: 'Cidade A',
      state: 'Estado A',
      postalCode: '12345-678',
      userId: null,
      locationId: 1
    },
    {
      id: 2,
      street: 'Street B',
      number: '456',
      neighborhood: 'Bairro B',
      city: 'Cidade B',
      state: 'Estado B',
      postalCode: '23456-789',
      userId: null,
      locationId: 2
    },
    {
      id: 3,
      street: 'Street C',
      number: '789',
      neighborhood: 'Bairro C',
      city: 'Cidade C',
      state: 'Estado C',
      postalCode: '34567-890',
      userId: null,
      locationId: 3
    },
    {
      id: 4,
      street: 'Street D',
      number: '101',
      neighborhood: 'Bairro D',
      city: 'Cidade D',
      state: 'Estado D',
      postalCode: '45678-901',
      userId: null,
      locationId: 4
    },
    {
      id: 5,
      street: 'Street E',
      number: '202',
      neighborhood: 'Bairro E',
      city: 'Cidade E',
      state: 'Estado E',
      postalCode: '56789-012',
      userId: null,
      locationId: 5
    }
  ]
};

export default  { 
  checkToken: async (token) => {
    return { token: 'fake_token' };
  },
  signIn: async (email, password) => {
    const user = FAKE_API.users.find(u => u.email === email && u.password === password);
    if (user) {
      return { id: user.id, token: 'fake_token' };
    } else {
      return { error: 'Usuário ou senha inválidos' };
    }
  },
  signUp: async (firstName, lastName, cpf, email, phone, password) => {
    const id = FAKE_API.users.length + 1;
    FAKE_API.users.push({ id, firstName, lastName, cpf, email, phone, password });
    return { id, token: 'fake_token' };
  },
  getUser: async (id) => {
    const user = FAKE_API.users.find(u => id === id);
    if (user) {
      return { firstName, lastName, cpf, phone};
    }
  },
  getLocations: async () => {
  
    return FAKE_API.locations;
  },
  getLocationById: async (locationId) => {
    return FAKE_API.locations.find(loc => loc.locationId === locationId);
  },
  getLocalDonors: async () => {
    return FAKE_API.localDonors.map(donor => {
      const user = FAKE_API.users.find(u => u.id === donor.userId);
      const location = FAKE_API.locations.find(l => l.locationId === donor.locationId);
      const address = FAKE_API.address.find(a => a.locationId === donor.locationId);
      return {
        ...donor,
        user,
        location,
        address,
      };
    });
  },
  
  getLocalDonorById: async (localDonorId) => {
    return FAKE_API.localDonors.find(donor => donor.localDonorId === localDonorId);
  }
};
