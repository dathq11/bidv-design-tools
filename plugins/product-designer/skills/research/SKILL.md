---
name: research
description: >
  Thực hiện nghiên cứu có cấu trúc từ Project Scope để tạo Research Report phục vụ quyết định thiết kế. Sử dụng skill này khi người dùng muốn nghiên cứu dự án, tạo research report, phân tích người dùng, phân tích thị trường, desk research, hoặc bất kỳ yêu cầu nào liên quan đến "research", "nghiên cứu", "báo cáo nghiên cứu", "phân tích người dùng", "phân tích thị trường", "research report", "user research", "market research". Input là file Project Scope. Skill sẽ tự động xác định research goals, thu thập và tổng hợp dữ liệu, sau đó tạo Research Report hoàn chỉnh kèm visualize data bằng Tiếng Việt — hiển thị inline trong chat VÀ lưu file .md.
---

# RESEARCH SKILL

## Mục tiêu
1. Xác định Research Goals và Research Questions từ Project Scope
2. Thu thập, tổng hợp và chiết xuất dữ liệu/thông tin cần thiết
3. Tạo Research Report phù hợp với từng đối tượng sử dụng, kèm visualize data

## Input yêu cầu
- **Bắt buộc**: File Project Scope (`.md`, `.docx`, `.pdf`, hoặc nội dung paste trực tiếp)
- Nếu chưa có file: yêu cầu người dùng cung cấp trước khi tiến hành

---

## BƯỚC 1: ĐỌC & PHÂN TÍCH PROJECT SCOPE

Đọc toàn bộ nội dung Project Scope và chiết xuất:

### 1.1 Thông tin cốt lõi cần trích xuất
- **Tên dự án** và mô tả tổng quan
- **Mục tiêu dự án** (business goals, product goals)
- **Đối tượng người dùng** (target users / personas đã được đề cập)
- **Vấn đề cần giải quyết** (problem statement)
- **Phạm vi dự án** (in scope / out of scope)
- **Constraints**: thời gian, ngân sách, công nghệ
- **Stakeholders** liên quan

### 1.2 Xác định loại research cần thực hiện
Dựa trên nội dung scope, tự động xác định các loại research phù hợp:

| Loại Research | Khi nào trigger |
|---|---|
| **User Research** | Scope đề cập user personas, pain points, hành vi người dùng chưa rõ |
| **Market Research** | Scope đề cập thị trường, đối thủ, cơ hội kinh doanh |
| **Desk Research** | Cần bổ sung context về ngành, xu hướng, best practices |
| **Data Analysis** | Scope có số liệu, metrics, KPIs cần phân tích sâu hơn |

---

## BƯỚC 2: XÁC ĐỊNH RESEARCH FRAMEWORK

### 2.1 Định nghĩa Research Goals
Từ mục tiêu dự án, chuyển hóa thành Research Goals theo format:
> "Chúng ta cần hiểu **[đối tượng]** để có thể **[hành động thiết kế]** nhằm đạt được **[mục tiêu dự án]**"

**Ví dụ:**
- "Chúng ta cần hiểu hành vi thanh toán của người dùng 25-40 tuổi để thiết kế checkout flow phù hợp nhằm tăng tỉ lệ chuyển đổi."

### 2.2 Xây dựng Research Questions (RQs)
Với mỗi Research Goal, đặt 3-5 câu hỏi nghiên cứu cụ thể:

**Cho User Research:**
- Người dùng hiện đang giải quyết [vấn đề] bằng cách nào?
- Điểm đau (pain points) lớn nhất trong hành trình hiện tại là gì?
- Yếu tố nào quyết định họ chọn/không chọn sản phẩm?
- Mental model của họ về [chủ đề liên quan] là gì?

**Cho Market Research:**
- Ai là đối thủ cạnh tranh trực tiếp/gián tiếp?
- Các giải pháp hiện tại trên thị trường có điểm mạnh/yếu gì?
- Xu hướng thị trường và cơ hội nào chưa được khai thác?
- Quy mô thị trường và tốc độ tăng trưởng?

**Cho Desk Research:**
- Best practices trong ngành là gì?
- Các case study thành công/thất bại tương tự?
- Xu hướng công nghệ ảnh hưởng đến dự án?

### 2.3 Xác định Research Methods
Mapping từ RQs → Methods phù hợp:

