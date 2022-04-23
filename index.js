import express from "express";
import chalk from "chalk";
import cors from "cors";
const app = express();
app.use(express.json())
app.use(cors())

let logins = [];
let tweets = [];
let user = {};

app.listen(5000, () => {
  console.log(chalk.bold.green('App is Working!!!'))
})

app.post('/sign-up', (req, res) => {
  const { username, avatar } = req.body;
  user = { username, avatar }
  logins.push({ username, avatar });
  res.send('ok!');
})

app.get('/tweets', (req, res) => {
  res.send(tweets);
})

app.post('/tweets', (req, res) => {
  const { username, tweet } = req.body;
  const { avatar } = user;
  tweets.push({ avatar, username, tweet });
  res.send('ok!');
})
