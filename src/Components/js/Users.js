export const users = [
    {
      id: 1,
      nombre: 'Andrey Julian',
      primerApellido: 'Gutierrez',
      segundoApellido: 'Arce',
      email: 'andy@example.com',
      fechaNacimiento: "20/09/2002",
      telefono: '1234567890',
      password: 'password123',
      facebook: 'https://www.facebook.com/AndreySC30/',
      descripcion: 'Guapo poderoso muy hermoso asombroso majestuoso',
      foto: 'https://i.ibb.co/smbn31B/IMG-2035.jpg'
    },
    {
      id: 2,
      nombre: 'Edna Alejandra',
      primerApellido: 'Morales',
      segundoApellido: 'Diaz',
      email: 'aden@example.com',
      fechaNacimiento: "07/04/2001",
      telefono: '0987654321',
      password: 'password456',
      descripcion: 'Mi niña hermosa preciosa chula poderosa majestuosa',
      foto: 'https://www.shutterstock.com/image-vector/blank-avatar-photo-place-holder-600nw-1095249842.jpg'
    },
    // Agrega más usuarios aquí
  ];
  
  export const getUser = (id) => {
    return users.find(user => user.id === id);
  };