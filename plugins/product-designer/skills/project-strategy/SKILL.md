---
name: project-strategy
description: >
  Xây dựng chiến lược toàn diện cho dự án phần mềm / sản phẩm số. Sử dụng skill này khi người dùng muốn lập kế hoạch dự án, xây dựng project scope, định nghĩa milestones, phân tích yêu cầu, hoặc bất kỳ yêu cầu nào liên quan đến "chiến lược dự án", "lập kế hoạch dự án", "project strategy", "project planning", "phạm vi dự án", "scope dự án". Skill sẽ thu thập thông tin đầu vào có cấu trúc, sau đó tạo ra bộ tài liệu Project Scope hoàn chỉnh bằng Tiếng Việt dưới dạng file Markdown và hiển thị trong chat.
---

# PROJECT STRATEGY SKILL

## Mục tiêu
1. Thu thập và phân tích thông tin cần thiết để hiểu toàn diện về dự án
2. Xây dựng chiến lược thực hiện dự án thỏa mãn các bên liên quan

## Output cần tạo ra
Bộ tài liệu **Project Scope** gồm 3 phần chính:
1. **Scope Statement** — Tuyên bố về phạm vi, mục tiêu và những người tham gia dự án
2. **Backlog** — Danh sách công việc đã phân loại và sắp xếp theo thứ tự ưu tiên
3. **Definition of Done (DoD)** — Danh sách tiêu chuẩn sản phẩm cần đạt khi thực hiện dự án

---

## BƯỚC 1: THU THẬP THÔNG TIN (Gather Information)

**Bắt buộc thực hiện trước tiên.** Hỏi người dùng theo đúng cấu trúc sau, trình bày rõ ràng từng nhóm:

```
Để xây dựng chiến lược dự án, bạn vui lòng cung cấp thông tin theo 3 nhóm sau:

### 📋 Nhóm 1 — Thông tin dự án
- Mục tiêu dự án là gì?
- Yêu cầu của dự án (requirements) gồm những gì?
- Giới hạn của dự án (constraints): thời gian, ngân sách, nguồn lực?
- Bảng kê dự án (project charter / brief) nếu có?

### 🏢 Nhóm 2 — Thông tin doanh nghiệp / thị trường
- Doanh nghiệp đang hoạt động trong lĩnh vực nào?
- Đối tượng người dùng / khách hàng mục tiêu là ai?
- Bối cảnh thị trường hoặc vấn đề cần giải quyết?

### 💻 Nhóm 3 — Thông tin sản phẩm & công nghệ (nếu có)
- Mục tiêu sản phẩm (product goals)?
- Roadmap hoặc các giai đoạn phát triển dự kiến?
- Luồng nghiệp vụ chính (business flows)?
- Khả năng và giới hạn công nghệ (tech stack, platform, constraints)?
```

Nếu người dùng cung cấp thông tin chưa đầy đủ, hỏi thêm các câu làm rõ trước khi tiến hành phân tích.

---

## BƯỚC 2: PHÂN TÍCH & ĐỊNH NGHĨA DỰ ÁN (Define Project)

Sau khi có đủ thông tin, thực hiện phân tích:

### 2.1 Stakeholder Analysis
- Xác định các bên liên quan (stakeholders): internal (team, PO, dev, QA...) và external (khách hàng, người dùng, đối tác)
- Xác định vai trò và kỳ vọng của từng bên
- Phân loại: Primary / Secondary / Key Decision Maker

### 2.2 Problem & Opportunity Framing
- Vấn đề cốt lõi cần giải quyết là gì?
- Cơ hội thị trường hoặc giá trị tạo ra?
- Các rủi ro và điểm mù tiềm ẩn?

### 2.3 Scope Boundary
- IN scope: những gì dự án sẽ thực hiện
- OUT of scope: những gì dự án KHÔNG thực hiện (rất quan trọng để tránh scope creep)
- Assumptions: các giả định được đưa ra

---

## BƯỚC 3: ĐỊNH NGHĨA MILESTONES (Define Milestones)

Phân chia dự án thành các giai đoạn rõ ràng:

- **Milestone** = mốc quan trọng, không phải task
- Mỗi milestone cần có: tên, mô tả, deliverable, timeline ước tính
- Gợi ý cấu trúc cho dự án phần mềm:
  - M0: Project Kickoff & Setup
  - M1: Discovery & Design
  - M2: MVP / Core Features
  - M3: Testing & Hardening
  - M4: Launch / Go-live
  - M5: Post-launch & Iteration

