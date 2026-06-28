The core list view for back-office data — transactions, accounts, customers, approvals.

```jsx
<DataTable
  selectable selected={sel} onSelectChange={setSel}
  sort={sort} onSortChange={setSort}
  columns={[
    { key:'code', header:'Mã GD', sortable:true },
    { key:'customer', header:'Khách hàng' },
    { key:'amount', header:'Số tiền', align:'right', sortable:true, render:r => fmtVND(r.amount) },
    { key:'status', header:'Trạng thái', render:r => <Badge tone={r.tone} dot>{r.status}</Badge> },
    { key:'actions', header:'', align:'right', render:r => <IconButton icon="more-horizontal" ariaLabel="Tùy chọn" size="S" /> },
  ]}
  data={rows}
/>
```

- Header is uppercase `Label/12`; cells are `Body/14`. Right-align numeric columns.
- `selectable` adds a select-all header checkbox; selected rows tint teal.
- Use `render` for badges, currency, avatars, row actions. Pair with `Pagination` in a footer.
- `dense` for 40px rows in high-volume queues.
