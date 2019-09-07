install:
	gem install jekyll

hack:
	jekyll serve

publish:
	jekyll build
	aws s3 sync _site/ s3://www.cheeming.com/ --acl public-read --delete
