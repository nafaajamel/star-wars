module.exports = {
  Query: {
    character: (_, { id }) => {
      return {
        id: 5,
        name: 'String',
        description: 'tring!',
        bornAt: 'String',
        pictureUrl: 'String',
        planet: 'String',
        friends: [],
      };
    },
  },
};
