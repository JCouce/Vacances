const express = require ('express');
const GoogleStrategy = require ('passport-google-oauth20');
const passport = require ('passport');
const cookieSession = require('cookie-session');
const keys = require ('./config/keys');
const mongoose = require ('mongoose');
require ('./models/User');

const User = mongoose.model ('users');

passport.serializeUser ((user, done) => {
  done (null, user.id);
});

passport.deserializeUser ((id, done) => {
  User.findById (id).then (user => {
    done (null, user);
  });
});

mongoose.connect (keys.mongoURI);

const app = express ();

app.use(
    cookieSession({
      maxAge: 30 * 24 * 60 * 60 * 1000,
      keys: [keys.cookieKey]
    })
  );
  app.use(passport.initialize());
  app.use(passport.session());
  
app.get('/', (req,res) => {
    res.send(`hola ${req.user.name} que onda`)
})
app.get('/api/current_user', (req, res) => {
    res.send(req.user)
});

app.get('/api/logout', (req, res) => {
    req.logout();
    res.send(req.user)
});

app.get (
  '/auth/google',
  passport.authenticate ('google', {
    scope: ['profile', 'email'],
  })
);

app.get ('/auth/google/callback', passport.authenticate ('google'));

passport.use (
  new GoogleStrategy (
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
    },
    async (accessToken, refreshToken, profile, done) => {
      User.findOne ({googleId: profile.id}).then (existingUser => {
        if (existingUser) {
          done (null, existingUser);
        } else {
          new User ({
            googleId: profile.id,
            name: profile.name.givenName,
          })
            .save ()
            .then (user => done (null, user));
        }
      });
    }
  )
);

const PORT = process.env.PORT || 5000;
app.listen (PORT, () => {
  console.log (`Server started on ` + PORT);
});
