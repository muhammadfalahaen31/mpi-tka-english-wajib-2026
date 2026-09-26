// ==========================================
// DATA SOURCE: TKA BAHASA INGGRIS SMA 2026
// TEXT TYPES: DESCRIPTIVE TEXT, RECOUNT TEXT, & PROCEDURE TEXT
// COMPLETE SOLVED QUESTION BANK & EXPLANATIONS (32 QUESTIONS)
// ==========================================

const TKA_DATA = {
  strategies: [
    {
      id: 'descriptive_text_strategy',
      name: '1. DESCRIPTIVE TEXT STRATEGY',
      type: 'Descriptive Text',
      quickQuestion: 'What/Who is being described and what are their specific characteristics?',
      steps: [
        'Identifikasi Subjek Utama (Person, Place, or Object).',
        'Perhatikan Struktur Teks: Identification (pengenalan) dan Description (detail ciri-ciri fisik/sifat/suasana).',
        'Fokus pada Adjectives (kata sifat) dan Sensory Words (pancaindra).',
        'Untuk soal detail, temukan paragraf yang membahas aspek tertentu (misal: penampilan fisik, lokasi, atau suasana).'
      ],
      formula: 'Identification + Detailed Characteristics = Complete Understanding of Subject'
    },
    {
      id: 'recount_text_strategy',
      name: '2. RECOUNT TEXT STRATEGY',
      type: 'Recount Text',
      quickQuestion: 'What happened, to whom, when, where, and in what order?',
      steps: [
        'Identifikasi Struktur Teks: Orientation (latar belakang tokoh, waktu, tempat), Events (urutan peristiwa kronologis), dan Reorientation (kesimpulan/kesan akhir).',
        'Perhatikan Time Connectives / Signal Words (In 2019, Following her protests, By 2021, Today).',
        'Untuk soal urutan kronologis, lacak penanda tahun dan urutan paragraf.',
        'Untuk soal dampak/pencapaian tokoh, baca bagian paragraf aksi dan resolusi.'
      ],
      formula: 'Orientation + Chronological Events + Legacy/Outcome = Recount Text Structure'
    },
    {
      id: 'procedure_text_strategy',
      name: '3. PROCEDURE TEXT STRATEGY',
      type: 'Procedure Text',
      quickQuestion: 'How to accomplish a task step-by-step, and what happens if a step is skipped?',
      steps: [
        'Identifikasi Tujuan (Goal/Aim) dan Langkah-Langkah (Sequential Steps).',
        'Perhatikan Action Verbs (Open, Remove, Place, Align, Download, Scan).',
        'Perhatikan Catatan Khusus (Note/Warnings: Wi-Fi 2.4G, obstacle warnings).',
        'Untuk soal Pronoun Reference & Troubleshooting, lacak kata rujukan pada kalimat sebelum/sesudahnya.'
      ],
      formula: 'Action Verbs + Precise Step Sequence + Conditional Rules = Successful Execution'
    },
    {
      id: 'topic_main_idea',
      name: '4. TOPIC / MAIN IDEA',
      type: 'Topic / Main Idea',
      quickQuestion: 'What is this text or paragraph mostly about?',
      steps: [
        'Jangan memilih jawaban berdasarkan satu kata atau detail kecil saja.',
        'Baca kalimat awal dan akhir paragraf (topic sentence).',
        'Simpulkan gagasan utama yang mencakup seluruh poin pada paragraf/teks tersebut.',
        'Eliminasi pilihan yang terlalu sempit (*too specific*) atau terlalu umum (*too broad*).'
      ],
      formula: 'Core Subject + Key Focus = Main Idea'
    },
    {
      id: 'detail_information',
      name: '5. DETAIL INFORMATION & FACTUAL VERIFICATION',
      type: 'Detail Information',
      formula: 'Question Keyword → Scan Passage → Verify Exact Statement',
      steps: [
        'Garis bawahi kata kunci dalam pertanyaan.',
        'Lakukan scanning pada teks untuk menemukan kata kunci atau sinonimnya.',
        'Verifikasi detail informasi secara teliti tanpa menambahkan asumsi luar.'
      ]
    },
    {
      id: 'inference',
      name: '6. INFERENCE & IMPLICIT MEANING',
      type: 'Inference',
      formula: 'Explicit Facts + Logical Deduction = Valid Inference',
      steps: [
        'Cari fakta-fakta eksplisit di dalam teks.',
        'Gunakan logika untuk menarik kesimpulan tersembunyi yang logis.',
        'Pastikan kesimpulan tidak bertentangan dengan fakta yang ada di teks.'
      ]
    },
    {
      id: 'pronoun_reference',
      name: '7. PRONOUN REFERENCE',
      type: 'Pronoun Reference',
      formula: 'Pronoun → Context Clause → Exact Noun',
      steps: [
        'Temukan kata ganti (it, she, he, they, this).',
        'Baca kalimat langsung sebelum kata ganti tersebut.',
        'Ganti kata ganti dengan opsi noun untuk mengecek kecocokan makna.'
      ]
    },
    {
      id: 'true_false',
      name: '8. TRUE / FALSE VERIFICATION',
      type: 'True / False',
      formula: 'Statement vs Text Evidence → True or False',
      steps: [
        'Evaluasi setiap statement satu per satu.',
        'Cari kalimat bukti pada paragraf terkait.',
        'Bandingkan apakah makna statement sesuai (True) atau bertentangan/tidak ada (False).'
      ]
    },
    {
      id: 'categorization',
      name: '9. CATEGORIZATION & MATRIX ANALYSIS',
      type: 'Categorization',
      formula: 'Statement Feature → Match Category Criteria',
      steps: [
        'Pahami kriteria dari masing-masing kategori kolom.',
        'Baca setiap baris pernyataan dan tentukan kata kunci pembedanya.',
        'Tempatkan tanda centang (✓) pada kolom kategori yang tepat.'
      ]
    }
  ],

  texts: [
    // ----------------------------------------------------
    // TEXT 1: TRISTAN DA CUNHA (15 Vocabularies)
    // ----------------------------------------------------
    {
      id: 1,
      number: 'Text 1',
      title: "Tristan da Cunha: The World's Most Remote Island",
      type: 'Descriptive Text',
      questionRange: 'Questions 1–5',
      sourceCitation: '(adapted from https://www.britannica.com/place)',
      paragraphs: [
        "Tristan da Cunha is a remote volcanic archipelago situated in the vast, turbulent waters of the South Atlantic Ocean, thousands of miles away from any continental landmass. As the most isolated inhabited island on Earth, it is defined by its dramatic and formidable geography. The main island is dominated by the towering, symmetrical cone of Queen Mary's Peak, a massive active volcano that often disappears into a thick shroud of mist and low-hanging clouds. The coastline is characterized by sheer, jagged cliffs that plunge directly into the cold, dark depths of the Atlantic, leaving only a small, narrow plateau for human settlement.",
        'The only settlement on the island, known as Edinburgh of the Seven Seas, is a collection of sturdy, brightly painted houses that stand in defiance of the harsh oceanic elements. Life here is governed by the unpredictable rhythms of the sea and the wind, which frequently batter the island with relentless force. There are no airports or luxury resorts; the island is accessible only by a multi-day ship journey from South Africa. The atmosphere is one of profound silence and solitude, broken only by the rhythmic crashing of waves against the volcanic rocks and the cries of indigenous seabirds that call the cliffs their home.',
        'The surrounding environment is a sanctuary of raw, untouched nature, where unique wildlife thrives in total isolation. Because of its remoteness, the island is a vital breeding ground for rare species, such as the Northern Rockhopper penguin and the Atlantic Yellow-nosed albatross. The vegetation consists mainly of hardy ferns and mosses that cling to the rocky soil, creating a lush but rugged green carpet across the slopes. In summer, the landscape is bathed in a soft, ethereal light, while winter brings a monochromatic world of grey seas and snow-capped volcanic peaks, reinforcing its status as a lonely outpost at the edge of the world.',
        "Tristan da Cunha stands as a monumental symbol to the resilience of both nature and the small community that inhabits it. It is a place where time seems to have slowed down, far removed from the frantic pace and digital noise of modern civilization. The island's massive volcanic presence and its location in the middle of a vast watery void create a humbling sense of insignificance for anyone who gazes upon its shores. It remains a mysterious, cold sanctuary—a silent guardian of the South Atlantic that guards its secrets behind miles of impenetrable ocean."
      ],
      vocabulary: [
        { word: 'archipelago', pos: 'noun', meaning: 'kepulauan / gugusan pulau', pronunciation: '/ˌɑːrkɪˈpeləɡoʊ/', context: '...remote volcanic archipelago in South Atlantic...', example: 'Indonesia is the world\'s largest archipelago.' },
        { word: 'isolated', pos: 'adjective', meaning: 'terisolasi / terpencil', pronunciation: '/ˈaɪsəleɪtɪd/', context: '...most isolated inhabited island on Earth...', example: 'The village remains isolated during winter.' },
        { word: 'formidable', pos: 'adjective', meaning: 'sangat menantang / mengagumkan sekaligus menakutkan', pronunciation: '/ˈfɔːrmɪdəbl/', context: '...defined by its dramatic and formidable geography.', example: 'The mountain presents a formidable challenge.' },
        { word: 'elevation', pos: 'noun', meaning: 'ketinggian di atas permukaan laut', pronunciation: '/ˌelɪˈveɪʃn/', context: '...reaches an elevation of 2,060 meters.', example: 'The city sits at an elevation of 1,000 meters.' },
        { word: 'basalt', pos: 'noun', meaning: 'batu basal (batuan vulkanik hitam)', pronunciation: '/bəˈsɔːlt/', context: '...sheer basalt cliffs that drop straight into sea...', example: 'The coastline features dark basalt rock formations.' },
        { word: 'settlement', pos: 'noun', meaning: 'pemukiman / tempat tinggal warga', pronunciation: '/ˈsetlmənt/', context: 'The only settlement... Edinburgh of the Seven Seas...', example: 'It is the oldest human settlement in the area.' },
        { word: 'defiance', pos: 'noun', meaning: 'perlawanan / ketahanan menantang cuaca', pronunciation: '/dɪˈfaɪəns/', context: '...houses that stand in defiance of harsh elements.', example: 'The tree stood in defiance of the stormy wind.' },
        { word: 'logistical', pos: 'adjective', meaning: 'terkait perencanaan & pengangkutan', pronunciation: '/ləˈdʒɪstɪkl/', context: '...making a visit both a logistical challenge...', example: 'Supplying the island is a logistical problem.' },
        { word: 'privilege', pos: 'noun', meaning: 'hak istimewa / kehormatan', pronunciation: '/ˈprɪvəlɪdʒ/', context: '...and a rare privilege.', example: 'Visiting the sanctuary is a rare privilege.' },
        { word: 'ecosystem', pos: 'noun', meaning: 'ekosistem / tatanan lingkungan alam', pronunciation: '/ˈiːkoʊsɪstəm/', context: '...possesses a unique and delicate ecosystem.', example: 'Island ecosystems are vulnerable to invasive species.' },
        { word: 'sanctuary', pos: 'noun', meaning: 'suaka / tempat perlindungan alam', pronunciation: '/ˈsæŋktʃueri/', context: 'environment is a sanctuary of raw nature...', example: 'The park serves as a wildlife sanctuary.' },
        { word: 'remoteness', pos: 'noun', meaning: 'keterpencilan / kejarakan yang jauh', pronunciation: '/rɪˈmoʊtnəs/', context: 'Because of its remoteness, the island is a vital...', example: 'The remoteness of the region preserves its nature.' },
        { word: 'breeding ground', pos: 'noun', meaning: 'tempat berkembang biak / bersarang', pronunciation: '/ˈbriːdɪŋ ɡraʊnd/', context: '...island is a vital breeding ground for rare species...', example: 'The beach is a nesting and breeding ground for turtles.' },
        { word: 'vegetation', pos: 'noun', meaning: 'tumbuh-tumbuhan / penutup lahan', pronunciation: '/ˌvedʒəˈteɪʃn/', context: 'The island\'s vegetation, shaped by winds...', example: 'Alpine vegetation is adapted to cold weather.' },
        { word: 'captivating', pos: 'adjective', meaning: 'menawan / memikat hati', pronunciation: '/ˈkæptɪveɪtɪŋ/', context: '...creating a stark yet captivating landscape...', example: 'The sunset over the ocean was captivating.' }
      ]
    },

    // ----------------------------------------------------
    // TEXT 2: CILLIAN MURPHY (15 Vocabularies)
    // ----------------------------------------------------
    {
      id: 2,
      number: 'Text 2',
      title: 'Cillian Murphy: The Craft of Quiet Intensity',
      type: 'Descriptive Text',
      questionRange: 'Questions 6–10',
      sourceCitation: '(adapted from https://www.theguardian.com)',
      paragraphs: [
        'Cillian Murphy is an Irish actor widely recognized for his striking physical features and his intense, transformative performances. He possesses a lean build and a chiseled jawline that gives him an air of timeless elegance. However, his most captivating feature is undoubtedly his piercing, translucent blue eyes, which many directors describe as a powerful cinematic tool. These eyes often convey a profound depth of emotion, ranging from chilling detachment to overwhelming vulnerability, making him one of the most versatile actors of his generation.',
        'The actor possesses a reserved and enigmatic personality that sets him apart from his peers. Unlike many Hollywood stars, he leads a private life away from the limelight, often expressing a preference for the quietude of his home in Ireland over the glamour of red carpets. This grounded nature is reflected in his work ethic. He is known for his meticulous preparation and complete immersion into his roles. His ability to disappear into a character—be it a mob boss or a theoretical physicist—is a testament to his dedication to the craft.',
        'His presence on screen is characterized by a "quiet intensity." He does not need loud gestures or booming dialogue to command attention. Instead, he uses subtle micro-expressions and a calculated stillness. This controlled energy makes his performances feel authentic and deeply intellectual. Fans and critics alike are often drawn to his poise and the mysterious aura he maintains, which adds a layer of intrigue to every role he inhabits.',
        'Cillian Murphy embodies a rare blend of high-fashion aesthetics and raw, gritty talent. He remains a figure of fascination not just for his fashion sense or striking looks, but for the integrity he brings to the acting profession. As he continues to take on complex, career-defining roles, he solidifies his status as a modern icon of cinema who values substance over fame.'
      ],
      vocabulary: [
        { word: 'transformative', pos: 'adjective', meaning: 'mampu mengubah penampilan/karakter secara drastis', pronunciation: '/trænsˈfɔːrmətɪv/', context: '...intense, transformative performances on stage...', example: 'His acting in the film was truly transformative.' },
        { word: 'aesthetic', pos: 'noun / adjective', meaning: 'estetika / keindahan penampilan', pronunciation: '/esˈθetɪk/', context: 'Murphy possesses a distinct aesthetic...', example: 'The movie has a dark visual aesthetic.' },
        { word: 'hallmark', pos: 'noun', meaning: 'ciri khas / tanda keunggulan utama', pronunciation: '/ˈhɔːlmɑːrk/', context: 'These eyes have become a hallmark of his presence...', example: 'Attention to detail is the hallmark of his work.' },
        { word: 'translucent', pos: 'adjective', meaning: 'bening / jernih berkilau', pronunciation: '/trænzˈluːsnt/', context: '...exceptionally clear, translucent blue eyes.', example: 'Her eyes were a translucent shade of green.' },
        { word: 'rigorous', pos: 'adjective', meaning: 'sangat ketat / cermat dan disiplin', pronunciation: '/ˈrɪɡərəs/', context: '...celebrated for his rigorous work ethic...', example: 'He underwent rigorous training for the role.' },
        { word: 'meticulous', pos: 'adjective', meaning: 'sangat teliti / rinci hingga hal terkecil', pronunciation: '/məˈtɪkjələs/', context: '...meticulous approach to character development.', example: 'She is meticulous about her research.' },
        { word: 'limelight', pos: 'noun', meaning: 'sorotan publik / pusat perhatian media', pronunciation: '/ˈlaɪmlaɪt/', context: '...leads a private life away from the limelight...', example: 'The actor prefers to stay out of the limelight.' },
        { word: 'quietude', pos: 'noun', meaning: 'ketenangan / keheningan suasana', pronunciation: '/ˈkwaɪətuːd/', context: '...preference for the quietude of his home...', example: 'He sought the quietude of the countryside.' },
        { word: 'enigmatic', pos: 'adjective', meaning: 'misterius / teka-teki yang memikat', pronunciation: '/ˌenɪɡˈmætɪk/', context: 'This reserved nature contributes to his enigmatic image...', example: 'Mona Lisa is famous for her enigmatic smile.' },
        { word: 'persona', pos: 'noun', meaning: 'citra publik / kepribadian di mata umum', pronunciation: '/pərˈsoʊnə/', context: '...rather than his celebrity persona.', example: 'His stage persona is very energetic.' },
        { word: 'conflicted', pos: 'adjective', meaning: 'mengalami konflik batin / dilema', pronunciation: '/kənˈflɪktɪd/', context: 'Whether portraying a conflicted soldier...', example: 'The character felt conflicted about his choices.' },
        { word: 'submerges', pos: 'verb', meaning: 'menyelami / menenggelamkan diri dalam peran', pronunciation: '/səbˈmɜːrdʒɪz/', context: '...he submerges himself fully into the psychology...', example: 'He submerges himself in every role he plays.' },
        { word: 'intensity', pos: 'noun', meaning: 'intensitas / kekuatan emosi mendalam', pronunciation: '/ɪnˈtensəti/', context: 'His ability to project quiet intensity...', example: 'The intensity of his gaze captured the audience.' },
        { word: 'micro-expressions', pos: 'noun', meaning: 'ekspresi wajah mikro yang sangat halus', pronunciation: '/ˈmaɪkroʊ ɪkˈspreʃnz/', context: '...using subtle micro-expressions and body language...', example: 'Micro-expressions reveal hidden emotions.' },
        { word: 'deliberate', pos: 'adjective', meaning: 'terencana / dilakukan secara sengaja dan terukur', pronunciation: '/dɪˈlɪbərət/', context: '...deliberate body language—has earned him acclaim...', example: 'His movements on stage were deliberate.' }
      ]
    },

    // ----------------------------------------------------
    // TEXT 3: GLOBAL SEED VAULT (15 Vocabularies)
    // ----------------------------------------------------
    {
      id: 3,
      number: 'Text 3',
      title: 'The Svalbard Global Seed Vault: Earth\'s Ultimate Backup',
      type: 'Descriptive Text',
      questionRange: 'Questions 11–15',
      sourceCitation: '(adapted from https://thedecisionlab.com)',
      paragraphs: [
        'The Global Seed Vault, located on the remote Norwegian island of Spitsbergen in the Svalbard archipelago, is a sophisticated facility often referred to as the "Doomsday Vault." It is specifically designed to protect the world\'s crop diversity from potential natural or man-made disasters. Carved 130 meters deep into a solid sandstone mountain, the vault utilizes the surrounding permafrost to remain naturally frozen year-round. The entrance is a striking, rectangular concrete wedge that protrudes boldly from the snowy mountain face, often illuminated by a glittering light installation that makes it visible for miles across the dark polar landscape.',
        "Inside, the atmosphere is defined by sterile, clinical precision and immense quiet. The facility consists of three large underground chambers, each capable of holding millions of seed samples stored in specialized three-ply foil packages. The internal temperature is strictly maintained at a constant -18 °C to ensure that the seeds remain viable for centuries. The air within the chambers is dry and still, filled only with the faint, rhythmic hum of cooling systems that serve as a crucial backup to the mountain's natural freezing power. It is a sanctuary where the world's agricultural history is preserved in frozen silence.",
        'The environment surrounding the vault is one of the harshest and most remote on Earth. Svalbard is characterized by its barren, icy tundra and a landscape that appears almost extraterrestrial. In winter, the region is plunged into a constant polar night where the sun never rises above the horizon, leaving an endless expanse of white snow and jagged blue ice. The climate is dominated by biting winds and extreme temperatures that frequently drop to -25 °C. This desolate setting, devoid of trees or natural landmarks, provides a formidable natural barrier that enhances the security of the facility.',
        "This deep mountain stronghold serves a critical purpose for the future of global agriculture. Located within the permafrost of a remote Arctic island, the facility functions as a secure backup for the world's crop diversity. The heavy concrete structure protects millions of seed samples from natural disasters and human conflicts. It provides a sense of security for nations that rely on these biological resources to rebuild their food systems. By holding the history of human farming inside its frozen walls, the vault ensures that the foundations of life remain safe for generations to come."
      ],
      vocabulary: [
        { word: 'archipelago', pos: 'noun', meaning: 'kepulauan Arktik terpencil', pronunciation: '/ˌɑːrkɪˈpeləɡoʊ/', context: '...remote island in Svalbard archipelago...', example: 'Svalbard is a remote Arctic archipelago.' },
        { word: 'sandstone', pos: 'noun', meaning: 'batu pasir padat gunung', pronunciation: '/ˈsændstoʊn/', context: 'Carved 130 meters into solid sandstone...', example: 'The tunnel was carved into solid sandstone.' },
        { word: 'wedge', pos: 'noun', meaning: 'pasak / struktur bangunan bersudut tajam', pronunciation: '/wedʒ/', context: '...striking, rectangular concrete wedge...', example: 'A concrete wedge forms the entrance.' },
        { word: 'subterranean', pos: 'adjective', meaning: 'bawah tanah / di kedalaman bumi', pronunciation: '/ˌsʌbtəˈreɪniən/', context: '...three large subterranean chambers...', example: 'The vault contains subterranean storage rooms.' },
        { word: 'duplicate', pos: 'noun / adjective', meaning: 'salinan duplikat / cadangan', pronunciation: '/ˈduːplɪkət/', context: '...house millions of duplicate seed samples...', example: 'They store duplicate copies of rare seeds.' },
        { word: 'foil', pos: 'noun', meaning: 'alumunium foil pelindung kedap', pronunciation: '/fɔɪl/', context: '...sealed in specialized three-ply foil packages...', example: 'Seeds are sealed in moisture-proof foil.' },
        { word: 'decay', pos: 'noun / verb', meaning: 'pembusukan / kerusakan biologis', pronunciation: '/dɪˈkeɪ/', context: '...to prevent moisture and decay.', example: 'Low temperatures prevent seed decay.' },
        { word: 'permafrost', pos: 'noun', meaning: 'lapisan tanah/es beku abadi', pronunciation: '/ˈpɜːrməfrɔːst/', context: '...surrounding permafrost would keep seeds frozen...', example: 'Permafrost keeps the mountain interior frozen.' },
        { word: 'heritage', pos: 'noun', meaning: 'warisan budaya / biologis leluhur', pronunciation: '/ˈherɪtɪdʒ/', context: '...ensuring that humanity\'s agricultural heritage...', example: 'Crop diversity is part of human heritage.' },
        { word: 'catastrophes', pos: 'noun', meaning: 'bencana dahsyat / malapetaka', pronunciation: '/kəˈtæstrəfiz/', context: '...remains safe regardless of external catastrophes.', example: 'The vault guards against global catastrophes.' },
        { word: 'intrusion', pos: 'noun', meaning: 'gangguan / penyusupan tak berizin', pronunciation: '/ɪnˈtruːʒn/', context: '...natural barrier to unwanted intrusion.', example: 'High security prevents unauthorized intrusion.' },
        { word: 'desolate', pos: 'adjective', meaning: 'suasana gersang, sepi, & terpencil', pronunciation: '/ˈdesələt/', context: 'This desolate setting, devoid of trees...', example: 'The Arctic tundra is a desolate environment.' },
        { word: 'devoid', pos: 'adjective', meaning: 'kosong sama sekali / tanpa adanya', pronunciation: '/dɪˈvɔɪd/', context: '...desolate setting, devoid of trees and settlements...', example: 'The landscape was devoid of life.' },
        { word: 'foresight', pos: 'noun', meaning: 'pandangan jauh ke depan / kewaspadaan masa depan', pronunciation: '/ˈfɔːrsaɪt/', context: '...symbol of global unity and foresight.', example: 'Building the vault required immense foresight.' },
        { word: 'testament', pos: 'noun', meaning: 'bukti nyata / saksi kesungguhan', pronunciation: '/ˈtestəmənt/', context: '...standing as a quiet testament to shared responsibility.', example: 'The building is a testament to human ingenuity.' }
      ]
    },

    // ----------------------------------------------------
    // TEXT 4: VANESSA NAKATE (15 Vocabularies)
    // ----------------------------------------------------
    {
      id: 4,
      number: 'Text 4',
      title: 'Vanessa Nakate: The Courageous Voice for African Climate Justice',
      type: 'Recount Text',
      questionRange: 'Questions 16–20',
      sourceCitation: '(adapted from https://www.unicef.org)',
      paragraphs: [
        "Vanessa Nakate's journey as a climate activist began in January 2019, after she became deeply concerned about the unusually high temperatures in her home country, Uganda. Inspired by the global youth strikes, she decided to take action by protesting outside the gates of the Parliament in Kampala. For several months, she stood alone with her handmade signs, despite the skepticism of passersby. This period marked her transition from a quiet graduate into a determined activist, as she demanded that the government acknowledge the climate emergencies affecting Africa.",
        'Following her solitary protests, Nakate founded the Rise Up Movement to amplify the voices of other African activists who were often ignored by international media. A pivotal moment in her career occurred in early 2020 when she was famously cropped out of a photo with white activists at the World Economic Forum in Davos. Rather than being discouraged, she used the incident to highlight the marginalization of African voices in the climate conversation. This event propelled her into the global spotlight, allowing her to speak more forcefully about the "Congo Rainforest" and the unfair reality that Africa suffers the most while emitting the least carbon.',
        "As her influence grew, Nakate shifted some of her focus toward practical solutions through the Vash Green Schools Project. She began launching initiatives to install solar panels and eco-friendly cookstoves in schools across Uganda. By doing so, she successfully reduced the schools' dependence on firewood and improved the learning environment for thousands of students. She also started advocating for the education of girls, linking it directly to climate resilience, and began traveling to various international summits, including COP25 and COP26, to challenge world leaders.",
        'By 2021, Nakate had solidified her status as a global icon with the publication of her memoir, A Bigger Picture. The book documented her transformation and her fight for an inclusive environmental movement. Today, she continues to lead the Rise Up Movement and collaborate with international organizations like UNICEF. From a lone protester in Kampala to a world-renowned leader, Vanessa Nakate has proven that persistence can spark a massive shift in how the world views environmental justice and the power of youth.'
      ],
      vocabulary: [
        { word: 'activist', pos: 'noun', meaning: 'aktivis / pejuang gerakan sosial iklim', pronunciation: '/ˈæktɪvɪst/', context: '...journey as a climate activist began in 2019...', example: 'She became a full-time climate activist.' },
        { word: 'devastating', pos: 'adjective', meaning: 'sangat merusak / menghancurkan', pronunciation: '/ˈdevəsteɪtɪŋ/', context: '...impacts of climate change.', example: 'Droughts have a devastating effect on farming.' },
        { word: 'indifference', pos: 'noun', meaning: 'sikap acuh tak acuh / tidak peduli', pronunciation: '/ɪnˈdɪfrəns/', context: 'Despite initial indifference from the public...', example: 'Her protest overcame public indifference.' },
        { word: 'persistence', pos: 'noun', meaning: 'gigih / ketekunan tanpa menyerah', pronunciation: '/pərˈsɪstəns/', context: '...Nakate\'s persistence transformed her protest...', example: 'Success requires hard work and persistence.' },
        { word: 'amplify', pos: 'verb', meaning: 'memperkuat / memperluas jangkauan suara', pronunciation: '/ˈæmplɪfaɪ/', context: '...designed to amplify the voices of African activists...', example: 'Social media helps amplify important messages.' },
        { word: 'controversy', pos: 'noun', meaning: 'kontroversi / perdebatan hangat publik', pronunciation: '/ˈkɑːntrəvɜːrsi/', context: '...this event was marked by controversy...', example: 'The decision sparked intense controversy.' },
        { word: 'marginalization', pos: 'noun', meaning: 'pensingkiran / pemarginalan peran', pronunciation: '/ˌmɑːrdʒɪnələˈzeɪʃn/', context: '...marginalization of African voices...', example: 'The report highlighted the marginalization of minority groups.' },
        { word: 'inclusivity', pos: 'noun', meaning: 'inklusivitas / keterbukaan merangkul semua', pronunciation: '/ˌɪnkluːˈsɪvəti/', context: '...demand greater inclusivity in climate fight.', example: 'Diversity and inclusivity strengthen movements.' },
        { word: 'initiative', pos: 'noun', meaning: 'inisiatif / langkah awal gerakan', pronunciation: '/ɪˈnɪʃətɪv/', context: 'This initiative installs solar panels...', example: 'The green initiative gained support.' },
        { word: 'dependence', pos: 'noun', meaning: 'ketergantungan', pronunciation: '/dɪˈpendəns/', context: '...reduced the schools\' dependence on firewood...', example: 'Solar energy reduces dependence on fossil fuels.' },
        { word: 'advocating', pos: 'verb (participle)', meaning: 'menyuarakan / memperjuangkan', pronunciation: '/ˈædvəkeɪtɪŋ/', context: 'She also started advocating for the education of girls...', example: 'She is advocating for girls\' access to education.' },
        { word: 'resilience', pos: 'noun', meaning: 'ketahanan / adaptabilitas masyarakat', pronunciation: '/rɪˈzɪliəns/', context: '...linking it directly to climate resilience...', example: 'Education fosters community resilience.' },
        { word: 'memoir', pos: 'noun', meaning: 'buku kenangan / biografi autobiografi', pronunciation: '/ˈmemwɑːr/', context: '...publication of her memoir, A Bigger Picture.', example: 'She published a bestselling memoir in 2021.' },
        { word: 'emissions', pos: 'noun', meaning: 'emisi gas buang karbon', pronunciation: '/ɪˈmɪʃnz/', context: '...less than four percent of global carbon emissions...', example: 'Nations agreed to cut greenhouse gas emissions.' },
        { word: 'clarity', pos: 'noun', meaning: 'kejelasan visi / keteguhan moral', pronunciation: '/ˈklærəti/', context: '...persistence and moral clarity can spark shift...', example: 'Her speeches are marked by moral clarity.' }
      ]
    },

    // ----------------------------------------------------
    // TEXT 5: DESMOND TUTU (15 Vocabularies)
    // ----------------------------------------------------
    {
      id: 5,
      number: 'Text 5',
      title: 'Archbishop Desmond Tutu: Champion of Climate & Moral Justice',
      type: 'Recount Text',
      questionRange: 'Questions 21–25',
      sourceCitation: '(adapted from https://www.tutu.org.za)',
      paragraphs: [
        'Archbishop Desmond Tutu was a towering figure in South African history, known globally for his role in ending apartheid and his subsequent dedication to environmental justice. Born in 1931, Tutu rose to prominence as a vocal opponent of racial segregation, winning the Nobel Peace Prize in 1984. However, in his later years, he became one of the first global religious leaders to identify climate change as one of the greatest moral challenges of our time, famously labeling it "the apartheid of our era."',
        'Tutu argued that the destruction of the environment was a profound injustice that disproportionately affected the poor and marginalized. He used his moral authority to call for a "global boycott" of the fossil fuel industry, similar to the sanctions that helped topple the apartheid regime. He believed that the same collective international pressure used to fight racial injustice should be applied to companies responsible for carbon emissions, urging institutions to divest from coal, oil, and gas to protect the planet for future generations.',
        'His environmental philosophy was rooted in the African concept of Ubuntu, which emphasizes the interconnectedness of all living beings. For Tutu, caring for the Earth was an essential part of caring for one another. He frequently participated in international climate campaigns, signing petitions and recording messages that urged world leaders to transition to renewable energy. He saw the climate crisis not just as a scientific or political issue, but as a deeply spiritual one that required a fundamental shift in how humans relate to nature.',
        'Until his passing in 2021, Desmond Tutu remained a "moral compass" for the world. His legacy lives on through the Desmond and Leah Tutu Legacy Foundation, which continues to advocate for social and environmental justice. By linking the struggle for human rights with the struggle for a healthy planet, he provided a powerful framework for modern activism. His life serves as a reminder that the fight for a better world is a unified mission that encompasses both social equality and ecological preservation.'
      ],
      vocabulary: [
        { word: 'towering', pos: 'adjective', meaning: 'sangat berpengaruh / agung', pronunciation: '/ˈtaʊərɪŋ/', context: 'Archbishop Desmond Tutu was a towering figure...', example: 'He was a towering moral figure globally.' },
        { word: 'apartheid', pos: 'noun', meaning: 'sistem pemisahan rasial di Afrika Selatan', pronunciation: '/əˈpɑːrthaɪt/', context: '...known globally for his role in ending apartheid...', example: 'Tutu spent decades fighting apartheid.' },
        { word: 'segregation', pos: 'noun', meaning: 'pemisahan ras / diskriminasi rasial', pronunciation: '/ˌseɡrɪˈɡeɪʃn/', context: '...vocal opponent of racial segregation...', example: 'Racial segregation was outlawed in South Africa.' },
        { word: 'profound', pos: 'adjective', meaning: 'sangat mendalam / berat', pronunciation: '/prəˈfaʊnd/', context: '...environment destruction was a profound injustice...', example: 'The book had a profound impact on readers.' },
        { word: 'disproportionately', pos: 'adverb', meaning: 'secara tidak seimbang / paling merugikan', pronunciation: '/ˌdɪsprəˈpɔːrʃənətli/', context: '...disproportionately affected the poor and marginalized.', example: 'Pollution disproportionately harms low-income areas.' },
        { word: 'boycott', pos: 'noun / verb', meaning: 'pemboikotan / penolakan bersama', pronunciation: '/ˈbɔɪkɑːt/', context: '...call for a global boycott of fossil fuel industry...', example: 'A global boycott was organized against fossil fuels.' },
        { word: 'topple', pos: 'verb', meaning: 'menumbangkan / menjatuhkan rezim', pronunciation: '/ˈtɑːpl/', context: '...sanctions that helped topple the apartheid regime.', example: 'Sanctions helped topple the unjust regime.' },
        { word: 'divest', pos: 'verb', meaning: 'menarik investasi / mencabut modal', pronunciation: '/daɪˈvest/', context: '...urging institutions to divest from coal, oil, and gas...', example: 'Universities agreed to divest from oil companies.' },
        { word: 'Ubuntu', pos: 'noun', meaning: 'filosofi kemanusiaan Afrika (saling keterikatan)', pronunciation: '/uːˈbuːntuː/', context: '...rooted in the African concept of Ubuntu...', example: 'Ubuntu teaches unity and mutual respect.' },
        { word: 'interconnectedness', pos: 'noun', meaning: 'saling keterikatan seluruh makhluk', pronunciation: '/ˌɪntərkəˈnektɪdnəs/', context: '...emphasizes the interconnectedness of all living beings.', example: 'Ecology shows the interconnectedness of nature.' },
        { word: 'renewable', pos: 'adjective', meaning: 'dapat diperbarui (energi)', pronunciation: '/rɪˈnuːəbl/', context: '...urged world leaders to transition to renewable energy.', example: 'Solar and wind are renewable energy sources.' },
        { word: 'spiritual', pos: 'adjective', meaning: 'berbasis keimanan / rohani', pronunciation: '/ˈspɪrɪtʃuəl/', context: '...saw climate crisis as a deeply spiritual issue...', example: 'Caring for nature is a spiritual responsibility.' },
        { word: 'compass', pos: 'noun', meaning: 'kompas penunjuk arah moral', pronunciation: '/ˈkʌmpəs/', context: 'Tutu remained a moral compass for the world.', example: 'He served as a moral compass during tough times.' },
        { word: 'framework', pos: 'noun', meaning: 'kerangka kerja / pola konsep', pronunciation: '/ˈfreɪmwɜːrk/', context: '...provided a powerful framework for modern activism.', example: 'This theory provides a framework for activism.' },
        { word: 'preservation', pos: 'noun', meaning: 'pelestarian / perlindungan ekologi', pronunciation: '/ˌprezərˈveɪʃn/', context: '...encompasses social equality and ecological preservation.', example: 'Forest preservation is vital for climate stability.' }
      ]
    },

    // ----------------------------------------------------
    // TEXT 6: ECOCLIN VACUUM (15 Vocabularies)
    // ----------------------------------------------------
    {
      id: 6,
      number: 'Text 6',
      title: 'EcoClin Vacuum Cleaner: Installation & Usage Guide',
      type: 'Procedure Text',
      questionRange: 'Questions 26–32',
      sourceCitation: '(adapted from https://ecovacsindia.in/index)',
      paragraphs: [
        'An Intelligent Robotic Vacuum Cleaner, EcoClin Vacuum, is equipped with both Wet and Dry-Cleaning Feature allowing Mopping and Vacuuming all-in-one-go.',
        'How to install the robot?',
        '(1) Open the outer packaging of the box. Remove the EcoClin Vacuum, station, accessory packaging box and remove the protective bags on the robot and the station.',
        '(2) Place the EcoClin Vacuum on the floor and open the removable cover at the top and remove the rubber C-shaped band which is placed next to the bumper. Put back the cover again.',
        '(3) Place the EcoClin Vacuum upside down and with the bottom facing up. Take out the side brush from the accessory kit. Align it with the card slot, then firmly press it down. Ensure to hear a "click" sound to get the confirmation of successful installation.',
        '(4) In the Omni station, gently press the dust cabin in the centre to open it. A dust bag is installed which can be cleaned and used again. It needs to be changed once it is worn out.',
        '(5) Align the base with the station and place it parallel to the station, gently push it inward. Ensure that a "click" sound is heard to confirm successful installation.',
        '(6) Place the EcoClin Vacuum on the base for its charge and start working.',
        '(7) Now download the ECOCLIN HOME application from the Play Store or App Store.',
        '(8) After successful installation of the application, scan the QR code on the EcoClin Vacuum for it to connect and pair.',
        '(9) Follow the instructions as guided by the application.',
        '(10) While using the EcoClin Vacuum for the first time, it needs to create a map of the place, and ensure that there are not too many obstacles in its route (Too many obstacles can lead to a faulty or inefficient map creation).',
        'Note: While connecting to the application, make sure your Wi-Fi is in 2.4G connection. If not, you can ask your service provider to enable 2.4G connection.'
      ],
      vocabulary: [
        { word: 'intelligent', pos: 'adjective', meaning: 'pintar / otomatis bersistem cerdas', pronunciation: '/ɪnˈtelɪdʒənt/', context: 'An Intelligent Robotic Vacuum Cleaner...', example: 'The intelligent robot navigates room spaces.' },
        { word: 'equipped', pos: 'verb (past)', meaning: 'dilengkapi / dipasangi', pronunciation: '/ɪˈkwɪpt/', context: '...equipped with both Wet and Dry Cleaning Feature...', example: 'The cleaner is equipped with sensors.' },
        { word: 'removable', pos: 'adjective', meaning: 'dapat dilepas / copot', pronunciation: '/rɪˈmuːvəbl/', context: '...open the removable cover at the top...', example: 'The filter has a removable cover.' },
        { word: 'bumper', pos: 'noun', meaning: 'bemper / pelindung benturan', pronunciation: '/ˈbʌmpər/', context: '...placed next to the bumper.', example: 'The bumper absorbs wall impacts.' },
        { word: 'upside down', pos: 'adverb / adjective', meaning: 'terbalik (bagian bawah di atas)', pronunciation: '/ˌʌpsaɪd ˈdaʊn/', context: 'Place the EcoClin Vacuum upside down...', example: 'Turn the vacuum upside down to attach brushes.' },
        { word: 'align', pos: 'verb', meaning: 'sejajarkan / pasang lurus', pronunciation: '/əˈlaɪn/', context: 'Align it with the card slot, then firmly press it down.', example: 'Align the brush with the slot before pressing.' },
        { word: 'firmly', pos: 'adverb', meaning: 'dengan kuat / mantap', pronunciation: '/ˈfɜːrmli/', context: '...then firmly press it down.', example: 'Press firmly until you hear a click.' },
        { word: 'confirmation', pos: 'noun', meaning: 'konfirmasi / kepastian terpasang', pronunciation: '/ˌkɑːnfərˈmeɪʃn/', context: '...to get the confirmation of successful installation.', example: 'The click sound is your confirmation.' },
        { word: 'cabin', pos: 'noun', meaning: 'kompartemen / ruang kantong', pronunciation: '/ˈkæbɪn/', context: '...press the dust cabin in the centre to open it.', example: 'The dust cabin holds the collection bag.' },
        { word: 'reusable', pos: 'adjective', meaning: 'dapat dipakai ulang', pronunciation: '/ˌriːˈjuːzəbl/', context: 'A dust bag is installed which can be cleaned and used again.', example: 'The dust bag is reusable after washing.' },
        { word: 'worn out', pos: 'adjective', meaning: 'aus / rusak karena sering dipakai', pronunciation: '/ˌwɔːrn ˈaʊt/', context: 'It needs to be changed once it is worn out.', example: 'Replace the dust bag when it is worn out.' },
        { word: 'parallel', pos: 'adjective', meaning: 'sejajar', pronunciation: '/ˈpærəlel/', context: '...place it parallel to the station...', example: 'Position the base parallel to the station.' },
        { word: 'obstacles', pos: 'noun', meaning: 'hambatan / rintangan', pronunciation: '/ˈɑːbstəklz/', context: '...ensure that there are not too many obstacles in its route...', example: 'Clear obstacles from the floor before mapping.' },
        { word: 'inefficient', pos: 'adjective', meaning: 'tidak efisien / boros waktu', pronunciation: '/ˌɪnɪˈfɪʃnt/', context: '...can lead to a faulty or inefficient map creation.', example: 'Obstacles cause inefficient cleaning routes.' },
        { word: 'provider', pos: 'noun', meaning: 'penyedia layanan (internet/Wi-Fi)', pronunciation: '/prəˈvaɪdər/', context: '...ask your service provider to enable 2.4G connection.', example: 'Contact your internet provider for 2.4G Wi-Fi.' }
      ]
    }
  ],

  questions: [
    // ----------------------------------------------------
    // TEXT 1: TRISTAN DA CUNHA (Q1 - Q5)
    // ----------------------------------------------------
    {
      id: 1,
      textId: 1,
      number: 'Question 1',
      genre: 'Descriptive Text',
      type: 'multiple_choice',
      strategyId: 'detail_information',
      question: 'Why is Tristan da Cunha considered a unique location for human settlement?',
      options: [
        '(A) It is located very close to the continental landmass of Africa.',
        '(B) It features luxury resorts and modern airports for easy access.',
        '(C) Its geography consists entirely of flat plains and tropical forests.',
        '(D) It is a place where residents can enjoy the digital noise of modern life.',
        '(E) It is the most isolated inhabited island on Earth, far from any continent.'
      ],
      correctAnswer: 'E',
      textualEvidence: 'Paragraf 1: "As the most isolated inhabited island on Earth, it is defined by its dramatic and formidable geography... thousands of miles away from any continental landmass."',
      explanation: '💡 Pembahasan & Alasan Guru (Strategi TKA: Detail Information & Factual Verification):\n\n1. Penerapan Strategi TKA:\n   • Kata kunci pertanyaan: "unique location for human settlement".\n   • Lakukan scanning pada Paragraf 1 yang menggambarkan karakter geografis utama pulau.\n\n2. Verifikasi Bukti Paragraf:\n   ; Paragraf 1: "As the most isolated inhabited island on Earth, it is defined by its dramatic and formidable geography..."\n   ; Paragraf 1: "...thousands of miles away from any continental landmass."\n\n3. Analisis Poin Opsi:\n   ; (A) SALAH — Paragraf 1 menyatakan pulau ini berjarak ribuan mil dari daratan benua, bukan sangat dekat.\n   ; (B) SALAH — Paragraf 2 menyatakan "There are no airports or luxury resorts".\n   ; (C) SALAH — Paragraf 1 menyebutkan wilayah berupa gunung berapi aktif dan tebing curam, bukan dataran rendah tropis.\n   ; (D) SALAH — Paragraf 2 menegaskan lokasi pulau "far removed from the digital noise".\n   ; (E) BENAR — Sesuai fakta eksplisit Paragraf 1, pulau ini adalah pemukiman berpenghuni paling terisolasi di Bumi.\n\n4. Kesimpulan Jawaban:\n   Jawaban yang benar adalah (E).',
      distractorAnalysis: {
        'A': 'Salah: Paragraf 1 menyebutkan pulau ini terletak ribuan mil jauhnya dari daratan benua.',
        'B': 'Salah: Paragraf 2 menyatakan \'There are no airports or luxury resorts\'.',
        'C': 'Salah: Geografinya terdiri dari gunung berapi aktif dan tebing curam.',
        'D': 'Salah: Teks menyebutkan lokasi ini jauh dari keramaian digital (*far removed from digital noise*).'
      }
    },
    {
      id: 2,
      textId: 1,
      number: 'Question 2',
      genre: 'Descriptive Text',
      type: 'multiple_choice',
      strategyId: 'descriptive_text_strategy',
      question: 'Which of the following options best shows the key characteristics of Tristan da Cunha as told in the whole text?',
      options: [
        '(A)\n(1) Remote volcanic archipelago\n(2) Symmetrical volcanic cone\n(3) Multi-day ship journey\n(4) Unique wildlife sanctuary',
        '(B)\n(1) Tropical coastal island\n(2) Dense rainforest canopy\n(3) Daily international flight\n(4) Luxury tourism destination',
        '(C)\n(1) Flat continental landmass\n(2) Massive industrial plateau\n(3) High-speed rail connection\n(4) Crowded metropolitan center',
        '(D)\n(1) Modern maritime territory\n(2) Jagged limestone cliff\n(3) Seasonal luxury cruise\n(4) Global commercial harbor',
        '(E)\n(1) Isolated desert outpost\n(2) Arid rocky landscape\n(3) Regular military transport\n(4) Scientific research station'
      ],
      correctAnswer: 'A',
      textualEvidence: 'Paragraf 1: "remote volcanic archipelago", "symmetrical cone of Queen Mary\'s Peak" | Paragraf 2: "accessible only by a multi-day ship journey" | Paragraf 3: "sanctuary of raw, untouched nature, where unique wildlife thrives"',
      explanation: '💡 Pembahasan & Alasan Guru (Strategi TKA: Descriptive Text Characteristics):\n\n1. Penerapan Strategi TKA:\n   • Identifikasi subjek utama teks (Tristan da Cunha) dan lacak 4 rincian fakta kunci yang tersebar dari Paragraf 1, 2, dan 3.\n\n2. Verifikasi Bukti Paragraf:\n   ; Paragraf 1: "remote volcanic archipelago" & "symmetrical cone of Queen Mary\'s Peak"\n   ; Paragraf 2: "accessible only by a multi-day ship journey"\n   ; Paragraf 3: "sanctuary of raw, untouched nature, where unique wildlife thrives"\n\n3. Analisis Poin Opsi:\n   ; (A) BENAR — Mengintegrasikan 4 karakteristik tepat dari Paragraf 1, 2, dan 3.\n   ; (B) SALAH — Paragraf 3 menyatakan "devoid of trees" (tanpa hutan hujan) dan tidak ada resor mewah.\n   ; (C) SALAH — Bukan dataran benua industri atau pusat kereta cepat.\n   ; (D) SALAH — Paragraf 2 menyatakan tidak ada pelabuhan komersial global.\n   ; (E) SALAH — Bukan pos gurun pasir gersang.\n\n4. Kesimpulan Jawaban:\n   Jawaban yang benar adalah (A).',
      distractorAnalysis: {
        'B': 'Salah: Tidak ada hutan hujan tropis, penerbangan harian, atau resor mewah.',
        'C': 'Salah: Pulau ini bukan dataran benua datar atau pusat metropolitan industri.',
        'D': 'Salah: Bukan wilayah maritim modern dengan pelabuhan komersial global.',
        'E': 'Salah: Pulau ini bukan pos gurun pasir gersang.'
      }
    },
    {
      id: 3,
      textId: 1,
      number: 'Question 3',
      genre: 'Descriptive Text',
      type: 'multiple_select',
      strategyId: 'multi_select',
      question: 'Why is the environment of Tristan da Cunha described as a vital sanctuary?\nThere is more than one correct answer. Select all that apply!',
      options: [
        '[ ] It hosts unique wildlife that thrives in total isolation.',
        '[ ] It remains a rugged landscape protected by the vast ocean.',
        '[ ] It provides a stable environment for building large factories.',
        '[ ] It offers a safe habitat for the Atlantic Yellow-nosed albatross.',
        '[ ] It serves as a breeding ground for rare penguins and albatrosses.'
      ],
      correctAnswer: [0, 1, 3, 4],
      textualEvidence: 'Paragraf 3: "sanctuary of raw, untouched nature, where unique wildlife thrives in total isolation." | Paragraf 3: "vital breeding ground for rare species, such as the Northern Rockhopper penguin and the Atlantic Yellow-nosed albatross."',
      explanation: '💡 Pembahasan & Alasan Guru (Strategi TKA: Multi-Select Evidence Verification):\n\n1. Penerapan Strategi TKA:\n   • Kata kunci pertanyaan: "vital sanctuary".\n   • Lakukan scanning pada Paragraf 3 yang menjelaskan kondisi ekosistem alam pulau.\n\n2. Verifikasi Bukti Paragraf:\n   • Lingkungan pulau disebut sebagai suaka penting karena beberapa alasan yang disebutkan pada Paragraf ke-3:\n     ; It hosts unique wildlife that thrives in total isolation. (Pernyataan 1 - BENAR, Paragraf 3)\n     ; It remains a rugged landscape protected by the vast ocean. (Pernyataan 2 - BENAR, Paragraf 3)\n     ; It offers a safe habitat for the Atlantic Yellow-nosed albatross. (Pernyataan 4 - BENAR, Paragraf 3)\n     ; It serves as a breeding ground for rare penguins and albatrosses. (Pernyataan 5 - BENAR, Paragraf 3)\n\n3. Analisis Poin Pengecoh:\n   ; Pernyataan 3 SALAH — Teks tidak pernah menyatakan lingkungan pulau ini diperuntukkan mendirikan pabrik industri besar.\n\n4. Kesimpulan Jawaban:\n   Jawaban: Pernyataan 1, Pernyataan 2, Pernyataan 4, dan Pernyataan 5.',
      distractorAnalysis: {
        'Option 3': 'Salah (Unsupported): Teks tidak pernah menyatakan bahwa lingkungan pulau ini diperuntukkan mendirikan pabrik industri besar.'
      }
    },
    {
      id: 4,
      textId: 1,
      number: 'Question 4',
      genre: 'Descriptive Text',
      type: 'multiple_choice',
      strategyId: 'topic_main_idea',
      question: 'Which statement best shows the main idea of the second paragraph?',
      options: [
        '(A) The settlement stands in defiance of the harsh elements.',
        '(B) The island follows the cultural rhythms of South Africa.',
        '(C) The residents maintain silence through local regulations.',
        '(D) The community builds a modern airport in a harsh climate.',
        '(E) The architecture features brightly painted houses by the sea.'
      ],
      correctAnswer: 'A',
      textualEvidence: 'Paragraf 2: "The only settlement on the island, known as Edinburgh of the Seven Seas, is a collection of sturdy, brightly painted houses that stand in defiance of the harsh oceanic elements."',
      explanation: '💡 Pembahasan & Alasan Guru (Strategi TKA: Topic / Main Idea):\n\n1. Penerapan Strategi TKA:\n   • Lacak *topic sentence* pada awal Paragraf 2 yang membahas pemukiman warga.\n\n2. Verifikasi Bukti Paragraf:\n   ; Paragraf 2: "The only settlement on the island... is a collection of sturdy, brightly painted houses that stand in defiance of the harsh oceanic elements."\n\n3. Analisis Poin Opsi:\n   ; (A) BENAR — Merangkum gagasan utama Paragraf 2 tentang ketahanan pemukiman warga menantang cuaca lautan yang sangat keras.\n   ; (B) SALAH — Ritme kehidupan diatur oleh lautan dan angin, bukan budaya Afrika Selatan.\n   ; (C) SALAH — Keheningan tercipta karena terisolasinya alam, bukan aturan hukum lokal.\n   ; (D) SALAH — Paragraf 2 menegaskan "There are no airports".\n   ; (E) SALAH — Rumah berwarna cerah hanya rincian pendukung.\n\n4. Kesimpulan Jawaban:\n   Jawaban yang benar adalah (A).',
      distractorAnalysis: {
        'B': 'Salah: Ritme hidupnya diatur oleh lautan dan angin, bukan budaya Afrika Selatan.',
        'C': 'Salah: Keheningan tercipta karena terisolasinya alam, bukan aturan hukum.',
        'D': 'Salah: Teks menegaskan \'There are no airports\'.',
        'E': 'Salah: Rumah berwarna cerah hanya satu detail arsitektur pendukung.'
      }
    },
    {
      id: 5,
      textId: 1,
      number: 'Question 5',
      genre: 'Descriptive Text',
      type: 'true_false',
      strategyId: 'true_false',
      question: 'Write True (T) or False (F) for each statement based on the text!',
      options: [
        { statement: 'Tristan da Cunha is the most isolated inhabited island on Earth.', correct: 'T' },
        { statement: 'Queen Mary\'s Peak is a dormant volcano that never experiences mist.', correct: 'F' },
        { statement: 'The island can be reached quickly by taking a flight from South Africa.', correct: 'F' },
        { statement: 'Edinburgh of the Seven Seas is the only human settlement on the island.', correct: 'T' },
        { statement: 'The island\'s vegetation consists of dense tropical forests and tall trees.', correct: 'F' }
      ],
      textualEvidence: 'Paragraf 1: "most isolated inhabited island on Earth" | Paragraf 1: "active volcano that often disappears into a thick shroud of mist" | Paragraf 2: "There are no airports... multi-day ship journey" | Paragraf 2: "The only settlement... Edinburgh of the Seven Seas" | Paragraf 3: "devoid of trees... vegetation consists mainly of hardy ferns and mosses"',
      explanation: '💡 Pembahasan & Alasan Guru (Strategi TKA: True / False Verification):\n\n1. Penerapan Strategi TKA: Evaluasi dan verifikasi setiap statement satu per satu berdasarkan kutipan paragraf.\n\n2. Rincian Bukti & Evaluasi Statement:\n   ; Statement 1 (TRUE, Paragraf 1): Sesuai fakta "most isolated inhabited island on Earth".\n   ; Statement 2 (FALSE, Paragraf 1): Gunung ini adalah gunung aktif ("active volcano") dan sering diselimuti kabut tebal ("shroud of mist").\n   ; Statement 3 (FALSE, Paragraf 2): Tidak ada bandara ("no airports"), hanya dapat diakses dengan kapal beberapa hari.\n   ; Statement 4 (TRUE, Paragraf 2): Sesuai fakta "The only settlement... Edinburgh of the Seven Seas".\n   ; Statement 5 (FALSE, Paragraf 3): Pulau ini gersang tanpa pohon ("devoid of trees"), vegetasi hanya berupa pakis & lumut.\n\n3. Kesimpulan Kunci:\n   Jawaban: [Statement 1: T, Statement 2: F, Statement 3: F, Statement 4: T, Statement 5: F].',
      distractorAnalysis: {}
    },

    // ----------------------------------------------------
    // TEXT 2: CILLIAN MURPHY (Q6 - Q10)
    // ----------------------------------------------------
    {
      id: 6,
      textId: 2,
      number: 'Question 6',
      genre: 'Descriptive Text',
      type: 'multiple_choice',
      strategyId: 'descriptive_text_strategy',
      question: 'What is the purpose of the text?',
      options: [
        '(A) To persuade readers to visit the actor\'s home in Ireland',
        '(B) To retell the author\'s experience meeting the actor in person',
        '(C) To describe the physical and professional traits of Cillian Murphy',
        '(D) To criticize the fashion sense of modern icons in the cinema industry',
        '(E) To entertain readers with a fictional story about an Irish mysterious man'
      ],
      correctAnswer: 'C',
      textualEvidence: 'Paragraf 1: "recognized for his striking physical features and his intense, transformative performances" | Paragraf 2: "celebrated for his rigorous work ethic and meticulous approach"',
      explanation: '💡 Pembahasan & Alasan Guru (Strategi TKA: Author\'s Social Function):\n\n1. Penerapan Strategi TKA:\n   • Teks bergenre Descriptive Text. Tujuan komunikatif dasarnya adalah mendeskripsikan subjek secara khusus.\n\n2. Verifikasi Bukti Paragraf:\n   ; Paragraf 1 menggambarkan ciri fisik (chiseled jawline, translucent blue eyes).\n   ; Paragraf 2 & 3 menggambarkan etos kerja profesional (rigorous work ethic, quiet intensity).\n\n3. Analisis Poin Opsi:\n   ; (A) SALAH — Teks tidak mengajak pembaca berwisata ke rumahnya.\n   ; (B) SALAH — Teks bukan berupa recount pengalaman pribadi penulis.\n   ; (C) BENAR — Teks bertujuan mendeskripsikan karakteristik fisik serta kualitas profesional Cillian Murphy.\n   ; (D) SALAH — Penulis memuji integritasnya, bukan mengkritik fashion.\n   ; (E) SALAH — Teks ini adalah biografi fakta faktual, bukan fiksi.\n\n4. Kesimpulan Jawaban:\n   Jawaban yang benar adalah (C).',
      distractorAnalysis: {
        'A': 'Salah: Teks tidak mengajak pembaca berwisata ke rumahnya.',
        'B': 'Salah: Teks bukan berupa recount pengalaman pribadi.',
        'D': 'Salah: Penulis memuji estetika dan integritasnya.',
        'E': 'Salah: Teks ini adalah artikel biografi/deskripsi fakta.'
      }
    },
    {
      id: 7,
      textId: 2,
      number: 'Question 7',
      genre: 'Descriptive Text',
      type: 'multiple_choice',
      strategyId: 'topic_main_idea',
      question: 'What is the main idea of the first paragraph?',
      options: [
        '(A) Most directors prefer Irish actors due to their striking jawlines.',
        '(B) Cillian Murphy\'s blue eyes are a powerful tool in his acting career.',
        '(C) The air of timeless elegance is mandatory for every high-fashion icon.',
        '(D) Translucent blue eyes are the only way to convey deep emotions in film.',
        '(E) Cillian Murphy is recognized for his unique physical traits and versatile acting.'
      ],
      correctAnswer: 'E',
      textualEvidence: 'Paragraf 1: "Cillian Murphy is an Irish actor widely recognized for his striking physical features and his intense, transformative performances... making him one of the most versatile actors of his generation."',
      explanation: '💡 Pembahasan & Alasan Guru (Strategi TKA: Topic / Main Idea):\n\n1. Penerapan Strategi TKA:\n   • Lacak *topic sentence* pada Paragraf 1 yang memperkenalkan pengenalan umum tokoh.\n\n2. Verifikasi Bukti Paragraf:\n   ; Paragraf 1: "...widely recognized for his striking physical features and his intense, transformative performances... versatile actors of his generation."\n\n3. Analisis Poin Opsi:\n   ; (A) SALAH — Teks tidak mengklaim sutradara hanya menyukai aktor Irlandia.\n   ; (B) SALAH — Mata biru adalah detail fisik pendukung, bukan gagasan utama paragraf utuh.\n   ; (C) SALAH — Teks tidak membuat generalisasi tentang syarat wajib ikon fashion.\n   ; (D) SALAH — Mata biru bukan satu-satunya cara menyampaikan emosi film.\n   ; (E) BENAR — Merangkum poin pengenalan fisik dan keahlian aktingnya yang transformatif.\n\n4. Kesimpulan Jawaban:\n   Jawaban yang benar adalah (E).',
      distractorAnalysis: {
        'A': 'Salah: Teks tidak mengklaim sutradara hanya menyukai aktor Irlandia.',
        'B': 'Salah: Mata biru adalah detail pendukung, bukan gagasan utama utuh.',
        'C': 'Salah: Bukan generalisasi syarat wajib bagi ikon fashion.',
        'D': 'Salah: Mata biru bukan satu-satunya cara menyampaikan emosi.'
      }
    },
    {
      id: 8,
      textId: 2,
      number: 'Question 8',
      genre: 'Descriptive Text',
      type: 'multiple_choice',
      strategyId: 'inference',
      question: 'What can be inferred from the text?',
      options: [
        '(A) Directors find it difficult to work with the actor because of his translucent blue eyes.',
        '(B) Cillian Murphy is an actor who prioritizes global fame and attending red carpet events.',
        '(C) The actor\'s preference for a private life in Ireland suggests he values his personal boundaries.',
        '(D) The actor believes that a successful career in cinema requires loud and aggressive performances.',
        '(E) The author suggests that Cillian Murphy\'s success is purely based on his physical attractiveness.'
      ],
      correctAnswer: 'C',
      textualEvidence: 'Paragraf 2: "Unlike many Hollywood stars, he leads a private life away from the limelight, often expressing a preference for the quietude of his home in Ireland over the glamour of red carpets."',
      explanation: '💡 Pembahasan & Alasan Guru (Strategi TKA: Inference & Logical Deduction):\n\n1. Penerapan Strategi TKA:\n   • Tarik kesimpulan tersembunyi yang logis dari fakta pilihan gaya hidup tokoh pada Paragraf 2.\n\n2. Verifikasi Bukti Paragraf:\n   ; Paragraf 2: "...leads a private life away from the limelight... preference for the quietude of his home in Ireland over the glamour of red carpets."\n\n3. Analisis Poin Opsi:\n   ; (A) SALAH — Paragraf 1 menyatakan sutradara menganggap mata birunya sebagai alat akting sinematik luar biasa.\n   ; (B) SALAH — Teks menyatakan ia menjauhi sorotan Hollywood dan karpet merah.\n   ; (C) BENAR — Dari pilihan hidup di Irlandia jauh dari sorotan, disimpulkan ia sangat menghargai privasi dan batas pribadi.\n   ; (D) SALAH — Paragraf 3 menyatakan ia menggunakan "quiet intensity", bukan aksi agresif berteriak.\n   ; (E) SALAH — Keberhasilannya didukung persiapan cermat dan kerja keras.\n\n4. Kesimpulan Jawaban:\n   Jawaban yang benar adalah (C).',
      distractorAnalysis: {
        'A': 'Salah: Sutradara menganggap mata birunya sebagai alat sinematik luar biasa.',
        'B': 'Salah: Ia menyukai ketenangan daripada karpet merah.',
        'D': 'Salah: Ia terkenal dengan \'quiet intensity\'.',
        'E': 'Salah: Keberhasilannya juga didukung persiapan cermat dan dedikasi.'
      }
    },
    {
      id: 9,
      textId: 2,
      number: 'Question 9',
      genre: 'Descriptive Text',
      type: 'multiple_select',
      strategyId: 'multi_select',
      question: 'Which of the following are the characteristics of Cillian Murphy?\nThere is more than one correct answer. Select all that apply!',
      options: [
        '[ ] A loud and booming dialogue style on screen',
        '[ ] A reserved and enigmatic personality in private life',
        '[ ] Striking physical features including a chiseled jawline',
        '[ ] A preference for the glamour of Hollywood\'s red carpets',
        '[ ] A meticulous preparation and deep immersion into his roles'
      ],
      correctAnswer: [1, 2, 4],
      textualEvidence: 'Paragraf 1: "striking physical features... sharp, chiseled jawline" | Paragraf 2: "reserved nature contributes to his enigmatic public image" | Paragraf 2 & 3: "meticulous preparation and complete immersion into his roles"',
      explanation: '💡 Pembahasan & Alasan Guru (Strategi TKA: Multi-Select Characteristics):\n\n1. Penerapan Strategi TKA:\n   • Lacak poin-poin karakteristik tokoh dari Paragraf 1, 2, dan 3.\n\n2. Verifikasi Bukti Paragraf:\n   ; A reserved and enigmatic personality in private life (Pernyataan 2 - BENAR, Paragraf 2)\n   ; Striking physical features including a chiseled jawline (Pernyataan 3 - BENAR, Paragraf 1)\n   ; A meticulous preparation and deep immersion into his roles (Pernyataan 5 - BENAR, Paragraf 2 & 3)\n\n3. Analisis Poin Pengecoh:\n   ; Pernyataan 1 SALAH — Paragraf 3 menegaskan ia tidak memerlukan "booming dialogue", melainkan menggunakan "quiet intensity".\n   ; Pernyataan 4 SALAH — Paragraf 2 menyatakan ia menghindari gemerlap karpet merah Hollywood.\n\n4. Kesimpulan Jawaban:\n   Jawaban: Pernyataan 2, Pernyataan 3, dan Pernyataan 5.',
      distractorAnalysis: {
        'Option 1': 'Salah: Teks menyebutkan ia TIDAK membutuhkan gestur keras atau dialogue berteriak.',
        'Option 4': 'Salah: Ia memilih menghindari karpet merah Hollywood.'
      }
    },
    {
      id: 10,
      textId: 2,
      number: 'Question 10',
      genre: 'Descriptive Text',
      type: 'categorization',
      strategyId: 'categorization',
      question: 'Categorize the following descriptions based on Cillian Murphy\'s whether they refer to Physical Appearance or Work Ethic / Personality!. Put a tick (✓) on each category!',
      options: {
        categories: ['Physical Appearance', 'Work Ethic / Personality'],
        items: [
          { statement: 'Possesses a chiseled jawline and lean build.', category: 'Physical Appearance' },
          { statement: 'Prefers a private life and the quietude of Ireland.', category: 'Work Ethic / Personality' },
          { statement: 'Piercing, translucent blue eyes.', category: 'Physical Appearance' },
          { statement: 'Meticulous preparation and complete immersion in roles.', category: 'Work Ethic / Personality' },
          { statement: 'Commands attention through subtle micro-expressions.', category: 'Work Ethic / Personality' }
        ]
      },
      textualEvidence: 'Paragraf 1: "chiseled jawline, lean build", "translucent blue eyes" | Paragraf 2 & 3: "private life", "meticulous preparation", "subtle micro-expressions"',
      explanation: '💡 Pembahasan & Alasan Guru (Strategi TKA: Categorization Analysis):\n\n1. Penerapan Strategi TKA: Kelompokkan rincian teks ke dalam kategori Ciri Fisik (Physical Appearance) atau Etos Kerja/Kepribadian (Work Ethic / Personality).\n\n2. Verifikasi Bukti Paragraf & Pengelompokan:\n   ; Item 1 (Physical Appearance, Paragraf 1): "chiseled jawline, lean build" adalah fisik langsung.\n   ; Item 2 (Work Ethic / Personality, Paragraf 2): "preference for the quietude of his home" merujuk pada kepribadian.\n   ; Item 3 (Physical Appearance, Paragraf 1): "translucent blue eyes" merujuk pada ciri mata fisik.\n   ; Item 4 (Work Ethic / Personality, Paragraf 2): "meticulous preparation" merujuk pada etos kerja profesional.\n   ; Item 5 (Work Ethic / Personality, Paragraf 3): "subtle micro-expressions" merujuk pada teknik kerja aktingnya.\n\n3. Kesimpulan Kunci:\n   Kategorisasi tepat memisahkan ciri fisik langsung dengan etos kerja dan kepribadian tokoh.',
      distractorAnalysis: {}
    },

    // ----------------------------------------------------
    // TEXT 3: GLOBAL SEED VAULT (Q11 - Q15)
    // ----------------------------------------------------
    {
      id: 11,
      textId: 3,
      number: 'Question 11',
      genre: 'Descriptive Text',
      type: 'multiple_select',
      strategyId: 'multi_select',
      question: 'Which of the following are characteristics of the Svalbard environment mentioned in the text?\nThere is more than one correct answer. Choose all that apply!',
      options: [
        '[ ] Biting winds and temperatures often drop to -25 °C.',
        '[ ] The region experiences a polar night where the sun never rises.',
        '[ ] Dense forests and lakes provide a natural barrier for the vault.',
        '[ ] The landscape is an endless expanse of white snow and jagged ice.',
        '[ ] Polar bears are mentioned as a common sight near the concrete wedge.'
      ],
      correctAnswer: [0, 1, 3],
      textualEvidence: 'Paragraf 3: "In winter, the region is plunged into a constant polar night where the sun never rises... endless expanse of white snow and jagged blue ice. The climate is dominated by biting winds and extreme temperatures that frequently drop to -25 degrees Celsius. This desolate setting, devoid of trees..."',
      explanation: '💡 Pembahasan & Alasan Guru (Strategi TKA: Multi-Select Factual Verification):\n\n1. Penerapan Strategi TKA:\n   • Lacak rincian kondisi lingkungan alam Svalbard pada Paragraf 3.\n\n2. Verifikasi Bukti Paragraf:\n   ; Biting winds and temperatures often drop to -25 °C. (Pernyataan 1 - BENAR, Paragraf 3)\n   ; The region experiences a polar night where the sun never rises. (Pernyataan 2 - BENAR, Paragraf 3)\n   ; The landscape is an endless expanse of white snow and jagged ice. (Pernyataan 4 - BENAR, Paragraf 3)\n\n3. Analisis Poin Pengecoh:\n   ; Pernyataan 3 SALAH — Paragraf 3 menegaskan wilayah ini gersang tanpa pohon ("devoid of trees").\n   ; Pernyataan 5 SALAH — Teks tidak pernah menyebutkan fakta keberadaan beruang kutub.\n\n4. Kesimpulan Jawaban:\n   Jawaban: Pernyataan 1, Pernyataan 2, dan Pernyataan 4.',
      distractorAnalysis: {
        'Option 3': 'Salah: Paragraf 3 menegaskan wilayah ini gersang tanpa pohon (\'devoid of trees\').',
        'Option 5': 'Salah: Teks tidak pernah menyebutkan beruang kutub.'
      }
    },
    {
      id: 12,
      textId: 3,
      number: 'Question 12',
      genre: 'Descriptive Text',
      type: 'multiple_choice',
      strategyId: 'inference',
      question: 'The author mentioned the entrance is "illuminated by a glittering light installation that makes it visible for miles". The phrase "glittering light" describes the entrance',
      options: [
        '(A) shines brightly like a beacon against the dark polar landscape.',
        '(B) is hidden under the snow and only visible during the daytime.',
        '(C) glows with gold and silver treasures stored inside the mountain.',
        '(D) appears small and round like a star falling from the Arctic sky.',
        '(E) flickers inconsistently due to the extreme freezing temperatures.'
      ],
      correctAnswer: 'A',
      textualEvidence: 'Paragraf 1: "illuminated by a glittering light installation that makes it visible for miles across the dark polar landscape."',
      explanation: '💡 Pembahasan & Alasan Guru (Strategi TKA: Figurative Meaning & Inference):\n\n1. Penerapan Strategi TKA:\n   • Pahami makna ungkapan "glittering light" dalam konteks pemandangan kutub pada Paragraf 1.\n\n2. Verifikasi Bukti Paragraf:\n   ; Paragraf 1: "...illuminated by a glittering light installation that makes it visible for miles across the dark polar landscape."\n\n3. Analisis Poin Opsi:\n   ; (A) BENAR — Ungkapan menggambarkan instalasi lampu yang memancarkan cahaya terang bagaikan suar (*beacon*) di tengah kutub yang gelap.\n   ; (B) SALAH — Cahaya tersebut membuatnya terlihat jelas dari jauh, bukan tersembunyi.\n   ; (C) SALAH — Simpanan di dalam fasilitas berupa benih tanaman, bukan harta karun emas.\n   ; (D) SALAH — Pintu masuknya berupa bangunan pasak beton persegi panjang.\n   ; (E) SALAH — Teks tidak menyatakan cahayanya berkedip-kedip tidak stabil.\n\n4. Kesimpulan Jawaban:\n   Jawaban yang benar adalah (A).',
      distractorAnalysis: {
        'B': 'Salah: Cahaya membuatnya terlihat dari jauh, bukan tersembunyi.',
        'C': 'Salah: Simpanan berupa benih, bukan harta karun emas.',
        'D': 'Salah: Bentuknya pasak beton persegi panjang.',
        'E': 'Salah: Teks tidak menyatakan cahayanya berkedip-kedip.'
      }
    },
    {
      id: 13,
      textId: 3,
      number: 'Question 13',
      genre: 'Descriptive Text',
      type: 'multiple_choice',
      strategyId: 'topic_main_idea',
      question: 'What idea does the text suggest about the Global Seed Vault?',
      options: [
        '(A) The challenges of building a facility in a bustling modern city',
        '(B) The negative impact of cooling systems on the surrounding permafrost',
        '(C) The economic growth of the Svalbard archipelago through seed tourism',
        '(D) The competition between nations to build their own "Doomsday Vaults"',
        '(E) The importance of global cooperation in safeguarding future food security'
      ],
      correctAnswer: 'E',
      textualEvidence: 'Paragraf 4: "It provides a sense of security for nations that rely on these biological resources to rebuild their food systems... vault ensures that the foundations of life remain safe for generations to come..."',
      explanation: '💡 Pembahasan & Alasan Guru (Strategi TKA: Topic / Main Idea):\n\n1. Penerapan Strategi TKA:\n   • Lacak kesimpulan utama teks pada Paragraf 4 yang membahas makna keberadaan Seed Vault.\n\n2. Verifikasi Bukti Paragraf:\n   ; Paragraf 4: "It provides a sense of security for nations... ensures that the foundations of life remain safe for generations to come..."\n\n3. Analisis Poin Opsi:\n   ; (A) SALAH — Fasilitas dibangun di pulau Arktik terpencil, bukan kota modern yang ramai.\n   ; (B) SALAH — Sistem pendingin merupakan sistem cadangan yang aman.\n   ; (C) SALAH — Teks tidak pernah membahas pariwisata ekonomi benih.\n   ; (D) SALAH — Teks tidak membahas persaingan antar negara.\n   ; (E) BENAR — Merangkum pentingnya kerjasama global menjaga keanekaragaman benih demi ketahanan pangan dunia.\n\n4. Kesimpulan Jawaban:\n   Jawaban yang benar adalah (E).',
      distractorAnalysis: {
        'A': 'Salah: Fasilitas dibangun di pulau Arktik terpencil.',
        'B': 'Salah: Sistem pendingin merupakan cadangan aman.',
        'C': 'Salah: Teks tidak membahas pariwisata benih.',
        'D': 'Salah: Teks tidak membahas kompetisi antar negara.'
      }
    },
    {
      id: 14,
      textId: 3,
      number: 'Question 14',
      genre: 'Descriptive Text',
      type: 'multiple_choice',
      strategyId: 'detail_information',
      question: 'Which detail would best persuade people about the importance of the Seed Vault?',
      options: [
        '(A) The role of the vault as a global insurance policy against disasters',
        '(B) The specialized four-ply foil packets used to store the seed samples',
        '(C) The specific depth of 120 meters carved into the sandstone mountain',
        '(D) The architectural design of the rectangular concrete wedge at the entrance',
        '(E) The distance of the facility from the bustling cities of the modern world'
      ],
      correctAnswer: 'A',
      textualEvidence: 'Paragraf 1 & 4: "specifically designed to protect the world\'s crop diversity from potential natural or man-made disasters... functions as a secure backup for the world\'s crop diversity."',
      explanation: '💡 Pembahasan & Alasan Guru (Strategi TKA: Persuasive Argument Verification):\n\n1. Penerapan Strategi TKA:\n   • Cari rincian paling mendasar dan persuasif mengenai nilai guna utama Seed Vault.\n\n2. Verifikasi Bukti Paragraf:\n   ; Paragraf 1 & 4: "...protect the world\'s crop diversity from potential natural or man-made disasters... functions as a secure backup..."\n\n3. Analisis Poin Opsi:\n   ; (A) BENAR — Alasan paling kuat dan persuasif adalah perannya sebagai polis asuransi keselamatan biologis dunia terhadap bencana.\n   ; (B) SALAH — Paragraf 2 menyatakan kemasan 3 lapis (*three-ply foil packets*), bukan 4 lapis.\n   ; (C) SALAH — Kedalaman pada Paragraf 1 adalah 130 meter, bukan 120 meter.\n   ; (D) SALAH — Desain beton pintu masuk hanyalah rincian arsitektur fisik.\n   ; (E) SALAH — Jarak lokasi bukan alasan utama fungsi esensialnya.\n\n4. Kesimpulan Jawaban:\n   Jawaban yang benar adalah (A).',
      distractorAnalysis: {
        'B': 'Salah: Teks menyatakan kemasan 3 lapis (*three-ply foil packets*).',
        'C': 'Salah: Kedalaman pada teks adalah 130 meter.',
        'D': 'Salah: Desain beton di pintu masuk hanyalah rincian fisik.',
        'E': 'Salah: Jarak lokasi bukan alasan utama fungsi utamanya.'
      }
    },
    {
      id: 15,
      textId: 3,
      number: 'Question 15',
      genre: 'Descriptive Text',
      type: 'categorization',
      strategyId: 'categorization',
      question: 'Categorize the following conditions based on the design of the Seed Vault into Environmental Factors or Technical Protection. Put a tick (✓) on each category!',
      options: {
        categories: ['Environmental Factors', 'Technical Protection'],
        items: [
          { statement: 'Use of the surrounding permafrost to stay naturally frozen.', category: 'Environmental Factors' },
          { statement: 'Storage of samples in specialized three-ply foil packages.', category: 'Technical Protection' },
          { statement: 'Constant -18 °C temperature maintained by cooling systems.', category: 'Technical Protection' },
          { statement: 'Location 130 meters deep inside a solid sandstone mountain.', category: 'Environmental Factors' },
          { statement: 'A striking concrete wedge and massive steel doors.', category: 'Technical Protection' }
        ]
      },
      textualEvidence: 'Paragraf 1 & 2: "solid sandstone mountain", "surrounding permafrost" | Paragraf 2: "three-ply foil packages", "automated cooling systems", "concrete wedge and massive steel doors"',
      explanation: '💡 Pembahasan & Alasan Guru (Strategi TKA: Categorization Analysis):\n\n1. Penerapan Strategi TKA: Pisahkan rincian yang berasal dari kondisi alamiah lingkungan Arktik (Environmental Factors) dengan sistem teknologi proteksi buatan (Technical Protection).\n\n2. Verifikasi Bukti Paragraf & Pengelompokan:\n   ; Item 1 (Environmental Factors, Paragraf 2): "surrounding permafrost" adalah faktor alamiah pembekuan.\n   ; Item 2 (Technical Protection, Paragraf 2): "specialized three-ply foil packages" adalah kemasan teknologi buatan.\n   ; Item 3 (Technical Protection, Paragraf 2): "automated cooling systems" adalah perangkat mesin teknis.\n   ; Item 4 (Environmental Factors, Paragraf 1): "solid sandstone mountain" adalah kedalaman batu alamiah.\n   ; Item 5 (Technical Protection, Paragraf 1 & 2): "concrete wedge and massive steel doors" adalah konstruksi teknis.\n\n3. Kesimpulan Kunci:\n   Kategorisasi akurat memisahkan faktor fisik alam kutub dengan teknologi proteksi buatan manusia.',
      distractorAnalysis: {}
    },

    // ----------------------------------------------------
    // TEXT 4: VANESSA NAKATE (Q16 - Q20)
    // ----------------------------------------------------
    {
      id: 16,
      textId: 4,
      number: 'Question 16',
      genre: 'Recount Text',
      type: 'multiple_choice',
      strategyId: 'recount_text_strategy',
      question: 'What triggered Vanessa Nakate to begin her journey as a climate activist in 2019?',
      options: [
        '(A) Her plan to work for the United Nations in Kampala',
        '(B) Her interest in joining international fashion movements',
        '(C) Her goal to publish a memoir about her graduate studies',
        '(D) Her desire to win an award from the World Economic Forum',
        '(E) Her concern regarding the unusually high temperatures in Uganda'
      ],
      correctAnswer: 'E',
      textualEvidence: 'Paragraf 1: "Vanessa Nakate\'s journey as a climate activist began in January 2019, after she became deeply concerned about the unusually high temperatures in her home country, Uganda."',
      explanation: '💡 Pembahasan & Alasan Guru (Strategi TKA: Recount Text Initial Event):\n\n1. Penerapan Strategi TKA:\n   • Temukan peristiwa awal (*Orientation / Initial Trigger*) yang melatarbelakangi aksi tokoh pada Paragraf 1.\n\n2. Verifikasi Bukti Paragraf:\n   ; Paragraf 1: "...began in January 2019, after she became deeply concerned about the unusually high temperatures in her home country, Uganda."\n\n3. Analisis Poin Opsi:\n   ; (A) SALAH — Kerjasama dengan UNICEF baru terjadi belakangan setelah ia terkenal (Paragraf 4).\n   ; (B) SALAH — Tidak ada hubungannya dengan gerakan fashion.\n   ; (C) SALAH — Menerbitkan memoar baru dilakukan pada tahun 2021 (Paragraf 4).\n   ; (D) SALAH — Kehadirannya di Davos bukan untuk mengejar penghargaan.\n   ; (E) BENAR — Pemicu awal aksinya pada Januari 2019 adalah rasa keprihatinannya atas kenaikan suhu udara ekstrem di Uganda.\n\n4. Kesimpulan Jawaban:\n   Jawaban yang benar adalah (E).',
      distractorAnalysis: {
        'A': 'Salah: Kerjasama dengan UNICEF terjadi belakangan.',
        'B': 'Salah: Tidak ada hubungannya dengan gerakan fashion.',
        'C': 'Salah: Menerbitkan memoar terjadi pada tahun 2021.',
        'D': 'Salah: Ia hadir di Davos bukan untuk mengejar penghargaan.'
      }
    },
    {
      id: 17,
      textId: 4,
      number: 'Question 17',
      genre: 'Recount Text',
      type: 'multiple_choice',
      strategyId: 'recount_text_strategy',
      question: 'Which of the following options best shows the key moments in Vanessa\'s life as told in the text?',
      options: [
        '(A) (1) Protesting alone (2) Starting a movement (3) Launching a school project (4) Publishing a memoir',
        '(B) (1) Graduating university (2) Moving to Davos (3) Working as a technician (4) Becoming a photographer',
        '(C) (1) Studying in Europe (2) Joining a singing club (3) Planting trees (4) Leading a strike in Sweden',
        '(D) (1) Feeling skeptical (2) Retiring from activism (3) Writing a book (4) Visiting world leaders',
        '(E) (1) Becoming a quiet graduate (2) Leaving Uganda (3) Refusing to speak (4) Ignoring the rainforest'
      ],
      correctAnswer: 'A',
      textualEvidence: 'Paragraf 1: "stood alone with her handmade signs" | Paragraf 2: "founded the Rise Up Movement" | Paragraf 3: "launching the Vash Green Schools Project" | Paragraf 4: "published a memoir titled A Bigger Picture"',
      explanation: '💡 Pembahasan & Alasan Guru (Strategi TKA: Recount Chronological Order):\n\n1. Penerapan Strategi TKA:\n   • Urutkan perjalanan hidup dan pencapaian tokoh secara kronologis berdasarkan urutan Paragraf 1 hingga 4.\n\n2. Verifikasi Bukti Paragraf:\n   ; Paragraf 1 (2019): "stood alone with her handmade signs..." (Aksi protes solo)\n   ; Paragraf 2 (Akhir 2019): "founded the Rise Up Movement..." (Mendirikan gerakan)\n   ; Paragraf 3: "launching the Vash Green Schools Project..." (Proyek sekolah hijau)\n   ; Paragraf 4 (2021): "published a memoir titled A Bigger Picture..." (Menerbitkan memoar)\n\n3. Analisis Poin Opsi:\n   ; (A) BENAR — Mengurutkan 4 tahapan aksi secara tepat sesuai paragraf 1 sampai 4.\n   ; (B) SALAH — Ia bukan teknisi atau fotografer.\n   ; (C) SALAH — Ia tidak memimpin mogok di Swedia.\n   ; (D) SALAH — Ia tidak pernah pensiun dari aktivisme.\n   ; (E) SALAH — Ia tidak menolak berbicara.\n\n4. Kesimpulan Jawaban:\n   Jawaban yang benar adalah (A).',
      distractorAnalysis: {
        'B': 'Salah: Ia bukan teknisi atau fotografer.',
        'C': 'Salah: Ia tidak memimpin mogok di Swedia.',
        'D': 'Salah: Ia tidak pernah pensiun dari aktivisme.',
        'E': 'Salah: Ia tidak menolak bicara.'
      }
    },
    {
      id: 18,
      textId: 4,
      number: 'Question 18',
      genre: 'Recount Text',
      type: 'multiple_select',
      strategyId: 'multi_select',
      question: 'Why did Vanessa Nakate decide to stand alone outside the gates of the Parliament?\nThere is more than one correct answer. Choose all that apply!',
      options: [
        '[ ] To promote her new memoir to the politicians passing by',
        '[ ] To ask for a job as a quiet graduate at the parliament office',
        '[ ] To demonstrate her persistence as a determined climate activist',
        '[ ] To raise awareness about rising temperatures and unpredictable weather',
        '[ ] To demand government acknowledgment of climate emergencies in Africa'
      ],
      correctAnswer: [2, 3, 4],
      textualEvidence: 'Paragraf 1: "protesting outside the gates... stood alone with her handmade signs... transition into a determined activist, as she demanded that the government acknowledge climate emergencies..."',
      explanation: '💡 Pembahasan & Alasan Guru (Strategi TKA: Multi-Select Motivation Analysis):\n\n1. Penerapan Strategi TKA:\n   • Lacak motivasi dan alasan utama aksi protes solo Vanessa pada Paragraf 1.\n\n2. Verifikasi Bukti Paragraf:\n   ; To demonstrate her persistence as a determined climate activist (Pernyataan 3 - BENAR, Paragraf 1)\n   ; To raise awareness about rising temperatures and unpredictable weather (Pernyataan 4 - BENAR, Paragraf 1)\n   ; To demand government acknowledgment of climate emergencies in Africa (Pernyataan 5 - BENAR, Paragraf 1)\n\n3. Analisis Poin Pengecoh:\n   ; Pernyataan 1 SALAH — Buku memoar baru ditulis dan diterbitkan pada tahun 2021 (Paragraf 4).\n   ; Pernyataan 2 SALAH — Aksi protesnya bukan untuk melamar pekerjaan kantor parlemen.\n\n4. Kesimpulan Jawaban:\n   Jawaban: Pernyataan 3, Pernyataan 4, dan Pernyataan 5.',
      distractorAnalysis: {
        'Option 1': 'Salah: Memoar belum ada tahun 2019.',
        'Option 2': 'Salah: Aksi protesnya bukan untuk melamar pekerjaan.'
      }
    },
    {
      id: 19,
      textId: 4,
      number: 'Question 19',
      genre: 'Recount Text',
      type: 'multiple_choice',
      strategyId: 'topic_main_idea',
      question: 'Which statement best shows the main idea of the third paragraph?',
      options: [
        '(A) The publication of a memoir that documents Vanessa\'s journey as an icon',
        '(B) Vanessa Nakate\'s early life and her graduation from a university in Uganda',
        '(C) The history of climate strikes led by international youth movements in Europe',
        '(D) The incident at the World Economic Forum where Vanessa was cropped out of a photo',
        '(E) Vanessa\'s shift toward practical environmental solutions and the empowerment of girls'
      ],
      correctAnswer: 'E',
      textualEvidence: 'Paragraf 3: "As her influence grew, Nakate shifted some of her focus toward practical solutions through the Vash Green Schools Project... started advocating for the education of girls..."',
      explanation: '💡 Pembahasan & Alasan Guru (Strategi TKA: Topic / Main Idea):\n\n1. Penerapan Strategi TKA:\n   • Lacak *topic sentence* pada Paragraf 3 yang membahas fokus baru aksinya.\n\n2. Verifikasi Bukti Paragraf:\n   ; Paragraf 3: "...shifted some of her focus toward practical solutions through the Vash Green Schools Project... started advocating for the education of girls..."\n\n3. Analisis Poin Opsi:\n   ; (A) SALAH — Penerbitan memoar dibahas di Paragraf 4.\n   ; (B) SALAH — Kelulusan dibahas di Paragraf 1.\n   ; (C) SALAH — Bukan sejarah gerakan di Eropa.\n   ; (D) SALAH — Insiden pemotongan foto di Davos dibahas di Paragraf 2.\n   ; (E) BENAR — Merangkum pergeseran aksi menuju solusi praktis proyek sekolah dan pemberdayaan anak perempuan.\n\n4. Kesimpulan Jawaban:\n   Jawaban yang benar adalah (E).',
      distractorAnalysis: {
        'A': 'Salah: Memoar dibahas di paragraf 4.',
        'B': 'Salah: Kelulusan dibahas di paragraf 1.',
        'C': 'Salah: Bukan sejarah gerakan di Eropa.',
        'D': 'Salah: Potong foto di Davos dibahas di paragraf 2.'
      }
    },
    {
      id: 20,
      textId: 4,
      number: 'Question 20',
      genre: 'Recount Text',
      type: 'true_false',
      strategyId: 'true_false',
      question: 'Write True (T) or False (F) for each statement based on the text!',
      options: [
        { statement: 'Vanessa Nakate began her activism after graduating from university.', correct: 'T' },
        { statement: 'The Rise Up Movement was founded to silence the voices of African activists.', correct: 'F' },
        { statement: 'Vanessa Nakate was famously cropped out of a photo at the Davos forum.', correct: 'T' },
        { statement: 'The Vash Green Schools Project installs expensive luxury cooling systems.', correct: 'F' },
        { statement: 'Vanessa Nakate believes that educating girls helps build climate resilience.', correct: 'T' }
      ],
      textualEvidence: 'Paragraf 1: "transition from a quiet graduate into a determined activist" | Paragraf 2: "founded the Rise Up Movement to amplify the voices..." | Paragraf 2: "famously cropped out of a photo... at Davos" | Paragraf 3: "installs solar panels and eco-friendly cookstoves" | Paragraf 3: "advocating for the education of girls, linking it directly to climate resilience"',
      explanation: '💡 Pembahasan & Alasan Guru (Strategi TKA: True / False Verification):\n\n1. Penerapan Strategi TKA: Verifikasi setiap statement berdasarkan kutipan paragraf 1, 2, dan 3.\n\n2. Rincian Bukti & Evaluasi Statement:\n   ; Statement 1 (TRUE, Paragraf 1): Sesuai fakta ia memulai aksinya setelah lulus kuliah ("transition from a quiet graduate").\n   ; Statement 2 (FALSE, Paragraf 2): Gerakan didirikan untuk memperkuat suara ("amplify voices"), bukan membungkam.\n   ; Statement 3 (TRUE, Paragraf 2): Sesuai insiden foto dipotong di forum Davos ("cropped out of a photo").\n   ; Statement 4 (FALSE, Paragraf 3): Proyek memasang panel surya & kompor ramah lingkungan, bukan pendingin mewah.\n   ; Statement 5 (TRUE, Paragraf 3): Sesuai fakta pendidikan anak perempuan mendukung ketahanan iklim ("climate resilience").\n\n3. Kesimpulan Kunci:\n   Jawaban: [Statement 1: T, Statement 2: F, Statement 3: T, Statement 4: F, Statement 5: T].',
      distractorAnalysis: {}
    },

    // ----------------------------------------------------
    // TEXT 5: DESMOND TUTU (Q21 - Q25)
    // ----------------------------------------------------
    {
      id: 21,
      textId: 5,
      number: 'Question 21',
      genre: 'Recount Text',
      type: 'multiple_choice',
      strategyId: 'recount_text_strategy',
      question: 'Which of the following lists correctly shows the key stages of Desmond Tutu\'s life in chronological order?',
      options: [
        '(A) Calling for a global boycott, Winning the Nobel Peace Prize, Ending apartheid, Born in 1931',
        '(B) Winning the Nobel Peace Prize (1984), Born in 1931, Ending apartheid, Campaigning for climate justice',
        '(C) Born (1931), Winning the Nobel Peace Prize (1984), Identifying climate change as a moral challenge, Passing away (2021)',
        '(D) Starting the Legacy Foundation, Born in 1931, Opposing racial segregation, Winning the Nobel Peace Prize',
        '(E) Transitioning to renewable energy, Winning the Nobel Peace Prize, Passing away in 2021, Born in 1931'
      ],
      correctAnswer: 'C',
      textualEvidence: 'Paragraf 1: Born in 1931 -> Nobel Peace Prize in 1984 -> Later years: climate change as a moral challenge | Paragraf 4: Until his passing in 2021',
      explanation: '💡 Pembahasan & Alasan Guru (Strategi TKA: Chronological Sequence Analysis):\n\n1. Penerapan Strategi TKA:\n   • Lacak urutan tahun dan peristiwa sejarah hidup Desmond Tutu dari Paragraf 1 sampai Paragraf 4.\n\n2. Verifikasi Bukti Paragraf:\n   ; Paragraf 1: Lahir pada tahun 1931 ("Born in 1931")\n   ; Paragraf 1: Memenangkan Nobel Peace Prize tahun 1984 ("winning Nobel Peace Prize in 1984")\n   ; Paragraf 1: Pada masa tuanya mengidentifikasi krisis iklim sebagai tantangan moral\n   ; Paragraf 4: Wafat pada tahun 2021 ("Until his passing in 2021")\n\n3. Analisis Poin Opsi:\n   ; (A) SALAH — Tahun lahir diletakkan di paling akhir.\n   ; (B) SALAH — Tahun Nobel 1984 diletakkan sebelum tahun lahir 1931.\n   ; (C) BENAR — Mengurutkan secara akurat: Lahir (1931) → Nobel (1984) → Isu Iklim → Wafat (2021).\n   ; (D) SALAH — Pendirian yayasan diletakkan di paling awal.\n   ; (E) SALAH — Tahun lahir diletakkan di paling akhir.\n\n4. Kesimpulan Jawaban:\n   Jawaban yang benar adalah (C).',
      distractorAnalysis: {
        'A': 'Salah: Tahun lahir diletakkan di paling akhir.',
        'B': 'Salah: Nobel diletakkan sebelum tahun lahir.',
        'D': 'Salah: Pendirian yayasan di paling awal.',
        'E': 'Salah: Tahun lahir di urutan terakhir.'
      }
    },
    {
      id: 22,
      textId: 5,
      number: 'Question 22',
      genre: 'Recount Text',
      type: 'multiple_choice',
      strategyId: 'detail_information',
      question: 'What was Desmond Tutu primarily known for globally?',
      options: [
        '(A) His leadership in building luxury resorts throughout South Africa',
        '(B) His career as a professional scientist studying fossil fuel emissions',
        '(C) His achievement as the first person to identify the concept of Ubuntu',
        '(D) His role in ending apartheid and his dedication to environmental justice',
        '(E) His work as a financial advisor for large international oil and gas companies'
      ],
      correctAnswer: 'D',
      textualEvidence: 'Paragraf 1: "Archbishop Desmond Tutu was a towering figure in South African history, known globally for his role in ending apartheid and his subsequent dedication to environmental justice."',
      explanation: '💡 Pembahasan & Alasan Guru (Strategi TKA: Detail Information):\n\n1. Penerapan Strategi TKA:\n   • Kata kunci: "known globally for".\n   • Lakukan scanning pada kalimat pertama Paragraf 1.\n\n2. Verifikasi Bukti Paragraf:\n   ; Paragraf 1: "...known globally for his role in ending apartheid and his subsequent dedication to environmental justice."\n\n3. Analisis Poin Opsi:\n   ; (A) SALAH — Ia bukan pengembang resor mewah.\n   ; (B) SALAH — Ia bukan ilmuwan emisi fosil profesional.\n   ; (C) SALAH — Ubuntu adalah filosofi tradisional Afrika yang sudah ada lama sebelum dirinya.\n   ; (D) BENAR — Sesuai fakta eksplisit Paragraf 1, ia dikenal atas perannya mengakhiri apartheid dan dedikasinya pada keadilan lingkungan.\n   ; (E) SALAH — Ia menentang keras industri minyak dan gas.\n\n4. Kesimpulan Jawaban:\n   Jawaban yang benar adalah (D).',
      distractorAnalysis: {
        'A': 'Salah: Ia bukan pengembang resor mewah.',
        'B': 'Salah: Ia bukan ilmuwan emisi fosil.',
        'C': 'Salah: Ubuntu adalah filosofi tradisional Afrika yang sudah ada sebelumnya.',
        'E': 'Salah: Ia menolak industri fosil.'
      }
    },
    {
      id: 23,
      textId: 5,
      number: 'Question 23',
      genre: 'Recount Text',
      type: 'multiple_select',
      strategyId: 'multi_select',
      question: 'Which actions did Desmond Tutu take to promote environmental protection?\nThere is more than one correct answer. Choose all that apply!',
      options: [
        '[ ] Urging institutions to divest from coal, oil, and gas',
        '[ ] Labeling climate change as "the apartheid of our era"',
        '[ ] Calling for a "global boycott" of the fossil fuel industry',
        '[ ] Ignoring specific data and opposing renewable energy policies',
        '[ ] Establishing the first renewable energy company in South Africa'
      ],
      correctAnswer: [0, 1, 2],
      textualEvidence: 'Paragraf 1: "labeling it \"the apartheid of our era\"" | Paragraf 2: "call for a \"global boycott\" of the fossil fuel industry... urging institutions to divest from coal, oil, and gas..."',
      explanation: '💡 Pembahasan & Alasan Guru (Strategi TKA: Multi-Select Actions Verification):\n\n1. Penerapan Strategi TKA:\n   • Lacak bentuk-bentuk tindakan nyata Desmond Tutu dalam advokasi lingkungan pada Paragraf 1 dan 2.\n\n2. Verifikasi Bukti Paragraf:\n   ; Urging institutions to divest from coal, oil, and gas (Pernyataan 1 - BENAR, Paragraf 2)\n   ; Labeling climate change as "the apartheid of our era" (Pernyataan 2 - BENAR, Paragraf 1)\n   ; Calling for a "global boycott" of the fossil fuel industry (Pernyataan 3 - BENAR, Paragraf 2)\n\n3. Analisis Poin Pengecoh:\n   ; Pernyataan 4 SALAH — Paragraf 3 menyuarakan dukungan penuh pada energi terbarukan.\n   ; Pernyataan 5 SALAH — Ia bertindak melalui persuasi moral, bukan mendirikan perusahaan bisnis komersial.\n\n4. Kesimpulan Jawaban:\n   Jawaban: Pernyataan 1, Pernyataan 2, dan Pernyataan 3.',
      distractorAnalysis: {
        'Option 4': 'Salah: Ia mendorong alih energi terbarukan.',
        'Option 5': 'Salah: Ia tidak mendirikan perusahaan energi bisnis.'
      }
    },
    {
      id: 24,
      textId: 5,
      number: 'Question 24',
      genre: 'Recount Text',
      type: 'multiple_choice',
      strategyId: 'inference',
      question: 'Why did Desmond Tutu believe that international pressure should be applied to the fossil fuel industry?',
      options: [
        '(A) He wanted to build a legacy foundation for coal and oil companies.',
        '(B) He believed climate change was a spiritual issue without practical action.',
        '(C) He saw environmental destruction as a profound injustice affecting the poor.',
        '(D) He aimed to replace the concept of Ubuntu with a scientific framework.',
        '(E) He thought the apartheid regime was more dangerous than carbon emissions.'
      ],
      correctAnswer: 'C',
      textualEvidence: 'Paragraf 2: "Tutu argued that the destruction of the environment was a profound injustice that disproportionately affected the poor and marginalized."',
      explanation: '💡 Pembahasan & Alasan Guru (Strategi TKA: Cause & Effect Reasoning):\n\n1. Penerapan Strategi TKA:\n   • Temukan alasan mendasarnya menuntut boikot industri fosil pada Paragraf 2.\n\n2. Verifikasi Bukti Paragraf:\n   ; Paragraf 2: "...destruction of the environment was a profound injustice that disproportionately affected the poor and marginalized."\n\n3. Analisis Poin Opsi:\n   ; (A) SALAH — Yayasan miliknya berfokus pada keadilan sosial & lingkungan, bukan mendukung perusahaan fosil.\n   ; (B) SALAH — Ia mendorong aksi praktis nyata (boikot/divestasi).\n   ; (C) BENAR — Sesuai fakta Paragraf 2, ia melihat perusakan lingkungan sebagai ketidakadilan berat yang paling memukul rakyat miskin.\n   ; (D) SALAH — Ia menguatkan filosofinya dengan konsep Ubuntu.\n   ; (E) SALAH — Ia menyetarakan krisis iklim sama bahayanya dengan apartheid.\n\n4. Kesimpulan Jawaban:\n   Jawaban yang benar adalah (C).',
      distractorAnalysis: {
        'A': 'Salah: Yayasan miliknya berfokus pada keadilan sosial & lingkungan.',
        'B': 'Salah: Ia mendorong aksi praktis (boikot/divestasi).',
        'D': 'Salah: Ia menggunakan konsep Ubuntu memperkuat filosofinya.',
        'E': 'Salah: Ia menyetarakan krisis iklim sebagai apartheid.'
      }
    },
    {
      id: 25,
      textId: 5,
      number: 'Question 25',
      genre: 'Recount Text',
      type: 'categorization',
      strategyId: 'categorization',
      question: 'Categorize the following actions based on whether they refer to Desmond Tutu\'s role during the Anti-Apartheid Movement or his Environmental Justice Advocacy. Put a tick (✓) on the correct column!',
      options: {
        categories: ['Anti-Apartheid Movement', 'Environmental Justice Advocacy'],
        items: [
          { statement: 'Winning the Nobel Peace Prize in 1984 for opposing racial segregation', category: 'Anti-Apartheid Movement' },
          { statement: 'Calling for a "global boycott" of the fossil fuel industry', category: 'Environmental Justice Advocacy' },
          { statement: 'Promoting the concept of Ubuntu to show the interconnectedness of all living beings', category: 'Environmental Justice Advocacy' },
          { statement: 'Identifying climate change as the "apartheid of our era."', category: 'Environmental Justice Advocacy' },
          { statement: 'Using international pressure and sanctions to topple a regime of racial injustice', category: 'Anti-Apartheid Movement' }
        ]
      },
      textualEvidence: 'Paragraf 1: "opposing racial segregation, winning Nobel Peace Prize in 1984" | Paragraf 2: "call for a global boycott... fossil fuel industry" | Paragraf 3: "African concept of Ubuntu" | Paragraf 1: "apartheid of our era"',
      explanation: '💡 Pembahasan & Alasan Guru (Strategi TKA: Categorization Matrix Analysis):\n\n1. Penerapan Strategi TKA: Kelompokkan aksi ke dalam kategori Perjuangan Anti-Apartheid atau Advokasi Keadilan Lingkungan.\n\n2. Verifikasi Bukti Paragraf & Pengelompokan:\n   ; Item 1 (Anti-Apartheid Movement, Paragraf 1): Nobel 1984 diberikan atas aksi menentang pemisahan rasial.\n   ; Item 2 (Environmental Justice Advocacy, Paragraf 2): Seruan boikot global industri fosil adalah advokasi iklim.\n   ; Item 3 (Environmental Justice Advocacy, Paragraf 3): Konsep Ubuntu dipakai menunjukkan keterikatan alam.\n   ; Item 4 (Environmental Justice Advocacy, Paragraf 1): Label "apartheid of our era" merujuk pada isu iklim.\n   ; Item 5 (Anti-Apartheid Movement, Paragraf 2): Sanksi internasional menumbangkan rezim rasial adalah anti-apartheid.\n\n3. Kesimpulan Kunci:\n   Kategorisasi akurat memisahkan perjuangan hak asasi anti-rasial dengan gerakan pelestarian ekologi.',
      distractorAnalysis: {}
    },

    // ----------------------------------------------------
    // TEXT 6: ECOCLIN VACUUM (Q26 - Q32, 7 QUESTIONS)
    // ----------------------------------------------------
    {
      id: 26,
      textId: 6,
      number: 'Question 26',
      genre: 'Procedure Text',
      type: 'multiple_select',
      strategyId: 'multi_select',
      question: 'Which statements are supported by the information in the text?\nThere is more than one correct answer. Choose all correct answers!',
      options: [
        '[ ] The installation service is available to customers who have purchased the device.',
        '[ ] The robot must be placed on the base for charging before operation.',
        '[ ] Too many obstacles can cause inefficient and faulty map directions.',
        '[ ] All components must be removed from the packaging before installation.',
        '[ ] The EcoClin Vacuum can only connect to a 5G Wi-Fi network.'
      ],
      correctAnswer: [1, 2, 3],
      textualEvidence: 'Langkah 6: "Place the EcoClin Vacuum on the base for its charge and start working." | Langkah 10: "Too many obstacles can lead to a faulty or inefficient map creation." | Langkah 1: "Open the outer packaging... remove protective bags on the robot and the station."',
      explanation: '💡 Pembahasan & Alasan Guru (Strategi TKA: Procedure Text Multi-Select):\n\n1. Penerapan Strategi TKA:\n   • Verifikasi setiap poin informasi berdasarkan petunjuk instalasi Langkah 1 hingga 10.\n\n2. Verifikasi Bukti Paragraf:\n   ; The robot must be placed on the base for charging before operation. (Pernyataan 2 - BENAR, Langkah 6)\n   ; Too many obstacles can cause inefficient and faulty map directions. (Pernyataan 3 - BENAR, Langkah 10)\n   ; All components must be removed from the packaging before installation. (Pernyataan 4 - BENAR, Langkah 1)\n\n3. Analisis Poin Pengecoh:\n   ; Pernyataan 1 SALAH — Teks tidak memuat informasi ketersediaan jasa teknisi instalasi.\n   ; Pernyataan 5 SALAH — Catatan (*Note*) menegaskan jaringan Wi-Fi wajib 2.4G, bukan 5G.\n\n4. Kesimpulan Jawaban:\n   Jawaban: Pernyataan 2, Pernyataan 3, dan Pernyataan 4.',
      distractorAnalysis: {
        'Option 1': 'Salah: Teks tidak menyebutkan ketersediaan jasa instalasi.',
        'Option 5': 'Salah: Note menegaskan jaringan Wi-Fi wajib 2.4G.'
      }
    },
    {
      id: 27,
      textId: 6,
      number: 'Question 27',
      genre: 'Procedure Text',
      type: 'multiple_choice',
      strategyId: 'procedure_text_strategy',
      question: 'The author\'s intention to write the text is',
      options: [
        '(A) to tell users how to connect the device with wireless connection.',
        '(B) to give instruction on how to use nonautomatic vacuum cleaner.',
        '(C) to describe the chronological steps to solve issues in using the device.',
        '(D) to help users operate the device safely and effectively.',
        '(E) to guide readers to maintain the device in a proper way.'
      ],
      correctAnswer: 'D',
      textualEvidence: 'Langkah 1–10 & Catatan: Petunjuk lengkap cara membuka kemasan, merakit sikat, kantong debu, mengisi daya, hingga menghubungkan ke aplikasi.',
      explanation: '💡 Pembahasan & Alasan Guru (Strategi TKA: Author\'s Intention in Procedure Text):\n\n1. Penerapan Strategi TKA:\n   • Teks bergenre Procedure Text (Manual/Installation Guide) yang bertujuan membimbing pengguna merakit dan mengoperasikan alat.\n\n2. Verifikasi Bukti Paragraf:\n   ; Keseluruhan Langkah 1 hingga 10 memberikan prosedur sistematis perakitan dan operasional awal perangkat.\n\n3. Analisis Poin Opsi:\n   ; (A) SALAH — Menghubungkan nirkabel hanya satu langkah kecil (Langkah 8).\n   ; (B) SALAH — Perangkat ini beroperasi secara otomatis (*Intelligent Robotic Vacuum*).\n   ; (C) SALAH — Teks ini panduan instalasi awal, bukan sekadar penanganan masalah (*troubleshooting*).\n   ; (D) BENAR — Sesuai fungsi teks prosedur untuk membantu pengguna memasang dan mengoperasikan alat dengan aman & efektif.\n   ; (E) SALAH — Pemeliharaan jangka panjang bukan fokus utama petunjuk perakitan awal.\n\n4. Kesimpulan Jawaban:\n   Jawaban yang benar adalah (D).',
      distractorAnalysis: {
        'A': 'Salah: Menghubungkan nirkabel hanya salah satu langkah.',
        'B': 'Salah: Perangkat ini otomatis (*robotic*).',
        'C': 'Salah: Teks ini panduan instalasi, bukan sekadar *troubleshooting*.',
        'E': 'Salah: Pemeliharaan berkala bukan fokus utama petunjuk awal.'
      }
    },
    {
      id: 28,
      textId: 6,
      number: 'Question 28',
      genre: 'Procedure Text',
      type: 'multiple_choice',
      strategyId: 'procedure_text_strategy',
      question: 'What might happen if the side brush is not installed correctly?',
      options: [
        '(A) The device\'s powerful suction may not work effectively.',
        '(B) It could affect the battery\'s durability.',
        '(C) The device may not clean edges effectively.',
        '(D) It might not be able to prevent hair tangles.',
        '(E) It may affect the device\'s ability in mapping navigation.'
      ],
      correctAnswer: 'C',
      textualEvidence: 'Langkah 3: "Take out the side brush from the accessory kit. Align it with the card slot, then firmly press it down. Ensure to hear a \\"click\\" sound..."',
      explanation: '💡 Pembahasan & Alasan Guru (Strategi TKA: Functional Component Cause-Effect):\n\n1. Penerapan Strategi TKA:\n   • Analisis fungsi komponen *side brush* (sikat samping) yang dijelaskan pada Langkah 3.\n\n2. Verifikasi Bukti Paragraf:\n   ; Langkah 3 menjelaskan pemasangan sikat samping di bagian bawah robot. Sikat samping berfungsi menyapu kotoran di sudut dan sepanjang tepi dinding (*edges*).\n\n3. Analisis Poin Opsi:\n   ; (A) SALAH — Daya hisap utama dihasilkan oleh mesin vakum di bagian tengah.\n   ; (B) SALAH — Sikat samping tidak mempengaruhi daya tahan baterai.\n   ; (C) BENAR — Apabila sikat samping tidak terpasang mantap, robot tidak dapat menyapu kotoran di tepi ruangan (*edges*) secara efektif.\n   ; (D) SALAH — Mencegah rambut tersangkut bukan fungsi utama sikat samping.\n   ; (E) SALAH — Navigasi pemetaan diatur oleh sensor navigasi di bagian atas robot (Langkah 10).\n\n4. Kesimpulan Jawaban:\n   Jawaban yang benar adalah (C).',
      distractorAnalysis: {
        'A': 'Salah: Daya hisap diatur oleh motor utama.',
        'B': 'Salah: Sikat samping tidak mempengaruhi ketahanan baterai.',
        'D': 'Salah: Mencegah rambut tersangkut bukan fungsi utama sikat samping.',
        'E': 'Salah: Navigasi dilakukan oleh sensor di bagian atas.'
      }
    },
    {
      id: 29,
      textId: 6,
      number: 'Question 29',
      genre: 'Procedure Text',
      type: 'multiple_choice',
      strategyId: 'procedure_text_strategy',
      question: 'If the robot fails to charge, what installation step should be checked first?',
      options: [
        '(A) The rubber C-shaped band',
        '(B) The QR code on the device',
        '(C) The card slot in the accessory kit',
        '(D) The base and station connection',
        '(E) The dust cabin in the Omni station'
      ],
      correctAnswer: 'D',
      textualEvidence: 'Langkah 5: "Align the base with the station and place it parallel to the station, gently push it inward. Ensure that a \\"click\\" sound is heard..." | Langkah 6: "Place the EcoClin Vacuum on the base for its charge and start working."',
      explanation: '💡 Pembahasan & Alasan Guru (Strategi TKA: Troubleshooting Sequence):\n\n1. Penerapan Strategi TKA:\n   • Lacak hubungan antarlangkah pengisian daya pada Langkah 5 dan Langkah 6.\n\n2. Verifikasi Bukti Paragraf:\n   ; Langkah 5 & 6: Robot mengisi daya ketika diletakkan di atas *base* yang terhubung sempurna ke *station*. Jika pengisian daya gagal, sambungan *base* dan *station* (Langkah 5) harus diperiksa pertama kali.\n\n3. Analisis Poin Opsi:\n   ; (A) SALAH — Rubber band adalah pelindung benturan saat pengiriman (Langkah 2).\n   ; (B) SALAH — QR code untuk pemasangan aplikasi ponsel (Langkah 8).\n   ; (C) SALAH — Card slot adalah tempat sikat samping (Langkah 3).\n   ; (D) BENAR — Sambungan *base* dan *station* adalah sumber aliran daya pengisian listrik.\n   ; (E) SALAH — Dust cabin adalah kompartemen kantong debu (Langkah 4).\n\n4. Kesimpulan Jawaban:\n   Jawaban yang benar adalah (D).',
      distractorAnalysis: {
        'A': 'Salah: Rubber band adalah pengaman pengiriman.',
        'B': 'Salah: QR code untuk koneksi aplikasi.',
        'C': 'Salah: Card slot tempat sikat samping.',
        'E': 'Salah: Dust cabin tempat kantong debu.'
      }
    },
    {
      id: 30,
      textId: 6,
      number: 'Question 30',
      genre: 'Procedure Text',
      type: 'multiple_choice',
      strategyId: 'detail_information',
      question: 'What is recommended regarding the Wi-Fi connection when pairing the application?',
      options: [
        '(A) Ensure Wi-Fi is connected to a 5G network.',
        '(B) Disconnect Wi-Fi before opening the application.',
        '(C) Make sure the Wi-Fi is in 2.4G connection.',
        '(D) Use a mobile hotspot instead of home Wi-Fi.',
        '(E) Connect via Bluetooth without any Wi-Fi.'
      ],
      correctAnswer: 'C',
      textualEvidence: 'Catatan (*Note*): "While connecting to the application, make sure your Wi-Fi is in 2.4G connection. If not, you can ask your service provider to enable 2.4G connection."',
      explanation: '💡 Pembahasan & Alasan Guru (Strategi TKA: Technical Note Verification):\n\n1. Penerapan Strategi TKA:\n   • Kata kunci: "Wi-Fi connection".\n   • Perhatikan bagian Catatan Khusus (*Note*) di bagian akhir teks.\n\n2. Verifikasi Bukti Paragraf:\n   ; Catatan (*Note*): "While connecting to the application, make sure your Wi-Fi is in 2.4G connection."\n\n3. Analisis Poin Opsi:\n   ; (A) SALAH — Teks menegaskan jaringan 2.4G, bukan 5G.\n   ; (B) SALAH — Wi-Fi harus tetap terhubung saat proses *pairing* aplikasi.\n   ; (C) BENAR — Sesuai instruksi eksplit Catatan akhir bahwa Wi-Fi wajib di frekuensi 2.4G.\n   ; (D) SALAH — Tidak ada persyaratan wajib hotspot seluler.\n   ; (E) SALAH — Aplikasi memerlukan koneksi Wi-Fi 2.4G.\n\n4. Kesimpulan Jawaban:\n   Jawaban yang benar adalah (C).',
      distractorAnalysis: {
        'A': 'Salah: Teks menyebutkan 2.4G, bukan 5G.',
        'B': 'Salah: Wi-Fi harus terhubung saat memasangkan aplikasi.',
        'D': 'Salah: Tidak disyaratkan harus menggunakan hotspot seluler.',
        'E': 'Salah: Connect via Bluetooth tanpa Wi-Fi tidak disarankan.'
      }
    },
    {
      id: 31,
      textId: 6,
      number: 'Question 31',
      genre: 'Procedure Text',
      type: 'multiple_choice',
      strategyId: 'pronoun_reference',
      question: 'In “It needs to be changed once it is worn out”, the word “it” refers to which of the following?',
      options: [
        '(A) The cover',
        '(B) The EcoClin',
        '(C) The dust bag',
        '(D) The card slot',
        '(E) The side brush'
      ],
      correctAnswer: 'C',
      textualEvidence: 'Langkah 4: "In the Omni station, gently press the dust cabin in the centre to open it. A dust bag is installed which can be cleaned and used again. It needs to be changed once it is worn out."',
      explanation: '💡 Pembahasan & Alasan Guru (Strategi TKA: Pronoun Reference Analysis):\n\n1. Penerapan Strategi TKA:\n   • Lacak kata ganti "it" pada kalimat di Langkah 4 dan periksa klausa kalimat sebelumnya.\n\n2. Verifikasi Bukti Paragraf:\n   ; Kalimat sebelumnya (Langkah 4): "A dust bag is installed which can be cleaned and used again. It needs to be changed once it is worn out."\n\n3. Analisis Poin Opsi:\n   ; (A) SALAH — Cover berada di bagian atas robot (Langkah 2).\n   ; (B) SALAH — EcoClin adalah nama perangkat robot secara keseluruhan.\n   ; (C) BENAR — Kata ganti "It" merujuk pada "the dust bag" (kantong debu) yang dipasang, dapat dicuci, dan perlu diganti bila sudah aus.\n   ; (D) SALAH — Card slot adalah tempat sikat samping di bagian bawah (Langkah 3).\n   ; (E) SALAH — Side brush adalah sikat samping (Langkah 3).\n\n4. Kesimpulan Jawaban:\n   Jawaban yang benar adalah (C).',
      distractorAnalysis: {
        'A': 'Salah: Cover berada di bagian atas robot (Langkah 2).',
        'B': 'Salah: EcoClin adalah nama perangkat robot vacuum secara keseluruhan.',
        'D': 'Salah: Card slot adalah tempat memasang sikat samping (Langkah 3).',
        'E': 'Salah: Side brush dipasang di bagian bawah robot.'
      }
    },
    {
      id: 32,
      textId: 6,
      number: 'Question 32',
      genre: 'Procedure Text',
      type: 'true_false',
      strategyId: 'true_false',
      question: 'Write True (T) or False (F) for each statement based on the text!',
      options: [
        { statement: 'The vacuum relies on mapping technology.', correct: 'T' },
        { statement: 'Some parts of the device are replaceable and reusable.', correct: 'T' },
        { statement: 'The vacuum likely operates manually after setup.', correct: 'F' },
        { statement: 'The device is intended for indoor use.', correct: 'T' },
        { statement: 'Users must have advanced technical skills.', correct: 'F' }
      ],
      textualEvidence: 'Langkah 10: "needs to create a map of the place" | Langkah 4: dust bag "can be cleaned and used again... changed once it is worn out" | Paragraf 1: "Intelligent Robotic Vacuum... Mopping and Vacuuming all-in-one-go"',
      explanation: '💡 Pembahasan & Alasan Guru (Strategi TKA: True / False Statement Verification):\n\n1. Penerapan Strategi TKA: Verifikasi kelima statement berdasarkan fakta teks Langkah 1 sampai 10.\n\n2. Rincian Bukti & Evaluasi Statement:\n   ; Statement 1 (TRUE, Langkah 10): Perangkat menggunakan teknologi pemetaan ruang ("create a map of the place").\n   ; Statement 2 (TRUE, Langkah 4): Kantong debu dapat dicuci ulang ("reusable") dan diganti saat aus ("replaceable").\n   ; Statement 3 (FALSE, Paragraf 1 & Langkah 6): Robot beroperasi secara otomatis ("robotic"), bukan manual.\n   ; Statement 4 (TRUE, Paragraf 1 & Langkah 2): Perangkat ini dirancang untuk pembersihan lantai dalam ruangan (*indoor*).\n   ; Statement 5 (FALSE, Langkah 7–9): Pemasangan dipandu langkah mudah oleh aplikasi ponsel, tidak membutuhkan keahlian teknis khusus.\n\n3. Kesimpulan Kunci:\n   Jawaban: [Statement 1: T, Statement 2: T, Statement 3: F, Statement 4: T, Statement 5: F].',
      distractorAnalysis: {}
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = TKA_DATA;
}
