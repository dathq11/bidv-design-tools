Top-of-page identity block — where every back-office screen starts.

```jsx
<PageHeader
  breadcrumb={[{label:'Trang chủ',href:'#'},{label:'Giao dịch',href:'#'},{label:'Chuyển khoản'}]}
  title="Quản lý chuyển khoản"
  subtitle="Theo dõi và phê duyệt lệnh chuyển tiền"
  actions={<><Button variant="outline" color="gray" iconLeft="download">Xuất Excel</Button><Button iconLeft="add">Tạo lệnh</Button></>}
/>
```

- Title is `Headline/24 SemiBold`.
- Put the single primary action last (rightmost); secondary actions are outline/transparent.
- `Breadcrumb` is also exported standalone.
