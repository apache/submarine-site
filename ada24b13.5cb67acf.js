(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{161:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return i})),r.d(n,"metadata",(function(){return s})),r.d(n,"toc",(function(){return c})),r.d(n,"default",(function(){return u}));var t=r(3),a=r(7),o=(r(0),r(207)),i={title:"Submarine Server Implementation"},s={unversionedId:"designDocs/submarine-server/architecture",id:"designDocs/submarine-server/architecture",isDocsHomePage:!1,title:"Submarine Server Implementation",description:"\x3c!--",source:"@site/docs/designDocs/submarine-server/architecture.md",slug:"/designDocs/submarine-server/architecture",permalink:"/docs/next/designDocs/submarine-server/architecture",editUrl:"https://github.com/apache/submarine/edit/master/website/docs/designDocs/submarine-server/architecture.md",version:"current",sidebar:"docs",previous:{title:"Storage Implementation",permalink:"/docs/next/designDocs/storage-implementation"},next:{title:"Generic Experiment Spec",permalink:"/docs/next/designDocs/submarine-server/experimentSpec"}},c=[{value:"Architecture Overview",id:"architecture-overview",children:[]},{value:"Submarine Server and its APIs",id:"submarine-server-and-its-apis",children:[]},{value:"Proposal",id:"proposal",children:[]},{value:"Submarine Server Components",id:"submarine-server-components",children:[{value:"Experiment Manager",id:"experiment-manager",children:[]},{value:"Notebook Sessions Manager",id:"notebook-sessions-manager",children:[]},{value:"Environment Manager",id:"environment-manager",children:[]},{value:"Model Registry",id:"model-registry",children:[]},{value:"Model Serving Manager",id:"model-serving-manager",children:[]},{value:"Compute Cluster Manager",id:"compute-cluster-manager",children:[]},{value:"Dataset Manager",id:"dataset-manager",children:[]},{value:"User/team permissions manager",id:"userteam-permissions-manager",children:[]},{value:"Metadata Manager",id:"metadata-manager",children:[]}]},{value:"Components/services outside of Submarine Server&#39;s scope",id:"componentsservices-outside-of-submarine-servers-scope",children:[]}],l={toc:c};function u(e){var n=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(t.a)({},l,r,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"architecture-overview"},"Architecture Overview"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"    +---------------Submarine Server ---+\n    |                                   |\n    | +------------+ +------------+     |\n    | |Web Svc/Prxy| |Backend Svc |     |    +--Submarine Asset +\n    | +------------+ +------------+     |    |Project/Notebook  |\n    |   ^         ^                     |    |Model/Metrics     |\n    +---|---------|---------------------+    |Libraries/Dataset |\n        |         |                          +------------------+\n        |         |\n        |      +--|-Compute Cluster 1---+    +--Image Registry--+\n        +      |  |                     |    |   User's Images  |\n      User /   |  +                     |    |                  |\n      Admin    | User Notebook Instance |    +------------------+\n               | Experiment Runs        |\n               +------------------------+    +-Data Storage-----+\n                                             | S3/HDFS, etc.    |\n               +----Compute Cluster 2---+    |                  |\n                                             +------------------+\n                        ...\n")),Object(o.b)("p",null,"Here's a diagram to illustrate the Submarine's deployment."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},'Submarine Server consists of web service/proxy, and backend services. They\'re like "control planes" of Submarine, and users will interact with these services.'),Object(o.b)("li",{parentName:"ul"},"Submarine server could be a microservice architecture and can be deployed to one of the compute clusters. (see below, this will be useful when we only have one cluster)."),Object(o.b)("li",{parentName:"ul"},"There're multiple compute clusters that could be used by Submarine service. For user's running notebook instance, jobs, etc. they will be placed to one of the compute clusters by user's preference or defined policies."),Object(o.b)("li",{parentName:"ul"},"Submarine's asset includes project/notebook(content)/models/metrics/dataset-meta, etc. can be stored inside Submarine's own database."),Object(o.b)("li",{parentName:"ul"},"Datasets can be stored in various locations such as S3/HDFS."),Object(o.b)("li",{parentName:"ul"},"Users can push container (such as Docker) images to a preconfigured registry in Submarine, so Submarine service can know how to pull required container images."),Object(o.b)("li",{parentName:"ul"},"Image Registry/Data-Storage, etc. are outside of Submarine server's scope and should be managed by 3rd party applications.")),Object(o.b)("h2",{id:"submarine-server-and-its-apis"},"Submarine Server and its APIs"),Object(o.b)("p",null,"Submarine server is designed to allow data scientists to access notebooks, submit/manage jobs, manage models, create model training workflows, access datasets, etc."),Object(o.b)("p",null,"Submarine Server exposed UI and REST API. Users can also use CLI / SDK to manage assets inside Submarine Server."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"           +----------+\n           | CLI      |+---+\n           +----------+    v              +----------------+\n                         +--------------+ | Submarine      |\n           +----------+  | REST API     | |                |\n           | SDK      |+>|              |+>  Server        |\n           +----------+  +--------------+ |                |\n                           ^              +----------------+\n           +----------+    |\n           | UI       |+---+\n           +----------+\n")),Object(o.b)("p",null,"REST API will be used by the other 3 approaches. (CLI/SDK/UI)"),Object(o.b)("p",null,"The REST API Service handles HTTP requests and is responsible for authentication. It acts as the caller for the JobManager component."),Object(o.b)("p",null,"The REST component defines the generic job spec which describes the detailed info about job. For more details, refer to ",Object(o.b)("a",{parentName:"p",href:"https://docs.google.com/document/d/1kd-5UzsHft6gV7EuZiPXeWIKJtPqVwkNlqMvy0P_pAw/edit#"},"here"),". (Please note that we're converting REST endpoint description from Java-based REST API to swagger definition, once that is done, we should replace the link with swagger definition spec)."),Object(o.b)("h2",{id:"proposal"},"Proposal"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"\n+-----------+\n|           |\n| workbench +---+   +----------------------------------+\n|           |   |   | +------+ +---------------------+ |\n+-----------+   |   | |      | |      +-------+      | |     +---------------------+\n                |   | |      | |      |  K8s  |      | |     | +--------+   +----+ |\n+-----------+   |   | |      | |      +-------+      | |     | |        +--\x3e+job1| |\n|           |   |   | |      | |      submitter      | |     | |        |   +----+ |\n|    CLI    +------\x3e+ | REST | +---------------------+ +----\x3e+ |operator|   +----+ |\n|           |   |   | |      | +---------------------+ |     | |        +--\x3e+job2| |\n+-----------+   |   | |      | | +-------+ +-------+ | |     | +--------+   +----+ |\n                |   | |      | | |PlugMgr| |monitor| | |     |     K8s Cluster     |\n+-----------+   |   | |      | | +-------+ +-------+ | |     +---------------------+\n|           |   |   | |      | |      JobManager     | |\n|    SDK    +---+   | +------+ +---------------------+ |\n|           |       +----------------------------------+\n+-----------+\n   client                          server\n")),Object(o.b)("p",null,"We propose to split the original core module in the old layout into two modules, CLI and server as shown in FIG. The submarine-client calls the REST APIs to submit and retrieve the job info. The submarine-server provides the REST service, job management, submitting the job to cluster, and running job in different clusters through the corresponding runtime."),Object(o.b)("h2",{id:"submarine-server-components"},"Submarine Server Components"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"\n   +----------------------Submarine Server--------------------------------+\n   | +-----------------+ +------------------+ +--------------------+      |\n   | |  Experiment     | |Notebook Session  | |Environment Mgr     |      |\n   | |  Mgr            | |Mgr               | |                    |      |\n   | +-----------------+ +------------------+ +--------------------+      |\n   |                                                                      |\n   | +-----------------+ +------------------+ +--------------------+      |\n   | |  Model Registry | |Model Serving Mgr | |Compute Cluster Mgr |      |\n   | |                 | |                  | |                    |      |\n   | +-----------------+ +------------------+ +--------------------+      |\n   |                                                                      |\n   | +-----------------+ +------------------+ +--------------------+      |\n   | | DataSet Mgr     | |User/Team         | |Metadata Mgr        |      |\n   | |                 | |Permission Mgr    | |                    |      |\n   | +-----------------+ +------------------+ +--------------------+      |\n   +----------------------------------------------------------------------+\n")),Object(o.b)("h3",{id:"experiment-manager"},"Experiment Manager"),Object(o.b)("p",null,"TODO"),Object(o.b)("h3",{id:"notebook-sessions-manager"},"Notebook Sessions Manager"),Object(o.b)("p",null,"TODO"),Object(o.b)("h3",{id:"environment-manager"},"Environment Manager"),Object(o.b)("p",null,"TODO"),Object(o.b)("h3",{id:"model-registry"},"Model Registry"),Object(o.b)("p",null,"TODO"),Object(o.b)("h3",{id:"model-serving-manager"},"Model Serving Manager"),Object(o.b)("p",null,"TODO"),Object(o.b)("h3",{id:"compute-cluster-manager"},"Compute Cluster Manager"),Object(o.b)("p",null,"TODO"),Object(o.b)("h3",{id:"dataset-manager"},"Dataset Manager"),Object(o.b)("p",null,"TODO"),Object(o.b)("h3",{id:"userteam-permissions-manager"},"User/team permissions manager"),Object(o.b)("p",null,"TODO"),Object(o.b)("h3",{id:"metadata-manager"},"Metadata Manager"),Object(o.b)("p",null,"TODO"),Object(o.b)("h2",{id:"componentsservices-outside-of-submarine-servers-scope"},"Components/services outside of Submarine Server's scope"),Object(o.b)("p",null,"TODO: Describe what are the out-of-scope components, which should be handled and managed outside of Submarine server. Candidates are: Identity management, data storage, metastore storage, etc."))}u.isMDXComponent=!0},207:function(e,n,r){"use strict";r.d(n,"a",(function(){return b})),r.d(n,"b",(function(){return p}));var t=r(0),a=r.n(t);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),u=function(e){var n=a.a.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},b=function(e){var n=u(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=u(r),d=t,p=b["".concat(i,".").concat(d)]||b[d]||m[d]||o;return r?a.a.createElement(p,s(s({ref:n},l),{},{components:r})):a.a.createElement(p,s({ref:n},l))}));function p(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:t,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);