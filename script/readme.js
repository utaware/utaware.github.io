import { stat, readdir, writeFile, readFile } from 'fs/promises'

import { resolve, relative, parse, sep } from 'path'

import yaml from 'js-yaml'
import matter from 'gray-matter'
// 生成readme.md默认需要的yaml配置
const defaultOptions = {
  article: false
}
// 当前进程打开的工作目录
const cwdPath = process.cwd()
const pwdPath = process.env.pwd

// 获取相对路径
function getRelativePath (path) {
  const docsPath = resolve(cwdPath, 'docs')
  return relative(docsPath, path).split(sep).join('/')
}

class GeneratorReadme {
  constructor () {
    this.currentDirFileNames = []
    this.currentDirFiles = {}
    this.init()
  }

  async init () {
    await this.getCurrentDirFileNames()
    // if (this.hasReadmeFile) {
    //   console.log('README.MD has exist')
    //   return false
    // }
    await this.getCurrentDirFiles()
    await this.outputFile()
  }

  async isDirectory (link) {
    return await stat(link).then(s => s.isDirectory())
  }

  async getCurrentDirFileNames () {
    this.currentDirFileNames = await readdir(pwdPath)
  }

  async getCurrentDirFiles () {
    const dirs = this.currentDirFileNames
    const result = {}
    const pattern = /#\s(?<title>.*)\s/
    for (let i = 0, len = dirs.length; i < len; i++) {
      const name = dirs[i]
      const path = resolve(pwdPath, name)
      const isDir = await this.isDirectory(path)
      const relativePath = getRelativePath(path)
      let title = name
      if (!isDir) {
        const fileData = await readFile(path).then((r) => r.toString())
        const { data, content } = matter(fileData)
        title = data.title || content.match(pattern).groups.title
      }
      result[name] = { path, isDir, name, relativePath, title }
    }
    this.currentDirFiles = result
  }

  async outputFile () {
    const { finallyFileContent } = this
    const writePath = resolve(pwdPath, 'README.md')
    await writeFile(writePath, finallyFileContent)
    console.log('写入完成')
  }

  get hasReadmeFile () {
    return this.currentDirFileNames.some((fileName) => {
      return /readme.md/i.test(fileName)
    })
  }

  get hasDirector () {
    return this.currentDirFileNames.some((fileName) => {
      return !fileName.endsWith('.md')
    })
  }

  get currentPathDirs () {
    const { hasDirector } = this
    return Object.values(this.currentDirFiles).filter(({ isDir, name }) => {
      const { ext, base } = parse(name)
      const isReadme = base.toUpperCase().includes('README')
      const isMd = ext === '.md'
      const isNotReadmeMd = isMd && !isReadme
      return hasDirector ? isDir : isNotReadmeMd
    })
  }

  get currentDirName () {
    return pwdPath.split('/').at(-1)
  }

  get markdownListContent () {
    return this.currentPathDirs.map((v) => {
      const { name, title } = v
      return `* [${title}](${name})`
    }).join('\n')
  }

  get markdownTitleContent () {
    const title = this.currentDirName
    return `# ${title}`
  }

  get sidebarOptions () {
    const { hasDirector } = this
    const sidebar = hasDirector ? false : this.currentPathDirs.map((v) => {
      const { relativePath, title } = v
      return { text: title, link: relativePath }
    })
    return { sidebar }
  }

  get yamlHeaderContent () {
    const { sidebarOptions } = this
    const data = Object.assign({}, defaultOptions, sidebarOptions)
    return yaml.dump(data)
  }

  get finallyFileContent () {
    const { markdownListContent, markdownTitleContent, yamlHeaderContent } = this
    return `---\n${yamlHeaderContent}---\n\n${markdownTitleContent}\n\n${markdownListContent}`
  }

}

new GeneratorReadme()
