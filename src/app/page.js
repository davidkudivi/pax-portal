'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { MapPin } from 'lucide-react';

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
    title: '3. Sub-Groups',
    icon: 'fa-people-group',
    content: {
      heading: 'Sub-Groups',
      list: [
        'Legion of Mary',
        "English Lectors' Ministry",
        'Catholic Charismatic Renewal (ITI-CCR)',
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
        'Mass for Students @ 6:30pm Tuesday',
        'Dawn Rosary Prayers @ varying times, Thursday in Halls/Hostels of Residence',
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
    title: 'Sub-Groups',
    icon: 'fa-people-group',
    items: [
      {
        name: 'Legion of Mary',
        aboutMessage: 'Legion of Mary is a society whose members grow in holiness through prayer and service, visiting the sick, evangelizing, and spreading devotion to Our Lady among Catholic students of our institution.\n\nMeeting Day & Time: Sunday after Second mass',
        joinUrl: 'https://chat.whatsapp.com/JPbH8hACkXJ7k40AQFTQvn?s=cl&p=a&ilr=4&iam=2',
      },
      {
        name: "English Lectors' Ministry",
        aboutMessage: "A ministry dedicated to proclaiming the Word of God during Mass and other liturgical celebrations.\n\nMeeting Day & Time: Wednesday, 5:30 PM",
        aboutImage: '/Lectors.jpg',
        joinUrl: 'https://chat.whatsapp.com/C27tzZxKLd4AzL22Me71pg?mode=gi_t',
      },
      {
        name: 'Catholic Charismatic Renewal (ITI-CCR)',
        action: 'Catholic Charismatic Renewal',
      },
      {
        name: 'Knights and Ladies of the Blessed Sacrament (KLBS)/Mass Servers',
        aboutImage: '/KLBS.jpg',
        aboutMessage: 'A group of people who assist the priest and religious during mass and other Liturgical celebrations.\n\nMeeting Day & Time: Saturdays, 3pm at the Main Chapel.',
        joinUrl: 'https://chat.whatsapp.com/Lj4zSdfbnnI7q4a0G1iUcc?s=cl&p=a&mlu=4&ilr=4',
      },
      {
        name: 'Sacred Heart of Jesus',
        aboutImage: '/SacredHeart.jpg',
        aboutMessage: 'The Sacred Heart of Jesus Confraternity is a Catholic lay association dedicated to venerating and spreading devotion to the Sacred Heart of Jesus. We focus on Christ’s boundless love, compassion, and redemptive mercy for humanity.\n\nThe aim of the society is to help members grow in personal holiness and prayer.\n\nMeeting Day & Time: Fridays at 6:00 PM.',
        joinUrl: 'https://chat.whatsapp.com/FzsegnqagufCCnmUhLLJS7',
      },
      {
        name: 'TESMAG (Student Marshallans Association)',
        aboutImage: '/TESMAG.jpg',
        aboutMessage: 'TESMAG is a vibrant association for tertiary students in Ghana who are part of the Marshallan family or are interested in becoming Marshallans. We meet once a month to come together, build meaningful connections, grow in faith and character, and learn more about the Marshallan way of life. Our meetings are open to both Marshallans and non-Marshallans who wish to join and become part of the family.',
        joinUrl: 'https://chat.whatsapp.com/Fu10epRU7FMIApTD4t897g?s=cl&p=a&mlu=4&ilr=4',
      },
      {
        name: 'Pax Choir',
        aboutMessage: 'A ministering body that makes Christ known to His people and touches them through music and song ministrations.\n\nMeeting Day & Time: Every Wednesday and Friday at 6 PM, and Saturdays at 4 PM.',
        joinUrl: 'https://chat.whatsapp.com/KEZW7a2erTkE53HnUxLJLs',
      },
      { name: 'Organising and Technical Ministry (Organa)' },
      { name: 'Ushering Ministry' },
      {
        name: 'Visitation Ministry',
        aboutImage: '/Visitation.jpg',
        aboutMessage: 'We’re a family committed to visiting and spreading the love of God to Pax members in the various halls and hostels.\n\nMeeting Day & Time: Saturday at 6:30 PM\n\n“Bear one another’s burdens, and so fulfill the law of Christ.” — Galatians 6:2.',
        joinUrl: 'https://chat.whatsapp.com/Bnt6wAGqWmjLYu9RPUosRn',
      },
      { name: 'Catholic Youth Organisation (CYO)' },
      { name: 'GATEs-KSJI (Student Members of St. John International)' },
    ],
  },
  {
    title: 'Safety & Contacts',
    icon: 'fa-shield-halved',
    items: [
      { name: 'Campus Security', subtitle: '050 134 7350 / 050 134 7352', phone: '0501347350' },
      { name: 'KNUST Police', subtitle: '0322 060 357', phone: '0322060357' },
      { name: 'Emmanuel', subtitle: 'Pax Help Line · 020 715 3767', phone: '0207153767' },
      { name: 'Eugene', subtitle: 'Pax Help Line · 053 465 4904', phone: '0534654904' },
      { name: 'David', subtitle: 'Pax Help Line · 054 238 4187', phone: '0542384187' },
    ],
  },
  {
    title: 'Pax Programs',
    icon: 'fa-calendar-check',
    months: [
      {
        name: 'October 2026',
        events: [
          { name: 'Freshers Day', date: 'Sunday, 18th' },
          { name: 'Rosary Month Climax', date: 'Saturday, 31st' },
        ],
      },
      {
        name: 'November 2026',
        events: [
          { name: 'Akwaaba Night', date: 'Friday, 6th' },
          { name: 'Freshers Takeover Mass', date: 'Tuesday, 10th' },
          { name: 'Pax Fair 2.0', date: 'Sunday, 22nd' },
          { name: 'Pax Ladies and Gents Week', date: 'Sunday, 22nd to Saturday, 28th' },
        ],
      },
      {
        name: 'December 2026',
        events: [
          { name: 'Pax CleanUp', date: 'Saturday, 5th' },
          { name: 'Carols Night', date: 'Friday, 18th' },
        ],
      },
      {
        name: 'January 2027',
        events: [
          { name: 'Pax Games', date: 'Saturday, 16th' },
          { name: 'Colours of Pax / Joy In Colour', date: 'Sunday, 17th' },
          { name: 'Exams Prayer Night', date: 'Friday, 22nd' },
        ],
      },
    ],
  },
];

