---
title: "v0.29.1 released"
date: "2011-06-16"
author: "sage"
tags: 
---

We’ve released 0.29.1 with a few fixes. The main thing is a fix for a  
race condition in librbd that was biting people using rbd with qemu/kvm.

- librbd: fix for race/crash
- osd: fix memory leak
- osd: fix clone size accounting
- mkcephfs: fix ceph.conf reference

Relevant URLs:

- Direct download at: http://ceph.newdream.net/downloads/ceph-0.29.1.tar.gz
- Debian/Ubuntu packages: see http://ceph.newdream.net/wiki/Debian

