import { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";

const type = "DraggableRow";

const DraggableRow = ({ index, moveRow, className, style, ...restProps }: any) => {
    const ref = useRef(null);

    const [, drop] = useDrop({
        accept: type,
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
        drop: (item: { index: string }) => {
            if (item.index !== index) {
                moveRow(item.index, index); // Swap rows when dropped
            }
        },
    });

    const [{ isDragging }, drag] = useDrag({
        type,
        item: () => ({ index }),
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });

    drag(drop(ref));

    return (
        <tr
            ref={ref}
            className={className}
            style={{
                ...style,
                opacity: isDragging ? 0 : 1,
                cursor: "move",
            }}
            {...restProps}
        />
    );
};

export default DraggableRow;
