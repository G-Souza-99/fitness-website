import{r as x,C as j,u as m,j as t,F as n,e as C,i as p}from"./main-B7JSXPyK.js";const v=()=>{const a=x.useContext(j),o=m();if(!a)throw new Error("CartContext must be used within a CartProvider");const{cartItems:e,removeFromCart:i,updateQuantity:c}=a,l=()=>{o(-1)},d=()=>{alert("Proceeding to checkout!")},u=()=>e.reduce((s,r)=>{const h=r.price;return s+h*r.quantity},0).toFixed(2);return t.jsxs("div",{className:"cart-page",children:[t.jsxs("header",{className:"cart-header",children:[t.jsxs("button",{onClick:l,className:"back-button",children:[t.jsx(n,{icon:C})," Back"]}),t.jsx("h1",{children:"Your Cart"})]}),e.length===0?t.jsx("p",{children:"Your cart is empty."}):t.jsx("div",{className:"cart-items",children:e.map(s=>t.jsxs("div",{className:"cart-item",children:[t.jsx("img",{src:s.image,alt:s.title}),t.jsxs("div",{className:"cart-item-info",children:[t.jsx("h2",{children:s.title}),t.jsxs("p",{className:"price",children:["€",s.price]}),t.jsxs("div",{className:"quantity-control",children:[t.jsx("button",{onClick:()=>c(s.id,s.quantity-1),children:"-"}),t.jsx("span",{children:s.quantity}),t.jsx("button",{onClick:()=>c(s.id,s.quantity+1),children:"+"})]}),t.jsxs("button",{onClick:()=>i(s.id),className:"remove-button",children:[t.jsx(n,{icon:p})," Remove"]})]})]},s.id))}),e.length>0&&t.jsxs("div",{className:"cart-summary",children:[t.jsxs("h2",{children:["Total: €",u()]}),t.jsx("button",{onClick:d,className:"checkout-button",children:"Checkout"})]})]})};export{v as default};
