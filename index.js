'use strict'

var isPresent = require('is-present')
var githubRepos = require('github-repositories')
var Promise = require('pinkie-promise')

var reposToIgnore = [
  'tachyons',
  'tachyons-cli',
  'tachyons-modules',
  'tachyons-css.github.io',
  'tachyons-sass',
  'tachyons-skins',
  'tachyons-styles',
  'tachyons-queries'
]

module.exports = function tachyonsModules () {
  return githubRepos('tachyons-css').then(function (repos) {
    if (isPresent(repos)) {
      return repos.filter(isCssModule)
    } else {
      return Promise.reject(new Error('No results found for tachyons-css'))
    }
  })
}

function isCssModule (repo) {
  return reposToIgnore.indexOf(repo.name) === -1
}
