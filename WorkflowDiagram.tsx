const nodes = [
  { x: 20, y: 90, label: "Purchase Request" },
  { x: 220, y: 20, label: "Deluge Script" },
  { x: 420, y: 90, label: "Zoho CRM / Books" },
  { x: 620, y: 20, label: "Dashboard" },
];

export default function WorkflowDiagram() {
  return (
    <svg
      viewBox="0 0 700 160"
      className="w-full max-w-2xl"
      role="img"
      aria-label="Diagram: a purchase request triggers a Deluge script, which updates Zoho CRM and Books, feeding a live dashboard."
    >
      <line x1="70" y1="90" x2="220" y2="30" className="node-line animate-flow" stroke="#E8A33D" strokeWidth="1.5" />
      <line x1="270" y1="30" x2="420" y2="90" className="node-line animate-flow" stroke="#E8A33D" strokeWidth="1.5" />
      <line x1="470" y1="90" x2="620" y2="30" className="node-line animate-flow" stroke="#4FD1C5" strokeWidth="1.5" />

      {nodes.map((n, i) => (
        <g key={n.label} className="pulse-node" style={{ animationDelay: `${i * 0.3}s` }}>
          <rect
            x={n.x}
            y={n.y}
            width="150"
            height="42"
            rx="4"
            fill="#171B22"
            stroke={i === 3 ? "#4FD1C5" : "#E8A33D"}
            strokeWidth="1"
          />
          <text
            x={n.x + 75}
            y={n.y + 26}
            textAnchor="middle"
            fontFamily="var(--font-mono)"
            fontSize="11"
            fill="#E7E5E0"
          >
            {n.label}
          </text>
        </g>
      ))}
    </svg>
  );
}
