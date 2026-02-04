import React, { useCallback, useEffect, useMemo, useState } from "react";
import ReactFlow, {
  applyEdgeChanges,
  applyNodeChanges,
  Background,
  useReactFlow,
  ReactFlowProvider,
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

const desktopNodes = [
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

const mobileNodes = [
  {
    id: "1",
    type: "flowNode",
    data: { headerText: "click to change the text ", label: "Welcome " },
    position: { x: 20, y: 20 },
  },
  {
    id: "2",
    type: "flowNode",
    data: { headerText: "click to change the text ", label: "to my" },
    position: { x: 20, y: 120 },
  },
  {
    id: "3",
    type: "flowNode",
    data: { headerText: "click to change the text ", label: "Flowverse" },
    position: { x: 20, y: 220 },
  },
  {
    id: "4",
    type: "concatNode",
    position: { x: 220, y: 150 },
  },
];

const initialEdges = [
  { id: "1-4", source: "1", target: "4", type: "dottedBezier" },
  { id: "2-4", source: "2", target: "4", type: "dottedBezier" },
  { id: "3-4", source: "3", target: "4", type: "dottedBezier" },
];

function FlowVectorInner() {
  const [isMobile, setIsMobile] = useState(false);
  const [nodes, setNodes] = useState(desktopNodes);
  const [edges, setEdges] = useState(initialEdges);

  const { fitView } = useReactFlow();

  // detect screen
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // swap layout when mobile changes
  useEffect(() => {
    setNodes(isMobile ? mobileNodes : desktopNodes);

    // fit after layout update
    requestAnimationFrame(() => {
      fitView({ padding: 0.25, duration: 500 });
    });
  }, [isMobile, fitView]);

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [],
  );

  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [],
  );

  return (
    <div
      style={{ height: "100%", width: "100%" }}
      className="p-2 backdrop-blur-3xl"
    >
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={NODETYPES}
        edgeTypes={EDGETYPES}
        minZoom={0.2}
        maxZoom={1.2}
        zoomOnScroll={false}
        panOnScroll
        panOnDrag
        proOptions={{ hideAttribution: true }}
      >
        <Background className="bg-transparent backdrop-blur-sm" />
      </ReactFlow>
    </div>
  );
}

export default function FlowVector() {
  return (
    <ReactFlowProvider>
      <FlowVectorInner />
    </ReactFlowProvider>
  );
}
