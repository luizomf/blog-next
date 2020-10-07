O next é um framework baseado em React para front-end (web).
Resolve problemas de performance e SEO.

Next.js: The React Framework
- SERVER SIDE RENDER (SSR) E STATIC SITE GENERATOR (SSG)
- An intuitive page-based routing system (with support for dynamic routes)
- Pre-rendering, both SERVER SIDE RENDER (SSR) and STATIC SITE GENERATOR (SSG) are supported on a per-page basis
- Automatic code splitting for faster page loads
- Client-side routing with optimized pre-fetching
- Built-in CSS and Sass support, and support for any CSS-in-JS library
- Development environment with Fast Refresh support
- API routes to build API endpoints with Serverless Functions
- Fully extendable

To start the project: `npx create-next-app .`

## Routes
Routes are created using an integrated file system routing

All routes are in the **pages** or **src/pages** folder.

For example:
- pages/index.js is associated with the / route.
- pages/posts/first-post.js is associated with the /posts/first-post route.

The component can have any name, but you must export it as a default export.

To apply things throughout the whole app, use the file **src/pages/_app.js**
To create a dynamic route use brackets /pages/route/[param].js. Access:
  ```javascript
  import { useRouter } from 'next/router'
  console.log(router.query)
  { param: routeValue }
  ```

Add an _ at the beginning of the file name to ignore that route. For example
_component.tsx

## Navigation

Use the `Link` component to navigate between pages in Next.js.

```jsx
import Link from 'next/link'

Learn <Link href="https://nextjs.org"><a className="class">Next.js!</a></Link>
```

## Metadata and static assets
Next.js can serve static files, like images, under the top-level **public** directory.

```jsx
<img src="/vercel.svg" alt="" />
```

To add metatags inside <head> use the **Head** component in **next/head**

```jsx
<Head>
  <title>Create Next App</title>
  <link rel="icon" href="/favicon.ico" />
  <meta charSet="UTF-8" />
</Head>
```

To edit things in the <html> tag, use a file called **_document** in pages. The
document and **_app** files apply settings for all pages.

## Pre-rendering and hydration (SSG and SSR)

Next.js has two forms of pre-rendering: Static Generation (SSG) and Server-side Rendering (SSR). The difference is in when it generates the HTML for a page.

- Static Generation is the pre-rendering method that generates the HTML at build time. The pre-rendered HTML is then reused on each request.
- Server-side Rendering is the pre-rendering method that generates the HTML on each request.

Next supports client side fetching to as we are used to do in react.

## Static Generation with Data using `getStaticProps`

When you export a page component, you can also export an async function called getStaticProps. If you do this, then:

- `getStaticProps` runs at build time in production, and…
- Inside the function, you can fetch external data and send it as props to the page.

```tsx
export default function Home(props) { ... }

export async function getStaticProps() {
  // Get external data from the file system, API, DB, etc.
  const data = ...

  // The value of the `props` key will be
  //  passed to the `Home` component
  return {
    props: ...
  }
}
```

To use Server-side Rendering, you need to export getServerSideProps instead of getStaticProps from your page.

```tsx
export async function getServerSideProps(context) {
  return {
    props: {
      // props for your component
    }
  }
}
```
## Dynamic Routes

If you need dynamic routing, you can create files with brackets [name].tsx.
For example, you can have a route for products/[slug].tsx.

To access the param [slug] inside your component, you can use "useRouter" from
"next/router".

# Deploy Strapi
