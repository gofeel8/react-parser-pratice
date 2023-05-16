import parse from "html-react-parser";
export default function CheckBox({ html, onClick }) {
  const tmp = parse(html, {
    replace: (domNode) => {
      console.log(domNode);
      if (domNode.name === "input") {
        delete domNode.attribs.onclick;
        return (
          <input
            {...domNode.attribs}
            onClick={() => {
              onClick();
            }}
          />
        );
      }
    },
  });
  return <>{tmp}</>;
}
