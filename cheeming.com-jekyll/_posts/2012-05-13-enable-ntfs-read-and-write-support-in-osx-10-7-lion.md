---
layout: post
title: Enable NTFS read and write support in OSX 10.7 (Lion)
---
If you require NTFS read and write support in OSX Lion, like you have a portable USB hard drive formatted with NTFS, you can do the following:

1. **Install OSXFUSE**<br />
Download the latest [OSXFUSE](http://osxfuse.github.com/) and install it. The one I tested with is [version 2.3.9](https://github.com/downloads/osxfuse/osxfuse/OSXFUSE-2.3.9.dmg). OSXFUSE is a drop-in replacement for [MacFUSE](https://code.google.com/p/macfuse/) which is no longer actively maintained and not known to work well with OSX Lion (there might be some versions of MacFUSE that might work with Lion but I didn't investigate further). When installing, please ensure that the compatibility layer is installed to make it a drop-in replacement for MacFUSE. This will make it work well with file systems that do not have native support for OSXFUSE yet.
2. **Install NTFS-3G**<br />
Download the latest [NTFS-3G](http://macntfs-3g.blogspot.com/) and install it. The one I tested with is [version 2010.10.2](http://sourceforge.net/projects/catacombae/files/NTFS-3G%20for%20Mac%20OS%20X/2010.10.2/ntfs-3g-2010.10.2-macosx.dmg/download). The one I used is the open source version. There are commercial versions if you prefer that.
3. **Fix the timeout issue in NTFS-3G**<br />
There is a bug with NTFS-3G in OSX Lion which will cause a popup message about "15 seconds" timeout error when a NTFS filesystem is being mounted. To quickly fix this, download the following [fuse_wait package](https://github.com/downloads/bfleischer/fuse_wait/fuse_wait.pkg) and install it or you can check [the following page](https://gist.github.com/1100318) for more details.

Once that is done you should have NTFS working on OSX Lion properly.
