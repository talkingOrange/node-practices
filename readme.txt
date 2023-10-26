Node Practices

0. node 프로젝트(application, library) 만들기
   1) 프로젝트 생성: mkdir로 디렉터리 만들기 (mkdir project-ex01)
   2) 프로젝트 이동: cd 프로젝트 디렉토리명 (cd project-ex01)
   3) 프로젝트 초기화: 프로젝트 메니페스트 파일(package.json)을 생성
      [project-ex01]$ npm init -y

1. 패키지
    - 완전한 어플리케이션(babel, webpack, nodemon, Lint, ...)
    - 프로젝트에서 사용하는 라이브러리 모듈(module)

2. 의존성
    - 개발하는 프로젝트(애플리케이션, 라이브러리)에서 설치하는 패키지
    - 일반 의존성: 개발하고 있는 프로젝트에서 사용하는 패키지로 꼭 빌드와 배포에 포함되어야 한다.
    - 개발 의존성: 개발에 필요하거나 도움이 되는 패키지로 빌드와 배포에 포함 되지 않는다.

3. 패키지 설치
    - 전역 설치
    - 지역 설치
    - 패키지 설치
    $ npm i ejs [지역, 일반] : EJS를 사용하면 HTML 템플릿 안에 JavaScript 코드를 삽입하여 동적 데이터를 표시할 수 있다.
        ex.   <h1>Welcome to <%= username %>'s Profile</h1>
    $ npm i -D nodemon [지역, 개발] 
    $ npm i -g gulp [전역, 일반] :  웹 개발 작업을 자동화하는 도구로, 프로젝트의 빌드, 파일 압축, 이미지 최적화, CSS 및 JavaScript 파일의 번들링 등과 같은 작업을 효율적으로 처리
    $ npx gulp --version

    - 패키지 삭제
    $ npm un ejs [지역]
    $ npm un nodemon [지역]
    $ npm un -g gulp [전역]


5. Modules
    1) 코어 모듈: node에서 제공하는 모듈(fs, os, process, http, ...)
    2) npm 모듈: npm을 통해서 node_modules에 설치하고 사용하는 모듈 
    3) 파일 모듈: 파일 경로로 불러온 모듈안에 함수나 객체를 사용한다.
    
6. 서버 프로그래밍 잠깐 맛보기
