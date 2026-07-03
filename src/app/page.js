"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  BookOpen,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  ChevronRight,
  Clock3,
  FileCheck2,
  FileText,
  Gavel,
  Landmark,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Moon,
  Phone,
  Quote,
  Scale,
  ShieldCheck,
  Sparkles,
  Sun,
  Users,
  X,
} from "lucide-react";
const firm = {
  name: "Lexora Legal",
  tagline: "Law Firm & Legal Consultants",
  phone: "+91 98765 43210",
  email: "contact@lexoralegal.com",
  address: "Civil Lines, New Delhi, India",
};
const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Practice Areas", href: "#practice" },
  { label: "Process", href: "#process" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];
const stats = [
  ["15+", "Years Experience"],
  ["500+", "Matters Assisted"],
  ["4.9", "Client Rating"],
  ["100%", "Confidential"],
];
const trustItems = [
  "Confidential Consultation",
  "Court Representation",
  "Corporate & Individual Matters",
  "Professional Legal Drafting",
];
const practiceAreas = [
  {
    title: "Civil Litigation",
    desc: "Representation in civil disputes, recovery matters, injunctions, notices and court proceedings.",
    icon: Landmark,
    details:
      "Civil litigation support includes legal notices, drafting, filing, interim reliefs, injunctions, recovery matters, property disputes and representation before appropriate courts.",
    points: [
      "Legal notice and reply drafting",
      "Recovery and injunction matters",
      "Civil suit strategy and documentation",
      "Court representation and case updates",
    ],
  },
  {
    title: "Criminal Law",
    desc: "Assistance in bail matters, complaints, FIR-related issues, trial strategy and representation.",
    icon: Gavel,
    details:
      "Criminal law assistance includes complaint drafting, FIR-related guidance, bail support, evidence review and representation with a focused legal strategy.",
    points: [
      "Bail and anticipatory bail assistance",
      "FIR and complaint-related support",
      "Trial strategy and representation",
      "Confidential case discussion",
    ],
  },
  {
    title: "Family & Matrimonial",
    desc: "Legal support for divorce, maintenance, custody, domestic issues and settlement advisory.",
    icon: Users,
    details:
      "Family law services are handled with sensitivity, confidentiality and practical guidance for matrimonial disputes, custody, maintenance and settlement matters.",
    points: [
      "Divorce and mutual consent guidance",
      "Maintenance and custody matters",
      "Domestic issue consultation",
      "Settlement and mediation support",
    ],
  },
  {
    title: "Property & Real Estate",
    desc: "Guidance for property disputes, documentation, title verification, transfer and RERA matters.",
    icon: Building2,
    details:
      "Property legal support covers title verification, sale deed review, possession disputes, builder disputes, RERA issues and documentation support.",
    points: [
      "Title and document verification",
      "Property dispute consultation",
      "RERA and builder-related matters",
      "Agreement and sale deed review",
    ],
  },
  {
    title: "Corporate Advisory",
    desc: "Business contracts, commercial disputes, compliance, agreements and legal advisory.",
    icon: BriefcaseBusiness,
    details:
      "Corporate advisory helps businesses reduce risk through strong contracts, compliance review, commercial documentation and dispute prevention.",
    points: [
      "Contract drafting and review",
      "Business legal advisory",
      "Commercial dispute strategy",
      "Compliance and documentation support",
    ],
  },
  {
    title: "Documentation",
    desc: "Drafting and review of agreements, affidavits, legal notices, contracts and declarations.",
    icon: FileText,
    details:
      "Documentation services include drafting, reviewing and finalising legal documents with clear language, proper clauses and practical enforceability.",
    points: [
      "Agreements and contracts",
      "Affidavits and declarations",
      "Legal notices and replies",
      "Document review and risk checking",
    ],
  },
];
const processSteps = [
  {
    title: "Initial Consultation",
    desc: "Understand facts, documents, urgency and client expectations clearly.",
    icon: MessageCircle,
  },
  {
    title: "Case Review",
    desc: "Review available documents and identify the most practical legal options.",
    icon: FileCheck2,
  },
  {
    title: "Legal Strategy",
    desc: "Prepare a clear direction for drafting, notice, settlement or representation.",
    icon: Scale,
  },
  {
    title: "Action & Updates",
    desc: "Proceed with professional communication, documentation and regular updates.",
    icon: Clock3,
  },
];
const whyChoose = [
  "Confidential and ethical legal consultation",
  "Practical strategy based on case requirements",
  "Clear communication at every stage",
  "Strong drafting, documentation and representation",
];
const testimonials = [
  {
    text: "The consultation was clear, professional and helped us understand the right legal steps.",
    name: "Client Review",
    role: "Property Matter",
  },
  {
    text: "The team handled the documentation carefully and explained each step with complete clarity.",
    name: "Client Review",
    role: "Corporate Advisory",
  },
];
const insights = [
  {
    title: "What to Check Before Signing a Property Agreement",
    category: "Property Law",
    date: "Legal Update",
    desc: "A practical overview of key checks before signing property documents.",
    details:
      "Before signing a property agreement, it is important to review ownership documents, payment clauses, possession timeline, dispute clauses, termination terms and builder obligations.",
    points: [
      "Verify ownership and title documents",
      "Check payment schedule and penalty clauses",
      "Review possession and handover terms",
      "Understand dispute and termination clauses",
    ],
  },
  {
    title: "Understanding the Importance of Legal Notices",
    category: "Civil Law",
    date: "Article",
    desc: "Why a well-drafted legal notice can become an important first step.",
    details:
      "A legal notice formally communicates a claim, demand or grievance. It can help create a written record, open settlement discussion and prepare the foundation for further legal action.",
    points: [
      "Creates a formal written record",
      "Communicates the claim clearly",
      "Can support settlement before litigation",
      "Helps prepare the matter for next steps",
    ],
  },
  {
    title: "How Businesses Can Reduce Contract Disputes",
    category: "Corporate Law",
    date: "Insight",
    desc: "Simple contract practices that reduce future business risk.",
    details:
      "Businesses can reduce disputes by using clear scope clauses, payment terms, delivery responsibilities, termination rights, confidentiality clauses and dispute resolution provisions.",
    points: [
      "Use clear scope and deliverables",
      "Define payment and timeline terms",
      "Add termination and liability clauses",
      "Review contracts before signing",
    ],
  },
];
const easeOutExpo = [0.22, 1, 0.36, 1];
const fadeUp = {
  hidden: { opacity: 0, y: 34 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOutExpo } },
};
const fadeLeft = {
  hidden: { opacity: 0, x: 42 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: easeOutExpo } },
};
const scaleIn = {
  hidden: { opacity: 0, scale: 0.94, y: 20 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.65, ease: easeOutExpo },
  },
};
const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.08 } },
};
const cardHover = { y: -8, transition: { duration: 0.25, ease: "easeOut" } };
function DetailPanel({ selectedDetail, onClose, onContact }) {
  if (!selectedDetail) return null;
  const Icon = selectedDetail.icon || BookOpen;
  return (
    <motion.div
      className="fixed inset-0 z-[998] flex items-center justify-center bg-black/80 px-4 py-5 backdrop-blur-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {" "}
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 30 }}
        transition={{ duration: 0.45, ease: easeOutExpo }}
        className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-[1.5rem] border border-white/10 bg-[#f8f3e8] p-5 shadow-2xl dark:bg-[#101827] sm:rounded-[2rem] sm:p-8"
      >
        {" "}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-[#08111f] text-white transition hover:bg-[#d4af37] hover:text-[#08111f] dark:bg-white/10 sm:right-5 sm:top-5"
          aria-label="Close"
        >
          {" "}
          <X size={18} />{" "}
        </button>{" "}
        <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-[#d4af37]/20 blur-3xl sm:h-72 sm:w-72" />{" "}
        <div className="relative">
          {" "}
          <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#08111f] text-[#d4af37] dark:bg-white/10 sm:h-16 sm:w-16">
            {" "}
            <Icon size={30} />{" "}
          </div>{" "}
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#a47c15] dark:text-[#d4af37] sm:text-sm sm:tracking-[0.25em]">
            {" "}
            {selectedDetail.type === "insight"
              ? selectedDetail.category
              : "Practice Detail"}{" "}
          </p>{" "}
          <h2 className="law-serif max-w-3xl text-3xl font-semibold leading-tight text-[#08111f] dark:text-white sm:text-5xl">
            {" "}
            {selectedDetail.title}{" "}
          </h2>{" "}
          <p className="mt-5 max-w-3xl text-sm leading-7 text-gray-600 dark:text-gray-300 sm:text-lg sm:leading-8">
            {" "}
            {selectedDetail.details}{" "}
          </p>{" "}
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {" "}
            {selectedDetail.points?.map((point) => (
              <div
                key={point}
                className="flex gap-3 rounded-3xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/10 dark:bg-white/10 sm:p-5"
              >
                {" "}
                <CheckCircle2
                  className="mt-1 shrink-0 text-[#a47c15] dark:text-[#d4af37]"
                  size={20}
                />{" "}
                <p className="text-sm leading-7 text-gray-700 dark:text-gray-300 sm:text-base">
                  {" "}
                  {point}{" "}
                </p>{" "}
              </div>
            ))}{" "}
          </div>{" "}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
            {" "}
            <button
              onClick={onContact}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#d4af37] px-6 py-3.5 text-sm font-semibold text-[#08111f] transition hover:bg-[#08111f] hover:text-white dark:hover:bg-white dark:hover:text-[#08111f] sm:w-auto sm:px-7 sm:py-4"
            >
              {" "}
              Discuss This Matter <ArrowRight size={17} />{" "}
            </button>{" "}
            <button
              onClick={onClose}
              className="inline-flex w-full items-center justify-center rounded-full border border-black/10 bg-white px-6 py-3.5 text-sm font-semibold text-[#08111f] transition hover:border-[#d4af37] hover:text-[#a47c15] dark:border-white/10 dark:bg-white/10 dark:text-white sm:w-auto sm:px-7 sm:py-4"
            >
              {" "}
              Back to Website{" "}
            </button>{" "}
          </div>{" "}
        </div>{" "}
      </motion.div>{" "}
    </motion.div>
  );
}
export default function LawFirmDemoPage() {
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showDisclaimer, setShowDisclaimer] = useState(true);
  const [selectedDetail, setSelectedDetail] = useState(null);
  useEffect(() => {
    const savedTheme = localStorage.getItem("law-demo-theme");
    const disclaimerAccepted = localStorage.getItem("law-demo-disclaimer");
    if (savedTheme === "dark") setIsDark(true);
    if (disclaimerAccepted === "accepted") setShowDisclaimer(false);
  }, []);
  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("law-demo-theme", isDark ? "dark" : "light");
  }, [isDark]);
  const acceptDisclaimer = () => {
    localStorage.setItem("law-demo-disclaimer", "accepted");
    setShowDisclaimer(false);
  };
  const openPracticeDetail = (item) => {
    setSelectedDetail({ ...item, type: "practice" });
  };
  const openInsightDetail = (item) => {
    setSelectedDetail({ ...item, type: "insight", icon: BookOpen });
  };
  const closeDetail = () => {
    setSelectedDetail(null);
  };
  const goToContact = () => {
    setSelectedDetail(null);
    setTimeout(() => {
      document
        .getElementById("contact")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 180);
  };
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f8f3e8] text-[#121826] transition-colors duration-300 dark:bg-[#05070d] dark:text-white">
      {" "}
      <AnimatePresence>
        {" "}
        {showDisclaimer && (
          <motion.div
            className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 px-4 py-5 backdrop-blur-md sm:px-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {" "}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 28 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 28 }}
              transition={{ duration: 0.45, ease: easeOutExpo }}
              className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-[1.5rem] border border-white/10 bg-white p-5 shadow-2xl dark:bg-[#101827] sm:rounded-[2rem] sm:p-9"
            >
              {" "}
              <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[#d4af37]/20 blur-3xl" />{" "}
              <div className="relative">
                {" "}
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="mb-5 inline-flex h-13 w-13 items-center justify-center rounded-2xl bg-[#08111f] text-[#d4af37] dark:bg-white/10 sm:h-14 sm:w-14"
                >
                  {" "}
                  <Scale size={28} />{" "}
                </motion.div>{" "}
                <h2 className="law-serif mb-3 text-3xl font-semibold tracking-tight text-[#08111f] dark:text-white sm:text-4xl">
                  {" "}
                  Legal Disclaimer{" "}
                </h2>{" "}
                <p className="mb-4 text-sm leading-7 text-gray-600 dark:text-gray-300 sm:text-base">
                  {" "}
                  This website is created for informational purposes only. The
                  content available on this website does not constitute legal
                  advice, advertisement, solicitation, invitation or creation of
                  an advocate-client relationship.{" "}
                </p>{" "}
                <p className="mb-7 text-sm leading-7 text-gray-600 dark:text-gray-300 sm:text-base">
                  {" "}
                  By clicking “I Agree”, you confirm that you are accessing this
                  website voluntarily for general information.{" "}
                </p>{" "}
                <button
                  onClick={acceptDisclaimer}
                  className="w-full rounded-full bg-[#d4af37] px-6 py-3.5 text-sm font-semibold text-[#08111f] transition hover:bg-[#08111f] hover:text-white dark:hover:bg-white dark:hover:text-[#08111f] sm:py-4"
                >
                  {" "}
                  I Agree & Continue{" "}
                </button>{" "}
              </div>{" "}
            </motion.div>{" "}
          </motion.div>
        )}{" "}
      </AnimatePresence>{" "}
      <AnimatePresence>
        {" "}
        {selectedDetail && (
          <DetailPanel
            selectedDetail={selectedDetail}
            onClose={closeDetail}
            onContact={goToContact}
          />
        )}{" "}
      </AnimatePresence>{" "}
      <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#08111f]/90 text-white backdrop-blur-2xl transition-colors">
        {" "}
        <div className="hidden border-b border-white/10 px-5 py-2 text-xs font-medium text-white/60 lg:block">
          {" "}
          <div className="mx-auto flex max-w-7xl items-center justify-between">
            {" "}
            <span>
              Professional legal consultation and advisory services
            </span>{" "}
            <div className="flex items-center gap-5">
              {" "}
              <span className="flex items-center gap-2">
                {" "}
                <Phone size={13} /> {firm.phone}{" "}
              </span>{" "}
              <span className="flex items-center gap-2">
                {" "}
                <Mail size={13} /> {firm.email}{" "}
              </span>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-5 sm:py-4 lg:px-8">
          {" "}
          <a href="#home" className="flex min-w-0 items-center gap-3">
            {" "}
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#d4af37] text-[#08111f] shadow-lg sm:h-12 sm:w-12">
              {" "}
              <Scale size={23} />{" "}
            </div>{" "}
            <div className="min-w-0">
              {" "}
              <h1 className="law-serif truncate text-lg font-bold leading-none tracking-tight sm:text-xl">
                {" "}
                {firm.name}{" "}
              </h1>{" "}
              <p className="mt-1 truncate text-[9px] font-semibold uppercase tracking-[0.16em] text-white/55 sm:text-[10px] sm:tracking-[0.22em]">
                {" "}
                {firm.tagline}{" "}
              </p>{" "}
            </div>{" "}
          </a>{" "}
          <nav className="hidden items-center gap-8 lg:flex">
            {" "}
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-white/75 transition hover:text-[#d4af37]"
              >
                {" "}
                {link.label}{" "}
              </a>
            ))}{" "}
          </nav>{" "}
          <div className="hidden items-center gap-3 lg:flex">
            {" "}
            <button
              onClick={() => setIsDark((prev) => !prev)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white transition hover:border-[#d4af37] hover:text-[#d4af37]"
              aria-label="Toggle theme"
            >
              {" "}
              {isDark ? <Sun size={18} /> : <Moon size={18} />}{" "}
            </button>{" "}
            <a
              href="#contact"
              className="rounded-full bg-[#d4af37] px-5 py-3 text-sm font-semibold text-[#08111f] shadow-lg shadow-black/20 transition hover:bg-white"
            >
              {" "}
              Request Consultation{" "}
            </a>{" "}
          </div>{" "}
          <div className="flex shrink-0 items-center gap-2 lg:hidden">
            {" "}
            <button
              onClick={() => setIsDark((prev) => !prev)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white"
              aria-label="Toggle theme"
            >
              {" "}
              {isDark ? <Sun size={17} /> : <Moon size={17} />}{" "}
            </button>{" "}
            <button
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#d4af37] text-[#08111f]"
              aria-label="Open menu"
            >
              {" "}
              {isMenuOpen ? <X size={19} /> : <Menu size={19} />}{" "}
            </button>{" "}
          </div>{" "}
        </div>{" "}
        <AnimatePresence>
          {" "}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="overflow-hidden border-t border-white/10 bg-[#08111f] px-4 sm:px-5 lg:hidden"
            >
              {" "}
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="show"
                className="flex flex-col gap-2 py-5"
              >
                {" "}
                {navLinks.map((link) => (
                  <motion.a
                    variants={fadeUp}
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="rounded-2xl px-4 py-3 text-sm font-medium text-white/75 transition hover:bg-white/10 hover:text-[#d4af37]"
                  >
                    {" "}
                    {link.label}{" "}
                  </motion.a>
                ))}{" "}
                <motion.a
                  variants={fadeUp}
                  href="#contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="mt-2 rounded-full bg-[#d4af37] px-5 py-3 text-center text-sm font-semibold text-[#08111f]"
                >
                  {" "}
                  Request Consultation{" "}
                </motion.a>{" "}
              </motion.div>{" "}
            </motion.div>
          )}{" "}
        </AnimatePresence>{" "}
      </header>{" "}
      <section
        id="home"
        className="law-hero-bg law-pattern relative overflow-hidden px-4 pb-14 pt-28 sm:px-5 sm:pb-20 sm:pt-36 lg:px-8 lg:pb-28 lg:pt-44"
      >
        {" "}
        <motion.div
          animate={{ scale: [1, 1.08, 1], opacity: [0.5, 0.9, 0.5] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[-180px] top-24 h-80 w-80 rounded-full bg-[#d4af37]/20 blur-3xl sm:left-[-140px] sm:h-96 sm:w-96"
        />{" "}
        <motion.div
          animate={{ scale: [1, 1.05, 1], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-[-180px] top-40 h-80 w-80 rounded-full bg-white/10 blur-3xl sm:right-[-140px] sm:h-[28rem] sm:w-[28rem]"
        />{" "}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#f8f3e8] to-transparent dark:from-[#05070d] sm:h-40" />{" "}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]"
        >
          {" "}
          <motion.div variants={fadeUp} className="min-w-0">
            {" "}
            <motion.div
              variants={fadeUp}
              className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-[#d4af37]/40 bg-white/70 px-3 py-2 text-xs font-semibold text-[#a47c15] shadow-sm backdrop-blur dark:bg-white/10 dark:text-[#f4d46b] sm:mb-6 sm:px-4 sm:text-sm"
            >
              {" "}
              <Sparkles size={16} />{" "}
              <span className="truncate">
                Premium Law Firm Website Demo
              </span>{" "}
            </motion.div>{" "}
            <motion.h2
              variants={fadeUp}
              className="law-serif max-w-4xl text-4xl font-semibold leading-[1.08] tracking-[-0.04em] text-[#08111f] dark:text-white sm:text-6xl lg:text-7xl"
            >
              {" "}
              Trusted Legal Counsel for Complex Matters{" "}
            </motion.h2>{" "}
            <motion.p
              variants={fadeUp}
              className="mt-5 max-w-2xl text-sm leading-7 text-gray-700 dark:text-white/70 sm:mt-6 sm:text-lg sm:leading-8"
            >
              {" "}
              Providing strategic legal representation, advisory, documentation
              and dispute resolution support for individuals, businesses and
              institutions.{" "}
            </motion.p>{" "}
            <motion.div
              variants={fadeUp}
              className="mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:gap-4"
            >
              {" "}
              <a
                href="#contact"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#d4af37] px-6 py-3.5 text-sm font-semibold text-[#08111f] shadow-xl shadow-black/20 transition hover:bg-white sm:w-auto sm:px-7 sm:py-4"
              >
                {" "}
                Schedule Consultation{" "}
                <ArrowRight
                  size={17}
                  className="transition group-hover:translate-x-1"
                />{" "}
              </a>{" "}
              <a
                href="#practice"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-black/10 bg-white/80 px-6 py-3.5 text-sm font-semibold text-[#08111f] shadow-sm transition hover:border-[#d4af37] hover:text-[#a47c15] dark:border-white/15 dark:bg-white/10 dark:text-white dark:hover:border-[#d4af37] dark:hover:text-[#d4af37] sm:w-auto sm:px-7 sm:py-4"
              >
                {" "}
                Explore Practice Areas{" "}
              </a>{" "}
            </motion.div>{" "}
            <motion.div
              variants={staggerContainer}
              className="mt-8 grid max-w-2xl grid-cols-2 gap-3 sm:mt-10 sm:grid-cols-4 sm:gap-4"
            >
              {" "}
              {stats.map(([value, label]) => (
                <motion.div
                  variants={scaleIn}
                  whileHover={cardHover}
                  key={label}
                  className="rounded-2xl border border-black/10 bg-white/75 p-3 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/10 sm:rounded-3xl sm:p-4"
                >
                  {" "}
                  <p className="law-serif text-2xl font-bold text-[#d4af37] sm:text-3xl">
                    {" "}
                    {value}{" "}
                  </p>{" "}
                  <p className="mt-1 text-[11px] font-medium text-gray-600 dark:text-white/60 sm:text-xs">
                    {" "}
                    {label}{" "}
                  </p>{" "}
                </motion.div>
              ))}{" "}
            </motion.div>{" "}
          </motion.div>{" "}
          <motion.div
            variants={fadeLeft}
            className="relative w-full max-w-full"
          >
            {" "}
            <motion.div
              animate={{
                y: [0, -10, 0],
                transition: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              className="absolute -left-5 top-10 z-10 hidden rounded-3xl border border-white/10 bg-white/10 p-4 shadow-xl backdrop-blur sm:block"
            >
              {" "}
              <div className="flex items-center gap-3">
                {" "}
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#d4af37] text-[#08111f]">
                  {" "}
                  <Award size={22} />{" "}
                </div>{" "}
                <div>
                  {" "}
                  <p className="text-sm font-bold text-white">
                    {" "}
                    Trusted Advisory{" "}
                  </p>{" "}
                  <p className="text-xs text-white/55">
                    Ethical legal support
                  </p>{" "}
                </div>{" "}
              </div>{" "}
            </motion.div>{" "}
            <motion.div
              animate={{
                y: [0, 10, 0],
                transition: {
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              className="absolute -right-3 bottom-16 z-10 hidden rounded-3xl border border-white/10 bg-white/10 p-4 shadow-xl backdrop-blur sm:block"
            >
              {" "}
              <div className="flex items-center gap-3">
                {" "}
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#08111f] text-[#d4af37]">
                  {" "}
                  <ShieldCheck size={22} />{" "}
                </div>{" "}
                <div>
                  {" "}
                  <p className="text-sm font-bold text-white">
                    Confidential
                  </p>{" "}
                  <p className="text-xs text-white/55">
                    Secure consultation
                  </p>{" "}
                </div>{" "}
              </div>{" "}
            </motion.div>{" "}
            <div className="absolute inset-0 rotate-3 rounded-[1.75rem] bg-[#d4af37]/25 blur-xl sm:rotate-6 sm:rounded-[2.5rem] sm:bg-[#d4af37]/30" />{" "}
            <motion.div
              whileHover={{ rotate: -1, scale: 1.01 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-full overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/10 p-3 shadow-2xl backdrop-blur sm:rounded-[2.5rem] sm:p-6"
            >
              {" "}
              <div className="relative overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-[#1f2937] via-[#111827] to-black p-5 text-white sm:rounded-[2rem] sm:p-7">
                {" "}
                <div className="absolute right-0 top-0 h-44 w-44 rounded-full bg-[#d4af37]/20 blur-3xl sm:h-56 sm:w-56" />{" "}
                <div className="relative">
                  {" "}
                  <div className="mb-8 flex items-center justify-between gap-3 sm:mb-10">
                    {" "}
                    <div className="flex min-w-0 items-center gap-3">
                      {" "}
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#d4af37] text-[#08111f] sm:h-12 sm:w-12">
                        {" "}
                        <Scale size={24} />{" "}
                      </div>{" "}
                      <div className="min-w-0">
                        {" "}
                        <p className="truncate font-semibold">
                          {firm.name}
                        </p>{" "}
                        <p className="text-xs text-white/60">Legal Desk</p>{" "}
                      </div>{" "}
                    </div>{" "}
                    <Award className="shrink-0 text-[#d4af37]" />{" "}
                  </div>{" "}
                  <p className="text-xs uppercase tracking-[0.25em] text-[#d4af37] sm:text-sm sm:tracking-[0.3em]">
                    {" "}
                    Featured Service{" "}
                  </p>{" "}
                  <h3 className="law-serif mt-4 text-2xl font-semibold tracking-tight sm:text-4xl">
                    {" "}
                    Litigation, Advisory & Documentation Support{" "}
                  </h3>{" "}
                  <p className="mt-4 text-sm leading-7 text-white/70 sm:text-base">
                    {" "}
                    A structured consultation process to understand facts,
                    review documents and suggest suitable legal steps.{" "}
                  </p>{" "}
                  <div className="mt-7 space-y-4 sm:mt-8">
                    {" "}
                    {[
                      "Case discussion and document review",
                      "Legal notice and drafting support",
                      "Representation and advisory strategy",
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        {" "}
                        <CheckCircle2
                          className="mt-0.5 shrink-0 text-[#d4af37]"
                          size={18}
                        />{" "}
                        <span className="text-sm leading-6 text-white/85">
                          {" "}
                          {item}{" "}
                        </span>{" "}
                      </div>
                    ))}{" "}
                  </div>{" "}
                  <div className="mt-8 grid gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-4">
                    {" "}
                    <div className="rounded-2xl border border-white/10 bg-white/10 p-4 sm:rounded-3xl sm:p-5">
                      {" "}
                      <p className="text-sm text-white/60">
                        Next Available
                      </p>{" "}
                      <p className="mt-1 text-base font-semibold sm:text-lg">
                        {" "}
                        Slots open this week{" "}
                      </p>{" "}
                    </div>{" "}
                    <div className="rounded-2xl border border-white/10 bg-white/10 p-4 sm:rounded-3xl sm:p-5">
                      {" "}
                      <p className="text-sm text-white/60">Matter Type</p>{" "}
                      <p className="mt-1 text-base font-semibold sm:text-lg">
                        {" "}
                        Civil / Corporate{" "}
                      </p>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </motion.div>{" "}
          </motion.div>{" "}
        </motion.div>{" "}
      </section>{" "}
      <section className="border-y border-black/10 bg-white/75 px-4 py-5 backdrop-blur dark:border-white/10 dark:bg-white/[0.04] sm:px-5 lg:px-8">
        {" "}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto grid max-w-7xl gap-2 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4"
        >
          {" "}
          {trustItems.map((item) => (
            <motion.div
              variants={fadeUp}
              key={item}
              className="flex items-center gap-3 rounded-2xl px-1 py-2 sm:px-3 sm:py-3"
            >
              {" "}
              <CheckCircle2
                className="shrink-0 text-[#a47c15] dark:text-[#d4af37]"
                size={20}
              />{" "}
              <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                {" "}
                {item}{" "}
              </span>{" "}
            </motion.div>
          ))}{" "}
        </motion.div>{" "}
      </section>{" "}
      <section
        id="about"
        className="relative px-4 py-16 sm:px-5 sm:py-24 lg:px-8"
      >
        {" "}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12"
        >
          {" "}
          <motion.div variants={fadeUp}>
            {" "}
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#a47c15] dark:text-[#d4af37] sm:text-sm sm:tracking-[0.25em]">
              {" "}
              About The Firm{" "}
            </p>{" "}
            <h2 className="law-serif text-3xl font-semibold leading-tight text-[#08111f] dark:text-white sm:text-5xl">
              {" "}
              Client-focused legal guidance with professional integrity.{" "}
            </h2>{" "}
          </motion.div>{" "}
          <motion.div variants={fadeLeft}>
            {" "}
            <p className="text-sm leading-7 text-gray-600 dark:text-gray-300 sm:text-lg sm:leading-8">
              {" "}
              {firm.name} is a modern legal practice offering advisory, drafting
              and representation services for individuals, businesses and
              institutions. The firm focuses on practical solutions, transparent
              communication and strong legal documentation.{" "}
            </p>{" "}
            <div className="mt-7 grid gap-4 sm:mt-8 sm:grid-cols-2">
              {" "}
              {[
                {
                  icon: ShieldCheck,
                  title: "Ethical Practice",
                  desc: "Confidential, responsible and professional handling of every legal matter.",
                },
                {
                  icon: Scale,
                  title: "Practical Strategy",
                  desc: "Clear legal approach based on facts, documents and client objectives.",
                },
              ].map((item) => (
                <motion.div
                  whileHover={cardHover}
                  key={item.title}
                  className="rounded-[1.5rem] border border-black/10 bg-white p-5 shadow-sm transition hover:shadow-xl dark:border-white/10 dark:bg-white/10 sm:rounded-[2rem] sm:p-6"
                >
                  {" "}
                  <item.icon
                    className="mb-5 text-[#a47c15] dark:text-[#d4af37]"
                    size={30}
                  />{" "}
                  <h3 className="text-lg font-semibold">{item.title}</h3>{" "}
                  <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-300 sm:text-base">
                    {" "}
                    {item.desc}{" "}
                  </p>{" "}
                </motion.div>
              ))}{" "}
            </div>{" "}
          </motion.div>{" "}
        </motion.div>{" "}
      </section>{" "}
      <section
        id="practice"
        className="relative overflow-hidden bg-[#eee5d4] px-4 py-16 dark:bg-white/[0.03] sm:px-5 sm:py-24 lg:px-8"
      >
        {" "}
        <div className="absolute left-[-160px] top-20 h-72 w-72 rounded-full bg-[#d4af37]/20 blur-3xl dark:bg-[#d4af37]/10 sm:left-[-120px] sm:h-80 sm:w-80" />{" "}
        <div className="relative mx-auto max-w-7xl">
          {" "}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="mb-10 flex flex-col justify-between gap-5 sm:mb-12 lg:flex-row lg:items-end"
          >
            {" "}
            <div>
              {" "}
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#a47c15] dark:text-[#d4af37] sm:text-sm sm:tracking-[0.25em]">
                {" "}
                Practice Areas{" "}
              </p>{" "}
              <h2 className="law-serif max-w-3xl text-3xl font-semibold leading-tight text-[#08111f] dark:text-white sm:text-5xl">
                {" "}
                Legal services designed for complex and everyday matters.{" "}
              </h2>{" "}
            </div>{" "}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#a47c15] dark:text-[#d4af37]"
            >
              {" "}
              Discuss your matter <ChevronRight size={17} />{" "}
            </a>{" "}
          </motion.div>{" "}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.18 }}
            className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-5"
          >
            {" "}
            {practiceAreas.map((item, index) => (
              <motion.div
                variants={scaleIn}
                whileHover={cardHover}
                key={item.title}
                className="group relative overflow-hidden rounded-[1.5rem] border border-black/10 bg-white p-5 shadow-sm transition duration-300 hover:shadow-2xl dark:border-white/10 dark:bg-[#101827] sm:rounded-[2rem] sm:p-7"
              >
                {" "}
                <div className="absolute right-5 top-5 law-serif text-5xl font-bold text-black/[0.04] dark:text-white/[0.04] sm:text-6xl">
                  {" "}
                  0{index + 1}{" "}
                </div>{" "}
                <div className="mb-6 flex h-13 w-13 items-center justify-center rounded-2xl bg-[#08111f] text-[#d4af37] transition group-hover:bg-[#d4af37] group-hover:text-[#08111f] dark:bg-white/10 sm:h-14 sm:w-14">
                  {" "}
                  <item.icon size={27} />{" "}
                </div>{" "}
                <h3 className="law-serif text-2xl font-semibold text-[#08111f] dark:text-white">
                  {" "}
                  {item.title}{" "}
                </h3>{" "}
                <p className="mt-4 text-sm leading-7 text-gray-600 dark:text-gray-300 sm:text-base">
                  {" "}
                  {item.desc}{" "}
                </p>{" "}
                <button
                  type="button"
                  onClick={() => openPracticeDetail(item)}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#a47c15] transition hover:gap-3 dark:text-[#d4af37]"
                >
                  {" "}
                  Learn more <ArrowRight size={16} />{" "}
                </button>{" "}
              </motion.div>
            ))}{" "}
          </motion.div>{" "}
        </div>{" "}
      </section>{" "}
      <section className="px-4 py-14 sm:px-5 sm:py-20 lg:px-8">
        {" "}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto grid max-w-7xl overflow-hidden rounded-[1.75rem] bg-[#08111f] shadow-2xl sm:rounded-[2.5rem] lg:grid-cols-[1.1fr_0.9fr]"
        >
          {" "}
          <div className="relative p-6 text-white sm:p-12 lg:p-14">
            {" "}
            <div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-[#d4af37]/20 blur-3xl sm:h-72 sm:w-72" />{" "}
            <div className="relative">
              {" "}
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#d4af37] sm:text-sm sm:tracking-[0.25em]">
                {" "}
                Need Legal Assistance?{" "}
              </p>{" "}
              <h2 className="law-serif max-w-3xl text-3xl font-semibold leading-tight sm:text-5xl">
                {" "}
                Schedule a confidential consultation with our legal team.{" "}
              </h2>{" "}
              <p className="mt-5 max-w-2xl text-sm leading-7 text-white/70 sm:text-base sm:leading-8">
                {" "}
                Share your matter with us and receive clear guidance on
                documentation, representation, legal notices, advisory or
                dispute resolution.{" "}
              </p>{" "}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
                {" "}
                <a
                  href="#contact"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#d4af37] px-6 py-3.5 text-sm font-semibold text-[#08111f] transition hover:bg-white sm:w-auto sm:px-7 sm:py-4"
                >
                  {" "}
                  Request Consultation <ArrowRight size={17} />{" "}
                </a>{" "}
                <a
                  href={`tel:${firm.phone.replace(/\s/g, "")}`}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-[#d4af37] hover:text-[#d4af37] sm:w-auto sm:px-7 sm:py-4"
                >
                  {" "}
                  <Phone size={17} /> Call Now{" "}
                </a>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <div className="relative min-h-[280px] bg-[#d4af37] p-6 text-[#08111f] sm:min-h-[320px] sm:p-12">
            {" "}
            <div className="absolute bottom-0 right-0 law-serif text-[8rem] font-black leading-none text-black/10 sm:text-[12rem]">
              {" "}
              §{" "}
            </div>{" "}
            <div className="relative flex h-full flex-col justify-between">
              {" "}
              <div>
                {" "}
                <p className="text-xs font-bold uppercase tracking-[0.2em] sm:text-sm sm:tracking-[0.25em]">
                  {" "}
                  Legal Desk{" "}
                </p>{" "}
                <h3 className="law-serif mt-4 text-3xl font-semibold sm:text-4xl">
                  {" "}
                  15+ Years of Strategic Legal Support{" "}
                </h3>{" "}
              </div>{" "}
              <div className="mt-10 space-y-4">
                {" "}
                {[
                  "Professional case review",
                  "Strong legal documentation",
                  "Confidential consultation",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-sm font-semibold sm:text-base"
                  >
                    {" "}
                    <CheckCircle2 size={20} /> {item}{" "}
                  </div>
                ))}{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </motion.div>{" "}
      </section>{" "}
      <section id="process" className="px-4 py-14 sm:px-5 sm:py-20 lg:px-8">
        {" "}
        <div className="mx-auto max-w-7xl">
          {" "}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="mb-10 text-center sm:mb-12"
          >
            {" "}
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#a47c15] dark:text-[#d4af37] sm:text-sm sm:tracking-[0.25em]">
              {" "}
              Our Process{" "}
            </p>{" "}
            <h2 className="law-serif mx-auto max-w-3xl text-3xl font-semibold leading-tight text-[#08111f] dark:text-white sm:text-5xl">
              {" "}
              A clear legal workflow from consultation to action.{" "}
            </h2>{" "}
          </motion.div>{" "}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-5"
          >
            {" "}
            {processSteps.map((step, index) => (
              <motion.div
                variants={fadeUp}
                whileHover={cardHover}
                key={step.title}
                className="relative rounded-[1.5rem] border border-black/10 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/10 sm:rounded-[2rem] sm:p-6"
              >
                {" "}
                <div className="mb-6 flex items-center justify-between">
                  {" "}
                  <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-[#08111f] text-[#d4af37] dark:bg-white/10 sm:h-14 sm:w-14">
                    {" "}
                    <step.icon size={25} />{" "}
                  </div>{" "}
                  <span className="text-sm font-bold text-[#a47c15] dark:text-[#d4af37]">
                    {" "}
                    Step {index + 1}{" "}
                  </span>{" "}
                </div>{" "}
                <h3 className="law-serif text-xl font-semibold">
                  {" "}
                  {step.title}{" "}
                </h3>{" "}
                <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-300 sm:text-base">
                  {" "}
                  {step.desc}{" "}
                </p>{" "}
              </motion.div>
            ))}{" "}
          </motion.div>{" "}
        </div>{" "}
      </section>{" "}
      <section className="px-4 pb-14 sm:px-5 sm:pb-20 lg:px-8">
        {" "}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.18 }}
          className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2 lg:gap-10"
        >
          {" "}
          <motion.div
            variants={fadeUp}
            className="relative overflow-hidden rounded-[1.75rem] bg-[#08111f] p-6 text-white shadow-2xl sm:rounded-[2.5rem] sm:p-10"
          >
            {" "}
            <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-[#d4af37]/20 blur-3xl sm:h-72 sm:w-72" />{" "}
            <div className="relative">
              {" "}
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#d4af37] sm:text-sm sm:tracking-[0.25em]">
                {" "}
                Why Choose Us{" "}
              </p>{" "}
              <h2 className="law-serif text-3xl font-semibold leading-tight sm:text-5xl">
                {" "}
                Reliable legal support with clarity and discretion.{" "}
              </h2>{" "}
              <div className="mt-8 space-y-5 sm:mt-9">
                {" "}
                {whyChoose.map((item) => (
                  <div key={item} className="flex gap-4">
                    {" "}
                    <CheckCircle2 className="mt-1 shrink-0 text-[#d4af37]" />{" "}
                    <p className="text-sm leading-7 text-white/75 sm:text-base">
                      {" "}
                      {item}{" "}
                    </p>{" "}
                  </div>
                ))}{" "}
              </div>{" "}
            </div>{" "}
          </motion.div>{" "}
          <motion.div
            variants={fadeLeft}
            id="team"
            className="rounded-[1.75rem] border border-black/10 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-[#101827] sm:rounded-[2.5rem] sm:p-10"
          >
            {" "}
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#a47c15] dark:text-[#d4af37] sm:text-sm sm:tracking-[0.25em]">
              {" "}
              Lead Counsel{" "}
            </p>{" "}
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
              {" "}
              <motion.div
                animate={{ rotate: [0, 3, -3, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="flex h-24 w-24 shrink-0 items-center justify-center rounded-[1.5rem] bg-[#08111f] text-[#d4af37] dark:bg-white/10 sm:h-28 sm:w-28 sm:rounded-[2rem]"
              >
                {" "}
                <Gavel size={44} />{" "}
              </motion.div>{" "}
              <div>
                {" "}
                <h3 className="law-serif text-3xl font-semibold text-[#08111f] dark:text-white sm:text-4xl">
                  {" "}
                  Adv. Aarav Mehra{" "}
                </h3>{" "}
                <p className="mt-2 font-medium text-[#a47c15] dark:text-[#d4af37]">
                  {" "}
                  Founder & Managing Partner{" "}
                </p>{" "}
                <p className="mt-4 text-sm leading-7 text-gray-600 dark:text-gray-300 sm:text-base">
                  {" "}
                  Practicing advocate with experience in litigation, property
                  disputes, family matters and corporate advisory.{" "}
                </p>{" "}
              </div>{" "}
            </div>{" "}
            <div className="mt-8 grid gap-3 sm:grid-cols-3 sm:gap-4">
              {" "}
              {["Litigation", "Advisory", "Drafting"].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl bg-[#f8f3e8] p-4 text-center text-sm font-semibold text-gray-700 dark:bg-white/10 dark:text-gray-300"
                >
                  {" "}
                  {item}{" "}
                </div>
              ))}{" "}
            </div>{" "}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {" "}
              {testimonials.map((item) => (
                <motion.div
                  whileHover={cardHover}
                  key={item.text}
                  className="rounded-3xl border border-[#d4af37]/30 bg-[#d4af37]/10 p-5"
                >
                  {" "}
                  <Quote className="mb-3 text-[#a47c15] dark:text-[#d4af37]" />{" "}
                  <p className="text-sm leading-7 text-gray-700 dark:text-gray-300 sm:text-base">
                    {" "}
                    “{item.text}”{" "}
                  </p>{" "}
                  <p className="mt-4 text-sm font-bold">{item.name}</p>{" "}
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {" "}
                    {item.role}{" "}
                  </p>{" "}
                </motion.div>
              ))}{" "}
            </div>{" "}
          </motion.div>{" "}
        </motion.div>{" "}
      </section>{" "}
      <section
        id="insights"
        className="bg-[#eee5d4] px-4 py-16 dark:bg-white/[0.03] sm:px-5 sm:py-24 lg:px-8"
      >
        {" "}
        <div className="mx-auto max-w-7xl">
          {" "}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="mb-10 flex flex-col justify-between gap-5 sm:mb-12 lg:flex-row lg:items-end"
          >
            {" "}
            <div>
              {" "}
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#a47c15] dark:text-[#d4af37] sm:text-sm sm:tracking-[0.25em]">
                {" "}
                Insights{" "}
              </p>{" "}
              <h2 className="law-serif max-w-3xl text-3xl font-semibold leading-tight text-[#08111f] dark:text-white sm:text-5xl">
                {" "}
                Legal updates and practical guidance.{" "}
              </h2>{" "}
            </div>{" "}
          </motion.div>{" "}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid gap-4 md:grid-cols-3 lg:gap-5"
          >
            {" "}
            {insights.map((item) => (
              <motion.article
                variants={fadeUp}
                whileHover={cardHover}
                key={item.title}
                className="group rounded-[1.5rem] border border-black/10 bg-white p-5 shadow-sm transition hover:shadow-xl dark:border-white/10 dark:bg-[#101827] sm:rounded-[2rem] sm:p-7"
              >
                {" "}
                <BookOpen
                  className="mb-6 text-[#a47c15] dark:text-[#d4af37]"
                  size={30}
                />{" "}
                <div className="mb-4 flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-gray-500 dark:text-gray-400 sm:gap-3 sm:tracking-[0.18em]">
                  {" "}
                  <span>{item.category}</span> <span>•</span>{" "}
                  <span>{item.date}</span>{" "}
                </div>{" "}
                <h3 className="law-serif text-2xl font-semibold leading-snug text-[#08111f] dark:text-white">
                  {" "}
                  {item.title}{" "}
                </h3>{" "}
                <p className="mt-4 text-sm leading-7 text-gray-600 dark:text-gray-300 sm:text-base">
                  {" "}
                  {item.desc}{" "}
                </p>{" "}
                <button
                  type="button"
                  onClick={() => openInsightDetail(item)}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#a47c15] transition hover:gap-3 dark:text-[#d4af37]"
                >
                  {" "}
                  Read Article <ArrowRight size={16} />{" "}
                </button>{" "}
              </motion.article>
            ))}{" "}
          </motion.div>{" "}
        </div>{" "}
      </section>{" "}
      <section id="contact" className="px-4 py-16 sm:px-5 sm:py-24 lg:px-8">
        {" "}
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
          {" "}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {" "}
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#a47c15] dark:text-[#d4af37] sm:text-sm sm:tracking-[0.25em]">
              {" "}
              Contact{" "}
            </p>{" "}
            <h2 className="law-serif text-3xl font-semibold leading-tight text-[#08111f] dark:text-white sm:text-5xl">
              {" "}
              Discuss your legal matter with the firm.{" "}
            </h2>{" "}
            <p className="mt-5 max-w-xl text-sm leading-7 text-gray-600 dark:text-gray-300 sm:text-base sm:leading-8">
              {" "}
              Share your details and the team will connect with you for a
              confidential consultation.{" "}
            </p>{" "}
            <div className="mt-8 space-y-4 sm:mt-10">
              {" "}
              {[
                { icon: Phone, label: firm.phone },
                { icon: Mail, label: firm.email },
                { icon: MapPin, label: firm.address },
              ].map((item) => (
                <motion.div
                  whileHover={cardHover}
                  key={item.label}
                  className="flex items-center gap-4 rounded-3xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/10 dark:bg-white/10 sm:p-5"
                >
                  {" "}
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#08111f] text-[#d4af37] dark:bg-white/10 sm:h-12 sm:w-12">
                    {" "}
                    <item.icon size={22} />{" "}
                  </div>{" "}
                  <p className="break-all text-sm font-semibold text-gray-700 dark:text-gray-300 sm:text-base">
                    {" "}
                    {item.label}{" "}
                  </p>{" "}
                </motion.div>
              ))}{" "}
            </div>{" "}
          </motion.div>{" "}
          <motion.form
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="relative overflow-hidden rounded-[1.75rem] border border-black/10 bg-white p-5 shadow-2xl dark:border-white/10 dark:bg-[#101827] sm:rounded-[2.5rem] sm:p-8"
          >
            {" "}
            <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-[#d4af37]/15 blur-3xl" />{" "}
            <div className="relative">
              {" "}
              <div className="mb-6 rounded-3xl bg-[#08111f] p-5 text-white">
                {" "}
                <p className="text-sm font-semibold text-[#d4af37]">
                  {" "}
                  Confidential Enquiry{" "}
                </p>{" "}
                <h3 className="law-serif mt-2 text-2xl font-semibold sm:text-3xl">
                  {" "}
                  Request a Legal Consultation{" "}
                </h3>{" "}
              </div>{" "}
              <div className="grid gap-5 sm:grid-cols-2">
                {" "}
                <div>
                  {" "}
                  <label className="mb-2 block text-sm font-semibold">
                    {" "}
                    Full Name{" "}
                  </label>{" "}
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full rounded-2xl border border-black/10 bg-[#f8f3e8] px-4 py-3.5 text-sm outline-none transition focus:border-[#d4af37] dark:border-white/10 dark:bg-white/10 sm:py-4 sm:text-base"
                  />{" "}
                </div>{" "}
                <div>
                  {" "}
                  <label className="mb-2 block text-sm font-semibold">
                    {" "}
                    Phone Number{" "}
                  </label>{" "}
                  <input
                    type="tel"
                    placeholder="Enter phone number"
                    className="w-full rounded-2xl border border-black/10 bg-[#f8f3e8] px-4 py-3.5 text-sm outline-none transition focus:border-[#d4af37] dark:border-white/10 dark:bg-white/10 sm:py-4 sm:text-base"
                  />{" "}
                </div>{" "}
              </div>{" "}
              <div className="mt-5">
                {" "}
                <label className="mb-2 block text-sm font-semibold">
                  {" "}
                  Email Address{" "}
                </label>{" "}
                <input
                  type="email"
                  placeholder="Enter email address"
                  className="w-full rounded-2xl border border-black/10 bg-[#f8f3e8] px-4 py-3.5 text-sm outline-none transition focus:border-[#d4af37] dark:border-white/10 dark:bg-white/10 sm:py-4 sm:text-base"
                />{" "}
              </div>{" "}
              <div className="mt-5">
                {" "}
                <label className="mb-2 block text-sm font-semibold">
                  {" "}
                  Legal Matter Type{" "}
                </label>{" "}
                <select className="w-full rounded-2xl border border-black/10 bg-[#f8f3e8] px-4 py-3.5 text-sm outline-none transition focus:border-[#d4af37] dark:border-white/10 dark:bg-white/10 sm:py-4 sm:text-base">
                  {" "}
                  <option>Civil Litigation</option>{" "}
                  <option>Criminal Law</option> <option>Family Matter</option>{" "}
                  <option>Property Dispute</option>{" "}
                  <option>Corporate Advisory</option>{" "}
                  <option>Legal Documentation</option>{" "}
                </select>{" "}
              </div>{" "}
              <div className="mt-5">
                {" "}
                <label className="mb-2 block text-sm font-semibold">
                  {" "}
                  Message{" "}
                </label>{" "}
                <textarea
                  rows={5}
                  placeholder="Briefly describe your matter"
                  className="w-full resize-none rounded-2xl border border-black/10 bg-[#f8f3e8] px-4 py-3.5 text-sm outline-none transition focus:border-[#d4af37] dark:border-white/10 dark:bg-white/10 sm:py-4 sm:text-base"
                />{" "}
              </div>{" "}
              <button
                type="button"
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-[#d4af37] px-7 py-3.5 text-sm font-semibold text-[#08111f] transition hover:bg-[#08111f] hover:text-white dark:hover:bg-white dark:hover:text-[#08111f] sm:py-4"
              >
                {" "}
                Submit Enquiry <ArrowRight size={17} />{" "}
              </button>{" "}
              <p className="mt-5 text-center text-xs leading-6 text-gray-500 dark:text-gray-400">
                {" "}
                Submitting this form does not create an advocate-client
                relationship. The firm will contact you for further
                discussion.{" "}
              </p>{" "}
            </div>{" "}
          </motion.form>{" "}
        </div>{" "}
      </section>{" "}
      <footer className="border-t border-white/10 bg-[#08111f] px-4 pt-14 text-white sm:px-5 sm:pt-16 lg:px-8">
        {" "}
        <div className="mx-auto grid max-w-7xl gap-10 pb-12 md:grid-cols-2 lg:grid-cols-4">
          {" "}
          <div>
            {" "}
            <div className="mb-5 flex items-center gap-3">
              {" "}
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#d4af37] text-[#08111f] sm:h-12 sm:w-12">
                {" "}
                <Scale size={24} />{" "}
              </div>{" "}
              <div className="min-w-0">
                {" "}
                <p className="law-serif truncate text-xl font-bold">
                  {" "}
                  {firm.name}{" "}
                </p>{" "}
                <p className="text-sm text-white/55">{firm.tagline}</p>{" "}
              </div>{" "}
            </div>{" "}
            <p className="text-sm leading-7 text-white/60 sm:text-base">
              {" "}
              Professional legal consultation, advisory, documentation and court
              representation support.{" "}
            </p>{" "}
          </div>{" "}
          <div>
            {" "}
            <h3 className="mb-5 text-lg font-semibold text-[#d4af37]">
              {" "}
              Practice Areas{" "}
            </h3>{" "}
            <div className="space-y-3 text-sm text-white/65">
              {" "}
              {practiceAreas.slice(0, 5).map((item) => (
                <button
                  key={item.title}
                  onClick={() => openPracticeDetail(item)}
                  className="block text-left transition hover:text-[#d4af37]"
                >
                  {" "}
                  {item.title}{" "}
                </button>
              ))}{" "}
            </div>{" "}
          </div>{" "}
          <div>
            {" "}
            <h3 className="mb-5 text-lg font-semibold text-[#d4af37]">
              {" "}
              Quick Links{" "}
            </h3>{" "}
            <div className="space-y-3 text-sm text-white/65">
              {" "}
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block transition hover:text-[#d4af37]"
                >
                  {" "}
                  {link.label}{" "}
                </a>
              ))}{" "}
            </div>{" "}
          </div>{" "}
          <div>
            {" "}
            <h3 className="mb-5 text-lg font-semibold text-[#d4af37]">
              {" "}
              Contact Info{" "}
            </h3>{" "}
            <div className="space-y-4 text-sm text-white/65">
              {" "}
              <p className="flex gap-3 break-all">
                {" "}
                <Phone className="shrink-0 text-[#d4af37]" size={18} />{" "}
                {firm.phone}{" "}
              </p>{" "}
              <p className="flex gap-3 break-all">
                {" "}
                <Mail className="shrink-0 text-[#d4af37]" size={18} />{" "}
                {firm.email}{" "}
              </p>{" "}
              <p className="flex gap-3">
                {" "}
                <MapPin className="shrink-0 text-[#d4af37]" size={18} />{" "}
                {firm.address}{" "}
              </p>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        <div className="border-t border-white/10 py-6 text-sm text-white/50">
          {" "}
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 md:flex-row">
            {" "}
            <p>
              {" "}
              © {new Date().getFullYear()} {firm.name}. All rights
              reserved.{" "}
            </p>{" "}
            <p>Website for informational purposes only.</p>{" "}
          </div>{" "}
        </div>{" "}
      </footer>{" "}
      <div className="fixed bottom-4 right-4 z-40 flex flex-col gap-2 sm:bottom-5 sm:right-5 sm:gap-3">
        {" "}
        <motion.a
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          href={`tel:${firm.phone.replace(/\s/g, "")}`}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-[#08111f] text-[#d4af37] shadow-xl transition hover:bg-[#d4af37] hover:text-[#08111f] dark:bg-[#d4af37] dark:text-[#08111f] dark:hover:bg-white sm:h-12 sm:w-12"
          aria-label="Call"
        >
          {" "}
          <Phone size={20} />{" "}
        </motion.a>{" "}
        <motion.a
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          href="#contact"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-[#d4af37] text-[#08111f] shadow-xl transition hover:bg-[#08111f] hover:text-[#d4af37] dark:hover:bg-white sm:h-12 sm:w-12"
          aria-label="Message"
        >
          {" "}
          <MessageCircle size={20} />{" "}
        </motion.a>{" "}
      </div>{" "}
    </main>
  );
}
