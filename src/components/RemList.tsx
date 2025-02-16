import "./RemList.css";

interface Props {
    pxnum: number;
    min: number;
    list: number[];
}

export const RemList = ({ pxnum, min, list }: Props) => {
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
                        <button onClick={() => console.log("Clicked")}>
                            <span>{element}</span>
                            <span>rem</span>
                        </button>
                    </div>
                );
            })}
        </div>
    );
};
