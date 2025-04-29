import { useState, useEffect } from "react";

function Counter() {
    const [count, setCount] = useState(0);

  // useEffect to check if count is divisible by 10
    useEffect(() => {
        if (count !== 0 && count % 10 === 0) {
            alert(`${count} is divisible by 10`);
        }
    }, [count]);

    const increment = () => {
        setCount((prevCount) => prevCount + 1);
    };

    const decrement = () => {
        setCount((prevCount) => prevCount - 1);
    };

    const reset = () => {
        setCount(0);
    };

    return (
        <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md ">
        <h2 className="text-2xl font-bold mb-6 text-center text-black">Counter Demo</h2>
        <div className="flex justify-center mb-6">
            <div className="text-6xl font-bold text-black">{count}</div>
        </div>

        <div className="flex justify-center gap-4">
            <button
            onClick={decrement}
            className="bg-blue-200 hover:bg-blue-300 text-blue-800 py-2 px-4 rounded-lg text-xl font-bold transition-colors"
            >
            -
            </button>

            <button
            onClick={reset}
            className="bg-blue-200 hover:bg-blue-300 text-blue-800 py-2 px-4 rounded-lg font-medium transition-colors"
            >
            Reset
            </button>

            <button
            onClick={increment}
            className="bg-blue-200 hover:bg-blue-300 text-blue-800 py-2 px-4 rounded-lg text-xl font-bold transition-colors"
            >
            +
            </button>
        </div>
        </div>
    );
}

export default Counter;
