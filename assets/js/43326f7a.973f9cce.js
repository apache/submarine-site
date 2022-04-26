"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3408],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var o=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=o.createContext({}),l=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=l(e.components);return o.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=l(t),m=a,b=d["".concat(c,".").concat(m)]||d[m]||u[m]||r;return t?o.createElement(b,s(s({ref:n},p),{},{components:t})):o.createElement(b,s({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,s=new Array(r);s[0]=d;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<r;l++)s[l]=t[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5673:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return u}});var o=t(7462),a=t(3366),r=(t(7294),t(3905)),s=["components"],i={title:"Notebook REST API"},c=void 0,l={unversionedId:"api/notebook",id:"version-0.6.0/api/notebook",title:"Notebook REST API",description:"\x3c!--",source:"@site/versioned_docs/version-0.6.0/api/notebook.md",sourceDirName:"api",slug:"/api/notebook",permalink:"/docs/api/notebook",editUrl:"https://github.com/apache/submarine/edit/master/website/versioned_docs/version-0.6.0/api/notebook.md",tags:[],version:"0.6.0",frontMatter:{title:"Notebook REST API"},sidebar:"api",previous:{title:"Experiment Template REST API",permalink:"/docs/api/experiment-template"}},p={},u=[{value:"Create a notebook instance",id:"create-a-notebook-instance",level:2},{value:"List notebook instances which belong to user",id:"list-notebook-instances-which-belong-to-user",level:2},{value:"Get the notebook instance",id:"get-the-notebook-instance",level:2},{value:"Delete the notebook instance",id:"delete-the-notebook-instance",level:2}],d={toc:u};function m(e){var n=e.components,t=(0,a.Z)(e,s);return(0,r.kt)("wrapper",(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: The Notebook API is in the alpha stage which is subjected to incompatible changes in future releases.")),(0,r.kt)("h2",{id:"create-a-notebook-instance"},"Create a notebook instance"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"POST /api/v1/notebook")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example Request")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'curl -X POST -H "Content-Type: application/json" -d \'\n{\n  "meta": {\n    "name": "test-nb",\n    "namespace": "default",\n    "ownerId": "e9ca23d68d884d4ebb19d07889727dae"\n  },\n  "environment": {\n    "name": "notebook-env"\n  },\n  "spec": {\n    "envVars": {\n      "TEST_ENV": "test"\n    },\n    "resources": "cpu=1,memory=1.0Gi"\n  }\n}\n\' http://127.0.0.1:32080/api/v1/notebook\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example Response:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "status":"OK",\n  "code":200,\n  "success":true,\n  "message":"Create a notebook instance",\n  "result":{\n    "notebookId":"notebook_1597931805405_0001",\n    "name":"test-nb",\n    "uid":"5a94c01d-6a92-4222-bc66-c610c277546d",\n    "url":"/notebook/default/test-nb/",\n    "status":"creating",\n    "reason":"The notebook instance is creating",\n    "createdTime":"2020-08-20T21:58:27.000+08:00",\n    "deletedTime":null,\n    "spec":{\n      "meta":{\n        "name":"test-nb",\n        "namespace":"default",\n        "ownerId":"e9ca23d68d884d4ebb19d07889727dae"\n      },\n      "environment":{\n        "name":"notebook-env",\n        "dockerImage":"apache/submarine:jupyter-notebook-0.5.0",\n        "kernelSpec":{\n          "name": "team_default_python_3.7",\n          "channels": [\n            "defaults"\n          ],\n          "dependencies": [\n            ""\n          ]\n        },\n        "description":null,\n        "image":null\n      },\n      "spec":{\n        "envVars":{\n          "TEST_ENV":"test"\n        },\n        "resources":"cpu=1,memory=1.0Gi"\n      }\n    }\n  },\n  "attributes":{}\n}\n')),(0,r.kt)("h2",{id:"list-notebook-instances-which-belong-to-user"},"List notebook instances which belong to user"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"GET /api/v1/notebook")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example Request:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"curl -X GET http://127.0.0.1:32080/api/v1/notebook?id={user_id}\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example Response:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "status":"OK",\n  "code":200,\n  "success":true,\n  "message":"List all notebook instances",\n  "result":[\n    {\n      "notebookId":"notebook_1597931805405_0001",\n      "name":"test-nb",\n      "uid":"5a94c01d-6a92-4222-bc66-c610c277546d",\n      "url":"/notebook/default/test-nb/",\n      "status": "running",\n      "reason": "The notebook instance is running",\n      "createdTime":"2020-08-20T21:58:27.000+08:00",\n      "deletedTime":null,\n      "spec":{\n        "meta":{\n          "name":"test-nb",\n          "namespace":"default",\n          "ownerId":"e9ca23d68d884d4ebb19d07889727dae"\n        },\n        "environment":{\n          "name":"notebook-env",\n          "dockerImage":"apache/submarine:jupyter-notebook-0.5.0",\n          "kernelSpec":{\n            "name": "team_default_python_3.7",\n            "channels": [\n              "defaults"\n            ],\n            "dependencies": [\n              ""\n            ]\n          },\n          "description":null,\n          "image":null\n        },\n        "spec":{\n          "envVars":{\n            "TEST_ENV":"test"\n          },\n          "resources":"cpu=1,memory=1.0Gi"\n        }\n      }\n    }\n  ],\n  "attributes":{}\n}\n')),(0,r.kt)("h2",{id:"get-the-notebook-instance"},"Get the notebook instance"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"GET /api/v1/notebook/{id}")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example Request:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"curl -X GET http://127.0.0.1:32080/api/v1/notebook/{id}\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example Response:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "status":"OK",\n  "code":200,\n  "success":true,\n  "message":"Get the notebook instance",\n  "result":{\n    "notebookId":"notebook_1597931805405_0001",\n    "name":"test-nb",\n    "uid":"5a94c01d-6a92-4222-bc66-c610c277546d",\n    "url":"/notebook/default/test-nb/",\n    "status":"running",\n    "reason":"The notebook instance is running",\n    "createdTime":"2020-08-20T21:58:27.000+08:00",\n    "deletedTime":null,\n    "spec":{\n      "meta":{\n        "name":"test-nb",\n        "namespace":"default",\n        "ownerId":"e9ca23d68d884d4ebb19d07889727dae"\n      },\n      "environment":{\n        "name":"notebook-env",\n        "dockerImage":"apache/submarine:jupyter-notebook-0.5.0",\n        "kernelSpec":{\n          "name": "team_default_python_3.7",\n          "channels": [\n            "defaults"\n          ],\n          "dependencies": [\n            ""\n          ]\n        },\n        "description":null,\n        "image":null\n      },\n      "spec":{\n        "envVars":{\n          "TEST_ENV":"test"\n        },\n        "resources":"cpu=1,memory=1.0Gi"\n      }\n    }\n  },\n  "attributes":{}\n}\n')),(0,r.kt)("h2",{id:"delete-the-notebook-instance"},"Delete the notebook instance"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"DELETE /api/v1/notebook/{id}")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example Request:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"curl -X DELETE http://127.0.0.1:32080/api/v1/notebook/{id}\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example Response:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "status": "OK",\n  "code": 200,\n  "success": true,\n  "message": "Delete the notebook instance",\n  "result": {\n    "notebookId": "notebook_1597931805405_0001",\n    "name": "test-nb",\n    "uid": "5a94c01d-6a92-4222-bc66-c610c277546d",\n    "url": "/notebook/default/test-nb/",\n    "status": "terminating",\n    "reason": "The notebook instance is terminating",\n    "createdTime": "2020-08-22T14:03:19.000+08:00",\n    "deletedTime": "2020-08-22T14:46:28+0800",\n    "spec": {\n      "meta": {\n        "name": "test-nb",\n        "namespace": "default",\n        "ownerId":"e9ca23d68d884d4ebb19d07889727dae"\n      },\n      "environment": {\n        "name": "notebook-env",\n        "dockerImage": "apache/submarine:jupyter-notebook-0.5.0",\n        "kernelSpec": {\n          "name": "team_default_python_3.7",\n          "channels": [\n            "defaults"\n          ],\n          "dependencies": [\n            ""\n          ]\n        },\n        "description": null,\n        "image": null\n      },\n      "spec": {\n        "envVars": {\n          "TEST_ENV": "test"\n        },\n        "resources": "cpu=1,memory=1.0Gi"\n      }\n    }\n  },\n  "attributes": {}\n}\n')))}m.isMDXComponent=!0}}]);