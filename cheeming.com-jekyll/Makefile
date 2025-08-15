install:
	bundle install

hack:
	bundle exec jekyll clean
	bundle exec jekyll serve --incremental --future --livereload

build:
	bundle exec jekyll clean
	bundle exec jekyll build --verbose

publish: build
	aws s3 sync _site/ s3://www.cheeming.com/ --acl public-read --delete
