## Demo Link  

#### [https://blogs-9bef6.web.app/](https://blogs-9bef6.web.app/)    

## 제작 기간 & 참여 인원
4월 30일 ~ 5월 3일 (4일)  
1인 개발


## 프로젝트 개요
인스타그램 그림 계정을 운영하면서 팔로워들과의 더 나은 소통을 기대하며 제작한 서비스 웹 페이지입니다. 

랜딩 페이지, 브랜드에 대한 설명과 핸드폰 배경화면 이미지, 인스타그램 gif 피드 아카이브와 gif, 배경화면을 자세히 볼 수 있는 상세 페이지, 소통을 위한 페이지 등 사용자들이 접근 가능한 페이지를 제작하였으며, 추가로admin 페이지를 두어 주인 계정으로 로그인하고 그림을 업데이트 할 수 있는 페이지를 구현하였습니다.

React, Redux 프로젝트입니다.


## 주요 기능

반응형 웹 디자인을 적용하였습니다.

사용자가 웹페이지 방문시, 해당 기기의 IP 정보와 도시 정보를 얻기 위해 axios 비동기 통신으로 https://geolocation-db.com/json/ 사이트의 api를 사용할 수 있도록 구현되었습니다.

홈 버튼과 메뉴 Nav 버튼을 구현하였으며, 모바일 접근시, 햄버거 메뉴 아이콘 클릭을 통해 다른 페이지 접근이 가능하도록 구현하였습니다. 

랜딩 페이지에 각 페이지의 최신 업데이트 데이터가 출력되도록 정렬하였습니다.
이미지 배치는 grid로 구현되었습니다.

### /asked 페이지
- textarea에 글 작성시 content가 있으면 등록 버튼이 활성화되도록 구현하였습니다.

- 글 작성후 홈페이지로 돌아가며, 최신 글은 파이어베이스 DB에 저장후 즉각 업데이트 되도록 구현하였습니다.

- 답글이 달리지 않을 경우 아이콘은 회색이며, 답글이 달리면 아이콘에 색상이 들어오도록 구현하였습니다.

### /adimin 페이지

- DB를 이용한 로그인 기능을 구현하였으며, DB에 저장되어 있는 계정과 id, pw를 비교후 동일한 계정 정보를 입력한 경우 업데이트 페이지로 이동하도록 구현하였습니다.

- 업데이트 페이지에서는 파일 업데이트 기능을 구현하였습니다. input 태그의 타입속성을 file로 하여 업로드 된 이미지 파일은 firebase firestore에 저장되며, 해당 파일은 firebase DB에 이름과 URL이 저장되어, 사용자가 랜딩페이지, 배경화면 페이지, 아카이브 페이지 접근시 DB에 저장된 URL을 참고하여 firestore 이미지 데이터를 가져와 출력합니다.

- 상세 이미지 페이지의 경우 각 이미지의 제목 정보를 파라미터로 사용하여 접근할 수 있도록 구현하였습니다.

## 기술 스택
-  react, redux, redux-thunk
-  react-redux, styled-components, react-icons, react-router-dom, firebase, axios

## 회고
프로젝트 배포 이후 총 100여건의 방문이 있었습니다. 해당 프로젝트 배포를 하면서 페이지 홍보 피드를 함께 올렸었고, 순간적으로 방문자가 7~8명만 되어도 페이지가 느려졌는데, 느려진 원인으로는 프리티어 호스팅의 물리적인 트래픽 처리 한계가 핵심적이고, 이외에 최적화 되지 못한 코드로 예상하고 있습니다. 서버 트래픽과 요구사항의 빠른 처리를 위한 별개의 백엔드 로직과 추가적인 최적화 코드가 필요합니다.