const importantDates = [
  {
    name: 'Matriculation',
    date: 'Friday, 13th November, 2026 to Saturday, 14th November, 2026',
  },
  {
    name: 'Mid-Semester Exams',
    date: 'Monday, 14th December, 2026 to Friday, 18th December, 2026',
  },
  {
    name: 'Christmas Break',
    date: 'Saturday, 19th December, 2026 to Sunday, 3rd January, 2027',
  },
  {
    name: 'First Semester Examinations',
    date: 'Monday, 25th January, 2027 to Friday, 12th February, 2027',
  },
];

const scheduleCards = [
  {
    heading: 'Mass for Students',
    accent: 'bg-paxGold-500 text-white',
    icon: 'fa-church',
    items: [
      { label: 'Day', time: 'Tuesday' },
      { label: 'Time', time: '6:30pm' },
      { label: 'Venue', time: 'Our Lady of the Holy Rosary Catholic Chaplaincy' },
    ],
  },
  {
    heading: 'Dawn Rosary',
    accent: 'bg-paxBlue-700 text-white',
    icon: 'fa-sun',
    items: [
      { label: 'Day', time: 'Thursday' },
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
  const [activeChapter, setActiveChapter] = useState('about');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [modal, setModal] = useState({ open: false, title: '', message: '', image: '' });

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

  const openModal = (title, message, image = '') => {
    setModal({ open: true, title, message, image });
  };

  const closeModal = () => {
    setModal((previous) => ({ ...previous, open: false }));
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/pax-aider.pdf';
    link.download = 'pax-aider.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleJoinGroup = (groupName, joinUrl) => {
    if (joinUrl) {
      window.open(joinUrl, '_blank', 'noopener,noreferrer');
      return;
    }

    openModal('WhatsApp link coming soon', `The WhatsApp invite link for ${groupName} will be added soon.`);
  };

  const chapterContent = paxAiderData.find((chapter) => chapter.id === activeChapter)?.content;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <nav id="navbar" className="fixed z-50 w-full border-b border-slate-200/80 bg-white/95 backdrop-blur-md transition-all duration-300">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex cursor-pointer items-center gap-3" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img
              src="/photo_2026-10-07_13-00-05.jpg"
              alt="IMCS Pax Romana KNUST Logo"
              className="h-12 w-12 rounded-full object-cover shadow-md ring-2 ring-[#1e40af]/20"
            />
            <div className="flex flex-col">
              <span className="text-xl font-bold leading-tight text-[#1e3a8a]">IMCS Pax Romana</span>
              <span className="text-[10px] font-semibold tracking-wider text-[#d97706]">KNUST LOCAL</span>
            </div>
          </div>

          <div className="hidden items-center space-x-8 lg:flex">
            <a href="#pax-aider" className="font-medium text-slate-600 transition-colors hover:text-[#1e40af]">Pax Aider</a>
            <a href="#communities" className="font-medium text-slate-600 transition-colors hover:text-[#1e40af]">Communities</a>
            <a href="#schedules" className="font-medium text-slate-600 transition-colors hover:text-[#1e40af]">Schedules</a>
            <a href="#communities" className="rounded-full bg-[#1e40af] px-5 py-2.5 font-semibold text-white shadow-md shadow-[#1e40af]/30 transition-all hover:-translate-y-0.5 hover:bg-[#1e3a8a]">
              Join a Sub-group
            </a>
          </div>

          <div className="flex items-center lg:hidden">
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
          <div className="absolute w-full border-t border-slate-100 bg-white shadow-lg lg:hidden">
            <div className="flex flex-col space-y-2 px-4 pb-6 pt-2">
              <a href="#pax-aider" onClick={() => setIsMobileMenuOpen(false)} className="rounded-md px-3 py-3 text-base font-medium text-slate-700 hover:bg-[#eff6ff] hover:text-[#1e40af]">Pax Aider</a>
              <a href="#communities" onClick={() => setIsMobileMenuOpen(false)} className="rounded-md px-3 py-3 text-base font-medium text-slate-700 hover:bg-[#eff6ff] hover:text-[#1e40af]">Communities</a>
              <a href="#schedules" onClick={() => setIsMobileMenuOpen(false)} className="rounded-md px-3 py-3 text-base font-medium text-slate-700 hover:bg-[#eff6ff] hover:text-[#1e40af]">Schedules</a>
            </div>
          </div>
        )}
      </nav>

      <header className="relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#1e3a8a] via-[#1e40af] to-[#1d4ed8] pt-32 pb-16 sm:pb-20 lg:pt-48 lg:pb-32">
        <div className="absolute inset-0 z-0 opacity-20">
          <svg className="absolute right-[-5%] top-[-10%] h-full w-1/2 text-white" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none">
            <polygon points="0,100 100,0 100,100" />
          </svg>
          <div className="absolute bottom-[-10%] left-[-10%] h-64 w-64 rounded-full bg-[#fbbf24] opacity-40 blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="mb-6 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl lg:text-7xl">
            Welcome Home to <br />
            <span className="bg-gradient-to-r from-[#fbbf24] to-yellow-200 bg-clip-text text-transparent">IMCS Pax Romana KNUST</span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-base font-light text-blue-100 sm:mb-10 sm:text-lg md:text-xl">
            Your spiritual family on campus. Discover your community, navigate university life, and grow in faith as a Catholic student.
          </p>
          <div className="flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
            <a href="#pax-aider" className="inline-flex w-full items-center justify-center rounded-full bg-[#f59e0b] px-6 py-4 text-base font-bold text-[#1e3a8a] shadow-lg shadow-[#f59e0b]/50 transition-all hover:-translate-y-1 hover:bg-[#fbbf24] sm:w-auto sm:px-8 sm:text-lg">
              Read Pax Aider
            </a>
            <a href="#communities" className="inline-flex w-full items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-4 text-base font-bold text-white shadow-lg backdrop-blur-sm transition-all hover:-translate-y-1 hover:bg-white/20 sm:w-auto sm:px-8 sm:text-lg">
              Join a Group
            </a>
          </div>
        </div>
      </header>

      <section id="pax-aider" className="relative bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-[#1e3a8a] md:text-4xl">Pax Aider</h2>
            <p className="mx-auto max-w-2xl text-slate-600">Your ultimate survival guide to academic, social, and spiritual life at KNUST. Read it online or download it for later.</p>
          </div>

          <div className="flex flex-col overflow-hidden rounded-3xl border border-slate-100 bg-slate-50 shadow-xl lg:min-h-[600px] lg:flex-row">
            <div className="flex w-full flex-col border-r border-slate-200 bg-white lg:w-1/3">
              <div className="flex flex-col items-stretch gap-3 border-b border-slate-100 bg-slate-50/50 p-4 sm:flex-row sm:items-center sm:justify-between sm:p-6">
                <h3 className="text-lg font-bold text-slate-800">
                  <span className="mr-2 text-[#1d4ed8]">☰</span> Contents
                </h3>
                <button type="button" onClick={handleDownload} className="flex items-center justify-center gap-2 rounded-lg bg-slate-200 px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-300 sm:shrink-0">
                  ⬇ Download Pax Aider PDF
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

            <div className="reader-scroll relative h-[55vh] min-h-[360px] max-h-[600px] w-full overflow-y-auto bg-white p-5 sm:h-[500px] sm:p-8 lg:h-auto lg:w-2/3 lg:p-10">
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

      <section id="communities" className="bg-slate-50 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center sm:mb-16">
            <span className="text-sm font-bold uppercase tracking-wider text-[#d97706]">Get Involved</span>
            <h2 className="mt-2 mb-4 text-3xl font-bold text-[#1e3a8a] md:text-4xl">Find Your Community</h2>
            <p className="mx-auto max-w-2xl text-slate-600">Explore Pax subgroups and connect with the community.</p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {communityCards.map((card) => (
              <div key={card.title} className={`overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-md transition-shadow hover:shadow-xl ${card.months ? 'md:col-span-2' : ''}`}>
                <div className="flex items-center gap-4 bg-[#1e40af] p-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white/20 text-xl text-white">
                    {card.title === 'Sub-Groups' || card.title === 'Pax Programs' ? (
                      <Image src="/photo_2026-10-07_13-00-05.jpg" width={48} height={48} alt="" className="h-12 w-12 bg-white object-contain" />
                    ) : card.title === 'Safety & Contacts' ? (
                      <Image src="/call.png" width={32} height={32} alt="" className="h-8 w-8 object-contain" />
                    ) : (
                      <>
                        {card.icon === 'fa-music' && '♫'}
                        {card.icon === 'fa-hands-praying' && '✝'}
                        {card.icon === 'fa-graduation-cap' && '🎓'}
                        {card.icon === 'fa-building' && '🏢'}
                      </>
                    )}
                  </div>
                  <h3 className="text-2xl font-bold text-white">{card.title}</h3>
                </div>

                {card.months ? (
                  <div className="grid gap-6 p-5 sm:grid-cols-2 sm:p-6 xl:grid-cols-4">
                    {card.months.map((month) => (
                      <div key={month.name} className="min-w-0">
                        <h4 className="mb-4 border-b border-slate-200 pb-2 text-lg font-bold text-[#1e3a8a]">{month.name}</h4>
                        <ul className="space-y-4">
                          {month.events.map((event) => (
                            <li key={event.name} className="border-l-2 border-[#f59e0b] pl-3">
                              <p className="break-words font-semibold text-slate-800">{event.name}</p>
                              <p className="mt-1 text-sm leading-relaxed text-slate-500">{event.date}</p>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-4 p-6">
                    {card.items.map((item) => (
                      <div key={item.name} className="flex items-start justify-between gap-3 rounded-xl p-3 transition-colors hover:bg-slate-50">
                        <div className="min-w-0">
                          <h4 className="break-words font-bold text-slate-800">{item.name}</h4>
                          {item.subtitle && <p className="text-sm text-slate-500">{item.subtitle}</p>}
                        </div>
                        {card.title === 'Sub-Groups' ? (
                          <div className="flex shrink-0 items-center gap-2">
                            <button type="button" onClick={() => openModal(item.name, item.aboutMessage || `Information about ${item.name} will be added soon.`, item.aboutImage)} className="rounded-lg border border-slate-300 bg-white px-3 py-2 font-semibold text-slate-700 transition-colors hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1e40af]">
                              About
                            </button>
                            <button type="button" onClick={() => handleJoinGroup(item.action || item.name, item.joinUrl)} className="rounded-lg bg-[#25D366] px-4 py-2 font-semibold text-white shadow-sm transition-colors hover:bg-[#1da851] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1e40af]">
                              Join
                            </button>
                          </div>
                        ) : item.phone ? (
                            <a href={`tel:${item.phone}`} aria-label={`Call ${item.name} at ${item.phone}`} className="rounded-lg bg-[#25D366] px-4 py-2 text-center font-semibold text-white shadow-sm transition-colors hover:bg-[#1da851] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1e40af]">
                              Call
                            </a>
                          ) : item.action ? (
                            <button type="button" onClick={() => handleJoinGroup(item.action)} className="rounded-lg bg-[#25D366] px-4 py-2 font-semibold text-white shadow-sm transition-colors hover:bg-[#1da851] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1e40af]">
                              Join
                            </button>
                          ) : null}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="important-dates" className="bg-[#153e39] py-16 text-white sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-3xl">
            <span className="text-sm font-bold uppercase tracking-wider text-[#fbbf24]">Semester Calendar</span>
            <h2 className="mt-2 text-3xl font-extrabold leading-tight uppercase sm:text-4xl">IMPORTANT DATES TO TAKE NOTE OF</h2>
          </div>
          <ul className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {importantDates.map((date) => (
              <li key={date.name} className="min-w-0 border-t border-white/30 pt-5">
                <h3 className="mb-3 text-lg font-bold text-[#fbbf24]">{date.name}</h3>
                <p className="text-sm leading-relaxed text-emerald-50">{date.date}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="schedules" className="relative overflow-hidden bg-white py-24">
        <div className="absolute -left-10 bottom-0 h-40 w-40 rounded-full bg-[#dbeafe] opacity-50 blur-3xl" />
        <div className="absolute -right-10 top-0 mt-10 h-40 w-40 rounded-full bg-[#fef3c7] opacity-50 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-[#1e3a8a] md:text-4xl">Schedules</h2>
            <p className="mx-auto max-w-2xl text-slate-600">Join us at the Catholic Chaplaincy for spiritual nourishment and community gatherings.</p>
            <a href="https://maps.app.goo.gl/U1xpPAc5RuCJACDp7" target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-[#1e40af] px-6 py-3 font-semibold text-white shadow-md transition-colors hover:bg-[#1e3a8a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1e40af]">
              <MapPin aria-hidden="true" className="h-5 w-5" />
              Find the Church
            </a>
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
              {modal.image ? (
                <Image src={modal.image} alt={`${modal.title} emblem`} width={160} height={160} className="mx-auto mb-4 h-32 w-32 rounded-2xl border border-slate-200 bg-white object-contain p-1" />
              ) : (
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#dbeafe] text-2xl text-[#1d4ed8]">
                  ℹ
                </div>
              )}
              <h3 className="mb-2 text-lg font-bold text-slate-800">{modal.title}</h3>
              <p className="mb-6 whitespace-pre-line text-slate-600">{modal.message}</p>
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
