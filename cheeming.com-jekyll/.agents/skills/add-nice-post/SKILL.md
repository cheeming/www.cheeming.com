---
name: add-nice-post
description: Draft a beginner-friendly Chinese NICE post with pinyin from the template.
compatibility: opencode
metadata:
  audience: maintainers
  project: cheeming.com-jekyll
---

## When to use

Use this skill when the user asks for a new NICE story in Chinese with pinyin.

## Goal

- Produce one new draft post under `_nice/` using `_nice/TEMPLATE.md`.
- Keep the story short, beginner-friendly, and aligned with existing NICE posts.

## Workflow

1. Duplicate `_nice/TEMPLATE.md` to `_nice/YYYY-MM-DD-topic-slug.md`.
2. Replace front matter placeholders:
   - Keep `layout: nice_post` and `lang: zh`.
   - Set a Chinese title, `date`, `source_name`, and `source_url`.
   - Please update `published` to be true
3. Replace all body placeholders with a short story in Simplified Chinese:
   - 4 short paragraphs plus 1 keyword paragraph.
   - Wrap key words/phrases with `<ruby>汉字<rt>pinyin</rt></ruby>`.
   - Keep sentence structure simple for language learners.
4. Replace keyword placeholders with exactly 3 keywords (each with pinyin).
5. Final checks before returning:
   - No placeholder tokens remain (`PHRASE_`, `KEYWORD_`, `TITLE_IN_CHINESE`, etc.).
   - `<ruby>` and `<rt>` tags are balanced.
   - `source_url` is a valid URL string.
6. Use `make build` to verify that build is healthy.
7. If build is healthy, automatically commit new MD file into git history, using commit description: Add new post on "topic-slug". Replace "topic-slug" with the generated topic slug. Before running `git push`, run `ssh-add ~/.ssh/id_github` to add the relevant ssh key into ssh agent.
8. Finally publish it to AWS S3, by first setup environment variable `export AWS_PROFILE=www.cheeming.com` and then run `make publish`

## Output style guardrails

- Keep total length compact (roughly 120-220 Chinese characters, excluding pinyin tags).
- Use neutral, factual news tone; avoid opinionated or speculative claims.
- Prefer common vocabulary over advanced idioms.

## Suggested user-facing summary

- Mention the new file path.
- Mention the value of `published` flag is still present.
- Based on the `make build` output, confirm that the build is healthy or not
