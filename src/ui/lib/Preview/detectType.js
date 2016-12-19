const DEFAULT_TYPE = "iframe"

const REGEXPS = {
  "youtube": [
    /^https?:\/\/(www\.)?youtube\.com\/watch\?v=.+(\?.*)?$/,
    /^https?:\/\/(www\.)?youtu\.be\/.+(\?.*)?$/
  ],
  "image": [
    /^https?:\/\/.+\.(jpg|jpeg|gif|png|webp)(\?.*)?$/
  ]
}

const TYPES = Object.keys(REGEXPS)

export default url => {
  for (let i = 0 ; i < TYPES.length ; i++) {
    const type = TYPES[i]
    for (let j = 0 ; j < REGEXPS[type].length ; j++) {
      const re = REGEXPS[type][j]
      if (re.test(url)) return type
    }
  }
  return DEFAULT_TYPE
}
