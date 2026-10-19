# Self-hosted fonts

`newsreader-opsz-400.woff2` — Newsreader by Production Type, licensed under the
SIL Open Font License 1.1, which permits self-hosting and redistribution.

Fetched from Google Fonts as `Newsreader:opsz,wght@6..72,400`, latin subset:
variable on the optical-size axis only, with weight fixed at 400.

Why not `next/font/google`: it can only request Newsreader's optical-size axis
together with the full weight range, which shipped 128 KB (plus 143 KB for
italic). The site uses one weight, so this file is 55 KB and still lets the
browser pick the display cut at headline sizes (`font-optical-sizing: auto`).
The static single-weight file is smaller still (21 KB) but is the text cut,
which reads heavy and loose at headline size.

To refresh: request the URL above with a modern browser user agent, take the
`/* latin */` woff2, and replace this file.
