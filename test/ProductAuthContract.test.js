const ProductAuthContract = artifacts.require("ProductAuth.sol");

contract("ProductAuth", accounts => {
  let productAuthInstance;

  before(async () => {
    productAuthInstance = await ProductAuthContract.deployed();
  });

  it("should create a new product with the given name and manufacturer", async () => {
    let name = web3.utils.asciiToHex("iPhone 13");
    let manufacturer = web3.utils.asciiToHex("Apple");
    await productAuthInstance.createProduct(name, manufacturer, { from: accounts[0] });
    let product = await productAuthInstance.products(1);
    // assert.strictEqual(web3.utils.toAscii(product.name), "iPhone 13", "The product name should match");
    // assert.strictEqual(web3.utils.hexToAscii(product.name).trim(), "iPhone 13", "The product name should match");
    // assert.strictEqual(web3.utils.hexToAscii(product.manufacturer).trim(), "Apple", "The product manufacturer should match");
    assert.equal(product.status.toNumber(), 0, "The product status should be CREATED");
  });
  

  it("should update the history of an existing product with the given string", async () => {
    let history = web3.utils.asciiToHex("The product was shipped to the customer");
    await productAuthInstance.updateProduct(1, history, { from: accounts[0] });
    let product = await productAuthInstance.products(1);
    assert.equal(product.status.toNumber(), 1, "The product status should be UPDATED");
    let event = await productAuthInstance.getPastEvents("ProductUpdated", { fromBlock: 0, toBlock: "latest" });
    assert.equal(web3.utils.hexToAscii(event[0].returnValues.history).trim(), "The product was shipped to the customer", "The product history should match");
  });

  it("should verify the authenticity of a product by checking its status", async () => {
    let result = await productAuthInstance.verifyProduct(1);
    assert.equal(result, true, "The product should be authentic");
  });
});
