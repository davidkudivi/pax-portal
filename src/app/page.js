'use client';

import { useEffect, useState } from 'react';

const paxAiderData = [
  {
    id: 'about',
    title: '1. About Pax Romana',
    icon: 'fa-circle-info',
    content: {
      heading: 'About Pax Romana',
      paragraphs: [
        'PAX ROMANA which simply means Peace from Rome. It is an International Movement of Catholic Students in tertiary institutions. It currently exists in about 80 countries worldwide and most tertiary institutions in Ghana.',
        'We have our pax parents, most of whom are lecturers on campus and who are very committed to guiding all students to reach greater heights.',
      ],
      list: [
        'Vision: That Christ may be in all',
        'Motto: Liberation for peace',
        'We have a Chaplaincy (church) — Our Lady of the Holy Rosary Catholic Chaplaincy — here on campus where students, pax parents, and other workers come together to worship.',
      ],
    },
  },
  {
    id: 'message',
    title: '2. Message from the Pax Council',
    icon: 'fa-envelope-open-text',
    content: {
      heading: 'Message From the Pax Council',
      paragraphs: [
        'On behalf of all Catholic Students of KNUST, I congratulate you on your admission into this noble University.',
        'You are highly welcome in the name of our Lord Jesus Christ to this beautiful Pax Family. It is our greatest pleasure to help you settle down on campus and to guide you with your academic and spiritual life. We have long waited for your coming and Praise God you are here with us.',
        'Have a fruitful stay here and may the good and gracious Lord bless you and be with you. We are always willing and ready to help you!',
      ],
    },
  },
  {
    id: 'subgroups',
    title: '3. Pax Sub Groups',
    icon: 'fa-people-group',
    content: {
      heading: 'Pax Romana Sub Groups',
      list: [
        'Catholic Charismatic Renewal (ITI-CCR)',
        'English Lectors Ministry',
        'Legion of Mary',
        'Knights and Ladies of the Blessed Sacrament (KLBS)/Mass Servers',
        'Sacred Heart of Jesus',
        'TESMAG (Student Marshallans Association)',
        'Pax Choir',
        'Organising and Technical Ministry (Organa)',
        'Ushering Ministry',
        'Visitation Ministry',
        'Catholic Youth Organisation (CYO)',
        'GATEs-KSJI (Student Members of St. John International)',
      ],
    },
  },
  {
    id: 'programs',
    title: '4. Regular Pax Programs',
    icon: 'fa-calendar-check',
    content: {
      heading: 'Regular Pax Programs',
      list: [
        'Students Mass @ 6:30pm every Tuesday',
        'Dawn Rosary Prayers @ varying times, every Thursday in Halls/Hostels of Residence',
        'Cell Meetings @ varying times, every Saturday in Halls/Hostels of Residence',
        'Note: There are Daily Masses every week',
      ],
    },
  },
  {
    id: 'orientation',
    title: '5. Watch Out! Freshers Orientation',
    icon: 'fa-bullhorn',
    content: {
      heading: 'Freshers Orientation',
      paragraphs: [
        'Date: Sunday, 18th October, 2026.',
        'Time: 8:00 am',
        'Venue: Our Lady of the Holy Rosary Catholic Chaplaincy',
        'Freshers meet Pax Parents: After 8:00am mass @ Chaplaincy',
      ],
    },
  },
  {
    id: 'security',
    title: '6. Security Tips on Campus',
    icon: 'fa-shield-halved',
    content: {
      heading: 'Security Tips on Campus',
      list: [
        'Don’t walk alone in unsafe areas — avoid dark, bushy, isolated places and unsafe shortcuts, especially at night.',
        'Move in groups when possible — walk with course mates, roommates, or fellow Catholic students, particularly after evening activities.',
        'Keep your room secured — lock your door whenever you leave or sleep, even if you’ll only be away briefly.',
        'Protect your keys — never hide keys under mats or flower pots. Report lost keys, damaged locks, or suspicious access immediately to your Hall/Hostel authorities.',
        'Use safer transport — prefer KNUST-identified/embossed taxis and shuttles. Avoid suspicious drivers or isolated pickup points.',
        'Be alert when travelling — note the vehicle’s registration number, travel with others where possible, and keep your phone, wallet and valuables safely inside your bag.',
        'Don’t carry unnecessary cash — keep physical money to a minimum and avoid openly displaying valuables.',
        'Protect yourself during an attack — if confronted by armed robbers, do not resist or fight back. Cooperate and prioritise your life.',
        'Be security-conscious around vehicles — park only in designated/well-lit areas, keep valuables hidden, lock your doors, and report suspicious people to security.',
        'Prevent fires — don’t overload sockets or extension boards; switch off cookers and appliances after use, unplug when appropriate, and keep candles/mosquito coils away from anything flammable.',
      ],
      quote: 'KNUST Security: 050 134 7350 / 050 134 7352',
    },
  },
  {
    id: 'contacts',
    title: '7. Help Lines & Contacts',
    icon: 'fa-phone',
    content: {
      heading: 'Contacts',
      paragraphs: [
        'Pax! Peace! ... Thumbs up! For Jesus!',
        'For Help call:',
      ],
      list: [
        'Emmanuel — 0207153767',
        'Eugene — 0534654904',
        'David — 0542384187',
        'Email: paxromanaknustlocal@gmail.com',
      ],
      quote: 'KNUST Police: 0322 060 357 | Police Information Room: 0322 022 323 | Ghana National Fire Service: 192 / 112 | KNUST Fire Station: 0322 392 292',
    },
  },
];

