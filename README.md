# codercor.com

Static personal portfolio for Mustafa Çor. The production artifact lives in `site/` and has no build-time dependencies.

## Local preview

```sh
python3 -m http.server 4173 --directory site
```

## Cloudflare deployment

```sh
npx wrangler deploy
```

Cloudflare serves the static asset Worker at no charge. The custom domains are `codercor.com` and `www.codercor.com`.
