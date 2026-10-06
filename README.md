# 행복 우체통

행복기숙사 주간 메시지 이벤트 1차 웹 시안입니다.

## 현재 포함
- 학생용 편지 작성 화면
- 인스타그램 아이디 필수 입력
- 편지 300자 제한
- 개인정보 수집 동의 체크
- 제출 완료 모달
- 모바일 반응형 디자인

## 다음 단계
Firebase를 연결해 실제 메시지를 저장하고, 관리자 인증 페이지에서만 편지와 인스타그램 아이디를 확인하도록 구현합니다.

권장 데이터 구조:
- messages/{messageId}
  - instagramId
  - message
  - createdAt
  - selected (false)
  - prizeSent (false)
