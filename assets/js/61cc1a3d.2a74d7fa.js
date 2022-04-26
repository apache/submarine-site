"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6499],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return h}});var r=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var u=r.createContext({}),s=function(e){var t=r.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(a),h=i,d=m["".concat(u,".").concat(h)]||m[h]||p[h]||n;return a?r.createElement(d,o(o({ref:t},c),{},{components:a})):r.createElement(d,o({ref:t},c))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,o=new Array(n);o[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<n;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},2469:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return h},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var r=a(7462),i=a(3366),n=(a(7294),a(3905)),o=["components"],l={title:"How To Contribute to Submarine"},u=void 0,s={unversionedId:"community/contributing",id:"community/contributing",title:"How To Contribute to Submarine",description:"\x3c!--",source:"@site/docs/community/contributing.md",sourceDirName:"community",slug:"/community/contributing",permalink:"/docs/next/community/contributing",editUrl:"https://github.com/apache/submarine/edit/master/website/docs/community/contributing.md",tags:[],version:"current",frontMatter:{title:"How To Contribute to Submarine"},sidebar:"docs",previous:{title:"Guide for Apache Submarine Committers",permalink:"/docs/next/community/HowToCommit"},next:{title:"How to vote a Committer or PMC",permalink:"/docs/next/community/HowToVoteCommitterOrPMC"}},c={},p=[{value:"Preface",id:"preface",level:2},{value:"Build Submarine",id:"build-submarine",level:2},{value:"Creating patches",id:"creating-patches",level:2},{value:"Step1: Fork apache/submarine github repository (first time)",id:"step1-fork-apachesubmarine-github-repository-first-time",level:3},{value:"Step2: Clone the Submarine to your local machine",id:"step2-clone-the-submarine-to-your-local-machine",level:3},{value:"Step3: Create a new Jira in Submarine project",id:"step3-create-a-new-jira-in-submarine-project",level:3},{value:"Step4: Create a local branch for your contribution",id:"step4-create-a-local-branch-for-your-contribution",level:3},{value:"Step5: Develop &amp; Create commits",id:"step5-develop--create-commits",level:3},{value:"Step6: Syncing your local branch with upstream/master",id:"step6-syncing-your-local-branch-with-upstreammaster",level:3},{value:"Step7: Push your local branch to your personal fork",id:"step7-push-your-local-branch-to-your-personal-fork",level:3},{value:"Step8: Check GitHub Actions status of your personal commit",id:"step8-check-github-actions-status-of-your-personal-commit",level:3},{value:"Step9: Create a pull request on github UI",id:"step9-create-a-pull-request-on-github-ui",level:3},{value:"Pull Request template",id:"pull-request-template",level:4},{value:"Step10: Check GitHub Actions status of your pull request in apache/submarine",id:"step10-check-github-actions-status-of-your-pull-request-in-apachesubmarine",level:3},{value:"Step11: The Review Process",id:"step11-the-review-process",level:3},{value:"Step12: Address review comments",id:"step12-address-review-comments",level:3},{value:"Code convention",id:"code-convention",level:3}],m={toc:p};function h(e){var t=e.components,l=(0,i.Z)(e,o);return(0,n.kt)("wrapper",(0,r.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"There are several ways to contribute to Submarine:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Develop and Commit source code (This document will primarily focus on this.)"),(0,n.kt)("li",{parentName:"ol"},"Report issues (You can report issues with both Github or Jira.)"),(0,n.kt)("li",{parentName:"ol"},"Discuss/Answer questions on the mailing list"),(0,n.kt)("li",{parentName:"ol"},"Share use cases")),(0,n.kt)("h2",{id:"preface"},"Preface"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Apache Submarine")," is an ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/submarine/blob/master/LICENSE"},"Apache 2.0 License")," Software. Contributing to Submarine means you agree to the Apache 2.0 License. "),(0,n.kt)("li",{parentName:"ul"},"Please read ",(0,n.kt)("a",{parentName:"li",href:"http://www.apache.org/foundation/policies/conduct.html"},"Code of Conduct")," carefully."),(0,n.kt)("li",{parentName:"ul"},"The document ",(0,n.kt)("a",{parentName:"li",href:"http://www.apache.org/foundation/how-it-works.html"},"How It Works")," can help you understand Apache Software Foundation further.")),(0,n.kt)("h2",{id:"build-submarine"},"Build Submarine"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/next/devDocs/BuildFromCode"},"Build From Code"))),(0,n.kt)("h2",{id:"creating-patches"},"Creating patches"),(0,n.kt)("p",null,"Submarine follows ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/sevntu-checkstyle/sevntu.checkstyle/wiki/Development-workflow-with-Git:-Fork,-Branching,-Commits,-and-Pull-Request"},"Fork & Pull")," model."),(0,n.kt)("h3",{id:"step1-fork-apachesubmarine-github-repository-first-time"},"Step1: Fork apache/submarine github repository (first time)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Visit ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/submarine"},"https://github.com/apache/submarine")),(0,n.kt)("li",{parentName:"ul"},"Click the ",(0,n.kt)("inlineCode",{parentName:"li"},"Fork")," button to create a fork of the repository")),(0,n.kt)("h3",{id:"step2-clone-the-submarine-to-your-local-machine"},"Step2: Clone the Submarine to your local machine"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"# USERNAME \u2013 your Github user account name.\ngit clone git@github.com:${USERNAME}/submarine.git\n# or: git clone https://github.com/${USERNAME}/submarine.git \n \ncd submarine\n# set upstream \ngit remote add upstream git@github.com:apache/submarine.git\n# or: git remote add upstream https://github.com/apache/submarine.git\n\n# Don't push to the upstream master.\ngit remote set-url --push upstream no_push\n\n# Check upstream/origin:\n# origin    git@github.com:${USERNAME}/submarine.git (fetch)\n# origin    git@github.com:${USERNAME}/submarine.git (push)\n# upstream  git@github.com:apache/submarine.git (fetch)\n# upstream  no_push (push)\ngit remote -v\n")),(0,n.kt)("h3",{id:"step3-create-a-new-jira-in-submarine-project"},"Step3: Create a new Jira in Submarine project"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"New contributors need privilege to create JIRA issues. Please email ",(0,n.kt)("a",{parentName:"li",href:"mailto:kaihsun@apache.org"},"kaihsun@apache.org"),' with your Jira username. In addition, the email title should be "',"[New Submarine Contributor]",'".'),(0,n.kt)("li",{parentName:"ul"},"Check ",(0,n.kt)("a",{parentName:"li",href:"https://issues.apache.org/jira/projects/SUBMARINE/issues/SUBMARINE-748?filter=allopenissues"},"Jira issue tracker")," for existing issues."),(0,n.kt)("li",{parentName:"ul"},"Create a new Jira issue in Submarine project. When the issue is created, a Jira number (eg. SUBMARINE-748) will be assigned to the issue automatically.\n",(0,n.kt)("img",{alt:"jira_number_example",src:a(6538).Z,width:"1920",height:"914"}))),(0,n.kt)("h3",{id:"step4-create-a-local-branch-for-your-contribution"},"Step4: Create a local branch for your contribution"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"cd submarine\n\n# Make your local master up-to-date\ngit checkout master\ngit fetch upstream \ngit rebase upstream/master\n\n# Create a new branch fro issue SUBMARINE-${jira_number}\ngit checkout -b SUBMARINE-${jira_number}\n\n# Example: git checkout -b SUBMARINE-748 \n")),(0,n.kt)("h3",{id:"step5-develop--create-commits"},"Step5: Develop & Create commits"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"You can edit the code on the ",(0,n.kt)("inlineCode",{parentName:"li"},"SUBMARINE-${jira_number}")," branch. (Coding Style: ",(0,n.kt)("a",{parentName:"li",href:"#code-convention"},"Code Convention"),")"),(0,n.kt)("li",{parentName:"ul"},"Create commits")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},'git add ${edited files}\ngit commit -m "SUBMARINE-${jira_number}. ${Commit Message}"\n# Example: git commit -m "SUBMARINE-748. Update Contributing guide" \n')),(0,n.kt)("h3",{id:"step6-syncing-your-local-branch-with-upstreammaster"},"Step6: Syncing your local branch with upstream/master"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"# On SUBMARINE-${jira_number} branch\ngit fetch upstream\ngit rebase upstream/master\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Please do not use ",(0,n.kt)("inlineCode",{parentName:"li"},"git pull")," to synchronize your local branch. Because ",(0,n.kt)("inlineCode",{parentName:"li"},"git pull")," does a merge to create merged commits, these will make commit history messy.")),(0,n.kt)("h3",{id:"step7-push-your-local-branch-to-your-personal-fork"},"Step7: Push your local branch to your personal fork"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"git push origin SUBMARINE-${jira_number} \n")),(0,n.kt)("h3",{id:"step8-check-github-actions-status-of-your-personal-commit"},"Step8: Check GitHub Actions status of your personal commit"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Visit ",(0,n.kt)("inlineCode",{parentName:"li"},"https://github.com/${USERNAME}/submarine/actions")),(0,n.kt)("li",{parentName:"ul"},"Please make sure your new commits can pass all workflows before creating a pull request.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"check_ci_pass",src:a(5300).Z,width:"1898",height:"577"})),(0,n.kt)("h3",{id:"step9-create-a-pull-request-on-github-ui"},"Step9: Create a pull request on github UI"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Visit your fork at ",(0,n.kt)("inlineCode",{parentName:"li"},"https://github.com/${USERNAME}/submarine.git")),(0,n.kt)("li",{parentName:"ul"},"Click ",(0,n.kt)("inlineCode",{parentName:"li"},"Compare & Pull Request")," button to create pull request.\n",(0,n.kt)("img",{alt:"compare_pull_request_button",src:a(4378).Z,width:"2864",height:"616"}))),(0,n.kt)("h4",{id:"pull-request-template"},"Pull Request template"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/submarine/blob/bd7578cc28f8280f9170938d4469fcc965e24a89/.github/PULL_REQUEST_TEMPLATE"},"Pull request template")),(0,n.kt)("li",{parentName:"ul"},"Filling the template thoroughly can improve the speed of the review process. Example: ")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"pull_request_template_example",src:a(9709).Z,width:"2350",height:"1408"})),(0,n.kt)("h3",{id:"step10-check-github-actions-status-of-your-pull-request-in-apachesubmarine"},"Step10: Check GitHub Actions status of your pull request in apache/submarine"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Visit ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/submarine/actions"},"https://github.com/apache/submarine/actions")),(0,n.kt)("li",{parentName:"ul"},"Please make sure your pull request can pass all workflows. ")),(0,n.kt)("h3",{id:"step11-the-review-process"},"Step11: The Review Process"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Anyone can be a reviewer and comment on the pull requests."),(0,n.kt)("li",{parentName:"ul"},'Reviewer can indicate that a patch looks suitable for merging with a comment such as: "Looks good", "LGTM", "+1". (PS: LGTM = Looks Good To Me)'),(0,n.kt)("li",{parentName:"ul"},'At least one indication of suitability (e.g. "LGTM") from a committer is required to be merged. '),(0,n.kt)("li",{parentName:"ul"},'A committer can then initiate lazy consensus ("Merge if there is no more discussion") after which the code can be merged after a particular time (usually 24 hours) if there are no more reviews.'),(0,n.kt)("li",{parentName:"ul"},"Contributors can ping reviewers (including committers) by commenting 'Ready to review'.")),(0,n.kt)("h3",{id:"step12-address-review-comments"},"Step12: Address review comments"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Push new commits to SUBMARINE-${jira_number} branch. The pull request will update automatically."),(0,n.kt)("li",{parentName:"ul"},"After you address all review comments, committers will merge the pull request.")),(0,n.kt)("h3",{id:"code-convention"},"Code convention"),(0,n.kt)("p",null,"We are following Google Code style:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://google.github.io/styleguide/javaguide.html"},"Java style")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://google.github.io/styleguide/shell.xml"},"Shell style"))),(0,n.kt)("p",null,"There are some plugins to format, lint your code in IDE (use ",(0,n.kt)("a",{parentName:"p",href:"hhttps://github.com/apache/submarine/blob/master/dev-support/maven-config/checkstyle.xml"},"dev-support/maven-config/checkstyle.xml")," as rules)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://plugins.jetbrains.com/plugin/1065"},"Checkstyle plugin for Intellij")," (",(0,n.kt)("a",{parentName:"li",href:"http://stackoverflow.com/questions/26955766/intellij-idea-checkstyle"},"Setting Guide"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://eclipse-cs.sourceforge.net/#!/"},"Checkstyle plugin for Eclipse")," (",(0,n.kt)("a",{parentName:"li",href:"http://eclipse-cs.sourceforge.net/#!/project-setup"},"Setting Guide"),")")))}h.isMDXComponent=!0},5300:function(e,t,a){t.Z=a.p+"assets/images/check_ci_pass-9c6656dec7130470506c7420e55c7dd0.png"},4378:function(e,t,a){t.Z=a.p+"assets/images/compare_pull_request_button-a5c8f7a7ebda5fad45d1d9e6ca8ed58a.png"},6538:function(e,t,a){t.Z=a.p+"assets/images/jira_number_example-9d86e8dd3b72d9d9c2adddfbffc00a54.png"},9709:function(e,t,a){t.Z=a.p+"assets/images/pull_request_template_example-5db7207e23fa54cca6de32325e8d7c67.png"}}]);