```
User Research    → Desk research về personas, journey mapping từ scope
Market Research  → Competitive analysis, thị trường/ngành từ scope + web search nếu cần
Data Analysis    → Phân tích số liệu/metrics có trong scope
Desk Research    → Tổng hợp context từ scope + kiến thức domain
```

> **Lưu ý**: Chỉ dùng web search khi scope không cung cấp đủ thông tin về thị trường/đối thủ cụ thể.

---

## BƯỚC 3: THU THẬP & TỔNG HỢP DỮ LIỆU

### 3.1 Chiết xuất từ Project Scope
Đây là nguồn dữ liệu chính. Tổ chức thông tin theo các bucket:

**Bucket A — User Insights** (hiểu về người dùng)
- Personas đã được đề cập
- Pain points, needs, goals
- Context sử dụng sản phẩm
- Hành vi và thói quen liên quan

**Bucket B — Market Context** (hiểu về thị trường)
- Bối cảnh ngành/thị trường
- Đối thủ được đề cập
- Cơ hội và thách thức
- Xu hướng liên quan

**Bucket C — Product & Technical Constraints** (hiểu về giới hạn)
- Yêu cầu kỹ thuật
- Platform constraints
- Business rules
- Timeline và nguồn lực

**Bucket D — Gaps & Assumptions** (những gì còn thiếu)
- Thông tin chưa có trong scope
- Giả định cần xác nhận
- Rủi ro tiềm ẩn cần nghiên cứu thêm

### 3.2 Bổ sung từ web search (nếu cần)
Chỉ thực hiện khi Bucket B (Market Context) thiếu thông tin cụ thể về:
- Quy mô thị trường, số liệu tăng trưởng
- Thông tin đối thủ cụ thể
- Báo cáo ngành, thống kê mới nhất

---

## BƯỚC 4: PHÂN TÍCH & TỔNG HỢP

### 4.1 Synthesis Framework
Sau khi có dữ liệu, thực hiện phân tích:

**Affinity Mapping** — nhóm insights theo chủ đề:
- Nhóm các insight tương đồng lại với nhau
- Đặt tên chủ đề/theme cho từng nhóm
- Ưu tiên theo tần suất xuất hiện và mức độ ảnh hưởng

**Key Findings** — rút ra kết luận chính:
- Mỗi finding cần có: insight + evidence + implication cho design
- Format: "**[Finding]**: [Giải thích]. **Implication**: [Tác động lên thiết kế]"

**Design Implications** — chuyển hóa insight thành hướng thiết kế:
- "How Might We" statements từ key findings
- Priority matrix: impact vs effort

### 4.2 Gap Analysis
Đánh giá những gì còn thiếu và cần làm rõ:
- Câu hỏi nào vẫn chưa được trả lời?
- Giả định nào cần được validate?
- Research nào cần thực hiện tiếp theo?

---

## BƯỚC 5: TẠO RESEARCH REPORT

### 5.1 Cấu trúc Report

```markdown
# RESEARCH REPORT — [Tên Dự Án]
> Phiên bản: 1.0 | Ngày: [ngày] | Loại: [User/Market/Desk/Mixed Research]

---

## TÓM TẮT ĐIỀU HÀNH (Executive Summary)
[3-5 câu tóm tắt toàn bộ report — dành cho stakeholders đọc nhanh]

**Top 3 Key Findings:**
1. ...
2. ...
3. ...

---

## 1. RESEARCH OVERVIEW

### 1.1 Research Goals
[Danh sách Research Goals đã định nghĩa]

### 1.2 Research Questions
[Danh sách RQs theo từng goal]

### 1.3 Research Methods & Sources
[Phương pháp và nguồn dữ liệu đã sử dụng]

---

## 2. USER INSIGHTS (nếu có User Research)

### 2.1 User Personas
[Bảng personas với: tên, đặc điểm, goals, pain points]

### 2.2 User Journey (nếu đủ thông tin)
[Sơ đồ hành trình người dùng dạng text/table]

### 2.3 Pain Points & Needs
[Danh sách pain points được ưu tiên theo mức độ nghiêm trọng]

---

## 3. MARKET INSIGHTS (nếu có Market Research)

### 3.1 Tổng quan thị trường
[Quy mô, tốc độ tăng trưởng, xu hướng]

### 3.2 Competitive Analysis
[Bảng so sánh đối thủ: tên, điểm mạnh, điểm yếu, positioning]

### 3.3 Market Opportunities & Threats
[SWOT hoặc opportunity mapping]

---

## 4. KEY FINDINGS & INSIGHTS

### 4.1 Findings theo chủ đề
[Grouped insights với evidence và implication]

### 4.2 Design Implications
[How Might We statements + priority matrix]

---

## 5. DATA VISUALIZATION

[Tạo visualizations phù hợp — xem hướng dẫn bên dưới]

---

## 6. RECOMMENDATIONS

### 6.1 Hướng thiết kế đề xuất
[Top recommendations dựa trên findings]

### 6.2 Research Gaps & Next Steps
[Những gì cần nghiên cứu thêm]

---

## PHỤ LỤC
### A. Raw Data từ Project Scope
### B. Nguồn tham khảo
```

