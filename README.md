# SIMPLE TIMER

This web aapplication based on the [live-reload-vanilla-website-template](https://github.com/shpp/live-reload-vanilla-website-template). This allows you t o create the simple timer, without knowledge of the Javascript, sass and HTML.<br>
Starter template to build a website without a front-end framework but making use of Webpack to support writing modern JavaScript (ES6+), including ES Modules and Sass.
Here also used the library [moment](https://momentjs.com/) and its plugin [moment-timer](https://github.com/SeverinDK/moment-timer) for work with data and time.
If you need to change the tamplate, there are installed husky and ESlinter, that will be check your commits in the main.js. And if there are any errors in the file, you have been informed and
your commit will be not accepted

## Features

- Live reload in development
- Webpack
- Sass compilation (and minification/autoprefixing in production)
- ES6+ transpilation (and minification/uglyfication in production)
- ES Modules
- Husky
- ESLint
- Moment library and its plugin the moment-timer

## Usage

- Install dependencies

```
npm i
```

- Run development server

```
npm run dev
```

Will open your default browser to http://localhost:8080/public

Webpack will watch for changes in the `./src` directory and output the bundled assets to `./public/assets`. In parallel, the development server will watch for changes in the `./public` directory and live reload the browser.

- Build production bundles

```
npm run build
```

Will compile, minify and autoprefix Sass to CSS. Will Minify and uglify JavaScript and output the bundled assets to `./public/assets`.

After building for production you can take the `./public` directory and deploy it.

## Tutorial

Visit my [blog entry](https://esausilva.com/2018/09/17/build-a-website-with-modern-tooling-and-no-frameworks/) where I go step-by-step on how to build this template from scratch.

## Giving Back

If you would like to support my work and the time I put into making tutorials, consider getting me a coffee by clicking on the image below. I would really appreciate it!

[![Buy Me A Coffee](https://www.buymeacoffee.com/assets/img/custom_images/black_img.png)](https://www.buymeacoffee.com/esausilva)

-Esau Silva
