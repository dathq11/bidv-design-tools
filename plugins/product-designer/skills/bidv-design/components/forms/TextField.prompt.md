Single-line form input with label, supporting text, and validation states.

```jsx
<TextField label="Số tài khoản" placeholder="Nhập số tài khoản" iconLeft="search" />
<TextField label="Số tiền" required error="Vượt quá hạn mức cho phép" />
```

- `error` shows the message + red border + error icon; `helperText` for neutral hints.
- `iconLeft` commonly `search`; `iconRight` for actions (clear, eye for password).
- Sizes L/M/S — match surrounding form density (M default).
