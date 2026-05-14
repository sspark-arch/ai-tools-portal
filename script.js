// AI Tools 데이터
const tools = [
    // 이미지 생성 모델
    {
        id: 1,
        name: "Nano Banana Pro",
        category: "image",
        icon: "🎨",
        description: "최고 품질의 4K 이미지 생성 모델. 디테일한 텍스트 렌더링과 복잡한 구성을 완벽하게 처리합니다.",
        price: "유료",
        rating: 4.9,
        tags: ["이미지생성", "4K", "고품질", "텍스트렌더링", "상세한"],
        features: ["4K 해상도", "텍스트 정확도", "복잡한 구성"]
    },
    {
        id: 2,
        name: "Soul 2.0",
        category: "image",
        icon: "👗",
        description: "패션과 미학에 특화된 울트라 리얼리스틱 이미지 생성. 의류, 뷰티, 라이프스타일 콘텐츠에 최적.",
        price: "유료",
        rating: 4.9,
        tags: ["이미지생성", "패션", "미학", "사실적", "의류"],
        features: ["현실적인 텍스처", "패션 특화", "라이프스타일"]
    },
    {
        id: 3,
        name: "GPT Image 2",
        category: "image",
        icon: "📸",
        description: "4K 이미지 생성 모델로 거의 완벽한 텍스트 렌더링을 제공합니다.",
        price: "유료",
        rating: 4.8,
        tags: ["이미지생성", "4K", "텍스트", "GPT", "상세함"],
        features: ["텍스트 렌더링", "4K 품질", "빠른 생성"]
    },
    {
        id: 4,
        name: "Seedream 5.0",
        category: "image",
        icon: "💫",
        description: "지능형 시각 추론 기능이 있는 이미지 생성 모델. 의도를 정확하게 이해합니다.",
        price: "유료",
        rating: 4.7,
        tags: ["이미지생성", "AI추론", "창의적", "지능형"],
        features: ["시각 추론", "의도 이해", "창의성"]
    },
    {
        id: 5,
        name: "Flux 2",
        category: "image",
        icon: "⚡",
        description: "차세대 이미지 생성 모델. 빠르고 효율적인 고품질 이미지 생성.",
        price: "유료",
        rating: 4.8,
        tags: ["이미지생성", "빠름", "고품질", "효율적"],
        features: ["빠른 처리", "고품질", "효율성"]
    },
    {
        id: 6,
        name: "Midjourney",
        category: "image",
        icon: "🎭",
        description: "텍스트로 고품질 이미지를 생성하는 AI. 창의적인 디자인에 최적화되어 있습니다.",
        price: "유료",
        rating: 4.8,
        tags: ["이미지생성", "창의적", "고품질", "Discord"],
        features: ["고품질 생성", "창의적 표현", "세부 조정"]
    },
    {
        id: 7,
        name: "Adobe Firefly",
        category: "image",
        icon: "🔥",
        description: "Adobe의 생성 AI. Photoshop과 완벽하게 통합되어 전문적인 이미지 편집이 가능합니다.",
        price: "유료",
        rating: 4.8,
        tags: ["이미지생성", "편집", "Adobe", "Photoshop통합"],
        features: ["Photoshop 통합", "정밀 편집", "빠른 생성"]
    },
    {
        id: 8,
        name: "Soul ID",
        category: "image",
        icon: "🎬",
        description: "고유한 캐릭터 생성 도구. 일관된 캐릭터로 다양한 배경과 상황의 이미지를 생성할 수 있습니다.",
        price: "유료",
        rating: 4.7,
        tags: ["캐릭터생성", "일관성", "배경", "캐릭터"],
        features: ["캐릭터 일관성", "다양한 배경", "자동 생성"]
    },

    // 비디오 생성 모델
    {
        id: 9,
        name: "Seedance 2.0",
        category: "video",
        icon: "🎞️",
        description: "최고 수준의 비디오 모델. 영화같은 VFX를 자유로운 형식으로 만들 수 있습니다.",
        price: "유료",
        rating: 4.9,
        tags: ["비디오생성", "영화같은", "VFX", "고품질"],
        features: ["영화급 품질", "VFX 프리셋", "제약 없는 생성"]
    },
    {
        id: 10,
        name: "Kling 3.0",
        category: "video",
        icon: "🎥",
        description: "최신 비디오 생성 모델. 최대 15초의 캐릭터 일관성이 있는 고품질 비디오를 생성합니다.",
        price: "유료",
        rating: 4.8,
        tags: ["비디오생성", "캐릭터일관성", "15초", "고품질"],
        features: ["15초 비디오", "캐릭터 일관성", "높은 품질"]
    },
    {
        id: 11,
        name: "Sora 2",
        category: "video",
        icon: "🌊",
        description: "OpenAI의 비디오 생성 모델. 현실적이고 복잡한 영상을 생성합니다.",
        price: "유료",
        rating: 4.9,
        tags: ["비디오생성", "현실적", "복잡한", "OpenAI"],
        features: ["현실적 생성", "복잡한 장면", "높은 품질"]
    },
    {
        id: 12,
        name: "Google Veo 3",
        category: "video",
        icon: "🎬",
        description: "Google의 비디오 생성 모델. 고성능 영상 생성을 위해 설계되었습니다.",
        price: "유료",
        rating: 4.8,
        tags: ["비디오생성", "Google", "고성능", "혁신적"],
        features: ["고성능", "혁신적 기술", "확장성"]
    },
    {
        id: 13,
        name: "Kling 2.5 Turbo",
        category: "video",
        icon: "⚡",
        description: "Kling의 터보 버전. 더 빠른 생성 속도로 고품질 비디오를 만듭니다.",
        price: "유료",
        rating: 4.7,
        tags: ["비디오생성", "빠름", "고품질", "VFX", "프리셋"],
        features: ["빠른 생성", "VFX 프리셋", "고품질"]
    },
    {
        id: 14,
        name: "WAN 2.6",
        category: "video",
        icon: "🌐",
        description: "다목적 비디오 생성 모델. 다양한 스타일의 영상을 생성할 수 있습니다.",
        price: "유료",
        rating: 4.7,
        tags: ["비디오생성", "다목적", "다양한스타일"],
        features: ["스타일 다양성", "고품질", "유연성"]
    },
    {
        id: 15,
        name: "MiniMax Hailuo 02",
        category: "video",
        icon: "🚀",
        description: "효율적인 비디오 생성 모델. 빠른 속도로 양질의 콘텐츠를 생성합니다.",
        price: "유료",
        rating: 4.6,
        tags: ["비디오생성", "효율적", "빠름", "고품질"],
        features: ["빠른 생성", "효율성", "품질"]
    },
    {
        id: 16,
        name: "Runway",
        category: "video",
        icon: "🎨",
        description: "AI 영상 편집 플랫폼. 텍스트로 영상을 생성하고 편집할 수 있습니다.",
        price: "무료/유료",
        rating: 4.7,
        tags: ["비디오생성", "편집", "특수효과", "배경제거"],
        features: ["영상 생성", "배경 제거", "고급 편집"]
    },

    // 음성/오디오
    {
        id: 17,
        name: "ElevenLabs",
        category: "audio",
        icon: "🗣️",
        description: "자연스러운 음성 합성 AI. 여러 언어와 톤의 보이스를 실시간으로 생성합니다.",
        price: "무료/유료",
        rating: 4.9,
        tags: ["음성합성", "나레이션", "다국어", "자연스러운"],
        features: ["자연스러운 음성", "다양한 톤", "실시간 생성"]
    },
    {
        id: 18,
        name: "Suno",
        category: "audio",
        icon: "🎵",
        description: "AI로 음악을 생성하는 플랫폼. 가사를 입력하면 완전한 곡을 만들어냅니다.",
        price: "유료",
        rating: 4.8,
        tags: ["음악생성", "보컬", "작곡", "가사기반"],
        features: ["가사 기반 생성", "다양한 장르", "빠른 생성"]
    },
    {
        id: 19,
        name: "AIVA",
        category: "audio",
        icon: "🎼",
        description: "영화, 게임, 팟캐스트용 AI 음악 작곡가. 전문가 수준의 음악을 빠르게 생성합니다.",
        price: "유료",
        rating: 4.6,
        tags: ["작곡", "영상음악", "배경음악", "전문가수준"],
        features: ["자동 작곡", "장르 선택", "커스터마이징"]
    },
    {
        id: 20,
        name: "iZotope",
        category: "audio",
        icon: "🎙️",
        description: "오디오 마스터링과 믹싱을 위한 AI 도구. 전문가 수준의 사운드를 자동으로 만듭니다.",
        price: "유료",
        rating: 4.7,
        tags: ["마스터링", "믹싱", "편집", "노이즈제거"],
        features: ["자동 마스터링", "노이즈 제거", "AI 분석"]
    },

    // 아바타/캐릭터 영상
    {
        id: 21,
        name: "Synthesia",
        category: "avatar",
        icon: "🎭",
        description: "텍스트에서 프로페셔널 비디오를 생성합니다. 비용 효율적인 영상 제작이 가능합니다.",
        price: "유료",
        rating: 4.5,
        tags: ["영상제작", "프레젠테이션", "교육", "아바타"],
        features: ["빠른 제작", "다양한 아바타", "자동 자막"]
    },
    {
        id: 22,
        name: "HeyGen",
        category: "avatar",
        icon: "🤳",
        description: "AI 아바타로 영상을 생성하는 플랫폼. 마케팅과 교육용으로 완벽합니다.",
        price: "무료/유료",
        rating: 4.6,
        tags: ["영상생성", "아바타", "마케팅", "다국어"],
        features: ["아바타 선택", "다국어 지원", "빠른 생성"]
    },
    {
        id: 23,
        name: "D-ID",
        category: "avatar",
        icon: "👤",
        description: "스크립트에서 AI 앵커 영상을 생성합니다. 프레젠테이션과 교육용 영상 제작에 최적화.",
        price: "유료",
        rating: 4.6,
        tags: ["영상생성", "아바타", "프레젠테이션", "나레이션"],
        features: ["AI 아바타", "다양한 배경", "자동 생성"]
    },

    // 텍스트 생성 AI
    {
        id: 24,
        name: "ChatGPT",
        category: "text",
        icon: "💬",
        description: "OpenAI의 대형 언어 모델. 텍스트 작성, 편집, 아이디어 생성, 코딩에 뛰어납니다.",
        price: "무료/유료",
        rating: 4.9,
        tags: ["텍스트생성", "작성", "아이디어", "코딩", "분석"],
        features: ["대화형", "맥락 이해", "창의적 작성"]
    },
    {
        id: 25,
        name: "Claude",
        category: "text",
        icon: "🤖",
        description: "Anthropic의 고급 AI 모델. 복잡한 작성, 분석, 코딩에 최적화되어 있습니다.",
        price: "무료/유료",
        rating: 4.8,
        tags: ["텍스트생성", "분석", "작성", "코딩"],
        features: ["깊이있는 분석", "창의적 작성", "코드 작성"]
    },
    {
        id: 26,
        name: "Perplexity",
        category: "text",
        icon: "🔍",
        description: "검색 기반 AI 어시스턴트. 최신 정보와 출처를 함께 제공하여 신뢰할 수 있는 답변을 줍니다.",
        price: "무료/유료",
        rating: 4.5,
        tags: ["검색", "정보검색", "리서치", "출처"],
        features: ["실시간 정보", "출처 제시", "깊이있는 답변"]
    },
    {
        id: 27,
        name: "Copy.ai",
        category: "text",
        icon: "✍️",
        description: "마케팅 콘텐츠 작성 전문 AI. 소셜 미디어부터 이메일까지 다양한 형식의 콘텐츠를 빠르게 생성합니다.",
        price: "무료/유료",
        rating: 4.4,
        tags: ["마케팅", "콘텐츠", "카피라이팅", "소셜미디어"],
        features: ["템플릿 제공", "다양한 톤", "빠른 생성"]
    },
    {
        id: 28,
        name: "Jasper",
        category: "text",
        icon: "📝",
        description: "브랜드 음성을 유지하면서 고품질 콘텐츠를 생성하는 AI. 장문의 콘텐츠 작성에 최적입니다.",
        price: "유료",
        rating: 4.6,
        tags: ["콘텐츠", "브랜드", "마케팅", "장문"],
        features: ["브랜드 가이드", "장문 작성", "팀 협업"]
    },

    // 편집 및 효과 도구
    {
        id: 29,
        name: "Shots",
        category: "tools",
        icon: "📷",
        description: "하나의 이미지에서 9개의 고유한 샷을 생성합니다. 다양한 각도와 프레이밍으로 콘텐츠 제작을 효율화합니다.",
        price: "유료",
        rating: 4.7,
        tags: ["이미지변환", "각도", "다양한샷"],
        features: ["9개 고유 샷", "자동 각도", "다양한 프레이밍"]
    },
    {
        id: 30,
        name: "Angles 2.0",
        category: "tools",
        icon: "🔄",
        description: "어떤 이미지의 다양한 각도 뷰를 초 단위로 생성합니다. 3D 회전 효과가 가능합니다.",
        price: "유료",
        rating: 4.7,
        tags: ["이미지변환", "3D회전", "각도조정"],
        features: ["다양한 각도", "3D 회전", "빠른 생성"]
    },
    {
        id: 31,
        name: "Background Remover",
        category: "tools",
        icon: "✂️",
        description: "AI가 자동으로 배경을 제거하고 투명 배경으로 만듭니다. 이미지 처리를 간단하게 합니다.",
        price: "유료",
        rating: 4.7,
        tags: ["배경제거", "투명배경", "이미지처리"],
        features: ["자동 제거", "투명 배경", "고품질"]
    },
    {
        id: 32,
        name: "Upscale",
        category: "tools",
        icon: "📈",
        description: "이미지와 비디오의 해상도를 향상시킵니다. 저해상도 콘텐츠를 고품질로 변환합니다.",
        price: "유료",
        rating: 4.6,
        tags: ["해상도향상", "품질개선", "확대"],
        features: ["이미지 업스케일", "비디오 업스케일", "품질 개선"]
    },
    {
        id: 33,
        name: "Skin Enhancer",
        category: "tools",
        icon: "✨",
        description: "포함물 없는 자연스러운 피부 텍스처를 만듭니다. 초상화와 뷰티 콘텐츠에 완벽합니다.",
        price: "유료",
        rating: 4.8,
        tags: ["피부처리", "뷰티", "자연스러운", "초상화"],
        features: ["자연스러운 피부", "세부 개선", "빠른 처리"]
    },
    {
        id: 34,
        name: "Motion Control",
        category: "tools",
        icon: "🎬",
        description: "캐릭터의 행동과 표현을 정확하게 제어하여 최대 30초의 비디오를 생성합니다.",
        price: "유료",
        rating: 4.8,
        tags: ["비디오생성", "캐릭터제어", "표현제어"],
        features: ["행동 제어", "표현 제어", "30초 비디오"]
    },
    {
        id: 35,
        name: "Face Swap",
        category: "tools",
        icon: "🎭",
        description: "이미지와 비디오에서 얼굴을 바꿉니다. 재미있는 영상 콘텐츠를 쉽게 만들 수 있습니다.",
        price: "유료",
        rating: 4.5,
        tags: ["얼굴교환", "재미있는", "엔터테인먼트"],
        features: ["얼굴 교환", "고품질", "빠른 처리"]
    },
    {
        id: 36,
        name: "Virality Predictor",
        category: "tools",
        icon: "📊",
        description: "비디오의 바이럴 가능성, 훅 스코어 및 보유율을 예측합니다. 콘텐츠 최적화에 도움을 줍니다.",
        price: "유료",
        rating: 4.6,
        tags: ["분석", "예측", "바이럴", "참여도"],
        features: ["바이럴 예측", "훅 스코어", "보유율 분석"]
    },
    {
        id: 37,
        name: "Color Grading",
        category: "tools",
        icon: "🎨",
        description: "비디오의 색상을 조정하고 전문적인 색상 등급을 적용합니다.",
        price: "유료",
        rating: 4.6,
        tags: ["색상조정", "컬러그래딩", "영화급"],
        features: ["색상 조정", "프리셋", "고급 제어"]
    },
    {
        id: 38,
        name: "Edit Image",
        category: "tools",
        icon: "🖌️",
        description: "이미지 내 특정 부분을 선택하여 편집합니다. 인페인팅 기술로 자연스럽게 수정합니다.",
        price: "유료",
        rating: 4.7,
        tags: ["이미지편집", "인페인팅", "정밀제어"],
        features: ["브러시 편집", "인페인팅", "정밀 제어"]
    },
    {
        id: 39,
        name: "Edit Video",
        category: "tools",
        icon: "✂️",
        description: "고급 비디오 편집 기능. 다양한 효과와 전환을 적용할 수 있습니다.",
        price: "유료",
        rating: 4.6,
        tags: ["비디오편집", "효과", "전환", "고급"],
        features: ["고급 편집", "효과 적용", "전환"]
    },
    {
        id: 40,
        name: "Riffusion",
        category: "audio",
        icon: "🎧",
        description: "텍스트와 이미지 프롬프트로 음악을 생성하는 오픈소스 도구. 자유도가 높습니다.",
        price: "무료",
        rating: 4.3,
        tags: ["음악생성", "오픈소스", "무료", "커스터마이징"],
        features: ["무료 사용", "오픈소스", "커스터마이징"]
    }
];

