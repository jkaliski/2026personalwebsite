import type {SiteContent} from '@/types/site'

export const fallbackContent: SiteContent = {
  site: {
    title: 'Jarosław Kaliski — Pianist, Répétiteur, Harpsichordist',
    description:
      'Official site of Jarosław Kaliski — pianist, operarépétiteur, harpsichordist, and Assistant Professor of Musical Performance in Opera at Stockholm University of the Arts.',
    logoText: 'Jarosław Kaliski',
    logoSuffix: 'pianist & répétiteur',
    email: 'jaroslaw.kaliski@gmail.com',
    phone: '+46 76 113 99 02',
    basedIn: 'Stockholm, Sweden',
    faculty: 'Stockholm University of the Arts',
    representation: 'Direct enquiries welcome',
    links: [
      {label: 'jaroslawkaliski.com', href: 'https://www.jaroslawkaliski.com'},
      {label: 'Instagram', href: 'https://www.instagram.com/jaroslawkaliski/'},
      {label: 'Vimeo', href: 'https://vimeo.com/user109769754'},
      {label: 'Lyric LAB', href: 'https://lyriclab.se'},
    ],
  },
  home: {
    nav: [
      {label: 'Biography', href: '#biography'},
      {label: 'Upcoming', href: '#upcoming'},
      {label: 'Productions', href: '#productions'},
      {label: 'Teaching', href: '#teaching'},
      {label: 'Coaching', href: '#coaching'},
      {label: 'Lyric LAB', href: '#lyric-lab'},
      {label: 'Contact', href: '#contact'},
    ],
    hero: {
      firstName: 'Jarosław',
      lastName: 'Kaliski',
      lede:
        'Pianist, operarépétiteur, harpsichordist and fortepianist, working at the intersection of the lied, the baroque stage, and the modern opera house. Assistant Professor of Musical Performance in Opera at Stockholm University of the Arts.',
      meta: [
        {label: 'Based in', value: 'Stockholm, Sweden'},
        {label: 'Practice', value: 'Opera · Lied · Continuo · Coaching'},
        {label: 'Instruments', value: 'Piano · Harpsichord · Fortepiano'},
        {label: 'Languages', value: 'PL · SV · EN · DE · IT · FR'},
        {label: 'Faculty', value: 'Stockholm University of the Arts (SKH)'},
      ],
      image: {
        fallbackSrc: '/images/portrait-hero.jpg',
        alt: 'Jarosław Kaliski at the grand piano',
        caption: 'Photo© · Radek Rzepecki',
      },
    },
    biography: {
      eyebrow: '§ I — Biography',
      title: 'A musician of many rooms.',
      kicker:
        'From the Polish piano tradition to the opera stage, by way of the German lied and the baroque continuo bench.',
      image: {
        fallbackSrc: '/images/portrait-harpsichord.jpg',
        alt: 'Kaliski at the harpsichord',
        caption: 'At the Italian harpsichord — Thielska Galleriet i Stockholm.',
      },
      body: [
        'Trained first as a concert pianist at the F. Nowowiejski Academy in Bydgoszcz under Prof. Katarzyna Popowa-Zydroń — whose Chopin lineage he still carries into the rehearsal room — Jarosław Kaliski moved to Stockholm in 2009 for postgraduate studies at the Royal College of Music, and then to Detmold, Germany, where he completed a Master in <em>Liedgestaltung</em> with distinction under Prof. Manuel Lange.',
        'The through-line is language. Whether on the modern grand, the fortepiano, or the harpsichord, his work centres on how a text sings: the phonetic weight of a consonant, the breath a diphthong asks for, the historical ornament that turns a declamation into music. He has coached German for Marlis Petersen’s Marietta in Mariusz Treliński’s <em>Die tote Stadt</em>, realised continuo for Jean-Christophe Spinosi’s <em>La Cenerentola</em> at the Royal Swedish Opera, and tuned and played harpsichords through productions from Lully to Händel to Mozart.',
        'Since 2021 he has been Assistant Professor of Musical Performance in Opera at Stockholm University of the Arts, where he teaches German Lyric Diction, co-leads the annual Early Music Seminar, and mentors young singers through their first complete operatic roles. His pedagogical research — the online course series <em>Lyric LAB</em> — is now used by over a hundred Scandinavian singers as part of the standard curriculum in both Italian, French and German diction.',
        'In summer 2026 he joins the musical team of Confidencen Opera & Music Festival’s <em>Female Edition</em> — Francesca Caccini’s <em>La liberazione di Ruggiero dall’isola d’Alcina</em>, directed by Jacopo Spirei under the musical direction of Peter Spissky.',
      ],
    },
    upcoming: {
      eyebrow: '§ II — Upcoming',
      title: 'Summer 2026 · La Liberazione',
      kicker:
        'Francesca Caccini’s 1625 opera opens Confidencen’s Female Edition festival — premiering 30 July 2026 at Ulriksdals slottsteater.',
      featured: {
        eyebrow: 'Confidencen Opera & Music Festival · Female Edition',
        title: 'La liberazione di Ruggiero dall’isola d’Alcina',
        subtitle: 'Francesca Caccini (1625) · libretto by Ferdinando Saracinelli',
        body: [
          'A tale of power, magic and seductive illusion — the knight Ruggiero held on Alcina’s island, where reality bends to her will, until the sorceress Melissa comes, disguised as his old mentor, to break the spell. A duel between two formidable women; an allegory of liberation that leaves a long shadow.',
          'The production closes with a composed horse ballet for twenty-four pairs, staged inside Confidencen — a theatre built in the 1670s as a royal riding house. A co-production with <em>Den Andra Operan</em>.',
        ],
        quote:
          'La Liberazione is much more than a traditional story of liberation. What fascinates me is the intense struggle between Alcina and Melissa — two women who shape reality in wholly different ways.',
        quoteAttribution: 'Jacopo Spirei, director',
        credits: [
          {name: 'Ann Hallenberg', role: 'Alcina'},
          {name: 'Kristina Hammarström', role: 'Melissa'},
          {name: 'Martin Vanberg', role: 'Ruggiero'},
          {name: 'Minna Tägil', role: 'Sirena/Damigella'},
          {name: 'Lovisa Huledal', role: 'Nunzia'},
          {name: 'Joseph Mossop', role: 'Vistola / Pastore'},
        ],
        creative: [
          'Peter Spissky, musical direction',
          'Jacopo Spirei, direction',
          'Bente Rolandsdotter, set & costume',
          'Giuseppe di Iorio, lighting',
          'Holger Schmitt-Hallenberg, musicology',
        ],
        dates:
          '30 July (Premiere) · 1, 2, 4, 6, 8, 9, 11, 13, 15, 16 August 2026 · sung in Italian · Swedish surtitles · ca. 2 hrs incl. interval',
        personalRole: 'Répétiteur · continuo (harpsichord & fortepiano)',
        link: {label: 'confidencen.se', href: 'https://confidencen.se'},
      },
    },
    productions: {
      eyebrow: '§ III — Productions',
      title: 'Selected productions.',
      kicker:
        'As répétiteur, continuist, coach and assistant conductor — Royal Swedish Opera, Drottningholm, Confidencen, Warsaw National Opera, and beyond.',
      items: [
        {
          year: '2026',
          title: 'La Liberazione di Ruggiero dall’isola d’Alcina · F. Caccini',
          meta: 'Dir. Jacopo Spirei · Cond. Peter Spissky · with Hallenberg, Hammarström, Vanberg.',
          roles: ['Répétiteur', 'Continuo'],
          venue: 'Confidencen · Ulriksdal',
        },
        {
          year: '2026',
          title: 'Olympiaden · A. Vivaldi (L’Olimpiade)',
          meta:
            'Dir. Charlotte Engelkes · Mus. dir. Peter Spiššký. Substitute harpsichordist and répétiteur for the musical preparation and continuo of Vivaldi’s pasticcio — sung in Swedish.',
          roles: ['Substitute Répétiteur', 'Harpsichord'],
          venue: 'Folkoperan · Stockholm',
        },
        {
          year: '2025',
          title: 'Don Giovanni · W.A. Mozart',
          meta:
            'Dir. Deda Cristina Colonna · Mus. dir. Peter Spissky. Musical preparation of the entire cast; fortepiano continuo in performance.',
          roles: ['Répétiteur', 'Fortepiano'],
          venue: 'Confidencen · Ulriksdal',
        },
        {
          year: '2024',
          title: 'Armide · J.B. Lully',
          meta: 'Dir. / Cond. Francesco Corti — harpsichord tuning for his staging of the tragédie en musique.',
          roles: ['Harpsichord Tuning'],
          venue: 'Drottningholm Court Theatre',
        },
        {
          year: '2024',
          title: 'Alcina · G.F. Händel',
          meta: 'Substitute répétiteur and harpsichordist in Peter Spissky’s summer staging of Händel’s opera seria.',
          roles: ['Répétiteur', 'Harpsichord'],
          venue: 'Confidencen · Ulriksdal',
        },
        {
          year: '2024',
          title: '12th International Moniuszko Competition · Concert Project',
          meta:
            'Phonetic and musical preparation of Nordic vocal repertoire — Sibelius art songs, Swedish-to-Polish translations, individual coaching for Opera Academy singers.',
          roles: ['Language Coach'],
          venue: 'Teatr Wielki · Warsaw',
        },
        {
          year: '2022',
          title: 'Il Giustino · A. Vivaldi',
          meta: 'Substitute répétiteur.',
          roles: ['Répétiteur'],
          venue: 'Drottningholm Court Theatre',
        },
        {
          year: '2019–20',
          title: 'Short Stories · Åslund / Hulpers / Tarrodi',
          meta:
            'Dir. Natalie Ringler · Cond. James Grossmith. Newly commissioned Swedish music by women composers; musical preparation of all soloists.',
          roles: ['Répétiteur', 'Assistant Conductor'],
          venue: 'Royal Swedish Opera',
        },
        {
          year: '2018',
          title: 'Chorus · season productions',
          meta:
            'Tristessa · Aida · Der Rosenkavalier · Tosca (Children’s Chorus) · King Roger (Polish coaching) · Elektra · Eugene Onegin · The Merry Widow · Fedora.',
          roles: ['Assistant Chorus Master'],
          venue: 'Royal Swedish Opera',
        },
        {
          year: '2017',
          title: 'La Cenerentola · G. Rossini',
          meta:
            'Dir. Lindy Hume · Cond. Jean-Christophe Spinosi. Full-cast coaching; fortepiano continuo for recitatives in performance.',
          roles: ['Répétiteur', 'Fortepiano'],
          venue: 'Royal Swedish Opera',
        },
        {
          year: '2017',
          title: 'Die tote Stadt · E.W. Korngold',
          meta:
            'Dir. Mariusz Treliński · Cond. Lothar Koenigs. Principal vocal coach for Marlis Petersen (Marietta); German coaching for cast & chorus.',
          roles: ['Vocal & Language Coach'],
          venue: 'Teatr Wielki · Warsaw',
        },
        {
          year: '2016',
          title: 'Götterdämmerung · R. Wagner',
          meta: 'Dir. Staffan Valdemar Holm · Cond. Marco Letonja. With Nina Stemme, Katarina Dalayman, Falck Struckmann, Lars Cleveman.',
          roles: ['Répétiteur'],
          venue: 'Royal Swedish Opera',
        },
        {
          year: '2016',
          title: 'Die Zauberflöte · W.A. Mozart',
          meta: 'Komische Oper Berlin production · Dir. Barrie Kosky. Chorus and two complete casts of soloists; German coaching and stylistic guidance.',
          roles: ['Vocal & Language Coach'],
          venue: 'Teatr Wielki · Warsaw',
        },
        {
          year: '2015–16',
          title: 'Le nozze di Figaro · W.A. Mozart',
          meta: 'Dir. Olle Anders Tandberg · Cond. Lawrence Renes. Basso continuo on harpsichord in performance.',
          roles: ['Répétiteur', 'Harpsichord'],
          venue: 'Royal Swedish Opera',
        },
        {
          year: '2014',
          title: 'Lohengrin · R. Wagner',
          meta: 'Dir. Anthony McDonald · Cond. Stefan Soltesz. Primary German and vocal coach for soloists and chorus.',
          roles: ['Vocal & Language Coach'],
          venue: 'Teatr Wielki · Warsaw',
        },
      ],
    },
    appointments: {
      eyebrow: '§ IV — Positions',
      title: 'Institutional practice.',
      kicker: 'Current and recent academic and theatrical appointments.',
      items: [
        {
          label: 'Current · 2021 —',
          title: 'Assistant Professor of Musical Performance in Opera',
          institution: 'Stockholm University of the Arts (SKH) · Uniarts Opera',
          span: 'Tenured fixed-term · 100%',
          body: [
            'Primary responsibility for the musical preparation of singers in the one-year Master’s programme in Opera, supporting their individual artistic projects and their transition into professional opera.',
          ],
          bullets: [
            'Teaching German Lyric Diction — IPA, grammar, historical context, repertoire.',
            'Co-leading the annual Early Music Seminar on French and Italian baroque style.',
            'Coaching for Advanced Role Interpretation and Dramatic Expression of the Voice.',
            'Jury member and accompanist for BA/MA admissions.',
          ],
        },
        {
          label: 'Summer · 2024 —',
          title: 'Operarépétiteur · Harpsichordist · Fortepianist',
          institution: 'Confidencen Ulriksdals Slottsteater',
          span: 'Opera production',
          body: [
            'Working under Music Director Peter Spissky across the summer festival — musical preparation of casts, continuo realisation on period instruments, and musical assistantship in staged productions.',
          ],
        },
        {
          label: 'Current · 2022 —',
          title: 'Guest Répétiteur & Harpsichord Tuner',
          institution: 'Drottningholm Court Theatre',
          span: 'Per production',
          body: [
            'Répétiteur for selected productions, harpsichord tuning for period-instrument stagings, and audition accompaniment for prospective soloists.',
          ],
        },
        {
          label: 'Current · 2014 —',
          title: 'Guest Vocal & Language Coach',
          institution: 'Teatr Wielki — Polish National Opera, Warsaw',
          span: 'Per production',
          body: [
            'Specialising in German repertoire — musical preparation and diction coaching for international productions and the Opera Academy’s concert projects.',
          ],
        },
        {
          label: 'Past · 2016 — Dec 2025',
          title: 'Vocal Coach & Pianist',
          institution: 'Birkagården Folkhögskola · Classical Music Department, Stockholm',
          span: 'Nearly a decade',
          body: [
            'Almost ten years of musical direction for the school’s annual stagings — from Monteverdi’s Poppea and Cavalli’s La Calisto to Britten’s Midsummer Night’s Dream — along with Art Song seminars, opera ensemble, and diction courses.',
          ],
        },
        {
          label: 'Past · 2015 — 2020',
          title: 'Operarépétiteur · Assistant Conductor',
          institution: 'The Royal Swedish Opera (Kungliga Operan), Stockholm',
          span: 'Guest',
          body: [
            'Coaching principal singers, accompanying and conducting stage and music rehearsals, and keyboard continuo during performances. Additional year as Assistant Chorus Master under James Grossmith.',
          ],
        },
      ],
    },
    coaching: {
      eyebrow: '§ V — Coaching on camera',
      title: 'In the room.',
      kicker:
        'Selected documentation from the coaching studio — working sessions with singers on diction, style, and interpretation.',
      videos: [
        {
          title: 'German Lyric Diction — a lesson from Lyric LAB',
          description: 'Example lesson from the online course developed at SKH Opera',
          tag: 'Course · Pedagogy · DE',
          vimeoUrl: 'https://player.vimeo.com/video/1155576919?h=de24b990e5&title=0&byline=0&portrait=0&color=d6a880',
        },
        {
          title: 'Händel · Arresta Aminta e Filide',
          description: 'Clarice Granado, soprano · JK at the harpsichord',
          tag: 'Baroque · IT',
          vimeoUrl: 'https://player.vimeo.com/video/1173724748?h=886ddafada&title=0&byline=0&portrait=0&color=d6a880',
        },
        {
          title: 'Händel · Lascia Amor',
          description: 'Eric Ander, bass · JK at the harpsichord',
          tag: 'Baroque · IT',
          vimeoUrl: 'https://player.vimeo.com/video/1171561318?h=ffb40a6256&title=0&byline=0&portrait=0&color=d6a880',
        },
        {
          title: 'Continuing archive',
          description: 'Quignard · Mozart · Puccini · and others',
          tag: 'Instagram · Vimeo',
          archiveLinks: [
            {label: 'Instagram', href: 'https://www.instagram.com/jaroslawkaliski/'},
            {label: 'Vimeo', href: 'https://vimeo.com/user109769754'},
          ],
        },
      ],
    },
    lyricLab: {
      eyebrow: '§ VI — Pedagogy',
      title: 'Lyric LAB.',
      kicker:
        'An online lyric-diction curriculum for Swedish singers — part of the course material at SKH Opera. Interactive modules, native-speaker audio, IPA, and the repertoire to practise on.',
      courses: [
        {
          order: 'I.',
          title: 'Italian',
          launch: 'Launched 2017 · 100+ students',
          body: 'Six modules from Latin roots through seven-vowel modifications, gemination, syllabification, and the poetic meters of Mozart’s recitatives. Developed with Mia Rosetti.',
        },
        {
          order: 'II.',
          title: 'French',
          launch: 'Launched 2019',
          body: 'Nasal vowels, the e muet, liaison and the particular architecture of French mélodie — developed with Swedish-French baritone Eric Schoeffler.',
        },
        {
          order: 'III.',
          title: 'German',
          launch: 'Launched 2024 · SKH Opera curriculum',
          body: 'Seven modules from the Germanic roots of Hochdeutsch through Auslautverhärtung, umlauts, and stage pronunciation. Developed with soprano Elisabeth Meyer.',
        },
      ],
      testimonial: {
        label: 'Student · Norwegian Academy of Music',
        quote:
          'The course demonstrates clearly and concretely how to physically form the different vowel and consonant sounds. I’ve had several aha moments during the course and got answers to things I didn’t even know I was wondering about.',
        attribution: 'Student testimonial, lyriclab.se',
      },
      link: {label: 'Visit lyriclab.se', href: 'https://lyriclab.se'},
    },
    repertoire: {
      eyebrow: '§ VII — Repertoire',
      title: 'Roles in the coaching room.',
      kicker:
        'A sampling of roles studied and coached with students and professionals — on the piano, the harpsichord, and the fortepiano.',
      groups: [
        {
          title: 'Mozart',
          items: ['Susanna · Le nozze di Figaro', 'Figaro · Le nozze di Figaro', 'Pamina · Die Zauberflöte', 'Donna Elvira · Don Giovanni'],
        },
        {
          title: 'Verdi · Rossini · Donizetti',
          items: ['Gilda · Rigoletto', 'Violetta · La traviata', 'Rosina · Il barbiere di Siviglia', 'Adele · Die Fledermaus'],
        },
        {
          title: 'Britten & beyond',
          items: ['Oberon · A Midsummer Night’s Dream', 'Wagner · Lohengrin, Götterdämmerung', 'Korngold · Die tote Stadt', 'Szymanowski · King Roger'],
        },
        {
          title: 'Art Song · Liederabend',
          items: ['Schubert · Winterreise', 'Schumann · Dichterliebe', 'R. Strauss · Brentano Lieder, Vier letzte Lieder', 'Sibelius · Nordic art song'],
        },
        {
          title: 'Baroque & Early Opera',
          items: ['Monteverdi · L’Orfeo, L’incoronazione di Poppea', 'Cavalli · La Calisto', 'Purcell · Dido & Aeneas', 'Händel · Alcina, Orlando', 'Lully · Armide'],
        },
        {
          title: '20th-Century & New Music',
          items: ['Bohlin · Tristessa', 'Menotti · The Medium, The Consul', 'Åslund / Hulpers / Tarrodi · Short Stories', 'Vaughan Williams · Riders to the Sea'],
        },
      ],
    },
    education: {
      eyebrow: '§ VIII — Education & Honours',
      title: 'Training & distinctions.',
      items: [
        {
          year: '2022',
          title: 'Teaching & Development in Arts Education (HPU)',
          institution: 'Stockholm University of the Arts · 7.5 ECTS · Grade: Pass',
          detail: 'Higher-education pedagogical training as required by SUHF.',
        },
        {
          year: '2011–2013',
          title: 'Master of Music · Liedgestaltung, Piano',
          institution: 'Hochschule für Musik Detmold, Germany · Grade: Very Good (A · 1.0) with Honours',
          detail:
            'Art Song with Prof. Manuel Lange. German diction with Christian Kleinert. Italian opera and diction with Prof. Fabio Vettraino. Accompanist in masterclasses with András Schiff and Thomas Quasthoff; Hugo Wolf Lied Competition, Stuttgart.',
        },
        {
          year: '2010–2012',
          title: 'Master in Music Performance · Vocal Coach, Piano',
          institution: 'Royal College of Music, Stockholm',
          detail:
            'Vocal Coach studies with Matti Hirvonen. Orchestral conducting with Mikael Bartosch. Harpsichord & continuo with Ulf Söderberg. Amanuensis on opera projects.',
        },
        {
          year: '2009–2011',
          title: 'Master in Music Performance · Piano, Chamber Music',
          institution: 'Royal College of Music, Stockholm',
          detail:
            'Postgraduate piano studies with Prof. Staffan Scheja. Lecture-recital on Chopin Mazurkas at the 2010 anniversary festival, Polish Cultural Institute.',
        },
        {
          year: '2002–2007',
          title: 'Bachelor & Master of Fine Arts · Piano Performance',
          institution: 'F. Nowowiejski Music Academy, Bydgoszcz, Poland · 24/25 with honours',
          detail:
            'Piano class of Prof. Katarzyna Popowa-Zydroń, chair of the F. Chopin International Piano Competition. Master’s thesis on Ligeti’s Études for Piano.',
        },
      ],
      awards: [
        {year: '2018', title: 'The Royal Opera House in Stockholm — Scholarship'},
        {year: '2012', title: 'Anders Sandrews Stiftelse — substantial scholarship for Master studies abroad'},
        {year: '2011', title: 'Gålöstiftelsen — Master studies at HfM Detmold'},
        {year: '2010', title: 'Helge Ax:son Johnsons stiftelse — Chopin 200th Anniversary project'},
        {year: '2010', title: 'Accompanist’s Scholarship · Royal Academy of Music, Stockholm'},
        {year: '2010', title: 'Pianist’s Scholarship · Svenska Frimurare Orden'},
        {year: '2009', title: 'Accompanist’s Scholarship · Royal Academy of Music, Stockholm'},
        {year: '2006', title: 'Polish Ministry of Culture — exceptional study record'},
        {year: '2005', title: 'Performance Prize · Bremen European Piano Competition'},
        {year: '2000', title: 'Polish Ministry of Culture — outstanding achievements in piano'},
      ],
      languages: [
        {name: 'Polish', level: 'Native', value: 5},
        {name: 'Swedish', level: 'Fluent', value: 5},
        {name: 'English', level: 'Fluent', value: 5},
        {name: 'German', level: 'Fluent', value: 5},
        {name: 'Italian', level: 'Working', value: 4},
        {name: 'French', level: 'Good', value: 3},
      ],
    },
    contact: {
      eyebrow: '§ IX — Contact',
      title: 'In touch.',
      kicker: 'For concert engagements, coaching, productions, and Lyric LAB enquiries.',
      image: {
        fallbackSrc: '/images/portrait-headshot.jpg',
        alt: 'Portrait of Jarosław Kaliski',
        caption: 'Jarosław Kaliski — Stockholm, 2026',
      },
    },
  },
}
