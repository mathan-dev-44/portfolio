import { memo, useState } from "react";
import { Handle, Position, useReactFlow } from "reactflow";

const FlowNode = ({ id, data }) => {
  const { setNodes } = useReactFlow();
  const [editMode, setEditMode] = useState(false);

  const updateLabel = (value) => {
    setNodes((nds) =>
      nds.map((n) =>
        n.id === id ? { ...n, data: { ...n.data, label: value } } : n
      )
    );
  };

  return (
    <div className=" rounded-md w-full bg-white dark:bg-zinc-900 border shadow">
      {!editMode ? (
        <div className="flex w-full flex-col gap-2 justify-between">

         <div
          className="text-sm font-medium cursor-pointer w-full border-b p-1 border-zinc-300 dark:border-zinc-600 "
          onClick={() => setEditMode(true)}
        >
          {data.headerText}
        </div>
        <div
          className="text-sm p-2 text-center font-medium cursor-pointer line-clamp-2 w-full break-words"
          onClick={() => setEditMode(true)}
        >
          {data.label}
        </div>
        </div>
      ) : (
        <input
          autoFocus
          className="text-sm font-medium bg-transparent outline-none"
          value={data.label}
          onChange={(e) => updateLabel(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && setEditMode(false)}
          onBlur={() => setEditMode(false)}
        />
      )}

      <Handle type="source" position={Position.Right} />
    </div>
  );
};

export default memo(FlowNode);
