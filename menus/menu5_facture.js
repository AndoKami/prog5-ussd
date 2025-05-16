const { prompt } = require('../utils/prompt');

async function displayFactureMenu() {
  let exit = false;

  while (!exit) {
    console.clear();
    console.log('=== Paiement facture & partenaires ===');
    console.log('1. Jirama');
    console.log('2. Assurance');
    console.log('3. Canal+');
    console.log('*. Retour');

    const choice = await prompt('\nVotre choix: ');

    switch (choice) {
    case '1':
      await handleJirama();
      break;
    case '2':
      await handleAssurance();
      break;
    case '3':
      await handleCanalPlus();
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

async function handleJirama() {
  const nom = await prompt('Nom du client : ');
  const id = await prompt('ID Jirama : ');
  const montant = await prompt('Montant : ');
  const confirm = await prompt(`Confirmer le paiement de ${montant} Ar pour ${nom} (y/n): `);
  if (confirm.toLowerCase() === 'y') {
    console.log('\n✅ Paiement Jirama validé.');
  } else {
    console.log('\n❌ Paiement annulé.');
  }
  await waitForBack();
}

async function handleAssurance() {
  const nom = await prompt('Nom de l\'assurance : ');
  const id = await prompt('ID assurance : ');
  const montant = await prompt('Montant : ');
  const confirm = await prompt(`Confirmer le paiement de ${montant} Ar pour ${nom} (y/n): `);
  if (confirm.toLowerCase() === 'y') {
    console.log('\n✅ Paiement assurance validé.');
  } else {
    console.log('\n❌ Paiement annulé.');
  }
  await waitForBack();
}

async function handleCanalPlus() {
  const nom = await prompt('Nom du client : ');
  const numCarte = await prompt('Numéro de carte Canal+ : ');
  const montant = await prompt('Montant : ');
  const confirm = await prompt(`Confirmer le paiement de ${montant} Ar pour ${nom} (y/n): `);
  if (confirm.toLowerCase() === 'y') {
    console.log('\n✅ Paiement Canal+ validé.');
  } else {
    console.log('\n❌ Paiement annulé.');
  }
  await waitForBack();
}

async function waitForBack() {
  while (true) {
    const input = await prompt('\nTapez * pour revenir : ');
    if (input === '*') break;
    console.log('Entrée invalide. Tapez * pour revenir.');
  }
}

module.exports = { displayFactureMenu };
