const { prompt } = require('../utils/prompt');

async function displayBanqueMicroFinanceMenu() {
  let exit = false;

  while (!exit) {
    console.clear();
    console.log('=== Banque et Micro-finance ===');
    console.log('1. Ma banque');
    console.log('2. Mon institution de micro-finance');
    console.log('*. Retour');

    const choice = await prompt('\nVotre choix: ');

    switch (choice) {
    case '1':
      await handleMaBanque();
      break;
    case '2':
      await handleMicroFinance();
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

async function handleMaBanque() {
  console.clear();
  const banque = await prompt('Nom de la banque : ');
  const rib = await prompt('RIB : ');
  const mdp = await prompt('Mot de passe MVola : ');
  // Ici, on peut simuler une vérification
  console.log(`\n✅ Connexion à ${banque} réussie avec le RIB ${rib}.`);
  await waitForBack();
}

async function handleMicroFinance() {
  console.clear();
  const inst = await prompt('Nom de votre institution de micro-finance : ');

  let back = false;
  while (!back) {
    console.clear();
    console.log(`=== Micro-finance : ${inst} ===`);
    console.log('1. Consulter solde');
    console.log('2. Demander un prêt');
    console.log('3. Voir dernières transactions');
    console.log('*. Retour');

    const choice = await prompt('\nVotre choix: ');

    switch (choice) {
    case '1':
      console.log('\n💰 Solde micro-finance : 125 000 Ar.');
      await waitForBack();
      break;
    case '2':
      const montant = await prompt('Montant du prêt demandé : ');
      console.log(`\n✅ Demande de prêt de ${montant} Ar enregistrée.`);
      await waitForBack();
      break;
    case '3':
      console.log('\n📄 Dernières transactions micro-finance :');
      console.log('- 10 000 Ar prêt reçu');
      console.log('- 2 000 Ar remboursement');
      await waitForBack();
      break;
    case '*':
      back = true;
      break;
    default:
      console.log('\nChoix invalide. Réessayez.');
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

module.exports = { displayBanqueMicroFinanceMenu };
