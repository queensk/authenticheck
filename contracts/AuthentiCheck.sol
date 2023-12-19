// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

/**
 * @title ProductAuth
 * @dev Product Authentication: This contract allows for the verification of product authenticity
 * by storing product details as non-fungible tokens (NFTs) on the blockchain.
 * Customers can access and verify product history through a mobile app or website.
 */
contract ProductAuth is ERC721, Ownable, ReentrancyGuard {
    using SafeMath for uint256; 

    enum ProductStatus { CREATED, UPDATED }


    struct Product {
        bytes32 name;
        bytes32 manufacturer;
        uint256 timestamp;
        ProductStatus status;
    }

    mapping (uint256 => Product) public products;
    uint256 private tokenIdCounter;

    event ProductCreated(uint256 indexed tokenId, bytes32 name, bytes32 manufacturer, uint256 timestamp);
    event ProductUpdated(uint256 indexed tokenId, string history);

    /**
     * @dev Constructor to initialize the ProductAuth contract.
     * It sets up the ERC721 token with the name "ProductToken" and symbol "PTK".
     */
    constructor() ERC721("ProductToken", "PTK") {}

    /**
     * @dev Creates a new product represented by a unique token ID.
     * Only the contract owner can create products.
     * @param _name The name of the product.
     * @param _manufacturer The name of the manufacturer.
     */
    function createProduct(bytes32 _name, bytes32 _manufacturer) public onlyOwner nonReentrant {
        uint256 tokenId = tokenIdCounter.add(1);
        _safeMint(msg.sender, tokenId);

        products[tokenId] = Product({
            name: _name,
            manufacturer: _manufacturer,
            timestamp: block.timestamp,
            status: ProductStatus.CREATED
        });

        tokenIdCounter = tokenIdCounter.add(1);

        emit ProductCreated(tokenId, _name, _manufacturer, block.timestamp);
    }

    /**
     * @dev Updates the history/status of an existing product.
     * Only the contract owner can update product details.
     * @param _tokenId The ID of the product token to update.
     * @param _history The updated history/status of the product.
     */
    function updateProduct(uint256 _tokenId, string memory _history) public onlyOwner nonReentrant {
        require(_exists(_tokenId), "Product does not exist");
        
        products[_tokenId].status = ProductStatus.UPDATED;

        emit ProductUpdated(_tokenId, _history);
    }

    /**
     * @dev Verifies the authenticity of a product by checking its status.
     * @param _tokenId The ID of the product token to verify.
     * @return True if the product is authentic, false otherwise.
     */
    function verifyProduct(uint256 _tokenId) public view returns (bool) {
        return products[_tokenId].status == ProductStatus.UPDATED;
    }
}
