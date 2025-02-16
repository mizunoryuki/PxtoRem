import "./RemList.css";

interface Props {
    pxnum: number;
    list: number[];
}

export const RemList = ({ pxnum, list }: Props) => {
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
                        <span>{index + 1}px</span>
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
