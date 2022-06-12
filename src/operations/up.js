import { join } from 'path'

export function up(currentPath) {
  return join(currentPath, '../')
}