---

## HƯỚNG DẪN DATA VISUALIZATION

### Khi nào dùng loại viz nào

| Dữ liệu cần hiển thị | Loại visualization |
|---|---|
| So sánh đối thủ (nhiều thuộc tính) | Bảng so sánh có emoji/icon ✅❌ |
| Phân bổ user segments | Mermaid pie chart hoặc bảng % |
| Hành trình người dùng | Mermaid flowchart hoặc bảng stages |
| Pain point severity | Bảng với mức độ 🔴🟠🟡 |
| Priority matrix | 2x2 matrix dạng text art hoặc bảng |
| Timeline / Trend | Mermaid gantt hoặc bảng timeline |
| Competitive landscape | Positioning map dạng text art |

### Ví dụ visualizations

**Competitive Analysis Table:**
```markdown
| Đối thủ | Điểm mạnh | Điểm yếu | Giá | Target |
|---|---|---|---|---|
| A | UX tốt, nhanh | Đắt, ít tính năng | $$$ | Enterprise |
| B | Giá rẻ | UX kém, chậm | $ | SMB |
```

**Pain Point Severity Matrix:**
```markdown
| Pain Point | Tần suất | Mức độ | Priority |
|---|---|---|---|
| Khó tìm sản phẩm | Cao | 🔴 Critical | P0 |
| Checkout phức tạp | Trung bình | 🟠 High | P1 |
```

**User Journey (Text):**
```
[Nhận biết] → [Tìm kiếm] → [So sánh] → [Mua] → [Sử dụng] → [Quay lại]
     😐              😟           😤          😊         😊           ❓
```

**Mermaid cho flow/diagram:** Chỉ dùng khi cần visualize process hoặc hierarchy phức tạp.

---

## FORMAT & DELIVERY

### Output
1. **Hiển thị inline trong chat**: Tóm tắt executive summary + key findings + các visualizations chính
2. **File .md**: Lưu report đầy đủ tại `/mnt/user-data/outputs/research-report-[ten-du-an].md`
3. Dùng `present_files` để chia sẻ file với người dùng

### Ngôn ngữ
- Viết bằng **Tiếng Việt** hoàn toàn
- Thuật ngữ chuyên ngành (UX, personas, insight...) giữ tiếng Anh, không cần dịch
- Tone: chuyên nghiệp nhưng dễ đọc

### Độ dài report
- Executive Summary: 3-5 câu
- Mỗi section chính: đủ để ra quyết định thiết kế, không dài dòng
- Visualizations: ưu tiên bảng và diagram hơn là mô tả thuần text

### Đối tượng đọc
Report cần phục vụ được nhiều đối tượng:
- **Designer**: cần insights và design implications
- **PM/PO**: cần market context và recommendations
- **Stakeholders**: cần executive summary và key findings

---

## LƯU Ý QUAN TRỌNG

- **Không suy diễn**: Chỉ rút ra insights có evidence từ scope. Nếu thiếu thông tin, ghi rõ là "Gap" hoặc "Cần nghiên cứu thêm".
- **Prioritize findings**: Không phải mọi insight đều quan trọng như nhau — luôn ưu tiên theo impact với design.
- **Actionable**: Mỗi finding phải có implication rõ ràng cho thiết kế.
- **Nếu scope quá ngắn/mơ hồ**: Hỏi người dùng 2-3 câu clarifying trước khi tiến hành research.
