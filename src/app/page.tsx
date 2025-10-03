"use client";
import {
  ReactFlow,
  applyNodeChanges,
  applyEdgeChanges,
  addEdge,
  NodeChange,
  EdgeChange,
  Connection,
  Controls,
  MiniMap,
  Background,
} from "@xyflow/react";
import { useCallback, useState } from "react";
import "@xyflow/react/dist/style.css";

interface NodeModel {
  id: string;
  position: { x: number; y: number };
  data: { label: string };
}

interface EdgeModel {
  id: string;
  source: string;
  target: string;
}

const initialNodes: NodeModel[] = [
  { id: "n1", position: { x: 100, y: 0 }, data: { label: "Node 1" } },
  { id: "n2", position: { x: 0, y: 100 }, data: { label: "Node 2" } },
];
const initialEdges: EdgeModel[] = [{ id: "n1-n2", source: "n1", target: "n2" }];

export default function HomePage() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const onNodesChange = useCallback(
    (changes: NodeChange<NodeModel>[]) => setNodes((nodesSnapshot) => applyNodeChanges(changes, nodesSnapshot)),
    []
  );
  const onEdgesChange = useCallback(
    (changes: EdgeChange<EdgeModel>[]) => setEdges((edgesSnapshot) => applyEdgeChanges(changes, edgesSnapshot)),
    []
  );
  const onConnect = useCallback((params: Connection) => setEdges((edgesSnapshot) => addEdge(params, edgesSnapshot)), []);

  return (
    <>
      <h1>Welcome Home</h1>
      <div style={{ width: "100%  ", height: "600px", border: "1px solid green" }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          fitView
        >
          <Controls />
          <MiniMap />
          <Background />
        </ReactFlow>
      </div>
    </>
  );
}
