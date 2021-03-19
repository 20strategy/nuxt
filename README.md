# Shopify Storefront using NUXT JS/ SSR using Vercel
[puppyous.com](https://dog-nuxt.vercel.app)
> It is hosted on Vercel for SSR.
> CSS Framework: Bulma 
> We are open to any suggestions or comments.

## Fully Functional

> Nuxt js front-end integration for shopify store

## Build Setup
```
# install dependencies
$ npm run install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## Configuration

Simply put these variables in a .env file (root file)

```dotenv
DOMAIN=<your-store.myshopify.com/>
STOREFRONT_ACCESS_TOKEN=<SHOPIFY STOREFRONT API ACCESS TOKEN>
API_URL=https://<DOMAIN>/api/2020-01/graphql
```
