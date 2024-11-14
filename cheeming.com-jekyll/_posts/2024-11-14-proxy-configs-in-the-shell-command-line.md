---
layout: post
title: Proxy configs in the shell / command line
---
I have been using [Tailscale](https://tailscale.com) to setup my own personal VPN, and it has been working quite well. That being said, at times the connection gets flaky, and I have found that using SOCKS proxy through ssh tunnel (the [```-D```](https://man.openbsd.org/ssh#D) app-level port forwarding feature) is quite a good fallback option. 

Web browsers typically have good support for SOCKS proxy, and it is fairly easy to set up.
However, for command line tools, it may not be immediately obvious how to configure them to use SOCKS proxy.

I needed to make [terraform](https://www.terraform.io) and (ahem) [yt-dlp](https://github.com/yt-dlp/yt-dlp) to work through the SOCKS proxy, but I didn't find any obvious command line options. And then I realised that many HTTP libraries used my popular command line tools actually already support the ```(HTTP|HTTPS)_PROXY``` environment variables. Which means that most of the command line tools, should just support this out of the box. However, there are some caveats \[[1](https://superuser.com/questions/944958/are-http-proxy-https-proxy-and-no-proxy-environment-variables-standard)\] \[[2](https://unix.stackexchange.com/questions/212894/whats-the-right-format-for-the-http-proxy-environment-variable-caps-or-no-ca)\].

So, to make your favourite command line tools use the SOCKS proxy, please setup following environment variables first:
```
export HTTP_PROXY=socks5://localhost:1080
export HTTPS_PROXY=socks5://localhost:1080
```

And then just run your command as you normally would.

And it should just work! Magic! The power of **shared libraries** and **conventions** (_standards?_).
