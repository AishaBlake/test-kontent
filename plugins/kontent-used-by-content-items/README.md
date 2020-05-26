# Kontent used by content items transformer plugin

Make a reverse-link among kontent items linked using linked element link.

## Example

Make a reverse links:

* `tag-(used_by_articles)->article` from `article-(tags)->tag`
* `category(used_by_articles)->article` from `category-(category)->tag`

> Legend:
> `SOURCE-KONTENT-TYPE-CODENAME`-(`LINKED-ITEMS-ELEMENT-CODENAME`)->`TARGET-KONTENT-TYPE-CODENAME`

gatsby-config.js

```js
module.exports = {
  // ...
  plugins: [
    // ...,
    {
      resolve: 'kontent-used-by-content-items', // local plugin
      options: {
        links: [
          {
            parentTypeCodename: 'article',
            childTypeCodename: 'tag',
            linkedElementCodename: 'tags',
            backReferenceName: 'used_by_articles',
          },
          {
            parentTypeCodename: 'article',
            childTypeCodename: 'category',
            linkedElementCodename: 'category',
            backReferenceName: 'used_by_articles',
          },
        ],
      },
    },
  ],
}
```

Developed as a [Gatsby Local Plugin](https://www.gatsbyjs.org/docs/creating-a-local-plugin/)
