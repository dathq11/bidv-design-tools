Boolean selection — multi-select lists, table row selection, consent.

```jsx
<Checkbox checked={agree} onChange={setAgree} label="Đồng ý điều khoản" />
<Checkbox indeterminate onChange={selectAll} />  /* table header "select all" */
```

- `indeterminate` for partial selection (e.g. some rows selected).
- For mutually-exclusive choices use `Radio`; for on/off settings use `Switch`.
