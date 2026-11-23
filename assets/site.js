/* WordGarden official website — zero cookies, zero analytics, pure static JS */
(function () {
  'use strict'

  /* ===================== Authentic WordGarden Plant SVG (from src/components/Plant.tsx) ===================== */
  function plantSvg(stage, size, opts) {
    var s = size || 48
    var sway = opts && opts.sway ? ' class="plant-sway"' : ''
    var bloom = opts && opts.bloom ? ' class="plant-bloom"' : ''
    var leaf = '#5fbf6e', leaf2 = '#3f9d55', stem = '#3f9d55'
    var top = stage === 2 ? 25 : stage === 3 ? 20 : 15
    var inner = '<ellipse cx="20" cy="35" rx="12" ry="3.4" fill="var(--soil)" opacity="' + (stage === 0 ? '0.45' : '0.9') + '"/>'
    if (stage === 0) {
      inner += '<circle cx="20" cy="33" r="1.6" fill="var(--soil)" opacity="0.6"/>'
    } else if (stage === 1) {
      inner += '<g><ellipse cx="20" cy="32.2" rx="3.2" ry="2.2" fill="#b98a55"/><path d="M18.6 31.6c.8-.6 2-.6 2.8 0" stroke="#8a6238" stroke-width=".7" fill="none" stroke-linecap="round"/></g>'
    } else {
      inner += '<g' + sway + '>'
      inner += '<path d="M20 34 C20 ' + ((34 + top) / 2) + ' 20.6 ' + (top + 4) + ' 20 ' + top + '" stroke="' + stem + '" stroke-width="1.8" fill="none" stroke-linecap="round"/>'
      if (stage === 2) {
        inner += '<path d="M20 27c-4 0-6-2.4-6-5 3.6 0 6 2 6 5z" fill="' + leaf + '"/>'
        inner += '<path d="M20 26c0-3 2.4-5 6-5 0 3-2.6 5-6 5z" fill="' + leaf2 + '"/>'
      }
      if (stage >= 3) {
        inner += '<path d="M20 29c-6 0-8.6-3.4-8.6-7.2 5.2 0 8.6 3 8.6 7.2z" fill="' + leaf + '"/>'
        inner += '<path d="M20 25.5c0-4.4 3.2-7.2 8.4-7.2 0 4-3.4 7.2-8.4 7.2z" fill="' + leaf2 + '"/>'
      }
      if (stage === 3) {
        inner += '<path d="M20 21c-2.6 0-4-1.6-4-3.6 2.4 0 4 1.4 4 3.6z" fill="' + leaf + '"/>'
      }
      if (stage === 4) {
        inner += '<path d="M20 9.5c2.6 1.6 3.4 4 2.4 6.4-.6 1-1.4 1.4-2.4 1.4s-1.8-.4-2.4-1.4c-1-2.4-.2-4.8 2.4-6.4z" fill="#f29bb4"/>'
      }
      if (stage === 5) {
        inner += '<g' + bloom + ' style="transform-origin:20px 13px">'
        ;[0, 72, 144, 216, 288].forEach(function (r) {
          inner += '<ellipse cx="20" cy="9" rx="3" ry="4.2" fill="#f7a8c0" transform="rotate(' + r + ' 20 13)"/>'
        })
        inner += '<circle cx="20" cy="13" r="2.6" fill="#f4c84a"/></g>'
      }
      if (stage === 6) {
        inner += '<g' + bloom + ' style="transform-origin:20px 12px">'
        inner += '<circle cx="20" cy="12" r="8.4" fill="' + leaf2 + '"/>'
        inner += '<circle cx="15.6" cy="10" r="4.6" fill="' + leaf + '"/>'
        inner += '<circle cx="24" cy="9.4" r="4.2" fill="' + leaf + '"/>'
        inner += '<circle cx="16" cy="14" r="1.9" fill="#e8544a"/>'
        inner += '<circle cx="23.5" cy="13.5" r="1.9" fill="#e8544a"/>'
        inner += '<circle cx="20" cy="8" r="1.9" fill="#e8544a"/></g>'
      }
      inner += '</g>'
    }
    return '<svg width="' + s + '" height="' + s + '" viewBox="0 0 40 40" aria-hidden="true" style="overflow:visible">' + inner + '</svg>'
  }

  /* ===================== Genuine WordGarden Data (sampled directly from src/data/) ===================== */
  var COURSES = [
    {
      id: 'ko-en', label: '한국어 → English', shortBadge: 'EN', targetLang: 'en-US', hasEnDef: true, enToggleLabel: '영어 해설',
      words: [
        { w: 'bloom', pos: 'verb', mean: '꽃이 피다', enDef: 'to produce flowers', ex: 'Roses bloom in our garden every June.', hl: 'bloom', exTr: '매년 6월이면 우리 정원에 장미가 핀다.', tip: 'in full bloom = 만개한', distractors: ['harvest', 'wander', 'shelter'] },
        { w: 'resource', pos: 'noun', mean: '자원, 재원', enDef: 'something useful that people need, like water', ex: 'Clean water is a precious resource in the desert.', hl: 'resource', exTr: '사막에서 깨끗한 물은 귀중한 자원이다.', tip: 're+source(원천) → 다시 솟는 원천', distractors: ['shelter', 'harvest', 'promise'] },
        { w: 'wander', pos: 'verb', mean: '거닐다, 헤매다', enDef: 'to walk around without a clear direction', ex: 'We wandered the narrow alleys without a map and found a hidden café.', hl: 'wandered', exTr: '우리는 지도 없이 좁은 골목을 거닐다 숨은 카페를 발견했다.', tip: 'wonder(궁금하다)와 철자 혼동 주의', distractors: ['gather', 'bloom', 'promise'] },
        { w: 'curious', pos: 'adj', mean: '호기심 많은, 궁금한', enDef: 'wanting to know or learn about things', ex: 'The curious child opened every box in the garage.', hl: 'curious', exTr: '호기심 많은 아이는 차고에 있는 상자를 전부 열어 봤다.', tip: '명사 curiosity = 호기심', distractors: ['harvest', 'resource', 'gather'] }
      ]
    },
    {
      id: 'en-ko', label: 'English → 한국어', shortBadge: 'KO', targetLang: 'ko-KR', hasEnDef: false, enToggleLabel: 'English meaning',
      words: [
        { w: '향기', rr: 'hyanggi', pos: 'noun', mean: 'scent, fragrance, aroma', enDef: 'a pleasant smell, like flowers or coffee', ex: '장미 향기가 정말 좋아요.', hl: '향기', exTr: 'The scent of roses is really lovely.', tip: '香氣. Pleasant smells only; the neutral word for a smell is 냄새.', distractors: ['선물', '계절', '여행'] },
        { w: '여행', rr: 'yeohaeng', pos: 'noun', mean: 'travel, trip', enDef: 'a trip to visit other places', ex: '여행을 좋아해요.', hl: '여행', exTr: 'I like traveling.', tip: '旅行. 여행 가다 = to go on a trip. 여행사 = travel agency.', distractors: ['약속', '기억', '도전'] },
        { w: '약속', rr: 'yaksok', pos: 'noun', mean: 'plans, appointment; promise', enDef: 'plans to meet someone, or a promise', ex: '오늘 약속이 있어요.', hl: '약속이', exTr: 'I have plans today.', tip: "Plans to meet someone, or a promise. A booked doctor's appointment is 예약.", distractors: ['향기', '선물', '계절'] },
        { w: '따뜻하다', rr: 'ttatteutada', pos: 'adj', mean: 'warm', enDef: 'pleasantly warm, not too hot and not cold', ex: '봄은 따뜻해요.', hl: '따뜻해요', exTr: 'Spring is warm.', tip: "Pleasantly warm; also 'warm-hearted'. Said [tta-tteu-ta-da].", distractors: ['도전', '기억', '여행'] }
      ]
    },
    {
      id: 'tl-en', label: 'Tagalog → English', shortBadge: 'EN', targetLang: 'en-US', hasEnDef: true, enToggleLabel: 'Paliwanag sa English',
      words: [
        { w: 'bloom', pos: 'verb', mean: 'mamukadkad, mamulaklak', enDef: 'to produce open flowers, said of plants', ex: 'Roses bloom in our garden every June.', hl: 'bloom', exTr: 'Namumukadkad ang mga rosas sa hardin namin tuwing Hunyo.', tip: "Kasingkahulugan ng 'blossom'", distractors: ['harvest', 'wander', 'shelter'] },
        { w: 'resource', pos: 'noun', mean: 'likas-yaman, mapagkukunan', enDef: 'something useful and valuable, like water or oil', ex: 'Clean water is a precious resource in the desert.', hl: 'resource', exTr: 'Mahalagang yaman ang malinis na tubig sa disyerto.', tip: 're + source = pinagmumulan', distractors: ['shelter', 'harvest', 'promise'] },
        { w: 'wander', pos: 'verb', mean: 'gumala, maglibot', enDef: 'to walk around slowly with no clear goal', ex: 'We wandered the narrow alleys without a map and found a hidden café.', hl: 'wandered', exTr: 'Naglibot kami sa makikitid na eskinita nang walang mapa at nakakita ng tagong café.', tip: "Iba sa 'wonder' (magtaka)", distractors: ['gather', 'bloom', 'promise'] },
        { w: 'curious', pos: 'adj', mean: 'mausisa, usisero', enDef: 'wanting to know or learn about things', ex: 'The curious child opened every box in the garage.', hl: 'curious', exTr: 'Binuksan ng mausisang bata ang bawat kahon sa garahe.', tip: "Kahawig ng 'kuryoso'; noun: curiosity", distractors: ['harvest', 'resource', 'gather'] }
      ]
    },
    {
      id: 'tl-ko', label: 'Tagalog → 한국어', shortBadge: 'KO', targetLang: 'ko-KR', hasEnDef: true, enToggleLabel: 'Paliwanag sa English',
      words: [
        { w: '향기', rr: 'hyanggi', pos: 'noun', mean: 'bango, halimuyak', enDef: 'a sweet, pleasant smell, like from flowers', ex: '삼파귀타 향기가 정말 좋아요.', hl: '향기', exTr: 'Napakabango ng sampaguita.', tip: 'Mabangong amoy lang; amoy sa pangkalahatan = 냄새', distractors: ['선물', '계절', '여행'] },
        { w: '여행', rr: 'yeohaeng', pos: 'noun', mean: 'biyahe, paglalakbay', enDef: 'a trip to visit other places', ex: '여행을 좋아해요.', hl: '여행', exTr: 'Mahilig ako sa pagbibiyahe.', tip: "Hanja 旅行: 'yeo' = paglalakbay, 'haeng' = lakad", distractors: ['약속', '기억', '도전'] },
        { w: '약속', rr: 'yaksok', pos: 'noun', mean: 'pangako, usapan, appointment', enDef: 'an appointment or promise', ex: '오늘 약속이 있어요.', hl: '약속이', exTr: 'May lakad ako ngayon.', tip: "Ang 'lakad' o meet-up ay 약속 din", distractors: ['향기', '선물', '계절'] },
        { w: '따뜻하다', rr: 'ttatteutada', pos: 'adj', mean: 'mainit-init, maligamgam', enDef: 'pleasantly warm, not too hot and not cold', ex: '봄은 따뜻해요.', hl: '따뜻해요', exTr: 'Mainit-init ang tagsibol.', tip: 'Gamit din sa tao: 따뜻한 사람 = mabait', distractors: ['도전', '기억', '여행'] }
      ]
    },
    {
      id: 'sw-en', label: 'Kiswahili → English', shortBadge: 'EN', targetLang: 'en-US', hasEnDef: true, enToggleLabel: 'Maelezo kwa Kiingereza',
      words: [
        { w: 'bloom', pos: 'verb', mean: 'kuchanua', enDef: 'to produce flowers, or to open as a flower does', ex: 'Roses bloom in our garden every June.', hl: 'bloom', exTr: 'Waridi huchanua bustanini kwetu kila mwezi wa Juni.', tip: 'in full bloom = imechanua kikamilifu. Tamka: [BLUUM]', distractors: ['harvest', 'wander', 'shelter'] },
        { w: 'resource', pos: 'noun', mean: 'rasilimali', enDef: 'a supply of something useful, like water or money', ex: 'Clean water is a precious resource in the desert.', hl: 'resource', exTr: 'Maji safi ni rasilimali yenye thamani kubwa jangwani.', tip: 'natural resources = maliasili', distractors: ['shelter', 'harvest', 'promise'] },
        { w: 'wander', pos: 'verb', mean: 'kuzurura, kutangatanga', enDef: 'to walk around slowly with no clear aim', ex: 'We wandered the narrow alleys without a map and found a hidden café.', hl: 'wandered', exTr: 'Tulizurura katika vichochoro vyembamba bila ramani na tukagundua mkahawa uliojificha.', tip: 'Usichanganye na wonder [WAN-da] (kushangaa). wander = [WON-da]', distractors: ['gather', 'bloom', 'promise'] },
        { w: 'curious', pos: 'adj', mean: '-dadisi, -enye hamu ya kujua', enDef: 'wanting to learn or know more about something', ex: 'The curious child opened every box in the garage.', hl: 'curious', exTr: 'Mtoto mdadisi alifungua kila sanduku ndani ya gereji.', tip: "curiosity = udadisi; I'm curious = nina hamu ya kujua", distractors: ['harvest', 'resource', 'gather'] }
      ]
    },
    {
      id: 'sw-ko', label: 'Kiswahili → 한국어', shortBadge: 'KO', targetLang: 'ko-KR', hasEnDef: true, enToggleLabel: 'Maelezo kwa Kiingereza',
      words: [
        { w: '향기', rr: 'hyanggi', pos: 'noun', mean: 'harufu nzuri, manukato', enDef: 'scent, fragrance, aroma', ex: '커피 향기가 정말 좋아요.', hl: '향기', exTr: 'Harufu ya kahawa ni nzuri kweli.', tip: '향기 ni harufu nzuri tu; harufu kwa ujumla ni 냄새', distractors: ['선물', '계절', '여행'] },
        { w: '여행', rr: 'yeohaeng', pos: 'noun', mean: 'safari, utalii', enDef: 'travel, trip', ex: '여행을 좋아해요.', hl: '여행', exTr: 'Ninapenda kusafiri.', tip: 'Hanja 旅行: 여 (msafiri) + 행 (kwenda)', distractors: ['약속', '기억', '도전'] },
        { w: '약속', rr: 'yaksok', pos: 'noun', mean: 'ahadi, miadi', enDef: 'plans, appointment; promise', ex: '오늘 약속이 있어요.', hl: '약속이', exTr: 'Leo nina miadi.', tip: '약속이 있어요 = nina miadi; 약속을 지키다 = kutimiza ahadi', distractors: ['향기', '선물', '계절'] },
        { w: '따뜻하다', rr: 'ttatteutada', pos: 'adj', mean: 'kuwa na joto la wastani, vuguvugu', enDef: 'warm', ex: '봄은 따뜻해요.', hl: '따뜻해요', exTr: 'Majira ya kuchipua kuna joto la wastani.', tip: 'Kwa mtu: 따뜻한 사람 = mtu mwenye moyo mwema', distractors: ['도전', '기억', '여행'] }
      ]
    },
    {
      id: 'vi-en', label: 'Tiếng Việt → English', shortBadge: 'EN', targetLang: 'en-US', hasEnDef: true, enToggleLabel: 'Giải nghĩa bằng tiếng Anh',
      words: [
        { w: 'bloom', pos: 'verb', mean: 'nở hoa, nở', enDef: 'to produce flowers', ex: 'Roses bloom in our garden every June.', hl: 'bloom', exTr: 'Tháng Sáu nào hoa hồng cũng nở trong vườn nhà tôi.', tip: 'Đọc dài /bluːm/; in full bloom = nở rộ', distractors: ['harvest', 'wander', 'shelter'] },
        { w: 'resource', pos: 'noun', mean: 'tài nguyên, nguồn lực', enDef: 'something useful that people need, like water', ex: 'Clean water is a precious resource in the desert.', hl: 'resource', exTr: 'Nước sạch là nguồn tài nguyên quý giá ở sa mạc.', tip: 'natural resources = tài nguyên thiên nhiên; human resources (HR) = nhân sự.', distractors: ['shelter', 'harvest', 'promise'] },
        { w: 'wander', pos: 'verb', mean: 'lang thang, dạo quanh', enDef: 'to walk around without a clear direction', ex: 'We wandered the narrow alleys without a map and found a hidden café.', hl: 'wandered', exTr: 'Chúng tôi lang thang khắp những con ngõ nhỏ mà không cần bản đồ và tìm thấy một quán cà phê nằm khuất.', tip: 'wander /ˈwɒndə/ (lang thang) ≠ wonder /ˈwʌndə/ (tự hỏi)', distractors: ['gather', 'bloom', 'promise'] },
        { w: 'curious', pos: 'adj', mean: 'tò mò, hiếu kỳ', enDef: 'wanting to know or learn about things', ex: 'The curious child opened every box in the garage.', hl: 'curious', exTr: 'Đứa trẻ tò mò mở hết mọi chiếc hộp trong nhà để xe.', tip: 'be curious about + N; curious → curiosity (sự tò mò)', distractors: ['harvest', 'resource', 'gather'] }
      ]
    },
    {
      id: 'vi-ko', label: 'Tiếng Việt → 한국어', shortBadge: 'KO', targetLang: 'ko-KR', hasEnDef: true, enToggleLabel: 'Giải nghĩa bằng tiếng Anh',
      words: [
        { w: '향기', rr: 'hyanggi', pos: 'noun', mean: 'hương thơm, mùi thơm', enDef: 'a pleasant smell', ex: '연꽃 향기가 정말 좋아요.', hl: '향기', exTr: 'Hương hoa sen thơm thật dễ chịu.', tip: 'Hán Việt: 향기 (香氣) = hương khí; còn 냄새 = mùi nói chung.', distractors: ['선물', '계절', '여행'] },
        { w: '여행', rr: 'yeohaeng', pos: 'noun', mean: 'du lịch, chuyến đi', enDef: 'a trip to visit other places', ex: '여행을 좋아해요.', hl: '여행', exTr: 'Tôi thích du lịch.', tip: "Hán Việt: 여행 (旅行) = lữ hành — như trong 'công ty lữ hành'.", distractors: ['약속', '기억', '도전'] },
        { w: '약속', rr: 'yaksok', pos: 'noun', mean: 'cuộc hẹn, lời hứa', enDef: 'an appointment or promise', ex: '오늘 약속이 있어요.', hl: '약속이', exTr: 'Hôm nay tôi có hẹn.', tip: 'Hán Việt: 약속 (約束) = ước thúc; 약속을 지키다 = giữ lời hứa.', distractors: ['향기', '선물', '계절'] },
        { w: '따뜻하다', rr: 'ttatteutada', pos: 'adj', mean: 'ấm, ấm áp', enDef: 'pleasantly warm', ex: '봄은 따뜻해요.', hl: '따뜻해요', exTr: 'Mùa xuân ấm áp.', tip: 'Đọc [tta-tteu-ta-da]. Dùng cả cho người: 따뜻한 사람 = người ấm áp.', distractors: ['도전', '기억', '여행'] }
      ]
    }
  ]

  /* ===================== Localized Screenshots Mapping ===================== */
  var SCREENSHOTS = {
    ko: {
      hero: [
        { i: 1, label: '정원 홈' },
        { i: 2, label: '2분 테스트' },
        { i: 3, label: '망각곡선 복습' },
        { i: 4, label: '영어 이야기' },
        { i: 7, label: '8개 과정' }
      ],
      alts: [
        '정원처럼 키우는 영단어 암기 — 나의 정원 홈 화면',
        '2분 어휘력 테스트 — 이미 아는 단어 수와 딱 맞는 시작 단계',
        '망각곡선 복습 — 빈칸·듣기·철자 문제',
        '배운 단어로 읽는 영어 이야기 15장',
        '배운 단어로 즐기는 영단어 게임 3가지',
        '자라는 어휘량을 눈으로 — 기록과 학습 잔디',
        '하나의 앱, 여덟 가지 과정 선택 화면',
        '내가 쓰는 말로 배우는 영어·한국어'
      ]
    },
    en: {
      hero: [
        { i: 1, label: 'Garden' },
        { i: 2, label: 'Hangul 101' },
        { i: 3, label: '2-min test' },
        { i: 4, label: 'Syllable quiz' },
        { i: 7, label: '8 courses' }
      ],
      alts: [
        'Grow your Korean like a garden — Home screen',
        'Read Hangul from day one — 24 letters with names and sounds',
        'Find your level in 2 minutes',
        'Spell Korean words with syllable tiles — no Korean keyboard needed',
        'Read a Korean story — A Year in Seoul in 15 chapters',
        'Games with your own words — Match, True or False, Sentence Builder',
        'One app, eight vocabulary courses',
        'Pick the language you speak'
      ]
    },
    fil: {
      hero: [
        { i: 3, label: 'Hardin' },
        { i: 4, label: 'Balik-aral' },
        { i: 5, label: '2-min test' },
        { i: 6, label: 'Kuwento' },
        { i: 1, label: '8 kurso' }
      ],
      alts: [
        'Isang app, walong kurso — English o Korean sa Tagalog',
        'Palitan ang kurso anumang oras',
        'Palaguin ang English mo — Hardin ng Salita',
        'Spaced repetition: babalik bago mo makalimutan',
        'Level test sa 2 minuto',
        'Kuwento ng isang Pinay sa Seoul — 15 kabanata',
        'Korean ABC: 24 titik ng Hangul',
        'Kitang-kita ang paglago mo — Talaan ng hardin'
      ]
    },
    sw: {
      hero: [
        { i: 3, label: 'Bustani' },
        { i: 4, label: 'Kipimo 2m' },
        { i: 5, label: 'Hangul 24' },
        { i: 6, label: 'Hadithi' },
        { i: 1, label: 'Kozi 8' }
      ],
      alts: [
        'Kiingereza na Kikorea — Kila neno limeelezwa kwa Kiswahili',
        'Badilisha lugha wakati wowote',
        'Panda maneno, vuna lugha — hata bila intaneti',
        'Unajua maneno mangapi? Kipimo cha dakika 2',
        'Unaweza kusoma Kikorea — Hangul ina herufi 24 tu',
        'Hadithi ya Amani, Mombasa hadi Seoul',
        'Jifunze kwa kucheza — michezo ya maneno',
        'Haba na haba hujaza kibaba — methali ya leo'
      ]
    },
    vi: {
      hero: [
        { i: 3, label: 'Khu vườn' },
        { i: 4, label: 'Ôn tập' },
        { i: 5, label: 'Test 2 phút' },
        { i: 6, label: 'Truyện' },
        { i: 1, label: '8 khóa học' }
      ],
      alts: [
        'Một ứng dụng, tám khóa học — Tiếng Anh và tiếng Hàn',
        'Đổi khóa học bất cứ lúc nào',
        'Trồng từ vựng như chăm vườn — học cả khi offline',
        'Ghép âm tiết thành từ — không cần bàn phím tiếng Hàn',
        'Đo vốn từ chỉ trong 2 phút',
        'Truyện 15 chương ở Hàn Quốc, có âm thanh',
        'Vừa chơi vừa nhớ từ — 3 trò chơi từ vựng',
        'Thấy vốn từ lớn lên mỗi ngày'
      ]
    }
  }

  /* ===================== 5-Language UI Copy ===================== */
  var I18N = {
    ko: {
      htmlLang: 'ko',
      brand: '워드가든',
      defaultCourse: 'ko-en',
      title: '워드가든 (WordGarden) — 하나의 앱, 여덟 과정으로 키우는 단어 정원',
      nav: { try: '미리 체험', how: '학습 원리', features: '주요 기능', screens: '앱 화면', courses: '8개 과정' },
      hero: {
        pillNew: 'v2.2 새 소식',
        pillText: '비영어 7개 과정 전 단어에 쉬운 영어 해설 추가',
        h1: '외운 만큼 꽃이 피는\n나만의 단어 정원',
        sub: '워드가든 앱 하나에 8개 영어·한국어 과정이 들어 있어요. 2분 어휘력 테스트로 내 수준부터 시작하고, 잊을 때쯤 물을 주는 망각곡선 복습으로 15,000+ 단어를 오래 기억하세요.',
        ios: 'App Store에서 받기',
        playPublic: 'Google Play에서 받기',
        playBeta: 'Android: 베타 테스트 참여',
        tryBtn: '웹에서 바로 체험하기',
        chips: ['회원가입 없이 무료', '학습 중 광고 없음', '100% 오프라인 학습', '하나의 앱 · 8개 과정'],
        floatTopTitle: '15,000+ 단어 · 7단계',
        floatTopSub: '수능·토익·TOPIK·일상',
        floatBotTitle: '잊을 때쯤 물주기',
        floatBotSub: '1·3·7·15·35·90일 복습'
      },
      metrics: [
        ['15,000+', '과정별 핵심 단어'],
        ['8개 과정', '5개 언어 · 앱 하나로'],
        ['2분', '어휘력 레벨 테스트'],
        ['15장 + 3종', '연재 이야기 · 단어 게임']
      ],
      studio: {
        eyebrow: '인터랙티브 미리보기',
        h2: '워드가든 v2.2를 지금 체험해 보세요',
        sub: '8개 과정을 자유롭게 눌러 실제 수록 단어와 새로 추가된 쉬운 영어 해설(EN ·), 그리고 영어 해설 복습 퀴즈를 경험할 수 있어요.',
        tabCard: '단어 카드 + v2.2 영어 해설',
        tabQuiz: 'v2.2 영어 해설 퀴즈',
        listen: '발음 듣기',
        prev: '이전 단어',
        next: '다음 단어',
        quizPromptLabel: '영어 해설을 읽고 알맞은 단어를 고르세요',
        quizCorrect: '정답이에요! 식물에 물을 주었어요.',
        quizWrong: '아쉬워요! 다시 한 번 골라 보세요.',
        quizNext: '다음 문제',
        quizReset: '새 정원 키우기',
        potCardTitle: '단어가 기억될수록 자라나요',
        potCardSub: '퀴즈 탭에서 영어 해설 문제를 맞히면 씨앗이 열매까지 자랍니다.',
        potQuizDone: '열매가 열렸어요! 장기 기억에 자리 잡은 단어예요.',
        potQuizProgress: '맞힌 문제만큼 정원의 식물이 성장해요'
      },
      how: {
        eyebrow: '망각곡선 정원',
        h2: '씨앗에서 열매까지, 6단계 기억 성장',
        sub: '단어를 잊기 직전 타이밍에 맞춰 알림과 복습을 준비해요. 단계를 눌러 복습 간격을 확인해 보세요.',
        stages: [
          { day: '1일', name: '씨앗', desc: '새로운 단어를 예문·발음·기억 팁과 함께 정원에 심어요. 하루 뒤 첫 물주기로 기억을 깨워요.' },
          { day: '3일', name: '새싹', desc: '듣기·뜻 고르기·빈칸 채우기로 단어를 다시 떠올리며 싹을 틔워요.' },
          { day: '7일', name: '잎새', desc: '일주일 뒤 다시 만나며 v2.2 영어 해설 퀴즈나 철자·음절 조합 문제로 단단히 다져요.' },
          { day: '15일', name: '봉오리', desc: '보름이 지나도 바로 떠오르면 꽃봉오리가 맺혀요. 연재 이야기와 게임에서도 자연스럽게 다시 만나요.' },
          { day: '35일', name: '꽃', desc: '한 달 넘게 유지된 기억이 화사한 꽃으로 피어납니다. 나의 정원 잔디가 풍성해져요.' },
          { day: '90일', name: '열매', desc: '석 달 뒤에도 흔들리지 않는 장기 기억 완성! 이제 내 언어처럼 편하게 꺼내 쓸 수 있어요.' }
        ]
      },
      features: {
        eyebrow: '무엇이 다른가요',
        h2: '오래 기억하도록 정성껏 만든 기능들',
        sub: '복잡한 가입이나 구독 장벽 없이, 매일 5분씩 가볍게 정원을 가꾸는 데 집중했습니다.',
        v22Badge: 'v2.2 주요 업데이트',
        v22Title: '모든 단어에 쉬운 영어 해설(EN ·) 탑재',
        v22Desc: '단순 1:1 번역만으로 헷갈리던 뉘앙스를 쉬운 영어로 한 번 더 이해하세요. 한국어·타갈로그어·스와힐리어·베트남어 7개 과정 100% 모든 단어에 적용되었습니다.',
        v22Bullets: [
          '한국어→영어(15,440단어) 및 타갈로그어·스와힐리어·베트남어 전 과정 100% 반영',
          '설정에서 “영어 해설” 스위치로 언제든 켜고 끌 수 있어요',
          '자란 단어 복습 시 영어 해설을 읽고 단어를 고르는 퀴즈 추가'
        ],
        v22Foot: '설정 › 영어 해설 ON/OFF · 영어로 생각하며 오래 기억하기',
        cards: [
          ['2분 어휘력 테스트', '알고 있는 단어와 모르는 단어를 빠르게 체크해 추정 어휘 수와 나에게 딱 맞는 시작 단계(1~7단계)를 찾아줍니다.'],
          ['망각곡선 맞춤 복습', '1·3·7·15·35·90일 주기로 잊을 때쯤 물을 줍니다. 듣기, 빈칸, 철자, 음절 타일, 영어 해설 퀴즈까지 다양하게 출제해요.'],
          ['한글 101 & 음절 타일', '한국어 과정에서는 자음·모음 24자를 첫날부터 익히고, 한국어 키보드 없이도 음절 타일로 자연스럽게 철자를 맞힙니다.'],
          ['배운 단어로 읽는 15장 이야기', '각 과정에 맞춘 연재 이야기 15장을 읽으며 문맥 속 단어를 익혀요. 모르는 단어를 누르면 뜻과 해석이 바로 열립니다.'],
          ['지루할 틈 없는 단어 게임 3종', '번개 매칭, 60초 OX, 문장 만들기 게임이 내가 지금 공부하는 단어들로 자동 구성됩니다.'],
          ['가입 없음 · 오프라인 · 과정별 백업', '계정 없이 기기에만 안전하게 저장되며, 인터넷이 없어도 모든 학습이 가능합니다. 학습 중엔 광고를 띄우지 않아요.']
        ]
      },
      screens: {
        eyebrow: '실제 앱 화면',
        h2: '워드가든의 하루를 미리 둘러보세요',
        sub: '카드를 누르면 크게 볼 수 있어요. 상단 언어를 바꾸면 해당 언어의 실제 앱 화면으로 전환됩니다.',
        hint: '좌우로 밀거나 화살표로 넘겨 보세요'
      },
      courses: {
        eyebrow: '하나의 앱, 여덟 과정',
        h2: '내가 쓰는 말로 영어와 한국어를 배워요',
        sub: '버전 2.0부터 워드가든·Hardin ng Salita·Bustani ya Maneno·Vườn Từ·WordGarden: Korean이 모두 앱 하나에 통합되었습니다. 설정에서 언제든 과정을 바꿀 수 있고, 학습 기록은 과정마다 따로 남아요.',
        dlLabel: '내려받기 페이지',
        privacyLabel: '개인정보처리방침',
        supportLabel: '고객 지원'
      },
      beta: {
        title: 'Android 베타 테스트 참여',
        status: 'Android: Google Play 비공개 테스트 중 · 무료 참여',
        guideBtn: '상세 참여 가이드 (한·영·스와힐리어)'
      },
      owned: {
        eyebrow: '직접 연결 채널',
        h2: '스토어를 거치지 않아도 언제나 연결돼요',
        sub: 'wordgardenapp.com을 북마크해 두거나 이메일로 새 과정·주요 업데이트 소식을 받아보세요. 광고 스팸 없이 중요한 업데이트만 전하며, 답장 한 번으로 언제든 수신을 멈출 수 있어요.',
        mailLabel: '업데이트 소식 메일 신청',
        mailSubject: '[워드가든] 새 버전·과정 소식 받기 신청',
        mailBody: '워드가든의 주요 업데이트 및 새 과정 출시 소식을 이메일로 받고 싶습니다. (언제든 답장으로 수신 거부를 요청할 수 있습니다.)',
        supportLabel: '고객 지원 & 백업 FAQ',
        note: '업데이트 소식은 신청하신 분께만 보내고, 메일 주소는 그 용도로만 쓰며, 답장하시면 언제든 그만 받으실 수 있어요.'
      },
      footer: {
        tagline: '하나의 단어 앱, 여덟 과정 — 외운 만큼 꽃이 피는 정원',
        dev: '개발자: 박종훈 (Joung Hun Park)',
        colApp: '앱 & 가이드',
        colLegal: '개인정보 & 지원',
        privacyNotice: '이 웹사이트는 쿠키나 방문자 추적·분석 도구를 쓰지 않습니다.'
      }
    },
    en: {
      htmlLang: 'en',
      brand: 'WordGarden',
      defaultCourse: 'en-ko',
      title: 'WordGarden — One Vocabulary App, Eight Courses',
      nav: { try: 'Try it', how: 'How it works', features: 'Features', screens: 'Screens', courses: '8 Courses' },
      hero: {
        pillNew: 'New in v2.2',
        pillText: 'Simple English explanations on every word across all 7 non-English courses',
        h1: 'Grow your vocabulary\nlike a living garden',
        sub: 'One free, offline app with eight English and Korean vocabulary courses. Find your level in 2 minutes, water words right before you forget them, and build lasting memory with stories and games.',
        ios: 'Download on the App Store',
        playPublic: 'Get it on Google Play',
        playBeta: 'Android: Join the beta',
        tryBtn: 'Try a live word card',
        chips: ['Free · No sign-up', 'No ads while studying', 'Works 100% offline', 'One app · 8 courses'],
        floatTopTitle: '15,000+ words · 7 levels',
        floatTopSub: 'Hangul · TOPIK · Daily life',
        floatBotTitle: 'Spaced repetition',
        floatBotSub: '1 · 3 · 7 · 15 · 35 · 90 days'
      },
      metrics: [
        ['15,000+', 'Words per course'],
        ['8 courses', '5 UI languages · 1 app'],
        ['2 min', 'Placement level test'],
        ['15 + 3', 'Story chapters & games']
      ],
      studio: {
        eyebrow: 'Interactive preview',
        h2: 'Experience WordGarden v2.2 right here',
        sub: 'Pick any of the eight courses to explore real vocabulary cards, toggle the new v2.2 simple English explanations, or try a review quiz that grows your plant.',
        tabCard: 'Word card + v2.2 EN gloss',
        tabQuiz: 'v2.2 Explanation quiz',
        listen: 'Listen',
        prev: 'Previous',
        next: 'Next word',
        quizPromptLabel: 'Read the simple English explanation and pick the word',
        quizCorrect: 'Correct! Your plant just grew.',
        quizWrong: 'Not quite — try another choice.',
        quizNext: 'Next question',
        quizReset: 'Grow a new plant',
        potCardTitle: 'Words grow as you remember',
        potCardSub: 'Switch to the quiz tab and answer questions to grow your seed all the way to fruit.',
        potQuizDone: 'Full harvest! This word is rooted in long-term memory.',
        potQuizProgress: 'Every right answer waters and grows your plant'
      },
      how: {
        eyebrow: 'Forgetting-curve garden',
        h2: 'From seed to fruit in 6 memory stages',
        sub: 'Spaced repetition brings each word back right before you forget it. Tap a stage to see how memory takes root.',
        stages: [
          { day: 'Day 1', name: 'Seed', desc: 'Plant a new word with audio, example sentences, and a memory tip. Water it the next day to lock it in.' },
          { day: 'Day 3', name: 'Sprout', desc: 'Recall the word through listening, meaning recognition, and fill-in-the-blank context.' },
          { day: 'Day 7', name: 'Leaves', desc: 'A week later, strengthen recall with syllable tiles, spelling, and v2.2 English-explanation quizzes.' },
          { day: 'Day 15', name: 'Bud', desc: 'Two weeks in, your vocabulary blooms across 15 serialized story chapters and 3 fast-paced games.' },
          { day: 'Day 35', name: 'Flower', desc: 'Over a month of solid retention turns your garden plot into blooming flowers.' },
          { day: 'Day 90', name: 'Fruit', desc: 'Three months later, the word is part of your permanent vocabulary—ready whenever you need it.' }
        ]
      },
      features: {
        eyebrow: 'Built for real retention',
        h2: 'Everything you need, nothing in your way',
        sub: 'No accounts, no subscriptions, and zero ads during study—just calm daily sessions that compound.',
        v22Badge: 'What’s new in v2.2',
        v22Title: 'Simple English explanations on every word',
        v22Desc: 'Go beyond one-word translations. All seven non-English-UI courses now include clear, learner-friendly English explanations on 100% of words.',
        v22Bullets: [
          '100% coverage across Korean→English (15,440 words), Tagalog, Swahili & Vietnamese courses',
          'Turn English explanations ON or OFF anytime in Settings',
          'New growth-review quiz: read the simple English explanation and choose the right word'
        ],
        v22Foot: 'Settings › English explanations toggle · Build true word sense',
        cards: [
          ['2-Minute Level Test', 'Estimates how many words you already know and starts you at the right tier across Levels 1–7.'],
          ['Smart Spaced Repetition', 'Water words at 1, 3, 7, 15, 35, and 90 days with listening, fill-in-the-blank, spelling, and explanation quizzes.'],
          ['Hangul 101 & Syllable Tiles', 'Learn all 24 Korean letters with names and sounds from day one, and spell Korean words without needing a Korean keyboard.'],
          ['15-Chapter Stories', 'Read culturally tailored serialized stories packed with your words—tap any sentence for instant translation and audio.'],
          ['3 Vocabulary Games', 'Lightning Match, 60-Second True or False, and Sentence Builder generated directly from your own planted words.'],
          ['Offline, Private & Free', 'No account required. All progress stays safely on your device with per-course JSON backup and zero ads while studying.']
        ]
      },
      screens: {
        eyebrow: 'Inside the app',
        h2: 'Take a stroll through WordGarden',
        sub: 'Click any screenshot to zoom in. Switch the language in the header to inspect that language’s native app screens.',
        hint: 'Scroll horizontally or use the arrows'
      },
      courses: {
        eyebrow: 'One app, eight courses',
        h2: 'Learn English or Korean in the language you speak',
        sub: 'Since version 2.0, WordGarden, Hardin ng Salita, Bustani ya Maneno, Vườn Từ, and WordGarden: Korean all live inside one app. Each course keeps its own progress, and you can switch anytime in Settings.',
        dlLabel: 'Download page',
        privacyLabel: 'Privacy policy',
        supportLabel: 'Support'
      },
      beta: {
        title: 'Join the Android Beta',
        status: 'Android: closed beta on Google Play — join free',
        guideBtn: 'Step-by-step beta guide (EN · SW · KO)'
      },
      owned: {
        eyebrow: 'Direct channel',
        h2: 'Stay connected beyond app stores',
        sub: 'Bookmark wordgardenapp.com or request email release notes so you never miss new courses, study features, or backup guides—with zero spam and one-reply unsubscribe.',
        mailLabel: 'Get update emails',
        mailSubject: '[WordGarden] Release Updates Opt-in',
        mailBody: 'Please notify me by email when major WordGarden updates or new courses launch. (I can reply anytime to unsubscribe.)',
        supportLabel: 'Support & backup FAQ',
        note: 'We send update news only to people who ask for it, use your address only for that, and you can stop at any time by replying.'
      },
      footer: {
        tagline: 'One vocabulary app, eight courses — words that grow like a garden',
        dev: 'Developer: Joung Hun Park (박종훈)',
        colApp: 'App & Guides',
        colLegal: 'Privacy & Support',
        privacyNotice: 'This website uses no cookies, no analytics, and no tracking.'
      }
    },
    fil: {
      htmlLang: 'fil',
      brand: 'Hardin ng Salita',
      defaultCourse: 'tl-en',
      title: 'Hardin ng Salita (WordGarden) — Isang App, Walong Kurso',
      nav: { try: 'Subukan', how: 'Paano gumagana', features: 'Mga tampok', screens: 'Mga screen', courses: '8 Kurso' },
      hero: {
        pillNew: 'Bago sa v2.2',
        pillText: 'May maikling paliwanag sa simpleng English ang bawat salita',
        h1: 'Palaguin ang bokabularyo mo\ntulad ng isang hardin',
        sub: 'Isang libreng offline app na may walong kurso sa English at Korean — kabilang ang Hardin ng Salita sa Tagalog. Alamin ang level mo sa 2 minuto at tandaan ang 15,000+ salita gamit ang spaced repetition.',
        ios: 'I-download sa App Store',
        playPublic: 'Kunin sa Google Play',
        playBeta: 'Android: Sumali sa beta',
        tryBtn: 'Subukan ang word card',
        chips: ['Libre · Walang sign-up', 'Walang ad habang nag-aaral', '100% gumagana offline', 'Isang app · 8 kurso'],
        floatTopTitle: '15,000+ salita · 7 antas',
        floatTopSub: 'English · Korean · EPS-TOPIK',
        floatBotTitle: 'Spaced repetition',
        floatBotSub: '1 · 3 · 7 · 15 · 35 · 90 araw'
      },
      metrics: [
        ['15,000+', 'Salita bawat kurso'],
        ['8 kurso', '5 wika · 1 app'],
        ['2 min', 'Level test'],
        ['15 + 3', 'Kabanata at laro']
      ],
      studio: {
        eyebrow: 'Interactive preview',
        h2: 'Subukan ang WordGarden v2.2 ngayon',
        sub: 'Pumili sa walong kurso para makita ang totoong mga salita, ang bagong “Paliwanag sa English” switch ng v2.2, at subukan ang balik-aral quiz.',
        tabCard: 'Word card + v2.2 Paliwanag',
        tabQuiz: 'v2.2 English explanation quiz',
        listen: 'Pakinggan',
        prev: 'Nakaraan',
        next: 'Susunod',
        quizPromptLabel: 'Basahin ang paliwanag sa English at piliin ang tamang salita',
        quizCorrect: 'Tama! Lumago ang halaman mo.',
        quizWrong: 'Subukan ulit — piliin ang tamang sagot.',
        quizNext: 'Susunod na tanong',
        quizReset: 'Magtanim ulit',
        potCardTitle: 'Lumalago habang natatandaan',
        potCardSub: 'Subukan ang quiz tab para lumaki ang binhi hanggang mamunga.',
        potQuizDone: 'Namunga na! Tumatak na ang salitang ito sa memorya mo.',
        potQuizProgress: 'Bawat tamang sagot ay nagdidilig sa halaman mo'
      },
      how: {
        eyebrow: 'Spaced repetition',
        h2: 'Mula binhi hanggang bunga sa 6 na yugto',
        sub: 'Bumabalik ang bawat salita bago mo ito makalimutan. I-tap ang bawat yugto para makita ang iskedyul ng balik-aral.',
        stages: [
          { day: 'Araw 1', name: 'Binhi', desc: 'Itanim ang bagong salita na may audio, halimbawang pangungusap, at memory tip.' },
          { day: 'Araw 3', name: 'Usbong', desc: 'Balikan ang salita gamit ang pakikinig, pagpili ng kahulugan, at fill-in-the-blank.' },
          { day: 'Araw 7', name: 'Dahon', desc: 'Pagkalipas ng isang linggo, palalimin ang memorya gamit ang spelling, syllable tiles, at v2.2 quiz.' },
          { day: 'Araw 15', name: 'Buko', desc: 'Makikita mo rin ang mga salitang natutunan sa 15-kabanatang kuwento at 3 laro.' },
          { day: 'Araw 35', name: 'Bulaklak', desc: 'Mahigit isang buwang pag-alala — namumukadkad na ang hardin ng bokabularyo mo.' },
          { day: 'Araw 90', name: 'Bunga', desc: 'Matibay na sa pangmatagalang memorya at handang gamitin sa eskuwela, trabaho, o biyahe.' }
        ]
      },
      features: {
        eyebrow: 'Mga pangunahing tampok',
        h2: 'Dinisenyo para matandaan, hindi lang makabisado',
        sub: 'Walang account at walang istorbo habang nag-aaral — kahit walang internet.',
        v22Badge: 'Bago sa v2.2',
        v22Title: 'Maikling paliwanag sa simpleng English sa bawat salita',
        v22Desc: 'Lahat ng salita sa kursong English (15,440) at Korean (15,259) sa Tagalog ay may malinaw na paliwanag sa simpleng English ngayon.',
        v22Bullets: [
          '100% kumpleto sa lahat ng 7 hindi-English na kurso mula sa mga unang antas',
          'I-on o i-off ang “Paliwanag sa English” anumang oras sa Settings',
          'May bagong tanong sa balik-aral kung saan babasahin mo ang paliwanag at pipiliin ang salita'
        ],
        v22Foot: 'Settings › Paliwanag sa English · Mas malinaw na kahulugan',
        cards: [
          ['Level Test sa 2 Minuto', 'Alamin agad kung ilang salita na ang alam mo at magsimula sa tamang antas (Antas 1–7).'],
          ['Spaced Repetition (1–90 Araw)', 'Bumabalik ang mga salita bago mo makalimutan — may pakikinig, blanko, at spelling.'],
          ['Hangul 101 at Syllable Tiles', 'Matutong magbasa ng 24 titik ng Hangul at bumuo ng salitang Korean nang walang Korean keyboard.'],
          ['Kuwentong may 15 Kabanata', 'Basahin ang Talaarawan ni Liza sa Seoul at iba pang kuwento — i-tap ang salita para sa salin at audio.'],
          ['3 Laro ng Bokabularyo', 'Speed Match, 60-Second True/False, at Sentence Builder gamit ang sarili mong mga salita.'],
          ['Offline, Libre at Pribado', 'Walang kailangang account. Hiwalay ang progreso at JSON backup ng bawat kurso sa phone mo.']
        ]
      },
      screens: {
        eyebrow: 'Loob ng app',
        h2: 'Silipin ang mga screen ng Hardin ng Salita',
        sub: 'I-click ang anumang larawan para palakihin.',
        hint: 'I-scroll pakanan o gamitin ang mga arrow'
      },
      courses: {
        eyebrow: 'Isang app, walong kurso',
        h2: 'English o Korean, sa wikang gamit mo',
        sub: 'Mula bersyon 2.0, ang Hardin ng Salita: English at Korean ay mga kurso sa loob ng app na WordGarden (워드가든). Piliin ang Tagalog sa unang screen, tapos piliin ang English o Korean.',
        dlLabel: 'Download page',
        privacyLabel: 'Privacy policy',
        supportLabel: 'Support'
      },
      beta: {
        title: 'Sumali sa Android Beta',
        status: 'Android: closed beta sa Google Play — libre ang pagsali',
        guideBtn: 'Gabay sa beta (EN · SW · KO)'
      },
      owned: {
        eyebrow: 'Direktang koneksyon',
        h2: 'Manatiling konektado sa opisyal na website',
        sub: 'I-bookmark ang wordgardenapp.com o humiling ng email tungkol sa mga bagong kurso at malalaking update — walang spam at puwedeng ipahinto anumang oras.',
        mailLabel: 'Makatanggap ng update sa email',
        mailSubject: '[WordGarden] Release Updates Opt-in (TL)',
        mailBody: 'Pakibalitaan ako sa email kapag may bagong kurso o mahalagang update sa WordGarden / Hardin ng Salita.',
        supportLabel: 'Suporta at Backup FAQ',
        note: 'Nagpapadala lang kami ng balita tungkol sa mga update sa mga humiling nito, ginagamit lang namin ang address mo para rito, at puwede mo itong ipahinto anumang oras sa pamamagitan ng pag-reply.'
      },
      footer: {
        tagline: 'Isang app, walong kurso — palaguin ang mga salita tulad ng hardin',
        dev: 'Developer: Joung Hun Park (박종훈)',
        colApp: 'App at Mga Gabay',
        colLegal: 'Privacy at Suporta',
        privacyNotice: 'Hindi gumagamit ng cookies o analytics ang website na ito.'
      }
    },
    sw: {
      htmlLang: 'sw',
      brand: 'Bustani ya Maneno',
      defaultCourse: 'sw-en',
      title: 'Bustani ya Maneno (WordGarden) — Programu Moja, Kozi Nane',
      nav: { try: 'Jaribu', how: 'Jinsi inavyofanya kazi', features: 'Vipengele', screens: 'Picha', courses: 'Kozi 8' },
      hero: {
        pillNew: 'Mpya katika v2.2',
        pillText: 'Washa au zima Maelezo kwa Kiingereza rahisi kwa kila neno',
        h1: 'Panda maneno, vuna lugha\nkama bustani hai',
        sub: 'Programu moja ya bure inayofanya kazi hata bila intaneti: jifunze Kiingereza na Kikorea kwa Kiswahili. Pima kiwango chako kwa dakika 2 na kumbuka maneno 15,000+ kwa marudio ya wakati.',
        ios: 'Pakua kwenye App Store',
        playPublic: 'Pata kwenye Google Play',
        playBeta: 'Android: Jiunge na majaribio',
        tryBtn: 'Jaribu kadi ya neno sasa',
        chips: ['Bure · Bila kujisajili', 'Hakuna matangazo ukisoma', '100% bila intaneti', 'Programu 1 · Kozi 8'],
        floatTopTitle: 'Maneno 15,000+ · A1–C2',
        floatTopSub: 'Kiingereza · Kikorea · Hangul',
        floatBotTitle: 'Marudio ya wakati',
        floatBotSub: 'Siku 1 · 3 · 7 · 15 · 35 · 90'
      },
      metrics: [
        ['15,000+', 'Maneno kwa kila kozi'],
        ['Kozi 8', 'Lugha 5 · Programu 1'],
        ['Dakika 2', 'Kipimo cha kiwango'],
        ['15 + 3', 'Sura za hadithi na michezo']
      ],
      studio: {
        eyebrow: 'Jaribio la moja kwa moja',
        h2: 'Jaribu WordGarden v2.2 hapa hapa',
        sub: 'Chagua kozi yoyote kati ya nane kuona maneno halisi, jaribu swichi mpya ya “Maelezo kwa Kiingereza”, na ukuze mmea wako kwa chemsha bongo.',
        tabCard: 'Kadi ya neno + v2.2 Maelezo',
        tabQuiz: 'Chemsha bongo ya v2.2',
        listen: 'Sikiliza',
        prev: 'Iliyopita',
        next: 'Inayofuata',
        quizPromptLabel: 'Soma maelezo ya Kiingereza kisha chagua neno sahihi',
        quizCorrect: 'Sahihi! Mmea wako umekua.',
        quizWrong: 'Jaribu tena — chagua jibu sahihi.',
        quizNext: 'Swali linalofuata',
        quizReset: 'Panda mmea mpya',
        potCardTitle: 'Maneno hukua kadri unavyokumbuka',
        potCardSub: 'Fungua chemsha bongo ili kukuza mbegu yako hadi izae matunda.',
        potQuizDone: 'Mavuno kamili! Neno hili limeota mizizi kichwani mwako.',
        potQuizProgress: 'Kila jibu sahihi linamwagilia bustani yako'
      },
      how: {
        eyebrow: 'Marudio ya kumbukumbu',
        h2: 'Kutoka mbegu hadi tunda katika hatua 6',
        sub: 'Maneno hurudi kabla hujayasahau. Gusa hatua yoyote kuona ratiba ya umwagiliaji.',
        stages: [
          { day: 'Siku 1', name: 'Mbegu', desc: 'Panda neno jipya lenye sauti, sentensi ya mfano, na kidokezo cha kukumbuka.' },
          { day: 'Siku 3', name: 'Mche', desc: 'Kumbuka neno kupitia kusikiliza, maana, na kujaza nafasi.' },
          { day: 'Siku 7', name: 'Majani', desc: 'Baada ya wiki moja, imarisha kumbukumbu kwa tahajia na maswali ya maelezo ya Kiingereza.' },
          { day: 'Siku 15', name: 'Chipukizi', desc: 'Kutana na maneno yako ndani ya sura 15 za hadithi na michezo 3 ya lugha.' },
          { day: 'Siku 35', name: 'Ua', desc: 'Zaidi ya mwezi mmoja wa kukumbuka — bustani yako inachanua maua.' },
          { day: 'Siku 90', name: 'Tunda', desc: 'Kumbukumbu ya kudumu! Sasa unaweza kutumia neno hili kwa ujasiri.' }
        ]
      },
      features: {
        eyebrow: 'Vipengele vikuu',
        h2: 'Imetengenezwa kwa ajili ya kujifunza kweli',
        sub: 'Bila usajili, bila gharama, na inafanya kazi kikamilifu hata bila intaneti.',
        v22Badge: 'Mpya katika v2.2',
        v22Title: 'Maelezo kwa Kiingereza rahisi kwa kila neno',
        v22Desc: 'Sasa unaweza kuwasha au kuzima “Maelezo kwa Kiingereza” wakati wowote kwenye Mipangilio katika kozi zote zisizo za Kiingereza.',
        v22Bullets: [
          'Kila neno katika kozi zote 7 lina maelezo mafupi ya Kiingereza rahisi',
          'Swichi rahisi kwenye Mipangilio › Maelezo kwa Kiingereza',
          'Maswali mapya ya marudio yanayokusaidia kufikiri moja kwa moja kwa lugha unayojifunza'
        ],
        v22Foot: 'Mipangilio › Maelezo kwa Kiingereza · Elewa maana halisi',
        cards: [
          ['Kipimo cha Dakika 2', 'Jua unajua maneno mangapi tayari na uanze katika kiwango kinachokufaa (A1–C2).'],
          ['Marudio kwa Wakati (Siku 1–90)', 'Maneno hurudi kabla hujayasahau kwa kusikiliza, sentensi, na tahajia.'],
          ['Soma Kikorea — Hangul 24', 'Jifunze herufi 24 za Hangul kutoka siku ya kwanza (나이로비 = Nairobi) bila kibodi ya Kikorea.'],
          ['Hadithi ya Sura 15 + Methali', 'Soma Hadithi ya Amani kutoka Mombasa hadi Seoul na methali za kila siku zenye tafsiri.'],
          ['Michezo 3 ya Maneno', 'Oanisha haraka, Kweli au Si kweli, na Unda Sentensi kwa kutumia maneno uliyopanda.'],
          ['Bila Intaneti na Bila Akaunti', 'Maendeleo ya kila lugha huhifadhiwa kando kwenye simu yako pamoja na nakala rudufu.']
        ]
      },
      screens: {
        eyebrow: 'Ndani ya programu',
        h2: 'Tazama picha za Bustani ya Maneno',
        sub: 'Bofya picha yoyote kuikuza.',
        hint: 'Telezesha kulia au tumia mishale'
      },
      courses: {
        eyebrow: 'Programu moja, kozi nane',
        h2: 'Jifunze Kiingereza au Kikorea kwa lugha yako',
        sub: 'Bustani ya Maneno sasa ni sehemu ya programu ya WordGarden (워드가든). Kwenye skrini ya kwanza, chagua Kiswahili kisha uchague Kiingereza au Kikorea.',
        dlLabel: 'Pakua',
        privacyLabel: 'Sera ya faragha',
        supportLabel: 'Msaada'
      },
      beta: {
        title: 'Jiunge na majaribio ya Android',
        status: 'Android: majaribio kwenye Google Play — kujiunga ni bure',
        guideBtn: 'Mwongozo wa hatua kwa hatua (EN · SW · KO)'
      },
      owned: {
        eyebrow: 'Mawasiliano ya moja kwa moja',
        h2: 'Endelea kuwasiliana nasi moja kwa moja',
        sub: 'Hifadhi wordgardenapp.com au omba taarifa za matoleo mapya na kozi mpya kwa barua pepe — bila barua taka na unaweza kujiondoa wakati wowote.',
        mailLabel: 'Pata taarifa kwa barua pepe',
        mailSubject: '[WordGarden] Release Updates Opt-in (SW)',
        mailBody: 'Tafadhali nijulishe kwa barua pepe matoleo makuu au kozi mpya za WordGarden / Bustani ya Maneno zitakapotoka.',
        supportLabel: 'Msaada na Maswali',
        note: 'Tunatuma taarifa za matoleo mapya kwa walioziomba tu, tunatumia anwani yako kwa ajili hiyo tu, na unaweza kuacha kuzipokea wakati wowote kwa kujibu barua pepe.'
      },
      footer: {
        tagline: 'Programu moja, kozi nane — panda maneno, vuna lugha',
        dev: 'Msanidi: Joung Hun Park (박종훈)',
        colApp: 'Programu na Miongozo',
        colLegal: 'Faragha na Msaada',
        privacyNotice: 'Tovuti hii haitumii vidakuzi (cookies) wala zana za ufuatiliaji.'
      }
    },
    vi: {
      htmlLang: 'vi',
      brand: 'Vườn Từ',
      defaultCourse: 'vi-en',
      title: 'Vườn Từ (WordGarden) — Một Ứng Dụng, Tám Khóa Học',
      nav: { try: 'Trải nghiệm', how: 'Cách học', features: 'Tính năng', screens: 'Ảnh ứng dụng', courses: '8 Khóa học' },
      hero: {
        pillNew: 'Mới ở v2.2',
        pillText: 'Giải nghĩa tiếng Anh dễ hiểu cho 100% từ vựng ở cả 7 khóa học',
        h1: 'Trồng từ vựng mỗi ngày\nnhư chăm một khu vườn',
        sub: 'Một ứng dụng miễn phí, học ngoại tuyến với tám khóa học tiếng Anh và tiếng Hàn — gồm Vườn Từ cho người Việt. Đo vốn từ trong 2 phút và ghi nhớ hơn 15.000 từ nhờ ôn tập ngắt quãng.',
        ios: 'Tải trên App Store',
        playPublic: 'Tải trên Google Play',
        playBeta: 'Android: Tham gia bản thử nghiệm',
        tryBtn: 'Thử thẻ từ ngay tại đây',
        chips: ['Miễn phí · Không cần tài khoản', 'Không quảng cáo khi đang học', 'Học 100% offline', '1 ứng dụng · 8 khóa học'],
        floatTopTitle: '15.000+ từ · 7 cấp độ',
        floatTopSub: 'Tiếng Anh · Tiếng Hàn · EPS-TOPIK',
        floatBotTitle: 'Ôn tập ngắt quãng',
        floatBotSub: '1 · 3 · 7 · 15 · 35 · 90 ngày'
      },
      metrics: [
        ['15.000+', 'Từ vựng mỗi khóa'],
        ['8 khóa học', '5 ngôn ngữ · 1 ứng dụng'],
        ['2 phút', 'Kiểm tra vốn từ'],
        ['15 + 3', 'Chương truyện & trò chơi']
      ],
      studio: {
        eyebrow: 'Trải nghiệm trực tiếp',
        h2: 'Thử ngay WordGarden v2.2 trên web',
        sub: 'Chọn một trong tám khóa học để xem thẻ từ thật, bật/tắt giải nghĩa tiếng Anh v2.2 và làm bài trắc nghiệm tưới cây.',
        tabCard: 'Thẻ từ + Giải nghĩa v2.2',
        tabQuiz: 'Trắc nghiệm giải nghĩa v2.2',
        listen: 'Nghe phát âm',
        prev: 'Từ trước',
        next: 'Từ tiếp',
        quizPromptLabel: 'Đọc phần giải nghĩa tiếng Anh và chọn từ đúng',
        quizCorrect: 'Chính xác! Cây của bạn vừa lớn thêm.',
        quizWrong: 'Chưa đúng — hãy thử chọn lại nhé.',
        quizNext: 'Câu tiếp theo',
        quizReset: 'Trồng cây mới',
        potCardTitle: 'Từ vựng lớn lên theo trí nhớ',
        potCardSub: 'Chuyển sang tab trắc nghiệm để tưới nước cho hạt giống nở hoa kết trái.',
        potQuizDone: 'Kết trái rồi! Từ này đã nằm vững trong trí nhớ dài hạn.',
        potQuizProgress: 'Mỗi câu đúng sẽ tưới nước cho khu vườn'
      },
      how: {
        eyebrow: 'Ôn tập ngắt quãng',
        h2: 'Từ hạt giống đến trái ngọt qua 6 giai đoạn',
        sub: 'Ứng dụng nhắc bạn ôn lại đúng lúc sắp quên. Chạm từng giai đoạn để xem lộ trình ghi nhớ.',
        stages: [
          { day: 'Ngày 1', name: 'Hạt giống', desc: 'Gieo từ mới cùng phát âm, câu ví dụ và mẹo nhớ Hán-Việt hoặc gốc từ.' },
          { day: 'Ngày 3', name: 'Mầm non', desc: 'Nhớ lại từ qua bài nghe, chọn nghĩa và điền vào chỗ trống trong câu.' },
          { day: 'Ngày 7', name: 'Lá xanh', desc: 'Sau một tuần, củng cố bằng ghép âm tiết tiếng Hàn, chính tả và câu hỏi giải nghĩa v2.2.' },
          { day: 'Ngày 15', name: 'Nụ hoa', desc: 'Gặp lại các từ đã trồng trong 15 chương truyện và 3 trò chơi từ vựng.' },
          { day: 'Ngày 35', name: 'Nở hoa', desc: 'Hơn một tháng ghi nhớ bền vững — khu vườn từ vựng của bạn rực rỡ sắc hoa.' },
          { day: 'Ngày 90', name: 'Kết trái', desc: 'Trí nhớ dài hạn vững chắc, sẵn sàng dùng trong công việc, học tập và thi cử.' }
        ]
      },
      features: {
        eyebrow: 'Tính năng nổi bật',
        h2: 'Nhẹ nhàng, tập trung, nhớ lâu thật sự',
        sub: 'Không cần đăng nhập, không mất phí, không quảng cáo làm phiền khi đang học.',
        v22Badge: 'Mới ở phiên bản 2.2',
        v22Title: 'Giải nghĩa tiếng Anh dễ hiểu cho mọi từ vựng',
        v22Desc: 'Hiểu sâu sắc thái của từ bên cạnh nghĩa tiếng Việt. Đã phủ 100% từ vựng ở cả 7 khóa học không dùng giao diện tiếng Anh.',
        v22Bullets: [
          'Đầy đủ 100% từ vựng kèm giải nghĩa ngắn gọn, dễ hiểu bằng tiếng Anh',
          'Bật hoặc tắt “Giải nghĩa bằng tiếng Anh” bất cứ lúc nào trong Cài đặt',
          'Thêm dạng câu hỏi ôn tập mới: đọc giải nghĩa tiếng Anh rồi chọn từ đúng'
        ],
        v22Foot: 'Cài đặt › Giải nghĩa bằng tiếng Anh · Hiểu đúng ngữ cảnh',
        cards: [
          ['Đo vốn từ trong 2 phút', 'Ước lượng số từ bạn đã biết và đưa bạn vào đúng cấp độ khởi đầu (7 cấp độ).'],
          ['Ôn tập theo đường cong quên', 'Tưới nước vào ngày 1, 3, 7, 15, 35, 90 qua bài nghe, điền từ, ghép âm tiết và giải nghĩa.'],
          ['Bảng chữ cái Hangul & Ghép âm tiết', 'Học đọc 24 chữ cái Hangul ngay từ ngày đầu và ghép từ mà không cần bàn phím tiếng Hàn.'],
          ['Truyện 15 chương có âm thanh', 'Đọc truyện gắn với đời sống ở Hàn Quốc và tiếng Anh hằng ngày, chạm từ để xem nghĩa ngay.'],
          ['3 Trò chơi luyện từ', 'Ghép cặp siêu tốc, Đúng sai 60 giây và Xếp câu dùng chính các từ bạn đang học.'],
          ['Offline · Riêng tư · Lưu riêng từng khóa', 'Không cần tạo tài khoản. Học mọi lúc không cần mạng và sao lưu tiến độ dễ dàng bằng tệp JSON.']
        ]
      },
      screens: {
        eyebrow: 'Giao diện thực tế',
        h2: 'Khám phá bên trong Vườn Từ',
        sub: 'Nhấn vào từng ảnh để xem phóng to.',
        hint: 'Cuộn ngang hoặc dùng nút mũi tên'
      },
      courses: {
        eyebrow: 'Một ứng dụng, tám khóa học',
        h2: 'Học tiếng Anh hoặc tiếng Hàn bằng ngôn ngữ của bạn',
        sub: 'Từ phiên bản 2.0, Vườn Từ (Tiếng Anh · Tiếng Hàn) là hai khóa học trong ứng dụng WordGarden (워드가든). Chọn “Tiếng Việt” ở màn hình đầu tiên rồi chọn khóa học bạn muốn.',
        dlLabel: 'Trang tải ứng dụng',
        privacyLabel: 'Chính sách quyền riêng tư',
        supportLabel: 'Hỗ trợ'
      },
      beta: {
        title: 'Tham gia thử nghiệm Android',
        status: 'Android: đang thử nghiệm kín trên Google Play — tham gia miễn phí',
        guideBtn: 'Hướng dẫn chi tiết (EN · SW · KO)'
      },
      owned: {
        eyebrow: 'Kênh kết nối trực tiếp',
        h2: 'Luôn kết nối trực tiếp với WordGarden',
        sub: 'Lưu địa chỉ wordgardenapp.com hoặc đăng ký nhận email khi có khóa học và bản cập nhật lớn — không thư rác, hủy nhận bất cứ lúc nào chỉ bằng một email trả lời.',
        mailLabel: 'Nhận thông báo cập nhật qua email',
        mailSubject: '[WordGarden] Đăng ký nhận tin cập nhật (VI)',
        mailBody: 'Vui lòng gửi thông báo qua email cho tôi khi WordGarden / Vườn Từ có bản cập nhật lớn hoặc khóa học mới.',
        supportLabel: 'Hỗ trợ & Sao lưu',
        note: 'Chúng tôi chỉ gửi tin cập nhật cho người đã đăng ký, chỉ dùng địa chỉ email của bạn vào việc đó, và bạn có thể ngừng nhận bất cứ lúc nào bằng cách trả lời email.'
      },
      footer: {
        tagline: 'Một ứng dụng, tám khóa học — trồng từ vựng như chăm vườn',
        dev: 'Nhà phát triển: Joung Hun Park (박종훈)',
        colApp: 'Ứng dụng & Hướng dẫn',
        colLegal: 'Quyền riêng tư & Hỗ trợ',
        privacyNotice: 'Trang web này không sử dụng cookie hay công cụ theo dõi.'
      }
    }
  }

  /* ===================== State ===================== */
  function detectInitialLang() {
    var m = /[?&]lang=(ko|en|fil|tl|sw|vi)(?:&|#|$)/i.exec(location.search)
    if (m) return m[1].toLowerCase() === 'tl' ? 'fil' : m[1].toLowerCase()
    var nav = (navigator.language || 'en').toLowerCase()
    if (nav.indexOf('ko') === 0) return 'ko'
    if (nav.indexOf('fil') === 0 || nav.indexOf('tl') === 0) return 'fil'
    if (nav.indexOf('sw') === 0) return 'sw'
    if (nav.indexOf('vi') === 0) return 'vi'
    return 'en'
  }

  var state = {
    lang: detectInitialLang(),
    courseId: 'ko-en',
    wordIdx: 0,
    showEnDef: true,
    studioMode: 'card', // 'card' | 'quiz'
    quizIdx: 0,
    quizStage: 1,
    quizAnswered: false,
    quizChoices: [],
    selectedHowStage: 1,
    heroSceneIdx: 0,
    lightboxIdx: -1,
    playPublic: false
  }
  state.courseId = I18N[state.lang].defaultCourse

  function $(id) { return document.getElementById(id) }
  function qsa(sel) { return Array.prototype.slice.call(document.querySelectorAll(sel)) }

  function escapeHtml(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
  }

  function highlightWord(sentence, hl) {
    var safe = escapeHtml(sentence)
    if (!hl) return safe
    var esc = hl.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    return safe.replace(new RegExp('(' + esc + ')', 'i'), '<mark>$1</mark>')
  }

  function currentCourse() {
    for (var i = 0; i < COURSES.length; i++) {
      if (COURSES[i].id === state.courseId) return COURSES[i]
    }
    return COURSES[0]
  }

  /* ===================== Render Language & Static Text ===================== */
  function renderLanguage() {
    var t = I18N[state.lang]
    document.documentElement.lang = t.htmlLang
    document.title = t.title

    qsa('.lang-btn').forEach(function (b) {
      b.setAttribute('aria-pressed', b.getAttribute('data-lang') === state.lang ? 'true' : 'false')
    })

    $('brand-name').textContent = t.brand
    $('nav-try').textContent = t.nav.try
    $('nav-how').textContent = t.nav.how
    $('nav-features').textContent = t.nav.features
    $('nav-screens').textContent = t.nav.screens
    $('nav-courses').textContent = t.nav.courses

    $('hero-pill-new').textContent = t.hero.pillNew
    $('hero-pill-text').textContent = t.hero.pillText
    $('hero-h1').innerHTML = escapeHtml(t.hero.h1).replace(/\n/g, '<br>')
    $('hero-sub').textContent = t.hero.sub
    $('hero-ios-label').textContent = t.hero.ios
    $('hero-try-label').textContent = t.hero.tryBtn
    var heroAndroid = $('hero-android')
    heroAndroid.setAttribute('data-play', t.hero.playPublic)
    heroAndroid.setAttribute('data-beta', t.hero.playBeta)
    $('hero-android-label').textContent = state.playPublic ? t.hero.playPublic : t.hero.playBeta

    var chipsEl = $('hero-chips')
    chipsEl.innerHTML = t.hero.chips.map(function (c) {
      return '<li><svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2.2" aria-hidden="true"><path d="M4.5 10.5l3.5 3.5 7.5-8" stroke-linecap="round" stroke-linejoin="round"/></svg>' + escapeHtml(c) + '</li>'
    }).join('')

    // Metrics
    var metricsHtml = t.metrics.map(function (m) {
      return '<div class="metric-item"><div class="metric-num">' + escapeHtml(m[0]) + '</div><div class="metric-label">' + escapeHtml(m[1]) + '</div></div>'
    }).join('')
    $('metrics-grid').innerHTML = metricsHtml

    // Studio headers
    $('studio-eyebrow').textContent = t.studio.eyebrow
    $('studio-h2').textContent = t.studio.h2
    $('studio-sub').textContent = t.studio.sub
    $('mode-card-btn').textContent = t.studio.tabCard
    $('mode-quiz-btn').textContent = t.studio.tabQuiz

    // How headers
    $('how-eyebrow').textContent = t.how.eyebrow
    $('how-h2').textContent = t.how.h2
    $('how-sub').textContent = t.how.sub

    // Features
    $('feat-eyebrow').textContent = t.features.eyebrow
    $('feat-h2').textContent = t.features.h2
    $('feat-sub').textContent = t.features.sub
    $('v22-badge').textContent = t.features.v22Badge
    $('v22-title').textContent = t.features.v22Title
    $('v22-desc').textContent = t.features.v22Desc
    $('v22-bullets').innerHTML = t.features.v22Bullets.map(function (b) {
      return '<li><svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2.2" aria-hidden="true"><path d="M4.5 10.5l3.5 3.5 7.5-8" stroke-linecap="round" stroke-linejoin="round"/></svg><span>' + escapeHtml(b) + '</span></li>'
    }).join('')
    $('v22-foot').textContent = t.features.v22Foot

    var featTitles = qsa('.feat-card h3')
    var featDescs = qsa('.feat-card p')
    t.features.cards.forEach(function (c, i) {
      if (featTitles[i]) featTitles[i].textContent = c[0]
      if (featDescs[i]) featDescs[i].textContent = c[1]
    })

    // Screens headers
    $('screens-eyebrow').textContent = t.screens.eyebrow
    $('screens-h2').textContent = t.screens.h2
    $('screens-sub').textContent = t.screens.sub
    $('gallery-hint').textContent = t.screens.hint

    // Courses headers
    $('courses-eyebrow').textContent = t.courses.eyebrow
    $('courses-h2').textContent = t.courses.h2
    $('courses-sub').textContent = t.courses.sub

    // Beta headers
    $('beta-title').textContent = t.beta.title
    $('beta-status').textContent = t.beta.status
    $('beta-guide-btn').textContent = t.beta.guideBtn

    // Owned channel
    if (t.owned && $('owned-eyebrow')) {
      $('owned-eyebrow').textContent = t.owned.eyebrow
      $('owned-h2').textContent = t.owned.h2
      $('owned-sub').textContent = t.owned.sub
      $('owned-mail-label').textContent = t.owned.mailLabel
      $('owned-mail-btn').href = 'mailto:jpmajo2137@gmail.com?subject=' + encodeURIComponent(t.owned.mailSubject) + '&body=' + encodeURIComponent(t.owned.mailBody)
      $('owned-support-label').textContent = t.owned.supportLabel
      if ($('owned-note')) $('owned-note').textContent = t.owned.note
      // the support page in the visitor's language (the Korean page stays the default in index.html)
      var supportPath = { ko: 'support/', en: 'korean/support/', fil: 'hardin/support/', sw: 'bustani/support/', vi: 'vuontu/support/' }[state.lang]
      if ($('owned-support-btn') && supportPath) $('owned-support-btn').href = 'https://wordgardenapp.com/wordgarden-privacy/' + supportPath
    }

    // Footer
    $('footer-brand-name').textContent = t.brand
    $('footer-tagline').textContent = t.footer.tagline
    $('footer-dev').textContent = t.footer.dev
    $('footer-col-app').textContent = t.footer.colApp
    $('footer-col-legal').textContent = t.footer.colLegal
    $('footer-privacy-note').textContent = t.footer.privacyNotice

    renderHeroScenes()
    renderHowStages()
    renderGallery()
    renderStudio()
  }

  /* ===================== Hero Scene Switcher ===================== */
  function renderHeroScenes() {
    var cfg = SCREENSHOTS[state.lang]
    if (state.heroSceneIdx >= cfg.hero.length) state.heroSceneIdx = 0
    var active = cfg.hero[state.heroSceneIdx]
    var img = $('hero-shot-img')
    img.src = 'screenshots/' + state.lang + '/s' + active.i + '.webp'
    img.alt = cfg.alts[active.i - 1]
    img.setAttribute('data-shot-index', String(active.i - 1))

    var tabs = $('hero-scene-tabs')
    tabs.innerHTML = cfg.hero.map(function (sc, idx) {
      var sel = idx === state.heroSceneIdx ? 'true' : 'false'
      return '<button type="button" class="scene-tab" role="tab" aria-selected="' + sel + '" data-scene="' + idx + '">' + escapeHtml(sc.label) + '</button>'
    }).join('')
  }

  /* ===================== 6-Stage Growth Timeline ===================== */
  function renderHowStages() {
    var stages = I18N[state.lang].how.stages
    var grid = $('stages-grid')
    grid.innerHTML = stages.map(function (st, idx) {
      var num = idx + 1
      var active = state.selectedHowStage === num
      return '<button type="button" class="stage-card" aria-pressed="' + (active ? 'true' : 'false') + '" data-stage="' + num + '">'
        + plantSvg(num, 52, { sway: active, bloom: active && num >= 5 })
        + '<span class="stage-day">' + escapeHtml(st.day) + '</span>'
        + '<span class="stage-name">' + escapeHtml(st.name) + '</span>'
        + '</button>'
    }).join('')

    var cur = stages[state.selectedHowStage - 1]
    $('stage-detail-svg').innerHTML = plantSvg(state.selectedHowStage, 56, { sway: true, bloom: state.selectedHowStage >= 5 })
    $('stage-detail-text').innerHTML = '<strong>' + escapeHtml(cur.name) + ' (' + escapeHtml(cur.day) + ')</strong> — ' + escapeHtml(cur.desc)
  }

  /* ===================== Interactive WordGarden Studio ===================== */
  function buildQuizChoices(word) {
    var arr = [word.w].concat(word.distractors.slice(0, 3))
    // Deterministic shuffle based on word length + index so it stays varied without feeling erratic
    for (var i = arr.length - 1; i > 0; i--) {
      var j = (i * 7 + state.quizIdx * 3 + word.w.length) % (i + 1)
      var tmp = arr[i]; arr[i] = arr[j]; arr[j] = tmp
    }
    return arr
  }

  function renderStudio() {
    var t = I18N[state.lang].studio
    var course = currentCourse()

    // Course pills
    $('course-pills').innerHTML = COURSES.map(function (c) {
      var pressed = c.id === state.courseId ? 'true' : 'false'
      return '<button type="button" class="course-pill" aria-pressed="' + pressed + '" data-course="' + c.id + '">'
        + '<span class="pair-badge">' + c.shortBadge + '</span>'
        + escapeHtml(c.label)
        + '</button>'
    }).join('')

    // Mode tabs
    $('mode-card-btn').setAttribute('aria-selected', state.studioMode === 'card' ? 'true' : 'false')
    $('mode-quiz-btn').setAttribute('aria-selected', state.studioMode === 'quiz' ? 'true' : 'false')

    // v2.2 EN explanation toggle
    var toggleWrap = $('en-toggle-wrap')
    if (course.hasEnDef && state.studioMode === 'card') {
      toggleWrap.hidden = false
      $('en-toggle-label').textContent = 'v2.2 ' + course.enToggleLabel
      $('en-toggle-btn').setAttribute('aria-checked', state.showEnDef ? 'true' : 'false')
    } else {
      toggleWrap.hidden = true
    }

    var stageEl = $('studio-stage')
    if (state.studioMode === 'card') {
      var w = course.words[state.wordIdx % course.words.length]
      var canSpeak = 'speechSynthesis' in window
      var enDefHtml = (course.hasEnDef && state.showEnDef)
        ? '<div class="word-en-def"><span class="en-tag">EN ·</span><span>' + escapeHtml(w.enDef) + '</span></div>'
        : ''
      var rrHtml = w.rr ? '<p class="word-rr">[' + escapeHtml(w.rr) + ']</p>' : ''
      var speakHtml = canSpeak
        ? '<button type="button" class="speak-btn" id="speak-word-btn" aria-label="' + escapeHtml(t.listen) + '"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M11 5L6 9H2v6h4l5 4V5z" stroke-linejoin="round"/><path d="M15.5 8.5a5 5 0 010 7M18.5 5.5a9 9 0 010 13" stroke-linecap="round"/></svg><span>' + escapeHtml(t.listen) + '</span></button>'
        : ''

      stageEl.innerHTML =
        '<div class="demo-card-grid">'
        + '<div class="word-card">'
          + '<div>'
            + '<div class="word-top">'
              + '<div><span class="word-pos">' + escapeHtml(w.pos) + '</span><h3 class="word-head">' + escapeHtml(w.w) + '</h3>' + rrHtml + '</div>'
              + speakHtml
            + '</div>'
            + '<p class="word-meaning">' + escapeHtml(w.mean) + '</p>'
            + enDefHtml
            + '<div class="word-example">'
              + '<p class="word-ex-text">' + highlightWord(w.ex, w.hl) + '</p>'
              + '<p class="word-ex-tr">' + escapeHtml(w.exTr) + '</p>'
            + '</div>'
            + (w.tip ? '<p class="word-tip">💡 ' + escapeHtml(w.tip) + '</p>' : '')
          + '</div>'
          + '<div class="word-nav">'
            + '<button type="button" class="mini-btn" id="word-prev-btn">← ' + escapeHtml(t.prev) + '</button>'
            + '<span class="word-counter">' + (state.wordIdx + 1) + ' / ' + course.words.length + '</span>'
            + '<button type="button" class="mini-btn" id="word-next-btn">' + escapeHtml(t.next) + ' →</button>'
          + '</div>'
        + '</div>'
        + '<div class="garden-pot-card">'
          + '<div class="pot-svg-stage">' + plantSvg(Math.min(6, state.wordIdx + 2), 78, { sway: true, bloom: state.wordIdx + 2 >= 5 }) + '</div>'
          + '<h3 class="pot-stage-title">' + escapeHtml(t.potCardTitle) + '</h3>'
          + '<p class="pot-stage-sub">' + escapeHtml(t.potCardSub) + '</p>'
          + '<button type="button" class="btn btn-ghost" id="jump-quiz-btn">' + escapeHtml(t.tabQuiz) + ' →</button>'
        + '</div>'
        + '</div>'
    } else {
      var qw = course.words[state.quizIdx % course.words.length]
      if (!state.quizChoices.length) state.quizChoices = buildQuizChoices(qw)
      var dots = ''
      for (var d = 1; d <= 6; d++) {
        dots += '<span class="stage-dot' + (d < state.quizStage ? ' filled' : d === state.quizStage ? ' current' : '') + '"></span>'
      }
      var optsHtml = state.quizChoices.map(function (choice) {
        return '<button type="button" class="quiz-opt" data-choice="' + escapeHtml(choice) + '"><span>' + escapeHtml(choice) + '</span></button>'
      }).join('')

      var potMsg = state.quizStage >= 6 ? t.potQuizDone : t.potQuizProgress
      stageEl.innerHTML =
        '<div class="demo-card-grid">'
        + '<div class="word-card">'
          + '<div>'
            + '<div class="quiz-prompt-box">'
              + '<p class="quiz-q-label"><span class="en-tag">EN ·</span> ' + escapeHtml(t.quizPromptLabel) + '</p>'
              + '<p class="quiz-q-def">“' + escapeHtml(qw.enDef) + '”</p>'
            + '</div>'
            + '<div class="quiz-options" id="quiz-options">' + optsHtml + '</div>'
            + '<div class="quiz-feedback" id="quiz-feedback" hidden></div>'
          + '</div>'
        + '</div>'
        + '<div class="garden-pot-card">'
          + '<div class="pot-svg-stage" id="quiz-pot-svg">' + plantSvg(state.quizStage, 84, { sway: true, bloom: state.quizStage >= 5 }) + '</div>'
          + '<div class="stage-dots" id="quiz-pot-dots" aria-hidden="true">' + dots + '</div>'
          + '<h3 class="pot-stage-title" id="quiz-pot-title">' + escapeHtml(I18N[state.lang].how.stages[state.quizStage - 1].name) + ' (' + state.quizStage + '/6)</h3>'
          + '<p class="pot-stage-sub" id="quiz-pot-sub">' + escapeHtml(potMsg) + '</p>'
          + '<div id="quiz-pot-reset">' + (state.quizStage >= 6 ? '<button type="button" class="mini-btn" id="quiz-reset-btn">' + escapeHtml(t.quizReset) + '</button>' : '') + '</div>'
        + '</div>'
        + '</div>'
    }
  }

  function speakCurrentWord() {
    if (!('speechSynthesis' in window)) return
    var course = currentCourse()
    var w = course.words[state.wordIdx % course.words.length]
    try {
      window.speechSynthesis.cancel()
      var utter = new SpeechSynthesisUtterance(w.w)
      utter.lang = course.targetLang
      utter.rate = 0.92
      window.speechSynthesis.speak(utter)
    } catch (_) {}
  }

  /* ===================== Gallery & Lightbox ===================== */
  function renderGallery() {
    var cfg = SCREENSHOTS[state.lang]
    var track = $('gallery-track')
    track.innerHTML = cfg.alts.map(function (alt, idx) {
      var n = idx + 1
      return '<button type="button" class="shot-item" data-lightbox="' + idx + '" aria-label="' + escapeHtml(alt) + '">'
        + '<img src="screenshots/' + state.lang + '/s' + n + '.webp" alt="' + escapeHtml(alt) + '" width="1080" height="1920" loading="lazy" decoding="async">'
        + '</button>'
    }).join('')
  }

  function openLightbox(idx) {
    var cfg = SCREENSHOTS[state.lang]
    state.lightboxIdx = (idx + cfg.alts.length) % cfg.alts.length
    var n = state.lightboxIdx + 1
    var lb = $('lightbox')
    $('lightbox-img').src = 'screenshots/' + state.lang + '/s' + n + '.webp'
    $('lightbox-img').alt = cfg.alts[state.lightboxIdx]
    $('lightbox-caption').textContent = (n) + ' / ' + cfg.alts.length
    lb.hidden = false
    $('lightbox-close').focus()
  }

  function closeLightbox() {
    $('lightbox').hidden = true
    state.lightboxIdx = -1
  }

  /* ===================== Theme Toggle (zero cookies / zero storage) ===================== */
  function currentThemeIsDark() {
    var explicit = document.documentElement.getAttribute('data-theme')
    if (explicit === 'dark') return true
    if (explicit === 'light') return false
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  }

  function updateThemeIcon() {
    var dark = currentThemeIsDark()
    $('theme-icon-sun').hidden = !dark
    $('theme-icon-moon').hidden = dark
    $('theme-toggle').setAttribute('aria-pressed', dark ? 'true' : 'false')
  }

  /* ===================== Android beta.json Integration (preserved 100%) ===================== */
  function initBetaSync() {
    var GROUP = /^https:\/\/groups\.google\.com\/g\/[a-z0-9][a-z0-9._-]{0,62}\/?$/
    function apply(cfg) {
      if (!cfg || typeof cfg !== 'object' || !cfg.apps || typeof cfg.apps !== 'object') return
      var group = typeof cfg.group === 'string' && GROUP.test(cfg.group) ? cfg.group : null
      var s = cfg.apps['com.wordgarden.app']
      if (s === 'public') {
        state.playPublic = true
        qsa('[data-pkg="com.wordgarden.app"]').forEach(function (el) {
          if (el.tagName === 'A') {
            el.href = 'https://play.google.com/store/apps/details?id=com.wordgarden.app&referrer=' + encodeURIComponent('utm_source=homepage&utm_campaign=web')
            var span = el.querySelector('span')
            var playText = el.getAttribute('data-play') || I18N[state.lang].hero.playPublic
            if (span) span.textContent = playText
            else el.textContent = playText
          } else {
            el.hidden = true
          }
        })
        var betaSec = $('beta')
        if (betaSec) betaSec.hidden = true
        return
      }
      var mode = group && s === 'beta' ? 'beta' : 'closed'
      qsa('#beta [data-mode]').forEach(function (el) {
        el.hidden = el.getAttribute('data-mode') !== mode
      })
      if (mode === 'beta') {
        qsa('#beta a.grp').forEach(function (a) { a.href = group })
      }
    }

    if (window.fetch) {
      fetch('/wordgarden-privacy/beta.json', { cache: 'no-cache', credentials: 'omit' })
        .then(function (r) { return r.ok ? r.json() : null })
        .then(apply)
        .catch(function () {})
    }
  }

  /* ===================== Event Wiring ===================== */
  document.addEventListener('click', function (e) {
    var target = e.target.closest('button, a, .hero-shot-card')
    if (!target) return

    if (target.classList.contains('lang-btn')) {
      var nextLang = target.getAttribute('data-lang')
      if (I18N[nextLang] && nextLang !== state.lang) {
        state.lang = nextLang
        state.courseId = I18N[nextLang].defaultCourse
        state.wordIdx = 0
        state.quizIdx = 0
        state.quizChoices = []
        state.heroSceneIdx = 0
        renderLanguage()
        if (window.history && history.replaceState) {
          try {
            var u = new URL(location.href)
            u.searchParams.set('lang', nextLang)
            history.replaceState(null, '', u.pathname + u.search + u.hash)
          } catch (_) {}
        }
      }
      return
    }

    if (target.id === 'theme-toggle') {
      var next = currentThemeIsDark() ? 'light' : 'dark'
      document.documentElement.setAttribute('data-theme', next)
      updateThemeIcon()
      return
    }

    if (target.classList.contains('scene-tab')) {
      state.heroSceneIdx = Number(target.getAttribute('data-scene')) || 0
      renderHeroScenes()
      return
    }

    if (target.classList.contains('hero-shot-card')) {
      var idx = Number($('hero-shot-img').getAttribute('data-shot-index')) || 0
      openLightbox(idx)
      return
    }

    if (target.classList.contains('course-pill')) {
      state.courseId = target.getAttribute('data-course')
      state.wordIdx = 0
      state.quizIdx = 0
      state.quizChoices = []
      renderStudio()
      return
    }

    if (target.id === 'mode-card-btn') {
      state.studioMode = 'card'
      renderStudio()
      return
    }
    if (target.id === 'mode-quiz-btn' || target.id === 'jump-quiz-btn') {
      state.studioMode = 'quiz'
      state.quizChoices = []
      renderStudio()
      return
    }

    if (target.id === 'en-toggle-btn') {
      state.showEnDef = !state.showEnDef
      renderStudio()
      return
    }

    if (target.id === 'speak-word-btn') {
      speakCurrentWord()
      return
    }

    if (target.id === 'word-prev-btn') {
      var len = currentCourse().words.length
      state.wordIdx = (state.wordIdx - 1 + len) % len
      renderStudio()
      return
    }
    if (target.id === 'word-next-btn') {
      var len2 = currentCourse().words.length
      state.wordIdx = (state.wordIdx + 1) % len2
      renderStudio()
      return
    }

    if (target.classList.contains('quiz-opt')) {
      var course = currentCourse()
      var qw = course.words[state.quizIdx % course.words.length]
      var chosen = target.getAttribute('data-choice')
      var t = I18N[state.lang].studio
      var fb = $('quiz-feedback')
      if (chosen === qw.w) {
        target.classList.add('correct')
        qsa('.quiz-opt').forEach(function (b) { b.disabled = true })
        state.quizStage = Math.min(6, state.quizStage + 1)
        var pot = $('quiz-pot-svg')
        if (pot) pot.innerHTML = plantSvg(state.quizStage, 84, { sway: true, bloom: true })
        var dotsEl = $('quiz-pot-dots')
        if (dotsEl) {
          var nextDots = ''
          for (var d = 1; d <= 6; d++) {
            nextDots += '<span class="stage-dot' + (d < state.quizStage ? ' filled' : d === state.quizStage ? ' current' : '') + '"></span>'
          }
          dotsEl.innerHTML = nextDots
        }
        var potTitle = $('quiz-pot-title')
        if (potTitle) potTitle.textContent = I18N[state.lang].how.stages[state.quizStage - 1].name + ' (' + state.quizStage + '/6)'
        var potSub = $('quiz-pot-sub')
        if (potSub) potSub.textContent = state.quizStage >= 6 ? t.potQuizDone : t.potQuizProgress
        var potReset = $('quiz-pot-reset')
        if (potReset && state.quizStage >= 6) {
          potReset.innerHTML = '<button type="button" class="mini-btn" id="quiz-reset-btn">' + escapeHtml(t.quizReset) + '</button>'
        }
        fb.className = 'quiz-feedback ok'
        fb.innerHTML = '<span>🌱 ' + escapeHtml(t.quizCorrect) + ' (' + escapeHtml(qw.w) + ' — ' + escapeHtml(qw.mean) + ')</span>'
          + '<button type="button" class="mini-btn" id="quiz-next-btn">' + escapeHtml(t.quizNext) + ' →</button>'
        fb.hidden = false
      } else {
        target.classList.add('wrong')
        target.disabled = true
        fb.className = 'quiz-feedback err'
        fb.innerHTML = '<span>' + escapeHtml(t.quizWrong) + '</span>'
        fb.hidden = false
      }
      return
    }

    if (target.id === 'quiz-next-btn') {
      state.quizIdx = (state.quizIdx + 1) % currentCourse().words.length
      state.quizChoices = []
      renderStudio()
      return
    }

    if (target.id === 'quiz-reset-btn') {
      state.quizStage = 1
      state.quizIdx = 0
      state.quizChoices = []
      renderStudio()
      return
    }

    if (target.classList.contains('stage-card')) {
      state.selectedHowStage = Number(target.getAttribute('data-stage')) || 1
      renderHowStages()
      return
    }

    if (target.id === 'gallery-prev') {
      $('gallery-track').scrollBy({ left: -280, behavior: 'smooth' })
      return
    }
    if (target.id === 'gallery-next') {
      $('gallery-track').scrollBy({ left: 280, behavior: 'smooth' })
      return
    }

    if (target.classList.contains('shot-item')) {
      openLightbox(Number(target.getAttribute('data-lightbox')) || 0)
      return
    }

    if (target.id === 'lightbox-prev') { openLightbox(state.lightboxIdx - 1); return }
    if (target.id === 'lightbox-next') { openLightbox(state.lightboxIdx + 1); return }
    if (target.id === 'lightbox-close' || target.id === 'lightbox') { closeLightbox(); return }
  })

  document.addEventListener('keydown', function (e) {
    if (state.lightboxIdx < 0) return
    if (e.key === 'Escape') closeLightbox()
    else if (e.key === 'ArrowLeft') openLightbox(state.lightboxIdx - 1)
    else if (e.key === 'ArrowRight') openLightbox(state.lightboxIdx + 1)
  })

  // Initial render
  updateThemeIcon()
  renderLanguage()
  initBetaSync()
})()
