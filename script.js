const TOTAL_QUESTIONS = 12;

const questions = [
  {
    question: "วันหนึ่งคุณลืมตาขึ้นมาและพบกับรถไฟปริศนาตรงหน้า คุณคิดว่ารถไฟขบวนนี้จะนำพาคุณไปที่ไหน",
    choices: [
      { text: "ดินแดนโบราณที่งดงาม ดูเงียบสงบ", scores: { kuroshiro: 1, gunhina: 1 } },
      { text: "บ้านที่มีบรรยากาศน่าคิดถึง", scores: { shiranaka: 1, dogfes: 1, sansho: 1 } },
      { text: "โลกอนาคตสุดล้ำ", scores: { cyber: 1, workshop: 1 } },
      { text: "ไปต่างโลก ! พี่มาแล้ว โลกแฟนตาซีสุดมหัศจรรย์", scores: { sorcevalier: 1 } }
    ]
  },
  {
    question: "คุณได้ขึ้นมาบนรถไฟขบวนนี้แล้ว คุณจะทำอะไรเป็นอย่างแรก",
    choices: [
      { text: "ง่วงนอนจัง หาที่นอนแล้วหลับดีกว่า", scores: { dogfes: 1 } },
      { text: "เดินสำรวจรอบ ๆ รถไฟ", scores: { detective: 1, sorcevalier: 1 } },
      { text: "หาที่นั่งชมวิว มุมติดหน้าต่าง", scores: { kuroshiro: 1, bloomfesidol: 1, dantoru: 1 } },
      { text: "มองหาพนักงานบนรถไฟ", scores: { sayoten: 1 } }
    ]
  },
  {
    question: "“ยินดีต้อนรับสู่ขบวนรถไฟ OneTwo Special Express คุณดูเหนื่อย ๆ นะ รับนี่ไปทานสิ !” คุณหันไปตามเสียงนั้นเจอตุ๊กตากระต่ายแสนน่ารักนำอาหารมาให้คุณ และอาหารนั้นคือ…",
    choices: [
      { text: "อาหารมื้อหลักอย่างข้าวหน้าเนื้อ ! (ไม่ใส่ผัก)", scores: { cyber: 1, workshop: 1 } },
      { text: "เครื่องดื่มดับกระหาย เช่นชาร้อน ๆ", scores: { gunhina: 1, shiranaka: 1, sansho: 1 } },
      { text: "ของกินเล่นจุกจิกอย่างเฟรนซ์ฟราย !", scores: { sayoten: 1 } },
      { text: "ขนมหวานแสนอร่อยอย่างคุกกี้ !", scores: { dantoru: 1, kuroshiro: 1 } }
    ]
  },
  {
    question: "“ฉันเป็นพนักงานรถไฟที่นี่ ยินดีที่ได้รู้จักนะ ! รถไฟขบวนนี้น่ะจะนำไปสู่โลกที่คุณใฝ่ฝันล่ะ” จากนั้นคุณพนักงานรถไฟตุ๊กตากระต่ายถามคุณเกี่ยวกับความฝันในอดีต ! คุณจะตอบไปว่า…",
    choices: [
      { text: "การได้สร้างสรรค์ผลงานสักชิ้นที่จะทำให้ผู้คนตื่นตะลึง", scores: { workshop: 1 } },
      { text: "การได้รับการยอมรับจากคนสำคัญ", scores: { sansho: 1, dantoru: 1, sorcevalier: 1 } },
      { text: "ขอเพียงแค่ได้ใช้ชีวิตที่แสนเรียบง่าย", scores: { bloomfesidol: 1, gunhina: 1, dogfes: 1 } },
      { text: "เอาเข้าจริงก็ไม่มีอะไรเป็นพิเศษ…", scores: { shiranaka: 1 } }
    ]
  },
  {
    question: "คุณพนักงานกระต่ายฟังคำตอบของคุณแล้วพยักหน้า “แล้วตอนนี้เธอเป็นยังไงบ้างล่ะ ?”",
    choices: [
      { text: "ตั้งเป้าหมายไว้และกำลังมุ่งหน้าไขว่คว้ามันอย่างสุดกำลัง", scores: { sorcevalier: 1, detective: 1 } },
      { text: "ค่อย ๆ ขยับเข้าใกล้อย่างไม่รีบร้อน", scores: { kuroshiro: 1, dogfes: 1, gunhina: 1 } },
      { text: "กดดันตัวเองจนบางทีก็รู้สึกเหนื่อยนิดหน่อย…", scores: { sayoten: 1, cyber: 1 } },
      { text: "อยู่ในช่วงลองอะไรใหม่ๆที่ไม่เคยทำมาก่อน", scores: { sansho: 1 } }
    ]
  },
  {
    question: "คุณพนักงานกระต่ายฟังคำตอบแล้วยิ้มให้คุณ ก่อนเปิดโอกาสให้คุณถามคำถามบ้าง คุณตัดสินใจถามว่า…",
    choices: [
      { text: "ฉันจะกลับบ้านได้ยังไง", scores: { detective: 1, cyber: 1 } },
      { text: "รถไฟขบวนนี้กำลังไปที่ไหน", scores: { sansho: 1, dantoru: 1 } },
      { text: "ที่นี่มีแค่เธอคนเดียวเหรอ", scores: { sayoten: 1, bloomfesidol: 1 } },
      { text: "ว่างจังเลย เรามาเล่นเกมกันเถอะ", scores: { workshop: 1, dogfes: 1 } }
    ]
  },
  {
    question: "“ตื้ด ตื้ด” แล้วเสียงแจ้งเตือนก็ดังสนั่น จู่ ๆ ก็มีเหตุขัดข้องเกิดขึ้น อุกกาบาตยักษ์กำลังจะพุ่งชนรถไฟ ! คุณเข้าไปกอดตุ๊กตากระต่ายไว้อย่างกล้าหาญ จากนั้น…",
    choices: [
      { text: "พยายามใจเย็นและประเมินสถานการณ์", scores: { gunhina: 1, shiranaka: 1 } },
      { text: "ตื่นตระหนกตกใจ ไม่นะ เราจะตายกันหมด", scores: { workshop: 1, kuroshiro: 1 } },
      { text: "พยายามไปที่บังคับรถไฟเพื่อหักเลี้ยวหลบอุกกาบาด", scores: { sayoten: 1, sansho: 1 } },
      { text: "มองหาที่ปลอดภัยและเข้าไปหลบ", scores: { bloomfesidol: 1, detective: 1 } }
    ]
  },
  {
    question: "อุกกาบาตเริ่มใกล้เข้ามาเรื่อย ๆ บางทีโลกอาจจะแตกตรงนี้ก็ได้ !! คุณหลับตาลง สิ่งสุดท้ายที่ปรากฎขึ้นมาในห้วงความคิดก็คือ…",
    choices: [
      { text: "ใบหน้าของคนสำคัญ", scores: { bloomfesidol: 1, kuroshiro: 1 } },
      { text: "หนังสือที่ดองไว้แถมยังไม่ได้อ่านซักเล่ม", scores: { shiranaka: 1 } },
      { text: "เรื่องราวในชีวิตต่าง ๆ ที่ผ่านมา", scores: { sansho: 1, detective: 1, cyber: 1 } },
      { text: "คาเฟ่รุยคาสะ 12.12.2026 ณ Eattention Please สามย่าน ที่คุณยังไม่ได้ไป", scores: { kuroshiro: 1, sayoten: 1, cyber: 1, dantoru: 1, gunhina: 1, workshop: 1, detective: 1, shiranaka: 1, sansho: 1, dogfes: 1, bloomfesidol: 1, sorcevalier: 1 } }
    ]
  },
  {
    question: "ดูเหมือนคุณจะยังไม่ถึงฆาต อุกกาบาตเลี้ยวหักศอกหลบรถไฟไปซะอย่างนั้น ถึงจะดูพิสดารไปซักหน่อย แต่ยังไงซะสถานการณ์ก็ปลอดภัยแล้ว คุณจึง…",
    choices: [
      { text: "ถอนหายใจสุดปอด โล่งใจเป็นอย่างมาก นึกว่าจะสู่ขิตซะแล้ว !", scores: { bloomfesidol: 1 } },
      { text: "ตื่นเต้นกับเหตุการณ์นี้ ไม่คิดมาก่อนว่าจะเห็นอุกกาบาตโตเกียวดริฟแบบใน Fast & Furious", scores: { sorcevalier: 1, sayoten: 1, cyber: 1 } },
      { text: "ยังไม่วางใจ พยายามตรวจสอบดูว่าไม่มีส่วนไหนในรถไฟที่เสียหาย", scores: { workshop: 1, detective: 1 } },
      { text: "มองหาว่าตุ๊กตากระต่ายปลอดภัยดีหรือไม่", scores: { dantoru: 1, gunhina: 1, dogfes: 1 } }
    ]
  },
  {
    question: "คุณพนักงานกระต่ายปลาบปลื้มกับการกระทำสุดกล้าหาญเมื่อครู่ของคุณมาก จึงเสนอตัวพาคุณไปดูในส่วนลึกของรถไฟ ณ ที่นั่น คุณได้เจอกับ…",
    choices: [
      { text: "โซนพักผ่อนที่ถึงจะเล็กแต่ก็อบอุ่น", scores: { dogfes: 1, kuroshiro: 1, bloomfesidol: 1 } },
      { text: "ห้องสมุดที่เงียบสงบ มีหนังสือทุกเล่มที่คุณอยากอ่าน", scores: { shiranaka: 1, sansho: 1 } },
      { text: "เรือนกระจกดอกไม้ที่มองเห็นดวงดาวระยิบระยับ", scores: { dantoru: 1, gunhina: 1 } },
      { text: "ห้องเก็บของมหึมาที่เต็มไปด้วยทองคำและหีบสมบัติ ได้ฤกษ์เป็นเศรษฐีแล้วเรา", scores: { sorcevalier: 1, sayoten: 1, cyber: 1 } }
    ]
  },
  {
    question: "“เมื่อกี้เธอเท่มากเลยนะ เหมือนฮีโร่เลย !” จากนั้นคุณพนักงานกระต่ายก็ยื่นบางอย่างให้กับคุณเป็นการขอบคุณ สิ่งนั้นคือ…",
    choices: [
      { text: "ช่อดอกไม้สุดอลังการ", scores: { kuroshiro: 1 } },
      { text: "ที่คั่นหนังสือที่ดูเรียบง่าย", scores: { shiranaka: 1, detective: 1 } },
      { text: "ลูกแก้ววิเศษที่ดูมีกลิ่นตุ ๆ", scores: { sorcevalier: 1 } },
      { text: "โหลแก้วที่บรรจุดวงดาวระยิบระยับ", scores: { dantoru: 1, workshop: 1 } }
    ]
  },
  {
    question: " “รถไฟขบวนนี้จะสิ้นสุดการให้บริการที่สถานีนี้ กรุณาตรวจสอบสัมภาระและประตูรถจะเปิดออกทางด้านขวา” เสียงประกาศจากรถไฟดังขึ้น ชานชาลากำลังใกล้เข้ามาเรื่อย ๆ ดูเหมือนจะต้องจากกันซะแล้วสิ… สิ่งสุดท้ายที่คุณจะบอกกับคุณพนักงานกระต่ายก็คือ…",
    choices: [
      { text: "ขอบคุณที่อยู่เป็นเพื่อนกันมาตลอดทางนะ", scores: { dantoru: 1, shiranaka: 1, gunhina: 1 } },
      { text: "เราจะได้เจอกันอีกรึเปล่า ?", scores: { detective: 1, bloomfesidol: 1 } },
      { text: "การผจญภัยครั้งนี้สนุกมากเลย !", scores: { sorcevalier: 1, sayoten: 1, cyber: 1, workshop: 1 } },
      { text: "ดูแลตัวเองด้วยนะ อย่าปล่อยให้เป็นหวัดล่ะ !", scores: { dogfes: 1 } }
    ]
  }
];

