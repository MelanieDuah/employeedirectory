(this.webpackJsonpemployeeapp=this.webpackJsonpemployeeapp||[]).push([[0],{1:function(e){e.exports=JSON.parse('[{"firstname":"John","lastname":"Dean","department":"Sales"},{"firstname":"Akwasi","lastname":"Nkase","department":"Human resourse"},{"firstname":"Vitaly","lastname":"Do","department":"legal"},{"firstname":"Abrafi","lastname":"Okoto","department":"Marketing"},{"firstname":"Achiaa","lastname":"Kosoya","department":"Human resourse"},{"firstname":"Don","lastname":"Mark","department":"Human resourse"},{"firstname":"jay","lastname":"Pee","department":"Sales"},{"firstname":"Manman","lastname":"Yee","department":"legal"},{"firstname":"Dee","lastname":"Young","department":"Human resourse"},{"firstname":"Fen","lastname":"Man","department":"Human resourse"}]')},8:function(e,t,a){e.exports=a(9)},9:function(e,t,a){"use strict";a.r(t);var n=a(3),r=a(4),l=a(7),s=a(6),m=a(0),o=a.n(m),i=a(5),c=a.n(i),u=a(1);function p(e){return o.a.createElement("tr",null,o.a.createElement("th",{scope:"row"},e.index),o.a.createElement("td",null,e.employee.firstname),o.a.createElement("td",null,e.employee.lastname),o.a.createElement("td",null,e.employee.department))}var f=function(e){Object(l.a)(a,e);var t=Object(s.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).state={originalData:u,employees:u},r}return Object(r.a)(a,[{key:"sortByFirstName",value:function(){var e=this.state.employees.slice();e.sort((function(e,t){return e.firstname.localeCompare(t.firstname)})),this.setState({employees:e})}},{key:"filterByFirstName",value:function(e){var t=this.state.originalData.slice().filter((function(t){return t.firstname.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())}));this.setState({employees:t})}},{key:"filterByLastName",value:function(e){var t=this.state.originalData.slice().filter((function(t){return t.lastname.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())}));this.setState({employees:t})}},{key:"filterBydepartment",value:function(e){var t=this.state.originalData.slice().filter((function(t){return t.department.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())}));this.setState({employees:t})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-12"},o.a.createElement("table",{className:"table"},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",{scope:"col"},"#"),o.a.createElement("th",{scope:"col"},o.a.createElement("button",{onClick:function(){return e.sortByFirstName()}},"First")),o.a.createElement("th",{scope:"col"},"Last"),o.a.createElement("th",{scope:"col"},"Department"))),o.a.createElement("tbody",null,o.a.createElement("tr",null,o.a.createElement("td",null),o.a.createElement("td",null,o.a.createElement("input",{type:"text",id:"fname",name:"fname",onChange:function(t){return e.filterByFirstName(t)}})),o.a.createElement("td",null,o.a.createElement("input",{type:"text",id:"fname",name:"fname",onChange:function(t){return e.filterByLastName(t)}})),o.a.createElement("td",null,o.a.createElement("input",{type:"text",id:"fname",name:"fname",onChange:function(t){return e.filterBydepartment(t)}}))),this.state.employees.map((function(e,t){return o.a.createElement(p,{key:t,index:t,employee:e})}))))))}}]),a}(o.a.Component);c.a.render(o.a.createElement(f,null),document.getElementById("maincontainer"))}},[[8,1,2]]]);
//# sourceMappingURL=main.bfd288cc.chunk.js.map