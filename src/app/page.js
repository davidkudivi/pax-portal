'use client';

import { useEffect, useState } from 'react';

const paxAiderData = [
  {
    id: 'welcome',
    title: '1. Welcome to KNUST',
    icon: 'fa-hand-wave',
    content: {
      heading: 'Welcome to Campus!',
      paragraphs: [
        'Dear Freshman, welcome to the Kwame Nkrumah University of Science and Technology. Your admission is a testament to your hard work, and we at Pax Romana share in your joy.',
        'University life is exciting but can also be daunting. This handbook is designed to help you navigate your new environment smoothly. Pax Romana is your family away from home, ready to support you spiritually, academically, and socially.',
      ],
      quote: '“I can do all things through Christ who strengthens me.” - Philippians 4:13',
    },
  },
  {
    id: 'spiritual',
    title: '2. Spiritual Life',
    icon: 'fa-cross',
    content: {
      heading: 'Nurturing Your Faith',
      paragraphs: [
        'At KNUST, maintaining your spiritual life is paramount. The Catholic Chaplaincy, located behind the Great Hall, is the center of our activities.',
        'The Sacraments are central to our faith journey, and all students are encouraged to participate actively in Mass, prayer, and community life.',
      ],
      list: ['Holy Mass: Refer to the schedule section for timings. Attendance is highly encouraged.', 'Confession: Priests are usually available before Masses or by appointment at the Chaplaincy office.'],
    },
  },
  {
    id: 'academic',
    title: '3. Academic Excellence',
    icon: 'fa-book',
    content: {
      heading: 'Pursuing Knowledge',
      paragraphs: ['You are here primarily to study. Time management is your greatest asset.'],
      cards: [
        { title: 'Study Spaces', text: 'The Main Library, College libraries, and designated study rooms in halls are excellent quiet places.' },
        { title: 'Group Studies', text: 'Join your College Pax groups to find seniors and peers for study discussions and past questions.' },
      ],
    },
  },
  {
    id: 'campus',
    title: '4. Navigating Campus',
    icon: 'fa-map-location-dot',
    content: {
      heading: 'Getting Around KNUST',
      paragraphs: ['KNUST is vast, but you will soon get used to it. The campus shuttles are a convenient way to move around.'],
      list: [
        { title: 'Commercial Area', text: 'Your hub for banks, food, printing, and the post office.' },
        { title: 'Security', text: 'Always carry your Student ID. Avoid walking alone in obscure paths late at night. Save the campus security numbers on your phone.' },
      ],
    },
  },
];

const communityCards = [
  {
    title: 'Ministries & Choirs',
    icon: 'fa-music',
    items: [
      { name: 'Pax Choir', subtitle: 'Singing to the glory of God', action: 'Pax Choir' },
      { name: 'Lectors Ministry', subtitle: 'Proclaiming the Word', action: 'Lectors' },
      { name: 'Mass Servers', subtitle: 'Serving at the Altar', action: 'Mass Servers' },
    ],
  },
  {
    title: 'Pious Societies',
    icon: 'fa-hands-praying',
    items: [
      { name: 'Charismatic (CCRS)', subtitle: 'Prayer and praise', action: 'CCRS' },
      { name: 'Legion of Mary', subtitle: 'To Jesus through Mary', action: 'Legion of Mary' },
      { name: 'St. Vincent de Paul', subtitle: 'Charity and outreach', action: 'St Vincent' },
    ],
  },
  {
    title: 'Academic Groups',
    icon: 'fa-graduation-cap',
    items: [
      { name: 'College of Engineering', subtitle: 'Study groups & tips', action: 'Engineering' },
      { name: 'Health Sciences', subtitle: 'CHS students support', action: 'Health Sciences' },
      { name: 'Humanities & Social Sci.', subtitle: 'CASS students networking', action: 'CASS' },
    ],
  },
  {
    title: 'Halls & Hostels',
    icon: 'fa-building',
    items: [
      { name: 'Republic / Indece / Unity', subtitle: 'Traditional Halls Pax', action: 'Traditional Halls' },
      { name: 'Ayeduase Hostels', subtitle: 'Off-campus community', action: 'Ayeduase' },
      { name: 'Bomso / Kotei Hostels', subtitle: 'Off-campus community', action: 'Bomso' },
    ],
  },
];

