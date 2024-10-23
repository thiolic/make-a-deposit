import { memo } from "react";

import "./HeaderButton.scss";

const HeaderButton = memo(({ children, onClick }) => {
    return (
        <button className="header-button" onClick={onClick}>
            {children}
        </button>
    );
});

export default HeaderButton;
