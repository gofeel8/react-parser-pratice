import { useEffect, useState } from "react";

export default function useSurveyData() {
  const [surveyData, setSurveyData] = useState();

  useEffect(() => {
    setSurveyData({
      surveyId: 2411,
      subScaleId: 37,
      title: "신체건강",
      configs: [
        {
          configId: 202002,
          category: {
            type: "SUB_B_02",
            name: "수면",
          },
          isSkippable: false,
          isSkipped: false,
          questions: [
            {
              questionId: 100202,
              type: "OBJECTIVE",
              isMultiAnswer: true,
              isSkipped: false,
              question: "한밤중이나 새벽에 깼다",
              subjectiveOptions: null,
              objectiveOptions: [
                {
                  optionId: 10020201,
                  label: "지난 한달 동안 없었다. (없다)",
                  sortOrder: 1,
                  value: "0",
                  selected: false,
                  userAnswer: null,
                  attributes: null,
                },
                {
                  optionId: 10020202,
                  label: "한 주에 1번보다 적게 (주1회 미만)",
                  sortOrder: 2,
                  value: "1",
                  selected: false,
                  userAnswer: null,
                  attributes: null,
                },
                {
                  optionId: 10020203,
                  label: "한 주에 1~2번 정도 (주1~2회)",
                  sortOrder: 3,
                  value: "2",
                  selected: false,
                  userAnswer: null,
                  attributes: null,
                },
                {
                  optionId: 10020204,
                  label: "한 주에 3번 이상 (주 3회 이상)",
                  sortOrder: 4,
                  value: "3",
                  selected: false,
                  userAnswer: null,
                  attributes: null,
                },
              ],
              scaleAnswerOption: null,
              contents: [
                {
                  type: "LABEL",
                  content: "다음은 귀하에 관한 질문입니다.",
                },
              ],
              purposes: [
                {
                  type: "PAR_B_1",
                  name: null,
                },
              ],
              category: {
                type: "PARENTS",
                name: "보호자",
              },
              factor: null,
              codeFKey: null,
            },
          ],
          contents: [
            {
              type: "GUIDE",
              content:
                "다음은 귀하의 수면에 관한 질문입니다.\n다음 각 문항에서 가장 적합한 응답을 하나만 고르십시오.\n모든 질문에 응답해주시기 바랍니다.\n지난 한달 동안, 당신은 아래의 이유로 잠자는 데 얼마나 자주 문제가 있었습니까?",
            },
            {
              type: "COPYRIGHT",
              content:
                "https://lh3.google.com/u/0/d/16pzehfYLIb49M21hU1VSo7epcml9z-bB=w1920-h872-iv1",
            },
          ],
          nextConfigSurvey: null,
        },
        {
          configId: 202003,
          category: {
            type: "SUB_B_02",
            name: "수면",
          },
          isSkippable: false,
          isSkipped: false,
          questions: [
            {
              questionId: 100102,
              type: "SUBJECTIVE",
              isMultiAnswer: false,
              isSkipped: false,
              question: "귀하의 현재 나이는 몇 세입니까?",
              subjectiveOptions: [
                {
                  optionId: 10010201,
                  formType: "TEXTAREA",
                  sortOrder: 1,
                  attributes: {
                    VALUE_LOW: "1",
                    VALUE_HIGH: "99",
                    INPUT_LABEL: "세",
                  },
                  userAnswer: "",
                },
              ],
              objectiveOptions: null,
              scaleAnswerOption: null,
              contents: [
                {
                  type: "LABEL",
                  content: "다음은 귀하에 관한 질문입니다.",
                },
              ],
              purposes: null,
              category: {
                type: "PARENTS",
                name: "보호자",
              },
              factor: null,
              codeFKey: null,
            },
          ],
          contents: [
            {
              type: "COPYRIGHT",
              content:
                "https://lh3.google.com/u/0/d/16pzehfYLIb49M21hU1VSo7epcml9z-bB=w1920-h872-iv1",
            },
            {
              type: "GUIDE",
              content:
                "다음은 귀하의 수면에 관한 질문입니다.\n다음 각 문항에서 가장 적합한 응답을 하나만 고르십시오.\n모든 질문에 응답해주시기 바랍니다.\n지난 한달 동안, 당신은 아래의 이유로 잠자는 데 얼마나 자주 문제가 있었습니까?",
            },
          ],
          nextConfigSurvey: null,
        },
        {
          configId: 2020033,
          category: {
            type: "SUB_B_02",
            name: "수면",
          },
          isSkippable: false,
          isSkipped: false,
          questions: [
            {
              questionId: 100102,
              type: "SUBJECTIVE",
              isMultiAnswer: false,
              isSkipped: false,
              question: "귀하의 현재 체중은 몇입니까",
              subjectiveOptions: [
                {
                  optionId: 10010201,
                  formType: "SINGLE",
                  sortOrder: 1,
                  attributes: {
                    VALUE_TYPE: "TEXT",
                  },
                  userAnswer: "",
                },
              ],
              objectiveOptions: null,
              scaleAnswerOption: null,
              contents: [
                {
                  type: "LABEL",
                  content: "다음은 귀하에 관한 질문입니다.",
                },
              ],
              purposes: null,
              category: {
                type: "PARENTS",
                name: "보호자",
              },
              factor: null,
              codeFKey: null,
            },
          ],
          contents: [
            {
              type: "COPYRIGHT",
              content:
                "https://lh3.google.com/u/0/d/16pzehfYLIb49M21hU1VSo7epcml9z-bB=w1920-h872-iv1",
            },
            {
              type: "GUIDE",
              content:
                "다음은 귀하의 수면에 관한 질문입니다.\n다음 각 문항에서 가장 적합한 응답을 하나만 고르십시오.\n모든 질문에 응답해주시기 바랍니다.\n지난 한달 동안, 당신은 아래의 이유로 잠자는 데 얼마나 자주 문제가 있었습니까?",
            },
          ],
          nextConfigSurvey: null,
        },
        {
          configId: 20200333,
          category: {
            type: "SUB_B_02",
            name: "수면",
          },
          isSkippable: false,
          isSkipped: false,
          questions: [
            {
              questionId: 100102,
              type: "SUBJECTIVE",
              isMultiAnswer: false,
              isSkipped: false,
              question: "귀하의 현재 무게는 몇 kg입니까?",
              subjectiveOptions: [
                {
                  optionId: 10010201,
                  formType: "SINGLE",
                  sortOrder: 1,
                  attributes: {
                    VALUE_LOW: "1",
                    VALUE_HIGH: "99",
                    INPUT_LABEL: "나이",
                    VALUE_TYPE: "NUMBER",
                    UNIT_TEXT: "세",
                  },
                  userAnswer: "",
                },
              ],
              objectiveOptions: null,
              scaleAnswerOption: null,
              contents: [
                {
                  type: "LABEL",
                  content: "다음은 귀하에 관한 질문입니다.",
                },
              ],
              purposes: null,
              category: {
                type: "PARENTS",
                name: "보호자",
              },
              factor: null,
              codeFKey: null,
            },
          ],
          contents: [
            {
              type: "COPYRIGHT",
              content:
                "https://lh3.google.com/u/0/d/16pzehfYLIb49M21hU1VSo7epcml9z-bB=w1920-h872-iv1",
            },
            {
              type: "GUIDE",
              content:
                "다음은 귀하의 수면에 관한 질문입니다.\n다음 각 문항에서 가장 적합한 응답을 하나만 고르십시오.\n모든 질문에 응답해주시기 바랍니다.\n지난 한달 동안, 당신은 아래의 이유로 잠자는 데 얼마나 자주 문제가 있었습니까?",
            },
          ],
          nextConfigSurvey: null,
        },
        {
          configId: 202004,
          category: {
            type: "SUB_B_02",
            name: "수면",
          },
          isSkippable: false,
          isSkipped: false,
          questions: [
            {
              questionId: 100204,
              type: "OBJECTIVE",
              isMultiAnswer: false,
              isSkipped: false,
              question: "편안하게 숨 쉴 수가 없었다.",
              subjectiveOptions: null,
              objectiveOptions: [
                {
                  optionId: 10020401,
                  label: "지난 한달 동안 없었다. (없다)",
                  sortOrder: 1,
                  value: "0",
                  selected: false,
                  userAnswer: null,
                  attributes: null,
                },
                {
                  optionId: 10020402,
                  label: "한 주에 1번보다 적게 (주1회 미만)",
                  sortOrder: 2,
                  value: "1",
                  selected: false,
                  userAnswer: null,
                  attributes: null,
                },
                {
                  optionId: 10020403,
                  label: "한 주에 1~2번 정도 (주1~2회)",
                  sortOrder: 3,
                  value: "2",
                  selected: false,
                  userAnswer: null,
                  attributes: null,
                },
                {
                  optionId: 10020404,
                  label: "한 주에 3번 이상 (주 3회 이상)",
                  sortOrder: 4,
                  value: "3",
                  selected: false,
                  userAnswer: null,
                  attributes: null,
                },
              ],
              scaleAnswerOption: null,
              contents: [
                {
                  type: "LABEL",
                  content: "다음은 귀하에 관한 질문입니다.",
                },
              ],
              purposes: [
                {
                  type: "PAR_B_1",
                  name: null,
                },
              ],
              category: {
                type: "PARENTS",
                name: "보호자",
              },
              factor: null,
              codeFKey: null,
            },
          ],
          contents: [
            {
              type: "GUIDE",
              content:
                "다음은 귀하의 수면에 관한 질문입니다.\n다음 각 문항에서 가장 적합한 응답을 하나만 고르십시오.\n모든 질문에 응답해주시기 바랍니다.\n지난 한달 동안, 당신은 아래의 이유로 잠자는 데 얼마나 자주 문제가 있었습니까?",
            },
            {
              type: "COPYRIGHT",
              content:
                "https://lh3.google.com/u/0/d/16pzehfYLIb49M21hU1VSo7epcml9z-bB=w1920-h872-iv1",
            },
          ],
          nextConfigSurvey: null,
        },
        {
          configId: 202005,
          category: {
            type: "SUB_B_02",
            name: "수면",
          },
          isSkippable: false,
          isSkipped: false,
          questions: [
            {
              questionId: 100205,
              type: "OBJECTIVE",
              isMultiAnswer: false,
              isSkipped: false,
              question: "기침을 하거나 시끄럽게 코를 골았다.",
              subjectiveOptions: null,
              objectiveOptions: [
                {
                  optionId: 10020501,
                  label: "지난 한달 동안 없었다. (없다)",
                  sortOrder: 1,
                  value: "0",
                  selected: false,
                  userAnswer: null,
                  attributes: null,
                },
                {
                  optionId: 10020502,
                  label: "한 주에 1번보다 적게 (주1회 미만)",
                  sortOrder: 2,
                  value: "1",
                  selected: false,
                  userAnswer: null,
                  attributes: null,
                },
                {
                  optionId: 10020503,
                  label: "한 주에 1~2번 정도 (주1~2회)",
                  sortOrder: 3,
                  value: "2",
                  selected: false,
                  userAnswer: null,
                  attributes: null,
                },
                {
                  optionId: 10020504,
                  label: "한 주에 3번 이상 (주 3회 이상)",
                  sortOrder: 4,
                  value: "3",
                  selected: false,
                  userAnswer: null,
                  attributes: null,
                },
              ],
              scaleAnswerOption: null,
              contents: [
                {
                  type: "LABEL",
                  content: "다음은 귀하에 관한 질문입니다.",
                },
              ],
              purposes: [
                {
                  type: "PAR_B_1",
                  name: null,
                },
              ],
              category: {
                type: "PARENTS",
                name: "보호자",
              },
              factor: null,
              codeFKey: null,
            },
          ],
          contents: [
            {
              type: "GUIDE",
              content:
                "다음은 귀하의 수면에 관한 질문입니다.\n다음 각 문항에서 가장 적합한 응답을 하나만 고르십시오.\n모든 질문에 응답해주시기 바랍니다.\n지난 한달 동안, 당신은 아래의 이유로 잠자는 데 얼마나 자주 문제가 있었습니까?",
            },
            {
              type: "COPYRIGHT",
              content:
                "https://lh3.google.com/u/0/d/16pzehfYLIb49M21hU1VSo7epcml9z-bB=w1920-h872-iv1",
            },
          ],
          nextConfigSurvey: null,
        },
        {
          configId: 202006,
          category: {
            type: "SUB_B_02",
            name: "수면",
          },
          isSkippable: false,
          isSkipped: false,
          questions: [
            {
              questionId: 100206,
              type: "OBJECTIVE",
              isMultiAnswer: false,
              isSkipped: false,
              question: "너무 춥다고 느꼈다.",
              subjectiveOptions: null,
              objectiveOptions: [
                {
                  optionId: 10020601,
                  label: "지난 한달 동안 없었다. (없다)",
                  sortOrder: 1,
                  value: "0",
                  selected: false,
                  userAnswer: null,
                  attributes: null,
                },
                {
                  optionId: 10020602,
                  label: "한 주에 1번보다 적게 (주1회 미만)",
                  sortOrder: 2,
                  value: "1",
                  selected: false,
                  userAnswer: null,
                  attributes: null,
                },
                {
                  optionId: 10020603,
                  label: "한 주에 1~2번 정도 (주1~2회)",
                  sortOrder: 3,
                  value: "2",
                  selected: false,
                  userAnswer: null,
                  attributes: null,
                },
                {
                  optionId: 10020604,
                  label: "한 주에 3번 이상 (주 3회 이상)",
                  sortOrder: 4,
                  value: "3",
                  selected: false,
                  userAnswer: null,
                  attributes: null,
                },
              ],
              scaleAnswerOption: null,
              contents: [
                {
                  type: "LABEL",
                  content: "다음은 귀하에 관한 질문입니다.",
                },
              ],
              purposes: [
                {
                  type: "PAR_B_1",
                  name: null,
                },
              ],
              category: {
                type: "PARENTS",
                name: "보호자",
              },
              factor: null,
              codeFKey: null,
            },
          ],
          contents: [
            {
              type: "GUIDE",
              content:
                "다음은 귀하의 수면에 관한 질문입니다.\n다음 각 문항에서 가장 적합한 응답을 하나만 고르십시오.\n모든 질문에 응답해주시기 바랍니다.\n지난 한달 동안, 당신은 아래의 이유로 잠자는 데 얼마나 자주 문제가 있었습니까?",
            },
            {
              type: "COPYRIGHT",
              content:
                "https://lh3.google.com/u/0/d/16pzehfYLIb49M21hU1VSo7epcml9z-bB=w1920-h872-iv1",
            },
          ],
          nextConfigSurvey: null,
        },
        {
          configId: 202007,
          category: {
            type: "SUB_B_02",
            name: "수면",
          },
          isSkippable: false,
          isSkipped: false,
          questions: [
            {
              questionId: 100207,
              type: "OBJECTIVE",
              isMultiAnswer: false,
              isSkipped: false,
              question: "너무 덥다고 느꼈다.",
              subjectiveOptions: null,
              objectiveOptions: [
                {
                  optionId: 10020701,
                  label: "지난 한달 동안 없었다. (없다)",
                  sortOrder: 1,
                  value: "0",
                  selected: false,
                  userAnswer: null,
                  attributes: null,
                },
                {
                  optionId: 10020702,
                  label: "한 주에 1번보다 적게 (주1회 미만)",
                  sortOrder: 2,
                  value: "1",
                  selected: false,
                  userAnswer: null,
                  attributes: null,
                },
                {
                  optionId: 10020703,
                  label: "한 주에 1~2번 정도 (주1~2회)",
                  sortOrder: 3,
                  value: "2",
                  selected: false,
                  userAnswer: null,
                  attributes: null,
                },
                {
                  optionId: 10020704,
                  label: "한 주에 3번 이상 (주 3회 이상)",
                  sortOrder: 4,
                  value: "3",
                  selected: false,
                  userAnswer: null,
                  attributes: null,
                },
              ],
              scaleAnswerOption: null,
              contents: [
                {
                  type: "LABEL",
                  content: "다음은 귀하에 관한 질문입니다.",
                },
              ],
              purposes: [
                {
                  type: "PAR_B_1",
                  name: null,
                },
              ],
              category: {
                type: "PARENTS",
                name: "보호자",
              },
              factor: null,
              codeFKey: null,
            },
          ],
          contents: [
            {
              type: "GUIDE",
              content:
                "다음은 귀하의 수면에 관한 질문입니다.\n다음 각 문항에서 가장 적합한 응답을 하나만 고르십시오.\n모든 질문에 응답해주시기 바랍니다.\n지난 한달 동안, 당신은 아래의 이유로 잠자는 데 얼마나 자주 문제가 있었습니까?",
            },
            {
              type: "COPYRIGHT",
              content:
                "https://lh3.google.com/u/0/d/16pzehfYLIb49M21hU1VSo7epcml9z-bB=w1920-h872-iv1",
            },
          ],
          nextConfigSurvey: null,
        },
        {
          configId: 202008,
          category: {
            type: "SUB_B_02",
            name: "수면",
          },
          isSkippable: false,
          isSkipped: false,
          questions: [
            {
              questionId: 100208,
              type: "OBJECTIVE",
              isMultiAnswer: false,
              isSkipped: false,
              question: "나쁜 꿈을 꾸었다.",
              subjectiveOptions: null,
              objectiveOptions: [
                {
                  optionId: 10020801,
                  label: "지난 한달 동안 없었다. (없다)",
                  sortOrder: 1,
                  value: "0",
                  selected: false,
                  userAnswer: null,
                  attributes: null,
                },
                {
                  optionId: 10020802,
                  label: "한 주에 1번보다 적게 (주1회 미만)",
                  sortOrder: 2,
                  value: "1",
                  selected: false,
                  userAnswer: null,
                  attributes: null,
                },
                {
                  optionId: 10020803,
                  label: "한 주에 1~2번 정도 (주1~2회)",
                  sortOrder: 3,
                  value: "2",
                  selected: false,
                  userAnswer: null,
                  attributes: null,
                },
                {
                  optionId: 10020804,
                  label: "한 주에 3번 이상 (주 3회 이상)",
                  sortOrder: 4,
                  value: "3",
                  selected: false,
                  userAnswer: null,
                  attributes: null,
                },
              ],
              scaleAnswerOption: null,
              contents: [
                {
                  type: "LABEL",
                  content: "다음은 귀하에 관한 질문입니다.",
                },
              ],
              purposes: [
                {
                  type: "PAR_B_1",
                  name: null,
                },
              ],
              category: {
                type: "PARENTS",
                name: "보호자",
              },
              factor: null,
              codeFKey: null,
            },
          ],
          contents: [
            {
              type: "COPYRIGHT",
              content:
                "https://lh3.google.com/u/0/d/16pzehfYLIb49M21hU1VSo7epcml9z-bB=w1920-h872-iv1",
            },
            {
              type: "GUIDE",
              content:
                "다음은 귀하의 수면에 관한 질문입니다.\n다음 각 문항에서 가장 적합한 응답을 하나만 고르십시오.\n모든 질문에 응답해주시기 바랍니다.\n지난 한달 동안, 당신은 아래의 이유로 잠자는 데 얼마나 자주 문제가 있었습니까?",
            },
          ],
          nextConfigSurvey: null,
        },
        {
          configId: 202009,
          category: {
            type: "SUB_B_02",
            name: "수면",
          },
          isSkippable: false,
          isSkipped: false,
          questions: [
            {
              questionId: 100209,
              type: "OBJECTIVE",
              isMultiAnswer: false,
              isSkipped: false,
              question: "통증이 있었다.",
              subjectiveOptions: null,
              objectiveOptions: [
                {
                  optionId: 10020901,
                  label: "지난 한달 동안 없었다. (없다)",
                  sortOrder: 1,
                  value: "0",
                  selected: false,
                  userAnswer: null,
                  attributes: null,
                },
                {
                  optionId: 10020902,
                  label: "한 주에 1번보다 적게 (주1회 미만)",
                  sortOrder: 2,
                  value: "1",
                  selected: false,
                  userAnswer: null,
                  attributes: null,
                },
                {
                  optionId: 10020903,
                  label: "한 주에 1~2번 정도 (주1~2회)",
                  sortOrder: 3,
                  value: "2",
                  selected: false,
                  userAnswer: null,
                  attributes: null,
                },
                {
                  optionId: 10020904,
                  label: "한 주에 3번 이상 (주 3회 이상)",
                  sortOrder: 4,
                  value: "3",
                  selected: false,
                  userAnswer: null,
                  attributes: null,
                },
              ],
              scaleAnswerOption: null,
              contents: [
                {
                  type: "LABEL",
                  content: "다음은 귀하에 관한 질문입니다.",
                },
              ],
              purposes: [
                {
                  type: "PAR_B_1",
                  name: null,
                },
              ],
              category: {
                type: "PARENTS",
                name: "보호자",
              },
              factor: null,
              codeFKey: null,
            },
          ],
          contents: [
            {
              type: "GUIDE",
              content:
                "다음은 귀하의 수면에 관한 질문입니다.\n다음 각 문항에서 가장 적합한 응답을 하나만 고르십시오.\n모든 질문에 응답해주시기 바랍니다.\n지난 한달 동안, 당신은 아래의 이유로 잠자는 데 얼마나 자주 문제가 있었습니까?",
            },
            {
              type: "COPYRIGHT",
              content:
                "https://lh3.google.com/u/0/d/16pzehfYLIb49M21hU1VSo7epcml9z-bB=w1920-h872-iv1",
            },
          ],
          nextConfigSurvey: null,
        },
        {
          configId: 202010,
          category: {
            type: "SUB_B_02",
            name: "수면",
          },
          isSkippable: true,
          isSkipped: false,
          questions: [
            {
              questionId: 100210,
              type: "OBJECTIVE",
              isMultiAnswer: false,
              isSkipped: false,
              question: "그 외의 다른 이유가 있다면, 기입해주세요. 이유는?",
              subjectiveOptions: null,
              objectiveOptions: [
                {
                  optionId: 10021001,
                  label: "없다",
                  sortOrder: 1,
                  value: null,
                  selected: false,
                  userAnswer: null,
                  attributes: null,
                },
                {
                  optionId: 10021002,
                  label: "직접입력",
                  sortOrder: 2,
                  value: null,
                  selected: false,
                  userAnswer: null,
                  attributes: {
                    LIMIT_LENGTH: "500",
                    CUSTOM_INPUT: "true",
                    VALUE_TYPE: "TEXT",
                  },
                },
              ],
              scaleAnswerOption: null,
              contents: [
                {
                  type: "LABEL",
                  content: "다음은 귀하에 관한 질문입니다.",
                },
              ],
              purposes: null,
              category: {
                type: "PARENTS",
                name: "보호자",
              },
              factor: null,
              codeFKey: null,
            },
          ],
          contents: [
            {
              type: "COPYRIGHT",
              content:
                "https://lh3.google.com/u/0/d/16pzehfYLIb49M21hU1VSo7epcml9z-bB=w1920-h872-iv1",
            },
          ],
          nextConfigSurvey: null,
        },
        {
          configId: 202011,
          category: {
            type: "SUB_B_02",
            name: "수면",
          },
          isSkippable: false,
          isSkipped: false,
          questions: [
            {
              questionId: 100211,
              type: "OBJECTIVE",
              isMultiAnswer: false,
              isSkipped: false,
              question:
                "지난 한달 동안, 위에 기입한 이유들 때문에 잠자는 데 얼마나 자주 어려움이 있었습니까?",
              subjectiveOptions: null,
              objectiveOptions: [
                {
                  optionId: 10021101,
                  label: "지난 한달 동안 없었다. (없다)",
                  sortOrder: 1,
                  value: "0",
                  selected: false,
                  userAnswer: null,
                  attributes: null,
                },
                {
                  optionId: 10021102,
                  label: "한 주에 1번보다 적게 (주1회 미만)",
                  sortOrder: 2,
                  value: "1",
                  selected: false,
                  userAnswer: null,
                  attributes: null,
                },
                {
                  optionId: 10021103,
                  label: "한 주에 1~2번 정도 (주1~2회)",
                  sortOrder: 3,
                  value: "2",
                  selected: false,
                  userAnswer: null,
                  attributes: null,
                },
                {
                  optionId: 10021104,
                  label: "한 주에 3번 이상 (주 3회 이상)",
                  sortOrder: 4,
                  value: "3",
                  selected: false,
                  userAnswer: null,
                  attributes: null,
                },
              ],
              scaleAnswerOption: null,
              contents: [
                {
                  type: "LABEL",
                  content: "다음은 귀하에 관한 질문입니다.",
                },
              ],
              purposes: [
                {
                  type: "PAR_B_1",
                  name: null,
                },
              ],
              category: {
                type: "PARENTS",
                name: "보호자",
              },
              factor: null,
              codeFKey: null,
            },
          ],
          contents: [
            {
              type: "COPYRIGHT",
              content:
                "https://lh3.google.com/u/0/d/1BHpHnX5wceSin-X-34r8OP9fguuxp1ex=w1920-h929-iv1",
            },
          ],
          nextConfigSurvey: null,
        },
      ],
    });
  }, []);

  return [surveyData, setSurveyData];
}