const communityCards = [
  {
    title: 'Pax Sub Groups',
    icon: 'fa-people-group',
    items: [
      { name: 'Catholic Charismatic Renewal', subtitle: 'ITI-CCR', action: 'Catholic Charismatic Renewal' },
      { name: 'English Lectors Ministry', subtitle: 'Public reading & proclamation', action: 'English Lectors Ministry' },
      { name: 'Legion of Mary', subtitle: 'Evangelisation & prayer', action: 'Legion of Mary' },
      { name: 'Mass Servers', subtitle: 'KLBS / Blessed Sacrament', action: 'Mass Servers' },
    ],
  },
  {
    title: 'Pax Programs',
    icon: 'fa-calendar-check',
    items: [
      { name: 'Students Mass', subtitle: 'Every Tuesday, 6:30pm', action: 'Students Mass' },
      { name: 'Dawn Rosary', subtitle: 'Thursday in halls/hostels', action: 'Dawn Rosary' },
      { name: 'Cell Meetings', subtitle: 'Saturday in halls/hostels', action: 'Cell Meetings' },
    ],
  },
  {
    title: 'Orientation & Support',
    icon: 'fa-bullhorn',
    items: [
      { name: 'Freshers Orientation', subtitle: 'Sunday, 18th October, 2026', action: 'Freshers Orientation' },
      { name: 'Pax Parents Meet-Up', subtitle: 'After 8:00am Mass', action: 'Pax Parents' },
      { name: 'Chaplaincy Support', subtitle: 'Our Lady of the Holy Rosary', action: 'Chaplaincy Support' },
    ],
  },
  {
    title: 'Safety & Contacts',
    icon: 'fa-shield-halved',
    items: [
      { name: 'Campus Security', subtitle: '050 134 7350 / 050 134 7352', action: 'Campus Security' },
      { name: 'KNUST Police', subtitle: '0322 060 357', action: 'KNUST Police' },
      { name: 'Pax Help Lines', subtitle: 'Emmanuel / Eugene / David', action: 'Pax Help Lines' },
    ],
  },
];

const scheduleCards = [
  {
    heading: 'Students Mass',
    accent: 'bg-paxGold-500 text-white',
    icon: 'fa-church',
    items: [
      { label: 'Day', time: 'Every Tuesday' },
      { label: 'Time', time: '6:30pm' },
      { label: 'Venue', time: 'Chaplaincy' },
    ],
  },
  {
    heading: 'Dawn Rosary',
    accent: 'bg-paxBlue-700 text-white',
    icon: 'fa-sun',
    items: [
      { label: 'Day', time: 'Every Thursday' },
      { label: 'Time', time: 'Varying times' },
      { label: 'Venue', time: 'Halls / Hostels' },
    ],
  },
  {
    heading: 'Freshers Orientation',
    accent: 'bg-green-500 text-white',
    icon: 'fa-bullhorn',
    items: [
      { label: 'Date', time: 'Sunday, 18th October, 2026' },
      { label: 'Time', time: '8:00am' },
      { label: 'Venue', time: 'Our Lady of the Holy Rosary Catholic Chaplaincy' },
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
    openModal('Save as PDF', 'Your browser print dialog will open. Choose “Save as PDF” to download the Pax Aider as a PDF file.');
    setTimeout(() => {
      window.print();
    }, 250);
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
            <img
              src="/photo_2026-10-07_13-00-05.jpg"
              alt="Pax Romana KNUST Logo"
              className="h-12 w-12 rounded-full object-cover shadow-md ring-2 ring-[#1e40af]/20"
            />
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
