Application-level top bar that sits above the page content, beside the sidebar.

```jsx
<TopNav onMenu={toggleSidebar} notifications={5}
  user={{ name:'Nguyễn Văn An', role:'Giao dịch viên' }} />
```

- Centered global search is the focal element (teal focus, Fluent search icon).
- Bell carries a red count badge; user cluster shows avatar + name + role.
- Pair with `Sidebar`; `onMenu` toggles collapse.
