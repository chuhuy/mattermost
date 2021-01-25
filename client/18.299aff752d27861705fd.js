(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{1163:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));a(94);var s=a(125),n=a.n(s),r=a(5),i=a.n(r),c=a(1129),m=a(1127);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}class u extends i.a.PureComponent{render(){return i.a.createElement("div",{id:"back_button",className:"signup-header"},i.a.createElement(m.Link,{onClick:this.props.onClick,to:this.props.url},i.a.createElement(c.a,{id:"generic_icons.back",defaultMessage:"Back Icon"},e=>i.a.createElement("span",{id:"back_button_icon",className:"fa fa-1x fa-angle-left",title:e.toString()})),i.a.createElement(c.a,{id:"web.header.back",defaultMessage:"Back"})))}}l(u,"propTypes",{url:n.a.string,onClick:n.a.func}),l(u,"defaultProps",{url:"/"})},1166:function(e,t,a){"use strict";t.a=a.p+"files/ab8aa80cba445eb0fb75e6611c292567.png"},1244:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var s=a(125),n=a.n(s),r=a(5),i=a.n(r),c=a(1129);function m(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}class l extends i.a.PureComponent{render(){const{customDescriptionText:e,siteName:t}=this.props;let a=null;return a=e||i.a.createElement(c.a,{id:"web.root.signup_info",defaultMessage:"All team communication in one place, searchable and accessible anywhere"}),i.a.createElement(i.a.Fragment,null,i.a.createElement("h1",{id:"site_name"},t),i.a.createElement("h4",{id:"site_description",className:"color--light"},a))}}m(l,"propTypes",{customDescriptionText:n.a.string,siteName:n.a.string}),m(l,"defaultProps",{siteName:"Mattermost"})},2308:function(e,t,a){"use strict";a.r(t);var s=a(264),n=a(13),r=a(10),i=a(19),c=(a(182),a(126),a(125)),m=a.n(c),l=a(5),u=a.n(l),o=a(1128),d=a(1225),p=a(1163),h=(a(82),a(1129)),E=a(146),g=a(0),f=a(185),_=a(1166),N=a(1212);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}class T extends u.a.PureComponent{constructor(e){var t;super(e),b(this,"submitNext",e=>{e.preventDefault(),Object(E.e)("display_name","click_next");var t=this.state.teamDisplayName.trim();if(!t)return void this.setState({nameError:u.a.createElement(h.a,{id:"create_team.display_name.required",defaultMessage:"This field is required"})});if(t.length<g.Z.MIN_TEAMNAME_LENGTH||t.length>g.Z.MAX_TEAMNAME_LENGTH)return void this.setState({nameError:u.a.createElement(h.a,{id:"create_team.display_name.charLength",defaultMessage:"Name must be {min} or more characters up to a maximum of {max}. You can add a longer team description later.",values:{min:g.Z.MIN_TEAMNAME_LENGTH,max:g.Z.MAX_TEAMNAME_LENGTH}})});const a=this.props.state;a.wizard="team_url",a.team.display_name=t,a.team.name=Object(f.a)(t),this.props.updateParent(a)}),b(this,"handleFocus",e=>{e.preventDefault(),e.currentTarget.select()}),b(this,"handleDisplayNameChange",e=>{this.setState({teamDisplayName:e.target.value})}),this.state={teamDisplayName:(null===(t=this.props.state.team)||void 0===t?void 0:t.display_name)||""}}componentDidMount(){Object(E.e)("signup","signup_team_01_name")}render(){var e=null,t="form-group";return this.state.nameError&&(e=u.a.createElement("label",{className:"control-label"},this.state.nameError),t+=" has-error"),u.a.createElement("div",null,u.a.createElement("form",null,u.a.createElement("img",{alt:"signup logo",className:"signup-team-logo",src:_.a}),u.a.createElement("h2",null,u.a.createElement(h.a,{id:"create_team.display_name.teamName",defaultMessage:"Team Name"})),u.a.createElement("div",{className:t},u.a.createElement("div",{className:"row"},u.a.createElement("div",{className:"col-sm-9"},u.a.createElement("input",{id:"teamNameInput",type:"text",className:"form-control",placeholder:"",maxLength:"128",value:this.state.teamDisplayName,autoFocus:!0,onFocus:this.handleFocus,onChange:this.handleDisplayNameChange,spellCheck:"false"}))),e),u.a.createElement("div",null,u.a.createElement(h.a,{id:"create_team.display_name.nameHelp",defaultMessage:"Name your team in any language. Your team name shows in menus and headings."})),u.a.createElement("button",{id:"teamNameNextButton",type:"submit",className:"btn btn-primary mt-8",onClick:this.submitNext},u.a.createElement(h.a,{id:"create_team.display_name.next",defaultMessage:"Next"}),u.a.createElement(N.a,null))))}}b(T,"propTypes",{state:m.a.object,updateParent:m.a.func});var v=a(1244),y=a(7),M=a(184),x=(a(56),a(103),a(1515)),k=a(1262),w=a(8),A=a(21),L=a(1134),C=a(1140);function R(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}const O=A.a.getState;class S extends u.a.PureComponent{constructor(e){super(e),R(this,"getTeamName",async()=>{const e=O(),t=Object(w.getCurrentUser)(e);let a="".concat(t.roles.includes("system_admin")?"o":"u","-uet");const s=await this.props.actions.searchTeams("",{});if(null!=s&&s.data){const e=s.data.map(e=>e.name).filter(e=>e.includes("o-uet"));a="".concat(a,"-").concat(e.length+1)}this.setState({teamName:a})}),R(this,"submitBack",e=>{e.preventDefault(),Object(E.e)("signup","click_back");const t=this.props.state;t.wizard="display_name",this.props.updateParent(t)}),R(this,"submitNext",async e=>{e.preventDefault(),Object(E.e)("signup","click_finish");const t=this.state.teamURL.trim(),a=f.a(t),{actions:{checkIfTeamExists:s,createTeam:n}}=this.props;if(!t)return void this.setState({nameError:u.a.createElement(h.a,{id:"create_team.team_url.required",defaultMessage:"This field is required"})});if(a.length<g.Z.MIN_TEAMNAME_LENGTH||a.length>g.Z.MAX_TEAMNAME_LENGTH)return void this.setState({nameError:u.a.createElement(h.a,{id:"create_team.team_url.charLength",defaultMessage:"Name must be {min} or more characters up to a maximum of {max}",values:{min:g.Z.MIN_TEAMNAME_LENGTH,max:g.Z.MAX_TEAMNAME_LENGTH}})});if(a!==t||!/^[a-z]+([a-z\-0-9]+|(__)?)[a-z0-9]+$/g.test(t))return void this.setState({nameError:u.a.createElement(h.a,{id:"create_team.team_url.regex",defaultMessage:"Use only lower case letters, numbers and dashes. Must start with a letter and can't end in a dash."})});for(let e=0;e<g.Z.RESERVED_TEAM_NAMES.length;e++)if(0===a.indexOf(g.Z.RESERVED_TEAM_NAMES[e]))return void this.setState({nameError:u.a.createElement(L.b,{id:"create_team.team_url.taken",defaultMessage:"This URL [starts with a reserved word](!https://docs.mattermost.com/help/getting-started/creating-teams.html#team-url) or is unavailable. Please try another."})});this.setState({isLoading:!0});const r=JSON.parse(JSON.stringify(this.props.state));r.team.type="O",r.team.name=this.state.teamName;if((await s(t)).exists)return this.setState({nameError:u.a.createElement(h.a,{id:"create_team.team_url.unavailable",defaultMessage:"This URL is taken or unavailable. Please try another."})}),void this.setState({isLoading:!1});const i=await n(r.team),c=i.data,m=i.error;c?(this.props.history.push("/"+c.name+"/channels/"+g.Z.DEFAULT_CHANNEL),Object(E.e)("signup","signup_team_03_complete")):m&&(this.setState({nameError:m.message}),this.setState({isLoading:!1}))}),R(this,"handleFocus",e=>{e.preventDefault(),e.currentTarget.select()}),R(this,"handleTeamURLInputChange",e=>{this.setState({teamURL:e.target.value})}),this.state={nameError:"",isLoading:!1,teamURL:e.state.team.name,teamName:""}}componentDidMount(){Object(E.e)("signup","signup_team_02_url"),this.getTeamName()}render(){let e=null,t="form-group";this.state.nameError&&(e=u.a.createElement("label",{className:"control-label"},this.state.nameError),t+=" has-error");const a="".concat(f.e(),"/"),s=u.a.createElement(x.a,{id:"urlTooltip"},a);let n=u.a.createElement(h.a,{id:"create_team.team_url.finish",defaultMessage:"Finish"});return this.state.isLoading&&(n=u.a.createElement(h.a,{id:"create_team.team_url.creatingTeam",defaultMessage:"Creating team..."})),u.a.createElement("div",null,u.a.createElement("form",null,u.a.createElement("img",{alt:"signup team logo",className:"signup-team-logo",src:_.a}),u.a.createElement("h2",null,u.a.createElement(h.a,{id:"create_team.team_url.teamUrl",defaultMessage:"Team URL"})),u.a.createElement("div",{className:t},u.a.createElement("div",{className:"row"},u.a.createElement("div",{className:"col-sm-11"},u.a.createElement("div",{className:"input-group input-group--limit"},""!==this.state.teamName&&u.a.createElement(C.a,{delayShow:g.Z.OVERLAY_TIME_DELAY,placement:"top",overlay:s},u.a.createElement("span",{className:"input-group-addon"},a+this.state.teamName))))),e),u.a.createElement("div",{className:"mt-8"},u.a.createElement(k.a,{id:"teamURLFinishButton",type:"submit",bsStyle:"primary",disabled:this.state.isLoading,onClick:e=>this.submitNext(e)},n)),u.a.createElement("div",{className:"mt-8"},u.a.createElement("a",{href:"#",onClick:this.submitBack},u.a.createElement(h.a,{id:"create_team.team_url.back",defaultMessage:"Back to previous step"})))))}}R(S,"propTypes",{state:m.a.shape({team:m.a.any.isRequired,wizard:m.a.string.isRequired}).isRequired,updateParent:m.a.func.isRequired,actions:m.a.shape({checkIfTeamExists:m.a.func.isRequired,createTeam:m.a.func.isRequired,searchTeams:m.a.func.isRequired}).isRequired,history:m.a.shape({}).isRequired});var D=Object(s.connect)(null,(function(e){return{actions:Object(y.bindActionCreators)({checkIfTeamExists:M.checkIfTeamExists,createTeam:M.createTeam,searchTeams:M.getTeams},e)}}))(S);function P(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}class j extends u.a.PureComponent{constructor(e){super(e),P(this,"updateParent",e=>{this.setState(e),this.props.history.push("/create_team/"+e.wizard)}),this.state={team:{},wizard:"display_name"}}render(){const{currentChannel:e,currentTeam:t,customDescriptionText:a,match:s,siteName:n}=this.props;let r="/select_team";return t&&(r="/".concat(t.name),e&&(r+="/channels/".concat(e.name))),u.a.createElement("div",null,u.a.createElement(d.a,null),u.a.createElement(p.a,{url:r}),u.a.createElement("div",{className:"col-sm-12"},u.a.createElement("div",{className:"signup-team__container"},u.a.createElement(v.a,{customDescriptionText:a,siteName:n}),u.a.createElement("div",{className:"signup__content"},u.a.createElement(o.g,null,u.a.createElement(o.d,{path:"".concat(this.props.match.url,"/display_name"),render:e=>u.a.createElement(T,Object.assign({state:this.state,updateParent:this.updateParent},e))}),u.a.createElement(o.d,{path:"".concat(this.props.match.url,"/team_url"),render:e=>u.a.createElement(D,Object.assign({state:this.state,updateParent:this.updateParent},e))}),u.a.createElement(o.c,{to:"".concat(s.url,"/display_name")}))))))}}P(j,"propTypes",{currentTeam:m.a.any.isRequired,currentChannel:m.a.any.isRequired,customDescriptionText:m.a.string.isRequired,siteName:m.a.string.isRequired,match:m.a.shape({url:m.a.string.isRequired}).isRequired});t.default=Object(s.connect)((function(e){const t=Object(n.getConfig)(e);return{currentChannel:Object(r.getCurrentChannel)(e),currentTeam:Object(i.getCurrentTeam)(e),customDescriptionText:t.CustomDescriptionText,siteName:t.SiteName}}))(j)}}]);
//# sourceMappingURL=18.299aff752d27861705fd.js.map