---

## BƯỚC 4: ĐỊNH NGHĨA QUY TRÌNH (Define Process)

Xác định cách thức làm việc của dự án:

- **Methodology**: Agile / Scrum / Kanban / Waterfall / Hybrid
- **Sprint/Cycle length** (nếu Agile)
- **Communication cadence**: daily standup, weekly review, demo...
- **Decision-making process**: ai approve, ai escalate
- **Tools**: project management tool, communication tool, code repo...
- **RACI matrix** nếu cần (Responsible / Accountable / Consulted / Informed)

---

## BƯỚC 5: TIÊU CHÍ THÀNH CÔNG (Success Criteria)

Định nghĩa rõ "thành công trông như thế nào":

- **Business metrics**: KPIs, OKRs liên quan đến mục tiêu kinh doanh
- **Product metrics**: DAU, retention, conversion, performance benchmarks...
- **Delivery metrics**: on-time delivery, budget adherence, quality gates
- **Stakeholder satisfaction**: cách đo lường sự hài lòng các bên

---

## BƯỚC 6: ĐỊNH NGHĨA NGUỒN LỰC (Define Resources)

- **Team**: vai trò cần thiết, số lượng, FTE hay part-time
- **Budget**: ước tính sơ bộ theo từng hạng mục
- **Timeline**: tổng thời gian dự án, critical path
- **Dependencies**: phụ thuộc vào bên thứ ba, API, vendor...
- **Risks & Mitigation**: top 5 rủi ro và cách xử lý

---

## FORMAT OUTPUT

Sau khi hoàn thành 6 bước phân tích, tạo file Markdown với cấu trúc sau:

```markdown
# PROJECT SCOPE — [Tên Dự Án]
> Phiên bản: 1.0 | Ngày: [ngày tạo] | Trạng thái: Draft

---

## 1. SCOPE STATEMENT

### 1.1 Tuyên bố dự án
[Mô tả ngắn gọn 3-5 câu về dự án]

### 1.2 Mục tiêu dự án
[Danh sách mục tiêu SMART]

### 1.3 Stakeholders
| Bên liên quan | Vai trò | Kỳ vọng | Mức độ ảnh hưởng |
|---|---|---|---|

### 1.4 Phạm vi dự án
**Trong phạm vi (In Scope):**
- ...

**Ngoài phạm vi (Out of Scope):**
- ...

**Giả định (Assumptions):**
- ...

### 1.5 Milestones
| Milestone | Mô tả | Deliverable | Timeline |
|---|---|---|---|

---

## 2. BACKLOG (Danh sách công việc ưu tiên)

### Epic 1: [Tên]
| ID | User Story / Task | Priority | Estimate | Notes |
|---|---|---|---|---|

### Epic 2: [Tên]
...

**Ghi chú ưu tiên:** 🔴 Critical | 🟠 High | 🟡 Medium | 🟢 Low

---

## 3. DEFINITION OF DONE (Tiêu chuẩn sản phẩm)

### 3.1 Tiêu chuẩn chung (áp dụng cho mọi feature)
- [ ] ...

### 3.2 Tiêu chuẩn kỹ thuật
- [ ] ...

### 3.3 Tiêu chuẩn UX/UI
- [ ] ...

### 3.4 Tiêu chuẩn kinh doanh
- [ ] ...

### 3.5 Tiêu chuẩn bàn giao
- [ ] ...

---

## PHỤ LỤC

### A. Resources & Timeline
### B. Risk Register
### C. Quy trình làm việc
```

---

## LƯU Ý QUAN TRỌNG

- **Ngôn ngữ**: Luôn viết output bằng **Tiếng Việt**, thuật ngữ kỹ thuật có thể giữ tiếng Anh kèm giải thích
- **Tính thực tế**: Đặt câu hỏi clarifying nếu thông tin còn mơ hồ — đừng tự suy diễn
- **Prioritization framework**: Dùng MoSCoW (Must/Should/Could/Won't) hoặc RICE để ưu tiên backlog
- **File lưu**: Lưu file tại `/mnt/user-data/outputs/project-scope-[ten-du-an].md` và dùng `present_files` để chia sẻ
- **Hiển thị trong chat**: Sau khi tạo file, tóm tắt key points ngay trong chat để người dùng xem nhanh
