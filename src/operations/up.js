import * as path from 'path'

export function up(currentPath) {
  return path.join(currentPath, '../')
}