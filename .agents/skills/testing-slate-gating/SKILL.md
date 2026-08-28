---
name: Testing Slate docs auth gating
scope: When testing the lix-it/api-docs Slate site or any Middleman-built Slate docs that use cookie-based auth gating.
description: How to build, serve, and end-to-end test the Slate docs auth-gating feature without deploying.
---

# Testing Slate docs auth gating

## Build the docs

This repo is a Ruby/Middleman Slate site, not a Node project.

```bash
bundle install
bundle exec middleman build
```

Static output is written to `build/`; `build/index.html` is the single-page docs.

## Serve the built docs locally

Use a simple static server so cookies can be set and read on `localhost`:

```bash
python3 -m http.server 8000 --directory build
```

## Test cookie gating

The gating logic lives in:

- `source/layouts/layout.erb` (inline `<head>` script that toggles `<html class="lix-no-auth">` / `lix-auth` based on `document.cookie` containing `lix_user_id`).
- `source/stylesheets/screen.css.scss` (`html.lix-no-auth .auth-gated { display: none; }` and `li:has(> a[href="#send-connection"])` / `li:has(> a[href="#send-message"])` rules).
- `lib/gated_sections.rb` (wraps the `send-connection` and `send-message` headings in `div.auth-gated` at build time).

Because the cookie check looks at `document.cookie`, you can simulate the Lix `lix_user_id` cookie from a same-origin helper page instead of logging in through `lix-www`.

### Quick same-origin cookie helpers

Create two temporary files in `build/`:

`build/set_cookie.html`
```html
<!doctype html><script>
document.cookie = 'lix_user_id=123; path=/; SameSite=Lax';
location.href = '/index.html';
</script>
```

`build/clear_cookie.html`
```html
<!doctype html><script>
document.cookie = 'lix_user_id=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; SameSite=Lax';
location.href = '/index.html';
</script>
```

Then visit:

- `http://localhost:8000/clear_cookie.html` — docs should load with `<html class="lix-no-auth">` and both `Send Connection` / `Send Message` sections and TOC entries hidden.
- `http://localhost:8000/set_cookie.html` — docs should reload with `<html class="lix-auth">` and the sections and TOC entries visible.

### Useful checks

Run in the browser console after page load:

```js
document.documentElement.className; // expect "lix-no-auth" or "lix-auth"
getComputedStyle(document.querySelector('a[href="#send-connection"]').parentElement).display; // "none" or "list-item"
getComputedStyle(document.querySelector('div.auth-gated')).display; // "none" or "block"
```

## Notes

- The gating is entirely client-side, so a static HTTP server is sufficient.
- `li:has(...)` is a modern CSS selector; verify with a Chromium-based browser.
- For a real `lix-www` integration test, the app would need a full local Laravel/Sail environment (`lix-www` repo), a valid `.env`, and the Caddy TLS certs that the `docker-compose.yml` references. That setup is heavy and not required to validate the gating code path.

## Devin Secrets Needed

None for the local static cookie-simulation test.
