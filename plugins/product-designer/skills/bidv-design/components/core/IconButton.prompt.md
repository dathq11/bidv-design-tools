Compact icon-only control for toolbars, table row actions, and top-nav utilities.

```jsx
<IconButton icon="edit" ariaLabel="Sửa" />
<IconButton icon="alert" color="gray" badge={3} ariaLabel="Thông báo" />
<IconButton icon="delete" color="negative" size="S" ariaLabel="Xóa" />
```

- Always pass `ariaLabel`.
- `badge`: `true` → dot, number/string → counter (top-nav bell, messages).
- Use `size="S"` inside dense table rows.
