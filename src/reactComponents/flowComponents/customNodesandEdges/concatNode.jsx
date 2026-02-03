import { Handle, Position, useReactFlow,useStore } from "reactflow";

export default function ConcatNode({ id }) {
  const { getEdges, getNode } = useReactFlow();
  const nodes = useStore((s) => s.nodes ?? []);
  const edges = getEdges();
  const incoming = edges.filter((e) => e.target === id);

  const values = incoming
    .map((e) => getNode(e.source)?.data?.label)
    .filter(Boolean);

  const result = values.join(" ");

  return (
    <div className="px-4 py-3 rounded-md bg-indigo-50 dark:bg-indigo-900 border border-indigo-300 shadow">
      <Handle type="target" position={Position.Left} />
      <div className="text-xs text-indigo-600 font-semibold">
         Output Node
      </div>
      <div className="text-sm font-bold mt-1">
        {result || "Waiting..."}
      </div>
    </div>
  );
}
