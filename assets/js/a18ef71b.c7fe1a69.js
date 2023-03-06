"use strict";(self.webpackChunkvision_camera=self.webpackChunkvision_camera||[]).push([[723],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=a,f=u["".concat(c,".").concat(d)]||u[d]||p[d]||i;return n?r.createElement(f,o(o({ref:t},m),{},{components:n})):r.createElement(f,o({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5243:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return m},default:function(){return u}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={},c="TODO",s={unversionedId:"guides/TODO",id:"guides/TODO",title:"TODO",description:"This is an internal TODO list which I am using to keep track of some of the features that are still missing.",source:"@site/docs/guides/TODO.md",sourceDirName:"guides",slug:"/guides/TODO",permalink:"/docs/guides/TODO",editUrl:"https://github.com/mrousavy/react-native-vision-camera/edit/main/docs/docs/guides/TODO.md",tags:[],version:"current",frontMatter:{}},m=[],p={toc:m};function u(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"todo"},"TODO"),(0,i.kt)("p",null,"This is an internal TODO list which I am using to keep track of some of the features that are still missing."),(0,i.kt)("ul",{className:"contains-task-list"},(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Mirror images from selfie cameras (iOS Done, Android WIP)"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Allow camera switching (front <-> back) while recording and stich videos together"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Make ",(0,i.kt)("inlineCode",{parentName:"li"},"startRecording()")," async. Due to NativeModules limitations, we can only have either one callback or one promise in a native function. For ",(0,i.kt)("inlineCode",{parentName:"li"},"startRecording()")," we need both, since you probably also want to catch any errors that occured during a ",(0,i.kt)("inlineCode",{parentName:"li"},"startRecording()")," call (or wait until the recording has actually started, since this can also take some time)"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Return a ",(0,i.kt)("inlineCode",{parentName:"li"},"jsi::Value")," reference for images (",(0,i.kt)("inlineCode",{parentName:"li"},"UIImage"),"/",(0,i.kt)("inlineCode",{parentName:"li"},"Bitmap"),") on ",(0,i.kt)("inlineCode",{parentName:"li"},"takePhoto()")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"takeSnapshot()"),". This way, we skip the entire file writing and reading, making image capture ",(0,i.kt)("em",{parentName:"li"},"a lot")," faster."),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Implement frame processors. The idea here is that the user passes a small JS function (reanimated worklet) to the ",(0,i.kt)("inlineCode",{parentName:"li"},"Camera::frameProcessor")," prop which will then get called on every frame the camera previews. (I'd say we cap it to 30 times per second, even if the camera fps is higher) This can then be used to scan QR codes, detect faces, detect depth, render something ontop of the camera such as color filters, QR code boundaries or even dog filters, possibly even use AR - all from a single, small, and highly flexible JS function!"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Create a custom MPEG4 encoder to allow for more customizability in ",(0,i.kt)("inlineCode",{parentName:"li"},"recordVideo()")," (",(0,i.kt)("inlineCode",{parentName:"li"},"bitRate"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"priority"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"minQuantizationParameter"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"allowFrameReordering"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"expectedFrameRate"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"realTime"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"minimizeMemoryUsage"),")")))}u.isMDXComponent=!0}}]);