const fs = require('fs')
const versionsRegistry = require('../versions.json')

const pluginName = process.argv[0]
const pluginVersion = process.argv[1]
const commitHash = process.argv[2]

// plugin doesn't exists in the registry
if (!versionsRegistry[pluginName]) {
    versionsRegistry[pluginName] = {}
}

// add the new version
versionsRegistry[pluginName][pluginVersion] = commitHash 

// update the registry
fs.writeFileSync('./versions.json', JSON.stringify(versionsRegistry, null, 2))