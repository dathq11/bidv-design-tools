// Login screen — BIDV Back Office
const { Button, TextField, Checkbox } = window.BIDVBackOfficeDesignSystem_478bc4;

function BOLogin({ onLogin }) {
  const [user, setUser] = React.useState('giaodichvien01');
  const [pw, setPw] = React.useState('••••••••');
  return (
    <div style={{ minHeight:'100%', display:'flex', background:'var(--surface-default)' }}>
      {/* Brand panel */}
      <div style={{ position:'relative', flex:'1 1 0', minWidth:0, background:'var(--primary-600)', color:'#fff',
        display:'flex', flexDirection:'column', justifyContent:'space-between', padding:48, overflow:'hidden' }}>
        {/* User-supplied brand image (drop a Higgsfield-generated visual here) */}
        <image-slot id="bidv-login-brand"
          style={{ position:'absolute', inset:0, width:'100%', height:'100%' }}
          shape="rect" fit="cover"
          placeholder="Thả ảnh thương hiệu BIDV (gen bằng Higgsfield)"></image-slot>
        {/* Teal + gold legibility scrim over the image */}
        <div style={{ position:'absolute', inset:0, pointerEvents:'none',
          background:'linear-gradient(180deg, rgba(0,54,52,0.55) 0%, rgba(0,107,104,0.35) 45%, rgba(0,54,52,0.86) 100%)',
          backgroundImage:'radial-gradient(circle at 82% 4%, rgba(255,183,27,0.22), transparent 44%), linear-gradient(180deg, rgba(0,54,52,0.55) 0%, rgba(0,107,104,0.30) 45%, rgba(0,54,52,0.88) 100%)' }}></div>

        <img src="../../assets/bidv-logo-full.svg" alt="BIDV" style={{ position:'relative', height:34, filter:'brightness(0) invert(1)', alignSelf:'flex-start' }} />
        <div style={{ position:'relative' }}>
          <div style={{ fontSize:34, fontWeight:600, lineHeight:'42px', letterSpacing:'-0.25px', maxWidth:420, textShadow:'0 1px 12px rgba(0,0,0,0.25)' }}>
            Hệ thống quản trị<br/>vận hành ngân hàng
          </div>
          <p style={{ marginTop:16, fontSize:15, lineHeight:'24px', color:'rgba(255,255,255,0.88)', maxWidth:380, textShadow:'0 1px 8px rgba(0,0,0,0.25)' }}>
            Cổng nghiệp vụ nội bộ dành cho giao dịch viên và cán bộ phê duyệt. Quản lý giao dịch, tài khoản và phê duyệt tập trung.
          </p>
        </div>
        <div style={{ position:'relative', display:'flex', alignItems:'center', gap:10, fontSize:13, color:'rgba(255,255,255,0.82)' }}>
          <iconify-icon icon="fluent:shield-checkmark-24-regular" width="18"></iconify-icon>
          Kết nối được mã hóa · Phiên bản 4.2.0
        </div>
      </div>
      {/* Form panel */}
      <div style={{ flex:'0 0 480px', maxWidth:'100%', display:'flex', alignItems:'center', justifyContent:'center', padding:40, background:'var(--surface-high)' }}>
        <div style={{ width:'100%', maxWidth:340 }}>
          <h1 style={{ margin:0, fontSize:24, fontWeight:600, color:'var(--text-default)' }}>Đăng nhập</h1>
          <p style={{ margin:'6px 0 28px', fontSize:14, color:'var(--text-low)' }}>Sử dụng tài khoản nội bộ BIDV của bạn</p>
          <div style={{ display:'flex', flexDirection:'column', gap:16 }}>
            <TextField label="Tên đăng nhập" value={user} onChange={e=>setUser(e.target.value)} iconLeft="person" size="L" />
            <TextField label="Mật khẩu" type="password" value={pw} onChange={e=>setPw(e.target.value)} iconLeft="settings" iconRight="eye" size="L" />
            <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between' }}>
              <Checkbox checked={true} onChange={()=>{}} label="Ghi nhớ đăng nhập" />
              <a href="#" style={{ fontSize:13, color:'var(--text-brand)', fontWeight:500 }}>Quên mật khẩu?</a>
            </div>
            <Button size="L" fullWidth onClick={onLogin} iconRight="chevron-right">Đăng nhập</Button>
          </div>
          <p style={{ marginTop:28, fontSize:12, color:'var(--text-lowest)', textAlign:'center' }}>
            © 2026 Ngân hàng TMCP Đầu tư và Phát triển Việt Nam
          </p>
        </div>
      </div>
    </div>
  );
}
window.BOLogin = BOLogin;
