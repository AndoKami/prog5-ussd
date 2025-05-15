# prog-5-ussd

## Objectif du projet

Ce projet vise à développer une application USSD avec un code propre et maintenable en adoptant les bonnes pratiques de développement suivantes :

- Convention de nommage cohérente
- Linting automatique du code
- Intégration continue (CI) via GitHub Actions

---

## Convention de nommage

Pour assurer la cohérence et la lisibilité du code, nous avons adopté les conventions suivantes pour le projet JavaScript/Node.js :

| Élément        | Convention     | Exemple                        |
|----------------|----------------|--------------------------------|
| Variables      | `camelCase`    | `currentPage`, `menuOptions`  |
| Fonctions      | `camelCase`    | `handleChoice()`              |


---

## Linting

Le linting est la vérification automatique du code source pour détecter des erreurs de style, de syntaxe ou des mauvaises pratiques.

### Outil utilisé

- **ESLint** : linter JavaScript configurable, utilisé avec la configuration flat config moderne (`eslint.config.mjs`).

### Règles principales appliquées

- Utilisation obligatoire des points-virgules (`semi`)
- Utilisation de quotes simples (`quotes`)
- Indentation à 2 espaces (`indent`)
- Avertissements sur les variables non utilisées (`no-unused-vars`)
- Autorisation des `console.log` (règle désactivée)

### Comment lancer le linter localement

Dans le terminal, à la racine du projet, exécuter :

```bash
npx eslint .
