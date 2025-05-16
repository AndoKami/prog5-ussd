const { prompt } = require('../utils/prompt');

async function displayRecevoirArgentMenu() {
  let exit = false;

  while (!exit) {
    console.clear();
    console.log('=== Recevoir de l\'argent ===');
    console.log('1. MVola Épargne');
    console.log('2. MVola Avance');
    console.log('3. Western Union');
    console.log('*. Retour');

    const choice = await prompt('\nVotre choix: ');

    switch (choice) {
    case '1':
      await processReception('MVola Épargne');
      break;
    case '2':
      await processReception('MVola Avance');
      break;
    case '3':
      await processReception('Western Union');
      break;
    case '*':
      exit = true;
      break;
    default:
      console.log('\nChoix invalide. Réessayez.');
      await waitForBack();
    }
  }
}

async function processReception(type) {
  console.clear();
  console.log(`=== ${type} ===`);

  const accept = await prompt('Acceptez-vous les termes d\'utilisation ? (y/n): ');
  if (accept.toLowerCase() !== 'y') {
    console.log('\n❌ Vous devez accepter les termes pour continuer.');
    await waitForBack();
    return;
  }

  const transactionId = await prompt('Numéro de transaction : ');
  console.log(`\n✅ Réception via ${type} confirmée pour la transaction ${transactionId}.`);
  await waitForBack();
}

async function waitForBack() {
  while (true) {
    const input = await prompt('\nTapez * pour revenir : ');
    if (input === '*') break;
    console.log('Entrée invalide. Tapez * pour revenir.');
  }
}

module.exports = { displayRecevoirArgentMenu };
