---
title: 'Welcome!'
carousel: 'img/carousel/dandelion-jumbotron.jpg'
---

# Welcome!

Technology has always brought big changes to the way we read. From the very
first printing press, to the present day, each innovation has brought new ways
for writers to present their unique stories. Now, we live in the age of web
fiction and there is no longer a barrier to publication. Anybody who wants can
put their work online for free, for anybody to read.

At Dataspace, though, we think there’s a certain charm to having a physical book
in your hands, or up on your shelf.

Books are fun to own, they are a good way to show your appreciation for your
favorite creators, and of course the creators themselves aspire to have their
work in print. Our mission is to bring web fiction and similar independent works
to your shelf. We’re agnostic on genre, we embrace the unusual, and we love
stories that have already been read and enjoyed by thousands!

And if you’re a writer yourself, we hope you will join us and share your story
with the world.

## Our Values and Commitments

We don’t mind if your story has already been read for free by thousands. We know
full well that just means you have dedicated fans, many of whom will want your
work on their shelf in physical form. We’re looking for new authors to help
launch your career.

Also, for the wolfie: here's what I needed to do in `postcss.config.js` to make
it work!

{{< highlight js "linenos=table,hl_lines=3-10,linenostart=18" >}}
/* disable PurgeCSS during development runs */
module.exports = {
  plugins: [
    require('cssnano')({
      preset: ['default', {
        discardComments: {
          removeAll: true,
        }
      }]
    }),
    require('autoprefixer'),
    ...process.env.HUGO_ENVIRONMENT === 'production'
      ? [purgecss]
      : []
    ]
};
{{< / highlight >}}

{{< cards >}}

{{< card src="img/1.jpeg" alt="text" >}}
We take pride in the quality of our products, and work with industry leading
print companies to deliver environmentally conscious books that look and feel
fantastic to own.
{{< /card >}}

{{< card src="img/2.jpeg" alt="text" >}}
We don’t just take your text and copy-paste it. We take care with typsetting,
fonts and kerning, ensuring that every book published through us is a joy to
read.
{{< /card >}}

{{< card src="img/3.jpeg" alt="text" >}}
We know that readers do judge books by their covers, which is why ours are never
generic. We commission original artwork, so that your novel will stand out as a
collectible on the shelf.
{{< /card >}}

{{< card >}}
This is a test of an imageless card body. This is _only_ a test!
{{< / card >}}

{{< / cards >}}

## Fresh of the Press

{{< cards >}}

{{< card authors="Justin C. Louis" title="It can have a title!" >}}
This is just a test of the card shortcode! And that's the card post shortcode ->
{{< /card >}}

{{< card/posts amount="2" >}}

{{< / cards >}}
