var farmFactory=function(){"use strict";n=t={exports:{}},n.exports=e;function e(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?n.exports=e=function(t){return typeof t}:n.exports=e=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(t)}var n;var t,a=function(){return(a=Object.assign||function(t){for(var e,n=1,a=arguments.length;n<a;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)};function k(s,o,r,u){return new(r=r||Promise)(function(t,e){function n(t){try{i(u.next(t))}catch(t){e(t)}}function a(t){try{i(u.throw(t))}catch(t){e(t)}}function i(e){e.done?t(e.value):new r(function(t){t(e.value)}).then(n,a)}i((u=u.apply(s,o||[])).next())})}function T(n,a){var i,s,o,r={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]},t={next:e(0),throw:e(1),return:e(2)};return"function"==typeof Symbol&&(t[Symbol.iterator]=function(){return this}),t;function e(e){return function(t){return function(e){if(i)throw new TypeError("Generator is already executing.");for(;r;)try{if(i=1,s&&(o=2&e[0]?s.return:e[0]?s.throw||((o=s.return)&&o.call(s),0):s.next)&&!(o=o.call(s,e[1])).done)return o;switch(s=0,o&&(e=[2&e[0],o.value]),e[0]){case 0:case 1:o=e;break;case 4:return r.label++,{value:e[1],done:!1};case 5:r.label++,s=e[1],e=[0];continue;case 7:e=r.ops.pop(),r.trys.pop();continue;default:if(!(o=0<(o=r.trys).length&&o[o.length-1])&&(6===e[0]||2===e[0])){r=0;continue}if(3===e[0]&&(!o||e[1]>o[0]&&e[1]<o[3])){r.label=e[1];break}if(6===e[0]&&r.label<o[1]){r.label=o[1],o=e;break}if(o&&r.label<o[2]){r.label=o[2],r.ops.push(e);break}o[2]&&r.ops.pop(),r.trys.pop();continue}e=a.call(n,r)}catch(t){e=[6,t],s=0}finally{i=o=0}if(5&e[0])throw e[1];return{value:e[0]?e[1]:void 0,done:!0}}([e,t])}}}function i(t){M=a(a({},M),t)}var M={opts:null,web3:null,account:null},s="ff-modals-root",o=function(t){var a=this;this.open=function(t){void 0===t&&(t={});var e,e=(n={title:a.opts.title,content:a.opts.content},e=void 0===(e=n.title)?"":e,n=n.content,'\n  <div class="ff-overlay">\n    <div class="ff-modal">\n      <div class="ff-modal-headline">\n        <div class="ff-modal-title">'+e+'</div>\n        <button class="ff-modal-close" type="button" aria-label="Close the dialog">\n          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n            <path fill="currentColor" d="M18.3 5.70997C17.91 5.31997 17.28 5.31997 16.89 5.70997L12 10.59L7.10997 5.69997C6.71997 5.30997 6.08997 5.30997 5.69997 5.69997C5.30997 6.08997 5.30997 6.71997 5.69997 7.10997L10.59 12L5.69997 16.89C5.30997 17.28 5.30997 17.91 5.69997 18.3C6.08997 18.69 6.71997 18.69 7.10997 18.3L12 13.41L16.89 18.3C17.28 18.69 17.91 18.69 18.3 18.3C18.69 17.91 18.69 17.28 18.3 16.89L13.41 12L18.3 7.10997C18.68 6.72997 18.68 6.08997 18.3 5.70997Z"></path>\n          </svg>\n        </button>\n      </div>\n      <div class="ff-modal-content">\n        '+(void 0===n?"":n)+"\n      </div>\n    </div>\n  </div>\n"),n=document.getElementById(s);n.innerHTML=e,a.elems={root:n=n,overlay:n.querySelector(".ff-overlay"),modal:n.querySelector(".ff-modal"),closeButton:n.querySelector(".ff-modal-close"),title:n.querySelector(".ff-modal-title"),content:n.querySelector(".ff-modal-content")},null!=t&&t.title&&(a.elems.title.innerText=t.title),a.elems.overlay.addEventListener("click",a.close),a.elems.modal.addEventListener("click",function(t){t.stopPropagation()}),a.elems.closeButton.addEventListener("click",a.close),a.opts.onOpen.bind(a)(t)},this.close=function(){a.elems.root.innerHTML=""},this.opts=t},S=new o({onOpen:function(t){t=(void 0===t?{}:t).message;this.elems.root.querySelector(".ff-modal-content").innerHTML=t||"Something went wrong"}}),r=(u.prototype.addHandler=function(t){var e=this;this.handlers.push(t.bind({unsubscribe:function(){e.removeHandler(t)}}))},u.prototype.removeHandler=function(t){t=this.handlers.indexOf(t);this.handlers.splice(t,1)},u.prototype.call=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this.handlers.forEach(function(t){try{t.apply(void 0,e)}catch(t){console.error(t)}})},u);function u(t){this.name=t,this.handlers=[]}function d(){this.events={}}function l(){return k(void 0,void 0,void 0,function(){var e,n,a;return T(this,function(t){switch(t.label){case 0:return a=M.opts,[4,(e=M.web3).eth.getChainId()];case 1:return n=t.sent(),(n={1:"mainnet",3:"ropsten",4:"rinkeby",42:"kovan",56:"bsc",97:"bsc_test",137:"matic",80001:"matic_test",1313161554:"aurora",100:"xdai"}[n])&&n.toLowerCase()===a.networkName.toLowerCase()?[4,e.eth.getAccounts()]:(S.open({title:"Error",message:"We've detected that you need to switch your wallet's network from <b>"+n+"</b> to <b>"+a.networkName+"</b> network."}),[2]);case 2:return a=t.sent(),a=a[0],i({account:a}),a?(console.log("account connected:",a),h.dispatch("account connected")):g(),[2]}})})}function c(t,e,n){return new t.eth.Contract(e,n)}function f(t,e){return{farm:c(t,A,e.farmAddress),rewards:c(t,C,e.rewardsAddress),staking:c(t,H,e.stakingAddress)}}function p(t,e){return new window.BigNumber(t).times(new window.BigNumber(10).pow(e)).toString(10)}function y(t){if(!t)return t;if(/^\d+$/.test(t))return t;var e=Number(t).toFixed(5);return/0\.00000/.test(e)&&(e=Number(t).toFixed(8)),/0\.0000000/.test(e)?t:e}function m(t,e){var n;return t&&(n="function"==typeof t?t(e):t),n}var v,b,h=new(d.prototype.getEvent=function(t){var e=this.events[t];return e||(e=new r(t),this.events[t]=e),e},d.prototype.subscribe=function(t,e){t=this.getEvent(t);return t.addHandler(e),{event:t,handler:e}},d.prototype.unsubscribe=function(t,e){this.getEvent(t).removeHandler(e)},d.prototype.dispatch=function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];t=this.getEvent(t);t&&t.call.apply(t,e)},d.prototype.once=function(t,n){var a=this.getEvent(t),i=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];n.apply(void 0,t)&&a.removeHandler(i)};return a.addHandler(i),{event:a,handlerWrapper:i}},d),w=function(t){window.Web3?(t=new window.Web3(t),i({web3:t}),console.log("web3 initialized"),h.dispatch("web3 init")):S.open({message:"Web3 is required"})},g=function(){return k(void 0,void 0,void 0,function(){return T(this,function(t){switch(t.label){case 0:return console.log("Killing the wallet connection",b),b.close?[4,b.close()]:[3,2];case 1:t.sent(),b=null,t.label=2;case 2:return[4,v.clearCachedProvider()];case 3:return t.sent(),i({account:null}),console.log("finalize disconnect"),[2]}})})},L=function(){var t=M.opts;v=new window.Web3Modal.default({cacheProvider:!0,providerOptions:(null===(t=t.wallet)||void 0===t?void 0:t.providerOptions)||{},disableInjectedProvider:!1}),(window.web3ModalInstance=v).on("connect",function(t){return k(void 0,void 0,void 0,function(){return T(this,function(t){return console.log("web3modal initialized"),[2]})})}),v.on("disconnect",function(){return k(void 0,void 0,void 0,function(){return T(this,function(t){return console.log("web3modal disconnected"),[2]})})}),v.on("error",function(t){console.log("web3modal error:",t)}),v.cachedProvider},x=function(){return k(void 0,void 0,void 0,function(){var e;return T(this,function(t){switch(t.label){case 0:return t.trys.push([0,3,,4]),[4,v.connect()];case 1:return e=t.sent(),w(e),e.on("accountsChanged",function(t){console.log("provider account changed",t),l()}),e.on("chainChanged",function(t){console.log("provider chain changed",t),l()}),e.on("networkChanged",function(t){console.log("provider network changed",t),l()}),[4,l()];case 2:return t.sent(),[3,4];case 3:return e=t.sent(),console.error(e),[3,4];case 4:return[2]}})})},A=[{inputs:[{internalType:"address",name:"_rewardsToken",type:"address"},{internalType:"address",name:"_stakingToken",type:"address"},{internalType:"uint256",name:"_rewardsDuration",type:"uint256"},{internalType:"uint256",name:"_stakingTokensDecimal",type:"uint256"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"account",type:"address"}],name:"Paused",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"token",type:"address"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"}],name:"Recovered",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"reward",type:"uint256"}],name:"RewardAdded",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"user",type:"address"},{indexed:!1,internalType:"uint256",name:"reward",type:"uint256"}],name:"RewardPaid",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"newDuration",type:"uint256"}],name:"RewardsDurationUpdated",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"user",type:"address"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"}],name:"Staked",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"account",type:"address"}],name:"Unpaused",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"user",type:"address"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"}],name:"Withdrawn",type:"event"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"earned",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"exit",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"getReward",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"getRewardForDuration",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"lastTimeRewardApplicable",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"lastUpdateTime",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"a",type:"uint256"},{internalType:"uint256",name:"b",type:"uint256"}],name:"min",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"pure",type:"function"},{inputs:[{internalType:"uint256",name:"reward",type:"uint256"}],name:"notifyRewardAmount",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"paused",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"periodFinish",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"n",type:"uint256"},{internalType:"uint256",name:"e",type:"uint256"}],name:"pow",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"pure",type:"function"},{inputs:[{internalType:"address",name:"tokenAddress",type:"address"},{internalType:"uint256",name:"tokenAmount",type:"uint256"}],name:"recoverERC20",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"rewardPerToken",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"rewardPerTokenStored",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"rewardRate",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"rewards",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"rewardsDuration",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"rewardsToken",outputs:[{internalType:"contract IERC20",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_rewardsDuration",type:"uint256"}],name:"setRewardsDuration",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"amount",type:"uint256"}],name:"stake",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"stakingToken",outputs:[{internalType:"contract IERC20",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"stakingTokensDecimalRate",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"userRewardPerTokenPaid",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"amount",type:"uint256"}],name:"withdraw",outputs:[],stateMutability:"nonpayable",type:"function"}],C=[{constant:!0,inputs:[],name:"name",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"spender",type:"address"},{name:"value",type:"uint256"}],name:"approve",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"totalSupply",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"from",type:"address"},{name:"to",type:"address"},{name:"value",type:"uint256"}],name:"transferFrom",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"_spender",type:"address"},{name:"_value",type:"uint256"},{name:"_extraData",type:"string"}],name:"approveAndCall",outputs:[{name:"success",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"decimals",outputs:[{name:"",type:"uint8"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"spender",type:"address"},{name:"addedValue",type:"uint256"}],name:"increaseAllowance",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"to",type:"address"},{name:"value",type:"uint256"}],name:"mint",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"value",type:"uint256"}],name:"burn",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"from",type:"address"}],name:"getAvailableBalance",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"tokensMinted",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"owner",type:"address"}],name:"balanceOf",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"from",type:"address"},{name:"value",type:"uint256"}],name:"burnFrom",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"symbol",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"account",type:"address"}],name:"addMinter",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[],name:"renounceMinter",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"spender",type:"address"},{name:"subtractedValue",type:"uint256"}],name:"decreaseAllowance",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"to",type:"address"},{name:"value",type:"uint256"}],name:"transfer",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"account",type:"address"}],name:"isMinter",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"owner",type:"address"}],name:"freezeFor",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"owner",type:"address"}],name:"freezeOf",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_to",type:"address"},{name:"_value",type:"uint256"},{name:"_unfreezeTimestamp",type:"uint256"},{name:"_subsequentUnlock",type:"bool"}],name:"mintWithFreeze",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"maxSupply",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"owner",type:"address"},{name:"spender",type:"address"}],name:"allowance",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{inputs:[],payable:!1,stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,name:"account",type:"address"}],name:"MinterAdded",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"account",type:"address"}],name:"MinterRemoved",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"from",type:"address"},{indexed:!0,name:"to",type:"address"},{indexed:!1,name:"value",type:"uint256"}],name:"Transfer",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"owner",type:"address"},{indexed:!0,name:"spender",type:"address"},{indexed:!1,name:"value",type:"uint256"}],name:"Approval",type:"event"}],H=C,q=new o({title:"Deposit",content:'\n    <div class="ff-text-field-container">\n      <div class="ff-text-field-label">Available to deposit:</div>\n      <input class="ff-text-field" type="text" value="" placeholder="0.0" />\n    </div>\n    <div class="ff-modal-buttons">\n      <button class="ff-button" type="button">Deposit</button>\n    </div>\n  ',onOpen:function(t){var e=this,a=t.contracts,i=t.stakingDecimals,n=t.stakingTokenSymbol,s=M.opts.networkName,o=M.account,r=!1,u=this.elems.root.querySelector(".ff-text-field-label"),d=this.elems.root.querySelector(".ff-text-field"),l=this.elems.root.querySelector(".ff-modal-buttons"),c=this.elems.root.querySelector(".ff-button");a.staking.methods.balanceOf(o).call().then(function(t){t=y(Number(t)/Math.pow(10,i));u.innerHTML="Available to deposit: <b>"+t+" "+n+"</b>"}),c.addEventListener("click",function(){return k(e,void 0,void 0,function(){var e,n=this;return T(this,function(t){return r||0<(e=Number(d.value))&&(r=!0,c.disabled=!0,c.innerHTML='<div class="ff-loader"></div>',e=p(e,i),a.farm.methods.stake(e).send({from:o}).on("transactionHash",function(t){var e=document.createElement("div");e.classList.add("ff-transaction-link"),e.innerHTML='Pending transaction: <a href="https://'+s.toLowerCase()+".etherscan.io/tx/"+t+'" target="_blank">'+t+"</a>",n.elems.content.insertBefore(e,l)}).on("error",function(t){console.error(t),S.open({title:"Transaction failed",message:"Something went wrong. Try again later."})}).then(function(){h.dispatch("deposit success"),S.open({title:"Transaction successful",message:"The tokens were credited to the contract."})})),[2]})})})}}),E=new o({title:"Withdraw",content:'\n    <div class="ff-text-field-container">\n      <div class="ff-text-field-label">Available to withdraw:</div>\n      <input class="ff-text-field" type="text" value="" placeholder="0.0" />\n    </div>\n    <div class="ff-modal-buttons">\n      <button class="ff-button" type="button">Withdraw</button>\n    </div>\n  ',onOpen:function(t){var e=this,a=t.contracts,i=t.stakingDecimals,n=t.stakingTokenSymbol,s=M.opts.networkName,o=M.account,r=!1,u=this.elems.root.querySelector(".ff-text-field-label"),d=this.elems.root.querySelector(".ff-text-field"),l=this.elems.root.querySelector(".ff-modal-buttons"),c=this.elems.root.querySelector(".ff-button");a.farm.methods.balanceOf(o).call().then(function(t){t=y(Number(t)/Math.pow(10,i));u.innerHTML="Available to withdraw: <b>"+t+" "+n+"</b>"}),c.addEventListener("click",function(){return k(e,void 0,void 0,function(){var e,n=this;return T(this,function(t){return r||0<(e=Number(d.value))&&(r=!0,c.disabled=!0,c.innerHTML='<div class="ff-loader"></div>',e=p(e,i),a.farm.methods.withdraw(e).send({from:o}).on("transactionHash",function(t){var e=document.createElement("div");e.classList.add("ff-transaction-link"),e.innerHTML='Pending transaction: <a href="https://'+s.toLowerCase()+".etherscan.io/tx/"+t+'" target="_blank">'+t+"</a>",n.elems.content.insertBefore(e,l)}).on("error",function(t){console.error(t),S.open({title:"Transaction failed",message:"Something went wrong. Try again later."})}).then(function(){h.dispatch("withdraw success"),S.open({title:"Transaction successful",message:"The tokens were credited to your account."})})),[2]})})})}});function B(t){var s=this;this.createButton=function(e,n){var a=e.innerHTML,i=!1;e.addEventListener("click",function(){return k(s,void 0,void 0,function(){return T(this,function(t){switch(t.label){case 0:return i?[2]:(i=!0,e.disabled=!0,e.innerHTML='<div class="ff-loader"></div>',[4,n()]);case 1:return t.sent(),e.disabled=!1,e.innerHTML=a,[2]}})})})},this.handleApproved=function(){s.elems.approveButton.classList.add("ff-hidden"),s.elems.earnSection.classList.remove("ff-hidden"),s.elems.stakeSection.classList.remove("ff-hidden"),s.elems.depositButton.addEventListener("click",function(){q.open({contracts:s.contracts,stakingDecimals:s.state.stakingDecimals,stakingTokenSymbol:s.state.stakingTokenSymbol})}),s.elems.withdrawButton.addEventListener("click",function(){E.open({contracts:s.contracts,stakingDecimals:s.state.stakingDecimals,stakingTokenSymbol:s.state.stakingTokenSymbol})}),s.createButton(s.elems.harvestButton,function(){return k(s,void 0,void 0,function(){var e,n;return T(this,function(t){return e=M.opts.networkName,n=M.account,[2,this.contracts.farm.methods.getReward().send({from:n}).on("transactionHash",function(t){console.log("Harvest trx:","https://"+e.toLowerCase()+".etherscan.io/tx/"+t)}).on("error",function(t){console.error(t),S.open({title:"Transaction failed",message:"Something went wrong. Try again later."})}).then(function(){h.dispatch("harvest success"),S.open({title:"Transaction successful",message:"The tokens were credited to the contract."})})]})})})},this.initCommon=function(){return k(s,void 0,void 0,function(){var i,s,o,r,u,d,l,c,p=this;return T(this,function(t){switch(t.label){case 0:return u=this.opts,i=u.farmAddress,s=u.rewardsAddress,l=u.stakingAddress,o=M.opts.networkName,u={mainnet:"https://mainnet.infura.io/v3/5ffc47f65c4042ce847ef66a3fa70d4c",ropsten:"https://ropsten.infura.io/v3/5ffc47f65c4042ce847ef66a3fa70d4c",kovan:"https://kovan.infura.io/v3/5ffc47f65c4042ce847ef66a3fa70d4c",matic:"https://betav2.matic.network",matic_test:"https://betav2.matic.network",bsc:"https://bsc-dataseed1.binance.org:443",bsc_test:"https://data-seed-prebsc-1-s1.binance.org:8545",xdai:"https://rpc.xdaichain.com",aurora:"https://mainnet.aurora.dev"}[o.toLowerCase()],o=new window.Web3(window.Web3.givenProvider||window.ethereum||u),u=this,[4,f(o,{farmAddress:i,rewardsAddress:s,stakingAddress:l})];case 1:return u.readContracts=t.sent(),[4,Promise.all([this.readContracts.staking.methods.symbol().call(),this.readContracts.staking.methods.decimals().call(),this.readContracts.rewards.methods.symbol().call(),this.readContracts.rewards.methods.decimals().call()])];case 2:return l=t.sent(),r=l[0],u=l[1],d=l[2],l=l[3],this.state.stakingTokenSymbol=r,this.state.rewardsTokenSymbol=d,this.state.stakingDecimals=u,this.state.rewardsDecimals=l,this.elems.rewardsTokenSymbol.innerHTML=d,this.elems.stakingTokenSymbol.innerHTML=r,"function"==typeof this.opts.title?this.elems.title.innerHTML=this.opts.title(r,d):"string"==typeof this.opts.title?this.elems.title.innerHTML=this.opts.title:this.elems.title.innerHTML=d+"-"+r,e=this.opts,a=(n={stakingTokenSymbol:r,rewardsTokenSymbol:d}).stakingTokenSymbol,n=n.rewardsTokenSymbol,a=m(e.stakingTokenIcon,a),n=m(e.rewardsTokenIcon,n),l=a||n?{staking:a,rewards:n}:null,this.elems.tokenIcons.innerHTML=l?"\n        "+(l.rewards?'<img class="ff-widget-token-icon" src="'+l.rewards+'" />':"")+"\n        "+(l.staking?'<img class="ff-widget-token-icon" src="'+l.staking+'" />':"")+"\n      ":"",this.elems.apyValue&&("function"==typeof this.opts.apy?this.opts.apy().then(function(t){p.elems.apyValue.innerHTML=t+"%"}):this.elems.apyValue.innerHTML=this.opts.apy+"%"),this.elems.aprValue&&("function"==typeof this.opts.apr?this.opts.apr().then(function(t){p.elems.aprValue.innerHTML=""+t}):this.elems.aprValue.innerHTML=""+this.opts.apr),this.opts.detailsLink?(l=void 0,l="function"==typeof this.opts.detailsLink?this.opts.detailsLink(r,d):this.opts.detailsLink,(c=document.createElement("a")).classList.add("ff-widget-details"),c.innerText="Details",c.href=l,this.elems.root.appendChild(c)):this.opts.detailsClick&&((c=document.createElement("div")).classList.add("ff-widget-details"),c.innerText="Details",c.onclick=function(){p.opts.detailsClick(r,d)},this.elems.root.appendChild(c)),this.elems.depositTokenName.innerHTML=r,this.elems.earnTokenName.innerHTML=d,this.initTimer(),[2]}var e,n,a})})},this.init=function(){return k(s,void 0,void 0,function(){var e,n,a,i;return T(this,function(t){return i=this.opts,e=i.farmAddress,n=i.rewardsAddress,a=i.stakingAddress,i=M.web3,this.elems.unlockButton.classList.add("ff-hidden"),this.contracts=f(i,{farmAddress:e,rewardsAddress:n,stakingAddress:a}),this.updateValues(),h.subscribe("harvest success",this.updateValues),h.subscribe("deposit success",this.updateValues),h.subscribe("withdraw success",this.updateValues),[2]})})},this.initTimer=function(){return k(s,void 0,void 0,function(){var e,n,i,s=this;return T(this,function(t){switch(t.label){case 0:return t.trys.push([0,2,,3]),[4,this.readContracts.farm.methods.periodFinish().call()];case 1:return e=t.sent(),[3,3];case 2:return n=t.sent(),console.error(n),[2];case 3:return 0<(i=Number(e.toString()))-Date.now()/1e3?setInterval(function(){var t=Math.floor((1e3*i-Date.now())/1e3),e=Math.floor(t/86400);t-=86400*e;var n=Math.floor(t/3600)%24;t-=3600*n;var a=Math.floor(t/60)%60,t=(t-=60*a)%60,t=(e<10?"0"+e:e)+":"+(n<10?"0"+n:n)+":"+(a<10?"0"+a:a)+":"+(t<10?"0"+t:t);s.elems.timer.innerHTML=t},1e3):this.elems.timer.innerHTML="Farming not started yet",[2]}})})},this.updateValues=function(){return k(s,void 0,void 0,function(){var e,n,a,i;return T(this,function(t){switch(t.label){case 0:return a=M.account,[4,Promise.all([this.readContracts.farm.methods.balanceOf(a).call(),this.readContracts.farm.methods.earned(a).call(),this.readContracts.staking.methods.allowance(a,this.opts.farmAddress).call()])];case 1:return i=t.sent(),e=i[0],n=i[1],a=i[2],0===Number(a)?this.elems.approveButton.classList.remove("ff-hidden"):this.handleApproved(),i=this.state,a=i.stakingDecimals,i=i.rewardsDecimals,this.elems.earnedAmount.innerText=y(n/Math.pow(10,i)),this.elems.stakedAmount.innerText=y(e/Math.pow(10,a)),0<n&&(this.elems.harvestButton.disabled=!1),0<e&&(this.elems.withdrawButton.disabled=!1),this.elems.depositButton.disabled=!1,[2]}})})},this.opts=t,this.elems={},this.state={};var e=t.farmAddress,n=t.rewardsAddress,a=t.stakingAddress;if(!e||!n||!a)throw new Error('Widget requires "farmAddress", "rewardsAddress", "stakingAddress" options');this.injectHtml(t),this.initCommon(),h.subscribe("account connected",this.init)}return{init:function(n){return k(void 0,void 0,void 0,function(){return T(this,function(t){if(!n)throw new Error("options required");if("https:"!==location.protocol)throw new Error("FarmFactory requires HTTPS connection");var e;return i({opts:n}),(e=document.createElement("div")).setAttribute("id",s),document.body.appendChild(e),L(),[2]})})},Widget:(B.prototype.injectHtml=function(i){var t=this,e=document.getElementById(i.selector);e.classList.add("ff-widget"),e.innerHTML=(g={withAPY:Boolean(this.opts.apy),withAPR:Boolean(this.opts.apr),apyLabel:this.opts.apyLabel,aprLabel:this.opts.aprLabel},b=g.withAPY,w=g.withAPR,h=void 0===(h=g.apyLabel)?"APY":h,g=g.aprLabel,'\n  <div class="ff-widget-headline">\n    <div class="ff-widget-token-icons">\n      <div class="ff-widget-token-icon">\n        <span class="ff-skeleton"></span>\n      </div>\n      <div class="ff-widget-token-icon">\n        <span class="ff-skeleton"></span>\n      </div>\n    </div>\n    <div class="ff-title-and-timer">\n      <div class="ff-widget-title">\n        <span class="ff-skeleton"></span>\n      </div>\n      <div class="ff-widget-timer">--:--:--:--</div>\n    </div>\n  </div>\n  <div class="ff-widget-section ff-widget-stats">\n    '+(b?'\n      <div class="ff-widget-row2">\n        <div class="ff-widget-label">'+h+':</div>\n        <div class="ff-widget-value ff-widget-apy">\n          <span class="ff-skeleton"></span>\n        </div>\n      </div>\n    ':"")+"\n    "+(w?'\n      <div class="ff-widget-row2">\n        <div class="ff-widget-label">'+(void 0===g?"APR":g)+':</div>\n        <div class="ff-widget-value ff-widget-apr">\n          <span class="ff-skeleton"></span>\n        </div>\n      </div>\n    ':"")+'  \n    <div class="ff-widget-row2">\n      <div class="ff-widget-label">Deposit:</div>\n      <div class="ff-widget-value ff-widget-deposit-token-name">\n        <span class="ff-skeleton"></span>\n      </div>\n    </div>  \n    <div class="ff-widget-row2">\n      <div class="ff-widget-label">Earn:</div>\n      <div class="ff-widget-value ff-widget-earn-token-name">\n        <span class="ff-skeleton"></span>\n      </div>\n    </div>  \n  </div>\n  <div class="ff-widget-section ff-widget-earn-section ff-hidden">\n    <div class="ff-widget-section-title">\n      <b class="ff-rewards-token-name">\n        <span class="ff-skeleton"></span>\n      </b> Earned\n    </div>\n    <div class="ff-widget-row">\n      <div class="ff-widget-value ff-widget-earned-amount">\n        <span class="ff-skeleton"></span>\n      </div>\n      <div>\n        <button class="ff-button ff-widget-harvest-button" type="button" disabled>Harvest</button>\n      </div>\n    </div>\n  </div>\n  <div class="ff-widget-section ff-widget-stake-section ff-hidden">\n    <div class="ff-widget-section-title">\n      <b class="ff-staking-token-name">\n        <span class="ff-skeleton"></span>\n      </b> Staked\n    </div>\n    <div class="ff-widget-row">\n      <div class="ff-widget-value ff-widget-staked-amount">\n        <span class="ff-skeleton"></span>\n      </div>\n      <div>\n        <button class="ff-button ff-widget-deposit-button" type="button" disabled>Deposit</button>\n        <button class="ff-button ff-widget-withdraw-button" type="button" disabled>Withdraw</button>\n      </div>\n    </div>\n  </div>\n  <div class="ff-widget-footer">\n    <button class="ff-button ff-widget-unlock-button" type="button">Unlock wallet</button>\n    <button class="ff-button ff-widget-approve-button ff-hidden" type="button">Approve contract</button>\n  </div>\n');var n=e.querySelector(".ff-widget-token-icons"),a=e.querySelector(".ff-widget-title"),s=e.querySelector(".ff-widget-timer"),o=e.querySelector(".ff-rewards-token-name"),r=e.querySelector(".ff-staking-token-name"),u=e.querySelector(".ff-widget-apy"),d=e.querySelector(".ff-widget-apr"),l=e.querySelector(".ff-widget-deposit-token-name"),c=e.querySelector(".ff-widget-earn-token-name"),p=e.querySelector(".ff-widget-earn-section"),f=e.querySelector(".ff-widget-stake-section"),y=e.querySelector(".ff-widget-earned-amount"),m=e.querySelector(".ff-widget-staked-amount"),v=e.querySelector(".ff-widget-unlock-button"),b=e.querySelector(".ff-widget-approve-button"),h=e.querySelector(".ff-widget-deposit-button"),w=e.querySelector(".ff-widget-withdraw-button"),g=e.querySelector(".ff-widget-harvest-button");this.elems={root:e,tokenIcons:n,title:a,timer:s,rewardsTokenSymbol:o,stakingTokenSymbol:r,apyValue:u,aprValue:d,depositTokenName:l,earnTokenName:c,earnSection:p,stakeSection:f,earnedAmount:y,stakedAmount:m,unlockButton:v,approveButton:b,depositButton:h,withdrawButton:w,harvestButton:g},v.addEventListener("click",function(){x()}),this.createButton(b,function(){return k(t,void 0,void 0,function(){var e,n,a;return T(this,function(t){switch(t.label){case 0:n=M.web3,a=M.account,e=i.farmAddress,n=n.utils.toBN("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"),t.label=1;case 1:return t.trys.push([1,3,,4]),[4,this.contracts.staking.methods.approve(e,n).send({from:a})];case 2:return t.sent(),this.handleApproved(),[3,4];case 3:return a=t.sent(),console.error(a),S.open(a.message),[3,4];case 4:return[2]}})})})},B)}}();