let selectedTools = [];
let currentCategory = "all";
let searchQuery = "";

// DOM Elements
const toolsGrid = document.getElementById("toolsGrid");
const searchInput = document.getElementById("searchInput");
const freeFilter = document.getElementById("freeFilter");
const paidFilter = document.getElementById("paidFilter");
const compareModal = document.getElementById("compareModal");
const closeCompare = document.getElementById("closeCompare");
const noResults = document.getElementById("noResults");
const navButtons = document.querySelectorAll(".nav-btn");

// 카테고리 매핑 (한글 표시 이름)
const categoryLabels = {
    all: "전체",
    image: "이미지",
    video: "비디오",
    audio: "오디오",
    avatar: "아바타",
    text: "텍스트",
    tools: "도구"
};

// 초기화
function init() {
    renderTools();
    setupEventListeners();
}

// 이벤트 리스너 설정
function setupEventListeners() {
    searchInput.addEventListener("input", (e) => {
        searchQuery = e.target.value.toLowerCase();
        renderTools();
    });

    freeFilter.addEventListener("change", renderTools);
    paidFilter.addEventListener("change", renderTools);

    navButtons.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            navButtons.forEach((b) => b.classList.remove("active"));
            e.target.classList.add("active");
            currentCategory = e.target.dataset.category;
            renderTools();
        });
    });

    closeCompare.addEventListener("click", () => {
        compareModal.classList.remove("active");
    });

    compareModal.addEventListener("click", (e) => {
        if (e.target === compareModal) {
            compareModal.classList.remove("active");
        }
    });
}

