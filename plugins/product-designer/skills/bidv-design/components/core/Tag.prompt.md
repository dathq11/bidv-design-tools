Keyword / filter chip — shows applied filters above a table, or selectable options.

```jsx
<Tag icon="filter" onDismiss={() => removeFilter('status')}>Trạng thái: Thành công</Tag>
<Tag selected>Chi nhánh Hà Nội</Tag>
```

- `onDismiss` adds the × affordance — use for applied filters the user can clear.
- `selected` for toggle/choice contexts. For read-only status, use `Badge` instead.
