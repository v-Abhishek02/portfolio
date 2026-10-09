import { useEffect, useLayoutEffect, useState, type ReactNode, type FormEvent } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'
import { FaGithub, FaLinkedin, FaPhone, FaDownload, FaTrophy, FaUser, FaGraduationCap, FaEnvelope, FaBriefcase, FaBrain, FaRobot, FaEye, FaServer, FaCode, FaArrowRight, FaExternalLinkAlt, FaLaptopCode, FaTools, FaSatellite, FaHeartbeat, FaFilm, FaShieldAlt, FaSchool, FaProjectDiagram, FaChartLine, FaPaperPlane, FaBars, FaTimes } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'
import { me, skills, awards } from './data'

gsap.registerPlugin(ScrollTrigger)

const box = 'mx-auto w-full max-w-7xl px-6 md:px-10'
const label = 'text-xs font-semibold tracking-[0.2em] text-fire'

const Chars = ({ text }: { text: string }) => (
  <span aria-label={text}>
    {text.split(' ').map((w, wi) => (
      <span key={wi} aria-hidden className="mr-[0.25em] inline-block whitespace-nowrap">
        {w.split('').map((c, i) => (
          <span key={i} className="inline-block overflow-hidden align-bottom" style={{ paddingBottom: '.12em', marginBottom: '-.12em' }}>
            <span className="ch inline-block">{c}</span>
          </span>
        ))}
      </span>
    ))}
  </span>
)

const roles = ['DATA SCIENCE AND AI STUDENT', 'ASPIRING ML ENGINEER', 'ASPIRING AI ENGINEER', 'ASPIRING DATA SCIENTIST']
function Typed() {
  const [t, setT] = useState(roles[0])
  useEffect(() => {
    let r = 0, i = roles[0].length, del = true, id = 0
    const step = () => {
      const w = roles[r]
      i += del ? -1 : 1
      setT(w.slice(0, i))
      let d = del ? 50 : 100
      if (!del && i === w.length) { del = true; d = 1500 }
      else if (del && i === 0) { del = false; r = (r + 1) % roles.length; d = 300 }
      id = window.setTimeout(step, d)
    }
    id = window.setTimeout(step, 2200)
    return () => clearTimeout(id)
  }, [])
  return <><span>{t}</span><span className="caret ml-1 inline-block h-5 w-[2px] translate-y-1 bg-white" /></>
}

const IconBox = ({ children }: { children: ReactNode }) => (
  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg border border-fire/60 bg-fire/10 text-lg text-fire transition duration-300 group-hover:bg-fire group-hover:text-black">{children}</span>
)

const Head = ({ tag, title, right }: { tag: string; title: string; right?: ReactNode }) => (
  <div className="rv mb-10 flex items-end justify-between gap-4">
    <div><p className={label}>{tag}</p><h2 className="mt-2 text-3xl font-bold md:text-4xl">{title}</h2></div>
    {right}
  </div>
)

const code = `developer = {
  "name": "Abhishek Vishwakarma",
  "role": "ML and AI Engineer",
  "passion": "Building intelligent systems",
  "skills": ["Python", "PyTorch", "RAG", "FastAPI"],
}

def create_magic():
    return "Clean Code + Smart Models"

create_magic()`

