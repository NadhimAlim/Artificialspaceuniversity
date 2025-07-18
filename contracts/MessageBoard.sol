// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

// contracts/MessageBoard.sol

contract MessageBoard {
    string public message;

    function setMessage(string memory newMessage) public {
        message = newMessage;
    }

    function getMessage() public view returns (string memory) {
        return message;
    }
}
