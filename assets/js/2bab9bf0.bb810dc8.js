"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8104],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return k}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(r),k=a,d=p["".concat(l,".").concat(k)]||p[k]||m[k]||i;return r?n.createElement(d,o(o({ref:t},c),{},{components:r})):n.createElement(d,o({ref:t},c))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},6275:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return k},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return m}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),o=["components"],s={title:"Tracking"},l=void 0,u={unversionedId:"userDocs/submarine-sdk/tracking",id:"version-0.6.0/userDocs/submarine-sdk/tracking",title:"Tracking",description:"\x3c!--",source:"@site/versioned_docs/version-0.6.0/userDocs/submarine-sdk/tracking.md",sourceDirName:"userDocs/submarine-sdk",slug:"/userDocs/submarine-sdk/tracking",permalink:"/docs/userDocs/submarine-sdk/tracking",editUrl:"https://github.com/apache/submarine/edit/master/website/versioned_docs/version-0.6.0/userDocs/submarine-sdk/tracking.md",tags:[],version:"0.6.0",frontMatter:{title:"Tracking"},sidebar:"docs",previous:{title:"Model Client",permalink:"/docs/userDocs/submarine-sdk/model-client"},next:{title:"Submarine Spark Security Plugin",permalink:"/docs/userDocs/submarine-security/spark-security/"}},c={},m=[{value:"Functions",id:"functions",level:2},{value:"<code>submarine.get_tracking_uri() -&gt; str</code>",id:"submarineget_tracking_uri---str",level:3},{value:"<code>submarine.set_tracking_uri(uri: str) -&gt; None</code>",id:"submarineset_tracking_uriuri-str---none",level:3},{value:"<code>submarine.log_param(key: str, value: str) -&gt; None</code>",id:"submarinelog_paramkey-str-value-str---none",level:3},{value:"<code>submarine.log_metric(key: str, value: float, step=0) -&gt; None</code>",id:"submarinelog_metrickey-str-value-float-step0---none",level:3}],p={toc:m};function k(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"It helps developers use submarine's internal data caching,\ndata exchange, and task tracking capabilities to more efficiently improve the\ndevelopment and execution of machine learning productivity"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Allow data scientist to track distributed ML experiment"),(0,i.kt)("li",{parentName:"ul"},"Support store ML parameters and metrics in Submarine-server"),(0,i.kt)("li",{parentName:"ul"},"Support hdfs, S3 and mysql (Currently we only support mysql)")),(0,i.kt)("h2",{id:"functions"},"Functions"),(0,i.kt)("h3",{id:"submarineget_tracking_uri---str"},(0,i.kt)("inlineCode",{parentName:"h3"},"submarine.get_tracking_uri() -> str")),(0,i.kt)("p",null,"Get the tracking URI. If none has been specified, check the environmental variables. If uri is still none, return the default submarine jdbc url."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Returns")),(0,i.kt)("ul",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ul"},"The tracking URI."))),(0,i.kt)("h3",{id:"submarineset_tracking_uriuri-str---none"},(0,i.kt)("inlineCode",{parentName:"h3"},"submarine.set_tracking_uri(uri: str) -> None")),(0,i.kt)("p",null,"set the tracking URI. You can also set the SUBMARINE_TRACKING_URI environment variable to have Submarine find a URI from there. The URI should be database connection string."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Parameters")),(0,i.kt)("ul",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"uri")," ","-"," Submarine record data to Mysql server. The database URL is expected in the format ",(0,i.kt)("inlineCode",{parentName:"li"},"<dialect>+<driver>://<username>:<password>@<host>:<port>/<database>"),".\nBy default it's ",(0,i.kt)("inlineCode",{parentName:"li"},"mysql+pymysql://submarine:password@submarine-database:3306/submarine"),".\nMore detail : ",(0,i.kt)("a",{parentName:"li",href:"https://docs.sqlalchemy.org/en/latest/core/engines.html#database-urls"},"SQLAlchemy docs")))),(0,i.kt)("h3",{id:"submarinelog_paramkey-str-value-str---none"},(0,i.kt)("inlineCode",{parentName:"h3"},"submarine.log_param(key: str, value: str) -> None")),(0,i.kt)("p",null,"log a single key-value parameter. The key and value are both strings."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Parameters")),(0,i.kt)("ul",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"key")," - Parameter name."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"value")," - Parameter value."))),(0,i.kt)("h3",{id:"submarinelog_metrickey-str-value-float-step0---none"},(0,i.kt)("inlineCode",{parentName:"h3"},"submarine.log_metric(key: str, value: float, step=0) -> None")),(0,i.kt)("p",null,"log a single key-value metric. The value must always be a number."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Parameters")),(0,i.kt)("ul",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"key")," - Metric name."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"value")," - Metric value."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"step")," - A single integer step at which to log the specified Metrics, by default it's 0."))))}k.isMDXComponent=!0}}]);