import { convertToPx } from "../../lib/utils";
import React, { useCallback, useState } from "react";
import ReactFlow, {
  applyEdgeChanges,
  applyNodeChanges,
  Background,
  BackgroundVariant,
  Controls,
  MiniMap,
} from "reactflow";
import "reactflow/dist/style.css";
import flowNode from "./customNodesandEdges/flowNode";
import ConcatNode from "./customNodesandEdges/concatNode";
import SmoothBezier from "./customNodesandEdges/customEdges/smoothBezier";

const NODETYPES = {
  flowNode: flowNode,
  concatNode: ConcatNode,
};

const EDGETYPES = {
  dottedBezier: SmoothBezier,
};

const initialNodes = [
  {
    id: "1",
    type: "flowNode",
    data: { headerText: "click to change the text ", label: "Welcome " },
    position: { x: 15, y: 25 },
  },
  {
    id: "2",
    type: "flowNode",
    data: { headerText: "click to change the text ", label: "to my" },

    position: { x: 17, y: 140 },
  },

  {
    id: "3",
    type: "flowNode",
    data: { headerText: "click to change the text ", label: "Flowverse" },
    position: { x: 19, y: 261 },
  },
  {
    id: "4",
    type: "concatNode",
    position: { x: 297, y: 182 },
  },
];

const initialEdges = [
  {
    id: "1-4",
    source: "1",
    target: "4",
    type: "dottedBezier",
  },
  {
    id: "2-4",
    source: "2",
    target: "4",
    type: "dottedBezier",
  },
  {
    id: "3-4",
    source: "3",
    target: "4",
    type: "dottedBezier",
  },
];
const FlowVector = () => {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  console.log("nodes", nodes);
  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    []
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    []
  );
  return (
    <div style={{ height: "100%", width: "100%" }} className="p-2 backdrop-blur-3xl">
      <ReactFlow
        nodes={nodes}
        onNodesChange={onNodesChange}
        edges={edges}
        nodeTypes={NODETYPES}
        edgeTypes={EDGETYPES}
        onEdgesChange={onEdgesChange}
        // translateExtent={[
        //   [0, 0],
        //   [Infinity, Infinity],
        // ]}
        // nodeextend={[
        //   [0, 0],
        //   [Infinity, Infinity],
        // ]}
        snapToGrid={false}
        nodesConnectable={true}
        panOnScroll={true}
        zoomOnScroll={false}
        panOnDrag={true}
        proOptions={{
          hideAttribution: true,
        }}
        fitView={true}
        minZoom={0.1}
      >
        {/* <Controls /> */}
        <Background

          className=" bg-transparent backdrop-blur-sm"

        />
        {/* <MiniMap
          position="bottom-right"
          style={{
            // bottom: "8%",
            height: convertToPx("10%"),
            width: convertToPx("15%"),
          }}
          zoomable
          pannable
          nodeColor={"#1F2937"}
          zoomStep={0.1}
          maskColor="transparent"
          className="scale-up rounded-lg border border-zinc-500"
        /> */}
      </ReactFlow>
    </div>
  );
};

export default FlowVector;
