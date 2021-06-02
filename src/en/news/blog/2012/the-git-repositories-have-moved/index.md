---
title: "The git repositories have moved"
date: "2012-03-02"
author: "sage"
tags: 
  - "planet"
---

We’ve renamed our ‘org’ on github.com, so the new URLs are

- [github.com/ceph](http://github.com/ceph)
- github.com/ceph/ceph.git
- github.com/ceph/ceph-client.git
- etc.

and so forth (instead of github.com/NewDreamNetwork).  You can update your git remote with something like

 git remote set-url origin git@github.com:ceph/ceph.git

(if you are a github user), or

 git remote set-url origin git://github.com/ceph/ceph.git

if you cloned anonymously.

