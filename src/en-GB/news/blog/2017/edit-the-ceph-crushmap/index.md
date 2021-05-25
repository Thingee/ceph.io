---
title: "Edit the Ceph CRUSHmap"
date: "2017-01-29"
author: "admin"
tags: 
  - "planet"
---

The CRUSHmap, as suggested by the name, is a map of your storage cluster. This map is necessary for the CRUSH algorithm to determine data placements. But Ceph’s CRUSHmap is stored in binary form. So how to easily change it?

### Native tools

Ceph comes with a couple of native commands to do basic customizations to the CRUSHmap:

#### [Reweight](http://docs.ceph.com/docs/master/rados/operations/crush-map/#adjust-an-osd-s-crush-weight)

```
ceph osd crush reweight {name} {weight}
```

You use this to adjust the weight of an OSD or a bucket. It’s very useful when some OSDs are getting more used than others, as it allows to lower the weights of the more busy drives or nodes.

#### [Remove](http://docs.ceph.com/docs/master/rados/operations/crush-map/#remove-an-osd)

```
ceph osd remove {name|bucket-name}
```

You use this to either clean up old buckets, or when you decomission OSDs.

#### [Move or add, set location and weight](http://docs.ceph.com/docs/master/rados/operations/crush-map/#add-move-an-osd)

```
ceph osd crush set {id-or-name} {weight} root={pool-name} [{bucket-type}={bucket-name} ...]
```

This is one of the most interesting commands. It does 3 things at once to the specified OSD or bucket:

1. If the specified OSD or bucket does not exist - it creates it. So be careful with typos, oosd.0 is probably not what you meant :)
2. It changes the location
3. It changes the weight

This command is pretty useful when you are physically moving things in your cluster.

#### Read and write the map

```
# Read
ceph osd getcrushmap -o {output file}
# Write
ceph osd setcrushmap -i {input file}
```

If you want to customize anything else (not covered in `ceph osd crush`) then you will need to download the CRUSHmap, edit it and then upload the new version. But since the CRUSHmap is in binary format you have to convert it to and from human readable text.

1. `ceph osd getcrushmap -o map.bin` returns the map in its binary form and `crushtool -d map.bin -o map.txt` converts the binary file into a human readable text file.
2. You can edit the `map.txt` with your favorite text editor.
3. To apply your changes, you first need to convert the edited text file to binary with `crushtool -c map.txt -o map.bin` and then to apply your changes with `ceph osd setcrushmap -i map.bin`

### Helper scripts

To make it easy for you I made a pair of helper scripts that takes care of the conversion transparently:

#### ceph-get-crushmap

This first one just outputs the current CRUSHmap to _stdout_. Perfect to combine with a [pipeline](https://en.wikipedia.org/wiki/Pipeline_(Unix)).

```
# Get and convert the CRUSHmap
tmp=$(mktemp)
ceph osd getcrushmap -o "$tmp" && crushtool -d "$tmp" -o /dev/stdout
rm "$tmp"
```

#### ceph-set-crushmap

This second script applies the CRUSHmap from _stdin_ to the Ceph cluster.

```
# Convert and set the CRUSHmap
tmp=$(mktemp)
crushtool -c /dev/stdin -o "$tmp" && ceph osd setcrushmap -i "$tmp"
rm "$tmp"
```

### Example

Assuming you have both scripts in your `$PATH`, you could easily rename the _host_ type to _server_.

```
ceph-get-crushmap | sed 's/host/server/' | get-set-crushmap
```

Source: Maxime Guyot ([Edit the Ceph CRUSHmap](http://www.root314.com/ceph/2017/01/29/edit-ceph-crushmap/))
