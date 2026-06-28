Primary application navigation for back-office modules.

```jsx
<Sidebar
  logoSrc="assets/bidv-logo-full.svg" markSrc="assets/bidv-mark.svg"
  active="transfer" onSelect={setView} collapsed={collapsed} onToggleCollapse={...}
  items={[
    { id:'dashboard', label:'Tổng quan', icon:'home' },
    { id:'accounts', label:'Tài khoản', icon:'wallet', children:[
      { id:'list', label:'Danh sách' }, { id:'open', label:'Mở tài khoản' } ]},
    { id:'transfer', label:'Chuyển khoản', icon:'arrow-swap', badge:12 },
  ]}
/>
```

- Active item: teal-tinted fill + 3px left accent bar.
- Collapses to a 64px icon rail showing the BIDV flower mark.
- Two levels deep max; `badge` for pending counts.
