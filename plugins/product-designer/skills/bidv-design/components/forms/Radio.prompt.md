Mutually-exclusive choice. Prefer `RadioGroup` to manage selection.

```jsx
<RadioGroup value={method} onChange={setMethod}
  options={[{value:'internal',label:'Nội bộ BIDV'},{value:'napas',label:'Liên ngân hàng (Napas)'}]} />
```

- `direction="row"` for 2–3 short options; `column` for longer lists.
- For binary settings use `Switch`; for multi-select use `Checkbox`.
