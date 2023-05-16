import parse, { attributesToProps, domToReact } from "html-react-parser";
import OptionGenerator from "./OptionGenerator";

export default function QueryGenerator({ queryHTML, queries, optionHtml }) {
  return queries.map((item) => {
    return (
      <div className="queryContainer" key={item.key}>
        {parse(queryHTML, {
          replace: (domNode) => {
            const { attribs, name } = domNode;
            if (!attribs?.["data-key"]) {
              return;
            }
            if (attribs["data-key"] === "optionContainer") {
              console.log(item);
              return (
                <OptionGenerator
                  optionHtml={optionHtml}
                  queries={item.options}
                ></OptionGenerator>
              );
            }
            if (name === "div") {
              const { ...props } = attributesToProps(attribs);
              console.log(props);
              return <div {...props}>{item[attribs["data-key"]]}</div>;
            }
          },
        })}
      </div>
    );
  });
}
