# Linky Core

Carte Home Assistant personnalisée pour compteur Linky : illustration du compteur, puissance apparente, intensité, index HP/HC et coûts énergie. Version 1.2.0.

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
Pour publier une version stable, crée une release `v1.2.0` et joins le fichier `linky.js` comme fichier de release.

Documentation HACS : https://www.hacs.xyz/docs/publish/start/

## Structure attendue sur la branche main

Les fichiers linky.js, hacs.json, README.md et configuration.yaml doivent être directement visibles à la racine du dépôt. Décompresser le paquet avant l’envoi : ne pas déposer uniquement le ZIP ou un dossier contenant ces fichiers. Cette version intègre le compteur holographique et les animations de la proposition visuelle n° 2.

## Version holographique 1.2.0

Compteur illustré avec coque translucide, reflets cyan, cœur vert lumineux,
écran à données réelles, anneaux et halo animés, et 16 particules décoratives.
Les particules sont suspendues à puissance apparente nulle ou indisponible.
La préférence système de réduction des animations est respectée.

### Mise à jour depuis 1.0.0 ou 1.1.0

Remplacer linky.js à la racine du dépôt GitHub, conserver hacs.json et la configuration.
Le fichier JavaScript embarque l’image WebP transparente et tous les styles : aucun
chemin d’image supplémentaire, aucune nouvelle ressource CSS, aucun nouveau capteur.
Les fichiers WebP et CSS joints sont des sources facultatives, non requises par HACS.

Publier si souhaité une release v1.2.0 avec linky.js en pièce jointe.
Puis mettre à jour ou retélécharger Linky Core dans HACS, et recharger entièrement
le tableau de bord. Le pied de carte doit afficher LINKY CORE / 1.2.0.
L’URL de ressource reste /hacsfiles/linky/linky.js avec le paramètre hacstag géré par HACS.

Pour une installation manuelle déjà utilisée, remplacer le JS dans son emplacement
réel et adapter uniquement le paramètre de version de la ressource existante.
Éviter de charger simultanément la version locale et la version HACS.

### Validation

Tests de conversions, valeurs absentes, totaux, tarifs, éditeur, isolation de plusieurs
cartes, contenu embarqué, écran dynamique et état des animations exécutés avec succès.
Placement du texte sur le compteur inspecté à partir de sa composition SVG.
Le rendu de la carte complète et les animations dans Home Assistant restent à confirmer.

Illustration produite avec l’outil ImageGen intégré à partir de la maquette n° 2,
puis encodée en WebP avec conservation de la transparence. Voir PROMPT-IMAGE.txt.
## Flux de la version 1.2.0

Sept courbes SVG indépendantes relient le socle au compteur. Chaque courbe associe
un halo flouté, un filament fin et une impulsion lumineuse ; une particule suit
réellement le trajet de la courbe. Le socle comporte cinq ellipses en perspective.
Le compteur est légèrement réduit et remonté pour laisser les flux visibles.
Les informations restent dans les colonnes gauche et droite.

Les flux sont décoratifs : ils ne représentent pas une mesure de direction ni de
vitesse du courant. Les particules et impulsions disparaissent à puissance nulle
ou indisponible et avec la préférence de réduction des animations.

La composition du compteur et des courbes a été inspectée sur un aperçu statique.
Le rendu complet et le mouvement dans Home Assistant restent à valider.