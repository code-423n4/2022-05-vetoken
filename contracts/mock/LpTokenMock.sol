// SPDX-License-Identifier: MIT
pragma solidity 0.8.7;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

contract LpTokenMock is ERC20 {
    using SafeMath for uint256;

    constructor() ERC20("LpTokenMock", "LP") {}

    function mint(address _to, uint256 _amount) external {
        _mint(_to, _amount);
    }
}
