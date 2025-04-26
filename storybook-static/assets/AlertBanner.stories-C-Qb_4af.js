import{j as e}from"./jsx-runtime-CGpYA4L6.js";import{r as g}from"./index-CleY8y_P.js";import{j as he,T as fe,g as ve}from"./Typography-DBPhfYo8.js";import{c as s,C as ge,a as xe}from"./circle-check-big-DmrJBYcE.js";import"./_commonjsHelpers-Cpj98o6Y.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ye=s("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const be=s("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const we=s("LifeBuoy",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m4.93 4.93 4.24 4.24",key:"1ymg45"}],["path",{d:"m14.83 9.17 4.24-4.24",key:"1cb5xl"}],["path",{d:"m14.83 14.83 4.24 4.24",key:"q42g0n"}],["path",{d:"m9.17 14.83-4.24 4.24",key:"bqpfvv"}],["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ne=s("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const je=s("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ae=s("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),r=g.forwardRef(({title:m,children:p,variant:h="info",icon:u,dismissible:ne=!1,onDismiss:f,action:x,fullWidth:ie=!1,className:oe,...le},ce)=>{const[de,me]=g.useState(!1),v=g.useMemo(()=>u?null:{info:be,success:ge,warning:je,error:xe}[h],[u,h]),ue={info:"bg-info/10 text-info border-info",success:"bg-success/10 text-success border-success",warning:"bg-warning/10 text-warning border-warning",error:"bg-destructive/10 text-destructive border-destructive"},pe=()=>{me(!0),f==null||f()};return de?null:e.jsx("div",{ref:ce,role:"alert",className:he("rounded-md border-l-4 p-4 animate-fade-in",ue[h],ie?"w-full":"max-w-xl",oe),...le,children:e.jsxs("div",{className:"flex items-start gap-3",children:[(u||v)&&e.jsx("div",{className:"flex-shrink-0 mt-0.5",children:u||v&&e.jsx(v,{className:"h-5 w-5"})}),e.jsxs("div",{className:"flex-1",children:[m&&e.jsx(fe,{variant:"label",className:"font-semibold mb-1",children:m}),e.jsx("div",{className:m?"mt-1":"",children:typeof p=="string"?e.jsx(ve,{children:p}):p}),x&&e.jsx("div",{className:"mt-3",children:x})]}),ne&&e.jsx("button",{type:"button","aria-label":"Dismiss",onClick:pe,className:"flex-shrink-0 ml-3 -mr-1 -mt-1 p-1 rounded-md hover:bg-background/10 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background transition-colors",children:e.jsx(Ae,{className:"h-4 w-4"})})]})})});r.displayName="AlertBanner";try{r.displayName="AlertBanner",r.__docgenInfo={description:"",displayName:"AlertBanner",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},variant:{defaultValue:{value:"info"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"warning"'},{value:'"info"'},{value:'"error"'}]}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}},dismissible:{defaultValue:{value:"false"},description:"",name:"dismissible",required:!1,type:{name:"boolean"}},onDismiss:{defaultValue:null,description:"",name:"onDismiss",required:!1,type:{name:"() => void"}},action:{defaultValue:null,description:"",name:"action",required:!1,type:{name:"ReactNode"}},fullWidth:{defaultValue:{value:"false"},description:"",name:"fullWidth",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const Ce={title:"Design System/Feedback/AlertBanner",component:r,parameters:{layout:"padded",docs:{description:{component:"A versatile alert component for providing contextual feedback messages."}}},tags:["autodocs"],argTypes:{title:{control:"text",description:"Optional title for the alert",table:{type:{summary:"string"}}},children:{control:"text",description:"The main content of the alert",table:{type:{summary:"ReactNode"}}},variant:{control:"select",options:["info","success","warning","error"],description:"The visual style of the alert",table:{type:{summary:"string"},defaultValue:{summary:"info"}}},icon:{control:{type:null},description:"Custom icon override",table:{type:{summary:"ReactNode"}}},dismissible:{control:"boolean",description:"Whether the alert can be dismissed",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},onDismiss:{action:"dismissed",description:"Callback when the alert is dismissed",table:{type:{summary:"function"}}},action:{control:{type:null},description:"Optional action element such as a button",table:{type:{summary:"ReactNode"}}},fullWidth:{control:"boolean",description:"Whether the alert should take up the full width",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},className:{control:"text",description:"Additional CSS classes",table:{type:{summary:"string"}}}}},a={args:{title:"Information",children:"This is an informational alert with important details for the user.",variant:"info"}},t=()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx(r,{variant:"info",title:"Information",children:"This is an informational message for the user."}),e.jsx(r,{variant:"success",title:"Success",children:"Your changes have been saved successfully."}),e.jsx(r,{variant:"warning",title:"Warning",children:"Please review your information before continuing."}),e.jsx(r,{variant:"error",title:"Error",children:"There was an error processing your request. Please try again."})]}),n=()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx(r,{variant:"info",children:"This is a simple alert message without a title."}),e.jsx(r,{variant:"success",children:"Your changes have been saved successfully."})]}),i=()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx(r,{variant:"info",title:"Notification",icon:e.jsx(ye,{className:"h-5 w-5"}),children:"You have new notifications to review."}),e.jsx(r,{variant:"success",title:"Security",icon:e.jsx(Ne,{className:"h-5 w-5"}),children:"Your account is protected with two-factor authentication."}),e.jsx(r,{variant:"warning",title:"Support",icon:e.jsx(we,{className:"h-5 w-5"}),children:"Your support ticket has been created successfully."})]}),o=()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx(r,{variant:"info",title:"Notification",dismissible:!0,onDismiss:()=>console.log("Info alert dismissed"),children:"This alert can be dismissed. Click the X to close it."}),e.jsx(r,{variant:"success",dismissible:!0,onDismiss:()=>console.log("Success alert dismissed"),children:"This success alert can also be dismissed."})]}),l=()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx(r,{variant:"info",title:"Update Available",action:e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{className:"px-3 py-1 text-sm font-medium rounded-md bg-primary text-primary-foreground hover:bg-primary/90",children:"Update Now"}),e.jsx("button",{className:"px-3 py-1 text-sm font-medium rounded-md bg-secondary text-secondary-foreground hover:bg-secondary/90",children:"Later"})]}),children:"A new version of the application is available."}),e.jsx(r,{variant:"warning",title:"Session Expiring",action:e.jsx("button",{className:"px-3 py-1 text-sm font-medium rounded-md bg-warning text-warning-foreground hover:bg-warning/90",children:"Extend Session"}),children:"Your session will expire in 5 minutes. Would you like to stay logged in?"})]}),c=()=>e.jsx(r,{variant:"error",title:"System Maintenance",fullWidth:!0,children:"The system will be undergoing maintenance on June 1st from 2:00 AM to 4:00 AM UTC. Please save your work before this time to prevent data loss."}),d=()=>e.jsxs("div",{className:"space-y-8",children:[e.jsx("div",{className:"border-l-4 border-primary px-4 py-2 bg-primary/5",children:e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"Do's and Don'ts"})}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"text-sm font-medium text-success mb-2",children:"Do ✓"}),e.jsxs("div",{className:"space-y-4",children:[e.jsx(r,{variant:"success",title:"Good Example",children:"Your data has been successfully saved."}),e.jsx("p",{className:"text-sm text-muted-foreground mt-2",children:"Keep alert messages clear, concise, and actionable"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-sm font-medium text-destructive mb-2",children:"Don't ✗"}),e.jsxs("div",{className:"space-y-4",children:[e.jsx(r,{variant:"error",title:"Error",children:"Error code XJ422: Invalid request parameters were submitted causing a system validation error to occur. Please review your submission and try again with valid parameters according to the API documentation."}),e.jsx("p",{className:"text-sm text-muted-foreground mt-2",children:"Avoid technical jargon and overly long messages"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-sm font-medium text-success mb-2",children:"Do ✓"}),e.jsxs("div",{className:"space-y-4",children:[e.jsx(r,{variant:"warning",title:"Session Expiring",action:e.jsx("button",{className:"px-3 py-1 text-sm font-medium rounded-md bg-warning text-warning-foreground hover:bg-warning/90",children:"Extend Session"}),children:"Your session will expire in 5 minutes."}),e.jsx("p",{className:"text-sm text-muted-foreground mt-2",children:"Include action buttons for alerts that require user response"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-sm font-medium text-destructive mb-2",children:"Don't ✗"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx(r,{variant:"info",children:"This is an info message."}),e.jsx(r,{variant:"info",children:"This is another info message."}),e.jsx(r,{variant:"info",children:"Yet another info message."})]}),e.jsx("p",{className:"text-sm text-muted-foreground mt-2",children:"Avoid showing too many alerts at once, which can overwhelm users"})]})]})]})]});var y,b,w,N,j;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    title: 'Information',
    children: 'This is an informational alert with important details for the user.',
    variant: 'info'
  }
}`,...(w=(b=a.parameters)==null?void 0:b.docs)==null?void 0:w.source},description:{story:"Default alert example with the info variant.",...(j=(N=a.parameters)==null?void 0:N.docs)==null?void 0:j.description}}};var A,B,k,S,T;t.parameters={...t.parameters,docs:{...(A=t.parameters)==null?void 0:A.docs,source:{originalSource:`() => <div className="space-y-4">\r
    <AlertBanner variant="info" title="Information">\r
      This is an informational message for the user.\r
    </AlertBanner>\r
    \r
    <AlertBanner variant="success" title="Success">\r
      Your changes have been saved successfully.\r
    </AlertBanner>\r
    \r
    <AlertBanner variant="warning" title="Warning">\r
      Please review your information before continuing.\r
    </AlertBanner>\r
    \r
    <AlertBanner variant="error" title="Error">\r
      There was an error processing your request. Please try again.\r
    </AlertBanner>\r
  </div>`,...(k=(B=t.parameters)==null?void 0:B.docs)==null?void 0:k.source},description:{story:"Examples of all alert variants.",...(T=(S=t.parameters)==null?void 0:S.docs)==null?void 0:T.description}}};var D,C,E,q,I;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:`() => <div className="space-y-4">\r
    <AlertBanner variant="info">\r
      This is a simple alert message without a title.\r
    </AlertBanner>\r
    \r
    <AlertBanner variant="success">\r
      Your changes have been saved successfully.\r
    </AlertBanner>\r
  </div>`,...(E=(C=n.parameters)==null?void 0:C.docs)==null?void 0:E.source},description:{story:"Alert with no title, showing a simpler presentation.",...(I=(q=n.parameters)==null?void 0:q.docs)==null?void 0:I.description}}};var Y,W,M,V,P;i.parameters={...i.parameters,docs:{...(Y=i.parameters)==null?void 0:Y.docs,source:{originalSource:`() => <div className="space-y-4">\r
    <AlertBanner variant="info" title="Notification" icon={<Bell className="h-5 w-5" />}>\r
      You have new notifications to review.\r
    </AlertBanner>\r
    \r
    <AlertBanner variant="success" title="Security" icon={<ShieldCheck className="h-5 w-5" />}>\r
      Your account is protected with two-factor authentication.\r
    </AlertBanner>\r
    \r
    <AlertBanner variant="warning" title="Support" icon={<LifeBuoy className="h-5 w-5" />}>\r
      Your support ticket has been created successfully.\r
    </AlertBanner>\r
  </div>`,...(M=(W=i.parameters)==null?void 0:W.docs)==null?void 0:M.source},description:{story:"Alert with custom icons instead of the default ones.",...(P=(V=i.parameters)==null?void 0:V.docs)==null?void 0:P.description}}};var _,U,R,L,X;o.parameters={...o.parameters,docs:{...(_=o.parameters)==null?void 0:_.docs,source:{originalSource:`() => <div className="space-y-4">\r
    <AlertBanner variant="info" title="Notification" dismissible onDismiss={() => console.log('Info alert dismissed')}>\r
      This alert can be dismissed. Click the X to close it.\r
    </AlertBanner>\r
    \r
    <AlertBanner variant="success" dismissible onDismiss={() => console.log('Success alert dismissed')}>\r
      This success alert can also be dismissed.\r
    </AlertBanner>\r
  </div>`,...(R=(U=o.parameters)==null?void 0:U.docs)==null?void 0:R.source},description:{story:"Dismissible alerts that can be closed by the user.",...(X=(L=o.parameters)==null?void 0:L.docs)==null?void 0:X.description}}};var G,J,z,F,O;l.parameters={...l.parameters,docs:{...(G=l.parameters)==null?void 0:G.docs,source:{originalSource:`() => <div className="space-y-4">\r
    <AlertBanner variant="info" title="Update Available" action={<div className="flex gap-2">\r
          <button className="px-3 py-1 text-sm font-medium rounded-md bg-primary text-primary-foreground hover:bg-primary/90">\r
            Update Now\r
          </button>\r
          <button className="px-3 py-1 text-sm font-medium rounded-md bg-secondary text-secondary-foreground hover:bg-secondary/90">\r
            Later\r
          </button>\r
        </div>}>\r
      A new version of the application is available.\r
    </AlertBanner>\r
    \r
    <AlertBanner variant="warning" title="Session Expiring" action={<button className="px-3 py-1 text-sm font-medium rounded-md bg-warning text-warning-foreground hover:bg-warning/90">\r
          Extend Session\r
        </button>}>\r
      Your session will expire in 5 minutes. Would you like to stay logged in?\r
    </AlertBanner>\r
  </div>`,...(z=(J=l.parameters)==null?void 0:J.docs)==null?void 0:z.source},description:{story:"Alert with custom action buttons.",...(O=(F=l.parameters)==null?void 0:F.docs)==null?void 0:O.description}}};var K,H,Q,Z,$;c.parameters={...c.parameters,docs:{...(K=c.parameters)==null?void 0:K.docs,source:{originalSource:`() => <AlertBanner variant="error" title="System Maintenance" fullWidth>\r
    The system will be undergoing maintenance on June 1st from 2:00 AM to 4:00 AM UTC. \r
    Please save your work before this time to prevent data loss.\r
  </AlertBanner>`,...(Q=(H=c.parameters)==null?void 0:H.docs)==null?void 0:Q.source},description:{story:"Alert with full width, useful for page-level notifications.",...($=(Z=c.parameters)==null?void 0:Z.docs)==null?void 0:$.description}}};var ee,re,se,ae,te;d.parameters={...d.parameters,docs:{...(ee=d.parameters)==null?void 0:ee.docs,source:{originalSource:`() => <div className="space-y-8">\r
    <div className="border-l-4 border-primary px-4 py-2 bg-primary/5">\r
      <h3 className="text-lg font-semibold mb-2">Do's and Don'ts</h3>\r
    </div>\r
    \r
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">\r
      <div>\r
        <h4 className="text-sm font-medium text-success mb-2">Do ✓</h4>\r
        <div className="space-y-4">\r
          <AlertBanner variant="success" title="Good Example">\r
            Your data has been successfully saved.\r
          </AlertBanner>\r
          <p className="text-sm text-muted-foreground mt-2">\r
            Keep alert messages clear, concise, and actionable\r
          </p>\r
        </div>\r
      </div>\r
      \r
      <div>\r
        <h4 className="text-sm font-medium text-destructive mb-2">Don't ✗</h4>\r
        <div className="space-y-4">\r
          <AlertBanner variant="error" title="Error">\r
            Error code XJ422: Invalid request parameters were submitted causing a system validation error\r
            to occur. Please review your submission and try again with valid parameters according to the API documentation.\r
          </AlertBanner>\r
          <p className="text-sm text-muted-foreground mt-2">\r
            Avoid technical jargon and overly long messages\r
          </p>\r
        </div>\r
      </div>\r
      \r
      <div>\r
        <h4 className="text-sm font-medium text-success mb-2">Do ✓</h4>\r
        <div className="space-y-4">\r
          <AlertBanner variant="warning" title="Session Expiring" action={<button className="px-3 py-1 text-sm font-medium rounded-md bg-warning text-warning-foreground hover:bg-warning/90">\r
                Extend Session\r
              </button>}>\r
            Your session will expire in 5 minutes.\r
          </AlertBanner>\r
          <p className="text-sm text-muted-foreground mt-2">\r
            Include action buttons for alerts that require user response\r
          </p>\r
        </div>\r
      </div>\r
      \r
      <div>\r
        <h4 className="text-sm font-medium text-destructive mb-2">Don't ✗</h4>\r
        <div className="space-y-4">\r
          <div className="space-y-2">\r
            <AlertBanner variant="info">This is an info message.</AlertBanner>\r
            <AlertBanner variant="info">This is another info message.</AlertBanner>\r
            <AlertBanner variant="info">Yet another info message.</AlertBanner>\r
          </div>\r
          <p className="text-sm text-muted-foreground mt-2">\r
            Avoid showing too many alerts at once, which can overwhelm users\r
          </p>\r
        </div>\r
      </div>\r
    </div>\r
  </div>`,...(se=(re=d.parameters)==null?void 0:re.docs)==null?void 0:se.source},description:{story:"Usage guidelines showing the best practices for alerts.",...(te=(ae=d.parameters)==null?void 0:ae.docs)==null?void 0:te.description}}};const Ee=["Default","Variants","WithoutTitle","CustomIcons","Dismissible","WithActions","FullWidth","UsageGuidelines"];export{i as CustomIcons,a as Default,o as Dismissible,c as FullWidth,d as UsageGuidelines,t as Variants,l as WithActions,n as WithoutTitle,Ee as __namedExportsOrder,Ce as default};
