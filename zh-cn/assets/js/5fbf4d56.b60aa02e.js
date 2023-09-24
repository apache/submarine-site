"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2488],{3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return g}});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function m(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var d=n.createContext({}),p=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},o=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,d=e.parentName,s=m(e,["components","mdxType","originalType","parentName"]),o=p(a),g=l,k=o["".concat(d,".").concat(g)]||o[g]||u[g]||r;return a?n.createElement(k,i(i({ref:t},s),{},{components:a})):n.createElement(k,i({ref:t},s))}));function g(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=o;var m={};for(var d in t)hasOwnProperty.call(t,d)&&(m[d]=t[d]);m.originalType=e,m.mdxType="string"==typeof e?e:l,i[1]=m;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}o.displayName="MDXCreateElement"},2724:function(e,t,a){a.r(t),a.d(t,{assets:function(){return s},contentTitle:function(){return d},default:function(){return g},frontMatter:function(){return m},metadata:function(){return p},toc:function(){return u}});var n=a(7462),l=a(3366),r=(a(7294),a(3905)),i=["components"],m={title:"Register Model REST API"},d=void 0,p={unversionedId:"api/register-model",id:"version-0.8.0/api/register-model",title:"Register Model REST API",description:"\x3c!--",source:"@site/versioned_docs/version-0.8.0/api/register-model.md",sourceDirName:"api",slug:"/api/register-model",permalink:"/zh-cn/docs/api/register-model",editUrl:"https://github.com/apache/submarine/edit/master/website/versioned_docs/version-0.8.0/api/register-model.md",tags:[],version:"0.8.0",frontMatter:{title:"Register Model REST API"},sidebar:"api",previous:{title:"Notebook REST API",permalink:"/zh-cn/docs/api/notebook"},next:{title:"Model Version REST API",permalink:"/zh-cn/docs/api/model-version"}},s={},u=[{value:"Create a registered model",id:"create-a-registered-model",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Example",id:"example",level:3},{value:"List registered models",id:"list-registered-models",level:3},{value:"Example",id:"example-1",level:3},{value:"Get a registered model",id:"get-a-registered-model",level:3},{value:"Parameters",id:"parameters-1",level:3},{value:"Example",id:"example-2",level:3},{value:"Patch a registered model",id:"patch-a-registered-model",level:2},{value:"Parameters",id:"parameters-2",level:3},{value:"Example",id:"example-3",level:3},{value:"Delete a registered model",id:"delete-a-registered-model",level:2},{value:"Parameters",id:"parameters-3",level:3},{value:"Example",id:"example-4",level:3},{value:"Create a registered model tag",id:"create-a-registered-model-tag",level:2},{value:"Parameters",id:"parameters-4",level:3},{value:"Example",id:"example-5",level:3},{value:"Delete a registered model tag",id:"delete-a-registered-model-tag",level:2},{value:"Parameters",id:"parameters-5",level:3},{value:"Example",id:"example-6",level:3}],o={toc:u};function g(e){var t=e.components,a=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The Registered Model API is in the alpha stage which is subjected to incompatible changes in future releases."))),(0,r.kt)("h2",{id:"create-a-registered-model"},"Create a registered model"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"POST /api/v1/registered-model")),(0,r.kt)("h3",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Registered model name."),(0,r.kt)("td",{parentName:"tr",align:"center"},"o")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"description"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Registered model description."),(0,r.kt)("td",{parentName:"tr",align:"center"},"x")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tags"),(0,r.kt)("td",{parentName:"tr",align:null},"List<String",">"),(0,r.kt)("td",{parentName:"tr",align:null},"Registered model tags."),(0,r.kt)("td",{parentName:"tr",align:"center"},"x")))),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Example Request"),(0,r.kt)("div",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl -X POST -H "Content-Type: application/json" -d \'\n{\n   "name": "example_name",\n   "description": "example_description",\n   "tags": ["123", "456"]\n   }\n\' http://127.0.0.1:32080/api/v1/registered-model\n')))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Example Response"),(0,r.kt)("div",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "status":"OK",\n    "code":200,\n    "success":true,\n    "message":"Create a registered model instance",\n    "result":null,\n    "attributes":{}\n}\n')))),(0,r.kt)("h3",{id:"list-registered-models"},"List registered models"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"GET /api/v1/registered-model")),(0,r.kt)("h3",{id:"example-1"},"Example"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Example Request"),(0,r.kt)("div",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl -X GET http://127.0.0.1:32080/api/v1/registered-model\n")))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Example Response"),(0,r.kt)("div",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "attributes" : {},\n   "code" : 200,\n   "message" : "List all registered model instances",\n   "result" : [\n      {\n         "creationTime" : "2021-12-16 10:14:06",\n         "description" : "example_description",\n         "lastUpdatedTime" : "2021-12-16 10:14:06",\n         "name" : "example_name",\n         "tags" : [\n            "123",\n            "456"\n         ]\n      },\n      {\n         "creationTime" : "2021-12-16 10:16:25",\n         "description" : "example_description",\n         "lastUpdatedTime" : "2021-12-16 10:16:25",\n         "name" : "example_name1",\n         "tags" : [\n            "123",\n            "456"\n         ]\n      },\n      {\n         "creationTime" : "2021-12-12 02:27:05",\n         "description" : null,\n         "lastUpdatedTime" : "2021-12-14 12:49:33",\n         "name" : "register",\n         "tags" : []\n      }\n   ],\n   "status" : "OK",\n   "success" : true\n}\n')))),(0,r.kt)("h3",{id:"get-a-registered-model"},"Get a registered model"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"GET /api/v1/registered-model/{name}")),(0,r.kt)("h3",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"In"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"path"),(0,r.kt)("td",{parentName:"tr",align:null},"registered model name."),(0,r.kt)("td",{parentName:"tr",align:"center"},"o")))),(0,r.kt)("h3",{id:"example-2"},"Example"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Example Request"),(0,r.kt)("div",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl -X GET http://127.0.0.1:32080/api/v1/registered-model/example_name\n")))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Example Response"),(0,r.kt)("div",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "attributes" : {},\n   "code" : 200,\n   "message" : "Get the registered model instance",\n   "result" : {\n      "creationTime" : "2021-12-16 10:14:06",\n      "description" : "example_description",\n      "lastUpdatedTime" : "2021-12-16 10:14:06",\n      "name" : "example_name",\n      "tags" : [\n         "123",\n         "456"\n      ]\n   },\n   "status" : "OK",\n   "success" : true\n}\n')))),(0,r.kt)("h2",{id:"patch-a-registered-model"},"Patch a registered model"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"PATCH /api/v1/registered-model/{name}")),(0,r.kt)("h3",{id:"parameters-2"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"In"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"path"),(0,r.kt)("td",{parentName:"tr",align:null},"registered model name."),(0,r.kt)("td",{parentName:"tr",align:"center"},"o")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"body"),(0,r.kt)("td",{parentName:"tr",align:null},"New model name."),(0,r.kt)("td",{parentName:"tr",align:"center"},"x")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"description"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"path"),(0,r.kt)("td",{parentName:"tr",align:null},"New model description."),(0,r.kt)("td",{parentName:"tr",align:"center"},"x")))),(0,r.kt)("h3",{id:"example-3"},"Example"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Example Request"),(0,r.kt)("div",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl -X PATCH -H "Content-Type: application/json" -d \'\n{\n    "name": "new_name",\n    "description": "new_description"\n}\' http://127.0.0.1:32080/api/v1/registered-model/example_name\n')))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Example Response"),(0,r.kt)("div",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "attributes" : {},\n   "code" : 200,\n   "message" : "Update the registered model instance",\n   "result" : null,\n   "status" : "OK",\n   "success" : true\n}\n')))),(0,r.kt)("h2",{id:"delete-a-registered-model"},"Delete a registered model"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"DELETE /api/v1/registered-model/{name}")),(0,r.kt)("h3",{id:"parameters-3"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"In"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"path"),(0,r.kt)("td",{parentName:"tr",align:null},"registered model name."),(0,r.kt)("td",{parentName:"tr",align:"center"},"o")))),(0,r.kt)("h3",{id:"example-4"},"Example"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Example Request"),(0,r.kt)("div",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl -X DELETE http://127.0.0.1:32080/api/v1/registered-model/example_name\n")))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Example Response"),(0,r.kt)("div",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "attributes" : {},\n   "code" : 200,\n   "message" : "Delete the registered model instance",\n   "result" : null,\n   "status" : "OK",\n   "success" : true\n}\n')))),(0,r.kt)("h2",{id:"create-a-registered-model-tag"},"Create a registered model tag"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"POST /api/v1/registered-model/tag?name={name}&tag={tag}")),(0,r.kt)("h3",{id:"parameters-4"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"In"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"query"),(0,r.kt)("td",{parentName:"tr",align:null},"registered model name."),(0,r.kt)("td",{parentName:"tr",align:"center"},"o")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tag"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"query"),(0,r.kt)("td",{parentName:"tr",align:null},"Add a tag for the registered model."),(0,r.kt)("td",{parentName:"tr",align:"center"},"o")))),(0,r.kt)("h3",{id:"example-5"},"Example"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Example Request"),(0,r.kt)("div",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl -X POST http://127.0.0.1:32080/api/v1/registered-model/tag?name=example_name&tag=example_tag\n")))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Example Response"),(0,r.kt)("div",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "status":"OK",\n    "code":200,\n    "success":true,\n    "message":"Create a registered model tag instance",\n    "result":null,\n    "attributes":{}\n}\n')))),(0,r.kt)("h2",{id:"delete-a-registered-model-tag"},"Delete a registered model tag"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"DELETE /api/v1/registered-model/tag?name={name}&tag={tag}")),(0,r.kt)("h3",{id:"parameters-5"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"In"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"query"),(0,r.kt)("td",{parentName:"tr",align:null},"registered model name."),(0,r.kt)("td",{parentName:"tr",align:"center"},"o")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tag"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"query"),(0,r.kt)("td",{parentName:"tr",align:null},"Delete a tag in the registered model."),(0,r.kt)("td",{parentName:"tr",align:"center"},"o")))),(0,r.kt)("h3",{id:"example-6"},"Example"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Example Request"),(0,r.kt)("div",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl -X DELETE http://127.0.0.1:32080/api/v1/registered-model/tag?name=example_name&tag=example_tag\n")))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Example Response"),(0,r.kt)("div",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "attributes" : {},\n   "code" : 200,\n   "message" : "Delete a registered model tag instance",\n   "result" : null,\n   "status" : "OK",\n   "success" : true\n}\n')))))}g.isMDXComponent=!0}}]);