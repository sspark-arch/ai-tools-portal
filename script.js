// AI Tools 데이터
const tools = [
    // 음악/오디오
    {
        id: 1,
        name: "Suno",
        category: "audio",
        icon: "🎵",
        description: "AI로 음악을 생성하는 플랫폼. 가사를 입력하면 완전한 곡을 만들어냅니다.",
        price: "유료",
        rating: 4.8,
        tags: ["음악생성", "보컬", "작곡"],
        features: ["가사 기반 생성", "다양한 장르", "빠른 생성"]
    },
    {
        id: 2,
        name: "AIVA",
        category: "audio",
        icon: "🎼",
        description: "영화, 게임, 팟캐스트용 AI 음악 작곡가. 전문가 수준의 음악을 빠르게 생성합니다.",
        price: "유료",
        rating: 4.6,
        tags: ["작곡", "영상음악", "배경음악"],
        features: ["자동 작곡", "장르 선택", "커스터마이징"]
    },
    {
        id: 3,
        name: "iZotope",
        category: "audio",
        icon: "🎙️",
        description: "오디오 마스터링과 믹싱을 위한 AI 도구. 전문가 수준의 사운드를 쉽게 만듭니다.",
        price: "유료",
        rating: 4.7,
        tags: ["마스터링", "믹싱", "편집"],
        features: ["자동 마스터링", "노이즈 제거", "AI 분석"]
    },
    {
        id: 4,
        name: "ElevenLabs",
        category: "audio",
        icon: "🗣️",
        description: "자연스러운 음성 합성 AI. 여러 언어와 톤의 보이스를 생성합니다.",
        price: "무료/유료",
        rating: 4.9,
        tags: ["음성합성", "나레이션", "다국어"],
        features: ["자연스러운 음성", "다양한 톤", "실시간 생성"]
    },

    // 이미지/비디오
    {
        id: 5,
        name: "Midjourney",
        category: "visual",
        icon: "🎨",
        description: "텍스트 설명으로 고품질 이미지를 생성하는 AI 도구. 창의적인 이미지 생성에 최적화.",
        price: "유료",
        rating: 4.9,
        tags: ["이미지생성", "디자인", "창의성"],
        features: ["고품질 생성", "세부 조정", "빠른 처리"]
    },
    {
        id: 6,
        name: "Runway",
        category: "visual",
        icon: "🎬",
        description: "AI 영상 편집 도구. 텍스트로 영상을 생성하고 편집할 수 있습니다.",
        price: "무료/유료",
        rating: 4.7,
        tags: ["영상생성", "편집", "특수효과"],
        features: ["영상 생성", "배경 제거", "프레임 보간"]
    },
    {
        id: 7,
        name: "D-ID",
        category: "visual",
        icon: "👤",
        description: "스크립트에서 AI 앵커 영상을 생성합니다. 프레젠테이션과 교육용 최적화.",
        price: "유료",
        rating: 4.6,
        tags: ["영상생성", "아바타", "프레젠테이션"],
        features: ["AI 아바타", "다양한 배경", "자동 생성"]
    },
    {
        id: 8,
        name: "Adobe Firefly",
        category: "visual",
        icon: "✨",
        description: "Adobe의 생성 AI. Photoshop과 통합되어 강력한 편집 기능을 제공합니다.",
        price: "유료",
        rating: 4.8,
        tags: ["이미지생성", "편집", "Adobe"],
        features: ["Photoshop 통합", "빠른 생성", "정밀 편집"]
    },
    {
        id: 9,
        name: "Synthesia",
        category: "visual",
        icon: "🎞️",
        description: "텍스트에서 프로페셔널 비디오를 생성합니다. 비용 효율적인 영상 제작.",
        price: "유료",
        rating: 4.5,
        tags: ["영상제작", "프레젠테이션", "교육"],
        features: ["빠른 제작", "다양한 아바타", "자동 자막"]
    },
    {
        id: 10,
        name: "HeyGen",
        category: "visual",
        icon: "🤳",
        description: "AI 아바타로 영상을 생성하는 플랫폼. 마케팅과 교육용으로 완벽합니다.",
        price: "무료/유료",
        rating: 4.6,
        tags: ["영상생성", "아바타", "마케팅"],
        features: ["아바타 선택", "다국어", "빠른 생성"]
    },

    // 텍스트/작성
    {
        id: 11,
        name: "ChatGPT",
        category: "text",
        icon: "💬",
        description: "OpenAI의 대형 언어 모델. 텍스트 작성, 편집, 아이디어 생성에 뛰어납니다.",
        price: "무료/유료",
        rating: 4.9,
        tags: ["텍스트생성", "작성", "아이디어"],
        features: ["대화형", "맥락 이해", "창의적 작성"]
    },
    {
        id: 12,
        name: "Claude",
        category: "text",
        icon: "🤖",
        description: "Anthropic의 고급 AI 모델. 복잡한 작성과 분석에 최적화.",
        price: "무료/유료",
        rating: 4.8,
        tags: ["텍스트생성", "분석", "작성"],
        features: ["깊이있는 분석", "창의적 작성", "코드 작성"]
    },
    {
        id: 13,
        name: "Perplexity",
        category: "text",
        icon: "🔍",
        description: "검색 기반 AI 어시스턴트. 최신 정보와 출처를 함께 제공합니다.",
        price: "무료/유료",
        rating: 4.5,
        tags: ["검색", "정보검색", "리서치"],
        features: ["실시간 정보", "출처 제시", "깊이있는 답변"]
    },
    {
        id: 14,
        name: "Copy.ai",
        category: "text",
        icon: "✍️",
        description: "마케팅 콘텐츠 작성 전문 AI. 소셜 미디어부터 이메일까지 다양한 콘텐츠 생성.",
        price: "무료/유료",
        rating: 4.4,
        tags: ["마케팅", "콘텐츠", "카피라이팅"],
        features: ["템플릿 제공", "다양한 톤", "빠른 생성"]
    },

    // 추가 도구들
    {
        id: 15,
        name: "Jasper",
        category: "text",
        icon: "📝",
        description: "브랜드 음성을 유지하면서 콘텐츠를 생성하는 AI. 장문의 콘텐츠 작성에 최적.",
        price: "유료",
        rating: 4.6,
        tags: ["콘텐츠", "브랜드", "마케팅"],
        features: ["브랜드 가이드", "장문 작성", "팀 협업"]
    },
    {
        id: 16,
        name: "Riffusion",
        category: "audio",
        icon: "🎧",
        description: "텍스트와 이미지 프롬프트로 음악을 생성하는 오픈소스 도구.",
        price: "무료",
        rating: 4.3,
        tags: ["음악생성", "오픈소스", "무료"],
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

// 도구 필터링
function getFilteredTools() {
    return tools.filter((tool) => {
        const categoryMatch =
            currentCategory === "all" || tool.category === currentCategory;
        const searchMatch =
            tool.name.toLowerCase().includes(searchQuery) ||
            tool.description.toLowerCase().includes(searchQuery);

        const isFreeChecked = freeFilter.checked;
        const isPaidChecked = paidFilter.checked;

        let priceMatch = true;
        if (isFreeChecked || isPaidChecked) {
            priceMatch =
                (isFreeChecked && tool.price.includes("무료")) ||
                (isPaidChecked && !tool.price.includes("무료"));
        }

        return categoryMatch && searchMatch && priceMatch;
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
