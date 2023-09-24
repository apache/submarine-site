"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7633],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),f=o,d=p["".concat(s,".").concat(f)]||p[f]||m[f]||i;return r?n.createElement(d,a(a({ref:t},u),{},{components:r})):n.createElement(d,a({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},5102:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return m}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],l={title:"MLflow UI"},s=void 0,c={unversionedId:"userDocs/others/mlflow",id:"version-0.8.0/userDocs/others/mlflow",title:"MLflow UI",description:"\x3c!--",source:"@site/versioned_docs/version-0.8.0/userDocs/others/mlflow.md",sourceDirName:"userDocs/others",slug:"/userDocs/others/mlflow",permalink:"/docs/userDocs/others/mlflow",editUrl:"https://github.com/apache/submarine/edit/master/website/versioned_docs/version-0.8.0/userDocs/others/mlflow.md",tags:[],version:"0.8.0",frontMatter:{title:"MLflow UI"},sidebar:"docs",previous:{title:"Tracking",permalink:"/docs/userDocs/submarine-sdk/tracking"},next:{title:"Tensorboard",permalink:"/docs/userDocs/others/tensorboard"}},u={},m=[{value:"Usage",id:"usage",level:3},{value:"Example",id:"example",level:3}],p={toc:m};function f(e){var t=e.components,l=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"usage"},"Usage"),(0,i.kt)("p",null,"MLflow UI shows the tracking result of the experiments. When we\nuse the log_param or log_metric in ModelClient API, we could view\nthe result in MLflow UI. Below is the example of the usage of MLflow\nUI."),(0,i.kt)("h3",{id:"example"},"Example"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Run the following code in the cluster")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'from submarine import ModelsClient\nimport random\nimport time\n\nif __name__ == "__main__":\n  modelClient = ModelsClient()\n  with modelClient.start() as run:\n      modelClient.log_param("learning_rate", random.random())\n      for i in range(100):\n        time.sleep(1)\n        modelClient.log_metric("mse", random.random() * 100, i)\n        modelClient.log_metric("acc", random.random(), i)\n')),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"In the MLflow UI page, you can see the log_param and the log_metric\nresult. You can also compare the training between different workers.")),(0,i.kt)("p",null,(0,i.kt)("img",{src:r(4522).Z,width:"2192",height:"1222"})))}f.isMDXComponent=!0},4522:function(e,t,r){t.Z=r.p+"assets/images/mlflow-ui-e2fbae31ba60c324e66f00f0ae3caebf.png"}}]);