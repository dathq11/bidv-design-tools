Transient confirmation/error feedback after an action.

```jsx
<ToastStack position="bottom-right">
  <Toast tone="positive" title="Đã duyệt lệnh" message="Lệnh GD0012 đã được phê duyệt." onClose={...} />
</ToastStack>
```

- `tone` sets the icon + left accent bar (positive/negative/notice/informative).
- Keep messages to one short sentence. Auto-dismiss success after ~4s; let users dismiss errors.
