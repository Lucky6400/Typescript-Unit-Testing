import { useState } from "react"

const Counter: React.FC = () => {
    const [count, setCount] = useState(0);

    const increment = () => setCount(c => c + 1);
    const decrement = () => setCount(c => c - 1);

    return (
        <div>
            Count: {count}

            <button onClick={increment}>Increase</button>
            <button onClick={decrement}>Decrease</button>
        </div>
    )
}

export default Counter