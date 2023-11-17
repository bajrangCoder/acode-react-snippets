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
        description:
            "Creates a <strong>React component</strong> class with ES7 module system",
        fileTypes: ["jsx", "tsx"]
    },
    {
        prefix: "rce",
        snippet:
            "import React, { Component } from 'react'\n\nexport class ${FILE_NAME} extends Component {\n  render() {\n    return (\n      <div>$1</div>\n    )\n  }\n}\n\nexport default ${FILE_NAME}",
        type: "Components",
        description:
            "Creates a <strong>React component</strong> class with ES7 module system",
        fileTypes: ["jsx", "tsx"]
    },
    {
        prefix: "rfce",
        snippet:
            "import React from 'react'\n\nconst ${FILE_NAME} = () => {\n  return (\n    <div>$1</div>\n  )\n}\n\nexport default ${FILE_NAME}",
        type: "Components",
        description:
            "Creates a <strong>React Arrow Function component</strong> with ES7 module system",
        fileTypes: ["jsx", "tsx"]
    },
    {
        prefix: "rfc",
        snippet:
            "import React from 'react'\n\nexport default function ${FILE_NAME}() {\n  return (\n    <div>$1</div>\n  )\n}",
        type: "Components",
        description:
            "Creates a <strong>React Functional component</strong> with ES7 module system",
        fileTypes: ["jsx", "tsx"]
    },
    {
        prefix: "rfcp",
        snippet:
            "import React from 'react'\nimport PropTypes from 'prop-types'\n\nfunction ${FILE_NAME}(props) {\n  return (\n    <div>$1</div>\n  )\n}\n\n${FILE_NAME}.propTypes = {}\n\nexport default ${FILE_NAME}",
        type: "Components",
        description:
            "Creates a <strong>React Functional component</strong> with PropTypes and ES7 module system",
        fileTypes: ["jsx", "tsx"]
    },
    {
        prefix: "rafce",
        snippet:
            "import React from 'react'\n\nconst ${FILE_NAME} = () => {\n  return (\n    <div>$1</div>\n  )\n}\n\nexport default ${FILE_NAME}",
        type: "Components",
        description:
            "Creates a <strong>React Arrow Function component</strong> with ES7 module system",
        fileTypes: ["jsx", "tsx"]
    },
    {
        prefix: "rafc",
        snippet:
            "import React from 'react'\n\nexport const ${FILE_NAME} = () => {\n  return (\n    <div>$1</div>\n  )\n}",
        type: "Components",
        description:
            "Creates a <strong>React Arrow Function component</strong> with ES7 module system",
        fileTypes: ["jsx", "tsx"]
    },
    {
        prefix: "rafcp",
        snippet:
            "import React from 'react'\nimport PropTypes from 'prop-types'\n\nconst ${FILE_NAME} = props => {\n  return (\n    <div>$1</div>\n  )\n}\n\n${FILE_NAME}.propTypes = {}\n\nexport default ${FILE_NAME}",
        type: "Components",
        description:
            "Creates a <strong>React Arrow Function component</strong> with PropTypes and ES7 module system",
        fileTypes: ["jsx", "tsx"]
    },
    {
        prefix: "rcep",
        snippet:
            "import React, { Component } from 'react'\nimport PropTypes from 'prop-types'\n\nexport class ${FILE_NAME} extends Component {\n  static propTypes = {}\n  render() {\n    return (\n      <div>$1</div>\n    )\n  }\n}\n\nexport default ${FILE_NAME}",
        type: "Components",
        description:
            "Creates a <strong>React component</strong> class with PropTypes and ES7 module system",
        fileTypes: ["jsx", "tsx"]
    },
    {
        prefix: "rpc",
        snippet:
            "import React, { PureComponent } from 'react'\n\nexport default class ${FILE_NAME} extends PureComponent {\n  render() {\n    return (\n      <div>$1</div>\n    )\n  }\n}",
        type: "Components",
        description:
            "Creates a <strong>React pure component</strong> class with ES7 module system",
        fileTypes: ["jsx", "tsx"]
    },
    {
        prefix: "rpce",
        snippet:
            "import React, { PureComponent } from 'react'\n\nexport class ${FILE_NAME} extends PureComponent {\n  render() {\n    return (\n      <div>$1</div>\n    )\n  }\n}\n\nexport default ${FILE_NAME}",
        type: "Components",
        description:
            "Creates a <strong>React pure component</strong> class with ES7 module system export",
        fileTypes: ["jsx", "tsx"]
    },
    {
        prefix: "rpcp",
        snippet:
            "import React, { PureComponent } from 'react'\nimport PropTypes from 'prop-types'\n\nexport default class ${FILE_NAME} extends PureComponent {\n  static propTypes = {}\n  render() {\n    return (\n      <div>$1</div>\n    )\n  }\n}",
        type: "Components",
        description:
            "Creates a <strong>React pure component</strong> class with PropTypes and ES7 module system",
        fileTypes: ["jsx", "tsx"]
    },
    {
        prefix: "rmc",
        snippet:
            "import React, { memo } from 'react'\n\nconst ${FILE_NAME} = memo(() => {\n  return (\n    <div>$1</div>\n  )\n})\n\nexport default ${FILE_NAME}",
        type: "Components",
        description:
            "Creates a <strong>React Memo Function component</strong> with ES7 module system",
        fileTypes: ["jsx", "tsx"]
    },
    {
        prefix: "rmcp",
        snippet:
            "import React, { memo } from 'react'\nimport PropTypes from 'prop-types'\n\nconst ${FILE_NAME} = memo((props) => {\n  return (\n    <div>$1</div>\n  )\n})\n\n${FILE_NAME}.propTypes = {}\n\nexport default ${FILE_NAME}",
        type: "Components",
        description:
            "Creates a <strong>React Memo Function component</strong> with PropTypes and ES7 module system",
        fileTypes: ["jsx", "tsx"]
    },
    {
        prefix: "rccp",
        snippet:
            "import React, { Component } from 'react'\nimport PropTypes from 'prop-types'\n\nexport default class ${FILE_NAME} extends Component {\n  static propTypes = {${1}\n  }\n  render() {\n    return (\n      <div>$2</div>\n    )\n  }\n}",
        type: "Components",
        description:
            "Creates a <strong>React component</strong> class with PropTypes and ES7 module system",
        fileTypes: ["jsx", "tsx"]
    },
    {
        prefix: "rcredux",
        snippet:
            "import React, { Component } from 'react'\nimport { connect } from 'react-redux'\n\nexport class ${FILE_NAME} extends Component {\n  render() {\n    return (\n      <div>$1</div>\n    )\n  }\n}\n\nconst mapStateToProps = (state) => ({})\n\nconst mapDispatchToProps = {}\n\nexport default connect(mapStateToProps, mapDispatchToProps)(${FILE_NAME})",
        type: "Components",
        description:
            "Creates a <strong>React component</strong> class with connected redux and ES7 module system",
        fileTypes: ["jsx", "tsx"]
    },
    {
        prefix: "rcreduxp",
        snippet:
            "import React, { Component } from 'react'\nimport PropTypes from 'prop-types'\nimport { connect } from 'react-redux'\n\nexport class ${FILE_NAME} extends Component {\n  static propTypes = {${1}\n  }\n  render() {\n    return (\n      <div>$2</div>\n    )\n  }\n}\n\nconst mapStateToProps = (state) => ({})\n\nconst mapDispatchToProps = {}\n\nexport default connect(mapStateToProps, mapDispatchToProps)(${FILE_NAME})",
        type: "Components",
        description:
            "Creates a <strong>React component</strong> class with PropTypes, connected redux and ES7 module system",
        fileTypes: ["jsx", "tsx"]
    },
    {
        prefix: "rfcredux",
        snippet:
            "import React from 'react'\nimport { connect } from 'react-redux'\n\nconst ${FILE_NAME} = (props) => {\n  return (\n    <div>$1</div>\n  )\n}\n\nconst mapStateToProps = (state) => ({})\n\nconst mapDispatchToProps = {}\n\nexport default connect(mapStateToProps, mapDispatchToProps)(${FILE_NAME})",
        type: "Components",
        description:
            "Creates a <strong>React functional component</strong> with connected redux and ES7 module system",
        fileTypes: ["jsx", "tsx"]
    },
    {
        prefix: "rfcreduxp",
        snippet:
            "import React from 'react'\nimport PropTypes from 'prop-types'\nimport { connect } from 'react-redux'\n\nconst ${FILE_NAME} = (props) => {\n  return (\n    <div>$1</div>\n  )\n}\n\nconst mapStateToProps = (state) => ({})\n\nconst mapDispatchToProps = {}\n\n${FILE_NAME}.propTypes = {${2}\n}\n\nexport default connect(mapStateToProps, mapDispatchToProps)(${FILE_NAME})",
        type: "Components",
        description:
            "DEPRECATED: Creates a <strong>React functional component</strong> with PropTypes, connected redux and ES7 module system",
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
    {
        prefix: "useContextSnippet",
        snippet: `const ${1} = useContext(${2})`,
        type: "Hooks",
        fileTypes: ["jsx", "tsx"]
    },
    {
        prefix: "useStateSnippet",
        snippet: `const [${1}, set${1}] = useState(${2})`,
        type: "Hooks",
        fileTypes: ["jsx", "tsx"]
    },
    {
        prefix: "useReducerSnippet",
        snippet: `const [state, dispatch] = useReducer(${1}, ${2}, ${3})`,
        type: "Hooks",
        fileTypes: ["jsx", "tsx"]
    },
    {
        prefix: "useCallbackSnippet",
        snippet: "useCallback(\n  () => {\n    ${1}\n  },\n  [${2}],\n)\n",
        type: "Hooks",
        fileTypes: ["jsx", "tsx"]
    },
    {
        prefix: "useMemoSnippet",
        snippet: `useMemo(() => ${1}, [${2}])`,
        type: "Hooks",
        fileTypes: ["jsx", "tsx"]
    },
    {
        prefix: "useRefSnippet",
        snippet: `const ${1} = useRef(${2})`,
        type: "Hooks",
        fileTypes: ["jsx", "tsx"]
    },
    {
        prefix: "useImperativeHandleSnippet",
        snippet:
            "useImperativeHandle(\n  ${1},\n  () => {\n    ${2}\n  },\n  [${3}],\n)\n",
        type: "Hooks",
        fileTypes: ["jsx", "tsx"]
    },
    {
        prefix: "useLayoutEffectSnippet",
        snippet:
            "useLayoutEffect(() => {\n  ${1}\n\n  return () => {\n    ${2}\n  };\n}, [${3}])\n",
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
