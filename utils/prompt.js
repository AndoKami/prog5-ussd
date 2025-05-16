const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/**
 * Pose une question à l'utilisateur et retourne la réponse en Promise.
 * @param {string} question
 * @returns {Promise<string>}
 */
function prompt(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer.trim());
    });
  });
}

function close() {
  rl.close();
}

module.exports = { prompt, close };
