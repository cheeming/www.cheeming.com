---
layout: post
title: Advanced Tricks For Hosting Website on Amazon S3 - Enable Gzip Compression
---
For my own websites, I have been using Amazon S3 to host it. And I've found it to be sufficient and hassle free. I'd recommend it for those who are technically inclined but don't want the hassle to manage their own web servers. And also someone who would like their servers that can infinitely scale, even though in most cases, we would never have the chance to get the slashdot / digg / reddit effect.

I'd like to touch on some advanced usages. If you like your website to load quickly, you should minify your JavaScript and CSS files. Normally these files would have a ```.min.js``` or ```.min.css``` suffix.

On top of that you should also enabled gzip compression, to reduce the amount of data you sent between the web browser and the web server. Normally, if you host your website with a web server like Apache or Nginx, you can turn it on for all your files and immediately your website gets loaded more quickly. What happens is that your files get compressed on the fly when it is requested by the web browser.

Since I am using Amazon S3, I am dependent on what it provides. Unfortunately, [Amazon S3 doesn't support compressing your files on the fly](http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/ServingCompressedFiles.html#CompressedS3).

Even though Amazon S3 doesn't support that feature, we can still get around it. You can set the ```Content-Encoding``` header for the files you host in Amazon S3 to have the value ```gzip```. And before you upload your files to Amazon S3 you need to compress all the files with gzip compression.

We are using [complexity](https://github.com/audreyr/complexity), a Python-based static site generator, which generates the static files into a ```www``` folder. You don't have to use the same tool, you can use something like [Jekyll](http://jekyllrb.com/) too. Once you generated the static files, just compress all the files in that folder with the ```gzip``` command line tool. I wrote a script that would help with that: [https://github.com/Infinite-Code/ic-website/blob/master/gzip-all](https://github.com/Infinite-Code/ic-website/blob/master/gzip-all)

And to upload the website to Amazon S3, I am using the [Amazon Command Line Interface](http://aws.amazon.com/cli/) tools. You can use the ```aws s3 sync``` command and include the ```--content-encoding gzip``` param to sync all the files to the Amazon S3 bucket that is hosting your website files and set the encoding to the correct value.

Once your web browser sees the ```Content-Encoding``` header it will decompress the files accordingly. And voila! You get gzip compression for your website, almost for free.
