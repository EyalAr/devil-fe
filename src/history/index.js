if (__HASH_HISTORY__) {
  module.exports = require("./hash").default
} else {
  module.exports = require("./browser").default
}
