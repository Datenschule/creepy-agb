# CreepyAgb

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

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

## Deploy

Deployment via [`angular-cli-ghpages`](https://github.com/angular-schule/angular-cli-ghpages), follow the README for instructions.

There is no automated build or deployment setup.

**Edit**: Due to a wrong link being sent around, we need to account for people trying to access the app via the `/select` and `/services` routes directly.
I hacked around that with static html files that just redirect to `/` where the app should load.
While this works, it makes the deploy process a bit more of a hassle. The template file is in `src/services.html`, I copied it over manually to `dist/creepy-agb/services.html`, `dist/creepy-agb/select.html`, `dist/creepy-agb/services/index.html`, `dist/creepy-agb/services/index.html`. That should cover all the cases.

So the steps would be:

- `$ ng build --prod --base-href "https://datenschule.github.io/creepy-agb/"`

- `$ angular-cli-ghpages`

- `$ git checkout gh-pages && git pull`

- copy over all static html

- git commit and push


## Data

The data used in the project was manually collected as part of [Data Expedition](https://datenschule.de/blog/2018/07/DS-data-expedition-datenspaziergang/)
