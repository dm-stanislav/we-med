"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[298],{902:function(e,t,s){s.r(t);var n=s(796),i=s(692),o=s(603);const a=".difference",r=`${a} .difference-touch`,c="active",l={offset:15,initialPosition:50},f={offset:"number",initialPosition:"number"};class h extends i.Z{constructor(e,t){super(e,t),this._allowed=!0,this._setPropertyValue(this._config.initialPosition),this._element.addEventListener("mouseenter",(()=>this._transitionOnce()))}static get Default(){return l}static get DefaultType(){return f}static get NAME(){return"difference"}_configAfterMerge(e){return(e=super._configAfterMerge(e)).offset=Math.abs(e.offset),e.offset=e.offset>100?100:e.offset,e.initialPosition=Math.abs(e.initialPosition),e.initialPosition>100-e.offset?e.initialPosition=100-e.offset:e.initialPosition<e.offset&&(e.initialPosition=e.offset),e}_setValue(e){const t=this._getPercentage(e);t>=0&&t<=100&&this._setPropertyValue(t)}_setPropertyValue(e,t=!1){(this._allowed||t)&&this._element.style.setProperty("--current-position",`${e.toFixed(2)}%`)}_getPercentage(e){const t=this._element.getBoundingClientRect(),s=this._element.offsetWidth;let n=e-t.left;return n=n<0?0:n,100*n/s}_normalizeToOffset(e){this._allowed=!1,this._transitionOnce((()=>{this._allowed=!0})),e<this._config.offset?this._setPropertyValue(this._config.offset,!0):e>100-this._config.offset&&this._setPropertyValue(100-this._config.offset,!0)}_handleTouchStart(){const e=e=>{e.touches.length&&this._setValue(e.touches[0].clientX)};this._handleTouchMove=e,this._element.addEventListener("touchmove",e),this._element.classList.add(c)}_handleTouchEnd(e){if(this._handleTouchMove){const e=this._handleTouchMove;this._element.removeEventListener("touchmove",e)}const t=this._getPercentage(e);isNaN(t)||(this._element.classList.remove(c),this._normalizeToOffset(t))}_handleMouseleave(e){const t=this._getPercentage(e);this._normalizeToOffset(t)}_transitionOnce(e){this._element.style.transition="150ms linear",this._queueCallback((()=>{this._element.style.transition="",(0,o.ht)(e)}),this._element)}}document.addEventListener("mousemove",(e=>{if((0,o.b1)())return;const t=e.target.closest(a);if(!t)return;h.getOrCreateInstance(t)._setValue(e.clientX)})),document.addEventListener("mouseout",(e=>{if((0,o.b1)())return;const t=e.target.closest(a);if(!t)return;if(null!==e.relatedTarget&&t.contains(e.relatedTarget))return;h.getOrCreateInstance(t)._handleMouseleave(e.clientX)})),document.addEventListener("DOMContentLoaded",(()=>{for(const e of n.Z.find(a))h.getOrCreateInstance(e)})),document.addEventListener("touchstart",(e=>{const t=e.target.closest(r);t&&h.getOrCreateInstance(t.closest(a))._handleTouchStart()})),document.addEventListener("touchend",(e=>{const t=e.target.closest(r);t&&h.getOrCreateInstance(t.closest(a))._handleTouchEnd(e.changedTouches[0].clientX)})),t.default=h}}]);