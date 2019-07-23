# Hollidays-request

This is a simple project to manage hollidays requests from a team, and to be aproved / denied by an administrator.
In the future steps there should be alerts and analytics that allows the administrators to expand the knowledge of their team.

## Getting Started

Hello fella developer, this is a simple project on how to manage vacations for a small team. Hope you enjoy!

Happy coding!

### Prerequisites

You will need to have installed on your computer the following packages:
    - Node LTS
    - NPM
    - Git
    - Create-react-app


### Installing

A step by step series of examples that tell you how to get a development env running

Download the project.

```
git clone https://github.com/JCouce/Vacances.git
```

Create a google application.

```
go to https://console.developers.google.com and create a new app!
```

Activate the Google+ API and get a set of keys (client, secret)

![activate api button](https://i.imgur.com/7Zg5Hx4.png)

Instanciate the keys in server/config/dev.js to fulfill all the key use on the mongo, google..

```
    - googleClientID: '<YOUR CLIENTID>',
    - googleClientSecret: '<YOUR CLIENTSECRET>'
    - mongoURI: '<YOUR MONGO URI>'
    - cookieKey: '<A STRING YOU USE TO ENCRYPT THE COOKIE>'
...You can find a template of the keys in the file server/config/prod (just replace the values for yours)...

```
Read the server/package.json scripts section 

```
🔥🔥🔥 -> 📕📗📘📙 <- 🔥🔥🔥
```
Initiate the server and the client using the "NPM RUN DEV" script

```
npm run dev

```

## Expected database model

![Expected database model](https://lh3.googleusercontent.com/-_lRCArP6Mdk/XTHND1ZPfII/AAAAAAAAA8c/hc1ygZ-WLbYK7zf7GYZVui3HEjrUJSz8QCK8BGAs/s0/Captura%2Bde%2Bpantalla%2B2019-07-19%2Ba%2Blas%2B16.00.21.png)

## Running the tests

No test defined yet :(

## Deployment

This project is prepared to be deployed on a Heroku enviroment, heroku postbuild script is ready, just be sure to initiate
the create-react-app in a folder server/client

## Built With

* [React](https://reactjs.org/) - The web framework used
* [Webpack](https://webpack.js.org/) - Dependency Management
* [Express](https://expressjs.com/) - Used to generate the server
* [PassportJS](http://www.passportjs.org/) - Used to handle the auth process
* [Concurrently](https://www.npmjs.com/package/concurrently) - Used to develop in just one terminal
* [MongoDB](https://www.mongodb.com/) - Non relational DB
* [Mongoose](https://mongoosejs.com/) - Used to manage the database model

## Authors

* **Javier** - *Everything work xD* - [Jcouce](https://github.com/JCouce)
* **Juan** - *A commit per day!* - [Juan](https://github.com/JCouce)

See also the list of [contributors](https://github.com/jcouce/vacances/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Never surrender!
* Inspiration Stephen Grider
* Honorable mentions to Cheto, Bobby and my parents for give me birth!