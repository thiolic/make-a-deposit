import { memo } from "react";

import "./Button.scss";

export const Button = memo(
    ({
        children,
        icon,
        variant = "default",
        onClick,
        type = "button",
        disabled,
    }) => {
        return (
            <button
                className={`button button--${variant}`}
                onClick={onClick}
                type={type}
                disabled={disabled}
            >
                {icon && <span className="icon">{icon}</span>}
                {children && <span className="text">{children}</span>}
            </button>
        );
    }
);
