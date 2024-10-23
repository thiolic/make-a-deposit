import { clsx } from "clsx";
import { memo } from "react";

import "./PaymentOptions.scss";

export const PaymentOptions = memo(({ selectPayment, title, data }) => {
    return (
        <div className="payment-options">
            <p className="payment-options__category">{title}</p>
            <div className="payment-options__list">
                {data.map((payment) => (
                    <button
                        key={payment.name}
                        className="payment-options__tile"
                        onClick={() => selectPayment(payment.type)}
                        aria-label={`Select ${payment.name} payment option`}
                    >
                        {payment.tag && (
                            <span
                                className={clsx(
                                    "payment-options__tile-tag",
                                    payment.tag &&
                                        `payment-options__tile-tag--${payment.tag}`
                                )}
                            >
                                {payment.tag}
                            </span>
                        )}
                        <img
                            src={payment.src}
                            alt={`${payment.name} payment option`}
                        />
                        <span className="payment-options__tile-name">
                            {payment.name}
                        </span>
                        <span className="payment-options__tile-comission">
                            Commission {payment.fee}
                        </span>
                    </button>
                ))}
            </div>
        </div>
    );
});
