Live at https://taxigoo.netlify.app

This project is a comprehensive ride booking application built with Next.js, React, Tailwind CSS, Mapbox API, and Stripe for payments. The app is designed to offer users a seamless experience for booking rides from one location to another, with various user-friendly features enhancing the overall process.

One of the standout features of this app is its auto-suggest functionality for addresses. As users type in the source and destination fields, the app provides relevant address suggestions, making it easier to input accurate locations. Once the addresses are entered, users can select from a variety of available cars to suit their needs.

To enhance the user experience, the app integrates Mapbox for displaying maps and routing information. The map not only marks the source and destination points but also shows the route between them. Additionally, it displays the distance and estimated time required to reach the destination, giving users a clear idea of their journey.

Payment processing is seamlessly handled by Stripe. Upon clicking the book button, users are redirected to a secure payment page. The book button becomes active only when a car is selected and the trip amount is calculated, ensuring a smooth and error-free booking process.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
