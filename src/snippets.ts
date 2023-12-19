export interface Snippet {
  prefix: string;
  snippet: string;
  type: string;
  description?: string;
  fileTypes: string[];
}

// snippets array
export const snippets: Snippet[] = [
  // components snippets
  {
    prefix: "rcc",
    snippet:
      "import React, { Component } from 'react'\n\nexport default class ${FILE_NAME} extends Component {\n  render() {\n    return (\n    <div>$1</div>\n  )\n}\n",
    type: "Components",
    description:
      "Creates a <strong>React component</strong> class with ES7 module system",
    fileTypes: ["jsx", "tsx"],
  },
  {
    prefix: "rce",
    snippet:
      "import React, { Component } from 'react'\n\nexport class ${FILE_NAME} extends Component {\n  render() {\n    return (\n      <div>$1</div>\n    )\n  }\n}\n\nexport default ${FILE_NAME}",
    type: "Components",
    description:
      "Creates a <strong>React component</strong> class with ES7 module system",
    fileTypes: ["jsx", "tsx"],
  },
  {
    prefix: "rfce",
    snippet:
      "import React from 'react'\n\nconst ${FILE_NAME} = () => {\n  return (\n    <div>$1</div>\n  )\n}\n\nexport default ${FILE_NAME}",
    type: "Components",
    description:
      "Creates a <strong>React Arrow Function component</strong> with ES7 module system",
    fileTypes: ["jsx", "tsx"],
  },
  {
    prefix: "rfc",
    snippet:
      "import React from 'react'\n\nexport default function ${FILE_NAME}() {\n  return (\n    <div>$1</div>\n  )\n}",
    type: "Components",
    description:
      "Creates a <strong>React Functional component</strong> with ES7 module system",
    fileTypes: ["jsx", "tsx"],
  },
  {
    prefix: "rfcp",
    snippet:
      "import React from 'react'\nimport PropTypes from 'prop-types'\n\nfunction ${FILE_NAME}(props) {\n  return (\n    <div>$1</div>\n  )\n}\n\n${FILE_NAME}.propTypes = {}\n\nexport default ${FILE_NAME}",
    type: "Components",
    description:
      "Creates a <strong>React Functional component</strong> with PropTypes and ES7 module system",
    fileTypes: ["jsx", "tsx"],
  },
  {
    prefix: "rafce",
    snippet:
      "import React from 'react'\n\nconst ${FILE_NAME} = () => {\n  return (\n    <div>$1</div>\n  )\n}\n\nexport default ${FILE_NAME}",
    type: "Components",
    description:
      "Creates a <strong>React Arrow Function component</strong> with ES7 module system",
    fileTypes: ["jsx", "tsx"],
  },
  {
    prefix: "rafc",
    snippet:
      "import React from 'react'\n\nexport const ${FILE_NAME} = () => {\n  return (\n    <div>$1</div>\n  )\n}",
    type: "Components",
    description:
      "Creates a <strong>React Arrow Function component</strong> with ES7 module system",
    fileTypes: ["jsx", "tsx"],
  },
  {
    prefix: "rafcp",
    snippet:
      "import React from 'react'\nimport PropTypes from 'prop-types'\n\nconst ${FILE_NAME} = props => {\n  return (\n    <div>$1</div>\n  )\n}\n\n${FILE_NAME}.propTypes = {}\n\nexport default ${FILE_NAME}",
    type: "Components",
    description:
      "Creates a <strong>React Arrow Function component</strong> with PropTypes and ES7 module system",
    fileTypes: ["jsx", "tsx"],
  },
  {
    prefix: "rcep",
    snippet:
      "import React, { Component } from 'react'\nimport PropTypes from 'prop-types'\n\nexport class ${FILE_NAME} extends Component {\n  static propTypes = {}\n  render() {\n    return (\n      <div>$1</div>\n    )\n  }\n}\n\nexport default ${FILE_NAME}",
    type: "Components",
    description:
      "Creates a <strong>React component</strong> class with PropTypes and ES7 module system",
    fileTypes: ["jsx", "tsx"],
  },
  {
    prefix: "rpc",
    snippet:
      "import React, { PureComponent } from 'react'\n\nexport default class ${FILE_NAME} extends PureComponent {\n  render() {\n    return (\n      <div>$1</div>\n    )\n  }\n}",
    type: "Components",
    description:
      "Creates a <strong>React pure component</strong> class with ES7 module system",
    fileTypes: ["jsx", "tsx"],
  },
  {
    prefix: "rpce",
    snippet:
      "import React, { PureComponent } from 'react'\n\nexport class ${FILE_NAME} extends PureComponent {\n  render() {\n    return (\n      <div>$1</div>\n    )\n  }\n}\n\nexport default ${FILE_NAME}",
    type: "Components",
    description:
      "Creates a <strong>React pure component</strong> class with ES7 module system export",
    fileTypes: ["jsx", "tsx"],
  },
  {
    prefix: "rpcp",
    snippet:
      "import React, { PureComponent } from 'react'\nimport PropTypes from 'prop-types'\n\nexport default class ${FILE_NAME} extends PureComponent {\n  static propTypes = {}\n  render() {\n    return (\n      <div>$1</div>\n    )\n  }\n}",
    type: "Components",
    description:
      "Creates a <strong>React pure component</strong> class with PropTypes and ES7 module system",
    fileTypes: ["jsx", "tsx"],
  },
  {
    prefix: "rmc",
    snippet:
      "import React, { memo } from 'react'\n\nconst ${FILE_NAME} = memo(() => {\n  return (\n    <div>$1</div>\n  )\n})\n\nexport default ${FILE_NAME}",
    type: "Components",
    description:
      "Creates a <strong>React Memo Function component</strong> with ES7 module system",
    fileTypes: ["jsx", "tsx"],
  },
  {
    prefix: "rmcp",
    snippet:
      "import React, { memo } from 'react'\nimport PropTypes from 'prop-types'\n\nconst ${FILE_NAME} = memo((props) => {\n  return (\n    <div>$1</div>\n  )\n})\n\n${FILE_NAME}.propTypes = {}\n\nexport default ${FILE_NAME}",
    type: "Components",
    description:
      "Creates a <strong>React Memo Function component</strong> with PropTypes and ES7 module system",
    fileTypes: ["jsx", "tsx"],
  },
  {
    prefix: "rccp",
    snippet:
      "import React, { Component } from 'react'\nimport PropTypes from 'prop-types'\n\nexport default class ${FILE_NAME} extends Component {\n  static propTypes = {${1:first}\n  }\n  render() {\n    return (\n      <div>$2</div>\n    )\n  }\n}",
    type: "Components",
    description:
      "Creates a <strong>React component</strong> class with PropTypes and ES7 module system",
    fileTypes: ["jsx", "tsx"],
  },
  {
    prefix: "rcredux",
    snippet:
      "import React, { Component } from 'react'\nimport { connect } from 'react-redux'\n\nexport class ${FILE_NAME} extends Component {\n  render() {\n    return (\n      <div>$1</div>\n    )\n  }\n}\n\nconst mapStateToProps = (state) => ({})\n\nconst mapDispatchToProps = {}\n\nexport default connect(mapStateToProps, mapDispatchToProps)(${FILE_NAME})",
    type: "Components",
    description:
      "Creates a <strong>React component</strong> class with connected redux and ES7 module system",
    fileTypes: ["jsx", "tsx"],
  },
  {
    prefix: "rcreduxp",
    snippet:
      "import React, { Component } from 'react'\nimport PropTypes from 'prop-types'\nimport { connect } from 'react-redux'\n\nexport class ${FILE_NAME} extends Component {\n  static propTypes = {${1:first}\n  }\n  render() {\n    return (\n      <div>$2</div>\n    )\n  }\n}\n\nconst mapStateToProps = (state) => ({})\n\nconst mapDispatchToProps = {}\n\nexport default connect(mapStateToProps, mapDispatchToProps)(${FILE_NAME})",
    type: "Components",
    description:
      "Creates a <strong>React component</strong> class with PropTypes, connected redux and ES7 module system",
    fileTypes: ["jsx", "tsx"],
  },
  {
    prefix: "rfcredux",
    snippet:
      "import React from 'react'\nimport { connect } from 'react-redux'\n\nconst ${FILE_NAME} = (props) => {\n  return (\n    <div>$1</div>\n  )\n}\n\nconst mapStateToProps = (state) => ({})\n\nconst mapDispatchToProps = {}\n\nexport default connect(mapStateToProps, mapDispatchToProps)(${FILE_NAME})",
    type: "Components",
    description:
      "Creates a <strong>React functional component</strong> with connected redux and ES7 module system",
    fileTypes: ["jsx", "tsx"],
  },
  {
    prefix: "rfcreduxp",
    snippet:
      "import React from 'react'\nimport PropTypes from 'prop-types'\nimport { connect } from 'react-redux'\n\nconst ${FILE_NAME} = (props) => {\n  return (\n    <div>$1</div>\n  )\n}\n\nconst mapStateToProps = (state) => ({})\n\nconst mapDispatchToProps = {}\n\n${FILE_NAME}.propTypes = {${2:second}\n}\n\nexport default connect(mapStateToProps, mapDispatchToProps)(${FILE_NAME})",
    type: "Components",
    description:
      "DEPRECATED: Creates a <strong>React functional component</strong> with PropTypes, connected redux and ES7 module system",
    fileTypes: ["jsx", "tsx"],
  },
  // hooks snippets
  {
    prefix: "useEffectSnippet",
    snippet:
      "useEffect(() => {\n  ${1:first}\n  return () => {\n    ${2:second}\n  }\n}, [${3:third}])\n",
    type: "Hooks",
    fileTypes: ["jsx", "tsx"],
  },
  {
    prefix: "useContextSnippet",
    snippet: "const ${1:first} = useContext(${2:second})",
    type: "Hooks",
    fileTypes: ["jsx", "tsx"],
  },
  {
    prefix: "useStateSnippet",
    snippet: "const [${1:first}, set${1:first}] = useState(${2:second})",
    type: "Hooks",
    fileTypes: ["jsx", "tsx"],
  },
  {
    prefix: "useReducerSnippet",
    snippet:
      "const [state, dispatch] = useReducer(${1:first}, ${2:second}, ${3:third})",
    type: "Hooks",
    fileTypes: ["jsx", "tsx"],
  },
  {
    prefix: "useCallbackSnippet",
    snippet:
      "useCallback(\n  () => {\n    ${1:first}\n  },\n  [${2:second}],\n)\n",
    type: "Hooks",
    fileTypes: ["jsx", "tsx"],
  },
  {
    prefix: "useMemoSnippet",
    snippet: "useMemo(() => ${1:first}, [${2:second}])",
    type: "Hooks",
    fileTypes: ["jsx", "tsx"],
  },
  {
    prefix: "useRefSnippet",
    snippet: "const ${1:first} = useRef(${2:second})",
    type: "Hooks",
    fileTypes: ["jsx", "tsx"],
  },
  {
    prefix: "useImperativeHandleSnippet",
    snippet:
      "useImperativeHandle(\n  ${1:first},\n  () => {\n    ${2:second}\n  },\n  [${3:third}],\n)\n",
    type: "Hooks",
    fileTypes: ["jsx", "tsx"],
  },
  {
    prefix: "useLayoutEffectSnippet",
    snippet:
      "useLayoutEffect(() => {\n  ${1:first}\n\n  return () => {\n    ${2:second}\n  };\n}, [${3:third}])\n",
    type: "Hooks",
    fileTypes: ["jsx", "tsx"],
  },
  // imports snippet
  {
    prefix: "imr",
    snippet: "import React from 'react'",
    type: "ImportReact",
    fileTypes: ["jsx", "tsx"],
  },
  {
    prefix: "imrd",
    snippet: "import ReactDOM from 'react-dom'",
    type: "ImportReactDom",
    fileTypes: ["jsx", "tsx"],
  },
  {
    prefix: "imrc",
    snippet: "import React, { Component } from 'react'",
    type: "ImportReactWithComponent",
    fileTypes: ["jsx", "tsx"],
  },
  {
    prefix: "imrcp",
    snippet:
      "import React, { Component } from 'react'\nimport PropTypes from 'prop-types'",
    type: "ImportReactWithComponentAndPropTypes",
    fileTypes: ["jsx", "tsx"],
  },
  {
    prefix: "imrpc",
    snippet: "import React, { PureComponent } from 'react'",
    type: "ImportReactWithPureComponent",
    fileTypes: ["jsx", "tsx"],
  },
  {
    prefix: "imrpcp",
    snippet:
      "import React, { PureComponent } from 'react'\nimport PropTypes from 'prop-types'",
    type: "ImportReactWithPureComponent&PropTypes",
    fileTypes: ["jsx", "tsx"],
  },
  {
    prefix: "imrm",
    snippet: "import React, { memo } from 'react'",
    type: "ImportReactWithMemo",
    fileTypes: ["jsx", "tsx"],
  },
  {
    prefix: "imrmp",
    snippet:
      "import React, { memo } from 'react'\nimport PropTypes from 'prop-types'",
    type: "ImportReactWithMemo&PropTypes",
    fileTypes: ["jsx", "tsx"],
  },
  {
    prefix: "impt",
    snippet: "import PropTypes from 'prop-types'",
    type: "ImportPropTypes",
    fileTypes: ["jsx", "tsx"],
  },
  // react-router
  {
    prefix: "imbr",
    snippet: "import { BrowserRouter as Router } from 'react-router-dom'",
    type: "ReactRouter",
    fileTypes: ["jsx", "tsx"],
  },
  {
    prefix: "imrr",
    snippet:
      "import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'",
    type: "ReactRouterWithRouteAndNavLink",
    fileTypes: ["jsx", "tsx"],
  },
  {
    prefix: "imbrc",
    snippet: "import { Route, Switch, NavLink, Link } from 'react-router-dom'",
    type: "ImportRouterSetup",
    fileTypes: ["jsx", "tsx"],
  },
  {
    prefix: "imbrs",
    snippet: "import { Switch } from 'react-router-dom'",
    type: "ImportRouterSwitch",
    fileTypes: ["jsx", "tsx"],
  },
  {
    prefix: "imbrl",
    snippet: "import { Link } from 'react-router-dom'",
    type: "ImportRouterLink",
    fileTypes: ["jsx", "tsx"],
  },
  {
    prefix: "imbrnl",
    snippet: "import { NavLink } from 'react-router-dom'",
    type: "ImportRouterNavLink",
    fileTypes: ["jsx", "tsx"],
  },
  // other imports
  {
    prefix: "imp",
    snippet: "import ${2:Name} from '${1:first}'",
    type: "Import",
    fileTypes: ["jsx", "tsx"],
  },
  {
    prefix: "imn",
    snippet: "import '${1:first}'",
    type: "ImportNoModuleName",
    fileTypes: ["jsx", "tsx"],
  },
  {
    prefix: "imd",
    snippet: "import { ${2:Component} } from '${1:first}'",
    type: "ImportDestructing",
    fileTypes: ["jsx", "tsx"],
  },
  {
    prefix: "ime",
    snippet: "import * as ${2:comp} from '${1:first}'",
    type: "ImportEverything",
    fileTypes: ["jsx", "tsx"],
  },
  {
    prefix: "ima",
    snippet: "import { ${2:Component} as ${3:third} } from '${1:first}'",
    type: "ImportAs",
    fileTypes: ["jsx", "tsx"],
  },
  {
    prefix: "req",
    snippet: "const ${1:packageName} = require('${1:package}')$0",
    type: "RequireToConst",
    description: "Require a package to const",
    fileTypes: ["tsx", "javascript"],
  },
  // basics
  {
    prefix: "exp",
    snippet: "export default ${1:first}",
    type: "ExportDefault",
    fileTypes: ["jsx", "tsx"],
  },
  {
    prefix: "exd",
    snippet: "export { ${2:second} } from '${1:first}'",
    type: "ExportDestructing",
    fileTypes: ["jsx", "tsx"],
  },
  {
    prefix: "exa",
    snippet: "export { ${2:second} as ${3:third} } from '${1:first}'",
    type: "ExportAs",
    fileTypes: ["jsx", "tsx"],
  },
  {
    prefix: "enf",
    snippet: "export const ${1:first} = (${2:second}) => {${3:third}}",
    type: "ExportNamedFunction",
    description: "Export named function",
    fileTypes: ["jsx", "tsx"],
  },
  {
    prefix: "edf",
    snippet: "export default (${1:first}) => {${2:second}}",
    type: "ExportDefaultFunction",
    description: "Export default function",
    fileTypes: ["jsx", "tsx"],
  },
  {
    prefix: "ednf",
    snippet: "export default function ${1:first}(${2:second}) {${3:third}}",
    type: "ExportDefaultNamedFunction",
    description: "Export default named function",
    fileTypes: ["jsx", "tsx"],
  },
  {
    prefix: "met",
    snippet: "${1:first} = (${2:second}) => {${3:third}}",
    type: "Method",
    description: "Creates a method inside a class",
    fileTypes: ["jsx", "tsx"],
  },
  {
    prefix: "pge",
    snippet: "get ${1:first}() {\n  return this.${2:second}\n}",
    type: "PropertyGet",
    description: "Creates a getter property inside a class",
    fileTypes: ["jsx", "tsx"],
  },
  {
    prefix: "pse",
    snippet: "set ${1:first}(${2:second}) {${3:third}}",
    type: "PropertySet",
    description: "Creates a setter property inside a class",
    fileTypes: ["jsx", "tsx"],
  },
  {
    prefix: "fre",
    snippet: "${1:first}.forEach(${2:second} => {${3:third}})",
    type: "ForEach",
    description: "Creates a forEach statement",
    fileTypes: ["jsx", "tsx"],
  },
  {
    prefix: "fof",
    snippet: "for(let ${1:first} of ${2:second}) {${3:third}}",
    type: "ForOf",
    description: "Iterating over property names of iterable objects",
    fileTypes: ["jsx", "tsx"],
  },
  {
    prefix: "fin",
    snippet: "for(let ${1:first} in ${2:second}) {${3:third}}",
    type: "ForIn",
    description: "Iterating over property values of iterable objects",
    fileTypes: ["jsx", "tsx"],
  },
  {
    prefix: "anfn",
    snippet: "(${1:first}) => { ${2:second} }",
    type: "AnonymousFunction",
    description: "Creates an anonymous function",
    fileTypes: ["jsx", "tsx"],
  },
  {
    prefix: "nfn",
    snippet: "const ${1:first} = (${2:second}) => { ${3:third} }",
    type: "NamedFunction",
    description: "Creates a named function",
    fileTypes: ["jsx", "tsx"],
  },
  {
    prefix: "dob",
    snippet: "const {${2:second}} = ${1:first}",
    type: "DestructingObject",
    description:
      "Creates and assigns a local variable using object destructing",
    fileTypes: ["jsx", "tsx"],
  },
  {
    prefix: "dar",
    snippet: "const [${2:second}] = ${1:first}",
    type: "DestructingArray",
    description: "Creates and assigns a local variable using array destructing",
    fileTypes: ["jsx", "tsx"],
  },
  {
    prefix: "sti",
    snippet: "setInterval(() => { ${1:first} }, ${2:second})",
    type: "SetInterval",
    description: "Executes the given function at specified intervals",
    fileTypes: ["jsx", "tsx"],
  },
  {
    prefix: "sto",
    snippet: "setTimeout(() => { ${1:first} }, ${2:second})",
    type: "SetTimeOut",
    description: "Executes the given function after the specified delay",
    fileTypes: ["jsx", "tsx"],
  },
  {
    prefix: "prom",
    snippet: "return new Promise((resolve, reject) => { ${1:first} })",
    type: "Promise",
    description: "Creates and returns a new Promise in the standard ES7 syntax",
    fileTypes: ["jsx", "tsx"],
  },
  {
    prefix: "cp",
    snippet: "const { ${1:first} } = this.props",
    type: "DestructProps",
    description: "Creates and assigns a local variable using props destructing",
    fileTypes: ["jsx", "tsx"],
  },
  {
    prefix: "cs",
    snippet: "const { ${1:first} } = this.state",
    type: "DestructState",
    description: "Creates and assigns a local variable using state destructing",
    fileTypes: ["jsx", "tsx"],
  },
  {
    prefix: "rconst",
    snippet:
      "constructor(props) {\n  super(props)\n  this.state = {\n     ${1:first}\n  }\n}",
    type: "ClassConstructor",
    description:
      "Adds a default constructor for it<code>('', () => {})</code>the class that contains props as arguments",
    fileTypes: ["jsx", "tsx"],
  },
  {
    prefix: "est",
    snippet: "state = { ${1:first} }",
    type: "EmptyState",
    description: "Creates empty state object. To be used in a constructor.",
    fileTypes: ["jsx", "tsx"],
  },
  {
    prefix: "cdm",
    snippet: "componentDidMount() { ${1:first} }",
    type: "ComponentDidMount",
    description:
      "Invoked once, only on the client (not on the server), immediately after the initial rendering occurs.",
    fileTypes: ["jsx", "tsx"],
  },
  {
    prefix: "scu",
    snippet: "shouldComponentUpdate(nextProps, nextState) { ${1:first} }",
    type: "ShouldComponentUpdate",
    description:
      "Invoked before rendering when new props or state are being received. ",
    fileTypes: ["jsx", "tsx"],
  },
  {
    prefix: "cdup",
    snippet: "componentDidUpdate(prevProps, prevState) { ${1:first}}",
    type: "ComponentDidUpdate",
    description:
      "Invoked immediately after the component's updates are flushed to the DOM.",
    fileTypes: ["jsx", "tsx"],
  },
  {
    prefix: "cwun",
    snippet: "componentWillUnmount() {${1:first} }",
    type: "ComponentWillUnmount",
    description:
      "Invoked immediately before a component is unmounted from the DOM.",
    fileTypes: ["jsx", "tsx"],
  },
  {
    prefix: "gdsfp",
    snippet: "static getDerivedStateFromProps(props, state) {${1:first}}",
    type: "GetDerivedStateFromProps",
    description:
      "Invoked right before calling the render method, both on the initial mount and on subsequent updates.",
    fileTypes: ["jsx", "tsx"],
  },
  {
    prefix: "gsbu",
    snippet: "getSnapshotBeforeUpdate = (prevProps, prevState) => {${1:first}}",
    type: "GetSnapshotBeforeUpdate",
    description:
      "Called right before mutations are made (e.g. before the DOM is updated)",
    fileTypes: ["jsx", "tsx"],
  },
  {
    prefix: "rcontext",
    snippet: "const ${1:first} = React.createContext()",
    type: "CreateContext",
    description: "Create React context",
    fileTypes: ["jsx", "tsx"],
  },
  {
    prefix: "cref",
    snippet: "this.${1:first}Ref = React.createRef()",
    type: "CreateRef",
    description: "Create ref statement used inside constructor",
    fileTypes: ["jsx", "tsx"],
  },
  {
    prefix: "sst",
    snippet: "this.setState((state, props) => { return { ${1:first} }})",
    type: "ComponentSetStateObject",
    description: "Performs a shallow merge of nextState into current state",
    fileTypes: ["jsx", "tsx"],
  },
  {
    prefix: "ssf",
    snippet: "this.setState((state, props) => { return { ${1:first} }})",
    type: "ComponentSetStateFunc",
    description: "Performs a shallow merge of nextState into current state",
    fileTypes: ["jsx", "tsx"],
  },
  {
    prefix: "props",
    snippet: "this.props.${1:first}",
    type: "ComponentProps",
    description: "Access component's props",
    fileTypes: ["jsx", "tsx"],
  },
  {
    prefix: "state",
    snippet: "this.state.${1:first}",
    type: "ComponentState",
    fileTypes: ["jsx", "tsx"],
  },
  {
    prefix: "bnd",
    snippet: "this.${1:first} = this.${1:first}.bind(this)",
    type: "BindThis",
    description: "Binds this to a method",
    fileTypes: ["jsx", "tsx"],
  },
  {
    prefix: "cmmb",
    snippet: "/**\n * ${1:first}\n */",
    type: "CommentBigBlock",
    fileTypes: ["jsx", "tsx"],
  },
  {
    prefix: "hocredux",
    snippet:
      "import React from 'react'\nimport { connect } from 'react-redux'\nimport PropTypes from 'prop-types'\n\nexport const mapStateToProps = state => ({})\n\nexport const mapDispatchToProps = {}\n\nexport const ${1:first} = (WrappedComponent) => {\n  const hocComponent = ({ ...props }) => <WrappedComponent {...props} />\n\n  hocComponent.propTypes = {}\n\n  return hocComponent\n}\n\nexport default WrapperComponent => connect(mapStateToProps, mapDispatchToProps)(${1:first}(WrapperComponent))\n",
    type: "HocComponentWithRedux",
    fileTypes: ["jsx", "tsx"],
  },
  {
    prefix: "hoc",
    snippet:
      "import React from 'react'\nimport PropTypes from 'prop-types'\n\nexport default (WrappedComponent) => {\n  const hocComponent = ({ ...props }) => <WrappedComponent {...props} />\n\n  hocComponent.propTypes = {}\n\n  return hocComponent\n}\n",
    type: "HocComponent",
    fileTypes: ["jsx", "tsx"],
  },
  {
    prefix: "tpf",
    snippet: "typeof ${1:first}",
    type: "TypeofSnippet",
    fileTypes: ["jsx", "tsx", "javascript"],
  },
  {
    prefix: "call",
    snippet: "${1:method}.call(${2:context}, ${3:arguments})$4",
    type: "function call",
    description:
      "Calls the function with the specified object as the this value and the specified rest arguments as the arguments.",
    fileTypes: ["jsx", "tsx", "javascript"],
  },
  {
    prefix: "apply",
    snippet: "${1:method}.apply(${2:context}, ${3:arguments})$4",
    type: "function apply",
    description:
      "Calls the function with the specified object as the this value and the elements of specified array as the arguments.",
    fileTypes: ["jsx", "tsx", "javascript"],
  },
  {
    prefix: "jp",
    snippet: "JSON.parse(${1:obj})$2",
    type: "JSON",
    description:
      "Converts a JavaScript Object Notation (JSON) string into an object",
    fileTypes: ["jsx", "tsx", "javascript"],
  },
  {
    prefix: "javascript",
    snippet: "JSON.stringify(${1:obj})$2",
    type: "JSON",
    description:
      "Converts a JavaScript value to a JavaScript Object Notation (JSON) string.",
    fileTypes: ["jsx", "tsx", "javascript"],
  },
  {
    prefix: "us",
    snippet: "'use strict'$1",
    type: "use strict",
    description: "Use Javascript strict mode",
    fileTypes: ["tsx", "javascript"],
  },
  {
    prefix: "al",
    snippet: "alert('${1:message}')$2",
    type: "alert",
    fileTypes: ["jsx", "tsx", "javascript"],
  },
  {
    prefix: "pr",
    snippet: "prompt('${1:message}')$2",
    type: "prompt",
    fileTypes: ["jsx", "tsx", "javascript"],
  },
  {
    prefix: "cf",
    snippet: "confirm('${1:msg}');$2",
    type: "confirm",
    fileTypes: ["jsx", "tsx", "javascript"],
  },
  // js console snippets
  {
    prefix: "cas",
    snippet: "console.assert(${1:first}, ${2:second})",
    type: "ConsoleAssert",
    description:
      "If the specified expression is false, the message is written to the console along with a stack trace",
    fileTypes: ["jsx", "tsx"],
  },
  {
    prefix: "ccl",
    snippet: "console.clear()",
    type: "ConsoleClear",
    description: "Clears the console",
    fileTypes: ["jsx", "tsx"],
  },
  {
    prefix: "cco",
    snippet: "console.count(${1:first})",
    type: "ConsoleCount",
    description:
      "Writes the the number of times that <code>count()</code> has been invoked at the same line and with the same label",
    fileTypes: ["jsx", "tsx"],
  },
  {
    prefix: "cdi",
    snippet: "console.dir(${1:first})",
    type: "ConsoleDir",
    description: "Prints a JavaScript representation of the specified object",
    fileTypes: ["jsx", "tsx"],
  },
  {
    prefix: "cer",
    snippet: "console.error(${1:first})",
    type: "ConsoleError",
    description:
      "Displays a message in the console and also includes a stack trace from where the method was called",
    fileTypes: ["jsx", "tsx"],
  },
  {
    prefix: "cgr",
    snippet: "console.group('${1:first}')",
    type: "ConsoleGroup",
    description:
      "Groups and indents all following output by an additional level, until <code>console.groupEnd()</code> is called.",
    fileTypes: ["jsx", "tsx"],
  },
  {
    prefix: "cge",
    snippet: "console.groupEnd()",
    type: "ConsoleGroupEnd",
    description: "Closes out the corresponding <code>console.group()</code>.",
    fileTypes: ["jsx", "tsx"],
  },
  {
    prefix: "clg",
    snippet: "console.log(${1:first})",
    type: "ConsoleLog",
    description: "Displays a message in the console",
    fileTypes: ["jsx", "tsx"],
  },
  {
    prefix: "ctr",
    snippet: "console.trace(${1:first})",
    type: "ConsoleTrace",
    description:
      "Prints a stack trace from the point where the method was called",
    fileTypes: ["jsx", "tsx"],
  },
  {
    prefix: "clo",
    snippet: "console.log('${1:first}', ${2:second})",
    type: "ConsoleLogObject",
    description: "Logs property with name.",
    fileTypes: ["jsx", "tsx"],
  },
  {
    prefix: "clj",
    snippet: "console.log('${1:first}', JSON.stringify(${1:first}, null, 2))",
    type: "ConsoleLogJson",
    description: "Logs stringified JSON property with name.",
    fileTypes: ["jsx", "tsx"],
  },
  {
    prefix: "ctm",
    snippet: "console.time('${1:first}')",
    type: "ConsoleTime",
    description: "Console time wrapper",
    fileTypes: ["jsx", "tsx"],
  },
  {
    prefix: "cte",
    snippet: "console.timeEnd('${1:first}')",
    type: "ConsoleTimeEnd",
    description: "Console time end wrapper",
    fileTypes: ["jsx", "tsx"],
  },
  {
    prefix: "cwa",
    snippet: "console.warn(${1:first})",
    type: "ConsoleWarn",
    description:
      "Displays a message in the console but also displays a yellow warning icon along with the logged message",
    fileTypes: ["jsx", "tsx"],
  },
  {
    prefix: "cin",
    snippet: "console.info(${1:first})",
    type: "ConsoleInfo",
    description:
      "Displays a message in the console but also displays a blue information icon along with the logged message",
    fileTypes: ["jsx", "tsx"],
  },
  {
    prefix: "ctl",
    snippet: "console.table([${1:first}])",
    type: "ConsoleTable",
    description: "Logs table to console",
    fileTypes: ["jsx", "tsx"],
  },
  // prop types
  {
    prefix: "pta",
    snippet: "PropTypes.array",
    type: "PropTypeArray",
    description: "Array prop type",
    fileTypes: ["jsx", "tsx"],
  },
  {
    prefix: "ptar",
    snippet: "PropTypes.array.isRequired",
    type: "PropTypeArrayRequired",
    description: "Array prop type required",
    fileTypes: ["jsx", "tsx"],
  },
  {
    prefix: "ptb",
    snippet: "PropTypes.bool",
    type: "PropTypeBool",
    description: "Bool prop type",
    fileTypes: ["jsx", "tsx"],
  },
  {
    prefix: "ptbr",
    snippet: "PropTypes.bool.isRequired",
    type: "PropTypeBoolRequired",
    description: "Bool prop type required",
    fileTypes: ["jsx", "tsx"],
  },
  {
    prefix: "ptf",
    snippet: "PropTypes.func",
    type: "PropTypeFunc",
    description: "Func prop type",
    fileTypes: ["jsx", "tsx"],
  },
  {
    prefix: "ptfr",
    snippet: "PropTypes.func.isRequired",
    type: "PropTypeFuncRequired",
    description: "Func prop type required",
    fileTypes: ["jsx", "tsx"],
  },
  {
    prefix: "ptn",
    snippet: "PropTypes.number",
    type: "PropTypeNumber",
    description: "Number prop type",
    fileTypes: ["jsx", "tsx"],
  },
  {
    prefix: "ptnr",
    snippet: "PropTypes.number.isRequired",
    type: "PropTypeNumberRequired",
    description: "Number prop type required",
    fileTypes: ["jsx", "tsx"],
  },
  {
    prefix: "pto",
    snippet: "PropTypes.object",
    type: "PropTypeObject",
    description: "Object prop type",
    fileTypes: ["jsx", "tsx"],
  },
  {
    prefix: "ptor",
    snippet: "PropTypes.object.isRequired",
    type: "PropTypeObjectRequired",
    description: "Object prop type required",
    fileTypes: ["jsx", "tsx"],
  },
  {
    prefix: "pts",
    snippet: "PropTypes.string",
    type: "PropTypeString",
    description: "String prop type",
    fileTypes: ["jsx", "tsx"],
  },
  {
    prefix: "ptsr",
    snippet: "PropTypes.string.isRequired",
    type: "PropTypeStringRequired",
    description: "String prop type required",
    fileTypes: ["jsx", "tsx"],
  },
  {
    prefix: "ptnd",
    snippet: "PropTypes.node",
    type: "PropTypeNode",
    description:
      "Anything that can be rendered: numbers, strings, elements or an array",
    fileTypes: ["jsx", "tsx"],
  },
  {
    prefix: "ptndr",
    snippet: "PropTypes.node.isRequired",
    type: "PropTypeNodeRequired",
    description:
      "Anything that can be rendered: numbers, strings, elements or an array required",
    fileTypes: ["jsx", "tsx"],
  },
  {
    prefix: "ptel",
    snippet: "PropTypes.element",
    type: "PropTypeElement",
    description: "React element prop type",
    fileTypes: ["jsx", "tsx"],
  },
  {
    prefix: "ptelr",
    snippet: "PropTypes.element.isRequired",
    type: "PropTypeElementRequired",
    description: "React element prop type required",
    fileTypes: ["jsx", "tsx"],
  },
  {
    prefix: "pti",
    snippet: "PropTypes.instanceOf(${1:ClassName})",
    type: "PropTypeInstanceOf",
    description: "Is an instance of a class prop type",
    fileTypes: ["jsx", "tsx"],
  },
  {
    prefix: "ptir",
    snippet: "PropTypes.instanceOf(${1:ClassName}).isRequired",
    type: "PropTypeInstanceOfRequired",
    description: "Is an instance of a class prop type required",
    fileTypes: ["jsx", "tsx"],
  },
  {
    prefix: "pte",
    snippet: "PropTypes.oneOf(['${1:value1}', '${2:value2}'])",
    type: "PropTypeEnum",
    description:
      "Prop type limited to specific values by treating it as an enum",
    fileTypes: ["jsx", "tsx"],
  },
  {
    prefix: "pter",
    snippet: "PropTypes.oneOf(['${1:value1}', '${2:value2}']).isRequired",
    type: "PropTypeEnumRequired",
    description:
      "Prop type limited to specific values by treating it as an enum required",
    fileTypes: ["jsx", "tsx"],
  },
  {
    prefix: "ptet",
    snippet:
      "PropTypes.oneOfType([\n  ${1:PropTypes.string},\n  ${2:PropTypes.number},\n  ${3:PropTypes.bool}\n])",
    type: "PropTypeOneOfType",
    description: "An object that could be one of many types",
    fileTypes: ["jsx", "tsx"],
  },
  {
    prefix: "ptetr",
    snippet:
      "PropTypes.oneOfType([\n  ${1:PropTypes.string},\n  ${2:PropTypes.number},\n  ${3:PropTypes.bool}\n]).isRequired",
    type: "PropTypeOneOfTypeRequired",
    description: "An object that could be one of many types required",
    fileTypes: ["jsx", "tsx"],
  },
  {
    prefix: "ptao",
    snippet: "PropTypes.arrayOf(${1:PropTypes.string})",
    type: "PropTypeArrayOf",
    description: "An array of a certain type",
    fileTypes: ["jsx", "tsx"],
  },
  {
    prefix: "ptaor",
    snippet: "PropTypes.arrayOf(${1:PropTypes.string}).isRequired",
    type: "PropTypeArrayOfRequired",
    description: "An array of a certain type required",
    fileTypes: ["jsx", "tsx"],
  },
  {
    prefix: "ptoo",
    snippet: "PropTypes.objectOf(${1:PropTypes.number})",
    type: "PropTypeObjectOf",
    description: "An object with property values of a certain type",
    fileTypes: ["jsx", "tsx"],
  },
  {
    prefix: "ptoor",
    snippet: "PropTypes.objectOf(${1:PropTypes.number}).isRequired",
    type: "PropTypeObjectOfRequired",
    description: "An object with property values of a certain type required",
    fileTypes: ["jsx", "tsx"],
  },
  {
    prefix: "ptsh",
    snippet:
      "PropTypes.shape({\n  ${1:propertyName}: ${2:PropTypes.string},\n  ${3:propertyName2}: ${4:PropTypes.number}\n})",
    type: "PropTypeShape",
    description: "An object taking on a particular shape",
    fileTypes: ["jsx", "tsx"],
  },
  {
    prefix: "ptshr",
    snippet:
      "PropTypes.shape({\n  ${1:propertyName}: ${2:PropTypes.string},\n  ${3:propertyName2}: ${4:PropTypes.number}\n}).isRequired",
    type: "PropTypeShapeRequired",
    description: "An object taking on a particular shape required",
    fileTypes: ["jsx", "tsx"],
  },
  {
    prefix: "ptex",
    snippet:
      "PropTypes.exact({\n  ${1:propertyName}: ${2:PropTypes.string},\n  ${3:propertyName2}: ${4:PropTypes.number}\n})",
    type: "PropTypeExact",
    description: "An object with warnings on extra properties",
    fileTypes: ["jsx", "tsx"],
  },
  {
    prefix: "ptexr",
    snippet:
      "PropTypes.exact({\n  ${1:propertyName}: ${2:PropTypes.string},\n  ${3:propertyName2}: ${4:PropTypes.number}\n}).isRequired",
    type: "PropTypeExactRequired",
    description: "An object with warnings on extra properties required",
    fileTypes: ["jsx", "tsx"],
  },
  {
    prefix: "ptany",
    snippet: "PropTypes.any",
    type: "PropTypeAny",
    description: "Any prop type",
    fileTypes: ["jsx", "tsx"],
  },
  {
    prefix: "desc",
    snippet: "describe('${1:first}', () => { ${2:second} })",
    type: "describeBlock",
    description: "Testing `describe` block",
    fileTypes: ["jsx", "tsx"],
  },
  {
    prefix: "test",
    snippet: "test('should ${1:first}', () => { ${2:second} })",
    type: "TestBlock",
    description: "Testing `test` block",
    fileTypes: ["jsx", "tsx"],
  },
  {
    prefix: "testa",
    snippet: "test('should ${1:first}', async () => { ${2:second} })",
    type: "TestAsyncBlock",
    description: "Testing `asynchronous test` block",
    fileTypes: ["jsx", "tsx"],
  },
  {
    prefix: "tit",
    snippet: "it('should ${1:first}', () => { ${2:second} })",
    type: "ItBlock",
    description: "Testing `it` block",
    fileTypes: ["jsx", "tsx"],
  },
  {
    prefix: "tita",
    snippet: "it('should ${1:first}', async () => { ${2:second} })",
    type: "ItAsyncBlock",
    description: "Testing asynchronous `it` block",
    fileTypes: ["jsx", "tsx"],
  },
  {
    prefix: "stest",
    snippet:
      "import React from 'react'\nimport renderer from 'react-test-renderer'\n\nimport { ${1:${FILE_NAME}} } from '../${1:${FILE_NAME}}'\n\ndescribe('<${1:${FILE_NAME}} />', () => {\n  const defaultProps = {}\n  const wrapper = renderer.create(<${1:${FILE_NAME}} {...defaultProps} />)\n\n  test('render', () => {\n    expect(wrapper).toMatchSnapshot()\n  })\n})",
    type: "SetupReactTest",
    fileTypes: ["jsx", "tsx"],
  },
  {
    prefix: "sntest",
    snippet:
      "import 'react-native'\nimport React from 'react'\nimport renderer from 'react-test-renderer'\n\nimport ${1:${FILE_NAME}} from '../${1:${FILE_NAME}}'\n\ndescribe('<${1:${FILE_NAME}} />', () => {\n  const defaultProps = {}\n  const wrapper = renderer.create(<${1:${FILE_NAME}} {...defaultProps} />)\n\n  test('render', () => {\n    expect(wrapper).toMatchSnapshot()\n  })\n})",
    type: "SetupReactNativeTest",
    fileTypes: ["jsx", "tsx"],
  },
  {
    prefix: "srtest",
    snippet:
      "import React from 'react'\nimport renderer from 'react-test-renderer'\nimport { Provider } from 'react-redux'\n\nimport store from '~/store'\nimport { ${1:${FILE_NAME}} } from '../${1:${FILE_NAME}}'\n\ndescribe('<${1:${FILE_NAME}} />', () => {\n  const defaultProps = {}\n  const wrapper = renderer.create(\n    <Provider store={store}>\n     <${1:${FILE_NAME}} {...defaultProps} />\n    </Provider>,\n  )\n\n  test('render', () => {\n    expect(wrapper).toMatchSnapshot()\n  })\n})",
    type: "SetupReactComponentTestWithRedux",
    description: "Create test component",
    fileTypes: ["jsx", "tsx"],
  },
  {
    prefix: "snrtest",
    snippet:
      "import 'react-native'\nimport React from 'react'\nimport renderer from 'react-test-renderer'\nimport { Provider } from 'react-redux'\n\nimport store from '~/store'\nimport ${1:${FILE_NAME}} from '../${1:${FILE_NAME}}'\n\ndescribe('<${1:${FILE_NAME}} />', () => {\n  const defaultProps = {}\n  const wrapper = renderer.create(\n    <Provider store={store}>\n      <${1:${FILE_NAME}} {...defaultProps} />\n    </Provider>,\n  )\n\n  test('render', () => {\n    expect(wrapper).toMatchSnapshot()\n  })\n})",
    type: "SetupReactNativeTestWithRedux",
    fileTypes: ["jsx", "tsx"],
  },
  //Redux snippets
  {
    prefix: "redux",
    snippet: "import { connect } from 'react-redux'",
    description: "Redux: Import connect from react-redux",
    type: "importReduxConnect",
    fileTypes: ["jsx", "tsx"],
  },
  {
    prefix: "rxaction",
    snippet:
      "export const ${1} = (payload) => ({\n  type: ${2},\n  payload\n})\n",
    description: "Redux: Create a Redux action",
    type: "reduxAction",
    fileTypes: ["jsx", "tsx"],
  },
  {
    prefix: "rxconst",
    snippet: "export const ${1} = '${1}'",
    description: "Redux: Create a Redux constant",
    type: "reduxConst",
    fileTypes: ["jsx", "tsx"],
  },
  {
    prefix: "rxreducer",
    snippet:
      "const initialState = {}\n\nexport default (state = initialState, { type, payload }) => {\n  switch (type) {\n    case ${1}:\n      return { ...state, ...payload }\n    default:\n      return state\n  }\n}\n",
    description: "Redux: Create a Redux reducer",
    type: "reduxReducer",
    fileTypes: ["jsx", "tsx"],
  },
  {
    prefix: "rxselect",
    snippet:
      "import { createSelector } from 'reselect'\n\nexport const ${1} = state => state.${2}",
    description: "Redux: Create a Redux selector using Reselect",
    type: "reduxSelector",
    fileTypes: ["jsx", "tsx"],
  },
  {
    prefix: "rxslice",
    snippet:
      "import { createSlice } from '@reduxjs/toolkit'\n\nconst initialState = {}\n\nconst ${FILE_NAME} = createSlice({\n  name: ${2},\n  initialState,\n reducers: {}\n});\n\nexport const {} = ${Placeholders.FILE_NAME}.actions\n\nexport default ${Placeholders.FILE_NAME}.reducer",
    description: "Redux: Create a Redux slice using @reduxjs/toolkit",
    type: "reduxSlice",
    fileTypes: ["jsx", "tsx"],
  },
  {
    prefix: "reduxmap",
    snippet:
      "const mapStateToProps = (state) => ({})\n\nconst mapDispatchToProps = {}",
    description: "Redux: Map state and dispatch to props",
    type: "mappingToProps",
    fileTypes: ["jsx", "tsx"],
  },
  {
    prefix: "exptp",
    snippet: "export type ${1:first} = {${2:second}}",
    type: "ExportType",
    fileTypes: ["jsx", "tsx"],
  },
  {
    prefix: "expint",
    snippet: "export interface ${1:first} {${2:second}}",
    type: "ExportInterface",
    fileTypes: ["jsx", "tsx"],
  },
  {
    prefix: "tsrcc",
    snippet:
      "import React, { Component } from 'react'\n\ninterface Props {\n  // Define your props here\n}\n\ninterface State {\n  // Define your state here\n}\n\nexport default class ${1:${FILE_NAME}} extends Component<Props, State> {\n  state = {}\n\n  render() {\n    return (\n      <div>\n        ${2:/* Your JSX code here */}\n      </div>\n    )\n  }\n}",
    type: "TypescriptReactClassComponent",
    description:
      "Creates a React component class with ES7 module system and TypeScript interfaces",
    fileTypes: ["jsx", "tsx"],
  },
  {
    prefix: "tsrce",
    snippet:
      "import React, { Component } from 'react'\n\ninterface Props {\n  // Define your props here\n}\n\ninterface State {\n  // Define your state here\n}\nclass ${1:${FILE_NAME}} extends Component<Props, State> {\n  state = {}\n\n  render() {\n    return (\n      <div>\n        ${2:/* Your JSX code here */}\n      </div>\n    )\n  }\n}\n\nexport default ${1:${FILE_NAME}};",
    type: "typescriptReactClassExportComponent",
    description:
      "Creates a React component class with ES7 module system and TypeScript interfaces",
    fileTypes: ["jsx", "tsx"],
  },
  {
    prefix: "tsrfce",
    snippet:
      "import React from 'react'\n\ninterface Props {\n  // Define your props here\n}\n\nfunction ${1:${FILE_NAME}}({}: Props) {\n  return (\n    <div>\n      ${2:/* Your JSX code here */}\n    </div>\n  )\n}\n\nexport default ${1:${FILE_NAME}};",
    type: "typescriptReactFunctionalExportComponent",
    description:
      "Creates a React Functional Component with ES7 module system and TypeScript interface",
    fileTypes: ["jsx", "tsx"],
  },
  {
    prefix: "tsrfc",
    snippet:
      "import React from 'react'\n\ninterface Props {\n  // Define your props here\n}\n\nexport default function ${1:${FILE_NAME}}({}: Props) {\n  return (\n    <div>\n      ${2:/* Your JSX code here */}\n    </div>\n  )\n}",
    type: "typescriptReactFunctionalComponent",
    description:
      "Creates a React Functional Component with ES7 module system and TypeScript interface",
    fileTypes: ["jsx", "tsx"],
  },
  {
    prefix: "tsrafce",
    snippet:
      "import React from 'react';\n\ninterface Props {\n  // Define your props here\n}\n\nconst ${1:${FILE_NAME}} = (props: Props) => {\n  return (\n    <div>\n      ${2:first} {/* Your JSX code here */}\n    </div>\n  );\n};\n\nexport default ${1:${FILE_NAME}};",
    type: "typescriptReactArrowFunctionExportComponent",
    description:
      "Creates a React Arrow Function Component with ES7 module system and TypeScript interface",
    fileTypes: ["jsx", "tsx"],
  },
  {
    prefix: "tsrafc",
    snippet:
      "import React from 'react';\n\ninterface Props {\n  // Define your props here\n}\n\nconst ${1:${FILE_NAME}} = (props: Props) => {\n  return (\n    <div>\n      ${2:FirstTab} {/* Your JSX code here */}\n    </div>\n  );\n};",
    type: "typescriptReactArrowFunctionComponent",
    description:
      "Creates a React Arrow Function Component with ES7 module system and TypeScript interface",
    fileTypes: ["jsx", "tsx"],
  },
  {
    prefix: "tsrpc",
    snippet:
      "import React, { PureComponent } from 'react';\n\ninterface Props {\n  // Define your props here\n}\n\nexport default class ${1:${FILE_NAME}} extends PureComponent<Props> {\n  ${2:innerComponentReturn}\n}",
    type: "typescriptReactClassPureComponent",
    description:
      "Creates a React pure component class with ES7 module system and TypeScript interface",
    fileTypes: ["jsx", "tsx"],
  },
  {
    prefix: "tsrpce",
    snippet:
      "import React, { PureComponent } from 'react';\n\ninterface Props {\n  // Define your props here\n}\n\nclass ${1:${FILE_NAME}} extends PureComponent<Props> {\n  ${2:innerComponentReturn}\n}\nexport default ${1:${FILE_NAME}};",
    type: "typescriptReactClassExportPureComponent",
    description:
      "Creates a React pure component class with ES7 module system and TypeScript interface",
    fileTypes: ["jsx", "tsx"],
  },
  {
    prefix: "tsrcredux",
    snippet:
      "import { connect } from 'react-redux';\n${1:reactComponent}\n\ninterface Props {\n  // Define your props here\n}\n\ninterface State {\n  // Define your state here\n}\n\nexport class ${2:${FILE_NAME}} extends Component<Props, State> {\n  state = {};\n  ${3:innerComponentReturn}\n}\n${4:reduxComponentExport}",
    type: "typescriptReactClassComponentRedux",
    description:
      "Creates a React component class with connected redux and ES7 module system and TypeScript interfaces",
    fileTypes: ["jsx", "tsx"],
  },
  {
    prefix: "tsrnf",
    snippet:
      "import { View, Text } from 'react-native';\n${1:react}\n\ninterface Props {\n  // Define your props here\n}\n\nconst ${2:${FILE_NAME}} = (props: Props) => {\n  return (\n    <View>\n      <Text>${3:FirstTab}</Text>\n    </View>\n  );\n};\n\nexport default ${2:${FILE_NAME}};",
    type: "typescriptReactNativeArrowFunctionComponent",
    description:
      "Creates a React Native Arrow Function Component with ES7 module system in TypeScript",
    fileTypes: ["jsx", "tsx"],
  },
  {
    prefix: "tsrnfs",
    snippet:
      "import { StyleSheet, Text, View } from 'react-native';\n${1:react}\n\ninterface Props {\n  // Define your props here\n}\n\nconst ${2:${FILE_NAME}} = (props: Props) => {\n  return (\n    <View>\n      <Text>${3:FirstTab}</Text>\n    </View>\n  );\n};\n\nexport default ${2:${FILE_NAME}};\n\nconst styles = StyleSheet.create({});",
    type: "typescriptReactNativeArrowFunctionComponentWithStyles",
    description:
      "Creates a React Native Arrow Function Component with ES7 module system, TypeScript interface and StyleSheet",
    fileTypes: ["jsx", "tsx"],
  },
  //   Array methods
  {
    prefix: "fil",
    snippet: "${1:array}.filter((${2:el}) => ${3:condition})$4",
    type: "Array.filter",
    description: "Creates a new array with elements that pass a test.",
    fileTypes: ["jsx", "tsx", "javascript"],
  },
  {
    prefix: "fi",
    snippet: "${1:array}.find((${2:el}) => ${3:condition})$4",
    type: "Array.find",
    description: "Returns the first element that passes a test.",
    fileTypes: ["jsx", "tsx", "javascript"],
  },

  {
    prefix: "join",
    snippet: "${1:array}.join(${2:separator})$3",
    type: "Array.join",
    description: "Joins all elements of an array into a string.",
    fileTypes: ["jsx", "tsx", "javascript"],
  },
  {
    prefix: "map",
    snippet: "${1:array}.map((${2:el}, ${3:i}) => ${4:newElement})$5",
    type: "Array.map",
    description:
      "Creates a new array with the results of calling a function for each element.",
    fileTypes: ["jsx", "tsx", "javascript"],
  },
  {
    prefix: "pop",
    snippet: "${1:array}.pop(${2:el})$3",
    type: "Array.pop",
    description: "Removes the last element from an array and returns it.",
    fileTypes: ["jsx", "tsx", "javascript"],
  },
  {
    prefix: "push",
    snippet: "${1:array}.push(${2:el})",
    type: "Array.push",
    description: "Adds one or more elements to the end of an array.",
    fileTypes: ["jsx", "tsx", "javascript"],
  },
  {
    prefix: "red",
    snippet:
      "${1:array}.reduce((acc, el) => ${2:accumulatorFunction}, ${3:initialValue})$4",
    type: "Array.reduce",
    description: "Combines all elements of an array into a single value.",
    fileTypes: ["jsx", "tsx", "javascript"],
  },
  {
    prefix: "rev",
    snippet: "${1:array}.reverse()$2",
    type: "Array.reverse",
    description: "Reverses the order of the elements in an array.",
    fileTypes: ["jsx", "tsx", "javascript"],
  },
  {
    prefix: "sh",
    snippet: "${1:array}.shift(${2:el})$3",
    type: "Array.shift",
    description: "Removes the first element from an array and returns it.",
    fileTypes: ["jsx", "javascript", "tsx", "javascript"],
  },
  {
    prefix: "unsh",
    snippet: "${1:array}.unshift(${2:el})$3",
    type: "Array.unshift",
    description: "Adds the specified element to the beginning of an array.",
    fileTypes: ["jsx", "javascript", "tsx", "javascript"],
  },

  {
    prefix: "sp",
    snippet: "${1:array}.splice(${2:start}, ${3:deleteCount}, ${4:elements})$5",
    type: "Array.splice",
    description: "Removes, replaces and/or adds new elements in an array.",
    fileTypes: ["jsx", "tsx", "javascript"],
  },
  {
    prefix: "some",
    snippet: "${1:array}.some((${2:el}) => ${3:condition})$4",
    type: "Array.some",
    description: "Checks if at least one element in the array passes a test.",
    fileTypes: ["jsx", "tsx", "javascript"],
  },
  {
    prefix: "sort",
    snippet: "${1:array}.sort((${2:a}, ${3:b}) => ${4:comparisonFunction})$5",
    type: "Array.sort",
    description: "Sorts the elements of an array in a particular order.",
    fileTypes: ["jsx", "tsx", "javascript"],
  },
  {
    prefix: "tostr",
    snippet: "${1:array}.toString()$3",
    type: "Array.toString",
    description: "Returns a string representation of the array.",
    fileTypes: ["jsx", "tsx", "javascript"],
  },
  {
    prefix: "frm",
    snippet: "Array.from({1:arrayLike})$2",
    type: "Array.from",
    description: "Creates a new array from an iterable object.",
    fileTypes: ["jsx", "tsx", "javascript"],
  },
  //   String methods
  {
    prefix: "ca",
    snippet: "${1:str}.charAt(${2:index})$3",
    type: "String,charAt",
    description: "Returns the character at a specific index.",
    fileTypes: ["jsx", "tsx", "javascript"],
  },
  {
    prefix: "match",
    snippet: "${1:str}.match(${2:regexp})$3",
    type: "String.match",
    description: "Searches a string for a match against a regular expression.",
    fileTypes: ["jsx", "tsx", "javascript"],
  },
  {
    prefix: "rpt",
    snippet: "${1:str}.repeat(${2:count})$3",
    type: "String.repeat",
    description: "Repeats a string a specified number of times.",
    fileTypes: ["jsx", "tsx", "javascript"],
  },
  {
    prefix: "rep",
    snippet: "${1:str}.replace(${2:substring}, ${3:replacement})$4",
    type: "String.replace",
    description:
      "Searches a string for a match against a regular expression and replaces it with another string.",
    fileTypes: ["jsx", "tsx", "javascript"],
  },
  {
    prefix: "repa",
    snippet: "${1:str}.replaceAll(${2:substring}, ${3:replacement})$4",
    type: "String.replaceAll",
    description:
      "Searches a string for a all matches against a regular expression or a substring and replaces them with another string.",
    fileTypes: ["jsx", "tsx", "javascript"],
  },
  {
    prefix: "sw",
    snippet: "${1:str}.startsWith(${2:substr})$3",
    type: "String.startsWith",
    description: "Checks if a string starts with a specified substring.",
    fileTypes: ["jsx", "tsx", "javascript"],
  },
  {
    prefix: "ew",
    snippet: "${1:str}.endsWith(${2:substr})$3",
    type: "String.endsWith",
    description: "Checks if a string ends with a specified substring.",
    fileTypes: ["jsx", "tsx", "javascript"],
  },
  {
    prefix: "sstr",
    snippet: "${1:str}.substring(${2:start}, ${3:end})$4",
    type: "String.substring",
    description: "Extracts a substring from a string.",
    fileTypes: ["jsx", "tsx", "javascript"],
  },
  {
    prefix: "ss",
    snippet: "${1:str}.substr(${2:start}, ${3:length})$4",
    type: "String.substr",
    description: "Extracts a substring with a specific length from a string.",
    fileTypes: ["jsx", "tsx", "javascript"],
  },
  {
    prefix: "tlc",
    snippet: "${1:str}.toLowerCase()$2",
    type: "String.toLowerCase",
    description:
      "Returns a new string with all characters converted to lowercase.",
    fileTypes: ["jsx", "tsx", "javascript"],
  },
  {
    prefix: "tuc",
    snippet: "${1:str}.toUpperCase()$2",
    type: "String.toUpperCase",
    description:
      "Returns a new string with all characters converted to uppercase.",
    fileTypes: ["jsx", "tsx", "javascript"],
  },
  {
    prefix: "trm",
    snippet: "${1:str}.trim()$2",
    type: "String.trim",
    description: "Removes leading and trailing whitespace from a string.",
    fileTypes: ["jsx", "tsx", "javascript"],
  },
  {
    prefix: "sp",
    snippet: "${1:str}.split(${2:delimiter}, ${3:optionalLimit})$4",
    type: "String.split",
    description:
      "Splits a string into an array of substrings using all occurrences of the delimiter.",
    fileTypes: ["jsx", "tsx", "javascript"],
  },
  // Array and string methods
  {
    prefix: "inc",
    snippet: "${1:elements}.includes(${2:el}, ${3:start})$4",
    type: ".includes",
    description: "Checks if an array or string includes a specific element",
    fileTypes: ["jsx", "tsx", "javascript"],
  },
  {
    prefix: "sl",
    snippet: "${1:elements}.slice(${2:start}, ${3:end})$4",
    type: ".slice",
    description:
      "Returns a shallow copy of selected elements in an array or string, as a new array or string.",
    fileTypes: ["jsx", "tsx", "javascript"],
  },
  {
    prefix: "io",
    snippet: "${1:elements}.indexOf(${2:element})$3",
    type: ".indexOf",
    description: "Returns the first index of a specific element.",
    fileTypes: ["jsx", "tsx", "javascript"],
  },
  {
    prefix: "cc",
    snippet: "${1:elements}.concat(${2:otherElements})$3",
    type: ".concat",
    description:
      "Combines multiple strings or arrays into a single new string or array.",
    fileTypes: ["jsx", "tsx", "javascript"],
  },
  {
    prefix: "lio",
    snippet: "${1:str}.lastIndexOf(${2:substr})$3",
    type: ".lastIndexOf",
    description:
      "Returns the last index of a specified value within another array or string.",
    fileTypes: ["jsx", "tsx", "javascript"],
  },
  // DOM manipulation snippets
  {
    prefix: "ael",
    snippet: "${1:document}.addEventListener('${2:click}', ${3:(e) => {}})$4",
    type: "addEventListener",
    description: "Adds an event listener to a DOM element",
    fileTypes: ["tsx", "javascript"],
  },
  {
    prefix: "rel",
    snippet: "${1:document}.removeEventListener('${2:click}', $3)}$4",
    type: "removeEventListener",
    description: "Removes an event listener from a DOM element",
    fileTypes: ["tsx", "javascript"],
  },
  {
    prefix: "ac",
    snippet: "${1:document}.appendChild(${2:elem})$3",
    type: "appendChild",
    description: "Adds a child node to a specified parent",
    fileTypes: ["tsx", "javascript"],
  },
  {
    prefix: "rc",
    snippet: "${1:document}.removeChild(${2:elem})$3",
    type: "removeChild",
    description: "Removes a child node from the DOM",
    fileTypes: ["tsx", "javascript"],
  },
  {
    prefix: "cel",
    snippet: "${1:document}.createElement(${2:element})$3",
    type: "createElement",
    description: "Creates a new HTML element with a specified tag name",
    fileTypes: ["tsx", "javascript"],
  },
  {
    prefix: "cdf",
    snippet: "${1:document}.createDocumentFragment()$2",
    type: "createDocumentFragment",
    description: "Creates a new offscreen node",
    fileTypes: ["tsx", "javascript"],
  },
  {
    prefix: "cla",
    snippet: "${1:document}.classList.add('${2:class}')$3",
    type: "classList.add",
    description: "Adds a new CSS class to a HTML element",
    fileTypes: ["tsx", "javascript"],
  },
  {
    prefix: "clr",
    snippet: "${1:document}.classList.remove('${2:class}')$3",
    type: "classList.remove",
    description: "Removes an existing CSS class from a HTML element",
    fileTypes: ["tsx", "javascript"],
  },
  {
    prefix: "clt",
    snippet: "${1:document}.classList.toggle('${2:class}')$3",
    type: "classList.toggle",
    description: "Adds or removes a class based on wether it's already present",
    fileTypes: ["tsx", "javascript"],
  },
  {
    prefix: "gei",
    snippet: "${1:document}.getElementById('${2:id}')$3",
    type: "getElementById",
    description:
      "Returns an element whose id property matches the specified string",
    fileTypes: ["tsx", "javascript"],
  },
  {
    prefix: "gec",
    snippet: "${1:document}.getElementsByClassName('${2:class}')$3",
    type: "getElementsByClassName",
    description:
      "Returns a HTML collection of elements with the given class name",
    fileTypes: ["tsx", "javascript"],
  },
  {
    prefix: "gen",
    snippet: "${1:document}.getElementsByTagName('${2:tag}')$3",
    type: "getElementsByTagName",
    description:
      "Returns a HTML collection of elements with the given tag name",
    fileTypes: ["tsx", "javascript"],
  },
  {
    prefix: "ga",
    snippet: "${1:document}.getAttribute('${2:attr}')$3",
    type: "getAttribute",
    description: "Returns the value of the specified attribute on the element",
    fileTypes: ["tsx", "javascript"],
  },
  {
    prefix: "sa",
    snippet: "${1:document}.setAttribute('${2:attr}')$3",
    type: "setAttribute",
    description: "Adds the attribute with the specified name on the element",
    fileTypes: ["tsx", "javascript"],
  },
  {
    prefix: "ra",
    snippet: "${1:document}.removeAttribute('${2:attr}')$3",
    type: "removeAttribute",
    description: "Removes the attribute with the specified name on the element",
    fileTypes: ["tsx", "javascript"],
  },
  {
    prefix: "ih",
    snippet: "${1:document}.innerHTML = '${2:elem}'$3",
    type: "innerHTML",
    description: "Gets or sets the HTML markup contained within an element",
    fileTypes: ["tsx", "javascript"],
  },
  {
    prefix: "tc",
    snippet: "${1:document}.textContent = '${2:content}'$3",
    type: "textContent",
    description: "Gets or sets the text content of the specified element",
    fileTypes: ["tsx", "javascript"],
  },
  {
    prefix: "qs",
    snippet: "${1:document}.querySelector('${2:selector}')$3",
    type: "querySelector",
    description:
      "Returns the first element within the DOM that matches the specified selector(s)",
    fileTypes: ["tsx", "javascript"],
  },
  {
    prefix: "qsa",
    snippet: "${1:document}.querySelectorAll('${2:selector}')$3",
    type: "querySelectorAll",
    description:
      "Returns a NodeList of all elements within the DOM that matches the specified selector(s)",
    fileTypes: ["tsx", "javascript"],
  },
];
