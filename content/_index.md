---
# title: 'Welcome' #What ever you write in here will be the title of the page, i.e. the name you see in the tab.
recentPosts: 4 #This dictates how many recent posts from the blog section are shown on the landing page!
carousel: ['img/carousel/Dandelion.jpg']
---

# Welcome!

Technology has always brought big changes to the way we read. From the very first printing press, to the present day, each innovation has brought new ways for writers to present their unique stories. Now, we live in the age of web fiction and there is no longer a barrier to publication. Anybody who wants can put their work online for free, for anybody to read.

At Dataspace, though, we think there’s a certain charm to having a physical book in your hands, or up on your shelf.

Books are fun to own, they are a good way to show your appreciation for your favorite creators, and of course the creators themselves aspire to have their work in print.
Our mission is to bring web fiction and similar independent works to your shelf. We’re agnostic on genre, we embrace the unusual, and we love stories that have already been read and enjoyed by thousands!

And if you’re a writer yourself, we hope you will join us and share your story with the world.

## Our Values and Commitments

We don’t mind if your story has already been read for free by thousands. We know
full well that just means you have dedicated fans, many of whom will want your
work on their shelf in physical form. We’re looking for new authors to help
launch your career.

Also, for the wolfie: here's what I needed to do in `postcss.config.js` to make it work!

{{< highlight js "linenos=table,hl_lines=3-10,linenostart=18" >}}
/_ disable PurgeCSS during development runs _/
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

{{< image-gallery folder="img/gallery/" >}}
