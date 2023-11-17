<<<<<<< HEAD
var o={id:"bajrangcoder.react.snippets",name:"Acode ES7+ React/Redux snippets",main:"dist/main.js",version:"1.0.0",readme:"readme.md",icon:"icon.png",files:[],minVersionCode:290,price:0,author:{name:"Raunak Raj",email:"bajrangcoders@gmail.com",github:"bajrangCoder"}};function f(n){let t=n.getMode().$id.split("/");return t[t.length-1]}var l=[{prefix:"rcc",snippet:`import React, { Component } from 'react'
=======
var s={id:"bajrangcoder.react.snippets",name:"Acode ES7+ React/Redux snippets",main:"dist/main.js",version:"1.0.0",readme:"readme.md",icon:"icon.png",files:[],minVersionCode:290,price:0,author:{name:"Raunak Raj",email:"bajrangcoders@gmail.com",github:"bajrangCoder"}};function f(p){let t=p.getMode().$id.split("/");return t[t.length-1]}var x=[{prefix:"rcc",snippet:`import React, { Component } from 'react'
>>>>>>> main

export default class \${FILE_NAME} extends Component {
  render() {
    return (
    <div>$1</div>
  )
}
`,type:"Components",description:"Creates a <strong>React component</strong> class with ES7 module system",fileTypes:["jsx","tsx"]},{prefix:"useEffectSnippet",snippet:`useEffect(() => {
  \${1}
  return () => {
    \${2}
  }
}, [\${3}])
<<<<<<< HEAD
`,type:"Hooks",fileTypes:["jsx","tsx"]},{prefix:"exp",snippet:"export default ${1}",type:"ExportDefault",fileTypes:["jsx","tsx"]},{prefix:"exd",snippet:"export { ${2} } from '${1}'",type:"ExportDestructing",fileTypes:["jsx","tsx"]},{prefix:"exa",snippet:"export { ${2} as ${3} } from '${1}'",type:"ExportAs",fileTypes:["jsx","tsx"]},{prefix:"enf",snippet:"export const ${1} = (${2}) => {${3}}",type:"ExportNamedFunction",description:"Export named function",fileTypes:["jsx","tsx"]},{prefix:"edf",snippet:"export default (${1}) => {${2}}",type:"ExportDefaultFunction",description:"Export default function",fileTypes:["jsx","tsx"]},{prefix:"ednf",snippet:"export default function ${1}(${2}) {${3}}",type:"ExportDefaultNamedFunction",description:"Export default named function",fileTypes:["jsx","tsx"]},{prefix:"met",snippet:"${1} = (${2}) => {${3}}",type:"Method",description:"Creates a method inside a class",fileTypes:["jsx","tsx"]},{prefix:"pge",snippet:"get ${1}() {\n  return this.${2}\n}",type:"PropertyGet",description:"Creates a getter property inside a class",fileTypes:["jsx","tsx"]},{prefix:"pse",snippet:"set ${1}(${2}) {${3}}",type:"PropertySet",description:"Creates a setter property inside a class",fileTypes:["jsx","tsx"]},{prefix:"fre",snippet:"${1}.forEach(${2} => {${3}})",type:"ForEach",description:"Creates a forEach statement",fileTypes:["jsx","tsx"]},{prefix:"fof",snippet:"for(let ${1} of ${2}) {${3}}",type:"ForOf",description:"Iterating over property names of iterable objects",fileTypes:["jsx","tsx"]},{prefix:"fin",snippet:"for(let ${1} in ${2}) {${3}}",type:"ForIn",description:"Iterating over property values of iterable objects",fileTypes:["jsx","tsx"]},{prefix:"anfn",snippet:"(${1}) => { ${2} }",type:"AnonymousFunction",description:"Creates an anonymous function",fileTypes:["jsx","tsx"]},{prefix:"nfn",snippet:"const ${1} = (${2}) => { ${3} }",type:"NamedFunction",description:"Creates a named function",fileTypes:["jsx","tsx"]},{prefix:"dob",snippet:"const {${2}} = ${1}",type:"DestructingObject",description:"Creates and assigns a local variable using object destructing",fileTypes:["jsx","tsx"]},{prefix:"dar",snippet:"const [${2}] = ${1}",type:"DestructingArray",description:"Creates and assigns a local variable using array destructing",fileTypes:["jsx","tsx"]},{prefix:"sti",snippet:"setInterval(() => { ${1} }, ${2})",type:"SetInterval",description:"Executes the given function at specified intervals",fileTypes:["jsx","tsx"]},{prefix:"sto",snippet:"setTimeout(() => { ${1} }, ${2})",type:"SetTimeOut",description:"Executes the given function after the specified delay",fileTypes:["jsx","tsx"]},{prefix:"prom",snippet:"return new Promise((resolve, reject) => { ${1} })",type:"Promise",description:"Creates and returns a new Promise in the standard ES7 syntax",fileTypes:["jsx","tsx"]},{prefix:"cp",snippet:"const { ${1} } = this.props",type:"DestructProps",description:"Creates and assigns a local variable using props destructing",fileTypes:["jsx","tsx"]},{prefix:"cs",snippet:"const { ${1} } = this.state",type:"DestructState",description:"Creates and assigns a local variable using state destructing",fileTypes:["jsx","tsx"]},{prefix:"rconst",snippet:`constructor(props) {
  super(props)
  this.state = {
     \${1}
  }
}`,type:"ClassConstructor",description:"Adds a default constructor for it<code>('', () => {})</code>the class that contains props as arguments",fileTypes:["jsx","tsx"]},{prefix:"est",snippet:"state = { ${1} }",type:"EmptyState",description:"Creates empty state object. To be used in a constructor.",fileTypes:["jsx","tsx"]},{prefix:"cdm",snippet:"componentDidMount() { ${1} }",type:"ComponentDidMount",description:"Invoked once, only on the client (not on the server), immediately after the initial rendering occurs.",fileTypes:["jsx","tsx"]},{prefix:"scu",snippet:"shouldComponentUpdate(nextProps, nextState) { ${1} }",type:"ShouldComponentUpdate",description:"Invoked before rendering when new props or state are being received. ",fileTypes:["jsx","tsx"]},{prefix:"cdup",snippet:"componentDidUpdate(prevProps, prevState) { ${1}}",type:"ComponentDidUpdate",description:"Invoked immediately after the component's updates are flushed to the DOM.",fileTypes:["jsx","tsx"]},{prefix:"cwun",snippet:"componentWillUnmount() {${1} }",type:"ComponentWillUnmount",description:"Invoked immediately before a component is unmounted from the DOM.",fileTypes:["jsx","tsx"]},{prefix:"gdsfp",snippet:"static getDerivedStateFromProps(props, state) {${1}}",type:"GetDerivedStateFromProps",description:"Invoked right before calling the render method, both on the initial mount and on subsequent updates.",fileTypes:["jsx","tsx"]},{prefix:"gsbu",snippet:"getSnapshotBeforeUpdate = (prevProps, prevState) => {${1}}",type:"GetSnapshotBeforeUpdate",description:"Called right before mutations are made (e.g. before the DOM is updated)",fileTypes:["jsx","tsx"]},{prefix:"rcontext",snippet:"const ${1} = React.createContext()",type:"CreateContext",description:"Create React context",fileTypes:["jsx","tsx"]},{prefix:"cref",snippet:"this.${1}Ref = React.createRef()",type:"CreateRef",description:"Create ref statement used inside constructor",fileTypes:["jsx","tsx"]},{prefix:"sst",snippet:"this.setState((state, props) => { return { ${1} }})",type:"ComponentSetStateObject",description:"Performs a shallow merge of nextState into current state",fileTypes:["jsx","tsx"]},{prefix:"ssf",snippet:"this.setState((state, props) => { return { ${1} }})",type:"ComponentSetStateFunc",description:"Performs a shallow merge of nextState into current state",fileTypes:["jsx","tsx"]},{prefix:"props",snippet:"this.props.${1}",type:"ComponentProps",description:"Access component's props",fileTypes:["jsx","tsx"]},{prefix:"state",snippet:"this.state.${1}",type:"ComponentState",fileTypes:["jsx","tsx"]},{prefix:"bnd",snippet:"this.${1} = this.${1}.bind(this)",type:"BindThis",description:"Binds this to a method",fileTypes:["jsx","tsx"]},{prefix:"cmmb",snippet:`/**
 * \${1}
 */`,type:"CommentBigBlock",fileTypes:["jsx","tsx"]},{prefix:"hocredux",snippet:`import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

export const mapStateToProps = state => ({})

export const mapDispatchToProps = {}

export const \${1} = (WrappedComponent) => {
  const hocComponent = ({ ...props }) => <WrappedComponent {...props} />

  hocComponent.propTypes = {}

  return hocComponent
}

export default WrapperComponent => connect(mapStateToProps, mapDispatchToProps)(\${1}(WrapperComponent))
`,type:"HocComponentWithRedux",fileTypes:["jsx","tsx"]},{prefix:"hoc",snippet:`import React from 'react'
import PropTypes from 'prop-types'

export default (WrappedComponent) => {
  const hocComponent = ({ ...props }) => <WrappedComponent {...props} />

  hocComponent.propTypes = {}

  return hocComponent
}
`,type:"HocComponent",fileTypes:["jsx","tsx"]},{prefix:"tpf",snippet:"typeof ${1}",type:"TypeofSnippet",fileTypes:["jsx","tsx"]}];var{snippetManager:u}=ace.require("ace/snippets"),{editor:r}=editorManager,a=class{constructor(){this.setVariables()}setVariables(){let{variables:e}=u;e.FILE_NAME=()=>{let t=editorManager.activeFile.filename,p=t.lastIndexOf(".");return t.slice(0,p)}}initializeAutocompletion(e){this.reactCompleter={getCompletions:(t,p,i,h,c)=>{let m=f(p),d=e.filter(s=>s.fileTypes.includes(m));d.length>0?c(null,d.map(s=>{let x={caption:s.prefix,snippet:s.snippet,meta:s.type,value:s.snippet,type:"snippet",docHTML:s.description||""};return extraSyntaxHighlightsInstalled?{...x,icon:"icon react-snippet-icon"}:x})):c(null,[])}},r.completers.unshift(this.reactCompleter)}async init(e,t,p){let i=document.createElement("style");i.innerHTML=`
=======
`,type:"Hooks",fileTypes:["jsx","tsx"]},{prefix:"imr",snippet:"import React from 'react'",type:"ImportReact",fileTypes:["jsx","tsx"]},{prefix:"imrd",snippet:"import ReactDOM from 'react-dom'",type:"ImportReactDom",fileTypes:["jsx","tsx"]},{prefix:"imrc",snippet:"import React, { Component } from 'react'",type:"ImportReactWithComponent",fileTypes:["jsx","tsx"]},{prefix:"imrcp",snippet:`import React, { Component } from 'react'
import PropTypes from 'prop-types'`,type:"ImportReactWithComponentAndPropTypes",fileTypes:["jsx","tsx"]},{prefix:"imrpc",snippet:"import React, { PureComponent } from 'react'",type:"ImportReactWithPureComponent",fileTypes:["jsx","tsx"]},{prefix:"imrpcp",snippet:`import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'`,type:"ImportReactWithPureComponent&PropTypes",fileTypes:["jsx","tsx"]},{prefix:"imrm",snippet:"import React, { memo } from 'react'",type:"ImportReactWithMemo",fileTypes:["jsx","tsx"]},{prefix:"imrmp",snippet:`import React, { memo } from 'react'
import PropTypes from 'prop-types'`,type:"ImportReactWithMemo&PropTypes",fileTypes:["jsx","tsx"]},{prefix:"impt",snippet:"import PropTypes from 'prop-types'",type:"ImportPropTypes",fileTypes:["jsx","tsx"]},{prefix:"imbr",snippet:"import { BrowserRouter as Router } from 'react-router-dom'",type:"ReactRouter",fileTypes:["jsx","tsx"]},{prefix:"imrr",snippet:"import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'",type:"ReactRouterWithRouteAndNavLink",fileTypes:["jsx","tsx"]},{prefix:"imbrc",snippet:"import { Route, Switch, NavLink, Link } from 'react-router-dom'",type:"ImportRouterSetup",fileTypes:["jsx","tsx"]},{prefix:"imbrs",snippet:"import { Switch } from 'react-router-dom'",type:"ImportRouterSwitch",fileTypes:["jsx","tsx"]},{prefix:"imbrl",snippet:"import { Link } from 'react-router-dom'",type:"ImportRouterLink",fileTypes:["jsx","tsx"]},{prefix:"imbrnl",snippet:"import { NavLink } from 'react-router-dom'",type:"ImportRouterNavLink",fileTypes:["jsx","tsx"]},{prefix:"imp",snippet:"import ${2:Name} from '${1}'",type:"Import",fileTypes:["jsx","tsx"]},{prefix:"imn",snippet:"import '${1}'",type:"ImportNoModuleName",fileTypes:["jsx","tsx"]},{prefix:"imd",snippet:"import { ${2:Component} } from '${1}'",type:"ImportDestructing",fileTypes:["jsx","tsx"]},{prefix:"ime",snippet:"import * as ${2:comp} from '${1}'",type:"ImportEverything",fileTypes:["jsx","tsx"]},{prefix:"ima",snippet:"import { ${2:Component} as ${3} } from '${1}'",type:"ImportAs",fileTypes:["jsx","tsx"]}];var{snippetManager:u}=ace.require("ace/snippets"),{editor:n}=editorManager,m=class{constructor(){this.setVariables()}setVariables(){let{variables:e}=u;e.FILE_NAME=()=>{let t=editorManager.activeFile.filename,r=t.lastIndexOf(".");return t.slice(0,r)}}initializeAutocompletion(e){this.reactCompleter={getCompletions:(t,r,o,g,a)=>{let y=f(r),c=e.filter(i=>i.fileTypes.includes(y));c.length>0?a(null,c.map(i=>{let l={caption:i.prefix,snippet:i.snippet,meta:i.type,value:i.snippet,type:"snippet",docHTML:i.description||""};return extraSyntaxHighlightsInstalled?{...l,icon:"icon react-snippet-icon"}:l})):a(null,[])}},n.completers.unshift(this.reactCompleter)}async init(e,t,r){let o=document.createElement("style");o.innerHTML=`
>>>>>>> main
        .ace_tooltip.ace_doc-tooltip {
            display: flex !important;
            background-color: var(--secondary-color);
            color: var(--secondary-text-color);
            max-width: 68%;
            white-space: pre-wrap;
        }
<<<<<<< HEAD
        `,document.head.append(i),acode.addIcon("react-snippet-icon",this.baseUrl+"icon.png"),this.initializeAutocompletion(l||[])}async destroy(){r.completers.splice(r.completers.indexOf(this.reactCompleter),1)}};if(window.acode){let n=new a;acode.setPluginInit(o.id,async(e,t,{cacheFileUrl:p,cacheFile:i})=>{e.endsWith("/")||(e+="/"),n.baseUrl=e,await n.init(t,i,p)}),acode.setPluginUnmount(o.id,()=>{n.destroy()})}
=======
        `,document.head.append(o),acode.addIcon("react-snippet-icon",this.baseUrl+"icon.png"),this.initializeAutocompletion(x||[])}async destroy(){n.completers.splice(n.completers.indexOf(this.reactCompleter),1)}};if(window.acode){let p=new m;acode.setPluginInit(s.id,async(e,t,{cacheFileUrl:r,cacheFile:o})=>{e.endsWith("/")||(e+="/"),p.baseUrl=e,await p.init(t,o,r)}),acode.setPluginUnmount(s.id,()=>{p.destroy()})}
>>>>>>> main
