(self.webpackChunkvision_camera=self.webpackChunkvision_camera||[]).push([[1270],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4266:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var r=n(2122),i=n(9756),a=(n(7294),n(3905)),o=["components"],l={id:"cameraposition",title:"Module: CameraPosition",sidebar_label:"CameraPosition",sidebar_position:0,custom_edit_url:null},s=void 0,c={unversionedId:"api/modules/cameraposition",id:"api/modules/cameraposition",isDocsHomePage:!1,title:"Module: CameraPosition",description:"Type aliases",source:"@site/docs/api/modules/cameraposition.md",sourceDirName:"api/modules",slug:"/api/modules/cameraposition",permalink:"/react-native-vision-camera/docs/api/modules/cameraposition",editUrl:null,version:"current",sidebarPosition:0,frontMatter:{id:"cameraposition",title:"Module: CameraPosition",sidebar_label:"CameraPosition",sidebar_position:0,custom_edit_url:null},sidebar:"visionSidebar",previous:{title:"CameraError",permalink:"/react-native-vision-camera/docs/api/modules/cameraerror"},next:{title:"CameraPreset",permalink:"/react-native-vision-camera/docs/api/modules/camerapreset"}},p=[{value:"Type aliases",id:"type-aliases",children:[{value:"CameraPosition",id:"cameraposition",children:[]}]}],u={toc:p};function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"type-aliases"},"Type aliases"),(0,a.kt)("h3",{id:"cameraposition"},"CameraPosition"),(0,a.kt)("p",null,"\u01ac ",(0,a.kt)("strong",{parentName:"p"},"CameraPosition"),": ",(0,a.kt)("inlineCode",{parentName:"p"},'"front"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},'"back"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},'"unspecified"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},'"external"')),(0,a.kt)("p",null,"Represents the camera device position."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'"back"'),": Indicates that the device is physically located on the back of the system hardware"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'"front"'),": Indicates that the device is physically located on the front of the system hardware")),(0,a.kt)("h4",{id:"ios-only"},"iOS only"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'"unspecified"'),": Indicates that the device's position relative to the system hardware is unspecified")),(0,a.kt)("h4",{id:"android-only"},"Android only"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'"external"'),": The camera device is an external camera, and has no fixed facing relative to the device's screen. (Android only)")),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/mrousavy/react-native-vision-camera/blob/eeb8da9/src/CameraPosition.ts#L13"},"CameraPosition.ts:13")))}d.isMDXComponent=!0}}]);