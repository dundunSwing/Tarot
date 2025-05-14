// 塔罗牌数据
const tarotCards = [
    // 大阿卡纳牌
    { name: '愚者', image: 'fool.jpg', meaning: '新的开始，冒险，自发性。代表新的旅程、纯真和无限可能。', number: '0号牌' },
    { name: '魔术师', image: 'magician.jpg', meaning: '创造力，技能，意志力。象征运用自身能力实现目标，掌握命运。', number: 'Ⅰ号牌' },
    { name: '女祭司', image: 'high-priestess.jpg', meaning: '直觉，神秘，潜意识。代表内在智慧、直觉和神秘知识。', number: 'Ⅱ号牌' },
    { name: '女皇', image: 'empress.jpg', meaning: '丰饶，母性，创造力。象征丰收、滋养和自然的力量。', number: 'Ⅲ号牌' },
    { name: '皇帝', image: 'emperor.jpg', meaning: '权威，结构，控制。代表稳定、秩序和领导力。', number: 'Ⅳ号牌' },
    { name: '教皇', image: 'hierophant.jpg', meaning: '传统，信仰，道德。象征精神指引、传统价值观和道德规范。', number: 'Ⅴ号牌' },
    { name: '恋人', image: 'lovers.jpg', meaning: '爱情，和谐，关系。代表选择、平衡和重要关系。', number: 'Ⅵ号牌' },
    { name: '战车', image: 'chariot.jpg', meaning: '胜利，意志力，决心。象征前进、控制和克服障碍。', number: 'Ⅶ号牌' },
    { name: '力量', image: 'strength.jpg', meaning: '勇气，说服力，影响。代表内在力量、耐心和温和的力量。', number: 'Ⅷ号牌' },
    { name: '隐士', image: 'hermit.jpg', meaning: '内省，寻找内在真理。象征独处、自我反思和内在指引。', number: 'Ⅸ号牌' },
    { name: '命运之轮', image: 'fortune-wheel.jpg', meaning: '命运，转折点，机会。代表命运的变化、机遇和转折。', number: 'Ⅹ号牌' },
    { name: '正义', image: 'justice.jpg', meaning: '正义，真理，诚实。象征平衡、公正和因果报应。', number: 'Ⅺ号牌' },
    { name: '倒吊人', image: 'hanged-man.jpg', meaning: '牺牲，释放，新的视角。代表放下、新的视角和内在成长。', number: 'Ⅻ号牌' },
    { name: '死神', image: 'death.jpg', meaning: '结束，改变，转变。象征重大转变、结束和新的开始。', number: 'ⅩⅢ号牌' },
    { name: '节制', image: 'temperance.jpg', meaning: '平衡，适度，耐心。代表平衡、和谐和适度。', number: 'ⅩⅣ号牌' },
    { name: '恶魔', image: 'devil.jpg', meaning: '束缚，物质主义，欲望。象征束缚、物质欲望和负面模式。', number: 'ⅩⅤ号牌' },
    { name: '塔', image: 'tower.jpg', meaning: '突然的变化，混乱，启示。代表突然的改变、破坏和重建。', number: 'ⅩⅥ号牌' },
    { name: '星星', image: 'stars.jpg', meaning: '希望，信心，目的。象征希望、灵感和精神指引。', number: 'ⅩⅦ号牌' },
    { name: '月亮', image: 'moon.jpg', meaning: '幻觉，恐惧，潜意识。代表直觉、幻觉和潜意识。', number: 'ⅩⅧ号牌' },
    { name: '太阳', image: 'sun.jpg', meaning: '喜悦，活力，成功。象征快乐、成功和积极能量。', number: 'ⅩⅨ号牌' },
    { name: '审判', image: 'judgement.jpg', meaning: '重生，内在呼唤，释放。代表觉醒、重生和内在召唤。', number: 'ⅩⅩ号牌' },
    { name: '世界', image: 'world.jpg', meaning: '完成，整合，成就。象征完成、圆满和新的循环。', number: 'ⅩⅪ号牌' }
];

