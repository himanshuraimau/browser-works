import { detailedContent } from './detailed-content'

export interface Slide {
  id: number
  type: 'Title' | 'Content' | 'Diagram' | 'Code' | 'Steps'
  title: string
  content: string | string[]
  code?: string
  animation?: string
  visuals?: string
  animationId?: string
  detailedContent?: string
  keyTerms?: { term: string; definition: string }[]
}

// Helper function to get detailed content for a slide
export function getSlideDetails(slideId: number) {
  return detailedContent[slideId] || {}
}

export interface Module {
  id: number
  name: string
  description: string
  duration: number
  slides: Slide[]
}

export const courseData: Module[] = [
  {
    id: 1,
    name: 'The Browser & Its Processes',
    description: 'Explore how modern browsers use multiple processes for stability and security.',
    duration: 10,
    slides: [
      {
        id: 1,
        type: 'Title',
        title: 'How Can You See This? The Browser\'s Journey',
        content: 'From your code to pixels on screen. A deep dive into the modern browser.',
        animation: 'none',
      },
      {
        id: 2,
        type: 'Content',
        title: 'The Problem: The Single-Process Browser',
        content: [
          'Early browsers ran everything in one process.',
          'One misbehaving tab could crash your entire browser.',
          'No isolation between websites or components.',
        ],
      },
      {
        id: 3,
        type: 'Content',
        title: 'The Solution: A Multi-Process Architecture',
        content: [
          'Modern browsers are built like operating systems.',
          'Separate processes for stability and security.',
          'If one tab crashes, the others remain unaffected.',
        ],
      },
      {
        id: 4,
        type: 'Content',
        title: 'The Supreme Leader: The Browser Process',
        content: [
          'The first process started when you open the browser.',
          'Manages the UI, tabs, and network access.',
          'The absolute authority over your browsing experience.',
        ],
      },
      {
        id: 5,
        type: 'Content',
        title: 'The Specialists: The Renderer Process',
        content: [
          'Created for each tab (mostly) to render web content.',
          'Isolated in a security "sandbox".',
          'Contains the rendering engine (Blink) and JS engine (V8).',
        ],
      },
      {
        id: 6,
        type: 'Diagram',
        title: 'Browser Process Architecture',
        content: [
          'Browser Process (Manager)',
          'Renderer Processes (Workers, one per tab/site)',
          'Network Service (Communicator)',
          'GPU Process (Artist)',
        ],
        animationId: 'browser-architecture',
      },
    ],
  },
  {
    id: 2,
    name: 'The Network Journey',
    description: 'Understand how your browser finds and communicates with servers.',
    duration: 12,
    slides: [
      {
        id: 7,
        type: 'Title',
        title: 'Establishing the Network Highways',
        content: 'How your browser finds and talks to a server.',
      },
      {
        id: 8,
        type: 'Content',
        title: 'The Dedicated Network Service',
        content: [
          'Handles all internet traffic in its own isolated process.',
          'Manages connection pools, security, and cookies.',
          'Renderer processes ask the Browser Process, which asks the Network Service.',
        ],
      },
      {
        id: 9,
        type: 'Steps',
        title: 'From URL to Request: The Steps',
        content: [
          'You type a URL and hit Enter.',
          'Browser Process analyzes the URL (security, type).',
          'Checks browser\'s DNS cache for the IP address.',
          'Network Service handles the actual DNS lookup.',
        ],
      },
      {
        id: 10,
        type: 'Content',
        title: 'Don\'t Start From Scratch: Connection Pooling',
        content: [
          'Browser keeps reusable connections to servers.',
          'Checks the "pool" before creating a new connection.',
          'Reusing connections is much faster.',
        ],
      },
      {
        id: 11,
        type: 'Diagram',
        title: 'The TCP Handshake',
        content: [
          'SYN: Client says "Can we talk?"',
          'SYN-ACK: Server says "Yes, let\'s talk."',
          'ACK: Client says "Great, here\'s my first data."',
        ],
        animationId: 'tcp-handshake',
      },
      {
        id: 12,
        type: 'Code',
        title: 'Anatomy of an HTTP Request',
        content: 'What the browser actually sends to the server.',
        code: `GET / HTTP/1.1
Host: localhost:3000
User-Agent: Chrome/100.0.0.0
Accept: text/html,application/xhtml+xml
Accept-Encoding: gzip, deflate
Connection: keep-alive`,
      },
      {
        id: 13,
        type: 'Content',
        title: 'The Local Development Server',
        content: [
          'More than a simple file server.',
          'Handles build processes (Babel, Webpack) on-the-fly.',
          'Can proxy API requests to backend services.',
        ],
      },
      {
        id: 14,
        type: 'Content',
        title: 'Development vs. Production',
        content: [
          'Development: Optimized for fast feedback and debugging.',
          'Production: Optimized for performance, security, and scale (CDNs, load balancers).',
        ],
      },
    ],
  },
  {
    id: 3,
    name: 'From Disk to Browser',
    description: 'Learn how files on your disk become rendered content in the browser.',
    duration: 10,
    slides: [
      {
        id: 15,
        type: 'Title',
        title: 'Your Code\'s Journey to the Browser',
        content: 'How your saved files become a server response.',
      },
      {
        id: 16,
        type: 'Content',
        title: 'From Editor to Disk: The Write()',
        content: [
          'You press Ctrl+S.',
          'Editor encodes text into bytes (UTF-8).',
          'Makes a write() system call to the OS.',
          'OS writes bytes to your SSD/HDD.',
        ],
      },
      {
        id: 17,
        type: 'Diagram',
        title: 'How Storage Actually Works: HDD vs. SSD',
        content: [
          'HDD: Spinning disks + magnetic read/write arm.',
          'SSD: No moving parts; stores data in flash memory cells using electrical charges.',
        ],
        animationId: 'storage',
      },
      {
        id: 18,
        type: 'Steps',
        title: 'Server Setup: Binding to a Port',
        content: [
          'socket(): Ask OS for a communication endpoint.',
          'bind(): Tell OS to use port 3000.',
          'listen(): Announce readiness for connections.',
          'accept(): Wait for a client to connect.',
        ],
      },
      {
        id: 19,
        type: 'Content',
        title: 'The Loopback Interface',
        content: [
          'For localhost, traffic never leaves your machine.',
          'The OS creates a virtual network that loops back.',
          'Simulates a real network connection in software.',
        ],
      },
      {
        id: 20,
        type: 'Code',
        title: 'Anatomy of an HTTP Response',
        content: 'What the server sends back to the browser.',
        code: `HTTP/1.1 200 OK
Content-Type: text/html; charset=UTF-8
Content-Length: 257
Connection: keep-alive

<!DOCTYPE html>
<html>
  <body>
    <h1>Hello World</h1>
  </body>
</html>`,
      },
    ],
  },
  {
    id: 4,
    name: 'Parsing & The DOM',
    description: 'Understand how browsers parse HTML and build the Document Object Model.',
    duration: 12,
    slides: [
      {
        id: 21,
        type: 'Title',
        title: 'The Parser\'s Challenge: Chaotic Bytes to Structured Tree',
        content: 'How the browser makes sense of your HTML.',
      },
      {
        id: 22,
        type: 'Content',
        title: 'Step 1: Decoding the Bytes',
        content: [
          'Browser must guess the file\'s character encoding (e.g., UTF-8).',
          'Checks HTTP headers, meta tags, and byte patterns.',
          'Getting it wrong breaks everything!',
        ],
      },
      {
        id: 23,
        type: 'Content',
        title: 'Step 2: Tokenization - The Finite State Machine',
        content: [
          'Scanner breaks the character stream into tokens (e.g., <div>, id, =).',
          'Uses 65+ different states to handle context (e.g., inside a tag vs. inside a script).',
        ],
      },
      {
        id: 24,
        type: 'Diagram',
        title: 'The HTML Structure Becomes a Tree',
        content: [
          'Parsing transforms flat character stream into nested structure.',
          'Each tag becomes a node in the tree.',
          'Nesting is preserved and validated by the parser.',
        ],
        animationId: 'dom-tree',
      },
      {
        id: 25,
        type: 'Content',
        title: 'Step 3: Tree Construction - The Forgiving Parser',
        content: [
          'Algorithm builds the DOM tree from tokens.',
          'Handles broken HTML gracefully (e.g., unclosed tags).',
          'Uses "adoption agency algorithm" for messy nesting.',
        ],
      },
      {
        id: 26,
        type: 'Diagram',
        title: 'The Document Object Model (DOM)',
        content: [
          'A live, tree-structured representation of the document in memory.',
          'Every tag becomes a node (Element, Text, etc.).',
          'Nodes are connected (parent, child, sibling).',
        ],
        animationId: 'dom-tree',
      },
      {
        id: 27,
        type: 'Content',
        title: 'The DOM is Alive!',
        content: [
          'Not just a static tree; it\'s a network of interconnected objects.',
          'document is the root object with hundreds of properties/methods.',
          'Elements become specific objects (HTMLDivElement, HTMLButtonElement).',
        ],
      },
      {
        id: 28,
        type: 'Content',
        title: 'Attributes vs. Properties',
        content: [
          'Attribute: The initial value in the HTML, stored in a NamedNodeMap.',
          'Property: The live, current value on the JavaScript DOM object.',
          'They are kept in sync by the browser.',
        ],
      },
    ],
  },
  {
    id: 5,
    name: 'CSS & The Render Tree',
    description: 'Explore how CSS is parsed and combined with the DOM to create the Render Tree.',
    duration: 12,
    slides: [
      {
        id: 29,
        type: 'Title',
        title: 'Adding Style: From CSS to Pixels',
        content: 'How plain HTML gets its beautiful paint job.',
      },
      {
        id: 30,
        type: 'Content',
        title: 'Parsing CSS: Tokens and the CSSOM',
        content: [
          'CSS is also tokenized (e.g., HASH(container), LEFT_BRACE).',
          'The parser builds the CSS Object Model (CSSOM) - a tree of style rules.',
        ],
        animationId: 'css-parsing',
      },
      {
        id: 31,
        type: 'Content',
        title: 'The Cascade: Who Wins?',
        content: [
          'Importance & Origin: !important, user, author, browser.',
          'Specificity: #id > .class > tag.',
          'Source Order: Last rule wins.',
        ],
      },
      {
        id: 32,
        type: 'Diagram',
        title: 'The Merger: DOM + CSSOM = Render Tree',
        content: [
          'The browser combines the structure (DOM) and styles (CSSOM).',
          'Only visible elements are included in the Render Tree.',
          'Output is a tree of RenderObjects with computed styles.',
        ],
        animationId: 'render-tree',
      },
      {
        id: 33,
        type: 'Content',
        title: 'What is a RenderObject?',
        content: [
          'A specialized engine for a piece of content.',
          'Knows how to calculate its layout and paint itself.',
          'Contains computed style values (e.g., padding: 20px becomes actual pixels).',
        ],
      },
      {
        id: 34,
        type: 'Diagram',
        title: 'The CSS Box Model: Every Element\'s Blueprint',
        content: [
          'From inside out: Content → Padding → Border → Margin.',
          'Each layer respects the previous layer\'s boundaries.',
          'The browser uses this model to calculate layout.',
        ],
        animationId: 'box-model',
      },
    ],
  },
  {
    id: 6,
    name: 'Layout, Paint, and Composition',
    description: 'Learn the final three stages of the rendering pipeline that puts pixels on your screen.',
    duration: 11,
    slides: [
      {
        id: 35,
        type: 'Title',
        title: 'From Tree to Screen: The Final Act',
        content: 'The three-step process of Layout, Paint, and Composition.',
      },
      {
        id: 36,
        type: 'Steps',
        title: 'Step 1: Layout (Reflow)',
        content: [
          'Calculates the exact size and position of every RenderObject.',
          'A recursive process starting from the root.',
          'Respects the CSS Box Model (content, padding, border, margin).',
        ],
      },
      {
        id: 37,
        type: 'Diagram',
        title: 'Understanding Dimensions and Spacing',
        content: [
          'Layout uses the Box Model to calculate all element dimensions.',
          'Margin creates space outside an element.',
          'Border, padding, and content sizes determine the final box size.',
        ],
        animationId: 'box-model',
      },
      {
        id: 38,
        type: 'Content',
        title: 'Step 2: Paint (Rasterization)',
        content: [
          'The browser fills in the pixels for each element.',
          'It creates bitmaps (colored pixels) for different layers.',
          'Text rendering is complex (glyphs, fonts, kerning).',
        ],
      },
      {
        id: 39,
        type: 'Content',
        title: 'Step 3: Composition',
        content: [
          'The Compositor thread takes the painted layers.',
          'Draws them to the screen in the correct order.',
          'Heavily uses the GPU for speed.',
        ],
      },
      {
        id: 40,
        type: 'Content',
        title: 'Why Composition is Fast',
        content: [
          'Animating transform and opacity only requires the Compositor.',
          'It avoids costly Layout and Paint steps.',
          'The GPU just moves or fades existing bitmaps.',
        ],
      },
    ],
  },
  {
    id: 7,
    name: 'Advanced Layout & CSS Power',
    description: 'Master modern layout techniques: Flexbox, Grid, Container Queries, and :has().',
    duration: 13,
    slides: [
      {
        id: 41,
        type: 'Title',
        title: 'Modern Layouts: Flexbox & Grid',
        content: 'Taming the flow with powerful layout algorithms.',
      },
      {
        id: 42,
        type: 'Content',
        title: 'Flexbox: The One-Dimensional Layout',
        content: [
          'Creates a "flex container" with a main and cross axis.',
          'Children ("flex items") can grow (flex-grow) and shrink (flex-shrink).',
          'Negotiates space distribution between items.',
        ],
        animationId: 'flexbox-layout',
      },
      {
        id: 43,
        type: 'Diagram',
        title: 'How Flexbox Space Negotiation Works',
        content: [
          'Calculate total flex-basis (ideal size) of all items.',
          'Compare to container size.',
          'Distribute extra space according to flex-grow factors.',
        ],
        animationId: 'flexbox-layout',
      },
      {
        id: 44,
        type: 'Content',
        title: 'CSS Grid: The Two-Dimensional Powerhouse',
        content: [
          'Defines rows and columns to create a blueprint.',
          'Places items explicitly using line numbers or named areas.',
          'The fr (fraction) unit divides leftover space.',
        ],
      },
      {
        id: 45,
        type: 'Code',
        title: 'Grid Template Areas',
        content: 'Defining layout with ASCII art.',
        code: `.container {
  grid-template-areas:
    "header header"
    "sidebar content";
}
.header { grid-area: header; }
.sidebar { grid-area: sidebar; }`,
      },
      {
        id: 46,
        type: 'Content',
        title: 'Container Queries: The Self-Aware Component',
        content: [
          'Style a component based on its own size, not the viewport.',
          'Requires container-type: inline-size on the parent.',
          'Uses @container (min-width: ...) queries.',
        ],
      },
      {
        id: 47,
        type: 'Content',
        title: 'The Parent Selector: :has()',
        content: [
          'Style an element based on its children.',
          'Example: section:has(h2) { ... }',
          'Powerful but computationally expensive for the browser.',
        ],
      },
    ],
  },
  {
    id: 8,
    name: 'The JavaScript Engine (V8)',
    description: 'Explore how JavaScript is compiled and optimized in the V8 engine.',
    duration: 14,
    slides: [
      {
        id: 48,
        type: 'Title',
        title: 'The V8 Engine: Where Code Becomes Lightning',
        content: 'How your JavaScript is compiled and optimized.',
      },
      {
        id: 49,
        type: 'Content',
        title: 'V8\'s Multi-Stage Compilation Pipeline',
        content: [
          'Not a simple interpreter.',
          'A full JIT (Just-In-Time) compiler.',
          'Multiple stages for balancing speed and optimization.',
        ],
        animationId: 'v8-pipeline',
      },
      {
        id: 50,
        type: 'Diagram',
        title: 'From Source Code to Machine Code',
        content: [
          'Source Code → Parser (AST) → Ignition (Bytecode) → TurboFan (Optimized Code)',
          'Each stage builds on the previous.',
          'Feedback collection enables optimization decisions.',
        ],
        animationId: 'v8-pipeline',
      },
      {
        id: 51,
        type: 'Content',
        title: 'Step 2: Ignition - The Interpreter',
        content: [
          'Generates and executes fast, low-level bytecode.',
          'Executes code immediately for quick startup.',
          'Collects runtime profiling feedback (e.g., types, call frequency).',
        ],
      },
      {
        id: 52,
        type: 'Content',
        title: 'Step 3: TurboFan - The Optimizing Compiler',
        content: [
          'Takes "hot" functions and profiled feedback.',
          'Generates highly optimized machine code.',
          'Makes speculative assumptions (e.g., "this variable is always a string").',
        ],
      },
      {
        id: 53,
        type: 'Diagram',
        title: 'Hidden Classes: The Secret Optimization',
        content: [
          'Objects with the same properties get the same "hidden class".',
          'Property access becomes a direct memory offset lookup.',
          'Dramatically faster than a hash table lookup.',
        ],
      },
      {
        id: 54,
        type: 'Content',
        title: 'Inline Caching',
        content: [
          'Caches the result of a property lookup.',
          'First call is slow (full lookup).',
          'Subsequent calls are fast (use the cache).',
        ],
      },
      {
        id: 55,
        type: 'Content',
        title: 'Memory Management: The Garbage Collector',
        content: [
          'Generational: Most objects die young.',
          'Young Generation: Fast, copying collector.',
          'Old Generation: Incremental & concurrent mark-and-sweep.',
        ],
      },
    ],
  },
  {
    id: 9,
    name: 'The Event System',
    description: 'Understand the asynchronous event loop and how browsers handle interactions.',
    duration: 12,
    slides: [
      {
        id: 56,
        type: 'Title',
        title: 'The Web\'s Nervous System',
        content: 'How browsers handle interactions asynchronously.',
      },
      {
        id: 57,
        type: 'Content',
        title: 'The Heartbeat: The Event Loop',
        content: [
          'Constantly checks queues for tasks.',
          'Task Queue: Clicks, timers, network responses.',
          'Microtask Queue: Promises, queueMicrotask. Microtasks run after each task, before rendering.',
        ],
        animationId: 'event-loop',
      },
      {
        id: 58,
        type: 'Diagram',
        title: 'Event Loop Flow',
        content: [
          '1. Process one Task from the Task Queue.',
          '2. Process ALL Microtasks from the Microtask Queue.',
          '3. Render (if needed).',
          '4. Repeat.',
        ],
        animationId: 'event-loop',
      },
      {
        id: 59,
        type: 'Code',
        title: 'Event Loop in Action: Predicting Output',
        content: 'Understanding the order of execution.',
        code: `button.addEventListener('click', () => {
  console.log('Click');
  Promise.resolve().then(() => console.log('Promise'));
  setTimeout(() => console.log('Timeout'), 0);
});
// Output: Click, Promise, Timeout`,
      },
      {
        id: 60,
        type: 'Diagram',
        title: 'Event Propagation: The Three-Phase Journey',
        content: [
          '1. Capture: Event travels down from window to target.',
          '2. Target: Event fires on the target element.',
          '3. Bubble: Event travels back up to window.',
        ],
        animationId: 'event-propagation',
      },
    ],
  },
]
