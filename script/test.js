import path from 'path'

const path1 = 'D:\\utaware\\docs\\web\\browser\\chrome\\CR-01.md'
const path2 = 'D:\\utaware\\docs'

const r = path.relative(path2, path1).split(path.sep).join('/')

console.log(r)
