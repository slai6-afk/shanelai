const BG = { r: 245 / 255, g: 245 / 255, b: 245 / 255 };
const SURFACE = { r: 1, g: 1, b: 1 };
const TEXT = { r: 0, g: 0, b: 0 };
const MUTED = { r: 102 / 255, g: 102 / 255, b: 102 / 255 };
const ACCENT = { r: 237 / 255, g: 150 / 255, b: 79 / 255 };
const BORDER = { r: 0, g: 0, b: 0 };

async function loadFonts() {
  await figma.loadFontAsync({ family: 'Inter', style: 'Regular' });
  await figma.loadFontAsync({ family: 'Inter', style: 'Medium' });
}

function solid(f) {
  return [{ type: 'SOLID', color: f }];
}

function strokeLight() {
  return [
    {
      type: 'SOLID',
      color: { r: BORDER.r, g: BORDER.g, b: BORDER.b },
      opacity: 0.08
    }
  ];
}

async function textNode(str, size, weight) {
  const style = weight === 'med' ? 'Medium' : 'Regular';
  await figma.loadFontAsync({ family: 'Inter', style });
  const t = figma.createText();
  t.fontName = { family: 'Inter', style };
  t.fontSize = size;
  t.characters = str;
  t.fills = solid(TEXT);
  t.textAutoResize = 'HEIGHT';
  t.layoutSizingHorizontal = 'FILL';
  return t;
}

function frame(name, layout, w, h) {
  const f = figma.createFrame();
  f.name = name;
  f.layoutMode = layout;
  f.primaryAxisSizingMode = 'AUTO';
  f.counterAxisSizingMode = layout === 'VERTICAL' ? 'FIXED' : 'AUTO';
  if (w) f.resize(w, h || 100);
  f.fills = [];
  return f;
}

function placeRightOfCanvas() {
  let maxX = 0;
  for (const page of figma.root.children) {
    for (const c of page.children) {
      maxX = Math.max(maxX, c.x + c.width);
    }
  }
  return maxX + 120;
}

const workflowSteps = [
  'Research & Strategy: Defining core problems.',
  'Sketch MVP Flow: Low-fidelity logic mapping.',
  'Figma Make: Generating initial UI via AI-assisted design.',
  'Perfecting Design: Manual polish of the design system in Figma.',
  'Cursor + Figma MCP: Connecting Figma components directly to Cursor for code generation.',
  'Functional MVP: Verifying the core user flow in code.',
  'Database & API: Connecting Supabase for real-time data and authentication.',
  'Edge Cases & Failure States: Handling errors and empty states.',
  'Final MCP Sync: Updating Figma changes to code via MCP for pixel-perfect results.',
  'User Testing & Iteration: Loop back based on feedback.'
];

const handoffSteps = [
  'Design Token System: Standardizing colors, spacing, and shadows.',
  'Component Documentation: Detailed state definitions (hover, active, disabled).',
  'Asset Delivery: Exporting optimized SVGs and optimized Lottie files.'
];

const flowSteps = [
  'The Prompt: Combining text and visual references in Figma Make.',
  'AI Generation: Rapid prototyping of visual modules.',
  'Manual Refinement: Overriding AI choices with human aesthetic judgment.',
  'Visual Polish: Finalizing textures and motion.'
];

await loadFonts();

const startX = placeRightOfCanvas();
const PAGE_W = 1440;

const root = frame('Web — Design Engineering Workflow + Playground (sync)', 'VERTICAL', PAGE_W, 100);
root.x = startX;
root.y = 80;
root.paddingLeft = 0;
root.paddingRight = 0;
root.paddingTop = 0;
root.paddingBottom = 80;
root.itemSpacing = 80;
root.fills = solid(BG);
root.counterAxisSizingMode = 'FIXED';
root.layoutSizingHorizontal = 'FIXED';
root.resize(PAGE_W, 100);

// —— Page 1: Design Engineering Workflow ——
const p1 = frame('Design Engineering Workflow (code)', 'VERTICAL', PAGE_W, 100);
p1.fills = solid(BG);
p1.paddingLeft = 64;
p1.paddingRight = 64;
p1.paddingTop = 48;
p1.paddingBottom = 64;
p1.itemSpacing = 48;
p1.counterAxisSizingMode = 'FIXED';
p1.layoutSizingHorizontal = 'FILL';

