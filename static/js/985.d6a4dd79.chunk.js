"use strict";(self.webpackChunkjinzai_dentaku=self.webpackChunkjinzai_dentaku||[]).push([[985],{1985:function(e,a,s){s.r(a);var t=s(4942),i=s(5671),n=s(3144),r=s(7326),h=s(136),c=s(8505),l=s(1413),o=s(2791),d=s(2576),p=s(3027),u=s(5672),y=s(184),v=function(e){return(0,y.jsx)(d.Z,(0,l.Z)((0,l.Z)({id:"button-tooltip"},e),{},{children:"Author of research papers which appeared in an academic magazine registered in an academic research paper database used by Japanese national organizations."}))},m=function(e){(0,h.Z)(s,e);var a=(0,c.Z)(s);function s(e){var t;return(0,i.Z)(this,s),(t=a.call(this,e)).state={degreeTypes:["Doctors","Masters","Bachelors","Additional"],yearsWorkExperienceBrackets:[7,5,3],salaryBracketsMillion:[10,9,8,7,6,5,4,3],score:0,visaType:"academic"},t.handleCheckedChanged=t.handleCheckedChanged.bind((0,r.Z)(t)),t.calculateVisaPoints=t.calculateVisaPoints.bind((0,r.Z)(t)),t.handleValueChanged=t.handleValueChanged.bind((0,r.Z)(t)),t}return(0,n.Z)(s,[{key:"handleValueChanged",value:function(e){this.setState((0,t.Z)({},e.target.name,e.target.value),this.calculateVisaPoints)}},{key:"handleCheckedChanged",value:function(e){this.setState((0,t.Z)({},e.target.name,e.target.checked),this.calculateVisaPoints)}},{key:"calculateVisaPoints",value:function(){var e=0;this.state.hasDoctorsDegree?e+="business"===this.state.visaType?20:30:this.state.hasMastersDegree?e+=20:this.state.hasBachelorsDegree&&(e+=10),this.state.hasAdditionalDegree&&(e+=5),console.log(this.state);var a=0;"academic"===this.state.visaType?a=15:"technical"===this.state.visaType?a=20:"business"===this.state.visaType&&(a=25),this.state.yearsWorkExperience=parseInt(this.state.yearsWorkExperience);for(var s=0;s<this.state.yearsWorkExperienceBrackets.length;s++)if(this.state.yearsWorkExperience===this.state.yearsWorkExperienceBrackets[s]){e+=a-5*s;break}var t=this.state.salaryBracketsMillion.length;"academic"!==this.state.visaType&&"technical"!==this.state.visaType||(this.state.age<29?e+=15:this.state.age<35?(e+=10,t-=1):this.state.age<40?(e+=5,t-=2):t-=4);for(var i=0;i<this.state.salaryBracketsMillion.length;i++)if(parseInt(this.state.salary)>=this.state.salaryBracketsMillion[i]&&t>i){e+=40-5*i;break}if("academic"===this.state.visaType||"technical"===this.state.visaType){var n="academic"===this.state.visaType?20:15,r=0;this.state.hasPatent&&(r+=1),this.state.receivedGovernmentGrants&&(r+=1),this.state.hasThreePapers&&(r+=1),this.state.hasEquivalentResearchRecord&&(r+=1),this.state.visaType&&r>=2?e+=n+5:r>=1&&(e+=n)}"0"===this.state.salary&&(e=0),this.setState({score:e})}},{key:"render",value:function(){var e=this;return(0,y.jsxs)("div",{children:[(0,y.jsx)("link",{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css",integrity:"sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3",crossorigin:"anonymous"}),(0,y.jsx)("script",{src:"https://code.jquery.com/jquery-3.4.1.slim.min.js",integrity:"sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n",crossorigin:"anonymous"}),(0,y.jsx)("script",{src:"https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js",integrity:"sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo",crossorigin:"anonymous"}),(0,y.jsx)("script",{src:"https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/js/bootstrap.min.js",integrity:"sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6",crossorigin:"anonymous"}),(0,y.jsx)("div",{children:(0,y.jsxs)(p.Z,{children:[(0,y.jsxs)(p.Z.Group,{children:[(0,y.jsx)(p.Z.Label,{children:"Academic Background"}),this.state.degreeTypes.map((function(a){return(0,y.jsx)("div",{className:"mb-3",children:(0,y.jsx)(p.Z.Check,{type:"checkbox",id:"degree-".concat(a),name:"has".concat(a,"Degree"),label:"".concat(a," Degree"),onChange:e.handleCheckedChanged})},"degree-".concat(a))}))]}),(0,y.jsx)("br",{}),(0,y.jsxs)(p.Z.Group,{children:[(0,y.jsx)(p.Z.Label,{children:"Professional Career"}),this.state.yearsWorkExperienceBrackets.map((function(a,s){return(0,y.jsx)("div",{className:"mb-3",children:(0,y.jsx)(p.Z.Check,{type:"radio",id:"yearsWorkExperience-".concat(a),name:"yearsWorkExperience",value:a,label:s?"".concat(a):">".concat(a),onChange:e.handleValueChanged})},"yearsWorkExperience-".concat(a))})),(0,y.jsx)("div",{className:"mb-3",children:(0,y.jsx)(p.Z.Check,{type:"radio",id:"yearsWorkExperience-below-minimum",name:"yearsWorkExperience",value:0,label:"<".concat(this.state.yearsWorkExperienceBrackets.slice(-1)[0]),onChange:this.handleValueChanged})},"yearsWorkExperience-below-minimum")]}),(0,y.jsx)("br",{}),(0,y.jsxs)(p.Z.Group,{children:[(0,y.jsx)(p.Z.Label,{children:"Age"}),(0,y.jsx)("div",{className:"mb-3",children:(0,y.jsx)(p.Z.Control,{required:!0,name:"age",type:"number",min:"0",value:this.state.age,onChange:this.handleValueChanged})})]}),(0,y.jsxs)(p.Z.Group,{children:[(0,y.jsx)(p.Z.Label,{children:"Annual Salary"}),(0,y.jsx)("div",{className:"mb-3",children:(0,y.jsxs)("select",{name:"salary",value:this.state.salary,onChange:this.handleValueChanged,children:[this.state.salaryBracketsMillion.map((function(e){return(0,y.jsx)("option",{value:e,children:">".concat(e," million yen")})})),(0,y.jsx)("option",{value:0,children:"<".concat(this.state.salaryBracketsMillion.slice(-1)[0]," million yen")})]})})]}),(0,y.jsx)("br",{}),(0,y.jsxs)(p.Z.Group,{children:[(0,y.jsx)(p.Z.Label,{children:"Bonus Points"}),(0,y.jsxs)(p.Z.Group,{children:[(0,y.jsx)(p.Z.Label,{children:"Research Achievements"}),(0,y.jsx)(p.Z.Check,{type:"checkbox",name:"hasPatent",value:this.state.hasPatent,label:"Hold a patent",onChange:this.handleCheckedChanged}),(0,y.jsx)(p.Z.Check,{type:"checkbox",name:"receivedGovernmentGrants",value:this.state.receivedGovernmentGrants,label:"Received at least 3 public research grants",onChange:this.handleCheckedChanged}),(0,y.jsx)(u.Z,{placement:"right",overlay:v,children:(0,y.jsx)(p.Z.Check,{type:"checkbox",name:"hasThreePapers",value:this.state.hasThreePapers,label:"Publish 3 papers in Japanese database",tool:!0,onChange:this.handleCheckedChanged})}),(0,y.jsx)(p.Z.Check,{type:"checkbox",name:"hasEquivalentResearchRecord",value:this.state.hasEquivalentResearchRecord,label:"Equivalent research record",onChange:this.handleCheckedChanged})]})]})]})}),(0,y.jsx)("div",{children:(0,y.jsx)("h2",{children:this.state.score})})]})}}]),s}(o.Component);a.default=m}}]);
//# sourceMappingURL=985.d6a4dd79.chunk.js.map