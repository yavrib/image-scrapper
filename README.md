# Image Scrapper
A server-side library-like js project to extract images from a web page.

## Usage

```javascript
const { getHtml, createUrl, getImageLinks } = require('image-scrapper');
const url = 'https://www.google.com';
const htmlBody = await getHtml(createUrl(url));

const links = getImageLinks(htmlBody, url);

console.log(links);
```