const hero1 = await textNode(
  '👩‍💻 My Design Engineering Workflow — keep updating',
  48,
  'reg'
);
hero1.lineHeight = { unit: 'PIXELS', value: 55 };
hero1.letterSpacing = { unit: 'PERCENT', value: -2 };

const secA = frame('Section — End-to-End', 'VERTICAL', PAGE_W - 128, 100);
secA.itemSpacing = 24;
secA.fills = [];
const hA = await textNode('End-to-End (0 to 1 Launch)', 32, 'med');
const cardA = frame('Card — timeline', 'VERTICAL', PAGE_W - 128, 100);
cardA.fills = solid(SURFACE);
cardA.strokes = strokeLight();
cardA.strokeWeight = 1;
cardA.cornerRadius = 20;
cardA.paddingLeft = 32;
cardA.paddingRight = 32;
cardA.paddingTop = 32;
cardA.paddingBottom = 32;
cardA.itemSpacing = 16;
cardA.layoutMode = 'VERTICAL';

for (let i = 0; i < workflowSteps.length; i++) {
  const row = frame(`Step ${i + 1}`, 'HORIZONTAL', 100, 100);
  row.layoutMode = 'HORIZONTAL';
  row.primaryAxisSizingMode = 'AUTO';
  row.counterAxisSizingMode = 'AUTO';
  row.itemSpacing = 16;
  row.fills = [];

  const badge = frame('Index', 'HORIZONTAL', 36, 36);
  badge.resize(36, 36);
  badge.layoutMode = 'HORIZONTAL';
  badge.primaryAxisAlignItems = 'CENTER';
  badge.counterAxisAlignItems = 'CENTER';
  badge.fills = solid(SURFACE);
  badge.strokes = strokeLight();
  badge.strokeWeight = 1;
  badge.cornerRadius = 18;
  const num = await textNode(String(i + 1), 13, 'med');
  num.fills = solid(ACCENT);
  badge.appendChild(num);

  const body = frame('Body', 'VERTICAL', 100, 100);
  body.layoutMode = 'VERTICAL';
  body.primaryAxisSizingMode = 'AUTO';
  body.counterAxisSizingMode = 'AUTO';
  body.fills = [{ type: 'SOLID', color: { r: 246 / 255, g: 246 / 255, b: 246 / 255 } }];
  body.cornerRadius = 14;
  body.paddingLeft = 16;
  body.paddingRight = 16;
  body.paddingTop = 14;
  body.paddingBottom = 14;
  const line = await textNode(workflowSteps[i], 15, 'reg');
  line.fills = solid(TEXT);
  line.lineHeight = { unit: 'PIXELS', value: 24 };
  body.appendChild(line);

  row.appendChild(badge);
  row.appendChild(body);
  cardA.appendChild(row);
  body.layoutSizingHorizontal = 'FILL';
  row.layoutSizingHorizontal = 'FILL';
}

const rationale = await textNode(
  "Rationale — This end-to-end loop ensures 'Design as Code'. By validating the core path with an MVP first, we reduce refactoring costs in complex business logic later. (truncated in Figma; see code for full text.)",
  15,
  'reg'
);
rationale.fills = solid(MUTED);
rationale.lineHeight = { unit: 'PIXELS', value: 26 };
const rule = figma.createRectangle();
rule.name = 'Divider';
rule.resize(PAGE_W - 192, 1);
rule.fills = [{ type: 'SOLID', color: { r: 0, g: 0, b: 0 }, opacity: 0.08 }];

cardA.appendChild(rule);
rule.layoutSizingHorizontal = 'FILL';
cardA.appendChild(rationale);

secA.appendChild(hA);
secA.appendChild(cardA);

const secB = frame('Section — Design-to-Dev Handoff', 'VERTICAL', PAGE_W - 128, 100);
secB.itemSpacing = 24;
secB.fills = [];
const hB = await textNode('Design-to-Dev Handoff', 32, 'med');
const introB = await textNode(
  'Focusing on scalability and communication. By establishing a rigorous Token system, we minimize communication entropy and ensure design consistency across all platforms.',
  15,
  'reg'
);
introB.fills = solid(MUTED);
const cardB = frame('Card — 3-up', 'HORIZONTAL', PAGE_W - 128, 100);
cardB.layoutMode = 'HORIZONTAL';
cardB.itemSpacing = 20;
cardB.primaryAxisSizingMode = 'AUTO';
cardB.counterAxisSizingMode = 'AUTO';
cardB.fills = [];

