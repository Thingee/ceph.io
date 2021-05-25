---
title: "v0.30 released"
date: "2011-06-28"
author: "sage"
tags: 
  - "planet"
---

We’re pushing out v0.30. Highlights include:

- librbd: Fixed race/crash
- mds: misc clustered mds fixes
- mds: misc rename journaling/replay fixes
- mds: fixed flock deadlock when processes die during lock wait
- osd: snaptrimmer fixes, misc races, recovery bugs
- auth: fixed cephx race/crash
- librados: rados bench fix
- librados: flush
- radosgw: multipart uploads
- debian: gceph moved to separate package
- lots of g\_conf refactoring, removing of globals, and related cleanup
- qa: lots

The focus this time around continues to be with QA, bug fixes, and cleanup.

Relevant URLs:

- Direct download at: [http://ceph.newdream.net/download/ceph-0.30.tar.gz](http://ceph.newdream.net/download/ceph-0.30.tar.gz)
- Debian/Ubuntu packages: see [http://ceph.newdream.net/wiki/Debian](http://ceph.newdream.net/wiki/Debian)

