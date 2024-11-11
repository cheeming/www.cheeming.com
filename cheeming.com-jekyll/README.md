Install and Hack
----------------
Setup and run the development server.

Pre-req:
 - Ruby 3.3.6 (as last tested) https://www.ruby-lang.org/en/documentation/installation/
 - AWS CLI https://aws.amazon.com/cli/
   - For credential setup, please read
     - https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html
     - https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html

```
$ make install  # one time thing
$ make hack
```

Check out the [http://127.0.0.1:4000](http://127.0.0.1:4000)

```
$ open http://127.0.0.1:4000
```

Build & Publish
---------------
One time AWS credentials setup

```
$ aws configure --profile www.cheeming.com
```

Publish current changes to AWS S3

```
$ export AWS_PROFILE=www.cheeming.com
$ make publish
```
