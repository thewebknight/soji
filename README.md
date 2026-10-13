# SOJI.OS

An interactive career graph for Soji Jacob. The network is the homepage, navigation and storytelling layer.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build
npm run start
```

## Deploy to Vercel

1. Import this repository into Vercel.
2. Add `soji.in` and `www.soji.in` in the Vercel project domain settings.
3. Update DNS at the domain registrar using the values Vercel provides.

No database or environment variables are required.

## Edit the career graph

All graph content and relationships live in `lib/graph.ts`.

- `graphNodes` defines node labels, categories, positions, descriptions and details.
- `graphEdges` defines explicit relationships.
- `stories` defines real graph traversal paths for Trace a story.
- `categoryColors` and `categoryLabels` define category presentation.

Use evidence from the resume for professional claims. Current metrics are represented as reported outcomes, not as independently audited claims.

## Interactions

- Click a node to open context and connected nodes.
- Hover to highlight nearby relationships.
- Drag to pan and scroll to zoom.
- Search with the search control or `/`.
- Focus a domain using the domain controls.
- Use Trace a story to walk through connected graph nodes.
- Reset the graph using the SOJI.OS wordmark or the map controls.
- Use Escape to close overlays and Backspace to return from a selected node.
- On mobile, node details open as a bottom sheet.

## Notes

The graph uses React Flow with a typed, editable data model. Positions are explicit to create a designed network rather than a generic force-directed cloud.
