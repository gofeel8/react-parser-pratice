import parse, { attributesToProps, domToReact } from "html-react-parser";

export default function OptionGenerator({ optionHtml, queries }) {
  return queries.map((item) => {
    return (
      <div className="optionContainer" key={item.key}>
        {parse(optionHtml[item.type], {
          replace: (domNode) => {
            const { attribs, name } = domNode;
            if (!attribs?.["data-key"]) {
              return;
            }
            if (name === "div") {
              const { ...props } = attributesToProps(attribs);
              return <div {...props}>{item[attribs["data-key"]]}</div>;
            }
          },
        })}
      </div>
    );
  });
}
