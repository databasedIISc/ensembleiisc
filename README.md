# Ensemble Website

[![Deployment](https://github.com/databasedIISc/ensembleiisc/actions/workflows/jekyll.yml/badge.svg)](https://github.com/databasedIISc/ensembleiisc/actions/workflows/jekyll.yml)

## Build with Jekyll

To buid the website locally, follow the instructions provided on the [Jekyll documentation](https://jekyllrb.com/docs/). If you have jekyll pre-installed, you can simply run

```bash
bundle install && bundle exec jekyll serve
```
> [!IMPORTANT]
> Please make sure to not commit your `Gemfile.lock`.

## Adding New Lectures

All lecture files at present at `_lectures`. The lectures are sorted based on topics in folders (take a look). To add a new lecture, follow the steps as given.

1. If the lecture belongs to a topic already created, skip to step 4. Else, create a folder with the category name. Make sure the name has only small letters and -. For example, write `quantum-mechanics` instead of `Quantum Mechanics`.
2. Add an `index.md` in the newly created topic folder. In the front matter (the instructions written between the two triple-dashed lines), write the following. Here, `Topic Name` is the name of the topic and `topic-name` is the "slugified" version of the name. The folder names are slugified. Check the `index.md` of other topics to clarify any immediate confusions.

```markdown
layout: topic-page
permalink: '/lectures/topic-name/'
title: Topic Name 
```

> [!NOTE]
> An `index.md` created in a topic folder creates the topic page for that topic. A topic page lists all the lectures under that topic. The code for the rest of the page can be found at `_layouts/topic-page.html` (the layout field in the front matter references this file).

3. Next, in `_config.yml` , under the `default` field, add a new item (the - does this). Under `scope` field, mention the `path` of the topic folder as `_lectures/topic-name/` and the type as `lectures`. In the value field, mention the topic name. Take a look at the pre-existing defaults to get an idea in case of confusions.

https://github.com/databasedIISc/ensembleiisc/blob/0487c79c9a659cac01c34607e56e4a611965457c/_config.yml#L74-L79

4. Create a new file under the said topic folder (`_lectures/topic-name`) and name it in the following format: `yyyy-mm-dd-slugified-lecture-name.md`.
5. In the front matter, type the following. Here, `Lecture Title` is the sentence cased title of the lecture and the `Author Name` is the name of the author[^1] (read footnote please) of that lecture. A reference has also been added.

[^1]: The author here refers to the speaker or the person responsible in conducting the lecture, not the person who actually created the file.  

```markdown
title: Lecture Title
author: Author Name
layout: post
```

6. Add the Lecture contents. Just below the front matter of a page, you can write an excerpt for the lecture. To mark the end of the excerpt, add `<!--more-->` in a new line. (Adding a one or two line except is recommended.

7. If you need to add any media file, upload it in the repository itself. For an image, convert the required image to WebP format and go to `/assets/img/posts/` and create the topic folder if not already there. In the latter folder, create another folder with the same name as the slugified title and upload your image there. Then link your image using a link of the form `/assets/img/posts/...`. The first forward `/` is to ensure the link is not relative but absolute - this prevents some headaches in case some files are being moved around (not the image file).
8. If the lecture has any poster, upload it in the same folder as mentioned in the previous step. Create a new field in the front matter called `image` and add the "absolute" link to the poster. If the lecture has been recorded and uploaded in any video serving website (for example YouTube), create a `video` field in the front matter and add the link. If cloud-stored lecture materials are provided, add a new field called `slides` and add the link.

https://github.com/databasedIISc/ensembleiisc/blob/0487c79c9a659cac01c34607e56e4a611965457c/_lectures/statistical-mechanics/2025-01-29-statistical-mechanics-lec-1-0.md?plain=1#L1-L11

> [!NOTE]
> Only one link is allowed in the `image`, `video`, and `slides` fields. Incase of multiple links for either `video` or `slides`, consider linking them in the text itself or putting the videos, other materials in a cloud folder (Google Drive, OneDrive etc) and linking that folder.

9. Save the file, check the preview ([build with jekyll](#build-with-jekyll) and check) and if everything's alright, push the changes[^2]. It is advised to push multiple files together to avoid spamming the [commit history](https://git-scm.com/book/en/v2/Git-Basics-Viewing-the-Commit-History). If you don't have permission to push to the repository directly, create a [pull request](https://git-scm.com/book/en/v2/GitHub-Contributing-to-a-Project).

[^2]: If you're unfamiliar with Git and GitHub, it is advisable to read [Git Basics - Working with Remotes](https://git-scm.com/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository), and [Intro to Version Control - Part 1](https://automatic-wilderness-e07.notion.site/Intro-to-Version-Control-with-Git-Part-1-7a53d6641b1b4ac88908db38dcd25ab1) and [Part 2](https://automatic-wilderness-e07.notion.site/Intro-to-Version-Control-with-Git-Part-2-d7163512e13243f1b20059afac0174e3)

## Adding New Events

Adding new events is relatively simpler. Just add a markdown file named `yyyy-mm-dd-slugified-title.md` in the `_events` folder. Then follow step 5 onwards from [Adding New Lectures](#adding-new-lectures).

## Marking Featured Posts

To make any post in either Lectures or Events as featured, add a "featured" tag in the front matter.

```markdown
tags: [featured,]
```


## Adding new images in Gallery

Upload your image in `/assets/img/gallery/` and name it as `YYYY-MM-DD_Your-image-description` followed by the extension (`.webp` recommended).

## Adding new Newsletters

It has been assumed that the newsletter names will continue as **The Canonical** and **The Geodesic**, hence folders of appropriate names have been added to `/assets/files/newsletter/` and `/assets/img/newsletter`. To add new issues of these Newsletters, add the newsletter PDF under appropriate folder in `/assets/files/newsletter/`. Rename the PDF in the format `YYYY-MM-DD_Your-Newsletter-Tagline.pdf` where `YYYY-MM-DD` is the newsletter publication date. Add the image for the cover page under appropriate folder in `/assets/img/newsletter/` and rename it as `YYYY-MM-DD` followed by image extension (`.webp` recommended) where `YYYY-MM-DD` is the publication date. If the dates mismatch, the cover page will not be linked to the PDF file.

If you wish to add any other newsletter (say you manage to publish monthly newsletters) add them under `assets/files/newsletters/` with appropriate naming (in the format mentioned before) to make them appear under **Other Newsletter** section on the Newsletter page.

## Adding new Team Members

To add a new section for your year's Convenors and other members in the Team page, add a new file named as `YYYY.yml` under `_data/team/`. You can copy the format of the such files from the other files in that section. If the other members have a specific team name, you can add a `volunteer-team-name` field. A good example of such a file is `2025.yml`.

## Conclusion

I hope this helped. In case you have any doubts, feel free to contact the repository admins.
