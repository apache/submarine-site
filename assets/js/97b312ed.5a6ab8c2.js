"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[459],{3905:function(e,r,t){t.d(r,{Zo:function(){return s},kt:function(){return m}});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),l=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},s=function(e){var r=l(e.components);return n.createElement(c.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),d=l(t),m=a,v=d["".concat(c,".").concat(m)]||d[m]||p[m]||i;return t?n.createElement(v,o(o({ref:r},s),{},{components:t})):n.createElement(v,o({ref:r},s))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var u={};for(var c in r)hasOwnProperty.call(r,c)&&(u[c]=r[c]);u.originalType=e,u.mdxType="string"==typeof e?e:a,o[1]=u;for(var l=2;l<i;l++)o[l]=t[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8294:function(e,r,t){t.r(r),t.d(r,{assets:function(){return s},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return u},metadata:function(){return l},toc:function(){return p}});var n=t(7462),a=t(3366),i=(t(7294),t(3905)),o=["components"],u={title:"How to Build Submarine"},c=void 0,l={unversionedId:"devDocs/BuildFromCode",id:"devDocs/BuildFromCode",title:"How to Build Submarine",description:"\x3c!--",source:"@site/docs/devDocs/BuildFromCode.md",sourceDirName:"devDocs",slug:"/devDocs/BuildFromCode",permalink:"/docs/next/devDocs/BuildFromCode",editUrl:"https://github.com/apache/submarine/edit/master/website/docs/devDocs/BuildFromCode.md",tags:[],version:"current",frontMatter:{title:"How to Build Submarine"},sidebar:"docs",previous:{title:"Dependencies for Submarine",permalink:"/docs/next/devDocs/Dependencies"},next:{title:"Development Guide",permalink:"/docs/next/devDocs/Development"}},s={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Quick Start",id:"quick-start",level:2},{value:"Build Your Custom Submarine Docker Images",id:"build-your-custom-submarine-docker-images",level:3},{value:"Checking releases for licenses",id:"checking-releases-for-licenses",level:3},{value:"Building source code / binary distribution with Maven Wrapper",id:"building-source-code--binary-distribution-with-maven-wrapper",level:3}],d={toc:p};function m(e){var r=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"JDK 1.8"),(0,i.kt)("li",{parentName:"ul"},"Maven 3.3 or later ( < 3.8.1 )"),(0,i.kt)("li",{parentName:"ul"},"Docker")),(0,i.kt)("h2",{id:"quick-start"},"Quick Start"),(0,i.kt)("h3",{id:"build-your-custom-submarine-docker-images"},"Build Your Custom Submarine Docker Images"),(0,i.kt)("p",null,"Submarine provides default Docker image in the release artifacts, sometimes you would like to do some modifications on the images. You can rebuild Docker image after you make changes."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note that you need to make sure the images built above can be accessed in k8s\nUsually this needs to rename and push to a proper Docker registry.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"mvn clean package -DskipTests\n")),(0,i.kt)("p",null,"Build submarine server image:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"./dev-support/docker-images/submarine/build.sh\n")),(0,i.kt)("p",null,"Build submarine database image:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"./dev-support/docker-images/database/build.sh\n")),(0,i.kt)("h3",{id:"checking-releases-for-licenses"},"Checking releases for licenses"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"mvn clean org.apache.rat:apache-rat-plugin:check\n")),(0,i.kt)("h3",{id:"building-source-code--binary-distribution-with-maven-wrapper"},"Building source code / binary distribution with Maven Wrapper"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Maven Wrapper (Optional): Maven Wrapper can help you avoid dependencies problem about Maven version.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"# Setup Maven Wrapper (Maven 3.6.1)\nmvn -N io.takari:maven:0.7.7:wrapper -Dmaven=3.6.1\n\n# Check Maven Wrapper\n./mvnw -version\n\n# Replace 'mvn' with 'mvnw'. Example:\n./mvnw clean package -DskipTests\n")))}m.isMDXComponent=!0}}]);