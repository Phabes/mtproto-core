async function PBKDF2(password, salt, iterations) {
  return crypto.pbkdf2Sync(password, salt, iterations, 16, 'sha512');
}

module.exports = PBKDF2;