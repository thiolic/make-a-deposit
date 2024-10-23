import { memo } from "react";

import { ArrowIcon, PlusIcon } from "~/icons";

import "./HeaderBalance.scss";

const HeaderBalance = memo(({ balance, percentage, onAddClick }) => {
    return (
        <div className="header-balance">
            <div className="header-balance__text">
                {balance} $ <span>{percentage}%</span>
                <ArrowIcon />
            </div>
            <button className="header-balance__button" onClick={onAddClick}>
                <PlusIcon />
            </button>
        </div>
    );
});

export default HeaderBalance;
