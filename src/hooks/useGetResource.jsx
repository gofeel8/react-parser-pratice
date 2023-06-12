import { useEffect } from "react";
import { useQueries } from "@tanstack/react-query";
import { get } from "../lib/request";

export default function useGetHTML(filesPath) {
  const arr = Object.keys(filesPath).reduce((acc, cur) => {
    return [
      ...acc,
      {
        queryKey: [cur],
        queryFn: () => get(filesPath[cur]),
        staleTime: Infinity,
        cacheTime: Infinity,
        select: (data) => {
          return { html: data, queryKey: [cur] };
        },
      },
    ];
  }, []);

  const results = useQueries({
    queries: arr,
  });

  const isLoading = results.some((query) => query.isLoading);

  if (isLoading) return null;

  return results.reduce((acc, cur) => {
    const key = cur.data.queryKey[0];
    return {
      ...acc,
      [key]: cur.data.html,
    };
  }, {});
}

export const useGetCSS = (path) => {
  useEffect(() => {
    if (!path) return;
    const fileref = document.createElement("link");
    fileref.rel = "stylesheet";
    fileref.type = "text/css";
    fileref.href = path;
    document.getElementsByTagName("head")[0].appendChild(fileref);
  }, [path]);
};

// const tmp1 = {
//   intro: `
//   <div class="intro">
//     <div class="title">나쁜 습관을 바로잡으면<br />건강이 개선됩니다.</div>
//     <img src="https://anchorwire.huraydev.net/commonweb/config/ehp/base/intro/emoji.png" alt="emoji" width="96" height="96" />
//     <div class="description">
//       <p>
//         설문을 통해 나의 건강상태를 확인하고,
//         <br />
//         개선할 습관이 무엇인지 알아보아요!
//       </p>
//       <p>
//         결과에 따라 나만의 관리목표를 설정하면
//         <br />
//         헬스매니저가 <span data-key="userName">고객명</span>님께 맞는 건강관리
//         <br />
//         서비스를 제공합니다.
//       </p>
//     </div>
//     <div class="question">
//       <img src="https://anchorwire.huraydev.net/commonweb/config/ehp/base/intro/survey.png" alt="emoji" width="48" height="48" />
//       <p>간편한 설문으로 3분이면 충분해요!<br />이제 시작해 볼까요?</p>
//     </div>
//     <div class="tip">
//       "건강위험분석 설문은 언제든지 다시 이어하실 수 있습니다."
//     </div>
//     <button data-key="surveyStart">설문시작</button>
//   </div>
//   `,
//   query: `
//   <div class="main">
//     <div><button class="exitButton" data-key="exitButton"><</button></div>
//     <div class="title" data-key="title"></div>
//     <div class="progressMessage" data-key="progressMessage"></div>
//     <div class="progressBar" data-key="progressBar"></div>
//     <div class="steps">
//       <span data-key="nowStep"></span>
//       <span>/</span>
//       <span data-key="endStep"></span>
//     </div>
//     <div class="queries" data-key="queries"></div>
//     <div class="btnContainer">
//       <button data-key="prevBtn"></button>
//       <button data-key="nextBtn"></button>
//   </div>
//   <div class="modalWrapper none" data-key="modalWrapper">
//     <div class="modal">
//       <div class="modalContent" data-key="modalContent"></div>
//       <div class="modalBtnWrapper">
//         <button class="modalBtn" data-key="modalNo"></button>
//         <button class="modalBtn" data-key="modalYes"></button>
//       </div>
//     </div>
//   </div>
// `,
//   progressBar: {
//     default: `<span></span>`,
//     active: `<span class="active"></span>`,
//     complete: `<span class="complete"></span>`,
//   },
//   queryWrapper: `
//   <div class="queryTarget" data-key="queryTarget"></div>
//   <div class="queryTitle" data-key="queryTitle"></div>
//   <div class="queryHint" data-key="queryHint"></div>
//   <div class="options" data-key="options"></div>
//   `,
//   answer: {
//     checkbox: `
//       <input type="checkbox" data-key="inputTag"/>
//       <label class="checkboxLabel" data-key="inputLabel"></label>`,
//     textarea: `
//     <textarea data-key="inputTag"></textarea>
//     `,
//     input: `
//     <div class="inputWrapper">
//     <input data-key="inputTag"></input>
//     <label class="label" data-key="label"></label>
//     <span class="unit" data-key="unit"></span>
//     <p class="validate" data-key="validate"></p>
//     </div>
//     `,
//   },
//   interMission: `
//   <div class="interMissionContainer">
//     <img height="96" width="96" src="https://anchorwire.huraydev.net/commonweb/config/ehp/base/intermission/party.svg"></img>
//     <div class="progressBar" data-key="progressBar"></div>
//     <h1><span data-key="nowCategory"></span></br>평가설문이 끝났습니다.</h1>
//     <h2>이제 <span data-key="nextCategory"></span>에 대해 점검해 보겠습니다.</br>준비해주세요.</h2>
//     <button class="nextBtn" data-key="nextBtn">다음</button>
//   </div>
//   `,
// };

// const tmp2 = {
//   query: `
//     <div class="main">
//       <div><button class="exitButton" data-key="exitButton"><</button></div>
//       <div class="progressBar" data-key="progressBar"></div>
//       <div class="titleWrapper">
//         <div data-key="title"></div>
//         <div>
//           <span data-key="nowStep"></span>
//           <span>/</span>
//           <span data-key="endStep"></span>
//         </div>
//       </div>
//       <div class="queries" data-key="queries"></div>
//       <div class="btnContainer">
//         <button data-key="prevBtn"></button>
//         <button data-key="nextBtn"></button>
//       </div>
//     </div>
//     <div class="modalWrapper none" data-key="modalWrapper">
//       <div class="modal">
//         <div class="modalContent" data-key="modalContent"></div>
//         <div class="modalBtnWrapper">
//         <button class="modalBtn" data-key="modalNo"></button>
//         <button class="modalBtn" data-key="modalYes"></button>
//         </div>
//       </div>
//     </div>
//   `,
//   progressBar: {
//     default: `<span></span>`,
//     active: `<span class="active"></span>`,
//     complete: `<span class="complete"></span>`,
//   },
//   queryWrapper: `
//     <div class="queryTarget" data-key="queryTarget"></div>
//     <div class="queryTitle" data-key="queryTitle"></div>
//     <div class="queryHint" data-key="queryHint"></div>
//     <div class="options" data-key="options"></div>
//     `,
//   answer: {
//     checkbox: `
//         <input type="checkbox" data-key="inputTag"/>
//         <label class="checkboxLabel" data-key="inputLabel"></label>`,
//     textarea: `
//       <textarea data-key="inputTag"></textarea>
//       `,
//     input: `
//       <div class="inputWrapper">
//       <input data-key="inputTag"></input>
//       <label class="label" data-key="label"></label>
//       <span class="unit" data-key="unit"></span>
//       <p class="validate" data-key="validate"></p>
//       </div>
//       `,
//   },
//   interMission: `
//     <div class="interMissionContainer">
//       <img height="96" width="96" src="https://anchorwire.huraydev.net/commonweb/config/ehp/base/intermission/party.svg"></img>
//       <div class="progressBar" data-key="progressBar"></div>
//       <h1><span data-key="nowCategory"></span></br>평가설문이 끝났습니다.</h1>
//       <h2>이제 <span data-key="nextCategory"></span>에 대해 점검해 보겠습니다.</br>준비해주세요.</h2>
//       <button class="nextBtn" data-key="nextBtn">다음</button>
//     </div>
//     `,
// };
