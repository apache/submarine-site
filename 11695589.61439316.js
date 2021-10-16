(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{204:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return d}));var a=t(0),r=t.n(a);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function m(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?m(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=r.a.createContext({}),b=function(e){var n=r.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=b(e.components);return r.a.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},o=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,m=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=b(t),o=a,d=u["".concat(m,".").concat(o)]||u[o]||s[o]||l;return t?r.a.createElement(d,i(i({ref:n},p),{},{components:t})):r.a.createElement(d,i({ref:n},p))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,m=new Array(l);m[0]=o;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,m[1]=i;for(var p=2;p<l;p++)m[p]=t[p];return r.a.createElement.apply(null,m)}return r.a.createElement.apply(null,t)}o.displayName="MDXCreateElement"},74:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return m})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return b}));var a=t(3),r=t(7),l=(t(0),t(204)),m={title:"Experiment REST API"},i={unversionedId:"userDocs/api/experiment",id:"userDocs/api/experiment",isDocsHomePage:!1,title:"Experiment REST API",description:"\x3c!--",source:"@site/docs/userDocs/api/experiment.md",slug:"/userDocs/api/experiment",permalink:"/docs/next/userDocs/api/experiment",editUrl:"https://github.com/apache/submarine/edit/master/website/docs/userDocs/api/experiment.md",version:"current",sidebar:"docs",previous:{title:"Jupyter Notebook",permalink:"/docs/next/gettingStarted/notebook"},next:{title:"Environment REST API",permalink:"/docs/next/userDocs/api/environment"}},c=[{value:"Create Experiment (Using Anonymous/Embedded Environment)",id:"create-experiment-using-anonymousembedded-environment",children:[{value:"Parameters",id:"parameters",children:[]},{value:"Code Example",id:"code-example",children:[]}]},{value:"Create Experiment (Using Pre-defined/Stored Environment)",id:"create-experiment-using-pre-definedstored-environment",children:[{value:"Parameters",id:"parameters-1",children:[]},{value:"Code Example",id:"code-example-1",children:[]}]},{value:"List Experiment",id:"list-experiment",children:[{value:"Code Example",id:"code-example-2",children:[]}]},{value:"Get Experiment",id:"get-experiment",children:[{value:"Parameters",id:"parameters-2",children:[]},{value:"Code Example",id:"code-example-3",children:[]}]},{value:"Patch Experiment",id:"patch-experiment",children:[{value:"Parameters",id:"parameters-3",children:[]},{value:"Code Example",id:"code-example-4",children:[]},{value:"Delete Experiment",id:"delete-experiment",children:[]},{value:"Parameters",id:"parameters-4",children:[]},{value:"Code Example",id:"code-example-5",children:[]}]},{value:"List Experiment Log",id:"list-experiment-log",children:[{value:"Code Example",id:"code-example-6",children:[]}]},{value:"Get Experiment Log",id:"get-experiment-log",children:[{value:"Parameters",id:"parameters-5",children:[]},{value:"Code Example",id:"code-example-7",children:[]}]}],p={toc:c};function b(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"create-experiment-using-anonymousembedded-environment"},"Create Experiment (Using Anonymous/Embedded Environment)"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-sh"},"POST /api/v1/experiment\n")),Object(l.b)("h3",{id:"parameters"},"Parameters"),Object(l.b)("p",null,"Put ExperimentSpec in request body."),Object(l.b)("h4",{id:"experimentspec"},Object(l.b)("strong",{parentName:"h4"},"ExperimentSpec")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Field Name"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"meta"),Object(l.b)("td",{parentName:"tr",align:null},"ExperimentMeta"),Object(l.b)("td",{parentName:"tr",align:null},"Meta data of the experiment template.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"environment"),Object(l.b)("td",{parentName:"tr",align:null},"EnvironmentSpec"),Object(l.b)("td",{parentName:"tr",align:null},"Environment of the experiment template.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"spec"),Object(l.b)("td",{parentName:"tr",align:null},"Map<String, ExperimentTaskSpec>"),Object(l.b)("td",{parentName:"tr",align:null},"Spec of pods.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"code"),Object(l.b)("td",{parentName:"tr",align:null},"CodeSpec"),Object(l.b)("td",{parentName:"tr",align:null},"Experiment codespec.")))),Object(l.b)("h4",{id:"experimentmeta"},Object(l.b)("strong",{parentName:"h4"},"ExperimentMeta")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Field Name"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"name"),Object(l.b)("td",{parentName:"tr",align:null},"String"),Object(l.b)("td",{parentName:"tr",align:null},"Experiment name.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"namespace"),Object(l.b)("td",{parentName:"tr",align:null},"String"),Object(l.b)("td",{parentName:"tr",align:null},"Experiment namespace.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"framework"),Object(l.b)("td",{parentName:"tr",align:null},"String"),Object(l.b)("td",{parentName:"tr",align:null},"Experiemnt framework.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"cmd"),Object(l.b)("td",{parentName:"tr",align:null},"String"),Object(l.b)("td",{parentName:"tr",align:null},"Command.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"envVars"),Object(l.b)("td",{parentName:"tr",align:null},"Map<String, String>"),Object(l.b)("td",{parentName:"tr",align:null},"Environmental variables.")))),Object(l.b)("h4",{id:"environmentspec"},Object(l.b)("strong",{parentName:"h4"},"EnvironmentSpec")),Object(l.b)("p",null,"There are two types of environment: Anonymous and Predefined."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Anonymous environment: only specify ",Object(l.b)("inlineCode",{parentName:"li"},"dockerImage")," in environment spec. The container will be built on the docker image."),Object(l.b)("li",{parentName:"ul"},"Embedded environment: specify ",Object(l.b)("inlineCode",{parentName:"li"},"name")," in environment spec. The container will be built on the existing environment (including dockerImage and kernalSpec).")),Object(l.b)("p",null,"See more details in ",Object(l.b)("a",{parentName:"p",href:"https://submarine.apache.org/docs/userDocs/api/environment"},"environment api"),"."),Object(l.b)("h4",{id:"experimenttaskspec"},Object(l.b)("strong",{parentName:"h4"},"ExperimentTaskSpec")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Field Name"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"replicas"),Object(l.b)("td",{parentName:"tr",align:null},"Integer"),Object(l.b)("td",{parentName:"tr",align:null},"Numbers of replicas.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"resoureces"),Object(l.b)("td",{parentName:"tr",align:null},"String"),Object(l.b)("td",{parentName:"tr",align:null},"Resouces of the task")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"name"),Object(l.b)("td",{parentName:"tr",align:null},"String"),Object(l.b)("td",{parentName:"tr",align:null},"Task name.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"image"),Object(l.b)("td",{parentName:"tr",align:null},"String"),Object(l.b)("td",{parentName:"tr",align:null},"Image name.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"cmd"),Object(l.b)("td",{parentName:"tr",align:null},"String"),Object(l.b)("td",{parentName:"tr",align:null},"Command.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"envVars"),Object(l.b)("td",{parentName:"tr",align:null},"Map<String, String>"),Object(l.b)("td",{parentName:"tr",align:null},"Environmental variables.")))),Object(l.b)("h4",{id:"codespec"},Object(l.b)("strong",{parentName:"h4"},"CodeSpec")),Object(l.b)("p",null,"Currently only support pulling from github. HDFS, NFS and s3 are in development"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Field Name"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"syncMode"),Object(l.b)("td",{parentName:"tr",align:null},"String ","(","git","|","hdfs","|","nfs","|","s3",")"),Object(l.b)("td",{parentName:"tr",align:null},"sync mode of code spec.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"url"),Object(l.b)("td",{parentName:"tr",align:null},"String"),Object(l.b)("td",{parentName:"tr",align:null},"url of code spec.")))),Object(l.b)("h3",{id:"code-example"},"Code Example"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"shell")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-sh"},'curl -X POST -H "Content-Type: application/json" -d \'\n{\n  "meta": {\n    "name": "tf-mnist-json",\n    "namespace": "default",\n    "framework": "TensorFlow",\n    "cmd": "python /var/tf_mnist/mnist_with_summaries.py --log_dir=/train/log --learning_rate=0.01 --batch_size=150",\n    "envVars": {\n      "ENV_1": "ENV1"\n    }\n  },\n  "environment": {\n    "image": "apache/submarine:tf-mnist-with-summaries-1.0"\n  },\n  "spec": {\n    "Ps": {\n      "replicas": 1,\n      "resources": "cpu=1,memory=1024M"\n    },\n    "Worker": {\n      "replicas": 1,\n      "resources": "cpu=1,memory=2048M"\n    }\n  }\n}\n\' http://127.0.0.1:32080/api/v1/experiment\n')),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"response")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-json"},'{\n  "status":"OK",\n  "code":200,\n  "success":true,\n  "message":null,\n  "result":{\n    "experimentId":"experiment_1626160071451_0002",\n    "name":"tf-mnist-json",\n    "uid":"5a6ec922-6c90-43d4-844f-039f6804ed36",\n    "status":"Accepted",\n    "acceptedTime":"2021-07-13T16:47:51.000+08:00",\n    "createdTime":null,\n    "runningTime":null,\n    "finishedTime":null,\n    "spec":{\n      "meta":{\n        "name":"tf-mnist-json",\n        "namespace":"default",\n        "framework":"TensorFlow",\n        "cmd":"python /var/tf_mnist/mnist_with_summaries.py --log_dir\\u003d/train/log --learning_rate\\u003d0.01 --batch_size\\u003d150",\n        "envVars":{"ENV_1":"ENV1"}\n      },\n      "environment":{\n        "name":null,\n        "dockerImage":null,\n        "kernelSpec":null,\n        "description":null,\n        "image":"apache/submarine:tf-mnist-with-summaries-1.0"\n      },\n      "spec":{\n        "Ps":{\n          "replicas":1,\n          "resources":"cpu\\u003d1,memory\\u003d1024M",\n          "name":null,\n          "image":null,\n          "cmd":null,\n          "envVars":null,\n          "resourceMap":{"memory":"1024M","cpu":"1"}\n        },\n        "Worker":{\n          "replicas":1,\n          "resources":"cpu\\u003d1,memory\\u003d2048M",\n          "name":null,\n          "image":null,\n          "cmd":null,\n          "envVars":null,\n          "resourceMap":{"memory":"2048M","cpu":"1"}\n        }\n      },\n      "code":null\n    }\n  },\n  "attributes":{}\n}\n')),Object(l.b)("h2",{id:"create-experiment-using-pre-definedstored-environment"},"Create Experiment (Using Pre-defined/Stored Environment)"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"POST /api/v1/experiment\n")),Object(l.b)("h3",{id:"parameters-1"},"Parameters"),Object(l.b)("p",null,"Put ExperimentSpec in request body."),Object(l.b)("h3",{id:"code-example-1"},"Code Example"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"shell")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-sh"},'curl -X POST -H "Content-Type: application/json" -d \'\n{\n  "meta": {\n    "name": "tf-mnist-json",\n    "namespace": "default",\n    "framework": "TensorFlow",\n    "cmd": "python /var/tf_mnist/mnist_with_summaries.py --log_dir=/train/log --learning_rate=0.01 --batch_size=150",\n    "envVars": {\n      "ENV_1": "ENV1"\n    }\n  },\n  "environment": {\n    "name": "my-submarine-env"\n  },\n  "spec": {\n    "Ps": {\n      "replicas": 1,\n      "resources": "cpu=1,memory=1024M"\n    },\n    "Worker": {\n      "replicas": 1,\n      "resources": "cpu=1,memory=2048M"\n    }\n  }\n}\n\' http://127.0.0.1:32080/api/v1/experiment\n')),Object(l.b)("p",null,'Above example assume environment "my-submarine-env" already exists in Submarine. Please refer Environment API Reference doc to ',Object(l.b)("a",{parentName:"p",href:"https://submarine.apache.org/docs/userDocs/api/environment"},"environment rest api"),"."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"response")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-json"},'{\n  "status":"OK",\n  "code":200,\n  "success":true,\n  "message":null,\n  "result":{\n    "experimentId":"experiment_1626160071451_0005",\n    "name":"tf-mnist-json",\n    "uid":"4944c603-0f21-49e5-826a-2ff820bb4d93",\n    "status":"Accepted",\n    "acceptedTime":"2021-07-13T16:57:27.000+08:00",\n    "createdTime":null,\n    "runningTime":null,\n    "finishedTime":null,\n    "spec":{\n      "meta":{\n        "name":"tf-mnist-json",\n        "namespace":"default",\n        "framework":"TensorFlow",\n        "cmd":"python /var/tf_mnist/mnist_with_summaries.py --log_dir\\u003d/train/log --learning_rate\\u003d0.01 --batch_size\\u003d150",\n        "envVars":{"ENV_1":"ENV1"}\n      },\n      "environment":{\n        "name":"my-submarine-env",\n        "dockerImage":null,\n        "kernelSpec":null,\n        "description":null,\n        "image":null\n      },\n      "spec":{\n        "Ps":{\n          "replicas":1,\n          "resources":"cpu\\u003d1,memory\\u003d1024M",\n          "name":null,\n          "image":null,\n          "cmd":null,\n          "envVars":null,\n          "resourceMap":{"memory":"1024M","cpu":"1"}\n        },\n        "Worker":{\n          "replicas":1,\n          "resources":"cpu\\u003d1,memory\\u003d2048M",\n          "name":null,\n          "image":null,\n          "cmd":null,\n          "envVars":null,\n          "resourceMap":{"memory":"2048M","cpu":"1"}\n        }\n      },\n      "code":null\n    }\n  },\n  "attributes":{}\n}\n')),Object(l.b)("h2",{id:"list-experiment"},"List Experiment"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"GET /api/v1/experiment\n")),Object(l.b)("h3",{id:"code-example-2"},"Code Example"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"shell")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-sh"},"curl -X GET http://127.0.0.1:32080/api/v1/experiment\n")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"response")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-json"},'{\n  "status":"OK",\n  "code":200,\n  "success":true,\n  "message":null,\n  "result":\n  [{\n    "experimentId":"experiment_1626160071451_0001",\n    "name":"newexperiment1",\n    "uid":"b895985c-411c-4e89-90e0-c60a2a8a4235",\n    "status":"Succeeded",\n    "acceptedTime":"2021-07-13T16:21:31.000+08:00",\n    "createdTime":"2021-07-13T16:21:31.000+08:00",\n    "runningTime":"2021-07-13T16:21:46.000+08:00",\n    "finishedTime":"2021-07-13T16:26:54.000+08:00",\n    "spec":{\n      "meta":{\n        "name":"newexperiment1",\n        "namespace":"default",\n        "framework":"TensorFlow",\n        "cmd":"python /var/tf_mnist/mnist_with_summaries.py --log_dir\\u003d/train/log --learning_rate\\u003d0.01 --batch_size\\u003d150",\n        "envVars":{"ENV1":"ENV1"}\n      },\n      "environment":{\n        "name":null,\n        "dockerImage":null,\n        "kernelSpec":null,\n        "description":null,\n        "image":"apache/submarine:tf-mnist-with-summaries-1.0"\n      },\n      "spec":{\n        "Ps":{\n          "replicas":1,\n          "resources":"cpu\\u003d1,memory\\u003d1024M",\n          "name":null,\n          "image":null,\n          "cmd":null,\n          "envVars":null,\n          "resourceMap":{"memory":"1024M","cpu":"1"}\n        },\n        "Worker":{\n          "replicas":1,\n          "resources":"cpu\\u003d1,memory\\u003d1024M",\n          "name":null,\n          "image":null,\n          "cmd":null,\n          "envVars":null,\n          "resourceMap":{"memory":"1024M","cpu":"1"}\n        }\n      },\n      "code":null\n    }\n  },\n  {\n    "experimentId":"experiment_1626160071451_0005",\n    "name":"tf-mnist-json",\n    "uid":"4944c603-0f21-49e5-826a-2ff820bb4d93",\n    "status":"Accepted",\n    "acceptedTime":"2021-07-13T16:57:27.000+08:00",\n    "createdTime":null,\n    "runningTime":null,\n    "finishedTime":null,\n    "spec":{\n      "meta":{\n        "name":"tf-mnist-json",\n        "namespace":"default",\n        "framework":"TensorFlow",\n        "cmd":"python /var/tf_mnist/mnist_with_summaries.py --log_dir\\u003d/train/log --learning_rate\\u003d0.01 --batch_size\\u003d150",\n        "envVars":{"ENV_1":"ENV1"}\n      },\n      "environment":{\n        "name":"my-submarine-env",\n        "dockerImage":null,\n        "kernelSpec":null,\n        "description":null,\n        "image":null\n      },\n      "spec":{\n        "Ps":{\n          "replicas":1,\n          "resources":"cpu\\u003d1,memory\\u003d1024M",\n          "name":null,\n          "image":null,\n          "cmd":null,\n          "envVars":null,\n          "resourceMap":{"memory":"1024M","cpu":"1"}\n        },\n        "Worker":{\n          "replicas":1,\n          "resources":"cpu\\u003d1,memory\\u003d2048M",\n          "name":null,\n          "image":null,\n          "cmd":null,\n          "envVars":null,\n          "resourceMap":{"memory":"2048M","cpu":"1"}\n        }\n      },\n      "code":null\n    }\n  }],\n  "attributes":{}\n}\n')),Object(l.b)("h2",{id:"get-experiment"},"Get Experiment"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"GET /api/v1/experiment/{id}\n")),Object(l.b)("h3",{id:"parameters-2"},"Parameters"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Field Name"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"In"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"id"),Object(l.b)("td",{parentName:"tr",align:null},"String"),Object(l.b)("td",{parentName:"tr",align:null},"path"),Object(l.b)("td",{parentName:"tr",align:null},"Experiment id.")))),Object(l.b)("h3",{id:"code-example-3"},"Code Example"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"shell")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-sh"},"curl -X GET http://127.0.0.1:32080/api/v1/experiment/experiment_1626160071451_0005\n")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"response")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-json"},'{\n  "status":"OK",\n  "code":200,\n  "success":true,\n  "message":null,\n  "result":{\n    "experimentId":"experiment_1626160071451_0005",\n    "name":"tf-mnist-json",\n    "uid":"4944c603-0f21-49e5-826a-2ff820bb4d93",\n    "status":"Accepted",\n    "acceptedTime":"2021-07-13T16:57:27.000+08:00",\n    "createdTime":null,\n    "runningTime":null,\n    "finishedTime":null,\n    "spec":{\n      "meta":{\n        "name":"tf-mnist-json",\n        "namespace":"default",\n        "framework":"TensorFlow",\n        "cmd":"python /var/tf_mnist/mnist_with_summaries.py --log_dir\\u003d/train/log --learning_rate\\u003d0.01 --batch_size\\u003d150",\n        "envVars":{"ENV_1":"ENV1"}\n      },\n      "environment":{\n        "name":"my-submarine-env",\n        "dockerImage":null,\n        "kernelSpec":null,\n        "description":null,\n        "image":null\n      },\n      "spec":{\n        "Ps":{\n          "replicas":1,\n          "resources":"cpu\\u003d1,memory\\u003d1024M",\n          "name":null,\n          "image":null,\n          "cmd":null,\n          "envVars":null,\n          "resourceMap":{"memory":"1024M","cpu":"1"}\n        },\n        "Worker":{\n          "replicas":1,\n          "resources":"cpu\\u003d1,memory\\u003d2048M",\n          "name":null,\n          "image":null,\n          "cmd":null,\n          "envVars":null,\n          "resourceMap":{"memory":"2048M","cpu":"1"}\n        }\n      },\n      "code":null\n    }\n  },\n  "attributes":{}\n}\n')),Object(l.b)("h2",{id:"patch-experiment"},"Patch Experiment"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"PATCH /api/v1/experiment/{id}\n")),Object(l.b)("h3",{id:"parameters-3"},"Parameters"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Field Name"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"In"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"id"),Object(l.b)("td",{parentName:"tr",align:null},"String"),Object(l.b)("td",{parentName:"tr",align:null},"path"),Object(l.b)("td",{parentName:"tr",align:null},"Experiment id.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"meta"),Object(l.b)("td",{parentName:"tr",align:null},"ExperimentMeta"),Object(l.b)("td",{parentName:"tr",align:null},"body"),Object(l.b)("td",{parentName:"tr",align:null},"Meta data of the experiment template.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"environment"),Object(l.b)("td",{parentName:"tr",align:null},"EnvironmentSpec"),Object(l.b)("td",{parentName:"tr",align:null},"body"),Object(l.b)("td",{parentName:"tr",align:null},"Environment of the experiment template.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"spec"),Object(l.b)("td",{parentName:"tr",align:null},"Map<String, ExperimentTaskSpec>"),Object(l.b)("td",{parentName:"tr",align:null},"body"),Object(l.b)("td",{parentName:"tr",align:null},"Spec of pods.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"code"),Object(l.b)("td",{parentName:"tr",align:null},"CodeSpec"),Object(l.b)("td",{parentName:"tr",align:null},"body"),Object(l.b)("td",{parentName:"tr",align:null},"TODO")))),Object(l.b)("h3",{id:"code-example-4"},"Code Example"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"shell")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-sh"},'curl -X PATCH -H "Content-Type: application/json" -d \'\n{\n  "meta": {\n    "name": "tf-mnist-json",\n    "namespace": "default",\n    "framework": "TensorFlow",\n    "cmd": "python /var/tf_mnist/mnist_with_summaries.py --log_dir=/train/log --learning_rate=0.01 --batch_size=150",\n      "envVars": {\n      "ENV_1": "ENV1"\n    }\n  },\n  "environment": {\n    "image": "apache/submarine:tf-mnist-with-summaries-1.0"\n  },\n  "spec": {\n    "Ps": {\n      "replicas": 1,\n      "resources": "cpu=1,memory=1024M"\n    },\n    "Worker": {\n      "replicas": 2,\n      "resources": "cpu=1,memory=2048M"\n    }\n  }\n}\n\' http://127.0.0.1:32080/api/v1/experiment/experiment_1626160071451_0005\n')),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"response")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-json"},'{\n  "status":"OK",\n  "code":200,\n  "success":true,\n  "message":null,\n  "result":{\n    "experimentId":"experiment_1626160071451_0005",\n    "name":"tf-mnist-json",\n    "uid":"4944c603-0f21-49e5-826a-2ff820bb4d93",\n    "status":"Accepted",\n    "acceptedTime":"2021-07-13T16:57:27.000+08:00",\n    "createdTime":null,\n    "runningTime":null,\n    "finishedTime":null,\n    "spec":{\n      "meta":{\n        "name":"tf-mnist-json",\n        "namespace":"default",\n        "framework":"TensorFlow",\n        "cmd":"python /var/tf_mnist/mnist_with_summaries.py --log_dir\\u003d/train/log --learning_rate\\u003d0.01 --batch_size\\u003d150",\n        "envVars":{"ENV_1":"ENV1"}\n      },\n      "environment":{\n        "name":null,\n        "dockerImage":null,\n        "kernelSpec":null,\n        "description":null,\n        "image":"apache/submarine:tf-mnist-with-summaries-1.0"\n      },\n      "spec":{\n        "Ps":{\n          "replicas":1,\n          "resources":"cpu\\u003d1,memory\\u003d1024M",\n          "name":null,\n          "image":null,\n          "cmd":null,\n          "envVars":null,\n          "resourceMap":{"memory":"1024M","cpu":"1"}\n        },\n        "Worker":{\n          "replicas":2,\n          "resources":"cpu\\u003d1,memory\\u003d2048M",\n          "name":null,\n          "image":null,\n          "cmd":null,\n          "envVars":null,\n          "resourceMap":{"memory":"2048M","cpu":"1"}\n        }\n      },\n      "code":null\n    }\n  },\n  "attributes":{}\n}\n')),Object(l.b)("h3",{id:"delete-experiment"},"Delete Experiment"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"DELETE /api/v1/experiment/{id}\n")),Object(l.b)("h3",{id:"parameters-4"},"Parameters"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Field Name"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"In"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"id"),Object(l.b)("td",{parentName:"tr",align:null},"String"),Object(l.b)("td",{parentName:"tr",align:null},"path"),Object(l.b)("td",{parentName:"tr",align:null},"Experiment id.")))),Object(l.b)("h3",{id:"code-example-5"},"Code Example"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"shell")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-sh"},"curl -X DELETE http://127.0.0.1:32080/api/v1/experiment/experiment_1626160071451_0005\n")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"response")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-json"},'{\n  "status":"OK",\n  "code":200,\n  "success":true,\n  "message":null,\n  "result":{\n    "experimentId":"experiment_1626160071451_0005",\n    "name":"tf-mnist-json",\n    "uid":"4944c603-0f21-49e5-826a-2ff820bb4d93",\n    "status":"Deleted",\n    "acceptedTime":null,\n    "createdTime":null,\n    "runningTime":null,\n    "finishedTime":null,\n    "spec":{\n      "meta":{\n        "name":"tf-mnist-json",\n        "namespace":"default",\n        "framework":"TensorFlow",\n        "cmd":"python /var/tf_mnist/mnist_with_summaries.py --log_dir\\u003d/train/log --learning_rate\\u003d0.01 --batch_size\\u003d150",\n        "envVars":{"ENV_1":"ENV1"}\n      },\n      "environment":{\n        "name":null,\n        "dockerImage":null,\n        "kernelSpec":null,\n        "description":null,\n        "image":"apache/submarine:tf-mnist-with-summaries-1.0"\n      },\n      "spec":{\n        "Ps":{\n          "replicas":1,\n          "resources":"cpu\\u003d1,memory\\u003d1024M",\n          "name":null,\n          "image":null,\n          "cmd":null,\n          "envVars":null,\n          "resourceMap":{"memory":"1024M","cpu":"1"}\n        },\n        "Worker":{\n          "replicas":2,\n          "resources":"cpu\\u003d1,memory\\u003d2048M",\n          "name":null,\n          "image":null,\n          "cmd":null,\n          "envVars":null,\n          "resourceMap":{"memory":"2048M","cpu":"1"}\n        }\n      },\n      "code":null\n    }\n  },\n  "attributes":{}\n}\n')),Object(l.b)("h2",{id:"list-experiment-log"},"List Experiment Log"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"GET /api/v1/experiment/logs\n")),Object(l.b)("h3",{id:"code-example-6"},"Code Example"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"shell")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-sh"},"curl -X GET http://127.0.0.1:32080/api/v1/experiment/logs\n")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"response")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-json"},'{\n  "status":"OK",\n  "code":200,\n  "success":true,\n  "message":null,\n  "result":\n  [{\n    "experimentId":"experiment_1626160071451_0001",\n    "logContent":\n    [{\n      "podName":"newexperiment1-ps-0",\n      "podLog":[]\n    },\n    {\n      "podName":"newexperiment1-worker-0",\n      "podLog":[]\n    }]\n  }],\n  "attributes":{}\n}\n')),Object(l.b)("h2",{id:"get-experiment-log"},"Get Experiment Log"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"GET /api/v1/experiment/logs/{id}\n")),Object(l.b)("h3",{id:"parameters-5"},"Parameters"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Field Name"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"In"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"id"),Object(l.b)("td",{parentName:"tr",align:null},"String"),Object(l.b)("td",{parentName:"tr",align:null},"path"),Object(l.b)("td",{parentName:"tr",align:null},"Experiment id.")))),Object(l.b)("h3",{id:"code-example-7"},"Code Example"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"shell")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-sh"},"curl -X GET http://127.0.0.1:32080/api/v1/experiment/logs/experiment_1626160071451_0001\n")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"response")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-json"},'{\n  "status":"OK",\n  "code":200,\n  "success":true,\n  "message":null,\n  "result":{\n    "experimentId":"experiment_1626160071451_0001",\n    "logContent":\n    [{\n      "podName":"newexperiment1-ps-0",\n      "podLog":[]\n    },\n    {\n      "podName":"newexperiment1-worker-0",\n      "podLog":[]\n    }]\n  },\n  "attributes":{}\n}\n')))}b.isMDXComponent=!0}}]);