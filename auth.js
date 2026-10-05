function authenticate(username, password) {
  return Boolean(username && password);
}

module.exports = { authenticate };


function hasCredentials(user) {
  return Boolean(user && user.username && user.password);
}

module.exports.hasCredentials = hasCredentials;
