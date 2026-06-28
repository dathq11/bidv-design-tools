Page navigation under data tables.

```jsx
<Pagination page={page} pageCount={20} onChange={setPage} />
```

- Collapses to first/last + neighbours with `…` past 7 pages.
- Pair with a "x–y trên tổng z" count label and a rows-per-page `Select` in the table footer.
