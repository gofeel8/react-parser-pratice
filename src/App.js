import { useState } from "react";
import "./App.css";
import CheckBox from "./components/CheckBox";
import parse, { attributesToProps, domToReact } from "html-react-parser";
import QueryGenerator from "./components/QueryGenerator";

const optionHtml = {
  checkbox: `
  <label >라벨
  <input type="checkbox"/>
  <input type="text"/>
  </label>`,
};

const html = `
  <div class="main">
    <div data-key ="progressbar"></div>
    <div class="title" data-key="title"></div>
    <div class="queryContainer" data-key="queryContainer">
    </div>
    <button class="btn prevBtn" data-key="prevBtn"></button>
    <button class="btn nextBtn" data-key="nextBtn"></button>
  </div>
`;

const queryHTML = `
<div class="queryTitle" data-key="queryTitle"></div>
<div class="queryHint" data-key="queryHint"></div>  
<div class="optionContainer" data-key="optionContainer"></div>
`;

const dataObj = {
  title: "심뇌혈관평가",
  prevBtn: {
    title: "이전",
    clickHandler: () => {
      alert("이전");
    },
  },
  nextBtn: {
    title: "다음",
    clickHandler: () => {
      alert("다음");
    },
  },
  queries: [
    {
      id: 1,
      queryTitle: "객관식질문",
      queryHint: "보기중 하나를 선택해주세요",
      options: [
        {
          id: 1,
          type: "checkbox",
          value: "남자",
        },
        {
          id: 2,
          type: "checkbox",
          value: "여자",
        },
        {
          id: 2,
          type: "checkbox",
          value: "여자",
        },
        {
          id: 2,
          type: "checkbox",
          value: "여자",
        },
        {
          id: 2,
          type: "checkbox",
          value: "여자",
        },
      ],
    },
    {
      id: 2,
      queryTitle: "주관식질문",
      options: [
        {
          id: 1,
          type: "checkbox",
          value: "남자",
        },
        {
          id: 2,
          type: "checkbox",
          value: "여자",
        },
      ],
    },
  ],
};

const options = {
  replace: (domNode) => {
    const { attribs, name } = domNode;
    if (!attribs?.["data-key"]) {
      return;
    }

    if (attribs["data-key"] === "queryContainer") {
      return (
        <QueryGenerator
          queryHTML={queryHTML}
          optionHtml={optionHtml}
          options={options}
          queries={dataObj.queries}
        ></QueryGenerator>
      );
    }

    if (name === "div") {
      const { ...props } = attributesToProps(attribs);
      return <div {...props}>{dataObj[attribs["data-key"]]}</div>;
    }

    if (name === "button") {
      const { ...props } = attributesToProps(attribs);
      return (
        <button {...props} onClick={dataObj[attribs["data-key"]].clickHandler}>
          {dataObj[attribs["data-key"]].title}
        </button>
      );
    }
  },
};

function App() {
  return <>{parse(html, options)}</>;
}

export default App;
