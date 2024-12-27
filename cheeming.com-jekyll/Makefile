install:
	bundle install

hack:
	bundle exec jekyll serve --incremental --future

publish:
	bundle exec jekyll build
	aws s3 sync _site/ s3://www.cheeming.com/ --acl public-read --delete
