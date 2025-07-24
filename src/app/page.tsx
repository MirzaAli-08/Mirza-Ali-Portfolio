"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { Mail, Phone, Instagram } from "lucide-react";
import { useState } from "react";

export default function Home() {
  // Controls for the spotlight flicker and name reveal
  const controls = useAnimation();

  // Section refs for smooth scroll
  const heroRef = useRef<HTMLElement>(null) as React.RefObject<HTMLElement>;
  const aboutRef = useRef<HTMLElement>(null) as React.RefObject<HTMLElement>;
  const projectsRef = useRef<HTMLElement>(null) as React.RefObject<HTMLElement>;
  const achievementsRef = useRef<HTMLElement>(null) as React.RefObject<HTMLElement>;
  const educationRef = useRef<HTMLElement>(null) as React.RefObject<HTMLElement>;
  const contactRef = useRef<HTMLElement>(null) as React.RefObject<HTMLElement>;

  // Smooth scroll handler
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, ref: React.RefObject<HTMLElement>) => {
    e.preventDefault();
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    async function sequence() {
      // Flicker effect
      await controls.start({ opacity: [0, 1, 0.5, 1, 0.7, 1], filter: [
        "blur(8px)",
        "blur(2px)",
        "blur(6px)",
        "blur(1px)",
        "blur(3px)",
        "blur(0px)"
      ], transition: { duration: 1.6, times: [0, 0.2, 0.4, 0.6, 0.8, 1], ease: "easeInOut" } });
      // Hold spotlight and reveal name
      await controls.start({ opacity: 1, filter: "blur(0px)", transition: { duration: 0.7 } });
    }
    sequence();
  }, [controls]);

  // Typewriter effect for subtitle
  const [typedText, setTypedText] = useState("");
  useEffect(() => {
    const fullText = "a Student Leader and Community Builder.";
    let i = 0;
    let interval: NodeJS.Timeout;
    const startTimeout = setTimeout(() => {
      interval = setInterval(() => {
        i++;
        setTypedText(fullText.slice(0, i));
        if (i === fullText.length) {
          clearInterval(interval);
        }
      }, 45);
    }, 3200);
    return () => {
      clearTimeout(startTimeout);
      if (interval) clearInterval(interval);
    };
  }, []);

  return (
    <main className="relative w-full min-h-screen bg-background text-foreground font-inter overflow-x-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 flex justify-center py-6 bg-background/80 backdrop-blur-md border-b border-border">
        <ul className="flex gap-8 text-lg font-semibold">
          <li><a href="#hero" onClick={e => handleNavClick(e, heroRef)} className="hover:underline transition-all">Home</a></li>
          <li><a href="#about" onClick={e => handleNavClick(e, aboutRef)} className="hover:underline transition-all">About</a></li>
          <li><a href="#projects" onClick={e => handleNavClick(e, projectsRef)} className="hover:underline transition-all">Projects</a></li>
          <li><a href="#achievements" onClick={e => handleNavClick(e, achievementsRef)} className="hover:underline transition-all">Achievements</a></li>
          <li><a href="#education" onClick={e => handleNavClick(e, educationRef)} className="hover:underline transition-all">Education</a></li>
          <li><a href="#contact" onClick={e => handleNavClick(e, contactRef)} className="hover:underline transition-all">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section id="hero" ref={heroRef} className="h-screen flex items-center justify-center relative overflow-hidden">
        {/* Parallax background vignette */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="w-full h-full bg-gradient-to-b from-black/80 via-black/60 to-transparent" />
        </div>
        {/* Spotlight and photo */}
        <motion.div
          initial={{ opacity: 0, filter: "blur(8px)" }}
          animate={controls}
          className="relative z-10 flex flex-col items-center"
        >
          <div className="relative mb-8">
            <Image
              src="/ali-profile.jpg"
              alt="Mirza Ali profile photo"
              width={220}
              height={220}
              className="rounded-full shadow-spotlight border-4 border-background object-cover"
              priority
            />
            {/* Animated spotlight overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 1.2, ease: "easeOut" }}
              className="absolute inset-0 rounded-full pointer-events-none"
              style={{
                boxShadow: "0 0 120px 40px rgba(255,255,255,0.18)",
                mixBlendMode: "screen",
              }}
            />
          </div>
          {/* Animated name reveal */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.7, duration: 1.1, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-bold mb-4 tracking-tight drop-shadow-lg"
          >
            Hello, I&apos;m <span className="text-white/90">Mirza Ali</span>
            <span className="block text-lg md:text-2xl font-medium text-white/60 mt-2 min-h-[2.5rem]">
              {typedText}
              {typedText.length < "a Student Leader and Community Builder.".length && (
                <span className="inline-block w-2 h-5 align-middle bg-white/80 animate-pulse ml-1" style={{ verticalAlign: "middle" }} />
              )}
            </span>
          </motion.h1>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" ref={aboutRef} className="min-h-[60vh] flex items-center justify-center py-24">
        <motion.div
          className="max-w-2xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.4 }}
          transition={{ staggerChildren: 0.15 }}
          variants={{
            hidden: {},
            visible: {},
          }}
        >
          <motion.h2
            className="text-3xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ amount: 0.3 }}
          >
            About Me
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-white/80 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ amount: 0.3 }}
          >
            I&apos;m a hardworking and high-achieving student who commits deeply to every initiative I join. I push beyond my comfort zone to pursue milestones that fuel my growth and future. I’m drawn to projects that create real-world impact and reflect leadership, creativity, and resilience.
          </motion.p>
          <motion.ul
            className="flex flex-wrap justify-center gap-4 mt-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.3 }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.13,
                },
              },
            }}
          >
            {[
              "Public Speaking",
              "Leadership",
              "Award Winner",
              "Event Organizer",
              "Initiative Builder",
            ].map((skill, i) => (
              <motion.li
                key={skill}
                className="px-5 py-2 rounded-full bg-charcoal text-white/90 text-base font-medium shadow-md border border-white/10 hover:scale-105 hover:bg-white/10 transition-transform duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1, ease: "easeOut" }}
                viewport={{ amount: 0.3 }}
              >
                {skill}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" ref={projectsRef} className="min-h-[60vh] flex flex-col items-center justify-center py-24 bg-charcoal">
        <div className="max-w-4xl mx-auto w-full">
          <h2 className="text-3xl font-bold mb-6 text-white">Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Lunar Initiative Card */}
            <motion.div
              className="relative bg-gradient-to-br from-black/80 to-charcoal rounded-2xl p-8 shadow-xl border border-white/10 flex flex-col items-start group overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03, boxShadow: "0 8px 40px 0 rgba(200,200,255,0.10)" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ amount: 0.3 }}
            >
              {/* Moon/Night background */}
              <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="w-full h-full bg-gradient-to-t from-black/80 via-charcoal/80 to-transparent" />
                <div className="absolute -top-8 right-8 w-24 h-24 bg-gradient-radial from-white/30 to-transparent rounded-full blur-2xl opacity-60" />
              </div>
              {/* Logo image */}
              <div className="relative z-10 mb-4">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white/20 shadow-md bg-white/10 flex items-center justify-center">
                  <Image src="/lunar-circle.png" alt="Lunar Initiative Logo" width={80} height={80} className="object-cover w-full h-full scale-140" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2 z-10">Lunar Initiative</h3>
              <p className="text-white/80 mb-4 z-10">
                During Ramadan, we distributed free hot meals in a public park to those fasting. What made it impactful was the overwhelming community response — people showed up, donated food, and supported us beyond expectation. It was a powerful moment of youth-led hospitality and unity.
              </p>
              <a href="https://www.instagram.com/lunarinitiative" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 underline hover:text-blue-300 transition-colors text-base font-mono z-10">
                <Instagram className="w-5 h-5 text-white drop-shadow-[0_0_6px_white]" />
                Visit @lunarinitiative
              </a>
            </motion.div>
            {/* MUNHUB Card */}
            <motion.div
              className="relative bg-gradient-to-br from-black/80 to-charcoal rounded-2xl p-8 shadow-xl border border-white/10 flex flex-col items-start group overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03, boxShadow: "0 8px 40px 0 rgba(200,200,255,0.10)" }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              viewport={{ amount: 0.3 }}
            >
              {/* Social card preview background */}
              <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="w-full h-full bg-gradient-to-t from-charcoal/90 via-black/60 to-transparent" />
                <div className="absolute -bottom-8 left-8 w-24 h-24 bg-gradient-radial from-blue-400/20 to-transparent rounded-full blur-2xl opacity-50" />
              </div>
              {/* Logo image */}
              <div className="relative z-10 mb-4">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white/20 shadow-md bg-white/10 flex items-center justify-center">
                  <Image src="/munhub-circle.png" alt="MUNHUB Logo" width={80} height={80} className="object-cover w-full h-full scale-125" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2 z-10">MUNHUB</h3>
              <p className="text-white/80 mb-4 z-10">
                A dual-purpose Instagram-based platform for Riyadh’s MUN ecosystem. For delegates, it provides an organized feed of active MUNs. For MUN organizers, we collaborate on promotional content, stories, committee updates, and post-event newsletters.
              </p>
              <a href="https://www.instagram.com/munxhub" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 underline hover:text-blue-300 transition-colors text-base font-mono z-10 mt-2">
                <Instagram className="w-5 h-5 text-white drop-shadow-[0_0_6px_white]" />
                Visit @munxhub
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" ref={achievementsRef} className="min-h-[40vh] flex items-center justify-center py-24">
        <div className="max-w-3xl mx-auto w-full text-center">
          <h2 className="text-3xl font-bold mb-6">Achievements</h2>
          <div className="flex flex-wrap justify-center gap-8 mt-8">
            {/* Best Delegate Award Card */}
            <motion.div
              className="bg-gradient-to-br from-charcoal/90 to-black/80 rounded-xl px-8 py-6 shadow-lg border border-white/10 flex flex-col items-center min-w-[220px] group hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ amount: 0.3 }}
            >
              <div className="mb-3">
                {/* Trophy icon */}
                <svg width="36" height="36" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="text-yellow-400 mx-auto"><path d="M7 21h10M12 17v4M17 5V3a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v2M21 5h-4v2a5 5 0 0 1-10 0V5H3a1 1 0 0 0-1 1v2a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V6a1 1 0 0 0-1-1Z"/></svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-1">Best Delegate</h3>
              <p className="text-white/80 text-sm">Multiple awards at MUNs</p>
            </motion.div>
            {/* Event Organizing Certificate Card */}
            <motion.div
              className="bg-gradient-to-br from-charcoal/90 to-black/80 rounded-xl px-8 py-6 shadow-lg border border-white/10 flex flex-col items-center min-w-[220px] group hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              viewport={{ amount: 0.3 }}
            >
              <div className="mb-3">
                {/* Badge icon */}
                <svg width="36" height="36" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="text-blue-400 mx-auto"><path d="M17 17v2a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-2m10-5V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2Z"/></svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-1">Event Organizer</h3>
              <p className="text-white/80 text-sm">Certificates for event organizing</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" ref={educationRef} className="min-h-[40vh] flex items-center justify-center py-24 bg-charcoal">
        <div className="max-w-2xl mx-auto w-full text-center">
          <motion.h2
            className="text-3xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ amount: 0.3 }}
          >
            Education
          </motion.h2>
          <motion.div
            className="bg-gradient-to-br from-black/80 to-charcoal rounded-2xl p-8 shadow-xl border border-white/10 text-left mx-auto max-w-xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ amount: 0.3 }}
          >
            <div className="mb-2">
              <span className="text-lg font-semibold text-white">Alfaris International School, Riyadh</span>
              <span className="ml-2 text-white/60 text-base">Class of 2026</span>
            </div>
            <ul className="list-disc list-inside text-white/80 mb-4 pl-2">
              <li>Student Council Member</li>
              <li>Football Club</li>
              <li>Personal Project: <span className="font-semibold text-white">Math Quest</span></li>
            </ul>
            {/* Math Quest Card */}
            <motion.div
              className="mt-4 bg-white/5 rounded-lg p-4 border border-white/10 shadow-inner"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
              viewport={{ amount: 0.3 }}
            >
              <div className="font-semibold text-white mb-1">Math Quest</div>
              <div className="text-white/80 text-sm">
                A custom-built snake game where players must solve math equations to progress — built as a showcase project in sophomore year.
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact/Footer Section */}
      <footer id="contact" ref={contactRef} className="w-full py-12 bg-background border-t border-border text-center relative overflow-hidden">
        <motion.div
          className="max-w-xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ amount: 0.3 }}
        >
          <h2 className="text-2xl font-bold mb-4">Contact</h2>
          <div className="flex flex-col items-center gap-2 text-lg text-white/90">
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-white drop-shadow-[0_0_6px_white]" />
              <a href="mailto:mirzaalihusnain1@gmail.com" className="hover:underline">mirzaalihusnain1@gmail.com</a>
            </div>
            <div className="flex items-center gap-2">
              <Instagram className="w-5 h-5 text-white drop-shadow-[0_0_6px_white]" />
              <a href="https://www.instagram.com/ali.npc" target="_blank" rel="noopener noreferrer" className="hover:underline">@Ali.npc</a>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-white drop-shadow-[0_0_6px_white]" />
              <span className="text-white/70">+966 55 257 6459</span>
            </div>
          </div>
        </motion.div>
        {/* Scroll to top button */}
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 z-50 bg-charcoal text-white rounded-full p-3 shadow-lg border border-white/10 hover:bg-white/10 transition-colors backdrop-blur-md"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: 'easeOut' }}
          viewport={{ amount: 0.3 }}
          aria-label="Scroll to top"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 15l7-7 7 7"/></svg>
        </motion.button>
      </footer>
    </main>
  );
}
