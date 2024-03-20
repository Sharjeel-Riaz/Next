# CircuitBazaar

CircuitBazaar, meticulously crafted with a blend of modern technologies, serves as an innovative e-commerce platform specializing in electronic gadgets and products. Developed using [Next.js](https://nextjs.org/) with [React](https://react.dev/) for robustness and scalability, CircuitBazaar seamlessly integrates with [Sanity](https://www.sanity.io/) as its backend CMS (Content Management System) and leverages [Stripe](https://stripe.com/) for secure and efficient payment processing.

![Banner](https://github.com/Sharjeel-Riaz/CircuitBazaar/blob/main/assets/banner.png?raw=true)

## Features

- 🛒 Comprehensive Product Catalog
- 💳 Secure Payment Processing Functionality
- 📦 Efficient Order Management
- 🔍 Intuitive Search and Navigation
- 🎨 Clean and Modern UI Design
- 🔒 Data Security and Privacy
- ⚡ Optimized Performance
- 🤝 Responsive Customer Support

## Usage

This section explains on how you can create your own local environment for
[CircuitBazaar](https://github.com/Sharjeel-Riaz/CircuitBazaar).

- First of all, what you need to do is to clone this repository [CircuitBazaar](https://github.com/Sharjeel-Riaz/CircuitBazaar)
- Now open the terminal at the directory where you have the project and run `npm
install` to download all the necessary dependencies.
- Set up a sanity account if you have'nt already and create a new project.
- Follow the [documentation](https://www.sanity.io/docs/sanity-studio) on how to
  setup your project and its backend using sanity. You need to setup `Sanity
Studio`. In order to set this up you must organize your project structure and
  make proper `Schemas`.
- Now there are some specific environment variables that you might need to fill
  in order to run the project properly.
- Create a `.env` file in the root directory of your project to store your
  environment variables.
- Now add the following:

```
NEXT_PUBLIC_SANITY_PROJECT_ID = "In double quotes."
NEXT_PUBLIC_SANITY_DATASET = "In double quotes."
NEXT_PUBLIC_SANITY_TOKEN = Without double quotes
```

- Now you need to setup your [Stripe](https://dashboard.stripe.com/) account in
  order to setup the payment gateway.
- Once made, click on `Test mode` to ensure your web application is in test
  mode. If you want to assign it a prod mode, you need to setup additional
  security measures.
- The next thing you need is to select the `API Keys` tab to get your
  `Publishable key` and `Secret key`.
- Create a file named `.env` in the root directory of the project and add the following:

```
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY = Without double quotes
NEXT_PUBLIC_STRIPE_SECRET_KEY = Without double quotes
```

- Now run `npm run dev` to open the local environment.

- Pro tip: In order to ensure that your application is working; You must ensure
  that the sanity backend is properly created and all the necessary products are
  displaying.

- Feel free to use it or make any necessary modifications `:D`

## Production Environment

- Visit the live environment of CircuitBazaar at: [CircuitBazaar](https://circuit-bazaar.vercel.app/)
