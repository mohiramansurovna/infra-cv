import { useState } from 'react'
import {
  ArrowUpRight,
  ArrowDown,
  ArrowUp,
  Menu,
  X,
  Check,
  Copy,
} from 'lucide-react'

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [copiedText, setCopiedText] = useState<string | null>(null)

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text)
    setCopiedText(label)
    setTimeout(() => setCopiedText(null), 2000)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-[#FCFBF9] text-[#252326] font-sans antialiased selection:bg-[#69445F] selection:text-white">
      {/* Top Navigation */}
      <header className="sticky top-0 z-40 bg-[#FCFBF9]/95 backdrop-blur-sm border-b border-[#DED9DC]">
        <div className="max-w-[1248px] mx-auto px-6 sm:px-8 xl:px-0 h-[80px] sm:h-[100px] flex items-center justify-between">
          <a
            href="#"
            className="text-2xl sm:text-[26px] font-bold tracking-tight text-[#252326] hover:opacity-80 transition-opacity"
          >
            mohira.
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a
              href="#projects"
              className="text-[#635E64] hover:text-[#252326] transition-colors"
            >
              Projects
            </a>
            <a
              href="#experience"
              className="text-[#635E64] hover:text-[#252326] transition-colors"
            >
              Experience
            </a>
            <a
              href="#expertise"
              className="text-[#635E64] hover:text-[#252326] transition-colors"
            >
              Expertise
            </a>
            <a
              href="#about"
              className="text-[#635E64] hover:text-[#252326] transition-colors"
            >
              About
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 border border-[#DED9DC] rounded-[4px] text-sm text-[#69445F] font-medium hover:border-[#B5A0AF] hover:bg-[#F1EBEF] transition-all"
            >
              Get in touch
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.2]" />
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden p-2 text-[#252326] hover:text-[#69445F] transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav Dropdown */}
        {mobileMenuOpen && (
          <nav className="md:hidden border-b border-[#DED9DC] bg-[#FCFBF9] px-6 py-5 space-y-4 shadow-sm animate-in fade-in slide-in-from-top-2">
            <a
              href="#projects"
              className="block text-[#635E64] hover:text-[#252326] py-1 text-base font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Projects
            </a>
            <a
              href="#experience"
              className="block text-[#635E64] hover:text-[#252326] py-1 text-base font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Experience
            </a>
            <a
              href="#expertise"
              className="block text-[#635E64] hover:text-[#252326] py-1 text-base font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Expertise
            </a>
            <a
              href="#about"
              className="block text-[#635E64] hover:text-[#252326] py-1 text-base font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </a>
            <div className="pt-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#DED9DC] rounded-[4px] text-sm text-[#69445F] font-medium hover:bg-[#F1EBEF] w-full justify-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get in touch
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </nav>
        )}
      </header>

      {/* Main Content */}
      <main className="max-w-[1248px] mx-auto px-6 sm:px-8 xl:px-0">
        {/* Hero Section */}
        <section className="pt-12 sm:pt-16 pb-12 sm:pb-16" id="about">
          {/* Top Meta Line */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono uppercase tracking-wider text-[#635E64] mb-8 sm:mb-12">
            <span className="text-[#69445F] font-medium">FULL-STACK SOFTWARE ENGINEER</span>
            <span>TASHKENT, UZBEKISTAN</span>
          </div>

          {/* Name Display */}
          <h1 className="text-5xl sm:text-7xl lg:text-[88px] font-bold text-[#252326] tracking-[-0.03em] leading-[1.04] mb-12 sm:mb-16">
            Mohira Kadamboyeva
          </h1>

          {/* Two-Column Pitch & Bio */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-16 sm:mb-20">
            {/* Left Column: Serif Hook & CTA */}
            <div className="lg:col-span-7">
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[46px] font-normal text-[#252326] leading-[1.18] tracking-[-0.015em] mb-8 sm:mb-10">
                Clear thinking.
                <br />
                Maintainable software.
              </h2>
              <div className="flex flex-wrap items-center gap-6 sm:gap-8">
                <a
                  href="#projects"
                  className="bg-[#69445F] hover:bg-[#56364d] text-white text-sm sm:text-base font-medium px-6 py-3.5 rounded-[4px] inline-flex items-center gap-2.5 transition-all shadow-sm hover:shadow"
                >
                  Explore my work
                  <ArrowDown className="w-4 h-4 stroke-[2.2]" />
                </a>
                <a
                  href="https://github.com/mohiramansurovna"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm sm:text-base font-medium text-[#252326] hover:text-[#69445F] transition-colors py-2"
                >
                  GitHub
                  <ArrowUpRight className="w-4 h-4 stroke-[2]" />
                </a>
              </div>
            </div>

            {/* Right Column: Bio Paragraphs */}
            <div className="lg:col-span-5 pt-1 lg:pt-3 space-y-6 text-[#635E64] text-base sm:text-[17px] leading-[1.65]">
              <p>
                I’m a full-stack engineer with 1+ years of experience and a
                foundation in computer science. I build across backend systems
                and frontend interfaces, with a focus on clear, efficient,
                maintainable code.
              </p>
              <p>
                Persistent by nature. Curious about what’s next.
                <br />
                Thoughtful about communicating technical ideas.
              </p>
            </div>
          </div>

          {/* Sub-hero Tech Meta Bar */}
          <div className="border-y border-[#DED9DC] py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono text-[#635E64] tracking-wider uppercase">
            <span>NODE.JS / TYPESCRIPT / REACT</span>
            <span>A thread through my engineering practice ↓</span>
          </div>
        </section>

        {/* Timeline Wrapper for Projects & Experience */}
        <div className="relative">
          {/* Vertical connecting line on desktop */}
          <div
            className="hidden md:block absolute left-[15px] top-[100px] bottom-[30px] w-px bg-[#B5A0AF]"
            aria-hidden="true"
          />

          {/* 01: Selected Projects */}
          <section id="projects" className="relative pt-12 sm:pt-16 pb-16 sm:pb-24">
            <div className="flex items-start">
              {/* Timeline marker 01 */}
              <div
                className="hidden md:flex relative z-10 shrink-0 w-[31px] h-[31px] rounded-full border border-[#B5A0AF] bg-[#FCFBF9] items-center justify-center text-xs font-mono text-[#635E64] font-medium mr-10 lg:mr-12 select-none"
                aria-hidden="true"
              >
                01
              </div>

              {/* Section Content */}
              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-8 sm:mb-12">
                  <div className="flex items-center gap-3">
                    <span className="md:hidden inline-flex w-7 h-7 rounded-full border border-[#B5A0AF] items-center justify-center text-xs font-mono text-[#635E64]">
                      01
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#252326] tracking-tight">
                      Selected projects
                    </h2>
                  </div>
                  <span className="text-xs font-mono uppercase tracking-wider text-[#635E64]">
                    PERSONAL / FULL-STACK
                  </span>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
                  {/* Card 1: Linaform */}
                  <article className="flex flex-col">
                    {/* Visual Card Banner */}
                    <div className="bg-[#F0EFEB] rounded-[8px] p-7 sm:p-8 flex flex-col justify-between min-h-[236px] border border-black/[0.03] transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
                      <div className="flex items-center justify-between text-xs font-mono uppercase tracking-wider text-[#69445F] font-medium">
                        <span>NOTE-TAKING PLATFORM</span>
                        <span>[ / ]</span>
                      </div>
                      <div className="my-6">
                        <span className="font-serif text-4xl sm:text-5xl text-[#69445F] tracking-tight block">
                          Linaform
                        </span>
                      </div>
                      <div className="text-xs font-mono text-[#635E64]">
                        A space for notes. A full-stack build.
                      </div>
                    </div>

                    {/* Card Content Details */}
                    <div className="pt-6 flex-1 flex flex-col">
                      <h3 className="text-2xl font-bold text-[#252326] mb-3">
                        Linaform
                      </h3>
                      <p className="text-[15px] sm:text-base text-[#635E64] leading-relaxed mb-4">
                        A full-stack note-taking platform with a rich-text
                        editor, secure API access and smooth interface
                        animations.
                      </p>
                      <p className="text-[15px] sm:text-base text-[#635E64] leading-relaxed mb-6">
                        Built a Node.js / Express backend with Prisma, PostgreSQL
                        and JWT authentication. On the frontend: React,
                        TypeScript, TipTap and Framer Motion, with caching and
                        pagination for efficient note retrieval.
                      </p>
                      <div className="mt-auto">
                        <p className="text-xs font-mono text-[#69445F] leading-relaxed">
                          Express.js · Node.js · Prisma ORM · React · TypeScript
                          · React Router · TipTap · Framer Motion
                        </p>
                        <div className="border-b border-[#DED9DC] my-4" />
                        <p className="text-xs font-mono text-[#635E64]">
                          Backend deployed on Render · Frontend on GitHub Pages
                        </p>
                      </div>
                    </div>
                  </article>

                  {/* Card 2: Elora */}
                  <article className="flex flex-col">
                    {/* Visual Card Banner */}
                    <div className="bg-[#F1EBEF] rounded-[8px] p-7 sm:p-8 flex flex-col justify-between min-h-[236px] border border-black/[0.03] transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
                      <div className="flex items-center justify-between text-xs font-mono uppercase tracking-wider text-[#69445F] font-medium">
                        <span>AI EDUCATION PLATFORM</span>
                        <span>{'{...}'}</span>
                      </div>
                      <div className="my-6">
                        <span className="font-serif text-4xl sm:text-5xl text-[#69445F] tracking-tight block">
                          Elora
                        </span>
                      </div>
                      <div className="text-xs font-mono text-[#635E64]">
                        Curriculum-grounded AI / RAG / Personalized learning
                      </div>
                    </div>

                    {/* Card Content Details */}
                    <div className="pt-6 flex-1 flex flex-col">
                      <div className="flex items-center justify-between gap-3 mb-3">
                        <h3 className="text-2xl font-bold text-[#252326]">
                          Elora
                        </h3>
                        <span className="text-[11px] font-mono uppercase tracking-wider text-[#69445F] font-medium bg-[#69445F]/10 px-2.5 py-0.5 rounded-[3px]">
                          IN PROGRESS
                        </span>
                      </div>
                      <p className="text-[15px] sm:text-base text-[#635E64] leading-relaxed mb-4">
                        An AI tutor designed to help Uzbek school students
                        learn through explanations grounded in their national
                        curriculum.
                      </p>
                      <p className="text-[15px] sm:text-base text-[#635E64] leading-relaxed mb-6">
                        Built as a research-driven full-stack project, with a
                        focus on Uzbek-language support, responsible handling of
                        student data, and evaluating the quality and relevance of
                        AI-generated explanations.
                      </p>
                      <div className="mt-auto">
                        <p className="text-xs font-mono text-[#69445F] leading-relaxed">
                          Node.js · Embeddings · Semantic Caching · MCP (Model
                          Context Protocol)
                        </p>
                        <div className="border-b border-[#DED9DC] my-4" />
                        <p className="text-xs font-mono text-[#635E64]">
                          In progress — not feature-complete or production-deployed
                        </p>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </section>

          {/* 02: Experience (Vention) */}
          <section id="experience" className="relative pt-12 sm:pt-16 pb-16 sm:pb-24 border-t border-[#DED9DC]">
            <div className="flex items-start">
              {/* Timeline marker 02 */}
              <div
                className="hidden md:flex relative z-10 shrink-0 w-[31px] h-[31px] rounded-full border border-[#B5A0AF] bg-[#FCFBF9] items-center justify-center text-xs font-mono text-[#635E64] font-medium mr-10 lg:mr-12 select-none"
                aria-hidden="true"
              >
                02
              </div>

              {/* Section Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-10 sm:mb-14">
                  <span className="md:hidden inline-flex w-7 h-7 rounded-full border border-[#B5A0AF] items-center justify-center text-xs font-mono text-[#635E64]">
                    02
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-bold text-[#252326] tracking-tight">
                    Experience, in practice.
                  </h2>
                </div>

                {/* Vention Experience Row */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
                  {/* Left Column: Company Meta */}
                  <div className="md:col-span-4 lg:col-span-3">
                    <h3 className="text-2xl font-bold text-[#252326]">Vention</h3>
                    <p className="text-base text-[#635E64] mt-1">
                      Intern Software Engineer
                    </p>
                    <p className="text-xs font-mono uppercase tracking-wider text-[#635E64] mt-3">
                      DEC 2025 – JUL 2026
                    </p>
                  </div>

                  {/* Right Column: Roles & Projects */}
                  <div className="md:col-span-8 lg:col-span-9 space-y-10">
                    <div>
                      <h4 className="text-lg font-bold text-[#252326]">
                        Learning Management System
                      </h4>
                      <p className="text-[15px] sm:text-base text-[#635E64] leading-relaxed mt-2.5">
                        Team project · March–July 2026. Owned authentication and
                        core LMS backend endpoints, including role-based access
                        control. Collaborated on architecture, validation,
                        middleware and error handling; integrated REST APIs and
                        built React authentication and user flows. Contributed
                        through code reviews, Git workflows, tests and
                        debugging.
                      </p>
                      <p className="text-xs font-mono text-[#69445F] mt-3">
                        TypeScript · NestJS · React · PostgreSQL · Jest
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-bold text-[#252326]">
                        Issue Tracker
                      </h4>
                      <p className="text-[15px] sm:text-base text-[#635E64] leading-relaxed mt-2.5">
                        A one-week solo full-stack build assigned by mentors.
                        Implemented Express REST APIs and a React interface to
                        create, view and manage issues, with authentication,
                        validation, consistent error handling and testing
                        workflows across the stack.
                      </p>
                      <p className="text-xs font-mono text-[#69445F] mt-3">
                        Express.js · Node.js · TypeScript · React · Zustand ·
                        Jest
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 03: Experience (MBOS) */}
          <section className="relative pt-12 sm:pt-16 pb-16 sm:pb-24 border-t border-[#DED9DC]">
            <div className="flex items-start">
              {/* Timeline marker 03 */}
              <div
                className="hidden md:flex relative z-10 shrink-0 w-[31px] h-[31px] rounded-full border border-[#B5A0AF] bg-[#FCFBF9] items-center justify-center text-xs font-mono text-[#635E64] font-medium mr-10 lg:mr-12 select-none"
                aria-hidden="true"
              >
                03
              </div>

              {/* Section Content */}
              <div className="flex-1 min-w-0">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
                  {/* Left Column: Company Meta */}
                  <div className="md:col-span-4 lg:col-span-3">
                    <div className="flex items-center gap-3 md:block">
                      <span className="md:hidden inline-flex w-7 h-7 rounded-full border border-[#B5A0AF] items-center justify-center text-xs font-mono text-[#635E64]">
                        03
                      </span>
                      <h3 className="text-2xl font-bold text-[#252326]">MBOS</h3>
                    </div>
                    <p className="text-base text-[#635E64] mt-1">
                      Junior Front-End Intern
                    </p>
                    <p className="text-xs font-mono uppercase tracking-wider text-[#635E64] mt-3">
                      MAY 2025 – JUN 2025
                    </p>
                  </div>

                  {/* Right Column: Roles & Projects */}
                  <div className="md:col-span-8 lg:col-span-9 space-y-10">
                    <div>
                      <h4 className="text-lg font-bold text-[#252326]">
                        Internal CRM-style dashboard
                      </h4>
                      <p className="text-[15px] sm:text-base text-[#635E64] leading-relaxed mt-2.5">
                        Helped build an internal admin frontend for company
                        operations, working with third-party UI components and
                        scalable, well-structured code.
                      </p>
                      <p className="text-xs font-mono text-[#69445F] mt-3">
                        Ant Design · Zustand · TanStack Query
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-bold text-[#252326]">
                        mbos.uz · Company website
                      </h4>
                      <p className="text-[15px] sm:text-base text-[#635E64] leading-relaxed mt-2.5">
                        Built informational and product pages with multilingual
                        support. Collaborated with a designer to translate hero,
                        about and other design-led sections into an animated
                        frontend.
                      </p>
                      <p className="text-xs font-mono text-[#69445F] mt-3">
                        Next.js · next-i18next · Framer Motion
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-bold text-[#252326]">
                        MBOS Business · Marketing website
                      </h4>
                      <p className="text-[15px] sm:text-base text-[#635E64] leading-relaxed mt-2.5">
                        Implemented animated hero and about sections alongside a
                        designer, focusing on a scalable frontend structure and
                        component optimization.
                      </p>
                      <p className="text-xs font-mono text-[#69445F] mt-3">
                        Next.js · Framer Motion · React Router
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Section: Across the stack (THE TOOLKIT) */}
        <section id="expertise" className="pt-16 sm:pt-20 pb-16 sm:pb-24 border-t border-[#DED9DC]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-14 sm:mb-18">
            {/* Left Column: Heading & Description */}
            <div className="lg:col-span-4">
              <span className="text-xs font-mono uppercase tracking-wider text-[#69445F] font-medium block mb-3">
                THE TOOLKIT
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#252326] tracking-tight mb-4">
                Across the stack.
              </h2>
              <p className="text-[#635E64] text-base leading-relaxed">
                From data models and secure APIs to interfaces, testing and
                deployment.
              </p>
            </div>

            {/* Right Column: Stack Rows */}
            <div className="lg:col-span-8">
              <div className="divide-y divide-[#DED9DC] border-t border-b border-[#DED9DC]">
                {[
                  {
                    category: 'Core',
                    skills: 'Node.js · TypeScript · JavaScript',
                  },
                  {
                    category: 'Backend',
                    skills:
                      'Node.js · Express.js · NestJS · Jose · Prisma ORM · Drizzle ORM · Sequelize ORM',
                  },
                  {
                    category: 'Frontend',
                    skills:
                      'Next.js · React · React Query · Tailwind CSS · Redux · Zustand · Ant UI',
                  },
                  {
                    category: 'Databases',
                    skills: 'PostgreSQL · MongoDB',
                  },
                  {
                    category: 'DevOps & cloud',
                    skills:
                      'Docker · GitHub Actions · AWS Lambda / API Gateway',
                  },
                  {
                    category: 'Testing',
                    skills:
                      'Jest · Supertest · Postman · React Testing Library · Playwright',
                  },
                  {
                    category: 'Methodologies',
                    skills: 'Agile / Scrum · Waterfall',
                  },
                  {
                    category: 'AI productivity',
                    skills:
                      'GitHub Copilot · Codex · ChatGPT · Gemini · v0 · Notion AI · AI agents',
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="py-4 sm:py-4.5 flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6 hover:bg-[#F1EBEF]/30 px-2 -mx-2 transition-colors rounded-[3px]"
                  >
                    <span className="sm:w-44 text-sm font-bold text-[#252326] shrink-0">
                      {item.category}
                    </span>
                    <span className="text-sm sm:text-[15px] text-[#635E64] leading-relaxed">
                      {item.skills}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Banner Box: The next layer */}
          <div className="bg-[#F1EBEF] rounded-[8px] p-8 sm:p-12 border border-[#69445F]/10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
            <div className="lg:col-span-4">
              <span className="text-xs font-mono uppercase tracking-wider text-[#69445F] font-medium block mb-2">
                CURRENTLY EXPLORING
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-[#69445F] tracking-tight">
                The next layer.
              </h3>
            </div>
            <div className="lg:col-span-8">
              <h4 className="text-lg sm:text-xl font-bold text-[#252326] leading-snug">
                Vector databases · Semantic search & caching
                <br />
                Recommendation systems
              </h4>
              <p className="text-[#635E64] text-sm sm:text-base mt-2 leading-relaxed">
                Putting these ideas into practice through the AI-Ready Backend
                project.
              </p>
            </div>
          </div>
        </section>

        {/* Section: Education, Languages & Certificates */}
        <section className="pt-16 sm:pt-20 pb-20 sm:pb-28 border-t border-[#DED9DC]">
          {/* Header Row */}
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#252326] tracking-tight">
              A foundation. A learning mindset.
            </h2>
            <span className="text-xs font-mono uppercase tracking-wider text-[#635E64]">
              EDUCATION & DEVELOPMENT
            </span>
          </div>

          {/* Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Column: Education & Languages */}
            <div className="lg:col-span-6 space-y-12">
              {/* Degree */}
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#69445F] font-medium block mb-3">
                  EDUCATION / 2023 — 2027
                </span>
                <h3 className="text-2xl font-bold text-[#252326]">
                  Bachelor of Computer Science
                </h3>
                <p className="text-base text-[#635E64] mt-2">
                  Westminster International University in Tashkent
                </p>
              </div>

              {/* Languages */}
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#69445F] font-medium block mb-4">
                  LANGUAGES
                </span>
                <div className="space-y-3">
                  {[
                    { lang: 'Uzbek', level: 'Native' },
                    { lang: 'English', level: 'Main working language' },
                    { lang: 'Russian', level: 'Minimum conversation' },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between py-1 text-sm"
                    >
                      <span className="font-bold text-[#252326]">
                        {item.lang}
                      </span>
                      <span className="font-mono text-xs text-[#635E64]">
                        {item.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Certificates */}
            <div className="lg:col-span-6">
              <span className="text-xs font-mono uppercase tracking-wider text-[#69445F] font-medium block mb-4">
                CERTIFICATES
              </span>
              <div className="divide-y divide-[#DED9DC]">
                {[
                  {
                    name: 'Introduction to Agent Skills',
                    url: 'https://verify.skilljar.com/c/8q9rnjwmq4gh',
                  },
                  {
                    name: 'Introduction to Model Context Protocol',
                    url: 'https://verify.skilljar.com/c/2krqktau47h7',
                  },
                  {
                    name: 'Claude Code in Action',
                    url: 'https://verify.skilljar.com/c/yqfk2daeufh9',
                  },
                  {
                    name: 'Building with the Claude API',
                    url: 'https://verify.skilljar.com/c/toegg3koo4oz',
                  },
                ].map((cert, idx) => (
                  <a
                    key={idx}
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-4 flex items-center justify-between gap-4 group hover:bg-[#F1EBEF]/40 px-2 -mx-2 rounded transition-colors"
                  >
                    <span className="text-base sm:text-[17px] text-[#252326] group-hover:text-[#69445F] transition-colors">
                      {cert.name}
                    </span>
                    <span className="inline-flex items-center gap-1 text-sm text-[#69445F] font-mono shrink-0 group-hover:underline">
                      Verify
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Section: GET IN TOUCH */}
      <footer id="contact" className="w-full bg-[#F1EBEF] border-t border-[#DED9DC]">
        <div className="max-w-[1248px] mx-auto px-6 sm:px-8 xl:px-0 pt-16 sm:pt-20 pb-12">
          <span className="text-xs font-mono uppercase tracking-wider text-[#69445F] font-medium block mb-6">
            GET IN TOUCH
          </span>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-16 sm:mb-20 items-start">
            {/* Left Column: Serif Headline */}
            <div className="lg:col-span-6">
              <h2 className="font-serif text-4xl sm:text-5xl lg:text-[52px] leading-[1.12] text-[#252326] tracking-tight">
                Good software starts
                <br />
                with a conversation.
              </h2>
            </div>

            {/* Right Column: Contact Details */}
            <div className="lg:col-span-6 space-y-5">
              {/* Email with copy button */}
              <div className="flex items-center gap-3">
                <a
                  href="mailto:mohiramansurovna07@gmail.com"
                  className="group inline-flex items-center gap-2 text-2xl sm:text-[28px] font-medium text-[#252326] hover:text-[#69445F] transition-colors tracking-tight"
                >
                  <span>mohiramansurovna07@gmail.com</span>
                  <ArrowUpRight className="w-6 h-6 stroke-[2] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <button
                  type="button"
                  onClick={() =>
                    copyToClipboard('mohiramansurovna07@gmail.com', 'email')
                  }
                  title="Copy email address"
                  className="p-1.5 rounded text-[#635E64] hover:text-[#69445F] hover:bg-black/5 transition-colors cursor-pointer"
                  aria-label="Copy email"
                >
                  {copiedText === 'email' ? (
                    <Check className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Phone & Telegram */}
              <div className="flex flex-wrap items-center gap-6 sm:gap-8 text-sm sm:text-base text-[#252326] pt-1">
                <div className="inline-flex items-center gap-2">
                  <a
                    href="tel:+998918590720"
                    className="hover:text-[#69445F] transition-colors"
                  >
                    +998 91 859 07 20
                  </a>
                  <button
                    type="button"
                    onClick={() =>
                      copyToClipboard('+998918590720', 'phone')
                    }
                    title="Copy phone number"
                    className="p-1 rounded text-[#635E64] hover:text-[#69445F] hover:bg-black/5 transition-colors cursor-pointer"
                    aria-label="Copy phone number"
                  >
                    {copiedText === 'phone' ? (
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
                <a
                  href="https://t.me/mira0720"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#69445F] transition-colors"
                >
                  Telegram · @mira0720
                </a>
              </div>

              {/* GitHub & LinkedIn */}
              <div className="flex flex-wrap items-center gap-6 sm:gap-8 text-sm sm:text-base pt-1">
                <a
                  href="https://github.com/mohiramansurovna"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-[#69445F] transition-colors"
                >
                  github.com/mohiramansurovna
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://linkedin.com/in/mohira-kadamboyeva"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-[#69445F] transition-colors"
                >
                  linkedin.com/in/mohira-kadamboyeva
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Sub-bar */}
          <div className="border-t border-[#DED9DC] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-normal text-[#635E64]">
            <div>Mohira Kadamboyeva · Full-Stack Software Engineer</div>
            <div>Tashkent, Uzbekistan</div>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 hover:text-[#252326] transition-colors cursor-pointer"
            >
              Back to top
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </footer>
    </div>
  )
}
