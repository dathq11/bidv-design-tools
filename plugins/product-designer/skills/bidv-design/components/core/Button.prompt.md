Action trigger for forms, toolbars, and dialogs — use for any click that performs an operation.

```jsx
<Button color="primary" iconLeft="add">Tạo mới</Button>
<Button variant="outline" color="gray">Hủy</Button>
<Button variant="transparent" color="negative" iconLeft="delete" size="S">Xóa</Button>
```

- `variant`: `filled` (primary CTA) · `outline` (secondary) · `transparent` (tertiary / toolbar).
- `color`: `primary` (teal), `gray` (neutral), `negative` (destructive red).
- `size`: `L` 40px · `M` 32px (default) · `S` 24px — match table/toolbar density with M or S.
- `iconLeft` / `iconRight` take Fluent icon names; `fullWidth` for mobile/dialog footers.
- One filled primary button per view; everything else outline/transparent.
