// SPDX-License-Identifier: MIT
pragma solidity 0.8.7;

interface IBondFactoryStorage {
    function pushBond(
        address _payoutToken,
        address _principleToken,
        address _customTreasury,
        address _customBond,
        address _initialOwner,
        uint256[] calldata _tierCeilings,
        uint256[] calldata _fees
    ) external returns (address _bond);
}
