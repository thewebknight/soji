import type { Edge, Node } from "@xyflow/react";

export type Category = "core" | "product" | "finance" | "ai" | "experience" | "evidence" | "education" | "project";
export type StoryStep = { nodeId: string; reason: string };
export type GraphNodeData = {
  label: string; category: Category; eyebrow: string; description: string; details: string[];
  evidence?: string; story?: StoryStep[]; searchText?: string; [key: string]: unknown;
};
type GraphNode = Node<GraphNodeData>;
const n = (id: string, label: string, category: Category, x: number, y: number, eyebrow: string, description: string, details: string[], evidence?: string): GraphNode => ({
  id, type: "topic", position: { x, y }, data: { label, category, eyebrow, description, details, evidence }, draggable: false, selectable: true
});

export const graphNodes: GraphNode[] = [
  n("soji","Soji Jacob","core",0,0,"THE PERSON","Product ownership at the intersection of financial systems, business and delivery.",["13+ years in financial services technology and digital delivery.","PSPO certified, with an M.Tech in Software Engineering from BITS Pilani.","Works across product requirements, platform configuration, workflow design and cross functional delivery."]),
  n("product","Product ownership","product",-430,-190,"DISCIPLINE","Turning business problems into clear priorities, usable workflows and deliverable product outcomes.",["Product discovery and requirements definition.","Backlog prioritisation, user stories and acceptance criteria.","Stakeholder alignment, Agile delivery, UAT and release."]),
  n("discovery","Product discovery","product",-690,-360,"CAPABILITY","Clarifying the real problem before committing to a solution.",["Translate business needs into problem statements and requirements.","Bring business and technology perspectives together."]),
  n("requirements","Requirements","product",-660,-170,"CAPABILITY","Making complex business and regulatory needs implementable.",["Business rules, functional specifications and acceptance criteria.","Trace requirements through testing and delivery."]),
  n("backlog","Backlog priorities","product",-650,30,"CAPABILITY","Keeping delivery focused on the work that matters most.",["Clarify scope, dependencies and sequencing.","Support sprint planning and delivery decisions."]),
  n("stakeholders","Stakeholder alignment","product",-440,205,"CAPABILITY","Connecting business expectations with engineering decisions.",["Coordinate across business, product and technology.","Make dependencies, risks and trade offs visible."]),
  n("agile","Agile delivery","product",-210,250,"CAPABILITY","Creating a reliable path from requirements to release.",["Scrum ceremonies, issue resolution and delivery tracking.","UAT, defect triage and release readiness."]),
  n("uat","UAT and release","product",-190,70,"CAPABILITY","Validating that a solution works for the people and processes it serves.",["Test scenarios, integration validation and defect triage.","Cutover and go live coordination."]),
  n("finance","Financial systems","finance",400,-170,"DOMAIN","The operational machinery behind lending, leasing, payments and asset finance.",["Lease and loan lifecycle analysis from origination through servicing.","Payments, reconciliation and back office operations.","Product configuration and enterprise platform transformation."]),
  n("asset","Asset finance","finance",670,-360,"DOMAIN","Products and workflows supporting equipment and asset finance.",["Origination, contract configuration and servicing.","Back office processes, payment flows and reconciliation."]),
  n("lending","Lending","finance",720,-175,"DOMAIN","Loan lifecycle workflows and the rules that connect them.",["Requirements across origination, servicing and operations.","Business rules and platform configuration."]),
  n("leasing","Leasing","finance",690,30,"DOMAIN","Lease lifecycle processes across products, contracts and operations.",["Lease and loan module expertise.","Configuration, integration and operational workflow design."]),
  n("payments","Payments","finance",480,205,"DOMAIN","Payment and reconciliation workflows within financial services platforms.",["Payments, direct debits and reconciliation requirements.","Coordinate end to end operational dependencies."]),
  n("odessa","Odessa lease and loan","finance",900,-15,"PLATFORM","Enterprise lease and loan platform experience spanning configuration, integrations and operational workflows.",["Subject matter expertise across Odessa lease and loan modules.","Product configuration, integration design and complex business rules.","Supported delivery through UAT, migration and production cutover."]),
  n("cais","Experian CAIS","finance",890,180,"PLATFORM","Credit reporting platform experience listed in Soji's product and financial services toolkit.",["Credit reporting domain and related business requirements."]),
  n("ai","AI workflow design","ai",0,-420,"SYSTEMS","Applying AI to document intensive operations, with validation and workflow design around the model.",["AI driven document parsing requirements and workflow definition.","Human in the loop validation and operational workflow automation.","Focus on measurable process outcomes, not AI for its own sake."]),
  n("parsing","Document parsing","ai",-220,-620,"CAPABILITY","Extracting useful information from documents to reduce repetitive handling.",["Defined requirements and workflows for an AI driven document parsing solution.","Designed for high volume operational use."]),
  n("human","Human validation","ai",0,-690,"CONTROL","Keeping people in the loop where review and exception handling matter.",["Validation and review remain part of the workflow.","Design around operational quality and exceptions."]),
  n("automation","Workflow automation","ai",240,-610,"CAPABILITY","Connecting extraction to the next operational action.",["Reduce repetitive manual steps.","Make handoffs and exception paths explicit."]),
  n("efficiency","Operational efficiency","ai",260,-400,"OUTCOME DRIVER","Using better requirements and workflow design to improve how work gets done.",["Simplify document handling and downstream processing.","Measure the operational effect of the change."]),
  n("natixis","Natixis","experience",-100,470,"EXPERIENCE · 2025–2026","Senior Business Analyst, Product Owner and Functional Consultant across financial services transformation.",["Owned configuration and transformation initiatives across leasing, lending, payments and asset finance.","Established a LaserNet Center of Excellence and led the China migration from P.Lease to Odessa.","Defined requirements and workflows for AI driven document processing."]),
  n("sg","Société Générale GSC","experience",190,540,"EXPERIENCE · 2019–2025","Product, business analysis and engineering delivery across financial services technology.",["Led delivery of a shared customer portal and Odessa lease and loan configuration through go live.","Led teams delivering a fuel card mobile application, GEFA new business workflow and document parser projects.","Worked across Bengaluru and London."]),
  n("cognizant","Cognizant / Google GTech","experience",-400,580,"EXPERIENCE · 2012–2019","Web technology subject matter expertise, UI/UX consulting and digital delivery.",["Advised strategic Google clients on user experience and implementation opportunities.","Led analysis and delivery for a 15 member team on strategic digital initiatives.","Coordinated quality, work allocation and stakeholder reporting."]),
  n("china","China migration","project",440,470,"TRANSFORMATION","Cross border migration from P.Lease to Odessa, covering requirements, mapping and cutover.",["Led data mapping, solution consultation and business requirements.","Supported migration validation and cutover readiness.","Connected platform configuration with business and operational needs."]),
  n("portal","Shared customer portal","project",-620,380,"DIGITAL PRODUCT","A customer portal shared across entities as part of a one platform ecosystem.",["Coordinated engineering and cross functional stakeholders.","Contributed to delivery across a shared platform experience."]),
  n("fuel","Fuel card application","project",-600,570,"DIGITAL PRODUCT","Mobile application delivery as part of a broader portfolio of financial services products.",["Led engineering delivery for a fuel card mobile application.","Worked across teams to coordinate delivery priorities."]),
  n("impactDocs","1,500 / day","evidence",490,-820,"DOCUMENT THROUGHPUT","The AI driven document parsing solution was designed to process 1,500 documents per day.",["Reported throughput from Soji's resume.","This describes the solution's designed processing volume, not a claim about independent model accuracy."],"1,500 documents daily"),
  n("impact70","70% less manual handling","evidence",740,-660,"PROCESS IMPACT","A reported 70% reduction in manual document handling through AI driven document processing requirements and workflow automation.",["Reported impact from Soji's resume.","The metric refers to manual document handling, not a 70% reduction in all operational costs."],"70% reduction"),
  n("impact35","30–35% faster delivery","evidence",900,-450,"DELIVERY IMPACT","Streamlined requirements, configuration and delivery processes contributed to faster project and feature delivery.",["Reported improvement from Soji's resume.","The resume attributes this to streamlined requirements, configuration and delivery processes."],"30–35% faster"),
  n("team","15 member team","evidence",-660,780,"TEAM DELIVERY","Led delivery and governance for a 15 member team on strategic digital initiatives.",["Work allocation, delivery tracking, quality governance and stakeholder reporting."]),
  n("pspo","PSPO","education",0,760,"CERTIFICATION","Professional Scrum Product Owner certification.",["Product ownership credential listed on the resume."]),
  n("bits","M.Tech · BITS Pilani","education",230,790,"EDUCATION · 2014–2016","Master of Technology in Software Engineering from Birla Institute of Technology and Science, Pilani.",["M.Tech, Software Engineering, 2014 to 2016.","B.E. in Computer Science from BMS Institute of Technology, Bengaluru, 2012."]),
  n("lasernet","LaserNet / Formpipe","experience",460,650,"DOCUMENT MANAGEMENT","Established and led a LaserNet Center of Excellence to centralise document management capabilities.",["Standardised enterprise document processes.","Connected document management needs with operational workflows."]),
  n("about","About Soji","core",-160,230,"PROFILE","A product professional who works between business context, technology constraints and delivery reality.",["Bengaluru, India.","Product ownership, senior business analysis and financial services technology.","Interested in making complex systems more understandable and useful."])
];

