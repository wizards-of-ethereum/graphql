const Web3 = require("web3");
const fs = require("fs");
const { provider, contract } = require("../config");

class W3 {
  constructor() {
    const _interface = fs.readFileSync(
      __dirname + "/contracts/Genesis.json",
      "utf-8"
    );

    this.web3 = new Web3(provider);
    this.contract = new this.web3.eth.Contract(
      JSON.parse(_interface).abiDefinition,
      contract
    );
  }

  getExpansions = async () => {
    return await this.contract.methods.getExpansions().call();
  };

  tokenURI = async (address, id) => {
    return await this.contract.methods.tokenURI(address, id).call();
  };

  ownerOf = async (address, id) => {
    return await this.contract.methods.ownerOf(address, id).call();
  };
}

module.exports = W3;
