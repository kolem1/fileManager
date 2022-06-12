import { userInfo } from 'os'

export function username() {
  const { username: name } = userInfo();
  console.log(name)
}