const e = (source: string, target: string, label?: string): Edge => ({
  id: `${source}-${target}`, source, target, type: "smoothstep", animated: false, label,
  style: { stroke: "var(--edge)", strokeWidth: 1.15 },
  labelStyle: { fill: "var(--muted)", fontSize: 10 },
  labelBgStyle: { fill: "var(--canvas)", fillOpacity: 0.9 }
});
export const graphEdges: Edge[] = [
  e("soji","product"),e("soji","finance"),e("soji","ai"),e("soji","natixis"),e("soji","sg"),e("soji","cognizant"),e("soji","about"),
  e("product","discovery"),e("product","requirements"),e("product","backlog"),e("product","stakeholders"),e("product","agile"),e("product","uat"),
  e("requirements","natixis"),e("requirements","sg"),e("backlog","portal"),e("stakeholders","china"),e("agile","fuel"),e("uat","china"),
  e("finance","asset"),e("finance","lending"),e("finance","leasing"),e("finance","payments"),e("finance","odessa"),e("finance","cais"),
  e("asset","odessa"),e("lending","odessa"),e("leasing","odessa"),e("payments","odessa"),e("cais","requirements"),
  e("ai","parsing"),e("ai","human"),e("ai","automation"),e("ai","efficiency"),e("parsing","impactDocs"),e("parsing","impact70"),e("human","automation"),e("automation","efficiency"),e("efficiency","impact70"),e("efficiency","impact35"),
  e("natixis","china"),e("natixis","lasernet"),e("natixis","odessa"),e("natixis","impactDocs"),e("natixis","impact70"),e("natixis","impact35"),
  e("sg","portal"),e("sg","fuel"),e("sg","odessa"),e("sg","impactDocs"),e("sg","impact35"),
  e("cognizant","team"),e("about","pspo"),e("about","bits"),e("product","pspo"),e("china","odessa"),e("lasernet","parsing")
];
export const stories: { id: string; title: string; subtitle: string; steps: StoryStep[] }[] = [
  { id:"documents",title:"From documents to outcomes",subtitle:"Trace how a document heavy operational problem connects to AI extraction, human validation and measurable process change.",steps:[
    {nodeId:"ai",reason:"Start with the workflow problem, not the model."},{nodeId:"parsing",reason:"Define document parsing requirements for a high volume process."},{nodeId:"human",reason:"Keep review and exception handling visible in the workflow."},{nodeId:"automation",reason:"Connect extracted information to downstream operational actions."},{nodeId:"impactDocs",reason:"The solution was designed to process 1,500 documents daily."},{nodeId:"impact70",reason:"The reported outcome was 70% less manual document handling."}
  ]},
  { id:"asset-finance",title:"Inside an asset finance platform",subtitle:"Follow the connections between the lease and loan lifecycle, Odessa configuration and operational workflows.",steps:[
    {nodeId:"asset",reason:"Begin with the business domain and its lifecycle."},{nodeId:"odessa",reason:"Connect the domain to the lease and loan platform."},{nodeId:"leasing",reason:"Explore lease lifecycle requirements and configuration."},{nodeId:"payments",reason:"Follow payment and reconciliation dependencies."},{nodeId:"natixis",reason:"See where this platform work connects to transformation delivery."}
  ]},
  { id:"migration",title:"A cross border migration",subtitle:"Explore the work that connects data mapping, business requirements, platform configuration and cutover readiness.",steps:[
    {nodeId:"natixis",reason:"The migration sits within broader financial services transformation."},{nodeId:"china",reason:"The project moved from P.Lease to Odessa."},{nodeId:"requirements",reason:"Requirements and business rules define what must be preserved."},{nodeId:"odessa",reason:"The target platform anchors configuration and workflow decisions."},{nodeId:"uat",reason:"Validation and cutover readiness connect design to production."}
  ]}
];
export const categoryLabels: Record<Category,string> = {
  core:"Identity",product:"Product",finance:"Financial services",ai:"AI and automation",experience:"Experience",evidence:"Evidence",education:"Education",project:"Projects"
};
export const categoryColors: Record<Category,string> = {
  core:"#f2eee5",product:"#f1b86c",finance:"#65c8d5",ai:"#b7a0ff",experience:"#83a6ff",evidence:"#d7f36a",education:"#c8c4ba",project:"#ff9776"
};
