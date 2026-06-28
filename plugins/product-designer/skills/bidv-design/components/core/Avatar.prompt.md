User or entity identity element with initials fallback and optional presence dot.

```jsx
<Avatar name="Nguyễn Văn An" presence="online" />
<Avatar name="Trần Thị Bình" size="sm" />
<Avatar src="/photo.jpg" name="Lê Minh" size="lg" />
```

- Initials derive from a Vietnamese name (last + first word). Tint is deterministic from the name.
- Use `square` for organization/branch entities; circle for people.
