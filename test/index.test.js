const assert = require('assert');
const extractAllSentences = require('../src/extract-all-sentences');
const { getHtml, createUrl, writeHtmlToFile, getImageLinks } = require('../src');

describe('getHtml', () => {
  it('should get html of www.google.com', async (done) => {
    const response = await getHtml(createUrl('https://www.google.com'));
    const links = extractAllSentences(response.data.toString(), '<img', '>')
    const imgInHtml = response.data.split('<img')
    assert.equal(links.length, imgInHtml.length);
    done();
  })
})

describe('getHtml', () => {
  it('should get html of www.github.com', async (done) => {
    const response = await getHtml(createUrl('https://www.github.com'));
    const links = extractAllSentences(response.data.toString(), '<img', '>')
    const imgInHtml = response.data.split('<img')
    assert.equal(links.length, imgInHtml.length);
    done();
  })
})
