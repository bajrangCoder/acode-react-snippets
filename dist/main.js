var s={id:"bajrangcoder.react.snippets",name:"Acode ES7+ React/Redux snippets",main:"dist/main.js",version:"1.0.0",readme:"readme.md",icon:"icon.png",files:[],minVersionCode:290,price:0,author:{name:"Raunak Raj",email:"bajrangcoders@gmail.com",github:"bajrangCoder"}};function f(p){let t=p.getMode().$id.split("/");return t[t.length-1]}var x=[{prefix:"rcc",snippet:`import React, { Component } from 'react'

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
`,type:"Hooks",fileTypes:["jsx","tsx"]},{prefix:"imr",snippet:"import React from 'react'",type:"ImportReact",fileTypes:["jsx","tsx"]},{prefix:"imrd",snippet:"import ReactDOM from 'react-dom'",type:"ImportReactDom",fileTypes:["jsx","tsx"]},{prefix:"imrc",snippet:"import React, { Component } from 'react'",type:"ImportReactWithComponent",fileTypes:["jsx","tsx"]},{prefix:"imrcp",snippet:`import React, { Component } from 'react'
import PropTypes from 'prop-types'`,type:"ImportReactWithComponentAndPropTypes",fileTypes:["jsx","tsx"]},{prefix:"imrpc",snippet:"import React, { PureComponent } from 'react'",type:"ImportReactWithPureComponent",fileTypes:["jsx","tsx"]},{prefix:"imrpcp",snippet:`import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'`,type:"ImportReactWithPureComponent&PropTypes",fileTypes:["jsx","tsx"]},{prefix:"imrm",snippet:"import React, { memo } from 'react'",type:"ImportReactWithMemo",fileTypes:["jsx","tsx"]},{prefix:"imrmp",snippet:`import React, { memo } from 'react'
import PropTypes from 'prop-types'`,type:"ImportReactWithMemo&PropTypes",fileTypes:["jsx","tsx"]},{prefix:"impt",snippet:"import PropTypes from 'prop-types'",type:"ImportPropTypes",fileTypes:["jsx","tsx"]},{prefix:"imbr",snippet:"import { BrowserRouter as Router } from 'react-router-dom'",type:"ReactRouter",fileTypes:["jsx","tsx"]},{prefix:"imrr",snippet:"import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'",type:"ReactRouterWithRouteAndNavLink",fileTypes:["jsx","tsx"]},{prefix:"imbrc",snippet:"import { Route, Switch, NavLink, Link } from 'react-router-dom'",type:"ImportRouterSetup",fileTypes:["jsx","tsx"]},{prefix:"imbrs",snippet:"import { Switch } from 'react-router-dom'",type:"ImportRouterSwitch",fileTypes:["jsx","tsx"]},{prefix:"imbrl",snippet:"import { Link } from 'react-router-dom'",type:"ImportRouterLink",fileTypes:["jsx","tsx"]},{prefix:"imbrnl",snippet:"import { NavLink } from 'react-router-dom'",type:"ImportRouterNavLink",fileTypes:["jsx","tsx"]},{prefix:"imp",snippet:"import ${2:Name} from '${1}'",type:"Import",fileTypes:["jsx","tsx"]},{prefix:"imn",snippet:"import '${1}'",type:"ImportNoModuleName",fileTypes:["jsx","tsx"]},{prefix:"imd",snippet:"import { ${2:Component} } from '${1}'",type:"ImportDestructing",fileTypes:["jsx","tsx"]},{prefix:"ime",snippet:"import * as ${2:comp} from '${1}'",type:"ImportEverything",fileTypes:["jsx","tsx"]},{prefix:"ima",snippet:"import { ${2:Component} as ${3} } from '${1}'",type:"ImportAs",fileTypes:["jsx","tsx"]}];var{snippetManager:u}=ace.require("ace/snippets"),{editor:n}=editorManager,m=class{constructor(){this.setVariables()}setVariables(){let{variables:e}=u;e.FILE_NAME=()=>{let t=editorManager.activeFile.filename,r=t.lastIndexOf(".");return t.slice(0,r)}}initializeAutocompletion(e){this.reactCompleter={getCompletions:(t,r,o,g,a)=>{let y=f(r),c=e.filter(i=>i.fileTypes.includes(y));c.length>0?a(null,c.map(i=>{let l={caption:i.prefix,snippet:i.snippet,meta:i.type,value:i.snippet,type:"snippet",docHTML:i.description||""};return extraSyntaxHighlightsInstalled?{...l,icon:"icon react-snippet-icon"}:l})):a(null,[])}},n.completers.unshift(this.reactCompleter)}async init(e,t,r){let o=document.createElement("style");o.innerHTML=`
        .ace_tooltip.ace_doc-tooltip {
            display: flex !important;
            background-color: var(--secondary-color);
            color: var(--secondary-text-color);
            max-width: 68%;
            white-space: pre-wrap;
        }
        `,document.head.append(o),acode.addIcon("react-snippet-icon",this.baseUrl+"icon.png"),this.initializeAutocompletion(x||[])}async destroy(){n.completers.splice(n.completers.indexOf(this.reactCompleter),1)}};if(window.acode){let p=new m;acode.setPluginInit(s.id,async(e,t,{cacheFileUrl:r,cacheFile:o})=>{e.endsWith("/")||(e+="/"),p.baseUrl=e,await p.init(t,o,r)}),acode.setPluginUnmount(s.id,()=>{p.destroy()})}
