export function uniq() {
  return require('uuid')
    .v4()
    .replace(/-/g, '')
}
