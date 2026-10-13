"use client";

import {
  Background, BackgroundVariant, Controls, MiniMap, ReactFlow, ReactFlowProvider,
  useEdgesState, useNodesState, useReactFlow, type Node, type NodeProps
} from "@xyflow/react";
import { Search, X, ArrowLeft, RotateCcw, Mail, Linkedin, Compass, Route, ChevronRight, ArrowUpRight, Command, Plus, Minus, LocateFixed } from "lucide-react";
import { useCallback, useEffect, useMemo, useState } from "react";
import { categoryColors, categoryLabels, graphEdges, graphNodes, stories, type Category, type GraphNodeData } from "@/lib/graph";

type TopicNode = Node<GraphNodeData>;
function Topic({ data, selected }: NodeProps<TopicNode>) {
  const category = data.category as Category;
  return <div className={`topic-node category-${category} ${selected ? "is-selected" : ""}`}><span className="node-orbit" /><span className="node-eyebrow">{data.eyebrow}</span><span className="node-label">{data.label}</span>{data.evidence && <span className="node-evidence">{data.evidence}</span>}</div>;
}
const nodeTypes = { topic: Topic };

function NetworkExperience() {
  const [nodes,setNodes,onNodesChange] = useNodesState<TopicNode>(graphNodes);
  const [edges,setEdges,onEdgesChange] = useEdgesState(graphEdges);
  const [selectedId,setSelectedId] = useState<string|null>(null);
  const [hoveredId,setHoveredId] = useState<string|null>(null);
  const [query,setQuery] = useState("");
  const [searchOpen,setSearchOpen] = useState(false);
  const [clusterOpen,setClusterOpen] = useState(false);
  const [storyId,setStoryId] = useState<string|null>(null);
  const [storyIndex,setStoryIndex] = useState(0);
  const [history,setHistory] = useState<string[]>([]);
  const [mobileInfoOpen,setMobileInfoOpen] = useState(false);
  const {fitView,setCenter,zoomIn,zoomOut} = useReactFlow();

  const selected = useMemo(()=>graphNodes.find(node=>node.id===selectedId)??null,[selectedId]);
  const story = stories.find(item=>item.id===storyId)??null;
  const storyStep = story?.steps[storyIndex]??null;
  const searchResults = useMemo(()=>{
    const q=query.trim().toLowerCase();
    if(!q) return [];
    return graphNodes.filter(node=>{
      const d=node.data;
      return `${d.label} ${d.eyebrow} ${d.description} ${d.category} ${d.details.join(" ")}`.toLowerCase().includes(q);
    }).slice(0,7);
  },[query]);

  const connectedIds = useMemo(()=>{
    if(!selectedId&&!hoveredId&&!storyStep) return new Set<string>();
    const focusId=storyStep?.nodeId??selectedId??hoveredId;
    const found=new Set<string>([focusId!]);
    graphEdges.forEach(edge=>{
      if(edge.source===focusId) found.add(String(edge.target));
      if(edge.target===focusId) found.add(String(edge.source));
    });
    if(story&&storyStep) story.steps.forEach(step=>found.add(step.nodeId));
    return found;
  },[selectedId,hoveredId,story,storyStep]);

  useEffect(()=>{
    setNodes(current=>current.map(node=>{
      const activeFocus=storyStep?.nodeId??selectedId??hoveredId;
      const hasFocus=Boolean(activeFocus);
      const inPath=story?story.steps.some(step=>step.nodeId===node.id):false;
      return {...node,selected:node.id===selectedId,className:[
        node.id===activeFocus?"focus-node":"",
        hasFocus&&!connectedIds.has(node.id)?"dim-node":"",
        story&&inPath?"story-node":""
      ].filter(Boolean).join(" ")};
    }));
    setEdges(current=>current.map(edge=>{
      const activeFocus=storyStep?.nodeId??selectedId??hoveredId;
      const isDirect=Boolean(activeFocus)&&(edge.source===activeFocus||edge.target===activeFocus);
      const inStory=story?story.steps.some((step,index)=>index<storyIndex&&(step.nodeId===edge.source||step.nodeId===edge.target)):false;
      return {...edge,animated:isDirect||inStory,style:{...edge.style,stroke:isDirect?"var(--edge-active)":inStory?"var(--lime)":"var(--edge)",strokeWidth:isDirect?2:inStory?1.8:1.1,opacity:activeFocus&&!isDirect&&!inStory?0.12:0.9}};
    }));
  },[selectedId,hoveredId,story,storyIndex,storyStep,connectedIds,setNodes,setEdges]);

  const focusNode=useCallback((id:string,pushHistory=true)=>{
    const node=graphNodes.find(item=>item.id===id);
    if(!node) return;
    if(pushHistory&&selectedId&&selectedId!==id) setHistory(old=>[...old,selectedId]);
    setSelectedId(id);setMobileInfoOpen(true);setSearchOpen(false);setQuery("");
    window.setTimeout(()=>setCenter(node.position.x+95,node.position.y+30,{zoom:1.05,duration:650}),20);
  },[selectedId,setCenter]);

  const goBack=useCallback(()=>{
    const previous=history[history.length-1];
    if(previous){setHistory(old=>old.slice(0,-1));focusNode(previous,false);}
    else{setSelectedId(null);setMobileInfoOpen(false);fitView({padding:0.2,duration:650});}
  },[history,focusNode,fitView]);

  const reset=useCallback(()=>{
    setSelectedId(null);setHoveredId(null);setStoryId(null);setStoryIndex(0);setHistory([]);setMobileInfoOpen(false);
    fitView({padding:0.2,duration:750});
  },[fitView]);

  const focusCategory=useCallback((category:Category)=>{
    const subset=graphNodes.filter(node=>node.data.category===category);
    if(!subset.length) return;
    setSelectedId(null);setStoryId(null);
    fitView({nodes:subset.map(node=>({id:node.id})),padding:0.55,duration:700});
    setClusterOpen(false);
  },[fitView]);

  const startStory=(id:string)=>{
    const chosen=stories.find(item=>item.id===id);
    if(!chosen) return;
    setStoryId(id);setStoryIndex(0);setSelectedId(null);setHistory([]);setMobileInfoOpen(false);
    const node=graphNodes.find(item=>item.id===chosen.steps[0].nodeId);
    if(node) setCenter(node.position.x+95,node.position.y+30,{zoom:1.1,duration:650});
  };
  const advanceStory=()=>{
    if(!story) return;
    if(storyIndex<story.steps.length-1){
      const nextIndex=storyIndex+1;setStoryIndex(nextIndex);
      const node=graphNodes.find(item=>item.id===story.steps[nextIndex].nodeId);
      if(node) setCenter(node.position.x+95,node.position.y+30,{zoom:1.1,duration:600});
    }else{setStoryId(null);setStoryIndex(0);fitView({padding:0.2,duration:650});}
  };

  useEffect(()=>{
    const onKeyDown=(event:KeyboardEvent)=>{
      const target=event.target as HTMLElement;
      if((event.key==="/"||(event.key==="k"&&(event.metaKey||event.ctrlKey)))&&!["INPUT","TEXTAREA"].includes(target.tagName)){
        event.preventDefault();setSearchOpen(true);window.setTimeout(()=>document.getElementById("graph-search")?.focus(),20);
      }
      if(event.key==="Escape"){setSearchOpen(false);setClusterOpen(false);setStoryId(null);setMobileInfoOpen(false);}
      if(event.key==="Backspace"&&!["INPUT","TEXTAREA"].includes(target.tagName)) goBack();
    };
    window.addEventListener("keydown",onKeyDown);
    return ()=>window.removeEventListener("keydown",onKeyDown);
  },[goBack]);

  const selectedCategory=selected?.data.category as Category|undefined;
  const related=selected?graphEdges.filter(edge=>edge.source===selected.id||edge.target===selected.id).map(edge=>{
    const id=edge.source===selected.id?String(edge.target):String(edge.source);
    return graphNodes.find(node=>node.id===id);
  }).filter((node):node is TopicNode=>Boolean(node)).slice(0,8):[];

  return <main className="os-shell">
    <div className="topbar">
      <button className="wordmark" onClick={reset} aria-label="Reset to full network"><span className="wordmark-symbol">S<span>.</span></span><span className="wordmark-copy"><strong>SOJI.OS</strong><small>CAREER GRAPH / 001</small></span></button>
      <div className="topbar-center"><span className="status-dot"/> LIVE KNOWLEDGE MAP <span className="topbar-divider">/</span> PRODUCT SYSTEMS</div>
      <div className="topbar-actions"><button className="icon-button" onClick={()=>setSearchOpen(true)} aria-label="Search the network"><Search size={16}/><span>Search</span><kbd>/</kbd></button><a className="contact-link" href="mailto:soji89@gmail.com"><span>Get in touch</span><ArrowUpRight size={14}/></a></div>
    </div>

    <section className="canvas-shell" aria-label="Interactive professional network">
      <div className="canvas-topline">
        <div className="identity-stamp"><span className="stamp-index">FIG. 01 / 05</span><span className="stamp-name">SOJI JACOB</span><span className="stamp-role">PRODUCT / FINANCIAL SYSTEMS / AI</span></div>
        <div className="canvas-metrics"><span><b>13+</b> YEARS</span><i/><span><b>05</b> DOMAINS</span><i/><span><b>{graphNodes.length.toString().padStart(2,"0")}</b> NODES</span></div>
      </div>
      <div className="map-copy"><p className="eyebrow">A CAREER, CONNECTED</p><h1>I make complex<br/>systems work <em>better.</em></h1><p className="map-instruction"><span className="instruction-pulse"/> Select a node. Follow the connections.</p></div>
      <div className="cluster-dock"><span className="dock-label">FOCUS BY DOMAIN</span>
        <button onClick={()=>focusCategory("product")}><i style={{background:categoryColors.product}}/>Product</button>
        <button onClick={()=>focusCategory("finance")}><i style={{background:categoryColors.finance}}/>Finance</button>
        <button onClick={()=>focusCategory("ai")}><i style={{background:categoryColors.ai}}/>AI systems</button>
        <button onClick={()=>focusCategory("experience")}><i style={{background:categoryColors.experience}}/>Experience</button>
        <button onClick={()=>focusCategory("evidence")}><i style={{background:categoryColors.evidence}}/>Outcomes</button>
      </div>
      <div className="map-tools"><button className="map-tool" onClick={()=>zoomIn({duration:220})} aria-label="Zoom in"><Plus size={15}/></button><button className="map-tool" onClick={()=>zoomOut({duration:220})} aria-label="Zoom out"><Minus size={15}/></button><span className="tool-rule"/><button className="map-tool" onClick={reset} aria-label="Reset map"><LocateFixed size={15}/></button><button className="map-tool" onClick={()=>fitView({padding:0.2,duration:650})} aria-label="Fit all nodes"><RotateCcw size={15}/></button></div>

      <ReactFlow nodes={nodes} edges={edges} onNodesChange={onNodesChange} onEdgesChange={onEdgesChange} nodeTypes={nodeTypes}
        onNodeClick={(_,node)=>focusNode(node.id)} onNodeMouseEnter={(_,node)=>setHoveredId(node.id)} onNodeMouseLeave={()=>setHoveredId(null)}
        fitView fitViewOptions={{padding:0.2}} minZoom={0.15} maxZoom={1.7} nodesDraggable={false} nodesConnectable={false} elementsSelectable
        proOptions={{hideAttribution:true}} defaultEdgeOptions={{type:"smoothstep"}} aria-label="Career graph. Use tab to navigate nodes and enter to open details.">
        <Background variant={BackgroundVariant.Dots} gap={24} size={1} color="#252a2f"/>
        <MiniMap pannable zoomable nodeColor={node=>categoryColors[(node.data as GraphNodeData).category]??"#888"} maskColor="rgba(8, 10, 12, 0.78)" className="graph-minimap"/>
        <Controls showInteractive={false} position="bottom-left"/>
      </ReactFlow>
      <div className="canvas-footer"><span><span className="footer-cross">✳</span> AN EXPLORABLE RECORD OF WORK</span><span>DRAG TO PAN <i/> SCROLL TO ZOOM <i/> CLICK TO OPEN</span></div>
    </section>

    <div className="bottom-dock">
      <button className={`dock-action ${storyId?"active":""}`} onClick={()=>setClusterOpen(v=>!v)}><Compass size={16}/><span>Explore domains</span><ChevronRight size={14}/></button>
      <button className={`dock-action story-action ${storyId?"active":""}`} onClick={()=>setClusterOpen(v=>!v)}><Route size={16}/><span>Trace a story</span><span className="action-new">3 PATHS</span></button>
      <div className="dock-spacer"/><span className="dock-hint"><Command size={12}/> + K TO EXPLORE <span className="hint-separator">/</span> ESC TO CLOSE</span>
      <a className="dock-link" href="https://www.linkedin.com/in/soji-jacob/" target="_blank" rel="noreferrer" aria-label="Soji Jacob on LinkedIn"><Linkedin size={15}/></a>
    </div>

    {clusterOpen&&<div className="explore-menu"><div className="menu-head"><div><span className="eyebrow">CHOOSE YOUR ROUTE</span><h2>Explore the system</h2></div><button className="close-button" onClick={()=>setClusterOpen(false)} aria-label="Close menu"><X size={17}/></button></div>
      <p className="menu-intro">Choose a domain to focus the map, or follow a connected story from start to outcome.</p><div className="menu-section-label">DOMAINS</div>
      <div className="domain-grid">{(["product","finance","ai","experience","evidence"] as Category[]).map(category=><button key={category} onClick={()=>focusCategory(category)}><i style={{background:categoryColors[category]}}/><span>{categoryLabels[category]}</span><ChevronRight size={14}/></button>)}</div>
      <div className="menu-section-label">TRACE A STORY</div>
      {stories.map((item,index)=><button className="story-choice" key={item.id} onClick={()=>{startStory(item.id);setClusterOpen(false);}}><span className="story-choice-index">0{index+1}</span><span className="story-choice-copy"><strong>{item.title}</strong><small>{item.subtitle}</small></span><ArrowUpRight size={15}/></button>)}
    </div>}

    {searchOpen&&<div className="search-scrim" onMouseDown={event=>{if(event.target===event.currentTarget)setSearchOpen(false);}}><div className="search-modal">
      <div className="search-input-row"><Search size={19}/><input id="graph-search" autoFocus value={query} onChange={event=>setQuery(event.target.value)} placeholder="Search the network..." aria-label="Search node titles and descriptions"/><kbd>ESC</kbd><button className="close-button" onClick={()=>setSearchOpen(false)} aria-label="Close search"><X size={16}/></button></div>
      <div className="search-results">{!query.trim()?<div className="search-empty"><span className="search-empty-mark">⌘</span><p>Find a skill, platform, project or outcome.</p><small>Try “Odessa”, “migration”, “AI” or “delivery”.</small></div>:searchResults.length?searchResults.map(node=><button key={node.id} className="search-result" onClick={()=>focusNode(node.id)}><span className="result-dot" style={{background:categoryColors[node.data.category]}}/><span className="result-copy"><strong>{node.data.label}</strong><small>{categoryLabels[node.data.category]} · {node.data.eyebrow}</small></span><ArrowUpRight size={15}/></button>):<div className="search-empty"><p>No matching nodes.</p><small>Try a different keyword.</small></div>}</div>
      <div className="search-foot"><span>SEARCH TITLES, DETAILS AND DOMAINS</span><span>ESC CLOSES</span></div>
    </div></div>}

    {selected&&<aside className={`detail-panel ${mobileInfoOpen?"mobile-open":""}`} aria-label={`${selected.data.label} details`}>
      <div className="panel-top"><button onClick={goBack} className="back-button"><ArrowLeft size={15}/><span>Back</span></button><span className="panel-index">NODE / {selected.id.toUpperCase()}</span><button className="close-button" onClick={()=>{setSelectedId(null);setMobileInfoOpen(false);}} aria-label="Close detail panel"><X size={17}/></button></div>
      <div className="panel-scroll"><span className="panel-category"><i style={{background:categoryColors[selectedCategory??"core"]}}/>{categoryLabels[selectedCategory??"core"]}</span>
        <h2>{selected.data.label}</h2><p className="panel-description">{selected.data.description}</p>
        {selected.data.evidence&&<div className="evidence-callout"><span>DOCUMENTED OUTCOME</span><strong>{selected.data.evidence}</strong></div>}
        <div className="panel-rule"/><span className="panel-section-label">CONTEXT & CONTRIBUTION</span>
        <ul className="detail-list">{selected.data.details.map((detail,index)=><li key={index}><span>{String(index+1).padStart(2,"0")}</span><p>{detail}</p></li>)}</ul>
        <div className="panel-rule"/><div className="related-head"><span className="panel-section-label">CONNECTED NODES</span><span>{related.length.toString().padStart(2,"0")}</span></div>
        <div className="related-list">{related.map(node=><button key={node.id} onClick={()=>focusNode(node.id)}><i style={{background:categoryColors[node.data.category]}}/><span>{node.data.label}</span><ChevronRight size={14}/></button>)}</div>
        <div className="panel-note"><span>↳</span> Each connection represents a documented or directly related part of the work. Select a connected node to keep exploring.</div>
      </div>
      <div className="panel-bottom"><span>SOJI.OS / FIELD NOTES</span><a href="mailto:soji89@gmail.com"><Mail size={14}/> Start a conversation</a></div>
    </aside>}

    {story&&storyStep&&<div className="story-panel"><div className="story-panel-head"><div><span className="eyebrow">TRACE A STORY · {String(storyIndex+1).padStart(2,"0")} / {String(story.steps.length).padStart(2,"0")}</span><h2>{story.title}</h2></div><button className="close-button" onClick={()=>{setStoryId(null);fitView({padding:0.2,duration:600});}} aria-label="Exit story"><X size={17}/></button></div>
      <p className="story-subtitle">{story.subtitle}</p><div className="story-progress">{story.steps.map((step,index)=><button key={step.nodeId} className={index===storyIndex?"current":index<storyIndex?"visited":""} onClick={()=>{setStoryIndex(index);const node=graphNodes.find(item=>item.id===step.nodeId);if(node)setCenter(node.position.x+95,node.position.y+30,{zoom:1.1,duration:550});}} aria-label={`Go to story step ${index+1}`}/>)}</div>
      <div className="story-current"><span className="story-step-index">STEP {String(storyIndex+1).padStart(2,"0")}</span><h3>{graphNodes.find(node=>node.id===storyStep.nodeId)?.data.label}</h3><p>{storyStep.reason}</p></div>
      <button className="story-next" onClick={advanceStory}>{storyIndex===story.steps.length-1?"Return to the full network":"Follow the connection"}<ArrowUpRight size={15}/></button>
    </div>}

    <div className="contact-rail"><span>BASED IN BENGALURU, INDIA</span><span className="rail-dot"/><a href="mailto:soji89@gmail.com">SOJI89@GMAIL.COM</a></div>
  </main>;
}

export default function Home() {
  return <ReactFlowProvider><NetworkExperience/></ReactFlowProvider>;
}
