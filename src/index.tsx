import { Hono } from 'hono'

type Link = { name: string; href: string }

const socials: Link[] = [
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/annamalai-p' },
  { name: 'GitHub', href: 'https://github.com/annamalai-palanikumar' },
  { name: 'Stack Overflow', href: 'https://stackoverflow.com/users/6784846' },
  { name: 'GitLab', href: 'https://gitlab.com/annamalai-palanikumar' },
  { name: 'Google Dev', href: 'https://g.dev/annamalai-palanikumar' },
  { name: 'X / Twitter', href: 'https://x.com/mistermalai' },
  { name: 'Facebook', href: 'https://www.facebook.com/annamalai.palanikumar.be' },
  { name: 'Instagram', href: 'https://www.instagram.com/mistermalai' },
]

const projects: Link[] = [
  { name: 'Blog', href: 'https://mathiway.com/blog' },
  { name: 'IP Finder', href: 'https://mathiway.com/tools/my-ip' },
  { name: 'Line Break Remover', href: 'https://mathiway.com/tools/remove-line-breaks' },
  { name: 'MathiWay Tools', href: 'https://mathiway.com/tools' },
]

const skills: { name: string; level: number }[] = [
  { name: 'Java', level: 90 },
  { name: 'MySQL', level: 90 },
  { name: 'Redis', level: 80 },
  { name: 'MongoDB', level: 75 },
  { name: 'JavaScript', level: 55 },
  { name: 'PHP', level: 55 },
  { name: 'Python', level: 55 },
  { name: 'Docker & Self-hosting', level: 70 },
]

const HomePage = () => (
  <div class="min-h-screen bg-slate-950 text-slate-200">
    <header class="mx-auto max-w-4xl px-6 pt-16 pb-8 text-center">
      <h1 class="text-4xl font-bold tracking-tight text-white">Annamalai Palanikumar</h1>
      <p class="mt-3 text-lg text-orange-400">Full Stack Developer</p>
      <div class="mt-6 flex flex-wrap justify-center gap-2">
        {socials.map((s) => (
          <a
            href={s.href}
            target="_blank"
            class="rounded-full border border-slate-700 px-4 py-1.5 text-sm text-slate-300 transition hover:border-orange-400 hover:text-orange-300"
          >
            {s.name}
          </a>
        ))}
      </div>
    </header>

    <main class="mx-auto max-w-4xl space-y-14 px-6 pb-20">
      <section>
        <h2 class="mb-4 text-2xl font-semibold text-white">About</h2>
        <p class="leading-relaxed text-slate-300">
          Passionate and efficient Full Stack Developer with 9 years of IT experience building scalable systems.
          I work on a highly regulated, multi-licensed iGaming platform — enhancing and customising its components
          with advanced compliance features across many countries. Previously at Infosys, I built configurable
          eCommerce microservice platforms that support over 10,000 orders per minute.
        </p>
        <dl class="mt-6 grid grid-cols-2 gap-x-8 gap-y-3 text-sm">
          <div class="flex justify-between border-b border-slate-800 pb-2">
            <dt class="text-slate-500">Location</dt>
            <dd>Uppsala, Sweden</dd>
          </div>
          <div class="flex justify-between border-b border-slate-800 pb-2">
            <dt class="text-slate-500">Degree</dt>
            <dd>Bachelor of Engineering</dd>
          </div>
          <div class="flex justify-between border-b border-slate-800 pb-2">
            <dt class="text-slate-500">Experience</dt>
            <dd>9+ Years</dd>
          </div>
          <div class="flex justify-between border-b border-slate-800 pb-2">
            <dt class="text-slate-500">Currently</dt>
            <dd>ComeOn Group, Stockholm</dd>
          </div>
        </dl>
      </section>

      <section>
        <h2 class="mb-4 text-2xl font-semibold text-white">Skills</h2>
        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {skills.map((s) => (
            <div>
              <div class="mb-1 flex justify-between text-sm">
                <span class="text-slate-300">{s.name}</span>
                <span class="text-slate-500">{s.level}%</span>
              </div>
              <div class="h-2 rounded-full bg-slate-800">
                <div class="h-2 rounded-full bg-orange-500" style={{ width: `${s.level}%` }} />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 class="mb-4 text-2xl font-semibold text-white">Projects &amp; Tools</h2>
        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {projects.map((p) => (
            <a
              href={p.href}
              target="_blank"
              class="rounded-xl border border-slate-800 bg-slate-900 p-5 transition hover:border-orange-400 hover:bg-slate-800"
            >
              <h3 class="font-medium text-white">{p.name}</h3>
              <p class="mt-1 text-sm text-slate-400">{p.href.replace(/^https?:\/\//, '')}</p>
            </a>
          ))}
        </div>
      </section>
    </main>

    <footer class="border-t border-slate-800 py-8 text-center text-sm text-slate-500">
      <p>A curious learner. © 2026 Annamalai Palanikumar</p>
    </footer>
  </div>
)

const app = new Hono()

app.get('/', (c) =>
  c.html(
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Annamalai Palanikumar — Full Stack Developer</title>
        <meta property="og:title" content="Annamalai Palanikumar — Full Stack Developer" />
        <meta property="og:type" content="profile" />
        <meta property="og:description" content="Full Stack Developer with 9 years of IT experience building scalable systems." />
        <meta name="twitter:card" content="summary" />
        <script src="https://cdn.tailwindcss.com" />
      </head>
      <body class="bg-slate-950">
        <HomePage />
      </body>
    </html>,
  ),
)

export default app