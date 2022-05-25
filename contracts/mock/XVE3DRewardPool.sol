// SPDX-License-Identifier: MIT
pragma solidity 0.8.7;

import "../BaseRewardPool.sol";

contract XVE3DRewardPool is BaseRewardPool {
    constructor(
        address stakingToken_,
        address operator_,
        address rewardManager_
    ) BaseRewardPool(0, stakingToken_, address(0), msg.sender, rewardManager_) {}

    function addOperator(address _newOperator) public {
        operator = _newOperator;
    }
}
