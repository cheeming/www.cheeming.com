---
layout: post
title: Reviving A Ten Year Old MacBook Pro
---
I have a MacBook Pro 13 inch Late 2013 model, which has been working quite well for me, in the last ten years. I basically used this computer to build my software consultancy business, [Infinite Code](http://infinite-code.com/) for about 4 years.

In the past few years though, after Infinite Code, I didn't use it as much, since I had a separate work computer to do most of my computing. All these years, it continue to chugged along and gave me pretty much no problems, until more recently where due to wear and tear, the battery, keyboard & speakers needed replacement. I spent about RMB1000 (CNY) to fix the previously mentioned items, and it felt almost new, except for the software.

Due to Apple's software support policy, [macOS Big Sur 11.7.10](https://en.wikipedia.org/wiki/MacOS_version_history) is the "latest" operating system that supports the MacBook Pro 13 inch Late 2013 model. And Big Sur is 4 major versions behind the current latest, which is Sequoia. Although the machine runs fine with Big Sur, there are issues if you want to run the latest applications.

Some examples:
 - If you want to use the latest Slack app, you are out of luck, as [it requires macOS Monterey 12](https://slack.com/help/articles/115002037526-System-requirements-for-using-Slack#desktop).
 - If you want to run the latest Chrome browser, it [still works for Big Sur](https://support.google.com/chrome/a/answer/7100626?hl=en), but probably only for another year or so (till somewhere in 2025), since [Google dropped macOS Catalina 10.15 support](https://support.google.com/chrome/thread/289795700/sunsetting-chrome-support-for-macos-10-15?utm_source=syndication) (the previous macOS) in September 2024. 
   - You will still have a bit more support from Firefox, as it still works with [macOS Catalina 10.15](https://www.mozilla.org/en-US/firefox/121.0/system-requirements/). Yay to open source.

So I decided to install a Linux distribution on the MacBook Pro. I did have some experience with [NixOS](https://nixos.org/) and it did work, but I think I am too _old_ to spend so much time to configure things. I did some research and read some good reviews on [Pop!\_OS by System76](https://pop.system76.com/) that is based on Ubuntu. The installation process was quite smooth and pretty much everything worked out of the box, [except for Wi-Fi](https://www.reddit.com/r/pop_os/comments/es3dwf/wifi_issues_for_pop_os_on_mac/) (it is always Wi-Fi isssues...), and suspend on closing the lid. Battery performance was decent, compared to the published numbers by Apple.

I am pretty happy thus far, since I am using a lot of open source developer tooling where you get the first class experience on a Linux distribution. I am missing some of the built-in and niceties of the Apple ecosystem, such as [Continuity](https://support.apple.com/guide/mac-help/use-continuity-across-your-devices-mchl1d734309/11.0/mac/11.0), Passwords/iCloud KeyChain, Notes and etc, but I can live without them on this machine.

Finally, the machine does feel a bit lighter and more performant. Hopefully this machine will last a few more years.
