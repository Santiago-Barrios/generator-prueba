const Generator = require('yeoman-generator')

module.exports = class extends Generator {
  welcome() {
    this.log('Welcome to test contador!!!')
  }

  async prompting() {
    this.answers = await this.prompt([
      {
        type: 'input',
        name: 'title',
        message: 'Your project title',
      },
    ])
  }

  writing() {
    const { title } = this.answers

    this.log(' TITLE:', title)

    this.fs.copyTpl(this.templatePath('index.html'), this.destinationPath(`${title}/index.html`), {
      title,
    })
    this.fs.copy(this.templatePath('contador.js'), this.destinationPath(`${title}/contador.js`))
    this.fs.copy(this.templatePath('style.css'), this.destinationPath(`${title}/style.css`))
  }

  end() {
    this.log(' ')
    this.log('Finished generating!')
    this.log('Go!!!')
    this.log(' ')
  }
}
