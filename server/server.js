import express from 'express';
import passport from 'passport';
import bodyParser from 'body-parser';
import session from 'express-session';
import pino from 'express-pino-logger';
import cors from 'cors';

import './passport';
import authRouter from './authRouter';
import protectedRouter from './protectedRouter';

const app = express();
const port = 3001;

// app.use(cors());
// set extended to true if you'd rather use qs than querystring
app.use(session({
  key: 'connect.sid',
  resave: false,
  saveUninitialized: false,
  secret: 'secret',
  cookie: {
    expires: 600000,
  }
}));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());
app.use(pino());

app.get('/login', (req, res) => {
  res.send(JSON.stringify({ message: 'hi' }));
});


/*
app.post('/login', passport.authenticate('local'), (req, res) => {
  res.send(JSON.stringify(req.user));
});

app.get('/logout', (req, res) => {
  req.logout();
  res.send(JSON.stringify(`Logged Out ${req.sessionID}`));
});
*/
app.use('', authRouter);
app.use('', protectedRouter);

app.listen(port, () => console.log(`Express server listening on port ${port}!`))
