# Portfolio SEO and AEO implementation

## Confirmed identity

- **Name:** Sandeep Gudisa; alternate professional form: Gudisa Sandeep.
- **Role:** AI engineer; founder of Fixyt; co-founder of WhiteSea Labs; Software Development Engineer at Vector.
- **Location:** Mumbai, India.
- **Canonical origin:** https://sandeepgudisa.netlify.app/ — explicitly confirmed by the owner.
- **Founder relationship:** Fixyt founder status was explicitly confirmed by the owner. No founding date, legal entity details, adoption statistics, or funding information are inferred.

## Implemented routes

| Route | Purpose |
| --- | --- |
| `/` | Portfolio, current roles, founder introduction, and visible questions and answers |
| `/about` | Substantive biography, current roles, and ProfilePage identity |
| `/projects/fixyt` | Founder relationship and product story with a link to the official product site |
| `/robots.txt` | Crawl rules and sitemap location |
| `/sitemap.xml` | The three canonical, indexable content pages |
| `/opengraph-image` | Generated 1200 × 630 sharing image using bundled fonts and the approved portrait |

## Expanded biography

The About page contains the professional story, current and earlier roles, nine expandable project profiles, six expertise areas, education and recognition, and twelve visible FAQs. `lib/biography.ts` supplies its project, expertise, section, and question data. `lib/biography-seo.ts` describes the ProfilePage sections and project index from the same source; these references point to actual visible anchors. Project entries describe parts of this biography, not blanket claims of original authorship of upstream software.

The homepage retains its four concise FAQs. All key biography content is server-rendered and available without JavaScript. Native details/summary controls support keyboard exploration.

## Source of truth

- `lib/site.ts`: canonical origin, owner identity, social links, visible question-and-answer data, and indexing configuration.
- `lib/seo.ts`: page-specific titles, descriptions, canonical links, Open Graph, large-image sharing metadata, and Google/Bing verification tags.
- `lib/identity.ts`: stable Person, WebSite, Organization, page, and breadcrumb identifiers.
- `components/StructuredData.tsx`: JSON-LD serialization with `<` escaped to prevent a string from closing its script element.
- `sandeepgudisa.md`: detailed editorial sourcebook, evidence classification, project versions, and verification notes. It is not served as a public biography route.

The identity graph links each Organization's `founder` to the same Person identifier. Organization and product URLs are not placed in the person's `sameAs` list. Vector is named without assigning an unconfirmed corporate URL. Awards, ratings, testimonials, revenue, audience counts, and performance figures are not invented in structured data.

The Fixyt page includes a SoftwareApplication description without fabricated offers or ratings. This is semantic markup, not a promise of eligibility for a software rich result. Visible FAQs are rendered in HTML, without adding FAQPage markup solely to pursue a search feature.

## Environment settings

`NEXT_PUBLIC_SITE_URL` may override the canonical origin when intentionally moving to another production domain. It must be an HTTP(S) origin without a path, query string, or fragment. The confirmed Netlify address is the default. Change this value before building a deployment on a replacement canonical domain and plan redirects from the old address.

`SITE_NOINDEX=true` disables index/follow metadata and returns disallow rules and an empty sitemap. Netlify builds with a non-production `CONTEXT` apply the same behavior automatically, including deploy previews, branch deploys, and local development. Vercel’s `VERCEL_ENV=preview` or `VERCEL_ENV=development` remains protected for legacy deployments. Other public staging environments should set `SITE_NOINDEX=true`. Indexing settings are evaluated during the build; rebuild after changes.

Public robots rules allow search crawlers, including search-based AI crawlers. No training-specific preference has been set. Robots directives cannot override a CDN/WAF block and do not guarantee discovery or indexing. They also are not access controls for confidential pages.

## Source consistency

Founder status appears in the homepage, existing About section, detailed biography, experience timeline, Fixyt project card/page, downloadable résumé, sharing image, metadata, visible answers, and sourcebook. The owner's requested creative headline is retained. The previous About portrait sizing fix is retained. No mobile number is published.

The new pages deliberately avoid turning sourcebook research notes into factual biography copy. The current site still contains historical recognition and technical descriptions that were present before this SEO work. Exact award placements, dates, and project-version discrepancies are recorded in the sourcebook for owner reconciliation; their inclusion elsewhere in the older portfolio does not constitute independent verification.

