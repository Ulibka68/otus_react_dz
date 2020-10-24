Курс OTUS по React 2020
25 урок

Пробую SSR с NextJS

https://nextjs.org/learn/basics/create-nextjs-app?utm_source=next-site&utm_medium=nav-cta&utm_campaign=next-website

Create a Next.js app

npx create-next-app nextjs-blog --use-npm --example "https://github.com/vercel/next-learn-starter/tree/master/learn-starter"

create-next-app comes with the following options:

-e, --example [name]|[github-url] - An example to bootstrap the app with. You can use an example name from the Next.js repo or a GitHub URL. The URL can use any branch and/or subdirectory.



npx create-next-app gayrat-nextjs  --example "with-redux-toolkit"
npx create-next-app with-styled-jsx-plugins  --example "with-styled-jsx-plugins"



with-material-ui

with-next-sass

with-redux-code-splitting

with-redux-toolkit

with-stripe-typescript

with-styled-components

with-styled-jsx-plugins

with-typescript-styled-components




*********************
Конифгурация NextJS

Стилизация NextJS
CSS Modules 

vercel/styled-jsx
https://github.com/vercel/styled-jsx

Less and Stylus Support
@zeit/next-less
@zeit/next-stylu


styled-components/.babelrc
.babelrc
{
  "presets": ["next/babel"],
  "plugins": [["styled-components", { "ssr": true }]]
}

with-emotion/
package :
"dependencies": {
    "@emotion/core": "10.0.27",
    "@emotion/styled": "10.0.27",
    "emotion": "10.0.27",
    "emotion-server": "10.0.27",