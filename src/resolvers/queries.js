module.exports = {
  getExpansions: async (_, args, ctx) => {
    return await ctx.web3.getExpansions();
  },
  tokenURI: async (_, args, ctx) => {
    return await ctx.web3.tokenURI(args.expansionAddress, args.tokenID);
  },
  ownerOf: async (_, args, ctx) => {
    return await ctx.web3.ownerOf(args.expansionAddress, args.tokenID);
  },
};
