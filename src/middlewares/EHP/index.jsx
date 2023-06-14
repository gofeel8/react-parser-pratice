import React, { useEffect, useState } from "react";
import parse from "html-react-parser";
import useSurveyData from "../../hooks/useSurveyData";
import { useSearchParams, useParams, useNavigate } from "react-router-dom";
import useGetHTML, { useGetCSS } from "../../hooks/useGetResource";
import { parseOption } from "../../lib/parse";
import { filesPath, cssPath } from "./constant";
import { validateValue, isActiveNextBtn } from "./lib";

export default function useMiddleWare() {
  const [dataSet, setDataSet] = useState();
  const [surveyData, setSurveyData] = useSurveyData();
  const [searchParams, setSearchParams] = useSearchParams();
  const queryIdx = Number(searchParams.get("queryIdx"));
  const { page } = useParams();
  const navigate = useNavigate();
  const htmlSet = useGetHTML(filesPath);
  useGetCSS(cssPath);

  useEffect(() => {
    if (page === "query" && surveyData) {
      const nowQuestion = surveyData.configs[queryIdx].questions[0];
      const contents = surveyData.configs[queryIdx].contents;
      const tmp = {
        title: { text: surveyData.title },
        exitButton: {
          onClick: () => {
            const modal = document.querySelector(".modalWrapper");
            if (modal) {
              modal.classList.remove("none");
            }
          },
        },
        modalWrapper: {
          onClick: () => {
            const modal = document.querySelector(".modalWrapper");
            if (modal) {
              modal.classList.add("none");
            }
          },
        },
        modalContent: {
          text: "설문을 완료해야\n앱을 사용할 수 있습니다.\n정말 종료하시겠습니까?",
        },
        modalNo: {
          text: "아니요",
          onClick: () => {
            const modal = document.querySelector(".modalWrapper");
            if (modal) {
              modal.classList.add("none");
            }
          },
        },
        modalYes: {
          text: "네",
          onClick: () => {
            const modal = document.querySelector(".modalWrapper");
            if (modal) {
              navigate("/ehp/survey/intro");
            }
          },
        },
        progressMessage: { text: nowQuestion.question },
        progressBar: {
          nowProgress: queryIdx + 1,
          endProgress: surveyData.configs.length,
        },
        nowStep: { text: queryIdx + 1 },
        endStep: { text: surveyData.configs.length },
        prevBtn: {
          text: "이전",
          class: queryIdx === 0 ? "hidden" : undefined,
          onClick: () => {
            searchParams.set("queryIdx", queryIdx - 1);
            setSearchParams(searchParams);
          },
        },
        nextBtn: {
          text: "다음",
          disabled: !isActiveNextBtn(nowQuestion),
          onClick: () => {
            if (queryIdx + 1 < surveyData.configs.length) {
              searchParams.set("queryIdx", queryIdx + 1);
              setSearchParams(searchParams);
            } else {
              navigate("/ehp/survey/interMission");
            }
          },
        },
        queries: [
          {
            queryId: nowQuestion.questionId,
            queryTitle: { text: nowQuestion.question },
            queryTarget: {
              text: nowQuestion.contents.filter(
                (item) => item.type === "LABEL"
              )[0].content,
            },
            queryHint: {
              text:
                contents.filter((item) => item.type === "GUIDE")[0]?.content ??
                "",
            },
            options:
              nowQuestion.type === "OBJECTIVE"
                ? nowQuestion.objectiveOptions.map((item) => {
                    return {
                      optionId: item.optionId,
                      type: "checkbox",
                      inputLabel: {
                        text: item.label,
                        htmlFor: item.optionId,
                      },
                      inputTag: {
                        id: item.optionId,
                        checked: item.selected,
                        value: item.optionId,
                        onChange: () => {
                          const value = !item.selected;
                          if (nowQuestion.isMultiAnswer === false) {
                            nowQuestion.objectiveOptions.forEach(
                              (item) => (item.selected = false)
                            );
                          }
                          item.selected = value;
                          setSurveyData({ ...surveyData });
                        },
                      },
                    };
                  })
                : nowQuestion.subjectiveOptions.map((item) => {
                    return {
                      optionId: item.optionId,
                      type: item.formType === "SINGLE" ? "input" : "textarea",
                      inputTag: {
                        placeholder: "입력",
                        value: item.userAnswer ?? "",
                        type: item?.attributes?.VALUE_TYPE ?? undefined,
                        onChange: (event) => {
                          item.userAnswer = event.target.value;
                          setSurveyData({ ...surveyData });
                          if (item.formType === "TEXTAREA") {
                            event.target.style.height = "1px";
                            event.target.style.height =
                              event.target.scrollHeight + "px";
                          }
                        },
                      },
                      validate: { text: validateValue(item) },
                      label: {
                        text: item?.attributes?.INPUT_LABEL ?? "",
                      },
                      unit: {
                        text: item?.attributes?.UNIT_TEXT ?? "",
                      },
                    };
                  }),
          },
        ],
      };
      setDataSet(tmp);
    }

    if (page === "interMission") {
      const tmp = {
        nowCategory: {
          text: "심뇌혈관 위험도",
        },
        nextCategory: {
          text: "스트레스 검사",
        },
        nextBtn: {
          onClick: () => {
            navigate("/ehp/survey/query?queryIdx=0");
          },
        },
      };
      setDataSet(tmp);
    }

    if (page === "intro") {
      const tmp = {
        userName: { text: "공필상" },
        surveyStart: {
          onClick: () => {
            navigate("/ehp/survey/query?queryIdx=0");
          },
        },
      };
      setDataSet(tmp);
    }
  }, [
    navigate,
    page,
    queryIdx,
    searchParams,
    setSearchParams,
    setSurveyData,
    surveyData,
  ]);
  if (!htmlSet) return <div></div>;
  return <>{parse(htmlSet[page] ?? {}, parseOption(htmlSet, dataSet))}</>;
}