// 스마트 검색 기능 - 키워드 매칭 스코어 계산
function getSearchMatchScore(tool, query) {
    if (!query) return 1;

    let score = 0;
    const queryTerms = query.split(" ");

    queryTerms.forEach((term) => {
        // 이름과 정확히 일치하면 최고점
        if (tool.name.toLowerCase().includes(term)) score += 10;
        // 설명에 포함되면
        if (tool.description.toLowerCase().includes(term)) score += 5;
        // 태그에 포함되면
        if (tool.tags.some(tag => tag.toLowerCase().includes(term))) score += 8;
        // 기능에 포함되면
        if (tool.features.some(feature => feature.toLowerCase().includes(term))) score += 6;
    });

    return score;
}

// 도구 필터링
function getFilteredTools() {
    return tools.filter((tool) => {
        const categoryMatch =
            currentCategory === "all" || tool.category === currentCategory;

        // 스마트 검색 - 검색어가 없으면 true, 있으면 스코어 > 0
        const searchMatch = searchQuery === "" || getSearchMatchScore(tool, searchQuery) > 0;

        const isFreeChecked = freeFilter.checked;
        const isPaidChecked = paidFilter.checked;

        let priceMatch = true;
        if (isFreeChecked || isPaidChecked) {
            priceMatch =
                (isFreeChecked && tool.price.includes("무료")) ||
                (isPaidChecked && !tool.price.includes("무료"));
        }

        return categoryMatch && searchMatch && priceMatch;
    }).sort((a, b) => {
        // 검색 결과 정렬 - 스코어가 높은 것부터
        if (searchQuery) {
            const scoreA = getSearchMatchScore(a, searchQuery);
            const scoreB = getSearchMatchScore(b, searchQuery);
            return scoreB - scoreA;
        }
        return 0;
    });
}

