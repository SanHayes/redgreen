import{aH as e}from"./index-e9887b11.js";import{d as n}from"./user-9ba2d881.js";import{h as s}from"./http-d6b7bb6c.js";const r=()=>s({url:"/Con/config",method:"post"}),f=e("user",{state:()=>({info:null,is_vistor:1,login:0,getrecordAcitve:0,getetcAcitve:0,item:"",balance:"",formulatetype:0,formulateparsm:"",formulaterandom:1,config:null}),actions:{updateState(o,t){this[o]=t},async getInfo(){const o=await n();console.log("getInfo",o),this.info=o},async getConfig(){const o=await r();console.log("config",o),this.config=o}}});export{f as u};