// 小阿卡纳牌含义
const suitMeanings = {
    wands: {
        element: '火',
        meaning: '代表创造力、激情和行动力',
        cards: {
            ace: '新的开始，灵感，创造力',
            two: '计划，决定，发现',
            three: '成长，扩张，远见',
            four: '稳定，基础，休息',
            five: '冲突，竞争，挑战',
            six: '胜利，成功，认可',
            seven: '挑战，坚持，防御',
            eight: '快速行动，变化，进步',
            nine: '准备，力量，耐力',
            ten: '负担，责任，压力',
            page: '探索，热情，新消息',
            knight: '行动，冒险，冲动',
            queen: '独立，热情，创造力',
            king: '远见，领导力，企业家精神'
        }
    },
    cups: {
        element: '水',
        meaning: '代表情感、直觉和关系',
        cards: {
            ace: '新的情感，直觉，创造力',
            two: '伙伴关系，吸引力，选择',
            three: '庆祝，友谊，社区',
            four: '冥想，内省，重新评估',
            five: '失望，遗憾，悲伤',
            six: '怀旧，回忆，礼物',
            seven: '选择，幻想，机会',
            eight: '放弃，改变，前进',
            nine: '满足，幸福，愿望实现',
            ten: '圆满，家庭幸福，完成',
            page: '创意，新想法，学习',
            knight: '浪漫，魅力，追求',
            queen: '同理心，关怀，直觉',
            king: '艺术，情感，智慧'
        }
    },
    swords: {
        element: '风',
        meaning: '代表思想、沟通和挑战',
        cards: {
            ace: '新的想法，清晰，突破',
            two: '决定，和平，平衡',
            three: '心碎，悲伤，痛苦',
            four: '休息，恢复，冥想',
            five: '冲突，失败，损失',
            six: '过渡，改变，旅程',
            seven: '欺骗，策略，选择',
            eight: '挑战，障碍，限制',
            nine: '焦虑，恐惧，噩梦',
            ten: '结束，失败，新的开始',
            page: '新想法，好奇心，学习',
            knight: '行动，冲动，改变',
            queen: '清晰，诚实，独立',
            king: '权威，真理，正义'
        }
    },
    pentacles: {
        element: '土',
        meaning: '代表物质、财富和实际事务',
        cards: {
            ace: '新的机会，繁荣，潜力',
            two: '平衡，优先事项，适应',
            three: '团队合作，技能，成长',
            four: '安全，稳定，保守',
            five: '财务困难，损失，改变',
            six: '慷慨，礼物，帮助',
            seven: '耐心，长期目标，投资',
            eight: '技能，学徒，进步',
            nine: '物质舒适，安全，独立',
            ten: '财富，家庭，遗产',
            page: '学习，机会，新技能',
            knight: '可靠，勤奋，耐心',
            queen: '实用，富足，滋养',
            king: '商业，财富，安全'
        }
    }
};

// 添加中文名称转换
const cardNameTranslations = {
    wands: '权杖',
    cups: '圣杯',
    swords: '宝剑',
    pentacles: '星币',
    ace: '一',
    two: '二',
    three: '三',
    four: '四',
    five: '五',
    six: '六',
    seven: '七',
    eight: '八',
    nine: '九',
    ten: '十',
    page: '侍从',
    knight: '骑士',
    queen: '皇后',
    king: '国王'
};

// 元素属性映射
const elementAttributes = {
    wands: { class: 'tag-fire', text: '火元素' },
    cups: { class: 'tag-water', text: '水元素' },
    swords: { class: 'tag-air', text: '风元素' },
    pentacles: { class: 'tag-earth', text: '土元素' }
};

// 添加小阿卡纳牌
const suits = ['wands', 'cups', 'swords', 'pentacles'];
const courtCards = ['ace', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'page', 'knight', 'queen', 'king'];

