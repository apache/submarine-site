# Apache Submarine website

This readme will walk you through building the Submarine website

## Introduction

1. The `master` branch of the submarine is used to manage the website source code. Every time you modify the website, you need to submit it to the `master` branch for saving.

2. The `asf-site` branch is used for the static page branch of the website. Every time you modify the website, you need to save the latest generated static page here. https://submarine.apache.org will be updated automatically.

## Build website by docker

```
git clone https://github.com/apache/submarine-site.git
git checkout master

docker run -it -p 4000:4000 -v $PWD/submarine-site:/submarine-site hadoopsubmarine/submarine-website:1.0.0 bash
cd /submarine-site
bundle exec jekyll serve --watch --host=0.0.0.0
```

The static page of the website will be generated in the `$PWD/submarine-site/_site` directory.

view submarine website in local: http://localhost:4000/

## Adding a new page

```
rake page name="new-page.md"
```

## Deploy website

1. Submit the `master` branch to github repo.
2. Copy the `_site` directory to the other backup path, e.g., `back_site`.
3. Switch to the `asf-site` branch, clear all the contents of the directory, copy the contents of the `back_site` directory to the this directory, and submit the `asf-site` branch to github repo.
