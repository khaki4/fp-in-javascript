// Partial Application

const fetch = require('node-fetch');

const getFromAPI = baseURL => endpoint => cb =>
  fetch(`${baseURL}${endpoint}`)
    .then(res => res.json())
    .then(data => cb(data))
    .catch(err => {
      console.log(err.message);
    });

const getGitbub = getFromAPI(
  'https://api.github.com'
);

const getGitbuhUsers = getGitbub('/users');
const getGithubRepos = getGitbub('/repositories');

getGitbuhUsers(data => {
  console.log(data.map(user => user.login));
});

getGitbuhUsers(data => {
  console.log(data.map(user => user.avatar_url));
})