for (let i = 0; i < handoffSteps.length; i++) {
  const c = frame(`Pillar ${i + 1}`, 'VERTICAL', 200, 100);
  c.layoutMode = 'VERTICAL';
  c.itemSpacing = 12;
  c.paddingLeft = 20;
  c.paddingRight = 20;
  c.paddingTop = 24;
  c.paddingBottom = 20;
  c.fills = [{ type: 'SOLID', color: { r: 250 / 255, g: 250 / 255, b: 250 / 255 } }];
  c.strokes = strokeLight();
  c.strokeWeight = 1;
  c.cornerRadius = 14;
  const idx = await textNode(`0${i + 1}`, 11, 'med');
  idx.fills = solid(MUTED);
  const p = await textNode(handoffSteps[i], 15, 'reg');
  p.fills = solid(TEXT);
  c.appendChild(idx);
  c.appendChild(p);
  cardB.appendChild(c);
  c.layoutSizingHorizontal = 'FILL';
}

secB.appendChild(hB);
secB.appendChild(introB);
secB.appendChild(cardB);

const secC = frame('Section — Fun Visual Coding', 'VERTICAL', PAGE_W - 128, 100);
secC.itemSpacing = 24;
secC.fills = [];
const hC = await textNode('Fun Visual Coding (Rapid Prototyping)', 32, 'med');
const introC = await textNode(
  "An AI-augmented creative process. Instead of starting from a blank canvas, I use AI to generate high-frequency visual iterations, then apply precise manual adjustments to reach the final 'perfect' output.",
  15,
  'reg'
);
introC.fills = solid(MUTED);
const flow = frame('Flow row (placeholder)', 'HORIZONTAL', PAGE_W - 128, 100);
flow.layoutMode = 'HORIZONTAL';
flow.itemSpacing = 12;
flow.primaryAxisSizingMode = 'AUTO';
flow.counterAxisAlignItems = 'CENTER';
flow.fills = [];
flow.paddingTop = 16;
for (let i = 0; i < flowSteps.length; i++) {
  const node = frame(`Flow ${i + 1}`, 'VERTICAL', 160, 100);
  node.layoutMode = 'VERTICAL';
  node.paddingLeft = 14;
  node.paddingRight = 14;
  node.paddingTop = 12;
  node.paddingBottom = 12;
  node.fills = [{ type: 'SOLID', color: { r: 243 / 255, g: 243 / 255, b: 243 / 255 } }];
  node.cornerRadius = 16;
  node.strokes = [];
  const left = figma.createRectangle();
  left.resize(4, 48);
  left.fills = solid(ACCENT);
  const t = await textNode(flowSteps[i], 13, 'reg');
  t.fills = solid(TEXT);
  t.maxWidth = 200;
  const inner = frame('inner', 'HORIZONTAL', 100, 100);
  inner.layoutMode = 'HORIZONTAL';
  inner.itemSpacing = 8;
  inner.appendChild(left);
  inner.appendChild(t);
  node.appendChild(inner);
  flow.appendChild(node);
}

secC.appendChild(hC);
secC.appendChild(introC);
secC.appendChild(flow);

p1.appendChild(hero1);
p1.appendChild(secA);
p1.appendChild(secB);
p1.appendChild(secC);

// —— Page 2: Playground (snap sections) ——
const p2 = frame('Playground (code)', 'VERTICAL', PAGE_W, 100);
p2.fills = solid(BG);
p2.itemSpacing = 0;
p2.paddingLeft = 0;
p2.paddingRight = 0;
p2.paddingTop = 0;
p2.paddingBottom = 0;

