test('get planet', async () => {
  const response = await fetch(`${process.env.TEST_URL}/swapi/planets/1`);
  expect(response.status).toBe(200);
});
