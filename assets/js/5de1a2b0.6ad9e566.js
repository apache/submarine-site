"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5610],{3905:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return b}});var n=t(7294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function u(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=n.createContext({}),c=function(e){var r=n.useContext(o),t=r;return e&&(t="function"==typeof e?e(r):u(u({},r),e)),t},p=function(e){var r=c(e.components);return n.createElement(o.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(t),b=i,y=m["".concat(o,".").concat(b)]||m[b]||l[b]||a;return t?n.createElement(y,u(u({ref:r},p),{},{components:t})):n.createElement(y,u({ref:r},p))}));function b(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var a=t.length,u=new Array(a);u[0]=m;var s={};for(var o in r)hasOwnProperty.call(r,o)&&(s[o]=r[o]);s.originalType=e,s.mdxType="string"==typeof e?e:i,u[1]=s;for(var c=2;c<a;c++)u[c]=t[c];return n.createElement.apply(null,u)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3458:function(e,r,t){t.r(r),t.d(r,{assets:function(){return p},contentTitle:function(){return o},default:function(){return b},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return l}});var n=t(7462),i=t(3366),a=(t(7294),t(3905)),u=["components"],s={title:"Building Submarine Spark Security Plugin"},o=void 0,c={unversionedId:"userDocs/submarine-security/spark-security/build-submarine-spark-security-plugin",id:"version-0.6.0/userDocs/submarine-security/spark-security/build-submarine-spark-security-plugin",title:"Building Submarine Spark Security Plugin",description:"\x3c!--",source:"@site/versioned_docs/version-0.6.0/userDocs/submarine-security/spark-security/build-submarine-spark-security-plugin.md",sourceDirName:"userDocs/submarine-security/spark-security",slug:"/userDocs/submarine-security/spark-security/build-submarine-spark-security-plugin",permalink:"/docs/userDocs/submarine-security/spark-security/build-submarine-spark-security-plugin",editUrl:"https://github.com/apache/submarine/edit/master/website/versioned_docs/version-0.6.0/userDocs/submarine-security/spark-security/build-submarine-spark-security-plugin.md",tags:[],version:"0.6.0",frontMatter:{title:"Building Submarine Spark Security Plugin"},sidebar:"docs",previous:{title:"Submarine Spark Security Plugin",permalink:"/docs/userDocs/submarine-security/spark-security/"},next:{title:"MLflow UI",permalink:"/docs/userDocs/others/mlflow"}},p={},l=[],m={toc:l};function b(e){var r=e.components,t=(0,i.Z)(e,u);return(0,a.kt)("wrapper",(0,n.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Submarine Spark Security Plugin is built using ",(0,a.kt)("a",{parentName:"p",href:"http://maven.apache.org"},"Apache Maven"),". To build it, ",(0,a.kt)("inlineCode",{parentName:"p"},"cd")," to the root direct of submarine project and run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"mvn clean package -Dmaven.javadoc.skip=true -DskipTests -pl :submarine-spark-security\n")),(0,a.kt)("p",null,"By default, Submarine Spark Security Plugin is built against Apache Spark ",(0,a.kt)("inlineCode",{parentName:"p"},"2.3.x")," and Apache Ranger ",(0,a.kt)("inlineCode",{parentName:"p"},"1.1.0"),", which may be incompatible with other Apache Spark or Apache Ranger releases."),(0,a.kt)("p",null,"Currently, available profiles are:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Spark"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"-Pspark-2.3"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"-Pspark-2.4"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"-Pspark-3.0")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Ranger"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"-Pranger-1.2"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"-Pranger-2.0")))}b.isMDXComponent=!0}}]);