suits.forEach(suit => {
    courtCards.forEach(card => {
        tarotCards.push({
            name: `${card}-${suit}`,
            image: `${card}-${suit}.jpg`,
            meaning: `${suitMeanings[suit].cards[card]}。${suitMeanings[suit].meaning}，元素为${suitMeanings[suit].element}。`
        });
    });
});

class TarotReading {
    constructor() {
        this.cardsContainer = document.getElementById('cardsContainer');
        this.interpretation = document.getElementById('interpretation');
        this.startButton = document.getElementById('startReading');
        this.spreadButtons = document.querySelectorAll('.spread-btn');
        this.selectedSpread = 'single';
        
        this.initializeEventListeners();
    }

    initializeEventListeners() {
        this.startButton.addEventListener('click', () => this.startReading());
        
        this.spreadButtons.forEach(button => {
            button.addEventListener('click', () => {
                this.spreadButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                this.selectedSpread = button.dataset.spread;
            });
        });
    }

    shuffleCards() {
        return [...tarotCards].sort(() => Math.random() - 0.5);
    }

    createCard(card, index) {
        const cardElement = document.createElement('div');
        cardElement.className = 'card';
        cardElement.innerHTML = `
            <div class="card-front">
                <img src="tarot_cards/${card.image}" alt="${card.name}">
            </div>
            <div class="card-back">
                <button class="flip-button">翻牌</button>
            </div>
        `;

        cardElement.addEventListener('click', () => this.flipCard(cardElement, card));
        return cardElement;
    }

    flipCard(cardElement, card) {
        // 如果牌已经翻开，则不再执行任何操作
        if (cardElement.classList.contains('flipped')) {
            return;
        }
        
        cardElement.classList.add('flipped');
        this.showInterpretation(card);
    }

    getChineseName(cardName) {
        if (cardName.includes('-')) {
            const [number, suit] = cardName.split('-');
            return `${cardNameTranslations[suit]}${cardNameTranslations[number]}`;
        }
        return cardName;
    }

    getTags(meaning) {
        return meaning.split('。')[0].split('，');
    }

    getElementTag(suit) {
        if (elementAttributes[suit]) {
            return `<span class="tag ${elementAttributes[suit].class}">${elementAttributes[suit].text}</span>`;
        }
        return '';
    }

    showInterpretation(card) {
        const interpretation = document.createElement('div');
        interpretation.className = 'card-interpretation';
        
        const chineseName = this.getChineseName(card.name);
        const tags = this.getTags(card.meaning);
        const meaning = card.meaning.split('。')[1] || card.meaning;
        
        let elementTag = '';
        if (card.name.includes('-')) {
            const suit = card.name.split('-')[1];
            elementTag = this.getElementTag(suit);
        }

        interpretation.innerHTML = `
            <div class="card-header">
                <span class="card-name">${chineseName}</span>
                ${elementTag}
                ${card.number ? `<span class="tag tag-major roman-number">${card.number}</span>` : ''}
            </div>
            <div class="tags-container">
                ${tags.map(tag => `<span class="tag ${card.name.includes('-') ? elementAttributes[card.name.split('-')[1]].class : 'tag-major'}">${tag}</span>`).join('')}
            </div>
            <div class="card-meaning">${meaning}</div>
        `;
        
        this.interpretation.appendChild(interpretation);
    }

    startReading() {
        this.cardsContainer.innerHTML = '';
        this.interpretation.innerHTML = '';
        this.cardsContainer.className = `cards-container spread-${this.selectedSpread}`;

        const shuffledCards = this.shuffleCards();
        const numCards = this.getNumberOfCards();

        for (let i = 0; i < numCards; i++) {
            const card = shuffledCards[i];
            const cardElement = this.createCard(card, i);
            this.cardsContainer.appendChild(cardElement);
        }
    }

    getNumberOfCards() {
        switch (this.selectedSpread) {
            case 'single':
                return 1;
            case 'three':
                return 3;
            case 'celtic':
                return 10;
            default:
                return 1;
        }
    }
}

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    new TarotReading();
}); 