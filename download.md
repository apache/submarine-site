---
layout: page
title: "Download"
description: ""
group:
---
<!--
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
-->
{% include JB/setup %}

# Download Apache Submarine

The latest release of Apache Submarine is **0.3.0**.

  - 0.3.0 released on Jan 23, 2019 ([release notes](./releases/submarine-release-0.3.0.html)) ([git tag](https://git-wip-us.apache.org/repos/asf?p=submarine.git;h=refs/tags/v0.3.0))

    * Binary package with all interpreters ([Install guide](../../docs/0.3.0/quickstart/install.html)):
    <p><div class="btn btn-md btn-primary" onclick="ga('send', 'event', 'download', 'submarine-bin-all', '0.3.0'); window.location.href='http://www.apache.org/dyn/closer.cgi/submarine/submarine-0.3.0/submarine-0.3.0-bin-all.tgz'">submarine-0.3.0-bin-all.tgz</div> (947 MB,
    [pgp](https://www.apache.org/dist/submarine/submarine-0.3.0/submarine-0.3.0-bin-all.tgz.asc),
    [md5](https://www.apache.org/dist/submarine/submarine-0.3.0/submarine-0.3.0-bin-all.tgz.md5),
    [sha](https://www.apache.org/dist/submarine/submarine-0.3.0/submarine-0.3.0-bin-all.tgz.sha512))</p>

    * Binary package with Spark interpreter and interpreter net-install script ([interpreter installation guide](../../docs/0.3.0/usage/interpreter/installation.html)):
    <p><div class="btn btn-md btn-primary" onclick="ga('send', 'event', 'download', 'submarine-bin-netinst', '0.3.0'); window.location.href='http://www.apache.org/dyn/closer.cgi/submarine/submarine-0.3.0/submarine-0.3.0-bin-netinst.tgz'">submarine-0.3.0-bin-netinst.tgz</div> (313 MB,
    [pgp](https://www.apache.org/dist/submarine/submarine-0.3.0/submarine-0.3.0-bin-netinst.tgz.asc),
    [md5](https://www.apache.org/dist/submarine/submarine-0.3.0/submarine-0.3.0-bin-netinst.tgz.md5),
    [sha](https://www.apache.org/dist/submarine/submarine-0.3.0/submarine-0.3.0-bin-netinst.tgz.sha512))</p>

    * Source:
    <a style="cursor:pointer" onclick="ga('send', 'event', 'download', 'submarine-src', '0.3.0'); window.location.href='http://www.apache.org/dyn/closer.cgi/submarine/submarine-0.3.0/submarine-0.3.0.tgz'">submarine-0.3.0.tgz</a> (117 MB,
    [pgp](https://www.apache.org/dist/submarine/submarine-0.3.0/submarine-0.3.0.tgz.asc),
    [md5](https://www.apache.org/dist/submarine/submarine-0.3.0/submarine-0.3.0.tgz.md5),
    [sha](https://www.apache.org/dist/submarine/submarine-0.3.0/submarine-0.3.0.tgz.sha512))

# Using the official docker image

Make sure that [docker](https://www.docker.com/community-edition) is installed in your local machine.  

Use this command to launch Apache Submarine in a container.

```bash
docker run -p 8080:8080 --rm --name submarine apache/submarine:0.3.0
```

To persist `logs` and `notebook` directories, use the [volume](https://docs.docker.com/engine/reference/commandline/run/#mount-volume--v-read-only) option for docker container.

```bash
docker run -p 8080:8080 --rm -v $PWD/logs:/logs -v $PWD/notebook:/notebook -e submarine_LOG_DIR='/logs' -e SUBMARINE_NOTEBOOK_DIR='/notebook' --name submarine apache/submarine:0.8.0
```

If you have trouble accessing `localhost:8080` in the browser, Please clear browser cache.


## Verify the integrity of the files

It is essential that you [verify](https://www.apache.org/info/verification.html) the integrity of the downloaded files using the PGP or MD5 signatures. This signature should be matched against the [KEYS](https://www.apache.org/dist/submarine/KEYS) file.


## Build from source

For developers, to get latest *0.3.0-SNAPSHOT* check [README](https://github.com/apache/submarine/blob/master/README.md).



## Old releases

  - 0.2.0 released on June 15, 2019 ([release notes](./releases/submarine-release-0.2.0.html))

    * Binary package with all interpreters:
    <a style="cursor:pointer" onclick="ga('send', 'event', 'download', 'submarine-bin-all', '0.2.0'); window.location.href='http://archive.apache.org/dist/submarine/submarine-0.2.0/submarine-0.2.0-bin-all.tgz'">submarine-0.2.0-bin-all.tgz</a> (111 MB,
    [pgp](https://archive.apache.org/dist/submarine/submarine-0.2.0/submarine-0.2.0-bin-all.tgz.asc),
    [md5](https://archive.apache.org/dist/submarine/submarine-0.2.0/submarine-0.2.0-bin-all.tgz.md5),
    [sha](https://archive.apache.org/dist/submarine/submarine-0.2.0/submarine-0.2.0-bin-all.tgz.sha512))

    * Binary package with Spark interpreter and interpreter net-install script ([interpreter installation guide](../../docs/0.2.0/manual/interpreterinstallation.html)):
    <a style="cursor:pointer" onclick="ga('send', 'event', 'download', 'submarine-bin-netinst', '0.2.0'); window.location.href='http://archive.apache.org/dist/submarine/submarine-0.2.0/submarine-0.2.0-bin-netinst.tgz'">submarine-0.2.0-bin-netinst.tgz</a> (245 MB,
    [pgp](https://archive.apache.org/dist/submarine/submarine-0.2.0/submarine-0.2.0-bin-netinst.tgz.asc),
    [md5](https://archive.apache.org/dist/submarine/submarine-0.2.0/submarine-0.2.0-bin-netinst.tgz.md5),
    [sha](https://archive.apache.org/dist/submarine/submarine-0.2.0/submarine-0.2.0-bin-netinst.tgz.sha512))

    * Source:
    <a style="cursor:pointer" onclick="ga('send', 'event', 'download', 'submarine-src', '0.2.0'); window.location.href='http://archive.apache.org/dist/submarine/submarine-0.2.0/submarine-0.2.0.tgz'">submarine-0.2.0.tgz</a> (1.4 MB,
    [pgp](https://archive.apache.org/dist/submarine/submarine-0.2.0/submarine-0.2.0.tgz.asc),
    [md5](https://archive.apache.org/dist/submarine/submarine-0.2.0/submarine-0.2.0.tgz.md5),
    [sha](https://archive.apache.org/dist/submarine/submarine-0.2.0/submarine-0.2.0.tgz.sha512))

    <blockquote style="margin-top: 10px;">
      <p><strong>Note</strong>: From submarine version 0.2.0.</p>
    </blockquote>

  <p />
