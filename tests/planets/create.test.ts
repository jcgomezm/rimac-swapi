test('create planet', async () => {
  const payload = {
    nombre: 'Tatooine',
    diametro: '10465',
    periodo_rotacion: '23',
    periodo_orbital: '304',
    gravedad: '1',
    poblacion: '120000',
    clima: 'Arid',
    terreno: 'Dessert',
    superficie_agua: '1',
    url: 'https://swapi.py4e.com/api/planets/1/',
  };
  const response = await fetch(`${process.env.TEST_URL}/my-api/planets`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  expect(response.status).toBe(201);
});
