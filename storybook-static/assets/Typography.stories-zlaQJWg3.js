import{j as e}from"./jsx-runtime-CGpYA4L6.js";import{T as p,L as s,D as Q,a as X,H as Y,b as Z,c as $,d as J,e as ee,f as re,B as ae,g as r,h as a,C as se,i as K}from"./Typography-DBPhfYo8.js";import"./index-CleY8y_P.js";import"./_commonjsHelpers-Cpj98o6Y.js";const de={title:"Design System/Typography",component:p,parameters:{layout:"padded",docs:{description:{component:"A comprehensive typography system for consistent text styling across the application."}}},tags:["autodocs"],argTypes:{variant:{control:"select",options:["display-1","display-2","h1","h2","h3","h4","h5","h6","body-lg","body","body-sm","caption","label","helper"],description:"The typography style variant",table:{type:{summary:"string"},defaultValue:{summary:"body"}}},as:{control:"text",description:"Override the default HTML element",table:{type:{summary:"ElementType"}}},color:{control:"select",options:["default","muted","primary","success","warning","destructive"],description:"The text color variant",table:{type:{summary:"string"},defaultValue:{summary:"default"}}},align:{control:"radio",options:["left","center","right"],description:"Text alignment",table:{type:{summary:"string"},defaultValue:{summary:"left"}}},truncate:{control:"boolean",description:"Whether to truncate text with ellipsis",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},children:{control:"text",description:"The text content",table:{type:{summary:"ReactNode"}}},className:{control:"text",description:"Additional CSS classes",table:{type:{summary:"string"}}}}},t={args:{children:"The quick brown fox jumps over the lazy dog",variant:"body",color:"default",align:"left"}},i=()=>e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx(s,{color:"muted",children:"Display Variants"}),e.jsxs("div",{className:"space-y-4 mt-2",children:[e.jsx(Q,{children:"Display 1"}),e.jsx(X,{children:"Display 2"})]})]}),e.jsxs("div",{children:[e.jsx(s,{color:"muted",children:"Heading Variants"}),e.jsxs("div",{className:"space-y-4 mt-2",children:[e.jsx(Y,{children:"Heading 1"}),e.jsx(Z,{children:"Heading 2"}),e.jsx($,{children:"Heading 3"}),e.jsx(J,{children:"Heading 4"}),e.jsx(ee,{children:"Heading 5"}),e.jsx(re,{children:"Heading 6"})]})]}),e.jsxs("div",{children:[e.jsx(s,{color:"muted",children:"Body Text Variants"}),e.jsxs("div",{className:"space-y-4 mt-2",children:[e.jsx(ae,{children:"Body Large: Slightly larger body text for emphasizing content without using a heading."}),e.jsx(r,{children:"Body: Standard body text used for paragraphs and general content throughout the interface."}),e.jsx(a,{children:"Body Small: Smaller body text, useful for less important information or dense layouts."})]})]}),e.jsxs("div",{children:[e.jsx(s,{color:"muted",children:"Utility Text Variants"}),e.jsxs("div",{className:"space-y-4 mt-2",children:[e.jsx(s,{children:"Label: Used for form labels and section headers"}),e.jsx(se,{children:"Caption: Used for image captions, table headers, and supplementary text"}),e.jsx(K,{children:"Helper Text: Used for form field hints, validation messages, and other assistive text"})]})]})]}),n=()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx(r,{color:"default",children:"Default: Used for most text content"}),e.jsx(r,{color:"muted",children:"Muted: Used for less important or secondary text"}),e.jsx(r,{color:"primary",children:"Primary: Used for emphasizing content with the primary brand color"}),e.jsx(r,{color:"success",children:"Success: Used for success messages and positive feedback"}),e.jsx(r,{color:"warning",children:"Warning: Used for warning messages and cautionary feedback"}),e.jsx(r,{color:"destructive",children:"Destructive: Used for error messages and destructive actions"})]}),o=()=>e.jsxs("div",{className:"space-y-6 border-2 border-dashed border-gray-200 p-4",children:[e.jsx(r,{align:"left",children:"Left-aligned text (default)"}),e.jsx(r,{align:"center",children:"Center-aligned text"}),e.jsx(r,{align:"right",children:"Right-aligned text"})]}),d=()=>e.jsxs("div",{className:"w-48 border-2 border-dashed border-gray-200 p-4",children:[e.jsx(r,{truncate:!0,children:"This is a very long text that will be truncated with an ellipsis when it exceeds the container width."}),e.jsx("div",{className:"mt-4",children:e.jsx(r,{children:"This is a very long text that will wrap to the next line when it exceeds the container width."})})]}),l=()=>e.jsxs("div",{className:"space-y-6",children:[e.jsx("div",{className:"border-l-4 border-primary px-4 py-2 bg-primary/5",children:e.jsx(J,{children:"Do's and Don'ts"})}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx(s,{color:"success",children:"Do ✓"}),e.jsxs("ul",{className:"list-disc pl-5 space-y-2",children:[e.jsx("li",{children:e.jsx(a,{children:"Use headings in hierarchical order (H1 → H6)"})}),e.jsx("li",{children:e.jsx(a,{children:"Choose the appropriate variant based on content importance"})}),e.jsx("li",{children:e.jsx(a,{children:"Use semantic variants (Label for form labels, HelperText for assistive text)"})}),e.jsx("li",{children:e.jsx(a,{children:"Maintain consistent typography across similar UI elements"})})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(s,{color:"destructive",children:"Don't ✗"}),e.jsxs("ul",{className:"list-disc pl-5 space-y-2",children:[e.jsx("li",{children:e.jsx(a,{children:"Skip heading levels (e.g., jumping from H1 to H3)"})}),e.jsx("li",{children:e.jsx(a,{children:"Use color variants arbitrarily without considering meaning"})}),e.jsx("li",{children:e.jsx(a,{children:"Create your own text styles with custom CSS"})}),e.jsx("li",{children:e.jsx(a,{children:"Use Display variants for body text or small UI elements"})})]})]})]})]}),c=()=>e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"border-2 border-dashed border-gray-200 p-4",children:[e.jsx(p,{variant:"h2",children:"Default H2 Element"}),e.jsx(p,{variant:"h2",as:"h3",children:"H2 Styling with H3 Element"}),e.jsx(p,{variant:"body",as:"div",children:"Body Styling with Div Element"})]}),e.jsxs(K,{color:"muted",children:["Use the ",e.jsx("code",{children:"as"})," prop to override the default HTML element when needed for semantic HTML structure."]})]});var m,y,h,g,u;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: 'The quick brown fox jumps over the lazy dog',
    variant: 'body',
    color: 'default',
    align: 'left'
  }
}`,...(h=(y=t.parameters)==null?void 0:y.docs)==null?void 0:h.source},description:{story:"Default typography example demonstrating the base component usage.",...(u=(g=t.parameters)==null?void 0:g.docs)==null?void 0:u.description}}};var x,v,f,b,j;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`() => <div className="space-y-6">\r
    <div>\r
      <Label color="muted">Display Variants</Label>\r
      <div className="space-y-4 mt-2">\r
        <Display1>Display 1</Display1>\r
        <Display2>Display 2</Display2>\r
      </div>\r
    </div>\r
    \r
    <div>\r
      <Label color="muted">Heading Variants</Label>\r
      <div className="space-y-4 mt-2">\r
        <Heading1>Heading 1</Heading1>\r
        <Heading2>Heading 2</Heading2>\r
        <Heading3>Heading 3</Heading3>\r
        <Heading4>Heading 4</Heading4>\r
        <Heading5>Heading 5</Heading5>\r
        <Heading6>Heading 6</Heading6>\r
      </div>\r
    </div>\r
    \r
    <div>\r
      <Label color="muted">Body Text Variants</Label>\r
      <div className="space-y-4 mt-2">\r
        <BodyLarge>Body Large: Slightly larger body text for emphasizing content without using a heading.</BodyLarge>\r
        <Body>Body: Standard body text used for paragraphs and general content throughout the interface.</Body>\r
        <BodySmall>Body Small: Smaller body text, useful for less important information or dense layouts.</BodySmall>\r
      </div>\r
    </div>\r
    \r
    <div>\r
      <Label color="muted">Utility Text Variants</Label>\r
      <div className="space-y-4 mt-2">\r
        <Label>Label: Used for form labels and section headers</Label>\r
        <Caption>Caption: Used for image captions, table headers, and supplementary text</Caption>\r
        <HelperText>Helper Text: Used for form field hints, validation messages, and other assistive text</HelperText>\r
      </div>\r
    </div>\r
  </div>`,...(f=(v=i.parameters)==null?void 0:v.docs)==null?void 0:f.source},description:{story:"Displays all typography variants in their default styling.",...(j=(b=i.parameters)==null?void 0:b.docs)==null?void 0:j.description}}};var H,B,S,w,T;n.parameters={...n.parameters,docs:{...(H=n.parameters)==null?void 0:H.docs,source:{originalSource:`() => <div className="space-y-4">\r
    <Body color="default">Default: Used for most text content</Body>\r
    <Body color="muted">Muted: Used for less important or secondary text</Body>\r
    <Body color="primary">Primary: Used for emphasizing content with the primary brand color</Body>\r
    <Body color="success">Success: Used for success messages and positive feedback</Body>\r
    <Body color="warning">Warning: Used for warning messages and cautionary feedback</Body>\r
    <Body color="destructive">Destructive: Used for error messages and destructive actions</Body>\r
  </div>`,...(S=(B=n.parameters)==null?void 0:B.docs)==null?void 0:S.source},description:{story:"Examples of different color variants applied to typography.",...(T=(w=n.parameters)==null?void 0:w.docs)==null?void 0:T.description}}};var N,D,U,L,V;o.parameters={...o.parameters,docs:{...(N=o.parameters)==null?void 0:N.docs,source:{originalSource:`() => <div className="space-y-6 border-2 border-dashed border-gray-200 p-4">\r
    <Body align="left">Left-aligned text (default)</Body>\r
    <Body align="center">Center-aligned text</Body>\r
    <Body align="right">Right-aligned text</Body>\r
  </div>`,...(U=(D=o.parameters)==null?void 0:D.docs)==null?void 0:U.source},description:{story:"Examples of different text alignment options.",...(V=(L=o.parameters)==null?void 0:L.docs)==null?void 0:V.description}}};var C,E,M,k,z;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`() => <div className="w-48 border-2 border-dashed border-gray-200 p-4">\r
    <Body truncate>\r
      This is a very long text that will be truncated with an ellipsis when it exceeds the container width.\r
    </Body>\r
    <div className="mt-4">\r
      <Body>\r
        This is a very long text that will wrap to the next line when it exceeds the container width.\r
      </Body>\r
    </div>\r
  </div>`,...(M=(E=d.parameters)==null?void 0:E.docs)==null?void 0:M.source},description:{story:"Example of text truncation for handling overflow.",...(z=(k=d.parameters)==null?void 0:k.docs)==null?void 0:z.description}}};var A,I,R,G,W;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`() => <div className="space-y-6">\r
    <div className="border-l-4 border-primary px-4 py-2 bg-primary/5">\r
      <Heading4>Do's and Don'ts</Heading4>\r
    </div>\r
    \r
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">\r
      <div className="space-y-2">\r
        <Label color="success">Do ✓</Label>\r
        <ul className="list-disc pl-5 space-y-2">\r
          <li><BodySmall>Use headings in hierarchical order (H1 → H6)</BodySmall></li>\r
          <li><BodySmall>Choose the appropriate variant based on content importance</BodySmall></li>\r
          <li><BodySmall>Use semantic variants (Label for form labels, HelperText for assistive text)</BodySmall></li>\r
          <li><BodySmall>Maintain consistent typography across similar UI elements</BodySmall></li>\r
        </ul>\r
      </div>\r
      \r
      <div className="space-y-2">\r
        <Label color="destructive">Don't ✗</Label>\r
        <ul className="list-disc pl-5 space-y-2">\r
          <li><BodySmall>Skip heading levels (e.g., jumping from H1 to H3)</BodySmall></li>\r
          <li><BodySmall>Use color variants arbitrarily without considering meaning</BodySmall></li>\r
          <li><BodySmall>Create your own text styles with custom CSS</BodySmall></li>\r
          <li><BodySmall>Use Display variants for body text or small UI elements</BodySmall></li>\r
        </ul>\r
      </div>\r
    </div>\r
  </div>`,...(R=(I=l.parameters)==null?void 0:I.docs)==null?void 0:R.source},description:{story:"Guidelines for choosing the appropriate typography variant.",...(W=(G=l.parameters)==null?void 0:G.docs)==null?void 0:W.description}}};var q,O,P,_,F;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`() => <div className="space-y-4">\r
    <div className="border-2 border-dashed border-gray-200 p-4">\r
      <Typography variant="h2">Default H2 Element</Typography>\r
      <Typography variant="h2" as="h3">H2 Styling with H3 Element</Typography>\r
      <Typography variant="body" as="div">Body Styling with Div Element</Typography>\r
    </div>\r
    <HelperText color="muted">\r
      Use the <code>as</code> prop to override the default HTML element when needed for semantic HTML structure.\r
    </HelperText>\r
  </div>`,...(P=(O=c.parameters)==null?void 0:O.docs)==null?void 0:P.source},description:{story:"Examples showing different semantic HTML elements.",...(F=(_=c.parameters)==null?void 0:_.docs)==null?void 0:F.description}}};const le=["Default","AllVariants","ColorVariants","AlignmentVariants","Truncation","UsageGuidelines","SemanticElements"];export{o as AlignmentVariants,i as AllVariants,n as ColorVariants,t as Default,c as SemanticElements,d as Truncation,l as UsageGuidelines,le as __namedExportsOrder,de as default};
