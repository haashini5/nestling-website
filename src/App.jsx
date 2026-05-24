import React from "react";
import { motion } from "framer-motion";
import nestlingLogo from "./assets/nestling-logo.png";
import nestlingIcon from "./assets/nestling-icon.png";
import {
  Bell,
  BookOpen,
  CalendarDays,
  ChevronRight,
  FileScan,
  HeartPulse,
  LineChart,
  Lock,
  Mail,
  Menu,
  Sparkles,
  Stethoscope,
} from "lucide-react";

const colors = {
  navy: "#3f527c",
  navyDark: "#2f3f66",
  lavender: "#f4efff",
  lavender2: "#eee7fb",
  periwinkle: "#b9c9df",
  lilac: "#d8c7f2",
  text: "#2f385f",
  muted: "#7e8499",
};

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
};

function Nav() {
  return (
    <nav className="sticky top-0 z-50 border-b border-white/30 bg-white/75 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <a href="#home" className="flex items-center gap-3">
          <img
            src={nestlingIcon}
            alt="Nestling nest logo"
            className="h-10 w-10 rounded-xl object-cover shadow-lg shadow-[#3f527c]/20"
          />
          <span className="text-2xl font-extrabold tracking-tight text-[#3f527c]">Nestling</span>
        </a>

        <div className="hidden items-center gap-8 text-sm font-semibold text-[#68708a] md:flex">
          <a href="#features" className="hover:text-[#3f527c]">Features</a>
          <a href="#demo" className="hover:text-[#3f527c]">Demo</a>
          <a href="#parents" className="hover:text-[#3f527c]">For Parents</a>
          <a href="#security" className="hover:text-[#3f527c]">Trust</a>
        </div>

        <a
          href="#waitlist"
          className="hidden rounded-2xl bg-[#3f527c] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-[#3f527c]/25 transition hover:-translate-y-0.5 hover:bg-[#2f3f66] md:block"
        >
          Join Waitlist
        </a>

        <button className="rounded-xl bg-[#f4efff] p-2 text-[#3f527c] md:hidden">
          <Menu className="h-6 w-6" />
        </button>
      </div>
    </nav>
  );
}

function PhoneMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, rotate: 2 }}
      animate={{ opacity: 1, y: 0, rotate: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative mx-auto w-[310px] rounded-[3rem] border-[10px] border-[#181b24] bg-[#181b24] shadow-2xl shadow-[#3f527c]/30 md:w-[360px]"
    >
      <div className="absolute left-1/2 top-3 z-20 h-8 w-28 -translate-x-1/2 rounded-full bg-black" />
      <div className="overflow-hidden rounded-[2.35rem] bg-white">
        <div className="bg-[#3f527c] px-6 pb-7 pt-14 text-white">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-extrabold text-[#b9c9df]">Nestling</h3>
            <Bell className="h-5 w-5 fill-[#d8c7f2] text-[#d8c7f2]" />
          </div>
          <div className="mt-8 rounded-3xl bg-white px-5 py-6 text-center shadow-xl">
            <div className="mx-auto h-20 w-20 overflow-hidden rounded-full border-4 border-[#dce4f1] bg-[#f4efff]">
              <img
                src="/baby-placeholder.png"
                alt="Baby profile"
                onError={(event) => {
                  event.currentTarget.style.display = "none";
                  event.currentTarget.nextElementSibling.style.display = "block";
                }}
                className="h-full w-full object-cover"
              />
              <div className="hidden h-full w-full bg-[radial-gradient(circle_at_45%_35%,#f7d3bd_0_23%,#fff3e9_24%_43%,#e5d2bf_44%_60%,#f4efff_61%)]" />
            </div>
            <p className="mt-3 text-2xl font-extrabold text-[#2f385f]">Nivi</p>
            <p className="text-sm font-semibold text-[#9aa0ad]">Born Sep 10, 2025 · 33w · Adj 7w 1d</p>
          </div>
        </div>

        <div className="bg-[#3f527c] px-5 pb-6 text-white">
          <h4 className="mb-3 text-lg font-extrabold">Today's Summary</h4>
          <div className="grid grid-cols-3 gap-3">
            {[
              ["Feeding", "7 feeds"],
              ["Sleep", "13.2 hr"],
              ["Diapers", "Not logged"],
            ].map(([label, value]) => (
              <div key={label} className="rounded-2xl bg-[#f4efff] p-3 text-left text-[#2f385f]">
                <p className="text-xs font-bold text-[#737a96]">{label}</p>
                <p className="mt-1 text-sm font-extrabold">{value}</p>
              </div>
            ))}
          </div>

          <h4 className="mb-3 mt-5 text-lg font-extrabold">Mini Trends</h4>
          <div className="grid grid-cols-3 gap-3">
            {[
              "Feeding",
              "Sleep",
              "Growth",
            ].map((label) => (
              <div key={label} className="rounded-2xl bg-white p-3 text-[#2f385f]">
                <p className="text-xs font-bold text-[#737a96]">{label}</p>
                <svg viewBox="0 0 100 45" className="mt-2 h-10 w-full text-[#b9c9df]">
                  <path d="M4 35 H42 L62 8 L82 35 L96 20" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            ))}
          </div>

          <div className="mt-5 rounded-3xl bg-[#f4efff] p-4 text-[#2f385f]">
            <p className="font-extrabold">Today's Insight</p>
            <p className="mt-1 text-sm font-medium text-[#68708a]">Skin-to-skin before feeds may support comfort, feeding routines, and parent confidence.</p>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-4">
            {[
              "Daily Log",
              "Growth Tracker",
              "Resources",
              "Baby Profile",
            ].map((item) => (
              <div key={item} className="rounded-3xl bg-[#b9c9df] p-4 text-left text-[#2f385f]">
                <p className="font-extrabold">{item}</p>
                <ChevronRight className="ml-auto mt-8 h-5 w-5" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function FeatureCard({ icon: Icon, title, text }) {
  return (
    <motion.div
      variants={fadeUp}
      className="rounded-[2rem] border border-[#e6def5] bg-[#f8f4ff] p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-[#3f527c]/10"
    >
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#3f527c] shadow-sm">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-xl font-extrabold text-[#2f385f]">{title}</h3>
      <p className="mt-3 leading-7 text-[#68708a]">{text}</p>
    </motion.div>
  );
}

function AppScreenCard({ title, children }) {
  return (
    <div className="rounded-[2rem] border border-[#e4dcf2] bg-white p-5 shadow-xl shadow-[#3f527c]/10">
      <p className="mb-4 text-lg font-extrabold text-[#2f385f]">{title}</p>
      {children}
    </div>
  );
}

export default function NestlingWebsite() {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#ffffff_0%,#f7f3ff_45%,#eef3fb_100%)] font-sans text-[#2f385f]">
      <Nav />

      <section id="home" className="relative overflow-hidden px-5 pt-4 pb-12 md:px-8 md:pt-6 md:pb-16">
        <div className="absolute -left-28 top-20 h-72 w-72 rounded-full bg-[#d8c7f2]/35 blur-3xl" />
        <div className="absolute -right-28 top-40 h-80 w-80 rounded-full bg-[#b9c9df]/45 blur-3xl" />

        <div className="mx-auto grid max-w-7xl items-start md:pt-10 gap-12 md:grid-cols-[1.05fr_0.95fr]">
          <motion.div initial="hidden" animate="show" variants={fadeUp}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#e7def7] bg-white/80 px-4 py-2 text-sm font-bold text-[#3f527c] shadow-sm">
              <Sparkles className="h-4 w-4 text-[#d8c7f2]" />
              AI-powered support after the NICU
            </div>

            <h1 className="max-w-3xl text-5xl font-black leading-[1.02] tracking-tight text-[#2f385f] md:text-7xl">
              Because NICU care doesn’t end at discharge.
            </h1>

            <p className="mt-6 max-w-2xl text-lg font-medium leading-8 text-[#68708a] md:text-xl">
              Nestling helps parents organize discharge notes, track daily care, visualize growth trends, and feel less alone during the fragile transition home.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a href="#waitlist" className="rounded-2xl bg-[#3f527c] px-7 py-4 text-center text-base font-extrabold text-white shadow-xl shadow-[#3f527c]/25 transition hover:-translate-y-1 hover:bg-[#2f3f66]">
                Join the Waitlist
              </a>
              <a href="#demo" className="rounded-2xl border border-[#d8c7f2] bg-white px-7 py-4 text-center text-base font-extrabold text-[#3f527c] shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                See the Product
              </a>
            </div>

            <div className="mt-10 grid max-w-xl grid-cols-3 gap-3">
              {[
                ["OCR", "scan records"],
                ["AI", "care insights"],
                ["Trends", "growth + logs"],
              ].map(([big, small]) => (
                <div key={big} className="rounded-3xl bg-white/80 p-4 text-center shadow-sm ring-1 ring-[#efe8fb]">
                  <p className="text-2xl font-black text-[#3f527c]">{big}</p>
                  <p className="mt-1 text-xs font-bold uppercase tracking-wide text-[#8a90a5]">{small}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <PhoneMockup />
        </div>
      </section>

      <section className="px-5 py-16 md:px-8" id="features">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#8b7eb0]">What Nestling does</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight text-[#2f385f] md:text-5xl">A soft, smart dashboard for complicated baby care.</h2>
            <p className="mt-5 text-lg leading-8 text-[#68708a]">
              Built around the exact details parents need after discharge: feeding, sleep, diapers, growth, medications, follow-ups, and medical notes.
            </p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="mt-12 grid gap-5 md:grid-cols-3"
          >
            <FeatureCard icon={FileScan} title="Scan discharge papers" text="Turn messy discharge summaries into organized profile cards, follow-ups, medications, and notes." />
            <FeatureCard icon={CalendarDays} title="Daily care logging" text="Track feeds, sleep, diapers, symptoms, temperature, and special notes in a simple calendar view." />
            <FeatureCard icon={LineChart} title="Growth visualization" text="See patterns over time with clean charts that make weight, feeding, and sleep easier to understand." />
            <FeatureCard icon={Sparkles} title="AI parent copilot" text="Get plain-language summaries and gentle explanations based on the baby’s saved information." />
            <FeatureCard icon={Stethoscope} title="Follow-up organization" text="Keep pediatrician visits, audiology screens, specialist care, and reminders in one place." />
            <FeatureCard icon={BookOpen} title="Resource library" text="Access parent-friendly guidance for common post-NICU questions, routines, and care terms." />
          </motion.div>
        </div>
      </section>

      <section id="demo" className="px-5 py-20 md:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#8b7eb0]">Product preview</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">Designed to feel calm when everything else feels overwhelming.</h2>
            <p className="mt-5 text-lg leading-8 text-[#68708a]">
              The web experience should match the app: rounded lavender cards, muted navy, soft shadows, and clean medical structure without feeling cold.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <AppScreenCard title="Baby Profile">
              <div className="rounded-3xl bg-[#f4efff] p-4">
                <div className="flex items-center gap-4">
                  <div className="h-16 w-16 rounded-2xl bg-[radial-gradient(circle_at_40%_35%,#f7d3bd_0_25%,#fff3e9_26%_50%,#e8d0ba_51%_70%,#f4efff_71%)]" />
                  <div>
                    <p className="text-2xl font-black text-[#2f385f]">Nivi</p>
                    <p className="font-semibold text-[#8a90a5]">Corrected Age: 7w 1d</p>
                  </div>
                </div>
                <button className="mt-4 rounded-2xl bg-[#3f527c] px-4 py-3 font-extrabold text-white">Scan Discharge</button>
              </div>
            </AppScreenCard>

            <AppScreenCard title="Daily Log">
              <div className="grid grid-cols-7 gap-2 text-center text-sm font-extrabold text-[#3f527c]">
                {Array.from({ length: 28 }, (_, i) => (
                  <div key={i} className={`aspect-square rounded-xl border border-[#e4dcf2] ${[2, 9, 16].includes(i) ? "bg-[radial-gradient(circle,#f0cdbd_0_35%,#f4efff_36%)] text-white" : "bg-[#f4efff]"}`}>
                    <span className="flex h-full items-center justify-center">{i + 1}</span>
                  </div>
                ))}
              </div>
            </AppScreenCard>

            <AppScreenCard title="Today’s Insight">
              <div className="rounded-3xl bg-[#f4efff] p-5">
                <HeartPulse className="mb-3 h-6 w-6 text-[#3f527c]" />
                <p className="font-bold leading-7 text-[#68708a]">Skin-to-skin before feeds can improve oxygenation and feeding tolerance for preterm infants.</p>
              </div>
            </AppScreenCard>

            <AppScreenCard title="Mini Trends">
              <div className="space-y-3">
                {[
                  ["Feeding", "7 feeds today"],
                  ["Sleep", "13.2 hours"],
                  ["Diapers", "not logged yet"],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-2xl bg-[#f4efff] p-4">
                    <div className="flex justify-between">
                      <span className="font-extrabold">{label}</span>
                      <span className="font-bold text-[#8a90a5]">{value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </AppScreenCard>
          </div>
        </div>
      </section>

      <section id="parents" className="px-5 py-20 md:px-8">
        <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-[#3f527c] p-8 text-white shadow-2xl shadow-[#3f527c]/25 md:p-14">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-[#d8c7f2]">For families</p>
              <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">A clearer homecoming after the NICU.</h2>
              <p className="mt-5 text-lg leading-8 text-white/75">
                Nestling is made for parents juggling paperwork, appointments, tiny details, and big emotions. It brings the pieces together so families can focus more on care and less on chaos.
              </p>
            </div>

            <div className="grid gap-4">
              {[
                "Organize medical notes and discharge instructions",
                "Track daily routines without a complicated spreadsheet",
                "Prepare cleaner summaries for pediatrician visits",
                "Understand patterns in growth, sleep, and feeding",
              ].map((item) => (
                <div key={item} className="flex items-center gap-4 rounded-3xl bg-white/12 p-4 ring-1 ring-white/15">
                  <div className="h-3 w-3 rounded-full bg-[#d8c7f2]" />
                  <p className="font-bold text-white/90">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="security" className="px-5 py-16 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-[2rem] bg-white p-7 shadow-sm ring-1 ring-[#efe8fb]">
              <Lock className="mb-4 h-7 w-7 text-[#3f527c]" />
              <h3 className="text-2xl font-black">Privacy first</h3>
              <p className="mt-3 leading-7 text-[#68708a]">Built with a healthcare-level mindset around sensitive family and infant information.</p>
            </div>
            <div className="rounded-[2rem] bg-white p-7 shadow-sm ring-1 ring-[#efe8fb]">
              <Stethoscope className="mb-4 h-7 w-7 text-[#3f527c]" />
              <h3 className="text-2xl font-black">Not medical advice</h3>
              <p className="mt-3 leading-7 text-[#68708a]">Nestling supports organization and education, but clinicians remain the source for medical decisions.</p>
            </div>
            <div className="rounded-[2rem] bg-white p-7 shadow-sm ring-1 ring-[#efe8fb]">
              <Sparkles className="mb-4 h-7 w-7 text-[#3f527c]" />
              <h3 className="text-2xl font-black">Human-centered AI</h3>
              <p className="mt-3 leading-7 text-[#68708a]">AI is used to simplify information, not replace care teams or parent judgment.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="waitlist" className="px-5 py-24 md:px-8">
        <div className="mx-auto max-w-4xl rounded-[2.5rem] border border-[#e7def7] bg-white p-8 text-center shadow-2xl shadow-[#3f527c]/10 md:p-14">
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f4efff] text-[#3f527c]">
            <Mail className="h-7 w-7" />
          </div>
          <h2 className="text-4xl font-black tracking-tight md:text-5xl">Join the Nestling waitlist</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#68708a]">
            Be first to hear about beta testing, parent resources, and the official launch.
          </p>

          <form
            action="https://formspree.io/f/xlgvbpyz"
            method="POST"
            className="mx-auto mt-8 flex max-w-xl flex-col gap-3 rounded-3xl bg-[#f4efff] p-3 sm:flex-row"
          >
            <input
              type="email"
              name="email"
              required
              placeholder="parent@example.com"
              className="min-h-14 flex-1 rounded-2xl border border-transparent bg-white px-5 font-semibold text-[#2f385f] outline-none placeholder:text-[#9aa0ad] focus:border-[#d8c7f2]"
            />
            <button type="submit" className="min-h-14 rounded-2xl bg-[#3f527c] px-7 font-extrabold text-white shadow-lg shadow-[#3f527c]/20 transition hover:bg-[#2f3f66]">
              Notify Me
            </button>
          </form>

          <p className="mt-5 text-sm font-semibold text-[#9aa0ad]">
            For parents, pediatricians, advisors, and early supporters. Questions? Email{" "}
            <a href="mailto:nestlingapp0@gmail.com" className="font-extrabold text-[#3f527c] hover:underline">
              nestlingapp0@gmail.com
            </a>
          </p>
        </div>
      </section>

      <footer className="border-t border-[#e7def7] bg-white/70 px-5 py-10 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-3">
            <img
              src={nestlingIcon}
              alt="Nestling nest logo"
              className="h-9 w-9 rounded-xl object-cover"
            />
            <span className="text-xl font-black text-[#3f527c]">Nestling</span>
          </div>
          <p className="text-sm font-semibold text-[#8a90a5]">
            © 2026 Nestling. Contact:{" "}
            <a href="mailto:nestlingapp0@gmail.com" className="font-extrabold text-[#3f527c] hover:underline">
              nestlingapp0@gmail.com
            </a>
          </p>
        </div>
      </footer>
    </main>
  );
}
