"use client";

/* Core */
import { useState } from "react";

/* Instruments */
import {
  useSelector,
  selectCount,
  useDispatch,
  decrement,
  increment,
  incrementByAmount,
  incrementIfOddAsync,
} from "@/lib/redux";
import styles from "./counter.module.css";

export const Counter = () => {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  // Local state
  const [incrementAmount, setIncrementAmount] = useState<number>(0);
  const onAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const amtVal: number = Number(event?.target?.value);
    if (!isNaN(amtVal)) setIncrementAmount(amtVal);
  };
  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          placeholder="0"
          value={incrementAmount}
          onChange={onAmountChange}
        />
        <button
          className={styles.button}
          disabled={incrementAmount <= 0}
          onClick={() => {
            dispatch(incrementByAmount(incrementAmount));
            setIncrementAmount(0);
          }}
        >
          Add Amount
        </button>
        <button
          className={styles.button}
          disabled={incrementAmount <= 0}
          onClick={() => {
            dispatch(incrementIfOddAsync(incrementAmount, setIncrementAmount));
          }}
        >
          Add If Odd
        </button>
      </div>
    </div>
  );
};
