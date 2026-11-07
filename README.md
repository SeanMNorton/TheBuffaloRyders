[![Netlify Status](https://api.netlify.com/api/v1/badges/73b2495a-529b-49aa-abbf-6a7db3757e3e/deploy-status)](https://app.netlify.com/sites/thebuffaloryders/deploys)

[Currently Deployed Here](https://thebuffaloryders.netlify.com/#/)

# buffaloryders-vue
This is a website for the band, The Buffalo Ryders.


# Technologies / Ideas Used:
* [Vue 3](https://vuejs.org/), [Vue Router 4](https://router.vuejs.org/), built with [Vite](https://vite.dev/)
* ['Epic Spinners'](https://madewithvuejs.com/epic-spinners)
* [Fluid Typography](https://css-tricks.com/snippets/css/fluid-typography/)
* [GraphCMS](https://graphcms.com/)
* [Vue Apollo Composable](https://v4.apollo.vuejs.org/) with Apollo Client 3
* [Unhead](https://unhead.unjs.io/) for page meta tags


# Development
```
npm install
npm run dev      # local dev server
npm run build    # production build into dist/
npm run lint
```
Node 22 (see `.nvmrc`). The Google Maps key is read from `VUE_APP_GOOGLE_MAPS_API_KEY` (a `VITE_` prefix also works).
