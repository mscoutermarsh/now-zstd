const decompressSync = require('node-zstd').decompressSync;

module.exports = (req, res) => {
  var output = decompressSync("some zstd compressed string")
  res.end(output);
};
