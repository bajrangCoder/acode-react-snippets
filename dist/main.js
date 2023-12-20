var C=Object.create;var y=Object.defineProperty;var E=Object.getOwnPropertyDescriptor;var P=Object.getOwnPropertyNames;var R=Object.getPrototypeOf,S=Object.prototype.hasOwnProperty;var b=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var w=(e,t,s,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let p of P(t))!S.call(e,p)&&p!==s&&y(e,p,{get:()=>t[p],enumerable:!(r=E(t,p))||r.enumerable});return e};var A=(e,t,s)=>(s=e!=null?C(R(e)):{},w(t||!e||!e.__esModule?y(s,"default",{value:e,enumerable:!0}):s,e));var $=b((k,u)=>{"use strict";var I=["accept","acceptCharset","accessKey","action","allowFullScreen","allowTransparency","alt","async","autoComplete","autoFocus","autoPlay","capture","cellPadding","cellSpacing","charSet","challenge","checked","classID","className","cols","colSpan","content","contentEditable","contextMenu","controls","coords","crossOrigin","data","dateTime","defer","dir","disabled","download","draggable","encType","form","formAction","formEncType","formMethod","formNoValidate","formTarget","frameBorder","headers","height","hidden","high","href","hrefLang","htmlFor","httpEquiv","icon","id","inputMode","keyParams","keyType","label","lang","list","loop","low","manifest","marginHeight","marginWidth","max","maxLength","media","mediaGroup","method","min","minLength","multiple","muted","name","noValidate","open","optimum","pattern","placeholder","poster","preload","radioGroup","readOnly","rel","required","role","rows","rowSpan","sandbox","scope","scoped","scrolling","seamless","selected","shape","size","sizes","span","spellCheck","src","srcDoc","srcSet","start","step","style","summary","tabIndex","target","title","type","useMap","value","width","wmode","wrap"];function M(e){var t=document.createElement("div");return t.innerHTML=e,t.children.length>1&&(e="<div>"+e+"</div>"),e=e.replace(/\sclass=/g," className=").replace(/\sfor=/g," htmlFor=").replace(/<!--/g,"{/*").replace(/-->/g,"*/}"),["area","base","br","col","command","embed","hr","img","input","keygen","link","meta","param","source","track","wbr"].forEach(function(s){var r=new RegExp("<("+s+"[^/]*?)>","g");e=e.replace(r,function(p,f){return"<"+f+"/>"})}),I.forEach(function(s){var r=s.toLowerCase(),p=new RegExp("\\s"+r+"=","g");e=e.replace(p," "+s+"=")}),e=e.replace(/\sstyle="(.+?)"/g,function(s,r){var p=new m(r).toJSXString();return" style={{"+p+"}}"}),e}u.exports=M;function F(e){return e.replace(/-(.)/g,function(t,s){return s.toUpperCase()})}function L(e){return e!=null&&(typeof e=="number"||parseInt(e,10)==e)}var m=function(e){this.parse(e)};m.prototype={parse:function(e){this.styles={},e.split(";").forEach(function(t){t=t.trim();var s=t.indexOf(":"),r=t.substr(0,s),p=t.substr(s+1).trim();r!==""&&(this.styles[r]=p)},this)},toJSXString:function(){var e=[];for(var t in this.styles)this.styles.hasOwnProperty(t)&&e.push(this.toJSXKey(t)+": "+this.toJSXValue(this.styles[t]));return e.join(", ")},toJSXKey:function(e){return F(e)},toJSXValue:function(e){return L(e)?e:"'"+e.replace(/'/g,'"')+"'"}}});var i={id:"bajrangcoder.react.snippets",name:"Acode ES7+ React/Redux snippets",main:"dist/main.js",version:"1.0.2",readme:"readme.md",icon:"icon.png",files:[],minVersionCode:290,price:0,author:{name:"Raunak Raj",email:"bajrangcoders@gmail.com",url:"https://github.com/bajrangCoder/acode-react-snippets",github:"bajrangCoder"}};var T=A($());function h(e){let s=e.getMode().$id.split("/");return s[s.length-1]}function j(e){let t;return t=(0,T.default)(e),t}var g=[{prefix:"rcc",snippet:`import React, { Component } from 'react'

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
import PropTypes from 'prop-types'`,type:"ImportReactWithMemo&PropTypes",fileTypes:["jsx","tsx"]},{prefix:"impt",snippet:"import PropTypes from 'prop-types'",type:"ImportPropTypes",fileTypes:["jsx","tsx"]},{prefix:"imbr",snippet:"import { BrowserRouter as Router } from 'react-router-dom'",type:"ReactRouter",fileTypes:["jsx","tsx"]},{prefix:"imrr",snippet:"import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'",type:"ReactRouterWithRouteAndNavLink",fileTypes:["jsx","tsx"]},{prefix:"imbrc",snippet:"import { Route, Switch, NavLink, Link } from 'react-router-dom'",type:"ImportRouterSetup",fileTypes:["jsx","tsx"]},{prefix:"imbrs",snippet:"import { Switch } from 'react-router-dom'",type:"ImportRouterSwitch",fileTypes:["jsx","tsx"]},{prefix:"imbrl",snippet:"import { Link } from 'react-router-dom'",type:"ImportRouterLink",fileTypes:["jsx","tsx"]},{prefix:"imbrnl",snippet:"import { NavLink } from 'react-router-dom'",type:"ImportRouterNavLink",fileTypes:["jsx","tsx"]},{prefix:"imp",snippet:"import ${2:Name} from '${1:first}'",type:"Import",fileTypes:["jsx","tsx"]},{prefix:"imn",snippet:"import '${1:first}'",type:"ImportNoModuleName",fileTypes:["jsx","tsx"]},{prefix:"imd",snippet:"import { ${2:Component} } from '${1:first}'",type:"ImportDestructing",fileTypes:["jsx","tsx"]},{prefix:"ime",snippet:"import * as ${2:comp} from '${1:first}'",type:"ImportEverything",fileTypes:["jsx","tsx"]},{prefix:"ima",snippet:"import { ${2:Component} as ${3:third} } from '${1:first}'",type:"ImportAs",fileTypes:["jsx","tsx"]},{prefix:"req",snippet:"const ${1:packageName} = require('${1:package}')",type:"RequireToConst",description:"Require a package to const",fileTypes:["tsx","javascript"]},{prefix:"exp",snippet:"export default ${1:first}",type:"ExportDefault",fileTypes:["jsx","tsx"]},{prefix:"exd",snippet:"export { ${2:second} } from '${1:first}'",type:"ExportDestructing",fileTypes:["jsx","tsx"]},{prefix:"exa",snippet:"export { ${2:second} as ${3:third} } from '${1:first}'",type:"ExportAs",fileTypes:["jsx","tsx"]},{prefix:"enf",snippet:"export const ${1:first} = (${2:second}) => {${3:third}}",type:"ExportNamedFunction",description:"Export named function",fileTypes:["jsx","tsx","javascript"]},{prefix:"edf",snippet:"export default (${1:first}) => {${2:second}}",type:"ExportDefaultFunction",description:"Export default function",fileTypes:["jsx","tsx"]},{prefix:"ednf",snippet:"export default function ${1:first}(${2:second}) {${3:third}}",type:"ExportDefaultNamedFunction",description:"Export default named function",fileTypes:["jsx","tsx","javascript"]},{prefix:"met",snippet:"${1:first} = (${2:second}) => {${3:third}}",type:"Method",description:"Creates a method inside a class",fileTypes:["jsx","tsx","javascript"]},{prefix:"pge",snippet:"get ${1:first}() {\n  return this.${2:second}\n}",type:"PropertyGet",description:"Creates a getter property inside a class",fileTypes:["jsx","tsx","javascript"]},{prefix:"pse",snippet:"set ${1:first}(${2:second}) {${3:third}}",type:"PropertySet",description:"Creates a setter property inside a class",fileTypes:["jsx","tsx","javascript"]},{prefix:"fre",snippet:"${1:first}.forEach(${2:second} => {${3:third}})",type:"ForEach",description:"Creates a forEach statement",fileTypes:["jsx","tsx","javascript"]},{prefix:"fof",snippet:"for(let ${1:first} of ${2:second}) {${3:third}}",type:"ForOf",description:"Iterating over property names of iterable objects",fileTypes:["jsx","tsx","javascript"]},{prefix:"fin",snippet:"for(let ${1:first} in ${2:second}) {${3:third}}",type:"ForIn",description:"Iterating over property values of iterable objects",fileTypes:["jsx","tsx","javascript"]},{prefix:"anfn",snippet:"(${1:first}) => { ${2:second} }",type:"AnonymousFunction",description:"Creates an anonymous function",fileTypes:["jsx","tsx","javascript"]},{prefix:"nfn",snippet:"const ${1:first} = (${2:second}) => { ${3:third} }",type:"NamedFunction",description:"Creates a named function",fileTypes:["jsx","tsx","javascript"]},{prefix:"dob",snippet:"const {${2:second}} = ${1:first}",type:"DestructingObject",description:"Creates and assigns a local variable using object destructing",fileTypes:["jsx","tsx","javascript"]},{prefix:"dar",snippet:"const [${2:second}] = ${1:first}",type:"DestructingArray",description:"Creates and assigns a local variable using array destructing",fileTypes:["jsx","tsx","javascript"]},{prefix:"sti",snippet:"setInterval(() => { ${1:first} }, ${2:second})",type:"SetInterval",description:"Executes the given function at specified intervals",fileTypes:["jsx","tsx","javascript"]},{prefix:"sto",snippet:"setTimeout(() => { ${1:first} }, ${2:second})",type:"SetTimeOut",description:"Executes the given function after the specified delay",fileTypes:["jsx","tsx","javascript"]},{prefix:"prom",snippet:"return new Promise((resolve, reject) => { ${1:first} })",type:"Promise",description:"Creates and returns a new Promise in the standard ES7 syntax",fileTypes:["jsx","tsx","javascript"]},{prefix:"cp",snippet:"const { ${1:first} } = this.props",type:"DestructProps",description:"Creates and assigns a local variable using props destructing",fileTypes:["jsx","tsx"]},{prefix:"cs",snippet:"const { ${1:first} } = this.state",type:"DestructState",description:"Creates and assigns a local variable using state destructing",fileTypes:["jsx","tsx"]},{prefix:"rconst",snippet:`constructor(props) {
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
`,type:"HocComponent",fileTypes:["jsx","tsx"]},{prefix:"tpf",snippet:"typeof ${1:first}",type:"TypeofSnippet",fileTypes:["jsx","tsx","javascript"]},{prefix:"call",snippet:"${1:method}.call(${2:context}, ${3:arguments})",type:"method",description:"Calls the function with the specified object as the this value and the specified rest arguments as the arguments.",fileTypes:["jsx","tsx","javascript"]},{prefix:"apply",snippet:"${1:method}.apply(${2:context}, ${3:arguments})",type:"method",description:"Calls the function with the specified object as the this value and the elements of specified array as the arguments.",fileTypes:["jsx","tsx","javascript"]},{prefix:"jp",snippet:"JSON.parse(${1:obj})",type:"JSON",description:"Converts a JavaScript Object Notation (JSON) string into an object",fileTypes:["jsx","tsx","javascript"]},{prefix:"js",snippet:"JSON.stringify(${1:obj})",type:"JSON",description:"Converts a JavaScript value to a JavaScript Object Notation (JSON) string.",fileTypes:["jsx","tsx","javascript"]},{prefix:"us",snippet:"'use strict'",type:"use strict",description:"Use Javascript strict mode",fileTypes:["tsx","javascript"]},{prefix:"al",snippet:"alert('${1:message}')",type:"alert",fileTypes:["jsx","tsx","javascript"]},{prefix:"pr",snippet:"prompt('${1:message}')",type:"prompt",fileTypes:["jsx","tsx","javascript"]},{prefix:"cf",snippet:"confirm('${1:msg}');",type:"confirm",fileTypes:["jsx","tsx","javascript"]},{prefix:"cas",snippet:"console.assert(${1:first}, ${2:second})",type:"ConsoleAssert",description:"If the specified expression is false, the message is written to the console along with a stack trace",fileTypes:["jsx","tsx","javascript"]},{prefix:"ccl",snippet:"console.clear()",type:"ConsoleClear",description:"Clears the console",fileTypes:["jsx","tsx","javascript"]},{prefix:"cco",snippet:"console.count(${1:first})",type:"ConsoleCount",description:"Writes the the number of times that <code>count()</code> has been invoked at the same line and with the same label",fileTypes:["jsx","tsx","javascript"]},{prefix:"cdi",snippet:"console.dir(${1:first})",type:"ConsoleDir",description:"Prints a JavaScript representation of the specified object",fileTypes:["jsx","tsx","javascript"]},{prefix:"cer",snippet:"console.error(${1:first})",type:"ConsoleError",description:"Displays a message in the console and also includes a stack trace from where the method was called",fileTypes:["jsx","tsx","javascript"]},{prefix:"cgr",snippet:"console.group('${1:first}')",type:"ConsoleGroup",description:"Groups and indents all following output by an additional level, until <code>console.groupEnd()</code> is called.",fileTypes:["jsx","tsx","javascript"]},{prefix:"cge",snippet:"console.groupEnd()",type:"ConsoleGroupEnd",description:"Closes out the corresponding <code>console.group()</code>.",fileTypes:["jsx","tsx","javascript"]},{prefix:"clg",snippet:"console.log(${1:first})",type:"ConsoleLog",description:"Displays a message in the console",fileTypes:["jsx","tsx","javascript"]},{prefix:"ctr",snippet:"console.trace(${1:first})",type:"ConsoleTrace",description:"Prints a stack trace from the point where the method was called",fileTypes:["jsx","tsx","javascript"]},{prefix:"clo",snippet:"console.log('${1:first}', ${2:second})",type:"ConsoleLogObject",description:"Logs property with name.",fileTypes:["jsx","tsx","javascript"]},{prefix:"clj",snippet:"console.log('${1:first}', JSON.stringify(${1:first}, null, 2))",type:"ConsoleLogJson",description:"Logs stringified JSON property with name.",fileTypes:["jsx","tsx","javascript"]},{prefix:"ctm",snippet:"console.time('${1:first}')",type:"ConsoleTime",description:"Console time wrapper",fileTypes:["jsx","tsx","javascript"]},{prefix:"cte",snippet:"console.timeEnd('${1:first}')",type:"ConsoleTimeEnd",description:"Console time end wrapper",fileTypes:["jsx","tsx","javascript"]},{prefix:"cwa",snippet:"console.warn(${1:first})",type:"ConsoleWarn",description:"Displays a message in the console but also displays a yellow warning icon along with the logged message",fileTypes:["jsx","tsx","javascript"]},{prefix:"cin",snippet:"console.info(${1:first})",type:"ConsoleInfo",description:"Displays a message in the console but also displays a blue information icon along with the logged message",fileTypes:["jsx","tsx","javascript"]},{prefix:"ctl",snippet:"console.table([${1:first}])",type:"ConsoleTable",description:"Logs table to console",fileTypes:["jsx","tsx","javascript"]},{prefix:"pta",snippet:"PropTypes.array",type:"PropTypeArray",description:"Array prop type",fileTypes:["jsx","tsx"]},{prefix:"ptar",snippet:"PropTypes.array.isRequired",type:"PropTypeArrayRequired",description:"Array prop type required",fileTypes:["jsx","tsx"]},{prefix:"ptb",snippet:"PropTypes.bool",type:"PropTypeBool",description:"Bool prop type",fileTypes:["jsx","tsx"]},{prefix:"ptbr",snippet:"PropTypes.bool.isRequired",type:"PropTypeBoolRequired",description:"Bool prop type required",fileTypes:["jsx","tsx"]},{prefix:"ptf",snippet:"PropTypes.func",type:"PropTypeFunc",description:"Func prop type",fileTypes:["jsx","tsx"]},{prefix:"ptfr",snippet:"PropTypes.func.isRequired",type:"PropTypeFuncRequired",description:"Func prop type required",fileTypes:["jsx","tsx"]},{prefix:"ptn",snippet:"PropTypes.number",type:"PropTypeNumber",description:"Number prop type",fileTypes:["jsx","tsx"]},{prefix:"ptnr",snippet:"PropTypes.number.isRequired",type:"PropTypeNumberRequired",description:"Number prop type required",fileTypes:["jsx","tsx"]},{prefix:"pto",snippet:"PropTypes.object",type:"PropTypeObject",description:"Object prop type",fileTypes:["jsx","tsx"]},{prefix:"ptor",snippet:"PropTypes.object.isRequired",type:"PropTypeObjectRequired",description:"Object prop type required",fileTypes:["jsx","tsx"]},{prefix:"pts",snippet:"PropTypes.string",type:"PropTypeString",description:"String prop type",fileTypes:["jsx","tsx"]},{prefix:"ptsr",snippet:"PropTypes.string.isRequired",type:"PropTypeStringRequired",description:"String prop type required",fileTypes:["jsx","tsx"]},{prefix:"ptnd",snippet:"PropTypes.node",type:"PropTypeNode",description:"Anything that can be rendered: numbers, strings, elements or an array",fileTypes:["jsx","tsx"]},{prefix:"ptndr",snippet:"PropTypes.node.isRequired",type:"PropTypeNodeRequired",description:"Anything that can be rendered: numbers, strings, elements or an array required",fileTypes:["jsx","tsx"]},{prefix:"ptel",snippet:"PropTypes.element",type:"PropTypeElement",description:"React element prop type",fileTypes:["jsx","tsx"]},{prefix:"ptelr",snippet:"PropTypes.element.isRequired",type:"PropTypeElementRequired",description:"React element prop type required",fileTypes:["jsx","tsx"]},{prefix:"pti",snippet:"PropTypes.instanceOf(${1:ClassName})",type:"PropTypeInstanceOf",description:"Is an instance of a class prop type",fileTypes:["jsx","tsx"]},{prefix:"ptir",snippet:"PropTypes.instanceOf(${1:ClassName}).isRequired",type:"PropTypeInstanceOfRequired",description:"Is an instance of a class prop type required",fileTypes:["jsx","tsx"]},{prefix:"pte",snippet:"PropTypes.oneOf(['${1:value1}', '${2:value2}'])",type:"PropTypeEnum",description:"Prop type limited to specific values by treating it as an enum",fileTypes:["jsx","tsx"]},{prefix:"pter",snippet:"PropTypes.oneOf(['${1:value1}', '${2:value2}']).isRequired",type:"PropTypeEnumRequired",description:"Prop type limited to specific values by treating it as an enum required",fileTypes:["jsx","tsx"]},{prefix:"ptet",snippet:`PropTypes.oneOfType([
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

const styles = StyleSheet.create({});`,type:"typescriptReactNativeArrowFunctionComponentWithStyles",description:"Creates a React Native Arrow Function Component with ES7 module system, TypeScript interface and StyleSheet",fileTypes:["jsx","tsx"]},{prefix:"fil",snippet:"${1:array}.filter((${2:element}) => ${3:condition})",type:"Array.filter",description:"Creates a new array with elements that pass a test.",fileTypes:["jsx","tsx","javascript"]},{prefix:"fi",snippet:"${1:array}.find((${2:element}) => ${3:condition})",type:"Array.find",description:"Returns the first element that passes a test.",fileTypes:["jsx","tsx","javascript"]},{prefix:"join",snippet:"${1:array}.join(${2:separator})",type:"Array.join",description:"Joins all elements of an array into a string.",fileTypes:["jsx","tsx","javascript"]},{prefix:"map",snippet:"${1:array}.map((${2:element}, ${3:index}) => ${4:newElements})",type:"Array.map",description:"Creates a new array with the results of calling a function for each element.",fileTypes:["jsx","tsx","javascript"]},{prefix:"pop",snippet:"${1:array}.pop(${2:element})",type:"Array.pop",description:"Removes the last element from an array and returns it.",fileTypes:["jsx","tsx","javascript"]},{prefix:"push",snippet:"${1:array}.push(${2:element})",type:"Array.push",description:"Adds one or more elements to the end of an array.",fileTypes:["jsx","tsx","javascript"]},{prefix:"red",snippet:"${1:array}.reduce((${2:accumulator}, ${3:currentValue}) => ${4:accumulatorFunction}, ${5:initialValue})",type:"Array.reduce",description:"Combines all elements of an array into a single value.",fileTypes:["jsx","tsx","javascript"]},{prefix:"rev",snippet:"${1:array}.reverse()",type:"Array.reverse",description:"Reverses the order of the elements in an array.",fileTypes:["jsx","tsx","javascript"]},{prefix:"sh",snippet:"${1:array}.shift(${2:element})",type:"Array.shift",description:"Removes the first element from an array and returns it.",fileTypes:["jsx","tsx","javascript"]},{prefix:"unsh",snippet:"${1:array}.unshift(${2:element})",type:"Array.unshift",description:"Adds the specified element to the beginning of an array.",fileTypes:["jsx","tsx","javascript"]},{prefix:"spl",snippet:"${1:array}.splice(${2:start}, ${3:deleteCount}, ${4:elements})",type:"Array.splice",description:"Removes, replaces and/or adds new elements in an array.",fileTypes:["jsx","tsx","javascript"]},{prefix:"some",snippet:"${1:array}.some((${2:el}) => ${3:condition})",type:"Array.some",description:"Checks if at least one element in the array passes a test.",fileTypes:["jsx","tsx","javascript"]},{prefix:"sort",snippet:"${1:array}.sort((${2:a}, ${3:b}) => ${4:comparisonFunction})",type:"Array.sort",description:"Sorts the elements of an array in a particular order.",fileTypes:["jsx","tsx","javascript"]},{prefix:"tostr",snippet:"${1:array}.toString()",type:"Array.toString",description:"Returns a string representation of the array.",fileTypes:["jsx","tsx","javascript"]},{prefix:"frm",snippet:"Array.from(${1:arrayLike})",type:"Array.from",description:"Creates a new array from an iterable object.",fileTypes:["jsx","tsx","javascript"]},{prefix:"ca",snippet:"${1:str}.charAt(${2:index})",type:"String.charAt",description:"Returns the character at a specific index.",fileTypes:["jsx","tsx","javascript"]},{prefix:"match",snippet:"${1:str}.match(${2:regex})",type:"String.match",description:"Searches a string for a match against a regular expression.",fileTypes:["jsx","tsx","javascript"]},{prefix:"rpt",snippet:"${1:str}.repeat(${2:count})",type:"String.repeat",description:"Repeats a string a specified number of times.",fileTypes:["jsx","tsx","javascript"]},{prefix:"rep",snippet:"${1:str}.replace(${2:substring}, ${3:replacement})",type:"String.replace",description:"Searches a string for a match against a regular expression and replaces it with another string.",fileTypes:["jsx","tsx","javascript"]},{prefix:"repa",snippet:"${1:str}.replaceAll(${2:substring}, ${3:replacement})",type:"String.replaceAll",description:"Searches a string for a all matches against a regular expression or a substring and replaces them with another string.",fileTypes:["jsx","tsx","javascript"]},{prefix:"sw",snippet:"${1:str}.startsWith(${2:substr})",type:"String.startsWith",description:"Checks if a string starts with a specified substring.",fileTypes:["jsx","tsx","javascript"]},{prefix:"ew",snippet:"${1:str}.endsWith(${2:substr})",type:"String.endsWith",description:"Checks if a string ends with a specified substring.",fileTypes:["jsx","tsx","javascript"]},{prefix:"sstr",snippet:"${1:str}.substring(${2:start}, ${3:end})",type:"String.substring",description:"Extracts a substring from a string.",fileTypes:["jsx","tsx","javascript"]},{prefix:"ss",snippet:"${1:str}.substr(${2:start}, ${3:length})",type:"String.substr",description:"Extracts a substring with a specific length from a string.",fileTypes:["jsx","tsx","javascript"]},{prefix:"tlc",snippet:"${1:str}.toLowerCase()",type:"String.toLowerCase",description:"Returns a new string with all characters converted to lowercase.",fileTypes:["jsx","tsx","javascript"]},{prefix:"tuc",snippet:"${1:str}.toUpperCase()",type:"String.toUpperCase",description:"Returns a new string with all characters converted to uppercase.",fileTypes:["jsx","tsx","javascript"]},{prefix:"trm",snippet:"${1:str}.trim()",type:"String.trim",description:"Removes leading and trailing whitespace from a string.",fileTypes:["jsx","tsx","javascript"]},{prefix:"sp",snippet:"${1:str}.split(${2:delimiter})",type:"String.split",description:"Splits a string into an array of substrings using all occurrences of the delimiter.",fileTypes:["jsx","tsx","javascript"]},{prefix:"inc",snippet:"${1:elements}.includes(${2:element}, ${3:start})",type:"includes",description:"Checks if an array or string includes a specific element",fileTypes:["jsx","tsx","javascript"]},{prefix:"sl",snippet:"${1:elements}.slice(${2:start}, ${3:end})",type:"slice",description:"Returns a shallow copy of selected elements in an array or string, as a new array or string.",fileTypes:["jsx","tsx","javascript"]},{prefix:"io",snippet:"${1:elements}.indexOf(${2:element})",type:"indexOf",description:"Returns the first index of a specific element.",fileTypes:["jsx","tsx","javascript"]},{prefix:"cc",snippet:"${1:elements}.concat(${2:otherElements})",type:"concat",description:"Combines multiple strings or arrays into a single new string or array.",fileTypes:["jsx","tsx","javascript"]},{prefix:"lio",snippet:"${1:str}.lastIndexOf(${2:substr})",type:"lastIndexOf",description:"Returns the last index of a specified value within another array or string.",fileTypes:["jsx","tsx","javascript"]},{prefix:"ael",snippet:"${1:document}.addEventListener('${2:click}', ${3:(e) => {}})",type:"addEventListener",description:"Adds an event listener to a DOM element",fileTypes:["tsx","javascript"]},{prefix:"rel",snippet:"${1:document}.removeEventListener('${2:click}', ${3:eventListener})",type:"removeEventListener",description:"Removes an event listener from a DOM element",fileTypes:["tsx","javascript"]},{prefix:"ac",snippet:"${1:document}.appendChild(${2:elem})",type:"appendChild",description:"Adds a child node to a specified parent",fileTypes:["tsx","javascript"]},{prefix:"rc",snippet:"${1:document}.removeChild(${2:elem})",type:"removeChild",description:"Removes a child node from the DOM",fileTypes:["tsx","javascript"]},{prefix:"rpc",snippet:"${1:document}.replaceChild(${2:newChild}, ${3:oldChild})",type:"replaceChild",description:"Replaces a child node from the DOM",fileTypes:["tsx","javascript"]},{prefix:"inb",snippet:"${1:parentEl}.insertBefore(${2:newEl}, ${3:refEl})",type:"insertBefore",description:"Inserts a child node into the DOM",fileTypes:["tsx","javascript"]},{prefix:"ina",snippet:"${1:parentEl}.insertAdjacentHTML(${2:position}, ${3:el})",type:"insertAdjacentHTML",description:"Inserts a child node into the DOM",fileTypes:["tsx","javascript"]},{prefix:"ds",snippet:"${1:el}.dataset",type:"dataset",description:"Returns the value of all 'data-' properties on a HTML element",fileTypes:["tsx","javascript"]},{prefix:"gcs",snippet:"getComputedStyle(${1:el})",type:"replaceChild",description:"Removes a child node from the DOM",fileTypes:["tsx","javascript"]},{prefix:"cel",snippet:"${1:document}.createElement(${2:element})",type:"createElement",description:"Creates a new HTML element with a specified tag name",fileTypes:["tsx","javascript"]},{prefix:"cdf",snippet:"document.createDocumentFragment()",type:"createDocumentFragment",description:"Creates a new offscreen node",fileTypes:["tsx","javascript"]},{prefix:"cla",snippet:"${1:document}.classList.add('${2:class}')",type:"classList.add",description:"Adds a new CSS class to a HTML element",fileTypes:["tsx","javascript"]},{prefix:"clr",snippet:"${1:document}.classList.remove('${2:class}')",type:"classList.remove",description:"Removes an existing CSS class from a HTML element",fileTypes:["tsx","javascript"]},{prefix:"clt",snippet:"${1:document}.classList.toggle('${2:class}')",type:"classList.toggle",description:"Adds or removes a class based on wether it's already present",fileTypes:["tsx","javascript"]},{prefix:"gei",snippet:"${1:document}.getElementById('${2:id}')",type:"getElementById",description:"Returns an element whose id property matches the specified string",fileTypes:["tsx","javascript"]},{prefix:"gecn",snippet:"${1:document}.getElementsByClassName('${2:class}')",type:"getElementsByClassName",description:"Returns a HTML collection of elements with the given class name",fileTypes:["tsx","javascript"]},{prefix:"getn",snippet:"${1:document}.getElementsByTagName('${2:tag}')",type:"getElementsByTagName",description:"Returns a HTML collection of elements with the given tag name",fileTypes:["tsx","javascript"]},{prefix:"ga",snippet:"${1:document}.getAttribute('${2:attr}')",type:"getAttribute",description:"Returns the value of the specified attribute on the element",fileTypes:["tsx","javascript"]},{prefix:"sa",snippet:"${1:document}.setAttribute('${2:attr}')",type:"setAttribute",description:"Adds the attribute with the specified name on the element",fileTypes:["tsx","javascript"]},{prefix:"ra",snippet:"${1:document}.removeAttribute('${2:attr}')",type:"removeAttribute",description:"Removes the attribute with the specified name on the element",fileTypes:["tsx","javascript"]},{prefix:"ih",snippet:"${1:document}.innerHTML = '${2:elem}'",type:"innerHTML",description:"Gets or sets the HTML markup contained within an element",fileTypes:["tsx","javascript"]},{prefix:"tc",snippet:"${1:document}.textContent = '${2:content}'",type:"textContent",description:"Gets or sets the text content of the specified element",fileTypes:["tsx","javascript"]},{prefix:"qs",snippet:"${1:document}.querySelector('${2:selector}')",type:"querySelector",description:"Returns the first element within the DOM that matches the specified selector(s)",fileTypes:["tsx","javascript"]},{prefix:"qsa",snippet:"${1:document}.querySelectorAll('${2:selector}')",type:"querySelectorAll",description:"Returns a NodeList of all elements within the DOM that matches the specified selector(s)",fileTypes:["tsx","javascript"]}];var{snippetManager:_}=ace.require("ace/snippets"),D=acode.require("selectionMenu"),a=acode.require("settings"),{editor:o}=editorManager,c=class{constructor(){this.setVariables(),this.initializeAutocompletion(g||[]),a.value[i.id]||(a.value[i.id]={snippetDocs:!1},a.update(!1))}setVariables(){let{variables:t}=_;t.FILE_NAME=()=>{let s=editorManager.activeFile.filename,r=s.lastIndexOf(".");return s.slice(0,r)}}initializeAutocompletion(t){this.reactCompleter={getCompletions:(s,r,p,f,l)=>{let v=h(r),d=t.filter(n=>n.fileTypes.includes(v));d.length>0?l(null,d.map(n=>{let x={caption:n.prefix,snippet:n.snippet,meta:n.type,value:n.snippet,type:"snippet",docHTML:n.description||""};return typeof extraSyntaxHighlightsInstalled<"u"&&extraSyntaxHighlightsInstalled?{...x,icon:"icon react-snippet-icon"}:x})):l(null,[])}},o.completers.unshift(this.reactCompleter)}async init(t,s,r){if(this.settings.snippetDocs){let p=document.createElement("style");p.id="overideCompletionDocs",p.innerHTML=`
            .ace_tooltip.ace_doc-tooltip {
                display: flex !important;
                background-color: var(--secondary-color);
                color: var(--secondary-text-color);
                max-width: 68%;
                white-space: pre-wrap;
            }
            `,document.head.append(p)}acode.addIcon("react-snippet-icon",this.baseUrl+"icon.png"),D.add(this.convertToJsx.bind(this),"JSX","selected")}convertToJsx(){let t=o.getSelectionRange(),s=o.getSelectedText(),r=j(s);o.getSession().replace(t,r),window.toast("Converted \u{1F4A5}",3e3)}get settingsObj(){return{list:[{key:"snippetDocs",text:"Enable snippet docs",checkbox:!!this.settings.snippetDocs,info:"To show brief docs about the snippets"}],cb:(t,s)=>{if(this.settings[t]=s,a.update(),s==!0){let r=document.createElement("style");r.id="overideCompletionDocs",r.innerHTML=`
                    .ace_tooltip.ace_doc-tooltip {
                        display: flex !important;
                        background-color: var(--secondary-color);
                        color: var(--secondary-text-color);
                        max-width: 68%;
                        white-space: pre-wrap;
                    }
                    `,document.head.append(r)}else s==!1&&document.querySelector("overideCompletionDocs").remove()}}}get settings(){return a.value[i.id]}async destroy(){o.completers.splice(o.completers.indexOf(this.reactCompleter),1),document.querySelector("overideCompletionDocs").remove()}};if(window.acode){let e=new c;acode.setPluginInit(i.id,async(t,s,{cacheFileUrl:r,cacheFile:p})=>{t.endsWith("/")||(t+="/"),e.baseUrl=t,await e.init(s,p,r)},e.settingsObj),acode.setPluginUnmount(i.id,()=>{e.destroy()})}
