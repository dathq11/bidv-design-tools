Surface container that groups related content — dashboard tiles, form sections, side panels.

```jsx
<Card elevated>
  <CardHeader title="Số dư tài khoản" subtitle="Cập nhật 14:32" actions={<IconButton icon="more-horizontal" ariaLabel="Tùy chọn" />} />
  …
</Card>
```

- Default: flat with a 1px subtle border (back-office tables sit flat). Use `elevated` for floating/dashboard cards.
- `interactive` adds hover lift for clickable cards.
- Radius is 12px (`--radius-card`); padding defaults to 16.
