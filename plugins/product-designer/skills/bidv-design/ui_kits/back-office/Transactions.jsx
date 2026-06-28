// Transactions list + detail — BIDV Back Office
const { PageHeader, Tabs, DataTable, Badge, Avatar, Button, IconButton, Tag, Select,
        TextField, Pagination, Dialog, Tooltip } = window.BIDVBackOfficeDesignSystem_478bc4;

function DetailRow({ label, children, mono }) {
  return (
    <div style={{ display:'flex', justifyContent:'space-between', gap:16, padding:'10px 0', borderBottom:'1px solid var(--border-subtlest)' }}>
      <span style={{ fontSize:13, color:'var(--text-low)' }}>{label}</span>
      <span style={{ fontSize:13, fontWeight:500, color:'var(--text-default)', textAlign:'right', fontFamily: mono?'var(--font-mono)':'inherit' }}>{children}</span>
    </div>
  );
}

function TxnDialog({ txn, open, onClose, onApprove, onReject }) {
  if (!txn) return null;
  return (
    <Dialog open={open} onClose={onClose} width={460} title={`Chi tiết giao dịch`} >
      <div style={{ display:'flex', alignItems:'center', gap:12, padding:'4px 0 12px' }}>
        <Avatar name={txn.customer} size="lg" />
        <div style={{ flex:1 }}>
          <div style={{ fontSize:16, fontWeight:600, color:'var(--text-default)' }}>{txn.customer}</div>
          <div style={{ fontSize:13, color:'var(--text-low)', fontFamily:'var(--font-mono)' }}>{txn.acct}</div>
        </div>
        <Badge tone={txn.tone} dot>{txn.status}</Badge>
      </div>
      <div style={{ background:'var(--primary-50)', borderRadius:'var(--radius-8)', padding:'14px 16px', margin:'4px 0 8px' }}>
        <div style={{ fontSize:12, color:'var(--text-low)' }}>Số tiền giao dịch</div>
        <div style={{ fontSize:24, fontWeight:600, color:'var(--primary-700)', letterSpacing:'-0.25px' }}>{window.BO_DATA.fmtVND(txn.amount)}</div>
      </div>
      <DetailRow label="Mã giao dịch" mono>{txn.id}</DetailRow>
      <DetailRow label="Loại giao dịch">{txn.type}</DetailRow>
      <DetailRow label="Kênh">{txn.channel}</DetailRow>
      <DetailRow label="Chi nhánh">{txn.branch}</DetailRow>
      <DetailRow label="Người tạo lệnh">{txn.maker}</DetailRow>
      <DetailRow label="Thời gian">{txn.date}</DetailRow>
      <div style={{ display:'flex', justifyContent:'flex-end', gap:8, paddingTop:16 }}>
        {(txn.status==='Chờ duyệt' || txn.status==='Đang xử lý') ? (
          <>
            <Button variant="outline" color="negative" iconLeft="dismiss" onClick={onReject}>Từ chối</Button>
            <Button color="primary" iconLeft="checkmark" onClick={onApprove}>Phê duyệt</Button>
          </>
        ) : (
          <Button variant="outline" color="gray" iconLeft="print" onClick={onClose}>In biên lai</Button>
        )}
      </div>
    </Dialog>
  );
}

