"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7847],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return k}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=s(n),k=a,d=c["".concat(p,".").concat(k)]||c[k]||u[k]||i;return n?r.createElement(d,l(l({ref:t},m),{},{components:n})):r.createElement(d,l({ref:t},m))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},611:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return u}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),l=["components"],o={title:"Experiment Client"},p=void 0,s={unversionedId:"userDocs/submarine-sdk/experiment-client",id:"userDocs/submarine-sdk/experiment-client",title:"Experiment Client",description:"\x3c!--",source:"@site/docs/userDocs/submarine-sdk/experiment-client.md",sourceDirName:"userDocs/submarine-sdk",slug:"/userDocs/submarine-sdk/experiment-client",permalink:"/docs/next/userDocs/submarine-sdk/experiment-client",editUrl:"https://github.com/apache/submarine/edit/master/website/docs/userDocs/submarine-sdk/experiment-client.md",tags:[],version:"current",frontMatter:{title:"Experiment Client"},sidebar:"docs",previous:{title:"Custom Configuation",permalink:"/docs/next/gettingStarted/helm"},next:{title:"Submarine CLI",permalink:"/docs/next/userDocs/submarine-sdk/submarine-cli"}},m={},u=[{value:"class ExperimentClient()",id:"class-experimentclient",level:2},{value:"<code>create_experiment(experiment_spec: json) -&gt; dict</code>",id:"create_experimentexperiment_spec-json---dict",level:3},{value:"<code>patch_experiment(id: str, experiment_spec: json) -&gt; dict</code>",id:"patch_experimentid-str-experiment_spec-json---dict",level:3},{value:"<code>get_experiment(id: str) -&gt; dict</code>",id:"get_experimentid-str---dict",level:3},{value:"<code>list_experiments(status: Optional[str]=None) -&gt; list[dict]</code>",id:"list_experimentsstatus-optionalstrnone---listdict",level:3},{value:"<code>delete_experiment(id: str) -&gt; dict</code>",id:"delete_experimentid-str---dict",level:3},{value:"<code>get_log(id: str, onlyMaster: Optional[bool]=False) -&gt; None</code>",id:"get_logid-str-onlymaster-optionalboolfalse---none",level:3},{value:"<code>list_log(status: str) -&gt; list[dict]</code>",id:"list_logstatus-str---listdict",level:3},{value:"<code>wait_for_finish(id: str, polling_interval: Optional[int]=10) -&gt; dict</code>",id:"wait_for_finishid-str-polling_interval-optionalint10---dict",level:3}],c={toc:u};function k(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"class-experimentclient"},"class ExperimentClient()"),(0,i.kt)("p",null,"Client of a submarine server that creates and manages experients and logs."),(0,i.kt)("h3",{id:"create_experimentexperiment_spec-json---dict"},(0,i.kt)("inlineCode",{parentName:"h3"},"create_experiment(experiment_spec: json) -> dict")),(0,i.kt)("p",null,"Create an experiment."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Parameters")),(0,i.kt)("ul",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"experiment_spec"),": Submarine experiment spec. More detailed information can be found at ",(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/experiment"},"Experiment API"),"."))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Returns"),": The detailed info about the submarine experiment.")),(0,i.kt)("p",null,"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'from submarine import *\nclient = ExperimentClient()\nclient.create_experiment({\n  "meta": {\n    "name": "tf-mnist-json",\n    "namespace": "default",\n    "framework": "TensorFlow",\n    "cmd": "python /var/tf_mnist/mnist_with_summaries.py --log_dir=/train/log --learning_rate=0.01 --batch_size=150",\n    "envVars": {\n      "ENV_1": "ENV1"\n    }\n  },\n  "environment": {\n    "image": "apache/submarine:tf-mnist-with-summaries-1.0"\n  },\n  "spec": {\n    "Ps": {\n      "replicas": 1,\n      "resources": "cpu=1,memory=1024M"\n    },\n    "Worker": {\n      "replicas": 1,\n      "resources": "cpu=1,memory=1024M"\n    }\n  }\n})\n')),(0,i.kt)("h3",{id:"patch_experimentid-str-experiment_spec-json---dict"},(0,i.kt)("inlineCode",{parentName:"h3"},"patch_experiment(id: str, experiment_spec: json) -> dict")),(0,i.kt)("p",null,"Patch an experiment."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Parameters")),(0,i.kt)("ul",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"id"),": Submarine experiment id. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"experiment_spec"),": Submarine experiment spec. More detailed information can be found at ",(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/experiment"},"Experiment API"),"."))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Returns")),(0,i.kt)("ul",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ul"},"The detailed info about the submarine experiment."))),(0,i.kt)("p",null,"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'client.patch_experiment("experiment_1626160071451_0008", {\n  "meta": {\n    "name": "tf-mnist-json",\n    "namespace": "default",\n    "framework": "TensorFlow",\n    "cmd": "python /var/tf_mnist/mnist_with_summaries.py --log_dir=/train/log --learning_rate=0.01 --batch_size=150",\n    "envVars": {\n      "ENV_1": "ENV1"\n    }\n  },\n  "environment": {\n    "image": "apache/submarine:tf-mnist-with-summaries-1.0"\n  },\n  "spec": {\n    "Worker": {\n      "replicas": 2,\n      "resources": "cpu=1,memory=1024M"\n    }\n  }\n})\n')),(0,i.kt)("h3",{id:"get_experimentid-str---dict"},(0,i.kt)("inlineCode",{parentName:"h3"},"get_experiment(id: str) -> dict")),(0,i.kt)("p",null,"Get the experiment's detailed info by id."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Parameters")),(0,i.kt)("ul",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"id"),": Submarine experiment id."))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Returns")),(0,i.kt)("ul",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ul"},"The detailed info about the submarine experiment."))),(0,i.kt)("p",null,"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'experiment = client.get_experiment("experiment_1626160071451_0008")\n')),(0,i.kt)("h3",{id:"list_experimentsstatus-optionalstrnone---listdict"},(0,i.kt)("inlineCode",{parentName:"h3"},"list_experiments(status: Optional[str]=None) -> list[dict]")),(0,i.kt)("p",null,"List all experiment for the user."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Parameters")),(0,i.kt)("ul",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"status"),": Accepted, Created, Running, Succeeded, Deleted."))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Returns")),(0,i.kt)("ul",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ul"},"List of submarine experiments."))),(0,i.kt)("p",null,"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"experiments = client.list_experiments()\n")),(0,i.kt)("h3",{id:"delete_experimentid-str---dict"},(0,i.kt)("inlineCode",{parentName:"h3"},"delete_experiment(id: str) -> dict")),(0,i.kt)("p",null,"Delete the submarine experiment."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Parameters")),(0,i.kt)("ul",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"id"),": Submarine experiment id."))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Returns")),(0,i.kt)("ul",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ul"},"The detailed info about the deleted submarine experiment."))),(0,i.kt)("p",null,"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'client.delete_experiment("experiment_1626160071451_0008")\n')),(0,i.kt)("h3",{id:"get_logid-str-onlymaster-optionalboolfalse---none"},(0,i.kt)("inlineCode",{parentName:"h3"},"get_log(id: str, onlyMaster: Optional[bool]=False) -> None")),(0,i.kt)("p",null,"Print training logs of all pod of the experiment.\nBy default print all the logs of Pod."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Parameters")),(0,i.kt)("ul",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"id"),": Submarine experiment id."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"onlyMaster"),': By default include pod log of "master" which might be Tensorflow PS/Chief or PyTorch master.'))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Return")),(0,i.kt)("ul",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ul"},"The info of pod logs"))),(0,i.kt)("p",null,"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'client.get_log("experiment_1626160071451_0009")\n')),(0,i.kt)("h3",{id:"list_logstatus-str---listdict"},(0,i.kt)("inlineCode",{parentName:"h3"},"list_log(status: str) -> list[dict]")),(0,i.kt)("p",null,"List experiment log."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Parameters")),(0,i.kt)("ul",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"status"),": Accepted, Created, Running, Succeeded, Deleted."))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Returns")),(0,i.kt)("ul",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ul"},"List of submarine experiment logs."))),(0,i.kt)("p",null,"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'logs = client.list_log("Succeeded")\n')),(0,i.kt)("h3",{id:"wait_for_finishid-str-polling_interval-optionalint10---dict"},(0,i.kt)("inlineCode",{parentName:"h3"},"wait_for_finish(id: str, polling_interval: Optional[int]=10) -> dict")),(0,i.kt)("p",null,"Waits until the experiment is finished or failed."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Parameters")),(0,i.kt)("ul",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"id"),": Submarine experiment id."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"polling_interval"),": How many seconds between two polls for the status of the experiment."))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Returns")),(0,i.kt)("ul",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ul"},"Submarine experiment logs."))),(0,i.kt)("p",null,"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'logs = client.wait_for_finish("experiment_1626160071451_0009", 5)\n')))}k.isMDXComponent=!0}}]);