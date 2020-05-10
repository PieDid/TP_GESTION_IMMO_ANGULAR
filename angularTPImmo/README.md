# AngularTPImmo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## Ajout manuel 

## Etape 1 : créer un dossier qui va contenir la partie angular du projet (pour pierrick, il l'a appelé TP_GESTION_IMMO_ANGULAR)

dans la console d'angular, ce placer dans le dossier (en utilisant la commande 'cd')
et créer un projet angular : 

            ng new angularTPImmo

    > Routing ? y
    > Selectionner CSS

A ce stade, le projet 'angularTPImmo' devrait être crée. 

## Etape 2 : Ajout de Bootstarp et JQuery.

Se placer dans le projet en tapant dans la console 'cd angularTPImmo'

Importer bootstrap et Jquery avec la commande :

            npm install bootstrap@3 jquery --save

Normalement, le dossier node_modules devrait alors contenir les dossiers 'bootstrap' et 'jquery'

Aller dans le fichier 'angular.json', et ajouter les scripts et les styles (ligne 26) : 

            "styles": [
              "src/styles.css",
              "node_modules/bootstrap/dist/css/bootstrap.min.css"
            ],
            "scripts": [
              "node_modules/bootstrap/dist/js/bootstrap.min.js",
              "node_modules/jquery/dist/jquery.min.js"
            ]

Pour tester, aller dans app.componant.html, et remplacer tout ce qui existe par : 

        <h1>Test bootstrap</h1>

        <button class="btn btn-success">Click me !</button> ||
        <button class="btn btn-info">Click me !</button> ||
        <button class="btn btn-danger disabled">Click me !</button> 

Lancer angular avec : 

        ng s --o

Le navigateur devrait afficher le titre 'Test bootstrap' et trois boutons (vert, bleu-vert, rouge) , le bouton rouge ne pouvant aps etre cliqué. 



## Etape 3 : Import de GitHub

se placer avec git bash dans le dossier contenant angularTPImmo (pour pierrick : TP_GESTION_IMMO_ANGULAR), tapper les lignes : 

        git init
        git remote add origin https://github.com/PieDid/TP_GESTION_IMMO_ANGULAR.git 

(si l'opération échoue, taper 'git remote rm origin' qui va supprimer les 'origin' existants, et recommencer 
'git remote add origin https://github.com/PieDid/TP_GESTION_IMMO_ANGULAR.git ")

puis effectuer un :

        git pull origin master

Les modifications devrait être importées. 






