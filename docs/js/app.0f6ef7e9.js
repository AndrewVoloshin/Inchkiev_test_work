(function(){"use strict";var e={396:function(e,t,a){var s=a(751),n=a(641);const o={class:"app__wrap"},l={class:"app__container"};function r(e,t,a,s,r,i){const c=(0,n.g2)("SliderApp"),d=(0,n.g2)("FeedbackForm"),u=(0,n.g2)("DynamicBlocks");return(0,n.uX)(),(0,n.CE)("div",o,[(0,n.Lk)("div",l,[(0,n.bF)(c),(0,n.bF)(d),(0,n.bF)(u)])])}const i={class:"slider"};function c(e,t,a,s,o,l){const r=(0,n.g2)("CardSlider");return(0,n.uX)(),(0,n.CE)("div",i,[(0,n.bF)(r,{class:"card1",ref:"card1",cardNumber:1,onClickedCard:t[0]||(t[0]=e=>l.reorderCards(1))},null,512),(0,n.bF)(r,{class:"card2",ref:"card2",cardNumber:2,onClickedCard:t[1]||(t[1]=e=>l.reorderCards(2))},null,512),(0,n.bF)(r,{class:"card3",ref:"card3",cardNumber:3,onClickedCard:t[2]||(t[2]=e=>l.reorderCards(3))},null,512)])}var d=a(33),u="data:image/png;base64,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",m=a.p+"img/eclipses.5f81c9d8.png",p=a.p+"img/dog.925d13a1.png",v="data:image/png;base64,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";const b=e=>((0,n.Qi)("data-v-6b0a4e34"),e=e(),(0,n.jt)(),e),g={class:"card"},k=(0,n.Fv)('<div class="eclipse" data-v-6b0a4e34><div class="eclipse__paint" data-v-6b0a4e34></div><p class="eclipse__text" data-v-6b0a4e34>LOREM IPSUM DOLOR SIT AMET</p></div><div class="card__content" data-v-6b0a4e34><h1 class="card__title" data-v-6b0a4e34>LOREM IPSUM</h1><p class="card__subtitle1" data-v-6b0a4e34>LOREM IPSUM DOLOR —</p><p class="card__subtitle2" data-v-6b0a4e34>LOREM</p><p class="card__subtitle3" data-v-6b0a4e34>IPSUM!</p><p class="card__subtitle-Ipsum" data-v-6b0a4e34>IPSUM !</p><p class="quote" data-v-6b0a4e34>LOREM IPSUM DOLOR SIT AMET,</p><p class="quote" data-v-6b0a4e34>CONSECTETUR ADIPISCING ELIT</p></div><div class="star" data-v-6b0a4e34><img src="'+u+'" alt="star" data-v-6b0a4e34></div><div class="eclipses-img" data-v-6b0a4e34><img src="'+m+'" alt="eclipses" data-v-6b0a4e34></div><div class="eclipses-css" data-v-6b0a4e34><div class="eclipse-fillgrey" data-v-6b0a4e34></div><div class="eclipse-borderwhite" data-v-6b0a4e34></div><div class="eclipse-cutimg" data-v-6b0a4e34><div class="fullimg" data-v-6b0a4e34><img src="'+p+'" alt="dog" data-v-6b0a4e34></div></div></div>',5),h={class:"eclipse-pagecount"},A={class:"eclipse-pagecount__text"},f=b((()=>(0,n.Lk)("img",{src:v,alt:"next slide"},null,-1))),C=[f];function L(e,t,a,s,o,l){return(0,n.uX)(),(0,n.CE)("div",g,[k,(0,n.Lk)("div",h,[(0,n.Lk)("div",A,(0,d.v_)(a.cardNumber)+"/3",1)]),(0,n.Lk)("div",{class:"slider__button",onClick:t[0]||(t[0]=(...e)=>l.clickedCard&&l.clickedCard(...e))},C)])}var y={props:{cardNumber:{type:Number}},methods:{clickedCard(){this.$emit("clickedCard","Clicked Card")}}},D=a(262);const E=(0,D.A)(y,[["render",L],["__scopeId","data-v-6b0a4e34"]]);var U=E,P={components:{CardSlider:U},methods:{reorderCards(e){this.cardNumber=e;const t=this.$refs["card1"],a=this.$refs["card2"],s=this.$refs["card3"];1===e&&(this.moveToThirdPosition(t),this.moveToFirstPosition(a),this.moveToSecondPosition(s)),2===e&&(this.moveToSecondPosition(t),this.moveToThirdPosition(a),this.moveToFirstPosition(s)),3===e&&(this.moveToFirstPosition(t),this.moveToSecondPosition(a),this.moveToThirdPosition(s))},moveToFirstPosition(e){e.$el.style.zIndex=3,e.$el.classList.add("position1"),e.$el.classList.remove("position2")},moveToSecondPosition(e){e.$el.style.zIndex=2,e.$el.classList.add("position2"),e.$el.classList.remove("position3")},moveToThirdPosition(e){e.$el.style.zIndex=1,e.$el.classList.add("position3"),e.$el.classList.remove("position1")}}};const I=(0,D.A)(P,[["render",c],["__scopeId","data-v-6a618eca"]]);var w=I;const Q=e=>((0,n.Qi)("data-v-778bc580"),e=e(),(0,n.jt)(),e),B={class:"feedback-form"},S={class:"feedback-form__container"},x={class:"column"},F={class:"greeting__container"},X=Q((()=>(0,n.Lk)("h2",{class:"title greeting__title"},"ПРЕДСТАВТЕСЯ, БУДЬ ЛАСКА",-1))),O={class:"greeting__content"},_=Q((()=>(0,n.Lk)("label",{class:"label greeting__label"},"* ПРІЗВИЩЕ",-1))),j={class:"greeting__content"},T=Q((()=>(0,n.Lk)("label",{class:"label greeting__label"},"* ІМ'Я",-1))),V={class:"greeting__content"},R=Q((()=>(0,n.Lk)("label",{class:"label greeting__label"},"ОРГАНІЗАЦІЯ ТА ПОСАДА",-1))),G={class:"greeting__content"},M={class:"custom-radio"},N=Q((()=>(0,n.Lk)("span",{class:"checkmark"},null,-1))),H=Q((()=>(0,n.Lk)("br",null,null,-1))),K={class:"custom-radio"},z=Q((()=>(0,n.Lk)("span",{class:"checkmark"},null,-1))),W=Q((()=>(0,n.Lk)("br",null,null,-1))),J={class:"custom-radio"},q=Q((()=>(0,n.Lk)("span",{class:"checkmark"},null,-1))),Z={class:"message__container"},Y=Q((()=>(0,n.Lk)("h2",{class:"title message__title"},"ПОВІДОМЛЕННЯ",-1))),$={class:"message__content"},ee=Q((()=>(0,n.Lk)("label",{class:"label message__label"},"ТЕМА ПОВІДОМЛЕННЯ",-1))),te={class:"message__content"},ae=Q((()=>(0,n.Lk)("label",{class:"label message__label"},"* ПОВІДОМЛЕННЯ",-1))),se={class:"column"},ne={class:"contact__container"},oe=Q((()=>(0,n.Lk)("h2",{class:"title contact__title"},"КОНТАКТНА ІНФОРМАЦІЯ",-1))),le={class:"contact__content"},re=Q((()=>(0,n.Lk)("label",{class:"label contact__label"},"* EMAIL",-1))),ie={class:"contact__content"},ce=Q((()=>(0,n.Lk)("label",{class:"label contact__label"},"КРАЇНА",-1))),de={class:"contact__content"},ue=Q((()=>(0,n.Lk)("label",{class:"label contact__label"},"МІСТО",-1))),me={class:"contact__content"},pe=Q((()=>(0,n.Lk)("label",{class:"label contact__label"},"ІНДЕКС",-1))),ve={class:"contact__content"},be=Q((()=>(0,n.Lk)("label",{class:"label contact__label"},"АДРЕСА",-1))),ge={class:"contact__content"},ke=Q((()=>(0,n.Lk)("label",{class:"label contact__label"},"* ТЕЛЕФОН",-1))),he=Q((()=>(0,n.Lk)("button",{class:"button-submit",type:"submit"},"відправити",-1)));function Ae(e,t,a,o,l,r){return(0,n.uX)(),(0,n.CE)("div",B,[(0,n.Lk)("form",{onSubmit:t[25]||(t[25]=(0,s.D$)(((...e)=>r.handleSubmit&&r.handleSubmit(...e)),["prevent"]))},[(0,n.Lk)("div",S,[(0,n.Lk)("div",x,[(0,n.Lk)("div",F,[X,(0,n.Lk)("div",O,[_,(0,n.bo)((0,n.Lk)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>l.formData.lastName=e),class:(0,d.C4)({"input greeting__input error":l.errors.lastName}),type:"text",onInput:t[1]||(t[1]=(...t)=>e.validateLastName&&e.validateLastName(...t))},null,34),[[s.Jo,l.formData.lastName]])]),(0,n.Lk)("div",j,[T,(0,n.bo)((0,n.Lk)("input",{"onUpdate:modelValue":t[2]||(t[2]=e=>l.formData.firstName=e),class:(0,d.C4)({"input greeting__input error":l.errors.firstName}),type:"text",onInput:t[3]||(t[3]=(...t)=>e.validateFirstName&&e.validateFirstName(...t))},null,34),[[s.Jo,l.formData.firstName]])]),(0,n.Lk)("div",V,[R,(0,n.bo)((0,n.Lk)("input",{"onUpdate:modelValue":t[4]||(t[4]=e=>l.formData.organization=e),class:(0,d.C4)({"input greeting__input error":l.errors.organization}),type:"text",onInput:t[5]||(t[5]=(...t)=>e.validateOrganization&&e.validateOrganization(...t))},null,34),[[s.Jo,l.formData.organization]])]),(0,n.Lk)("div",G,[(0,n.Lk)("label",M,[(0,n.bo)((0,n.Lk)("input",{"onUpdate:modelValue":t[6]||(t[6]=e=>l.formData.role=e),type:"radio",name:"role",value:"СПОЖИВАЧ"},null,512),[[s.XL,l.formData.role]]),N,(0,n.eW)(" СПОЖИВАЧ ")]),H,(0,n.Lk)("label",K,[(0,n.bo)((0,n.Lk)("input",{"onUpdate:modelValue":t[7]||(t[7]=e=>l.formData.role=e),type:"radio",name:"role",value:"МЕДИЧНИЙ ПРАЦІВНИК"},null,512),[[s.XL,l.formData.role]]),z,(0,n.eW)(" МЕДИЧНИЙ ПРАЦІВНИК ")]),W,(0,n.Lk)("label",J,[(0,n.bo)((0,n.Lk)("input",{"onUpdate:modelValue":t[8]||(t[8]=e=>l.formData.role=e),type:"radio",name:"role",value:"ЖУРНАЛІСТ"},null,512),[[s.XL,l.formData.role]]),q,(0,n.eW)(" ЖУРНАЛІСТ ")])])]),(0,n.Lk)("div",Z,[Y,(0,n.Lk)("div",$,[ee,(0,n.bo)((0,n.Lk)("input",{"onUpdate:modelValue":t[9]||(t[9]=e=>l.formData.subject=e),class:(0,d.C4)({"input message__input error":l.errors.subject}),type:"text",onInput:t[10]||(t[10]=(...t)=>e.validateSubject&&e.validateSubject(...t))},null,34),[[s.Jo,l.formData.subject]])]),(0,n.Lk)("div",te,[ae,(0,n.bo)((0,n.Lk)("textarea",{"onUpdate:modelValue":t[11]||(t[11]=e=>l.formData.message=e),class:(0,d.C4)({"textarea error":l.errors.message}),name:"message",rows:"5",onInput:t[12]||(t[12]=(...t)=>e.validateMessage&&e.validateMessage(...t))},null,34),[[s.Jo,l.formData.message]])])])]),(0,n.Lk)("div",se,[(0,n.Lk)("div",ne,[oe,(0,n.Lk)("div",le,[re,(0,n.bo)((0,n.Lk)("input",{"onUpdate:modelValue":t[13]||(t[13]=e=>l.formData.email=e),class:(0,d.C4)({"input contact__input error":l.errors.email}),type:"email",onInput:t[14]||(t[14]=(...t)=>e.validateEmail&&e.validateEmail(...t))},null,34),[[s.Jo,l.formData.email]])]),(0,n.Lk)("div",ie,[ce,(0,n.bo)((0,n.Lk)("input",{"onUpdate:modelValue":t[15]||(t[15]=e=>l.formData.country=e),class:(0,d.C4)({"input contact__input error":l.errors.country}),type:"text",onInput:t[16]||(t[16]=(...t)=>e.validateCountry&&e.validateCountry(...t))},null,34),[[s.Jo,l.formData.country]])]),(0,n.Lk)("div",de,[ue,(0,n.bo)((0,n.Lk)("input",{"onUpdate:modelValue":t[17]||(t[17]=e=>l.formData.city=e),class:(0,d.C4)({"input contact__input error":l.errors.city}),type:"text",onInput:t[18]||(t[18]=(...t)=>e.validateCity&&e.validateCity(...t))},null,34),[[s.Jo,l.formData.city]])]),(0,n.Lk)("div",me,[pe,(0,n.bo)((0,n.Lk)("input",{"onUpdate:modelValue":t[19]||(t[19]=e=>l.formData.index=e),class:(0,d.C4)({"input contact__input error":l.errors.index}),type:"text",onInput:t[20]||(t[20]=(...t)=>e.validateIndex&&e.validateIndex(...t))},null,34),[[s.Jo,l.formData.index]])]),(0,n.Lk)("div",ve,[be,(0,n.bo)((0,n.Lk)("input",{"onUpdate:modelValue":t[21]||(t[21]=e=>l.formData.address=e),class:(0,d.C4)({"input contact__input error":l.errors.address}),type:"text",onInput:t[22]||(t[22]=(...t)=>e.validateAddress&&e.validateAddress(...t))},null,34),[[s.Jo,l.formData.address]])]),(0,n.Lk)("div",ge,[ke,(0,n.bo)((0,n.Lk)("input",{"onUpdate:modelValue":t[23]||(t[23]=e=>l.formattedPhone=e),onInput:t[24]||(t[24]=(...e)=>r.formatPhone&&r.formatPhone(...e)),class:(0,d.C4)({"input contact__input error":l.errors.phone}),type:"text",id:"phone",placeholder:"(___) ___-__-__",maxlength:"15"},null,34),[[s.Jo,l.formattedPhone]])])]),he])])],32)])}var fe={data(){return{formData:{lastName:"",firstName:"",organization:"",role:"СПОЖИВАЧ",subject:"",message:"",email:"",country:"",city:"",index:"",address:"",phone:""},formattedPhone:"",errors:{lastName:!1,firstName:!1,organization:!1,subject:!1,message:!1,email:!1,country:!1,city:!1,index:!1,address:!1,phone:!1},validationPatterns:{lastName:/^[А-Яа-яҐґЄєЇїІі]+$/,firstName:/^[А-Яа-яҐґЄєЇїІі]+$/,organization:/^[А-Яа-яҐґЄєЇїІі]*$/,country:/^[А-Яа-яҐґЄєЇїІі]*$/,city:/^[А-Яа-яҐґЄєЇїІі]*$/,index:/^\d*$/,address:/^[А-Яа-яҐґЄєЇїІі\d/\-,]*$/,phone:/^\(\d{3}\) \d{3}-\d{2}-\d{2}$/,email:/^[^\s@]+@[^\s@]+\.[^\s@]+$/,subject:/^[А-Яа-яҐґЄєЇїІі\d\s\-,]*$/,message:/^[А-Яа-яҐґЄєЇїІі\d\s\-,]+$/}}},methods:{handleSubmit(){this.validateForm()?alert(JSON.stringify(this.formData,null,2)):alert("Будь ласка, заповніть всі обов'язкові поля правильно.")},validateForm(){let e=!0;return Object.keys(this.errors).forEach((t=>{this.errors[t]=!this.validateField(t,this.formData[t]),this.errors[t]&&(e=!1)})),e},validateField(e,t){const a=this.validationPatterns[e];return"phone"===e?this.validatePhoneField(a):!a||a.test(t)},validatePhoneField(e){return e?.test(this.formattedPhone)},formatPhone(e){const t=e.target.value.replace(/\D/g,"");let a="";t.length>0&&(a+="("+t.substring(0,3)),t.length>=4&&(a+=") "+t.substring(3,6)),t.length>=7&&(a+="-"+t.substring(6,8)),t.length>=9&&(a+="-"+t.substring(8,10)),this.formattedPhone=a,this.formData.phone=t}}};const Ce=(0,D.A)(fe,[["render",Ae],["__scopeId","data-v-778bc580"]]);var Le=Ce;const ye={class:"sort-buttons"},De={class:"sort-buttons__container"},Ee={class:"sort-button"},Ue={class:"sort-button"},Pe={class:"sort-button"},Ie={class:"dynamic-blocks"},we={class:"dynamic-blocks__container"},Qe={class:"block__img"},Be=["src","alt"],Se={class:"block__text"},xe={class:"block__description"};function Fe(e,t,a,s,o,l){return(0,n.uX)(),(0,n.CE)(n.FK,null,[(0,n.Lk)("div",ye,[(0,n.Lk)("div",De,[(0,n.Lk)("label",Ee,[(0,n.Lk)("input",{type:"radio",name:"sort",onChange:t[0]||(t[0]=e=>l.sortByAlphabetically())},null,32),(0,n.eW)(" відсортувати блоки за заголовком відповідно до алфавітного порядку ")]),(0,n.Lk)("label",Ue,[(0,n.Lk)("input",{type:"radio",name:"sort",onChange:t[1]||(t[1]=e=>l.sortByPicLeftT())},null,32),(0,n.eW)(' вивести всі блоки у форматі "зображення - зліва, текст - справа" ')]),(0,n.Lk)("label",Pe,[(0,n.Lk)("input",{type:"radio",name:"sort",onChange:t[2]||(t[2]=e=>l.sortByChessPattern())},null,32),(0,n.eW)(' вивести всі блоки у форматі "зображення - зліва, текст - справа" і навпаки в шаховому порядку ')])])]),(0,n.Lk)("div",Ie,[(0,n.Lk)("div",we,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(o.movies,(e=>((0,n.uX)(),(0,n.CE)("div",{class:"dynamic-blocks__content",key:e.id},[(0,n.Lk)("div",Qe,[(0,n.Lk)("img",{src:this.picUrl+e.poster_path,alt:e.title},null,8,Be)]),(0,n.Lk)("div",Se,[(0,n.Lk)("h3",null,(0,d.v_)(e.title),1),(0,n.Lk)("p",xe,(0,d.v_)(e.overview),1)])])))),128))])])],64)}var Xe={data(){return{movies:[],styleEChessPattern:null,moviesUrl:"https://api.themoviedb.org/3/discover/movie?api_key=3685d3eb8695f087227e0ee980f3ae4d&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1",picUrl:"https://image.tmdb.org/t/p/w185_and_h278_bestv2/"}},methods:{async getMovies(){try{const e=await fetch(this.moviesUrl),t=await e.json(),a=t.results.slice(0,5);return a}catch(e){return console.error("Error fetching movies:",e),[]}},sortByAlphabetically(){this.movies.sort(((e,t)=>e.title.localeCompare(t.title)))},sortByPicLeftT(){this.styleChessPattern&&(document.head.removeChild(this.styleChessPattern),this.styleChessPattern=null)},sortByChessPattern(){this.styleChessPattern||this.addStyleChessPattern()},addStyleChessPattern(){const e=document.createElement("style");e.type="text/css",e.innerHTML="\n                .dynamic-blocks__content:nth-child(even) {\n                    padding: 30px 40px 30px 53px;\n                    justify-content: space-between;\n                }\n\n                .dynamic-blocks__content:nth-child(even) .block__img {\n                    order: 2;\n                }\n\n                .dynamic-blocks__content:nth-child(even) .block__text {\n                    order: 1;\n                    margin-top: -9px;\n                }\n            ",this.styleChessPattern=e,document.head.appendChild(e)}},async mounted(){this.movies=await this.getMovies(),this.addStyleChessPattern()}};const Oe=(0,D.A)(Xe,[["render",Fe],["__scopeId","data-v-348878e8"]]);var _e=Oe,je={name:"App",components:{SliderApp:w,FeedbackForm:Le,DynamicBlocks:_e}};const Te=(0,D.A)(je,[["render",r]]);var Ve=Te;(0,s.Ef)(Ve).mount("#app")}},t={};function a(s){var n=t[s];if(void 0!==n)return n.exports;var o=t[s]={exports:{}};return e[s](o,o.exports,a),o.exports}a.m=e,function(){var e=[];a.O=function(t,s,n,o){if(!s){var l=1/0;for(d=0;d<e.length;d++){s=e[d][0],n=e[d][1],o=e[d][2];for(var r=!0,i=0;i<s.length;i++)(!1&o||l>=o)&&Object.keys(a.O).every((function(e){return a.O[e](s[i])}))?s.splice(i--,1):(r=!1,o<l&&(l=o));if(r){e.splice(d--,1);var c=n();void 0!==c&&(t=c)}}return t}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[s,n,o]}}(),function(){a.d=function(e,t){for(var s in t)a.o(t,s)&&!a.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.p="/"}(),function(){var e={524:0};a.O.j=function(t){return 0===e[t]};var t=function(t,s){var n,o,l=s[0],r=s[1],i=s[2],c=0;if(l.some((function(t){return 0!==e[t]}))){for(n in r)a.o(r,n)&&(a.m[n]=r[n]);if(i)var d=i(a)}for(t&&t(s);c<l.length;c++)o=l[c],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return a.O(d)},s=self["webpackChunkinchkiev_test_work"]=self["webpackChunkinchkiev_test_work"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var s=a.O(void 0,[504],(function(){return a(396)}));s=a.O(s)})();
//# sourceMappingURL=app.0f6ef7e9.js.map