var o={id:"bajrangcoder.react.snippets",name:"Acode ES7+ React/Redux snippets",main:"dist/main.js",version:"1.0.0",readme:"readme.md",icon:"icon.png",files:[],minVersionCode:290,price:0,author:{name:"Raunak Raj",email:"bajrangcoders@gmail.com",github:"bajrangCoder"}};function x(n){let t=n.getMode().$id.split("/");return t[t.length-1]}var y=[{prefix:"rcc",snippet:`import React, { Component } from 'react'

export default class \${FILE_NAME} extends Component {
  render() {
    return (
    <div>$1</div>
  )
}
`,type:"Components",description:"Creates a <strong>React component</strong> class with ES7 module system",fileTypes:["jsx","tsx"]},{prefix:"rce",snippet:`import React, { Component } from 'react'

export class \${FILE_NAME} extends Component {
  render() {
    return (
      <div>$1</div>
    )
  }
}

export default \${FILE_NAME}`,type:"Components",description:"Creates a <strong>React component</strong> class with ES7 module system",fileTypes:["jsx","tsx"]},{prefix:"rfce",snippet:`import React from 'react'

const \${FILE_NAME} = () => {
  return (
    <div>$1</div>
  )
}

export default \${FILE_NAME}`,type:"Components",description:"Creates a <strong>React Arrow Function component</strong> with ES7 module system",fileTypes:["jsx","tsx"]},{prefix:"rfc",snippet:`import React from 'react'

export default function \${FILE_NAME}() {
  return (
    <div>$1</div>
  )
}`,type:"Components",description:"Creates a <strong>React Functional component</strong> with ES7 module system",fileTypes:["jsx","tsx"]},{prefix:"rfcp",snippet:`import React from 'react'
import PropTypes from 'prop-types'

function \${FILE_NAME}(props) {
  return (
    <div>$1</div>
  )
}

\${FILE_NAME}.propTypes = {}

export default \${FILE_NAME}`,type:"Components",description:"Creates a <strong>React Functional component</strong> with PropTypes and ES7 module system",fileTypes:["jsx","tsx"]},{prefix:"rafce",snippet:`import React from 'react'

const \${FILE_NAME} = () => {
  return (
    <div>$1</div>
  )
}

export default \${FILE_NAME}`,type:"Components",description:"Creates a <strong>React Arrow Function component</strong> with ES7 module system",fileTypes:["jsx","tsx"]},{prefix:"rafc",snippet:`import React from 'react'

export const \${FILE_NAME} = () => {
  return (
    <div>$1</div>
  )
}`,type:"Components",description:"Creates a <strong>React Arrow Function component</strong> with ES7 module system",fileTypes:["jsx","tsx"]},{prefix:"rafcp",snippet:`import React from 'react'
import PropTypes from 'prop-types'

const \${FILE_NAME} = props => {
  return (
    <div>$1</div>
  )
}

\${FILE_NAME}.propTypes = {}

export default \${FILE_NAME}`,type:"Components",description:"Creates a <strong>React Arrow Function component</strong> with PropTypes and ES7 module system",fileTypes:["jsx","tsx"]},{prefix:"rcep",snippet:`import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class \${FILE_NAME} extends Component {
  static propTypes = {}
  render() {
    return (
      <div>$1</div>
    )
  }
}

export default \${FILE_NAME}`,type:"Components",description:"Creates a <strong>React component</strong> class with PropTypes and ES7 module system",fileTypes:["jsx","tsx"]},{prefix:"rpc",snippet:`import React, { PureComponent } from 'react'

export default class \${FILE_NAME} extends PureComponent {
  render() {
    return (
      <div>$1</div>
    )
  }
}`,type:"Components",description:"Creates a <strong>React pure component</strong> class with ES7 module system",fileTypes:["jsx","tsx"]},{prefix:"rpce",snippet:`import React, { PureComponent } from 'react'

export class \${FILE_NAME} extends PureComponent {
  render() {
    return (
      <div>$1</div>
    )
  }
}

export default \${FILE_NAME}`,type:"Components",description:"Creates a <strong>React pure component</strong> class with ES7 module system export",fileTypes:["jsx","tsx"]},{prefix:"rpcp",snippet:`import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

export default class \${FILE_NAME} extends PureComponent {
  static propTypes = {}
  render() {
    return (
      <div>$1</div>
    )
  }
}`,type:"Components",description:"Creates a <strong>React pure component</strong> class with PropTypes and ES7 module system",fileTypes:["jsx","tsx"]},{prefix:"rmc",snippet:`import React, { memo } from 'react'

const \${FILE_NAME} = memo(() => {
  return (
    <div>$1</div>
  )
})

export default \${FILE_NAME}`,type:"Components",description:"Creates a <strong>React Memo Function component</strong> with ES7 module system",fileTypes:["jsx","tsx"]},{prefix:"rmcp",snippet:`import React, { memo } from 'react'
import PropTypes from 'prop-types'

const \${FILE_NAME} = memo((props) => {
  return (
    <div>$1</div>
  )
})

\${FILE_NAME}.propTypes = {}

export default \${FILE_NAME}`,type:"Components",description:"Creates a <strong>React Memo Function component</strong> with PropTypes and ES7 module system",fileTypes:["jsx","tsx"]},{prefix:"rccp",snippet:`import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class \${FILE_NAME} extends Component {
  static propTypes = {\${1:first}
  }
  render() {
    return (
      <div>$2</div>
    )
  }
}`,type:"Components",description:"Creates a <strong>React component</strong> class with PropTypes and ES7 module system",fileTypes:["jsx","tsx"]},{prefix:"rcredux",snippet:`import React, { Component } from 'react'
import { connect } from 'react-redux'

export class \${FILE_NAME} extends Component {
  render() {
    return (
      <div>$1</div>
    )
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(\${FILE_NAME})`,type:"Components",description:"Creates a <strong>React component</strong> class with connected redux and ES7 module system",fileTypes:["jsx","tsx"]},{prefix:"rcreduxp",snippet:`import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export class \${FILE_NAME} extends Component {
  static propTypes = {\${1:first}
  }
  render() {
    return (
      <div>$2</div>
    )
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(\${FILE_NAME})`,type:"Components",description:"Creates a <strong>React component</strong> class with PropTypes, connected redux and ES7 module system",fileTypes:["jsx","tsx"]},{prefix:"rfcredux",snippet:`import React from 'react'
import { connect } from 'react-redux'

const \${FILE_NAME} = (props) => {
  return (
    <div>$1</div>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(\${FILE_NAME})`,type:"Components",description:"Creates a <strong>React functional component</strong> with connected redux and ES7 module system",fileTypes:["jsx","tsx"]},{prefix:"rfcreduxp",snippet:`import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const \${FILE_NAME} = (props) => {
  return (
    <div>$1</div>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

\${FILE_NAME}.propTypes = {\${2:second}
}

export default connect(mapStateToProps, mapDispatchToProps)(\${FILE_NAME})`,type:"Components",description:"DEPRECATED: Creates a <strong>React functional component</strong> with PropTypes, connected redux and ES7 module system",fileTypes:["jsx","tsx"]},{prefix:"useEffectSnippet",snippet:`useEffect(() => {
  \${1:first}
  return () => {
    \${2:second}
  }
}, [\${3:third}])
`,type:"Hooks",fileTypes:["jsx","tsx"]},{prefix:"useContextSnippet",snippet:"const ${1:first} = useContext(${2:second})",type:"Hooks",fileTypes:["jsx","tsx"]},{prefix:"useStateSnippet",snippet:"const [${1:first}, set${1:first}] = useState(${2:second})",type:"Hooks",fileTypes:["jsx","tsx"]},{prefix:"useReducerSnippet",snippet:"const [state, dispatch] = useReducer(${1:first}, ${2:second}, ${3:third})",type:"Hooks",fileTypes:["jsx","tsx"]},{prefix:"useCallbackSnippet",snippet:`useCallback(
  () => {
    \${1:first}
  },
  [\${2:second}],
)
`,type:"Hooks",fileTypes:["jsx","tsx"]},{prefix:"useMemoSnippet",snippet:"useMemo(() => ${1:first}, [${2:second}])",type:"Hooks",fileTypes:["jsx","tsx"]},{prefix:"useRefSnippet",snippet:"const ${1:first} = useRef(${2:second})",type:"Hooks",fileTypes:["jsx","tsx"]},{prefix:"useImperativeHandleSnippet",snippet:`useImperativeHandle(
  \${1:first},
  () => {
    \${2:second}
  },
  [\${3:third}],
)
`,type:"Hooks",fileTypes:["jsx","tsx"]},{prefix:"useLayoutEffectSnippet",snippet:`useLayoutEffect(() => {
  \${1:first}

  return () => {
    \${2:second}
  };
}, [\${3:third}])
`,type:"Hooks",fileTypes:["jsx","tsx"]},{prefix:"imr",snippet:"import React from 'react'",type:"ImportReact",fileTypes:["jsx","tsx"]},{prefix:"imrd",snippet:"import ReactDOM from 'react-dom'",type:"ImportReactDom",fileTypes:["jsx","tsx"]},{prefix:"imrc",snippet:"import React, { Component } from 'react'",type:"ImportReactWithComponent",fileTypes:["jsx","tsx"]},{prefix:"imrcp",snippet:`import React, { Component } from 'react'
import PropTypes from 'prop-types'`,type:"ImportReactWithComponentAndPropTypes",fileTypes:["jsx","tsx"]},{prefix:"imrpc",snippet:"import React, { PureComponent } from 'react'",type:"ImportReactWithPureComponent",fileTypes:["jsx","tsx"]},{prefix:"imrpcp",snippet:`import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'`,type:"ImportReactWithPureComponent&PropTypes",fileTypes:["jsx","tsx"]},{prefix:"imrm",snippet:"import React, { memo } from 'react'",type:"ImportReactWithMemo",fileTypes:["jsx","tsx"]},{prefix:"imrmp",snippet:`import React, { memo } from 'react'
import PropTypes from 'prop-types'`,type:"ImportReactWithMemo&PropTypes",fileTypes:["jsx","tsx"]},{prefix:"impt",snippet:"import PropTypes from 'prop-types'",type:"ImportPropTypes",fileTypes:["jsx","tsx"]},{prefix:"imbr",snippet:"import { BrowserRouter as Router } from 'react-router-dom'",type:"ReactRouter",fileTypes:["jsx","tsx"]},{prefix:"imrr",snippet:"import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'",type:"ReactRouterWithRouteAndNavLink",fileTypes:["jsx","tsx"]},{prefix:"imbrc",snippet:"import { Route, Switch, NavLink, Link } from 'react-router-dom'",type:"ImportRouterSetup",fileTypes:["jsx","tsx"]},{prefix:"imbrs",snippet:"import { Switch } from 'react-router-dom'",type:"ImportRouterSwitch",fileTypes:["jsx","tsx"]},{prefix:"imbrl",snippet:"import { Link } from 'react-router-dom'",type:"ImportRouterLink",fileTypes:["jsx","tsx"]},{prefix:"imbrnl",snippet:"import { NavLink } from 'react-router-dom'",type:"ImportRouterNavLink",fileTypes:["jsx","tsx"]},{prefix:"imp",snippet:"import ${2:Name} from '${1:first}'",type:"Import",fileTypes:["jsx","tsx"]},{prefix:"imn",snippet:"import '${1:first}'",type:"ImportNoModuleName",fileTypes:["jsx","tsx"]},{prefix:"imd",snippet:"import { ${2:Component} } from '${1:first}'",type:"ImportDestructing",fileTypes:["jsx","tsx"]},{prefix:"ime",snippet:"import * as ${2:comp} from '${1:first}'",type:"ImportEverything",fileTypes:["jsx","tsx"]},{prefix:"ima",snippet:"import { ${2:Component} as ${3:third} } from '${1:first}'",type:"ImportAs",fileTypes:["jsx","tsx"]},{prefix:"exp",snippet:"export default ${1:first}",type:"ExportDefault",fileTypes:["jsx","tsx"]},{prefix:"exd",snippet:"export { ${2:second} } from '${1:first}'",type:"ExportDestructing",fileTypes:["jsx","tsx"]},{prefix:"exa",snippet:"export { ${2:second} as ${3:third} } from '${1:first}'",type:"ExportAs",fileTypes:["jsx","tsx"]},{prefix:"enf",snippet:"export const ${1:first} = (${2:second}) => {${3:third}}",type:"ExportNamedFunction",description:"Export named function",fileTypes:["jsx","tsx"]},{prefix:"edf",snippet:"export default (${1:first}) => {${2:second}}",type:"ExportDefaultFunction",description:"Export default function",fileTypes:["jsx","tsx"]},{prefix:"ednf",snippet:"export default function ${1:first}(${2:second}) {${3:third}}",type:"ExportDefaultNamedFunction",description:"Export default named function",fileTypes:["jsx","tsx"]},{prefix:"met",snippet:"${1:first} = (${2:second}) => {${3:third}}",type:"Method",description:"Creates a method inside a class",fileTypes:["jsx","tsx"]},{prefix:"pge",snippet:"get ${1:first}() {\n  return this.${2:second}\n}",type:"PropertyGet",description:"Creates a getter property inside a class",fileTypes:["jsx","tsx"]},{prefix:"pse",snippet:"set ${1:first}(${2:second}) {${3:third}}",type:"PropertySet",description:"Creates a setter property inside a class",fileTypes:["jsx","tsx"]},{prefix:"fre",snippet:"${1:first}.forEach(${2:second} => {${3:third}})",type:"ForEach",description:"Creates a forEach statement",fileTypes:["jsx","tsx"]},{prefix:"fof",snippet:"for(let ${1:first} of ${2:second}) {${3:third}}",type:"ForOf",description:"Iterating over property names of iterable objects",fileTypes:["jsx","tsx"]},{prefix:"fin",snippet:"for(let ${1:first} in ${2:second}) {${3:third}}",type:"ForIn",description:"Iterating over property values of iterable objects",fileTypes:["jsx","tsx"]},{prefix:"anfn",snippet:"(${1:first}) => { ${2:second} }",type:"AnonymousFunction",description:"Creates an anonymous function",fileTypes:["jsx","tsx"]},{prefix:"nfn",snippet:"const ${1:first} = (${2:second}) => { ${3:third} }",type:"NamedFunction",description:"Creates a named function",fileTypes:["jsx","tsx"]},{prefix:"dob",snippet:"const {${2:second}} = ${1:first}",type:"DestructingObject",description:"Creates and assigns a local variable using object destructing",fileTypes:["jsx","tsx"]},{prefix:"dar",snippet:"const [${2:second}] = ${1:first}",type:"DestructingArray",description:"Creates and assigns a local variable using array destructing",fileTypes:["jsx","tsx"]},{prefix:"sti",snippet:"setInterval(() => { ${1:first} }, ${2:second})",type:"SetInterval",description:"Executes the given function at specified intervals",fileTypes:["jsx","tsx"]},{prefix:"sto",snippet:"setTimeout(() => { ${1:first} }, ${2:second})",type:"SetTimeOut",description:"Executes the given function after the specified delay",fileTypes:["jsx","tsx"]},{prefix:"prom",snippet:"return new Promise((resolve, reject) => { ${1:first} })",type:"Promise",description:"Creates and returns a new Promise in the standard ES7 syntax",fileTypes:["jsx","tsx"]},{prefix:"cp",snippet:"const { ${1:first} } = this.props",type:"DestructProps",description:"Creates and assigns a local variable using props destructing",fileTypes:["jsx","tsx"]},{prefix:"cs",snippet:"const { ${1:first} } = this.state",type:"DestructState",description:"Creates and assigns a local variable using state destructing",fileTypes:["jsx","tsx"]},{prefix:"rconst",snippet:`constructor(props) {
  super(props)
  this.state = {
     \${1:first}
  }
}`,type:"ClassConstructor",description:"Adds a default constructor for it<code>('', () => {})</code>the class that contains props as arguments",fileTypes:["jsx","tsx"]},{prefix:"est",snippet:"state = { ${1:first} }",type:"EmptyState",description:"Creates empty state object. To be used in a constructor.",fileTypes:["jsx","tsx"]},{prefix:"cdm",snippet:"componentDidMount() { ${1:first} }",type:"ComponentDidMount",description:"Invoked once, only on the client (not on the server), immediately after the initial rendering occurs.",fileTypes:["jsx","tsx"]},{prefix:"scu",snippet:"shouldComponentUpdate(nextProps, nextState) { ${1:first} }",type:"ShouldComponentUpdate",description:"Invoked before rendering when new props or state are being received. ",fileTypes:["jsx","tsx"]},{prefix:"cdup",snippet:"componentDidUpdate(prevProps, prevState) { ${1:first}}",type:"ComponentDidUpdate",description:"Invoked immediately after the component's updates are flushed to the DOM.",fileTypes:["jsx","tsx"]},{prefix:"cwun",snippet:"componentWillUnmount() {${1:first} }",type:"ComponentWillUnmount",description:"Invoked immediately before a component is unmounted from the DOM.",fileTypes:["jsx","tsx"]},{prefix:"gdsfp",snippet:"static getDerivedStateFromProps(props, state) {${1:first}}",type:"GetDerivedStateFromProps",description:"Invoked right before calling the render method, both on the initial mount and on subsequent updates.",fileTypes:["jsx","tsx"]},{prefix:"gsbu",snippet:"getSnapshotBeforeUpdate = (prevProps, prevState) => {${1:first}}",type:"GetSnapshotBeforeUpdate",description:"Called right before mutations are made (e.g. before the DOM is updated)",fileTypes:["jsx","tsx"]},{prefix:"rcontext",snippet:"const ${1:first} = React.createContext()",type:"CreateContext",description:"Create React context",fileTypes:["jsx","tsx"]},{prefix:"cref",snippet:"this.${1:first}Ref = React.createRef()",type:"CreateRef",description:"Create ref statement used inside constructor",fileTypes:["jsx","tsx"]},{prefix:"sst",snippet:"this.setState((state, props) => { return { ${1:first} }})",type:"ComponentSetStateObject",description:"Performs a shallow merge of nextState into current state",fileTypes:["jsx","tsx"]},{prefix:"ssf",snippet:"this.setState((state, props) => { return { ${1:first} }})",type:"ComponentSetStateFunc",description:"Performs a shallow merge of nextState into current state",fileTypes:["jsx","tsx"]},{prefix:"props",snippet:"this.props.${1:first}",type:"ComponentProps",description:"Access component's props",fileTypes:["jsx","tsx"]},{prefix:"state",snippet:"this.state.${1:first}",type:"ComponentState",fileTypes:["jsx","tsx"]},{prefix:"bnd",snippet:"this.${1:first} = this.${1:first}.bind(this)",type:"BindThis",description:"Binds this to a method",fileTypes:["jsx","tsx"]},{prefix:"cmmb",snippet:`/**
 * \${1:first}
 */`,type:"CommentBigBlock",fileTypes:["jsx","tsx"]},{prefix:"hocredux",snippet:`import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

export const mapStateToProps = state => ({})

export const mapDispatchToProps = {}

export const \${1:first} = (WrappedComponent) => {
  const hocComponent = ({ ...props }) => <WrappedComponent {...props} />

  hocComponent.propTypes = {}

  return hocComponent
}

export default WrapperComponent => connect(mapStateToProps, mapDispatchToProps)(\${1:first}(WrapperComponent))
`,type:"HocComponentWithRedux",fileTypes:["jsx","tsx"]},{prefix:"hoc",snippet:`import React from 'react'
import PropTypes from 'prop-types'

export default (WrappedComponent) => {
  const hocComponent = ({ ...props }) => <WrappedComponent {...props} />

  hocComponent.propTypes = {}

  return hocComponent
}
`,type:"HocComponent",fileTypes:["jsx","tsx"]},{prefix:"tpf",snippet:"typeof ${1:first}",type:"TypeofSnippet",fileTypes:["jsx","tsx"]},{prefix:"cas",snippet:"console.assert(${1:first}, ${2:second})",type:"ConsoleAssert",description:"If the specified expression is false, the message is written to the console along with a stack trace",fileTypes:["jsx","tsx"]},{prefix:"ccl",snippet:"console.clear()",type:"ConsoleClear",description:"Clears the console",fileTypes:["jsx","tsx"]},{prefix:"cco",snippet:"console.count(${1:first})",type:"ConsoleCount",description:"Writes the the number of times that <code>count()</code> has been invoked at the same line and with the same label",fileTypes:["jsx","tsx"]},{prefix:"cdi",snippet:"console.dir(${1:first})",type:"ConsoleDir",description:"Prints a JavaScript representation of the specified object",fileTypes:["jsx","tsx"]},{prefix:"cer",snippet:"console.error(${1:first})",type:"ConsoleError",description:"Displays a message in the console and also includes a stack trace from where the method was called",fileTypes:["jsx","tsx"]},{prefix:"cgr",snippet:"console.group('${1:first}')",type:"ConsoleGroup",description:"Groups and indents all following output by an additional level, until <code>console.groupEnd()</code> is called.",fileTypes:["jsx","tsx"]},{prefix:"cge",snippet:"console.groupEnd()",type:"ConsoleGroupEnd",description:"Closes out the corresponding <code>console.group()</code>.",fileTypes:["jsx","tsx"]},{prefix:"clg",snippet:"console.log(${1:first})",type:"ConsoleLog",description:"Displays a message in the console",fileTypes:["jsx","tsx"]},{prefix:"ctr",snippet:"console.trace(${1:first})",type:"ConsoleTrace",description:"Prints a stack trace from the point where the method was called",fileTypes:["jsx","tsx"]},{prefix:"clo",snippet:"console.log('${1:first}', ${2:second})",type:"ConsoleLogObject",description:"Logs property with name.",fileTypes:["jsx","tsx"]},{prefix:"clj",snippet:"console.log('${1:first}', JSON.stringify(${1:first}, null, 2))",type:"ConsoleLogJson",description:"Logs stringified JSON property with name.",fileTypes:["jsx","tsx"]},{prefix:"ctm",snippet:"console.time('${1:first}')",type:"ConsoleTime",description:"Console time wrapper",fileTypes:["jsx","tsx"]},{prefix:"cte",snippet:"console.timeEnd('${1:first}')",type:"ConsoleTimeEnd",description:"Console time end wrapper",fileTypes:["jsx","tsx"]},{prefix:"cwa",snippet:"console.warn(${1:first})",type:"ConsoleWarn",description:"Displays a message in the console but also displays a yellow warning icon along with the logged message",fileTypes:["jsx","tsx"]},{prefix:"cin",snippet:"console.info(${1:first})",type:"ConsoleInfo",description:"Displays a message in the console but also displays a blue information icon along with the logged message",fileTypes:["jsx","tsx"]},{prefix:"ctl",snippet:"console.table([${1:first}])",type:"ConsoleTable",description:"Logs table to console",fileTypes:["jsx","tsx"]},{prefix:"pta",snippet:"PropTypes.array",type:"PropTypeArray",description:"Array prop type",fileTypes:["jsx","tsx"]},{prefix:"ptar",snippet:"PropTypes.array.isRequired",type:"PropTypeArrayRequired",description:"Array prop type required",fileTypes:["jsx","tsx"]},{prefix:"ptb",snippet:"PropTypes.bool",type:"PropTypeBool",description:"Bool prop type",fileTypes:["jsx","tsx"]},{prefix:"ptbr",snippet:"PropTypes.bool.isRequired",type:"PropTypeBoolRequired",description:"Bool prop type required",fileTypes:["jsx","tsx"]},{prefix:"ptf",snippet:"PropTypes.func",type:"PropTypeFunc",description:"Func prop type",fileTypes:["jsx","tsx"]},{prefix:"ptfr",snippet:"PropTypes.func.isRequired",type:"PropTypeFuncRequired",description:"Func prop type required",fileTypes:["jsx","tsx"]},{prefix:"ptn",snippet:"PropTypes.number",type:"PropTypeNumber",description:"Number prop type",fileTypes:["jsx","tsx"]},{prefix:"ptnr",snippet:"PropTypes.number.isRequired",type:"PropTypeNumberRequired",description:"Number prop type required",fileTypes:["jsx","tsx"]},{prefix:"pto",snippet:"PropTypes.object",type:"PropTypeObject",description:"Object prop type",fileTypes:["jsx","tsx"]},{prefix:"ptor",snippet:"PropTypes.object.isRequired",type:"PropTypeObjectRequired",description:"Object prop type required",fileTypes:["jsx","tsx"]},{prefix:"pts",snippet:"PropTypes.string",type:"PropTypeString",description:"String prop type",fileTypes:["jsx","tsx"]},{prefix:"ptsr",snippet:"PropTypes.string.isRequired",type:"PropTypeStringRequired",description:"String prop type required",fileTypes:["jsx","tsx"]},{prefix:"ptnd",snippet:"PropTypes.node",type:"PropTypeNode",description:"Anything that can be rendered: numbers, strings, elements or an array",fileTypes:["jsx","tsx"]},{prefix:"ptndr",snippet:"PropTypes.node.isRequired",type:"PropTypeNodeRequired",description:"Anything that can be rendered: numbers, strings, elements or an array required",fileTypes:["jsx","tsx"]},{prefix:"ptel",snippet:"PropTypes.element",type:"PropTypeElement",description:"React element prop type",fileTypes:["jsx","tsx"]},{prefix:"ptelr",snippet:"PropTypes.element.isRequired",type:"PropTypeElementRequired",description:"React element prop type required",fileTypes:["jsx","tsx"]},{prefix:"pti",snippet:"PropTypes.instanceOf(${1:ClassName})",type:"PropTypeInstanceOf",description:"Is an instance of a class prop type",fileTypes:["jsx","tsx"]},{prefix:"ptir",snippet:"PropTypes.instanceOf(${1:ClassName}).isRequired",type:"PropTypeInstanceOfRequired",description:"Is an instance of a class prop type required",fileTypes:["jsx","tsx"]},{prefix:"pte",snippet:"PropTypes.oneOf(['${1:value1}', '${2:value2}'])",type:"PropTypeEnum",description:"Prop type limited to specific values by treating it as an enum",fileTypes:["jsx","tsx"]},{prefix:"pter",snippet:"PropTypes.oneOf(['${1:value1}', '${2:value2}']).isRequired",type:"PropTypeEnumRequired",description:"Prop type limited to specific values by treating it as an enum required",fileTypes:["jsx","tsx"]},{prefix:"ptet",snippet:`PropTypes.oneOfType([
  \${1:PropTypes.string},
  \${2:PropTypes.number},
  \${3:PropTypes.bool}
])`,type:"PropTypeOneOfType",description:"An object that could be one of many types",fileTypes:["jsx","tsx"]},{prefix:"ptetr",snippet:`PropTypes.oneOfType([
  \${1:PropTypes.string},
  \${2:PropTypes.number},
  \${3:PropTypes.bool}
]).isRequired`,type:"PropTypeOneOfTypeRequired",description:"An object that could be one of many types required",fileTypes:["jsx","tsx"]},{prefix:"ptao",snippet:"PropTypes.arrayOf(${1:PropTypes.string})",type:"PropTypeArrayOf",description:"An array of a certain type",fileTypes:["jsx","tsx"]},{prefix:"ptaor",snippet:"PropTypes.arrayOf(${1:PropTypes.string}).isRequired",type:"PropTypeArrayOfRequired",description:"An array of a certain type required",fileTypes:["jsx","tsx"]},{prefix:"ptoo",snippet:"PropTypes.objectOf(${1:PropTypes.number})",type:"PropTypeObjectOf",description:"An object with property values of a certain type",fileTypes:["jsx","tsx"]},{prefix:"ptoor",snippet:"PropTypes.objectOf(${1:PropTypes.number}).isRequired",type:"PropTypeObjectOfRequired",description:"An object with property values of a certain type required",fileTypes:["jsx","tsx"]},{prefix:"ptsh",snippet:"PropTypes.shape({\n  ${1:propertyName}: ${2:PropTypes.string},\n  ${3:propertyName2}: ${4:PropTypes.number}\n})",type:"PropTypeShape",description:"An object taking on a particular shape",fileTypes:["jsx","tsx"]},{prefix:"ptshr",snippet:"PropTypes.shape({\n  ${1:propertyName}: ${2:PropTypes.string},\n  ${3:propertyName2}: ${4:PropTypes.number}\n}).isRequired",type:"PropTypeShapeRequired",description:"An object taking on a particular shape required",fileTypes:["jsx","tsx"]},{prefix:"ptex",snippet:"PropTypes.exact({\n  ${1:propertyName}: ${2:PropTypes.string},\n  ${3:propertyName2}: ${4:PropTypes.number}\n})",type:"PropTypeExact",description:"An object with warnings on extra properties",fileTypes:["jsx","tsx"]},{prefix:"ptexr",snippet:"PropTypes.exact({\n  ${1:propertyName}: ${2:PropTypes.string},\n  ${3:propertyName2}: ${4:PropTypes.number}\n}).isRequired",type:"PropTypeExactRequired",description:"An object with warnings on extra properties required",fileTypes:["jsx","tsx"]},{prefix:"ptany",snippet:"PropTypes.any",type:"PropTypeAny",description:"Any prop type",fileTypes:["jsx","tsx"]},{prefix:"desc",snippet:"describe('${1:first}', () => { ${2:second} })",type:"describeBlock",description:"Testing `describe` block",fileTypes:["jsx","tsx"]},{prefix:"test",snippet:"test('should ${1:first}', () => { ${2:second} })",type:"TestBlock",description:"Testing `test` block",fileTypes:["jsx","tsx"]},{prefix:"testa",snippet:"test('should ${1:first}', async () => { ${2:second} })",type:"TestAsyncBlock",description:"Testing `asynchronous test` block",fileTypes:["jsx","tsx"]},{prefix:"tit",snippet:"it('should ${1:first}', () => { ${2:second} })",type:"ItBlock",description:"Testing `it` block",fileTypes:["jsx","tsx"]},{prefix:"tita",snippet:"it('should ${1:first}', async () => { ${2:second} })",type:"ItAsyncBlock",description:"Testing asynchronous `it` block",fileTypes:["jsx","tsx"]},{prefix:"stest",snippet:`import React from 'react'
import renderer from 'react-test-renderer'

import { \${1:\${FILE_NAME}} } from '../\${1:\${FILE_NAME}}'

describe('<\${1:\${FILE_NAME}} />', () => {
  const defaultProps = {}
  const wrapper = renderer.create(<\${1:\${FILE_NAME}} {...defaultProps} />)

  test('render', () => {
    expect(wrapper).toMatchSnapshot()
  })
})`,type:"SetupReactTest",fileTypes:["jsx","tsx"]},{prefix:"sntest",snippet:`import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'

import \${1:\${FILE_NAME}} from '../\${1:\${FILE_NAME}}'

describe('<\${1:\${FILE_NAME}} />', () => {
  const defaultProps = {}
  const wrapper = renderer.create(<\${1:\${FILE_NAME}} {...defaultProps} />)

  test('render', () => {
    expect(wrapper).toMatchSnapshot()
  })
})`,type:"SetupReactNativeTest",fileTypes:["jsx","tsx"]},{prefix:"srtest",snippet:`import React from 'react'
import renderer from 'react-test-renderer'
import { Provider } from 'react-redux'

import store from '~/store'
import { \${1:\${FILE_NAME}} } from '../\${1:\${FILE_NAME}}'

describe('<\${1:\${FILE_NAME}} />', () => {
  const defaultProps = {}
  const wrapper = renderer.create(
    <Provider store={store}>
     <\${1:\${FILE_NAME}} {...defaultProps} />
    </Provider>,
  )

  test('render', () => {
    expect(wrapper).toMatchSnapshot()
  })
})`,type:"SetupReactComponentTestWithRedux",description:"Create test component",fileTypes:["jsx","tsx"]},{prefix:"snrtest",snippet:`import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'
import { Provider } from 'react-redux'

import store from '~/store'
import \${1:\${FILE_NAME}} from '../\${1:\${FILE_NAME}}'

describe('<\${1:\${FILE_NAME}} />', () => {
  const defaultProps = {}
  const wrapper = renderer.create(
    <Provider store={store}>
      <\${1:\${FILE_NAME}} {...defaultProps} />
    </Provider>,
  )

  test('render', () => {
    expect(wrapper).toMatchSnapshot()
  })
})`,type:"SetupReactNativeTestWithRedux",fileTypes:["jsx","tsx"]},{prefix:"redux",snippet:"import { connect } from 'react-redux'",description:"Redux: Import connect from react-redux",type:"importReduxConnect",fileTypes:["jsx","tsx"]},{prefix:"rxaction",snippet:`export const \${1} = (payload) => ({
  type: \${2},
  payload
})
`,description:"Redux: Create a Redux action",type:"reduxAction",fileTypes:["jsx","tsx"]},{prefix:"rxconst",snippet:"export const ${1} = '${1}'",description:"Redux: Create a Redux constant",type:"reduxConst",fileTypes:["jsx","tsx"]},{prefix:"rxreducer",snippet:`const initialState = {}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case \${1}:
      return { ...state, ...payload }
    default:
      return state
  }
}
`,description:"Redux: Create a Redux reducer",type:"reduxReducer",fileTypes:["jsx","tsx"]},{prefix:"rxselect",snippet:"import { createSelector } from 'reselect'\n\nexport const ${1} = state => state.${2}",description:"Redux: Create a Redux selector using Reselect",type:"reduxSelector",fileTypes:["jsx","tsx"]},{prefix:"rxslice",snippet:`import { createSlice } from '@reduxjs/toolkit'

const initialState = {}

const \${FILE_NAME} = createSlice({
  name: \${2},
  initialState,
 reducers: {}
});

export const {} = \${Placeholders.FILE_NAME}.actions

export default \${Placeholders.FILE_NAME}.reducer`,description:"Redux: Create a Redux slice using @reduxjs/toolkit",type:"reduxSlice",fileTypes:["jsx","tsx"]},{prefix:"reduxmap",snippet:`const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}`,description:"Redux: Map state and dispatch to props",type:"mappingToProps",fileTypes:["jsx","tsx"]},{prefix:"exptp",snippet:"export type ${1:first} = {${2:second}}",type:"ExportType",fileTypes:["jsx","tsx"]},{prefix:"expint",snippet:"export interface ${1:first} {${2:second}}",type:"ExportInterface",fileTypes:["jsx","tsx"]},{prefix:"tsrcc",snippet:`import React, { Component } from 'react'

interface Props {
  // Define your props here
}

interface State {
  // Define your state here
}

export default class \${1:\${FILE_NAME}} extends Component<Props, State> {
  state = {}

  render() {
    return (
      <div>
        \${2:/* Your JSX code here */}
      </div>
    )
  }
}`,type:"TypescriptReactClassComponent",description:"Creates a React component class with ES7 module system and TypeScript interfaces",fileTypes:["jsx","tsx"]},{prefix:"tsrce",snippet:`import React, { Component } from 'react'

interface Props {
  // Define your props here
}

interface State {
  // Define your state here
}
class \${1:\${FILE_NAME}} extends Component<Props, State> {
  state = {}

  render() {
    return (
      <div>
        \${2:/* Your JSX code here */}
      </div>
    )
  }
}

export default \${1:\${FILE_NAME}};`,type:"typescriptReactClassExportComponent",description:"Creates a React component class with ES7 module system and TypeScript interfaces",fileTypes:["jsx","tsx"]},{prefix:"tsrfce",snippet:`import React from 'react'

interface Props {
  // Define your props here
}

function \${1:\${FILE_NAME}}({}: Props) {
  return (
    <div>
      \${2:/* Your JSX code here */}
    </div>
  )
}

export default \${1:\${FILE_NAME}};`,type:"typescriptReactFunctionalExportComponent",description:"Creates a React Functional Component with ES7 module system and TypeScript interface",fileTypes:["jsx","tsx"]},{prefix:"tsrfc",snippet:`import React from 'react'

interface Props {
  // Define your props here
}

export default function \${1:\${FILE_NAME}}({}: Props) {
  return (
    <div>
      \${2:/* Your JSX code here */}
    </div>
  )
}`,type:"typescriptReactFunctionalComponent",description:"Creates a React Functional Component with ES7 module system and TypeScript interface",fileTypes:["jsx","tsx"]},{prefix:"tsrafce",snippet:`import React from 'react';

interface Props {
  // Define your props here
}

const \${1:\${FILE_NAME}} = (props: Props) => {
  return (
    <div>
      \${2:first} {/* Your JSX code here */}
    </div>
  );
};

export default \${1:\${FILE_NAME}};`,type:"typescriptReactArrowFunctionExportComponent",description:"Creates a React Arrow Function Component with ES7 module system and TypeScript interface",fileTypes:["jsx","tsx"]},{prefix:"tsrafc",snippet:`import React from 'react';

interface Props {
  // Define your props here
}

const \${1:\${FILE_NAME}} = (props: Props) => {
  return (
    <div>
      \${2:FirstTab} {/* Your JSX code here */}
    </div>
  );
};`,type:"typescriptReactArrowFunctionComponent",description:"Creates a React Arrow Function Component with ES7 module system and TypeScript interface",fileTypes:["jsx","tsx"]},{prefix:"tsrpc",snippet:`import React, { PureComponent } from 'react';

interface Props {
  // Define your props here
}

export default class \${1:\${FILE_NAME}} extends PureComponent<Props> {
  \${2:innerComponentReturn}
}`,type:"typescriptReactClassPureComponent",description:"Creates a React pure component class with ES7 module system and TypeScript interface",fileTypes:["jsx","tsx"]},{prefix:"tsrpce",snippet:`import React, { PureComponent } from 'react';

interface Props {
  // Define your props here
}

class \${1:\${FILE_NAME}} extends PureComponent<Props> {
  \${2:innerComponentReturn}
}
export default \${1:\${FILE_NAME}};`,type:"typescriptReactClassExportPureComponent",description:"Creates a React pure component class with ES7 module system and TypeScript interface",fileTypes:["jsx","tsx"]},{prefix:"tsrcredux",snippet:`import { connect } from 'react-redux';
\${1:reactComponent}

interface Props {
  // Define your props here
}

interface State {
  // Define your state here
}

export class \${2:\${FILE_NAME}} extends Component<Props, State> {
  state = {};
  \${3:innerComponentReturn}
}
\${4:reduxComponentExport}`,type:"typescriptReactClassComponentRedux",description:"Creates a React component class with connected redux and ES7 module system and TypeScript interfaces",fileTypes:["jsx","tsx"]},{prefix:"tsrnf",snippet:`import { View, Text } from 'react-native';
\${1:react}

interface Props {
  // Define your props here
}

const \${2:\${FILE_NAME}} = (props: Props) => {
  return (
    <View>
      <Text>\${3:FirstTab}</Text>
    </View>
  );
};

export default \${2:\${FILE_NAME}};`,type:"typescriptReactNativeArrowFunctionComponent",description:"Creates a React Native Arrow Function Component with ES7 module system in TypeScript",fileTypes:["jsx","tsx"]},{prefix:"tsrnfs",snippet:`import { StyleSheet, Text, View } from 'react-native';
\${1:react}

interface Props {
  // Define your props here
}

const \${2:\${FILE_NAME}} = (props: Props) => {
  return (
    <View>
      <Text>\${3:FirstTab}</Text>
    </View>
  );
};

export default \${2:\${FILE_NAME}};

const styles = StyleSheet.create({});`,type:"typescriptReactNativeArrowFunctionComponentWithStyles",description:"Creates a React Native Arrow Function Component with ES7 module system, TypeScript interface and StyleSheet",fileTypes:["jsx","tsx"]}];var{snippetManager:u}=ace.require("ace/snippets"),{editor:i}=editorManager,a=class{constructor(){this.setVariables(),this.initializeAutocompletion(y||[])}setVariables(){let{variables:e}=u;e.FILE_NAME=()=>{let t=editorManager.activeFile.filename,s=t.lastIndexOf(".");return t.slice(0,s)}}initializeAutocompletion(e){this.reactCompleter={getCompletions:(t,s,r,T,c)=>{let m=x(s),f=e.filter(p=>p.fileTypes.includes(m));f.length>0?c(null,f.map(p=>{let d={caption:p.prefix,snippet:p.snippet,meta:p.type,value:p.snippet,type:"snippet",docHTML:p.description||""};return typeof extraSyntaxHighlightsInstalled<"u"&&extraSyntaxHighlightsInstalled?{...d,icon:"icon react-snippet-icon"}:d})):c(null,[])}},i.completers.unshift(this.reactCompleter)}async init(e,t,s){let r=document.createElement("style");r.innerHTML=`
        .ace_tooltip.ace_doc-tooltip {
            display: flex !important;
            background-color: var(--secondary-color);
            color: var(--secondary-text-color);
            max-width: 68%;
            white-space: pre-wrap;
        }
        `,document.head.append(r),acode.addIcon("react-snippet-icon",this.baseUrl+"icon.png")}async destroy(){i.completers.splice(i.completers.indexOf(this.reactCompleter),1)}};if(window.acode){let n=new a;acode.setPluginInit(o.id,async(e,t,{cacheFileUrl:s,cacheFile:r})=>{e.endsWith("/")||(e+="/"),n.baseUrl=e,await n.init(t,r,s)}),acode.setPluginUnmount(o.id,()=>{n.destroy()})}
