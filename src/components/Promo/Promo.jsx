import { memo, useState } from "react";

import { Button } from "~/components/UI";

import { CheckIcon } from "~/icons";

import "./Promo.scss";

export const Promo = memo(
    ({
        title = "Have a promo code?",
        teaser = "Enter promo code here. It will activate a special bonus!",
    }) => {
        const [code, setCode] = useState("");

        return (
            <div className="promo">
                <h3 className="title-h3">{title}</h3>
                {teaser && <p className="text-help">{teaser}</p>}
                <form action="#" className="promo__form">
                    <div className="promo__field-wrapper">
                        <input
                            type="text"
                            value={code}
                            onChange={(e) => setCode(e.target.value)}
                            className="promo__field"
                        />
                        <span className="promo__icon">
                            <CheckIcon />
                        </span>
                    </div>
                    <Button type="submit" disabled={!code}>
                        Apply
                    </Button>
                </form>
            </div>
        );
    }
);
