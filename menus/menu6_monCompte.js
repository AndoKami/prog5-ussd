const { prompt } = require('../utils/prompt');

async function displayMonCompteMenu() {
  let exit = false;

  while (!exit) {
    console.clear();
    console.log('=== Mon Compte ===');
    console.log('1. Consultation du solde');
    console.log('2. Les 3 dernières transactions');
    console.log('3. Recevoir les infos par mail');
    console.log('4. Mon adresse email');
    console.log('*. Retour');

    const choice = await prompt('\nVotre choix: ');

    switch (choice) {
    case '1':
      console.log('\n💰 Votre solde actuel est de 52 750 Ar.');
      await waitForBack();
      break;
    case '2':
      console.log('\n📄 Vos 3 dernières transactions :');
      console.log('- 8 000 Ar vers Liva');
      console.log('+ 15 000 Ar reçu de Tiana');
      console.log('- 3 500 Ar pour offre YAS');
      await waitForBack();
      break;
    case '3':
      console.log('\n📧 Un résumé de votre compte vous sera envoyé par email.');
      await waitForBack();
      break;
    case '4':
      console.log('\n📨 Adresse email : utilisateur@example.com');
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

async function waitForBack() {
  while (true) {
    const input = await prompt('\nTapez * pour revenir : ');
    if (input === '*') break;
    console.log('Entrée invalide. Tapez * pour revenir.');
  }
}

module.exports = { displayMonCompteMenu };
