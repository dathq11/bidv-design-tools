Section switcher within a page — entity detail views, list filters by state.

```jsx
<Tabs value={tab} onChange={setTab} tabs={[
  { id:'all', label:'Tất cả', count: 248 },
  { id:'pending', label:'Chờ duyệt', icon:'history', count: 12 },
  { id:'done', label:'Đã duyệt' },
]} />
```

- Active tab is teal with a 2px underline.
- `count` badges show record totals per state — common on transaction queues.
