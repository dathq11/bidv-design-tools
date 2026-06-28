Status indicator for record states — transaction status, approval stage, account flags.

```jsx
<Badge tone="positive" dot>Thành công</Badge>
<Badge tone="notice" dot>Đang xử lý</Badge>
<Badge tone="negative" dot>Từ chối</Badge>
<Badge tone="informative" variant="solid">Mới</Badge>
```

- `tone`: neutral / primary / positive / negative / notice / informative — driven by the semantic color tokens.
- `variant="subtle"` (default) for in-table states; `solid` for high-emphasis counts/flags.
- Use `dot` for status, `icon` for typed labels. Keep label text ≤ 2 words, ALL-CAPS or sentence case per context.
