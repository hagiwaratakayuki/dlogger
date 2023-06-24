const fs = require('node:fs')

const {abi } = require('../artifacts/contracts/Logger.sol/Logger.json');

fs.writeFileSync('abi/Logger.json', JSON.stringify(abi), { recursive: true } );
