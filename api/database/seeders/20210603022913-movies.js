'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('movies', [
      {
        title: 'LAVENDER',
        year: 2016,
        rated: 'PG-13',
        image: 'https://i.ytimg.com/vi/l-r003cEvyI/movieposter.jpg',
        released_on: '2016-04-18',
        genre: 'Drama, Thriller',
        director: 'Ed Bass-Donnelly',
        plot: 'LAVENDER is a taut psychological thriller that bends the line between memory and madness, past and present, like a splinter in the brain struggling to escape.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'TENET',
        year: 2020,
        rated: 'PG-13',
        image: 'https://mk0movieguide99l7786.kinstacdn.com/wp-content/uploads/2020/09/tenet.jpg',
        released_on: '2020-09-03',
        genre: 'Science Fiction',
        director: 'Christopher Nolan',
        plot: 'TENET, a big budget action movie, opens with an attack on a large music concert at an opera house in Ukraine. An unnamed CIA agent called “The Protagonist” participates in a rescue attempt, but he’s captured and takes a cyanide pill while being tortured. He later wakes up to find out that the pill was fake, and the mission was a test. By passing the test, The Protagonist qualifies to join an elite band of people trying to save the world from a Russian oligarch, who can end the world by using time travel machines that can invert the entropy of the world.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'THE ADVENTURES OF TINTIN',
        year: 2011,
        rated: 'PG',
        image: 'https://mk0movieguide99l7786.kinstacdn.com/wp-content/uploads/2012/08/adventures_of_tintin_the_secret_of_the_unicorn_ver5.jpg',
        released_on: '2011-10-23',
        genre: 'Action, Adventure',
        director: 'Steven Spielberg',
        plot: 'THE ADVENTURES OF TINTIN is a glorious, grand animated adventure the whole family can enjoy. Tintin is a young curious reporter who buys a model of the lost treasure ship called the “Unicorn.” A sinister man approaches Tintin, offering him an enormous sum for the ship. Tintin refuses, valuing the ship for its beauty, not its commercial value. Eventually, Tintin discovers that there are three model ships, all containing a hidden clue to the lost treasure. He and his dog, Snowy, team up with the drunken descendent of the Unicorn’s captain to retrieve the treasure. To find it, they have to contend with the descendent of the pirate who tried to steal the Unicorn’s treasure before it was lost at sea.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'I AM WOMAN',
        year: 2020,
        rated: 'R',
        image: 'https://mk0movieguide99l7786.kinstacdn.com/wp-content/uploads/2020/09/i_am_woman_ver2.jpg',
        released_on: '2020-09-11',
        genre: 'Drama',
        director: 'Unjoo Moon',
        plot: 'I AM WOMAN zooms in on the life of singer Helen Reddy. Divorced, Helen and her toddler daughter, Traci, move to New York City from Australia in 1966 so that Helen can sign a record deal. However, the deal collapses, and Helen almost calls it quits. Then, she meets Jeff Wald, who becomes her lover, manager and husband. The pair and Traci move to Los Angeles, hoping Helen’s music will find more acceptance on the West Coast. After months, it finally does, when one of Reddy’s songs becomes a feminist anthem. Eventually, though, Jeff’s drug abuse puts a damper on happiness.',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('movies', null, {});
  }
};
