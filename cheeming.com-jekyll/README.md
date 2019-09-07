Install and Hack
----------------
Setup and run the development server

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
$ aws configure --profile personal

```

Publish current changes to AWS S3

```
$ export AWS_PROFILE=personal
$ make publish
```
