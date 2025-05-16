const { displayMenu } = require('./menus/mainMenu.js');
const { close } = require('./utils/prompt.js');

async function main() {
  await displayMenu();
  close();
}

main();
