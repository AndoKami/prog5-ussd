const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let currentPage = 1;
let currentContext = 'main'; 
let mvolaPage = 1;

const menus = {
  main: {
    1: {
      options: {
        '1': 'Mvola',
        '2': 'Rappelle moi',
        '3': 'SOS crédit',
        '4': 'Service YAS',
        '5': 'Promotion',
        '6': 'Produits et divertissement',
        '7': 'Banque et micro-finances',
        '*': 'Page suivante'
      },
      nextPage: 2
    },
    2: {
      options: {
        '8': 'Mon identité',
        '9': 'Configurer mon mobile',
        '**': 'Page précédente'
      },
      prevPage: 1
    }
  },
  mvola: {
    1: {
      options: {
        '1': 'Acheter crédit ou offre YAS',
        '2': 'Transférer argent',
        '3': 'Mvola crédit ou épargne',
        '4': 'Retrait argent',
        '#': 'Page suivante'
      },
      nextPage: 2
    },
    2: {
      options: {
        '5': 'Paiement facture & partenaires',
        '6': 'Mon compte',
        '7': 'Recevoir de l\'argent',
        '8': 'Banque et micro-finances',
        '*': 'Page précédente',
        '**': 'Menu principal'
      },
      prevPage: 1
    }
  }
};

function displayMenu(page) {
  console.clear();
  console.log(`===== ${currentContext === 'main' ? 'Menu Principal' : 'Menu Mvola'} (Page ${page}) =====`);
  const options = menus[currentContext][page].options;
  for (const key in options) {
    console.log(`${key}. ${options[key]}`);
  }

  rl.question('\nFaites un choix: ', (input) => {
    handleChoice(input);
  });
}

function handleChoice(choice) {
  const page = menus[currentContext][currentContext === 'main' ? currentPage : mvolaPage];

  if (currentContext === 'main') {
    if (choice === '*' && page.nextPage) {
      currentPage = page.nextPage;
      displayMenu(currentPage);
    } else if (choice === '**' && page.prevPage) {
      currentPage = page.prevPage;
      displayMenu(currentPage);
    } else if (choice === '1') {
      currentContext = 'mvola';
      mvolaPage = 1;
      displayMenu(mvolaPage);
    } else if (page.options[choice]) {
      console.log(`\nVous avez choisi : ${page.options[choice]}`);
      rl.close();
    } else {
      console.log('\nChoix invalide. Réessayez.');
      setTimeout(() => displayMenu(currentPage), 1000);
    }
  }

  else if (currentContext === 'mvola') {
    if ((choice === '#' || choice === '*') && page.nextPage) {
      mvolaPage = page.nextPage;
      displayMenu(mvolaPage);
    } else if ((choice === '*' || choice === '#') && page.prevPage) {
      mvolaPage = page.prevPage;
      displayMenu(mvolaPage);
    } else if (choice === '**') {
      currentContext = 'main';
      currentPage = 1;
      displayMenu(currentPage);
    } else if (page.options[choice]) {
      console.log(`\nVous avez choisi : ${page.options[choice]}`);
      rl.close();
    } else {
      console.log('\nChoix invalide. Réessayez.');
      setTimeout(() => displayMenu(mvolaPage), 1000);
    }
  }
}

displayMenu(currentPage);