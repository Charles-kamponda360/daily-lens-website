/* ===== The Daily Lens - article data =====
   To add a story: copy one block, give it a new unique id, drop the image into images/news/.
   category  = main category (key from CATEGORIES)
   also      = other categories the story should appear in (optional)
   top       = shows in the hero slider
   featured  = shows in the Featured News section
   popular   = shows in the Popular News list                                          */

const CATEGORIES = {
  politics: "Politics",
  national: "National News",
  local: "Local News",
  international: "International",
  sports: "Sports",
  business: "Business",
  technology: "Technology",
  education: "Education"
};

const CATEGORY_INFO = {
  politics: "Government, parliament and national leadership.",
  national: "Stories that matter to Malawians across the country.",
  business: "Money, markets, sponsorship and the economy.",
  technology: "Digital tools, AI and innovation in education and government.",
  local: "Stories from our communities in Blantyre and across Malawi.",
  international: "Major stories from around the world.",
  sports: "Football, athletics and community sport.",
  education: "Schools, universities and learning."
};

const REPORTERS = ["Charity Ndhlovu", "Verana Likupe"];

const ARTICLES = [
  {
    id: 1, category: "education", also: ["local", "technology"], top: true,
    title: "MUBAS Introduces Virtual Classes",
    date: "2026-10-21", author: REPORTERS[0], image: "images/news/mubas.jpg",
    excerpt: "Students are adapting to virtual classes introduced after the August 2026 double intake.",
    content: [
      "Students at MUBAS are adapting to the introduction of virtual classes. The new system was introduced following the August 2026 double intake.",
      "This introduction of virtual classes is intended to help the university accommodate the increased number of students. However, the arrangement has raised concerns among students, particularly those who struggle with internet connectivity and the cost of mobile data."
    ]
  },
  {
    id: 2, category: "sports", also: ["business"], top: true,
    title: "SWAM Secures K10 Million",
    date: "2026-10-21", author: REPORTERS[1], image: "images/news/swam.jpg",
    excerpt: "Mighty Wanderers has donated K10 million to the Sports Writers Association of Malawi.",
    content: [
      "The Sports Writers Association of Malawi (SWAM) has secured a K10 million donation from Mighty Wanderers Football Club ahead of its annual general meeting scheduled for 13 to 15 November in Salima.",
      "Wanderers President Thomson Mpinganjira has contributed half of the money, while the rest has come from the club."
    ]
  },
  {
    id: 3, category: "politics", also: ["national", "technology"],
    title: "Parliamentarians Urged to Embrace Artificial Intelligence",
    date: "2026-10-19", author: REPORTERS[0], image: "images/news/parliament.jpg",
    excerpt: "Lawmakers are being encouraged to use AI to serve citizens better.",
    content: [
      "Parliamentarians have been urged to embrace the use of Artificial Intelligence (AI) to effectively serve Malawians better."
    ]
  },
  {
    id: 4, category: "sports", also: ["local"],
    title: "Ghandi Forum Hails Football Tournament for Peace",
    date: "2026-10-19", author: REPORTERS[1], image: "images/news/football.jpg",
    excerpt: "The forum says the tournament promotes harmony and togetherness among communities.",
    content: [
      "The Ghandi Forum has hailed its Football Tournament for Peace as an important initiative in promoting harmony, cohesion and togetherness among communities."
    ]
  },
  {
    id: 5, category: "local", also: ["national"],
    title: "CCAP Blantyre Synod Congregation Launches Five-Year Strategic Plan",
    date: "2026-10-18", author: REPORTERS[0], image: "images/news/ccap.jpg",
    excerpt: "St. Michael and All Angels has a new plan to guide its work until September 2031.",
    content: [
      "St. Michael and All Angels of the CCAP Blantyre Synod has launched a five-year strategic plan that will guide its activities until September 2031."
    ]
  },
  {
    id: 6, category: "politics", also: ["national"], top: true, featured: true,
    title: "Namalomba Praises DPP for Allowing Arrest of Suspected Corruption Figures",
    date: "2026-10-20", author: REPORTERS[1], image: "images/news/namalomba.jpg",
    excerpt: "The Minister of Information says the DPP has shown true leadership by not protecting suspects.",
    content: [
      "Minister of Information Shadric Namalomba has praised the Democratic Progressive Party (DPP) for demonstrating what he described as true leadership by refusing to protect individuals suspected of corruption.",
      "Speaking to the Malawi Broadcasting Corporation (MBC), Namalomba said Malawians had witnessed the arrest of Collins Magalasi, a key figure in the team that unveiled the DPP manifesto ahead of the September 16 elections last year.",
      "He said the arrest demonstrated that no one was above the law under the DPP administration. Namalomba's remarks follow the circulation of CCTV footage allegedly showing Magalasi with unidentified individuals carrying suitcases believed to contain money from a bank."
    ]
  },
  {
    id: 7, category: "sports", also: ["business"], top: true, featured: true,
    title: "Scorchers Set New Record With K49.4 Million Gate Revenue",
    date: "2026-10-17", author: REPORTERS[0], image: "images/news/scorchers.jpg",
    excerpt: "The 2-0 win over Zimbabwe produced the highest gate revenue for a women's national team match.",
    content: [
      "Malawi's national women's football team, the Scorchers, have set a new record after their 2–0 victory over Zimbabwe's Mighty Warriors on Friday generated K49.4 million in gate revenue at Bingu National Stadium in Lilongwe.",
      "Football Association of Malawi (FAM) Communications Officer Collins Nsunza said the amount was the highest gate revenue generated by a women's national team match since Malawi made its international debut in 2002.",
      "Nsunza said the milestone marked a significant shift for women's football in Malawi. Historically, women's football matches in Malawi have been played with free entry but have often attracted relatively small crowds."
    ]
  },
  {
    id: 8, category: "education", also: ["national"], featured: true,
    title: "Minister Challenges Universities to Produce Graduates Fit for Purpose",
    date: "2026-10-20", author: REPORTERS[1], image: "images/news/unicaf.jpg",
    excerpt: "Education Minister Bright Msaka says graduates must have skills relevant to Malawi's development.",
    content: [
      "Minister of Education, Science and Technology Bright Msaka has challenged institutions of higher learning to produce graduates with relevant skills and knowledge to contribute to Malawi's development.",
      "Msaka made the remarks in Lilongwe during the seventh graduation ceremony of UNICAF University, held at the Bingu International Convention Centre (BICC).",
      "He said Malawi's National Education Sector Investment Plan for 2020–2030 prioritises access to education, equity, quality and relevance as key areas for transforming the education sector.",
      "Msaka emphasised that higher education should not only focus on increasing the number of graduates but also on producing individuals with the knowledge, skills, ethical values and innovative abilities needed to meet Malawi's needs and compete in the global economy.",
      "The ceremony saw students graduate with bachelor's and master's degrees under the theme, “Relevant Education for a Changing World.”"
    ]
  },
  {
    id: 9, category: "international", also: ["politics"], top: true, popular: true,
    title: "Trump Announces Deal for Russian Diesel as Zelensky Criticises 'Gift to Putin'",
    date: "2026-10-20", author: REPORTERS[0], image: "images/news/trump.jpg",
    excerpt: "Ukraine's president says the deal is an investment in a war that must be ended.",
    content: [
      "President Trump says he has reached an agreement with Russian president Vladimir Putin allowing Moscow to “immediately release” diesel into the global market.",
      "Ukraine's President Volodymyr Zelensky has condemned Donald Trump's announcement of a deal to import Russian diesel into the US.",
      "Zelensky called it a gift to Russian President Vladimir Putin that amounts to “an investment in a war that must be ended, not prolonged”, a position quickly backed by Ukraine's European allies.",
      "Trump said Putin had agreed to release 300,000 tonnes of diesel immediately “to the American and global marketplace” followed by 500,000 tonnes in November and a further one million after that.",
      "It is understood that the US Treasury is suspending sanctions on Russian diesel exports until 7 April as part of the deal, but other assets like those in American banks are still frozen."
    ]
  },
  {
    id: 10, category: "sports", also: ["international", "business"], popular: true,
    title: "Manchester City Found Guilty of Financial Rule Breaches",
    date: "2026-09-29", author: REPORTERS[1], image: "images/news/mancity.jpg",
    excerpt: "The Premier League says the club breached financial rules between 2009–10 and 2017–18.",
    content: [
      "The Premier League has confirmed that Manchester City have been found guilty of breaching financial rules between the 2009–10 and 2017–18 seasons.",
      "An independent Commission found that the club had entered into what it described as “sham contracts” with several commercial partners. These agreements were allegedly used to increase the club's reported income and reduce its costs unfairly.",
      "The Commission also found Manchester City guilty of most of the charges relating to the club's failure to cooperate with the investigation. However, the exact number of charges involved was not disclosed."
    ]
  },
  {
    id: 11, category: "education", also: ["international"], popular: true,
    title: "South Africa to Introduce New System for Ranking Provincial Education Performance",
    date: "2026-10-19", author: REPORTERS[0], image: "images/news/gwarube.jpg",
    excerpt: "Provinces will be judged on more than matric pass rates, says Minister Siviwe Gwarube.",
    content: [
      "South Africa's Basic Education Minister, Siviwe Gwarube, says provincial education performance will now be assessed using a broader range of indicators beyond matric pass rates. Gwarube says the new system will consider bachelor passes, learner retention, participation and performance in gateway subjects such as mathematics, science and accounting.",
      "She says the approach aims to improve the quality of education and discourage schools from focusing solely on pass rates at the expense of learners' overall development. The minister made the remarks while addressing the media on preparations for the 2026 final matric examinations.",
      "“This approach will allow provinces to benchmark their performance in a far more meaningful way, identifying areas that require intervention,” Gwarube says. She adds that the new system will focus on improvements in literacy, numeracy, learner retention and participation in gateway subjects rather than simply determining whether learners have passed.",
      "Meanwhile, the Department of Basic Education has called on parents and communities to support learners and help ensure that nothing disrupts the 2026 matric examinations. Deputy Basic Education Minister Dr Reginah Mhaule says the department is working with municipalities and other stakeholders to address challenges, including water supply disruptions in some areas.",
      "Mhaule stresses that cooperation between the department, parents and communities is essential to ensuring that learners complete their examinations without unnecessary interruptions. She says learners and universities are ready for the examination period and urges communities to work together to make the examinations successful."
    ]
  },
  {
    id: 12, category: "politics", also: ["local", "national"],
    title: "Chipungu Visits Cyclone Freddy Housing Project in Mulanje",
    date: "2026-10-20", author: REPORTERS[1], image: "images/news/minister.jpg",
    excerpt: "The Lands Minister toured houses being built for families displaced by Cyclone Freddy.",
    content: [
      "Minister of Lands, Housing and Urban Development, Chimwemwe Chipungu, has led a visit to Nanchindwa Village in Mulanje district, where Habitat for Humanity Malawi is constructing houses for families displaced by Cyclone Freddy in 2023."
    ]
  },
  {
    id: 13, category: "politics", also: ["national"],
    title: "Parliamentary Health Committee Investigates Drug Pilferage at Songwe Border",
    date: "2026-10-20", author: REPORTERS[0], image: "images/news/songwe.jpg",
    excerpt: "MPs are meeting government agencies in Karonga over missing medical drugs.",
    content: [
      "The Parliamentary Committee on Health is holding a meeting with government agencies at Songwe border post in Karonga on medical drug pilferage in the country."
    ]
  },
  {
    id: 14, category: "sports",
    title: "Malawi Beach Soccer Team Thrash Seychelles 10-1 to Seal AFCON Spot",
    date: "2026-10-18", author: REPORTERS[1], image: "images/news/beach.jpg",
    excerpt: "The team sealed its place at the 2026 Africa Cup of Nations with a dominant second-leg win.",
    content: [
      "The Malawi Beach Soccer National team has sealed a 2026 Africa Cup of Nations slot in style after thumping Seychelles by 10 goals to 1 in the second-leg match at Sunbird Livingstonia Beach in Salima."
    ]
  },
  {
    id: 15, category: "sports", also: ["local", "national"],
    title: "Vestry Runners Raise K6.1 Million for Children With Heart Conditions",
    date: "2026-10-18", author: REPORTERS[0], image: "images/news/vestry.jpg",
    excerpt: "The Blantyre club's “Run for Little Hearts” will help families travel to India for surgery.",
    content: [
      "Blantyre-based Vestry Runners Club has described its “Run for Little Hearts” fun run as a success after raising K6.1 million to help guardians of 50 paediatric patients receiving treatment at Queen Elizabeth Central Hospital (QECH) obtain passports to travel to India for cardiac surgery."
    ]
  },
  {
    id: 16, category: "education",
    title: "SOS Vocational Centre Urges Students to Embrace Technical Education",
    date: "2026-10-20", author: REPORTERS[1], image: "images/news/sos.jpg",
    excerpt: "Secondary school students are encouraged to consider technical training as an alternative to university.",
    content: [
      "The SOS Vocational Training Centre has encouraged secondary school students to consider technical and vocational education as an alternative to university, highlighting its role in promoting self-reliance, employment creation and national development."
    ]
  },
  {
    id: 17, category: "education",
    title: "University Students Can Alleviate Hardships, Says MUST",
    date: "2026-10-20", author: REPORTERS[0], image: "images/news/must.jpg",
    excerpt: "The Malawi University of Science and Technology says students can create practical solutions.",
    content: [
      "Malawi University of Science and Technology (MUST) says university students have the potential to bring practical solutions to various hardships in the country.",
      "This is according to the institution's Deputy Vice Chancellor, Jonathan Makuwira, who said this during this year's MUST Design Competition. Makuwira said 14 entries showcased have proved that, with the necessary nurturing and support, students can bring innovative and practical technologies to solve a cross-section of problems."
    ]
  }
];
