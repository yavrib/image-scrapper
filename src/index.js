const axios = require('axios');
const fs = require('fs');
const extractSentence = require('./extract-sentence');
const extractAllSentences = require('./extract-all-sentences');
const replace = require('./replace');

const root = `${__dirname}/..`;

let url = '';

const createUrl = (newUrl) => {
  url = newUrl;
  return url;
}

const getUrlAsFileName = () => {
  return getLast(getLast(url, 'http://'), 'https://');
}

const getFirst = (string, splitCharacters) => string.split(splitCharacters)[0];

const getLast = (string, splitCharacters) => string.split(splitCharacters)[string.split(splitCharacters).length - 1];

const getLocation = (fullUrl) => getFirst(getFirst(getFirst(fullUrl, 'http://'), 'https://'), '/');

const createRequest = (url, requestOptions = {}, headerOptions = {}) => ({
  'Origin': getLocation(url),
  method: 'GET',
  ...headerOptions,
  ...requestOptions
});

const getHtml = (url, requestOptions, headerOptions, requestLibrary = axios) => {
  return requestLibrary({
    ...createRequest(url, requestOptions, headerOptions),
    url: url
  }).then(response => response).catch(err => console.log(err));
};

const writeHtmlToFile = (body, path = `${root}/data`, filename = getUrlAsFileName()) => {
  if(!fs.existsSync(path)) fs.mkdir(folder, (err) => err ? console.log('mkdir', err) : nul);

  const links = extractAllSentences(
    body,
    '<img',
    '>'
  ).map(eachLink =>
    replace(eachLink, 'src="/', `src="${url}/`)
  );

  fs.writeFile(
    `${path}/${filename}.html`,
    links,
    err => console.log('fswrite', err)
  );
}

const getImageLinks = (body, url) => extractAllSentences(
  body,
  '<img',
  '>'
).map(eachLink =>
  replace(eachLink, 'src="/', `src="${url}/`)
);

module.exports = {
  getHtml,
  createUrl,
  writeHtmlToFile,
  getImageLinks
}
