# 👺 Next.js Goblincore Stack

![GitHub](https://img.shields.io/github/license/michaelhelvey/nextjs-goblincore-stack)
![Tests](https://github.com/michaelhelvey/nextjs-goblincore-stack/actions/workflows/test.yml/badge.svg)
<a href="https://twitter.com/_michaelhelvey"><img src="https://img.shields.io/badge/created%20by-%40__michaelhelvey-blue" alt="Created by Michael Helvey"></img></a>

This is a very opinionated [Next.js](https://nextjs.org/) 13 starter project for quickly bootstrapping new full-stack JS projects that use Next.js 13+. While it's very much based around my own personal opinions on how I like to do things, it's designed to be easy to read, understand, and modify.

**What's in the stack:**

-   [TailwindCSS](https://tailwindcss.com/)
-   [Vitest](https://vitest.dev/)
-   [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
-   [Playwright](https://playwright.dev/)
-   [Prettier](https://prettier.io/)
-   [Eslint](https://typescript-eslint.io/)
-   [Prisma](https://www.prisma.io/)
-   [NextAuth.js](https://next-auth.js.org/)
-   [Radix UI](https://www.radix-ui.com/)
-   [React-Hook-Form](https://react-hook-form.com/)
-   [Zod](https://zod.dev/)
-   [Github Actions](https://github.com/features/actions)
-   [PNPM](https://pnpm.io)

The inspiration for this project comes from [Remix stacks](https://remix.run/docs/en/v1/pages/stacks), an opinionated set of batteries-included starter templates for full stack JS development with a framework, all named after music genres. The band that this template's name is inspired by is [Nekrogoblikon](https://en.wikipedia.org/wiki/Nekrogoblikon).

## Getting Started

1.  Set up the local database

```shell
pnpm db:setup
```

2.  Run the dev server

```shell
pnpm dev
```

That's it, you're all set up to develop locally 🎉. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

To learn more about Next.js, take a look at the [beta documentation](https://beta.nextjs.org/docs), describing what's new in Next 13, along with the [stable documentation](https://nextjs.org/docs) for a broader overview of the framework.

## Credits

-   I'd be amiss if I didn't point to [this
    project](https://github.com/shadcn/taxonomy) as being insanely useful as I got
    back into Next.js after the 13 release. The last time I _really_ dived deep with
    Next was about two years before I made this template, so I had some catching up
    to do!