const TIE_BREAK_QUESTIONS = [3, 4, 6, 11];


const resultTypes = {
  kuroshiro: {
    title: "คุโระชิโระ",
    description: "รักบริสุทธิ์ที่ซ่อนลึกไว้ด้วยคำสาปแสนหวาน รุยดอกลิลลี่สีดำที่ไม่ได้เก่งไปเสียทุกอย่างเหมือนรุยเราที่รู้จัก และสึคาสะ ดอกลิลลี่สีขาวที่ปรารถนาให้รุยยิ้มออกมาจากใจจริง ถ้าคุณพร้อมจะเฝ้าดูพวกเขาท่ามกลางกลิ่นหอมและภาษาดอกไม้แล้วละก็ เชิญมานั่งในงานเลี้ยงน้ำชาของพวกเขาได้เลย !"
  },
  gunhina: {
    title: "กุนฮินะ",
    description: "กุนซือที่อายุน้อยที่สุด นั้นคือสิ่งที่ผู้คนใช้เรียกคามิชิโระ รุยมาตลอด รุยที่เติบโตมากับการเขียนยุทธศาสตร์จนความสนุกในชีวิตเลือนหายไป… นั้นคือจังหวะเดียวกับตอนที่เขาได้เจอกับชายหนุ่มที่งดงามราวกับตุ๊กตาฮินะ หากอยากดำดิ่งในโลกดนตรีและท่วงทำนองจากการแสดงของสึคาสะในนามฮินะ และรุยที่เด็ดขาดกับทุกคน แต่ได้แสดงด้านที่อ่อนโยนให้กับคนรักเพียงคนเดียวของเขา ท่ามกลางแผนสงครามและตัวหมาก อยากจะลองชิมความหวานนี้ดูมั้ยละ ?"
  },
  shiranaka: {
    title: "ชิรานากะ",
    description: "หนุ่มแว่นอ่อนโยนผู้เป็นพนักงานร้านหนังสือ กับบรรณาธิการหน้าใสไว้ใจไม่ได้ หากคุณชอบรสชาติของความเรียบง่ายไม่หวือหวาแต่มีกลิ่นอายของผู้ใหญ่ AU นี้คือคำตอบ กลิ่นของหนังสือเก่า อบอวลด้วยไอรักที่พาเขามาเจอกัน วรรณกรรมกับความเป็นจริง คิดว่าบรรณาธิการหนุ่มคนนี้จะชอบอะไรมากกว่ากันนะ ?"
  },
  cyber: {
    title: "ไซเบอร์",
    description: " ไซบอร์กรุยที่ดูไร้อารมณ์ กับสึคาสะที่เป็นคนสอนอารมณ์ต่าง ๆ ให้กับเขา โลกที่จะดึงคุณเข้าสู่แสงสีในยุคอนาคตและทำความรู้จักกับรุยในคราบหน้ากากลึกลับและสึคาสะผู้ยังคงความสดใสตามฉบับเดิม เตรียมใจให้พร้อมแล้วมุ่งหน้าทำภารกิจกับพวกเขากัน !"
  },
  sansho: {
    title: "ซังโช",
    description: "พนักงานรัฐปากแข็งกับคุณเจ้าหน้าที่เคร่งขรึม เรื่องราวเบื้องหลังม่านการแสดงที่ไม่มีใครล่วงรู้ ความสัมพันธ์ของทั้งคู่ที่กำลังรอใครสักคนมาเติมแต่ง ชะตากรรมของพนักงานรัฐผู้ได้รับบทลงโทษนี้จะลงเอยเช่นไร แล้วคุณเจ้าหน้าที่ผู้แสนใจดีนี้จะเลือกทำอย่างไร มาร่วมขีดเขียน เติมแต่ง เรื่องราวของพวกเขาไปพร้อมกัน…"
  },
  dogfes: {
    title: "หมาเฟส",
    description: "น้องหมาขี้อ้อนแสนซน กับพี่ชายอ่อนโยนแสนหวาน ขนมปังทาเนยร้อน ๆ รับประทานคู่กับชาหวาน ๆ ยามเช้า ช่างเป็นบรรยากาศที่ชวนให้คิดถึงครอบครัว ในความเรียบง่ายที่แสนสบายนั้น กลับมีความวายป่วงเล็ก ๆ ซ่อนอยู่ในทุกวัน ถึงอย่างนั้นก็ยังชวนให้รู้สึกอบอุ่นหัวใจอย่างน่าประหลาด หากคุณต้องการที่พักใจในวันที่เหนื่อยล้า ยังมีบ้านหลังนี้ที่รอต้อนรับคุณอยู่เสมอนะ !"
  },
  workshop: {
    title: "Strange Workshop",
    description: " เจ้าของเวิร์คช็อปผู้ขี้แกล้งกับพนักงานแก้มกลมเลยโดนจิ้มแก้ม เสียงเครื่องจักรที่กำลังทำงานดังอย่างน่ารำคาญ แต่อะไรเล่าจะน่ารำคาญเท่าเจ้าของเวิร์คช็อปแปลก ๆ ผู้ขี้แกล้ง ที่มักจะคอยหาเรื่องมาแหย่พนักงานระบายสีผู้ขยันขันแข็งคนนี้อยู่เสมอ ? มาร่วมลุ้นไปพร้อมกันว่ารุยที่ขี้เล่นกับสึคาสะผู้ตั้งใจทำงานจนไม่สังเกตแม้กระทั่งผมที่ปรกหน้าตัวเอง สุดท้ายแล้วเรื่องราวของทั้งคู่จะลงเอยแบบไหนกันนะ ?"
  },
  sorcevalier: {
    title: "จอมเวทอัศวิน",
    description: "จอมเวทและอัศวิน เวทมนตร์และคมดาบ อำนาจและความภักดี  ระหว่างจับมือจุมพิตด้วยรัก กับการเป็นศัตรูที่พร้อมจะเชือดเฉือนกันทุกคราที่พบหน้า ในโลกมนตราแห่งนี้ คุณจะมานำพาพวกเขาไปทางไหนกัน นั่นก็เป็นทางที่คุณต้องเลือกแล้วละ ;)"
  },
  dantoru: {
    title: "ดันโทรุ",
    description: "หัวหน้าคณะผู้มากความสามารถ และนักเปียโนขี้อายผู้รักดวงดาว นักเปียโนขี้อายที่อยากจะส่งต่อบทเพลงของเขาไปให้คนทั่วโลกได้ฟัง กับหัวหน้าคณะดนตรีที่จะโลดแล่นนำพาคณะไปบรรเลงบทเพลงในเมืองต่าง ๆ คนผู้เต็มใจพร้อมจะดันหลังให้โทรปได้โบยบินไปไกลกว่าเดิม ความอ่อนโยนละมุนและกลิ่นอายของยุคสมัยก่อน มาฟังเพลงบรรเลงบทนี้ไปด้วยกันเถอะ !"
  },
  bloomfesidol: {
    title: "บลูมเฟสไอดอล",
    description: "รุยผู้ผ่านเรื่องราวมามากมาย และสึคาสะที่ส่องสว่างท่ามกลางความมืดมิด นักประดิษฐ์รุยที่ยังคงเฝ้าดูโลกใบนี้ที่เขารักแม้ทุกอย่างจะมลายหายไป ทว่าท่ามกลางความว่างเปล่านั้น ยังมีแสงสว่างที่ส่องประกายยิ่งกว่าแสงใดจากสิ่งประดิษฐ์ของเขา แสงนั้นไม่ใช่ใครอื่นไกล แต่คือดวงดาวของเขานั่นเอง คนที่ไม่ว่าเมื่อไหร่ก็ยังคงหันมายิ้มให้เสมอ และเขาจะยังคงมอบรอยยิ้มให้รุยไปสู่การพบพานใหม่ ๆ แบบนี้ตลอดไป…"
  },
  detective: {
    title: "นักสืบ",
    description: " เจ้าหน้าที่สืบสวนสุดขรึม กับนักสืบเอกชนสุดโก๊ะ คุณคิดว่าคดีที่ยากที่สุดจะเป็นคดีแบบไหนกันนะ ? ไม่ว่าจะเป็นคดีของหายไปจนถึงคดีฆาตกรรมสุดซับซ้อน ด้วยความสามารถของคู่หูนักสืบคู่นี้แล้ว ไม่ว่าจะเป็นคดีไหน ๆ ล้วนถูกแก้ไขได้ในพริบตา ทว่ากลับมีอยู่หนึ่งคดีที่แม้แต่คู่หูนักสืบคู่นี้ยังไร้ทางออก… มาร่วมลุ้นไปพร้อมกันว่า “คดีหัวใจ” นี้ จะถูกไขออกเมื่อไหร่กันนะ"
  },
  sayoten: {
    title: "ซาโยเทน",
    description: "รุยจอมเจ้าเล่ห์กับสึคาสะที่มักจะใช้การบลัฟเพื่อปกปิดจุดอ่อนของตัวเองอยู่เสมอ หากคุณชื่นชอบเรื่องราวที่เต็มไปด้วยการวางแผนสุดซับซ้อนซ่อนเงื่อน เดาทางยาก และทุกวินาทีสามารถพลิกชะตาได้แล้วล่ะก็…! ขอแนะนำให้รู้จักกับรุยและสึคาสะในโลกใต้ดินสีเทา ผู้กำกับเจ้าแผนการและนักแสดงนำผู้ใช้ทักษะการแสดงอันเหนือชั้นเพื่อหลอกล่อศัตรู ใครจะเป็นมิตรหรือศัตรู ถ้าไม่ระวังให้ดีคุณเองก็อาจจะถูกหลอกด้วยเช่นกัน !"
  }
};