const nav = ['home', 'about', 'focus', 'skills', 'projects', 'contact']
const services = [
  { Icon: FaChartLine, t: 'Machine Learning', d: 'Supervised and unsupervised learning, feature engineering, and careful evaluation with cross-validation, Precision, Recall, and AUC-ROC.' },
  { Icon: FaProjectDiagram, t: 'Deep Learning and Neural Networks', d: 'Strong foundation in neural networks, CNNs, and Transformers. I coded an MLP from scratch and worked with CNN-BiLSTM and GNN models in OrbitGuard.' },
  { Icon: FaRobot, t: 'GenAI and RAG', d: 'Exploring LLM agents and retrieval. I built a conversational sales agent with LangGraph and LLaMA 3.1 that answers from a knowledge base and captures leads.' },
  { Icon: FaServer, t: 'MLOps and Deployment', d: 'Learning to take models beyond notebooks with FastAPI, Docker, MLflow, CI/CD, and AWS basics.' },
]
const info = [
  { Icon: FaUser, k: 'Name', v: 'Abhishek Vishwakarma' },
  { Icon: FaGraduationCap, k: 'Education', v: 'MSc Data Science and AI (2025 to 2027)' },
  { Icon: FaEnvelope, k: 'Email', v: me.email },
  { Icon: FaGithub, k: 'GitHub', v: 'v-Abhishek02' },
  { Icon: FaBriefcase, k: 'Availability', v: 'Open to internships and entry-level roles' },
  { Icon: FaBrain, k: 'Focus', v: 'ML, Deep Learning, GenAI' },
]
const academics = [
  { Icon: FaGraduationCap, t: 'Master of Science in Data Science and Artificial Intelligence', s: 'Mithibai College, University of Mumbai', y: '2025 to 2027 | Pursuing' },
  { Icon: FaGraduationCap, t: 'Bachelor of Science in Information Technology', s: 'Elphinstone College, Homi Bhabha State University (HBSU)', y: '2022 to 2025 | Completed' },
  { Icon: FaSchool, t: 'Higher Secondary Certificate (HSC)', s: "Bharatiya Vidya Bhavan's College", y: '' },
  { Icon: FaSchool, t: 'Secondary School Certificate (SSC)', s: 'MCHS School', y: '' },
]
const pIcons = [FaSatellite, FaRobot, FaHeartbeat, FaFilm]
const blurbs = [
  'Tracks objects in low Earth orbit and predicts collision risk using SGP4, CNN-BiLSTM, PINN, GNN, and PPO, with a FastAPI and React dashboard.',
  'Conversational sales agent on LangGraph and LLaMA 3.1 that detects intent, answers from a knowledge base, and captures leads.',
  'Custom MLP validated with 5-fold cross-validation, Precision, Recall, and AUC-ROC.',
  'Content-based recommender using cosine similarity and live TMDB metadata.',
]
const stats = [
  { Icon: FaLaptopCode, to: 5, suf: '', l: 'Projects built' },
  { Icon: FaTrophy, to: 6, suf: '', l: 'Hackathons and certificates' },
  { Icon: FaTools, to: 30, suf: '+', l: 'Tools explored' },
  { Icon: FaGraduationCap, to: 1, suf: '', l: 'Degree done, MSc ongoing' },
]

type Work = { title: string; text: string; tags: string[]; Icon: any; badge?: string; code?: string; demo?: string; note?: string }
const GH = 'https://github.com/v-Abhishek02'
const work: Work[] = [
  { title: 'OrbitGuard', Icon: FaSatellite, text: blurbs[0], tags: ['SGP4', 'CNN-BiLSTM', 'PINN', 'GNN', 'PPO'], note: 'Repository coming soon' },
  { title: 'AutoStream Agent', Icon: FaRobot, text: blurbs[1], tags: ['LangGraph', 'LLaMA 3.1', 'RAG', 'Streamlit'], code: GH + '/autostream-agent' },
  { title: 'Breast cancer detection', Icon: FaHeartbeat, text: 'MLP coded from scratch in NumPy, 5-fold cross-validated, and deployed as a Streamlit app.', tags: ['NumPy', 'MLP', '5-fold CV', 'Streamlit'], code: GH + '/breast-cancer-mlp', demo: 'https://breast-cancer-mlp-prediction.streamlit.app/' },
  { title: 'Movie recommendation system', Icon: FaFilm, text: 'Flask app recommending similar movies by cosine similarity, with TMDB posters, login, and watchlist.', tags: ['Flask', 'MySQL', 'Cosine similarity', 'TMDB API'], code: GH + '/Movies_Recommendation_System_Using_ML' },
  { title: 'Border AI', Icon: FaShieldAlt, badge: 'Hackathon', text: 'Hackathon team project I took part in: YOLOv8 detection, license-plate reading, face matching, zone checks, and alerts.', tags: ['YOLOv8', 'OpenCV', 'ANPR', 'Docker'], code: 'https://github.com/jaimin004/border_ai' },
  { title: 'More on GitHub', Icon: FaGithub, text: 'House price prediction with Flask and other experiments.', tags: [], code: GH },
]

