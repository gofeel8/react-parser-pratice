import React from "react";
import parse, { domToReact } from "html-react-parser";
const parseOption = (htmlSet, dataSet) => {
  return {
    replace: ({ attribs, name, children }) => {
      if (!attribs?.["data-key"]) {
        return;
      }

      if (attribs["data-key"] === "progressBar") {
        if (!dataSet?.progressBar) return <div></div>;
        const { nowProgress, endProgress } = dataSet.progressBar;
        return (
          <div className="progressBar">
            {Array.from({ length: endProgress }).map((_, idx) => {
              if (idx + 1 < nowProgress) {
                return (
                  <React.Fragment key={idx}>
                    {parse(htmlSet.progressBar_complete, parseOption(htmlSet))}
                  </React.Fragment>
                );
              } else if (idx + 1 === nowProgress) {
                return (
                  <React.Fragment key={idx}>
                    {parse(htmlSet.progressBar_active, parseOption(htmlSet))}
                  </React.Fragment>
                );
              } else {
                return (
                  <React.Fragment key={idx}>
                    {parse(htmlSet.progressBar_default, parseOption(htmlSet))}
                  </React.Fragment>
                );
              }
            })}
          </div>
        );
      }

      if (attribs["data-key"] === "queries") {
        return (
          <>
            {dataSet?.queries?.map((item) => {
              return (
                <div className="queries" key={item.queryId}>
                  {parse(htmlSet.queryWrapper, parseOption(htmlSet, item))}
                </div>
              );
            })}
          </>
        );
      }

      if (attribs["data-key"] === "options") {
        return (
          <div className="options">
            {dataSet?.options?.map((item, idx) => {
              const { type, ...props } = item;
              if (htmlSet?.[`answer_${type}`]) {
                return (
                  <React.Fragment key={idx}>
                    {parse(
                      htmlSet?.[`answer_${type}`],
                      parseOption(htmlSet, props)
                    )}
                  </React.Fragment>
                );
              }
              return null;
            })}
          </div>
        );
      }

      const { class: originClass = "", type } = attribs;
      const {
        class: newClass = "",
        text = "",
        ...props
      } = dataSet?.[attribs["data-key"]] ?? {};

      const className = `${originClass} ${newClass}`.trim();

      const basicArgs = [
        name,
        {
          className: className ? className : null,
          type,
          ...props,
        },
      ];
      if (name === "input" || name === "textarea")
        return React.createElement(...basicArgs);

      return React.createElement(
        ...basicArgs,
        text,
        domToReact(children, parseOption(htmlSet, dataSet))
      );
    },
  };
};

export { parseOption };
