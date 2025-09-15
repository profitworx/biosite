This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

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

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## SEO, Robots, and Sitemap

- Set `NEXT_PUBLIC_SITE_URL` in your environment to your production URL (for example, `https://bio.johndeacon.co.za`). This is used to build absolute canonicals, robots sitemap URL, and OpenGraph/Twitter image URLs.
- Canonical tags are defined per page using the Next.js Metadata API. See the `export const metadata` at the top of each `src/app/*/page.tsx`.
- A dynamic robots.txt is served from `src/app/robots.ts` and allows all crawlers. It also points to the sitemap.
- A dynamic sitemap is served from `src/app/sitemap.ts` and includes: `/`, `/cam`, `/dtlm`, `/insights`, `/tools`, `/xematix`.

### Google Search Console

1. Deploy the site to production and ensure `NEXT_PUBLIC_SITE_URL` is set.
2. Verify your domain in Google Search Console.
3. Add the sitemap URL: `${NEXT_PUBLIC_SITE_URL}/sitemap.xml`.
4. Confirm that `robots.txt` at `${NEXT_PUBLIC_SITE_URL}/robots.txt` is accessible and lists the sitemap.

### Notes

- Open Graph and Twitter card metadata are configured globally in `src/app/layout.tsx`. Update titles/descriptions if needed.
- If you add new top-level routes, update `src/app/sitemap.ts` with the new paths.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
