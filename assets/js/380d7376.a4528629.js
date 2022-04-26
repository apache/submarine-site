"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[82],{3905:function(e,r,n){n.d(r,{Zo:function(){return d},kt:function(){return m}});var a=n(7294);function t(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){t(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,a,t=function(e,r){if(null==e)return{};var n,a,t={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],r.indexOf(n)>=0||(t[n]=e[n]);return t}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var c=a.createContext({}),u=function(e){var r=a.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):s(s({},r),e)),n},d=function(e){var r=u(e.components);return a.createElement(c.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},p=a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,o=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=u(n),m=t,f=p["".concat(c,".").concat(m)]||p[m]||l[m]||o;return n?a.createElement(f,s(s({ref:r},d),{},{components:n})):a.createElement(f,s({ref:r},d))}));function m(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var o=n.length,s=new Array(o);s[0]=p;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i.mdxType="string"==typeof e?e:t,s[1]=i;for(var u=2;u<o;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4095:function(e,r,n){n.r(r),n.d(r,{assets:function(){return d},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return l}});var a=n(7462),t=n(3366),o=(n(7294),n(3905)),s=["components"],i={title:"Test and Troubleshooting"},c=void 0,u={unversionedId:"userDocs/yarn/TestAndTroubleshooting",id:"version-0.6.0/userDocs/yarn/TestAndTroubleshooting",title:"Test and Troubleshooting",description:"\x3c!--",source:"@site/versioned_docs/version-0.6.0/userDocs/yarn/TestAndTroubleshooting.md",sourceDirName:"userDocs/yarn",slug:"/userDocs/yarn/TestAndTroubleshooting",permalink:"/docs/userDocs/yarn/TestAndTroubleshooting",editUrl:"https://github.com/apache/submarine/edit/master/website/versioned_docs/version-0.6.0/userDocs/yarn/TestAndTroubleshooting.md",tags:[],version:"0.6.0",frontMatter:{title:"Test and Troubleshooting"}},d={},l=[{value:"Test with a tensorflow job",id:"test-with-a-tensorflow-job",level:2},{value:"Issues:",id:"issues",level:2},{value:"Issue 1: Fail to start nodemanager after system reboot",id:"issue-1-fail-to-start-nodemanager-after-system-reboot",level:3},{value:"Issue 2: container-executor permission denied",id:"issue-2-container-executor-permission-denied",level:3},{value:"Issue 3\uff1aHow to get docker service log",id:"issue-3how-to-get-docker-service-log",level:3},{value:"Issue 4\uff1adocker can&#39;t remove containers with errors like <code>device or resource busy</code>",id:"issue-4docker-cant-remove-containers-with-errors-like-device-or-resource-busy",level:3},{value:"Issue 5\uff1aYarn failed to start containers",id:"issue-5yarn-failed-to-start-containers",level:3}],p={toc:l};function m(e){var r=e.components,n=(0,t.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"test-with-a-tensorflow-job"},"Test with a tensorflow job"),(0,o.kt)("p",null,"Distributed-shell + GPU + cgroup"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},' ... \\\n job run \\\n --env DOCKER_JAVA_HOME=/opt/java \\\n --env DOCKER_HADOOP_HDFS_HOME=/hadoop-current --name distributed-tf-gpu \\\n --env YARN_CONTAINER_RUNTIME_DOCKER_CONTAINER_NETWORK=calico-network \\\n --worker_docker_image tf-1.13.1-gpu:0.0.1 \\\n --ps_docker_image tf-1.13.1-cpu:0.0.1 \\\n --input_path hdfs://${dfs_name_service}/tmp/cifar-10-data \\\n --checkpoint_path hdfs://${dfs_name_service}/user/hadoop/tf-distributed-checkpoint \\\n --num_ps 0 \\\n --ps_resources memory=4G,vcores=2,gpu=0 \\\n --ps_launch_cmd "python /test/cifar10_estimator/cifar10_main.py --data-dir=hdfs://${dfs_name_service}/tmp/cifar-10-data --job-dir=hdfs://${dfs_name_service}/tmp/cifar-10-jobdir --num-gpus=0" \\\n --worker_resources memory=4G,vcores=2,gpu=1 --verbose \\\n --num_workers 1 \\\n --worker_launch_cmd "python /test/cifar10_estimator/cifar10_main.py --data-dir=hdfs://${dfs_name_service}/tmp/cifar-10-data --job-dir=hdfs://${dfs_name_service}/tmp/cifar-10-jobdir --train-steps=500 --eval-batch-size=16 --train-batch-size=16 --sync --num-gpus=1"\n')),(0,o.kt)("h2",{id:"issues"},"Issues:"),(0,o.kt)("h3",{id:"issue-1-fail-to-start-nodemanager-after-system-reboot"},"Issue 1: Fail to start nodemanager after system reboot"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"2018-09-20 18:54:39,785 ERROR org.apache.hadoop.yarn.server.nodemanager.LinuxContainerExecutor: Failed to bootstrap configured resource subsystems!\norg.apache.hadoop.yarn.server.nodemanager.containermanager.linux.resources.ResourceHandlerException: Unexpected: Cannot create yarn cgroup Subsystem:cpu Mount points:/proc/mounts User:yarn Path:/sys/fs/cgroup/cpu,cpuacct/hadoop-yarn\n  at org.apache.hadoop.yarn.server.nodemanager.containermanager.linux.resources.CGroupsHandlerImpl.initializePreMountedCGroupController(CGroupsHandlerImpl.java:425)\n  at org.apache.hadoop.yarn.server.nodemanager.containermanager.linux.resources.CGroupsHandlerImpl.initializeCGroupController(CGroupsHandlerImpl.java:377)\n  at org.apache.hadoop.yarn.server.nodemanager.containermanager.linux.resources.CGroupsCpuResourceHandlerImpl.bootstrap(CGroupsCpuResourceHandlerImpl.java:98)\n  at org.apache.hadoop.yarn.server.nodemanager.containermanager.linux.resources.CGroupsCpuResourceHandlerImpl.bootstrap(CGroupsCpuResourceHandlerImpl.java:87)\n  at org.apache.hadoop.yarn.server.nodemanager.containermanager.linux.resources.ResourceHandlerChain.bootstrap(ResourceHandlerChain.java:58)\n  at org.apache.hadoop.yarn.server.nodemanager.LinuxContainerExecutor.init(LinuxContainerExecutor.java:320)\n  at org.apache.hadoop.yarn.server.nodemanager.NodeManager.serviceInit(NodeManager.java:389)\n  at org.apache.hadoop.service.AbstractService.init(AbstractService.java:164)\n  at org.apache.hadoop.yarn.server.nodemanager.NodeManager.initAndStartNodeManager(NodeManager.java:929)\n  at org.apache.hadoop.yarn.server.nodemanager.NodeManager.main(NodeManager.java:997)\n2018-09-20 18:54:39,789 INFO org.apache.hadoop.service.AbstractService: Service NodeManager failed in state INITED\n")),(0,o.kt)("p",null,"Solution: Grant user yarn the access to  ",(0,o.kt)("inlineCode",{parentName:"p"},"/sys/fs/cgroup/cpu,cpuacct"),", which is the subfolder of cgroup mount destination."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"chown :yarn -R /sys/fs/cgroup/cpu,cpuacct\nchmod g+rwx -R /sys/fs/cgroup/cpu,cpuacct\n")),(0,o.kt)("p",null,"If GPUs are used\uff0cthe access to cgroup devices folder is neede as well"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"chown :yarn -R /sys/fs/cgroup/devices\nchmod g+rwx -R /sys/fs/cgroup/devices\n")),(0,o.kt)("h3",{id:"issue-2-container-executor-permission-denied"},"Issue 2: container-executor permission denied"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'2018-09-21 09:36:26,102 WARN org.apache.hadoop.yarn.server.nodemanager.containermanager.linux.privileged.PrivilegedOperationExecutor: IOException executing command:\njava.io.IOException: Cannot run program "/etc/yarn/sbin/Linux-amd64-64/container-executor": error=13, Permission denied\n        at java.lang.ProcessBuilder.start(ProcessBuilder.java:1048)\n        at org.apache.hadoop.util.Shell.runCommand(Shell.java:938)\n        at org.apache.hadoop.util.Shell.run(Shell.java:901)\n        at org.apache.hadoop.util.Shell$ShellCommandExecutor.execute(Shell.java:1213)\n')),(0,o.kt)("p",null,"Solution: The permission of ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/yarn/sbin/Linux-amd64-64/container-executor")," should be 6050"),(0,o.kt)("h3",{id:"issue-3how-to-get-docker-service-log"},"Issue 3\uff1aHow to get docker service log"),(0,o.kt)("p",null,"Solution: we can get docker log with the following command"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"journalctl -u docker\n")),(0,o.kt)("h3",{id:"issue-4docker-cant-remove-containers-with-errors-like-device-or-resource-busy"},"Issue 4\uff1adocker can't remove containers with errors like ",(0,o.kt)("inlineCode",{parentName:"h3"},"device or resource busy")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ docker rm 0bfafa146431\nError response from daemon: Unable to remove filesystem for 0bfafa146431771f6024dcb9775ef47f170edb2f1852f71916ba44209ca6120a: remove /app/docker/containers/0bfafa146431771f6024dcb9775ef47f170edb2f152f71916ba44209ca6120a/shm: device or resource busy\n")),(0,o.kt)("p",null,"Solution: to find which process leads to a ",(0,o.kt)("inlineCode",{parentName:"p"},"device or resource busy"),", we can add a shell script, named ",(0,o.kt)("inlineCode",{parentName:"p"},"find-busy-mnt.sh")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'#!/usr/bin/env bash\n\n# A simple script to get information about mount points and pids and their\n# mount namespaces.\n\nif [ $# -ne 1 ];then\necho "Usage: $0 <devicemapper-device-id>"\nexit 1\nfi\n\nID=$1\n\nMOUNTS=`find /proc/*/mounts | xargs grep $ID 2>/dev/null`\n\n[ -z "$MOUNTS" ] &&  echo "No pids found" && exit 0\n\nprintf "PID\\tNAME\\t\\tMNTNS\\n"\necho "$MOUNTS" | while read LINE; do\nPID=`echo $LINE | cut -d ":" -f1 | cut -d "/" -f3`\n# Ignore self and thread-self\nif [ "$PID" == "self" ] || [ "$PID" == "thread-self" ]; then\n  continue\nfi\nNAME=`ps -q $PID -o comm=`\nMNTNS=`readlink /proc/$PID/ns/mnt`\nprintf "%s\\t%s\\t\\t%s\\n" "$PID" "$NAME" "$MNTNS"\ndone\n')),(0,o.kt)("p",null,"Kill the process by pid, which is found by the script"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ chmod +x find-busy-mnt.sh\n./find-busy-mnt.sh 0bfafa146431771f6024dcb9775ef47f170edb2f152f71916ba44209ca6120a\n# PID   NAME            MNTNS\n# 5007  ntpd            mnt:[4026533598]\n$ kill -9 5007\n")),(0,o.kt)("h3",{id:"issue-5yarn-failed-to-start-containers"},"Issue 5\uff1aYarn failed to start containers"),(0,o.kt)("p",null,"if the number of GPUs required by applications is larger than the number of GPUs in the cluster, there would be some containers can't be created."))}m.isMDXComponent=!0}}]);