// 도구 렌더링
function renderTools() {
    const filtered = getFilteredTools();
    toolsGrid.innerHTML = "";

    if (filtered.length === 0) {
        noResults.style.display = "block";
        return;
    }

    noResults.style.display = "none";

    filtered.forEach((tool) => {
        const card = document.createElement("div");
        card.className = "tool-card";
        card.innerHTML = `
            <div class="tool-card-header">
                <div class="tool-icon">${tool.icon}</div>
                <div class="tool-name">${tool.name}</div>
            </div>
            <p class="tool-description">${tool.description}</p>
            <div class="tool-meta">
                <span class="tool-price ${tool.price.includes('무료') ? 'free' : ''}">${tool.price}</span>
                <div class="tool-rating">
                    ${Array.from({ length: Math.round(tool.rating) })
                        .map(() => '<span class="star">⭐</span>')
                        .join("")}
                    <span style="font-size: 12px; color: #9ca3af; margin-left: 4px;">${tool.rating}</span>
                </div>
            </div>
            <div class="tool-tags">
                ${tool.tags.map((tag) => `<span class="tool-tag">${tag}</span>`).join("")}
            </div>
            <div class="tool-actions">
                <button class="tool-btn primary" onclick="openTool(${tool.id})">자세히</button>
                <button class="tool-btn compare" onclick="toggleCompare(${tool.id})" title="비교에 추가">⇄</button>
            </div>
        `;
        toolsGrid.appendChild(card);
    });
}

