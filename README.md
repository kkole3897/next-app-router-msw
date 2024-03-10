# next-app-router-msw

 MSW와 Next.js의 호환성 이슈 확인 및 몇가지 시도에 대해 다룸.

내용은 각 branch에서 확인할 수 있다.

- next-app-router: next@14 app router, msw@2 버전
  - broswer 환경에서만 문제 없이 동작 확인
  - 별도의 mocking server 세팅으로 ssr에서 api 요청 처리 확인 가능
- page-router-latest: next@14 page router, msw@2 버전
  - app router가 출시된 next@13 이후엔 app router와 page router 모두 동일한 이슈 발생 확인 가능
- next-12: next@12, msw@1 버전
  - 호환성 이슈 없음 확인 가능
  