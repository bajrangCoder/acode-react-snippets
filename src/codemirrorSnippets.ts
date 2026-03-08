import { Snippet } from "./snippets";

export const CODEMIRROR_FILE_NAME_TOKEN = "__CODEMIRROR_FILE_NAME__";

export interface CodeMirrorSnippet extends Snippet {
    codeMirrorSnippet: string;
    fallbackSnippet: string;
}

export const codeMirrorSnippets: CodeMirrorSnippet[] = [
  {
    "prefix": "rcc",
    "snippet": "import React, { Component } from 'react'\n\nexport default class ${FILE_NAME} extends Component {\n  render() {\n    return (\n    <div>$1</div>\n  )\n}\n}",
    "type": "Components",
    "description": "Creates a <strong>React component</strong> class with ES7 module system",
    "fileTypes": [
      "jsx",
      "tsx"
    ],
    "codeMirrorSnippet": "import React, { Component } from 'react'\n\nexport default class __CODEMIRROR_FILE_NAME__ extends Component {\n  render() {\n    return (\n    <div>${1}</div>\n  )\n}\n}",
    "fallbackSnippet": "import React, { Component } from 'react'\n\nexport default class __CODEMIRROR_FILE_NAME__ extends Component {\n  render() {\n    return (\n    <div></div>\n  )\n}\n}"
  },
  {
    "prefix": "rce",
    "snippet": "import React, { Component } from 'react'\n\nexport class ${FILE_NAME} extends Component {\n  render() {\n    return (\n      <div>$1</div>\n    )\n  }\n}\n\nexport default ${FILE_NAME}",
    "type": "Components",
    "description": "Creates a <strong>React component</strong> class with ES7 module system",
    "fileTypes": [
      "jsx",
      "tsx"
    ],
    "codeMirrorSnippet": "import React, { Component } from 'react'\n\nexport class __CODEMIRROR_FILE_NAME__ extends Component {\n  render() {\n    return (\n      <div>${1}</div>\n    )\n  }\n}\n\nexport default __CODEMIRROR_FILE_NAME__",
    "fallbackSnippet": "import React, { Component } from 'react'\n\nexport class __CODEMIRROR_FILE_NAME__ extends Component {\n  render() {\n    return (\n      <div></div>\n    )\n  }\n}\n\nexport default __CODEMIRROR_FILE_NAME__"
  },
  {
    "prefix": "rfce",
    "snippet": "import React from 'react'\n\nconst ${FILE_NAME} = () => {\n  return (\n    <div>$1</div>\n  )\n}\n\nexport default ${FILE_NAME}",
    "type": "Components",
    "description": "Creates a <strong>React Arrow Function component</strong> with ES7 module system",
    "fileTypes": [
      "jsx",
      "tsx"
    ],
    "codeMirrorSnippet": "import React from 'react'\n\nconst __CODEMIRROR_FILE_NAME__ = () => {\n  return (\n    <div>${1}</div>\n  )\n}\n\nexport default __CODEMIRROR_FILE_NAME__",
    "fallbackSnippet": "import React from 'react'\n\nconst __CODEMIRROR_FILE_NAME__ = () => {\n  return (\n    <div></div>\n  )\n}\n\nexport default __CODEMIRROR_FILE_NAME__"
  },
  {
    "prefix": "rfc",
    "snippet": "import React from 'react'\n\nexport default function ${FILE_NAME}() {\n  return (\n    <div>$1</div>\n  )\n}",
    "type": "Components",
    "description": "Creates a <strong>React Functional component</strong> with ES7 module system",
    "fileTypes": [
      "jsx",
      "tsx"
    ],
    "codeMirrorSnippet": "import React from 'react'\n\nexport default function __CODEMIRROR_FILE_NAME__() {\n  return (\n    <div>${1}</div>\n  )\n}",
    "fallbackSnippet": "import React from 'react'\n\nexport default function __CODEMIRROR_FILE_NAME__() {\n  return (\n    <div></div>\n  )\n}"
  },
  {
    "prefix": "rfcp",
    "snippet": "import React from 'react'\nimport PropTypes from 'prop-types'\n\nfunction ${FILE_NAME}(props) {\n  return (\n    <div>$1</div>\n  )\n}\n\n${FILE_NAME}.propTypes = {}\n\nexport default ${FILE_NAME}",
    "type": "Components",
    "description": "Creates a <strong>React Functional component</strong> with PropTypes and ES7 module system",
    "fileTypes": [
      "jsx",
      "tsx"
    ],
    "codeMirrorSnippet": "import React from 'react'\nimport PropTypes from 'prop-types'\n\nfunction __CODEMIRROR_FILE_NAME__(props) {\n  return (\n    <div>${1}</div>\n  )\n}\n\n__CODEMIRROR_FILE_NAME__.propTypes = {}\n\nexport default __CODEMIRROR_FILE_NAME__",
    "fallbackSnippet": "import React from 'react'\nimport PropTypes from 'prop-types'\n\nfunction __CODEMIRROR_FILE_NAME__(props) {\n  return (\n    <div></div>\n  )\n}\n\n__CODEMIRROR_FILE_NAME__.propTypes = {}\n\nexport default __CODEMIRROR_FILE_NAME__"
  },
  {
    "prefix": "rafce",
    "snippet": "import React from 'react'\n\nconst ${FILE_NAME} = () => {\n  return (\n    <div>$1</div>\n  )\n}\n\nexport default ${FILE_NAME}",
    "type": "Components",
    "description": "Creates a <strong>React Arrow Function component</strong> with ES7 module system",
    "fileTypes": [
      "jsx",
      "tsx"
    ],
    "codeMirrorSnippet": "import React from 'react'\n\nconst __CODEMIRROR_FILE_NAME__ = () => {\n  return (\n    <div>${1}</div>\n  )\n}\n\nexport default __CODEMIRROR_FILE_NAME__",
    "fallbackSnippet": "import React from 'react'\n\nconst __CODEMIRROR_FILE_NAME__ = () => {\n  return (\n    <div></div>\n  )\n}\n\nexport default __CODEMIRROR_FILE_NAME__"
  },
  {
    "prefix": "rafc",
    "snippet": "import React from 'react'\n\nexport const ${FILE_NAME} = () => {\n  return (\n    <div>$1</div>\n  )\n}",
    "type": "Components",
    "description": "Creates a <strong>React Arrow Function component</strong> with ES7 module system",
    "fileTypes": [
      "jsx",
      "tsx"
    ],
    "codeMirrorSnippet": "import React from 'react'\n\nexport const __CODEMIRROR_FILE_NAME__ = () => {\n  return (\n    <div>${1}</div>\n  )\n}",
    "fallbackSnippet": "import React from 'react'\n\nexport const __CODEMIRROR_FILE_NAME__ = () => {\n  return (\n    <div></div>\n  )\n}"
  },
  {
    "prefix": "rafcp",
    "snippet": "import React from 'react'\nimport PropTypes from 'prop-types'\n\nconst ${FILE_NAME} = props => {\n  return (\n    <div>$1</div>\n  )\n}\n\n${FILE_NAME}.propTypes = {}\n\nexport default ${FILE_NAME}",
    "type": "Components",
    "description": "Creates a <strong>React Arrow Function component</strong> with PropTypes and ES7 module system",
    "fileTypes": [
      "jsx",
      "tsx"
    ],
    "codeMirrorSnippet": "import React from 'react'\nimport PropTypes from 'prop-types'\n\nconst __CODEMIRROR_FILE_NAME__ = props => {\n  return (\n    <div>${1}</div>\n  )\n}\n\n__CODEMIRROR_FILE_NAME__.propTypes = {}\n\nexport default __CODEMIRROR_FILE_NAME__",
    "fallbackSnippet": "import React from 'react'\nimport PropTypes from 'prop-types'\n\nconst __CODEMIRROR_FILE_NAME__ = props => {\n  return (\n    <div></div>\n  )\n}\n\n__CODEMIRROR_FILE_NAME__.propTypes = {}\n\nexport default __CODEMIRROR_FILE_NAME__"
  },
  {
    "prefix": "rcep",
    "snippet": "import React, { Component } from 'react'\nimport PropTypes from 'prop-types'\n\nexport class ${FILE_NAME} extends Component {\n  static propTypes = {}\n  render() {\n    return (\n      <div>$1</div>\n    )\n  }\n}\n\nexport default ${FILE_NAME}",
    "type": "Components",
    "description": "Creates a <strong>React component</strong> class with PropTypes and ES7 module system",
    "fileTypes": [
      "jsx",
      "tsx"
    ],
    "codeMirrorSnippet": "import React, { Component } from 'react'\nimport PropTypes from 'prop-types'\n\nexport class __CODEMIRROR_FILE_NAME__ extends Component {\n  static propTypes = {}\n  render() {\n    return (\n      <div>${1}</div>\n    )\n  }\n}\n\nexport default __CODEMIRROR_FILE_NAME__",
    "fallbackSnippet": "import React, { Component } from 'react'\nimport PropTypes from 'prop-types'\n\nexport class __CODEMIRROR_FILE_NAME__ extends Component {\n  static propTypes = {}\n  render() {\n    return (\n      <div></div>\n    )\n  }\n}\n\nexport default __CODEMIRROR_FILE_NAME__"
  },
  {
    "prefix": "rpc",
    "snippet": "import React, { PureComponent } from 'react'\n\nexport default class ${FILE_NAME} extends PureComponent {\n  render() {\n    return (\n      <div>$1</div>\n    )\n  }\n}",
    "type": "Components",
    "description": "Creates a <strong>React pure component</strong> class with ES7 module system",
    "fileTypes": [
      "jsx",
      "tsx"
    ],
    "codeMirrorSnippet": "import React, { PureComponent } from 'react'\n\nexport default class __CODEMIRROR_FILE_NAME__ extends PureComponent {\n  render() {\n    return (\n      <div>${1}</div>\n    )\n  }\n}",
    "fallbackSnippet": "import React, { PureComponent } from 'react'\n\nexport default class __CODEMIRROR_FILE_NAME__ extends PureComponent {\n  render() {\n    return (\n      <div></div>\n    )\n  }\n}"
  },
  {
    "prefix": "rpce",
    "snippet": "import React, { PureComponent } from 'react'\n\nexport class ${FILE_NAME} extends PureComponent {\n  render() {\n    return (\n      <div>$1</div>\n    )\n  }\n}\n\nexport default ${FILE_NAME}",
    "type": "Components",
    "description": "Creates a <strong>React pure component</strong> class with ES7 module system export",
    "fileTypes": [
      "jsx",
      "tsx"
    ],
    "codeMirrorSnippet": "import React, { PureComponent } from 'react'\n\nexport class __CODEMIRROR_FILE_NAME__ extends PureComponent {\n  render() {\n    return (\n      <div>${1}</div>\n    )\n  }\n}\n\nexport default __CODEMIRROR_FILE_NAME__",
    "fallbackSnippet": "import React, { PureComponent } from 'react'\n\nexport class __CODEMIRROR_FILE_NAME__ extends PureComponent {\n  render() {\n    return (\n      <div></div>\n    )\n  }\n}\n\nexport default __CODEMIRROR_FILE_NAME__"
  },
  {
    "prefix": "rpcp",
    "snippet": "import React, { PureComponent } from 'react'\nimport PropTypes from 'prop-types'\n\nexport default class ${FILE_NAME} extends PureComponent {\n  static propTypes = {}\n  render() {\n    return (\n      <div>$1</div>\n    )\n  }\n}",
    "type": "Components",
    "description": "Creates a <strong>React pure component</strong> class with PropTypes and ES7 module system",
    "fileTypes": [
      "jsx",
      "tsx"
    ],
    "codeMirrorSnippet": "import React, { PureComponent } from 'react'\nimport PropTypes from 'prop-types'\n\nexport default class __CODEMIRROR_FILE_NAME__ extends PureComponent {\n  static propTypes = {}\n  render() {\n    return (\n      <div>${1}</div>\n    )\n  }\n}",
    "fallbackSnippet": "import React, { PureComponent } from 'react'\nimport PropTypes from 'prop-types'\n\nexport default class __CODEMIRROR_FILE_NAME__ extends PureComponent {\n  static propTypes = {}\n  render() {\n    return (\n      <div></div>\n    )\n  }\n}"
  },
  {
    "prefix": "rmc",
    "snippet": "import React, { memo } from 'react'\n\nconst ${FILE_NAME} = memo(() => {\n  return (\n    <div>$1</div>\n  )\n})\n\nexport default ${FILE_NAME}",
    "type": "Components",
    "description": "Creates a <strong>React Memo Function component</strong> with ES7 module system",
    "fileTypes": [
      "jsx",
      "tsx"
    ],
    "codeMirrorSnippet": "import React, { memo } from 'react'\n\nconst __CODEMIRROR_FILE_NAME__ = memo(() => {\n  return (\n    <div>${1}</div>\n  )\n})\n\nexport default __CODEMIRROR_FILE_NAME__",
    "fallbackSnippet": "import React, { memo } from 'react'\n\nconst __CODEMIRROR_FILE_NAME__ = memo(() => {\n  return (\n    <div></div>\n  )\n})\n\nexport default __CODEMIRROR_FILE_NAME__"
  },
  {
    "prefix": "rmcp",
    "snippet": "import React, { memo } from 'react'\nimport PropTypes from 'prop-types'\n\nconst ${FILE_NAME} = memo((props) => {\n  return (\n    <div>$1</div>\n  )\n})\n\n${FILE_NAME}.propTypes = {}\n\nexport default ${FILE_NAME}",
    "type": "Components",
    "description": "Creates a <strong>React Memo Function component</strong> with PropTypes and ES7 module system",
    "fileTypes": [
      "jsx",
      "tsx"
    ],
    "codeMirrorSnippet": "import React, { memo } from 'react'\nimport PropTypes from 'prop-types'\n\nconst __CODEMIRROR_FILE_NAME__ = memo((props) => {\n  return (\n    <div>${1}</div>\n  )\n})\n\n__CODEMIRROR_FILE_NAME__.propTypes = {}\n\nexport default __CODEMIRROR_FILE_NAME__",
    "fallbackSnippet": "import React, { memo } from 'react'\nimport PropTypes from 'prop-types'\n\nconst __CODEMIRROR_FILE_NAME__ = memo((props) => {\n  return (\n    <div></div>\n  )\n})\n\n__CODEMIRROR_FILE_NAME__.propTypes = {}\n\nexport default __CODEMIRROR_FILE_NAME__"
  },
  {
    "prefix": "rccp",
    "snippet": "import React, { Component } from 'react'\nimport PropTypes from 'prop-types'\n\nexport default class ${FILE_NAME} extends Component {\n  static propTypes = {${1:first}\n  }\n  render() {\n    return (\n      <div>$2</div>\n    )\n  }\n}",
    "type": "Components",
    "description": "Creates a <strong>React component</strong> class with PropTypes and ES7 module system",
    "fileTypes": [
      "jsx",
      "tsx"
    ],
    "codeMirrorSnippet": "import React, { Component } from 'react'\nimport PropTypes from 'prop-types'\n\nexport default class __CODEMIRROR_FILE_NAME__ extends Component {\n  static propTypes = {${1:first}\n  }\n  render() {\n    return (\n      <div>${2}</div>\n    )\n  }\n}",
    "fallbackSnippet": "import React, { Component } from 'react'\nimport PropTypes from 'prop-types'\n\nexport default class __CODEMIRROR_FILE_NAME__ extends Component {\n  static propTypes = {first\n  }\n  render() {\n    return (\n      <div></div>\n    )\n  }\n}"
  },
  {
    "prefix": "rcredux",
    "snippet": "import React, { Component } from 'react'\nimport { connect } from 'react-redux'\n\nexport class ${FILE_NAME} extends Component {\n  render() {\n    return (\n      <div>$1</div>\n    )\n  }\n}\n\nconst mapStateToProps = (state) => ({})\n\nconst mapDispatchToProps = {}\n\nexport default connect(mapStateToProps, mapDispatchToProps)(${FILE_NAME})",
    "type": "Components",
    "description": "Creates a <strong>React component</strong> class with connected redux and ES7 module system",
    "fileTypes": [
      "jsx",
      "tsx"
    ],
    "codeMirrorSnippet": "import React, { Component } from 'react'\nimport { connect } from 'react-redux'\n\nexport class __CODEMIRROR_FILE_NAME__ extends Component {\n  render() {\n    return (\n      <div>${1}</div>\n    )\n  }\n}\n\nconst mapStateToProps = (state) => ({})\n\nconst mapDispatchToProps = {}\n\nexport default connect(mapStateToProps, mapDispatchToProps)(__CODEMIRROR_FILE_NAME__)",
    "fallbackSnippet": "import React, { Component } from 'react'\nimport { connect } from 'react-redux'\n\nexport class __CODEMIRROR_FILE_NAME__ extends Component {\n  render() {\n    return (\n      <div></div>\n    )\n  }\n}\n\nconst mapStateToProps = (state) => ({})\n\nconst mapDispatchToProps = {}\n\nexport default connect(mapStateToProps, mapDispatchToProps)(__CODEMIRROR_FILE_NAME__)"
  },
  {
    "prefix": "rcreduxp",
    "snippet": "import React, { Component } from 'react'\nimport PropTypes from 'prop-types'\nimport { connect } from 'react-redux'\n\nexport class ${FILE_NAME} extends Component {\n  static propTypes = {${1:first}\n  }\n  render() {\n    return (\n      <div>$2</div>\n    )\n  }\n}\n\nconst mapStateToProps = (state) => ({})\n\nconst mapDispatchToProps = {}\n\nexport default connect(mapStateToProps, mapDispatchToProps)(${FILE_NAME})",
    "type": "Components",
    "description": "Creates a <strong>React component</strong> class with PropTypes, connected redux and ES7 module system",
    "fileTypes": [
      "jsx",
      "tsx"
    ],
    "codeMirrorSnippet": "import React, { Component } from 'react'\nimport PropTypes from 'prop-types'\nimport { connect } from 'react-redux'\n\nexport class __CODEMIRROR_FILE_NAME__ extends Component {\n  static propTypes = {${1:first}\n  }\n  render() {\n    return (\n      <div>${2}</div>\n    )\n  }\n}\n\nconst mapStateToProps = (state) => ({})\n\nconst mapDispatchToProps = {}\n\nexport default connect(mapStateToProps, mapDispatchToProps)(__CODEMIRROR_FILE_NAME__)",
    "fallbackSnippet": "import React, { Component } from 'react'\nimport PropTypes from 'prop-types'\nimport { connect } from 'react-redux'\n\nexport class __CODEMIRROR_FILE_NAME__ extends Component {\n  static propTypes = {first\n  }\n  render() {\n    return (\n      <div></div>\n    )\n  }\n}\n\nconst mapStateToProps = (state) => ({})\n\nconst mapDispatchToProps = {}\n\nexport default connect(mapStateToProps, mapDispatchToProps)(__CODEMIRROR_FILE_NAME__)"
  },
  {
    "prefix": "rfcredux",
    "snippet": "import React from 'react'\nimport { connect } from 'react-redux'\n\nconst ${FILE_NAME} = (props) => {\n  return (\n    <div>$1</div>\n  )\n}\n\nconst mapStateToProps = (state) => ({})\n\nconst mapDispatchToProps = {}\n\nexport default connect(mapStateToProps, mapDispatchToProps)(${FILE_NAME})",
    "type": "Components",
    "description": "Creates a <strong>React functional component</strong> with connected redux and ES7 module system",
    "fileTypes": [
      "jsx",
      "tsx"
    ],
    "codeMirrorSnippet": "import React from 'react'\nimport { connect } from 'react-redux'\n\nconst __CODEMIRROR_FILE_NAME__ = (props) => {\n  return (\n    <div>${1}</div>\n  )\n}\n\nconst mapStateToProps = (state) => ({})\n\nconst mapDispatchToProps = {}\n\nexport default connect(mapStateToProps, mapDispatchToProps)(__CODEMIRROR_FILE_NAME__)",
    "fallbackSnippet": "import React from 'react'\nimport { connect } from 'react-redux'\n\nconst __CODEMIRROR_FILE_NAME__ = (props) => {\n  return (\n    <div></div>\n  )\n}\n\nconst mapStateToProps = (state) => ({})\n\nconst mapDispatchToProps = {}\n\nexport default connect(mapStateToProps, mapDispatchToProps)(__CODEMIRROR_FILE_NAME__)"
  },
  {
    "prefix": "rfcreduxp",
    "snippet": "import React from 'react'\nimport PropTypes from 'prop-types'\nimport { connect } from 'react-redux'\n\nconst ${FILE_NAME} = (props) => {\n  return (\n    <div>$1</div>\n  )\n}\n\nconst mapStateToProps = (state) => ({})\n\nconst mapDispatchToProps = {}\n\n${FILE_NAME}.propTypes = {${2:second}\n}\n\nexport default connect(mapStateToProps, mapDispatchToProps)(${FILE_NAME})",
    "type": "Components",
    "description": "DEPRECATED: Creates a <strong>React functional component</strong> with PropTypes, connected redux and ES7 module system",
    "fileTypes": [
      "jsx",
      "tsx"
    ],
    "codeMirrorSnippet": "import React from 'react'\nimport PropTypes from 'prop-types'\nimport { connect } from 'react-redux'\n\nconst __CODEMIRROR_FILE_NAME__ = (props) => {\n  return (\n    <div>${1}</div>\n  )\n}\n\nconst mapStateToProps = (state) => ({})\n\nconst mapDispatchToProps = {}\n\n__CODEMIRROR_FILE_NAME__.propTypes = {${2:second}\n}\n\nexport default connect(mapStateToProps, mapDispatchToProps)(__CODEMIRROR_FILE_NAME__)",
    "fallbackSnippet": "import React from 'react'\nimport PropTypes from 'prop-types'\nimport { connect } from 'react-redux'\n\nconst __CODEMIRROR_FILE_NAME__ = (props) => {\n  return (\n    <div></div>\n  )\n}\n\nconst mapStateToProps = (state) => ({})\n\nconst mapDispatchToProps = {}\n\n__CODEMIRROR_FILE_NAME__.propTypes = {second\n}\n\nexport default connect(mapStateToProps, mapDispatchToProps)(__CODEMIRROR_FILE_NAME__)"
  },
  {
    "prefix": "useEffectSnippet",
    "snippet": "useEffect(() => {\n  ${1:first}\n  return () => {\n    ${2:second}\n  }\n}, [${3:third}])\n",
    "type": "Hooks",
    "fileTypes": [
      "jsx",
      "tsx"
    ],
    "codeMirrorSnippet": "useEffect(() => {\n  ${1:first}\n  return () => {\n    ${2:second}\n  }\n}, [${3:third}])\n",
    "fallbackSnippet": "useEffect(() => {\n  first\n  return () => {\n    second\n  }\n}, [third])\n"
  },
  {
    "prefix": "useContextSnippet",
    "snippet": "const ${1:first} = useContext(${2:second})",
    "type": "Hooks",
    "fileTypes": [
      "jsx",
      "tsx"
    ],
    "codeMirrorSnippet": "const ${1:first} = useContext(${2:second})",
    "fallbackSnippet": "const first = useContext(second)"
  },
  {
    "prefix": "useStateSnippet",
    "snippet": "const [${1:first}, set${1:first}] = useState(${2:second})",
    "type": "Hooks",
    "fileTypes": [
      "jsx",
      "tsx"
    ],
    "codeMirrorSnippet": "const [${1:first}, set${1:first}] = useState(${2:second})",
    "fallbackSnippet": "const [first, setfirst] = useState(second)"
  },
  {
    "prefix": "useReducerSnippet",
    "snippet": "const [state, dispatch] = useReducer(${1:first}, ${2:second}, ${3:third})",
    "type": "Hooks",
    "fileTypes": [
      "jsx",
      "tsx"
    ],
    "codeMirrorSnippet": "const [state, dispatch] = useReducer(${1:first}, ${2:second}, ${3:third})",
    "fallbackSnippet": "const [state, dispatch] = useReducer(first, second, third)"
  },
  {
    "prefix": "useCallbackSnippet",
    "snippet": "useCallback(\n  () => {\n    ${1:first}\n  },\n  [${2:second}],\n)\n",
    "type": "Hooks",
    "fileTypes": [
      "jsx",
      "tsx"
    ],
    "codeMirrorSnippet": "useCallback(\n  () => {\n    ${1:first}\n  },\n  [${2:second}],\n)\n",
    "fallbackSnippet": "useCallback(\n  () => {\n    first\n  },\n  [second],\n)\n"
  },
  {
    "prefix": "useMemoSnippet",
    "snippet": "useMemo(() => ${1:first}, [${2:second}])",
    "type": "Hooks",
    "fileTypes": [
      "jsx",
      "tsx"
    ],
    "codeMirrorSnippet": "useMemo(() => ${1:first}, [${2:second}])",
    "fallbackSnippet": "useMemo(() => first, [second])"
  },
  {
    "prefix": "useRefSnippet",
    "snippet": "const ${1:first} = useRef(${2:second})",
    "type": "Hooks",
    "fileTypes": [
      "jsx",
      "tsx"
    ],
    "codeMirrorSnippet": "const ${1:first} = useRef(${2:second})",
    "fallbackSnippet": "const first = useRef(second)"
  },
  {
    "prefix": "useImperativeHandleSnippet",
    "snippet": "useImperativeHandle(\n  ${1:first},\n  () => {\n    ${2:second}\n  },\n  [${3:third}],\n)\n",
    "type": "Hooks",
    "fileTypes": [
      "jsx",
      "tsx"
    ],
    "codeMirrorSnippet": "useImperativeHandle(\n  ${1:first},\n  () => {\n    ${2:second}\n  },\n  [${3:third}],\n)\n",
    "fallbackSnippet": "useImperativeHandle(\n  first,\n  () => {\n    second\n  },\n  [third],\n)\n"
  },
  {
    "prefix": "useLayoutEffectSnippet",
    "snippet": "useLayoutEffect(() => {\n  ${1:first}\n\n  return () => {\n    ${2:second}\n  };\n}, [${3:third}])\n",
    "type": "Hooks",
    "fileTypes": [
      "jsx",
      "tsx"
    ],
    "codeMirrorSnippet": "useLayoutEffect(() => {\n  ${1:first}\n\n  return () => {\n    ${2:second}\n  };\n}, [${3:third}])\n",
    "fallbackSnippet": "useLayoutEffect(() => {\n  first\n\n  return () => {\n    second\n  };\n}, [third])\n"
  },
  {
    "prefix": "imr",
    "snippet": "import React from 'react'",
    "type": "ImportReact",
    "fileTypes": [
      "jsx",
      "tsx"
    ],
    "codeMirrorSnippet": "import React from 'react'",
    "fallbackSnippet": "import React from 'react'"
  },
  {
    "prefix": "imrd",
    "snippet": "import ReactDOM from 'react-dom'",
    "type": "ImportReactDom",
    "fileTypes": [
      "jsx",
      "tsx"
    ],
    "codeMirrorSnippet": "import ReactDOM from 'react-dom'",
    "fallbackSnippet": "import ReactDOM from 'react-dom'"
  },
  {
    "prefix": "imrc",
    "snippet": "import React, { Component } from 'react'",
    "type": "ImportReactWithComponent",
    "fileTypes": [
      "jsx",
      "tsx"
    ],
    "codeMirrorSnippet": "import React, { Component } from 'react'",
    "fallbackSnippet": "import React, { Component } from 'react'"
  },
  {
    "prefix": "imrcp",
    "snippet": "import React, { Component } from 'react'\nimport PropTypes from 'prop-types'",
    "type": "ImportReactWithComponentAndPropTypes",
    "fileTypes": [
      "jsx",
      "tsx"
    ],
    "codeMirrorSnippet": "import React, { Component } from 'react'\nimport PropTypes from 'prop-types'",
    "fallbackSnippet": "import React, { Component } from 'react'\nimport PropTypes from 'prop-types'"
  },
  {
    "prefix": "imrpc",
    "snippet": "import React, { PureComponent } from 'react'",
    "type": "ImportReactWithPureComponent",
    "fileTypes": [
      "jsx",
      "tsx"
    ],
    "codeMirrorSnippet": "import React, { PureComponent } from 'react'",
    "fallbackSnippet": "import React, { PureComponent } from 'react'"
  },
  {
    "prefix": "imrpcp",
    "snippet": "import React, { PureComponent } from 'react'\nimport PropTypes from 'prop-types'",
    "type": "ImportReactWithPureComponent&PropTypes",
    "fileTypes": [
      "jsx",
      "tsx"
    ],
    "codeMirrorSnippet": "import React, { PureComponent } from 'react'\nimport PropTypes from 'prop-types'",
    "fallbackSnippet": "import React, { PureComponent } from 'react'\nimport PropTypes from 'prop-types'"
  },
  {
    "prefix": "imrm",
    "snippet": "import React, { memo } from 'react'",
    "type": "ImportReactWithMemo",
    "fileTypes": [
      "jsx",
      "tsx"
    ],
    "codeMirrorSnippet": "import React, { memo } from 'react'",
    "fallbackSnippet": "import React, { memo } from 'react'"
  },
  {
    "prefix": "imrmp",
    "snippet": "import React, { memo } from 'react'\nimport PropTypes from 'prop-types'",
    "type": "ImportReactWithMemo&PropTypes",
    "fileTypes": [
      "jsx",
      "tsx"
    ],
    "codeMirrorSnippet": "import React, { memo } from 'react'\nimport PropTypes from 'prop-types'",
    "fallbackSnippet": "import React, { memo } from 'react'\nimport PropTypes from 'prop-types'"
  },
  {
    "prefix": "impt",
    "snippet": "import PropTypes from 'prop-types'",
    "type": "ImportPropTypes",
    "fileTypes": [
      "jsx",
      "tsx"
    ],
    "codeMirrorSnippet": "import PropTypes from 'prop-types'",
    "fallbackSnippet": "import PropTypes from 'prop-types'"
  },
  {
    "prefix": "imbr",
    "snippet": "import { BrowserRouter as Router } from 'react-router-dom'",
    "type": "ReactRouter",
    "fileTypes": [
      "jsx",
      "tsx"
    ],
    "codeMirrorSnippet": "import { BrowserRouter as Router } from 'react-router-dom'",
    "fallbackSnippet": "import { BrowserRouter as Router } from 'react-router-dom'"
  },
  {
    "prefix": "imrr",
    "snippet": "import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'",
    "type": "ReactRouterWithRouteAndNavLink",
    "fileTypes": [
      "jsx",
      "tsx"
    ],
    "codeMirrorSnippet": "import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'",
    "fallbackSnippet": "import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'"
  },
  {
    "prefix": "imbrc",
    "snippet": "import { Route, Switch, NavLink, Link } from 'react-router-dom'",
    "type": "ImportRouterSetup",
    "fileTypes": [
      "jsx",
      "tsx"
    ],
    "codeMirrorSnippet": "import { Route, Switch, NavLink, Link } from 'react-router-dom'",
    "fallbackSnippet": "import { Route, Switch, NavLink, Link } from 'react-router-dom'"
  },
  {
    "prefix": "imbrs",
    "snippet": "import { Switch } from 'react-router-dom'",
    "type": "ImportRouterSwitch",
    "fileTypes": [
      "jsx",
      "tsx"
    ],
    "codeMirrorSnippet": "import { Switch } from 'react-router-dom'",
    "fallbackSnippet": "import { Switch } from 'react-router-dom'"
  },
  {
    "prefix": "imbrl",
    "snippet": "import { Link } from 'react-router-dom'",
    "type": "ImportRouterLink",
    "fileTypes": [
      "jsx",
      "tsx"
    ],
    "codeMirrorSnippet": "import { Link } from 'react-router-dom'",
    "fallbackSnippet": "import { Link } from 'react-router-dom'"
  },
  {
    "prefix": "imbrnl",
    "snippet": "import { NavLink } from 'react-router-dom'",
    "type": "ImportRouterNavLink",
    "fileTypes": [
      "jsx",
      "tsx"
    ],
    "codeMirrorSnippet": "import { NavLink } from 'react-router-dom'",
    "fallbackSnippet": "import { NavLink } from 'react-router-dom'"
  },
  {
    "prefix": "imp",
    "snippet": "import ${2:Name} from '${1:first}'",
    "type": "Import",
    "fileTypes": [
      "jsx",
      "tsx"
    ],
    "codeMirrorSnippet": "import ${2:Name} from '${1:first}'",
    "fallbackSnippet": "import Name from 'first'"
  },
  {
    "prefix": "imn",
    "snippet": "import '${1:first}'",
    "type": "ImportNoModuleName",
    "fileTypes": [
      "jsx",
      "tsx"
    ],
    "codeMirrorSnippet": "import '${1:first}'",
    "fallbackSnippet": "import 'first'"
  },
  {
    "prefix": "imd",
    "snippet": "import { ${2:Component} } from '${1:first}'",
    "type": "ImportDestructing",
    "fileTypes": [
      "jsx",
      "tsx"
    ],
    "codeMirrorSnippet": "import { ${2:Component} } from '${1:first}'",
    "fallbackSnippet": "import { Component } from 'first'"
  },
  {
    "prefix": "ime",
    "snippet": "import * as ${2:comp} from '${1:first}'",
    "type": "ImportEverything",
    "fileTypes": [
      "jsx",
      "tsx"
    ],
    "codeMirrorSnippet": "import * as ${2:comp} from '${1:first}'",
    "fallbackSnippet": "import * as comp from 'first'"
  },
  {
    "prefix": "ima",
    "snippet": "import { ${2:Component} as ${3:third} } from '${1:first}'",
    "type": "ImportAs",
    "fileTypes": [
      "jsx",
      "tsx"
    ],
    "codeMirrorSnippet": "import { ${2:Component} as ${3:third} } from '${1:first}'",
    "fallbackSnippet": "import { Component as third } from 'first'"
  },
  {
    "prefix": "req",
    "snippet": "const ${1:packageName} = require('${1:package}')",
    "type": "RequireToConst",
    "description": "Require a package to const",
    "fileTypes": [
      "tsx",
      "javascript"
    ],
    "codeMirrorSnippet": "const ${1:packageName} = require('${1:package}')",
    "fallbackSnippet": "const packageName = require('package')"
  },
  {
    "prefix": "exp",
    "snippet": "export default ${1:first}",
    "type": "ExportDefault",
    "fileTypes": [
      "jsx",
      "tsx"
    ],
    "codeMirrorSnippet": "export default ${1:first}",
    "fallbackSnippet": "export default first"
  },
  {
    "prefix": "exd",
    "snippet": "export { ${2:second} } from '${1:first}'",
    "type": "ExportDestructing",
    "fileTypes": [
      "jsx",
      "tsx"
    ],
    "codeMirrorSnippet": "export { ${2:second} } from '${1:first}'",
    "fallbackSnippet": "export { second } from 'first'"
  },
  {
    "prefix": "exa",
    "snippet": "export { ${2:second} as ${3:third} } from '${1:first}'",
    "type": "ExportAs",
    "fileTypes": [
      "jsx",
      "tsx"
    ],
    "codeMirrorSnippet": "export { ${2:second} as ${3:third} } from '${1:first}'",
    "fallbackSnippet": "export { second as third } from 'first'"
  },
  {
    "prefix": "enf",
    "snippet": "export const ${1:first} = (${2:second}) => {${3:third}}",
    "type": "ExportNamedFunction",
    "description": "Export named function",
    "fileTypes": [
      "jsx",
      "tsx",
      "javascript"
    ],
    "codeMirrorSnippet": "export const ${1:first} = (${2:second}) => {${3:third}}",
    "fallbackSnippet": "export const first = (second) => {third}"
  },
  {
    "prefix": "edf",
    "snippet": "export default (${1:first}) => {${2:second}}",
    "type": "ExportDefaultFunction",
    "description": "Export default function",
    "fileTypes": [
      "jsx",
      "tsx"
    ],
    "codeMirrorSnippet": "export default (${1:first}) => {${2:second}}",
    "fallbackSnippet": "export default (first) => {second}"
  },
  {
    "prefix": "ednf",
    "snippet": "export default function ${1:first}(${2:second}) {${3:third}}",
    "type": "ExportDefaultNamedFunction",
    "description": "Export default named function",
    "fileTypes": [
      "jsx",
      "tsx",
      "javascript"
    ],
    "codeMirrorSnippet": "export default function ${1:first}(${2:second}) {${3:third}}",
    "fallbackSnippet": "export default function first(second) {third}"
  },
  {
    "prefix": "met",
    "snippet": "${1:first} = (${2:second}) => {${3:third}}",
    "type": "Method",
    "description": "Creates a method inside a class",
    "fileTypes": [
      "jsx",
      "tsx",
      "javascript"
    ],
    "codeMirrorSnippet": "${1:first} = (${2:second}) => {${3:third}}",
    "fallbackSnippet": "first = (second) => {third}"
  },
  {
    "prefix": "pge",
    "snippet": "get ${1:first}() {\n  return this.${2:second}\n}",
    "type": "PropertyGet",
    "description": "Creates a getter property inside a class",
    "fileTypes": [
      "jsx",
      "tsx",
      "javascript"
    ],
    "codeMirrorSnippet": "get ${1:first}() {\n  return this.${2:second}\n}",
    "fallbackSnippet": "get first() {\n  return this.second\n}"
  },
  {
    "prefix": "pse",
    "snippet": "set ${1:first}(${2:second}) {${3:third}}",
    "type": "PropertySet",
    "description": "Creates a setter property inside a class",
    "fileTypes": [
      "jsx",
      "tsx",
      "javascript"
    ],
    "codeMirrorSnippet": "set ${1:first}(${2:second}) {${3:third}}",
    "fallbackSnippet": "set first(second) {third}"
  },
  {
    "prefix": "fre",
    "snippet": "${1:first}.forEach(${2:second} => {${3:third}})",
    "type": "ForEach",
    "description": "Creates a forEach statement",
    "fileTypes": [
      "jsx",
      "tsx",
      "javascript"
    ],
    "codeMirrorSnippet": "${1:first}.forEach(${2:second} => {${3:third}})",
    "fallbackSnippet": "first.forEach(second => {third})"
  },
  {
    "prefix": "fof",
    "snippet": "for(let ${1:first} of ${2:second}) {${3:third}}",
    "type": "ForOf",
    "description": "Iterating over property names of iterable objects",
    "fileTypes": [
      "jsx",
      "tsx",
      "javascript"
    ],
    "codeMirrorSnippet": "for(let ${1:first} of ${2:second}) {${3:third}}",
    "fallbackSnippet": "for(let first of second) {third}"
  },
  {
    "prefix": "fin",
    "snippet": "for(let ${1:first} in ${2:second}) {${3:third}}",
    "type": "ForIn",
    "description": "Iterating over property values of iterable objects",
    "fileTypes": [
      "jsx",
      "tsx",
      "javascript"
    ],
    "codeMirrorSnippet": "for(let ${1:first} in ${2:second}) {${3:third}}",
    "fallbackSnippet": "for(let first in second) {third}"
  },
  {
    "prefix": "anfn",
    "snippet": "(${1:first}) => { ${2:second} }",
    "type": "AnonymousFunction",
    "description": "Creates an anonymous function",
    "fileTypes": [
      "jsx",
      "tsx",
      "javascript"
    ],
    "codeMirrorSnippet": "(${1:first}) => { ${2:second} }",
    "fallbackSnippet": "(first) => { second }"
  },
  {
    "prefix": "nfn",
    "snippet": "const ${1:first} = (${2:second}) => { ${3:third} }",
    "type": "NamedFunction",
    "description": "Creates a named function",
    "fileTypes": [
      "jsx",
      "tsx",
      "javascript"
    ],
    "codeMirrorSnippet": "const ${1:first} = (${2:second}) => { ${3:third} }",
    "fallbackSnippet": "const first = (second) => { third }"
  },
  {
    "prefix": "dob",
    "snippet": "const {${2:second}} = ${1:first}",
    "type": "DestructingObject",
    "description": "Creates and assigns a local variable using object destructing",
    "fileTypes": [
      "jsx",
      "tsx",
      "javascript"
    ],
    "codeMirrorSnippet": "const {${2:second}} = ${1:first}",
    "fallbackSnippet": "const {second} = first"
  },
  {
    "prefix": "dar",
    "snippet": "const [${2:second}] = ${1:first}",
    "type": "DestructingArray",
    "description": "Creates and assigns a local variable using array destructing",
    "fileTypes": [
      "jsx",
      "tsx",
      "javascript"
    ],
    "codeMirrorSnippet": "const [${2:second}] = ${1:first}",
    "fallbackSnippet": "const [second] = first"
  },
  {
    "prefix": "sti",
    "snippet": "setInterval(() => { ${1:first} }, ${2:second})",
    "type": "SetInterval",
    "description": "Executes the given function at specified intervals",
    "fileTypes": [
      "jsx",
      "tsx",
      "javascript"
    ],
    "codeMirrorSnippet": "setInterval(() => { ${1:first} }, ${2:second})",
    "fallbackSnippet": "setInterval(() => { first }, second)"
  },
  {
    "prefix": "sto",
    "snippet": "setTimeout(() => { ${1:first} }, ${2:second})",
    "type": "SetTimeOut",
    "description": "Executes the given function after the specified delay",
    "fileTypes": [
      "jsx",
      "tsx",
      "javascript"
    ],
    "codeMirrorSnippet": "setTimeout(() => { ${1:first} }, ${2:second})",
    "fallbackSnippet": "setTimeout(() => { first }, second)"
  },
  {
    "prefix": "prom",
    "snippet": "return new Promise((resolve, reject) => { ${1:first} })",
    "type": "Promise",
    "description": "Creates and returns a new Promise in the standard ES7 syntax",
    "fileTypes": [
      "jsx",
      "tsx",
      "javascript"
    ],
    "codeMirrorSnippet": "return new Promise((resolve, reject) => { ${1:first} })",
    "fallbackSnippet": "return new Promise((resolve, reject) => { first })"
  },
  {
    "prefix": "cp",
    "snippet": "const { ${1:first} } = this.props",
    "type": "DestructProps",
    "description": "Creates and assigns a local variable using props destructing",
    "fileTypes": [
      "jsx",
      "tsx"
    ],
    "codeMirrorSnippet": "const { ${1:first} } = this.props",
    "fallbackSnippet": "const { first } = this.props"
  },
  {
    "prefix": "cs",
    "snippet": "const { ${1:first} } = this.state",
    "type": "DestructState",
    "description": "Creates and assigns a local variable using state destructing",
    "fileTypes": [
      "jsx",
      "tsx"
    ],
    "codeMirrorSnippet": "const { ${1:first} } = this.state",
    "fallbackSnippet": "const { first } = this.state"
  },
  {
    "prefix": "rconst",
    "snippet": "constructor(props) {\n  super(props)\n  this.state = {\n     ${1:first}\n  }\n}",
    "type": "ClassConstructor",
    "description": "Adds a default constructor for it<code>('', () => {})</code>the class that contains props as arguments",
    "fileTypes": [
      "jsx",
      "tsx"
    ],
    "codeMirrorSnippet": "constructor(props) {\n  super(props)\n  this.state = {\n     ${1:first}\n  }\n}",
    "fallbackSnippet": "constructor(props) {\n  super(props)\n  this.state = {\n     first\n  }\n}"
  },
  {
    "prefix": "est",
    "snippet": "state = { ${1:first} }",
    "type": "EmptyState",
    "description": "Creates empty state object. To be used in a constructor.",
    "fileTypes": [
      "jsx",
      "tsx"
    ],
    "codeMirrorSnippet": "state = { ${1:first} }",
    "fallbackSnippet": "state = { first }"
  },
  {
    "prefix": "cdm",
    "snippet": "componentDidMount() { ${1:first} }",
    "type": "ComponentDidMount",
    "description": "Invoked once, only on the client (not on the server), immediately after the initial rendering occurs.",
    "fileTypes": [
      "jsx",
      "tsx"
    ],
    "codeMirrorSnippet": "componentDidMount() { ${1:first} }",
    "fallbackSnippet": "componentDidMount() { first }"
  },
  {
    "prefix": "scu",
    "snippet": "shouldComponentUpdate(nextProps, nextState) { ${1:first} }",
    "type": "ShouldComponentUpdate",
    "description": "Invoked before rendering when new props or state are being received. ",
    "fileTypes": [
      "jsx",
      "tsx"
    ],
    "codeMirrorSnippet": "shouldComponentUpdate(nextProps, nextState) { ${1:first} }",
    "fallbackSnippet": "shouldComponentUpdate(nextProps, nextState) { first }"
  },
  {
    "prefix": "cdup",
    "snippet": "componentDidUpdate(prevProps, prevState) { ${1:first}}",
    "type": "ComponentDidUpdate",
    "description": "Invoked immediately after the component's updates are flushed to the DOM.",
    "fileTypes": [
      "jsx",
      "tsx"
    ],
    "codeMirrorSnippet": "componentDidUpdate(prevProps, prevState) { ${1:first}}",
    "fallbackSnippet": "componentDidUpdate(prevProps, prevState) { first}"
  },
  {
    "prefix": "cwun",
    "snippet": "componentWillUnmount() {${1:first} }",
    "type": "ComponentWillUnmount",
    "description": "Invoked immediately before a component is unmounted from the DOM.",
    "fileTypes": [
      "jsx",
      "tsx"
    ],
    "codeMirrorSnippet": "componentWillUnmount() {${1:first} }",
    "fallbackSnippet": "componentWillUnmount() {first }"
  },
  {
    "prefix": "gdsfp",
    "snippet": "static getDerivedStateFromProps(props, state) {${1:first}}",
    "type": "GetDerivedStateFromProps",
    "description": "Invoked right before calling the render method, both on the initial mount and on subsequent updates.",
    "fileTypes": [
      "jsx",
      "tsx"
    ],
    "codeMirrorSnippet": "static getDerivedStateFromProps(props, state) {${1:first}}",
    "fallbackSnippet": "static getDerivedStateFromProps(props, state) {first}"
  },
  {
    "prefix": "gsbu",
    "snippet": "getSnapshotBeforeUpdate = (prevProps, prevState) => {${1:first}}",
    "type": "GetSnapshotBeforeUpdate",
    "description": "Called right before mutations are made (e.g. before the DOM is updated)",
    "fileTypes": [
      "jsx",
      "tsx"
    ],
    "codeMirrorSnippet": "getSnapshotBeforeUpdate = (prevProps, prevState) => {${1:first}}",
    "fallbackSnippet": "getSnapshotBeforeUpdate = (prevProps, prevState) => {first}"
  },
  {
    "prefix": "rcontext",
    "snippet": "const ${1:first} = React.createContext()",
    "type": "CreateContext",
    "description": "Create React context",
    "fileTypes": [
      "jsx",
      "tsx"
    ],
    "codeMirrorSnippet": "const ${1:first} = React.createContext()",
    "fallbackSnippet": "const first = React.createContext()"
  },
  {
    "prefix": "cref",
    "snippet": "this.${1:first}Ref = React.createRef()",
    "type": "CreateRef",
    "description": "Create ref statement used inside constructor",
    "fileTypes": [
      "jsx",
      "tsx"
    ],
    "codeMirrorSnippet": "this.${1:first}Ref = React.createRef()",
    "fallbackSnippet": "this.firstRef = React.createRef()"
  },
  {
    "prefix": "sst",
    "snippet": "this.setState((state, props) => { return { ${1:first} }})",
    "type": "ComponentSetStateObject",
    "description": "Performs a shallow merge of nextState into current state",
    "fileTypes": [
      "jsx",
      "tsx"
    ],
    "codeMirrorSnippet": "this.setState((state, props) => { return { ${1:first} }})",
    "fallbackSnippet": "this.setState((state, props) => { return { first }})"
  },
  {
    "prefix": "ssf",
    "snippet": "this.setState((state, props) => { return { ${1:first} }})",
    "type": "ComponentSetStateFunc",
    "description": "Performs a shallow merge of nextState into current state",
    "fileTypes": [
      "jsx",
      "tsx"
    ],
    "codeMirrorSnippet": "this.setState((state, props) => { return { ${1:first} }})",
    "fallbackSnippet": "this.setState((state, props) => { return { first }})"
  },
  {
    "prefix": "props",
    "snippet": "this.props.${1:first}",
    "type": "ComponentProps",
    "description": "Access component's props",
    "fileTypes": [
      "jsx",
      "tsx"
    ],
    "codeMirrorSnippet": "this.props.${1:first}",
    "fallbackSnippet": "this.props.first"
  },
  {
    "prefix": "state",
    "snippet": "this.state.${1:first}",
    "type": "ComponentState",
    "fileTypes": [
      "jsx",
      "tsx"
    ],
    "codeMirrorSnippet": "this.state.${1:first}",
    "fallbackSnippet": "this.state.first"
  },
  {
    "prefix": "bnd",
    "snippet": "this.${1:first} = this.${1:first}.bind(this)",
    "type": "BindThis",
    "description": "Binds this to a method",
    "fileTypes": [
      "jsx",
      "tsx"
    ],
    "codeMirrorSnippet": "this.${1:first} = this.${1:first}.bind(this)",
    "fallbackSnippet": "this.first = this.first.bind(this)"
  },
  {
    "prefix": "cmmb",
    "snippet": "/**\n * ${1:first}\n */",
    "type": "CommentBigBlock",
    "fileTypes": [
      "jsx",
      "tsx"
    ],
    "codeMirrorSnippet": "/**\n * ${1:first}\n */",
    "fallbackSnippet": "/**\n * first\n */"
  },
  {
    "prefix": "hocredux",
    "snippet": "import React from 'react'\nimport { connect } from 'react-redux'\nimport PropTypes from 'prop-types'\n\nexport const mapStateToProps = state => ({})\n\nexport const mapDispatchToProps = {}\n\nexport const ${1:first} = (WrappedComponent) => {\n  const hocComponent = ({ ...props }) => <WrappedComponent {...props} />\n\n  hocComponent.propTypes = {}\n\n  return hocComponent\n}\n\nexport default WrapperComponent => connect(mapStateToProps, mapDispatchToProps)(${1:first}(WrapperComponent))\n",
    "type": "HocComponentWithRedux",
    "fileTypes": [
      "jsx",
      "tsx"
    ],
    "codeMirrorSnippet": "import React from 'react'\nimport { connect } from 'react-redux'\nimport PropTypes from 'prop-types'\n\nexport const mapStateToProps = state => ({})\n\nexport const mapDispatchToProps = {}\n\nexport const ${1:first} = (WrappedComponent) => {\n  const hocComponent = ({ ...props }) => <WrappedComponent {...props} />\n\n  hocComponent.propTypes = {}\n\n  return hocComponent\n}\n\nexport default WrapperComponent => connect(mapStateToProps, mapDispatchToProps)(${1:first}(WrapperComponent))\n",
    "fallbackSnippet": "import React from 'react'\nimport { connect } from 'react-redux'\nimport PropTypes from 'prop-types'\n\nexport const mapStateToProps = state => ({})\n\nexport const mapDispatchToProps = {}\n\nexport const first = (WrappedComponent) => {\n  const hocComponent = ({ ...props }) => <WrappedComponent {...props} />\n\n  hocComponent.propTypes = {}\n\n  return hocComponent\n}\n\nexport default WrapperComponent => connect(mapStateToProps, mapDispatchToProps)(first(WrapperComponent))\n"
  },
  {
    "prefix": "hoc",
    "snippet": "import React from 'react'\nimport PropTypes from 'prop-types'\n\nexport default (WrappedComponent) => {\n  const hocComponent = ({ ...props }) => <WrappedComponent {...props} />\n\n  hocComponent.propTypes = {}\n\n  return hocComponent\n}\n",
    "type": "HocComponent",
    "fileTypes": [
      "jsx",
      "tsx"
    ],
    "codeMirrorSnippet": "import React from 'react'\nimport PropTypes from 'prop-types'\n\nexport default (WrappedComponent) => {\n  const hocComponent = ({ ...props }) => <WrappedComponent {...props} />\n\n  hocComponent.propTypes = {}\n\n  return hocComponent\n}\n",
    "fallbackSnippet": "import React from 'react'\nimport PropTypes from 'prop-types'\n\nexport default (WrappedComponent) => {\n  const hocComponent = ({ ...props }) => <WrappedComponent {...props} />\n\n  hocComponent.propTypes = {}\n\n  return hocComponent\n}\n"
  },
  {
    "prefix": "tpf",
    "snippet": "typeof ${1:first}",
    "type": "TypeofSnippet",
    "fileTypes": [
      "jsx",
      "tsx",
      "javascript"
    ],
    "codeMirrorSnippet": "typeof ${1:first}",
    "fallbackSnippet": "typeof first"
  },
  {
    "prefix": "call",
    "snippet": "${1:method}.call(${2:context}, ${3:arguments})",
    "type": "method",
    "description": "Calls the function with the specified object as the this value and the specified rest arguments as the arguments.",
    "fileTypes": [
      "jsx",
      "tsx",
      "javascript"
    ],
    "codeMirrorSnippet": "${1:method}.call(${2:context}, ${3:arguments})",
    "fallbackSnippet": "method.call(context, arguments)"
  },
  {
    "prefix": "apply",
    "snippet": "${1:method}.apply(${2:context}, ${3:arguments})",
    "type": "method",
    "description": "Calls the function with the specified object as the this value and the elements of specified array as the arguments.",
    "fileTypes": [
      "jsx",
      "tsx",
      "javascript"
    ],
    "codeMirrorSnippet": "${1:method}.apply(${2:context}, ${3:arguments})",
    "fallbackSnippet": "method.apply(context, arguments)"
  },
  {
    "prefix": "jp",
    "snippet": "JSON.parse(${1:obj})",
    "type": "JSON",
    "description": "Converts a JavaScript Object Notation (JSON) string into an object",
    "fileTypes": [
      "jsx",
      "tsx",
      "javascript"
    ],
    "codeMirrorSnippet": "JSON.parse(${1:obj})",
    "fallbackSnippet": "JSON.parse(obj)"
  },
  {
    "prefix": "js",
    "snippet": "JSON.stringify(${1:obj})",
    "type": "JSON",
    "description": "Converts a JavaScript value to a JavaScript Object Notation (JSON) string.",
    "fileTypes": [
      "jsx",
      "tsx",
      "javascript"
    ],
    "codeMirrorSnippet": "JSON.stringify(${1:obj})",
    "fallbackSnippet": "JSON.stringify(obj)"
  },
  {
    "prefix": "us",
    "snippet": "'use strict'",
    "type": "use strict",
    "description": "Use Javascript strict mode",
    "fileTypes": [
      "tsx",
      "javascript"
    ],
    "codeMirrorSnippet": "'use strict'",
    "fallbackSnippet": "'use strict'"
  },
  {
    "prefix": "al",
    "snippet": "alert('${1:message}')",
    "type": "alert",
    "fileTypes": [
      "jsx",
      "tsx",
      "javascript"
    ],
    "codeMirrorSnippet": "alert('${1:message}')",
    "fallbackSnippet": "alert('message')"
  },
  {
    "prefix": "pr",
    "snippet": "prompt('${1:message}')",
    "type": "prompt",
    "fileTypes": [
      "jsx",
      "tsx",
      "javascript"
    ],
    "codeMirrorSnippet": "prompt('${1:message}')",
    "fallbackSnippet": "prompt('message')"
  },
  {
    "prefix": "cf",
    "snippet": "confirm('${1:msg}');",
    "type": "confirm",
    "fileTypes": [
      "jsx",
      "tsx",
      "javascript"
    ],
    "codeMirrorSnippet": "confirm('${1:msg}');",
    "fallbackSnippet": "confirm('msg');"
  },
  {
    "prefix": "cas",
    "snippet": "console.assert(${1:first}, ${2:second})",
    "type": "ConsoleAssert",
    "description": "If the specified expression is false, the message is written to the console along with a stack trace",
    "fileTypes": [
      "jsx",
      "tsx",
      "javascript"
    ],
    "codeMirrorSnippet": "console.assert(${1:first}, ${2:second})",
    "fallbackSnippet": "console.assert(first, second)"
  },
  {
    "prefix": "ccl",
    "snippet": "console.clear()",
    "type": "ConsoleClear",
    "description": "Clears the console",
    "fileTypes": [
      "jsx",
      "tsx",
      "javascript"
    ],
    "codeMirrorSnippet": "console.clear()",
    "fallbackSnippet": "console.clear()"
  },
  {
    "prefix": "cco",
    "snippet": "console.count(${1:first})",
    "type": "ConsoleCount",
    "description": "Writes the the number of times that <code>count()</code> has been invoked at the same line and with the same label",
    "fileTypes": [
      "jsx",
      "tsx",
      "javascript"
    ],
    "codeMirrorSnippet": "console.count(${1:first})",
    "fallbackSnippet": "console.count(first)"
  },
  {
    "prefix": "cdi",
    "snippet": "console.dir(${1:first})",
    "type": "ConsoleDir",
    "description": "Prints a JavaScript representation of the specified object",
    "fileTypes": [
      "jsx",
      "tsx",
      "javascript"
    ],
    "codeMirrorSnippet": "console.dir(${1:first})",
    "fallbackSnippet": "console.dir(first)"
  },
  {
    "prefix": "cer",
    "snippet": "console.error(${1:first})",
    "type": "ConsoleError",
    "description": "Displays a message in the console and also includes a stack trace from where the method was called",
    "fileTypes": [
      "jsx",
      "tsx",
      "javascript"
    ],
    "codeMirrorSnippet": "console.error(${1:first})",
    "fallbackSnippet": "console.error(first)"
  },
  {
    "prefix": "cgr",
    "snippet": "console.group('${1:first}')",
    "type": "ConsoleGroup",
    "description": "Groups and indents all following output by an additional level, until <code>console.groupEnd()</code> is called.",
    "fileTypes": [
      "jsx",
      "tsx",
      "javascript"
    ],
    "codeMirrorSnippet": "console.group('${1:first}')",
    "fallbackSnippet": "console.group('first')"
  },
  {
    "prefix": "cge",
    "snippet": "console.groupEnd()",
    "type": "ConsoleGroupEnd",
    "description": "Closes out the corresponding <code>console.group()</code>.",
    "fileTypes": [
      "jsx",
      "tsx",
      "javascript"
    ],
    "codeMirrorSnippet": "console.groupEnd()",
    "fallbackSnippet": "console.groupEnd()"
  },
  {
    "prefix": "clg",
    "snippet": "console.log(${1:first})",
    "type": "ConsoleLog",
    "description": "Displays a message in the console",
    "fileTypes": [
      "jsx",
      "tsx",
      "javascript"
    ],
    "codeMirrorSnippet": "console.log(${1:first})",
    "fallbackSnippet": "console.log(first)"
  },
  {
    "prefix": "ctr",
    "snippet": "console.trace(${1:first})",
    "type": "ConsoleTrace",
    "description": "Prints a stack trace from the point where the method was called",
    "fileTypes": [
      "jsx",
      "tsx",
      "javascript"
    ],
    "codeMirrorSnippet": "console.trace(${1:first})",
    "fallbackSnippet": "console.trace(first)"
  },
  {
    "prefix": "clo",
    "snippet": "console.log('${1:first}', ${2:second})",
    "type": "ConsoleLogObject",
    "description": "Logs property with name.",
    "fileTypes": [
      "jsx",
      "tsx",
      "javascript"
    ],
    "codeMirrorSnippet": "console.log('${1:first}', ${2:second})",
    "fallbackSnippet": "console.log('first', second)"
  },
  {
    "prefix": "clj",
    "snippet": "console.log('${1:first}', JSON.stringify(${1:first}, null, 2))",
    "type": "ConsoleLogJson",
    "description": "Logs stringified JSON property with name.",
    "fileTypes": [
      "jsx",
      "tsx",
      "javascript"
    ],
    "codeMirrorSnippet": "console.log('${1:first}', JSON.stringify(${1:first}, null, 2))",
    "fallbackSnippet": "console.log('first', JSON.stringify(first, null, 2))"
  },
  {
    "prefix": "ctm",
    "snippet": "console.time('${1:first}')",
    "type": "ConsoleTime",
    "description": "Console time wrapper",
    "fileTypes": [
      "jsx",
      "tsx",
      "javascript"
    ],
    "codeMirrorSnippet": "console.time('${1:first}')",
    "fallbackSnippet": "console.time('first')"
  },
  {
    "prefix": "cte",
    "snippet": "console.timeEnd('${1:first}')",
    "type": "ConsoleTimeEnd",
    "description": "Console time end wrapper",
    "fileTypes": [
      "jsx",
      "tsx",
      "javascript"
    ],
    "codeMirrorSnippet": "console.timeEnd('${1:first}')",
    "fallbackSnippet": "console.timeEnd('first')"
  },
  {
    "prefix": "cwa",
    "snippet": "console.warn(${1:first})",
    "type": "ConsoleWarn",
    "description": "Displays a message in the console but also displays a yellow warning icon along with the logged message",
    "fileTypes": [
      "jsx",
      "tsx",
      "javascript"
    ],
    "codeMirrorSnippet": "console.warn(${1:first})",
    "fallbackSnippet": "console.warn(first)"
  },
  {
    "prefix": "cin",
    "snippet": "console.info(${1:first})",
    "type": "ConsoleInfo",
    "description": "Displays a message in the console but also displays a blue information icon along with the logged message",
    "fileTypes": [
      "jsx",
      "tsx",
      "javascript"
    ],
    "codeMirrorSnippet": "console.info(${1:first})",
    "fallbackSnippet": "console.info(first)"
  },
  {
    "prefix": "ctl",
    "snippet": "console.table([${1:first}])",
    "type": "ConsoleTable",
    "description": "Logs table to console",
    "fileTypes": [
      "jsx",
      "tsx",
      "javascript"
    ],
    "codeMirrorSnippet": "console.table([${1:first}])",
    "fallbackSnippet": "console.table([first])"
  },
  {
    "prefix": "pta",
    "snippet": "PropTypes.array",
    "type": "PropTypeArray",
    "description": "Array prop type",
    "fileTypes": [
      "jsx",
      "tsx"
    ],
    "codeMirrorSnippet": "PropTypes.array",
    "fallbackSnippet": "PropTypes.array"
  },
  {
    "prefix": "ptar",
    "snippet": "PropTypes.array.isRequired",
    "type": "PropTypeArrayRequired",
    "description": "Array prop type required",
    "fileTypes": [
      "jsx",
      "tsx"
    ],
    "codeMirrorSnippet": "PropTypes.array.isRequired",
    "fallbackSnippet": "PropTypes.array.isRequired"
  },
  {
    "prefix": "ptb",
    "snippet": "PropTypes.bool",
    "type": "PropTypeBool",
    "description": "Bool prop type",
    "fileTypes": [
      "jsx",
      "tsx"
    ],
    "codeMirrorSnippet": "PropTypes.bool",
    "fallbackSnippet": "PropTypes.bool"
  },
  {
    "prefix": "ptbr",
    "snippet": "PropTypes.bool.isRequired",
    "type": "PropTypeBoolRequired",
    "description": "Bool prop type required",
    "fileTypes": [
      "jsx",
      "tsx"
    ],
    "codeMirrorSnippet": "PropTypes.bool.isRequired",
    "fallbackSnippet": "PropTypes.bool.isRequired"
  },
  {
    "prefix": "ptf",
    "snippet": "PropTypes.func",
    "type": "PropTypeFunc",
    "description": "Func prop type",
    "fileTypes": [
      "jsx",
      "tsx"
    ],
    "codeMirrorSnippet": "PropTypes.func",
    "fallbackSnippet": "PropTypes.func"
  },
  {
    "prefix": "ptfr",
    "snippet": "PropTypes.func.isRequired",
    "type": "PropTypeFuncRequired",
    "description": "Func prop type required",
    "fileTypes": [
      "jsx",
      "tsx"
    ],
    "codeMirrorSnippet": "PropTypes.func.isRequired",
    "fallbackSnippet": "PropTypes.func.isRequired"
  },
  {
    "prefix": "ptn",
    "snippet": "PropTypes.number",
    "type": "PropTypeNumber",
    "description": "Number prop type",
    "fileTypes": [
      "jsx",
      "tsx"
    ],
    "codeMirrorSnippet": "PropTypes.number",
    "fallbackSnippet": "PropTypes.number"
  },
  {
    "prefix": "ptnr",
    "snippet": "PropTypes.number.isRequired",
    "type": "PropTypeNumberRequired",
    "description": "Number prop type required",
    "fileTypes": [
      "jsx",
      "tsx"
    ],
    "codeMirrorSnippet": "PropTypes.number.isRequired",
    "fallbackSnippet": "PropTypes.number.isRequired"
  },
  {
    "prefix": "pto",
    "snippet": "PropTypes.object",
    "type": "PropTypeObject",
    "description": "Object prop type",
    "fileTypes": [
      "jsx",
      "tsx"
    ],
    "codeMirrorSnippet": "PropTypes.object",
    "fallbackSnippet": "PropTypes.object"
  },
  {
    "prefix": "ptor",
    "snippet": "PropTypes.object.isRequired",
    "type": "PropTypeObjectRequired",
    "description": "Object prop type required",
    "fileTypes": [
      "jsx",
      "tsx"
    ],
    "codeMirrorSnippet": "PropTypes.object.isRequired",
    "fallbackSnippet": "PropTypes.object.isRequired"
  },
  {
    "prefix": "pts",
    "snippet": "PropTypes.string",
    "type": "PropTypeString",
    "description": "String prop type",
    "fileTypes": [
      "jsx",
      "tsx"
    ],
    "codeMirrorSnippet": "PropTypes.string",
    "fallbackSnippet": "PropTypes.string"
  },
  {
    "prefix": "ptsr",
    "snippet": "PropTypes.string.isRequired",
    "type": "PropTypeStringRequired",
    "description": "String prop type required",
    "fileTypes": [
      "jsx",
      "tsx"
    ],
    "codeMirrorSnippet": "PropTypes.string.isRequired",
    "fallbackSnippet": "PropTypes.string.isRequired"
  },
  {
    "prefix": "ptnd",
    "snippet": "PropTypes.node",
    "type": "PropTypeNode",
    "description": "Anything that can be rendered: numbers, strings, elements or an array",
    "fileTypes": [
      "jsx",
      "tsx"
    ],
    "codeMirrorSnippet": "PropTypes.node",
    "fallbackSnippet": "PropTypes.node"
  },
  {
    "prefix": "ptndr",
    "snippet": "PropTypes.node.isRequired",
    "type": "PropTypeNodeRequired",
    "description": "Anything that can be rendered: numbers, strings, elements or an array required",
    "fileTypes": [
      "jsx",
      "tsx"
    ],
    "codeMirrorSnippet": "PropTypes.node.isRequired",
    "fallbackSnippet": "PropTypes.node.isRequired"
  },
  {
    "prefix": "ptel",
    "snippet": "PropTypes.element",
    "type": "PropTypeElement",
    "description": "React element prop type",
    "fileTypes": [
      "jsx",
      "tsx"
    ],
    "codeMirrorSnippet": "PropTypes.element",
    "fallbackSnippet": "PropTypes.element"
  },
  {
    "prefix": "ptelr",
    "snippet": "PropTypes.element.isRequired",
    "type": "PropTypeElementRequired",
    "description": "React element prop type required",
    "fileTypes": [
      "jsx",
      "tsx"
    ],
    "codeMirrorSnippet": "PropTypes.element.isRequired",
    "fallbackSnippet": "PropTypes.element.isRequired"
  },
  {
    "prefix": "pti",
    "snippet": "PropTypes.instanceOf(${1:ClassName})",
    "type": "PropTypeInstanceOf",
    "description": "Is an instance of a class prop type",
    "fileTypes": [
      "jsx",
      "tsx"
    ],
    "codeMirrorSnippet": "PropTypes.instanceOf(${1:ClassName})",
    "fallbackSnippet": "PropTypes.instanceOf(ClassName)"
  },
  {
    "prefix": "ptir",
    "snippet": "PropTypes.instanceOf(${1:ClassName}).isRequired",
    "type": "PropTypeInstanceOfRequired",
    "description": "Is an instance of a class prop type required",
    "fileTypes": [
      "jsx",
      "tsx"
    ],
    "codeMirrorSnippet": "PropTypes.instanceOf(${1:ClassName}).isRequired",
    "fallbackSnippet": "PropTypes.instanceOf(ClassName).isRequired"
  },
  {
    "prefix": "pte",
    "snippet": "PropTypes.oneOf(['${1:value1}', '${2:value2}'])",
    "type": "PropTypeEnum",
    "description": "Prop type limited to specific values by treating it as an enum",
    "fileTypes": [
      "jsx",
      "tsx"
    ],
    "codeMirrorSnippet": "PropTypes.oneOf(['${1:value1}', '${2:value2}'])",
    "fallbackSnippet": "PropTypes.oneOf(['value1', 'value2'])"
  },
  {
    "prefix": "pter",
    "snippet": "PropTypes.oneOf(['${1:value1}', '${2:value2}']).isRequired",
    "type": "PropTypeEnumRequired",
    "description": "Prop type limited to specific values by treating it as an enum required",
    "fileTypes": [
      "jsx",
      "tsx"
    ],
    "codeMirrorSnippet": "PropTypes.oneOf(['${1:value1}', '${2:value2}']).isRequired",
    "fallbackSnippet": "PropTypes.oneOf(['value1', 'value2']).isRequired"
  },
  {
    "prefix": "ptet",
    "snippet": "PropTypes.oneOfType([\n  ${1:PropTypes.string},\n  ${2:PropTypes.number},\n  ${3:PropTypes.bool}\n])",
    "type": "PropTypeOneOfType",
    "description": "An object that could be one of many types",
    "fileTypes": [
      "jsx",
      "tsx"
    ],
    "codeMirrorSnippet": "PropTypes.oneOfType([\n  ${1:PropTypes.string},\n  ${2:PropTypes.number},\n  ${3:PropTypes.bool}\n])",
    "fallbackSnippet": "PropTypes.oneOfType([\n  PropTypes.string,\n  PropTypes.number,\n  PropTypes.bool\n])"
  },
  {
    "prefix": "ptetr",
    "snippet": "PropTypes.oneOfType([\n  ${1:PropTypes.string},\n  ${2:PropTypes.number},\n  ${3:PropTypes.bool}\n]).isRequired",
    "type": "PropTypeOneOfTypeRequired",
    "description": "An object that could be one of many types required",
    "fileTypes": [
      "jsx",
      "tsx"
    ],
    "codeMirrorSnippet": "PropTypes.oneOfType([\n  ${1:PropTypes.string},\n  ${2:PropTypes.number},\n  ${3:PropTypes.bool}\n]).isRequired",
    "fallbackSnippet": "PropTypes.oneOfType([\n  PropTypes.string,\n  PropTypes.number,\n  PropTypes.bool\n]).isRequired"
  },
  {
    "prefix": "ptao",
    "snippet": "PropTypes.arrayOf(${1:PropTypes.string})",
    "type": "PropTypeArrayOf",
    "description": "An array of a certain type",
    "fileTypes": [
      "jsx",
      "tsx"
    ],
    "codeMirrorSnippet": "PropTypes.arrayOf(${1:PropTypes.string})",
    "fallbackSnippet": "PropTypes.arrayOf(PropTypes.string)"
  },
  {
    "prefix": "ptaor",
    "snippet": "PropTypes.arrayOf(${1:PropTypes.string}).isRequired",
    "type": "PropTypeArrayOfRequired",
    "description": "An array of a certain type required",
    "fileTypes": [
      "jsx",
      "tsx"
    ],
    "codeMirrorSnippet": "PropTypes.arrayOf(${1:PropTypes.string}).isRequired",
    "fallbackSnippet": "PropTypes.arrayOf(PropTypes.string).isRequired"
  },
  {
    "prefix": "ptoo",
    "snippet": "PropTypes.objectOf(${1:PropTypes.number})",
    "type": "PropTypeObjectOf",
    "description": "An object with property values of a certain type",
    "fileTypes": [
      "jsx",
      "tsx"
    ],
    "codeMirrorSnippet": "PropTypes.objectOf(${1:PropTypes.number})",
    "fallbackSnippet": "PropTypes.objectOf(PropTypes.number)"
  },
  {
    "prefix": "ptoor",
    "snippet": "PropTypes.objectOf(${1:PropTypes.number}).isRequired",
    "type": "PropTypeObjectOfRequired",
    "description": "An object with property values of a certain type required",
    "fileTypes": [
      "jsx",
      "tsx"
    ],
    "codeMirrorSnippet": "PropTypes.objectOf(${1:PropTypes.number}).isRequired",
    "fallbackSnippet": "PropTypes.objectOf(PropTypes.number).isRequired"
  },
  {
    "prefix": "ptsh",
    "snippet": "PropTypes.shape({\n  ${1:propertyName}: ${2:PropTypes.string},\n  ${3:propertyName2}: ${4:PropTypes.number}\n})",
    "type": "PropTypeShape",
    "description": "An object taking on a particular shape",
    "fileTypes": [
      "jsx",
      "tsx"
    ],
    "codeMirrorSnippet": "PropTypes.shape({\n  ${1:propertyName}: ${2:PropTypes.string},\n  ${3:propertyName2}: ${4:PropTypes.number}\n})",
    "fallbackSnippet": "PropTypes.shape({\n  propertyName: PropTypes.string,\n  propertyName2: PropTypes.number\n})"
  },
  {
    "prefix": "ptshr",
    "snippet": "PropTypes.shape({\n  ${1:propertyName}: ${2:PropTypes.string},\n  ${3:propertyName2}: ${4:PropTypes.number}\n}).isRequired",
    "type": "PropTypeShapeRequired",
    "description": "An object taking on a particular shape required",
    "fileTypes": [
      "jsx",
      "tsx"
    ],
    "codeMirrorSnippet": "PropTypes.shape({\n  ${1:propertyName}: ${2:PropTypes.string},\n  ${3:propertyName2}: ${4:PropTypes.number}\n}).isRequired",
    "fallbackSnippet": "PropTypes.shape({\n  propertyName: PropTypes.string,\n  propertyName2: PropTypes.number\n}).isRequired"
  },
  {
    "prefix": "ptex",
    "snippet": "PropTypes.exact({\n  ${1:propertyName}: ${2:PropTypes.string},\n  ${3:propertyName2}: ${4:PropTypes.number}\n})",
    "type": "PropTypeExact",
    "description": "An object with warnings on extra properties",
    "fileTypes": [
      "jsx",
      "tsx"
    ],
    "codeMirrorSnippet": "PropTypes.exact({\n  ${1:propertyName}: ${2:PropTypes.string},\n  ${3:propertyName2}: ${4:PropTypes.number}\n})",
    "fallbackSnippet": "PropTypes.exact({\n  propertyName: PropTypes.string,\n  propertyName2: PropTypes.number\n})"
  },
  {
    "prefix": "ptexr",
    "snippet": "PropTypes.exact({\n  ${1:propertyName}: ${2:PropTypes.string},\n  ${3:propertyName2}: ${4:PropTypes.number}\n}).isRequired",
    "type": "PropTypeExactRequired",
    "description": "An object with warnings on extra properties required",
    "fileTypes": [
      "jsx",
      "tsx"
    ],
    "codeMirrorSnippet": "PropTypes.exact({\n  ${1:propertyName}: ${2:PropTypes.string},\n  ${3:propertyName2}: ${4:PropTypes.number}\n}).isRequired",
    "fallbackSnippet": "PropTypes.exact({\n  propertyName: PropTypes.string,\n  propertyName2: PropTypes.number\n}).isRequired"
  },
  {
    "prefix": "ptany",
    "snippet": "PropTypes.any",
    "type": "PropTypeAny",
    "description": "Any prop type",
    "fileTypes": [
      "jsx",
      "tsx"
    ],
    "codeMirrorSnippet": "PropTypes.any",
    "fallbackSnippet": "PropTypes.any"
  },
  {
    "prefix": "desc",
    "snippet": "describe('${1:first}', () => { ${2:second} })",
    "type": "describeBlock",
    "description": "Testing `describe` block",
    "fileTypes": [
      "jsx",
      "tsx"
    ],
    "codeMirrorSnippet": "describe('${1:first}', () => { ${2:second} })",
    "fallbackSnippet": "describe('first', () => { second })"
  },
  {
    "prefix": "test",
    "snippet": "test('should ${1:first}', () => { ${2:second} })",
    "type": "TestBlock",
    "description": "Testing `test` block",
    "fileTypes": [
      "jsx",
      "tsx"
    ],
    "codeMirrorSnippet": "test('should ${1:first}', () => { ${2:second} })",
    "fallbackSnippet": "test('should first', () => { second })"
  },
  {
    "prefix": "testa",
    "snippet": "test('should ${1:first}', async () => { ${2:second} })",
    "type": "TestAsyncBlock",
    "description": "Testing `asynchronous test` block",
    "fileTypes": [
      "jsx",
      "tsx"
    ],
    "codeMirrorSnippet": "test('should ${1:first}', async () => { ${2:second} })",
    "fallbackSnippet": "test('should first', async () => { second })"
  },
  {
    "prefix": "tit",
    "snippet": "it('should ${1:first}', () => { ${2:second} })",
    "type": "ItBlock",
    "description": "Testing `it` block",
    "fileTypes": [
      "jsx",
      "tsx"
    ],
    "codeMirrorSnippet": "it('should ${1:first}', () => { ${2:second} })",
    "fallbackSnippet": "it('should first', () => { second })"
  },
  {
    "prefix": "tita",
    "snippet": "it('should ${1:first}', async () => { ${2:second} })",
    "type": "ItAsyncBlock",
    "description": "Testing asynchronous `it` block",
    "fileTypes": [
      "jsx",
      "tsx"
    ],
    "codeMirrorSnippet": "it('should ${1:first}', async () => { ${2:second} })",
    "fallbackSnippet": "it('should first', async () => { second })"
  },
  {
    "prefix": "stest",
    "snippet": "import React from 'react'\nimport renderer from 'react-test-renderer'\n\nimport { ${1:${FILE_NAME}} } from '../${1:${FILE_NAME}}'\n\ndescribe('<${1:${FILE_NAME}} />', () => {\n  const defaultProps = {}\n  const wrapper = renderer.create(<${1:${FILE_NAME}} {...defaultProps} />)\n\n  test('render', () => {\n    expect(wrapper).toMatchSnapshot()\n  })\n})",
    "type": "SetupReactTest",
    "fileTypes": [
      "jsx",
      "tsx"
    ],
    "codeMirrorSnippet": "import React from 'react'\nimport renderer from 'react-test-renderer'\n\nimport { ${1:__CODEMIRROR_FILE_NAME__} } from '../${1:__CODEMIRROR_FILE_NAME__}'\n\ndescribe('<${1:__CODEMIRROR_FILE_NAME__} />', () => {\n  const defaultProps = {}\n  const wrapper = renderer.create(<${1:__CODEMIRROR_FILE_NAME__} {...defaultProps} />)\n\n  test('render', () => {\n    expect(wrapper).toMatchSnapshot()\n  })\n})",
    "fallbackSnippet": "import React from 'react'\nimport renderer from 'react-test-renderer'\n\nimport { __CODEMIRROR_FILE_NAME__ } from '../__CODEMIRROR_FILE_NAME__'\n\ndescribe('<__CODEMIRROR_FILE_NAME__ />', () => {\n  const defaultProps = {}\n  const wrapper = renderer.create(<__CODEMIRROR_FILE_NAME__ {...defaultProps} />)\n\n  test('render', () => {\n    expect(wrapper).toMatchSnapshot()\n  })\n})"
  },
  {
    "prefix": "sntest",
    "snippet": "import 'react-native'\nimport React from 'react'\nimport renderer from 'react-test-renderer'\n\nimport ${1:${FILE_NAME}} from '../${1:${FILE_NAME}}'\n\ndescribe('<${1:${FILE_NAME}} />', () => {\n  const defaultProps = {}\n  const wrapper = renderer.create(<${1:${FILE_NAME}} {...defaultProps} />)\n\n  test('render', () => {\n    expect(wrapper).toMatchSnapshot()\n  })\n})",
    "type": "SetupReactNativeTest",
    "fileTypes": [
      "jsx",
      "tsx"
    ],
    "codeMirrorSnippet": "import 'react-native'\nimport React from 'react'\nimport renderer from 'react-test-renderer'\n\nimport ${1:__CODEMIRROR_FILE_NAME__} from '../${1:__CODEMIRROR_FILE_NAME__}'\n\ndescribe('<${1:__CODEMIRROR_FILE_NAME__} />', () => {\n  const defaultProps = {}\n  const wrapper = renderer.create(<${1:__CODEMIRROR_FILE_NAME__} {...defaultProps} />)\n\n  test('render', () => {\n    expect(wrapper).toMatchSnapshot()\n  })\n})",
    "fallbackSnippet": "import 'react-native'\nimport React from 'react'\nimport renderer from 'react-test-renderer'\n\nimport __CODEMIRROR_FILE_NAME__ from '../__CODEMIRROR_FILE_NAME__'\n\ndescribe('<__CODEMIRROR_FILE_NAME__ />', () => {\n  const defaultProps = {}\n  const wrapper = renderer.create(<__CODEMIRROR_FILE_NAME__ {...defaultProps} />)\n\n  test('render', () => {\n    expect(wrapper).toMatchSnapshot()\n  })\n})"
  },
  {
    "prefix": "srtest",
    "snippet": "import React from 'react'\nimport renderer from 'react-test-renderer'\nimport { Provider } from 'react-redux'\n\nimport store from '~/store'\nimport { ${1:${FILE_NAME}} } from '../${1:${FILE_NAME}}'\n\ndescribe('<${1:${FILE_NAME}} />', () => {\n  const defaultProps = {}\n  const wrapper = renderer.create(\n    <Provider store={store}>\n     <${1:${FILE_NAME}} {...defaultProps} />\n    </Provider>,\n  )\n\n  test('render', () => {\n    expect(wrapper).toMatchSnapshot()\n  })\n})",
    "type": "SetupReactComponentTestWithRedux",
    "description": "Create test component",
    "fileTypes": [
      "jsx",
      "tsx"
    ],
    "codeMirrorSnippet": "import React from 'react'\nimport renderer from 'react-test-renderer'\nimport { Provider } from 'react-redux'\n\nimport store from '~/store'\nimport { ${1:__CODEMIRROR_FILE_NAME__} } from '../${1:__CODEMIRROR_FILE_NAME__}'\n\ndescribe('<${1:__CODEMIRROR_FILE_NAME__} />', () => {\n  const defaultProps = {}\n  const wrapper = renderer.create(\n    <Provider store={store}>\n     <${1:__CODEMIRROR_FILE_NAME__} {...defaultProps} />\n    </Provider>,\n  )\n\n  test('render', () => {\n    expect(wrapper).toMatchSnapshot()\n  })\n})",
    "fallbackSnippet": "import React from 'react'\nimport renderer from 'react-test-renderer'\nimport { Provider } from 'react-redux'\n\nimport store from '~/store'\nimport { __CODEMIRROR_FILE_NAME__ } from '../__CODEMIRROR_FILE_NAME__'\n\ndescribe('<__CODEMIRROR_FILE_NAME__ />', () => {\n  const defaultProps = {}\n  const wrapper = renderer.create(\n    <Provider store={store}>\n     <__CODEMIRROR_FILE_NAME__ {...defaultProps} />\n    </Provider>,\n  )\n\n  test('render', () => {\n    expect(wrapper).toMatchSnapshot()\n  })\n})"
  },
  {
    "prefix": "snrtest",
    "snippet": "import 'react-native'\nimport React from 'react'\nimport renderer from 'react-test-renderer'\nimport { Provider } from 'react-redux'\n\nimport store from '~/store'\nimport ${1:${FILE_NAME}} from '../${1:${FILE_NAME}}'\n\ndescribe('<${1:${FILE_NAME}} />', () => {\n  const defaultProps = {}\n  const wrapper = renderer.create(\n    <Provider store={store}>\n      <${1:${FILE_NAME}} {...defaultProps} />\n    </Provider>,\n  )\n\n  test('render', () => {\n    expect(wrapper).toMatchSnapshot()\n  })\n})",
    "type": "SetupReactNativeTestWithRedux",
    "fileTypes": [
      "jsx",
      "tsx"
    ],
    "codeMirrorSnippet": "import 'react-native'\nimport React from 'react'\nimport renderer from 'react-test-renderer'\nimport { Provider } from 'react-redux'\n\nimport store from '~/store'\nimport ${1:__CODEMIRROR_FILE_NAME__} from '../${1:__CODEMIRROR_FILE_NAME__}'\n\ndescribe('<${1:__CODEMIRROR_FILE_NAME__} />', () => {\n  const defaultProps = {}\n  const wrapper = renderer.create(\n    <Provider store={store}>\n      <${1:__CODEMIRROR_FILE_NAME__} {...defaultProps} />\n    </Provider>,\n  )\n\n  test('render', () => {\n    expect(wrapper).toMatchSnapshot()\n  })\n})",
    "fallbackSnippet": "import 'react-native'\nimport React from 'react'\nimport renderer from 'react-test-renderer'\nimport { Provider } from 'react-redux'\n\nimport store from '~/store'\nimport __CODEMIRROR_FILE_NAME__ from '../__CODEMIRROR_FILE_NAME__'\n\ndescribe('<__CODEMIRROR_FILE_NAME__ />', () => {\n  const defaultProps = {}\n  const wrapper = renderer.create(\n    <Provider store={store}>\n      <__CODEMIRROR_FILE_NAME__ {...defaultProps} />\n    </Provider>,\n  )\n\n  test('render', () => {\n    expect(wrapper).toMatchSnapshot()\n  })\n})"
  },
  {
    "prefix": "redux",
    "snippet": "import { connect } from 'react-redux'",
    "description": "Redux: Import connect from react-redux",
    "type": "importReduxConnect",
    "fileTypes": [
      "jsx",
      "tsx"
    ],
    "codeMirrorSnippet": "import { connect } from 'react-redux'",
    "fallbackSnippet": "import { connect } from 'react-redux'"
  },
  {
    "prefix": "rxaction",
    "snippet": "export const ${1} = (payload) => ({\n  type: ${2},\n  payload\n})\n",
    "description": "Redux: Create a Redux action",
    "type": "reduxAction",
    "fileTypes": [
      "jsx",
      "tsx"
    ],
    "codeMirrorSnippet": "export const ${1} = (payload) => ({\n  type: ${2},\n  payload\n})\n",
    "fallbackSnippet": "export const  = (payload) => ({\n  type: ,\n  payload\n})\n"
  },
  {
    "prefix": "rxconst",
    "snippet": "export const ${1} = '${1}'",
    "description": "Redux: Create a Redux constant",
    "type": "reduxConst",
    "fileTypes": [
      "jsx",
      "tsx"
    ],
    "codeMirrorSnippet": "export const ${1} = '${1}'",
    "fallbackSnippet": "export const  = ''"
  },
  {
    "prefix": "rxreducer",
    "snippet": "const initialState = {}\n\nexport default (state = initialState, { type, payload }) => {\n  switch (type) {\n    case ${1}:\n      return { ...state, ...payload }\n    default:\n      return state\n  }\n}\n",
    "description": "Redux: Create a Redux reducer",
    "type": "reduxReducer",
    "fileTypes": [
      "jsx",
      "tsx"
    ],
    "codeMirrorSnippet": "const initialState = {}\n\nexport default (state = initialState, { type, payload }) => {\n  switch (type) {\n    case ${1}:\n      return { ...state, ...payload }\n    default:\n      return state\n  }\n}\n",
    "fallbackSnippet": "const initialState = {}\n\nexport default (state = initialState, { type, payload }) => {\n  switch (type) {\n    case :\n      return { ...state, ...payload }\n    default:\n      return state\n  }\n}\n"
  },
  {
    "prefix": "rxselect",
    "snippet": "import { createSelector } from 'reselect'\n\nexport const ${1} = state => state.${2}",
    "description": "Redux: Create a Redux selector using Reselect",
    "type": "reduxSelector",
    "fileTypes": [
      "jsx",
      "tsx"
    ],
    "codeMirrorSnippet": "import { createSelector } from 'reselect'\n\nexport const ${1} = state => state.${2}",
    "fallbackSnippet": "import { createSelector } from 'reselect'\n\nexport const  = state => state."
  },
  {
    "prefix": "rxslice",
    "snippet": "import { createSlice } from '@reduxjs/toolkit'\n\nconst initialState = {}\n\nconst ${FILE_NAME} = createSlice({\n  name: ${2},\n  initialState,\n reducers: {}\n});\n\nexport const {} = ${Placeholders.FILE_NAME}.actions\n\nexport default ${Placeholders.FILE_NAME}.reducer",
    "description": "Redux: Create a Redux slice using @reduxjs/toolkit",
    "type": "reduxSlice",
    "fileTypes": [
      "jsx",
      "tsx"
    ],
    "codeMirrorSnippet": "import { createSlice } from '@reduxjs/toolkit'\n\nconst initialState = {}\n\nconst __CODEMIRROR_FILE_NAME__ = createSlice({\n  name: ${2},\n  initialState,\n reducers: {}\n});\n\nexport const {} = __CODEMIRROR_FILE_NAME__.actions\n\nexport default __CODEMIRROR_FILE_NAME__.reducer",
    "fallbackSnippet": "import { createSlice } from '@reduxjs/toolkit'\n\nconst initialState = {}\n\nconst __CODEMIRROR_FILE_NAME__ = createSlice({\n  name: ,\n  initialState,\n reducers: {}\n});\n\nexport const {} = __CODEMIRROR_FILE_NAME__.actions\n\nexport default __CODEMIRROR_FILE_NAME__.reducer"
  },
  {
    "prefix": "reduxmap",
    "snippet": "const mapStateToProps = (state) => ({})\n\nconst mapDispatchToProps = {}",
    "description": "Redux: Map state and dispatch to props",
    "type": "mappingToProps",
    "fileTypes": [
      "jsx",
      "tsx"
    ],
    "codeMirrorSnippet": "const mapStateToProps = (state) => ({})\n\nconst mapDispatchToProps = {}",
    "fallbackSnippet": "const mapStateToProps = (state) => ({})\n\nconst mapDispatchToProps = {}"
  },
  {
    "prefix": "exptp",
    "snippet": "export type ${1:first} = {${2:second}}",
    "type": "ExportType",
    "fileTypes": [
      "jsx",
      "tsx"
    ],
    "codeMirrorSnippet": "export type ${1:first} = {${2:second}}",
    "fallbackSnippet": "export type first = {second}"
  },
  {
    "prefix": "expint",
    "snippet": "export interface ${1:first} {${2:second}}",
    "type": "ExportInterface",
    "fileTypes": [
      "jsx",
      "tsx"
    ],
    "codeMirrorSnippet": "export interface ${1:first} {${2:second}}",
    "fallbackSnippet": "export interface first {second}"
  },
  {
    "prefix": "tsrcc",
    "snippet": "import React, { Component } from 'react'\n\ninterface Props {\n  // Define your props here\n}\n\ninterface State {\n  // Define your state here\n}\n\nexport default class ${1:${FILE_NAME}} extends Component<Props, State> {\n  state = {}\n\n  render() {\n    return (\n      <div>\n        ${2:/* Your JSX code here */}\n      </div>\n    )\n  }\n}",
    "type": "TypescriptReactClassComponent",
    "description": "Creates a React component class with ES7 module system and TypeScript interfaces",
    "fileTypes": [
      "jsx",
      "tsx"
    ],
    "codeMirrorSnippet": "import React, { Component } from 'react'\n\ninterface Props {\n  // Define your props here\n}\n\ninterface State {\n  // Define your state here\n}\n\nexport default class ${1:__CODEMIRROR_FILE_NAME__} extends Component<Props, State> {\n  state = {}\n\n  render() {\n    return (\n      <div>\n        ${2:/* Your JSX code here */}\n      </div>\n    )\n  }\n}",
    "fallbackSnippet": "import React, { Component } from 'react'\n\ninterface Props {\n  // Define your props here\n}\n\ninterface State {\n  // Define your state here\n}\n\nexport default class __CODEMIRROR_FILE_NAME__ extends Component<Props, State> {\n  state = {}\n\n  render() {\n    return (\n      <div>\n        /* Your JSX code here */\n      </div>\n    )\n  }\n}"
  },
  {
    "prefix": "tsrce",
    "snippet": "import React, { Component } from 'react'\n\ninterface Props {\n  // Define your props here\n}\n\ninterface State {\n  // Define your state here\n}\nclass ${1:${FILE_NAME}} extends Component<Props, State> {\n  state = {}\n\n  render() {\n    return (\n      <div>\n        ${2:/* Your JSX code here */}\n      </div>\n    )\n  }\n}\n\nexport default ${1:${FILE_NAME}};",
    "type": "typescriptReactClassExportComponent",
    "description": "Creates a React component class with ES7 module system and TypeScript interfaces",
    "fileTypes": [
      "jsx",
      "tsx"
    ],
    "codeMirrorSnippet": "import React, { Component } from 'react'\n\ninterface Props {\n  // Define your props here\n}\n\ninterface State {\n  // Define your state here\n}\nclass ${1:__CODEMIRROR_FILE_NAME__} extends Component<Props, State> {\n  state = {}\n\n  render() {\n    return (\n      <div>\n        ${2:/* Your JSX code here */}\n      </div>\n    )\n  }\n}\n\nexport default ${1:__CODEMIRROR_FILE_NAME__};",
    "fallbackSnippet": "import React, { Component } from 'react'\n\ninterface Props {\n  // Define your props here\n}\n\ninterface State {\n  // Define your state here\n}\nclass __CODEMIRROR_FILE_NAME__ extends Component<Props, State> {\n  state = {}\n\n  render() {\n    return (\n      <div>\n        /* Your JSX code here */\n      </div>\n    )\n  }\n}\n\nexport default __CODEMIRROR_FILE_NAME__;"
  },
  {
    "prefix": "tsrfce",
    "snippet": "import React from 'react'\n\ninterface Props {\n  // Define your props here\n}\n\nfunction ${1:${FILE_NAME}}({}: Props) {\n  return (\n    <div>\n      ${2:/* Your JSX code here */}\n    </div>\n  )\n}\n\nexport default ${1:${FILE_NAME}};",
    "type": "typescriptReactFunctionalExportComponent",
    "description": "Creates a React Functional Component with ES7 module system and TypeScript interface",
    "fileTypes": [
      "jsx",
      "tsx"
    ],
    "codeMirrorSnippet": "import React from 'react'\n\ninterface Props {\n  // Define your props here\n}\n\nfunction ${1:__CODEMIRROR_FILE_NAME__}({}: Props) {\n  return (\n    <div>\n      ${2:/* Your JSX code here */}\n    </div>\n  )\n}\n\nexport default ${1:__CODEMIRROR_FILE_NAME__};",
    "fallbackSnippet": "import React from 'react'\n\ninterface Props {\n  // Define your props here\n}\n\nfunction __CODEMIRROR_FILE_NAME__({}: Props) {\n  return (\n    <div>\n      /* Your JSX code here */\n    </div>\n  )\n}\n\nexport default __CODEMIRROR_FILE_NAME__;"
  },
  {
    "prefix": "tsrfc",
    "snippet": "import React from 'react'\n\ninterface Props {\n  // Define your props here\n}\n\nexport default function ${1:${FILE_NAME}}({}: Props) {\n  return (\n    <div>\n      ${2:/* Your JSX code here */}\n    </div>\n  )\n}",
    "type": "typescriptReactFunctionalComponent",
    "description": "Creates a React Functional Component with ES7 module system and TypeScript interface",
    "fileTypes": [
      "jsx",
      "tsx"
    ],
    "codeMirrorSnippet": "import React from 'react'\n\ninterface Props {\n  // Define your props here\n}\n\nexport default function ${1:__CODEMIRROR_FILE_NAME__}({}: Props) {\n  return (\n    <div>\n      ${2:/* Your JSX code here */}\n    </div>\n  )\n}",
    "fallbackSnippet": "import React from 'react'\n\ninterface Props {\n  // Define your props here\n}\n\nexport default function __CODEMIRROR_FILE_NAME__({}: Props) {\n  return (\n    <div>\n      /* Your JSX code here */\n    </div>\n  )\n}"
  },
  {
    "prefix": "tsrafce",
    "snippet": "import React from 'react';\n\ninterface Props {\n  // Define your props here\n}\n\nconst ${1:${FILE_NAME}} = (props: Props) => {\n  return (\n    <div>\n      ${2:first} {/* Your JSX code here */}\n    </div>\n  );\n};\n\nexport default ${1:${FILE_NAME}};",
    "type": "typescriptReactArrowFunctionExportComponent",
    "description": "Creates a React Arrow Function Component with ES7 module system and TypeScript interface",
    "fileTypes": [
      "jsx",
      "tsx"
    ],
    "codeMirrorSnippet": "import React from 'react';\n\ninterface Props {\n  // Define your props here\n}\n\nconst ${1:__CODEMIRROR_FILE_NAME__} = (props: Props) => {\n  return (\n    <div>\n      ${2:first} {/* Your JSX code here */}\n    </div>\n  );\n};\n\nexport default ${1:__CODEMIRROR_FILE_NAME__};",
    "fallbackSnippet": "import React from 'react';\n\ninterface Props {\n  // Define your props here\n}\n\nconst __CODEMIRROR_FILE_NAME__ = (props: Props) => {\n  return (\n    <div>\n      first {/* Your JSX code here */}\n    </div>\n  );\n};\n\nexport default __CODEMIRROR_FILE_NAME__;"
  },
  {
    "prefix": "tsrafc",
    "snippet": "import React from 'react';\n\ninterface Props {\n  // Define your props here\n}\n\nconst ${1:${FILE_NAME}} = (props: Props) => {\n  return (\n    <div>\n      ${2:FirstTab} {/* Your JSX code here */}\n    </div>\n  );\n};",
    "type": "typescriptReactArrowFunctionComponent",
    "description": "Creates a React Arrow Function Component with ES7 module system and TypeScript interface",
    "fileTypes": [
      "jsx",
      "tsx"
    ],
    "codeMirrorSnippet": "import React from 'react';\n\ninterface Props {\n  // Define your props here\n}\n\nconst ${1:__CODEMIRROR_FILE_NAME__} = (props: Props) => {\n  return (\n    <div>\n      ${2:FirstTab} {/* Your JSX code here */}\n    </div>\n  );\n};",
    "fallbackSnippet": "import React from 'react';\n\ninterface Props {\n  // Define your props here\n}\n\nconst __CODEMIRROR_FILE_NAME__ = (props: Props) => {\n  return (\n    <div>\n      FirstTab {/* Your JSX code here */}\n    </div>\n  );\n};"
  },
  {
    "prefix": "tsrpc",
    "snippet": "import React, { PureComponent } from 'react';\n\ninterface Props {\n  // Define your props here\n}\n\nexport default class ${1:${FILE_NAME}} extends PureComponent<Props> {\n  ${2:innerComponentReturn}\n}",
    "type": "typescriptReactClassPureComponent",
    "description": "Creates a React pure component class with ES7 module system and TypeScript interface",
    "fileTypes": [
      "jsx",
      "tsx"
    ],
    "codeMirrorSnippet": "import React, { PureComponent } from 'react';\n\ninterface Props {\n  // Define your props here\n}\n\nexport default class ${1:__CODEMIRROR_FILE_NAME__} extends PureComponent<Props> {\n  ${2:innerComponentReturn}\n}",
    "fallbackSnippet": "import React, { PureComponent } from 'react';\n\ninterface Props {\n  // Define your props here\n}\n\nexport default class __CODEMIRROR_FILE_NAME__ extends PureComponent<Props> {\n  innerComponentReturn\n}"
  },
  {
    "prefix": "tsrpce",
    "snippet": "import React, { PureComponent } from 'react';\n\ninterface Props {\n  // Define your props here\n}\n\nclass ${1:${FILE_NAME}} extends PureComponent<Props> {\n  ${2:innerComponentReturn}\n}\nexport default ${1:${FILE_NAME}};",
    "type": "typescriptReactClassExportPureComponent",
    "description": "Creates a React pure component class with ES7 module system and TypeScript interface",
    "fileTypes": [
      "jsx",
      "tsx"
    ],
    "codeMirrorSnippet": "import React, { PureComponent } from 'react';\n\ninterface Props {\n  // Define your props here\n}\n\nclass ${1:__CODEMIRROR_FILE_NAME__} extends PureComponent<Props> {\n  ${2:innerComponentReturn}\n}\nexport default ${1:__CODEMIRROR_FILE_NAME__};",
    "fallbackSnippet": "import React, { PureComponent } from 'react';\n\ninterface Props {\n  // Define your props here\n}\n\nclass __CODEMIRROR_FILE_NAME__ extends PureComponent<Props> {\n  innerComponentReturn\n}\nexport default __CODEMIRROR_FILE_NAME__;"
  },
  {
    "prefix": "tsrcredux",
    "snippet": "import { connect } from 'react-redux';\n${1:reactComponent}\n\ninterface Props {\n  // Define your props here\n}\n\ninterface State {\n  // Define your state here\n}\n\nexport class ${2:${FILE_NAME}} extends Component<Props, State> {\n  state = {};\n  ${3:innerComponentReturn}\n}\n${4:reduxComponentExport}",
    "type": "typescriptReactClassComponentRedux",
    "description": "Creates a React component class with connected redux and ES7 module system and TypeScript interfaces",
    "fileTypes": [
      "jsx",
      "tsx"
    ],
    "codeMirrorSnippet": "import { connect } from 'react-redux';\n${1:reactComponent}\n\ninterface Props {\n  // Define your props here\n}\n\ninterface State {\n  // Define your state here\n}\n\nexport class ${2:__CODEMIRROR_FILE_NAME__} extends Component<Props, State> {\n  state = {};\n  ${3:innerComponentReturn}\n}\n${4:reduxComponentExport}",
    "fallbackSnippet": "import { connect } from 'react-redux';\nreactComponent\n\ninterface Props {\n  // Define your props here\n}\n\ninterface State {\n  // Define your state here\n}\n\nexport class __CODEMIRROR_FILE_NAME__ extends Component<Props, State> {\n  state = {};\n  innerComponentReturn\n}\nreduxComponentExport"
  },
  {
    "prefix": "tsrnf",
    "snippet": "import { View, Text } from 'react-native';\n${1:react}\n\ninterface Props {\n  // Define your props here\n}\n\nconst ${2:${FILE_NAME}} = (props: Props) => {\n  return (\n    <View>\n      <Text>${3:FirstTab}</Text>\n    </View>\n  );\n};\n\nexport default ${2:${FILE_NAME}};",
    "type": "typescriptReactNativeArrowFunctionComponent",
    "description": "Creates a React Native Arrow Function Component with ES7 module system in TypeScript",
    "fileTypes": [
      "jsx",
      "tsx"
    ],
    "codeMirrorSnippet": "import { View, Text } from 'react-native';\n${1:react}\n\ninterface Props {\n  // Define your props here\n}\n\nconst ${2:__CODEMIRROR_FILE_NAME__} = (props: Props) => {\n  return (\n    <View>\n      <Text>${3:FirstTab}</Text>\n    </View>\n  );\n};\n\nexport default ${2:__CODEMIRROR_FILE_NAME__};",
    "fallbackSnippet": "import { View, Text } from 'react-native';\nreact\n\ninterface Props {\n  // Define your props here\n}\n\nconst __CODEMIRROR_FILE_NAME__ = (props: Props) => {\n  return (\n    <View>\n      <Text>FirstTab</Text>\n    </View>\n  );\n};\n\nexport default __CODEMIRROR_FILE_NAME__;"
  },
  {
    "prefix": "tsrnfs",
    "snippet": "import { StyleSheet, Text, View } from 'react-native';\n${1:react}\n\ninterface Props {\n  // Define your props here\n}\n\nconst ${2:${FILE_NAME}} = (props: Props) => {\n  return (\n    <View>\n      <Text>${3:FirstTab}</Text>\n    </View>\n  );\n};\n\nexport default ${2:${FILE_NAME}};\n\nconst styles = StyleSheet.create({});",
    "type": "typescriptReactNativeArrowFunctionComponentWithStyles",
    "description": "Creates a React Native Arrow Function Component with ES7 module system, TypeScript interface and StyleSheet",
    "fileTypes": [
      "jsx",
      "tsx"
    ],
    "codeMirrorSnippet": "import { StyleSheet, Text, View } from 'react-native';\n${1:react}\n\ninterface Props {\n  // Define your props here\n}\n\nconst ${2:__CODEMIRROR_FILE_NAME__} = (props: Props) => {\n  return (\n    <View>\n      <Text>${3:FirstTab}</Text>\n    </View>\n  );\n};\n\nexport default ${2:__CODEMIRROR_FILE_NAME__};\n\nconst styles = StyleSheet.create({});",
    "fallbackSnippet": "import { StyleSheet, Text, View } from 'react-native';\nreact\n\ninterface Props {\n  // Define your props here\n}\n\nconst __CODEMIRROR_FILE_NAME__ = (props: Props) => {\n  return (\n    <View>\n      <Text>FirstTab</Text>\n    </View>\n  );\n};\n\nexport default __CODEMIRROR_FILE_NAME__;\n\nconst styles = StyleSheet.create({});"
  },
  {
    "prefix": "fil",
    "snippet": "${1:array}.filter((${2:element}) => ${3:condition})",
    "type": "Array.filter",
    "description": "Creates a new array with elements that pass a test.",
    "fileTypes": [
      "jsx",
      "tsx",
      "javascript"
    ],
    "codeMirrorSnippet": "${1:array}.filter((${2:element}) => ${3:condition})",
    "fallbackSnippet": "array.filter((element) => condition)"
  },
  {
    "prefix": "fi",
    "snippet": "${1:array}.find((${2:element}) => ${3:condition})",
    "type": "Array.find",
    "description": "Returns the first element that passes a test.",
    "fileTypes": [
      "jsx",
      "tsx",
      "javascript"
    ],
    "codeMirrorSnippet": "${1:array}.find((${2:element}) => ${3:condition})",
    "fallbackSnippet": "array.find((element) => condition)"
  },
  {
    "prefix": "join",
    "snippet": "${1:array}.join(${2:separator})",
    "type": "Array.join",
    "description": "Joins all elements of an array into a string.",
    "fileTypes": [
      "jsx",
      "tsx",
      "javascript"
    ],
    "codeMirrorSnippet": "${1:array}.join(${2:separator})",
    "fallbackSnippet": "array.join(separator)"
  },
  {
    "prefix": "map",
    "snippet": "${1:array}.map((${2:element}, ${3:index}) => ${4:newElements})",
    "type": "Array.map",
    "description": "Creates a new array with the results of calling a function for each element.",
    "fileTypes": [
      "jsx",
      "tsx",
      "javascript"
    ],
    "codeMirrorSnippet": "${1:array}.map((${2:element}, ${3:index}) => ${4:newElements})",
    "fallbackSnippet": "array.map((element, index) => newElements)"
  },
  {
    "prefix": "pop",
    "snippet": "${1:array}.pop(${2:element})",
    "type": "Array.pop",
    "description": "Removes the last element from an array and returns it.",
    "fileTypes": [
      "jsx",
      "tsx",
      "javascript"
    ],
    "codeMirrorSnippet": "${1:array}.pop(${2:element})",
    "fallbackSnippet": "array.pop(element)"
  },
  {
    "prefix": "push",
    "snippet": "${1:array}.push(${2:element})",
    "type": "Array.push",
    "description": "Adds one or more elements to the end of an array.",
    "fileTypes": [
      "jsx",
      "tsx",
      "javascript"
    ],
    "codeMirrorSnippet": "${1:array}.push(${2:element})",
    "fallbackSnippet": "array.push(element)"
  },
  {
    "prefix": "red",
    "snippet": "${1:array}.reduce((${2:accumulator}, ${3:currentValue}) => ${4:accumulatorFunction}, ${5:initialValue})",
    "type": "Array.reduce",
    "description": "Combines all elements of an array into a single value.",
    "fileTypes": [
      "jsx",
      "tsx",
      "javascript"
    ],
    "codeMirrorSnippet": "${1:array}.reduce((${2:accumulator}, ${3:currentValue}) => ${4:accumulatorFunction}, ${5:initialValue})",
    "fallbackSnippet": "array.reduce((accumulator, currentValue) => accumulatorFunction, initialValue)"
  },
  {
    "prefix": "rev",
    "snippet": "${1:array}.reverse()",
    "type": "Array.reverse",
    "description": "Reverses the order of the elements in an array.",
    "fileTypes": [
      "jsx",
      "tsx",
      "javascript"
    ],
    "codeMirrorSnippet": "${1:array}.reverse()",
    "fallbackSnippet": "array.reverse()"
  },
  {
    "prefix": "sh",
    "snippet": "${1:array}.shift(${2:element})",
    "type": "Array.shift",
    "description": "Removes the first element from an array and returns it.",
    "fileTypes": [
      "jsx",
      "tsx",
      "javascript"
    ],
    "codeMirrorSnippet": "${1:array}.shift(${2:element})",
    "fallbackSnippet": "array.shift(element)"
  },
  {
    "prefix": "unsh",
    "snippet": "${1:array}.unshift(${2:element})",
    "type": "Array.unshift",
    "description": "Adds the specified element to the beginning of an array.",
    "fileTypes": [
      "jsx",
      "tsx",
      "javascript"
    ],
    "codeMirrorSnippet": "${1:array}.unshift(${2:element})",
    "fallbackSnippet": "array.unshift(element)"
  },
  {
    "prefix": "spl",
    "snippet": "${1:array}.splice(${2:start}, ${3:deleteCount}, ${4:elements})",
    "type": "Array.splice",
    "description": "Removes, replaces and/or adds new elements in an array.",
    "fileTypes": [
      "jsx",
      "tsx",
      "javascript"
    ],
    "codeMirrorSnippet": "${1:array}.splice(${2:start}, ${3:deleteCount}, ${4:elements})",
    "fallbackSnippet": "array.splice(start, deleteCount, elements)"
  },
  {
    "prefix": "some",
    "snippet": "${1:array}.some((${2:el}) => ${3:condition})",
    "type": "Array.some",
    "description": "Checks if at least one element in the array passes a test.",
    "fileTypes": [
      "jsx",
      "tsx",
      "javascript"
    ],
    "codeMirrorSnippet": "${1:array}.some((${2:el}) => ${3:condition})",
    "fallbackSnippet": "array.some((el) => condition)"
  },
  {
    "prefix": "sort",
    "snippet": "${1:array}.sort((${2:a}, ${3:b}) => ${4:comparisonFunction})",
    "type": "Array.sort",
    "description": "Sorts the elements of an array in a particular order.",
    "fileTypes": [
      "jsx",
      "tsx",
      "javascript"
    ],
    "codeMirrorSnippet": "${1:array}.sort((${2:a}, ${3:b}) => ${4:comparisonFunction})",
    "fallbackSnippet": "array.sort((a, b) => comparisonFunction)"
  },
  {
    "prefix": "tostr",
    "snippet": "${1:array}.toString()",
    "type": "Array.toString",
    "description": "Returns a string representation of the array.",
    "fileTypes": [
      "jsx",
      "tsx",
      "javascript"
    ],
    "codeMirrorSnippet": "${1:array}.toString()",
    "fallbackSnippet": "array.toString()"
  },
  {
    "prefix": "frm",
    "snippet": "Array.from(${1:arrayLike})",
    "type": "Array.from",
    "description": "Creates a new array from an iterable object.",
    "fileTypes": [
      "jsx",
      "tsx",
      "javascript"
    ],
    "codeMirrorSnippet": "Array.from(${1:arrayLike})",
    "fallbackSnippet": "Array.from(arrayLike)"
  },
  {
    "prefix": "ca",
    "snippet": "${1:str}.charAt(${2:index})",
    "type": "String.charAt",
    "description": "Returns the character at a specific index.",
    "fileTypes": [
      "jsx",
      "tsx",
      "javascript"
    ],
    "codeMirrorSnippet": "${1:str}.charAt(${2:index})",
    "fallbackSnippet": "str.charAt(index)"
  },
  {
    "prefix": "match",
    "snippet": "${1:str}.match(${2:regex})",
    "type": "String.match",
    "description": "Searches a string for a match against a regular expression.",
    "fileTypes": [
      "jsx",
      "tsx",
      "javascript"
    ],
    "codeMirrorSnippet": "${1:str}.match(${2:regex})",
    "fallbackSnippet": "str.match(regex)"
  },
  {
    "prefix": "rpt",
    "snippet": "${1:str}.repeat(${2:count})",
    "type": "String.repeat",
    "description": "Repeats a string a specified number of times.",
    "fileTypes": [
      "jsx",
      "tsx",
      "javascript"
    ],
    "codeMirrorSnippet": "${1:str}.repeat(${2:count})",
    "fallbackSnippet": "str.repeat(count)"
  },
  {
    "prefix": "rep",
    "snippet": "${1:str}.replace(${2:substring}, ${3:replacement})",
    "type": "String.replace",
    "description": "Searches a string for a match against a regular expression and replaces it with another string.",
    "fileTypes": [
      "jsx",
      "tsx",
      "javascript"
    ],
    "codeMirrorSnippet": "${1:str}.replace(${2:substring}, ${3:replacement})",
    "fallbackSnippet": "str.replace(substring, replacement)"
  },
  {
    "prefix": "repa",
    "snippet": "${1:str}.replaceAll(${2:substring}, ${3:replacement})",
    "type": "String.replaceAll",
    "description": "Searches a string for a all matches against a regular expression or a substring and replaces them with another string.",
    "fileTypes": [
      "jsx",
      "tsx",
      "javascript"
    ],
    "codeMirrorSnippet": "${1:str}.replaceAll(${2:substring}, ${3:replacement})",
    "fallbackSnippet": "str.replaceAll(substring, replacement)"
  },
  {
    "prefix": "sw",
    "snippet": "${1:str}.startsWith(${2:substr})",
    "type": "String.startsWith",
    "description": "Checks if a string starts with a specified substring.",
    "fileTypes": [
      "jsx",
      "tsx",
      "javascript"
    ],
    "codeMirrorSnippet": "${1:str}.startsWith(${2:substr})",
    "fallbackSnippet": "str.startsWith(substr)"
  },
  {
    "prefix": "ew",
    "snippet": "${1:str}.endsWith(${2:substr})",
    "type": "String.endsWith",
    "description": "Checks if a string ends with a specified substring.",
    "fileTypes": [
      "jsx",
      "tsx",
      "javascript"
    ],
    "codeMirrorSnippet": "${1:str}.endsWith(${2:substr})",
    "fallbackSnippet": "str.endsWith(substr)"
  },
  {
    "prefix": "sstr",
    "snippet": "${1:str}.substring(${2:start}, ${3:end})",
    "type": "String.substring",
    "description": "Extracts a substring from a string.",
    "fileTypes": [
      "jsx",
      "tsx",
      "javascript"
    ],
    "codeMirrorSnippet": "${1:str}.substring(${2:start}, ${3:end})",
    "fallbackSnippet": "str.substring(start, end)"
  },
  {
    "prefix": "ss",
    "snippet": "${1:str}.substr(${2:start}, ${3:length})",
    "type": "String.substr",
    "description": "Extracts a substring with a specific length from a string.",
    "fileTypes": [
      "jsx",
      "tsx",
      "javascript"
    ],
    "codeMirrorSnippet": "${1:str}.substr(${2:start}, ${3:length})",
    "fallbackSnippet": "str.substr(start, length)"
  },
  {
    "prefix": "tlc",
    "snippet": "${1:str}.toLowerCase()",
    "type": "String.toLowerCase",
    "description": "Returns a new string with all characters converted to lowercase.",
    "fileTypes": [
      "jsx",
      "tsx",
      "javascript"
    ],
    "codeMirrorSnippet": "${1:str}.toLowerCase()",
    "fallbackSnippet": "str.toLowerCase()"
  },
  {
    "prefix": "tuc",
    "snippet": "${1:str}.toUpperCase()",
    "type": "String.toUpperCase",
    "description": "Returns a new string with all characters converted to uppercase.",
    "fileTypes": [
      "jsx",
      "tsx",
      "javascript"
    ],
    "codeMirrorSnippet": "${1:str}.toUpperCase()",
    "fallbackSnippet": "str.toUpperCase()"
  },
  {
    "prefix": "trm",
    "snippet": "${1:str}.trim()",
    "type": "String.trim",
    "description": "Removes leading and trailing whitespace from a string.",
    "fileTypes": [
      "jsx",
      "tsx",
      "javascript"
    ],
    "codeMirrorSnippet": "${1:str}.trim()",
    "fallbackSnippet": "str.trim()"
  },
  {
    "prefix": "sp",
    "snippet": "${1:str}.split(${2:delimiter})",
    "type": "String.split",
    "description": "Splits a string into an array of substrings using all occurrences of the delimiter.",
    "fileTypes": [
      "jsx",
      "tsx",
      "javascript"
    ],
    "codeMirrorSnippet": "${1:str}.split(${2:delimiter})",
    "fallbackSnippet": "str.split(delimiter)"
  },
  {
    "prefix": "inc",
    "snippet": "${1:elements}.includes(${2:element}, ${3:start})",
    "type": "includes",
    "description": "Checks if an array or string includes a specific element",
    "fileTypes": [
      "jsx",
      "tsx",
      "javascript"
    ],
    "codeMirrorSnippet": "${1:elements}.includes(${2:element}, ${3:start})",
    "fallbackSnippet": "elements.includes(element, start)"
  },
  {
    "prefix": "sl",
    "snippet": "${1:elements}.slice(${2:start}, ${3:end})",
    "type": "slice",
    "description": "Returns a shallow copy of selected elements in an array or string, as a new array or string.",
    "fileTypes": [
      "jsx",
      "tsx",
      "javascript"
    ],
    "codeMirrorSnippet": "${1:elements}.slice(${2:start}, ${3:end})",
    "fallbackSnippet": "elements.slice(start, end)"
  },
  {
    "prefix": "io",
    "snippet": "${1:elements}.indexOf(${2:element})",
    "type": "indexOf",
    "description": "Returns the first index of a specific element.",
    "fileTypes": [
      "jsx",
      "tsx",
      "javascript"
    ],
    "codeMirrorSnippet": "${1:elements}.indexOf(${2:element})",
    "fallbackSnippet": "elements.indexOf(element)"
  },
  {
    "prefix": "cc",
    "snippet": "${1:elements}.concat(${2:otherElements})",
    "type": "concat",
    "description": "Combines multiple strings or arrays into a single new string or array.",
    "fileTypes": [
      "jsx",
      "tsx",
      "javascript"
    ],
    "codeMirrorSnippet": "${1:elements}.concat(${2:otherElements})",
    "fallbackSnippet": "elements.concat(otherElements)"
  },
  {
    "prefix": "lio",
    "snippet": "${1:str}.lastIndexOf(${2:substr})",
    "type": "lastIndexOf",
    "description": "Returns the last index of a specified value within another array or string.",
    "fileTypes": [
      "jsx",
      "tsx",
      "javascript"
    ],
    "codeMirrorSnippet": "${1:str}.lastIndexOf(${2:substr})",
    "fallbackSnippet": "str.lastIndexOf(substr)"
  },
  {
    "prefix": "ael",
    "snippet": "${1:document}.addEventListener('${2:click}', ${3:(e) => {}})",
    "type": "addEventListener",
    "description": "Adds an event listener to a DOM element",
    "fileTypes": [
      "tsx",
      "javascript"
    ],
    "codeMirrorSnippet": "${1:document}.addEventListener('${2:click}', ${3:(e) => \\{\\}})",
    "fallbackSnippet": "document.addEventListener('click', (e) => {})"
  },
  {
    "prefix": "rel",
    "snippet": "${1:document}.removeEventListener('${2:click}', ${3:eventListener})",
    "type": "removeEventListener",
    "description": "Removes an event listener from a DOM element",
    "fileTypes": [
      "tsx",
      "javascript"
    ],
    "codeMirrorSnippet": "${1:document}.removeEventListener('${2:click}', ${3:eventListener})",
    "fallbackSnippet": "document.removeEventListener('click', eventListener)"
  },
  {
    "prefix": "ac",
    "snippet": "${1:document}.appendChild(${2:elem})",
    "type": "appendChild",
    "description": "Adds a child node to a specified parent",
    "fileTypes": [
      "tsx",
      "javascript"
    ],
    "codeMirrorSnippet": "${1:document}.appendChild(${2:elem})",
    "fallbackSnippet": "document.appendChild(elem)"
  },
  {
    "prefix": "rc",
    "snippet": "${1:document}.removeChild(${2:elem})",
    "type": "removeChild",
    "description": "Removes a child node from the DOM",
    "fileTypes": [
      "tsx",
      "javascript"
    ],
    "codeMirrorSnippet": "${1:document}.removeChild(${2:elem})",
    "fallbackSnippet": "document.removeChild(elem)"
  },
  {
    "prefix": "rpc",
    "snippet": "${1:document}.replaceChild(${2:newChild}, ${3:oldChild})",
    "type": "replaceChild",
    "description": "Replaces a child node from the DOM",
    "fileTypes": [
      "tsx",
      "javascript"
    ],
    "codeMirrorSnippet": "${1:document}.replaceChild(${2:newChild}, ${3:oldChild})",
    "fallbackSnippet": "document.replaceChild(newChild, oldChild)"
  },
  {
    "prefix": "inb",
    "snippet": "${1:parentEl}.insertBefore(${2:newEl}, ${3:refEl})",
    "type": "insertBefore",
    "description": "Inserts a child node into the DOM",
    "fileTypes": [
      "tsx",
      "javascript"
    ],
    "codeMirrorSnippet": "${1:parentEl}.insertBefore(${2:newEl}, ${3:refEl})",
    "fallbackSnippet": "parentEl.insertBefore(newEl, refEl)"
  },
  {
    "prefix": "ina",
    "snippet": "${1:parentEl}.insertAdjacentHTML(${2:position}, ${3:el})",
    "type": "insertAdjacentHTML",
    "description": "Inserts a child node into the DOM",
    "fileTypes": [
      "tsx",
      "javascript"
    ],
    "codeMirrorSnippet": "${1:parentEl}.insertAdjacentHTML(${2:position}, ${3:el})",
    "fallbackSnippet": "parentEl.insertAdjacentHTML(position, el)"
  },
  {
    "prefix": "ds",
    "snippet": "${1:el}.dataset",
    "type": "dataset",
    "description": "Returns the value of all 'data-' properties on a HTML element",
    "fileTypes": [
      "tsx",
      "javascript"
    ],
    "codeMirrorSnippet": "${1:el}.dataset",
    "fallbackSnippet": "el.dataset"
  },
  {
    "prefix": "gcs",
    "snippet": "getComputedStyle(${1:el})",
    "type": "replaceChild",
    "description": "Removes a child node from the DOM",
    "fileTypes": [
      "tsx",
      "javascript"
    ],
    "codeMirrorSnippet": "getComputedStyle(${1:el})",
    "fallbackSnippet": "getComputedStyle(el)"
  },
  {
    "prefix": "cel",
    "snippet": "${1:document}.createElement(${2:element})",
    "type": "createElement",
    "description": "Creates a new HTML element with a specified tag name",
    "fileTypes": [
      "tsx",
      "javascript"
    ],
    "codeMirrorSnippet": "${1:document}.createElement(${2:element})",
    "fallbackSnippet": "document.createElement(element)"
  },
  {
    "prefix": "cdf",
    "snippet": "document.createDocumentFragment()",
    "type": "createDocumentFragment",
    "description": "Creates a new offscreen node",
    "fileTypes": [
      "tsx",
      "javascript"
    ],
    "codeMirrorSnippet": "document.createDocumentFragment()",
    "fallbackSnippet": "document.createDocumentFragment()"
  },
  {
    "prefix": "cla",
    "snippet": "${1:document}.classList.add('${2:class}')",
    "type": "classList.add",
    "description": "Adds a new CSS class to a HTML element",
    "fileTypes": [
      "tsx",
      "javascript"
    ],
    "codeMirrorSnippet": "${1:document}.classList.add('${2:class}')",
    "fallbackSnippet": "document.classList.add('class')"
  },
  {
    "prefix": "clr",
    "snippet": "${1:document}.classList.remove('${2:class}')",
    "type": "classList.remove",
    "description": "Removes an existing CSS class from a HTML element",
    "fileTypes": [
      "tsx",
      "javascript"
    ],
    "codeMirrorSnippet": "${1:document}.classList.remove('${2:class}')",
    "fallbackSnippet": "document.classList.remove('class')"
  },
  {
    "prefix": "clt",
    "snippet": "${1:document}.classList.toggle('${2:class}')",
    "type": "classList.toggle",
    "description": "Adds or removes a class based on wether it's already present",
    "fileTypes": [
      "tsx",
      "javascript"
    ],
    "codeMirrorSnippet": "${1:document}.classList.toggle('${2:class}')",
    "fallbackSnippet": "document.classList.toggle('class')"
  },
  {
    "prefix": "gei",
    "snippet": "${1:document}.getElementById('${2:id}')",
    "type": "getElementById",
    "description": "Returns an element whose id property matches the specified string",
    "fileTypes": [
      "tsx",
      "javascript"
    ],
    "codeMirrorSnippet": "${1:document}.getElementById('${2:id}')",
    "fallbackSnippet": "document.getElementById('id')"
  },
  {
    "prefix": "gecn",
    "snippet": "${1:document}.getElementsByClassName('${2:class}')",
    "type": "getElementsByClassName",
    "description": "Returns a HTML collection of elements with the given class name",
    "fileTypes": [
      "tsx",
      "javascript"
    ],
    "codeMirrorSnippet": "${1:document}.getElementsByClassName('${2:class}')",
    "fallbackSnippet": "document.getElementsByClassName('class')"
  },
  {
    "prefix": "getn",
    "snippet": "${1:document}.getElementsByTagName('${2:tag}')",
    "type": "getElementsByTagName",
    "description": "Returns a HTML collection of elements with the given tag name",
    "fileTypes": [
      "tsx",
      "javascript"
    ],
    "codeMirrorSnippet": "${1:document}.getElementsByTagName('${2:tag}')",
    "fallbackSnippet": "document.getElementsByTagName('tag')"
  },
  {
    "prefix": "ga",
    "snippet": "${1:document}.getAttribute('${2:attr}')",
    "type": "getAttribute",
    "description": "Returns the value of the specified attribute on the element",
    "fileTypes": [
      "tsx",
      "javascript"
    ],
    "codeMirrorSnippet": "${1:document}.getAttribute('${2:attr}')",
    "fallbackSnippet": "document.getAttribute('attr')"
  },
  {
    "prefix": "sa",
    "snippet": "${1:document}.setAttribute('${2:attr}')",
    "type": "setAttribute",
    "description": "Adds the attribute with the specified name on the element",
    "fileTypes": [
      "tsx",
      "javascript"
    ],
    "codeMirrorSnippet": "${1:document}.setAttribute('${2:attr}')",
    "fallbackSnippet": "document.setAttribute('attr')"
  },
  {
    "prefix": "ra",
    "snippet": "${1:document}.removeAttribute('${2:attr}')",
    "type": "removeAttribute",
    "description": "Removes the attribute with the specified name on the element",
    "fileTypes": [
      "tsx",
      "javascript"
    ],
    "codeMirrorSnippet": "${1:document}.removeAttribute('${2:attr}')",
    "fallbackSnippet": "document.removeAttribute('attr')"
  },
  {
    "prefix": "ih",
    "snippet": "${1:document}.innerHTML = '${2:elem}'",
    "type": "innerHTML",
    "description": "Gets or sets the HTML markup contained within an element",
    "fileTypes": [
      "tsx",
      "javascript"
    ],
    "codeMirrorSnippet": "${1:document}.innerHTML = '${2:elem}'",
    "fallbackSnippet": "document.innerHTML = 'elem'"
  },
  {
    "prefix": "tc",
    "snippet": "${1:document}.textContent = '${2:content}'",
    "type": "textContent",
    "description": "Gets or sets the text content of the specified element",
    "fileTypes": [
      "tsx",
      "javascript"
    ],
    "codeMirrorSnippet": "${1:document}.textContent = '${2:content}'",
    "fallbackSnippet": "document.textContent = 'content'"
  },
  {
    "prefix": "qs",
    "snippet": "${1:document}.querySelector('${2:selector}')",
    "type": "querySelector",
    "description": "Returns the first element within the DOM that matches the specified selector(s)",
    "fileTypes": [
      "tsx",
      "javascript"
    ],
    "codeMirrorSnippet": "${1:document}.querySelector('${2:selector}')",
    "fallbackSnippet": "document.querySelector('selector')"
  },
  {
    "prefix": "qsa",
    "snippet": "${1:document}.querySelectorAll('${2:selector}')",
    "type": "querySelectorAll",
    "description": "Returns a NodeList of all elements within the DOM that matches the specified selector(s)",
    "fileTypes": [
      "tsx",
      "javascript"
    ],
    "codeMirrorSnippet": "${1:document}.querySelectorAll('${2:selector}')",
    "fallbackSnippet": "document.querySelectorAll('selector')"
  }
];
