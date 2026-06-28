# Product Designer — BIDV Back Office

Plugin Claude Code đóng gói pipeline thiết kế sản phẩm cho **BIDV Back Office**:

```
project-strategy → research → ux-design → ui-design-spec (4A) → ui-generation (4B)
```

Mỗi thành viên cài plugin này vào Claude Code **của họ**, đăng nhập bằng tài khoản
Claude **của họ** → token tính vào họ, không liên quan đến người phát hành.

---

## Plugin gồm gì

| Thành phần | Mô tả |
|---|---|
| Agent `product-designer` | Điều phối toàn bộ pipeline 4 bước, hỏi input trước khi chạy |
| Skill `project-strategy` | Bước 1 — sinh `project-scope.md` |
| Skill `research` | Bước 2 — sinh `research-findings.md` |
| Skill `ux-design` | Bước 3 — sinh `ux-design-spec.md` |
| Skill `bidv-design` | Bước 4B — BIDV Back Office Design System (token, component, asset) |

---

## Cài đặt (cho thành viên)

```
/plugin marketplace add <git-repo-url-của-team>
/plugin install product-designer@bidv-design-tools
```

Sau đó gõ trong Claude Code:

```
@product-designer  (hoặc mô tả brief dự án và yêu cầu tạo đầy đủ tài liệu)
```

---

## ⚠️ Phụ thuộc ngoài plugin — PHẢI cài thêm

Hai thứ này **không** đóng gói được vào plugin, mỗi máy phải tự thiết lập, nếu thiếu
pipeline sẽ lỗi ở **Bước 4A**:

### 1. Plugin `frontend-design` (bước 4A viết `ui-design-spec.md`)
```
/plugin marketplace add anthropics/claude-plugins-official
/plugin install frontend-design@claude-plugins-official
```

### 2. Mobbin MCP (bước 4A bắt buộc tra pattern trước khi viết spec)
Thêm MCP server `mobbin` vào cấu hình Claude Code (cần tài khoản/khóa Mobbin riêng).
Nếu không có Mobbin, bước 4A sẽ không tra được reference pattern theo đúng quy trình.

---

## (Khuyến nghị) Thêm luật brand vào CLAUDE.md cá nhân

Để mọi lần gen UI luôn bám design system, mỗi thành viên nên thêm vào
`~/.claude/CLAUDE.md` của họ:

```markdown
Khi gen BẤT KỲ UI/mockup/prototype/code frontend nào → BẮT BUỘC:
1. Invoke skill `bidv-design` trước khi gen (đọc SKILL.md + readme.md).
2. Chỉ dùng giá trị từ design system: link styles.css, dùng CSS custom properties
   cho màu/spacing/radius/shadow/type. KHÔNG hardcode hex/px/font-weight.
3. Dùng component có sẵn trong components/ (và _ds_bundle.js).
4. Brand: primary teal --primary-600 #006b68 cho action/active; gold --secondary-300
   #ffb71b chỉ làm accent tiết chế. Tiếng Việt, sentence case, không emoji.
   Icon: Microsoft Fluent UI System Icons (iconify).
```

---

## Yêu cầu môi trường
- Claude Code (CLI / desktop / IDE) đã đăng nhập tài khoản Claude.
- Agent chạy trên **model Claude** (không dùng được model OpenAI/Codex cho agent này).

## Cập nhật
Người phát hành sửa file trong repo này rồi `git push`. Thành viên chạy
`/plugin marketplace update bidv-design-tools` để lấy bản mới.
