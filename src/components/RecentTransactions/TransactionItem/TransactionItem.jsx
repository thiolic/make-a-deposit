import clsx from "clsx";
import { memo } from "react";

import "./TransactionItem.scss";

export const TransactionItem = memo(({ imageSrc, title, subtitle, status }) => {
    const statusClass = clsx({
        "transaction-item__title--processing": status === "Processing",
        "transaction-item__title--active": status === "Active",
        "transaction-item__title--performed": status === "Performed",
    });

    return (
        <div className="transaction-item">
            {imageSrc && (
                <div className="transaction-item__image">
                    <img src={imageSrc} alt="" />
                </div>
            )}
            <div className="transaction-item__content">
                <p className={`transaction-item__title ${statusClass}`}>
                    {title}
                </p>
                <p className="transaction-item__subtitle">{subtitle}</p>
            </div>
        </div>
    );
});
