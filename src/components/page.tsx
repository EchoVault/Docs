import { useState } from "react";
import CodeBlock from "@theme/CodeBlock";

interface CodeExample {
  description: string;
  code: string;
}

interface Props {
  syntax: string;
  module: string;
  categories: Array<string>;
  description: string;
  options: Array<string>;
  examples: {
    cli: Array<CodeExample>;
    go: Array<CodeExample>;
  };
}

function Page({
  syntax,
  module,
  categories,
  description,
  options,
  examples,
}: Props) {
  const [activeTab, setActiveTab] = useState<"cli" | "go">("cli");

  return (
    <div id="commandPageContainer">
      <div>
        <p>
          <b>Sytax:</b>
        </p>
        <CodeBlock>{syntax}</CodeBlock>
      </div>
      <div>
        <b>Module: </b>
        <span>{module}</span>
      </div>
      <div>
        <b>ACL Categories: </b>
        <div id="aclCategoryContainer">
          {categories.map((category, index) => (
            <span key={`${category}-${index}`}>
              <span className="acl-category">{`@${category.toLowerCase()}`}</span>
            </span>
          ))}
        </div>
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
      <div id="commandExampleContainer">
        <b>Examples: </b>
        <div id="commandExampleTabHeader">
          <span
            className={`command-example-tab ${
              activeTab === "cli" ? "active" : ""
            }`}
            onClick={() => {
              setActiveTab("cli");
            }}
            role="tab"
            aria-controls="cliExampleTab"
            aria-selected={activeTab === "cli"}
          >
            CLI
          </span>
          <span
            className={`command-example-tab ${
              activeTab === "go" ? "active" : ""
            }`}
            onClick={() => {
              setActiveTab("go");
            }}
            role="tab"
            aria-controls="goExampleTab"
            aria-selected={activeTab === "go"}
          >
            Go (Embedded)
          </span>
        </div>
        <div id="commandExampleTabContent">
          {activeTab === "cli" && (
            <div id="cliExampleTab">
              {examples?.cli?.length > 0 &&
                examples.cli.map((example, index) => (
                  <div key={`cli-example-${index}`}>
                    <p>{example.description}</p>
                    <CodeBlock>{example.code}</CodeBlock>
                  </div>
                ))}
            </div>
          )}
          {activeTab === "go" && (
            <div id="goExampleTab">
              {examples?.go?.length > 0 &&
                examples.go.map((example, index) => (
                  <div key={`go-example-${index}`}>
                    <p>{example.description}</p>
                    <CodeBlock language="go">{example.code}</CodeBlock>
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Page;
