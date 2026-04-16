
        // 塔罗牌图片URL
        import cardImages from './data/cardImages.js';;

        // 塔罗牌数据 - 包含元素信息
        const tarotCards = [
            { name: "愚人", number: "0", element: "air", keywords: ["新的开始", "冒险", "自由"], 
              meaningUpright: "充满无限可能性的开始，相信直觉，勇敢迈出第一步", 
              meaningReversed: "需要谨慎行事，避免冲动和盲目冒险" },
            { name: "魔术师", number: "I", element: "air", keywords: ["创造力", "行动力", "自信"], 
              meaningUpright: "拥有实现目标的所有资源和能力，积极主动地创造", 
              meaningReversed: "需要更多准备，避免过度自信或欺骗" },
            { name: "女祭司", number: "II", element: "water", keywords: ["直觉", "智慧", "神秘"], 
              meaningUpright: "倾听内在声音，相信直觉，保持静默观察", 
              meaningReversed: "需要理性思考，避免过度敏感或秘密" },
            { name: "女皇", number: "III", element: "earth", keywords: ["丰饶", "母性", "创造力"], 
              meaningUpright: "享受生活的美好，培养创造力，关爱自己和他人", 
              meaningReversed: "需要更多自律，避免过度放纵或依赖" },
            { name: "皇帝", number: "IV", element: "fire", keywords: ["权威", "稳定", "领导力"], 
              meaningUpright: "建立秩序和结构，展现领导力，保持稳定", 
              meaningReversed: "需要灵活变通，避免过于固执或专制" },
            { name: "教皇", number: "V", element: "earth", keywords: ["传统", "信仰", "指导"], 
              meaningUpright: "遵循传统智慧，寻求指导，重视教育", 
              meaningReversed: "需要打破常规，挑战传统观念" },
            { name: "恋人", number: "VI", element: "air", keywords: ["爱情", "选择", "和谐"], 
              meaningUpright: "面临重要的关系决定，追求和谐与平衡", 
              meaningReversed: "需要审视关系，避免盲目选择或不忠" },
            { name: "战车", number: "VII", element: "water", keywords: ["胜利", "意志", "决心"], 
              meaningUpright: "通过意志力克服困难，朝着目标坚定前进", 
              meaningReversed: "需要调整方向，避免过度用力或失控" },
            { name: "力量", number: "VIII", element: "fire", keywords: ["勇气", "耐心", "内在力量"], 
              meaningUpright: "用温和的方式展现力量，保持耐心和信心", 
              meaningReversed: "需要更多自信，避免自我怀疑或压抑" },
            { name: "隐士", number: "IX", element: "earth", keywords: ["独处", "反思", "智慧"], 
              meaningUpright: "独处反思，寻求内在智慧，暂时远离喧嚣", 
              meaningReversed: "需要走出孤独，避免过度孤立或逃避" },
            { name: "命运之轮", number: "X", element: "fire", keywords: ["变化", "命运", "机遇"], 
              meaningUpright: "顺应变化的周期，把握命运的机遇", 
              meaningReversed: "需要适应变化，避免抗拒命运或错失良机" },
            { name: "正义", number: "XI", element: "air", keywords: ["公平", "真理", "平衡"], 
              meaningUpright: "追求公正和真理，做出明智的决定", 
              meaningReversed: "需要重新审视，避免偏见或不公" },
            { name: "吊人", number: "XII", element: "water", keywords: ["牺牲", "等待", "新视角"], 
              meaningUpright: "从不同角度看待问题，耐心等待时机", 
              meaningReversed: "需要采取行动，避免过度拖延或固执" },
            { name: "死神", number: "XIII", element: "water", keywords: ["结束", "转变", "新生"], 
              meaningUpright: "接受必要的结束，迎接转变和新生", 
              meaningReversed: "需要放下过去，避免抗拒改变或停滞" },
            { name: "节制", number: "XIV", element: "fire", keywords: ["平衡", "节制", "和谐"], 
              meaningUpright: "保持平衡和节制，追求内在的和谐", 
              meaningReversed: "需要调整平衡，避免极端或过度" },
            { name: "恶魔", number: "XV", element: "earth", keywords: ["束缚", "欲望", "物质"], 
              meaningUpright: "认识并面对内在的束缚和欲望", 
              meaningReversed: "需要摆脱依赖，打破束缚追求自由" },
            { name: "塔", number: "XVI", element: "fire", keywords: ["突变", "觉醒", "破坏"], 
              meaningUpright: "经历突变后的觉醒，打破旧有模式", 
              meaningReversed: "需要预防危机，避免突然的变化" },
            { name: "星星", number: "XVII", element: "air", keywords: ["希望", "灵感", "信心"], 
              meaningUpright: "保持希望和信心，追随内心的指引", 
              meaningReversed: "需要重拾信心，避免失去希望" },
            { name: "月亮", number: "XVIII", element: "water", keywords: ["幻觉", "恐惧", "潜意识"], 
              meaningUpright: "面对内心的恐惧，探索潜意识的世界", 
              meaningReversed: "需要澄清困惑，避免被幻觉误导" },
            { name: "太阳", number: "XIX", element: "fire", keywords: ["成功", "快乐", "活力"], 
              meaningUpright: "充满成功和快乐，展现活力和自信", 
              meaningReversed: "需要保持乐观，避免过度自满" },
            { name: "审判", number: "XX", element: "fire", keywords: ["重生", "觉醒", "宽恕"], 
              meaningUpright: "经历重生和觉醒，获得内心的宽恕", 
              meaningReversed: "需要自我反省，避免逃避责任" },
            { name: "世界", number: "XXI", element: "earth", keywords: ["完成", "成就", "圆满"], 
              meaningUpright: "达成目标，感受圆满和完整", 
              meaningReversed: "需要完成未竟之事，避免半途而废" }
        ];

        // 小阿卡纳牌
        const minorArcana = [];
        const suits = [
            { name: 'wands', display: '权杖', element: 'fire', symbol: '⚡' },
            { name: 'cups', display: '圣杯', element: 'water', symbol: '🔮' },
            { name: 'swords', display: '宝剑', element: 'air', symbol: '⚔️' },
            { name: 'pentacles', display: '星币', element: 'earth', symbol: '💰' }
        ];
        const numbers = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', '侍从', '骑士', '王后', '国王'];
        const numberDisplayMap = {
            'Ace': '一', '2': '二', '3': '三', '4': '四', '5': '五',
            '6': '六', '7': '七', '8': '八', '9': '九', '10': '十',
            '侍从': '侍从', '骑士': '骑士', '王后': '王后', '国王': '国王'
        };
        
        suits.forEach(suit => {
            numbers.forEach((num, idx) => {
                minorArcana.push({
                    name: `${suit.display}${numberDisplayMap[num]}`,
                    number: num,
                    suit: suit.name,
                    suitDisplay: suit.display,
                    element: suit.element,
                    symbol: suit.symbol,
                    keywords: [suit.element === 'fire' ? '行动' : suit.element === 'water' ? '情感' : suit.element === 'air' ? '思维' : '物质'],
                    meaningUpright: `${suit.display}代表${suit.element === 'fire' ? '创造力和行动力' : suit.element === 'water' ? '情感和直觉' : suit.element === 'air' ? '思维和沟通' : '物质和实际'}`,
                    meaningReversed: `${suit.display}逆位时需要${suit.element === 'fire' ? '控制冲动' : suit.element === 'water' ? '理性思考' : suit.element === 'air' ? '避免过度分析' : '脚踏实地'}`
                });
            });
        });

        
        // 大阿卡纳牌故事背景
        const cardStories = {
            '愚人': {
                story: '愚人代表着旅程的开始，一个年轻人站在悬崖边，满怀信心地迈向未知。他背着简单的行囊，象征着轻装上阵，不被过去的负担所累。身旁的小狗提醒着他潜在的危险，但他选择相信直觉，勇敢前行。',
                element: '风',
                planet: '天王星',
                keywords: '新的开始、冒险、自由、纯真、信任'
            },
            '魔术师': {
                story: '魔术师站在桌前，桌上摆放着代表四元素的圣器：权杖、圣杯、宝剑和星币。他一手指向天空，一手指向大地，象征着"如其在上，如其在下"的神秘法则。他拥有将灵感转化为现实的能力。',
                element: '风',
                planet: '水星',
                keywords: '创造力、行动力、自信、显化、专注'
            },
            '女祭司': {
                story: '女祭司端坐于黑白两柱之间，柱上分别刻有B和J字母，代表波阿斯和雅斤。她手持卷轴，象征着隐藏的智慧。身后的帷幕上绣着石榴和棕榈，暗示着丰饶与生命的奥秘。她教导我们倾听内在的声音。',
                element: '水',
                planet: '月亮',
                keywords: '直觉、智慧、神秘、内在知识、静默'
            },
            '女皇': {
                story: '女皇安坐在丰饶的花园中，周围是金黄的麦穗和茂密的森林。她手持权杖，头戴星冠，象征着母性的力量与创造力的巅峰。她的存在本身就是丰饶与滋养的象征，教导我们享受生活的美好。',
                element: '土',
                planet: '金星',
                keywords: '丰饶、母性、创造力、享受、滋养'
            },
            '皇帝': {
                story: '皇帝端坐于石座之上，身披铠甲，手持权杖和圆球，象征着对物质世界的掌控。背后是荒芜的山脉，代表着他的严谨与坚定。他建立了秩序与结构，是权威与稳定的化身。',
                element: '火',
                planet: '火星',
                keywords: '权威、稳定、领导力、秩序、结构'
            },
            '教皇': {
                story: '教皇坐在两根柱子之间的宝座上，手持三重权杖，象征着精神权威。面前跪着两位信徒，代表着传统智慧的传承。他教导我们尊重传统，寻求精神上的指导，但也提醒我们要有自己的判断。',
                element: '土',
                planet: '木星',
                keywords: '传统、信仰、指导、教育、精神权威'
            },
            '恋人': {
                story: '亚当和夏娃站在伊甸园中，天使拉斐尔在他们上方祝福。夏娃身后是知识之树，亚当身后是生命树。这张牌象征着爱情、和谐与重要的选择，提醒我们在关系中追求真诚与平衡。',
                element: '风',
                planet: '金星',
                keywords: '爱情、选择、和谐、关系、价值观'
            },
            '战车': {
                story: '战士驾驭着由黑白两只狮身人面兽拉动的战车，一黑一白象征着对立力量的统一。他手持权杖，头戴八角星冠，代表着意志力的胜利。战车象征着通过坚定的决心克服困难，达成目标。',
                element: '水',
                planet: '月亮',
                keywords: '胜利、意志、决心、控制、前进'
            },
            '力量': {
                story: '一位温柔的女子正合上狮子的嘴，她没有使用武力，而是用内在的力量和耐心驯服了野兽。狮子象征着原始的欲望和本能，女子代表着更高层次的自我。这张牌教导我们真正的力量来自内心的平静与信心。',
                element: '火',
                planet: '太阳',
                keywords: '勇气、耐心、内在力量、温和、信心'
            },
            '隐者': {
                story: '隐者手持灯笼，独自站在雪山之巅。灯笼中的六角星象征着内在的智慧之光。他远离尘嚣，在孤独中寻求真理。这张牌代表着内省、反思和寻求内在指引的时期，提醒我们在静默中找到答案。',
                element: '土',
                planet: '水星',
                keywords: '独处、反思、智慧、指引、内在探索'
            },
            '命运之轮': {
                story: '巨大的轮盘在宇宙中旋转，四个角落分别是天使、鹰、牛和狮子，代表着四元素和四福音书作者。蛇、阿努比斯和斯芬克斯在轮盘上，象征着生命的循环、下降与上升。这张牌提醒我们变化是生命的常态。',
                element: '火',
                planet: '木星',
                keywords: '变化、命运、机遇、周期、转折点'
            },
            '正义': {
                story: '正义女神端坐在两柱之间，手持天平和宝剑。天平象征着平衡与公平，宝剑代表着清晰的思维和决断。她教导我们要诚实面对自己和他人，做出公正的决定，并为自己的行为负责。',
                element: '风',
                planet: '金星',
                keywords: '公平、真理、平衡、责任、因果'
            },
            '倒吊人': {
                story: '倒吊人悬挂在T形十字架上，一只脚被绑，但姿态安详。他的头部周围散发着光芒，象征着灵性的觉醒。这张牌代表着牺牲、等待和从不同角度看待问题，教导我们有时候需要暂停才能前进。',
                element: '水',
                planet: '海王星',
                keywords: '牺牲、等待、新视角、放手、顿悟'
            },
            '死神': {
                story: '骷髅骑士骑着白马，手持黑旗，旗帜上是神秘的玫瑰十字。国王、主教、妇女和儿童都在他面前臣服，象征着死亡面前人人平等。但这张牌并非代表肉体的死亡，而是结束、转变和重生的过程。',
                element: '水',
                planet: '冥王星',
                keywords: '结束、转变、新生、释放、蜕变'
            },
            '节制': {
                story: '天使米迦勒站在溪边，一只脚在水中，一只在岸上，象征着意识与潜意识的连接。他正在将水从一个杯子倒入另一个，代表着炼金术般的融合与平衡。这张牌教导我们中庸之道和耐心的艺术。',
                element: '火',
                planet: '木星',
                keywords: '平衡、节制、和谐、融合、耐心'
            },
            '恶魔': {
                story: '恶魔坐在宝座上，男女被锁链束缚，但锁链是松的，暗示着束缚是自我强加的。恶魔的羊角、蝙蝠翅膀和鸟爪象征着原始的欲望和物质主义。这张牌提醒我们审视自己的执念和束缚，寻找解脱之道。',
                element: '土',
                planet: '土星',
                keywords: '束缚、欲望、物质、执念、阴影'
            },
            '塔': {
                story: '高塔被闪电击中，火焰从窗户喷出，两个人从塔上坠落。这座塔建立在不稳定的基础上，象征着虚假的安全感。虽然画面看起来灾难性，但这张牌代表着必要的破坏、觉醒和打破旧有模式的机会。',
                element: '火',
                planet: '火星',
                keywords: '突变、觉醒、破坏、启示、解放'
            },
            '星星': {
                story: ' naked 女子跪在溪边，一只脚在水中，一只在岸上。她手持两个杯子，将水倒在陆地和水中。头顶是八角星，周围是七颗小星，象征着希望和灵感的源泉。这张牌带来了疗愈、信心和未来的希望。',
                element: '风',
                planet: '天王星',
                keywords: '希望、灵感、信心、疗愈、指引'
            },
            '月亮': {
                story: '满月高悬，月亮中是神秘的面孔。下方是狼和狗在嚎叫，小龙虾从水中爬出，象征着潜意识深处的恐惧和本能。两条小路通向未知，代表着选择的迷茫。这张牌提醒我们要面对恐惧，穿越幻觉寻找真相。',
                element: '水',
                planet: '月亮',
                keywords: '幻觉、恐惧、潜意识、直觉、神秘'
            },
            '太阳': {
                story: '灿烂的太阳高悬天空，光芒四射。一个赤裸的孩童骑在白马上，手持红旗，象征着纯真的喜悦和活力。向日葵在墙后盛开，代表着生命力的旺盛。这张牌带来了成功、快乐和充满活力的能量。',
                element: '火',
                planet: '太阳',
                keywords: '成功、快乐、活力、纯真、成就'
            },
            '审判': {
                story: '天使加百列在云端吹响号角，下方的人们从棺材中升起，张开双臂迎接重生。远处的雪山象征着过去的经历。这张牌代表着觉醒、重生和宽恕，是精神层面的重大转折点，呼唤我们响应内在的召唤。',
                element: '火',
                planet: '冥王星',
                keywords: '重生、觉醒、宽恕、召唤、新生'
            },
            '世界': {
                story: '裸女在月桂花环中舞蹈，手持权杖，四角的鹰、狮子、牛和天使代表四元素。这是旅程的终点，也是新的起点，代表着完成和圆满。它教导我们庆祝成就，享受完成的美好，同时准备新的旅程。',
                element: '土',
                planet: '土星',
                keywords: '完成、成就、圆满、整合、旅行'
            }
        };


        const allCards = [...tarotCards, ...minorArcana];

        // 每张牌的独特解读模板
        const cardInterpretations = {
            '愚人': {
                upright: {
                    morning: "清晨的愚者能量让你充满好奇心，适合尝试新事物，不要拘泥于常规",
                    afternoon: "午后保持开放心态，意外的机遇可能出现，保持警觉",
                    evening: "傍晚适合放下包袱，享受当下的自由，但也要注意脚下",
                    past: "过去的经历让你学会了冒险精神，这是宝贵的财富",
                    present: "此刻你正处于人生的新起点，充满无限可能",
                    future: "未来充满未知，但正是这种未知让生命精彩",
                    advice: "相信直觉，但别忘了看清前路"
                },
                reversed: {
                    morning: "清晨需要谨慎行事，避免冲动决策",
                    afternoon: "午后可能感到迷茫，建议先停下来理清思路",
                    evening: "傍晚反思今日行为，是否有过于冒进之处",
                    past: "过去的冒进可能带来了一些教训",
                    present: "此刻需要更多准备，不要急于行动",
                    future: "未来需要更谨慎的规划",
                    advice: "冒险之前，先做好准备"
                }
            },
            '魔术师': {
                upright: {
                    morning: "清晨魔术师能量充沛，你拥有实现目标的所有资源",
                    afternoon: "午后是展现才华的最佳时机，主动创造机会",
                    evening: "傍晚总结今日成果，你会发现自己的潜力",
                    past: "过去积累的技能和资源现在可以派上用场",
                    present: "此刻你具备化想法为现实的能力",
                    future: "未来你的创造力将得到充分发挥",
                    advice: "相信自己，你比你想象的更有能力"
                },
                reversed: {
                    morning: "清晨可能感到准备不足，先整理手头的资源",
                    afternoon: "午后避免过度承诺，量力而行",
                    evening: "傍晚反思是否有欺骗自己或他人的行为",
                    past: "过去可能错过了一些展示才华的机会",
                    present: "此刻需要更多准备时间",
                    future: "未来需要更脚踏实地的计划",
                    advice: "先打好基础，再施展魔法"
                }
            },
            '女祭司': {
                upright: {
                    morning: "清晨适合冥想和内省，倾听内心的声音",
                    afternoon: "午后直觉特别敏锐，相信你的第六感",
                    evening: "傍晚适合阅读或学习神秘学知识",
                    past: "过去的沉默观察让你获得了智慧",
                    present: "此刻答案就在你内心深处",
                    future: "未来需要更多的耐心等待",
                    advice: "静观其变，答案自会浮现"
                },
                reversed: {
                    morning: "清晨可能感到焦虑，尝试理性分析",
                    afternoon: "午后避免过度敏感，保持客观",
                    evening: "傍晚放下执念，接受不确定性",
                    past: "过去可能忽视了重要的直觉信号",
                    present: "此刻需要理性与感性的平衡",
                    future: "未来不要让恐惧主导决策",
                    advice: "理性分析，但也不要完全忽视直觉"
                }
            },
            '女皇': {
                upright: {
                    morning: "清晨感受大自然的能量，享受丰盛的生活",
                    afternoon: "午后适合创作或照顾他人，发挥母性光辉",
                    evening: "傍晚犒赏自己，享受美好的事物",
                    past: "过去的滋养让你现在充满能量",
                    present: "此刻是收获和享受成果的时候",
                    future: "未来会有更多的丰盛等着你",
                    advice: "善待自己，享受生活的美好"
                },
                reversed: {
                    morning: "清晨可能感到空虚，寻找内在的满足",
                    afternoon: "午后避免过度依赖他人或物质",
                    evening: "傍晚反思是否忽视了自己的需求",
                    past: "过去可能过度放纵或依赖",
                    present: "此刻需要更多的自律",
                    future: "未来要学会独立和自足",
                    advice: "真正的丰盛来自内心"
                }
            },
            '皇帝': {
                upright: {
                    morning: "清晨建立今日的计划和结构，按部就班执行",
                    afternoon: "午后展现领导力，做出果断决策",
                    evening: "傍晚巩固成果，建立长期稳定",
                    past: "过去的努力为你建立了稳固的基础",
                    present: "此刻需要展现权威和责任感",
                    future: "未来你的领导能力将得到认可",
                    advice: "建立秩序，但保持灵活"
                },
                reversed: {
                    morning: "清晨避免过于固执，保持开放心态",
                    afternoon: "午后不要过于专制，倾听他人意见",
                    evening: "傍晚反思是否过于控制",
                    past: "过去可能过于僵化或专制",
                    present: "此刻需要更多弹性",
                    future: "未来要学会放权",
                    advice: "权威不等于独裁"
                }
            },
            '教皇': {
                upright: {
                    morning: "清晨遵循传统智慧，向有经验的人请教",
                    afternoon: "午后适合学习或传授知识",
                    evening: "傍晚反思信仰和价值观",
                    past: "传统为你提供了稳定的框架",
                    present: "此刻需要遵循既定的规则",
                    future: "未来传统智慧会指引你",
                    advice: "尊重传统，但也要有自己的思考"
                },
                reversed: {
                    morning: "清晨质疑传统观念，寻找自己的道路",
                    afternoon: "午后打破常规，尝试新方法",
                    evening: "傍晚反思是否被教条束缚",
                    past: "过去可能过于墨守成规",
                    present: "此刻需要创新和突破",
                    future: "未来要敢于挑战权威",
                    advice: "传统是参考，不是枷锁"
                }
            },
            '恋人': {
                upright: {
                    morning: "清晨思考重要的关系决定",
                    afternoon: "午后与爱人或伙伴深入交流",
                    evening: "傍晚享受亲密关系的美好",
                    past: "过去的选择塑造了现在的关系",
                    present: "此刻面临重要的关系抉择",
                    future: "未来关系将走向和谐",
                    advice: "跟随内心，选择真爱"
                },
                reversed: {
                    morning: "清晨审视关系中的不平衡",
                    afternoon: "午后避免盲目选择，理性思考",
                    evening: "傍晚反思关系中的问题",
                    past: "过去可能做出了错误的选择",
                    present: "此刻需要重新评估关系",
                    future: "未来要避免不忠或欺骗",
                    advice: "选择之前，先了解自己"
                }
            },
            '战车': {
                upright: {
                    morning: "清晨充满斗志，朝着目标前进",
                    afternoon: "午后克服困难，展现意志力",
                    evening: "傍晚庆祝小小的胜利",
                    past: "过去的坚持让你走到今天",
                    present: "此刻需要坚定的决心",
                    future: "未来胜利在望",
                    advice: "控制情绪，驾驭方向"
                },
                reversed: {
                    morning: "清晨可能感到失控，先冷静下来",
                    afternoon: "午后避免过度用力，调整方向",
                    evening: "傍晚反思是否用力过猛",
                    past: "过去可能过于激进",
                    present: "此刻需要放慢脚步",
                    future: "未来要学会顺势而为",
                    advice: "力量需要智慧来引导"
                }
            },
            '力量': {
                upright: {
                    morning: "清晨用温和的方式面对挑战",
                    afternoon: "午后展现内在的耐心和勇气",
                    evening: "傍晚感谢自己的坚韧",
                    past: "过去的温柔力量帮助你度过难关",
                    present: "此刻内在力量充沛",
                    future: "未来你的耐心将得到回报",
                    advice: "真正的力量来自内心"
                },
                reversed: {
                    morning: "清晨可能感到软弱，给自己鼓励",
                    afternoon: "午后避免自我怀疑",
                    evening: "傍晚释放压抑的情绪",
                    past: "过去可能压抑了真实的感受",
                    present: "此刻需要建立自信",
                    future: "未来要学会接纳自己",
                    advice: "脆弱也是一种力量"
                }
            },
            '隐者': {
                upright: {
                    morning: "清晨独处冥想，寻找内在答案",
                    afternoon: "午后远离喧嚣，专注自我",
                    evening: "傍晚在寂静中获得启示",
                    past: "过去的独处让你获得智慧",
                    present: "此刻需要内省的时间",
                    future: "未来答案将在寂静中浮现",
                    advice: "独处是为了更好地回归"
                },
                reversed: {
                    morning: "清晨走出孤独，与他人连接",
                    afternoon: "午后避免过度孤立",
                    evening: "傍晚反思是否逃避现实",
                    past: "过去可能过于孤立自己",
                    present: "此刻需要走出舒适区",
                    future: "未来要学会平衡独处与社交",
                    advice: "智慧需要分享才有价值"
                }
            },
            '命运之轮': {
                upright: {
                    morning: "清晨顺应变化的节奏",
                    afternoon: "午后把握突如其来的机遇",
                    evening: "傍晚感恩命运的安排",
                    past: "过去的起伏让你成长",
                    present: "此刻正处于转折点",
                    future: "未来充满变数和机遇",
                    advice: "顺势而为，把握时机"
                },
                reversed: {
                    morning: "清晨可能感到不顺，保持耐心",
                    afternoon: "午后避免抗拒变化",
                    evening: "傍晚接受暂时的低谷",
                    past: "过去可能错过了一些机遇",
                    present: "此刻需要适应变化",
                    future: "未来要学会接受无常",
                    advice: "低谷之后必有高峰"
                }
            },
            '正义': {
                upright: {
                    morning: "清晨以公正的态度面对一切",
                    afternoon: "午后做出明智的决定",
                    evening: "傍晚反思今日行为的公正性",
                    past: "过去的公正为你赢得尊重",
                    present: "此刻需要权衡利弊",
                    future: "未来正义将得到伸张",
                    advice: "公正不仅是对他人，也是对自己"
                },
                reversed: {
                    morning: "清晨避免偏见，保持客观",
                    afternoon: "午后反思是否有不公之处",
                    evening: "傍晚接受不完美的结果",
                    past: "过去可能有不公正的决定",
                    present: "此刻需要重新审视",
                    future: "未来要避免偏见",
                    advice: "正义有时会迟到，但不会缺席"
                }
            },
            '倒吊人': {
                upright: {
                    morning: "清晨换个角度看问题",
                    afternoon: "午后学会耐心等待",
                    evening: "傍晚接受暂时的停滞",
                    past: "过去的等待让你获得新视角",
                    present: "此刻需要暂停和反思",
                    future: "未来会有新的领悟",
                    advice: "有时候，不行动就是最好的行动"
                },
                reversed: {
                    morning: "清晨停止拖延，开始行动",
                    afternoon: "午后避免固执己见",
                    evening: "傍晚放下执念",
                    past: "过去可能过于固执",
                    present: "此刻需要做出改变",
                    future: "未来要学会放手",
                    advice: "放下执念，才能获得自由"
                }
            },
            '死神': {
                upright: {
                    morning: "清晨接受结束，迎接新生",
                    afternoon: "午后放下不再适合的事物",
                    evening: "傍晚感恩过去的经历",
                    past: "过去的结束为新的开始让路",
                    present: "此刻正在经历转变",
                    future: "未来将迎来重生",
                    advice: "结束是另一种开始"
                },
                reversed: {
                    morning: "清晨放下过去，向前看",
                    afternoon: "午后避免抗拒改变",
                    evening: "傍晚接受转变的必要性",
                    past: "过去可能抗拒必要的结束",
                    present: "此刻需要学会放手",
                    future: "未来要拥抱变化",
                    advice: "抗拒改变只会延长痛苦"
                }
            },
            '节制': {
                upright: {
                    morning: "清晨保持平衡，避免极端",
                    afternoon: "午后融合对立的观点",
                    evening: "傍晚享受内在的和谐",
                    past: "过去的平衡让你保持稳定",
                    present: "此刻需要中庸之道",
                    future: "未来将找到完美的平衡",
                    advice: "平衡是动态的艺术"
                },
                reversed: {
                    morning: "清晨审视生活中的不平衡",
                    afternoon: "午后避免过度或不足",
                    evening: "傍晚调整生活的节奏",
                    past: "过去可能过于极端",
                    present: "此刻需要重新平衡",
                    future: "未来要学会适度",
                    advice: "过犹不及，适度最好"
                }
            },
            '恶魔': {
                upright: {
                    morning: "清晨觉察内在的束缚",
                    afternoon: "午后面对自己的欲望",
                    evening: "傍晚反思物质依赖",
                    past: "过去的束缚让你更清楚自己要什么",
                    present: "此刻需要面对内心的阴影",
                    future: "未来将摆脱束缚",
                    advice: "认识束缚是解脱的第一步"
                },
                reversed: {
                    morning: "清晨开始摆脱依赖",
                    afternoon: "午后打破旧有的模式",
                    evening: "傍晚庆祝自由的到来",
                    past: "过去被某些事物束缚",
                    present: "此刻正在获得解脱",
                    future: "未来将完全自由",
                    advice: "你有力量打破任何束缚"
                }
            },
            '塔': {
                upright: {
                    morning: "清晨接受突如其来的变化",
                    afternoon: "午后从突变中觉醒",
                    evening: "傍晚感恩破坏带来的重建机会",
                    past: "过去的突变让你更强大",
                    present: "此刻正在经历必要的破坏",
                    future: "未来将在废墟上重建",
                    advice: "破坏是重建的前奏"
                },
                reversed: {
                    morning: "清晨预防可能的危机",
                    afternoon: "午后避免突然的变化",
                    evening: "傍晚反思是否需要改变",
                    past: "过去可能避免了必要的改变",
                    present: "此刻需要主动求变",
                    future: "未来要预防危机",
                    advice: "主动改变比被动接受更好"
                }
            },
            '星星': {
                upright: {
                    morning: "清晨怀抱希望开始新的一天",
                    afternoon: "午后追随灵感的指引",
                    evening: "傍晚在希望中入眠",
                    past: "过去的希望支撑你走到现在",
                    present: "此刻充满希望和信心",
                    future: "未来梦想将成真",
                    advice: "保持希望，但不要停止行动"
                },
                reversed: {
                    morning: "清晨重拾失去的希望",
                    afternoon: "午后避免失去信心",
                    evening: "傍晚寻找内在的光芒",
                    past: "过去可能失去了希望",
                    present: "此刻需要重新点燃希望",
                    future: "未来希望会回来",
                    advice: "即使在黑暗中，星星依然存在"
                }
            },
            '月亮': {
                upright: {
                    morning: "清晨面对内心的恐惧",
                    afternoon: "午后探索潜意识的信息",
                    evening: "傍晚在梦境中寻找答案",
                    past: "过去的恐惧让你更了解自己",
                    present: "此刻直觉特别敏锐",
                    future: "未来真相将浮出水面",
                    advice: "恐惧是尚未理解的爱"
                },
                reversed: {
                    morning: "清晨澄清困惑，看清真相",
                    afternoon: "午后避免被幻觉误导",
                    evening: "傍晚释放恐惧和焦虑",
                    past: "过去可能被幻觉蒙蔽",
                    present: "此刻需要理性分析",
                    future: "未来迷雾将散去",
                    advice: "真相往往比想象更简单"
                }
            },
            '太阳': {
                upright: {
                    morning: "清晨沐浴在阳光般的能量中",
                    afternoon: "午后展现你的活力和快乐",
                    evening: "傍晚感恩今日的丰盛",
                    past: "过去的快乐为你积累正能量",
                    present: "此刻充满成功和喜悦",
                    future: "未来光明灿烂",
                    advice: "分享你的快乐，它会倍增"
                },
                reversed: {
                    morning: "清晨保持乐观，即使遇到困难",
                    afternoon: "午后避免过度自满",
                    evening: "傍晚反思是否忽视了阴影",
                    past: "过去可能过于乐观",
                    present: "此刻需要脚踏实地",
                    future: "未来要保持谦逊",
                    advice: "阳光之下也有阴影"
                }
            },
            '审判': {
                upright: {
                    morning: "清晨聆听内心的召唤",
                    afternoon: "午后做出重要的觉醒决定",
                    evening: "傍晚宽恕自己和他人",
                    past: "过去的觉醒让你重生",
                    present: "此刻正在经历重生",
                    future: "未来将获得内心的宽恕",
                    advice: "觉醒是持续的过程"
                },
                reversed: {
                    morning: "清晨避免逃避责任",
                    afternoon: "午后反思是否需要改变",
                    evening: "傍晚面对内心的召唤",
                    past: "过去可能逃避了重要的觉醒",
                    present: "此刻需要自我反省",
                    future: "未来要勇敢面对真相",
                    advice: "逃避只会让问题更大"
                }
            },
            '世界': {
                upright: {
                    morning: "清晨感受圆满和完整",
                    afternoon: "午后庆祝达成的目标",
                    evening: "傍晚感恩旅程的终点",
                    past: "过去的努力终于结出果实",
                    present: "此刻是收获的时候",
                    future: "未来将开启新的循环",
                    advice: "完成是新的开始"
                },
                reversed: {
                    morning: "清晨完成未竟之事",
                    afternoon: "午后避免半途而废",
                    evening: "傍晚反思还有什么需要完成",
                    past: "过去可能有未完成的遗憾",
                    present: "此刻需要坚持到底",
                    future: "未来要完成目标",
                    advice: "坚持到最后才是真正的完成"
                }
            }
        };

        // 小阿卡纳的通用解读模板
        const minorArcanaInterpretations = {
            fire: {
                upright: {
                    morning: "清晨充满行动力，适合开始新的计划",
                    afternoon: "午后能量高涨，适合推进重要事务",
                    evening: "傍晚回顾今日的行动成果",
                    past: "过去的行动为你打下基础",
                    present: "此刻行动力充沛",
                    future: "未来需要持续行动",
                    advice: "行动是实现梦想的关键"
                },
                reversed: {
                    morning: "清晨避免冲动行事",
                    afternoon: "午后控制急躁的情绪",
                    evening: "傍晚反思是否过于激进",
                    past: "过去可能过于冲动",
                    present: "此刻需要更多耐心",
                    future: "未来要三思而后行",
                    advice: "行动之前先思考"
                }
            },
            water: {
                upright: {
                    morning: "清晨倾听内心的声音",
                    afternoon: "午后情感流动顺畅",
                    evening: "傍晚享受情感的丰盛",
                    past: "过去的情感经历让你成长",
                    present: "此刻直觉敏锐",
                    future: "未来情感将更加丰富",
                    advice: "相信你的感受"
                },
                reversed: {
                    morning: "清晨避免情绪化的决定",
                    afternoon: "午后理性分析情感问题",
                    evening: "傍晚释放负面情绪",
                    past: "过去可能被情感左右",
                    present: "此刻需要理性",
                    future: "未来要平衡感性与理性",
                    advice: "情感需要智慧的引导"
                }
            },
            air: {
                upright: {
                    morning: "清晨思维清晰，适合规划",
                    afternoon: "午后沟通顺畅，适合交流",
                    evening: "傍晚总结今日的思考",
                    past: "过去的思考为你指明方向",
                    present: "此刻思维活跃",
                    future: "未来需要更多思考",
                    advice: "清晰的思维带来明智的决定"
                },
                reversed: {
                    morning: "清晨避免过度分析",
                    afternoon: "午后注意沟通方式",
                    evening: "傍晚放下思虑",
                    past: "过去可能想太多",
                    present: "此刻需要停止过度思考",
                    future: "未来要信任直觉",
                    advice: "思考是为了行动，不是为了焦虑"
                }
            },
            earth: {
                upright: {
                    morning: "清晨脚踏实地开始一天",
                    afternoon: "午后专注实际事务",
                    evening: "傍晚享受物质的安稳",
                    past: "过去的务实为你积累资源",
                    present: "此刻适合处理实际问题",
                    future: "未来会有物质收获",
                    advice: "脚踏实地，稳步前进"
                },
                reversed: {
                    morning: "清晨避免过于物质化",
                    afternoon: "午后注意财务安全",
                    evening: "傍晚反思是否忽视了精神需求",
                    past: "过去可能过于追求物质",
                    present: "此刻需要平衡物质与精神",
                    future: "未来要关注内在价值",
                    advice: "真正的财富不仅是金钱"
                }
            }
        };

        // 牌阵配置
        const spreadConfig = {
            single: { name: '单张牌快速占卜', cardCount: 1, positions: ['今日指引'], layout: 'single', isPurpose: false },
            three: { name: '三张牌解析法', cardCount: 3, positions: ['过去/起因', '现在/核心', '未来/发展'], layout: 'three', isPurpose: false },
            problem: { name: '问题解决牌阵', cardCount: 5, positions: ['影响因素', '建议指引', '问题现状', '发展走向', '最终结果'], layout: 'problem', isPurpose: false },
            love: { name: '爱情大十字', cardCount: 5, positions: ['你的想法', '对方的想法', '关系发展', '关系现状', '最终结果'], layout: 'love', isPurpose: false },
            circle: { name: '环形牌阵', cardCount: 12, positions: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'], layout: 'circle', isPurpose: false }
        };

        let currentSpread = null, drawnCards = [], flippedCount = 0, isPurposeReading = false, purposeType = '', userQuestion = '', selectionMode = '';

        // 粒子背景动画
        function initParticles() {
            const canvas = document.getElementById('particles-canvas');
            const ctx = canvas.getContext('2d');
            
            function resize() {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
            }
            resize();
            window.addEventListener('resize', resize);
            
            const particles = [];
            const particleCount = 30;
            
            for (let i = 0; i < particleCount; i++) {
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    vx: (Math.random() - 0.5) * 0.5,
                    vy: (Math.random() - 0.5) * 0.5,
                    radius: Math.random() * 2 + 1,
                    alpha: Math.random() * 0.3 + 0.1
                });
            }
            
            function animate() {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                
                particles.forEach(p => {
                    p.x += p.vx;
                    p.y += p.vy;
                    
                    if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
                    if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
                    
                    ctx.beginPath();
                    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(107, 91, 149, ${p.alpha})`;
                    ctx.fill();
                });
                
                // 连接临近的粒子
                particles.forEach((p1, i) => {
                    particles.slice(i + 1).forEach(p2 => {
                        const dx = p1.x - p2.x;
                        const dy = p1.y - p2.y;
                        const dist = Math.sqrt(dx * dx + dy * dy);
                        
                        if (dist < 100) {
                            ctx.beginPath();
                            ctx.moveTo(p1.x, p1.y);
                            ctx.lineTo(p2.x, p2.y);
                            ctx.strokeStyle = `rgba(107, 91, 149, ${0.1 * (1 - dist / 100)})`;
                            ctx.stroke();
                        }
                    });
                });
                
                requestAnimationFrame(animate);
            }
            animate();
        }

        function showPage(pageId) {
            document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
            document.getElementById(pageId).classList.add('active');
        }

        function goBack(pageId) {
            // 返回时重置按目的占卜状态
            isPurposeReading = false;
            purposeType = '';
            userQuestion = '';
            showPage(pageId);
        }

        function goBackToSelection() {
            userQuestion = '';
            if (selectionMode === 'spread') {
                showPage('selection-page');
            } else if (selectionMode === 'purpose') {
                showPage('purpose-selection-page');
            } else {
                showPage('method-selection-page');
            }
        }

        // 选择按牌阵占卜模式
        function selectSpreadMode() {
            selectionMode = 'spread';
            showPage('selection-page');
        }

        // 选择按目的占卜模式
        function selectPurposeMode() {
            selectionMode = 'purpose';
            showPage('purpose-selection-page');
        }

        // 选择具体牌阵类型
        function selectSpreadType(spreadType) {
            currentSpread = spreadConfig[spreadType];
            selectionMode = 'spread';
            showPage('question-page');
        }

        // 选择具体目的类型
        function selectPurposeType(type) {
            isPurposeReading = true;
            purposeType = type;
            selectionMode = 'purpose';
            // 按目的占卜默认使用三张牌解析法
            currentSpread = spreadConfig['three'];
            showPage('question-page');
        }

        function startPurposeReading(type) {
            isPurposeReading = true;
            purposeType = type;
            startReading('three');
        }

        // 从问题页面开始抽牌
        function startReadingWithQuestion() {
            userQuestion = document.getElementById('user-question').value.trim();
            if (!userQuestion) {
                userQuestion = '今日运势';
            }
            
            // 显示洗牌动画页面
            showShuffleAnimation();
        }
        
        // 显示洗牌抽牌动画
        function showShuffleAnimation() {
            const shufflePage = document.getElementById('shuffle-page');
            const shuffleTitle = document.getElementById('shuffle-title');
            const shuffleQuestion = document.getElementById('shuffle-question');
            const shuffleStatus = document.getElementById('shuffle-status');
            const drawnContainer = document.getElementById('drawn-cards-container');
            
            // 设置标题和问题
            shuffleTitle.textContent = isPurposeReading 
                ? (purposeType === 'event' ? '今日事件指引' : '内心感受指引')
                : currentSpread.name;
            shuffleQuestion.textContent = userQuestion === '今日运势' ? '今日运势' : `「${userQuestion}」`;
            
            // 清空之前抽的牌
            drawnContainer.innerHTML = '';
            
            // 显示洗牌页面
            showPage('shuffle-page');
            
            // 生成要抽的牌
            drawnCards = [];
            flippedCount = 0;
            const available = [...allCards];
            for (let i = 0; i < currentSpread.cardCount; i++) {
                const idx = Math.floor(Math.random() * available.length);
                const card = available.splice(idx, 1)[0];
                drawnCards.push({...card, isReversed: Math.random() > 0.5, position: currentSpread.positions[i]});
            }
            
            // 开始动画序列
            setTimeout(() => {
                shuffleStatus.textContent = '塔罗牌正在洗牌...';
                animateShuffle();
            }, 500);
            
            // 依次抽出每张牌（背面，不翻开）
            let drawIndex = 0;
            const drawInterval = setInterval(() => {
                if (drawIndex < drawnCards.length) {
                    drawCardAnimation(drawIndex, drawnCards.length);
                    drawIndex++;
                    shuffleStatus.textContent = `正在抽取第 ${drawIndex} 张牌...`;
                } else {
                    clearInterval(drawInterval);
                    setTimeout(() => {
                        // 显示测算加载界面，然后跳转到解析界面
                        showCalculationLoading();
                    }, 600);
                }
            }, 800);
        }
        
        // 洗牌动画
        function animateShuffle() {
            const deckCards = document.querySelectorAll('.deck-card');
            const deckPile = document.getElementById('deck-pile');
            
            // 创建环形旋转洗牌效果
            const centerX = deckPile.offsetWidth / 2;
            const centerY = deckPile.offsetHeight / 2;
            const radius = 60; // 旋转半径
            
            deckCards.forEach((card, i) => {
                const angle = (i / deckCards.length) * 2 * Math.PI;
                const x = centerX + radius * Math.cos(angle) - card.offsetWidth / 2;
                const y = centerY + radius * Math.sin(angle) - card.offsetHeight / 2;
                
                card.style.transition = 'all 0.5s ease';
                card.style.left = x + 'px';
                card.style.top = y + 'px';
                card.style.transform = `rotate(${angle * 180 / Math.PI + 90}deg)`;
            });
            
            // 持续旋转动画
            let rotation = 0;
            const rotateInterval = setInterval(() => {
                rotation += 15;
                deckCards.forEach((card, i) => {
                    const baseAngle = (i / deckCards.length) * 2 * Math.PI;
                    const currentAngle = baseAngle + (rotation * Math.PI / 180);
                    const x = centerX + radius * Math.cos(currentAngle) - card.offsetWidth / 2;
                    const y = centerY + radius * Math.sin(currentAngle) - card.offsetHeight / 2;
                    
                    card.style.left = x + 'px';
                    card.style.top = y + 'px';
                    card.style.transform = `rotate(${currentAngle * 180 / Math.PI + 90}deg)`;
                });
            }, 100);
            
            // 3秒后停止旋转，恢复牌堆
            setTimeout(() => {
                clearInterval(rotateInterval);
                deckCards.forEach((card, i) => {
                    card.style.transition = 'all 0.3s ease';
                    card.style.left = (i * 2 - 4) + 'px';
                    card.style.top = (-i * 2) + 'px';
                    card.style.transform = `rotate(${(i - 2) * 2}deg)`;
                });
            }, 3000);
        }
        
        // 抽单张牌的动画 - 使用与实际牌面一致的样式
        function drawCardAnimation(index, total) {
            const drawnContainer = document.getElementById('drawn-cards-container');
            const card = drawnCards[index];
            
            // 创建抽出的牌元素（卡背样式，与实际一致）
            const cardEl = document.createElement('div');
            cardEl.className = 'drawn-card-anim';
            cardEl.id = `anim-card-${index}`;
            cardEl.style.cssText = `
                position: absolute;
                width: 100px;
                height: 166px;
                background: linear-gradient(135deg, #6B5B95 0%, #5A4A84 100%);
                border-radius: 8px;
                box-shadow: 0 4px 15px rgba(0,0,0,0.3);
                left: 50%;
                top: 50%;
                margin-left: -50px;
                margin-top: -83px;
                display: flex;
                align-items: center;
                justify-content: center;
                opacity: 0;
                transform: scale(0.8);
                transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
                z-index: ${10 + index};
                border: 1px solid rgba(255,255,255,0.2);
                cursor: pointer;
            `;
            cardEl.innerHTML = `
                <span style="color: rgba(255,255,255,0.8); font-size: 1.5rem;">✦</span>
                <span style="position: absolute; bottom: 12px; color: rgba(255,255,255,0.6); font-size: 0.6rem; letter-spacing: 2px;">TAROT</span>
            `;
            
            drawnContainer.appendChild(cardEl);
            
            // 计算最终位置
            let finalX, finalY;
            const spacing = 110;
            const startX = -((total - 1) * spacing) / 2;
            
            if (currentSpread.layout === 'single') {
                finalX = 0;
                finalY = 0;
            } else if (currentSpread.layout === 'three') {
                finalX = startX + index * spacing;
                finalY = 0;
            } else if (currentSpread.layout === 'problem') {
                if (index < 2) {
                    finalX = -55 + index * 110;
                    finalY = -50;
                } else {
                    finalX = -110 + (index - 2) * 110;
                    finalY = 50;
                }
            } else if (currentSpread.layout === 'love') {
                if (index === 0) {
                    finalX = 0; finalY = -50;
                } else if (index === 1) {
                    finalX = -55; finalY = 0;
                } else if (index === 2) {
                    finalX = 55; finalY = 0;
                } else if (index === 3) {
                    finalX = 0; finalY = 0;
                } else {
                    finalX = 0; finalY = 50;
                }
            } else {
                finalX = startX + index * spacing;
                finalY = 0;
            }
            
            // 触发动画
            setTimeout(() => {
                cardEl.style.opacity = '1';
                cardEl.style.transform = `scale(1) translate(${finalX}px, ${finalY}px)`;
            }, 50);
            
            // 添加点击事件 - 点击任意一张牌翻开所有牌
            cardEl.onclick = () => revealAllCardsInAnimation();
        }
        
        // 显示测算加载界面
        function showCalculationLoading() {
            const shufflePage = document.getElementById('shuffle-page');
            const card = shufflePage.querySelector('.card');
            
            // 创建加载覆盖层，而不是修改 .card 的 innerHTML
            let loadingOverlay = document.getElementById('calculation-loading-overlay');
            if (!loadingOverlay) {
                loadingOverlay = document.createElement('div');
                loadingOverlay.id = 'calculation-loading-overlay';
                loadingOverlay.style.cssText = `
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(245, 241, 235, 0.98);
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    z-index: 100;
                    border-radius: 4px;
                `;
                card.appendChild(loadingOverlay);
            }
            
            loadingOverlay.innerHTML = `
                <h2 style="margin-bottom: 15px;">正在解析牌面...</h2>
                <p style="color: var(--text-secondary); margin-bottom: 30px;">${userQuestion === '今日运势' ? '今日运势' : '「' + userQuestion + '」'}</p>
                
                <div style="display: flex; justify-content: center; margin: 40px 0;">
                    <div class="loading-spinner" style="width: 60px; height: 60px; border: 4px solid rgba(107,91,149,0.2); border-top-color: var(--primary); border-radius: 50%; animation: spin 1s linear infinite;"></div>
                </div>
                
                <div id="calculation-status" style="color: var(--text-secondary); font-size: 0.95rem;">塔罗牌正在解读您的命运轨迹...</div>
            `;
            loadingOverlay.style.display = 'flex';
            
            // 添加旋转动画样式
            if (!document.getElementById('spin-style')) {
                const style = document.createElement('style');
                style.id = 'spin-style';
                style.textContent = '@keyframes spin { to { transform: rotate(360deg); } }';
                document.head.appendChild(style);
            }
            
            // 模拟测算过程
            const statuses = [
                '正在分析牌面能量...',
                '正在解读元素组合...',
                '正在生成专属指引...',
                '即将揭示答案...'
            ];
            
            let statusIndex = 0;
            const statusInterval = setInterval(() => {
                if (statusIndex < statuses.length) {
                    const statusEl = document.getElementById('calculation-status');
                    if (statusEl) statusEl.textContent = statuses[statusIndex];
                    statusIndex++;
                } else {
                    clearInterval(statusInterval);
                    // 隐藏加载覆盖层
                    if (loadingOverlay) loadingOverlay.style.display = 'none';
                    // 跳转到解读页面
                    setTimeout(() => {
                        document.getElementById('spread-title').textContent = isPurposeReading 
                            ? (purposeType === 'event' ? '今日事件指引' : '内心感受指引')
                            : currentSpread.name;
                        renderCards();
                        showPage('reading-page');
                        
                        // 在解读页面自动翻牌
                        setTimeout(() => {
                            flipAllCardsInReading();
                        }, 500);
                    }, 500);
                }
            }, 800);
        }
        
        // 在解读页面翻牌并直接显示解读
        function flipAllCardsInReading() {
            const cards = document.querySelectorAll('.tarot-card');
            cards.forEach((card, index) => {
                setTimeout(() => {
                    card.classList.add('flipped');
                }, index * 150);
            });
            
            flippedCount = currentSpread.cardCount;
            
            // 翻牌完成后直接显示解读（不再显示加载动画）
            setTimeout(() => {
                showInterpretation();
            }, cards.length * 150 + 300);
        }
        
        // 保留旧函数（已废弃）
        function autoRevealAllCards() {
            showCalculationLoading();
        }
        
        // 在解读页面显示所有牌已翻开
        function showAllCardsFlipped() {
            const cards = document.querySelectorAll('.tarot-card');
            cards.forEach(card => {
                card.classList.add('flipped');
            });
            flippedCount = currentSpread.cardCount;
        }
        
        // 保留旧函数供兼容性使用（已废弃）
        function revealAllCardsInAnimation() {
            autoRevealAllCards();
        }

        function startReading(spreadType) {
            currentSpread = spreadConfig[spreadType];
            drawnCards = [];
            flippedCount = 0;
            
            document.getElementById('spread-title').textContent = isPurposeReading 
                ? (purposeType === 'event' ? '今日事件指引' : '内心感受指引')
                : currentSpread.name;
            
            const available = [...allCards];
            for (let i = 0; i < currentSpread.cardCount; i++) {
                const idx = Math.floor(Math.random() * available.length);
                const card = available.splice(idx, 1)[0];
                drawnCards.push({...card, isReversed: Math.random() > 0.5, position: currentSpread.positions[i]});
            }
            
            renderCards();
            showPage('reading-page');
        }

        function renderCards() {
            const table = document.getElementById('card-table');
            let html = '';
            
            if (currentSpread.layout === 'single') {
                html = `<div class="spread-layout-single">${renderCard(0)}</div>`;
            } else if (currentSpread.layout === 'three') {
                html = `<div class="spread-layout-three">${drawnCards.map((_, i) => renderCard(i)).join('')}</div>`;
            } else if (currentSpread.layout === 'problem') {
                html = `
                    <div class="spread-layout-problem">
                        <div class="problem-top-row">${renderCard(0)}${renderCard(1)}</div>
                        <div class="arrow-down">↓</div>
                        <div class="problem-bottom-row">${renderCard(2)}<span class="arrow-right">→</span>${renderCard(3)}<span class="arrow-right">→</span>${renderCard(4)}</div>
                    </div>`;
            } else if (currentSpread.layout === 'love') {
                html = `
                    <div class="spread-layout-love">
                        <div class="love-top">${renderCard(2)}</div>
                        <div class="arrow-vertical">↑</div>
                        <div class="love-middle">${renderCard(0)}<span class="arrow-right">←</span>${renderCard(3)}<span class="arrow-right">→</span>${renderCard(1)}</div>
                        <div class="arrow-vertical">↓</div>
                        <div class="love-bottom">${renderCard(4)}</div>
                    </div>`;
            }
            
            table.innerHTML = html;
        }

        function renderCard(index) {
            const card = drawnCards[index];
            // 根据正逆位选择对应的图片
            const imageKey = card.isReversed ? `${card.name}_reversed` : `${card.name}_upright`;
            const hasImage = cardImages[imageKey];
            const imageHtml = hasImage 
                ? `<img src="${cardImages[imageKey]}" alt="${card.name} ${card.isReversed ? '逆位' : '正位'}">`
                : `<div class="card-placeholder">${card.symbol || '✦'}</div>`;
            
            return `
                <div class="card-with-label" style="margin: 0 5px;">
                    <div class="position-label" style="margin-bottom: 4px; font-size: 0.8rem;">${card.position}</div>
                    <div class="tarot-card">
                        <div class="tarot-card-inner" id="card-${index}">
                            <div class="tarot-card-back"></div>
                            <div class="tarot-card-front">
                                ${imageHtml}
                                <div class="card-info-wrapper">
                                    <div class="card-revealed-name">${card.name}</div>
                                    <div class="card-revealed-orientation">${card.isReversed ? '逆位' : '正位'}</div>
                                    ${card.number ? `<div class="card-revealed-number">${card.number}</div>` : ''}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`;
        }

        // 翻牌函数（已废弃，保留兼容性）
        function flipAllCards() {
            // 不再使用，牌已自动翻开
        }
        
        function flipCard(index) {
            // 不再使用，牌已自动翻开
        }
        
        function showLoading() {
            const loadingOverlay = document.getElementById('loading-overlay');
            loadingOverlay.classList.add('active');
            
            // 模拟测算过程，2-3秒后显示结果
            const loadingTime = 2000 + Math.random() * 1000;
            
            setTimeout(() => {
                loadingOverlay.classList.remove('active');
                setTimeout(showInterpretation, 300);
            }, loadingTime);
        }

        function showInterpretation() {
            const interp = document.getElementById('interpretation');
            interp.style.display = 'block';
            interp.innerHTML = isPurposeReading ? generatePurposeInterpretation() : generateSpreadInterpretation();
            
            // 滚动到解读区域
            interp.scrollIntoView({ behavior: 'smooth', block: 'start' });
            
            document.querySelectorAll('.accordion-header').forEach(header => {
                header.addEventListener('click', function() {
                    this.parentElement.classList.toggle('active');
                });
            });
        }

        // 获取牌的独特解读
        function getCardInterpretation(card, position) {
            const interpretations = cardInterpretations[card.name];
            const story = cardStories[card.name]; // 获取牌面故事
            const positionKey = position.includes('过去') ? 'past' : 
                               position.includes('现在') ? 'present' : 
                               position.includes('未来') ? 'future' : 'advice';
            
            // 基础解读
            let baseInterpretation = '';
            if (interpretations) {
                const orientation = card.isReversed ? 'reversed' : 'upright';
                baseInterpretation = interpretations[orientation][positionKey] || interpretations[orientation].advice;
            } else {
                // 小阿卡纳使用通用模板
                const minorInterp = minorArcanaInterpretations[card.element];
                if (minorInterp) {
                    const orientation = card.isReversed ? 'reversed' : 'upright';
                    baseInterpretation = minorInterp[orientation][positionKey] || minorInterp[orientation].advice;
                } else {
                    baseInterpretation = card.isReversed ? card.meaningReversed : card.meaningUpright;
                }
            }
            
            // 如果有故事背景，添加到解读中
            if (story) {
                return `[${story.keywords}] ${baseInterpretation} (行星：${story.planet})`;
            }
            
            return baseInterpretation;
        }

        function generateSpreadInterpretation() {
            const luckyNumber = Math.floor(Math.random() * 99) + 1;
            const luckyColors = ['深紫色', '淡紫色', '暖棕色', '米白色', '淡粉色'];
            const luckyColor = luckyColors[Math.floor(Math.random() * luckyColors.length)];
            const zodiacs = ['白羊座', '金牛座', '双子座', '巨蟹座', '狮子座', '处女座', '天秤座', '天蝎座', '射手座', '摩羯座', '水瓶座', '双鱼座'];
            const luckyZodiac = zodiacs[Math.floor(Math.random() * zodiacs.length)];
            const directions = ['东方', '南方', '西方', '北方', '东南', '西北'];
            const luckyDirection = directions[Math.floor(Math.random() * directions.length)];
            const hours = ['9:00-11:00', '11:00-13:00', '13:00-15:00', '15:00-17:00', '19:00-21:00'];
            const luckyHour = hours[Math.floor(Math.random() * hours.length)];
            
            return `
                <div class="accordion active">
                    <div class="accordion-header">单张牌解读</div>
                    <div class="accordion-content" style="max-height: 2000px;">
                        <div class="accordion-body">
                            ${drawnCards.map((card, i) => `
                                <div class="interpretation-item">
                                    <h4 style="color: var(--primary); margin-bottom: 8px;">${card.position}：${card.name} ${card.isReversed ? '逆位' : '正位'}</h4>
                                    <p style="color: var(--text-secondary);">${getCardInterpretation(card, card.position)}</p>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
                
                <div class="accordion active">
                    <div class="accordion-header">整体解读</div>
                    <div class="accordion-content" style="max-height: 2000px;">
                        <div class="accordion-body">
                            <div class="overall-interpretation">
                                <p>${generateUniqueReading()}</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="accordion">
                    <div class="accordion-header">幸运信息</div>
                    <div class="accordion-content">
                        <div class="accordion-body">
                            <div class="lucky-info">
                                <div class="lucky-item"><div class="lucky-label">幸运数字</div><div class="lucky-value">${luckyNumber}</div></div>
                                <div class="lucky-item"><div class="lucky-label">幸运颜色</div><div class="lucky-value">${luckyColor}</div></div>
                                <div class="lucky-item"><div class="lucky-label">速配星座</div><div class="lucky-value">${luckyZodiac}</div></div>
                                <div class="lucky-item"><div class="lucky-label">开运方位</div><div class="lucky-value">${luckyDirection}</div></div>
                                <div class="lucky-item" style="grid-column: span 2;"><div class="lucky-label">吉时</div><div class="lucky-value">${luckyHour}</div></div>
                            </div>
                        </div>
                    </div>
                </div>`;
        }

        function generatePurposeInterpretation() {
            const luckyNumber = Math.floor(Math.random() * 99) + 1;
            const luckyColors = ['深紫色', '淡紫色', '暖棕色', '米白色', '淡粉色'];
            const luckyColor = luckyColors[Math.floor(Math.random() * luckyColors.length)];
            const zodiacs = ['白羊座', '金牛座', '双子座', '巨蟹座', '狮子座', '处女座', '天秤座', '天蝎座', '射手座', '摩羯座', '水瓶座', '双鱼座'];
            const luckyZodiac = zodiacs[Math.floor(Math.random() * zodiacs.length)];
            const directions = ['东方', '南方', '西方', '北方', '东南', '西北'];
            const luckyDirection = directions[Math.floor(Math.random() * directions.length)];
            const hours = ['9:00-11:00', '11:00-13:00', '13:00-15:00', '15:00-17:00', '19:00-21:00'];
            const luckyHour = hours[Math.floor(Math.random() * hours.length)];
            
            return `
                <div class="accordion active">
                    <div class="accordion-header">单张牌解读</div>
                    <div class="accordion-content" style="max-height: 2000px;">
                        <div class="accordion-body">
                            ${drawnCards.map((card, i) => `
                                <div class="interpretation-item">
                                    <h4 style="color: var(--primary); margin-bottom: 8px;">${card.position}：${card.name} ${card.isReversed ? '逆位' : '正位'}</h4>
                                    <p style="color: var(--text-secondary);">${getCardInterpretation(card, card.position)}</p>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
                
                <div class="accordion active">
                    <div class="accordion-header">整体解读</div>
                    <div class="accordion-content" style="max-height: 2000px;">
                        <div class="accordion-body">
                            <div class="overall-interpretation">
                                <p>${generateUniqueReading()}</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="accordion">
                    <div class="accordion-header">今日建议</div>
                    <div class="accordion-content">
                        <div class="accordion-body">
                            <div style="background: var(--bg-gradient-start); padding: 15px; border-radius: 4px; border: 1px solid var(--border);">
                                <p style="color: var(--text);">${generateAdvice()}</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="accordion">
                    <div class="accordion-header">幸运信息</div>
                    <div class="accordion-content">
                        <div class="accordion-body">
                            <div class="lucky-info">
                                <div class="lucky-item"><div class="lucky-label">幸运数字</div><div class="lucky-value">${luckyNumber}</div></div>
                                <div class="lucky-item"><div class="lucky-label">幸运颜色</div><div class="lucky-value">${luckyColor}</div></div>
                                <div class="lucky-item"><div class="lucky-label">速配星座</div><div class="lucky-value">${luckyZodiac}</div></div>
                                <div class="lucky-item"><div class="lucky-label">开运方位</div><div class="lucky-value">${luckyDirection}</div></div>
                                <div class="lucky-item" style="grid-column: span 2;"><div class="lucky-label">吉时</div><div class="lucky-value">${luckyHour}</div></div>
                            </div>
                        </div>
                    </div>
                </div>`;
        }

        // 根据抽到的具体牌生成独特的整体解读
        function generateUniqueReading() {
            const cards = drawnCards;
            const elements = {fire: '火', water: '水', air: '风', earth: '土'};
            
            // 分析元素组合
            const cardElements = cards.map(c => c.element);
            const uniqueElements = [...new Set(cardElements)];
            const elementNames = uniqueElements.map(e => elements[e] || e);
            
            // 分析正逆位
            const uprightCount = cards.filter(c => !c.isReversed).length;
            
            // 生成针对用户问题的解读
            let questionAnalysis = '';
            if (userQuestion && userQuestion !== '今日运势') {
                questionAnalysis = generateQuestionAnalysis(cards, elements, elementNames, uprightCount);
            }
            
            // 只有一张牌时，只解读这一张牌，方向为"今日指引"
            if (cards.length === 1) {
                const card = cards[0];
                const el = elements[card.element];
                let reading = `<strong>【今日指引】</strong><br><br>`;
                reading += `今日抽到的${card.name}${card.isReversed ? '（逆位）' : ''}呈现出<strong>${el}元素</strong>的能量。`;
                if (!card.isReversed) {
                    reading += `这张牌正位出现，提示你今天适合主动出击、大胆行动。保持专注，把握机会。`;
                } else {
                    reading += `这张牌逆位出现，提示你今天需要放慢脚步、内省反思。利用这段时间审视内在状态。`;
                }
                if (questionAnalysis) {
                    reading += `<br><br>${questionAnalysis}`;
                }
                return reading;
            }
            
            // 多张牌时，根据currentSpread.layout判断牌阵类型
            const spreadType = currentSpread?.layout || 'three';
            let baseReading = '';
            
            if (spreadType === 'three' || cards.length === 3) {
                baseReading = generateThreeCardReading(cards, elements, uniqueElements, elementNames, uprightCount);
            } else if (spreadType === 'problem') {
                baseReading = generateProblemReading(cards, elements, uniqueElements, elementNames, uprightCount);
            } else if (spreadType === 'love') {
                baseReading = generateLoveReading(cards, elements, uniqueElements, elementNames, uprightCount);
            } else {
                baseReading = generateDefaultReading(cards, elements, uniqueElements, elementNames, uprightCount);
            }
            
            if (questionAnalysis) {
                baseReading += `<br><br>${questionAnalysis}`;
            }
            
            return baseReading;
        }
        
        // 生成针对用户问题的深度分析
        function generateQuestionAnalysis(cards, elements, elementNames, uprightCount) {
            const question = userQuestion.toLowerCase();
            const reversedCount = cards.filter(c => c.isReversed).length;
            
            let analysis = `<strong>【针对你的问题】</strong><br>`;
            analysis += `<div style="background: linear-gradient(135deg, rgba(107,91,149,0.1) 0%, rgba(212,165,116,0.1) 100%); padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 3px solid var(--primary);">`;
            analysis += `<div style="font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 5px;">你问的是</div>`;
            analysis += `<div style="font-size: 1.1rem; color: var(--primary); font-weight: 600;">「${userQuestion}」</div>`;
            analysis += `</div><br>`;
            
            // 根据问题类型给出完全不同的分析角度
            if (question.includes('工作') || question.includes('事业') || question.includes('职业') || question.includes('跳槽') || question.includes('升职')) {
                analysis += generateCareerAnalysis(cards, reversedCount);
            } else if (question.includes('感情') || question.includes('爱情') || question.includes('恋爱') || question.includes('分手') || question.includes('复合') || question.includes('他') || question.includes('她') || question.includes('对象')) {
                analysis += generateLoveAnalysis(cards, reversedCount);
            } else if (question.includes('钱') || question.includes('财') || question.includes('收入') || question.includes('投资') || question.includes('买房') || question.includes('贷款')) {
                analysis += generateWealthAnalysis(cards, reversedCount);
            } else if (question.includes('健康') || question.includes('身体') || question.includes('病') || question.includes('减肥') || question.includes('运动')) {
                analysis += generateHealthAnalysis(cards, reversedCount);
            } else if (question.includes('学') || question.includes('考试') || question.includes('成绩') || question.includes('考研') || question.includes('留学')) {
                analysis += generateStudyAnalysis(cards, reversedCount);
            } else if (question.includes('选择') || question.includes('决定') || question.includes('要不要') || question.includes('该不该')) {
                analysis += generateDecisionAnalysis(cards, reversedCount);
            } else {
                analysis += generateGeneralAnalysis(cards, reversedCount);
            }
            
            // 添加行动建议
            analysis += generateActionPlan(cards);
            
            return analysis;
        }
        
        // 工作事业分析
        function generateCareerAnalysis(cards, reversedCount) {
            let analysis = `<div style="margin-bottom: 20px;">`;
            analysis += `<div style="color: var(--primary); font-weight: 600; margin-bottom: 10px; display: flex; align-items: center; gap: 8px;">💼 事业发展指引</div>`;
            
            // 分析当前职场状态
            const firstCard = cards[0];
            const lastCard = cards[cards.length - 1];
            
            analysis += `<div style="background: var(--card-bg-hover); padding: 12px; border-radius: 6px; margin-bottom: 12px;">`;
            analysis += `<strong>当前状态：</strong>`;
            if (firstCard.isReversed) {
                analysis += `你可能正处于职场瓶颈期，感到迷茫或受阻。${firstCard.name}逆位提示你需要重新审视自己的定位和方向。`;
            } else {
                analysis += `你的职场能量正在上升期，${firstCard.name}正位显示你有能力应对当前挑战。`;
            }
            analysis += `</div>`;
            
            // 发展建议
            analysis += `<div style="background: var(--card-bg-hover); padding: 12px; border-radius: 6px; margin-bottom: 12px;">`;
            analysis += `<strong>发展路径：</strong>`;
            if (cards.length >= 3) {
                const middleCard = cards[1];
                if (middleCard.element === 'fire') {
                    analysis += `接下来需要主动争取机会，展现领导力。适合承担有挑战性的项目。`;
                } else if (middleCard.element === 'water') {
                    analysis += `建议你多关注团队关系，用情商化解职场矛盾，建立良好的人际网络。`;
                } else if (middleCard.element === 'air') {
                    analysis += `需要提升专业技能，学习新知识会让你在竞争中脱颖而出。`;
                } else if (middleCard.element === 'earth') {
                    analysis += `稳扎稳打是关键，把基础工作做扎实，上级会看到你的价值。`;
                }
            }
            analysis += `</div>`;
            
            // 结果预测
            analysis += `<div style="background: var(--card-bg-hover); padding: 12px; border-radius: 6px;">`;
            analysis += `<strong>结果展望：</strong>`;
            if (lastCard.isReversed) {
                analysis += `短期内可能达不到预期目标，但这只是暂时的。调整策略后，3-6个月内会有转机。`;
            } else {
                analysis += `按照当前趋势发展，你的努力会在1-3个月内看到回报。保持耐心，好消息正在路上。`;
            }
            analysis += `</div>`;
            
            analysis += `</div>`;
            return analysis;
        }
        
        // 感情分析
        function generateLoveAnalysis(cards, reversedCount) {
            let analysis = `<div style="margin-bottom: 20px;">`;
            analysis += `<div style="color: var(--primary); font-weight: 600; margin-bottom: 10px; display: flex; align-items: center; gap: 8px;">💕 感情关系指引</div>`;
            
            const firstCard = cards[0];
            const lastCard = cards[cards.length - 1];
            
            analysis += `<div style="background: var(--card-bg-hover); padding: 12px; border-radius: 6px; margin-bottom: 12px;">`;
            analysis += `<strong>关系现状：</strong>`;
            if (firstCard.isReversed) {
                analysis += `关系中可能存在一些未说出口的情绪或误解。${firstCard.name}逆位提示你需要更多耐心和理解。`;
            } else {
                analysis += `你们的关系基础是稳固的，${firstCard.name}正位显示彼此之间有真诚的连接。`;
            }
            analysis += `</div>`;
            
            analysis += `<div style="background: var(--card-bg-hover); padding: 12px; border-radius: 6px; margin-bottom: 12px;">`;
            analysis += `<strong>相处建议：</strong>`;
            if (reversedCount > cards.length / 2) {
                analysis += `近期不宜做重大决定，给彼此一些空间。把注意力放在自我成长上，当你状态好了，关系自然改善。`;
            } else {
                analysis += `适合主动表达关心，安排一次深入交流或共同活动。真诚的沟通会拉近你们的距离。`;
            }
            analysis += `</div>`;
            
            analysis += `<div style="background: var(--card-bg-hover); padding: 12px; border-radius: 6px;">`;
            analysis += `<strong>关系走向：</strong>`;
            if (lastCard.isReversed) {
                analysis += `这段关系需要经历考验才能成长。如果能共同度过难关，感情会更加深厚。`;
            } else {
                analysis += `未来2-3个月关系会进入新阶段，可能是更深入的承诺，或是找到更舒适的相处模式。`;
            }
            analysis += `</div>`;
            
            analysis += `</div>`;
            return analysis;
        }
        
        // 财务分析
        function generateWealthAnalysis(cards, reversedCount) {
            let analysis = `<div style="margin-bottom: 20px;">`;
            analysis += `<div style="color: var(--primary); font-weight: 600; margin-bottom: 10px; display: flex; align-items: center; gap: 8px;">💰 财务状况指引</div>`;
            
            const firstCard = cards[0];
            const lastCard = cards[cards.length - 1];
            
            analysis += `<div style="background: var(--card-bg-hover); padding: 12px; border-radius: 6px; margin-bottom: 12px;">`;
            analysis += `<strong>当前财务：</strong>`;
            if (firstCard.isReversed) {
                analysis += `近期可能有意外支出或收入不稳定的情况。建议控制非必要消费，建立应急储备。`;
            } else {
                analysis += `财务状况相对平稳，有稳定的收入来源。适合制定长期理财计划。`;
            }
            analysis += `</div>`;
            
            analysis += `<div style="background: var(--card-bg-hover); padding: 12px; border-radius: 6px; margin-bottom: 12px;">`;
            analysis += `<strong>理财策略：</strong>`;
            if (cards.some(c => c.element === 'earth' && !c.isReversed)) {
                analysis += `适合稳健型投资，如定期存款、债券等。避免高风险投机。`;
            } else if (cards.some(c => c.element === 'fire' && !c.isReversed)) {
                analysis += `可以适当尝试新的增收机会，但要控制投入比例，不要把鸡蛋放在一个篮子里。`;
            } else {
                analysis += `先专注于提升主业收入，副业或投资可以等财务状况更稳定后再考虑。`;
            }
            analysis += `</div>`;
            
            analysis += `<div style="background: var(--card-bg-hover); padding: 12px; border-radius: 6px;">`;
            analysis += `<strong>财富展望：</strong>`;
            if (lastCard.isReversed) {
                analysis += `未来3个月内财务增长可能放缓，但这是调整期。坚持储蓄习惯，下半年会好转。`;
            } else {
                analysis += `未来1-3个月有财务增长的机会，可能是加薪、奖金或意外之财。保持积极心态。`;
            }
            analysis += `</div>`;
            
            analysis += `</div>`;
            return analysis;
        }
        
        // 健康分析
        function generateHealthAnalysis(cards, reversedCount) {
            let analysis = `<div style="margin-bottom: 20px;">`;
            analysis += `<div style="color: var(--primary); font-weight: 600; margin-bottom: 10px; display: flex; align-items: center; gap: 8px;">🌿 健康状况指引</div>`;
            
            const firstCard = cards[0];
            
            analysis += `<div style="background: var(--card-bg-hover); padding: 12px; border-radius: 6px; margin-bottom: 12px;">`;
            analysis += `<strong>身体状态：</strong>`;
            if (firstCard.isReversed) {
                analysis += `身体在发出休息的信号，可能存在亚健康状态或慢性疲劳。不要忽视身体的小毛病。`;
            } else {
                analysis += `整体健康状况良好，精力充沛。保持当前的生活节奏即可。`;
            }
            analysis += `</div>`;
            
            analysis += `<div style="background: var(--card-bg-hover); padding: 12px; border-radius: 6px; margin-bottom: 12px;">`;
            analysis += `<strong>养生建议：</strong>`;
            if (cards.some(c => c.element === 'water')) {
                analysis += `多喝水，注意肾脏和泌尿系统健康。可以尝试游泳或瑜伽等柔和运动。`;
            } else if (cards.some(c => c.element === 'fire')) {
                analysis += `注意心脏和血压，避免过度劳累。适量有氧运动，但不要在高温下剧烈运动。`;
            } else if (cards.some(c => c.element === 'earth')) {
                analysis += `关注消化系统和骨骼健康。规律饮食，适量补充钙质。`;
            } else {
                analysis += `注意呼吸系统和神经系统。多做深呼吸，保证充足睡眠。`;
            }
            analysis += `</div>`;
            
            analysis += `<div style="background: var(--card-bg-hover); padding: 12px; border-radius: 6px;">`;
            analysis += `<strong>调整周期：</strong>`;
            analysis += `建议用21天养成一个新的健康习惯，比如早睡早起、每天运动30分钟。身体会给你正向反馈。`;
            analysis += `</div>`;
            
            analysis += `</div>`;
            return analysis;
        }
        
        // 学业分析
        function generateStudyAnalysis(cards, reversedCount) {
            let analysis = `<div style="margin-bottom: 20px;">`;
            analysis += `<div style="color: var(--primary); font-weight: 600; margin-bottom: 10px; display: flex; align-items: center; gap: 8px;">📚 学业发展指引</div>`;
            
            const firstCard = cards[0];
            const lastCard = cards[cards.length - 1];
            
            analysis += `<div style="background: var(--card-bg-hover); padding: 12px; border-radius: 6px; margin-bottom: 12px;">`;
            analysis += `<strong>学习状态：</strong>`;
            if (firstCard.isReversed) {
                analysis += `可能感到学习动力不足或遇到瓶颈。这是正常的疲惫期，需要调整学习方法。`;
            } else {
                analysis += `学习状态不错，吸收知识的能力较强。适合攻克难点或开始新的学习计划。`;
            }
            analysis += `</div>`;
            
            analysis += `<div style="background: var(--card-bg-hover); padding: 12px; border-radius: 6px; margin-bottom: 12px;">`;
            analysis += `<strong>备考策略：</strong>`;
            if (cards.some(c => c.element === 'air')) {
                analysis += `适合逻辑性强的学习方法，多做思维导图，整理知识框架。`;
            } else if (cards.some(c => c.element === 'water')) {
                analysis += `需要调整情绪状态，保持平和心态。可以尝试小组学习或找学习伙伴。`;
            } else {
                analysis += `制定详细的学习计划，按部就班执行。每天进步一点点，积少成多。`;
            }
            analysis += `</div>`;
            
            analysis += `<div style="background: var(--card-bg-hover); padding: 12px; border-radius: 6px;">`;
            analysis += `<strong>考试展望：</strong>`;
            if (lastCard.isReversed) {
                analysis += `考试可能不如预期理想，但不要气馁。总结经验教训，下次会做得更好。`;
            } else {
                analysis += `只要保持当前的努力程度，考试结果会是满意的。相信自己！`;
            }
            analysis += `</div>`;
            
            analysis += `</div>`;
            return analysis;
        }
        
        // 选择决策分析
        function generateDecisionAnalysis(cards, reversedCount) {
            let analysis = `<div style="margin-bottom: 20px;">`;
            analysis += `<div style="color: var(--primary); font-weight: 600; margin-bottom: 10px; display: flex; align-items: center; gap: 8px;">🤔 决策分析指引</div>`;
            
            const firstCard = cards[0];
            const lastCard = cards[cards.length - 1];
            
            analysis += `<div style="background: var(--card-bg-hover); padding: 12px; border-radius: 6px; margin-bottom: 12px;">`;
            analysis += `<strong>现状分析：</strong>`;
            if (firstCard.isReversed) {
                analysis += `你目前可能过于纠结，被各种因素困扰而难以决定。${firstCard.name}逆位提示你需要跳出思维定式。`;
            } else {
                analysis += `你的直觉其实已经给出了答案，只是你还在寻找确认。${firstCard.name}正位显示你内心有清晰的方向。`;
            }
            analysis += `</div>`;
            
            analysis += `<div style="background: var(--card-bg-hover); padding: 12px; border-radius: 6px; margin-bottom: 12px;">`;
            analysis += `<strong>决策建议：</strong>`;
            if (reversedCount > cards.length / 2) {
                analysis += `现在不是做决定的最佳时机。给自己1-2周的缓冲期，等情绪平复、信息更充分后再决定。`;
            } else {
                analysis += `时机已经成熟，可以做出选择了。相信自己的判断，无论选哪条路，你都有能力走好。`;
            }
            analysis += `</div>`;
            
            analysis += `<div style="background: var(--card-bg-hover); padding: 12px; border-radius: 6px;">`;
            analysis += `<strong>结果预测：</strong>`;
            if (lastCard.isReversed) {
                analysis += `选择后可能会遇到一些挑战，但这是成长的必经之路。坚持下去，最终会收获你想要的。`;
            } else {
                analysis += `这个选择会带你走向积极的方向，即使过程中有困难，结果会是好的。`;
            }
            analysis += `</div>`;
            
            analysis += `</div>`;
            return analysis;
        }
        
        // 通用分析
        function generateGeneralAnalysis(cards, reversedCount) {
            let analysis = `<div style="margin-bottom: 20px;">`;
            analysis += `<div style="color: var(--primary); font-weight: 600; margin-bottom: 10px; display: flex; align-items: center; gap: 8px;">✨ 问题解析指引</div>`;
            
            const firstCard = cards[0];
            const lastCard = cards[cards.length - 1];
            
            analysis += `<div style="background: var(--card-bg-hover); padding: 12px; border-radius: 6px; margin-bottom: 12px;">`;
            analysis += `<strong>问题本质：</strong>`;
            analysis += `你问的这个问题，核心在于${firstCard.element === 'fire' ? '行动力' : firstCard.element === 'water' ? '情感' : firstCard.element === 'air' ? '思考' : '务实'}。`;
            if (firstCard.isReversed) {
                analysis += `目前你可能在这个方面遇到了一些阻碍，需要调整方式。`;
            } else {
                analysis += `你在这方面有不错的能量，可以积极推进。`;
            }
            analysis += `</div>`;
            
            analysis += `<div style="background: var(--card-bg-hover); padding: 12px; border-radius: 6px; margin-bottom: 12px;">`;
            analysis += `<strong>解决思路：</strong>`;
            analysis += `建议你先${cards[0].isReversed ? '停下来理清思路，不要急于行动' : '相信自己的直觉，大胆迈出第一步'}。`;
            if (cards.length > 1) {
                analysis += `过程中要注意${cards[1].element === 'fire' ? '保持热情' : cards[1].element === 'water' ? '倾听内心' : cards[1].element === 'air' ? '理性分析' : '脚踏实地'}。`;
            }
            analysis += `</div>`;
            
            analysis += `<div style="background: var(--card-bg-hover); padding: 12px; border-radius: 6px;">`;
            analysis += `<strong>最终答案：</strong>`;
            if (lastCard.isReversed) {
                analysis += `短期内可能看不到理想的结果，但这只是过程。保持耐心，调整方法，最终会得到你想要的答案。`;
            } else {
                analysis += `按照当前的方向前进，你会得到满意的答案。相信自己，一切都在向好的方向发展。`;
            }
            analysis += `</div>`;
            
            analysis += `</div>`;
            return analysis;
        }
        
        // 生成行动计划
        function generateActionPlan(cards) {
            let plan = `<div style="margin-top: 20px;">`;
            plan += `<div style="color: var(--primary); font-weight: 600; margin-bottom: 10px; display: flex; align-items: center; gap: 8px;">🎯 具体行动建议</div>`;
            plan += `<div style="background: linear-gradient(135deg, rgba(107,91,149,0.05) 0%, rgba(212,165,116,0.05) 100%); padding: 15px; border-radius: 8px; border: 1px solid var(--border);">`;
            
            // 根据牌面给出3条具体建议
            plan += `<div style="margin-bottom: 10px;"><strong>本周可以做的3件事：</strong></div>`;
            plan += `<ol style="padding-left: 20px; margin: 0;">`;
            
            // 第一条：基于第一张牌
            const card1 = cards[0];
            if (card1.isReversed) {
                plan += `<li style="margin-bottom: 8px;">先停下来反思${card1.name}逆位提示的问题，不要急于推进。</li>`;
            } else {
                plan += `<li style="margin-bottom: 8px;">利用${card1.name}正位的能量，主动开启第一步行动。</li>`;
            }
            
            // 第二条：基于元素
            if (card1.element === 'fire') {
                plan += `<li style="margin-bottom: 8px;">每天给自己设定一个小目标，完成后给自己正向反馈。</li>`;
            } else if (card1.element === 'water') {
                plan += `<li style="margin-bottom: 8px;">每天花10分钟冥想或写日记，梳理内心的真实想法。</li>`;
            } else if (card1.element === 'air') {
                plan += `<li style="margin-bottom: 8px;">列出利弊清单，用理性分析辅助决策。</li>`;
            } else {
                plan += `<li style="margin-bottom: 8px;">制定具体的执行计划，把大目标拆解成可执行的小步骤。</li>`;
            }
            
            // 第三条：通用建议
            const reversedCount = cards.filter(c => c.isReversed).length;
            if (reversedCount > 0) {
                plan += `<li>遇到阻碍时，把它当作调整方向的机会，而不是失败。</li>`;
            } else {
                plan += `<li>保持当前的积极状态，同时注意倾听他人的建议。</li>`;
            }
            
            plan += `</ol>`;
            plan += `</div>`;
            plan += `</div>`;
            
            return plan;
        }
        
        // 单张牌解读 - 今日指引
        function generateSingleCardReading(card, elements, uniqueElements, elementNames, uprightCount) {
            const el = elements[card.element];
            let reading = `<strong>【今日指引】</strong><br><br>`;
            
            reading += `今日抽到的${card.name}${card.isReversed ? '（逆位）' : ''}呈现出<strong>${el}元素</strong>的能量。`;
            
            if (!card.isReversed) {
                reading += `这张牌正位出现，提示你今天适合${getElementActivity(card.element)}。`;
                reading += `你的${getElementQuality(card.element)}会被放大，是行动的好时机。`;
                reading += `保持专注，把握机会，相信你的直觉指引。`;
            } else {
                reading += `这张牌逆位出现，提示你今天需要${getElementActivity(card.element) === '主动出击、大胆行动' ? '放慢脚步、内省反思' : '调整节奏、重新审视'}。`;
                reading += `这不是阻碍，而是让你停下来整理思绪的信号。`;
                reading += `利用这段时间审视内在状态，为下一步做好准备。`;
            }
            
            return reading;
        }
        
        // 三张牌解读 - 过去/现在/未来
        function generateThreeCardReading(cards, elements, uniqueElements, elementNames, uprightCount) {
            const [past, present, future] = cards;
            let reading = `<strong>【三张牌解析】</strong><br><br>`;
            
            reading += `<strong>🕰️ 过去/起因：${past.name}${past.isReversed ? '（逆位）' : ''}</strong><br>`;
            reading += `${elements[past.element]}元素揭示了这个问题的根源。`;
            reading += `${past.isReversed ? '过去的经历虽有阻滞，但为你积累了独特的智慧和经验。' : '过去的积极行动为你打开了新的视野，奠定了基础。'}`;
            reading += `这段历史塑造了现在的你。<br><br>`;
            
            reading += `<strong>⚡ 现在/核心：${present.name}${present.isReversed ? '（逆位）' : ''}</strong><br>`;
            reading += `${elements[present.element]}元素是当前问题的核心。`;
            reading += `${present.isReversed ? '此刻需要调整方向，重新审视现状，这是一个内省的好时机。' : '此刻能量正盛，是推进计划、做出决定的有利时机。'}`;
            reading += `把握当下，是解决问题的关键。<br><br>`;
            
            reading += `<strong>🔮 未来/发展：${future.name}${future.isReversed ? '（逆位）' : ''}</strong><br>`;
            reading += `${elements[future.element]}元素预示着未来的走向。`;
            reading += `${future.isReversed ? '未来可能需要更多耐心，提前觉察可以帮助你更好地应对。' : '即将到来的转变会带来新的机会，保持开放心态迎接变化。'}`;
            reading += `未来的走向取决于现在的选择。<br><br>`;
            
            return reading;
        }
        
        // 问题解决牌阵解读（5张牌）
        function generateProblemReading(cards, elements, uniqueElements, elementNames, uprightCount) {
            const [influence, advice, current, development, outcome] = cards;
            let reading = `<strong>【问题整体能量场】</strong><br><br>`;
            
            if (uniqueElements.length === 1) {
                reading += `问题呈现出纯粹的<strong>${elementNames[0]}元素</strong>能量，这种单一而强烈的能量表明问题集中在${getElementQuality(uniqueElements[0])}层面。<br><br>`;
            } else {
                reading += `<strong>${elementNames.join('、')}</strong>元素交织，说明问题涉及多个层面，需要综合考虑。<br><br>`;
            }
            
            reading += `<strong>【五维深度解析】</strong><br><br>`;
            
            reading += `<strong>🔍 影响因素：${influence.name}${influence.isReversed ? '（逆位）' : ''}</strong><br>`;
            reading += `${elements[influence.element]}元素揭示了这个问题的深层影响因素。`;
            reading += `${influence.isReversed ? '有些隐藏的因素在阻碍进展，需要仔细审视' : '积极的外部因素正在支持问题的解决，把握这些助力'}。<br><br>`;
            
            reading += `<strong>💡 建议指引：${advice.name}${advice.isReversed ? '（逆位）' : ''}</strong><br>`;
            reading += `${elements[advice.element]}元素为你提供了处理这个问题的关键建议。`;
            reading += `${advice.isReversed ? '当前的建议可能需要调整，尝试从不同的角度思考解决方案' : '遵循这种能量指引，采取积极的行动方式，会带来积极的结果'}。<br><br>`;
            
            reading += `<strong>📍 问题现状：${current.name}${current.isReversed ? '（逆位）' : ''}</strong><br>`;
            reading += `${elements[current.element]}元素反映了问题当前的真实状态。`;
            reading += `${current.isReversed ? '现状存在一些阻滞，需要耐心和调整，不要急于求成' : '现状呈现积极的态势，是推进解决方案的好时机'}。<br><br>`;
            
            reading += `<strong>🌊 发展走向：${development.name}${development.isReversed ? '（逆位）' : ''}</strong><br>`;
            reading += `${elements[development.element]}元素预示着问题接下来的发展趋势。`;
            reading += `${development.isReversed ? '发展过程中可能遇到波折，保持灵活应变，及时调整策略' : '发展态势良好，按照当前方向推进，会看到积极的进展'}。<br><br>`;
            
            reading += `<strong>✨ 最终结果：${outcome.name}${outcome.isReversed ? '（逆位）' : ''}</strong><br>`;
            reading += `${elements[outcome.element]}元素揭示了这个问题最终可能达成的结果。`;
            reading += `${outcome.isReversed ? '最终结果可能需要更多时间和耐心，不要气馁，持续努力会带来转机' : '最终结果令人满意，你的努力会得到回报，保持信心继续前行'}。<br><br>`;
            
            return reading;
        }
        
        // 爱情牌阵解读
        function generateLoveReading(cards, elements, uniqueElements, elementNames, uprightCount) {
            const [self, other, situation, guidance, result] = cards;
            let reading = `<strong>【爱情能量场解析】</strong><br><br>`;
            
            reading += `你们的爱情呈现出<strong>${elementNames.join('、')}</strong>元素的能量交织。`;
            reading += `这种能量组合揭示了你们关系的深层动态和发展潜力。<br><br>`;
            
            reading += `<strong>【爱情五维透视】</strong><br><br>`;
            
            reading += `<strong>💝 你的状态：${self.name}${self.isReversed ? '（逆位）' : ''}</strong><br>`;
            reading += `${elements[self.element]}元素反映了你在当前关系中的真实状态和情感需求。`;
            reading += `${self.isReversed ? '你可能感到一些困惑或不安，需要更多时间来理清自己的感受' : '你处于积极开放的状态，准备好投入和付出，这种能量会感染对方'}。<br><br>`;
            
            reading += `<strong>💕 对方状态：${other.name}${other.isReversed ? '（逆位）' : ''}</strong><br>`;
            reading += `${elements[other.element]}元素揭示了对方在这段关系中的态度和感受。`;
            reading += `${other.isReversed ? '对方可能有些犹豫或保留，需要更多的沟通和了解来建立信任' : '对方同样持开放态度，对这段关系充满期待，双方能量相互呼应'}。<br><br>`;
            
            reading += `<strong>💞 关系现状：${situation.name}${situation.isReversed ? '（逆位）' : ''}</strong><br>`;
            reading += `${elements[situation.element]}元素描绘了你们关系当前的真实状况。`;
            reading += `${situation.isReversed ? '关系中可能存在一些误解或沟通不畅，需要耐心化解' : '关系发展顺利，彼此之间的连接正在加深，享受当下的美好'}。<br><br>`;
            
            reading += `<strong>🌹 发展建议：${guidance.name}${guidance.isReversed ? '（逆位）' : ''}</strong><br>`;
            reading += `${elements[guidance.element]}元素为你们的关系发展提供了宝贵的指引。`;
            reading += `${guidance.isReversed ? '建议调整相处方式，给彼此更多空间和理解，不要急于求成' : '建议采取积极的行动方式，会让关系更加和谐美满'}。<br><br>`;
            
            reading += `<strong>💖 最终结果：${result.name}${result.isReversed ? '（逆位）' : ''}</strong><br>`;
            reading += `${elements[result.element]}元素预示着这段关系最终可能走向的方向。`;
            reading += `${result.isReversed ? '关系的发展可能需要经历一些考验，保持真诚和耐心，真爱值得等待' : '关系前景光明，你们的感情会不断深化，共同创造美好的未来'}。<br><br>`;
            
            return reading;
        }
        
        // 默认解读
        function generateDefaultReading(cards, elements, uniqueElements, elementNames, uprightCount) {
            let reading = `<strong>【能量氛围解析】</strong><br><br>`;
            
            if (uniqueElements.length === 1) {
                reading += `牌阵呈现出纯粹的<strong>${elementNames[0]}元素</strong>能量，这种集中而强烈的能量场会让你全身心投入。<br><br>`;
            } else {
                reading += `<strong>${elementNames.join('、')}</strong>元素交织，能量流动富有层次，为你提供全面的视角。<br><br>`;
            }
            
            reading += `<strong>【能量状态分析】</strong><br><br>`;
            if (uprightCount === cards.length) {
                reading += `所有牌均为正位，这是一个<strong>顺势而为</strong>的黄金时期，适合大胆行动。<br><br>`;
            } else if (uprightCount === 0) {
                reading += `所有牌均为逆位，这是一个<strong>内省调整</strong>的重要时期，需要停下来整理思绪。<br><br>`;
            } else {
                reading += `正逆位交织呈现<strong>动态平衡</strong>，挑战与机遇并存，保持觉察是关键。<br><br>`;
            }
            
            return reading;
        }

        function generateAdvice() {
            // 根据抽到的牌生成独特的建议
            const cardNames = drawnCards.map(c => c.name).join('、');
            const hasReversed = drawnCards.some(c => c.isReversed);
            
            if (hasReversed) {
                return `今日抽到${cardNames}，其中包含逆位牌，建议你先停下来整理思绪。不要急于做出决定，给自己一些独处的时间。注意情绪管理，避免被外界影响。相信直觉，但也要理性分析。`;
            } else {
                return `今日抽到${cardNames}，全是正位牌，能量非常顺畅。适合主动展开行动，把握机会。遇到挑战时保持冷静，相信直觉会指引正确方向。保持开放的心态，接受新的可能性。`;
            }
        }

        function captureResult() {
            const resultArea = document.getElementById('interpretation');
            if (resultArea.style.display === 'none') {
                alert('请先完成占卜');
                return;
            }
            
            html2canvas(resultArea, { backgroundColor: '#FFFFFF' }).then(canvas => {
                const link = document.createElement('a');
                link.download = '塔罗占卜结果_' + new Date().toLocaleDateString() + '.png';
                link.href = canvas.toDataURL();
                link.click();
            });
        }

        function resetReading() {
            isPurposeReading = false;
            purposeType = '';
            currentSpread = null;
            drawnCards = [];
            flippedCount = 0;
            userQuestion = '';
            selectionMode = '';
            document.getElementById('user-question').value = '';
            document.getElementById('interpretation').style.display = 'none';
            document.getElementById('card-table').innerHTML = '';
            document.getElementById('loading-overlay').classList.remove('active');
            // 清理洗牌页面的加载覆盖层和抽出的牌
            const loadingOverlay = document.getElementById('calculation-loading-overlay');
            if (loadingOverlay) loadingOverlay.style.display = 'none';
            const drawnContainer = document.getElementById('drawn-cards-container');
            if (drawnContainer) drawnContainer.innerHTML = '';
            // 重置洗牌状态文本
            const shuffleStatus = document.getElementById('shuffle-status');
            if (shuffleStatus) shuffleStatus.textContent = '塔罗牌正在感应你的能量...';
            showPage('meditation-page');
        }

        // 初始化粒子背景
        document.addEventListener('DOMContentLoaded', initParticles);
    
