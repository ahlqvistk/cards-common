parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"HqIr":[function(require,module,exports) {
module.exports=function(){const c=["2","3","4","5","6","7","8","9","10","J","Q","K","A"];return["c","d","h","s"].map(e=>c.map(c=>e+c)).reduce((c,e)=>c.concat(e))};
},{}],"dyW7":[function(require,module,exports) {
module.exports=function(e,t,n){function c(e,t){return e.map((e,t)=>({id:e.socket.id,placement:t})).filter(e=>e.id===t).map(e=>e.placement)[0]}const i=c(n,e);return(c(n,t)-i+n.length-1)%n.length};
},{}],"4ZFf":[function(require,module,exports) {
module.exports=function(e,r,t){return e.filter((e,n)=>(n-t)%r==0)};
},{}],"8LgA":[function(require,module,exports) {
var e=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e};const r=require("./get-deal-order"),t=require("./get-from-cards-to-deal");module.exports=function(n,c,a,o){const s=a.cards.slice(0,n*o.length),l=a.cards.slice(n*o.length),d=o.map(n=>{const a=t(s,o.length,r(c,n.socket.id,o));return e({},n,{cards:a})});return{newDeck:e({},a,{cards:l}),newPlayers:d}};
},{"./get-deal-order":"dyW7","./get-from-cards-to-deal":"4ZFf"}],"45oj":[function(require,module,exports) {
module.exports=function(e,i){return i.map((e,i)=>({id:e.socket.id,index:i})).filter(i=>i.id===e)[0].index};
},{}],"nKNt":[function(require,module,exports) {
module.exports=function(e,t){return t.filter(t=>t.socket.id===e)[0]};
},{}],"ZVOQ":[function(require,module,exports) {
function e(e){return e.slice(1)}function t(e){switch(e.slice(0,1)){case"c":return"clubs";case"d":return"diamonds";case"h":return"hearts";case"s":return"spades"}}function r(e){switch(e.slice(0,1)){case"c":return"♣";case"d":return"♦";case"h":return"♥";case"s":return"♠"}}function c(t){return{2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,10:10,J:11,Q:12,K:13,A:14}[e(t)]}module.exports={getRank:e,getSuit:t,getUnicodeSuit:r,getValue:c};
},{}],"SRKM":[function(require,module,exports) {
module.exports=function(p){const t=p.map(p=>p.socket.id),o=p.map(p=>p.points);return{players:t,points:o[0].map((p,t)=>o.map(p=>p[t])),totals:o.map(p=>p.reduce((p,t)=>p+t))}};
},{}],"55Rp":[function(require,module,exports) {
const{getSuit:e,getValue:t}=require("./get-rank-suit");module.exports=function(u,i,l){const n=e(u),r=e(i),s=l.map((u,i)=>({index:i,suit:e(u),value:t(u)})),a=s.filter(e=>e.suit===r);return a.length?a.sort((e,t)=>t.value-e.value)[0].index:s.filter(e=>e.suit===n).sort((e,t)=>t.value-e.value)[0].index};
},{"./get-rank-suit":"ZVOQ"}],"ViN0":[function(require,module,exports) {
module.exports=function(e){if(e.activePlayer!==e.dealer)return[];const r=e.players[0].cards.length,d=e.players.reduce((e,r)=>r.hasOwnProperty("bid")&&r.bid&&r.bid>=0?e+r.bid:e+0,0);return r>=d?[r-d]:[]};
},{}],"HaWu":[function(require,module,exports) {
module.exports=function(e,i){const t=i.map((e,i)=>({id:e.socket.id,index:i})).filter(i=>i.id===e).map(e=>e.index)[0];return i[(t+1)%i.length].socket.id};
},{}],"8Dws":[function(require,module,exports) {
module.exports=function(c,e){return 0===c?e:e.slice(c).concat(e.slice(0,c))};
},{}],"8hXK":[function(require,module,exports) {
var r=Object.assign||function(r){for(var c=1;c<arguments.length;c++){var e=arguments[c];for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(r[t]=e[t])}return r};module.exports=function(c,e){const t=e.cards.slice(0,c),a=e.cards.slice(c);return{cards:t,deck:r({},e,{cards:a})}};
},{}],"7eFT":[function(require,module,exports) {
module.exports=function(o){return o[Math.floor(Math.random()*o.length)]};
},{}],"A33x":[function(require,module,exports) {
const e=require("deep-equal");module.exports=function(r,t){return t.filter(t=>!e(t,r))};
},{}],"lDSf":[function(require,module,exports) {
module.exports=function(e,t){const n=Object.assign({},t);return e.forEach(e=>{delete n[e]}),n};
},{}],"qx9m":[function(require,module,exports) {
module.exports=function(o){return o.map(o=>({sort:Math.random(),value:o})).sort((o,r)=>o.sort-r.sort).map(o=>o.value)};
},{}],"orqP":[function(require,module,exports) {
module.exports=function(e,r){const i=r.players[0].cards.length;if(e>i||e<0)return!1;if(r.activePlayer===r.dealer){if(r.players.reduce((e,r)=>r.hasOwnProperty("bid")&&r.bid&&r.bid>=0?e+r.bid:e+0,0)+e===i)return!1}return!0};
},{}],"I4Y1":[function(require,module,exports) {
const e=require("./get-player"),{getSuit:r}=require("./get-rank-suit");module.exports=function(a,t){const n=e(t.activePlayer,t.players),i=n&&n.hasOwnProperty("cards")?n.cards:[];if(!i.includes(a))return!1;if(!t.leadingPlayer)return!0;const l=r(e(t.leadingPlayer,t.players).playedCard),s=r(a),u=i.map(e=>r(e));return s===l||!u.includes(l)};
},{"./get-player":"nKNt","./get-rank-suit":"ZVOQ"}],"Focm":[function(require,module,exports) {
const e=require("./create-deck"),r=require("./deal-cards"),a=require("./get-deal-order"),i=require("./get-from-cards-to-deal"),d=require("./get-player-index-from-id"),t=require("./get-player"),{getRank:o,getSuit:u,getUnicodeSuit:l,getValue:n}=require("./get-rank-suit"),g=require("./get-scoreboard"),m=require("./get-winning-card-index"),q=require("./invalid-bids"),y=require("./next-player"),s=require("./order-array-from-index"),c=require("./pick-cards"),v=require("./random-from-array"),f=require("./remove-item-from-array"),x=require("./remove-keys"),k=require("./shuffle-array"),p=require("./valid-bid"),F=require("./valid-play");module.exports={createDeck:e,dealCards:r,getDealOrder:a,getFromCardsToDeal:i,getPlayerIndexFromId:d,getPlayer:t,getRank:o,getSuit:u,getUnicodeSuit:l,getValue:n,getScoreboard:g,getWinningCardIndex:m,invalidBids:q,nextPlayer:y,orderArrayFromIndex:s,pickCards:c,randomFromArray:v,removeItemFromArray:f,removeKeys:x,shuffleArray:k,validBid:p,validPlay:F};
},{"./create-deck":"HqIr","./deal-cards":"8LgA","./get-deal-order":"dyW7","./get-from-cards-to-deal":"4ZFf","./get-player-index-from-id":"45oj","./get-player":"nKNt","./get-rank-suit":"ZVOQ","./get-scoreboard":"SRKM","./get-winning-card-index":"55Rp","./invalid-bids":"ViN0","./next-player":"HaWu","./order-array-from-index":"8Dws","./pick-cards":"8hXK","./random-from-array":"7eFT","./remove-item-from-array":"A33x","./remove-keys":"lDSf","./shuffle-array":"qx9m","./valid-bid":"orqP","./valid-play":"I4Y1"}]},{},["Focm"], null)
//# sourceMappingURL=/index.map