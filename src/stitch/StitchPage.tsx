import { faq } from "../data/faq"
import { SocialGlyph, StitchContactForm, StitchCopyEmail, StitchHeader, StitchSkills, StitchStackLine, StitchSystemMap, StitchTerminal } from "./StitchParts"

export function StitchPage() {
  return (
    <>
<div aria-hidden="true" className="page-field">
  <div className="page-field-grid" />
  <div className="page-orb page-orb-a" />
  <div className="page-orb page-orb-b" />
  <div className="page-beam page-beam-1" />
  <div className="page-beam page-beam-2" />
  <div className="page-beam page-beam-3" />
  <div className="page-dot page-dot-1" />
  <div className="page-dot page-dot-2" />
  <div className="page-dot page-dot-3" />
  <div className="page-dot page-dot-4" />
  <div className="page-dot page-dot-5" />
  <div className="page-dot page-dot-6" />
</div>
<StitchHeader /><main className="relative z-10 w-full pt-16 min-h-screen"><div className="flex flex-col w-full text-on-surface">
{/* THEME CONTROLLER & TELEMETRY SCRIPT */}

{/* 00 // HERO SECTION */}
<section className="relative w-full max-w-[1280px] mx-auto px-gutter-mobile lg:px-gutter py-space-xl lg:py-margin overflow-hidden" id="home">
<div className="relative grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
{/* Left Column: Architectural Thesis */}
<div className="lg:col-span-7 flex flex-col gap-space-lg">
{/* Live Status Metric Pill */}
<div className="flex flex-wrap items-center gap-space-sm">
<div className="inline-flex items-center gap-space-xs px-space-sm py-1 rounded-full bg-surface-container-high">
<span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
<span className="font-mono-meta text-mono-meta tracking-wider uppercase text-on-surface-variant">STRONG CODER • VIBE WITH DEPTH</span>
</div>
<div className="inline-flex items-center gap-space-xs px-space-sm py-1 rounded-full bg-surface-container-low">
<span className="material-symbols-outlined text-primary text-[14px]">terminal</span>
<span className="font-mono-meta text-mono-meta text-on-surface-variant uppercase">Open to AI Engineer roles</span>
</div>
</div>
{/* Hero Headline */}
<div className="flex flex-col gap-space-xs">
<h1 className="font-display-xl text-[32px] leading-[40px] tracking-tight text-on-surface sm:text-display-xl">
            Mohit Nagda
          </h1>
<p className="font-headline-md text-headline-md text-primary mt-space-xs">
            Real code. Vibe speed. Zero shortcuts.
          </p>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mt-space-sm">
            I am <strong className="text-on-surface font-semibold">Mohit Nagda</strong> - a strong AI engineer from Udaipur first, and a vibe coder who covers the whole stack without cutting corners. Speed from vibes, depth from real engineering: production LLM pipelines, RAG that retrieves with receipts, clinical NLP for notes that matter, and Python backends that stay up - no half-built demos, no missing pieces. Then the tools people actually use: multilingual farming chatbots, document summarizers, meeting-to-task flows, and OCR that reads the label.
          </p>
</div>
<StitchTerminal />
{/* Telemetry Data Strip */}
<div className="grid grid-cols-1 gap-space-sm rounded bg-surface-container-low p-space-md shadow-sm sm:grid-cols-3">
<div className="flex flex-col">
<span className="font-mono-meta text-mono-meta text-outline uppercase">EDUCATION</span>
<span className="font-mono-metric text-mono-metric text-on-surface font-medium">B.Tech CS (AI)</span>
<span className="font-mono-meta text-mono-meta text-primary font-semibold">CGPA 9.0 / 10.0</span>
</div>
<div className="flex flex-col">
<span className="font-mono-meta text-mono-meta text-outline uppercase">LOCATION</span>
<span className="font-mono-metric text-mono-metric text-on-surface font-medium">Udaipur, India</span>
<span className="font-mono-meta text-mono-meta text-primary font-semibold">Remote or relocate</span>
</div>
<div className="flex flex-col">
<span className="font-mono-meta text-mono-meta text-outline uppercase">STATUS</span>
<span className="font-mono-metric text-mono-metric text-on-surface font-medium">Open to roles</span>
<span className="font-mono-meta text-mono-meta text-on-surface-variant">AI Engineer</span>
</div>
</div>
{/* Action Matrix */}
<div className="flex flex-wrap items-center gap-space-md pt-space-xs">
<a className="inline-flex items-center gap-space-sm px-space-lg py-space-sm rounded font-mono-metric text-mono-metric font-medium bg-primary text-on-primary hover:bg-primary-fixed-dim transition-all shadow-md" href="#projects">
<span className="">Explore My Work</span>
<span className="material-symbols-outlined text-[16px]">arrow_downward</span>
</a>
<a className="inline-flex items-center gap-space-sm px-space-lg py-space-sm rounded font-mono-metric text-mono-metric text-on-surface bg-surface-container hover:bg-surface-container-high transition-colors" href="#contact">
<span className="">Let's Connect</span>
<span className="material-symbols-outlined text-[16px]">send</span>
</a>
<a className="inline-flex items-center gap-space-xs px-space-md py-space-sm rounded font-mono-meta text-mono-meta text-primary hover:text-on-surface transition-colors" href="#system-map">
<span className="material-symbols-outlined text-[14px]">account_tree</span>
<span className="">View Architecture Map →</span>
</a>
</div>
{/* Social Handles Strip */}
<div className="flex flex-wrap items-center gap-space-md pt-space-sm font-mono-meta text-mono-meta text-on-surface sm:gap-space-lg">
<a className="flex items-center gap-space-xs transition-colors hover:text-primary" href="https://github.com/mohitt38" rel="noopener noreferrer" target="_blank">
<span className="material-symbols-outlined text-[14px]">code</span> github.com/mohitt38
          </a>
<a className="flex items-center gap-space-xs transition-colors hover:text-primary" href="https://www.linkedin.com/in/mohitnagda/" rel="noopener noreferrer" target="_blank">
<SocialGlyph name="linkedin" /> linkedin.com/in/mohitnagda
          </a>
<a className="flex items-center gap-space-xs transition-colors hover:text-primary" href="https://www.instagram.com/_.mohiittt__/" rel="noopener noreferrer" target="_blank">
<SocialGlyph name="instagram" /> instagram
          </a>
<a className="flex items-center gap-space-xs transition-colors hover:text-primary" href="https://x.com/mohitt_19" rel="noopener noreferrer" target="_blank">
<SocialGlyph name="x" /> x.com/mohitt_19
          </a>
<a className="flex items-center gap-space-xs transition-colors hover:text-primary" href="mailto:nagdamohit19@gmail.com">
<span className="material-symbols-outlined text-[14px]">mail</span> nagdamohit19@gmail.com
          </a>
</div>
</div>
{/* Right Column: Developer Avatar & Spatial Telemetry Frame */}
<div className="lg:col-span-5 relative flex flex-col items-center">
{/* Blueprint Back-Glow Ambient Circle */}
<div className="absolute -inset-4 bg-primary-container/10 rounded-full blur-3xl pointer-events-none"></div>
<div className="relative w-full max-w-[420px] rounded-xl bg-surface-container-low shadow-xl p-space-md flex flex-col gap-space-md overflow-hidden">
{/* Frame Meta Header */}
<div className="flex items-center justify-between pb-space-xs">
<div className="flex items-center gap-space-xs">
<span className="w-2 h-2 rounded-full bg-primary"></span>
<span className="font-mono-meta text-mono-meta uppercase tracking-wider text-on-surface-variant">SPEC: GEN-AI / RAG / PYTHON</span>
</div>
<span className="font-mono-meta text-mono-meta text-primary">SYS.ID: NAGDA.EXE</span>
</div>
{/* Developer Avatar Frame */}
<div className="relative w-full aspect-square rounded-lg bg-surface-container-lowest flex items-center justify-center overflow-hidden">
<img alt="Mohit Nagda - AI Systems Engineer" className="w-full h-full object-cover object-center filter drop-shadow-[0_8px_24px_rgba(0,0,0,0.6)]" src="/stitch-portrait.jpg"/>
{/* Corner Telemetry Overlay Ticks */}
<div className="absolute bottom-2 right-2 z-20 max-w-[calc(100%-1rem)] rounded bg-[#0c0e11]/95 px-space-xs py-1 text-right font-mono-meta text-[10px] leading-snug text-[#e2e2e6] shadow-sm">
              OPEN TO ROLES<br />
              <span className="font-semibold text-[#adc6ff]">UDAIPUR • REMOTE • RELOCATE</span>
            </div>
<div className="scanline-effect absolute inset-x-0 h-16 bg-gradient-to-b from-transparent via-primary/20 to-transparent pointer-events-none z-10"></div><div className="absolute inset-0 pointer-events-none border border-primary/20 rounded-lg"></div></div>
{/* Bottom Micro Telemetry Metrics */}
<div className="flex items-center justify-between font-mono-meta text-mono-meta p-space-sm rounded bg-surface-container">
<div className="flex flex-col">
<span className="text-outline uppercase text-[10px]">AFFILIATION</span>
<span className="text-on-surface font-medium">GITS CS (AI) • 2027</span>
</div>
<div className="flex flex-col text-right">
<span className="text-outline uppercase text-[10px]">STATUS</span>
<span className="text-primary font-medium">Open to roles</span>
</div>
</div>
</div>
</div>
</div>
</section>
<StitchStackLine />
{/* 01 // ABOUT SECTION */}
<section className="w-full bg-surface-container-lowest py-space-xl lg:py-margin" id="about">
<div className="max-w-[1280px] mx-auto px-gutter-mobile lg:px-gutter flex flex-col gap-space-xl">
{/* Section Header */}
<div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
<div className="flex flex-col gap-space-xs">
<div className="flex items-center gap-space-xs">
<span className="font-mono-meta text-mono-meta text-primary font-semibold">01 // CONTEXT &amp; PHILOSOPHY</span>
<span className="text-outline">-</span>
<span className="font-mono-meta text-mono-meta text-on-surface-variant uppercase">ARCHITECTURAL PROFILE</span>
</div>
<h2 className="font-headline-lg text-headline-lg text-on-surface">Curiosity drives the build.</h2>
</div>
<p className="font-mono-metric text-mono-metric text-outline max-w-md">
          Designing at the intersection of statistical machine learning, language models, and high-performance server architectures.
        </p>
</div>
{/* Narrative Context */}
<div className="p-space-lg rounded-lg bg-surface-container flex flex-col md:flex-row gap-space-xl items-start">
<div className="md:w-2/3 flex flex-col gap-space-md text-on-surface-variant font-body-md text-body-md leading-relaxed">
<p className="">
            I am a final-year Computer Science and Engineering student specializing in Artificial Intelligence at Geetanjali Institute of Technical Studies (GITS), Udaipur, maintaining a <strong className="text-on-surface">9.0 / 10.0 CGPA</strong>. My work focuses on demystifying applied AI - bridging the gap between cutting-edge foundation models and deterministic, reliable software solutions.
          </p>
<p className="">
            Rather than assembling superficial wrapper prototypes, I investigate the inner mechanics of language models: vector indices, semantic embeddings, context management, and latency-optimized inference loops. Across my internships and research projects, I have developed tools ranging from multilingual agronomic reasoning engines to automated clinical note synthesizers.
          </p>
</div>
<div className="md:w-1/3 flex flex-col gap-space-sm w-full">
<div className="p-space-md rounded bg-surface-container-high flex flex-col gap-space-xs">
<span className="font-mono-meta text-mono-meta text-outline uppercase">CORE SPECIALIZATION</span>
<span className="font-headline-sm text-headline-sm text-on-surface">Applied Generative AI &amp; RAG</span>
<span className="font-mono-meta text-mono-meta text-primary">Python • LangChain • FastAPI</span>
</div>
<div className="p-space-md rounded bg-surface-container-high flex flex-col gap-space-xs">
<span className="font-mono-meta text-mono-meta text-outline uppercase">VERIFIED MILESTONE</span>
<span className="font-headline-sm text-headline-sm text-on-surface">2 Peer-Reviewed Papers</span>
<span className="font-mono-meta text-mono-meta text-on-surface-variant">Healthcare AI • Agentic Workflows</span>
</div>
</div>
</div>
{/* 3 Distinct Editorial Information Blocks */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
{/* Block 01: AI Systems */}
<div className="p-space-lg rounded-lg bg-surface-container-low hover:bg-surface-container transition-all flex flex-col justify-between gap-space-lg group">
<div className="flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<span className="font-mono-meta text-mono-meta text-primary font-semibold">BLOCK 01</span>
<span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors">psychology</span>
</div>
<h3 className="font-headline-md text-headline-md text-on-surface">AI Systems &amp; RAG</h3>
<p className="font-body-md text-body-md text-on-surface-variant">
              Designing contextual retrieval pipelines, hybrid search mechanisms, and prompt routing. Mitigating hallucinations with grounded domain knowledge for farmers and clinical professionals.
            </p>
</div>
<div className="flex flex-wrap gap-space-xs font-mono-meta text-[11px] text-outline pt-space-xs">
<span className="px-2 py-0.5 rounded bg-surface-container-highest">ChromaDB</span>
<span className="px-2 py-0.5 rounded bg-surface-container-highest">LangChain</span>
<span className="px-2 py-0.5 rounded bg-surface-container-highest">Llama-3</span>
</div>
</div>
{/* Block 02: Engineering */}
<div className="p-space-lg rounded-lg bg-surface-container-low hover:bg-surface-container transition-all flex flex-col justify-between gap-space-lg group">
<div className="flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<span className="font-mono-meta text-mono-meta text-primary font-semibold">BLOCK 02</span>
<span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors">developer_board</span>
</div>
<h3 className="font-headline-md text-headline-md text-on-surface">Production Engineering</h3>
<p className="font-body-md text-body-md text-on-surface-variant">
              Developing resilient Python services with FastAPI and Flask. Architecting automated script-to-content generation pipelines and streaming API endpoints.
            </p>
</div>
<div className="flex flex-wrap gap-space-xs font-mono-meta text-[11px] text-outline pt-space-xs">
<span className="px-2 py-0.5 rounded bg-surface-container-highest">FastAPI</span>
<span className="px-2 py-0.5 rounded bg-surface-container-highest">Flask</span>
<span className="px-2 py-0.5 rounded bg-surface-container-highest">Python</span>
</div>
</div>
{/* Block 03: Research */}
<div className="p-space-lg rounded-lg bg-surface-container-low hover:bg-surface-container transition-all flex flex-col justify-between gap-space-lg group">
<div className="flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<span className="font-mono-meta text-mono-meta text-primary font-semibold">BLOCK 03</span>
<span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors">biotech</span>
</div>
<h3 className="font-headline-md text-headline-md text-on-surface">Clinical AI Research</h3>
<p className="font-body-md text-body-md text-on-surface-variant">
              Benchmarking LLMs for healthcare SOAP note generation, medical entity classification, and autonomous clinical agents. Validating factual consistency and diagnostic reasoning.
            </p>
</div>
<div className="flex flex-wrap gap-space-xs font-mono-meta text-[11px] text-outline pt-space-xs">
<span className="px-2 py-0.5 rounded bg-surface-container-highest">Clinical NLP</span>
<span className="px-2 py-0.5 rounded bg-surface-container-highest">SOAP Notes</span>
<span className="px-2 py-0.5 rounded bg-surface-container-highest">Agentic AI</span>
</div>
</div>
</div>
</div>
</section>
{/* 02 // CAREER TIMELINE SECTION */}
<section className="w-full py-space-xl lg:py-margin" id="experience">
<div className="max-w-[1280px] mx-auto px-gutter-mobile lg:px-gutter flex flex-col gap-space-xl">
{/* Section Header */}
<div className="flex flex-col gap-space-xs">
<div className="flex items-center gap-space-xs">
<span className="font-mono-meta text-mono-meta text-primary font-semibold">02 // TRACK RECORD</span>
<span className="text-outline">-</span>
<span className="font-mono-meta text-mono-meta text-on-surface-variant uppercase">INDUSTRY EXPERIENCE</span>
</div>
<h2 className="font-headline-lg text-headline-lg text-on-surface">Learning by building.</h2>
</div>
{/* Experience Stream */}
<div className="flex flex-col gap-space-md">
{/* Role 01: Toba Tech Solutions */}
<div className="p-space-lg rounded-lg bg-surface-container-low hover:bg-surface-container transition-all flex flex-col lg:flex-row gap-space-lg justify-between shadow-sm">
<div className="lg:w-1/3 flex flex-col gap-space-xs">
<div className="inline-flex items-center gap-space-xs px-space-sm py-0.5 rounded bg-surface-container-highest w-fit">
<span className="font-mono-meta text-mono-meta text-on-surface-variant uppercase">FULL STACK INTERNSHIP</span>
</div>
<h3 className="font-headline-md text-headline-md text-on-surface">Full Stack Intern</h3>
<span className="font-mono-metric text-mono-metric text-primary">Toba Tech Solutions</span>
<span className="font-mono-meta text-mono-meta text-outline">Udaipur, Rajasthan • July 2026 - November 2026</span>
</div>
<div className="lg:w-2/3 flex flex-col gap-space-md">
<ul className="flex flex-col gap-space-sm text-body-md font-body-md text-on-surface-variant list-none">
<li className="flex items-start gap-space-sm">
<span className="material-symbols-outlined text-primary text-[18px] mt-1 shrink-0">check_circle</span>
<span className="">Architecting high-throughput backend services for <strong className="text-on-surface">ContentX</strong>, handling automated image synthesis and script transformation workloads.</span>
</li>
<li className="flex items-start gap-space-sm">
<span className="material-symbols-outlined text-primary text-[18px] mt-1 shrink-0">check_circle</span>
<span className="">Optimizing REST API responses and background asynchronous task queues to decrease latency across generative pipelines by 38%.</span>
</li>
<li className="flex items-start gap-space-sm">
<span className="material-symbols-outlined text-primary text-[18px] mt-1 shrink-0">check_circle</span>
<span className="">Integrating stable generative visual pipelines with robust error handling and multi-client payload validation.</span>
</li>
</ul>
<div className="flex flex-wrap gap-space-xs font-mono-meta text-[11px] text-outline pt-space-xs">
<span className="px-2 py-1 rounded bg-surface-container">Frontend</span>
<span className="px-2 py-1 rounded bg-surface-container">Python</span>
<span className="px-2 py-1 rounded bg-surface-container">FastAPI</span>
<span className="px-2 py-1 rounded bg-surface-container">ContentX</span>
<span className="px-2 py-1 rounded bg-surface-container">AI Image Pipelines</span>
</div>
</div>
</div>
{/* Role 02: Tech Adaptive Pandit */}
<div className="p-space-lg rounded-lg bg-surface-container-low hover:bg-surface-container transition-all flex flex-col lg:flex-row gap-space-lg justify-between shadow-sm">
<div className="lg:w-1/3 flex flex-col gap-space-xs">
<div className="inline-flex items-center gap-space-xs px-space-sm py-0.5 rounded bg-surface-container-highest w-fit">
<span className="font-mono-meta text-mono-meta text-on-surface-variant uppercase">RESEARCH INTERNSHIP</span>
</div>
<h3 className="font-headline-md text-headline-md text-on-surface">AI Research Intern</h3>
<span className="font-mono-metric text-mono-metric text-primary">Tech Adaptive Pandit Pty Ltd</span>
<span className="font-mono-meta text-mono-meta text-outline">Australia • Remote • Jan 2026 - June 2026</span>
</div>
<div className="lg:w-2/3 flex flex-col gap-space-md">
<ul className="flex flex-col gap-space-sm text-body-md font-body-md text-on-surface-variant list-none">
<li className="flex items-start gap-space-sm">
<span className="material-symbols-outlined text-primary text-[18px] mt-1 shrink-0">check_circle</span>
<span className="">Conducted applied research on foundational language models for autonomous <strong className="text-on-surface">Clinical SOAP note generation</strong> from patient-clinician conversations.</span>
</li>
<li className="flex items-start gap-space-sm">
<span className="material-symbols-outlined text-primary text-[18px] mt-1 shrink-0">check_circle</span>
<span className="">Formulated prompt engineering paradigms and token scoring protocols that minimized factual hallucinations in medical summary outputs.</span>
</li>
<li className="flex items-start gap-space-sm">
<span className="material-symbols-outlined text-primary text-[18px] mt-1 shrink-0">check_circle</span>
<span className="">Co-authored 2 research papers documenting multi-agent clinical automation frameworks and empirical evaluation metrics.</span>
</li>
</ul>
<div className="flex flex-wrap gap-space-xs font-mono-meta text-[11px] text-outline pt-space-xs">
<span className="px-2 py-1 rounded bg-surface-container">Clinical NLP</span>
<span className="px-2 py-1 rounded bg-surface-container">LLM Benchmarking</span>
<span className="px-2 py-1 rounded bg-surface-container">SOAP Notes</span>
<span className="px-2 py-1 rounded bg-surface-container">Agentic Systems</span>
</div>
</div>
</div>
{/* Role 03: Grass Solutions */}
<div className="p-space-lg rounded-lg bg-surface-container-low hover:bg-surface-container transition-all flex flex-col lg:flex-row gap-space-lg justify-between shadow-sm">
<div className="lg:w-1/3 flex flex-col gap-space-xs">
<div className="inline-flex items-center gap-space-xs px-space-sm py-0.5 rounded bg-surface-container-highest w-fit">
<span className="font-mono-meta text-mono-meta text-on-surface-variant uppercase">ML INTERNSHIP</span>
</div>
<h3 className="font-headline-md text-headline-md text-on-surface">AI/ML Intern</h3>
<span className="font-mono-metric text-mono-metric text-primary">Grass Solutions Pvt. Ltd.</span>
<span className="font-mono-meta text-mono-meta text-outline">Udaipur, Rajasthan • June 2025 - August 2025</span>
</div>
<div className="lg:w-2/3 flex flex-col gap-space-md">
<ul className="flex flex-col gap-space-sm text-body-md font-body-md text-on-surface-variant list-none">
<li className="flex items-start gap-space-sm">
<span className="material-symbols-outlined text-primary text-[18px] mt-1 shrink-0">check_circle</span>
<span className="">Constructed complete machine learning pipelines spanning data cleaning, exploratory analysis, categorical feature engineering, and model validation.</span>
</li>
<li className="flex items-start gap-space-sm">
<span className="material-symbols-outlined text-primary text-[18px] mt-1 shrink-0">check_circle</span>
<span className="">Implemented predictive classifiers and regression pipelines with Scikit-learn, achieving consistent test accuracy improvements across baseline benchmarks.</span>
</li>
<li className="flex items-start gap-space-sm">
<span className="material-symbols-outlined text-primary text-[18px] mt-1 shrink-0">check_circle</span>
<span className="">Collaborated on internal analytics dashboards utilizing Pandas, NumPy, and Matplotlib for automated report generation.</span>
</li>
</ul>
<div className="flex flex-wrap gap-space-xs font-mono-meta text-[11px] text-outline pt-space-xs">
<span className="px-2 py-1 rounded bg-surface-container">Scikit-learn</span>
<span className="px-2 py-1 rounded bg-surface-container">Pandas &amp; NumPy</span>
<span className="px-2 py-1 rounded bg-surface-container">Model Evaluation</span>
<span className="px-2 py-1 rounded bg-surface-container">Data Pipelines</span>
</div>
</div>
</div>
</div>
</div>
</section>
<StitchSystemMap />
{/* 03 // SELECTED WORK (PROJECTS) */}
<section className="w-full py-space-xl lg:py-margin" id="projects">
<div className="max-w-[1280px] mx-auto px-gutter-mobile lg:px-gutter flex flex-col gap-space-xl">
{/* Section Header */}
<div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
<div className="flex flex-col gap-space-xs">
<div className="flex items-center gap-space-xs">
<span className="font-mono-meta text-mono-meta text-primary font-semibold">03 // DELIVERED ARTIFACTS</span>
<span className="text-outline">-</span>
<span className="font-mono-meta text-mono-meta text-on-surface-variant uppercase">PRODUCTION ARCHITECTURES</span>
</div>
<h2 className="font-headline-lg text-headline-lg text-on-surface">Ideas into working systems.</h2>
</div>
<p className="font-mono-metric text-mono-metric text-outline max-w-md">
          Applied solutions built for domain challenges: agriculture, document intelligence, speech-to-action, and automated computer vision OCR.
        </p>
</div>
{/* Projects Grid */}
<div className="flex flex-col gap-space-xl">
{/* PROJECT 01: AGRINOVA */}
<div className="p-space-lg rounded-xl bg-surface-container-low flex flex-col lg:flex-row gap-space-xl items-center shadow-lg">
<div className="lg:w-1/2 flex flex-col gap-space-md">
<div className="flex items-center gap-space-xs">
<span className="font-mono-meta text-mono-meta text-primary font-semibold">PROJECT // 01</span>
<span className="text-outline">•</span>
<span className="font-mono-meta text-mono-meta text-on-surface-variant">GENERATIVE AI • RAG • AGRI-TECH</span>
</div>
<h3 className="font-headline-lg text-headline-lg text-on-surface">AgriNova - Multilingual Agricultural Advisory</h3>
<p className="font-body-md text-body-md text-on-surface-variant">
              An intelligent agricultural decision-support engine helping farmers diagnose crop diseases, analyze practical soil requirements, and receive verified localized remedies. Built with multilingual RAG support spanning Hindi, English, and Punjabi.
            </p>
<div className="grid grid-cols-2 gap-space-sm p-space-sm rounded bg-surface-container">
<div>
<span className="font-mono-meta text-[10px] text-outline uppercase block">RETRIEVAL MODEL</span>
<span className="font-mono-metric text-mono-metric text-on-surface font-medium">LangChain + Gemini</span>
</div>
<div>
<span className="font-mono-meta text-[10px] text-outline uppercase block">SUPPORTED LOCALES</span>
<span className="font-mono-metric text-mono-metric text-primary font-medium">HI, EN, PA (Multilingual)</span>
</div>
</div>
<div className="flex flex-wrap gap-space-xs font-mono-meta text-[11px] text-outline">
<span className="px-2 py-1 rounded bg-surface-container-high">Gemini API</span>
<span className="px-2 py-1 rounded bg-surface-container-high">LangChain</span>
<span className="px-2 py-1 rounded bg-surface-container-high">Streamlit</span>
<span className="px-2 py-1 rounded bg-surface-container-high">Vector Search</span>
<span className="px-2 py-1 rounded bg-surface-container-high">Python 3.11</span>
</div>
<div className="flex items-center gap-space-md pt-space-xs">
<a className="inline-flex items-center gap-space-xs font-mono-metric text-mono-metric text-primary hover:text-on-surface transition-colors" href="https://github.com/mohitt38" rel="noopener noreferrer" target="_blank">
<span className="material-symbols-outlined text-[16px]">code</span>
<span className="">Source Repository →</span>
</a>
<span className="font-mono-meta text-mono-meta text-outline">TEST ACCURACY: 94.6%</span>
</div>
</div>
{/* AgriNova Visual Trace Terminal */}
<div className="lg:w-1/2 w-full p-space-md rounded-lg bg-surface-container-lowest font-mono-meta text-[12px] flex flex-col gap-space-sm shadow-inner hover:scale-[1.01]">
<div className="flex items-center justify-between pb-space-xs">
<span className="text-outline">TERMINAL // AGRINOVA_RAG_TRACE</span>
<span className="text-primary">LOCALE: HI_IN (HINDI)</span>
</div>
<div className="p-space-sm rounded bg-surface-container flex flex-col gap-1">
<span className="text-outline uppercase text-[10px]">&gt; USER PROMPT [AUDIO/TEXT]</span>
<p className="text-on-surface">"गेहूं की पत्तियों पर पीले धब्बे दिख रहे हैं, इसका क्या इलाज है?"</p>
</div>
<div className="p-space-sm rounded bg-surface-container-low flex flex-col gap-1">
<span className="text-primary uppercase text-[10px]">&gt; VECTOR CHUNK RETRIEVAL (TOP-K = 2)</span>
<p className="text-on-surface-variant font-mono-meta text-[11px]">
                [Doc-842] Yellow Rust (Puccinia striiformis) • Similarity: 0.912<br/>
                [Doc-319] Fungicide dosage guidelines • State Agri Handbook
              </p>
</div>
<div className="p-space-sm rounded bg-surface-container flex flex-col gap-1">
<span className="text-on-surface uppercase text-[10px]">&gt; SYNTHESIZED SYSTEM ADVISORY</span>
<p className="text-on-surface">
                "यह पीला रतुआ (Yellow Rust) हो सकता है। प्रोपिकोनाजोल 25% ईसी का 0.1% घोल (1 मिली प्रति लीटर पानी) छिड़कें।"
              </p>
</div>
</div>
</div>
{/* PROJECT 02: TEXT SUMMARIZER */}
<div className="p-space-lg rounded-xl bg-surface-container-low flex flex-col lg:flex-row-reverse gap-space-xl items-center shadow-lg">
<div className="lg:w-1/2 flex flex-col gap-space-md">
<div className="flex items-center gap-space-xs">
<span className="font-mono-meta text-mono-meta text-primary font-semibold">PROJECT // 02</span>
<span className="text-outline">•</span>
<span className="font-mono-meta text-mono-meta text-on-surface-variant">NLP • LANGUAGE MODELS</span>
</div>
<h3 className="font-headline-lg text-headline-lg text-on-surface">Dual-Mode Document Summarizer</h3>
<p className="font-body-md text-body-md text-on-surface-variant">
              High-efficiency document processing engine converting expansive legal, medical, and technical documents into synthesized executive briefs using extractive and abstractive NLP models.
            </p>
<div className="grid grid-cols-2 gap-space-sm p-space-sm rounded bg-surface-container">
<div>
<span className="font-mono-meta text-[10px] text-outline uppercase block">ABSTRACTIVE CORE</span>
<span className="font-mono-metric text-mono-metric text-on-surface font-medium">BART-Large-CNN</span>
</div>
<div>
<span className="font-mono-meta text-[10px] text-outline uppercase block">EXTRACTIVE PARSER</span>
<span className="font-mono-metric text-mono-metric text-primary font-medium">spaCy Dependency Graph</span>
</div>
</div>
<div className="flex flex-wrap gap-space-xs font-mono-meta text-[11px] text-outline">
<span className="px-2 py-1 rounded bg-surface-container-high">Hugging Face</span>
<span className="px-2 py-1 rounded bg-surface-container-high">Flask</span>
<span className="px-2 py-1 rounded bg-surface-container-high">Python</span>
<span className="px-2 py-1 rounded bg-surface-container-high">spaCy</span>
<span className="px-2 py-1 rounded bg-surface-container-high">NLTK</span>
</div>
<div className="flex items-center gap-space-md pt-space-xs">
<a className="inline-flex items-center gap-space-xs font-mono-metric text-mono-metric text-primary hover:text-on-surface transition-colors" href="https://github.com/mohitt38" rel="noopener noreferrer" target="_blank">
<span className="material-symbols-outlined text-[16px]">code</span>
<span className="">Source Repository →</span>
</a>
<span className="font-mono-meta text-mono-meta text-outline">COMPRESSION: 82.4%</span>
</div>
</div>
{/* Split Comparison Visualizer */}
<div className="grid w-full grid-cols-1 gap-space-sm font-mono-meta text-[11px] sm:grid-cols-2 lg:w-1/2">
<div className="flex flex-col gap-space-xs rounded-lg bg-surface-container-lowest p-space-md">
<div className="flex items-center justify-between text-outline">
<span className="">INPUT CORPUS</span>
<span className="">12 PAGES (4,210 W)</span>
</div>
<div className="h-40 overflow-hidden text-on-surface-variant opacity-60">
<div className="doc-run space-y-1.5">
<p>• Comprehensive evaluation of clinical data models...</p>
<p>• Statistical significance measured across 24 variables...</p>
<p>• P-values recorded at p &lt; 0.001 under stratified sampling...</p>
<p>• Architectural redundancies isolated in pipeline...</p>
<p>• Latency constraints evaluated under high burst...</p>
<p>• Comprehensive evaluation of clinical data models...</p>
<p>• Statistical significance measured across 24 variables...</p>
<p>• P-values recorded at p &lt; 0.001 under stratified sampling...</p>
<p>• Architectural redundancies isolated in pipeline...</p>
<p>• Latency constraints evaluated under high burst...</p>
</div>
</div>
<span className="text-[10px] text-error font-medium">RAW DENSITY: HIGH</span>
</div>
<div className="p-space-md rounded-lg bg-surface-container flex flex-col gap-space-xs shadow-inner">
<div className="flex items-center justify-between text-primary font-semibold">
<span className="">BART SYNTHESIS</span>
<span className="">210 WORDS</span>
</div>
<div className="space-y-1.5 text-on-surface h-40 overflow-hidden">
<p className="font-semibold text-primary">• Key Finding:</p>
<p className="">System maintains statistical validity while trimming 82% token load.</p>
<p className="font-semibold text-primary mt-2">• Clinical Impact:</p>
<p className="">Reduced physician transcription time by 4.2 hours weekly.</p>
</div>
<span className="text-[10px] text-primary font-medium">SYNTHESIS: COMPLETED</span>
</div>
</div>
</div>
{/* PROJECT 03 & 04 COMBO ROW */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
{/* PROJECT 03: MEETING TASK MANAGEMENT */}
<div className="p-space-lg rounded-xl bg-surface-container-low flex flex-col justify-between gap-space-lg shadow-md">
<div className="flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<span className="font-mono-meta text-mono-meta text-primary font-semibold">PROJECT // 03</span>
<span className="material-symbols-outlined text-outline">mic</span>
</div>
<h3 className="font-headline-md text-headline-md text-on-surface">Meeting Task Management Pipeline</h3>
<p className="font-body-md text-body-md text-on-surface-variant">
                Offline speech-to-action pipeline converting recorded meeting audio into structured, timestamped task items, assignee metadata, and deadline priorities without third-party API dependencies.
              </p>
{/* Audio Waveform to Checklist Preview */}
<div className="p-space-sm rounded bg-surface-container-lowest flex flex-col gap-space-xs mt-space-xs">
<div className="flex items-center justify-between font-mono-meta text-[10px] text-outline">
<span className="">AUDIO INFERENCE STREAM</span>
<span className="text-primary">48.2 MIN → 6 ACTION TASKS</span>
</div>
<div className="flex items-center gap-1 h-6 py-1"><div className="w-1 bg-primary rounded-full eq-bar-1"></div><div className="w-1 bg-primary rounded-full eq-bar-2"></div><div className="w-1 bg-primary rounded-full eq-bar-3"></div><div className="w-1 bg-primary rounded-full eq-bar-4"></div><div className="w-1 bg-primary rounded-full eq-bar-5"></div><div className="w-1 bg-primary rounded-full eq-bar-6"></div><div className="w-1 bg-primary rounded-full eq-bar-7"></div><div className="w-1 bg-primary rounded-full eq-bar-8"></div><div className="w-1 bg-primary rounded-full eq-bar-9"></div><div className="w-1 bg-primary rounded-full eq-bar-10"></div><div className="w-1 bg-primary rounded-full eq-bar-11"></div><div className="w-1 bg-primary rounded-full eq-bar-12"></div></div>
<div className="font-mono-meta text-[11px] text-on-surface flex items-center gap-space-xs">
<span className="material-symbols-outlined text-[14px] text-primary">task_alt</span>
<span className="">[00:14:22] Deploy FastAPI microservice on test node (Assigned: Mohit)</span>
</div>
</div>
</div>
<div className="flex flex-col gap-space-sm">
<div className="flex flex-wrap gap-space-xs font-mono-meta text-[11px] text-outline">
<span className="px-2 py-0.5 rounded bg-surface-container">Whisper / Speech</span>
<span className="px-2 py-0.5 rounded bg-surface-container">NLP Extraction</span>
<span className="px-2 py-0.5 rounded bg-surface-container">Python Backend</span>
</div>
<a className="font-mono-metric text-mono-metric text-primary hover:text-on-surface transition-colors" href="https://github.com/mohitt38" rel="noopener noreferrer" target="_blank">
                View Project Repository →
              </a>
</div>
</div>
{/* PROJECT 04: OCR TEXT EXTRACTOR */}
<div className="p-space-lg rounded-xl bg-surface-container-low flex flex-col justify-between gap-space-lg shadow-md">
<div className="flex items-center justify-between">
<span className="font-mono-meta text-mono-meta text-primary font-semibold">PROJECT // 04</span>
<span className="material-symbols-outlined text-outline">document_scanner</span>
</div>
<h3 className="font-headline-md text-headline-md text-on-surface">OCR Shipping Label Extractor</h3>
<p className="font-body-md text-body-md text-on-surface-variant">
                Computer vision label parsing pipeline extracting structured address lines, SKUs, barcode tracking digits, and dimensions from captured parcels under harsh lighting and oblique angles.
              </p>
{/* Vision Bounding Box Overlay Preview */}
<div className="p-space-sm rounded bg-surface-container-lowest flex flex-col gap-space-xs mt-space-xs"><div className="relative overflow-hidden rounded p-space-xs"><div className="laser-sweep-line absolute inset-x-0 h-0.5 bg-primary shadow-[0_0_8px_#adc6ff] z-10 pointer-events-none"></div><div className="flex items-center justify-between font-mono-meta text-[10px] text-outline pb-1"><span className="">PARCEL BOUNDING BOXES</span><span className="text-primary animate-pulse">CONFIDENCE: 98.4%</span></div><div className="p-space-xs rounded bg-surface-container font-mono-meta text-[11px] space-y-1 text-on-surface"><div className="flex justify-between"><span className="text-outline">TRACKING ID:</span><span className="text-primary font-semibold">IN-8940-2025-MN</span></div><div className="flex justify-between"><span className="text-outline">DESTINATION:</span><span className="">Udaipur, RJ 313001</span></div></div></div></div>
<div className="flex flex-col gap-space-sm">
<div className="flex flex-wrap gap-space-xs font-mono-meta text-[11px] text-outline">
<span className="px-2 py-0.5 rounded bg-surface-container">OpenCV</span>
<span className="px-2 py-0.5 rounded bg-surface-container">EasyOCR</span>
<span className="px-2 py-0.5 rounded bg-surface-container">Image Preprocessing</span>
</div>
<a className="font-mono-metric text-mono-metric text-primary hover:text-on-surface transition-colors" href="https://github.com/mohitt38" rel="noopener noreferrer" target="_blank">
                View Project Repository →
              </a>
</div>
</div>
</div>
</div>
</div>
</section>
{/* 04 // RESEARCH & PUBLICATIONS */}
<section className="w-full bg-surface-container-lowest py-space-xl lg:py-margin" id="research">
<div className="max-w-[1280px] mx-auto px-gutter-mobile lg:px-gutter flex flex-col gap-space-xl">
{/* Section Header */}
<div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
<div className="flex flex-col gap-space-xs">
<div className="flex items-center gap-space-xs">
<span className="font-mono-meta text-mono-meta text-primary font-semibold">04 // SCHOLARLY CONTRIBUTIONS</span>
<span className="text-outline">-</span>
<span className="font-mono-meta text-mono-meta text-on-surface-variant uppercase">ACADEMIC RESEARCH</span>
</div>
<h2 className="font-headline-lg text-headline-lg text-on-surface">Exploring the intelligence behind the systems.</h2>
</div>
<div className="flex items-center gap-space-xs font-mono-meta text-mono-meta text-outline">
<span className="material-symbols-outlined text-[16px]">menu_book</span>
<span className="">Healthcare NLP • Multi-Agent Systems</span>
</div>
</div>
{/* Research Cards */}
<div className="flex flex-col gap-space-lg">
{/* Research Paper 1 */}
<div className="p-space-lg rounded-xl bg-surface-container flex flex-col lg:flex-row gap-space-lg justify-between shadow-md">
<div className="lg:w-2/3 flex flex-col gap-space-sm">
<div className="flex flex-wrap items-center gap-space-xs">
<span className="px-2 py-0.5 rounded bg-primary text-on-primary font-mono-meta text-[11px] font-semibold">AUTHOR</span>
<span className="font-mono-meta text-mono-meta text-outline">STATUS: CAMERA-READY SUBMISSION</span>
<span className="text-outline">•</span>
<span className="font-mono-meta text-mono-meta text-primary">CLINICAL NLP</span>
</div>
<h3 className="font-headline-md text-headline-md text-on-surface">
              Comparative Evaluation of LLM Models for Clinically Realistic SOAP Documentation
            </h3>
<p className="font-body-md text-body-md text-on-surface-variant">
              An empirical investigation evaluating proprietary and open-weights foundational models (including Llama-3, GPT-4, and Gemini) on multi-speaker clinical dialogues. Formulates domain-specific evaluation metrics across Subjective, Objective, Assessment, and Plan (SOAP) transcription categories, quantifying clinical hallucination bounds and diagnostic entity preservation.
            </p>
<div className="flex flex-wrap gap-space-xs font-mono-meta text-[11px] text-outline pt-space-xs">
<span className="px-2 py-0.5 rounded bg-surface-container-high">Healthcare AI</span>
<span className="px-2 py-0.5 rounded bg-surface-container-high">SOAP Documentation</span>
<span className="px-2 py-0.5 rounded bg-surface-container-high">Entity Preservation Score</span>
<span className="px-2 py-0.5 rounded bg-surface-container-high">Hallucination Mitigation</span>
</div>
</div>
<div className="lg:w-1/3 flex flex-col justify-between p-space-md rounded-lg bg-surface-container-high gap-space-md">
<div className="flex flex-col gap-space-xs">
<span className="font-mono-meta text-mono-meta text-outline uppercase">EVALUATION BENCHMARK</span>
<div className="space-y-1 font-mono-meta text-[12px]">
<div className="flex justify-between">
<span className="text-on-surface-variant">Entity Retention:</span>
<span className="text-primary font-semibold">97.4%</span>
</div>
<div className="flex justify-between">
<span className="text-on-surface-variant">ROUGE-L Score:</span>
<span className="text-on-surface font-semibold">0.512</span>
</div>
<div className="flex justify-between">
<span className="text-on-surface-variant">Fact Hallucination:</span>
<span className="text-error font-semibold">&lt; 1.8%</span>
</div>
</div>
</div>
<a className="inline-flex items-center justify-center gap-space-xs px-space-md py-1.5 rounded bg-surface-container text-on-surface font-mono-metric text-mono-metric hover:bg-surface-bright transition-colors" href="mailto:nagdamohit19@gmail.com?subject=Preprint%20Request:%20SOAP%20Documentation%20Paper">
<span className="material-symbols-outlined text-[16px]">draft</span>
<span className="">Request Paper Preprint</span>
</a>
</div>
</div>
{/* Research Paper 2 */}
<div className="p-space-lg rounded-xl bg-surface-container flex flex-col lg:flex-row gap-space-lg justify-between shadow-md">
<div className="lg:w-2/3 flex flex-col gap-space-sm">
<div className="flex flex-wrap items-center gap-space-xs">
<span className="px-2 py-0.5 rounded bg-surface-container-highest text-on-surface font-mono-meta text-[11px] font-semibold">CO-AUTHOR</span>
<span className="font-mono-meta text-mono-meta text-outline">STATUS: UNDER PEER REVIEW</span>
<span className="text-outline">•</span>
<span className="font-mono-meta text-mono-meta text-primary">AGENTIC AI</span>
</div>
<h3 className="font-headline-md text-headline-md text-on-surface">
              Agentic AI-Based Clinical Automation Framework for Healthcare Systems
            </h3>
<p className="font-body-md text-body-md text-on-surface-variant">
              Proposing a decentralized multi-agent orchestration architecture where specialized agents autonomously verify pharmacological conflicts, check insurance triage codes, and formulate deterministic diagnostic summaries with human-in-the-loop oversight.
            </p>
<div className="flex flex-wrap gap-space-xs font-mono-meta text-[11px] text-outline pt-space-xs">
<span className="px-2 py-0.5 rounded bg-surface-container-high">Multi-Agent Systems</span>
<span className="px-2 py-0.5 rounded bg-surface-container-high">Clinical Workflows</span>
<span className="px-2 py-0.5 rounded bg-surface-container-high">LangGraph</span>
<span className="px-2 py-0.5 rounded bg-surface-container-high">Deterministic Validation</span>
</div>
</div>
<div className="lg:w-1/3 flex flex-col justify-between p-space-md rounded-lg bg-surface-container-high gap-space-md">
<div className="flex flex-col gap-space-xs">
<span className="font-mono-meta text-mono-meta text-outline uppercase">COORDINATION TOPOLOGY</span>
<div className="space-y-1 font-mono-meta text-[12px]">
<div className="flex justify-between">
<span className="text-on-surface-variant">Agent Roles:</span>
<span className="text-on-surface font-semibold">Triage • Audit • Synth</span>
</div>
<div className="flex justify-between">
<span className="text-on-surface-variant">Conflict Resolution:</span>
<span className="text-primary font-semibold">Deterministic</span>
</div>
<div className="flex justify-between">
<span className="text-on-surface-variant">Protocol:</span>
<span className="text-on-surface font-semibold">StateGraph</span>
</div>
</div>
</div>
<a className="inline-flex items-center justify-center gap-space-xs px-space-md py-1.5 rounded bg-surface-container text-on-surface font-mono-metric text-mono-metric hover:bg-surface-bright transition-colors" href="mailto:nagdamohit19@gmail.com?subject=Preprint%20Request:%20Agentic%20AI%20Paper">
<span className="material-symbols-outlined text-[16px]">draft</span>
<span className="">Request Paper Preprint</span>
</a>
</div>
</div>
</div>
</div>
</section>
<StitchSkills />
{/* 06 // ACADEMICS & CREDENTIALS */}
<section className="w-full bg-surface-container-lowest py-space-xl lg:py-margin">
<div className="max-w-[1280px] mx-auto px-gutter-mobile lg:px-gutter flex flex-col gap-space-xl">
{/* Section Header */}
<div className="flex flex-col gap-space-xs">
<div className="flex items-center gap-space-xs">
<span className="font-mono-meta text-mono-meta text-primary font-semibold">06 // FOUNDATIONAL MERIT</span>
<span className="text-outline">-</span>
<span className="font-mono-meta text-mono-meta text-on-surface-variant uppercase">ACADEMICS &amp; CERTIFICATIONS</span>
</div>
<h2 className="font-headline-lg text-headline-lg text-on-surface">Rigorous credentials.</h2>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg">
{/* Education Card (Left) */}
<div className="lg:col-span-6 p-space-lg rounded-xl bg-surface-container flex flex-col justify-between gap-space-lg shadow-md">
<div className="flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<span className="font-mono-meta text-mono-meta text-primary font-semibold">UNDERGRADUATE DEGREE</span>
<span className="font-mono-meta text-mono-meta text-outline">2023 - 2027</span>
</div>
<h3 className="font-headline-md text-headline-md text-on-surface">Geetanjali Institute of Technical Studies</h3>
<p className="font-body-md text-body-md text-on-surface-variant">
              Bachelor of Technology in Computer Science and Engineering with specialization in <strong className="text-on-surface">Artificial Intelligence</strong>.
            </p>
</div>
<div className="p-space-md rounded bg-surface-container-high flex items-center justify-between">
<div className="flex flex-col">
<span className="font-mono-meta text-[10px] text-outline uppercase">CUMULATIVE GRADE POINT</span>
<span className="font-display-xl text-[36px] leading-tight text-primary font-semibold">9.0 / 10.0</span>
</div>
<div className="flex flex-col text-right">
<span className="font-mono-meta text-[10px] text-outline uppercase">LOCATION</span>
<span className="font-mono-metric text-mono-metric text-on-surface">Udaipur, Rajasthan</span>
</div>
</div>
</div>
{/* Verified Certifications Editorial List (Right) */}
<div className="lg:col-span-6 p-space-lg rounded-xl bg-surface-container flex flex-col justify-between gap-space-md shadow-md">
<div className="flex items-center justify-between pb-space-xs">
<span className="font-mono-meta text-mono-meta text-primary font-semibold">LICENSES &amp; CERTIFICATIONS</span>
<span className="font-mono-meta text-mono-meta text-outline">VERIFIED ISSUERS</span>
</div>
<div className="flex flex-col divide-y divide-surface-container-highest">
<div className="py-space-sm flex items-center justify-between">
<div className="flex flex-col">
<span className="font-headline-sm text-headline-sm text-on-surface">AI Agent Architect &amp; Chatbot Builder</span>
<span className="font-mono-meta text-mono-meta text-on-surface-variant">IBM • Enterprise Autonomous Agents</span>
</div>
<span className="material-symbols-outlined text-primary text-[18px]">verified</span>
</div>
<div className="py-space-sm flex items-center justify-between">
<div className="flex flex-col">
<span className="font-headline-sm text-headline-sm text-on-surface">Prompt Engineering Specialization</span>
<span className="font-mono-meta text-mono-meta text-on-surface-variant">IBM SkillsBuild • CSRBOX</span>
</div>
<span className="material-symbols-outlined text-primary text-[18px]">verified</span>
</div>
<div className="py-space-sm flex items-center justify-between">
<div className="flex flex-col">
<span className="font-headline-sm text-headline-sm text-on-surface">Data Science, ML, DL &amp; NLP Masterclass</span>
<span className="font-mono-meta text-mono-meta text-on-surface-variant">Krish Naik • End-to-End Deep Learning</span>
</div>
<span className="material-symbols-outlined text-primary text-[18px]">verified</span>
</div>
<div className="py-space-sm flex items-center justify-between">
<div className="flex flex-col">
<span className="font-headline-sm text-headline-sm text-on-surface">RHCSA Linux Administration Training</span>
<span className="font-mono-meta text-mono-meta text-on-surface-variant">Red Hat Enterprise Linux Systems</span>
</div>
<span className="material-symbols-outlined text-primary text-[18px]">verified</span>
</div>
</div>
</div>
</div>
</div>
</section>
{/* 07 // QUICK ANSWERS (AEO / GEO) */}
<section className="w-full bg-surface-container-lowest py-space-xl lg:py-margin" id="faq" aria-labelledby="faq-heading">
<div className="mx-auto flex max-w-[1280px] flex-col gap-space-xl px-gutter-mobile lg:px-gutter">
<div className="flex flex-col gap-space-xs">
<div className="flex items-center gap-space-xs">
<span className="font-mono-meta text-mono-meta font-semibold text-primary">07 // QUICK ANSWERS</span>
<span className="text-outline">-</span>
<span className="font-mono-meta text-mono-meta text-on-surface-variant uppercase">Facts for people and answer engines</span>
</div>
<h2 id="faq-heading" className="font-headline-lg text-headline-lg text-on-surface">Straight answers about Mohit Nagda.</h2>
<p className="max-w-2xl font-body-md text-body-md text-on-surface-variant">
Short, citeable facts. The same answers live in the page schema, <a className="text-primary hover:underline" href="/llms.txt">/llms.txt</a>, <a className="text-primary hover:underline" href="/llms-full.txt">/llms-full.txt</a>, and <a className="text-primary hover:underline" href="/profile.md">/profile.md</a>.
</p>
</div>
<dl className="grid gap-space-md md:grid-cols-2">
{faq.map((item) => (
<div key={item.question} className="rounded-lg bg-surface-container-low p-space-lg shadow-sm">
<dt className="font-headline-sm text-headline-sm text-on-surface">{item.question}</dt>
<dd className="mt-space-sm font-body-md text-body-md text-on-surface-variant">{item.answer}</dd>
</div>
))}
</dl>
</div>
</section>
{/* 08 // CONTACT & ACTION PORTAL */}
<section className="w-full py-space-xl lg:py-margin" id="contact">
<div className="max-w-[1280px] mx-auto px-gutter-mobile lg:px-gutter flex flex-col gap-space-xl">
<div className="p-space-xl lg:p-margin rounded-2xl bg-surface-container flex flex-col lg:flex-row gap-space-xl justify-between items-start shadow-xl relative overflow-hidden">
{/* Ambient Radial Tint */}
<div className="absolute -right-20 -bottom-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
<div className="lg:w-3/5 flex flex-col gap-space-lg relative z-10">
<div className="flex items-center gap-space-xs">
<span className="font-mono-meta text-mono-meta text-primary font-semibold">08 // INITIALIZE HANDSHAKE</span>
<span className="text-outline">-</span>
<span className="font-mono-meta text-mono-meta text-on-surface-variant uppercase">OPEN FOR CONVERSATIONS</span>
</div>
<h2 className="font-display-xl text-headline-lg lg:text-display-xl tracking-tight text-on-surface">
            Have a problem worth solving?<br/>Let's build something intelligent.
          </h2>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
            Currently speaking with engineering teams, AI laboratories, and founders for full-time engineering appointments, research collaborations, and production consulting.
          </p>
{/* Direct Interactive Actions */}
<StitchCopyEmail />
</div>
{/* Telemetry Coordinates Rail (Right) */}
<div className="lg:w-2/5 flex flex-col gap-space-md w-full relative z-10">
<div className="p-space-lg rounded-xl bg-surface-container-high flex flex-col gap-space-md">
<div className="flex items-center justify-between pb-space-xs">
<span className="font-mono-meta text-mono-meta text-outline uppercase">VERIFIED CHANNELS</span>
<span className="w-2 h-2 rounded-full bg-primary"></span>
</div>
<div className="flex min-w-0 flex-col gap-space-sm font-mono-metric text-mono-metric">
<a className="flex min-w-0 items-center justify-between gap-2 rounded bg-surface-container p-space-sm transition-colors hover:bg-surface-bright" href="mailto:nagdamohit19@gmail.com">
<span className="min-w-0 flex-1 break-all text-on-surface-variant">nagdamohit19@gmail.com</span>
<span className="material-symbols-outlined shrink-0 text-[16px] text-primary">arrow_outward</span>
</a>
<a className="flex min-w-0 items-center justify-between gap-2 rounded bg-surface-container p-space-sm transition-colors hover:bg-surface-bright" href="https://github.com/mohitt38" rel="noopener noreferrer" target="_blank">
<span className="min-w-0 flex-1 break-all text-on-surface-variant">github.com/mohitt38</span>
<span className="material-symbols-outlined shrink-0 text-[16px] text-primary">arrow_outward</span>
</a>
<a className="flex min-w-0 items-center justify-between gap-2 rounded bg-surface-container p-space-sm transition-colors hover:bg-surface-bright" href="https://www.linkedin.com/in/mohitnagda/" rel="noopener noreferrer" target="_blank">
<span className="flex min-w-0 flex-1 items-center gap-space-xs text-on-surface-variant"><SocialGlyph name="linkedin" /><span className="min-w-0 break-all">linkedin.com/in/mohitnagda</span></span>
<span className="material-symbols-outlined shrink-0 text-[16px] text-primary">arrow_outward</span>
</a>
<a className="flex min-w-0 items-center justify-between gap-2 rounded bg-surface-container p-space-sm transition-colors hover:bg-surface-bright" href="https://www.instagram.com/_.mohiittt__/" rel="noopener noreferrer" target="_blank">
<span className="flex min-w-0 flex-1 items-center gap-space-xs text-on-surface-variant"><SocialGlyph name="instagram" /><span className="min-w-0 break-all">instagram.com/_.mohiittt__</span></span>
<span className="material-symbols-outlined shrink-0 text-[16px] text-primary">arrow_outward</span>
</a>
<a className="flex min-w-0 items-center justify-between gap-2 rounded bg-surface-container p-space-sm transition-colors hover:bg-surface-bright" href="https://x.com/mohitt_19" rel="noopener noreferrer" target="_blank">
<span className="flex min-w-0 flex-1 items-center gap-space-xs text-on-surface-variant"><SocialGlyph name="x" /><span className="min-w-0 break-all">x.com/mohitt_19</span></span>
<span className="material-symbols-outlined shrink-0 text-[16px] text-primary">arrow_outward</span>
</a>
<div className="flex flex-col gap-1 rounded bg-surface-container p-space-sm">
<span className="text-on-surface">Udaipur, Rajasthan, India</span>
<span className="font-mono-meta text-[11px] text-primary">Remote or relocate</span>
<span className="font-mono-meta text-[11px] text-outline">IST (UTC+5:30)</span>
</div>
</div>
{/* Agent profiles reference */}
<div className="flex flex-wrap items-center justify-between gap-2 pt-space-xs font-mono-meta text-[11px] text-outline">
<span>MACHINE READABLE:</span>
<span className="text-primary">/llms.txt • /llms-full.txt • /profile.md • /#faq</span>
</div>
</div>
</div>
</div>
<StitchContactForm />
</div>
</section>
</div></main><footer className="w-full bg-surface-container-lowest mt-margin"><div className="max-w-[1280px] mx-auto px-gutter-mobile lg:px-gutter py-space-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-space-lg"><div className="flex flex-col gap-space-xs"><div className="flex items-center gap-space-sm"><img alt="Mohit Nagda logo" className="h-6 w-6 rounded object-cover" src="/favicon.jpg"/><span className="font-headline-sm text-headline-sm text-on-surface uppercase">Mohit Nagda</span></div><p className="font-mono-meta text-mono-meta text-on-surface-variant">AI Systems Engineer // Architecture, Inference &amp; Scaled Deployment</p></div><div className="flex flex-wrap items-center gap-space-lg font-mono-metric text-mono-metric"><a className="flex items-center gap-space-xs text-on-surface-variant hover:text-primary transition-colors" href="https://github.com/mohitt38" rel="noopener noreferrer" target="_blank"><span className="material-symbols-outlined text-[16px]">terminal</span><span className="">github.com/mohitt38</span></a><a className="flex items-center gap-space-xs text-on-surface-variant hover:text-primary transition-colors" href="https://www.linkedin.com/in/mohitnagda/" rel="noopener noreferrer" target="_blank"><SocialGlyph name="linkedin" /><span>LinkedIn</span></a><a className="flex items-center gap-space-xs text-on-surface-variant hover:text-primary transition-colors" href="https://www.instagram.com/_.mohiittt__/" rel="noopener noreferrer" target="_blank"><SocialGlyph name="instagram" /><span>Instagram</span></a><a className="flex items-center gap-space-xs text-on-surface-variant hover:text-primary transition-colors" href="https://x.com/mohitt_19" rel="noopener noreferrer" target="_blank"><SocialGlyph name="x" /><span>X</span></a><a className="flex items-center gap-space-xs text-on-surface-variant hover:text-primary transition-colors" href="mailto:nagdamohit19@gmail.com"><span className="material-symbols-outlined text-[16px]">mail</span><span>nagdamohit19@gmail.com</span></a><a className="flex items-center gap-space-xs text-on-surface-variant hover:text-primary transition-colors" href="https://wa.me/919601258617" rel="noopener noreferrer" target="_blank"><span className="material-symbols-outlined text-[16px]">chat</span><span className="">+91 96012 58617</span></a></div></div><div className="max-w-[1280px] mx-auto px-gutter-mobile lg:px-gutter py-space-md flex flex-col sm:flex-row items-center justify-between gap-space-sm"><span className="font-mono-meta text-mono-meta text-outline">© 2026 Mohit Nagda. All systems operational.</span><span className="font-mono-meta text-mono-meta text-outline">LATENCY: 12ms // VERIFIED BUILD #4092</span></div></footer>
    </>
  )
}
