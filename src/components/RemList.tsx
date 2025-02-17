import { useState } from "react";
import "./RemList.css";

interface Props {
    pxnum: number;
    min: number;
    list: number[];
}

export const RemList = ({ pxnum, min, list }: Props) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const handleCopyText = (rem: number) => {
        if (!navigator.clipboard) {
            alert("sorry, this browser can not copy text.");
            return;
        }

        navigator.clipboard.writeText(String(rem)).then(
            () => {
                setIsOpen(true);
                setTimeout(() => setIsOpen(false), 1000);
            },
            () => {
                alert("failed to copy");
            }
        );
    };

    return (
        <div className="remlist">
            {list.map((element, index) => {
                return (
                    <div
                        key={index}
                        className="listelem"
                        style={{
                            backgroundColor: index + 1 === pxnum ? "red" : "",
                        }}
                    >
                        <span>{index + min}px</span>
                        <span>:</span>
                        <button onClick={() => handleCopyText(element)}>
                            <span>{element}</span>
                            <span>rem</span>
                        </button>
                    </div>
                );
            })}
            <div
                className="modal"
                style={{
                    display: isOpen === true ? "block" : "none",
                }}
            >
                <p>コピー！！</p>
            </div>
        </div>
    );
};
