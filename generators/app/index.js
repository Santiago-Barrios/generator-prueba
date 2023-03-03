const Generator = require('yeoman-generator')

module.exports = class extends Generator {
  welcome() {
    this.log('Welcome to test contador perras!!!')
  }

  writing() {
    this.fs.copy(this.templatePath('index.html'), this.destinationPath('index.html'))
    this.fs.copy(this.templatePath('contador.js'), this.destinationPath('contador.js'))
    this.fs.copy(this.templatePath('style.css'), this.destinationPath('style.css'))
  }

  end() {
    this.log(' ')
    this.log('Finished generating!')
    this.log('Go Gonorreas!!!')
    this.log(' ')
  }
}
