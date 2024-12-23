install:
	bundle install

hack:
	bundle exec jekyll serve --incremental

publish:
	jekyll build
	aws s3 sync _site/ s3://www.cheeming.com/ --acl public-read --delete
