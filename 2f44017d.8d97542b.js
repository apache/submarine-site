(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{136:function(n,e,t){"use strict";t.d(e,"a",(function(){return b})),t.d(e,"b",(function(){return d}));var a=t(0),r=t.n(a);function o(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function c(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function p(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?c(Object(t),!0).forEach((function(e){o(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function i(n,e){if(null==n)return{};var t,a,r=function(n,e){if(null==n)return{};var t,a,r={},o=Object.keys(n);for(a=0;a<o.length;a++)t=o[a],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(a=0;a<o.length;a++)t=o[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var l=r.a.createContext({}),m=function(n){var e=r.a.useContext(l),t=e;return n&&(t="function"==typeof n?n(e):p(p({},e),n)),t},b=function(n){var e=m(n.components);return r.a.createElement(l.Provider,{value:e},n.children)},u={inlineCode:"code",wrapper:function(n){var e=n.children;return r.a.createElement(r.a.Fragment,{},e)}},s=r.a.forwardRef((function(n,e){var t=n.components,a=n.mdxType,o=n.originalType,c=n.parentName,l=i(n,["components","mdxType","originalType","parentName"]),b=m(t),s=a,d=b["".concat(c,".").concat(s)]||b[s]||u[s]||o;return t?r.a.createElement(d,p(p({ref:e},l),{},{components:t})):r.a.createElement(d,p({ref:e},l))}));function d(n,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var o=t.length,c=new Array(o);c[0]=s;var p={};for(var i in e)hasOwnProperty.call(e,i)&&(p[i]=e[i]);p.originalType=n,p.mdxType="string"==typeof n?n:a,c[1]=p;for(var l=2;l<o;l++)c[l]=t[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"},75:function(n,e,t){"use strict";t.r(e),t.d(e,"frontMatter",(function(){return c})),t.d(e,"metadata",(function(){return p})),t.d(e,"toc",(function(){return i})),t.d(e,"default",(function(){return m}));var a=t(3),r=t(7),o=(t(0),t(136)),c={title:"Environment REST API"},p={unversionedId:"api/environment",id:"api/environment",isDocsHomePage:!1,title:"Environment REST API",description:"\x3c!--",source:"@site/docs/api/environment.md",slug:"/api/environment",permalink:"/docs/api/environment",editUrl:"https://github.com/apache/submarine/edit/master/website/docs/api/environment.md",version:"current",sidebar:"api",next:{title:"Experiment REST API",permalink:"/docs/api/experiment"}},i=[{value:"Create Environment",id:"create-environment",children:[{value:"List environment",id:"list-environment",children:[]},{value:"Get environment",id:"get-environment",children:[]},{value:"Patch environment",id:"patch-environment",children:[]},{value:"Delete environment",id:"delete-environment",children:[]}]}],l={toc:i};function m(n){var e=n.components,t=Object(r.a)(n,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Note: The Environment API is in the alpha stage which is subjected to incompatible changes in\nfuture releases.")),Object(o.b)("h2",{id:"create-environment"},"Create Environment"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"POST /api/v1/environment")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Example Request")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sh"},'curl -X POST -H "Content-Type: application/json" -d \'\n{\n  "name": "my-submarine-env",\n  "dockerImage" : "continuumio/anaconda3",\n  "kernelSpec" : {\n    "name" : "team_default_python_3.7",\n    "channels" : ["defaults"],\n    "dependencies" : \n      ["_ipyw_jlab_nb_ext_conf=0.1.0=py37_0",\n      "alabaster=0.7.12=py37_0",\n      "anaconda=2020.02=py37_0",\n      "anaconda-client=1.7.2=py37_0",\n      "anaconda-navigator=1.9.12=py37_0"]\n  }\n}\n\' http://127.0.0.1:32080/api/v1/environment\n')),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Example Response:")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{\n  "status": "OK",\n  "code": 200,\n  "result": {\n    "environmentId": "environment_1586156073228_0001",\n    "environmentSpec": {\n      "name": "my-submarine-env",\n      "dockerImage" : "continuumio/anaconda3",\n      "kernelSpec" : {\n        "name" : "team_default_python_3.7",\n        "channels" : ["defaults"],\n        "dependencies" : \n          ["_ipyw_jlab_nb_ext_conf=0.1.0=py37_0",\n          "alabaster=0.7.12=py37_0",\n          "anaconda=2020.02=py37_0",\n          "anaconda-client=1.7.2=py37_0",\n          "anaconda-navigator=1.9.12=py37_0"]\n      }\n    }\n  }\n}\n')),Object(o.b)("h3",{id:"list-environment"},"List environment"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"GET /api/v1/environment")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Example Request:")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sh"},"curl -X GET http://127.0.0.1:32080/api/v1/environment\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Example Response:")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{\n  "status": "OK",\n  "code": 200,\n  "result": [\n  {\n    "environmentId": "environment_1586156073228_0001",\n    "environmentSpec": {\n      "name": "my-submarine-env",\n      "dockerImage" : "continuumio/anaconda3",\n      "kernelSpec" : {\n        "name" : "team_default_python_3.7",\n        "channels" : ["defaults"],\n        "dependencies" : \n          ["_ipyw_jlab_nb_ext_conf=0.1.0=py37_0",\n          "alabaster=0.7.12=py37_0",\n          "anaconda=2020.02=py37_0",\n          "anaconda-client=1.7.2=py37_0",\n          "anaconda-navigator=1.9.12=py37_0"]\n      }\n    }\n  },\n  {\n    "environmentId": "environment_1586156073228_0002",\n    "environmentSpec": {\n      "name": "my-submarine-env-2",\n      "dockerImage" : "continuumio/miniconda",\n      "kernelSpec" : {\n        "name" : "team_miniconda_python_3.7",\n        "channels" : ["defaults"],\n        "dependencies" : \n          ["_ipyw_jlab_nb_ext_conf=0.1.0=py37_0"]\n      }\n    }\n  }\n  ]\n}\n')),Object(o.b)("h3",{id:"get-environment"},"Get environment"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"GET /api/v1/environment/{name}")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Example Request:")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sh"},"curl -X GET http://127.0.0.1:32080/api/v1/environment/my-submarine-env\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Example Response:")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{\n  "status": "OK",\n  "code": 200,\n  "result": {\n    "environmentId": "environment_1586156073228_0001",\n    "environmentSpec": {\n      "name": "my-submarine-env",\n      "dockerImage" : "continuumio/anaconda3",\n      "kernelSpec" : {\n        "name" : "team_default_python_3.7",\n        "channels" : ["defaults"],\n        "dependencies" : \n          ["_ipyw_jlab_nb_ext_conf=0.1.0=py37_0",\n          "alabaster=0.7.12=py37_0",\n          "anaconda=2020.02=py37_0",\n          "anaconda-client=1.7.2=py37_0",\n          "anaconda-navigator=1.9.12=py37_0"]\n      }\n    }\n  }\n}\n')),Object(o.b)("h3",{id:"patch-environment"},"Patch environment"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"PATCH /api/v1/environment/{name}")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Example Request:")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sh"},'curl -X PATCH -H "Content-Type: application/json" -d \'\n{\n  "name": "my-submarine-env",\n  "dockerImage" : "continuumio/anaconda3",\n  "kernelSpec" : {\n    "name" : "team_default_python_3.7_updated",\n    "channels" : ["defaults"],\n    "dependencies" : \n      ["_ipyw_jlab_nb_ext_conf=0.1.0=py37_0",\n      "alabaster=0.7.12=py37_0"]\n  }\n}\n\' http://127.0.0.1:32080/api/v1/environment/my-submarine-env\n')),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Example Response:")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{\n  "status": "OK",\n  "code": 200,\n  "success": true,\n  "result": {\n    "environmentId": "environment_1586156073228_0001",\n    "environmentSpec": {\n      "name": "my-submarine-env",\n      "dockerImage" : "continuumio/anaconda3",\n      "kernelSpec" : {\n        "name" : "team_default_python_3.7_updated",\n        "channels" : ["defaults"],\n        "dependencies" : \n          ["_ipyw_jlab_nb_ext_conf=0.1.0=py37_0",\n          "alabaster=0.7.12=py37_0"]\n      }\n    }\n  }\n}\n')),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},'dockerImage, "name" (of kernelSpec), "channels", "dependencies" etc can be updated using this API.\n"name" of EnvironmentSpec is not supported.')),Object(o.b)("h3",{id:"delete-environment"},"Delete environment"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"GET /api/v1/environment/{name}")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Example Request:")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sh"},"curl -X DELETE http://127.0.0.1:32080/api/v1/environment/my-submarine-env\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Example Response:")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{\n  "status": "OK",\n  "code": 200,\n  "result": {\n    "environmentId": "environment_1586156073228_0001",\n    "environmentSpec": {\n      "name": "my-submarine-env",\n      "dockerImage" : "continuumio/anaconda3",\n      "kernelSpec" : {\n        "name" : "team_default_python_3.7_updated",\n        "channels" : ["defaults"],\n        "dependencies" : \n          ["_ipyw_jlab_nb_ext_conf=0.1.0=py37_0",\n          "alabaster=0.7.12=py37_0"]\n      }\n    }\n  }\n}\n')))}m.isMDXComponent=!0}}]);