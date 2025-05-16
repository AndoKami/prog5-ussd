const { prompt } = require('../utils/prompt.js');

let tempData = {};

/**
 * Sous-menu acheter crédit ou offre YAS.
 */
async function displayCreditOrOfferMenu() {
  console.clear();
  console.log('=== Acheter crédit ou offre YAS ===');
  console.log('1. crédit pour mon numéro');
  console.log('2. crédit pour autre numéro');
  console.log('3. offre pour mon numéro');
  console.log('4. offre pour autre numéro');
  console.log('*. retour');

  const choice = await prompt('\nVotre choix: ');

  switch (choice) {
  case '1':
    await displayCreditMyNumberMenu(false);
    break;
  case '2':
    tempData.recipient = await prompt('Entrez le numéro du destinataire: ');
    await displayCreditMyNumberMenu(true);
    break;
  case '3':
    await displayOfferMenu(false);
    break;
  case '4':
    tempData.recipient = await prompt('Entrez le numéro du destinataire: ');
    await displayOfferMenu(true);
    break;
  case '*':
    return;
  default:
    console.log('\nChoix invalide. Réessayez.');
    await new Promise((r) => setTimeout(r, 1000));
    await displayCreditOrOfferMenu();
  }
}

async function displayCreditMyNumberMenu(isOther) {
  console.clear();
  const who = isOther ? ` pour ${tempData.recipient}` : ' pour mon numéro';
  console.log(`=== Crédit${who} ===`);
  console.log('1. recharger directement');
  console.log('2. code recharge');
  console.log('*. retour');

  const input = await prompt('\nVotre choix: ');

  if (input === '*') {
    await displayCreditOrOfferMenu();
    return;
  }

  if (['1', '2'].includes(input)) {
    console.log(`\n✅ Crédit ${input} sélectionné${who}.`);
    return;
  }

  console.log('\nChoix invalide. Réessayez.');
  await new Promise((r) => setTimeout(r, 1000));
  await displayCreditMyNumberMenu(isOther);
}

async function displayOfferMenu(isOther) {
  console.clear();
  const who = isOther ? ` pour ${tempData.recipient}` : ' pour mon numéro';
  console.log(`=== Offres${who} ===`);
  console.log('1. mora');
  console.log('2. first');
  console.log('3. yellow');
  console.log('4. yas net');
  console.log('*. retour');

  const input = await prompt('\nVotre choix: ');

  if (input === '*') {
    await displayCreditOrOfferMenu();
    return;
  }

  if (['1', '2', '3', '4'].includes(input)) {
    console.log(`\n✅ Offre ${input} sélectionnée${who}.`);
    return;
  }

  console.log('\nChoix invalide. Réessayez.');
  await new Promise((r) => setTimeout(r, 1000));
  await displayOfferMenu(isOther);
}

module.exports = { displayCreditOrOfferMenu };
