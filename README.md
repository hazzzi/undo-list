# 🛑 오늘도 안 할 예정 (Undo 리스트)

> "하고 싶은 일은 많지만… 오늘은 **아무 것도 안 하기**로 했습니다."

**Undo 리스트**는 전통적인 To-do 앱의 반대예요.  
오늘 _안_ 할 일들을 적고, 실제로 안 했을 때 **"잘 안했다! 🎉"** 라는 축하를 받는  
**게으르지만 힙한 사람들을 위한 생산성 앱**입니다.

![Undo List Screenshot](https://via.placeholder.com/800x400/ed5bff/ffffff?text=🛑+오늘도+안+할+예정)

---

## ✨ 주요 기능

- 📝 **"오늘 안 할 일"을 자유롭게 작성**
- ✅ **안 했으면 체크!** → 축하 메시지가 뜹니다
- 🎉 **귀여운 애니메이션**과 감성 UI
- 📊 **실시간 통계**: 안 할 예정 vs 잘 안했음
- 🗃 **간단한 상태 관리**: 로컬 상태로만 관리되어 깔끔
- 🦥 **게으름 친화적**: 부담 없는 UX 설계

---

## 🧱 기술 스택

| 구성 요소 | 설명 |
|-----|---|
| **React 18** | UI 구성 (TypeScript) |
| **Zustand** | 초간단 상태 관리 |
| **Tailwind CSS** | 빠르고 유연한 감성 스타일링 |
| **Vite** | 번개같이 빠른 개발 서버 |
| **Pretendard** | 한국어 최적화 폰트 |

---

## 🚀 시작하기

### 1️⃣ 프로젝트 클론

```bash
git clone https://github.com/yourusername/undo-list.git
cd undo-list
```

### 2️⃣ 의존성 설치

```bash
npm install
```

### 3️⃣ 개발 서버 시작

```bash
npm run dev
```

브라우저에서 `http://localhost:3000`을 열어 앱을 확인하세요! 🎉

### 4️⃣ 빌드 및 배포

```bash
# 프로덕션 빌드
npm run build

# 빌드 결과 미리보기
npm run preview
```

---

## 📁 프로젝트 구조

```
undo-list/
├── src/
│   ├── App.tsx          # 메인 컴포넌트 (UI와 로직)
│   ├── store.ts         # Zustand 상태 관리
│   ├── main.tsx         # React 진입점
│   └── index.css        # Tailwind CSS + 커스텀 스타일
├── public/
│   └── favicon.svg      # 귀여운 파비콘
├── index.html           # 메인 HTML
├── tailwind.config.js   # Tailwind 설정
├── vite.config.ts       # Vite 설정
└── README.md           # 이 파일!
```

---

## 🎨 사용법

### 1. 안 할 일 추가하기
입력창에 "오늘 안 할 일"을 적고 **"안 하기 등록"** 버튼을 클릭하세요.

### 2. 잘 안했다고 체크하기
실제로 안 했다면 동그라미 버튼을 클릭해서 체크! 축하 메시지가 나타납니다.

### 3. 통계 확인하기
- **안 할 예정**: 아직 안 한 일들의 개수
- **잘 안했음**: 성공적으로 안 한 일들의 개수 🎉

### 4. 정리하기
완료된 항목들은 **"잘 안한 일들 정리하기"** 버튼으로 한 번에 정리할 수 있어요.

---

## 🌈 향후 계획

- [ ] `localStorage` 연동 (기록 유지)
- [ ] 공유 기능 (`?share=encodedList`)
- [ ] "안할 이유" 필드 추가
- [ ] 다크모드/극단적 귀찮음 모드
- [ ] PWA 지원 (오프라인에서도 게으르게!)
- [ ] 게으름 레벨 시스템
- [ ] 친구들과 게으름 경쟁

---

## 🤝 기여하기

게으름을 사랑하는 개발자들의 기여를 환영합니다! 

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/amazing-laziness`)
3. Commit your Changes (`git commit -m 'Add some amazing laziness'`)
4. Push to the Branch (`git push origin feature/amazing-laziness`)
5. Open a Pull Request

---

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다. 자세한 내용은 `LICENSE` 파일을 참조하세요.

---

## 🙏 감사인사

- **모든 게으른 사람들**에게 영감을 주셔서 감사합니다
- **Tailwind CSS** 팀의 아름다운 디자인 시스템
- **Zustand** 팀의 간단명료한 상태 관리
- **Vite** 팀의 번개같은 개발 경험

---

## 📞 연락처

프로젝트 링크: [https://github.com/hazzzi/undo-list](https://github.com/hazzzi/undo-list)

---

<div align="center">

**이 앱은 게으름을 인정하는 사람들에게 바칩니다.**  
**잘 안했다. 당신은 오늘도 멋졌어요.**  

*— Made with 💛 in Cursor*

![Footer](https://via.placeholder.com/600x100/f596ff/ffffff?text=🦥+Have+a+lazy+day!)

</div>
