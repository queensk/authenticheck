const ProductAuth = artifacts.require("ProductAuth");

module.exports = async function (deployer) {
  await deployer.deploy(ProductAuth);
};
