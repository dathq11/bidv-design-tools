Modal for confirmations, focused forms, and detail views.

```jsx
<Dialog open={open} onClose={close} tone="negative" icon="warning"
  title="Xác nhận hủy lệnh"
  footer={<><Button variant="outline" color="gray" onClick={close}>Quay lại</Button>
           <Button color="negative" onClick={confirm}>Hủy lệnh</Button></>}>
  Bạn có chắc muốn hủy lệnh chuyển khoản này? Hành động không thể hoàn tác.
</Dialog>
```

- Scrim is `--surface-overlay` (30% black) with a faint blur; click-outside closes.
- `tone` + `icon` for destructive/notice confirmations; primary action goes rightmost in the footer.
