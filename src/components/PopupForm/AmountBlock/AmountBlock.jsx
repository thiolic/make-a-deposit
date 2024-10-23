import { memo } from "react";

import "./AmountBlock.scss";

export const AmountBlock = memo(
    ({
        presetAmounts = [10, 20, 30, 50, 100],
        minAmount = 21,
        maxAmount = 906,
    }) => {
        return (
            <div className="amount-block">
                <h3 className="amount-block__title">Amount</h3>
                <div className="amount-block__values">
                    <p className="amount-block__input">$ 21</p>
                    <div className="amount-block__presets">
                        {presetAmounts.map((preset) => (
                            <button
                                key={preset}
                                className="amount-block__preset"
                                onClick={() => {}}
                            >
                                + ${preset}
                            </button>
                        ))}
                    </div>
                </div>
                <p className="amount-block__range">
                    From {minAmount}.00 to {maxAmount}.00 USD at a time
                </p>
            </div>
        );
    }
);
