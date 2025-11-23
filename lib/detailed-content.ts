// Detailed content and key terms for each slide
// This file contains the rich educational content displayed in Study Mode

export interface DetailedSlideContent {
    slideId: number
    detailedContent?: string
    keyTerms?: { term: string; definition: string }[]
}

export const detailedContent: Record<number, DetailedSlideContent> = {
    // Module 1: The Browser & Its Processes
    1: {
        slideId: 1,
        detailedContent: `
      <p>Welcome to a deep dive into the most widely used software in the world: the web browser. While we often think of the browser as a simple window to the internet, it is actually one of the most complex pieces of software ever built.</p>
      <p>Modern browsers like Chrome, Firefox, and Safari are not just applications; they are essentially operating systems running within your operating system. They manage memory, file systems, network connections, and even 3D graphics.</p>
      <p>In this course, we will peel back the layers of abstraction. We will trace the journey of a website from the moment you type a URL to the final pixel painted on your screen. You will learn about the multi-process architecture, the V8 JavaScript engine, the rendering pipeline, and the event loop.</p>
    `,
    },

    2: {
        slideId: 2,
        detailedContent: `
      <h3>The Early Days</h3>
      <p>In the early days of the web, browsers were single-process applications. This meant that the entire browser—the user interface, the network handling, the JavaScript execution, and the rendering of every single open tab—all lived within one operating system process.</p>
      
      <h3>The "Crash One, Crash All" Problem</h3>
      <p>This architecture had a fatal flaw. If a single website had a bug that caused an infinite loop or a memory leak, it wouldn't just freeze that one tab; it would bring down the entire browser. Imagine losing all your work in Google Docs because a news site in another tab crashed!</p>
      
      <h3>Security Risks</h3>
      <p>Furthermore, this model was insecure. Since everything shared the same memory space, a malicious website could potentially read data from other tabs (like your banking session) or even exploit bugs to take over the entire browser.</p>
    `,
        keyTerms: [
            { term: 'Process', definition: 'An instance of a computer program that is being executed by the OS. It has its own memory space.' },
            { term: 'Thread', definition: 'A unit of execution within a process. Threads share the same memory space.' },
        ],
    },

    3: {
        slideId: 3,
        detailedContent: `
      <h3>Chrome's Innovation</h3>
      <p>In 2008, Google Chrome introduced a revolutionary multi-process architecture. Instead of putting everything in one basket, Chrome separated different tasks into different processes.</p>
      
      <h3>Fault Isolation</h3>
      <p>Now, each tab (mostly) gets its own <strong>Renderer Process</strong>. If a tab crashes, that process dies, but the main <strong>Browser Process</strong> and other tabs stay alive. You see the "Aw, Snap!" error page instead of the entire browser closing.</p>
      
      <h3>Security Sandboxing</h3>
      <p>This also enables strict sandboxing. The operating system can restrict what each process is allowed to do. A Renderer Process, for example, is often forbidden from writing to your hard drive or reading arbitrary files.</p>
    `,
    },

    4: {
        slideId: 4,
        detailedContent: `
      <h3>The Kernel of the Browser</h3>
      <p>Think of the <strong>Browser Process</strong> as the "Kernel" or the CEO of the application. It is the first process created when you launch the browser.</p>
      
      <h3>Responsibilities</h3>
      <ul>
        <li><strong>UI Management:</strong> It draws the address bar, back/forward buttons, and bookmarks bar.</li>
        <li><strong>Coordination:</strong> It spawns and manages all other processes (Renderer, GPU, etc.).</li>
        <li><strong>Storage:</strong> It handles saving files to disk (cookies, cache, downloads).</li>
        <li><strong>Privilege:</strong> It runs with full user privileges, unlike the sandboxed Renderer processes.</li>
      </ul>
    `,
    },

    5: {
        slideId: 5,
        detailedContent: `
      <h3>The Worker Bee</h3>
      <p>The <strong>Renderer Process</strong> is where the magic happens. Its sole job is to take HTML, CSS, and JavaScript and turn them into a visual web page that you can interact with.</p>
      
      <h3>What's Inside?</h3>
      <ul>
        <li><strong>Blink (Rendering Engine):</strong> Parses HTML/CSS and calculates layout.</li>
        <li><strong>V8 (JS Engine):</strong> Compiles and executes your JavaScript code.</li>
      </ul>
      
      <h3>One Process Per Site</h3>
      <p>To ensure security (Site Isolation), modern browsers try to create a separate Renderer Process for each distinct website (e.g., google.com vs. facebook.com), even if they are in the same tab (like via an iframe).</p>
    `,
    },

    6: {
        slideId: 6,
        detailedContent: `
      <h3>The Full Team</h3>
      <p>Beyond the Browser and Renderer processes, there are other specialized utility processes:</p>
      
      <ul>
        <li><strong>GPU Process:</strong> Handles communication with your graphics card. It helps speed up painting and compositing. It's isolated because GPU drivers are a common source of crashes.</li>
        <li><strong>Network Service:</strong> Dedicated to handling network requests (DNS, TCP, TLS). This keeps sensitive network parsing out of the main Browser Process.</li>
      </ul>
      
      <h3>IPC (Inter-Process Communication)</h3>
      <p>Since these processes act like separate programs, they can't just share variables. They communicate via <strong>IPC</strong>. The Renderer asks the Browser Process to "Please load this URL," and the Browser Process tells the Network Service to "Fetch this data."</p>
    `,
    },

    // Module 2: The Network Journey
    7: {
        slideId: 7,
        detailedContent: `
      <p>Every time you visit a website, your browser performs an intricate dance of network communication. What seems instantaneous—typing a URL and seeing a page—involves multiple layers of protocols, security checks, and optimizations.</p>
      <p>In this module, we'll explore the journey from URL to rendered page, focusing on the network layer. You'll learn about DNS resolution, TCP connections, HTTP requests, and how modern browsers optimize these processes for speed.</p>
    `,
    },

    8: {
        slideId: 8,
        detailedContent: `
      <h3>Why a Separate Process?</h3>
      <p>The <strong>Network Service</strong> runs in its own process for security and stability. Network code is complex and deals with untrusted data from the internet, making it a prime target for exploits.</p>
      
      <h3>Responsibilities</h3>
      <ul>
        <li><strong>DNS Resolution:</strong> Translates domain names to IP addresses.</li>
        <li><strong>Connection Management:</strong> Maintains a pool of reusable TCP connections.</li>
        <li><strong>Security:</strong> Handles TLS/SSL encryption and certificate validation.</li>
        <li><strong>Cookie Management:</strong> Stores and sends cookies according to security policies.</li>
      </ul>
      
      <h3>Communication Flow</h3>
      <p>When a Renderer Process needs to fetch a resource, it sends an IPC message to the Browser Process, which forwards it to the Network Service. This indirection adds security but requires careful optimization.</p>
    `,
        keyTerms: [
            { term: 'IPC', definition: 'Inter-Process Communication - how separate processes exchange data.' },
            { term: 'TLS/SSL', definition: 'Transport Layer Security - encrypts data between browser and server.' },
        ],
    },

    9: {
        slideId: 9,
        detailedContent: `
      <h3>Step-by-Step Breakdown</h3>
      
      <h4>1. URL Parsing</h4>
      <p>The browser first parses the URL to extract the protocol (http/https), domain, port, and path. It also checks if the URL is safe (not on a phishing or malware list).</p>
      
      <h4>2. DNS Cache Check</h4>
      <p>Before making a network request, the browser checks multiple DNS caches:</p>
      <ul>
        <li>Browser's own cache</li>
        <li>Operating system's cache</li>
        <li>Router's cache</li>
      </ul>
      
      <h4>3. DNS Resolution</h4>
      <p>If not cached, the Network Service queries DNS servers (usually your ISP's). This can involve multiple round trips: root servers → TLD servers → authoritative servers.</p>
      
      <h4>4. Connection Establishment</h4>
      <p>Once the IP is known, the browser can establish a TCP connection (or reuse an existing one from the connection pool).</p>
    `,
    },

    10: {
        slideId: 10,
        detailedContent: `
      <h3>The Cost of New Connections</h3>
      <p>Establishing a new TCP connection requires a three-way handshake (SYN, SYN-ACK, ACK). For HTTPS, add a TLS handshake on top. This can take 100-300ms on a typical connection!</p>
      
      <h3>Connection Pooling</h3>
      <p>Modern browsers maintain a <strong>connection pool</strong>—a set of open TCP connections to servers you've recently visited. When you request a resource from the same server, the browser reuses an existing connection.</p>
      
      <h3>HTTP/2 and Multiplexing</h3>
      <p>HTTP/2 takes this further with <strong>multiplexing</strong>: multiple requests can share a single TCP connection simultaneously. This eliminates the "head-of-line blocking" problem of HTTP/1.1.</p>
    `,
        keyTerms: [
            { term: 'HTTP/2', definition: 'Modern protocol that allows multiple requests over one connection.' },
            { term: 'Multiplexing', definition: 'Sending multiple streams of data over a single connection.' },
        ],
    },

    11: {
        slideId: 11,
        detailedContent: `
      <h3>The Three-Way Handshake</h3>
      <p>TCP is a <strong>connection-oriented</strong> protocol, meaning it establishes a reliable connection before sending data.</p>
      
      <h4>Step 1: SYN (Synchronize)</h4>
      <p>The client sends a SYN packet with an initial sequence number. This says "I want to start a conversation, and I'll start counting from this number."</p>
      
      <h4>Step 2: SYN-ACK (Synchronize-Acknowledge)</h4>
      <p>The server responds with its own sequence number and acknowledges the client's number. This says "I got your message, here's my starting number."</p>
      
      <h4>Step 3: ACK (Acknowledge)</h4>
      <p>The client acknowledges the server's number. The connection is now established, and data can flow.</p>
      
      <h3>Why This Matters</h3>
      <p>This handshake adds latency (one round trip) but ensures both sides are ready and synchronized. It's why connection pooling is so important for performance.</p>
    `,
    },

    12: {
        slideId: 12,
        detailedContent: `
      <h3>Breaking Down the Request</h3>
      
      <h4>Request Line</h4>
      <p><code>GET / HTTP/1.1</code> - The method (GET), path (/), and protocol version.</p>
      
      <h4>Headers</h4>
      <ul>
        <li><strong>Host:</strong> The domain name (required in HTTP/1.1 for virtual hosting).</li>
        <li><strong>User-Agent:</strong> Identifies the browser and OS. Servers use this for analytics and compatibility.</li>
        <li><strong>Accept:</strong> Tells the server what content types the browser can handle.</li>
        <li><strong>Accept-Encoding:</strong> Compression formats the browser supports (gzip, brotli).</li>
        <li><strong>Connection: keep-alive:</strong> Requests that the connection stay open for reuse.</li>
      </ul>
      
      <h3>Additional Headers</h3>
      <p>Real requests include many more headers: cookies, cache directives, referrer, authentication, etc.</p>
    `,
    },

    13: {
        slideId: 13,
        detailedContent: `
      <h3>Development vs. Static File Server</h3>
      <p>A development server (like Vite, Webpack Dev Server, or Next.js dev) does much more than serve files:</p>
      
      <h4>Hot Module Replacement (HMR)</h4>
      <p>When you save a file, the dev server sends an update to the browser via WebSocket. The browser applies the change without a full page reload, preserving application state.</p>
      
      <h4>On-the-Fly Transpilation</h4>
      <p>Modern JavaScript (ES modules, JSX, TypeScript) is transformed to browser-compatible code as you request it. This is slower than production builds but enables instant feedback.</p>
      
      <h4>Proxying</h4>
      <p>Dev servers can proxy API requests to avoid CORS issues during development. Requests to <code>/api/*</code> are forwarded to your backend server.</p>
    `,
    },

    14: {
        slideId: 14,
        detailedContent: `
      <h3>Development Environment</h3>
      <ul>
        <li><strong>Source Maps:</strong> Map minified code back to original source for debugging.</li>
        <li><strong>Verbose Errors:</strong> Detailed error messages and stack traces.</li>
        <li><strong>No Caching:</strong> Always serve the latest version.</li>
      </ul>
      
      <h3>Production Environment</h3>
      <ul>
        <li><strong>CDN (Content Delivery Network):</strong> Static assets served from edge locations near users.</li>
        <li><strong>Minification:</strong> Remove whitespace, shorten variable names to reduce file size.</li>
        <li><strong>Compression:</strong> Gzip or Brotli compression for text assets.</li>
        <li><strong>Caching:</strong> Aggressive caching with cache-busting hashes in filenames.</li>
        <li><strong>Load Balancing:</strong> Distribute traffic across multiple servers.</li>
      </ul>
    `,
    },

    // Module 3: From Disk to Browser
    15: {
        slideId: 15,
        detailedContent: `
      <p>When you press Ctrl+S in your code editor, you initiate a chain of events that spans from your SSD's flash memory cells to the browser's rendering engine. This module explores the often-overlooked journey of data through the file system, operating system, and local network.</p>
      <p>We'll demystify system calls, understand the difference between HDDs and SSDs, and see how a development server binds to a port and serves your files.</p>
    `,
    },

    16: {
        slideId: 16,
        detailedContent: `
      <h3>The Save Operation</h3>
      <p>When you save a file, your editor doesn't directly write to the disk. Instead, it asks the operating system to do it via a <strong>system call</strong>.</p>
      
      <h4>Character Encoding</h4>
      <p>Your source code (text) is first encoded into bytes. UTF-8 is the standard: ASCII characters use 1 byte, while emoji and special characters use 2-4 bytes.</p>
      
      <h4>The write() System Call</h4>
      <p>The editor calls <code>write(fileDescriptor, buffer, length)</code>. This transitions from user space to kernel space, where the OS takes over.</p>
      
      <h4>Buffering and Caching</h4>
      <p>The OS doesn't immediately write to disk. It buffers writes in RAM for performance. A <code>fsync()</code> call forces a flush to disk.</p>
    `,
        keyTerms: [
            { term: 'System Call', definition: 'A request from user-space program to the OS kernel for a privileged operation.' },
            { term: 'UTF-8', definition: 'Variable-length character encoding that can represent all Unicode characters.' },
        ],
    },

    17: {
        slideId: 17,
        detailedContent: `
      <h3>Hard Disk Drives (HDD)</h3>
      <p>HDDs use spinning platters coated with magnetic material. A read/write head (like a record player needle) moves across the platter to access data.</p>
      <ul>
        <li><strong>Seek Time:</strong> Time for the head to move to the correct track (5-10ms).</li>
        <li><strong>Rotational Latency:</strong> Time for the platter to spin to the correct sector (4-8ms).</li>
        <li><strong>Transfer Rate:</strong> 100-200 MB/s for modern HDDs.</li>
      </ul>
      
      <h3>Solid State Drives (SSD)</h3>
      <p>SSDs use NAND flash memory—no moving parts. Data is stored as electrical charges in memory cells.</p>
      <ul>
        <li><strong>Access Time:</strong> ~0.1ms (100x faster than HDD).</li>
        <li><strong>Transfer Rate:</strong> 500-7000 MB/s (depending on interface: SATA vs. NVMe).</li>
        <li><strong>Wear Leveling:</strong> SSDs distribute writes evenly to prevent cell degradation.</li>
      </ul>
    `,
    },

    18: {
        slideId: 18,
        detailedContent: `
      <h3>Socket Programming Basics</h3>
      <p>A development server (Node.js, Python, etc.) uses <strong>sockets</strong> to communicate over the network.</p>
      
      <h4>1. socket()</h4>
      <p>Creates a socket—a file descriptor that represents a network endpoint. You specify the protocol family (IPv4/IPv6) and type (TCP/UDP).</p>
      
      <h4>2. bind()</h4>
      <p>Associates the socket with a specific port (e.g., 3000). The OS ensures no other process is using that port.</p>
      
      <h4>3. listen()</h4>
      <p>Marks the socket as passive, ready to accept incoming connections. You specify a backlog (max queued connections).</p>
      
      <h4>4. accept()</h4>
      <p>Blocks until a client connects. Returns a new socket for that specific client connection.</p>
    `,
        keyTerms: [
            { term: 'Socket', definition: 'An endpoint for network communication, identified by IP address and port.' },
            { term: 'Port', definition: 'A 16-bit number (0-65535) that identifies a specific process on a machine.' },
        ],
    },

    19: {
        slideId: 19,
        detailedContent: `
      <h3>What is localhost?</h3>
      <p><code>localhost</code> (127.0.0.1) is a special IP address that always refers to "this computer." It's handled by the <strong>loopback interface</strong>.</p>
      
      <h3>No Physical Network</h3>
      <p>When you connect to localhost:3000, the data never touches your network card. The OS short-circuits the network stack and delivers packets directly to the destination process.</p>
      
      <h3>Why Use Loopback?</h3>
      <ul>
        <li><strong>Speed:</strong> No network latency or bandwidth limits.</li>
        <li><strong>Security:</strong> Traffic is invisible to other machines on the network.</li>
        <li><strong>Testing:</strong> Develop and test without an internet connection.</li>
      </ul>
    `,
    },

    20: {
        slideId: 20,
        detailedContent: `
      <h3>Response Structure</h3>
      
      <h4>Status Line</h4>
      <p><code>HTTP/1.1 200 OK</code> - Protocol version, status code, and reason phrase.</p>
      
      <h4>Headers</h4>
      <ul>
        <li><strong>Content-Type:</strong> Tells the browser this is HTML encoded in UTF-8.</li>
        <li><strong>Content-Length:</strong> Size of the body in bytes (helps browser know when the response is complete).</li>
        <li><strong>Connection: keep-alive:</strong> Keep the TCP connection open for future requests.</li>
      </ul>
      
      <h4>Body</h4>
      <p>The actual HTML content. The browser will parse this to build the DOM.</p>
      
      <h3>Status Codes</h3>
      <ul>
        <li><strong>2xx:</strong> Success (200 OK, 201 Created)</li>
        <li><strong>3xx:</strong> Redirection (301 Moved Permanently, 304 Not Modified)</li>
        <li><strong>4xx:</strong> Client Error (404 Not Found, 403 Forbidden)</li>
        <li><strong>5xx:</strong> Server Error (500 Internal Server Error)</li>
      </ul>
    `,
    },

    // Module 4: Parsing & The DOM
    21: {
        slideId: 21,
        detailedContent: `
      <p>HTML parsing is one of the most complex tasks a browser performs. Unlike programming languages with strict syntax, HTML is designed to be forgiving—browsers must handle broken, malformed, and ambiguous markup gracefully.</p>
      <p>In this module, we'll explore the multi-stage parsing pipeline: character decoding, tokenization, tree construction, and the creation of the DOM—a live, queryable object graph.</p>
    `,
    },

    22: {
        slideId: 22,
        detailedContent: `
      <h3>The Encoding Problem</h3>
      <p>HTML arrives as a stream of bytes. To interpret them as characters, the browser needs to know the <strong>character encoding</strong>.</p>
      
      <h4>Detection Methods</h4>
      <ol>
        <li><strong>HTTP Header:</strong> <code>Content-Type: text/html; charset=UTF-8</code></li>
        <li><strong>BOM (Byte Order Mark):</strong> Special bytes at the start of the file (UTF-8: EF BB BF).</li>
        <li><strong>Meta Tag:</strong> <code>&lt;meta charset="UTF-8"&gt;</code> in the HTML.</li>
        <li><strong>Heuristics:</strong> If all else fails, the browser guesses based on byte patterns.</li>
      </ol>
      
      <h3>Why This Matters</h3>
      <p>If the browser guesses wrong, characters will be garbled (mojibake). This is why you see  symbols or strange characters on misconfigured websites.</p>
    `,
        keyTerms: [
            { term: 'Character Encoding', definition: 'A mapping between bytes and characters (e.g., UTF-8, ISO-8859-1).' },
            { term: 'BOM', definition: 'Byte Order Mark - special bytes indicating encoding and byte order.' },
        ],
    },

    23: {
        slideId: 23,
        detailedContent: `
      <h3>What is Tokenization?</h3>
      <p>The <strong>tokenizer</strong> (or lexer) reads the character stream and produces a stream of tokens: start tags, end tags, attributes, text, comments, etc.</p>
      
      <h4>Example</h4>
      <p>Input: <code>&lt;div id="main"&gt;Hello&lt;/div&gt;</code></p>
      <p>Tokens:</p>
      <ul>
        <li>StartTag: div, attributes: {id: "main"}</li>
        <li>Character: "Hello"</li>
        <li>EndTag: div</li>
      </ul>
      
      <h3>The State Machine</h3>
      <p>The tokenizer uses a <strong>finite state machine</strong> with over 65 states. Context matters: the same character has different meanings inside a tag vs. inside a script block.</p>
      
      <h4>Special Contexts</h4>
      <ul>
        <li><strong>&lt;script&gt;:</strong> Everything inside is JavaScript, not HTML.</li>
        <li><strong>&lt;style&gt;:</strong> CSS rules, not HTML.</li>
        <li><strong>Comments:</strong> <code>&lt;!-- ... --&gt;</code> are ignored.</li>
      </ul>
    `,
    },

    24: {
        slideId: 24,
        detailedContent: `
      <h3>From Linear to Hierarchical</h3>
      <p>HTML is a linear stream of text, but it represents a hierarchical structure. The parser's job is to construct this tree.</p>
      
      <h4>Example</h4>
      <pre><code>&lt;html&gt;
  &lt;body&gt;
    &lt;h1&gt;Title&lt;/h1&gt;
    &lt;p&gt;Paragraph&lt;/p&gt;
  &lt;/body&gt;
&lt;/html&gt;</code></pre>
      
      <p>Becomes:</p>
      <pre><code>html
├── body
    ├── h1
    │   └── "Title"
    └── p
        └── "Paragraph"</code></pre>
    `,
    },

    25: {
        slideId: 25,
        detailedContent: `
      <h3>Error Tolerance</h3>
      <p>Unlike most parsers, the HTML parser is <strong>error-tolerant</strong>. It must handle real-world HTML, which is often broken.</p>
      
      <h4>Common Fixes</h4>
      <ul>
        <li><strong>Unclosed tags:</strong> <code>&lt;p&gt;Text</code> → Browser auto-closes the &lt;p&gt;.</li>
        <li><strong>Misnested tags:</strong> <code>&lt;b&gt;&lt;i&gt;Text&lt;/b&gt;&lt;/i&gt;</code> → Browser rearranges to valid nesting.</li>
        <li><strong>Missing tags:</strong> No &lt;html&gt; or &lt;body&gt;? Browser adds them.</li>
      </ul>
      
      <h3>The Adoption Agency Algorithm</h3>
      <p>This complex algorithm handles misnested formatting tags (like &lt;b&gt; and &lt;i&gt;). It "adopts" orphaned nodes to create a valid tree.</p>
    `,
        keyTerms: [
            { term: 'Error Tolerance', definition: 'The parser\'s ability to handle malformed input and produce a valid tree.' },
            { term: 'Adoption Agency', definition: 'Algorithm for fixing misnested formatting elements in HTML.' },
        ],
    },

    26: {
        slideId: 26,
        detailedContent: `
      <h3>What is the DOM?</h3>
      <p>The <strong>Document Object Model</strong> is not just a data structure—it's a live, queryable API. JavaScript can read and modify it, and changes immediately affect the rendered page.</p>
      
      <h3>Node Types</h3>
      <ul>
        <li><strong>Element:</strong> HTML tags (&lt;div&gt;, &lt;p&gt;, etc.)</li>
        <li><strong>Text:</strong> Text content inside elements</li>
        <li><strong>Comment:</strong> HTML comments</li>
        <li><strong>Document:</strong> The root node</li>
      </ul>
      
      <h3>Tree Navigation</h3>
      <p>Every node has properties to navigate the tree:</p>
      <ul>
        <li><code>parentNode</code>, <code>childNodes</code>, <code>firstChild</code>, <code>lastChild</code></li>
        <li><code>nextSibling</code>, <code>previousSibling</code></li>
      </ul>
    `,
    },

    27: {
        slideId: 27,
        detailedContent: `
      <h3>The document Object</h3>
      <p>The global <code>document</code> object is the entry point to the DOM. It has hundreds of properties and methods:</p>
      <ul>
        <li><code>document.getElementById()</code>, <code>document.querySelector()</code></li>
        <li><code>document.createElement()</code>, <code>document.createTextNode()</code></li>
        <li><code>document.body</code>, <code>document.head</code>, <code>document.title</code></li>
      </ul>
      
      <h3>Specialized Element Objects</h3>
      <p>Each HTML element becomes a specific JavaScript object:</p>
      <ul>
        <li><code>&lt;div&gt;</code> → <code>HTMLDivElement</code></li>
        <li><code>&lt;button&gt;</code> → <code>HTMLButtonElement</code> (has <code>.click()</code> method)</li>
        <li><code>&lt;input&gt;</code> → <code>HTMLInputElement</code> (has <code>.value</code> property)</li>
      </ul>
      
      <h3>Live Updates</h3>
      <p>When you modify the DOM with JavaScript, the browser immediately updates the rendering. This is why <code>element.textContent = "New"</code> changes what you see on screen.</p>
    `,
    },

    28: {
        slideId: 28,
        detailedContent: `
      <h3>The Distinction</h3>
      <p>This is a common source of confusion. <strong>Attributes</strong> and <strong>properties</strong> are related but different.</p>
      
      <h4>Attributes</h4>
      <p>Attributes are defined in the HTML:</p>
      <pre><code>&lt;input id="username" value="John"&gt;</code></pre>
      <p>Accessed via: <code>element.getAttribute('value')</code> → "John"</p>
      
      <h4>Properties</h4>
      <p>Properties are JavaScript object properties:</p>
      <pre><code>input.value // "John" initially</code></pre>
      
      <h3>They Diverge</h3>
      <p>If a user types in the input, <code>input.value</code> (property) changes, but <code>getAttribute('value')</code> (attribute) stays "John".</p>
      
      <h3>Synchronization</h3>
      <p>For some attributes (like <code>id</code>), the browser keeps them in sync. For others (like <code>value</code>), they can diverge.</p>
    `,
        keyTerms: [
            { term: 'Attribute', definition: 'Initial value from HTML markup, accessed via getAttribute().' },
            { term: 'Property', definition: 'Live JavaScript object property, accessed via dot notation.' },
        ],
    },

    // Module 5: CSS & The Render Tree
    29: {
        slideId: 29,
        detailedContent: `
      <p>The DOM alone is just a skeleton—a tree of elements with no visual styling. CSS (Cascading Style Sheets) brings the design, transforming plain structure into beautiful, interactive interfaces.</p>
      <p>In this module, we'll explore how browsers parse CSS, build the CSSOM (CSS Object Model), apply the cascade algorithm, and merge styles with the DOM to create the Render Tree—the blueprint for what you see on screen.</p>
    `,
    },

    30: {
        slideId: 30,
        detailedContent: `
      <h3>CSS Parsing</h3>
      <p>Like HTML, CSS must be parsed from text into a data structure the browser can work with. The <strong>CSSOM</strong> (CSS Object Model) is the result.</p>
      
      <h4>Tokenization</h4>
      <p>The CSS parser breaks the stylesheet into tokens:</p>
      <ul>
        <li><code>.container</code> → CLASS_SELECTOR</li>
        <li><code>{</code> → LEFT_BRACE</li>
        <li><code>color</code> → PROPERTY</li>
        <li><code>:</code> → COLON</li>
        <li><code>blue</code> → VALUE</li>
      </ul>
      
      <h3>The CSSOM Tree</h3>
      <p>The CSSOM is organized as a tree of style rules. Each rule has:</p>
      <ul>
        <li><strong>Selector:</strong> What elements it applies to (.container, #header)</li>
        <li><strong>Declarations:</strong> Property-value pairs (color: blue, margin: 10px)</li>
      </ul>
      
      <h3>Render-Blocking</h3>
      <p>CSS is <strong>render-blocking</strong>. The browser won't render the page until the CSSOM is built, because it needs to know the styles before painting.</p>
    `,
        keyTerms: [
            { term: 'CSSOM', definition: 'CSS Object Model - the parsed representation of stylesheets.' },
            { term: 'Render-Blocking', definition: 'Resources that prevent the browser from rendering until they are loaded.' },
        ],
    },

    31: {
        slideId: 31,
        detailedContent: `
      <h3>The Cascade Algorithm</h3>
      <p>When multiple CSS rules apply to the same element, the browser uses the <strong>cascade</strong> to determine which style wins.</p>
      
      <h4>1. Importance & Origin</h4>
      <p>Rules are prioritized by origin (highest to lowest):</p>
      <ol>
        <li><strong>User !important:</strong> User's custom styles with !important</li>
        <li><strong>Author !important:</strong> Your CSS with !important</li>
        <li><strong>Author:</strong> Your normal CSS</li>
        <li><strong>User:</strong> User's custom styles</li>
        <li><strong>Browser:</strong> Default browser styles</li>
      </ol>
      
      <h4>2. Specificity</h4>
      <p>If origins are equal, specificity decides. Calculated as (inline, IDs, classes, tags):</p>
      <ul>
        <li><code>style="color: red"</code> → (1, 0, 0, 0)</li>
        <li><code>#header</code> → (0, 1, 0, 0)</li>
        <li><code>.container .item</code> → (0, 0, 2, 0)</li>
        <li><code>div p</code> → (0, 0, 0, 2)</li>
      </ul>
      
      <h4>3. Source Order</h4>
      <p>If specificity is equal, the last rule in source order wins.</p>
    `,
        keyTerms: [
            { term: 'Cascade', definition: 'Algorithm for resolving conflicts when multiple CSS rules apply to an element.' },
            { term: 'Specificity', definition: 'A weight determining which CSS rule is most specific to an element.' },
        ],
    },

    32: {
        slideId: 32,
        detailedContent: `
      <h3>Building the Render Tree</h3>
      <p>The Render Tree is the combination of the DOM and CSSOM. It represents what will actually be rendered on screen.</p>
      
      <h4>What Gets Included?</h4>
      <p>Only <strong>visible</strong> elements make it into the Render Tree:</p>
      <ul>
        <li>✅ <code>&lt;div&gt;</code>, <code>&lt;p&gt;</code>, <code>&lt;img&gt;</code></li>
        <li>❌ <code>&lt;head&gt;</code>, <code>&lt;script&gt;</code>, <code>&lt;meta&gt;</code></li>
        <li>❌ Elements with <code>display: none</code></li>
      </ul>
      
      <h3>RenderObjects</h3>
      <p>Each node in the Render Tree is a <strong>RenderObject</strong> (or LayoutObject in Blink). It contains:</p>
      <ul>
        <li><strong>Computed styles:</strong> Final values after cascade (e.g., <code>margin: 20px</code>)</li>
        <li><strong>Layout information:</strong> Size, position (calculated later)</li>
        <li><strong>Paint instructions:</strong> How to draw the element</li>
      </ul>
      
      <h3>Note: display: none vs. visibility: hidden</h3>
      <p><code>display: none</code> removes the element from the Render Tree entirely. <code>visibility: hidden</code> keeps it in the tree (takes up space) but doesn't paint it.</p>
    `,
    },

    33: {
        slideId: 33,
        detailedContent: `
      <h3>The RenderObject Abstraction</h3>
      <p>A <strong>RenderObject</strong> is a C++ object in the browser's rendering engine. Each represents a visual element that needs to be laid out and painted.</p>
      
      <h4>Types of RenderObjects</h4>
      <ul>
        <li><strong>RenderBlock:</strong> Block-level elements (div, p, h1)</li>
        <li><strong>RenderInline:</strong> Inline elements (span, a, strong)</li>
        <li><strong>RenderText:</strong> Text nodes</li>
        <li><strong>RenderImage:</strong> Images</li>
        <li><strong>RenderFlexibleBox:</strong> Flexbox containers</li>
      </ul>
      
      <h3>Computed Styles</h3>
      <p>RenderObjects store <strong>computed styles</strong>—the final, resolved values:</p>
      <ul>
        <li><code>width: 50%</code> → <code>400px</code> (if parent is 800px)</li>
        <li><code>color: inherit</code> → <code>rgb(0, 0, 0)</code></li>
        <li><code>margin: 1em</code> → <code>16px</code> (if font-size is 16px)</li>
      </ul>
    `,
    },

    34: {
        slideId: 34,
        detailedContent: `
      <h3>The Box Model</h3>
      <p>Every element in CSS is a rectangular box composed of four layers:</p>
      
      <h4>1. Content Box</h4>
      <p>The innermost area where text and images appear. Size controlled by <code>width</code> and <code>height</code>.</p>
      
      <h4>2. Padding</h4>
      <p>Space between content and border. Controlled by <code>padding</code>. Background color extends into padding.</p>
      
      <h4>3. Border</h4>
      <p>The edge of the element. Controlled by <code>border-width</code>, <code>border-style</code>, <code>border-color</code>.</p>
      
      <h4>4. Margin</h4>
      <p>Space outside the border, separating this element from others. Controlled by <code>margin</code>. Transparent (doesn't show background).</p>
      
      <h3>box-sizing Property</h3>
      <ul>
        <li><strong>content-box (default):</strong> <code>width</code> applies to content only. Total width = width + padding + border.</li>
        <li><strong>border-box:</strong> <code>width</code> includes padding and border. Total width = width.</li>
      </ul>
      
      <h3>Margin Collapse</h3>
      <p>Vertical margins between adjacent blocks collapse (merge) into a single margin equal to the larger of the two.</p>
    `,
        keyTerms: [
            { term: 'Box Model', definition: 'The CSS model describing the rectangular boxes generated for elements.' },
            { term: 'box-sizing', definition: 'Property controlling whether width includes padding and border.' },
        ],
    },

    // Module 6: Layout, Paint, and Composition
    35: {
        slideId: 35,
        detailedContent: `
      <p>We've built the DOM, parsed CSS, and created the Render Tree. Now comes the final act: transforming this abstract tree into actual pixels on your screen.</p>
      <p>This happens in three stages: <strong>Layout</strong> (calculating positions), <strong>Paint</strong> (filling in pixels), and <strong>Composition</strong> (combining layers). Understanding these stages is crucial for performance optimization.</p>
    `,
    },

    36: {
        slideId: 36,
        detailedContent: `
      <h3>What is Layout?</h3>
      <p><strong>Layout</strong> (also called Reflow) is the process of calculating the exact geometry of every element—its width, height, and position on the page.</p>
      
      <h4>The Algorithm</h4>
      <p>Layout is a recursive, top-down process:</p>
      <ol>
        <li>Start at the root (usually <code>&lt;html&gt;</code>)</li>
        <li>Calculate the element's size based on its content and CSS</li>
        <li>Position its children relative to it</li>
        <li>Recurse into each child</li>
      </ol>
      
      <h3>Layout Constraints</h3>
      <p>Different layout modes have different rules:</p>
      <ul>
        <li><strong>Block Layout:</strong> Elements stack vertically, take full width</li>
        <li><strong>Inline Layout:</strong> Elements flow horizontally like text</li>
        <li><strong>Flexbox:</strong> Flexible sizing and alignment</li>
        <li><strong>Grid:</strong> Two-dimensional layout system</li>
      </ul>
      
      <h3>Performance Impact</h3>
      <p>Layout is expensive! Changing certain CSS properties (width, height, position) triggers a full reflow. This is why animations should use <code>transform</code> instead.</p>
    `,
        keyTerms: [
            { term: 'Layout/Reflow', definition: 'The process of calculating element positions and sizes.' },
            { term: 'Layout Thrashing', definition: 'Repeatedly forcing layout recalculation, causing performance issues.' },
        ],
    },

    37: {
        slideId: 37,
        detailedContent: `
      <h3>Box Model in Layout</h3>
      <p>During layout, the browser uses the Box Model to calculate the total space an element occupies.</p>
      
      <h4>Calculation Example</h4>
      <p>Given:</p>
      <pre><code>width: 200px;
padding: 20px;
border: 5px;
margin: 10px;</code></pre>
      
      <p>With <code>box-sizing: content-box</code> (default):</p>
      <ul>
        <li>Content width: 200px</li>
        <li>Total width: 200 + 40 (padding) + 10 (border) + 20 (margin) = 270px</li>
      </ul>
      
      <p>With <code>box-sizing: border-box</code>:</p>
      <ul>
        <li>Total width (including padding/border): 200px</li>
        <li>Content width: 200 - 40 - 10 = 150px</li>
      </ul>
    `,
    },

    38: {
        slideId: 38,
        detailedContent: `
      <h3>What is Paint?</h3>
      <p><strong>Paint</strong> (or Rasterization) is the process of filling in pixels. The browser takes the layout information and creates actual bitmaps—grids of colored pixels.</p>
      
      <h4>Paint Order</h4>
      <p>Elements are painted in a specific order (back to front):</p>
      <ol>
        <li>Background color/image</li>
        <li>Border</li>
        <li>Children (recursively)</li>
        <li>Outline</li>
      </ol>
      
      <h3>Text Rendering</h3>
      <p>Text is particularly complex:</p>
      <ul>
        <li><strong>Font Loading:</strong> The browser must load the font file</li>
        <li><strong>Glyph Shaping:</strong> Convert characters to visual glyphs</li>
        <li><strong>Kerning:</strong> Adjust spacing between letter pairs (e.g., "AV")</li>
        <li><strong>Subpixel Rendering:</strong> Use RGB subpixels for smoother text</li>
      </ul>
      
      <h3>Paint Layers</h3>
      <p>The browser creates separate paint layers for elements with certain properties (position: fixed, transform, opacity). This enables efficient repainting.</p>
    `,
        keyTerms: [
            { term: 'Rasterization', definition: 'Converting vector graphics and text into a bitmap of pixels.' },
            { term: 'Paint Layer', definition: 'A separate bitmap that can be painted independently.' },
        ],
    },

    39: {
        slideId: 39,
        detailedContent: `
      <h3>What is Composition?</h3>
      <p><strong>Composition</strong> is the final step where the Compositor thread combines all the painted layers and sends them to the GPU to be drawn on screen.</p>
      
      <h4>Why Separate Layers?</h4>
      <p>Layers enable performance optimizations:</p>
      <ul>
        <li><strong>Scrolling:</strong> The compositor can move layers without repainting</li>
        <li><strong>Animations:</strong> <code>transform</code> and <code>opacity</code> can be animated on the compositor thread (no main thread involvement!)</li>
        <li><strong>Partial Updates:</strong> Only changed layers need to be repainted</li>
      </ul>
      
      <h3>The GPU's Role</h3>
      <p>The GPU is extremely fast at compositing layers. It can:</p>
      <ul>
        <li>Blend layers with different opacities</li>
        <li>Apply transforms (translate, rotate, scale)</li>
        <li>Handle thousands of layers at 60 FPS</li>
      </ul>
      
      <h3>Compositor-Only Properties</h3>
      <p>These properties can be animated without triggering layout or paint:</p>
      <ul>
        <li><code>transform</code></li>
        <li><code>opacity</code></li>
      </ul>
      <p>This is why they're recommended for animations!</p>
    `,
    },

    40: {
        slideId: 40,
        detailedContent: `
      <h3>Performance Benefits</h3>
      <p>When you animate <code>transform</code> or <code>opacity</code>, the browser can skip the expensive Layout and Paint steps entirely.</p>
      
      <h4>The Pipeline</h4>
      <p><strong>Bad (triggers all steps):</strong></p>
      <pre><code>// Animating 'left' property
element.style.left = '100px'
// Layout → Paint → Composite</code></pre>
      
      <p><strong>Good (compositor-only):</strong></p>
      <pre><code>// Animating 'transform' property
element.style.transform = 'translateX(100px)'
// Composite only!</code></pre>
      
      <h3>60 FPS Goal</h3>
      <p>To achieve smooth 60 FPS animations, each frame must complete in ~16ms. Compositor-only animations can easily hit this target because they bypass the main thread.</p>
    `,
    },

    // Module 7: Advanced Layout & CSS Power
    41: {
        slideId: 41,
        detailedContent: `
      <p>Modern CSS has evolved far beyond simple styling. Today's layout systems—Flexbox and Grid—are sophisticated algorithms that can handle complex responsive designs with minimal code.</p>
      <p>In this module, we'll explore these powerful layout modes, along with cutting-edge features like Container Queries and the :has() selector that are changing how we think about component-based design.</p>
    `,
    },

    42: {
        slideId: 42,
        detailedContent: `
      <h3>What is Flexbox?</h3>
      <p><strong>Flexbox</strong> (Flexible Box Layout) is a one-dimensional layout system designed for distributing space along a single axis (row or column).</p>
      
      <h4>Key Concepts</h4>
      <ul>
        <li><strong>Flex Container:</strong> The parent element with <code>display: flex</code></li>
        <li><strong>Flex Items:</strong> Direct children of the flex container</li>
        <li><strong>Main Axis:</strong> Primary direction (row or column)</li>
        <li><strong>Cross Axis:</strong> Perpendicular to main axis</li>
      </ul>
      
      <h3>Flex Properties</h3>
      <ul>
        <li><strong>flex-grow:</strong> How much an item should grow relative to others (default: 0)</li>
        <li><strong>flex-shrink:</strong> How much an item should shrink (default: 1)</li>
        <li><strong>flex-basis:</strong> Initial size before growing/shrinking (default: auto)</li>
      </ul>
      
      <h4>Example</h4>
      <pre><code>.item {
  flex: 1 0 200px;
  /* grow: 1, shrink: 0, basis: 200px */
}</code></pre>
    `,
    },

    43: {
        slideId: 43,
        detailedContent: `
      <h3>Flexbox Space Distribution Algorithm</h3>
      <p>Flexbox uses a sophisticated algorithm to distribute space among flex items.</p>
      
      <h4>Step 1: Calculate Hypothetical Sizes</h4>
      <p>Sum up all <code>flex-basis</code> values (or content sizes if basis is auto).</p>
      
      <h4>Step 2: Determine Available Space</h4>
      <p>Available space = Container size - Total flex-basis</p>
      
      <h4>Step 3: Distribute Extra Space</h4>
      <p>If positive (extra space):</p>
      <ul>
        <li>Distribute proportionally based on <code>flex-grow</code> values</li>
        <li>Item with <code>flex-grow: 2</code> gets twice as much as <code>flex-grow: 1</code></li>
      </ul>
      
      <p>If negative (overflow):</p>
      <ul>
        <li>Shrink items proportionally based on <code>flex-shrink</code> values</li>
        <li>Weighted by the item's flex-basis (larger items shrink more)</li>
      </ul>
    `,
    },

    44: {
        slideId: 44,
        detailedContent: `
      <h3>What is CSS Grid?</h3>
      <p><strong>CSS Grid</strong> is a two-dimensional layout system that excels at creating complex layouts with rows and columns.</p>
      
      <h4>Grid Terminology</h4>
      <ul>
        <li><strong>Grid Container:</strong> Element with <code>display: grid</code></li>
        <li><strong>Grid Items:</strong> Direct children</li>
        <li><strong>Grid Lines:</strong> Dividing lines (numbered from 1)</li>
        <li><strong>Grid Tracks:</strong> Rows or columns</li>
        <li><strong>Grid Cells:</strong> Single unit of the grid</li>
        <li><strong>Grid Areas:</strong> Rectangular space spanning multiple cells</li>
      </ul>
      
      <h3>The fr Unit</h3>
      <p>The <code>fr</code> (fraction) unit represents a fraction of the available space in the grid container.</p>
      <pre><code>grid-template-columns: 1fr 2fr 1fr;
/* Middle column is twice as wide */</code></pre>
      
      <h3>Grid vs. Flexbox</h3>
      <ul>
        <li><strong>Use Flexbox:</strong> One-dimensional layouts, content-driven sizing</li>
        <li><strong>Use Grid:</strong> Two-dimensional layouts, layout-driven sizing</li>
      </ul>
    `,
    },

    45: {
        slideId: 45,
        detailedContent: `
      <h3>Grid Template Areas</h3>
      <p>One of Grid's most powerful features is the ability to define layouts using ASCII art-like syntax.</p>
      
      <h4>Benefits</h4>
      <ul>
        <li><strong>Visual:</strong> The CSS resembles the actual layout</li>
        <li><strong>Semantic:</strong> Named areas are more meaningful than line numbers</li>
        <li><strong>Flexible:</strong> Easy to reorganize for responsive design</li>
      </ul>
      
      <h4>Example: Responsive Layout</h4>
      <pre><code>/* Mobile */
.container {
  grid-template-areas:
    "header"
    "content"
    "sidebar"
    "footer";
}

/* Desktop */
@media (min-width: 768px) {
  .container {
    grid-template-areas:
      "header header"
      "sidebar content"
      "footer footer";
  }
}</code></pre>
    `,
    },

    46: {
        slideId: 46,
        detailedContent: `
      <h3>Container Queries: The Future of Responsive Design</h3>
      <p><strong>Container Queries</strong> allow components to adapt based on their container's size, not the viewport size.</p>
      
      <h4>Why This Matters</h4>
      <p>Traditional media queries only know about the viewport. But a component in a sidebar needs different styles than the same component in the main content area.</p>
      
      <h4>Setup</h4>
      <pre><code>.card-container {
  container-type: inline-size;
  container-name: card;
}

@container card (min-width: 400px) {
  .card {
    display: grid;
    grid-template-columns: 1fr 2fr;
  }
}</code></pre>
      
      <h3>Container Query Units</h3>
      <ul>
        <li><code>cqw</code> - 1% of container width</li>
        <li><code>cqh</code> - 1% of container height</li>
        <li><code>cqi</code> - 1% of container inline size</li>
      </ul>
    `,
    },

    47: {
        slideId: 47,
        detailedContent: `
      <h3>The :has() Selector: Parent Selection</h3>
      <p>For years, CSS couldn't select a parent based on its children. <code>:has()</code> changes that.</p>
      
      <h4>Syntax</h4>
      <pre><code>/* Select article that contains an image */
article:has(img) {
  display: grid;
}

/* Select form with invalid input */
form:has(input:invalid) {
  border: 2px solid red;
}</code></pre>
      
      <h3>Use Cases</h3>
      <ul>
        <li><strong>Conditional layouts:</strong> Different styles based on content presence</li>
        <li><strong>Form validation:</strong> Style forms based on input state</li>
        <li><strong>Card variations:</strong> Adjust card layout if it has an image</li>
      </ul>
      
      <h3>Performance Consideration</h3>
      <p>:has() is powerful but expensive. The browser must check every child whenever the DOM changes. Use sparingly and avoid on frequently-updated elements.</p>
    `,
    },

    // Module 8: The JavaScript Engine (V8)
    48: {
        slideId: 48,
        detailedContent: `
      <p>JavaScript is an interpreted language, right? Wrong! Modern JavaScript engines like V8 use sophisticated Just-In-Time (JIT) compilation to achieve performance rivaling compiled languages.</p>
      <p>In this module, we'll explore V8's multi-stage compilation pipeline, optimization techniques like hidden classes and inline caching, and how the garbage collector manages memory.</p>
    `,
    },

    49: {
        slideId: 49,
        detailedContent: `
      <h3>V8's Architecture</h3>
      <p>V8 is not a simple interpreter. It's a full JIT (Just-In-Time) compiler with multiple stages designed to balance startup speed with peak performance.</p>
      
      <h4>The Pipeline</h4>
      <ol>
        <li><strong>Parser:</strong> Converts source code to Abstract Syntax Tree (AST)</li>
        <li><strong>Ignition:</strong> Interprets bytecode for fast startup</li>
        <li><strong>TurboFan:</strong> Optimizing compiler for hot code</li>
      </ol>
      
      <h3>Why Multiple Stages?</h3>
      <p>Compiling everything to optimized machine code upfront would be slow. V8's tiered approach:</p>
      <ul>
        <li><strong>Fast startup:</strong> Ignition executes code immediately</li>
        <li><strong>Peak performance:</strong> TurboFan optimizes frequently-run code</li>
        <li><strong>Adaptive:</strong> Optimization decisions based on runtime profiling</li>
      </ul>
    `,
    },

    50: {
        slideId: 50,
        detailedContent: `
      <h3>The Compilation Pipeline</h3>
      
      <h4>Stage 1: Parsing</h4>
      <p>The parser converts JavaScript source code into an Abstract Syntax Tree (AST)—a tree representation of the code's structure.</p>
      
      <h4>Stage 2: Ignition (Interpreter)</h4>
      <p>Ignition generates compact bytecode from the AST. This bytecode is:</p>
      <ul>
        <li>Smaller than machine code (saves memory)</li>
        <li>Platform-independent</li>
        <li>Fast to generate</li>
      </ul>
      
      <h4>Stage 3: TurboFan (Optimizing Compiler)</h4>
      <p>When a function becomes "hot" (called many times), TurboFan compiles it to highly optimized machine code using profiling feedback.</p>
      
      <h3>Deoptimization</h3>
      <p>If TurboFan's assumptions are violated (e.g., a variable changes type), the code "deoptimizes" back to bytecode. This is expensive, so consistent types improve performance.</p>
    `,
    },

    51: {
        slideId: 51,
        detailedContent: `
      <h3>Ignition: The Interpreter</h3>
      <p>Ignition is V8's bytecode interpreter. It executes code quickly without the overhead of full compilation.</p>
      
      <h4>Bytecode</h4>
      <p>Bytecode is a low-level, platform-independent instruction set. Example:</p>
      <pre><code>// JavaScript
function add(a, b) {
  return a + b;
}

// Bytecode (simplified)
Ldar a0  // Load argument 0 into accumulator
Add a1   // Add argument 1
Return   // Return accumulator</code></pre>
      
      <h3>Profiling Feedback</h3>
      <p>While executing, Ignition collects profiling data:</p>
      <ul>
        <li><strong>Type feedback:</strong> What types are variables?</li>
        <li><strong>Call frequency:</strong> Which functions are hot?</li>
        <li><strong>Branch prediction:</strong> Which if/else branches are taken?</li>
      </ul>
      
      <p>This data guides TurboFan's optimization decisions.</p>
    `,
    },

    52: {
        slideId: 52,
        detailedContent: `
      <h3>TurboFan: The Optimizing Compiler</h3>
      <p>TurboFan takes hot functions and compiles them to highly optimized machine code.</p>
      
      <h4>Speculative Optimization</h4>
      <p>TurboFan makes assumptions based on profiling feedback:</p>
      <ul>
        <li>"This variable is always a number" → Use fast integer operations</li>
        <li>"This property always exists" → Skip property checks</li>
        <li>"This function is always called with 2 arguments" → Optimize for that case</li>
      </ul>
      
      <h3>Optimization Techniques</h3>
      <ul>
        <li><strong>Inlining:</strong> Replace function calls with function body</li>
        <li><strong>Escape Analysis:</strong> Allocate objects on stack instead of heap</li>
        <li><strong>Dead Code Elimination:</strong> Remove unreachable code</li>
        <li><strong>Loop Unrolling:</strong> Reduce loop overhead</li>
      </ul>
      
      <h3>Writing Optimization-Friendly Code</h3>
      <ul>
        <li>Use consistent types (don't change variable types)</li>
        <li>Initialize objects in constructor (same shape)</li>
        <li>Avoid <code>delete</code> operator (changes object shape)</li>
      </ul>
    `,
    },

    53: {
        slideId: 53,
        detailedContent: `
      <h3>Hidden Classes: V8's Secret Weapon</h3>
      <p><strong>Hidden Classes</strong> (also called Shapes or Maps) are V8's way of optimizing property access on objects.</p>
      
      <h4>The Problem</h4>
      <p>JavaScript objects are essentially hash maps. Property access requires a hash lookup—slow!</p>
      
      <h4>The Solution</h4>
      <p>V8 creates a hidden class for each unique object structure. Objects with the same properties (in the same order) share a hidden class.</p>
      
      <h4>Example</h4>
      <pre><code>function Point(x, y) {
  this.x = x;  // Hidden class C0 → C1
  this.y = y;  // Hidden class C1 → C2
}

const p1 = new Point(1, 2);  // Uses C2
const p2 = new Point(3, 4);  // Also uses C2!</code></pre>
      
      <h3>Property Access Optimization</h3>
      <p>With hidden classes, property access becomes a direct memory offset:</p>
      <pre><code>// Instead of: hash_lookup("x")
// V8 does: memory[object_address + x_offset]</code></pre>
      
      <h3>Anti-Pattern</h3>
      <pre><code>// BAD: Different property order
const p1 = { x: 1, y: 2 };
const p2 = { y: 2, x: 1 };  // Different hidden class!</code></pre>
    `,
    },

    54: {
        slideId: 54,
        detailedContent: `
      <h3>Inline Caching (IC)</h3>
      <p><strong>Inline Caching</strong> is a technique to speed up repeated property accesses and method calls.</p>
      
      <h4>How It Works</h4>
      <p>The first time a property is accessed:</p>
      <ol>
        <li>V8 performs a full lookup (slow)</li>
        <li>Caches the result at the call site</li>
        <li>Records the object's hidden class</li>
      </ol>
      
      <p>On subsequent accesses:</p>
      <ol>
        <li>Check if hidden class matches cached class</li>
        <li>If yes, use cached offset (fast!)</li>
        <li>If no, perform full lookup and update cache</li>
      </ol>
      
      <h3>IC States</h3>
      <ul>
        <li><strong>Uninitialized:</strong> Never executed</li>
        <li><strong>Monomorphic:</strong> Seen one hidden class (fastest)</li>
        <li><strong>Polymorphic:</strong> Seen 2-4 hidden classes (slower)</li>
        <li><strong>Megamorphic:</strong> Seen 5+ hidden classes (slowest, no caching)</li>
      </ul>
      
      <h3>Performance Tip</h3>
      <p>Keep functions monomorphic by passing objects with the same shape.</p>
    `,
    },

    55: {
        slideId: 55,
        detailedContent: `
      <h3>Garbage Collection in V8</h3>
      <p>V8 uses a <strong>generational garbage collector</strong> based on the observation that most objects die young.</p>
      
      <h4>Young Generation (Scavenger)</h4>
      <p>New objects are allocated here. The collector:</p>
      <ul>
        <li>Runs frequently (every few MB allocated)</li>
        <li>Uses a copying algorithm (very fast)</li>
        <li>Pauses execution briefly (~1-10ms)</li>
      </ul>
      
      <h4>Old Generation (Major GC)</h4>
      <p>Objects that survive multiple young GC cycles are promoted here. The collector:</p>
      <ul>
        <li>Runs less frequently</li>
        <li>Uses mark-and-sweep algorithm</li>
        <li>Runs incrementally and concurrently (minimal pauses)</li>
      </ul>
      
      <h3>Memory Leaks</h3>
      <p>Common causes:</p>
      <ul>
        <li>Forgotten event listeners</li>
        <li>Global variables</li>
        <li>Closures holding references</li>
        <li>Detached DOM nodes</li>
      </ul>
    `,
    },

    // Module 9: The Event System
    56: {
        slideId: 56,
        detailedContent: `
      <p>The web is fundamentally asynchronous. User clicks, network responses, timers—all happen unpredictably. The Event Loop is the mechanism that coordinates all this chaos into a smooth, responsive experience.</p>
      <p>In this module, we'll explore the Event Loop, task queues, microtasks, and event propagation—the nervous system of the web.</p>
    `,
    },

    57: {
        slideId: 57,
        detailedContent: `
      <h3>The Event Loop</h3>
      <p>The <strong>Event Loop</strong> is the mechanism that allows JavaScript to perform non-blocking I/O despite being single-threaded.</p>
      
      <h4>The Loop</h4>
      <pre><code>while (true) {
  task = taskQueue.dequeue();
  execute(task);
  
  while (microtaskQueue.hasItems()) {
    microtask = microtaskQueue.dequeue();
    execute(microtask);
  }
  
  if (needsRendering()) {
    render();
  }
}</code></pre>
      
      <h3>Task Queue (Macrotasks)</h3>
      <p>Contains:</p>
      <ul>
        <li>setTimeout/setInterval callbacks</li>
        <li>I/O operations</li>
        <li>UI events (clicks, scrolls)</li>
        <li>postMessage</li>
      </ul>
      
      <h3>Microtask Queue</h3>
      <p>Contains:</p>
      <ul>
        <li>Promise callbacks (.then, .catch, .finally)</li>
        <li>queueMicrotask()</li>
        <li>MutationObserver callbacks</li>
      </ul>
      
      <h3>Key Rule</h3>
      <p>ALL microtasks run before the next task or render.</p>
    `,
    },

    58: {
        slideId: 58,
        detailedContent: `
      <h3>Event Loop Flow</h3>
      
      <h4>Step 1: Execute One Task</h4>
      <p>Dequeue and execute one task from the task queue. This could be a click handler, timer callback, etc.</p>
      
      <h4>Step 2: Execute All Microtasks</h4>
      <p>Process the entire microtask queue. If a microtask enqueues another microtask, it runs in the same cycle.</p>
      
      <h4>Step 3: Render (if needed)</h4>
      <p>The browser may choose to render (update the screen). Typically aims for 60 FPS (every ~16ms).</p>
      
      <h4>Step 4: Repeat</h4>
      
      <h3>Example Execution Order</h3>
      <pre><code>console.log('1');

setTimeout(() => console.log('2'), 0);

Promise.resolve().then(() => console.log('3'));

console.log('4');

// Output: 1, 4, 3, 2</code></pre>
      
      <p>Explanation:</p>
      <ol>
        <li>Synchronous code runs first (1, 4)</li>
        <li>Microtasks run next (3)</li>
        <li>Tasks run last (2)</li>
      </ol>
    `,
    },

    59: {
        slideId: 59,
        detailedContent: `
      <h3>Predicting Execution Order</h3>
      <p>Understanding the event loop is crucial for debugging asynchronous code.</p>
      
      <h4>Analysis of the Example</h4>
      <pre><code>button.addEventListener('click', () => {
  console.log('Click');              // 1. Synchronous
  Promise.resolve()
    .then(() => console.log('Promise')); // 2. Microtask
  setTimeout(() => console.log('Timeout'), 0); // 3. Task
});</code></pre>
      
      <p>When clicked:</p>
      <ol>
        <li><strong>'Click':</strong> Runs immediately (synchronous)</li>
        <li><strong>'Promise':</strong> Microtask, runs after current task</li>
        <li><strong>'Timeout':</strong> New task, runs in next event loop iteration</li>
      </ol>
      
      <h3>Common Pitfall: Infinite Microtasks</h3>
      <pre><code>function loop() {
  Promise.resolve().then(loop);
}
loop();
// Browser freezes! Microtasks never end.</code></pre>
    `,
    },

    60: {
        slideId: 60,
        detailedContent: `
      <h3>Event Propagation</h3>
      <p>When an event occurs on an element, it doesn't just fire on that element—it travels through the DOM tree in three phases.</p>
      
      <h4>Phase 1: Capture (Trickling Down)</h4>
      <p>Event travels from <code>window</code> down to the target element.</p>
      <ul>
        <li>Rarely used</li>
        <li>Opt-in with <code>addEventListener(event, handler, true)</code></li>
      </ul>
      
      <h4>Phase 2: Target</h4>
      <p>Event fires on the target element itself.</p>
      
      <h4>Phase 3: Bubble (Bubbling Up)</h4>
      <p>Event travels back up from target to <code>window</code>.</p>
      <ul>
        <li>Most event listeners use this phase (default)</li>
        <li>Enables event delegation</li>
      </ul>
      
      <h3>Stopping Propagation</h3>
      <ul>
        <li><code>event.stopPropagation()</code> - Stops further propagation</li>
        <li><code>event.stopImmediatePropagation()</code> - Also prevents other listeners on same element</li>
      </ul>
      
      <h3>Event Delegation</h3>
      <p>Instead of adding listeners to many children, add one to the parent:</p>
      <pre><code>// Instead of this:
items.forEach(item => {
  item.addEventListener('click', handler);
});

// Do this:
parent.addEventListener('click', (e) => {
  if (e.target.matches('.item')) {
    handler(e);
  }
});</code></pre>
    `,
    },
}
