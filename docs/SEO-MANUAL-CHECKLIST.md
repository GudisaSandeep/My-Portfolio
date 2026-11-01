# Manual launch checklist: Sandeep Gudisa’s portfolio

The code implements the search and answer-engine foundation. Complete the following account and hosting steps after deploying it. Canonical production origin: **https://sandeepgudisa.vercel.app/**.

## 1. Deploy the latest GitHub commit

Deploy the `main` branch of `GudisaSandeep/My-Portfolio` to the existing Vercel project. Set:

```text
NEXT_PUBLIC_SITE_URL=https://sandeepgudisa.vercel.app/
```

Keep `SITE_NOINDEX` unset or `false` in **Production**. Preview builds are automatically set to noindex when Vercel supplies `VERCEL_ENV=preview`. An intentionally private staging environment outside Vercel should set `SITE_NOINDEX=true`.

These settings affect static generation, so redeploy after changing them. GitHub push success alone does not verify that Vercel has built or published the new version.

## 2. Check the public deployment

Open these URLs while signed out of Vercel:

- [Homepage](https://sandeepgudisa.vercel.app/)
- [Detailed biography](https://sandeepgudisa.vercel.app/about)
- [Fixyt founder page](https://sandeepgudisa.vercel.app/projects/fixyt)
- [Robots rules](https://sandeepgudisa.vercel.app/robots.txt)
- [Sitemap](https://sandeepgudisa.vercel.app/sitemap.xml)
- [Social image](https://sandeepgudisa.vercel.app/opengraph-image)

Production pages should be publicly reachable and have one canonical URL each. The sitemap should contain the three content pages. Robots should allow crawling and reference that sitemap. Check that hosting does not add an `X-Robots-Tag: noindex` response header or require deployment authentication.

## 3. Verify Google Search Console ownership

1. Open [Google Search Console](https://search.google.com/search-console/).
2. Add the **URL-prefix** property `https://sandeepgudisa.vercel.app/`. This suits the hosted subdomain; a DNS Domain property requires DNS control of the relevant domain.
3. If using **HTML tag** verification, copy only the value of the tag’s `content` attribute.
4. In Vercel, add a Production environment variable named `GOOGLE_SITE_VERIFICATION` with that value.
5. Redeploy, then finish verification in Search Console.

The code outputs the `google-site-verification` tag only when the variable is populated. An alternative supported ownership method can be used instead; do not add a fake verification value.

## 4. Submit the sitemap and inspect pages

In Search Console, submit:

```text
https://sandeepgudisa.vercel.app/sitemap.xml
```

Use URL Inspection on the homepage, `/about`, and `/projects/fixyt`. Run the live test, inspect the reported canonical and indexing eligibility, and request indexing where appropriate. Submission requests discovery; it does not guarantee indexing, rankings, or a particular completion time.

## 5. Verify Bing Webmaster Tools

Open [Bing Webmaster Tools](https://www.bing.com/webmasters/). Import the verified Search Console property if offered, or use Bing’s own verification process.

If using Bing’s HTML tag, copy its `content` value into the Vercel Production variable `BING_SITE_VERIFICATION`, then redeploy. The application renders this as `msvalidate.01`. Submit the same sitemap and inspect the important pages.

## 6. Validate the live structured data and sharing preview

- Use [Schema.org Validator](https://validator.schema.org/) to inspect the Person, organizations, ProfilePage, and About-page project list.
- Use [Google’s Rich Results Test](https://search.google.com/test/rich-results) to inspect supported Google features such as breadcrumbs. Generic Person or ItemList markup may not produce a Google rich result.
- Confirm that Fixyt and WhiteSea Labs refer to the same Sandeep Gudisa person identifier as their founder.
- Check the site’s sharing preview with the platform where you intend to share it. Cached previews may need refreshing after deployment.

Visible questions and answers are rendered in HTML. The code does not claim FAQ rich-result eligibility for a personal portfolio and does not publish unsupported ratings, audience figures, or award claims in the identity graph.

## 7. Check crawler access and profile consistency

Ensure Vercel firewall or bot-protection settings do not block intended search crawlers. The public robots rules permit them, but robots cannot override hosting restrictions. Search visibility and AI-model training permissions are separate choices; this implementation does not set a training-specific preference.

Keep the name **Sandeep Gudisa**, location **Mumbai**, portfolio URL, and founder roles consistent on LinkedIn, GitHub, Threads, Fixyt, and WhiteSea Labs where you control those profiles. Link to the portfolio naturally from relevant company and product biographies. Confirm historical achievement evidence before publishing stronger recognition claims.

## 8. Monitor actual discovery and useful outcomes

Establish a baseline after launch and review monthly:

- Indexed content pages and crawl/indexing errors.
- Impressions and clicks for Sandeep Gudisa and Gudisa Sandeep.
- Relevant queries connecting the name with Fixyt, WhiteSea Labs, browser automation, and AI engineering.
- Relevant enquiries and visits to project pages.
- Whether search-based AI answers cite the correct pages and describe the roles accurately.

Record the date, query, platform, and source links when reviewing AI answers. Results can vary between sessions. No specific search position, Knowledge Panel, or answer-engine citation is guaranteed.

## Checks available in the repository

```bash
npm run build
npm run check:seo
```

`check:seo` inspects the actual `.next` production output without needing a web server. Run it with the same indexing, canonical URL, and verification environment settings used for the build. It verifies canonical URLs, sharing metadata, index policy, identity relationships, visible section and project references, server-rendered content, sitemap, robots, contact exclusions, and social-image dimensions.
