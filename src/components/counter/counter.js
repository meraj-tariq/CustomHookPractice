import React, {useState } from "react";
import useDocumentTitle from "../customHook/useDocumentTitle";

const style = {
    width: 120,
    height: 40,
    fontSize: 18,
    borderRadius: 4,
}
const Counter = () => {
    const [count, setCount] = useState(0);

    // useEffect(() => {
    //     document.title = `Counter ${count}`;
    // }, [count]);

    //*** Custom hook for Title***//
    useDocumentTitle(count)

    return (
        <div>
            <h1>{count}</h1>
            <button style={style} onClick={() => setCount(count + 1)}>Click</button>
        </div>
    )
}

export default Counter;