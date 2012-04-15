---
layout: post
title: Wrong Content-Type when using Amazon Simple Storage Server (S3) as Web Hosting
---

![Amazon S3 MIME Types](/images/s3-mime-types.jpg)

I recently added RSS/Atom feeds to this website and I realised that the *Content-Type* header in the HTTP response is not set properly. This might cause some issues with your website not working properly, e.g. the RSS feed not showing properly in Firefox, a web browser that has support for RSS feeds. So I investigated this issue and I realised that Amazon S3 is a pretty dumb web server. You've got to set the *Content-Type* for each of your uploaded files. Of course this is definitely a deal breaker for me if I can't find a way to automate it.

I have been using [s3sync.rb](http://s3sync.net) to help me sync the changes for the website to an Amazon S3 bucket, that is setup to host my website. It works like *rsync* but for Amazon S3. You can instruct s3sync.rb to set the correct MIME type for the *Content-Type* header during file upload by configuring the *mime.types* file (check the README.txt for s3sync.rb for more info), like below:

    text/html       html
    text/css        css
    text/javascript js
    text/xml        xml
    image/jpeg      jpg
    image/png       png

If you already have existing files in Amazon S3, just delete all of them (you can automate that with some bash 1 liners) and then re-upload them with s3sync.rb after you've setup the *mime.types* file and you're done!
