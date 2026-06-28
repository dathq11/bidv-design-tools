Single-choice dropdown with DS-styled popover and checkmark on the selected row.

```jsx
<Select label="Chi nhánh" value={branch} onChange={setBranch}
  options={['Hội sở chính', 'Hà Nội', 'TP. Hồ Chí Minh']} />
```

- `options` accepts strings or `{ value, label }`.
- Closes on outside click; selected row is teal-tinted with a checkmark.
- For multi-select filters, use `Tag` chips alongside.
