const { prompt } = require('../utils/prompt');

async function displayCreditMenu() {
  let exit = false;

  while (!exit) {
    console.clear();
    console.log('=== MVola Crédit ou Épargne ===');
    console.log('1. Dépôt MVola Épargne');
    console.log('2. Emprunt MVola Crédit');
    console.log('*. Retour');

    const choice = await prompt('\nVotre choix: ');

    switch (choice) {
    case '1': {
      const amount = await prompt('Montant à déposer : ');
      const confirm = await prompt(`Confirmer dépôt de ${amount} Ar ? (o/n): `);
      if (confirm.toLowerCase() === 'o') {
        console.log(`✅ ${amount} Ar déposés avec succès sur MVola Épargne.`);
      } else {
        console.log('❌ Dépôt annulé.');
      }
      await waitForBack();
      break;
    }
    case '2': {
      const amount = await prompt('Montant à emprunter : ');
      const due = parseFloat(amount) * 1.05;
      console.log(`\n📅 Échéance : Vous devrez rembourser ${due.toFixed(2)} Ar dans 30 jours.`);
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

module.exports = { displayCreditMenu };
