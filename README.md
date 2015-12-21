# dashboard
UI framework for developing dashboard projects on the web. [https://zcoding.github.io/dashboard](https://zcoding.github.io/dashboard)

## Run examples

### run example for dashboard with jQuery
Build example files:

`npm run build:example`

Run example with simple server:

`npm run example`

### run example for dashboard with React
Build example files:

`npm run build:example-react`

Run example with simple server:

`npm run example-react`

### run example for dashboard with Vue
Build example files:

`npm run build:example-vue`

Run example with simple server:

`npm run example-vue`

## Development

This project is developed with sass and gulp.
You don't have to install sass or ruby because we use node-sass and gulp-sass, but you still need to have gulp installed globally.

+ `npm run dev` or `gulp dev`

## Customize

It's recommended to customize dashboard to build your own ui styles.To do this, you just need to add a theme file in the `src/theme` folder.

Have a look at the `src/theme/theme-light.scss` file and you will know how to build your own theme.
