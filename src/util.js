const { breakpoints } = require('./constants')

const is = n => n !== undefined && n !== null
const num = n => typeof n === 'number' && !isNaN(n)
const px = n => num(n) ? n + 'px' : n
const neg = n => n < 0
const arr = n => Array.isArray(n) ? n : [ n ]
const idx = (p, obj) => p.reduce((a, b) => (a && a[b]) ? a[b] : null, obj)

const mq = n => `@media screen and (min-width: ${n}em)`
const breaks = props => [ null, ...(idx([ 'theme', 'breakpoints' ], props) || breakpoints).map(mq) ]

const dec = props => val => arr(props)
  .map(prop => prop + ': ' + val + ';')
  .join('')
const media = bp => (d, i) => bp[i] ? `${bp[i]}{${d}}` : d

module.exports = {
  is,
  px,
  neg,
  num,
  arr,
  idx,
  breaks,
  media,
  dec,
}
