export const validateValue = (option) => {
  const { userAnswer } = option;
  const { VALUE_TYPE, VALUE_HIGH, VALUE_LOW } = option.attributes;
  if (userAnswer && VALUE_TYPE === "NUMBER") {
    if (VALUE_HIGH && VALUE_HIGH < Number(userAnswer)) {
      return "값이 너무 크다";
    }
    if (VALUE_LOW && VALUE_LOW > Number(userAnswer)) {
      return "값이 너무 작다";
    }
  }
  return "";
};

export const isActiveNextBtn = (nowQuestion) => {
  if (nowQuestion.objectiveOptions) {
    const selectedItems = nowQuestion.objectiveOptions.filter(
      (item) => item.selected
    );
    return selectedItems.length === 0 ? false : true;
  } else if (nowQuestion.scaleAnswerOption) {
    return false;
  } else if (nowQuestion.subjectiveOptions) {
    const emptyAnswers = nowQuestion.subjectiveOptions.filter(
      (item) => item.userAnswer.length === 0
    );
    if (emptyAnswers.length > 0) return false;
    const invalidItems = nowQuestion.subjectiveOptions.filter((item) => {
      return validateValue(item);
    });
    if (invalidItems.length > 0) return false;
    return true;
  }
  return false;
};
