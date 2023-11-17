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
    // imports snippet
    {
        prefix: "imr",
        snippet:
            "import React from 'react'",
        type: "ImportReact",
        fileTypes: ["jsx", "tsx"]
    },
    {
        prefix: "imrd",
        snippet:
            "import ReactDOM from 'react-dom'",
        type: "ImportReactDom",
        fileTypes: ["jsx", "tsx"]
    },
    {
        prefix: "imrc",
        snippet:
            "import React, { Component } from 'react'",
        type: "ImportReactWithComponent",
        fileTypes: ["jsx", "tsx"]
    },
    {
        prefix: "imrcp",
        snippet:
            "import React, { Component } from 'react'\nimport PropTypes from 'prop-types'",
        type: "ImportReactWithComponentAndPropTypes",
        fileTypes: ["jsx", "tsx"]
    },
    {
        prefix: "imrpc",
        snippet:
            "import React, { PureComponent } from 'react'",
        type: "ImportReactWithPureComponent",
        fileTypes: ["jsx", "tsx"]
    },
    {
        prefix: "imrpcp",
        snippet:
            "import React, { PureComponent } from 'react'\nimport PropTypes from 'prop-types'",
        type: "ImportReactWithPureComponent&PropTypes",
        fileTypes: ["jsx", "tsx"]
    },
    {
        prefix: "imrm",
        snippet:
            "import React, { memo } from 'react'",
        type: "ImportReactWithMemo",
        fileTypes: ["jsx", "tsx"]
    },
    {
        prefix: "imrmp",
        snippet:
            "import React, { memo } from 'react'\nimport PropTypes from 'prop-types'",
        type: "ImportReactWithMemo&PropTypes",
        fileTypes: ["jsx", "tsx"]
    },
    {
        prefix: "impt",
        snippet:
            "import PropTypes from 'prop-types'",
        type: "ImportPropTypes",
        fileTypes: ["jsx", "tsx"]
    },
    // react-router
    {
        prefix: "imbr",
        snippet:
            "import { BrowserRouter as Router } from 'react-router-dom'",
        type: "ReactRouter",
        fileTypes: ["jsx", "tsx"]
    },
    {
        prefix: "imrr",
        snippet:
            "import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'",
        type: "ReactRouterWithRouteAndNavLink",
        fileTypes: ["jsx", "tsx"]
    },
    {
        prefix: "imbrc",
        snippet:
            "import { Route, Switch, NavLink, Link } from 'react-router-dom'",
        type: "ImportRouterSetup",
        fileTypes: ["jsx", "tsx"]
    },
    {
        prefix: "imbrs",
        snippet:
            "import { Switch } from 'react-router-dom'",
        type: "ImportRouterSwitch",
        fileTypes: ["jsx", "tsx"]
    },
    {
        prefix: "imbrl",
        snippet:
            "import { Link } from 'react-router-dom'",
        type: "ImportRouterLink",
        fileTypes: ["jsx", "tsx"]
    },
    {
        prefix: "imbrnl",
        snippet:
            "import { NavLink } from 'react-router-dom'",
        type: "ImportRouterNavLink",
        fileTypes: ["jsx", "tsx"]
    },
    // other imports
    {
        prefix: "imp",
        snippet:
            "import ${2:Name} from '${1}'",
        type: "Import",
        fileTypes: ["jsx", "tsx"]
    },
    {
        prefix: "imn",
        snippet:
            "import '${1}'",
        type: "ImportNoModuleName",
        fileTypes: ["jsx", "tsx"]
    },
    {
        prefix: "imd",
        snippet:
            "import { ${2:Component} } from '${1}'",
        type: "ImportDestructing",
        fileTypes: ["jsx", "tsx"]
    },
    {
        prefix: "ime",
        snippet:
            "import * as ${2:comp} from '${1}'",
        type: "ImportEverything",
        fileTypes: ["jsx", "tsx"]
    },
    {
        prefix: "ima",
        snippet:
            "import { ${2:Component} as ${3} } from '${1}'",
        type: "ImportAs",
        fileTypes: ["jsx", "tsx"]
    },
];
