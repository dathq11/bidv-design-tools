// App shell + routing — BIDV Back Office UI kit
const { Sidebar, TopNav, Toast, ToastStack } = window.BIDVBackOfficeDesignSystem_478bc4;

const NAV = [
  { id:'dashboard', label:'Tổng quan', icon:'home' },
  { id:'transactions', label:'Giao dịch', icon:'arrow-swap', badge:27, children:[
    { id:'transactions', label:'Quản lý giao dịch' },
    { id:'approvals', label:'Phê duyệt' },
  ]},
  { id:'accounts', label:'Tài khoản', icon:'wallet', children:[
    { id:'accounts', label:'Danh sách tài khoản' },
    { id:'open', label:'Mở tài khoản' },
  ]},
  { id:'customers', label:'Khách hàng', icon:'people' },
  { id:'cards', label:'Thẻ', icon:'building-bank' },
  { id:'reports', label:'Báo cáo', icon:'data-bar' },
  { id:'settings', label:'Cấu hình', icon:'settings' },
];

const TITLES = {
  dashboard:'Tổng quan', transactions:'Quản lý giao dịch', approvals:'Phê duyệt',
  accounts:'Tài khoản', customers:'Khách hàng', cards:'Thẻ', reports:'Báo cáo', settings:'Cấu hình',
};

function BOApp() {
  const [authed, setAuthed] = React.useState(false);
  const [view, setView] = React.useState('dashboard');
  const [collapsed, setCollapsed] = React.useState(false);
  const [openTxn, setOpenTxn] = React.useState(null);
  const [toasts, setToasts] = React.useState([]);

  function pushToast(t) {
    const id = Date.now();
    setToasts(ts => [...ts, { ...t, id }]);
    setTimeout(() => setToasts(ts => ts.filter(x => x.id !== id)), 4200);
  }
  function approve() {
    const t = openTxn; setOpenTxn(null);
    pushToast({ tone:'positive', title:'Đã phê duyệt', message:`Lệnh ${t.id.slice(-6)} đã được phê duyệt thành công.` });
  }
  function reject() {
    const t = openTxn; setOpenTxn(null);
    pushToast({ tone:'negative', title:'Đã từ chối', message:`Lệnh ${t.id.slice(-6)} đã bị từ chối.` });
  }

  if (!authed) return <window.BOLogin onLogin={() => setAuthed(true)} />;

  const goTxn = () => setView('transactions');

  return (
    <div style={{ height:'100%', display:'flex', overflow:'hidden', background:'var(--surface-default)' }}>
      <Sidebar
        items={NAV}
        active={view}
        onSelect={id => { setView(id); }}
        collapsed={collapsed}
        onToggleCollapse={() => setCollapsed(c => !c)}
        logoSrc="../../assets/bidv-logo-onteal.svg"
        markSrc="../../assets/bidv-mark.svg"
      />
      <div style={{ flex:1, minWidth:0, display:'flex', flexDirection:'column' }}>
        <TopNav
          onMenu={() => setCollapsed(c => !c)}
          notifications={5}
          user={{ name:'Nguyễn Văn An', role:'Giao dịch viên · CN Hà Nội' }}
        />
        <main style={{ flex:1, overflowY:'auto', padding:24 }}>
          <div style={{ maxWidth:1280, margin:'0 auto' }}>
            {view === 'dashboard' && <window.BODashboard onOpenTxn={goTxn} />}
            {(view === 'transactions' || view === 'approvals') &&
              <window.BOTransactions
                onOpenTxn={setOpenTxn} openTxn={openTxn} onCloseTxn={() => setOpenTxn(null)}
                onApprove={approve} onReject={reject} />}
            {!['dashboard','transactions','approvals'].includes(view) &&
              <Placeholder title={TITLES[view]} />}
          </div>
        </main>
      </div>
      <ToastStack position="bottom-right">
        {toasts.map(t => <Toast key={t.id} tone={t.tone} title={t.title} message={t.message} onClose={() => setToasts(ts => ts.filter(x => x.id !== t.id))} />)}
      </ToastStack>
    </div>
  );
}

function Placeholder({ title }) {
  return (
    <div style={{ height:'60vh', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:12, color:'var(--text-lowest)' }}>
      <div style={{ width:56, height:56, borderRadius:'var(--radius-12)', background:'var(--surface-high)', border:'1px solid var(--border-subtle)', display:'flex', alignItems:'center', justifyContent:'center' }}>
        <iconify-icon icon="fluent:beaker-24-regular" width="26" style={{color:'var(--text-lowest)'}}></iconify-icon>
      </div>
      <div style={{ fontSize:16, fontWeight:500, color:'var(--text-low)' }}>{title}</div>
      <div style={{ fontSize:13 }}>Màn hình mẫu — chưa có nội dung trong UI kit này.</div>
    </div>
  );
}

window.BOApp = BOApp;
