const slugify = require('slugify');

const generateSlug = (name) => slugify(name, { lower: true, strict: true });

module.exports = generateSlug;