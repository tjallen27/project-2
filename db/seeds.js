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
    pubName: 'The Rise',
    address: {
      streetNumber: '49',
      street: 'Lavender Gardens',
      city: 'London',
      postcode: 'SW11 1DJ',
      country: 'UK',
      lat: '51.4633967',
      lng: '-0.16234940000003917'
    },
    email: '1@1.com',
    phone: '01234 567 890',
    password: 'password',
    passwordConfirmation: 'password'
  },{
    pubName: 'Tuk Cho',
    address: {
      streetNumber: '28-30',
      street: 'New Broadway',
      city: 'London',
      postcode: 'W5 2XA',
      country: 'UK',
      lat: '51.5133295',
      lng: '-0.3061314000000266'
    },
    email: '2@2.com',
    phone: '01234 567 890',
    password: 'password',
    passwordConfirmation: 'password'
  },{
    pubName: 'Round midnight Jazz & Blues Bar',
    address: {
      streetNumber: '13',
      street: 'Liverpool Road',
      city: 'London',
      postcode: 'N1 0RW',
      country: 'UK',
      lat: '51.5337665',
      lng: '-0.10714870000003884'
    },
    email: '3@3.com',
    phone: '01234 567 890',
    password: 'password',
    passwordConfirmation: 'password'
  },{
    pubName: '+venture',
    address: {
      streetNumber: '91a',
      street: 'Battersea Rise',
      city: 'London',
      postcode: 'SW11 1HW',
      country: 'UK',
      lat: '51.4606132',
      lng: '-0.1677875000000313'
    },
    email: '4@4.com',
    phone: '01234 567 890',
    password: 'password',
    passwordConfirmation: 'password'
  },{
    pubName: 'The +Venture',
    address: {
      streetNumber: '5',
      street: 'Fernlea Road',
      city: 'London',
      postcode: 'SW12 9RT',
      country: 'UK',
      lat: '51.4428691',
      lng: '-0.1482224999999744'
    },
    email: '5@5.com',
    phone: '01234 567 890',
    password: 'password',
    passwordConfirmation: 'password'
  },{
    pubName: 'The 11th Commandment',
    address: {
      streetNumber: '58',
      street: 'Carter Lane',
      city: 'London',
      postcode: 'EC4V 5EA',
      country: 'UK',
      lat: '51.5133087',
      lng: '-0.10159790000000157'
    },
    email: '6@6.com',
    phone: '01234 567 890',
    password: 'password',
    passwordConfirmation: 'password'
  },{
    pubName: '12 Bar Club',
    address: {
      streetNumber: '12',
      street: 'Denmark Street',
      city: 'London',
      postcode: 'WC2H 8NL',
      country: 'UK',
      lat: '51.5155965',
      lng: '-0.1292475000000195'
    },
    email: '7@7.com',
    phone: '01234 567 890',
    password: 'password',
    passwordConfirmation: 'password'
  },{
    pubName: '125 Church Street ',
    address: {
      streetNumber: '125',
      street: 'Church Street',
      city: 'London',
      postcode: 'N16 0UH',
      country: 'UK',
      lat: '51.56157899999999',
      lng: '-0.08104900000000725'
    },
    email: '8@8.com',
    phone: '01234 567 890',
    password: 'password',
    passwordConfirmation: 'password'
  },
  {
    pubName: '127',
    address: {
      streetNumber: '127',
      street: 'Dulwich Road',
      city: 'London',
      postcode: 'SE24 0NG',
      country: 'UK',
      lat: '51.4527756',
      lng: '-0.1030163000000357'
    },
    email: '9@9.com',
    phone: '01234 567 890',
    password: 'password',
    passwordConfirmation: 'password'
  },
  {
    pubName: '1802',
    address: {
      streetNumber: 'Museum in Docklands No. 1 Warehouse',
      street: 'West India Quay',
      city: 'London',
      postcode: 'E14 4AL',
      country: 'UK',
      lat: '51.507645',
      lng: '-0.023844199999984994'
    },
    email: '10@10.com',
    phone: '01234 567 890',
    password: 'password',
    passwordConfirmation: 'password'
  },
  {
    pubName: 'The Three Lords',
    address: {
      streetNumber: '27',
      street: 'Minories',
      city: 'London',
      postcode: 'EC3N 1DE',
      country: 'UK',
      lat: '51.51252969999999',
      lng: '-0.07531410000001415'
    },
    email: '11@11.com',
    phone: '01234 567 890',
    password: 'password',
    passwordConfirmation: 'password'
  },
  {
    pubName: '19:20',
    address: {
      streetNumber: '19-20',
      street: 'Great Sutton Street',
      city: 'London',
      postcode: 'EC1V 0NB',
      country: 'UK',
      lat: '51.52330569999999',
      lng: '-0.10142719999998917'
    },
    email: '12@12.com',
    phone: '01234 567 890',
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
        createdBy: users[1]
      },{
        title: 'Bar Work',
        description: 'Bar staff needed for new pub',
        rate: 12,
        createdBy: users[2]
      },{
        title: 'Waitress',
        description: 'Morning shifts at local cafe',
        rate: 9,
        createdBy: users[3]
      },{
        title: 'Waitress',
        description: 'Morning shifts at local cafe',
        rate: 9,
        createdBy: users[4]
      },{
        title: 'Waitress',
        description: 'Morning shifts at local cafe',
        rate: 9,
        createdBy: users[5]
      },{
        title: 'Chef',
        description: 'Chef needed at restaurant',
        rate: 9,
        createdBy: users[6]
      },{
        title: 'Waiter',
        description: 'Waiter needed at restaurant',
        rate: 9,
        createdBy: users[7]
      },{
        title: 'Bar staff',
        description: 'Bar Staff needed at restaurant',
        rate: 9,
        createdBy: users[8]
      },{
        title: 'Chef',
        description: 'Chef needed at restaurant',
        rate: 9,
        createdBy: users[9]
      },{
        title: 'Chef',
        description: 'Chef needed at restaurant',
        rate: 9,
        createdBy: users[10]
      },{
        title: 'Chef',
        description: 'Chef needed at restaurant',
        rate: 9,
        createdBy: users[11]
      }]);
  })
  .then((jobs) => console.log(`${jobs.length} jobs created`))
  .catch((err) => console.log(err))
  .finally(() => mongoose.connection.close());
