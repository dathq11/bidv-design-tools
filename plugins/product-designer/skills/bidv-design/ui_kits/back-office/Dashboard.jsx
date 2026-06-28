// Dashboard screen — BIDV Back Office
const { Card, Badge, Avatar, Button, IconButton, DataTable } = window.BIDVBackOfficeDesignSystem_478bc4;

function StatCard({ s }) {
  return (
    <Card elevated padding={16} style={{ flex:'1 1 0', minWidth:0 }}>
      <div style={{ display:'flex', alignItems:'flex-start', justifyContent:'space-between' }}>
        <div style={{ width:36, height:36, borderRadius:'var(--radius-8)', background:'var(--primary-50)', color:'var(--primary-600)', display:'inline-flex', alignItems:'center', justifyContent:'center' }}>
          <iconify-icon icon={window.BIDVBackOfficeDesignSystem_478bc4.ICONS[s.icon]||s.icon} width="20"></iconify-icon>
        </div>
        <span style={{ display:'inline-flex', alignItems:'center', gap:2, fontSize:12, fontWeight:500,
          color: s.up ? 'var(--green-600)' : 'var(--orange-600)' }}>
          <iconify-icon icon={s.up?'fluent:arrow-trending-24-regular':'fluent:warning-24-regular'} width="14"></iconify-icon>
          {s.delta}
        </span>
      </div>
      <div style={{ marginTop:14, fontSize:26, fontWeight:600, color:'var(--text-default)', letterSpacing:'-0.25px' }}>{s.value}</div>
      <div style={{ marginTop:2, fontSize:13, color:'var(--text-low)' }}>{s.label}</div>
    </Card>
  );
}

function VolumeChart() {
  const bars = [
    {d:'T2', v:62}, {d:'T3', v:78}, {d:'T4', v:54}, {d:'T5', v:88},
    {d:'T6', v:72}, {d:'T7', v:40}, {d:'CN', v:28},
  ];
  return (
    <Card padding={20} style={{ flex:'1 1 0' }}>
      <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:20 }}>
        <div>
          <div style={{ fontSize:16, fontWeight:500, color:'var(--text-default)' }}>Lưu lượng giao dịch</div>
          <div style={{ fontSize:12, color:'var(--text-low)', marginTop:2 }}>7 ngày gần nhất</div>
        </div>
        <Button variant="outline" color="gray" size="S" iconRight="chevron-down">Tuần này</Button>
      </div>
      <div style={{ display:'flex', alignItems:'flex-end', gap:14, height:150 }}>
        {bars.map((b,i)=>(
          <div key={i} style={{ flex:1, height:'100%', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'flex-end', gap:8 }}>
            <div style={{ width:'100%', maxWidth:34, height:`${b.v}%`, minHeight:4, borderRadius:'6px 6px 0 0',
              background: i===3 ? 'var(--primary-600)' : 'var(--primary-100)' }}></div>
            <span style={{ fontSize:11, color:'var(--text-low)', flex:'none' }}>{b.d}</span>
          </div>
        ))}
      </div>
    </Card>
  );
}

function ApprovalQueue({ onOpen }) {
  const pend = window.BO_DATA.transactions.filter(t=>t.status==='Chờ duyệt' || t.status==='Đang xử lý').slice(0,4);
  return (
    <Card padding={0} style={{ width:332, flex:'none' }}>
      <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', padding:'16px 16px 12px' }}>
        <div style={{ fontSize:16, fontWeight:500, color:'var(--text-default)' }}>Chờ phê duyệt</div>
        <Badge tone="notice">{pend.length} mục</Badge>
      </div>
      <div>
        {pend.map((t,i)=>(
          <div key={t.id} onClick={onOpen} style={{ display:'flex', alignItems:'center', gap:12, padding:'12px 16px',
            borderTop:'1px solid var(--border-subtlest)', cursor:'pointer' }}
            onMouseEnter={e=>e.currentTarget.style.background='var(--gray-50)'}
            onMouseLeave={e=>e.currentTarget.style.background='transparent'}>
            <Avatar name={t.customer} size="sm" />
            <div style={{ flex:1, minWidth:0 }}>
              <div style={{ fontSize:13, fontWeight:500, color:'var(--text-default)', overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap' }}>{t.customer}</div>
              <div style={{ fontSize:12, color:'var(--text-low)' }}>{window.BO_DATA.fmtVND(t.amount)}</div>
            </div>
            <iconify-icon icon="fluent:chevron-right-24-regular" width="16" style={{color:'var(--text-lowest)'}}></iconify-icon>
          </div>
        ))}
      </div>
      <div style={{ padding:12, borderTop:'1px solid var(--border-subtle)' }}>
        <Button variant="transparent" fullWidth onClick={onOpen}>Xem tất cả</Button>
      </div>
    </Card>
  );
}

function BODashboard({ onOpenTxn }) {
  const { stats, transactions, fmtVND } = window.BO_DATA;
  const recent = transactions.slice(0,5);
  return (
    <div style={{ display:'flex', flexDirection:'column', gap:20 }}>
      <div style={{ display:'flex', gap:16 }}>
        {stats.map((s,i)=><StatCard key={i} s={s} />)}
      </div>
      <div style={{ display:'flex', gap:16, alignItems:'stretch' }}>
        <VolumeChart />
        <ApprovalQueue onOpen={onOpenTxn} />
      </div>
      <Card padding={0}>
        <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', padding:'16px 16px 12px' }}>
          <div style={{ fontSize:16, fontWeight:500, color:'var(--text-default)' }}>Giao dịch gần đây</div>
          <Button variant="transparent" size="S" iconRight="chevron-right" onClick={onOpenTxn}>Tất cả giao dịch</Button>
        </div>
        <DataTable
          rowKey="id"
          onRowClick={onOpenTxn}
          style={{ border:'none', borderRadius:0 }}
          columns={[
            { key:'id', header:'Mã GD', render:r=><span style={{fontFamily:'var(--font-mono)',fontSize:12}}>{r.id.slice(-6)}</span> },
            { key:'customer', header:'Khách hàng', render:r=>(
              <span style={{display:'inline-flex',alignItems:'center',gap:8}}><Avatar name={r.customer} size="xs" />{r.customer}</span>) },
            { key:'type', header:'Loại', render:r=><span style={{color:'var(--text-low)'}}>{r.type}</span> },
            { key:'amount', header:'Số tiền', align:'right', render:r=><b style={{fontWeight:500}}>{fmtVND(r.amount)}</b> },
            { key:'status', header:'Trạng thái', render:r=><Badge tone={r.tone} dot>{r.status}</Badge> },
            { key:'date', header:'Thời gian', render:r=><span style={{color:'var(--text-low)',fontSize:13}}>{r.date.split(' ')[1]}</span> },
          ]}
          data={recent}
        />
      </Card>
    </div>
  );
}
window.BODashboard = BODashboard;
