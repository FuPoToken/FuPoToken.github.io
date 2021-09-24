import{l as e,u as t,r as n,R as a,f as s,a as i,W as r,C as l,B as o,p as u,t as p,I as d,b as c,N as m,U as y,c as b,d as f,Q as v,e as w,g as T,h as g,T as h,i as E}from"./vendor.d4bedbf9.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const n of e)if("childList"===n.type)for(const e of n.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();var x=[{inputs:[],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"spender",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Transfer",type:"event"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"spender",type:"address"}],name:"allowance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"approve",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"decimals",outputs:[{internalType:"uint8",name:"",type:"uint8"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"subtractedValue",type:"uint256"}],name:"decreaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"addedValue",type:"uint256"}],name:"increaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"mint",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transfer",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"sender",type:"address"},{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transferFrom",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"}];var N=[{inputs:[{internalType:"uint256",name:"_rate",type:"uint256"},{internalType:"address payable",name:"_wallet",type:"address"},{internalType:"contract ERC20",name:"_token",type:"address"},{internalType:"address",name:"_tokenWallet",type:"address"},{internalType:"uint256",name:"_openingTime",type:"uint256"},{internalType:"uint256",name:"_closingTime",type:"uint256"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"prevClosingTime",type:"uint256"},{indexed:!1,internalType:"uint256",name:"newClosingTime",type:"uint256"}],name:"TimedCrowdsaleExtended",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"purchaser",type:"address"},{indexed:!0,internalType:"address",name:"beneficiary",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"}],name:"TokensPurchased",type:"event"},{inputs:[{internalType:"address",name:"beneficiary",type:"address"}],name:"buyTokens",outputs:[],stateMutability:"payable",type:"function"},{inputs:[],name:"closingTime",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"hasClosed",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"isOpen",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"openingTime",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"rate",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"remainingTokens",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"token",outputs:[{internalType:"contract IERC20",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"tokenWallet",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"wallet",outputs:[{internalType:"address payable",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"weiRaised",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{stateMutability:"payable",type:"receive"}],k={warn:e.warn,debug:e.debug,info:e.info,error:e.error,trace:e.trace,setLevel:e.setLevel};const M="https://bsc-dataseed.binance.org:8545/",C=({tokenAddress:e})=>{var n;const{library:o}=t(),{error:u,isLoading:p,data:d}=i(["token-info",e],(async()=>{k.warn("fetchTokenInfo");const t=o||new r(window.ethereum||M),n=new l(e,x,t),a=await n.name(),s=await n.symbol(),i=await n.decimals(),u=await n.totalSupply();return k.warn("token info",{name:a,symbol:s,decimals:i}),{name:a,symbol:s,decimals:i,totalSupply:u}}),{enabled:""!==e});return u?a.createElement("div",null,"failed to load"):p?a.createElement("div",null,"loading..."):a.createElement("div",{className:"w-full mt-2 border stats border-base-300"},a.createElement("div",{className:"shadow stats"},a.createElement("div",{className:"stat"},a.createElement("div",{className:"stat-title"},"Total  $",null==d?void 0:d.symbol," Supply"),a.createElement("div",{className:"stat-value"},s(null!=(n=null==d?void 0:d.totalSupply)?n:0)))))};const I=({crowdsaleAddress:e})=>{const{library:i,chainId:d,account:c}=t(),[m,y]=n.exports.useState(""),[b,f]=n.exports.useState("0"),[v,w]=n.exports.useState("0"),[T,g]=n.exports.useState("0"),[h,E]=n.exports.useState(1);n.exports.useEffect((()=>{try{(()=>{k.warn("fetchCrowdsaleTokenInfo");const t=i||new r(window.ethereum||M),n=new l(e,N,t);n.token().then(y).catch(k.error),n.remainingTokens().then((e=>f(o.from(e).toString()))).catch(k.error),n.rate().then((e=>w(o.from(e).toString()))).catch(k.error),n.closingTime().then((e=>g(o.from(e).toString()))).catch(k.error)})()}catch(t){k.error(t)}}),[i]);const x=1/Number(v)*h;return a.createElement("div",{className:"relative py-3 sm:max-w-5xl sm:mx-auto"},97!==d&&a.createElement(a.Fragment,null,a.createElement("div",{className:"alert"},a.createElement("div",{className:"flex-1"},a.createElement("label",{className:"cursor-pointer label"},"Please connect to the BSC for trading fupo token."))),a.createElement("div",{className:"divider"})),a.createElement("div",{className:"flex items-center w-full px-4 py-10 bg-cover card bg-base-200"},a.createElement(C,{tokenAddress:m}),a.createElement("div",{className:"text-center shadow-2xl card"},a.createElement("div",{className:"card-body"},a.createElement("h2",{className:"card-title"},"fupo Token"),Number(T)>0&&a.createElement("div",{className:"alert"},a.createElement("div",{className:"flex-1"},"Closing time",a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"#2196f3",className:"w-6 h-6 mx-2"},a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})),a.createElement("label",null,new Date(1e3*Number(T)).toLocaleString()))),a.createElement("div",{className:"shadow stats"},a.createElement("div",{className:"stat"},a.createElement("div",{className:"stat-title"},"Available for sale"),a.createElement("div",{className:"stat-value"},s(b,"ether"))),a.createElement("div",{className:"stat"},a.createElement("div",{className:"stat-title"},"Price"),a.createElement("div",{className:"stat-value"},s(v,"wei")," Wei")),a.createElement("div",{className:"stat"},a.createElement("div",{className:"stat-title"},"Order Quantity"),a.createElement("div",{className:"stat-value"},h))),a.createElement("input",{type:"range",max:"1000",value:h,onChange:e=>E(e.target.valueAsNumber),className:"range range-primary"}),a.createElement("div",null,a.createElement("div",{className:"justify-center card-actions"},a.createElement("button",{onClick:async()=>{const t=(i||new r(window.ethereum||M)).getSigner();try{if(!c)return void(await async function(){var e;if(null==(e=window.ethereum)?void 0:e.request)return window.ethereum.request({method:"eth_requestAccounts"});throw new Error("Missing install Metamask. Please access https://metamask.io/ to install extension on your browser")}());const n={to:e,value:o.from(u(String(1/Number(v)))).mul(h)};k.warn({txPrams:n});const s=await t.sendTransaction(n);p.promise(s.wait(),{loading:"Transaction submitted. Wait for confirmation...",success:a.createElement("b",null,"Transaction confirmed!"),error:a.createElement("b",null,"Transaction failed!.")})}catch(n){k.error(n)}},type:"button",className:"btn btn-outline btn-accent"},"Buy Now")),a.createElement("div",{className:"badge badge-md"},"Total: ",x," BNB")))),a.createElement("div",{className:"divider"}),a.createElement("div",{className:"items-center justify-center max-w-2xl px-4 py-4 mx-auto text-xl border-orange-500 lg:flex md:flex"})))};var A=[{inputs:[],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"approved",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!1,internalType:"bool",name:"approved",type:"bool"}],name:"ApprovalForAll",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Transfer",type:"event"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"_claimTimes",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"approve",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"claim",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"getApproved",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"getChest",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"getFoot",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"getHand",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"getHead",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"getNeck",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"getRing",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"getWaist",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"getWeapon",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"operator",type:"address"}],name:"isApprovedForAll",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"ownerOf",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"bytes",name:"_data",type:"bytes"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"operator",type:"address"},{internalType:"bool",name:"approved",type:"bool"}],name:"setApprovalForAll",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes4",name:"interfaceId",type:"bytes4"}],name:"supportsInterface",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"index",type:"uint256"}],name:"tokenByIndex",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"uint256",name:"index",type:"uint256"}],name:"tokenOfOwnerByIndex",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"tokenURI",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"transferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{stateMutability:"payable",type:"receive"}];const S="https://bsc-dataseed.binance.org:8545/";const L=({lootAddress:e})=>{const{library:s,chainId:i,account:u}=t();n.exports.useState("");const[d,c]=n.exports.useState(1),[m,y]=n.exports.useState("10000");n.exports.useEffect((()=>{try{(()=>{k.warn("fetchLootInfo");const t=s||new r(window.ethereum||S),n=new l(e,A,t);k.warn(e),k.warn(t),n.totalSupply().then((e=>y(o.from(e).toString()))).catch(k.error)})()}catch(t){k.error(t)}}),[s]);return a.createElement("div",{className:"relative py-3 sm:max-w-5xl sm:mx-auto"},a.createElement("div",{className:"text-center shadow-2xl card"},a.createElement("div",{className:"card-body"},a.createElement("h2",{className:"card-title"},"fupoLoot NFT"),a.createElement("div",{className:"shadow stats"},a.createElement("div",{className:"stat"},a.createElement("div",{className:"stat-title"},"Total Supply"),a.createElement("div",{className:"stat-value"},m)),a.createElement("div",{className:"stat"},a.createElement("div",{className:"stat-title"},"Available for claim"),a.createElement("div",{className:"stat-value"},d))),a.createElement("input",{type:"range",max:"1000",value:d,onChange:e=>c(e.target.valueAsNumber),className:"range range-accent"}),a.createElement("div",null,a.createElement("div",{className:"justify-center card-actions"},a.createElement("button",{onClick:async()=>{const t=(s||new r(window.ethereum||S)).getSigner();try{if(!u)return void(await async function(){var e;if(null==(e=window.ethereum)?void 0:e.request)return window.ethereum.request({method:"eth_requestAccounts"});throw new Error("Missing install Metamask. Please access https://metamask.io/ to install extension on your browser")}());const n=new l(e,A,t),s=await n.claim();p.promise(s.wait(),{loading:"Claim Transaction submitted. Wait for confirmation...",success:a.createElement("b",null,"Transaction confirmed!"),error:a.createElement("b",null,"Transaction failed!.")})}catch(n){k.error(n)}},type:"button",className:"btn btn-outline btn-accent"},"Claim FupoLoot"))),a.createElement("div",{className:"divider"}),a.createElement("div",{className:"items-center justify-center max-w-2xl px-4 py-4 mx-auto text-xl border-orange-500 lg:flex md:flex"},a.createElement("div",{className:"p-2 font-semibold"},a.createElement("a",{href:"https://bscscan.com/token/0x445abdb0294b9967f76dba722b973dc03fa244fa",target:"_blank",className:"px-4 py-1 ml-2 text-black bg-orange-500 rounded-full shadow focus:outline-none",rel:"noreferrer"},"View fupo Token")),a.createElement("div",{className:"p-2 font-semibold"},a.createElement("a",{href:"https://bscscan.com/token/0x75Ed989284FF37c01c1C72D2eA4102aFA753936C",target:"_blank",className:"px-4 py-1 ml-2 text-black bg-orange-500 rounded-full shadow focus:outline-none",rel:"noreferrer"},"View fupo NFT"))))))},F=new d({supportedChainIds:[1,3,4,5,42,56,88,89,97,137,1337,80001]});function O(){const{account:e}=t();return a.createElement("div",{className:"btn btn-ghost btn-sm rounded-btn"},a.createElement("span",null,"Account"),a.createElement("span",{role:"img","aria-label":"robot"},"🤖"),a.createElement("span",null,null===e?"-":e?`${e.substring(0,6)}...${e.substring(e.length-4)}`:""))}function B(){const{account:e,library:n,chainId:s}=t(),[i,r]=a.useState();return a.useEffect((()=>{if(e&&n){let t=!1;return n.getBalance(e).then((e=>{t||r(e)})).catch((()=>{t||r(null)})),()=>{t=!0,r(void 0)}}}),[e,n,s]),a.createElement("div",{className:"btn btn-ghost btn-sm rounded-btn"},a.createElement("span",null,"Balance"),a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-6 h-6 hover:text-blue-400",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"})),a.createElement("span",null,null===i?"Error":i?`Ξ${c(i)}`:""))}function _(){const{chainId:e}=t();return a.createElement("div",{className:"btn btn-ghost btn-sm rounded-btn"},a.createElement("span",null,"Chain Id"),a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-6 h-6 hover:text-blue-400",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"})),a.createElement("span",null,null!=e?e:""))}function D({children:e}){return t(),a.createElement("div",{className:"mb-2 shadow-lg navbar bg-neutral text-neutral-content  "},a.createElement("div",{className:"flex-1 px-2 mx-2"},a.createElement("span",{className:"text-lg font-bold"},"FuPo"),e),a.createElement("div",{className:"flex-none hidden px-2 mx-2 lg:flex"},a.createElement("div",{className:"flex items-stretch"},a.createElement(_,null),a.createElement(O,null),a.createElement(B,null))))}function P(e){const t=new r(e);return t.pollingInterval=12e3,t}function W(){const e=t(),{connector:s,activate:i,deactivate:r,active:l,error:o}=e,[u,p]=a.useState();a.useEffect((()=>{u&&u===s&&p(void 0)}),[u,s]);const d=function(){const{activate:e,active:a}=t(),[s,i]=n.exports.useState(!1);return n.exports.useEffect((()=>{F.isAuthorized().then((t=>{t?e(F,void 0,!0).catch((()=>{i(!0)})):i(!0)}))}),[]),n.exports.useEffect((()=>{!s&&a&&i(!0)}),[s,a]),s}();!function(e=!1){const{active:a,error:s,activate:i}=t();n.exports.useEffect((()=>{const{ethereum:t}=window;if(t&&t.on&&!a&&!s&&!e){const e=()=>{k.warn("Handling 'connect' event"),i(F)},n=e=>{k.warn("Handling 'chainChanged' event with payload",e),i(F)},a=e=>{k.warn("Handling 'accountsChanged' event with payload",e),e.length>0&&i(F)},s=e=>{k.warn("Handling 'networkChanged' event with payload",e),i(F)};return t.on("connect",e),t.on("chainChanged",n),t.on("accountsChanged",a),t.on("networkChanged",s),()=>{t.removeListener&&(t.removeListener("connect",e),t.removeListener("chainChanged",n),t.removeListener("accountsChanged",a),t.removeListener("networkChanged",s))}}}),[a,s,e,i])}(!d||!!u);const c=F===u,v=F===s,w=!d||!!u||v||!!o;return a.createElement(D,null,a.createElement("div",{className:"flex flex-row w-full ml-4 mr-4"},a.createElement("button",{className:"btn btn-outline  btn-accent",disabled:w,onClick:()=>{p(F),i(F)}},a.createElement("div",null,c&&a.createElement("p",{className:"btn loading"},"loading..."),v&&a.createElement("span",{role:"img","aria-label":"check"})),"Connect with MetaMask"),a.createElement("div",null,(l||o)&&a.createElement("button",{className:"btn btn-accent",onClick:()=>{r()}},"Deactivate"),!!o&&a.createElement("h4",{style:{marginTop:"1rem",marginBottom:"0"}},function(e){return e instanceof m?"No Ethereum browser extension detected, install MetaMask on desktop or visit from a dApp browser on mobile.":e instanceof y?"You're connected to an unsupported network.":e instanceof b||e instanceof f?"Please authorize this website to access your Ethereum account.":(k.error(e),"An unknown error occurred. Check the console for more details.")}(o)))))}const j=new v;function H(){return a.createElement(w,{getLibrary:P},a.createElement(T,{client:j},a.createElement("div",{className:"App"},a.createElement(W,null),a.createElement(I,{crowdsaleAddress:"0x5FD404caE5c496702D12a22A28C483342EDfa941"}),a.createElement(L,{lootAddress:"0x75Ed989284FF37c01c1C72D2eA4102aFA753936C"}),a.createElement("footer",{className:"p-10 footer bg-base-200 text-base-content"},a.createElement("div",null,"Sep.2021",a.createElement("p",null,"Built with hungry from"," ",a.createElement("a",{className:"link",href:"https://github.com/xiaoxiaoleo"},"xiaoxiaoleo")," ",a.createElement("a",{className:"link",href:"http://wayne_wwang.gitee.io/"},"hhddj"))),a.createElement("div",null,a.createElement("span",{className:"footer-title"},"Document"),a.createElement("a",{href:"#",target:"_blank",rel:"noopener noreferrer",className:"link link-hover"},"FuPo Docs"),a.createElement("a",{href:"#",target:"_blank",rel:"noopener noreferrer",className:"link link-hover"},"FuPo Loot Docs")))),a.createElement(g.exports.ReactQueryDevtools,{initialIsOpen:!1}),a.createElement(h,{position:"top-right"})))}E.render(a.createElement(a.StrictMode,null,a.createElement(H,null)),document.getElementById("root"));