const scheduleCards = [
  {
    heading: 'Sunday Masses',
    accent: 'bg-paxGold-500 text-white',
    icon: 'fa-church',
    items: [
      { label: '1st Mass (English)', time: '6:30 AM' },
      { label: '2nd Mass (English)', time: '8:30 AM' },
      { label: '3rd Mass (Akan)', time: '10:30 AM' },
    ],
  },
  {
    heading: 'Weekday & Adoration',
    accent: 'bg-paxBlue-700 text-white',
    icon: 'fa-sun',
    items: [
      { label: 'Mon - Fri Masses', time: '6:00 AM & 6:00 PM' },
      { label: 'Saturday Mass', time: '6:30 AM' },
      { label: 'Thursday Adoration', time: '6:30 PM - 8:00 PM' },
    ],
  },
  {
    heading: 'Meetings',
    accent: 'bg-green-500 text-white',
    icon: 'fa-users',
    items: [
      { label: 'General Meeting', time: 'Fridays at 6:30 PM', extra: 'Chaplaincy Auditorium' },
      { label: 'Freshmen Orientation', time: 'Check WhatsApp for dates' },
    ],
  },
];

export default function Home() {
  const [activeChapter, setActiveChapter] = useState('welcome');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [modal, setModal] = useState({ open: false, title: '', message: '' });

  useEffect(() => {
    const handleScroll = () => {
      const nav = document.getElementById('navbar');
      if (nav) {
        nav.classList.toggle('shadow-md', window.scrollY > 20);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openModal = (title, message) => {
    setModal({ open: true, title, message });
  };

  const closeModal = () => {
    setModal((previous) => ({ ...previous, open: false }));
  };

  const handleDownload = () => {
    openModal('Download Initiated', 'The full PDF version of the Pax Aider is currently being generated. This feature will download the official freshers guide directly to your device.');
  };

  const handleJoinGroup = (groupName) => {
    openModal('Redirecting to WhatsApp', `You are about to join the "${groupName}" WhatsApp group. For security, please ensure you introduce yourself to the admins with your Student ID once joined.`);
  };

  const chapterContent = paxAiderData.find((chapter) => chapter.id === activeChapter)?.content;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <nav id="navbar" className="fixed z-50 w-full border-b border-slate-200/80 bg-white/95 backdrop-blur-md transition-all duration-300">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex cursor-pointer items-center gap-3" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1e40af] text-xl text-[#fbbf24] shadow-md">
              ✦
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold leading-tight text-[#1e3a8a]">Pax Romana</span>
              <span className="text-[10px] font-semibold tracking-wider text-[#d97706]">KNUST LOCAL</span>
            </div>
          </div>

          <div className="hidden items-center space-x-8 md:flex">
            <a href="#pax-aider" className="font-medium text-slate-600 transition-colors hover:text-[#1e40af]">The Pax Aider</a>
            <a href="#communities" className="font-medium text-slate-600 transition-colors hover:text-[#1e40af]">Communities</a>
            <a href="#schedules" className="font-medium text-slate-600 transition-colors hover:text-[#1e40af]">Schedules</a>
            <a href="#communities" className="rounded-full bg-[#1e40af] px-5 py-2.5 font-semibold text-white shadow-md shadow-[#1e40af]/30 transition-all hover:-translate-y-0.5 hover:bg-[#1e3a8a]">
              Join WhatsApp
            </a>
          </div>

          <div className="flex items-center md:hidden">
            <button
              type="button"
              id="mobile-menu-btn"
              className="rounded-md p-2 text-slate-600 hover:text-[#1e40af] focus:outline-none"
              onClick={() => setIsMobileMenuOpen((value) => !value)}
            >
              <span className="text-2xl">☰</span>
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="absolute w-full border-t border-slate-100 bg-white shadow-lg md:hidden">
            <div className="flex flex-col space-y-2 px-4 pb-6 pt-2">
              <a href="#pax-aider" onClick={() => setIsMobileMenuOpen(false)} className="rounded-md px-3 py-3 text-base font-medium text-slate-700 hover:bg-[#eff6ff] hover:text-[#1e40af]">The Pax Aider</a>
              <a href="#communities" onClick={() => setIsMobileMenuOpen(false)} className="rounded-md px-3 py-3 text-base font-medium text-slate-700 hover:bg-[#eff6ff] hover:text-[#1e40af]">Communities</a>
              <a href="#schedules" onClick={() => setIsMobileMenuOpen(false)} className="rounded-md px-3 py-3 text-base font-medium text-slate-700 hover:bg-[#eff6ff] hover:text-[#1e40af]">Schedules</a>
            </div>
          </div>
        )}
      </nav>

      <header className="relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#1e3a8a] via-[#1e40af] to-[#1d4ed8] pt-32 pb-20 lg:pt-48 lg:pb-32">
        <div className="absolute inset-0 z-0 opacity-20">
          <svg className="absolute right-[-5%] top-[-10%] h-full w-1/2 text-white" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none">
            <polygon points="0,100 100,0 100,100" />
          </svg>
          <div className="absolute bottom-[-10%] left-[-10%] h-64 w-64 rounded-full bg-[#fbbf24] opacity-40 blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <span className="mb-6 inline-block rounded-full border border-[#60a5fa]/30 bg-[#1e40af]/50 px-3 py-1 text-sm font-semibold tracking-wide text-[#fbbf24] backdrop-blur-sm">
            CLASS OF 2028 FRESHMEN PORTAL
          </span>
          <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight text-white md:text-5xl lg:text-7xl">
            Welcome Home to <br />
            <span className="bg-gradient-to-r from-[#fbbf24] to-yellow-200 bg-clip-text text-transparent">Pax Romana KNUST</span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg font-light text-blue-100 md:text-xl">
            Your spiritual family on campus. Discover your community, navigate university life, and grow in faith as a Catholic student.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a href="#pax-aider" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#f59e0b] px-8 py-4 text-lg font-bold text-[#1e3a8a] shadow-lg shadow-[#f59e0b]/50 transition-all hover:-translate-y-1 hover:bg-[#fbbf24]">
              📖 Read the Pax Aider
            </a>
            <a href="#communities" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-8 py-4 text-lg font-bold text-white shadow-lg backdrop-blur-sm transition-all hover:-translate-y-1 hover:bg-white/20">
              💬 Join a Group
            </a>
          </div>
        </div>
      </header>

      <section id="pax-aider" className="relative bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-[#1e3a8a] md:text-4xl">The Pax Aider</h2>
            <p className="mx-auto max-w-2xl text-slate-600">Your ultimate survival guide to academic, social, and spiritual life at KNUST. Read it online or download it for later.</p>
          </div>

          <div className="flex min-h-[600px] flex-col overflow-hidden rounded-3xl border border-slate-100 bg-slate-50 shadow-xl lg:flex-row">
            <div className="flex w-full flex-col border-r border-slate-200 bg-white lg:w-1/3">
              <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50/50 p-6">
                <h3 className="text-lg font-bold text-slate-800">
                  <span className="mr-2 text-[#1d4ed8]">☰</span> Contents
                </h3>
                <button type="button" onClick={handleDownload} className="flex items-center gap-2 rounded-lg bg-slate-200 px-3 py-1.5 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-300">
                  ⬇ PDF
                </button>
              </div>
              <div className="reader-scroll flex flex-1 flex-col space-y-1 overflow-y-auto p-4">
                {paxAiderData.map((chapter) => {
                  const isActive = chapter.id === activeChapter;
                  return (
                    <button
                      key={chapter.id}
                      type="button"
                      onClick={() => setActiveChapter(chapter.id)}
                      className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left transition-all duration-200 ${
                        isActive ? 'bg-[#1e40af] text-white shadow-md' : 'text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                      }`}
                    >
                      <span className={`w-5 text-center ${isActive ? 'text-[#fbbf24]' : 'text-slate-400'}`}>✦</span>
                      <span className="font-medium">{chapter.title}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="reader-scroll relative h-[500px] w-full overflow-y-auto bg-white p-6 md:p-10 lg:h-auto lg:w-2/3">
              <div className="mx-auto w-full max-w-3xl">
                {chapterContent && (
                  <>
                    <h2 className="mb-4 text-2xl font-bold text-[#1e3a8a]">{chapterContent.heading}</h2>

                    {chapterContent.paragraphs && chapterContent.paragraphs.map((paragraph) => (
                      <p key={paragraph} className="mb-4 leading-relaxed text-slate-700">{paragraph}</p>
                    ))}

                    {chapterContent.list && (
                      <ul className="mb-4 list-disc space-y-2 pl-5 text-slate-700">
                        {chapterContent.list.map((item) =>
                          typeof item === 'string' ? (
                            <li key={item}>{item}</li>
                          ) : (
                            <li key={item.title}>
                              <strong className="text-[#1e40af]">{item.title}:</strong> {item.text}
                            </li>
                          )
                        )}
                      </ul>
                    )}

                    {chapterContent.cards && (
                      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
                        {chapterContent.cards.map((card) => (
                          <div key={card.title} className="rounded-xl border border-slate-200 bg-slate-100 p-4">
                            <h4 className="mb-1 font-bold text-slate-800">{card.title}</h4>
                            <p className="text-sm text-slate-600">{card.text}</p>
                          </div>
                        ))}
                      </div>
                    )}

                    {chapterContent.quote && (
                      <div className="mt-6 rounded-r-lg border-l-4 border-[#1e40af] bg-[#eff6ff] p-4">
                        <p className="text-sm font-semibold italic text-[#1e3a8a]">{chapterContent.quote}</p>
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="communities" className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <span className="text-sm font-bold uppercase tracking-wider text-[#d97706]">Get Involved</span>
            <h2 className="mt-2 mb-4 text-3xl font-bold text-[#1e3a8a] md:text-4xl">Find Your Community</h2>
            <p className="mx-auto max-w-2xl text-slate-600">Join our WhatsApp groups to connect with students who share your interests, faculty, or hall of residence.</p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {communityCards.map((card) => (
              <div key={card.title} className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-md transition-shadow hover:shadow-xl">
                <div className="flex items-center gap-4 bg-[#1e40af] p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-xl text-white">
                    {card.icon === 'fa-music' && '♫'}
                    {card.icon === 'fa-hands-praying' && '✝'}
                    {card.icon === 'fa-graduation-cap' && '🎓'}
                    {card.icon === 'fa-building' && '🏢'}
                  </div>
                  <h3 className="text-2xl font-bold text-white">{card.title}</h3>
                </div>

                <div className="space-y-4 p-6">
                  {card.items.map((item) => (
                    <div key={item.name} className="flex items-center justify-between rounded-xl p-3 transition-colors hover:bg-slate-50">
                      <div>
                        <h4 className="font-bold text-slate-800">{item.name}</h4>
                        <p className="text-sm text-slate-500">{item.subtitle}</p>
                      </div>
                      <button type="button" onClick={() => handleJoinGroup(item.action)} className="flex items-center gap-2 rounded-lg bg-[#25D366] px-4 py-2 font-semibold text-white shadow-sm transition-transform hover:scale-105 hover:bg-[#1da851]">
                        💬 Join
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="schedules" className="relative overflow-hidden bg-white py-24">
        <div className="absolute -left-10 bottom-0 h-40 w-40 rounded-full bg-[#dbeafe] opacity-50 blur-3xl" />
        <div className="absolute -right-10 top-0 mt-10 h-40 w-40 rounded-full bg-[#fef3c7] opacity-50 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-[#1e3a8a] md:text-4xl">Mass & Meeting Schedules</h2>
            <p className="mx-auto max-w-2xl text-slate-600">Join us at the Catholic Chaplaincy for spiritual nourishment and community gatherings.</p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {scheduleCards.map((card) => (
              <div key={card.heading} className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-lg">
                <div className={`absolute right-0 top-0 rounded-bl-3xl p-3 transition-transform group-hover:scale-110 ${card.accent}`}>
                  <span className="text-xl">{card.icon === 'fa-church' && '⛪'}{card.icon === 'fa-sun' && '☀'}{card.icon === 'fa-users' && '👥'}</span>
                </div>
                <h3 className="mb-4 text-xl font-bold text-[#1e3a8a]">{card.heading}</h3>
                <ul className="space-y-4">
                  {card.items.map((item) => (
                    <li key={item.label} className="flex items-start gap-3">
                      <span className="mt-1 text-[#f59e0b] md:text-[#1e40af]">⏱</span>
                      <div>
                        <span className="block font-semibold text-slate-800">{item.label}</span>
                        <span className="text-sm text-slate-500">{item.time}</span>
                        {item.extra && <span className="mt-1 block text-xs text-slate-400">{item.extra}</span>}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 py-12 text-slate-300">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 sm:px-6 md:flex-row lg:px-8">
          <div className="flex items-center gap-3">
            <span className="text-2xl text-[#fbbf24]">✦</span>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-white">Pax Romana KNUST</span>
              <span className="text-xs text-slate-400">Catholic Students Union</span>
            </div>
          </div>

          <div className="text-center text-sm text-slate-500 md:text-right">
            <p>&copy; 2026 Pax Romana KNUST Local. All rights reserved.</p>
            <p className="mt-1">Designed for the KNUST Catholic Freshmen.</p>
          </div>
        </div>
      </footer>

      {modal.open && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 px-4 backdrop-blur-sm">
          <div className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-2xl">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#dbeafe] text-2xl text-[#1d4ed8]">
                ℹ
              </div>
              <h3 className="mb-2 text-lg font-bold text-slate-800">{modal.title}</h3>
              <p className="mb-6 text-slate-600">{modal.message}</p>
              <button type="button" onClick={closeModal} className="w-full rounded-xl bg-[#1e40af] py-3 font-semibold text-white transition-colors hover:bg-[#1e3a8a]">
                Understood
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
