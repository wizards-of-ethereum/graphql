const { argv } = require("yargs");

module.exports = {
  port: 8000 || argv.port,
  provider: "http://localhost:8555" || argv.provider,
  contract: "0x" + argv.contract,
};
