(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[462],{846:function(e,n,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/auth/sign-out",function(){return i(4083)}])},4775:function(e,n,i){"use strict";i.d(n,{Z:function(){return m}});var s=i(1527),r=i(9544),t=i.n(r),u=i(9468),l=i(2473),c=i(8915),o=i(9178),a=i(391),d=i(2169),h=i(3025),x=i(728),g=i(6304),j=i(3194);let p=()=>{let e=(0,j.useRouter)(),{data:n}=(0,g.useSession)(),i=()=>e.push("/auth/sign-in");return(0,s.jsx)(u.k,{position:"fixed",top:"4",right:"4",rounded:"lg",children:n?(0,s.jsxs)(c.v,{children:[(0,s.jsx)(o.j,{role:"group",children:(0,s.jsxs)(u.k,{align:"center",gap:"4",children:[(0,s.jsx)(a.x,{as:"b",children:n.user.name}),(0,s.jsx)(d.q,{_groupFocus:{boxShadow:"outline"},name:n.user.name,src:n.user.image,loading:"lazy"})]})}),(0,s.jsx)(h.q,{children:(0,s.jsx)(x.s,{onClick:()=>(0,g.signOut)(),children:"Sign out"})})]}):(0,s.jsx)(l.z,{colorScheme:"yellow",onClick:i,children:"Sign in"})})},f=e=>{let{children:n,withSessionBar:i=!1}=e;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t(),{children:[(0,s.jsx)("title",{children:"Holyday"}),(0,s.jsx)("meta",{name:"description",content:""})]}),i&&(0,s.jsx)(p,{}),n]})};var m=f},4083:function(e,n,i){"use strict";i.r(n);var s=i(1527),r=i(9468),t=i(2169),u=i(391),l=i(2473),c=i(4775),o=i(6304),a=i(3194),d=i(5587);let h=()=>{let e=(0,a.useRouter)(),{data:n,status:i}=(0,o.useSession)(),h=async()=>{await (0,o.signOut)({redirect:!1})};if("loading"===i)return(0,s.jsx)(d.Z,{color:"#ECC94B",speedMultiplier:1.25});if(!n){e.replace("/");return}return(0,s.jsx)(c.Z,{children:(0,s.jsxs)(r.k,{direction:"column",align:"center",gap:"4",children:[(0,s.jsx)(t.q,{name:n.user.name,src:n.user.image,loading:"lazy",size:"xl"}),(0,s.jsx)(u.x,{as:"b",children:n.user.name}),(0,s.jsx)(l.z,{onClick:h,children:"Sign out"})]})})};n.default=h}},function(e){e.O(0,[352,774,888,179],function(){return e(e.s=846)}),_N_E=e.O()}]);