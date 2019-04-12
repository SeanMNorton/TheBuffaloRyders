const tour = {
  state: {
    gigs: [
      {
        artist: 'Joe Risdon and The 815',
        date: new Date('March 23, 2019'),
        time: '10:00 PM',
        venue: 'ANNABELL\'S BAR AND LOUNGE',
        city: 'Akron',
        state: 'OH',
        info: 'W/ COUP DE GRACE',
      },
      {
        artist: 'Joe Risdon and The 815',
        date: new Date('March 29, 2019'),
        time: '9:00 PM',
        venue: 'Happy Dog',
        city: 'Lakewood',
        state: 'OH',
        info: 'w/ Leaf Borbie &amp; The Family Tree',
      },
      {
        artist: 'Joe Risdon and The 815',
        date: new Date('April 01, 2019'),
        time: '10:00 PM',
        venue: 'Musica',
        city: 'CLE',
        state: 'OH',
        info: 'W/ Jade Bird',
      },
    ],
  },
  getters: {
    newGigs: state => state.gigs
      .filter(gig => gig.date >= new Date().setHours(0, 0, 0, 0))
      .sort((a, b) => b.date - a.date),

    oldGigs: state => state.gigs
      .filter(gig => gig.date < new Date().setHours(0, 0, 0, 0))
      .sort((a, b) => b.date - a.date),
  },
};

export default tour;
