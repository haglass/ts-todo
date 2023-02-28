# Getting Started with Create React App

- 개인 프로필 사이트 제작
  기본형 : (React 버전 - 다음주 월, 화, 수)

- typeScript
  D: student/이름/tstest 폴더 생성

  신규 
    npx create-react-app ./  --template typescript


 터미널 관련 안내
   powershell(윈도우용)  : 사용하지 않기
   git bash(리눅스/맥용) : 사용하기


  yarn 설치 (-g) 터미널 : git bash
    npm install --global yarn
    yarn --version
  
 
  파일명.js  : js

  export default function A() {
      let name = "홍길동"
      return name
  }

  파일명.jsx : 컴포넌트(html 형태) 리턴.js  

  export default function A() {
      let name = "홍길동"
      return (<div>{name}</div>)
  }

  파일명.ts  :  js 파일 리턴

  export default function A() {
      let name:string = "홍길동"
      return name
  }

  파일명.tsx : jsx 리턴

  export default function A() {
      let name:string = "홍길동"
      return (<div>{name}</div>)
  }

   

  내가 기존에 React 로 프로젝트 작업
  - 17버전 :  typeScript 버전 존재, 정리


  yarn add     facebook 만듦      (js 설치)
  npm  install 과 같다. (js 설치)


- 1. 기초 Todo 정도
- 2. 기존 React 에 typeScript 적용
- Next.js
- GraphQl
- redux-sagar


- 개인 포트폴리오 추가 및 정리 (저녁)
  클론코딩(2) > React 버전 추가 코딩


  Type 을 적어준다. 끝!!!
  string...
  {}
  객체일떄 타입(형식)의 interface / type


  props 에 type 적용하기
  상위 하위로 전달합니다.

  <App>
    retrun <Add aaa="5"></Add>  
     retrun { Add({aaa:5})}  
  </App>

A.tsx
  interface IProps {
    aaa:string | number
  }
  type PropsType {
    aaa:string | number
  }
  export function  Add (props:PropsType)

  props.aaa


  src/TodoList.tsx
  src/TodoItem.tsx

  interface 
  type = {}
  props ====> { }

axis 에서 header 가 전송이 안되는 문제 체크해보기.



props 유효성 검사
- 컴포넌트에 사용할 수 있는 속성 검사

월, 화 보충

목요일 협업 환경 설정
(vscode, eslint, prettier 대충 3개조 - 6명 협업)
수료시 포폴 개인사이트 목요일 확인 

src/Calc.tsx 생성 계산기 컴퍼넌트
src/App2.tsx 생성

// props 의 유효성 검사 라이브러리
yarn add prop-type


 React 18,
 TypeScript
 emotion
 Ant.design
 localStorage

 ts-todo 
 타입스크립트를 이용한 일정 관리
 git bash 터미널

 npx create-react-app ./ --template typescript

 1. 프로젝트 설계

 - 상태 데이터 (할일)
  [
    { 
      uid    : string(날짜),
      title  : string(제목),
      body   : string(내용),
      done   : boolean(수행여부),
      sticker : string(스티커이미지), 
      date : string(날짜),
    }
  ]

 - 기능 정의

  추가기능
  addTodo(title:string, body:string, date:string, sticker:string, done:boolean=false) void

  수정기능
  updateTodo(todo:TodoType) void 

  삭제기능
  deleteTodo(todo:TodoType) void

  필터기능
  sortTodo (sortType:string) Array<TodoType> 

  목록기능

- 컴포넌트 종류

 : 상태업데이트 역할(제어/컨트롤컴포넌트), 
   AppContainer.tsx (상태관리 CRUD 전담)

 : 상태보여주기 역할(비제어/프레젠트컴포넌트), 

   App.tsx (페이지 컴포넌트)

   Input.tsx(할일 입력 컴포넌트)

   List.tsx(할일 목록 출력 컴포넌트)
   
   ListItem.tsx(할일 목록 컴포넌트)