function BOTransactions({ onOpenTxn, openTxn, onCloseTxn, onApprove, onReject }) {
  const all = window.BO_DATA.transactions;
  const [tab, setTab] = React.useState('all');
  const [sel, setSel] = React.useState([]);
  const [sort, setSort] = React.useState({ key:'date', dir:'desc' });
  const [page, setPage] = React.useState(1);
  const { fmtVND } = window.BO_DATA;

  const tabCounts = {
    all: all.length,
    pending: all.filter(t=>t.status==='Chờ duyệt').length,
    processing: all.filter(t=>t.status==='Đang xử lý').length,
    done: all.filter(t=>t.status==='Thành công').length,
  };
  const filtered = all.filter(t =>
    tab==='all' ? true :
    tab==='pending' ? t.status==='Chờ duyệt' :
    tab==='processing' ? t.status==='Đang xử lý' :
    t.status==='Thành công');

  return (
    <div style={{ display:'flex', flexDirection:'column', gap:16 }}>
      <PageHeader
        breadcrumb={[{label:'Trang chủ',href:'#'},{label:'Giao dịch',href:'#'},{label:'Quản lý giao dịch'}]}
        title="Quản lý giao dịch"
        subtitle="Theo dõi, tra soát và phê duyệt lệnh giao dịch"
        actions={<>
          <Button variant="outline" color="gray" iconLeft="download">Xuất Excel</Button>
          <Button iconLeft="add">Tạo lệnh mới</Button>
        </>}
      />

      <Tabs value={tab} onChange={t=>{setTab(t);setSel([]);setPage(1);}} tabs={[
        { id:'all', label:'Tất cả', count: tabCounts.all },
        { id:'pending', label:'Chờ duyệt', icon:'history', count: tabCounts.pending },
        { id:'processing', label:'Đang xử lý', count: tabCounts.processing },
        { id:'done', label:'Đã hoàn tất', count: tabCounts.done },
      ]} />

      {/* Filter bar */}
      <div style={{ display:'flex', alignItems:'center', gap:10, flexWrap:'wrap' }}>
        <div style={{ width:280 }}>
          <TextField placeholder="Tìm theo mã GD, khách hàng, số tài khoản..." iconLeft="search" />
        </div>
        <div style={{ width:160 }}><Select placeholder="Chi nhánh" options={['Tất cả chi nhánh','Hội sở','Hà Nội','TP. HCM','Đà Nẵng']} /></div>
        <div style={{ width:150 }}><Select placeholder="Kênh" options={['Tất cả','Internal','Napas','ATM']} /></div>
        <Button variant="outline" color="gray" iconLeft="calendar">01/06 – 24/06</Button>
        <div style={{ flex:1 }}></div>
        <Tag icon="filter" onDismiss={()=>{}}>Loại: Chuyển khoản</Tag>
      </div>

      {/* Bulk action bar */}
      {sel.length > 0 && (
        <div style={{ display:'flex', alignItems:'center', gap:12, padding:'10px 16px', background:'var(--primary-50)', border:'1px solid var(--primary-200)', borderRadius:'var(--radius-8)' }}>
          <span style={{ fontSize:14, fontWeight:500, color:'var(--primary-700)' }}>Đã chọn {sel.length} giao dịch</span>
          <div style={{ flex:1 }}></div>
          <Button variant="outline" color="negative" size="S" iconLeft="dismiss">Từ chối</Button>
          <Button color="primary" size="S" iconLeft="checkmark">Phê duyệt hàng loạt</Button>
        </div>
      )}

      <DataTable
        rowKey="id"
        selectable selected={sel} onSelectChange={setSel}
        sort={sort} onSortChange={setSort}
        onRowClick={onOpenTxn}
        columns={[
          { key:'id', header:'Mã GD', sortable:true, render:r=><span style={{fontFamily:'var(--font-mono)',fontSize:12}}>{r.id}</span> },
          { key:'customer', header:'Khách hàng', render:r=>(
            <span style={{display:'inline-flex',alignItems:'center',gap:8}}><Avatar name={r.customer} size="xs" />{r.customer}</span>) },
          { key:'type', header:'Loại', render:r=><span style={{color:'var(--text-low)'}}>{r.type}</span> },
          { key:'channel', header:'Kênh', render:r=><Badge tone="neutral" size="S">{r.channel}</Badge> },
          { key:'amount', header:'Số tiền', align:'right', sortable:true, render:r=><b style={{fontWeight:500}}>{fmtVND(r.amount)}</b> },
          { key:'status', header:'Trạng thái', render:r=><Badge tone={r.tone} dot>{r.status}</Badge> },
          { key:'date', header:'Thời gian', sortable:true, render:r=><span style={{color:'var(--text-low)',fontSize:13}}>{r.date}</span> },
          { key:'actions', header:'', align:'right', render:r=>(
            <span style={{display:'inline-flex',gap:2}} onClick={e=>e.stopPropagation()}>
              <Tooltip label="Xem chi tiết"><IconButton icon="eye" size="S" ariaLabel="Xem" onClick={()=>onOpenTxn(r)} /></Tooltip>
              <IconButton icon="more-horizontal" size="S" ariaLabel="Khác" />
            </span>) },
        ]}
        data={filtered}
      />

      <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between' }}>
        <span style={{ fontSize:13, color:'var(--text-low)' }}>Hiển thị 1–{filtered.length} trên tổng {filtered.length} giao dịch</span>
        <Pagination page={page} pageCount={8} onChange={setPage} />
      </div>

      <TxnDialog txn={openTxn} open={!!openTxn} onClose={onCloseTxn} onApprove={onApprove} onReject={onReject} />
    </div>
  );
}
window.BOTransactions = BOTransactions;
