# Claude Code 블로그 자동작성 시스템

## 프로젝트 개요

**목표**: Naver 블로그용 SEO 최적화 글 + 이미지 자동 생성  
**워크플로우**: Researcher → Writer → Assembler (순차 호출)  
**메인 역할**: 에이전트 호출 분배 및 진행상황 관리 (직접 작성 X)

---

## 폴더 구조

```
D:\workspace\blog\
├── Claude.md (이 파일 - 메인 지침)
├── guide/
│   ├── style-guide.md (블로그 톤 규칙)
│   ├── SEO-guide.md (Naver 블로그 최적화)
│   ├── writer-guide.md (라이터 종합 지침)
│   └── image-maker.md (이미지 생성 규칙)
├── agent/
│   ├── researcher.md (리서처 지침)
│   ├── writer.md (라이터 지침)
│   └── assembler.md (어셈블러 지침)
└── output/
    ├── draft.md (최종 글)
    ├── draft_final.md (이미지 경로 포함)
    └── images/
        ├── img_01.png ~ img_04.png
        └── thumbnail.png
```

---

## 3-Phase 워크플로우

### Phase 1: Researcher (리서처)
**역할**: 신뢰도 높은 출처에서 정보 수집  
**입력**: 글 주제  
**출력**: `research-result.md` (10+ 검증된 정보)  
**진행상황**: `[▓▓▓░░░░░░] 리서치 진행 중...`

**세부 작업**:
- 5개 이상 신뢰 출처 수집
- 정보 검증 (2개 이상 출처 교차확인)
- 한국어로 이해하기 쉬운 형식으로 정리

---

### Phase 2: Writer (라이터)
**역할**: 리서치 결과를 바탕으로 SEO 최적화 글 작성  
**입력**: `research-result.md` + 가이드들  
**출력**: `draft.md` (600+ 단어, SEO 최적화)  
**진행상황**: `[▓▓▓▓▓▓░░░░] 글 작성 진행 중...`

**세부 작업**:
- 20자 이내 제목
- 6-step 본문 구조 (요약 → 이미지 → 섹션3개 → 결론)
- 이미지 마커 삽입 ([이미지])
- 출처 링크 명기

**동시 진행**: Image-Maker (이미지 4개 + 썸네일 생성)

---

### Phase 3: Assembler (어셈블러)
**역할**: 글과 이미지 통합, 최종 게시용 파일 생성  
**입력**: `draft.md` + `images/` 폴더  
**출력**: `draft_final.md` (경로 정규화 완료)  
**진행상황**: `[▓▓▓▓▓▓▓▓▓░] 최종 조립 중...`

**세부 작업**:
- 이미지 마커 → 실제 경로로 치환
- 마크다운 문법 검증
- UTF-8 인코딩 확인
- 4가지 검수 기준 통과

---

## 메인의 책임

### DO ✅
```
1. 각 에이전트에 지침서 제공
2. 입출력 파일 경로 전달
3. 각 Phase 완료 후 진행상황 짧게 보고
4. 에이전트 간 데이터 이관

예: "[1/3] Researcher 완료 ✓ → Writer 시작..."
```

### DON'T ❌
```
1. 직접 글 작성
2. 이미지 생성
3. 리서치 수행
4. 파일 수정 (조립 제외)
```

---

## 실행 흐름

```
메인 실행
  ↓
Researcher 호출
  → research-result.md 생성
  ↓ (진행상황 보고)
Writer + ImageMaker 호출 (병렬)
  → draft.md 생성
  → images/ 폴더 생성
  ↓ (진행상황 보고)
Assembler 호출
  → draft_final.md 생성
  ↓
[완료] 게시용 파일 준비 완료 ✓
```

---

## 핵심 가이드 참조

| 에이전트 | 참고 가이드 |
|---------|----------|
| Researcher | `researcher.md` |
| Writer | `writer-guide.md` + `style-guide.md` + `SEO-guide.md` |
| ImageMaker | `image-maker.md` |
| Assembler | `assembler.md` |

---

## 진행상황 보고 형식

```
[1/3] Researcher 완료 ✓
      → research-result.md (10 features documented)

[2/3] Writer & ImageMaker 완료 ✓
      → draft.md (689 words, 16-char title)
      → images/ (img_01~04 + thumbnail)

[3/3] Assembler 완료 ✓
      → draft_final.md ready for publishing
```

---

**메인은 오케스트레이션만 - 각 단계는 전문 에이전트가 담당**
