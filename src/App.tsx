import { useEffect, useState } from "react";
import "./App.css";
import calcrem from "./utils/calcrem";
import { RemList } from "./components/RemList";

function App() {
    const [pxnum, setPxnum] = useState<number>(16);
    const [min, setMin] = useState<number>(1);
    const [max, setMax] = useState<number>(100);
    const [remArray, setRemArray] = useState<number[]>([]);

    useEffect(() => {
        setRemArray(calcrem(pxnum, min, max));
    }, [pxnum, min, max]);
    return (
        <div className="screen">
            <h1>px→rem</h1>
            <div className="header">
                <div className="inputContainer">
                    <span>rootのpx数</span>
                    <input
                        type="number"
                        value={pxnum}
                        onChange={(e) => setPxnum(Number(e.target.value))}
                        max={100}
                        min={1}
                    />
                    <p>px</p>
                    <div>
                        <span>(範囲:</span>
                        <input
                            type="number"
                            value={min}
                            min={1}
                            max={max}
                            onChange={(e) => setMin(Number(e.target.value))}
                        />
                        <span>→</span>
                        <input
                            type="number"
                            value={max}
                            min={min}
                            onChange={(e) => setMax(Number(e.target.value))}
                        />
                        <span>)</span>
                    </div>
                </div>
            </div>
            <RemList pxnum={pxnum} min={min} list={remArray} />
        </div>
    );
}

export default App;