export default function App() {
  const [active, setActive] = useState('home')
  const [open, setOpen] = useState(false)
  const [tab, setTab] = useState('All')
  const [status, setStatus] = useState('')

  useLayoutEffect(() => {
    const lenis = new Lenis()
    lenis.on('scroll', ScrollTrigger.update)
    const tick = (t: number) => lenis.raf(t * 1000)
    gsap.ticker.add(tick)
    gsap.ticker.lagSmoothing(0)
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest('a[href^="#"]')
      if (a) { e.preventDefault(); lenis.scrollTo(a.getAttribute('href')!, { offset: -64 }) }
    }
    document.addEventListener('click', onClick)

    const ctx = gsap.context(() => {
      gsap.to('.progress', { scaleX: 1, ease: 'none', scrollTrigger: { trigger: document.documentElement, start: 'top top', end: 'bottom bottom', scrub: 0.3 } })
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } })
      tl.fromTo('.nav-in', { y: -24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, stagger: 0.06 })
        .fromTo('.slash', { x: 120, opacity: 0 }, { x: 0, opacity: 1, duration: 1.2 }, 0.2)
        .fromTo('.arc', { rotation: -90, opacity: 0 }, { rotation: 0, opacity: 1, duration: 1.4 }, 0.2)
        .fromTo('.portrait', { y: 80, opacity: 0 }, { y: 0, opacity: 1, duration: 1.3 }, 0.3)
        .fromTo('.hero-name .ch', { yPercent: 115 }, { yPercent: 0, duration: 1, stagger: 0.03 }, 0.4)
        .fromTo('.hero-in', { y: 26, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, stagger: 0.1 }, 0.9)
        .fromTo('.badge', { scale: 0.5, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.8, ease: 'back.out(2)' }, 1.4)
      tl.eventCallback('onComplete', () => { gsap.to('.badge', { y: -10, duration: 2, yoyo: true, repeat: -1, ease: 'sine.inOut' }) })

      gsap.set('.rv', { opacity: 0, y: 40 })
      ScrollTrigger.batch('.rv', { start: 'top 90%', once: true, onEnter: (b) => gsap.to(b, { opacity: 1, y: 0, duration: 0.8, stagger: 0.12, ease: 'power3.out' }) })

      gsap.utils.toArray<HTMLElement>('.count').forEach((el) => {
        const o = { v: 0 }, to = Number(el.dataset.to), suf = el.dataset.suf || ''
        ScrollTrigger.create({ trigger: el, start: 'top 90%', once: true,
          onEnter: () => gsap.to(o, { v: to, duration: 1.8, ease: 'power2.out', onUpdate: () => { el.textContent = Math.round(o.v) + suf } }) })
      })

      nav.forEach((id) => ScrollTrigger.create({ trigger: '#' + id, start: 'top 45%', end: 'bottom 45%', onToggle: (s) => s.isActive && setActive(id) }))
    })
    return () => { document.removeEventListener('click', onClick); ctx.revert(); gsap.ticker.remove(tick); lenis.destroy() }
  }, [])

  const groups = ['All', ...skills.map((s) => s.group)]
  const tiles = skills.filter((s) => tab === 'All' || s.group === tab).flatMap((s) => s.items)

  const send = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const f = new FormData(form)
    const raw = String((import.meta as any).env?.VITE_FORMSPREE_ID || '')
    const id = raw.replace(/^.*\//, '').trim()
    if (!id) {
      window.location.href = `mailto:${me.email}?subject=${encodeURIComponent('Portfolio message from ' + f.get('name'))}&body=${encodeURIComponent(f.get('message') + '\n\nFrom: ' + f.get('name') + ' (' + f.get('email') + ')')}`
      return
    }
    setStatus('Sending...')
    const slow = setTimeout(() => setStatus('Still sending, this can take a few seconds...'), 6000)
    const ctl = new AbortController()
    const timer = setTimeout(() => ctl.abort(), 60000)
    try {
      const r = await fetch(`https://formspree.io/f/${id}`, { method: 'POST', body: f, headers: { Accept: 'application/json' }, signal: ctl.signal })
      if (r.ok) { setStatus('Thanks! Your message was sent.'); form.reset() }
      else {
        const d = await r.json().catch(() => ({}))
        setStatus((d.errors && d.errors.map((x: any) => x.message).join(', ')) || d.error || `Could not send (error ${r.status}). Please email me at ${me.email}`)
      }
    } catch {
      setStatus('Could not confirm delivery. Please check your connection or email me at ' + me.email)
    } finally { clearTimeout(slow); clearTimeout(timer) }
  }
  const field = 'w-full rounded-md border border-line bg-card px-4 py-3 text-sm outline-none transition focus:border-fire'

  return (
    <>
      <div className="progress fixed inset-x-0 top-0 z-[90] h-[3px] origin-left scale-x-0 bg-fire" />

      <nav className="fixed inset-x-0 top-0 z-50 border-b border-line bg-ink/85 backdrop-blur">
        <div className={`${box} flex h-16 items-center justify-between`}>
          <a href="#home" className="nav-in flex items-center gap-2 text-lg font-bold">
            <span className="grid h-8 w-8 place-items-center rounded bg-fire font-extrabold text-black">A</span>
            ABHISHEK <span className="-ml-1 text-fire">V.</span>
          </a>
          <div className="hidden items-center gap-9 text-xs font-medium tracking-wider lg:flex">
            {nav.map((l) => (
              <a key={l} href={`#${l}`} className={`nav-in relative py-5 uppercase transition hover:text-fire ${active === l ? 'text-fire' : ''}`}>
                {l}<span className={`absolute inset-x-0 bottom-3 h-0.5 origin-left bg-fire transition-transform duration-300 ${active === l ? 'scale-x-100' : 'scale-x-0'}`} />
              </a>
            ))}
          </div>
          <a href={`mailto:${me.email}`} className="nav-in group hidden items-center gap-2 rounded border border-fire px-5 py-2.5 text-xs font-semibold tracking-wider transition hover:bg-fire hover:text-black sm:flex">
            LET'S TALK <FaPaperPlane className="text-fire transition group-hover:translate-x-1 group-hover:text-black" />
          </a>
          <button className="text-xl lg:hidden" aria-label="Menu" onClick={() => setOpen(!open)}>{open ? <FaTimes /> : <FaBars />}</button>
        </div>
        {open && (
          <div className="flex flex-col gap-1 border-t border-line bg-ink px-6 py-3 lg:hidden">
            {nav.map((l) => <a key={l} href={`#${l}`} onClick={() => setOpen(false)} className="py-2 text-sm uppercase tracking-wider">{l}</a>)}
          </div>
        )}
      </nav>

      <header id="home" className="relative overflow-hidden pt-16">
        <pre className="pointer-events-none absolute left-6 top-24 hidden font-mono text-[11px] leading-5 text-white/25 min-[1800px]:block md:left-10">{code}</pre>
        <div className={`${box} grid items-center gap-6 lg:grid-cols-2`}>
          <div className="relative z-10 py-12 lg:py-0 xl:pl-24">
            <p className="hero-in text-xl">Hello, I'm</p>
            <h1 className="hero-name mt-1 text-4xl font-extrabold leading-[1.1] sm:text-5xl xl:text-6xl">
              <Chars text="ABHISHEK" /><br /><span className="text-fire"><Chars text="VISHWAKARMA" /></span>
            </h1>
            <p className="hero-in mt-5 text-base font-semibold tracking-[0.3em] sm:text-lg"><Typed /></p>
            <p className="hero-in mt-5 max-w-md text-sm leading-relaxed text-white/70">I am an MSc Data Science and AI student who learns by building. My projects range from a space-debris collision-risk system to a RAG-style sales agent, and I am looking for internship or entry-level opportunities where I can grow into an ML Engineer, AI Engineer, or Data Scientist.</p>
            <div className="hero-in mt-7 flex flex-wrap gap-4">
              <a href="#projects" className="group flex items-center gap-3 rounded bg-fire px-6 py-3 text-xs font-semibold tracking-wider text-black transition hover:-translate-y-1 hover:shadow-[0_10px_30px_-8px_#ff5a14]">VIEW MY WORK <FaArrowRight className="transition group-hover:translate-x-1" /></a>
              <a href={me.resume} download className="group flex items-center gap-3 rounded border border-fire px-6 py-3 text-xs font-semibold tracking-wider transition hover:-translate-y-1 hover:bg-fire/10">DOWNLOAD RESUME <FaDownload className="transition group-hover:translate-y-0.5" /></a>
            </div>
            <div className="hero-in mt-8 flex items-center gap-4">
              <span className="text-xs font-medium tracking-wider">FIND ME ON</span>
              {[[FaGithub, me.github, 'GitHub'], [FaLinkedin, me.linkedin, 'LinkedIn'], [SiGmail, `mailto:${me.email}`, 'Email']].map(([I, h, n]: any) => (
                <a key={n} href={h} target="_blank" rel="noreferrer" aria-label={n} className="grid h-9 w-9 place-items-center rounded-full bg-white/10 transition duration-300 hover:-translate-y-1 hover:bg-fire hover:text-black"><I /></a>
              ))}
            </div>
          </div>

          <div className="relative mx-auto h-[420px] w-full max-w-[560px] sm:h-[520px] lg:h-[calc(100svh-4rem)] lg:min-h-[560px] lg:max-w-[640px]">
            <div className="slash absolute right-[12%] top-0 h-[68%] w-[30%]"><div className="h-full w-full -skew-x-[22deg] bg-fire" /></div>
            <div className="dots absolute right-[22%] top-10 h-24 w-32 opacity-60" />
            <div className="arc absolute bottom-0 left-[2%] aspect-square w-[88%] rounded-full border-2 border-transparent border-l-fire border-t-fire/60" />
            <img src="/profile-cutout.png" onError={(e) => { e.currentTarget.src = '/profile.png' }} alt="Abhishek Vishwakarma"
              className="portrait absolute bottom-0 left-1/2 max-h-full w-full -translate-x-1/2 object-contain object-bottom" />
            <div className="badge absolute right-0 top-[42%] z-10 rounded-md border border-fire/70 bg-ink/80 p-4 backdrop-blur">
              <p className="text-3xl font-extrabold text-fire">MSc</p>
              <p className="text-[10px] font-semibold leading-tight tracking-wider">DATA SCIENCE<br />AND AI</p>
              <FaCode className="ml-auto mt-1 text-fire" />
            </div>
          </div>
        </div>
      </header>

      <section id="about" className="border-y border-line bg-card py-16 md:py-20">
        <div className={`${box} grid gap-12 lg:grid-cols-[1fr_1.3fr]`}>
          <div className="rv lg:border-r lg:border-line lg:pr-12">
            <p className={label}>ABOUT ME</p>
            <h2 className="mt-3 text-3xl font-bold leading-tight">I'm a student learning to build intelligent systems.</h2>
            <p className="mt-4 text-sm leading-relaxed text-white/70">{me.profile}</p>
            <p className="mt-4 font-script text-4xl text-fire">Abhishek</p>
          </div>
          <div className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
            {info.map(({ Icon, k, v }) => (
              <div key={k} className="rv group flex items-center gap-4">
                <IconBox><Icon /></IconBox>
                <div className="min-w-0"><p className="text-xs text-white/50">{k}</p><p className="break-words text-sm font-medium">{v}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="education" className="border-b border-line py-20 md:py-24">
        <div className={box}>
          <Head tag="EDUCATION" title="Academic Background" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {academics.map(({ Icon, t, s, y }) => (
              <div key={t} className="rv group rounded-xl border border-line bg-card p-6 transition duration-300 hover:-translate-y-2 hover:border-fire hover:shadow-[0_18px_40px_-20px_#ff5a14]">
                <IconBox><Icon /></IconBox>
                <h3 className="mt-5 text-base font-semibold">{t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{s}</p>
                {y && <p className="mt-3 text-xs font-semibold text-fire">{y}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="focus" className="py-20 md:py-24">
        <div className={box}>
          <div className="rv mb-10 text-center"><p className={label}>FOCUS AREAS</p><h2 className="mt-2 text-3xl font-bold md:text-4xl">What I'm Learning and Building</h2></div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map(({ Icon, t, d }) => (
              <div key={t} className="rv group rounded-xl border border-line bg-card p-6 transition duration-300 hover:-translate-y-2 hover:border-fire hover:shadow-[0_18px_40px_-20px_#ff5a14]">
                <IconBox><Icon /></IconBox>
                <h3 className="mt-5 text-base font-semibold">{t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="border-y border-line bg-card py-16 md:py-20">
        <div className={box}>
          <Head tag="TECH STACK" title="Tools I use and am learning" />
          <div className="rv mb-8 flex flex-wrap gap-2">
            {groups.map((g) => (
              <button key={g} onClick={() => setTab(g)} className={`rounded-full border px-4 py-1.5 text-xs font-medium transition ${tab === g ? 'border-fire bg-fire text-black' : 'border-line hover:border-fire'}`}>{g}</button>
            ))}
          </div>
          <div key={tab} className="grid grid-cols-3 gap-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-10">
            {tiles.map(([name, Icon], i) => (
              <div key={name} className="pop group flex flex-col items-center gap-3 rounded-xl border border-line bg-ink px-2 py-5 text-center transition duration-300 hover:-translate-y-1.5 hover:border-fire" style={{ animationDelay: `${i * 25}ms` }}>
                <Icon className="text-3xl text-white/90 transition duration-300 group-hover:scale-125 group-hover:text-fire" />
                <span className="text-[11px] leading-tight text-white/70">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 md:py-24">
        <div className={box}>
          <Head tag="FEATURED PROJECTS" title="Projects I've Built" right={<a href={me.github} target="_blank" rel="noreferrer" className="group hidden items-center gap-2 text-xs font-semibold tracking-wider text-fire sm:flex">VIEW ALL PROJECTS <FaArrowRight className="transition group-hover:translate-x-1" /></a>} />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {work.map((p, i) => {
              const wide = i >= 4
              return (
                <article key={p.title} className={`rv group flex flex-col overflow-hidden rounded-xl border border-line bg-card transition duration-300 hover:-translate-y-2 hover:border-fire hover:shadow-[0_18px_40px_-20px_#ff5a14] ${wide ? 'lg:col-span-2 lg:flex-row' : ''}`}>
                  <div className={`gridbg relative grid h-36 place-items-center overflow-hidden bg-gradient-to-br from-fire/25 via-ink to-ink ${wide ? 'lg:h-auto lg:w-44 lg:shrink-0' : ''}`}>
                    <p.Icon className="text-5xl text-fire transition duration-500 group-hover:rotate-6 group-hover:scale-125" />
                    {p.badge && <span className="absolute left-3 top-3 rounded bg-fire px-2 py-1 text-[10px] font-semibold text-black">{p.badge}</span>}
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="font-semibold">{p.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-white/60">{p.text}</p>
                    <div className="mt-4 flex flex-wrap gap-1.5">{p.tags.slice(0, 4).map((t) => <span key={t} className="rounded bg-white/5 px-2 py-1 text-[10px] text-white/70">{t}</span>)}</div>
                    <div className="mt-4 flex flex-wrap items-center gap-2 text-xs font-semibold">
                      {p.code && <a href={p.code} target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded border border-line px-3 py-2 transition hover:border-fire hover:text-fire"><FaGithub /> Code</a>}
                      {p.demo && <a href={p.demo} target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded bg-fire px-3 py-2 text-black transition hover:-translate-y-0.5"><FaExternalLinkAlt /> Live demo</a>}
                      {p.note && <span className="text-white/40">{p.note}</span>}
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-card py-12">
        <div className={`${box} grid grid-cols-2 gap-y-8 lg:grid-cols-4 lg:divide-x lg:divide-line`}>
          {stats.map(({ Icon, to, suf, l }) => (
            <div key={l} className="rv flex items-center justify-center gap-4 px-4">
              <Icon className="text-4xl text-fire" />
              <div><p className="text-3xl font-extrabold"><span className="count" data-to={to} data-suf={suf}>0</span></p><p className="text-xs text-white/60">{l}</p></div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="py-20 md:py-24">
        <div className={`${box} grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-16`}>
          <div className="rv">
            <p className={label}>ACHIEVEMENTS</p>
            <h2 className="mt-2 text-3xl font-bold">Hackathons and certificates</h2>
            <ul className="mt-6 space-y-3">
              {awards.map(([t, y]) => (
                <li key={t} className="group flex items-center gap-4 rounded-lg border border-line bg-card p-4 transition duration-300 hover:translate-x-2 hover:border-fire">
                  <IconBox><FaTrophy /></IconBox>
                  <div className="min-w-0"><p className="text-sm font-medium">{t}</p><p className="text-xs text-white/50">{y}</p></div>
                </li>
              ))}
            </ul>
          </div>
          <div className="rv">
            <p className={label}>LET'S WORK TOGETHER</p>
            <h2 className="mt-2 text-3xl font-bold">Get In Touch</h2>
            <p className="mt-3 max-w-md text-sm text-white/60">I'm a student looking for internship and entry-level opportunities in machine learning, AI, and data science. Feel free to reach out.</p>
            <div className="mt-6 grid gap-8 md:grid-cols-[0.9fr_1.1fr]">
              <div className="space-y-4 text-sm">
                {[[FaEnvelope, me.email, `mailto:${me.email}`], [FaLinkedin, 'v-abhishek01', me.linkedin], [FaGithub, 'v-Abhishek02', me.github]].map(([I, t, h]: any) => (
                  <a key={t} href={h} target="_blank" rel="noreferrer" className="group flex items-center gap-3 break-all transition hover:text-fire"><I className="shrink-0 text-fire" />{t}</a>
                ))}
              </div>
              <form onSubmit={send} className="space-y-3">
                <input name="name" required placeholder="Your Name" className={field} />
                <input name="email" required type="email" placeholder="Your Email" className={field} />
                <textarea name="message" required rows={4} placeholder="Your Message" className={field} />
                <button type="submit" className="group flex w-full items-center justify-center gap-2 rounded bg-fire py-3 text-xs font-semibold tracking-wider text-black transition hover:-translate-y-1 hover:shadow-[0_10px_30px_-8px_#ff5a14]">SEND MESSAGE <FaPaperPlane className="transition group-hover:translate-x-1" /></button>
                <p className="text-xs text-white/60" aria-live="polite">{status}</p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-line bg-card">
        <div className={`${box} grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4`}>
          <div>
            <p className="flex items-center gap-2 text-lg font-bold"><span className="grid h-8 w-8 place-items-center rounded bg-fire font-extrabold text-black">A</span>ABHISHEK <span className="-ml-1 text-fire">V.</span></p>
            <p className="mt-3 text-sm text-white/60">Learning to build intelligent systems, one project at a time.</p>
          </div>
          <div>
            <p className="mb-3 text-sm font-semibold">Quick Links</p>
            <ul className="space-y-2 text-sm text-white/60">{nav.map((l) => <li key={l}><a href={`#${l}`} className="capitalize transition hover:text-fire">{l}</a></li>)}</ul>
          </div>
          <div>
            <p className="mb-3 text-sm font-semibold">Follow Me</p>
            <div className="flex gap-3">
              {[[FaGithub, me.github, 'GitHub'], [FaLinkedin, me.linkedin, 'LinkedIn'], [SiGmail, `mailto:${me.email}`, 'Email']].map(([I, h, n]: any) => (
                <a key={n} href={h} target="_blank" rel="noreferrer" aria-label={n} className="grid h-9 w-9 place-items-center rounded-full bg-white/10 transition duration-300 hover:-translate-y-1 hover:bg-fire hover:text-black"><I /></a>
              ))}
            </div>
            <p className="mt-4 text-sm text-fire">Open to internships and entry-level<br />ML, AI, and data science roles.</p>
          </div>
          <div>
            <p className="mb-3 text-sm font-semibold">Resume</p>
            <p className="mb-3 text-sm text-white/60">Download my latest resume as a PDF.</p>
            <a href={me.resume} download className="group inline-flex items-center gap-2 rounded bg-fire px-5 py-3 text-xs font-semibold tracking-wider text-black transition hover:-translate-y-1"><FaDownload /> DOWNLOAD PDF</a>
          </div>
        </div>
        <div className="border-t border-line py-4 text-center text-xs text-white/40">© {new Date().getFullYear()} {me.name}. All rights reserved.</div>
      </footer>
    </>
  )
}
