const mongoose = require('mongoose');
const { dbURI } = require('../config/environment');

mongoose.Promise = require('bluebird');
mongoose.connect(dbURI);

const Job = require('../models/job');
const User = require('../models/user');

Job.collection.drop();
User.collection.drop();

User
  .create([{
    pubName: 'Red Lion',
    address: {
      streetNumber: '110',
      street: 'WhiteChapel High St',
      city: 'London',
      postcode: 'EC3N 1AL',
      country: 'UK',
      lat: '51.520066',
      lng: '-0.055103'
    },
    email: '1@1.com',
    password: 'password',
    passwordConfirmation: 'password'
  },
  {
    pubName: 'Black Horse',
    address: {
      streetNumber: '80',
      street: 'WhiteChapel High St',
      city: 'London',
      postcode: 'E1 5LJ',
      country: 'UK',
      lat: '51.4972758',
      lng: '-0.20491730000003372'
    },
    email: '2@2.com',
    password: 'password',
    passwordConfirmation: 'password'
  },
  {
    pubName: 'The Pub',
    address: {
      streetNumber: '20',
      street: 'WhiteChapel High St',
      city: 'London',
      postcode: 'E1 7HP',
      country: 'UK',
      lat: '51.51658620000001',
      lng: '-0.06498179999994136'
    },
    email: '3@3.com',
    password: 'password',
    passwordConfirmation: 'password'
  }])
  .then((users) => {
    console.log(`${users.length} users created`);
    return Job
      .create([{
        title: 'Bartender',
        description: 'Weekend Evening work',
        rate: 8,
        createdBy: users[0]
      },{
        title: 'Waitress',
        description: 'Weekend Evening work',
        rate: 9,
        createdBy: users[0]
      },{
        title: 'Bar Work',
        description: 'Bar staff needed for new pub',
        rate: 12,
        createdBy: users[1]
      },{
        title: 'Waitress',
        description: 'Morning shifts at local cafe',
        rate: 9,
        createdBy: users[1]
      },{
        title: 'Chef',
        description: 'Chef needed at restaurant',
        rate: 9,
        createdBy: users[2]
      }]);
  })
  .then((jobs) => console.log(`${jobs.length} jobs created`))
  .catch((err) => console.log(err))
  .finally(() => mongoose.connection.close());
