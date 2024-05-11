import CodeBlock from "@theme/CodeBlock";

interface Props {
  syntax: string;
  module: string;
  categories: Array<string>;
  description: string;
  options: Array<string>;
}

function Page({ syntax, module, categories, description, options }: Props) {
  return (
    <div>
      <div>
        <b>Sytax:</b>
        <CodeBlock>{syntax}</CodeBlock>
      </div>
      <div>
        <b>Module: </b>
        <span>{module}</span>
      </div>
      <div>
        <b>ACL Categories: </b>
        {categories.map((category, index) => (
          <span key={`${category}-${index}`}>
            <span className="">{`@${category.toLowerCase()}`}</span>
          </span>
        ))}
      </div>
      <div>
        <b>Description: </b>
        <p>{description}</p>
      </div>
      {options.length > 0 && (
        <div>
          <b>Options: </b>
          <ul>
            {options.map((option, index) => (
              <li key={`${option}-${index}`}>{option}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Page;
