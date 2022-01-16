(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{149:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),i=(n(0),n(208)),o={title:"Tracking"},l={unversionedId:"userDocs/submarine-sdk/tracking",id:"userDocs/submarine-sdk/tracking",isDocsHomePage:!1,title:"Tracking",description:"\x3c!--",source:"@site/docs/userDocs/submarine-sdk/tracking.md",slug:"/userDocs/submarine-sdk/tracking",permalink:"/docs/next/userDocs/submarine-sdk/tracking",editUrl:"https://github.com/apache/submarine/edit/master/website/docs/userDocs/submarine-sdk/tracking.md",version:"current",sidebar:"docs",previous:{title:"Experiment Client",permalink:"/docs/next/userDocs/submarine-sdk/experiment-client"},next:{title:"MLflow UI",permalink:"/docs/next/userDocs/others/mlflow"}},c=[{value:"Functions",id:"functions",children:[{value:"<code>submarine.get_tracking_uri() -&gt; str</code>",id:"submarineget_tracking_uri---str",children:[]},{value:"<code>submarine.set_tracking_uri(uri: str) -&gt; None</code>",id:"submarineset_tracking_uriuri-str---none",children:[]},{value:"<code>submarine.log_param(key: str, value: str) -&gt; None</code>",id:"submarinelog_paramkey-str-value-str---none",children:[]},{value:"<code>submarine.log_metric(key: str, value: float, step=0) -&gt; None</code>",id:"submarinelog_metrickey-str-value-float-step0---none",children:[]},{value:"<code>submarine.save_model(model_type: str, model, artifact_path: str, registered_model_name: str = None, input_dim: list = None, output_dim: list = None,) -&gt; None</code>",id:"submarinesave_modelmodel_type-str-model-artifact_path-str-registered_model_name-str--none-input_dim-list--none-output_dim-list--none---none",children:[]}]}],s={toc:c};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"It helps developers use submarine's internal data caching,\ndata exchange, and task tracking capabilities to more efficiently improve the\ndevelopment and execution of machine learning productivity"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Allow data scientist to track distributed ML experiment"),Object(i.b)("li",{parentName:"ul"},"Support store ML parameters and metrics in Submarine-server"),Object(i.b)("li",{parentName:"ul"},"Support hdfs, S3 and mysql (Currently we only support mysql)")),Object(i.b)("h2",{id:"functions"},"Functions"),Object(i.b)("h3",{id:"submarineget_tracking_uri---str"},Object(i.b)("inlineCode",{parentName:"h3"},"submarine.get_tracking_uri() -> str")),Object(i.b)("p",null,"Get the tracking URI. If none has been specified, check the environmental variables. If uri is still none, return the default submarine jdbc url."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"Returns")),Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},"The tracking URI."))),Object(i.b)("h3",{id:"submarineset_tracking_uriuri-str---none"},Object(i.b)("inlineCode",{parentName:"h3"},"submarine.set_tracking_uri(uri: str) -> None")),Object(i.b)("p",null,"set the tracking URI. You can also set the SUBMARINE_TRACKING_URI environment variable to have Submarine find a URI from there. The URI should be database connection string."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"Parameters")),Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"uri")," ","-"," Submarine record data to Mysql server. The database URL is expected in the format ",Object(i.b)("inlineCode",{parentName:"li"},"<dialect>+<driver>://<username>:<password>@<host>:<port>/<database>"),".\nBy default it's ",Object(i.b)("inlineCode",{parentName:"li"},"mysql+pymysql://submarine:password@submarine-database:3306/submarine"),".\nMore detail : ",Object(i.b)("a",{parentName:"li",href:"https://docs.sqlalchemy.org/en/latest/core/engines.html#database-urls"},"SQLAlchemy docs")))),Object(i.b)("h3",{id:"submarinelog_paramkey-str-value-str---none"},Object(i.b)("inlineCode",{parentName:"h3"},"submarine.log_param(key: str, value: str) -> None")),Object(i.b)("p",null,"log a single key-value parameter. The key and value are both strings."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"Parameters")),Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"key")," - Parameter name."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"value")," - Parameter value."))),Object(i.b)("h3",{id:"submarinelog_metrickey-str-value-float-step0---none"},Object(i.b)("inlineCode",{parentName:"h3"},"submarine.log_metric(key: str, value: float, step=0) -> None")),Object(i.b)("p",null,"log a single key-value metric. The value must always be a number."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"Parameters")),Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"key")," - Metric name."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"value")," - Metric value."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"step")," - A single integer step at which to log the specified Metrics, by default it's 0."))),Object(i.b)("h3",{id:"submarinesave_modelmodel_type-str-model-artifact_path-str-registered_model_name-str--none-input_dim-list--none-output_dim-list--none---none"},Object(i.b)("inlineCode",{parentName:"h3"},"submarine.save_model(model_type: str, model, artifact_path: str, registered_model_name: str = None, input_dim: list = None, output_dim: list = None,) -> None")),Object(i.b)("p",null," Save a model into the minio pod."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"Parameters")),Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"model_type")," - The type of model. Only support ",Object(i.b)("inlineCode",{parentName:"li"},"pytorch")," and ",Object(i.b)("inlineCode",{parentName:"li"},"tensorflow"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"model")," - Model artifact."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"artifact_path")," - Model name."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"registered_model_name")," - If it is not ",Object(i.b)("inlineCode",{parentName:"li"},"None"),", the model will be registered into the model registry with this name."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"input_dim")," - The input dimension of the model."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"output_dim")," - The output dimension of the model."))))}b.isMDXComponent=!0},208:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),b=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=b(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=b(n),p=r,d=u["".concat(o,".").concat(p)]||u[p]||m[p]||i;return n?a.a.createElement(d,l(l({ref:t},s),{},{components:n})):a.a.createElement(d,l({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);