## Validation

1. Run `npm run build` for type checking and static production generation, then `npm run check:seo` to audit the generated HTML, structured data, and crawler resources.
2. Start the built site with `npm run start`.
3. Inspect `/`, `/about`, and `/projects/fixyt` for unique canonical URLs, correct descriptions, one visible primary heading, matching metadata, and valid JSON-LD.
4. Confirm the graph has one consistent person identifier and founder references resolve to it.
5. Request `/robots.txt`, `/sitemap.xml`, and `/opengraph-image`; confirm successful responses, canonical origins, and correct image dimensions.
6. Check mobile layouts, keyboard interactions, internal navigation, and absence of telephone links.
7. Validate the deployed JSON-LD with Schema.org Validator. Use Google's Rich Results Test for supported Google features; a lack of a rich result for generic Person markup is not by itself a schema error.
8. Check preview/staging builds expose noindex metadata and disallow rules.

## Google HTML-file verification

The original owner-uploaded Google file is stored unchanged at `public/google4e10fe4848c12ad9.html` and served at `/google4e10fe4848c12ad9.html`. It supports Google Search Console’s HTML-file method in addition to the existing metadata tag. Keep the file published after verification. A successful local route check does not establish that Netlify has deployed it; check the public URL before clicking Verify.

## Optional verification configuration

The owner-supplied Google verification value is saved in `lib/site-verification.json` and rendered by default. Optionally set `GOOGLE_SITE_VERIFICATION` to override it with the raw content value from Google’s HTML verification tag. Set `BING_SITE_VERIFICATION` to the raw content value from Bing’s tag. The variables are optional and contain public verification identifiers. Google’s saved value is rendered by default; Bing’s tag is rendered only when configured. They do not themselves verify an account; the owner must complete the corresponding webmaster workflow after redeployment. Do not put a complete HTML tag into either value.

## Owner follow-up after deployment

Follow [SEO-MANUAL-CHECKLIST.md](SEO-MANUAL-CHECKLIST.md) for the step-by-step deployment, ownership verification, sitemap submission, and monitoring workflow.

- Deploy the new build to the confirmed canonical site. A Git push by itself does not establish a successful hosting deployment.
- Verify ownership in Google Search Console and Bing Webmaster Tools.
- Submit `https://sandeepgudisa.netlify.app/sitemap.xml`.
- Inspect the live homepage, biography, and Fixyt page with URL Inspection and request indexing when appropriate.
- Check that production hosting and firewall settings allow intended crawlers.
- Update older public profile links and locations where needed.
- Add authoritative evidence for historical recognition and reconcile the sourcebook's pending items.

No account verification, search-engine submission, third-party profile edits, or deployment was performed by changing these source files. There is no guarantee of a specific ranking, knowledge panel, or AI citation.

## Primary references

- [Fixyt product website](https://fixyt.in/): product category and broad workspace features; founder relationship separately confirmed by the owner.
- [Google: AI features and your website](https://developers.google.com/search/docs/appearance/ai-features): foundational SEO also applies to AI search features.
- [Google: profile-page structured data](https://developers.google.com/search/docs/appearance/structured-data/profile-page): descriptive profile markup and requirements.
- [OpenAI crawler documentation](https://developers.openai.com/api/docs/bots): search and training crawler controls are distinct.


## Netlify domain migration

The owner changed the canonical production origin to `https://sandeepgudisa.netlify.app/`. All runtime SEO output and the audit default now use that address. Check Netlify’s environment settings for a stale `NEXT_PUBLIC_SITE_URL` override, set it to the new origin, and redeploy. Keep `SITE_NOINDEX` unset or `false` in production.

`next.config.ts` includes a permanent, host-specific redirect from the previous `sandeepgudisa.vercel.app` host to the same path on Netlify. This takes effect on the old host only if that deployment is rebuilt from this code; it does not configure or update a remote hosting account automatically. The Netlify host and local development do not match the redirect rule.

Verify the new property in Search Console and Bing, submit the new sitemap, and update controlled profile links. Preserve the old property to monitor the migration. Use Google’s Change of Address workflow if it is offered and appropriate for the verified old/new properties.
