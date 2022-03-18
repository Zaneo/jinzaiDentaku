"use strict";(self.webpackChunkjinzai_dentaku=self.webpackChunkjinzai_dentaku||[]).push([[985],{1985:function(e,a,s){s.r(a);var t=s(4942),n=s(5671),r=s(3144),i=s(7326),h=s(136),c=s(8505),l=s(1413),o=s(2791),d=s(2576),u=s(3027),x=s(5672),k=s(184),p=function(e){return(0,k.jsx)(d.Z,(0,l.Z)((0,l.Z)({id:"button-tooltip"},e),{},{children:"Author of research papers which appeared in an academic magazine registered in an academic research paper database used by Japanese national organizations."}))},g=function(e){(0,h.Z)(s,e);var a=(0,c.Z)(s);function s(e){var t;return(0,n.Z)(this,s),(t=a.call(this,e)).state={degreeTypes:["Doctors","Masters","Bachelors","Additional"],yearsWorkExperienceBrackets:[7,5,3],salaryBracketsMillion:[10,9,8,7,6,5,4,3],score:0},t.handleCheckedChanged=t.handleCheckedChanged.bind((0,i.Z)(t)),t.calculateVisaPoints=t.calculateVisaPoints.bind((0,i.Z)(t)),t.handleValueChanged=t.handleValueChanged.bind((0,i.Z)(t)),t}return(0,r.Z)(s,[{key:"handleValueChanged",value:function(e){this.setState((0,t.Z)({},e.target.name,e.target.value),this.calculateVisaPoints)}},{key:"handleCheckedChanged",value:function(e){this.setState((0,t.Z)({},e.target.name,e.target.checked),this.calculateVisaPoints)}},{key:"calculateVisaPoints",value:function(){var e=0;this.state.hasDoctorsDegree?e+=30:this.state.hasMastersDegree?e+=20:this.state.hasBachelorsDegree&&(e+=10),this.state.hasAdditionalDegree&&(e+=5),console.log(this.state),"7"===this.state.yearsWorkExperience?e+=15:"5"===this.state.yearsWorkExperience?e+=10:"3"===this.state.yearsWorkExperience&&(e+=5);var a=this.state.salaryBracketsMillion.length;this.state.age<29?e+=15:this.state.age<35?(e+=10,a-=1):this.state.age<40?(e+=5,a-=2):a-=4;for(var s=0;s<this.state.salaryBracketsMillion.length;s++)if(this.state.salary>=this.state.salaryBracketsMillion[s]&&a>s){e+=40-5*s;break}this.state.hasPatent&&(e+=20),this.state.hasThreePapers&&(e+=20),this.state.hasEquivalentResearchRecord&&(e+=20),"0"===this.state.salary&&(e=0),this.setState({score:e})}},{key:"render",value:function(){var e=this;return(0,k.jsxs)("div",{children:[(0,k.jsx)("div",{children:(0,k.jsxs)(u.Z,{children:[(0,k.jsxs)(u.Z.Group,{children:[(0,k.jsx)(u.Z.Label,{children:"Academic Background"}),this.state.degreeTypes.map((function(a){return(0,k.jsx)("div",{className:"mb-3",children:(0,k.jsx)(u.Z.Check,{type:"checkbox",id:"degree-".concat(a),name:"has".concat(a,"Degree"),label:"".concat(a," Degree"),onChange:e.handleCheckedChanged})},"degree-".concat(a))}))]}),(0,k.jsx)("br",{}),(0,k.jsxs)(u.Z.Group,{children:[(0,k.jsx)(u.Z.Label,{children:"Professional Career"}),this.state.yearsWorkExperienceBrackets.map((function(a,s){return(0,k.jsx)("div",{className:"mb-3",children:(0,k.jsx)(u.Z.Check,{type:"radio",id:"yearsWorkExperience-".concat(a),name:"yearsWorkExperience",value:a,label:s?"".concat(a):">".concat(a),onChange:e.handleValueChanged})},"yearsWorkExperience-".concat(a))})),(0,k.jsx)("div",{className:"mb-3",children:(0,k.jsx)(u.Z.Check,{type:"radio",id:"yearsWorkExperience-below-minimum",name:"yearsWorkExperience",value:0,label:"<".concat(this.state.yearsWorkExperienceBrackets.slice(-1)[0]),onChange:this.handleValueChanged})},"yearsWorkExperience-below-minimum")]}),(0,k.jsx)("br",{}),(0,k.jsxs)(u.Z.Group,{children:[(0,k.jsx)(u.Z.Label,{children:"Age"}),(0,k.jsx)("div",{className:"mb-3",children:(0,k.jsx)(u.Z.Control,{required:!0,name:"age",type:"number",min:"0",value:this.state.age,onChange:this.handleValueChanged})})]}),(0,k.jsxs)(u.Z.Group,{children:[(0,k.jsx)(u.Z.Label,{children:"Annual Salary"}),(0,k.jsx)("div",{className:"mb-3",children:(0,k.jsxs)("select",{name:"salary",value:this.state.salary,onChange:this.handleValueChanged,children:[this.state.salaryBracketsMillion.map((function(e){return(0,k.jsx)("option",{value:e,children:">".concat(e," million yen")})})),(0,k.jsx)("option",{value:0,children:"<".concat(this.state.salaryBracketsMillion.slice(-1)[0]," million yen")})]})})]}),(0,k.jsx)("br",{}),(0,k.jsxs)(u.Z.Group,{children:[(0,k.jsx)(u.Z.Label,{children:"Bonus Points"}),(0,k.jsxs)(u.Z.Group,{children:[(0,k.jsx)(u.Z.Label,{children:"Research Achievements"}),(0,k.jsx)(u.Z.Check,{type:"checkbox",name:"hasPatent",value:this.state.hasPatent,label:"Hold a patent",onChange:this.handleCheckedChanged}),(0,k.jsx)(u.Z.Check,{type:"checkbox",name:"receivedGovernmentGrants",value:this.state.receivedGovernmentGrants,label:"Received at least 3 public research grants",onChange:this.handleCheckedChanged}),(0,k.jsx)(x.Z,{placement:"right",overlay:p,children:(0,k.jsx)(u.Z.Check,{type:"checkbox",name:"hasThreePapers",value:this.state.hasThreePapers,label:"Publish 3 papers in Japanese database",tool:!0,onChange:this.handleCheckedChanged})}),(0,k.jsx)(u.Z.Check,{type:"checkbox",name:"hasEquivalentResearchRecord",value:this.state.hasEquivalentResearchRecord,label:"Equivalent research record",onChange:this.handleCheckedChanged})]})]})]})}),(0,k.jsx)("div",{children:(0,k.jsx)("h2",{children:this.state.score})})]})}}]),s}(o.Component);a.default=g}}]);
//# sourceMappingURL=985.04284ecc.chunk.js.map