const { prompt } = require('../utils/prompt.js');
const menu1 = require('./menu1_acheterCredit.js');
const menu2 = require('./menu2_transfererArgent.js');
const menu3 = require('./menu3_creditEpargne.js');
const menu4 = require('./menu4_retrait.js');
const menu5 = require('./menu5_facture.js');
const menu6 = require('./menu6_monCompte.js');
const menu7 = require('./menu7_recevoirArgent.js');
const menu8 = require('./menu8_banqueMicroFinances.js');

const mvolaMenu = {
  1: {
    title: '===== MVOLA =====',
    options: {
      '1': 'acheter credit ou offre yas',
      '2': 'transferer argent',
      '3': 'mvola credit ou epargne',
      '4': 'retrait argent',
      '#': 'page suivante',
    },
    nextPage: 2,
  },
  2: {
    title: '===== MVOLA =====',
    options: {
      '5': 'paiement facture & partenaires',
      '6': 'mon compte',
      '7': 'recevoir de l\'argent',
      '8': 'banque et micro-finances',
      '*': 'page précédente',
      '**': 'menu principal',
    },
    prevPage: 1,
  },
};

/**
 * Affiche le menu principal et gère la navigation.
 * @param {number} currentPage
 * @returns {Promise<void>}
 */
async function displayMenu(currentPage = 1) {
  console.clear();
  const menu = mvolaMenu[currentPage];
  console.log(menu.title);
  Object.entries(menu.options).forEach(([key, label]) => {
    console.log(`${key}. ${label}`);
  });

  const input = await prompt('\nFaites un choix: ');

  if (input === '#' && menu.nextPage) {
    await displayMenu(menu.nextPage);
  } else if (input === '*' && menu.prevPage) {
    await displayMenu(menu.prevPage);
  } else if (input === '**') {
    console.log('\nRetour au menu principal (déjà ici).');
    await displayMenu(1);
  } else if (input === '1') {
    await menu1.displayCreditOrOfferMenu();
    await displayMenu(currentPage);
  } else if (input === '2') {
    await menu2.displayTransferMenu();
    await displayMenu(currentPage);
  } else if (input === '3') {
    await menu3.displayCreditMenu();
    await displayMenu(currentPage);
  } else if (input === '4') {
    await menu4.displayRetraitMenu();
    await displayMenu(currentPage);
  } else if (input === '5') {
    await menu5.displayFactureMenu();
    await displayMenu(currentPage);
  } else if (input === '6') {
    await menu6.displayMonCompteMenu();
    await displayMenu(currentPage);
  } else if (input === '7') {
    await menu7.displayRecevoirArgentMenu();
    await displayMenu(currentPage);
  } else if (input === '8') {
    await menu8.displayBanqueMicroFinanceMenu();
    await displayMenu(currentPage);
  } else if (menu.options[input]) {
    console.log(`\nVous avez choisi : ${menu.options[input]}`);
  } else {
    console.log('\nChoix invalide. Réessayez.');
  }
}

module.exports = { displayMenu };