let currentQuestion = 0;
let answers = Array(TOTAL_QUESTIONS).fill(null);


const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");


document.getElementById("start-btn").addEventListener("click", () => {
  startScreen.hidden = true;
  quizScreen.hidden = false;
  showQuestion();
});


document.getElementById("back-btn").addEventListener("click", () => {
  if (currentQuestion > 0) {
    currentQuestion--;
    showQuestion();
  }
});


document.getElementById("next-btn").addEventListener("click", () => {
  if (answers[currentQuestion] === null) return;

  if (currentQuestion < TOTAL_QUESTIONS - 1) {
    currentQuestion++;
    showQuestion();
  } else {
    showResult();
  }
});


document.getElementById("restart-btn").addEventListener("click", () => {
  currentQuestion = 0;
  answers = Array(TOTAL_QUESTIONS).fill(null);

  resultScreen.hidden = true;
  startScreen.hidden = false;
});


function showQuestion() {
  const question = questions[currentQuestion];

  document.getElementById("question-progress").textContent =
    `คำถามที่ ${currentQuestion + 1} / ${TOTAL_QUESTIONS}`;

  document.getElementById("question-title").textContent =
    question.question;

  document.getElementById("progress-fill").style.width =
    `${((currentQuestion + 1) / TOTAL_QUESTIONS) * 100}%`;

  const container = document.getElementById("choices-container");
  container.innerHTML = "";

  question.choices.forEach((choice, index) => {
    const button = document.createElement("button");
    button.className = "choice";
    button.textContent = choice.text;

    if (answers[currentQuestion] === index) {
      button.classList.add("selected");
    }

    button.addEventListener("click", () => {
      answers[currentQuestion] = index;
      showQuestion();
    });

    container.appendChild(button);
  });

  document.getElementById("back-btn").disabled =
    currentQuestion === 0;

  document.getElementById("next-btn").disabled =
    answers[currentQuestion] === null;

  document.getElementById("next-btn").textContent =
    currentQuestion === TOTAL_QUESTIONS - 1
      ? "ดูผลลัพธ์"
      : "ถัดไป";
}