function snapSection(title, subtitle, tags, mediaLeft) {
  const section = frame(`Snap — ${title}`, 'VERTICAL', PAGE_W, 100);
  section.minHeight = 900;
  section.paddingLeft = 64;
  section.paddingRight = 64;
  section.paddingTop = 120;
  section.paddingBottom = 80;
  section.fills = solid(BG);
  section.itemSpacing = 0;
  section.primaryAxisAlignItems = 'CENTER';
  section.counterAxisAlignItems = 'CENTER';

  const row = frame('Row', 'HORIZONTAL', PAGE_W - 128, 100);
  row.layoutMode = 'HORIZONTAL';
  row.itemSpacing = 24;
  row.primaryAxisAlignItems = 'CENTER';
  row.counterAxisSizingMode = 'AUTO';
  row.fills = [];

  const media = frame('Media 818:476', 'VERTICAL', 100, 100);
  const ar = 818 / 476;
  const mw = 720;
  const mh = mw / ar;
  media.layoutMode = 'VERTICAL';
  media.primaryAxisAlignItems = 'CENTER';
  media.counterAxisAlignItems = 'CENTER';
  media.resize(mw, mh);
  media.fills = [{ type: 'SOLID', color: { r: 229 / 255, g: 229 / 255, b: 229 / 255 } }];
  media.cornerRadius = 4;
  const placeholder = figma.createText();
  placeholder.fontName = { family: 'Inter', style: 'Medium' };
  placeholder.fontSize = 13;
  placeholder.characters = 'iframe / preview';
  placeholder.fills = solid(MUTED);
  media.appendChild(placeholder);

  const col = frame('Copy', 'VERTICAL', 309, 100);
  col.layoutMode = 'VERTICAL';
  col.itemSpacing = 18;
  col.primaryAxisSizingMode = 'AUTO';
  col.fills = [];
  const h = figma.createText();
  h.fontName = { family: 'Inter', style: 'Regular' };
  h.fontSize = 24;
  h.characters = title;
  h.fills = solid(TEXT);
  const tagRow = frame('Tags', 'HORIZONTAL', 100, 100);
  tagRow.layoutMode = 'HORIZONTAL';
  tagRow.itemSpacing = 8;
  tagRow.fills = [];
  for (const tag of tags) {
    const pill = frame('tag', 'HORIZONTAL', 100, 100);
    pill.paddingLeft = 12;
    pill.paddingRight = 12;
    pill.paddingTop = 6;
    pill.paddingBottom = 6;
    pill.fills = [{ type: 'SOLID', color: { r: 1, g: 0.65, b: 0.53 } }];
    pill.cornerRadius = 8;
    const tt = figma.createText();
    tt.fontName = { family: 'Inter', style: 'Regular' };
    tt.fontSize = 12;
    tt.characters = tag;
    tt.fills = solid({ r: 1, g: 1, b: 1 });
    pill.appendChild(tt);
    tagRow.appendChild(pill);
  }
  const sub = figma.createText();
  sub.fontName = { family: 'Inter', style: 'Regular' };
  sub.fontSize = 15;
  sub.characters = subtitle;
  sub.fills = solid(MUTED);
  sub.lineHeight = { unit: 'PIXELS', value: 24 };
  sub.textAutoResize = 'HEIGHT';
  col.appendChild(h);
  col.appendChild(tagRow);
  col.appendChild(sub);

  if (mediaLeft) {
    row.appendChild(media);
    row.appendChild(col);
  } else {
    row.appendChild(col);
    row.appendChild(media);
  }
  section.appendChild(row);
  return section;
}

const playHero = frame('Playground hero', 'VERTICAL', PAGE_W, 100);
playHero.minHeight = 900;
playHero.fills = solid(BG);
playHero.paddingTop = 120;
playHero.primaryAxisAlignItems = 'CENTER';
const ph = await textNode('Playground', 56, 'reg');
ph.textAlignHorizontal = 'CENTER';
playHero.appendChild(ph);

const s1 = snapSection(
  'Cube Fade',
  'Generative cubes with soft fades — built with p5.js, shipped via Figma Make and Cursor.',
  ['#P5JS', '#GENERATIVEART', '#FIGMAMAKE', '#CURSOR'],
  true
);
const s2 = snapSection(
  'Dive With Me',
  'WebGL scene and motion study — Three.js experiment authored in Figma Make.',
  ['#THREEJS', '#WEBGL', '#FIGMAMAKE', '#CURSOR'],
  false
);
const s3 = snapSection(
  'Techno 101',
  'Exploring rhythmic visuals through parametric design.',
  ['#MOTIONDESIGN', '#VISUALCODING'],
  true
);

p2.appendChild(playHero);
p2.appendChild(s1);
p2.appendChild(s2);
p2.appendChild(s3);

root.appendChild(p1);
root.appendChild(p2);
p1.layoutSizingHorizontal = 'FILL';
p2.layoutSizingHorizontal = 'FILL';

figma.currentPage.appendChild(root);

return {
  success: true,
  message:
    'Created frame "Web — Design Engineering Workflow + Playground (sync)". Use search_design_system + component instances in follow-up to swap pills/cards if your library has them.',
  rootId: root.id,
  page1Id: p1.id,
  page2Id: p2.id,
  createdNodeIds: [root.id, p1.id, p2.id]
};
