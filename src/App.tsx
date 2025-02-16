import { useEffect, useState } from "react";
import "./App.css";
import calcrem from "./utils/calcrem";
import { RemList } from "./components/RemList";

function App() {
    const [pxnum, setPxnum] = useState<number>(16);
    const [remArray, setRemArray] = useState<number[]>([]);

    useEffect(() => {
        setRemArray(calcrem(pxnum));
    }, [pxnum]);
    return (
        <div className="screen">
            <h1>px→rem</h1>
            <div className="header">
                <div className="inputContainer">
                    <input
                        type="number"
                        value={pxnum}
                        onChange={(e) => setPxnum(Number(e.target.value))}
                        max={100}
                        min={1}
                    />
                    <p>px</p>
                </div>
            </div>
            <RemList pxnum={pxnum} list={remArray} />
        </div>
    );
}

export default App;
