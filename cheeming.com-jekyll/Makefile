install:
	bundle install

hack:
	jekyll serve --incremental

publish:
	jekyll build
	aws s3 sync _site/ s3://www.cheeming.com/ --acl public-read --delete
