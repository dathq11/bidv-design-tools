// Shared mock data for the BIDV Back Office UI kit
window.BO_DATA = (function () {
  const fmtVND = n => n.toLocaleString('vi-VN') + ' ₫';
  const transactions = [
    { id:'GD202606240012', customer:'Nguyễn Văn An',  acct:'2110 **** 8842', branch:'Hà Nội',     type:'Chuyển khoản', channel:'Internal', amount:15000000, status:'Thành công', tone:'positive',    date:'24/06/2026 14:32', maker:'Trần Thị Bình' },
    { id:'GD202606240013', customer:'Công ty TNHH Phú Thái', acct:'1900 **** 0271', branch:'Hội sở', type:'Chuyển khoản', channel:'Napas',  amount:248500000, status:'Chờ duyệt', tone:'informative', date:'24/06/2026 14:21', maker:'Lê Minh Cường' },
    { id:'GD202606240014', customer:'Lê Minh Cường',  acct:'2110 **** 5530', branch:'TP. HCM',    type:'Nạp tiền',    channel:'Internal', amount:4875000,  status:'Đang xử lý', tone:'notice',     date:'24/06/2026 13:58', maker:'Nguyễn Văn An' },
    { id:'GD202606240015', customer:'Phạm Thu Hà',    acct:'3140 **** 1199', branch:'Đà Nẵng',    type:'Rút tiền',    channel:'ATM',      amount:760000,   status:'Từ chối',   tone:'negative',   date:'24/06/2026 13:40', maker:'Phạm Thu Hà' },
    { id:'GD202606240016', customer:'Vũ Đức Thành',   acct:'2110 **** 7723', branch:'Hà Nội',     type:'Chuyển khoản', channel:'Internal', amount:32000000, status:'Thành công', tone:'positive',    date:'24/06/2026 12:11', maker:'Trần Thị Bình' },
    { id:'GD202606240017', customer:'Hoàng Lan Anh',  acct:'1900 **** 4408', branch:'Hội sở',     type:'Chuyển khoản', channel:'Napas',  amount:5400000,  status:'Chờ duyệt', tone:'informative', date:'24/06/2026 11:47', maker:'Lê Minh Cường' },
    { id:'GD202606240018', customer:'Đặng Quốc Bảo',  acct:'3140 **** 9921', branch:'Đà Nẵng',    type:'Nạp tiền',    channel:'Internal', amount:1200000,  status:'Thành công', tone:'positive',    date:'24/06/2026 11:20', maker:'Phạm Thu Hà' },
    { id:'GD202606240019', customer:'Ngô Thị Mai',    acct:'2110 **** 3310', branch:'TP. HCM',    type:'Chuyển khoản', channel:'Internal', amount:89000000, status:'Đang xử lý', tone:'notice',     date:'24/06/2026 10:55', maker:'Nguyễn Văn An' },
    { id:'GD202606240020', customer:'Bùi Văn Khôi',   acct:'1900 **** 6655', branch:'Hà Nội',     type:'Rút tiền',    channel:'ATM',      amount:2000000,  status:'Thành công', tone:'positive',    date:'24/06/2026 10:30', maker:'Trần Thị Bình' },
  ];
  const stats = [
    { label:'Tổng giao dịch hôm nay', value:'1.248', delta:'+12,4%', up:true, icon:'arrow-swap' },
    { label:'Tổng giá trị', value:'48,2 tỷ ₫', delta:'+8,1%', up:true, icon:'money' },
    { label:'Chờ phê duyệt', value:'27', delta:'5 quá hạn', up:false, icon:'history' },
    { label:'Tỷ lệ thành công', value:'98,6%', delta:'+0,3%', up:true, icon:'checkmark-circle' },
  ];
  return { fmtVND, transactions, stats };
})();
