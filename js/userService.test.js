const { getUser } = require('./userService');
const fetch = require('node-fetch');jest.mock('node-fetch');describe('getUser', () => {
  it('should return user data when the API call is successful', async () => {
    const mockUser = { id: 1, name: 'John Doe' };
    fetch.mockResolvedValue({
      ok: true,
      json: async () => mockUser
    });    const user = await getUser(1);
    expect(user).toEqual(mockUser);
  });  it('should throw an error when the API call is unsuccessful', async () => {
    fetch.mockResolvedValue({
      ok: false
    });    await expect(getUser(1)).rejects.toThrow('Network response was not ok');
  });
});