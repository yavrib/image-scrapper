module.exports = (string, query, replace) => {
  return string.split(query).join(replace);
}
