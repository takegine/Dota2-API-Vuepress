(window.webpackJsonp=window.webpackJsonp||[]).push([[2617],{2817:function(t,e,n){"use strict";n.r(e);var a=n(0),i=Object(a.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"modifier-event-on-hero-killed"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#modifier-event-on-hero-killed"}},[t._v("#")]),t._v(" MODIFIER_EVENT_ON_HERO_KILLED")]),t._v(" "),n("h1",{attrs:{id:"description"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" Description")]),t._v(" "),n("p",[t._v("击杀英雄事件。传进来的参数里attacker为玩家的主英雄，unit为实际凶手单位，target为死亡目标。")]),t._v(" "),n("h1",{attrs:{id:"example"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" Example")]),t._v(" "),n("div",{staticClass:"language-function modifier_phantom_assassin_blur_imba:DeclareFunctions() extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("\treturn {\n\t\tMODIFIER_EVENT_ON_HERO_KILLED,\n\t}\nend\nfunction modifier_phantom_assassin_blur_imba:OnHeroKilled(params)\n\t-- params.attacker\t玩家控制的主英雄\n\t-- params.unit\t\t实际凶手\n\t-- params.target\t死亡目标\n\tif params.unit == self:GetParent() then\n\t\tif params.unit:HasScepter() then\n\t\t\tfor i = 0, params.unit:GetAbilityCount()-1, 1 do\n\t\t\t\tlocal hAbility = params.unit:GetAbilityByIndex(i)\n\t\t\t\tif hAbility and hAbility:GetAbilityType() == ABILITY_TYPE_BASIC then\t-- 刷新基础技能\n\t\t\t\t\thAbility:EndCooldown()\n\t\t\t\t\thAbility:RefreshCharges()\n\t\t\t\tend\n\t\t\tend\n\t\tend\n\tend\nend```")])])])])}),[],!1,null,null,null);e.default=i.exports}}]);