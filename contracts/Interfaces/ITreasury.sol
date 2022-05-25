// SPDX-License-Identifier: MIT
pragma solidity 0.8.7;

interface ITreasury {
    function deposit(
        address _principleTokenAddress,
        uint256 _amountPrincipleToken,
        uint256 _amountPayoutToken
    ) external;

    function valueOfToken(address _principleTokenAddress, uint256 _amount)
        external
        view
        returns (uint256 value_);
}
