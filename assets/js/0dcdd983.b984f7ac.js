(self.webpackChunkvision_camera=self.webpackChunkvision_camera||[]).push([[7224],{3905:function(e,r,t){"use strict";t.d(r,{Zo:function(){return p},kt:function(){return d}});var a=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var c=a.createContext({}),s=function(e){var r=a.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},p=function(e){var r=s(e.components);return a.createElement(c.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},m=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(t),d=n,k=m["".concat(c,".").concat(d)]||m[d]||u[d]||i;return t?a.createElement(k,o(o({ref:r},p),{},{components:t})):a.createElement(k,o({ref:r},p))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8424:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return m}});var a=t(2122),n=t(9756),i=(t(7294),t(3905)),o=["components"],l={id:"cameraerror.errorwithcause",title:"Interface: ErrorWithCause",sidebar_label:"ErrorWithCause",custom_edit_url:null},c=void 0,s={unversionedId:"api/interfaces/cameraerror.errorwithcause",id:"api/interfaces/cameraerror.errorwithcause",isDocsHomePage:!1,title:"Interface: ErrorWithCause",description:"CameraError.ErrorWithCause",source:"@site/docs/api/interfaces/cameraerror.errorwithcause.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/cameraerror.errorwithcause",permalink:"/react-native-vision-camera/docs/api/interfaces/cameraerror.errorwithcause",editUrl:null,version:"current",frontMatter:{id:"cameraerror.errorwithcause",title:"Interface: ErrorWithCause",sidebar_label:"ErrorWithCause",custom_edit_url:null},sidebar:"visionSidebar",previous:{title:"FrameRateRange",permalink:"/react-native-vision-camera/docs/api/interfaces/cameradevice.frameraterange"},next:{title:"CameraProps",permalink:"/react-native-vision-camera/docs/api/interfaces/cameraprops.cameraprops-1"}},p=[{value:"Properties",id:"properties",children:[{value:"cause",id:"cause",children:[]},{value:"code",id:"code",children:[]},{value:"details",id:"details",children:[]},{value:"domain",id:"domain",children:[]},{value:"message",id:"message",children:[]},{value:"stacktrace",id:"stacktrace",children:[]}]}],u={toc:p};function m(e){var r=e.components,t=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/react-native-vision-camera/docs/api/modules/cameraerror"},"CameraError"),".ErrorWithCause"),(0,i.kt)("p",null,"Represents a JSON-style error cause. This contains native ",(0,i.kt)("inlineCode",{parentName:"p"},"NSError"),"/",(0,i.kt)("inlineCode",{parentName:"p"},"Throwable")," information, and can have recursive ",(0,i.kt)("a",{parentName:"p",href:"/react-native-vision-camera/docs/api/interfaces/cameraerror.errorwithcause#cause"},(0,i.kt)("inlineCode",{parentName:"a"},".cause"))," properties until the ultimate cause has been found."),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"cause"},"cause"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"cause"),": ",(0,i.kt)("a",{parentName:"p",href:"/react-native-vision-camera/docs/api/interfaces/cameraerror.errorwithcause"},"ErrorWithCause")),(0,i.kt)("p",null,"Optional additional cause for nested errors"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"iOS: N/A"),(0,i.kt)("li",{parentName:"ul"},"Android: ",(0,i.kt)("inlineCode",{parentName:"li"},"Throwable.cause"))),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mrousavy/react-native-vision-camera/blob/cae08a1/src/CameraError.ts#L94"},"CameraError.ts:94")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"code"},"code"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"code"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("p",null,"The native error's code."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"iOS: ",(0,i.kt)("inlineCode",{parentName:"li"},"NSError.code")),(0,i.kt)("li",{parentName:"ul"},"Android: N/A")),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mrousavy/react-native-vision-camera/blob/cae08a1/src/CameraError.ts#L59"},"CameraError.ts:59")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"details"},"details"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"details"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Record"),"<string, unknown",">"),(0,i.kt)("p",null,"Optional additional details"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"iOS: ",(0,i.kt)("inlineCode",{parentName:"li"},"NSError.userInfo")),(0,i.kt)("li",{parentName:"ul"},"Android: N/A")),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mrousavy/react-native-vision-camera/blob/cae08a1/src/CameraError.ts#L80"},"CameraError.ts:80")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"domain"},"domain"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"domain"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"The native error's domain."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"iOS: ",(0,i.kt)("inlineCode",{parentName:"li"},"NSError.domain")),(0,i.kt)("li",{parentName:"ul"},"Android: N/A")),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mrousavy/react-native-vision-camera/blob/cae08a1/src/CameraError.ts#L66"},"CameraError.ts:66")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"message"},"message"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"message"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"The native error description"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"iOS: ",(0,i.kt)("inlineCode",{parentName:"li"},"NSError.message")),(0,i.kt)("li",{parentName:"ul"},"Android: ",(0,i.kt)("inlineCode",{parentName:"li"},"Throwable.message"))),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mrousavy/react-native-vision-camera/blob/cae08a1/src/CameraError.ts#L73"},"CameraError.ts:73")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"stacktrace"},"stacktrace"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"stacktrace"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"Optional Java stacktrace"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"iOS: N/A"),(0,i.kt)("li",{parentName:"ul"},"Android: ",(0,i.kt)("inlineCode",{parentName:"li"},"Throwable.stacktrace.toString()"))),(0,i.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mrousavy/react-native-vision-camera/blob/cae08a1/src/CameraError.ts#L87"},"CameraError.ts:87")))}m.isMDXComponent=!0}}]);