(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[3],{287:function(e,a,t){"use strict";t.d(a,"a",(function(){return f}));var n=t(88),c=t(89),l=t(91),r=t(90),o=t(92),i=t(0),s=t.n(i),m=t(10),p=t(19),f=function(e){var a=function(a){function t(){return Object(n.a)(this,t),Object(l.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(o.a)(t,a),Object(c.a)(t,[{key:"render",value:function(){return this.props.isAuth?s.a.createElement(e,this.props):s.a.createElement(m.a,{to:"/login/"})}}]),t}(s.a.Component);return Object(p.b)((function(e){return{isAuth:e.auth.isAuth}}))(a)}},288:function(e,a,t){e.exports=t.p+"static/media/user.215d2729.jpg"},293:function(e,a,t){e.exports={information:"ProfileHeader_information__30yoa","information-avatar":"ProfileHeader_information-avatar__wNOvs","information-avatar-img":"ProfileHeader_information-avatar-img__1y0Fv","information-avatar-name":"ProfileHeader_information-avatar-name__gDKkw","information-nav":"ProfileHeader_information-nav__3d-1B","information-nav-element":"ProfileHeader_information-nav-element__15x4z","information-nav-name":"ProfileHeader_information-nav-name__3ARC9","information-nav-img":"ProfileHeader_information-nav-img__3Eoz1",border:"ProfileHeader_border__1xW2S","cover-image":"ProfileHeader_cover-image__3A8p0"}},294:function(e,a,t){e.exports={post:"Post_post__2kgnP","post-info":"Post_post-info__3wL16"}},295:function(e,a,t){e.exports={"info-profile":"MyInfo_info-profile__1xEvs","info-profile-name":"MyInfo_info-profile-name__3R8ys","info-profile-value":"MyInfo_info-profile-value__1-iXq","info-profile-network":"MyInfo_info-profile-network__3yuVV"}},296:function(e,a,t){e.exports={setting:"Setting_setting__1Lqm3","checkbox-row":"Setting_checkbox-row__Zh5lU","search-text":"Setting_search-text__1U3z1",checkbox:"Setting_checkbox__3B31d","checkbox-field":"Setting_checkbox-field__2quHx","checkbox-label":"Setting_checkbox-label__1Tfd8",check:"Setting_check__3UGye",radio:"Setting_radio__1tEPl","setting-item":"Setting_setting-item__1w9S5","setting-item-name":"Setting_setting-item-name__31lFA"}},303:function(e,a,t){"use strict";t.r(a);var n=t(88),c=t(89),l=t(91),r=t(90),o=t(92),i=t(0),s=t.n(i),m=t(134),p=(t(126),t(288)),f=t.n(p),u=t(293),v=t.n(u),h=t(51),d=t.n(h),E=t(22),b=function(e){e.savePhoto,e.isOwner;var a=e.profile;e.status,e.updateStatus;if(!a)return s.a.createElement(m.a,null);return s.a.createElement("div",null,s.a.createElement("div",{className:v.a["cover-image"]}),s.a.createElement("div",{className:v.a.border},s.a.createElement("div",{className:d()(v.a.information,"app-wrapper")},s.a.createElement("div",{className:v.a["information-avatar"]},s.a.createElement("img",{src:a.photos.large||f.a,alt:"",className:v.a["information-avatar-img"]}),s.a.createElement("h3",{className:v.a["information-avatar-name"]},a.fullName)),s.a.createElement("nav",{className:v.a["information-nav"]},s.a.createElement(E.b,{to:"/profile/".concat(a.userId,"/post"),className:v.a["information-nav-element"]},s.a.createElement("div",{className:v.a["information-nav-img"]},s.a.createElement("svg",{x:"0px",y:"0px",viewBox:"0 0 50 50"},s.a.createElement("g",{id:"Layer_1"},s.a.createElement("path",{d:"M9 13H1v31c0 2.757 2.243 5 5 5h38c2.757 0 5-2.243 5-5V1H9v12zM3 44V15h6v29c0 1.654-1.346 3-3 3s-3-1.346-3-3zm8-41h36v41c0 1.654-1.346 3-3 3H9.998c.03-.039.051-.084.079-.124.057-.081.107-.166.159-.251a4.887 4.887 0 0 0 .599-1.418c.023-.094.052-.184.07-.28.058-.301.095-.609.095-.927V3z"}),s.a.createElement("path",{d:"M15 8h28v2H15z"}),s.a.createElement("path",{d:"M19 13h20v2H19z"}),s.a.createElement("path",{d:"M31 21h12v2H31z"}),s.a.createElement("path",{d:"M31 26h12v2H31z"}),s.a.createElement("path",{d:"M27 21H15v12h12V21zm-2 10h-8v-8h8v8z"}),s.a.createElement("path",{d:"M31 31h12v2H31z"}),s.a.createElement("path",{d:"M15 36h12v2H15z"}),s.a.createElement("path",{d:"M31 36h12v2H31z"}),s.a.createElement("path",{d:"M15 41h12v2H15z"}),s.a.createElement("path",{d:"M31 41h12v2H31z"})))),s.a.createElement("span",{className:v.a["information-nav-name"]},"Activity")),s.a.createElement(E.b,{to:"/profile/".concat(a.userId,"/information"),className:v.a["information-nav-element"]},s.a.createElement("div",{className:v.a["information-nav-img"]},s.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32"},s.a.createElement("path",{d:"M16,13.29A6.15,6.15,0,1,0,9.86,7.14,6.15,6.15,0,0,0,16,13.29ZM16,\r 3a4.15,4.15,0,1,1-4.14,4.14A4.15,4.15,0,0,1,16,3ZM27.38,26.81C26.18,29.9,20.72,31,16,\r 31S5.82,29.9,4.62,26.81c-.64-1.65-.07-4.1,1.49-6.39A12.11,12.11,0,0,1,16,15a12.24,12.24,\r 0,0,1,10.91,7.25,1,1,0,1,1-1.82.81A10.37,10.37,0,0,0,16,17a10.09,10.09,0,0,0-8.23,4.55c-1.34,\r 1.95-1.61,3.72-1.29,4.54C7.14,27.78,11.14,29,16,29s8.86-1.22,9.52-2.91a1,1,0,0,1,1.86.72Z"}))),s.a.createElement("span",{className:v.a["information-nav-name"]},"Profile")),s.a.createElement(E.b,{to:"/profile/".concat(a.userId,"/friends"),className:v.a["information-nav-element"]},s.a.createElement("div",{className:v.a["information-nav-img"]},s.a.createElement("svg",{viewBox:"0 0 62 62",version:"1.1"},s.a.createElement("path",{d:"M51.81 35.962h-6.4c-.915 0-1.524-.61-1.524-1.524s.61-1.524 1.524-1.524h6.4c1.523 0 3.047-.304 4.571-.61.914-.304 1.524-.609 2.133-.914.61-.304.915-1.219.915-1.828 0-.61-.305-1.22-.61-1.829-1.524-1.828-4.267-3.047-7.924-4.266-.305 0-.305-.305-.61-.305-.914-.61-1.523-1.524-1.828-2.438 0-1.22.61-2.134 1.524-2.743 2.133-3.048 3.352-5.79 3.048-8.229-.305-1.523-.915-2.742-2.134-3.657-2.133-1.524-5.18-1.524-7.01 0-1.218.915-1.828 2.134-2.133 3.657-.304 2.438.915 5.181 3.048 8.229.61.61.305 1.524-.305 2.133-.61.61-1.524.305-2.133-.304-3.048-3.658-4.267-7.315-3.657-10.667.305-2.133 1.524-4.267 3.352-5.486 3.048-2.438 7.62-2.438 10.667 0 1.828 1.524 3.047 3.353 3.352 5.486.305 3.352-.914 7.01-3.657 10.667-.305.304-.305.609-.61.609 0 0 .305 0 .305.305 3.962 1.219 7.01 3.047 8.838 5.18.915.915 1.524 2.439 1.524 3.963a5.332 5.332 0 0 1-2.133 4.266c-.914.61-1.829 1.22-3.048 1.524-1.828 0-3.657.305-5.485.305z",id:"Shape"}),s.a.createElement("path",{d:"M18.59 35.962h-6.4c-2.133 0-3.961-.305-5.485-.914-1.22-.305-2.134-.915-3.048-1.524-1.219-.914-2.133-2.743-2.133-4.267 0-1.524.61-2.743 1.524-3.962 2.133-2.133 5.18-3.657 9.142-4.876 0 0 .305 0 .305-.305 0 0-.305-.304-.305-.61C9.143 15.849 7.62 11.887 8.23 8.839c.304-2.133 1.523-4.267 3.352-5.486 3.048-2.438 7.619-2.438 10.667 0 1.828 1.524 3.047 3.353 3.352 5.486.305 3.352-.914 7.01-3.657 10.667-.61.61-1.524.61-2.133.305-.61-.61-.915-1.524-.305-2.134 2.438-3.047 3.352-6.095 3.047-8.228 0-1.524-.914-2.743-2.133-3.658-2.133-1.523-4.876-1.523-7.01 0-1.219.915-2.133 2.134-2.133 3.353-.305 2.438.914 5.18 3.048 8.228.61.915 1.524 1.829 1.219 2.743 0 1.22-.914 1.829-1.829 2.438 0 0-.304.305-.61.305-3.352 1.524-5.79 2.743-7.618 4.572-.305.61-.61 1.219-.61 1.828 0 .914.305 1.524.914 1.829.61.304 1.22.61 2.134.914 1.219.61 2.743.914 4.266.914h6.4c.915 0 1.524.61 1.524 1.524s-.61 1.524-1.524 1.524z",id:"Shape"}),s.a.createElement("path",{d:"M38.4 62.476H25.905c-2.743 0-5.181-.305-7.315-1.219-1.523-.61-2.742-1.219-3.657-2.133-1.828-.914-2.743-3.048-2.743-5.181 0-1.829.61-3.353 1.829-4.876 2.438-2.743 6.4-4.877 11.886-6.705l.914-.914-.914-.915c-3.962-5.18-5.79-9.752-5.181-14.019.61-2.743 1.828-5.18 4.266-7.01 3.962-2.742 10.058-2.742 13.715 0 2.438 1.83 3.962 4.267 4.266 7.01.61 4.267-1.219 9.143-4.876 14.02-.914.914-.914 1.218-.914 1.218s.61.305.914.61c5.486 1.828 9.448 3.962 11.886 6.705 1.219 1.219 1.829 3.047 1.829 4.876 0 2.133-.915 4.267-2.439 5.486-.914.914-2.133 1.523-3.657 2.133-2.438.61-4.876.914-7.314.914zM32 20.114c-1.829 0-3.657.61-5.181 1.524-1.829 1.22-2.743 3.048-3.048 5.181-.304 3.352 1.22 7.314 4.267 11.581.914.914 1.829 1.829 1.524 3.352 0 1.22-1.22 2.134-2.133 3.048 0 0-.305.305-.61.305-5.18 1.524-8.533 3.657-10.971 6.095-.305.61-.61 1.829-.61 2.743 0 1.219.61 2.438 1.524 3.047.61.61 1.828 1.22 3.048 1.524 1.828.61 3.961.915 6.095.915H38.4c2.133 0 4.267-.305 6.095-.915 1.22-.304 2.134-.914 3.048-1.524.914-.609 1.524-1.828 1.524-3.047 0-.914-.305-2.133-1.22-2.743-2.133-2.438-5.79-4.267-10.97-6.095-.306 0-.306-.305-.61-.305-.915-.914-2.134-1.829-2.134-3.048s.915-2.438 1.829-3.352c3.048-3.962 4.571-8.229 4.267-11.581-.305-2.133-1.22-3.657-3.048-5.18-1.524-.915-3.352-1.525-5.181-1.525z",id:"Shape"}))),s.a.createElement("span",{className:v.a["information-nav-name"]},"Friends")),s.a.createElement(E.b,{to:"/profile/".concat(a.userId,"/setting"),className:v.a["information-nav-element"]},s.a.createElement("div",{className:v.a["information-nav-img"]},s.a.createElement("svg",{"enable-background":"new 0 0 70 70",viewBox:"0 0 70 70"},s.a.createElement("path",{d:"M58.0959473,39.0869141c0.4135742-0.1328125,0.6938477-0.5175781,0.6938477-0.9521484v-6.2402344  c0-0.4345703-0.2807617-0.8193359-0.6943359-0.9521484l-5.8862305-1.8876953  c-0.2607422-0.7246094-0.527832-1.3701172-0.8081055-1.9541016l2.8291016-5.5195313  c0.1977539-0.3857422,0.1240234-0.8554688-0.1821289-1.1621094l-4.4101563-4.4199219  c-0.3066406-0.3085938-0.7758789-0.3808594-1.1621094-0.1845703l-5.5205078,2.8154297  c-0.6206055-0.3095703-1.2827148-0.5859375-1.9785156-0.8261719l-1.8842773-5.8935547  c-0.1328125-0.4140625-0.5175781-0.6953125-0.9526367-0.6953125h-6.2397461c-0.4335938,0-0.8178711,0.2792969-0.9516602,0.6923828  l-1.9047852,5.890625c-0.5966797,0.2070313-1.2832031,0.4716797-1.9794922,0.8193359l-5.4868164-2.8222656  c-0.3876953-0.1982422-0.8583984-0.1240234-1.1655273,0.1835938l-4.4199219,4.4306641  c-0.3056641,0.3066406-0.3793945,0.7744141-0.1826172,1.1601563l2.7973633,5.484375  c-0.3144531,0.6396484-0.5869141,1.3017578-0.8139648,1.9775391l-5.8696289,1.8916016  c-0.4121094,0.1328125-0.6918945,0.515625-0.6933594,0.9492188l-0.0195313,6.2402344  c-0.0014648,0.4345703,0.277832,0.8193359,0.690918,0.9541016l5.8930664,1.9140625  c0.2246094,0.6328125,0.4916992,1.2705078,0.8178711,1.9541016l-2.8125,5.5048828  c-0.1967773,0.3857422-0.1235352,0.8535156,0.1821289,1.1601563l4.3999023,4.4199219  c0.3061523,0.3076172,0.7758789,0.3857422,1.1621094,0.1855469l5.5175781-2.8095703  c0.6499023,0.3183594,1.2954102,0.5888672,1.9541016,0.8183594l1.9140625,5.8808594  c0.1337891,0.4121094,0.5175781,0.6904297,0.9506836,0.6904297h6.2397461c0.4331055,0,0.8168945-0.2783203,0.9506836-0.6904297  l1.9160156-5.8847656c0.6914063-0.2451172,1.3354492-0.5107422,1.9482422-0.8046875l5.5107422,2.8105469  c0.3876953,0.1962891,0.8540039,0.1220703,1.1611328-0.1826172l4.409668-4.4003906  c0.3061523-0.3056641,0.3813477-0.7744141,0.1850586-1.1601563l-2.8071289-5.5322266  c0.2939453-0.5927734,0.5625-1.2402344,0.8129883-1.9589844L58.0959473,39.0869141z M49.3781738,43.3867188l2.7114258,5.3427734  l-3.3818359,3.375l-5.3129883-2.7099609c-0.2880859-0.1484375-0.6274414-0.1464844-0.9135742,0.0019531  c-0.7924805,0.4101563-1.6445313,0.7626953-2.6040039,1.078125c-0.3022461,0.0996094-0.5395508,0.3378906-0.6376953,0.640625  l-1.8457031,5.6699219h-4.7875977l-1.8457031-5.6699219c-0.0996094-0.3066406-0.3417969-0.546875-0.6494141-0.6435547  c-0.8764648-0.2773438-1.7231445-0.6318359-2.5883789-1.0839844c-0.2861328-0.1484375-0.6279297-0.1513672-0.9165039-0.0039063  l-5.3212891,2.7089844l-3.3740234-3.3896484l2.7094727-5.3037109c0.1445313-0.2832031,0.1459961-0.6181641,0.0039063-0.9023438  c-0.4750977-0.9501953-0.8222656-1.7822266-1.0927734-2.6201172c-0.0986328-0.3046875-0.3374023-0.5439453-0.6425781-0.6435547  l-5.6762695-1.84375l0.0146484-4.7851563l5.6694336-1.8271484c0.3134766-0.1015625,0.5571289-0.3505859,0.6513672-0.6660156  c0.2675781-0.8945313,0.625-1.7636719,1.0639648-2.5859375c0.1538086-0.2880859,0.1572266-0.6337891,0.0083008-0.9248047  l-2.699707-5.2929688l3.3911133-3.3994141l5.3007813,2.7265625c0.2983398,0.1513672,0.6523438,0.1464844,0.9443359-0.015625  c0.7163086-0.3994141,1.4916992-0.7236328,2.59375-1.0839844c0.3041992-0.0986328,0.5424805-0.3378906,0.6411133-0.6425781  l1.8359375-5.6777344h4.7822266l1.8173828,5.6845703c0.0996094,0.3105469,0.34375,0.5527344,0.6542969,0.6494141  c0.9379883,0.2929688,1.809082,0.6582031,2.5888672,1.0839844c0.2900391,0.1572266,0.6396484,0.1630859,0.9335938,0.0126953  l5.3320313-2.71875l3.3823242,3.3896484l-2.7285156,5.3222656c-0.1479492,0.2890625-0.1464844,0.6318359,0.0039063,0.9189453  c0.3818359,0.7314453,0.7382813,1.5878906,1.0893555,2.6191406c0.1020508,0.2998047,0.3398438,0.5332031,0.6411133,0.6298828  l5.6655273,1.8173828V37.40625l-5.6757813,1.8261719c-0.3066406,0.0986328-0.5463867,0.3388672-0.6455078,0.6445313  c-0.3237305,1.0029297-0.6757813,1.8466797-1.0761719,2.5771484C49.2341309,42.7441406,49.2287598,43.0927734,49.3781738,43.3867188  z"}),s.a.createElement("path",{d:"M36.2541504,25.5644531c-5.2006836-0.6933594-9.9995117,2.9775391-10.6933594,8.1796875  c-0.3364258,2.5244141,0.3271484,5.0292969,1.8691406,7.0517578c1.5439453,2.0244141,3.7836914,3.3251953,6.3076172,3.6611328  c0.425293,0.0566406,0.8476563,0.0839844,1.265625,0.0839844c4.7050781,0,8.8120117-3.4921875,9.449707-8.2802734  C45.1462402,31.0585938,41.4685059,26.2597656,36.2541504,25.5644531z M42.470459,35.9970703  c-0.5483398,4.1201172-4.3393555,7.0273438-8.4692383,6.4775391c-1.9926758-0.265625-3.7617188-1.2919922-4.9804688-2.8916016  c-1.21875-1.5986328-1.7436523-3.578125-1.4775391-5.5751953c0.5029297-3.7744141,3.7402344-6.5273438,7.4492188-6.5273438  c0.3295898,0,0.6625977,0.0214844,0.9975586,0.0664063C40.111084,28.0966797,43.0178223,31.8867188,42.470459,35.9970703z"}))),s.a.createElement("span",{className:v.a["information-nav-name"]},"Setting"))))))},g=t(93),_=t(62),N=t.n(_),w=t(294),k=t.n(w),M=function(e){return s.a.createElement("div",{className:k.a.post},s.a.createElement("div",{className:k.a["post-info"]},s.a.createElement("img",{src:"https://png.pngtree.com/png-clipart/20190906/original/pngtree-520-couple-avatar-boy-avatar-little-dinosaur-cartoon-cute-png-image_4561296.jpg",alt:""}),e.message))},x=t(289),P=t.n(x),z=t(81),A=t(125),H=t(45),y=t(33),S=t(10),O=t(295),C=t.n(O),j=function(e){var a=e.profile;return s.a.createElement("div",null,s.a.createElement("div",null,s.a.createElement("div",null,s.a.createElement("div",{className:C.a["info-profile"]},s.a.createElement("span",{className:C.a["info-profile-name"]},"Full name:"),s.a.createElement("span",{className:C.a["info-profile-value"]},a.fullName)),s.a.createElement("div",{className:C.a["info-profile"]},s.a.createElement("span",{className:C.a["info-profile-name"]},"Looking for a job:"),s.a.createElement("span",{className:C.a["info-profile-value"]},a.lookingForAJob?"Yes":"No")),s.a.createElement("div",{className:C.a["info-profile"]},s.a.createElement("span",{className:C.a["info-profile-name"]},"Professional skills:"),s.a.createElement("span",{className:C.a["info-profile-value"]},a.lookingForAJobDescription)),s.a.createElement("div",{className:C.a["info-profile"]},s.a.createElement("span",{className:C.a["info-profile-name"]},"About me:"),s.a.createElement("span",{className:C.a["info-profile-value"]},a.aboutMe)),s.a.createElement("div",{className:C.a["info-profile"]},s.a.createElement("span",{className:C.a["info-profile-name"]},"Contact:"),s.a.createElement("div",{className:C.a["info-profile-value"]},s.a.createElement("a",{href:a.contacts.facebook,className:C.a["info-profile-network"]},s.a.createElement("svg",{viewBox:"0 0 32 32"},s.a.createElement("g",{id:"Outline_Color_copy_2"},s.a.createElement("path",{d:"M28 1c1.654 0 3 1.346 3 3v24c0 1.654-1.346 3-3 3H4c-1.654 0-3-1.346-3-3V4c0-1.654 1.346-3 3-3h24m0-1H4C1.8 0 0 1.8 0 4v24c0 2.2 1.8 4 4 4h24c2.2 0 4-1.8 4-4V4c0-2.2-1.8-4-4-4z"}),s.a.createElement("path",{d:"M13.597 25.261h3.827v-9.262h2.553l.338-3.191h-2.891l.004-1.598c0-.832.079-1.278 1.273-1.278h1.596V6.739h-2.554c-3.067 0-4.146 1.549-4.146 4.152v1.916h-1.912v3.192h1.912v9.262z"})))),s.a.createElement("a",{href:a.contacts.website,className:C.a["info-profile-network"]},s.a.createElement("svg",{viewBox:"0 0 32 32"},s.a.createElement("path",{d:"M27.88,25.13s0,0,0,0a14.88,14.88,0,0,0,0-18.18s0,0,0,0l-.07-.08c-.31-.4-.64-.78-1-1.14l-.12-.13A14.32,14.32,0,0,0,25.5,4.4l-.27-.2c-.32-.25-.64-.49-1-.71s-.41-.26-.62-.38-.47-.28-.72-.41l-.72-.35c-.23-.1-.47-.21-.72-.3s-.49-.19-.74-.27-.54-.17-.81-.24-.47-.13-.71-.18-.66-.13-1-.18-.39-.07-.59-.09a14.81,14.81,0,0,0-3.26,0c-.2,0-.39.06-.59.09s-.67.1-1,.18-.48.11-.71.18-.54.15-.81.24-.5.17-.74.27-.49.2-.72.3l-.72.35c-.25.13-.48.27-.72.41s-.42.24-.62.38-.66.46-1,.71l-.27.2A14.32,14.32,0,0,0,5.29,5.52l-.12.13c-.34.36-.67.74-1,1.14l-.07.08s0,0,0,0a14.88,14.88,0,0,0,0,18.18s0,0,0,0l.06.08c.32.4.65.78,1,1.15l.1.12A16.19,16.19,0,0,0,6.5,27.6l.25.18a12.2,12.2,0,0,0,1,.73c.2.14.41.26.62.38s.47.28.72.41l.72.35c.23.1.47.21.72.3s.49.19.74.27.54.17.81.24.47.13.71.18.66.13,1,.18.39.07.59.09a14.81,14.81,0,0,0,3.26,0c.2,0,.4-.06.59-.09s.67-.1,1-.18.48-.11.71-.18.54-.15.81-.24.5-.17.74-.27.49-.2.72-.3l.72-.35c.25-.13.48-.27.72-.41s.42-.24.62-.38a12.2,12.2,0,0,0,1-.73l.25-.18a16.19,16.19,0,0,0,1.22-1.12l.1-.12c.35-.37.68-.75,1-1.15Zm-1-2a15.6,15.6,0,0,0-1.73-1.05,21.78,21.78,0,0,0,0-12.12,15.6,15.6,0,0,0,1.73-1,12.93,12.93,0,0,1,0,14.22Zm-1.32,1.68c-.23.25-.47.49-.71.72l-.31.28-.64.52-.44.33-.57.37-.2.12A14.89,14.89,0,0,0,24.46,24a12.52,12.52,0,0,1,1.19.72Zm-17,1.85-.44-.33-.64-.52-.31-.28c-.24-.23-.48-.47-.71-.72l-.1-.11A12.52,12.52,0,0,1,7.54,24a14.89,14.89,0,0,0,1.78,3.17L9.12,27ZM8,16a20,20,0,0,1,.69-5.27A20.93,20.93,0,0,0,15,12V20a20.93,20.93,0,0,0-6.31,1.23A20,20,0,0,1,8,16ZM6.45,7.21c.23-.25.47-.49.71-.72l.31-.28.64-.52.44-.33L9.12,5l.2-.12A15.81,15.81,0,0,0,7.54,8a12.52,12.52,0,0,1-1.19-.72Zm17-1.85.44.33.64.52.31.28c.24.23.48.47.71.72l.1.11A12.52,12.52,0,0,1,24.46,8a15.81,15.81,0,0,0-1.78-3.17l.2.12ZM24,16a20,20,0,0,1-.69,5.27A20.93,20.93,0,0,0,17,20V12a20.93,20.93,0,0,0,6.31-1.23A20,20,0,0,1,24,16Zm-7,6a18.91,18.91,0,0,1,5.67,1.12c-1.26,3.09-3.3,5.25-5.67,5.74ZM17,10V3.11c2.37.49,4.41,2.65,5.67,5.74A18.91,18.91,0,0,1,17,10ZM15,3.11V10A18.91,18.91,0,0,1,9.33,8.85C10.59,5.76,12.63,3.6,15,3.11ZM15,22v6.86c-2.37-.49-4.41-2.65-5.67-5.74A18.91,18.91,0,0,1,15,22ZM5.13,8.89a15.6,15.6,0,0,0,1.73,1,21.78,21.78,0,0,0,0,12.12,15.6,15.6,0,0,0-1.73,1.05,12.93,12.93,0,0,1,0-14.22Z"}))),s.a.createElement("a",{href:a.contacts.vk,className:C.a["info-profile-network"]},s.a.createElement("svg",{viewBox:"0 0 32 32"},s.a.createElement("path",{fill:"#263238",d:"M20.14,30H11.86C4.027,30,2,27.973,2,20.14v-8.28C2,4.027,4.027,2,11.86,2h8.279   C27.973,2,30,4.027,30,11.86v8.28C30,27.973,27.973,30,20.14,30z M11.86,3C4.573,3,3,4.573,3,11.86v8.28   C3,27.427,4.573,29,11.86,29h8.279c7.287,0,8.86-1.573,8.86-8.86v-8.28C29,4.573,27.427,3,20.14,3H11.86z"}),s.a.createElement("path",{fill:"#263238",d:"M25.219,22.876h-2.188c-0.81,0-1.216-0.453-1.891-1.203c-0.266-0.295-0.592-0.658-1.025-1.092    c-1.194-1.151-1.7-1.267-1.886-1.267c-0.007,0.049-0.013,0.127-0.013,0.249v1.962c0,1.121-0.824,1.351-2.063,1.351    c-2.596,0-5.244-1.577-7.084-4.218c-2.65-3.715-3.543-6.735-3.543-7.542c0-0.711,0.456-1.119,1.25-1.119h2.188    c0.96,0,1.253,0.613,1.452,1.187c0.985,2.871,2.437,5.01,3.041,5.437c0.005-0.065,0.009-0.151,0.009-0.267v-3.222    c-0.041-0.729-0.283-1.029-0.497-1.293c-0.175-0.216-0.373-0.461-0.373-0.839c0-0.482,0.404-1.003,1.057-1.003h3.438    c0.514,0,1.125,0.226,1.125,1.304v4.335c0,0.02,0.001,0.038,0.002,0.055c0.113-0.078,0.274-0.225,0.505-0.455    c1.479-1.655,2.569-4.284,2.58-4.311c0.261-0.61,0.749-0.929,1.415-0.929h2.188c0.473,0,0.818,0.142,1.025,0.42    c0.138,0.185,0.27,0.514,0.116,1.028c-0.282,1.299-2.737,4.783-3.017,5.176c-0.021,0.035-0.106,0.173-0.117,0.22l0,0    c0.003,0,0.021,0.049,0.104,0.157c0.101,0.139,0.35,0.383,0.591,0.62c0.298,0.292,0.635,0.623,0.903,0.94    c1.18,1.327,1.743,2.122,1.94,2.734c0.164,0.566,0.019,0.922-0.133,1.123C26.163,22.626,25.845,22.876,25.219,22.876z     M18.289,18.313c0.452,0,1.106,0.185,2.526,1.554c0.456,0.456,0.794,0.831,1.069,1.137c0.654,0.729,0.813,0.872,1.146,0.872h2.188    c0.207,0,0.291-0.047,0.302-0.06l0,0c0,0,0.025-0.061-0.024-0.23c-0.184-0.572-1.026-1.569-1.739-2.372    c-0.257-0.304-0.57-0.61-0.848-0.881c-0.309-0.302-0.552-0.541-0.691-0.735c-0.498-0.641-0.303-1.072-0.018-1.53    c0.741-1.046,2.669-3.909,2.88-4.872c0.029-0.102,0.036-0.158,0.036-0.185c-0.018,0.002-0.085-0.013-0.21-0.013h-2.188    c-0.299,0-0.407,0.116-0.492,0.315c-0.044,0.107-1.162,2.806-2.776,4.611c-0.514,0.515-0.877,0.839-1.393,0.839    c-0.405,0-0.841-0.353-0.841-1.126v-4.335c0-0.192-0.023-0.273-0.034-0.301c-0.011,0.004-0.038-0.002-0.091-0.003h-3.438    c-0.049,0.038,0.037,0.144,0.094,0.214c0.263,0.325,0.659,0.816,0.719,1.894l0.001,3.25c0,0.399,0,1.335-0.906,1.335    c-1.283,0-3.199-3.589-4.089-6.179c-0.178-0.513-0.261-0.513-0.507-0.513H6.777c-0.196,0-0.253,0.038-0.254,0.038    c0.004,0.431,0.624,3.204,3.364,7.046c1.656,2.377,3.997,3.794,6.267,3.794c1.063,0,1.063-0.147,1.063-0.351v-1.962    C17.217,18.945,17.344,18.313,18.289,18.313z"}))),s.a.createElement("a",{href:a.contacts.twitter,className:C.a["info-profile-network"]},s.a.createElement("svg",{version:"1.1",x:"0px",y:"0px",viewBox:"0 0 32 32"},s.a.createElement("g",{id:"Outline_Color_copy_2"},s.a.createElement("path",{d:"M28 1c1.654 0 3 1.346 3 3v24c0 1.654-1.346 3-3 3H4c-1.654 0-3-1.346-3-3V4c0-1.654 1.346-3 3-3h24m0-1H4C1.8 0 0 1.8 0 4v24c0 2.2 1.8 4 4 4h24c2.2 0 4-1.8 4-4V4c0-2.2-1.8-4-4-4z"}),s.a.createElement("path",{d:"M18.328 8.56c-1.663.605-2.714 2.166-2.594 3.874l.04.659-.665-.081c-2.421-.309-4.537-1.358-6.333-3.121l-.879-.874-.226.646c-.479 1.439-.173 2.96.825 3.982.532.565.412.646-.505.309-.319-.107-.599-.188-.625-.148-.093.095.226 1.318.479 1.803.346.673 1.051 1.331 1.823 1.722l.652.309-.771.013c-.745 0-.771.013-.691.297.266.874 1.317 1.803 2.488 2.206l.825.282-.718.431a7.457 7.457 0 0 1-3.566.995c-.599.013-1.091.067-1.091.108 0 .134 1.624.887 2.568 1.184 2.834.874 6.2.497 8.728-.996 1.796-1.063 3.592-3.175 4.431-5.22.453-1.089.905-3.08.905-4.034 0-.619.04-.7.785-1.439.439-.43.851-.901.931-1.036.133-.256.119-.256-.559-.027-1.131.404-1.291.35-.731-.255.412-.43.905-1.211.905-1.439 0-.04-.199.027-.426.148-.239.135-.771.337-1.171.457l-.722.228-.652-.444c-.359-.242-.864-.511-1.131-.592-.679-.189-1.717-.162-2.329.053z"})))),s.a.createElement("a",{href:a.contacts.instagram,className:C.a["info-profile-network"]},s.a.createElement("svg",{viewBox:"0 0 50 50"},s.a.createElement("path",{d:"M16 3C8.832 3 3 8.832 3 16v18c0 7.168 5.832 13 13 13h18c7.168 0 13-5.832 13-13V16c0-7.168-5.832-13-13-13H16zm0 2h18c6.086 0 11 4.914 11 11v18c0 6.086-4.914 11-11 11H16C9.914 45 5 40.086 5 34V16C5 9.914 9.914 5 16 5zm21 6a2 2 0 0 0-2 2 2 2 0 0 0 2 2 2 2 0 0 0 2-2 2 2 0 0 0-2-2zm-12 3c-6.063 0-11 4.937-11 11s4.937 11 11 11 11-4.937 11-11-4.937-11-11-11zm0 2c4.982 0 9 4.018 9 9s-4.018 9-9 9-9-4.018-9-9 4.018-9 9-9z"}))),s.a.createElement("a",{href:a.contacts.youtube,className:C.a["info-profile-network"]},s.a.createElement("svg",{x:"0px",y:"0px",viewBox:"0 0 60 60"},s.a.createElement("path",{d:"M24.6 17.3c-.2-.2-.5-.2-.8 0-.2.1-.4.4-.4.7v21.8c0 .3.2.5.4.7.1.1.2.1.4.1.1 0 .3 0 .4-.1l16.6-10.9c.2-.1.3-.4.3-.6s-.1-.5-.3-.6L24.6 17.3zm.3 21.1v-19l14.5 9.5-14.5 9.5z"}),s.a.createElement("path",{d:"M50.3 8.9H9.7C4.5 8.9.3 13.1.3 18.3v23.3c0 5.2 4.2 9.4 9.4 9.4h40.7c5.2 0 9.4-4.2 9.4-9.4V18.4c0-5.2-4.3-9.5-9.5-9.5zm7.9 32.7c0 4.4-3.6 7.9-7.9 7.9H9.7c-4.4 0-7.9-3.6-7.9-7.9V18.4c0-4.4 3.6-7.9 7.9-7.9h40.7c4.4 0 7.9 3.6 7.9 7.9v23.2z"}))))))),s.a.createElement("div",null))},I=t(296),V=t.n(I),Z=Object(A.a)({form:"setting-form"})((function(e){var a=e.profile,t=e.handleSubmit,n=e.error;return s.a.createElement("form",{onSubmit:t,className:V.a.setting},s.a.createElement("div",null,s.a.createElement("div",{className:V.a["setting-item"]},s.a.createElement("span",{className:V.a["setting-item-name"]},"Full name:"),Object(y.c)("Full Name","fullName",[],y.a)),s.a.createElement("label",{className:V.a["checkbox-row"]},s.a.createElement("span",{className:d()(V.a["filter-text"],V.a["setting-item-name"])},"Looking for a job:"),s.a.createElement("div",{className:d()(V.a.checkbox,V.a["checkbox-primary"])},s.a.createElement("input",{type:"checkbox",className:V.a["checkbox-field"],value:"14"}),s.a.createElement("span",{className:V.a["checkbox-label"]}))),s.a.createElement("div",{className:V.a["setting-item"]},s.a.createElement("span",{className:V.a["setting-item-name"]},"Professional skills:"),Object(y.c)("Professional skills","lookingForAJobDescription",[],y.b)),s.a.createElement("div",{className:V.a["setting-item"]},s.a.createElement("span",{className:V.a["setting-item-name"]},"About me:"),Object(y.c)("About me","aboutMe",[],y.b))),s.a.createElement("div",null,Object.keys(a.contacts).map((function(e){return s.a.createElement("div",{key:e},s.a.createElement("b",null,e,": ",Object(y.c)(e,"contacts."+e,[],y.a)))}))),n&&s.a.createElement("div",null,n),s.a.createElement("div",null,s.a.createElement("button",null,"Save")))})),B=function(e){var a=e.profile,t=e.saveInfoAboutUser;return s.a.createElement("div",null,s.a.createElement(Z,{profile:a,onSubmit:function(e){t(e)},initialValues:a}))},U=(Object(H.a)(15),Object(H.b)(1)),F=s.a.memo((function(e){var a=e.posts.map((function(e,a){return s.a.createElement(M,{key:e.id,message:e.message,likeCount:e.likeCount})}));return s.a.createElement("div",{className:d()("app-wrapper","container")},s.a.createElement("div",{className:N.a.connections},s.a.createElement("div",{className:N.a["connections-count"]},s.a.createElement("span",{className:N.a["connections-count__purple"]},"15")," ",s.a.createElement("br",null)," Friends"),s.a.createElement("div",{className:N.a["connections-count"]},s.a.createElement("span",{className:N.a["connections-count__purple"]},"2")," ",s.a.createElement("br",null)," Posts")),s.a.createElement("div",{className:N.a.content},s.a.createElement(S.b,{path:"/profile/:userId?/post"},s.a.createElement("div",{className:d()(N.a.posts,"app-wrapper")},s.a.createElement(L,{onSubmit:function(a){a.newPost&&e.addPost(a.newPost)}}),s.a.createElement("div",null,a))),s.a.createElement(S.b,{path:"/profile/:userId?/information"},s.a.createElement(j,{profile:e.profile})),s.a.createElement(S.b,{path:"/profile/:userId?/friends"}),s.a.createElement(S.b,{path:"/profile/:userId?/setting"},s.a.createElement(B,{profile:e.profile,saveInfoAboutUser:e.saveInfoAboutUser}))))})),L=Object(A.a)({form:"profileAddPostForm"})((function(e){var a=e.handleSubmit;return s.a.createElement("form",{className:N.a.form,onSubmit:a},s.a.createElement(z.a,{component:y.a,name:"newPost",placeholder:"What is new with you",className:N.a.newPost,validate:[U]}),s.a.createElement("span",{className:N.a.bar}),s.a.createElement("button",{className:N.a.button},s.a.createElement(P.a,{width:30,height:30,className:N.a.qwe})))})),D=F,J=t(19),q=Object(J.b)((function(e){return{profile:e.profilePage.profile,posts:e.profilePage.posts,newPostText:e.profilePage.newPostText}}),{addPost:g.a,saveInfoAboutUser:g.e})(D),T=function(e){var a=e.profile,t=e.status,n=e.updateStatus,c=e.isOwner,l=e.savePhoto,r=e.saveInfoAboutUser;return s.a.createElement("div",null,s.a.createElement(b,{profile:a,status:t,updateStatus:n,isOwner:c,savePhoto:l}),s.a.createElement(q,{profile:a,status:t,updateStatus:n,isOwner:c,saveInfoAboutUser:r}))},R=t(287),W=t(8),G=function(e){function a(){return Object(n.a)(this,a),Object(l.a)(this,Object(r.a)(a).apply(this,arguments))}return Object(o.a)(a,e),Object(c.a)(a,[{key:"refreshProfile",value:function(){var e=this.props.match.params.userId;e||(e=this.props.logUserId)||this.props.history.push("/login"),this.props.getProfile(e),this.props.getStatus(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,a,t){this.props.match.params.userId!==e.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return s.a.createElement(T,Object.assign({},this.props,{profile:this.props.profile,isOwner:!this.props.match.params.userId,status:this.props.status,updateStatus:this.props.updateStatus,savePhoto:this.props.savePhoto}))}}]),a}(s.a.Component);a.default=Object(W.d)(Object(J.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,logUserId:e.auth.userId,isAuth:e.auth.isAuth}}),{getProfile:g.c,getStatus:g.d,updateStatus:g.g,savePhoto:g.f}),S.f,R.a)(G)}}]);
//# sourceMappingURL=3.43b78a11.chunk.js.map