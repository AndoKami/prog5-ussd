const { prompt } = require('../utils/prompt');

async function displayRetraitMenu() {
  let exit = false;

  while (!exit) {
    console.clear();
    console.log('=== Retrait d\'argent ===');
    console.log('1. Retrait à un agent');
    console.log('2. Retrait via DAB');
    console.log('*. Retour');

    const choice = await prompt('\nVotre choix: ');

    switch (choice) {
      case '1': {
        const agentNumber = await prompt('Numéro de l\'agent : ');
        const amount = await prompt('Montant à retirer : ');
        const password = await prompt('Mot de passe : ');
        console.log(`\n✅ Retrait de ${amount} Ar vers l'agent ${agentNumber} validé.`);
        await waitForBack();
        break;
      }
      case '2': {
        const cardNumber = await prompt('Numéro de carte : ');
        const amount = await prompt('Montant à retirer : ');
        const code = await prompt('Code de la carte : ');
        console.log(`\n✅ Retrait de ${amount} Ar via la carte ${cardNumber} validé.`);
        await waitForBack();
        break;
      }
      case '*':
        exit = true;
        break;
      default:
        console.log('Choix invalide. Réessayez.');
        await waitForBack();
    }
  }
}

async function waitForBack() {
  while (true) {
    const input = await prompt('\nTapez * pour revenir : ');
    if (input === '*') break;
    console.log('Entrée invalide. Tapez * pour revenir.');
  }
}

module.exports = { displayRetraitMenu };
