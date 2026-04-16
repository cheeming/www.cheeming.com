# AGENTS

Scope: `cheeming.com-jekyll` in this workspace.

## Repo shape
- Single Jekyll site (not the sibling Next.js repo).
- Editable source is in root pages plus `_layouts/`, `_posts/`, `_nice/`, `css/`, `images/`.
- Generated/artifact paths: `_site/`, `.jekyll-cache/`, `.jekyll-metadata`, `vendor/` (do not edit).
- There is no CI/pre-commit/lint/test config in this repo.

## Commands (source of truth: `Makefile`)
- `make install` -> `bundle install`
- `make hack` -> `bundle exec jekyll clean` + `bundle exec jekyll serve --incremental --future --livereload`
- Dev URL: `http://127.0.0.1:4000`
- `make build` -> `bundle exec jekyll clean` + `bundle exec jekyll build --verbose`
- `make publish` -> runs `build`, then `aws s3 sync _site/ s3://www.cheeming.com/ --acl public-read --delete`
- Publish prereq: `export AWS_PROFILE=www.cheeming.com` (after `aws configure --profile www.cheeming.com`)
- Verification step for changes: `make build` (no narrower test target exists).

## Toolchain quirks
- Bundler installs to `vendor/bundle` via `.bundle/config`.
- `README.md` says Ruby 3.3.6 was last tested; `shell.nix` currently pins `ruby_3_2`.

## Content conventions that matter
- Regular posts: `_posts/YYYY-MM-DD-title.md`, usually with `layout: post`.
- Chinese posts: `_posts/zh/` and set `lang: zh` (used by language filters in `index.html` and `zh/index.html`).
- NICE content is a collection (`site.nice`): source `_nice/`, list `nice/index.html`, layout `_layouts/nice_post.html`.
- NICE entries should include `layout: nice_post`, `source_name`, and `source_url` in front matter.

## Editing guidance
- Main wrapper layout: `_layouts/default.html`; post layout with Disqus: `_layouts/post.html`.
- Active stylesheet link is `css/base.20260416.css` in `_layouts/default.html` (not `css/base.css`).
- Do not edit minified vendor assets (`css/*.min.css`, `js/luminous.min.js`).

## Reusable skills
- Check the skills at `.agents/skills/`
