"use strict";(self.webpackChunkterrashield=self.webpackChunkterrashield||[]).push([[538],{2646:(e,t,i)=>{i.d(t,{A:()=>n});var s=i(579);const n=e=>{let{src:t,width:i,height:n}=e;return(0,s.jsx)("img",{src:`/img/svg/${t}`,alt:t,width:i,height:n})}},8538:(e,t,i)=>{i.r(t),i.d(t,{default:()=>d});var s=i(5043),n=i(2646);const r=(0,i(9).Ay)("div")`
  padding: 10px;
  position: fixed;
  right: 30px;
  bottom: 30px;
  z-index: 10;
  cursor: pointer;
  background: rgb(241, 242, 243);
  text-align: center;
  align-items: center;
  border-radius: 4px;
  transition: all 0.3s ease-in-out;
  visibility: ${e=>e.show?"visible":"hidden"};
  opacity: ${e=>e.show?"1":"0"};
  display: flex;

  &:hover,
  &:active,
  &:focus {
    background: rgb(224, 224, 224);
  }

  @media screen and (max-width: 1240px) {
    display: none;
  }
`;var o=i(579);const d=()=>{const[e,t]=(0,s.useState)(!1),i=(0,s.useCallback)((()=>{const i=window.scrollY;!e&&i>350?t(!0):i<=350&&t(!1)}),[e]);(0,s.useEffect)((()=>(window.addEventListener("scroll",i),()=>{window.removeEventListener("scroll",i)})),[i]);return(0,o.jsx)(r,{onClick:()=>{document.getElementById("intro").scrollIntoView({behavior:"smooth",block:"end",inline:"nearest"})},show:e,children:(0,o.jsx)(n.A,{src:"scroll-top.svg",width:"20px",height:"20px"})})}}}]);
//# sourceMappingURL=538.5bcd0e10.chunk.js.map