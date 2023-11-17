export interface Snippet {
    prefix: string;
    snippet: string;
    type: string;
    description?: string;
    fileTypes: string[];
}

export const snippets: Snippet[] = [
    // components snippets
    {
        prefix: "rcc",
        snippet:
            "import React, { Component } from 'react'\n\nexport default class ${FILE_NAME} extends Component {\n  render() {\n    return (\n    <div>$1</div>\n  )\n}\n",
        type: "Components",
        description: 'Creates a <strong>React component</strong> class with ES7 module system',
        fileTypes: ["jsx", "tsx"]
    },
    // hooks snippets 
    {
        prefix: "useEffectSnippet",
        snippet:
            "useEffect(() => {\n  ${1}\n  return () => {\n    ${2}\n  }\n}, [${3}])\n",
        type: "Hooks",
        fileTypes: ["jsx", "tsx"]
    },
    // js console snippets 
    {
        prefix: "cas",
        snippet:
            "console.assert(${1}, ${2})",
        type: "ConsoleAssert",
        description: 'If the specified expression is false, the message is written to the console along with a stack trace',
        fileTypes: ["jsx", "tsx"]
    },
    {
        prefix: "ccl",
        snippet:
            "console.clear()",
        type: "ConsoleClear",
        description: 'Clears the console',
        fileTypes: ["jsx", "tsx"]
    },
    {
        prefix: "cco",
        snippet:
            "console.count(${1})",
        type: "ConsoleCount",
        description: 'Writes the the number of times that <code>count()</code> has been invoked at the same line and with the same label',
        fileTypes: ["jsx", "tsx"]
    },
    {
        prefix: "cdi",
        snippet:
            "console.dir(${1})",
        type: "ConsoleDir",
        description: 'Prints a JavaScript representation of the specified object',
        fileTypes: ["jsx", "tsx"]
    },
    {
        prefix: "cer",
        snippet:
            "console.error(${1})",
        type: "ConsoleError",
        description: 'Displays a message in the console and also includes a stack trace from where the method was called',
        fileTypes: ["jsx", "tsx"]
    },
    {
        prefix: "cgr",
        snippet:
            "console.group('${1}')",
        type: "ConsoleGroup",
        description: 'Groups and indents all following output by an additional level, until <code>console.groupEnd()</code> is called.',
        fileTypes: ["jsx", "tsx"]
    },
    {
        prefix: "cge",
        snippet:
            "console.groupEnd()",
        type: "ConsoleGroupEnd",
        description: 'Closes out the corresponding <code>console.group()</code>.',
        fileTypes: ["jsx", "tsx"]
    },
    {
        prefix: "clg",
        snippet:
            "console.log(${1})",
        type: "ConsoleLog",
        description: 'Displays a message in the console',
        fileTypes: ["jsx", "tsx"]
    },
    {
        prefix: "ctr",
        snippet:
            "console.trace(${1})",
        type: "ConsoleTrace",
        description: 'Prints a stack trace from the point where the method was called',
        fileTypes: ["jsx", "tsx"]
    },
    {
        prefix: "clo",
        snippet:
            "console.log('${1}', ${2})",
        type: "ConsoleLogObject",
        description: 'Logs property with name.',
        fileTypes: ["jsx", "tsx"]
    },
    {
        prefix: "clj",
        snippet:
            "console.log('${1}', JSON.stringify(${1}, null, 2))",
        type: "ConsoleLogJson",
        description: 'Logs stringified JSON property with name.',
        fileTypes: ["jsx", "tsx"]
    },
    {
        prefix: "ctm",
        snippet:
            "console.time('${1}')",
        type: "ConsoleTime",
        description: 'Console time wrapper',
        fileTypes: ["jsx", "tsx"]
    },
    {
        prefix: "cte",
        snippet:
            "console.timeEnd('${1}')",
        type: "ConsoleTimeEnd",
        description: 'Console time end wrapper',
        fileTypes: ["jsx", "tsx"]
    },
    {
        prefix: "cwa",
        snippet:
            "console.warn(${1})",
        type: "ConsoleWarn",
        description: 'Displays a message in the console but also displays a yellow warning icon along with the logged message',
        fileTypes: ["jsx", "tsx"]
    },
    {
        prefix: "cin",
        snippet:
            "console.info(${1})",
        type: "ConsoleInfo",
        description: 'Displays a message in the console but also displays a blue information icon along with the logged message',
        fileTypes: ["jsx", "tsx"]
    },
    {
        prefix: "ctl",
        snippet:
            "console.table([${1}])",
        type: "ConsoleTable",
        description: 'Logs table to console',
        fileTypes: ["jsx", "tsx"]
    },
];
