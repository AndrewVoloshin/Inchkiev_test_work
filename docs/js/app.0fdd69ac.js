(function(){"use strict";var t={684:function(t,e,a){var s=a(751),n=a(641);const l={class:"app__wrap"},r={class:"app__container"};function o(t,e,a,s,o,i){const c=(0,n.g2)("SliderApp"),d=(0,n.g2)("FeedbackForm"),u=(0,n.g2)("DynamicBlocks");return(0,n.uX)(),(0,n.CE)("div",l,[(0,n.Lk)("div",r,[(0,n.bF)(c),(0,n.bF)(d),(0,n.bF)(u)])])}var i=a(33);const c={class:"slider"};function d(t,e,a,s,l,r){const o=(0,n.g2)("CardSlider");return(0,n.uX)(),(0,n.CE)("div",c,[(0,n.bF)(o,{class:(0,i.C4)(["card1",{position3:1===l.cardNumber,position2:2===l.cardNumber,position1:3===l.cardNumber}]),ref:"card1",cardNumber:1,onClickedCard:e[0]||(e[0]=t=>r.reorderCards(1))},null,8,["class"]),(0,n.bF)(o,{class:(0,i.C4)(["card2",{position1:1===l.cardNumber,position3:2===l.cardNumber,position2:3===l.cardNumber}]),ref:"card2",cardNumber:2,onClickedCard:e[1]||(e[1]=t=>r.reorderCards(2))},null,8,["class"]),(0,n.bF)(o,{class:(0,i.C4)(["card3",{position2:1===l.cardNumber,position1:2===l.cardNumber,position3:3===l.cardNumber&&l.isFirstStart,"init-position":!l.isFirstStart}]),ref:"card3",cardNumber:3,onClickedCard:e[2]||(e[2]=t=>r.reorderCards(3))},null,8,["class"])])}var u="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACgCAYAAACLz2ctAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAA0hSURBVHgB7Z2Pdds2EIfhTJARPEJG0AjZoNqg3iDcIOkEcidIMwGzgUdQNkg3+FWsDxZEAyT+3AEgdd97frYsEiCJT5AOB4HGKNmAMEo2H4yiNEQFVJqiAipNUQGVpuxCwEsc8PHy82juhOl8jdIHl8Y4XH5+X35OpjKtouDpXC8/58vP0Shtod4PJGHVnqGFgFNPjyuPZuNs/i344eHh38uvn5efSb4ns38O9PvH5dx/GaU99Db8fy9oKtKoBzxTtQej9AO9BVdtmNoCXqr6TFWejdIXl0YZqHFGU4kGAn6nKo9G6QsKRmwvWCUYqSng3oKPXXJpmG/UQIOpQGUBT1Rd9eEmJRI3GKnRC1YW8KzBxwaYPgPW+pxUS8DpXKiqF6P0zaWRnmoFIxUFrPaiUgqZBSMHI0gNAS/Ff6Jqdjn0srvZMJQZ+Ysefjbb50/6/dMo28DpNUSDEekeUIdeNozzuWkwQlQQ8Fjr86zCjDMkIxY5VhDwrMFHIS3fOqSDEUkBnRdQs+ADW5/4iuvEyUfTAAjnh4UFPFHxTaaY0efPqe22mXnB63CIfQtpIiGuk1Uh8WqWEhCNgw9HvmZtx0IPJwLBYERQwK9UdIuvGexDPkvrE4LgZFVBAe31OpiK7E4+SwcSjlQ368C0hIC4Dr1UDT52K5+l5QlCKD8sJOBIxR5NJXYvn6XViUIoP8wtIK7BR7Vv+N2NfJaGEtrJqt8MEwICnqjIKsHH3clnaXHiEJisyingrJd+NMLcrXyWRhKOVB/L4C6zgDb4qDGP8b7ls9S+ELh+rZGlkZkFtNfhaARR+WbUvCBgDka4BESlvK/KF6CyhAPV890UwijgiYoSCz5UvhVqXSAw5oc5BESFvK/KF0lFCUeqYzAFMAloB8n/MQKofInUuGBgyg8zCWjP9WCYUfkyqSRhccOXCgjBvK/KV4j0BQTDZFUGAUcq4mgYUfmYkLyQuB2S+WQyKBEQQsGHyseMsIRFixkVCnii3dmGXlQ+IaQuLArzw4UCnkt6X095Kp8kghKOVGZyfjhXQDAvNqTyVULiQqNgsmqBgC+069EUovJVhvuCoyA/nCMgGPO+Kl8jBCQcqKykyaqZAp5ot6LgY/fy4fVzyqPpFM4GQOZiRqkCgmnoZUvy0TvMwaTinOB3oM9lYZklHKmcIWGfVAFt8FEy+L0J+fD6UWPMeWFba59xy7nHXpGrQZCRH84Q0B7n0WTQu3zkzRdcP1Nb+U5Zx0onfHRO2jIVeDCdwChhUjCSIiAKbzKDjuWjF+9Xj3gDuL7dRxfw+0zEF6CPpcM4GgiJ+eFEAbNvMoMO5cNrbzcNYY0zJ0ZIdk50MZ5x2ytOf59aX5jShkLiZNVYAVEQfKAz+fAasH2BZG+XcDDHwCvgaBrBIKHtqYaIbWMFPNGmSUMv6Eg+3AYVN21dXTzPwU2vCl/Q8meLi1bScEjIDycIaI/lYCJBB/IhHFR8Q48jI+goaCmUcKT9Pq9styogMiadorF88Pd20+f9+m+zudBJ+HrFal12bkMiMj8cKeBImx2N4DGXglZBhTR0Qb/htlfMHxvKqz+pQRGZH14TEEhbbAgN5EONIZReQKOgJVPC1cWMIgQ80SarwQcqykcvsM+BttjDzX2WwXUox33VnSHYK6Y2MCKCkSUBkTD0gkryYWtBhTR0QXxBi0j+OUPCkbZ9Cjy/JKANPtY+R4rLh/AQyhP29jabC5aDlkfDREqD45o+ewk8vySgreNoGI4lFVx7u/PsmnY7uaQLqFGe4B/Kqf79CSwEIyEBETHpFELy4Z6CCmngD1pY8s+xAmAhP7wg4Mm+aErqjgV7HULpBQjln2NEwEJ+2CcgVoIPMMqH5bwsy7uFMgOvveIL3r/SjyaDSAlHen6Y/d8noO0xTzl1RR7zARpUtAWMQcuaGAhMVg0IaMs5pNQRcYw6hNIjYMo/R0j4Tqy5gAjkfVEgH8k/n4epQUWPwD9p9ozI/POSKPAEIx4BR/rXMabMhePQoGLLwB+0ROWfQ8LAkx92BYQn+EBe9kWHUPYEMvLPCxLe5IdnAp7o4WmpjEB9wbysircTcO0VXc4I9Io+gTDLDzvluPdG/hQjHzSouE+QELQEJBzp8ZOzrw0+XtbkQ3iypw6h3BuIGMrxCGVvJj3O9pkYEP78+AXvpZ/KOBjlviHJBgTyzzMJfyPM2ZUPGlQoqSCcf/YJ6sN+jhtn/58eH4yixAD/UE4qGlQoZSA8aXaJERpURPEwXS2jKI34YBRF6ReE87JLnNHDkhXKdoF/CCWVMzpYtEnZEAhP9vwWKeMZr0M2bJNmlZ2Dlbws3mdDQvx2tpn2CS3a9AXaKyrw93ZnOJkKj3yD87fbuwG3S5CccZvOi8o/KzsH16DC9xZ5mG3rm4zwdpMZZ98np4yYyQiL+WdlhyAxLxuQ75PzeD4d622yKuKmY4UyLScVcScgcxEehCeknqwk9Ph/6O/5ZNWUCalHdLbSrFIACiZ7Lsjnm3LvCnhw6vm4VNZK3c+ouGiTwggKvy+7JAw8iw25AtJjW/cQU+bCcSwt2rT/5dO2BPy9nW2sQ0I5a8GDfe7o/G8uoO0Fub+WqUFLb4BxsifiIlefWDcC0v+8ixmhQEJnfx3KaQkEvi8bIwauwccw+79PwMEeU05dkcfsC1pYFm1SPEBoEZ5I+d4FH85zPgEXb3YDJgmdsp7BvGiTQkBwEZ5YEbCw1JpPQPq/PeahpO4UwLxo092CCt+XTREAgcWG6LmQgPYz42+OY0gBnd00aDPAvwjPdOGmt1m2eXWJ8h3tdoHnvQLSc7Y3Sh7w5gAatKyDyovwpDY4Vm4ysyJg7M1uxCR06gi9uCdB72/SLBp8XzZDvmDw4WyzJGDUzW5yji0XFCzatAvQaBGenAZGxE1mlgSk51dvdlNyjCXgXvLPaLwIT6Z8bu/1uLDdmoAH53x7vVWX7RXn+eev2HKviA7WMc5tUMTfZGZRQNrGXoMnI3jMpSCcfz5hK0ELrr3d6mTPCseS3ZDw5H0D28UI+DlG5tk+TSR06p86j+dZG57Ra/4ZnS3CUyiffdtcvb9vpIDRwchsv6YSOscgetOgkoOzXfY4O7gRDbvs0oZD2h0uVwWk7Qba9LtJAB1I6BxLH0ELwkHF0PpVwSDf6tDLbPtYARfzwxHHlH1O3KBV/hmd3xyFo6FwDT7+idw+SkDa1l67wSSCziS0wJ9/5ps0i42sY8zVQE4ZURcwUUD72fK3yQCdSjgB7qCFTvaEDazsySif7f1Wgw9nn2gBafvkYGS2f7cSTmA5/xzvDW4jtxGdjgNxNghW8r6BfVIFtMFI9JCMp4yuJbTgNv8c/aKeF9BtoppZvqTgw9kvVUD3hS06kbYXbK9o9gR3AyBh6GW2X5KAtI/NDw+mgC1JuCskLjwWJp2u7Jcj4FswgkqzuhUmhOQ7UnkvJpEcAWm/kXaNyg+vlKUS1kDqQsNZbMgkUiBg1GTVhPJUQkkE5XtbbMhkUCBgVn54pUyVUALJC4vM4MPZP0tA2neg3VcnqyaUqRJyIixf1tDLrIwSAW3vWxyMzMpVCTmQvpCInHS6Uka2gLT/SEUMhhGVsJAaFxCRk05XyigV8GDP0TCjEmZSST6Whi8VkMpgDUZmZauEKdS6YLjmKIvG4ZgEHEo/CqyUrxLGUFG+4uDDKYtDwOzJqgl1qIRL1LxAKBx6mZVVLCCVY3vkwQihEgaofWGQmfcNlMUloP1Myjok46lHJXRpIN/R1mUY4BKQyhqpONE1oFVCosWFQMak05XyOAVkzQ+v1HXfEjaS75H7bY5ZQPb88Ep99ylhqxMHY/DhlMkmIJUXvZgRU333JWFD+aIWG8ool1vAKsHIrM77kLDliYIh7xsol1VAKnOkYosnqybUuW8JW58gGPK+gXIlBExezIip3n1K2IF89m1NIuHPLiCVWy0YmdW7Lwl7OCFcg4+vhhlBAYcWvSDVvQ8JO5HPDr1Aon5BAcXzwyv1z9tumwuZ47qK0qNpAK6Du2xDL7PyRQSkskcqfjANcCR8Nlum5asHjHnfQPmSAr4NyZhGYOufAVsC5rxvoA4xAan8F8kXkCIImPO+gTqkBWwWjCgFQDj4cOqRFpBlMaOe+WD2yRf6/fzw8PDLbJTLsf97+fU3PRSdpqUw4gQfor2GdA9IdVTPDysFQCjvG6hLXECqZ6SqquWHlUxQsNhQRl21BKz2olIKgGDeN1BfLQGrTlatyd6CkD/o90+zIygY+YseajDSI7WGXmZ1VukBqa6PewxG9tQDHuj3jy0PvYSgXvDn5WeST4OR3nCGXqq9RdXsAam+5vlhxUPt4MOpt6qAVOcug5FNg+vSFkdTkUYCan64J1oEH07dLQR0h2Q2H4zsIQg5XH5+mY3nfWOhYOTH5Wf6vcsJCpsEbaauV+8Bqd7HPfR+SiGtBNwTe52OpWwEFVBpigqoNEUFVJryHzTXcF+sbj2AAAAAAElFTkSuQmCC",p=a.p+"img/eclipses.5f81c9d8.png",m=a.p+"img/dog.925d13a1.png",v="data:image/png;base64,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";const k=t=>((0,n.Qi)("data-v-50118e31"),t=t(),(0,n.jt)(),t),g={class:"card"},b=(0,n.Fv)('<div class="eclipse" data-v-50118e31><div class="eclipse__paint" data-v-50118e31></div><p class="eclipse__text" data-v-50118e31>LOREM IPSUM DOLOR SIT AMET</p></div><div class="card__content" data-v-50118e31><h1 class="card__title" data-v-50118e31>LOREM IPSUM</h1><p class="card__subtitle1" data-v-50118e31>LOREM IPSUM DOLOR —</p><p class="card__subtitle2" data-v-50118e31>LOREM</p><p class="card__subtitle3" data-v-50118e31>IPSUM!</p><p class="card__subtitle-Ipsum" data-v-50118e31>IPSUM !</p><p class="quote" data-v-50118e31>LOREM IPSUM DOLOR SIT AMET,</p><p class="quote" data-v-50118e31>CONSECTETUR ADIPISCING ELIT</p></div><div class="star" data-v-50118e31><img src="'+u+'" alt="star" data-v-50118e31></div><div class="eclipses-img" data-v-50118e31><img src="'+p+'" alt="eclipses" data-v-50118e31></div><div class="eclipses-css" data-v-50118e31><div class="eclipse-fillgrey" data-v-50118e31></div><div class="eclipse-borderwhite" data-v-50118e31></div><div class="eclipse-cutimg" data-v-50118e31><div class="fullimg" data-v-50118e31><img src="'+m+'" alt="dog" data-v-50118e31></div></div></div>',5),A={class:"eclipse-pagecount"},h={class:"eclipse-pagecount__text"},f=k((()=>(0,n.Lk)("img",{src:v,alt:"next slide"},null,-1))),C=[f];function L(t,e,a,s,l,r){return(0,n.uX)(),(0,n.CE)("div",g,[b,(0,n.Lk)("div",A,[(0,n.Lk)("div",h,(0,i.v_)(a.cardNumber)+"/3",1)]),(0,n.Lk)("div",{class:"slider__button",onClick:e[0]||(e[0]=(...t)=>r.clickedCard&&r.clickedCard(...t))},C)])}var y={props:{cardNumber:{type:Number}},methods:{clickedCard(){this.$emit("clickedCard","Clicked Card")}}},D=a(262);const E=(0,D.A)(y,[["render",L],["__scopeId","data-v-50118e31"]]);var U=E,I={components:{CardSlider:U},data(){return{cardNumber:3,isFirstStart:!1}},methods:{reorderCards(t){this.isFirstStart=!0,this.cardNumber=t}}};const w=(0,D.A)(I,[["render",d],["__scopeId","data-v-ec1bbf34"]]);var P=w;const Q=t=>((0,n.Qi)("data-v-66c72af4"),t=t(),(0,n.jt)(),t),B={class:"feedback-form"},S={class:"feedback-form__container"},x={class:"column"},F={class:"greeting__container"},X=Q((()=>(0,n.Lk)("h2",{class:"title greeting__title"},"ПРЕДСТАВТЕСЯ, БУДЬ ЛАСКА",-1))),N={class:"greeting__content"},_=Q((()=>(0,n.Lk)("label",{class:"label greeting__label"},"* ПРІЗВИЩЕ",-1))),O={class:"greeting__content"},j=Q((()=>(0,n.Lk)("label",{class:"label greeting__label"},"* ІМ'Я",-1))),V={class:"greeting__content"},R=Q((()=>(0,n.Lk)("label",{class:"label greeting__label"},"ОРГАНІЗАЦІЯ ТА ПОСАДА",-1))),G={class:"greeting__content"},M={class:"custom-radio"},H=Q((()=>(0,n.Lk)("span",{class:"checkmark"},null,-1))),K=Q((()=>(0,n.Lk)("br",null,null,-1))),z={class:"custom-radio"},W=Q((()=>(0,n.Lk)("span",{class:"checkmark"},null,-1))),T=Q((()=>(0,n.Lk)("br",null,null,-1))),J={class:"custom-radio"},q=Q((()=>(0,n.Lk)("span",{class:"checkmark"},null,-1))),Z={class:"message__container"},Y=Q((()=>(0,n.Lk)("h2",{class:"title message__title"},"ПОВІДОМЛЕННЯ",-1))),$={class:"message__content"},tt=Q((()=>(0,n.Lk)("label",{class:"label message__label"},"ТЕМА ПОВІДОМЛЕННЯ",-1))),et={class:"message__content"},at=Q((()=>(0,n.Lk)("label",{class:"label message__label"},"* ПОВІДОМЛЕННЯ",-1))),st={class:"column"},nt={class:"contact__container"},lt=Q((()=>(0,n.Lk)("h2",{class:"title contact__title"},"КОНТАКТНА ІНФОРМАЦІЯ",-1))),rt={class:"contact__content"},ot=Q((()=>(0,n.Lk)("label",{class:"label contact__label"},"* EMAIL",-1))),it={class:"contact__content"},ct=Q((()=>(0,n.Lk)("label",{class:"label contact__label"},"КРАЇНА",-1))),dt={class:"contact__content"},ut=Q((()=>(0,n.Lk)("label",{class:"label contact__label"},"МІСТО",-1))),pt={class:"contact__content"},mt=Q((()=>(0,n.Lk)("label",{class:"label contact__label"},"ІНДЕКС",-1))),vt={class:"contact__content"},kt=Q((()=>(0,n.Lk)("label",{class:"label contact__label"},"АДРЕСА",-1))),gt={class:"contact__content"},bt=Q((()=>(0,n.Lk)("label",{class:"label contact__label"},"* ТЕЛЕФОН",-1))),At=Q((()=>(0,n.Lk)("button",{class:"button-submit",type:"submit"},"відправити",-1)));function ht(t,e,a,l,r,o){return(0,n.uX)(),(0,n.CE)("div",B,[(0,n.Lk)("form",{onSubmit:e[25]||(e[25]=(0,s.D$)(((...t)=>o.handleSubmit&&o.handleSubmit(...t)),["prevent"]))},[(0,n.Lk)("div",S,[(0,n.Lk)("div",x,[(0,n.Lk)("div",F,[X,(0,n.Lk)("div",N,[_,(0,n.bo)((0,n.Lk)("input",{"onUpdate:modelValue":e[0]||(e[0]=t=>r.formData.lastName=t),class:(0,i.C4)({"input greeting__input error":r.errors.lastName}),type:"text",onInput:e[1]||(e[1]=(...e)=>t.validateLastName&&t.validateLastName(...e))},null,34),[[s.Jo,r.formData.lastName]])]),(0,n.Lk)("div",O,[j,(0,n.bo)((0,n.Lk)("input",{"onUpdate:modelValue":e[2]||(e[2]=t=>r.formData.firstName=t),class:(0,i.C4)({"input greeting__input error":r.errors.firstName}),type:"text",onInput:e[3]||(e[3]=(...e)=>t.validateFirstName&&t.validateFirstName(...e))},null,34),[[s.Jo,r.formData.firstName]])]),(0,n.Lk)("div",V,[R,(0,n.bo)((0,n.Lk)("input",{"onUpdate:modelValue":e[4]||(e[4]=t=>r.formData.organization=t),class:(0,i.C4)({"input greeting__input error":r.errors.organization}),type:"text",onInput:e[5]||(e[5]=(...e)=>t.validateOrganization&&t.validateOrganization(...e))},null,34),[[s.Jo,r.formData.organization]])]),(0,n.Lk)("div",G,[(0,n.Lk)("label",M,[(0,n.bo)((0,n.Lk)("input",{"onUpdate:modelValue":e[6]||(e[6]=t=>r.formData.role=t),type:"radio",name:"role",value:"СПОЖИВАЧ"},null,512),[[s.XL,r.formData.role]]),H,(0,n.eW)(" СПОЖИВАЧ ")]),K,(0,n.Lk)("label",z,[(0,n.bo)((0,n.Lk)("input",{"onUpdate:modelValue":e[7]||(e[7]=t=>r.formData.role=t),type:"radio",name:"role",value:"МЕДИЧНИЙ ПРАЦІВНИК"},null,512),[[s.XL,r.formData.role]]),W,(0,n.eW)(" МЕДИЧНИЙ ПРАЦІВНИК ")]),T,(0,n.Lk)("label",J,[(0,n.bo)((0,n.Lk)("input",{"onUpdate:modelValue":e[8]||(e[8]=t=>r.formData.role=t),type:"radio",name:"role",value:"ЖУРНАЛІСТ"},null,512),[[s.XL,r.formData.role]]),q,(0,n.eW)(" ЖУРНАЛІСТ ")])])]),(0,n.Lk)("div",Z,[Y,(0,n.Lk)("div",$,[tt,(0,n.bo)((0,n.Lk)("input",{"onUpdate:modelValue":e[9]||(e[9]=t=>r.formData.subject=t),class:(0,i.C4)({"input message__input error":r.errors.subject}),type:"text",onInput:e[10]||(e[10]=(...e)=>t.validateSubject&&t.validateSubject(...e))},null,34),[[s.Jo,r.formData.subject]])]),(0,n.Lk)("div",et,[at,(0,n.bo)((0,n.Lk)("textarea",{"onUpdate:modelValue":e[11]||(e[11]=t=>r.formData.message=t),class:(0,i.C4)({"textarea error":r.errors.message}),name:"message",rows:"5",onInput:e[12]||(e[12]=(...e)=>t.validateMessage&&t.validateMessage(...e))},null,34),[[s.Jo,r.formData.message]])])])]),(0,n.Lk)("div",st,[(0,n.Lk)("div",nt,[lt,(0,n.Lk)("div",rt,[ot,(0,n.bo)((0,n.Lk)("input",{"onUpdate:modelValue":e[13]||(e[13]=t=>r.formData.email=t),class:(0,i.C4)({"input contact__input error":r.errors.email}),type:"email",onInput:e[14]||(e[14]=(...e)=>t.validateEmail&&t.validateEmail(...e))},null,34),[[s.Jo,r.formData.email]])]),(0,n.Lk)("div",it,[ct,(0,n.bo)((0,n.Lk)("input",{"onUpdate:modelValue":e[15]||(e[15]=t=>r.formData.country=t),class:(0,i.C4)({"input contact__input error":r.errors.country}),type:"text",onInput:e[16]||(e[16]=(...e)=>t.validateCountry&&t.validateCountry(...e))},null,34),[[s.Jo,r.formData.country]])]),(0,n.Lk)("div",dt,[ut,(0,n.bo)((0,n.Lk)("input",{"onUpdate:modelValue":e[17]||(e[17]=t=>r.formData.city=t),class:(0,i.C4)({"input contact__input error":r.errors.city}),type:"text",onInput:e[18]||(e[18]=(...e)=>t.validateCity&&t.validateCity(...e))},null,34),[[s.Jo,r.formData.city]])]),(0,n.Lk)("div",pt,[mt,(0,n.bo)((0,n.Lk)("input",{"onUpdate:modelValue":e[19]||(e[19]=t=>r.formData.index=t),class:(0,i.C4)({"input contact__input error":r.errors.index}),type:"text",onInput:e[20]||(e[20]=(...e)=>t.validateIndex&&t.validateIndex(...e))},null,34),[[s.Jo,r.formData.index]])]),(0,n.Lk)("div",vt,[kt,(0,n.bo)((0,n.Lk)("input",{"onUpdate:modelValue":e[21]||(e[21]=t=>r.formData.address=t),class:(0,i.C4)({"input contact__input error":r.errors.address}),type:"text",onInput:e[22]||(e[22]=(...e)=>t.validateAddress&&t.validateAddress(...e))},null,34),[[s.Jo,r.formData.address]])]),(0,n.Lk)("div",gt,[bt,(0,n.bo)((0,n.Lk)("input",{"onUpdate:modelValue":e[23]||(e[23]=t=>r.formattedPhone=t),onInput:e[24]||(e[24]=(...t)=>o.formatPhone&&o.formatPhone(...t)),class:(0,i.C4)({"input contact__input error":r.errors.phone}),type:"text",id:"phone",placeholder:"(___) ___-__-__",maxlength:"15"},null,34),[[s.Jo,r.formattedPhone]])])]),At])])],32)])}var ft={data(){return{formData:{lastName:"",firstName:"",organization:"",role:"СПОЖИВАЧ",subject:"",message:"",email:"",country:"",city:"",index:"",address:"",phone:""},formattedPhone:"",errors:{lastName:!1,firstName:!1,organization:!1,subject:!1,message:!1,email:!1,country:!1,city:!1,index:!1,address:!1,phone:!1},validationPatterns:{lastName:/^[А-Яа-яҐґЄєЇїІі]+$/,firstName:/^[А-Яа-яҐґЄєЇїІі]+$/,organization:/^[А-Яа-яҐґЄєЇїІі]*$/,country:/^[А-Яа-яҐґЄєЇїІі]*$/,city:/^[А-Яа-яҐґЄєЇїІі]*$/,index:/^\d*$/,address:/^[А-Яа-яҐґЄєЇїІі\d/\-,]*$/,phone:/^\(\d{3}\) \d{3}-\d{2}-\d{2}$/,email:/^[^\s@]+@[^\s@]+\.[^\s@]+$/,subject:/^[А-Яа-яҐґЄєЇїІі\d\s\-,]*$/,message:/^[А-Яа-яҐґЄєЇїІі\d\s\-,]+$/}}},methods:{handleSubmit(){this.validateForm()?alert(JSON.stringify(this.formData,null,2)):alert("Будь ласка, заповніть всі обов'язкові поля правильно.")},validateForm(){let t=!0;return Object.keys(this.errors).forEach((e=>{this.errors[e]=!this.validateField(e,this.formData[e]),this.errors[e]&&(t=!1)})),t},validateField(t,e){const a=this.validationPatterns[t];return"phone"===t?this.validatePhoneField(a):!a||a.test(e)},validatePhoneField(t){return t?.test(this.formattedPhone)},formatPhone(t){const e=t.target.value.replace(/\D/g,"");let a="";e.length>0&&(a+="("+e.substring(0,3)),e.length>=4&&(a+=") "+e.substring(3,6)),e.length>=7&&(a+="-"+e.substring(6,8)),e.length>=9&&(a+="-"+e.substring(8,10)),this.formattedPhone=a,this.formData.phone=e}}};const Ct=(0,D.A)(ft,[["render",ht],["__scopeId","data-v-66c72af4"]]);var Lt=Ct;const yt={class:"sort-buttons"},Dt={class:"sort-buttons__container"},Et={class:"sort-button"},Ut={class:"sort-button"},It={class:"sort-button"},wt={class:"dynamic-blocks"},Pt={class:"dynamic-blocks__container"},Qt={class:"block__img"},Bt=["src","alt"],St={class:"block__text"},xt={class:"block__description"};function Ft(t,e,a,s,l,r){return(0,n.uX)(),(0,n.CE)(n.FK,null,[(0,n.Lk)("div",yt,[(0,n.Lk)("div",Dt,[(0,n.Lk)("label",Et,[(0,n.Lk)("input",{type:"radio",name:"sort",onChange:e[0]||(e[0]=t=>r.sortByAlphabetically())},null,32),(0,n.eW)(" відсортувати блоки за заголовком відповідно до алфавітного порядку ")]),(0,n.Lk)("label",Ut,[(0,n.Lk)("input",{type:"radio",name:"sort",onChange:e[1]||(e[1]=t=>r.sortByPicLeftT())},null,32),(0,n.eW)(' вивести всі блоки у форматі "зображення - зліва, текст - справа" ')]),(0,n.Lk)("label",It,[(0,n.Lk)("input",{type:"radio",name:"sort",onChange:e[2]||(e[2]=t=>r.sortByChessPattern())},null,32),(0,n.eW)(' вивести всі блоки у форматі "зображення - зліва, текст - справа" і навпаки в шаховому порядку ')])])]),(0,n.Lk)("div",wt,[(0,n.Lk)("div",Pt,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(l.movies,(t=>((0,n.uX)(),(0,n.CE)("div",{class:"dynamic-blocks__content",key:t.id},[(0,n.Lk)("div",Qt,[(0,n.Lk)("img",{src:this.picUrl+t.poster_path,alt:t.title},null,8,Bt)]),(0,n.Lk)("div",St,[(0,n.Lk)("h3",null,(0,i.v_)(t.title),1),(0,n.Lk)("p",xt,(0,i.v_)(t.overview),1)])])))),128))])])],64)}var Xt={data(){return{movies:[],styleEChessPattern:null,moviesUrl:"https://api.themoviedb.org/3/discover/movie?api_key=3685d3eb8695f087227e0ee980f3ae4d&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1",picUrl:"https://image.tmdb.org/t/p/w185_and_h278_bestv2/"}},methods:{async getMovies(){try{const t=await fetch(this.moviesUrl),e=await t.json(),a=e.results.slice(0,5);return a}catch(t){return console.error("Error fetching movies:",t),[]}},sortByAlphabetically(){this.movies.sort(((t,e)=>t.title.localeCompare(e.title)))},sortByPicLeftT(){this.styleChessPattern&&(document.head.removeChild(this.styleChessPattern),this.styleChessPattern=null)},sortByChessPattern(){this.styleChessPattern||this.addStyleChessPattern()},addStyleChessPattern(){const t=document.createElement("style");t.type="text/css",t.innerHTML="\n                .dynamic-blocks__content:nth-child(even) {\n                    padding: 30px 40px 30px 53px;\n                    justify-content: space-between;\n                }\n\n                .dynamic-blocks__content:nth-child(even) .block__img {\n                    order: 2;\n                }\n\n                .dynamic-blocks__content:nth-child(even) .block__text {\n                    order: 1;\n                    margin-top: -9px;\n                }\n            ",this.styleChessPattern=t,document.head.appendChild(t)}},async mounted(){this.movies=await this.getMovies(),this.addStyleChessPattern()}};const Nt=(0,D.A)(Xt,[["render",Ft],["__scopeId","data-v-2bd984a2"]]);var _t=Nt,Ot={name:"App",components:{SliderApp:P,FeedbackForm:Lt,DynamicBlocks:_t}};const jt=(0,D.A)(Ot,[["render",o]]);var Vt=jt;(0,s.Ef)(Vt).mount("#app")}},e={};function a(s){var n=e[s];if(void 0!==n)return n.exports;var l=e[s]={exports:{}};return t[s](l,l.exports,a),l.exports}a.m=t,function(){var t=[];a.O=function(e,s,n,l){if(!s){var r=1/0;for(d=0;d<t.length;d++){s=t[d][0],n=t[d][1],l=t[d][2];for(var o=!0,i=0;i<s.length;i++)(!1&l||r>=l)&&Object.keys(a.O).every((function(t){return a.O[t](s[i])}))?s.splice(i--,1):(o=!1,l<r&&(r=l));if(o){t.splice(d--,1);var c=n();void 0!==c&&(e=c)}}return e}l=l||0;for(var d=t.length;d>0&&t[d-1][2]>l;d--)t[d]=t[d-1];t[d]=[s,n,l]}}(),function(){a.d=function(t,e){for(var s in e)a.o(e,s)&&!a.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){a.p="/Inchkiev_test_work/"}(),function(){var t={524:0};a.O.j=function(e){return 0===t[e]};var e=function(e,s){var n,l,r=s[0],o=s[1],i=s[2],c=0;if(r.some((function(e){return 0!==t[e]}))){for(n in o)a.o(o,n)&&(a.m[n]=o[n]);if(i)var d=i(a)}for(e&&e(s);c<r.length;c++)l=r[c],a.o(t,l)&&t[l]&&t[l][0](),t[l]=0;return a.O(d)},s=self["webpackChunkinchkiev_test_work"]=self["webpackChunkinchkiev_test_work"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=a.O(void 0,[504],(function(){return a(684)}));s=a.O(s)})();
//# sourceMappingURL=app.0fdd69ac.js.map