"use strict";(self.webpackChunkjinzai_dentaku=self.webpackChunkjinzai_dentaku||[]).push([[168],{168:function(e,a,s){s.r(a),s.d(a,{default:function(){return fe}});var t=s(942),i=s(671),r=s(144),n=s(326),l=s(136),o=s(505),c=s(791),d=s(413),f=s(987),u=s(694),v=s.n(u),h=s(7),m=s.n(h),p=s(184),x=["as","className","type","tooltip"],b={type:m().string,tooltip:m().bool,as:m().elementType},y=c.forwardRef((function(e,a){var s=e.as,t=void 0===s?"div":s,i=e.className,r=e.type,n=void 0===r?"valid":r,l=e.tooltip,o=void 0!==l&&l,c=(0,f.Z)(e,x);return(0,p.jsx)(t,(0,d.Z)((0,d.Z)({},c),{},{ref:a,className:v()(i,"".concat(n,"-").concat(o?"tooltip":"feedback"))}))}));y.displayName="Feedback",y.propTypes=b;var Z=y,N=c.createContext({}),j=s(162),k=["id","bsPrefix","className","type","isValid","isInvalid","as"],g=c.forwardRef((function(e,a){var s=e.id,t=e.bsPrefix,i=e.className,r=e.type,n=void 0===r?"checkbox":r,l=e.isValid,o=void 0!==l&&l,u=e.isInvalid,h=void 0!==u&&u,m=e.as,x=void 0===m?"input":m,b=(0,f.Z)(e,k),y=(0,c.useContext)(N).controlId;return t=(0,j.vE)(t,"form-check-input"),(0,p.jsx)(x,(0,d.Z)((0,d.Z)({},b),{},{ref:a,type:n,id:s||y,className:v()(i,t,o&&"is-valid",h&&"is-invalid")}))}));g.displayName="FormCheckInput";var C=g,P=["bsPrefix","className","htmlFor"],I=c.forwardRef((function(e,a){var s=e.bsPrefix,t=e.className,i=e.htmlFor,r=(0,f.Z)(e,P),n=(0,c.useContext)(N).controlId;return s=(0,j.vE)(s,"form-check-label"),(0,p.jsx)("label",(0,d.Z)((0,d.Z)({},r),{},{ref:a,htmlFor:i||n,className:v()(t,s)}))}));I.displayName="FormCheckLabel";var w=I;var F=["id","bsPrefix","bsSwitchPrefix","inline","disabled","isValid","isInvalid","feedbackTooltip","feedback","feedbackType","className","style","title","type","label","children","as"],E=c.forwardRef((function(e,a){var s=e.id,t=e.bsPrefix,i=e.bsSwitchPrefix,r=e.inline,n=void 0!==r&&r,l=e.disabled,o=void 0!==l&&l,u=e.isValid,h=void 0!==u&&u,m=e.isInvalid,x=void 0!==m&&m,b=e.feedbackTooltip,y=void 0!==b&&b,k=e.feedback,g=e.feedbackType,P=e.className,I=e.style,E=e.title,V=void 0===E?"":E,R=e.type,S=void 0===R?"checkbox":R,z=e.label,T=e.children,L=e.as,D=void 0===L?"input":L,O=(0,f.Z)(e,F);t=(0,j.vE)(t,"form-check"),i=(0,j.vE)(i,"form-switch");var W=(0,c.useContext)(N).controlId,A=(0,c.useMemo)((function(){return{controlId:s||W}}),[W,s]),M=!T&&null!=z&&!1!==z||function(e,a){return c.Children.toArray(e).some((function(e){return c.isValidElement(e)&&e.type===a}))}(T,w),B=(0,p.jsx)(C,(0,d.Z)((0,d.Z)({},O),{},{type:"switch"===S?"checkbox":S,ref:a,isValid:h,isInvalid:x,disabled:o,as:D}));return(0,p.jsx)(N.Provider,{value:A,children:(0,p.jsx)("div",{style:I,className:v()(P,M&&t,n&&"".concat(t,"-inline"),"switch"===S&&i),children:T||(0,p.jsxs)(p.Fragment,{children:[B,M&&(0,p.jsx)(w,{title:V,children:z}),k&&(0,p.jsx)(Z,{type:g,tooltip:y,children:k})]})})})}));E.displayName="FormCheck";var V=Object.assign(E,{Input:C,Label:w}),R=(s(391),["bsPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","as"]),S=c.forwardRef((function(e,a){var s,i,r=e.bsPrefix,n=e.type,l=e.size,o=e.htmlSize,u=e.id,h=e.className,m=e.isValid,x=void 0!==m&&m,b=e.isInvalid,y=void 0!==b&&b,Z=e.plaintext,k=e.readOnly,g=e.as,C=void 0===g?"input":g,P=(0,f.Z)(e,R),I=(0,c.useContext)(N).controlId;(r=(0,j.vE)(r,"form-control"),Z)?s=(0,t.Z)({},"".concat(r,"-plaintext"),!0):(i={},(0,t.Z)(i,r,!0),(0,t.Z)(i,"".concat(r,"-").concat(l),l),s=i);return(0,p.jsx)(C,(0,d.Z)((0,d.Z)({},P),{},{type:n,size:o,ref:a,readOnly:k,id:u||I,className:v()(h,s,x&&"is-valid",y&&"is-invalid","color"===n&&"".concat(r,"-color"))}))}));S.displayName="FormControl";var z=Object.assign(S,{Feedback:Z}),T=(0,s(543).Z)("form-floating"),L=["controlId","as"],D=c.forwardRef((function(e,a){var s=e.controlId,t=e.as,i=void 0===t?"div":t,r=(0,f.Z)(e,L),n=(0,c.useMemo)((function(){return{controlId:s}}),[s]);return(0,p.jsx)(N.Provider,{value:n,children:(0,p.jsx)(i,(0,d.Z)((0,d.Z)({},r),{},{ref:a}))})}));D.displayName="FormGroup";var O=D,W=s(885),A=["as","bsPrefix","className"],M=["className"];var B=c.forwardRef((function(e,a){var s=function(e){var a=e.as,s=e.bsPrefix,t=e.className,i=(0,f.Z)(e,A);s=(0,j.vE)(s,"col");var r=(0,j.pi)(),n=[],l=[];return r.forEach((function(e){var a,t,r,o=i[e];delete i[e],"object"===typeof o&&null!=o?(a=o.span,t=o.offset,r=o.order):a=o;var c="xs"!==e?"-".concat(e):"";a&&n.push(!0===a?"".concat(s).concat(c):"".concat(s).concat(c,"-").concat(a)),null!=r&&l.push("order".concat(c,"-").concat(r)),null!=t&&l.push("offset".concat(c,"-").concat(t))})),[(0,d.Z)((0,d.Z)({},i),{},{className:v().apply(void 0,[t].concat(n,l))}),{as:a,bsPrefix:s,spans:n}]}(e),t=(0,W.Z)(s,2),i=t[0],r=i.className,n=(0,f.Z)(i,M),l=t[1],o=l.as,c=void 0===o?"div":o,u=l.bsPrefix,h=l.spans;return(0,p.jsx)(c,(0,d.Z)((0,d.Z)({},n),{},{ref:a,className:v()(r,!h.length&&u)}))}));B.displayName="Col";var G=B,H=["as","bsPrefix","column","visuallyHidden","className","htmlFor"],_=c.forwardRef((function(e,a){var s=e.as,t=void 0===s?"label":s,i=e.bsPrefix,r=e.column,n=e.visuallyHidden,l=e.className,o=e.htmlFor,u=(0,f.Z)(e,H),h=(0,c.useContext)(N).controlId;i=(0,j.vE)(i,"form-label");var m="col-form-label";"string"===typeof r&&(m="".concat(m," ").concat(m,"-").concat(r));var x=v()(l,i,n&&"visually-hidden",r&&m);return o=o||h,r?(0,p.jsx)(G,(0,d.Z)({ref:a,as:"label",className:x,htmlFor:o},u)):(0,p.jsx)(t,(0,d.Z)({ref:a,className:x,htmlFor:o},u))}));_.displayName="FormLabel",_.defaultProps={column:!1,visuallyHidden:!1};var q=_,J=["bsPrefix","className","id"],K=c.forwardRef((function(e,a){var s=e.bsPrefix,t=e.className,i=e.id,r=(0,f.Z)(e,J),n=(0,c.useContext)(N).controlId;return s=(0,j.vE)(s,"form-range"),(0,p.jsx)("input",(0,d.Z)((0,d.Z)({},r),{},{type:"range",ref:a,className:v()(t,s),id:i||n}))}));K.displayName="FormRange";var Q=K,U=["bsPrefix","size","htmlSize","className","isValid","isInvalid","id"],X=c.forwardRef((function(e,a){var s=e.bsPrefix,t=e.size,i=e.htmlSize,r=e.className,n=e.isValid,l=void 0!==n&&n,o=e.isInvalid,u=void 0!==o&&o,h=e.id,m=(0,f.Z)(e,U),x=(0,c.useContext)(N).controlId;return s=(0,j.vE)(s,"form-select"),(0,p.jsx)("select",(0,d.Z)((0,d.Z)({},m),{},{size:i,ref:a,className:v()(r,s,t&&"".concat(s,"-").concat(t),l&&"is-valid",u&&"is-invalid"),id:h||x}))}));X.displayName="FormSelect";var Y=X,$=["bsPrefix","className","as","muted"],ee=c.forwardRef((function(e,a){var s=e.bsPrefix,t=e.className,i=e.as,r=void 0===i?"small":i,n=e.muted,l=(0,f.Z)(e,$);return s=(0,j.vE)(s,"form-text"),(0,p.jsx)(r,(0,d.Z)((0,d.Z)({},l),{},{ref:a,className:v()(t,s,n&&"text-muted")}))}));ee.displayName="FormText";var ae=ee,se=c.forwardRef((function(e,a){return(0,p.jsx)(V,(0,d.Z)((0,d.Z)({},e),{},{ref:a,type:"switch"}))}));se.displayName="Switch";var te=Object.assign(se,{Input:V.Input,Label:V.Label}),ie=["bsPrefix","className","children","controlId","label"],re=c.forwardRef((function(e,a){var s=e.bsPrefix,t=e.className,i=e.children,r=e.controlId,n=e.label,l=(0,f.Z)(e,ie);return s=(0,j.vE)(s,"form-floating"),(0,p.jsxs)(O,(0,d.Z)((0,d.Z)({ref:a,className:v()(t,s),controlId:r},l),{},{children:[i,(0,p.jsx)("label",{htmlFor:r,children:n})]}))}));re.displayName="FloatingLabel";var ne=re,le=["className","validated","as"],oe={_ref:m().any,validated:m().bool,as:m().elementType},ce=c.forwardRef((function(e,a){var s=e.className,t=e.validated,i=e.as,r=void 0===i?"form":i,n=(0,f.Z)(e,le);return(0,p.jsx)(r,(0,d.Z)((0,d.Z)({},n),{},{ref:a,className:v()(s,t&&"was-validated")}))}));ce.displayName="Form",ce.propTypes=oe;var de=Object.assign(ce,{Group:O,Control:z,Floating:T,Check:V,Switch:te,Label:q,Text:ae,Range:Q,Select:Y,FloatingLabel:ne}),fe=function(e){(0,l.Z)(s,e);var a=(0,o.Z)(s);function s(e){var t;return(0,i.Z)(this,s),(t=a.call(this,e)).state={degreeTypes:["Doctors","Masters","Bachelors","Additional"],score:0},t.handleCheckedChanged=t.handleCheckedChanged.bind((0,n.Z)(t)),t.calculateVisaPoints=t.calculateVisaPoints.bind((0,n.Z)(t)),t.handleValueChanged=t.handleValueChanged.bind((0,n.Z)(t)),t}return(0,r.Z)(s,[{key:"handleValueChanged",value:function(e){this.setState((0,t.Z)({},e.target.name,e.target.value),this.calculateVisaPoints)}},{key:"handleCheckedChanged",value:function(e){this.setState((0,t.Z)({},e.target.name,e.target.checked),this.calculateVisaPoints)}},{key:"calculateVisaPoints",value:function(){var e=0;this.state.hasDoctorsDegree?e+=30:this.state.hasMastersDegree?e+=20:this.state.hasBachelorsDegree&&(e+=10),this.state.hasAdditionalDegree&&(e+=5),console.log(this.state),7==this.state.yearsWorkExperience?this.state.score+=15:5==this.state.yearsWorkExperience?this.state.score+=10:3==this.state.yearsWorkExperience&&(this.state.score+=5),this.setState({score:e})}},{key:"render",value:function(){var e=this;return(0,p.jsxs)("div",{children:[(0,p.jsx)("div",{children:(0,p.jsxs)(de,{children:[(0,p.jsxs)(de.Group,{children:[(0,p.jsx)(de.Label,{children:"Academic Background"}),this.state.degreeTypes.map((function(a){de.Check,"default-".concat(a),"has".concat(a,"Degree"),"".concat(a," Degree"),e.handleCheckedChanged,"degree-".concat(a)}))]}),(0,p.jsx)("br",{}),(0,p.jsxs)("label",{children:["Professional Career:",(0,p.jsxs)("div",{onChange:this.handleValueChanged,children:[(0,p.jsx)("input",{type:"radio",value:"7",name:"yearsWorkExperience"})," >7",(0,p.jsx)("input",{type:"radio",value:"5",name:"yearsWorkExperience"})," 5",(0,p.jsx)("input",{type:"radio",value:"3",name:"yearsWorkExperience"})," 3",(0,p.jsx)("input",{type:"radio",value:"0",name:"yearsWorkExperience"})," <3"]})]})]})}),(0,p.jsx)("div",{children:(0,p.jsx)("h2",{children:this.state.score})})]})}}]),s}(c.Component)},391:function(e){var a=function(){};e.exports=a}}]);
//# sourceMappingURL=168.64a736b9.chunk.js.map