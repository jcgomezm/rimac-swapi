test('get planet', async () => {
  const response = await fetch(`${process.env.TEST_URL}/my-api/planets/1`);
  expect(response.status).toBe(200);
});
