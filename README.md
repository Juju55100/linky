# Linky Core

Carte Home Assistant personnalisée pour compteur Linky : illustration du compteur, puissance apparente, intensité, index HP/HC et coûts énergie. Version 1.0.0.

## Installation avec HACS

Le dépôt doit être public.

1. Dans HACS, ouvre le menu des dépôts personnalisés.
2. Ajoute `https://github.com/Juju55100/linky`, catégorie Tableau de bord (Dashboard).
3. Recherche Linky Core et télécharge la carte.
4. Vérifie la ressource dans Paramètres > Tableaux de bord > menu ⋮ > Ressources :
   - URL : `/hacsfiles/linky/linky.js`
   - Type : Module JavaScript.
   Si HACS a ajouté un paramètre `hacstag`, conserve-le.
5. Si l’ancienne ressource locale Linky Core est déjà présente, remplace cette entrée par la ressource HACS, sans conserver deux chargements de la même carte. Ne touche pas à Battery Core.
6. Recharge complètement la page puis ajoute une carte Manuelle avec le contenu de `configuration.yaml`.

Un éditeur visuel permet de modifier les 12 capteurs et le titre. Le fichier configuration.yaml contient la configuration de l’installation d’origine ; adapte les entités pour une autre installation.

Le JavaScript contient déjà les styles et l’illustration. Aucun autre fichier ni extension n’est nécessaire au rendu.

## Données

- Puissance apparente en VA, intensité en A, index cumulés en kWh.
- Conversion des unités kVA, mA, Wh et MWh lorsque les capteurs les déclarent.
- Les coûts du jour et du mois additionnent leurs capteurs HP et HC. Aucun abonnement ou tarif supplémentaire n’est calculé.
- Un état absent ou incompatible affiche « — ». Un vrai zéro reste affiché.
- Le code Horaire HP/HC reste celui du capteur, sans interprétation du code A.
- Les animations sont décoratives et ne reproduisent pas le voyant métrologique.
- Le rendu réel dans Home Assistant reste à confirmer ; la logique a été testée avec des états simulés.

## Publication

Les fichiers de ce paquet se placent à la racine du dépôt (pas le ZIP lui-même).
Ajoute une description au dépôt et, si souhaité, les sujets `home-assistant`, `hacs`, `linky`, `lovelace`.
Une release n’est pas obligatoire pour commencer : HACS peut télécharger la branche par défaut.
Pour publier une version stable, crée une release `v1.0.0` et joins le fichier `linky.js` comme fichier de release.

Documentation HACS : https://www.hacs.xyz/docs/publish/start/

## Structure attendue sur la branche main

Les fichiers linky.js, hacs.json, README.md et configuration.yaml doivent être directement visibles à la racine du dépôt. Décompresser le paquet avant l’envoi : ne pas déposer uniquement le ZIP ou un dossier contenant ces fichiers. Ce paquet corrige uniquement la présentation du dépôt ; le code de la carte reste en version 1.0.0.
