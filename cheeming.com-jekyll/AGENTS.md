# AGENTS

Audience: agentic coding assistants working in this repository.
Keep this file up to date when workflows or conventions change.

## Repository overview
- Jekyll-based personal site (static HTML + Markdown posts).
- Source content lives in root, `_layouts`, `_posts`, `css`, `images`.
- Generated output is `_site/` (do not edit by hand).
- Ruby tooling via Bundler; optional Nix shell for dev env.

## Tooling and environment
- Ruby version last tested: 3.3.6 (see `README.md`).
- Bundler required; install via RubyGems if missing.
- Optional Nix shell: `nix-shell` uses `shell.nix`.
- AWS CLI needed only for publishing.

## Commands (Makefile)
Use `make` targets; they wrap Bundler + Jekyll.

### Setup
- `make install` - install gems with Bundler.

### Local development
- `make hack` - clean + serve with live reload.
- Dev server: `http://127.0.0.1:4000`.
- Jekyll flags: `--incremental --future --livereload`.

### Build
- `make build` - clean + build site into `_site/`.
- Use before verifying generated output.

### Publish
- `aws configure --profile www.cheeming.com` (one time).
- `export AWS_PROFILE=www.cheeming.com`.
- `make publish` - builds then `aws s3 sync` to S3.

## Linting and tests
- No dedicated lint/test tooling in this repo.
- There is no “single test” runner; verify via `make build`.
- If you add tests or linting, document the commands here.

## Files to avoid editing
- `_site/` is generated output.
- `.jekyll-cache/` and `.jekyll-metadata` are build artifacts.
- `css/*.min.css` and `js/*.min.js` are vendor/minified assets.

## Content structure
- Posts live in `_posts/YYYY-MM-DD-title.md`.
- Chinese posts live in `_posts/zh/` and use `lang: zh`.
- Every post requires YAML front matter (`---` at top).
- Layouts: `_layouts/default.html`, `_layouts/post.html`.
- Homepage content: `index.html`, `zh/index.html`.
- Global config: `_config.yml`.

## Markdown and posts
- Keep paragraphs short and readable; one sentence per line is ok.
- Use standard Markdown; Jekyll renders Kramdown defaults.
- For image links, prefer `/images/...` paths.
- Front matter keys commonly used: `layout`, `title`, `lang`.
- Dates come from filename; keep filename and `date` consistent.
- Avoid raw HTML unless you need custom layout.

## HTML + Liquid templates
- Preserve existing HTML structure in `_layouts`.
- Indentation: 4 spaces for nested elements.
- Liquid tags use `{% ... %}`; output uses `{{ ... }}`.
- Avoid complex Liquid logic; keep templates simple and readable.
- Prefer editing content pages over layouts when possible.

## CSS
- Base styles live in `css/base.css`.
- Versioned CSS files like `base.20250611.css` are used in layout.
- Keep formatting consistent with existing style (4-space indent).
- Use lowercase hex colors; keep palette aligned with current look.
- Avoid adding new frameworks; use plain CSS.

## JavaScript
- Only small inline scripts exist in layouts.
- If adding JS, prefer vanilla and keep it minimal.
- Do not edit `js/luminous.min.js` directly; vendor asset.

## Naming conventions
- Filenames: kebab-case for posts and assets.
- CSS classes: lowercase, hyphen-separated.
- Use descriptive names; avoid abbreviations unless established.

## Imports and dependencies
- Ruby dependencies live in `Gemfile`.
- Run `bundle install` after changing `Gemfile`.
- Avoid adding new gems unless necessary; document rationale.
- There is no Node dependency tree in this repo.

## Formatting and whitespace
- Keep lines under ~100 chars when reasonable.
- Use LF line endings.
- Keep blank lines between logical blocks.
- No trailing whitespace.

## Error handling and robustness
- Jekyll build errors usually come from invalid front matter or Liquid.
- When adding Liquid logic, keep guards simple and explicit.
- Avoid silent failures: prefer explicit checks in templates.

## Workflow tips for agents
- Always edit source files, never `_site/`.
- After content changes, run `make build` or `make hack` to verify.
- If a change affects layout or CSS, visually spot-check locally.
- Keep changes minimal and consistent with existing style.

## Publishing notes
- Publishing requires AWS credentials; do not commit secrets.
- `make publish` deletes removed files on S3 (`--delete`).
- Confirm `_site/` is correct before publishing.

## Cursor/Copilot rules
- No `.cursor` rules or Copilot instructions found in this repo.
- If added later, summarize them here.

## Safety and hygiene
- Do not add large binaries to git without explicit request.
- Prefer updating existing assets rather than duplicating.
- Respect existing content tone and voice.

## Quick reference
- Setup: `make install`
- Dev server: `make hack`
- Build: `make build`
- Publish: `make publish`

## When adding new content
- Add new posts under `_posts/` with correct date prefix.
- Use `layout: post` for standard posts.
- Update links in `index.html` only if needed; homepage lists posts automatically.
- Keep image sizes reasonable; optimize before committing.

## When editing layouts
- `default.html` wraps all content and includes assets.
- `post.html` adds navigation and Disqus block.
- Preserve analytics and Disqus snippets unless asked to remove.

## Troubleshooting
- `bundle exec jekyll serve` is wrapped by `make hack`.
- If Bundler fails, run `bundle install` again.
- If Nix is used, run `nix-shell` before Bundler.

## Future updates
- If lint/test tooling is introduced, document single-file commands.
- Add project-specific conventions as they emerge.
- Keep this file concise and actionable.