// 도구 열기
function openTool(id) {
    const tool = tools.find((t) => t.id === id);
    if (tool) {
        alert(`${tool.name}\n\n${tool.description}\n\n가격: ${tool.price}\n평점: ${tool.rating}/5`);
    }
}

// 비교에 추가/제거
function toggleCompare(id) {
    const index = selectedTools.indexOf(id);
    if (index > -1) {
        selectedTools.splice(index, 1);
    } else {
        if (selectedTools.length < 4) {
            selectedTools.push(id);
        } else {
            alert("최대 4개까지 비교할 수 있습니다.");
            return;
        }
    }

    if (selectedTools.length > 0) {
        showCompare();
    } else {
        compareModal.classList.remove("active");
    }
}

// 비교 표시
function showCompare() {
    const compareTable = document.getElementById("compareTable");
    const selectedToolsList = selectedTools
        .map((id) => tools.find((t) => t.id === id))
        .filter(Boolean);

    let html = `
        <table>
            <thead>
                <tr>
                    <th>항목</th>
                    ${selectedToolsList
                        .map((tool) => `<th>${tool.name}</th>`)
                        .join("")}
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><strong>설명</strong></td>
                    ${selectedToolsList
                        .map((tool) => `<td>${tool.description}</td>`)
                        .join("")}
                </tr>
                <tr>
                    <td><strong>가격</strong></td>
                    ${selectedToolsList
                        .map((tool) => `<td>${tool.price}</td>`)
                        .join("")}
                </tr>
                <tr>
                    <td><strong>평점</strong></td>
                    ${selectedToolsList
                        .map((tool) => `<td>${tool.rating}/5 ⭐</td>`)
                        .join("")}
                </tr>
                <tr>
                    <td><strong>주요 기능</strong></td>
                    ${selectedToolsList
                        .map(
                            (tool) =>
                                `<td>${tool.features.join(", ")}</td>`
                        )
                        .join("")}
                </tr>
                <tr>
                    <td><strong>태그</strong></td>
                    ${selectedToolsList
                        .map(
                            (tool) =>
                                `<td>${tool.tags.join(", ")}</td>`
                        )
                        .join("")}
                </tr>
            </tbody>
        </table>
    `;

    compareTable.innerHTML = html;
    compareModal.classList.add("active");
}

// 앱 시작
init();
