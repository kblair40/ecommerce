# E-Commerce App

<hr />

A minimal, fully-responsive e-commerce demo app that consumes the [Fake Store API](https://fakestoreapi.com/) for mock products.

The site is fully functional with the exception of handling payments, as these products do not actually exist. You can create an account, change your password, and login with your account information.

See the live app [HERE](https://ecommerce-kb.netlify.app/)

## TODOs

I undoubtedly know more now than when I began this app, so I plan to work on and add the following features:

1. SSR for initial home page (at least) image loading, likely using NextJS
2. Ability for users to rate products and save products to a wishlist, along with GraphQL queries for database requests
3. Ability for users to checkout with a customized Stripe checkout form
4. Implement some 'advanced' React tools to improve code, such as propTypes and HOCs
5. Basic tests using Jest

The primary goal of this app was and still is to put what I've learned into practice.

## Quick Demos

### Full Size (>960px)

![GIF demo on full size screen](./public/gifs/fullSize.gif)

### Mobile (<960px)

**Note:** This GIF was taken with a screen width of roughly 500px. The site will function the exact same on screens between 300px and 960px wide.

![GIF demo on mobile size screen](./public/gifs/mobile.gif)

## Installation

If you would prefer to play around with the code base instead of or in addition to viewing the live app, you may clone it into a new repo with the command below...
`git clone https://github.com/kblair40/ecommerce.git`

Run `npm install` in the directory you cloned the repo to, then `npm start` to run the app using your computer as the server.
