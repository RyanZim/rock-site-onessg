module.exports={
  use: ['postcss-import', 'postcss-url', 'postcss-cssnext'],
  'postcss-url': {
    url: 'copy',
    assetsPath: 'assets',
    useHash: true
  }
}