function calculateScores() {
  const scores = {};

  Object.keys(resultTypes).forEach(type => {
    scores[type] = 0;
  });

  answers.forEach((answerIndex, questionIndex) => {
    if (answerIndex === null) return;

    const choice = questions[questionIndex].choices[answerIndex];

    Object.entries(choice.scores).forEach(([type, points]) => {
      scores[type] += points;
    });
  });

  return scores;
}


function showResult() {
  const scores = calculateScores();

  const ranking = Object.entries(scores)
    .sort((a, b) => b[1] - a[1]);

  const highestScore = ranking[0][1];

  let winners = ranking
    .filter(([, score]) => score === highestScore)
    .map(([type]) => type);

  if (winners.length > 1) {
    const support = Object.fromEntries(
      winners.map(type => [type, 0])
    );

    TIE_BREAK_QUESTIONS.forEach(questionIndex => {
      const answerIndex = answers[questionIndex];

      if (answerIndex === null || answerIndex === undefined) {
        return;
      }

      const choice = questions[questionIndex].choices[answerIndex];

      winners.forEach(type => {
        if ((choice.scores[type] || 0) > 0) {
          support[type] += 1;
        }
      });
    });

    const highestSupport = Math.max(
      ...winners.map(type => support[type])
    );

    winners = winners.filter(
      type => support[type] === highestSupport
    );

    if (winners.length > 1) {
      const randomIndex = Math.floor(Math.random() * winners.length);
      winners = [winners[randomIndex]];
    }
  }

  const winner = winners[0];
  const title = resultTypes[winner].title;
  const description = resultTypes[winner].description;

  document.getElementById("result-title").textContent = title;
  document.getElementById("result-description").textContent = description;

  quizScreen.hidden = true;
  resultScreen.hidden = false;
}
