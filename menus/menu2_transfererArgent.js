const { prompt } = require('../utils/prompt.js');

async function waitForBack() {
  while (true) {
    const input = await prompt('Tapez * pour revenir : ');
    if (input === '*') break;
    console.log('Entrée invalide. Veuillez taper * pour revenir.');
  }
}

async function displayTransferMenu() {
  let exit = false;

  while (!exit) {
    console.clear();
    console.log('=== Transférer de l\'argent ===');
    console.log('1. Entrer un numéro');
    console.log('0. Sans numéro');
    console.log('5. MVola Épargne');
    console.log('6. Rembourser une avance');
    console.log('9. Répertoire MVola');
    console.log('*. retour');

    const input = await prompt('\nVotre choix: ');

    switch (input) {
    case '1': {
      const num = await prompt('Numéro du destinataire: ');
      console.log(`\n✅ Vous avez saisi : ${num}`);
      await waitForBack();
      break;
    }
    case '0':
      console.log('\n✅ Aucun numéro entré.');
      await waitForBack();
      break;
    case '5':
      await displayEpargneMenu();
      break;
    case '6': {
      const amount = await prompt('Montant à rembourser: ');
      console.log(`\nMerci pour le remboursement de ${amount} Ar !`);
      await waitForBack();
      break;
    }
    case '9':
      console.log('\n📒 Répertoire MVola :');
      ['Ando', 'Heritiana', 'Fanja', 'Tojo', 'Lova'].forEach((name, i) => {
        console.log(`${i + 1}. ${name}`);
      });
      await waitForBack();
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

async function displayEpargneMenu() {
  let exit = false;

  while (!exit) {
    console.clear();
    console.log('=== MVola Épargne ===');
    console.log('1. Transfert vers MVola Épargne');
    console.log('2. Transfert vers compte MVola');
    console.log('3. Consultation du solde');
    console.log('4. Simulateur d\'épargne');
    console.log('5. 3 dernières transactions');
    console.log('*. retour');

    const input = await prompt('\nVotre choix: ');

    switch (input) {
    case '1':
    case '2': {
      await prompt('Numéro destinataire: ');
      await prompt('Mot de passe : ');
      console.log('\n✅ Transfert effectué avec succès.');
      await waitForBack();
      break;
    }
    case '3':
      console.log('\n💰 Solde épargne : 45 000 Ar');
      await waitForBack();
      break;
    case '4': {
      const amount = await prompt('Montant initial: ');
      const months = await prompt('Durée en mois: ');
      const interest = parseFloat(amount) * (1 + 0.03) ** parseInt(months, 10);
      console.log(`\n📈 Montant estimé : ${interest.toFixed(2)} Ar`);
      await waitForBack();
      break;
    }
    case '5':
      console.log('\n📄 3 dernières transactions :');
      console.log('1. -5 000 Ar vers Tojo');
      console.log('2. +12 000 Ar reçu de Lova');
      console.log('3. -3 500 Ar vers Airtel');
      await waitForBack();
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

module.exports = { displayTransferMenu, displayEpargneMenu };
