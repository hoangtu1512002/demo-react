import{_ as v,a as u,c as h,P as a,b as T}from"./props-CrjKqQpG.js";import{r as y,R as N}from"./index-DCpHgp3c.js";var m=y.forwardRef(function(e,l){var r=e.children,c=e.active,n=e.as,t=n===void 0?"a":n,d=e.className,s=e.disabled,o=v(e,["children","active","as","className","disabled"]);return N.createElement(t,u({className:h(d,{active:c,disabled:s})},c&&{"aria-current":"page"},t==="a"&&s&&{"aria-disabled":!0,tabIndex:-1},(t==="a"||t==="button")&&{onClick:function(i){i.preventDefault,!s&&o.onClick&&o.onClick(i)}},{disabled:s},o,{ref:l}),r)});m.propTypes={active:a.bool,as:a.elementType,children:a.node,className:a.string,disabled:a.bool};m.displayName="CLink";var C=y.forwardRef(function(e,l){var r,c=e.children,n=e.as,t=n===void 0?"button":n,d=e.className,s=e.color,o=e.shape,i=e.size,b=e.type,g=b===void 0?"button":b,f=e.variant,p=v(e,["children","as","className","color","shape","size","type","variant"]);return N.createElement(m,u({as:p.href?"a":t},!p.href&&{type:g},{className:h("btn",f?"btn-".concat(f,"-").concat(s):"btn-".concat(s),(r={},r["btn-".concat(i)]=i,r),o,d)},p,{ref:l}),c)});C.propTypes={as:a.elementType,children:a.node,className:a.string,color:T,shape:a.string,size:a.oneOf(["sm","lg"]),type:a.oneOf(["button","submit","reset"]),variant:a.oneOf(["outline","ghost"])};C.displayName="CButton";export{m as C,C as a};
