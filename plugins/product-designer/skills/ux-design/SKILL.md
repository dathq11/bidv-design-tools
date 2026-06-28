---
name: ux-design
description: Tạo tài liệu thiết kế UX toàn diện từ Project Scope và Research Report. Sử dụng skill này khi người dùng muốn thiết kế UX, tạo user flows, vạch ra navigation và interactions, mô tả component logic, tạo wireframes, hoặc bất kỳ yêu cầu nào liên quan đến "thiết kế UX", "UX design", "user flow", "wireframe", "information architecture", "IA", "thiết kế trải nghiệm người dùng", "tài liệu thiết kế". LUÔN sử dụng skill này khi người dùng cung cấp project scope và/hoặc research report và muốn tiến hành thiết kế. Output là một Tài liệu Thiết kế UX hoàn chỉnh dưới dạng file Markdown, hiển thị inline trong chat.
---

# UX Design Skill

Mục tiêu cốt lõi: **Tạo ra giải pháp thiết kế khiến mục tiêu của user và business gặp nhau và hoạt động hiệu quả** — không chỉ đẹp mắt, mà phải giải quyết đúng vấn đề đúng người đúng lúc.

---

## Input yêu cầu

- **Project Scope**: Mô tả dự án, mục tiêu business, đối tượng người dùng
- **Research Report**: Insights từ user research, market research, phân tích cạnh tranh

Nếu thiếu một trong hai, hỏi người dùng cung cấp trước khi tiến hành.

---

## Quy trình thực hiện

Thực hiện theo đúng thứ tự sau. Mỗi bước xây dựng nền tảng cho bước tiếp theo.

### Bước 1 — Organizing Information (Tổ chức thông tin)

Phân tích và nhóm tất cả thông tin từ input:

- **User goals**: Người dùng muốn đạt được gì? (tách biệt theo từng nhóm user nếu có nhiều nhóm)
- **Business goals**: Sản phẩm cần đạt được gì?
- **Pain points**: Vấn đề người dùng đang gặp phải
- **Content inventory**: Tất cả nội dung/tính năng cần có trong sản phẩm
- **Prioritization**: Phân loại Must have / Should have / Nice to have dựa trên impact và effort

Trình bày dưới dạng bảng hoặc danh sách có cấu trúc rõ ràng.

### Bước 2 — Labelling Information (Đặt tên và phân loại)

Tạo taxonomy (hệ thống phân loại) cho sản phẩm:

- **Navigation labels**: Tên các mục điều hướng chính — dùng ngôn ngữ của người dùng, không phải ngôn ngữ của business
- **Feature groupings**: Nhóm các tính năng liên quan theo mental model của user
- **Terminology glossary**: Danh sách thuật ngữ thống nhất sẽ dùng xuyên suốt thiết kế

*Nguyên tắc*: Tên gọi phải phản ánh cách người dùng nghĩ, không phải cách hệ thống được xây dựng.

### Bước 3 — Design Keywords (Từ khóa thiết kế)

Xác định 5–8 từ khóa mô tả **cảm giác** muốn người dùng trải nghiệm khi dùng sản phẩm.

Ví dụ format:
```
SIMPLE — Không cần đọc hướng dẫn, mọi thứ tự nhiên
TRUSTWORTHY — Cảm giác an toàn khi cung cấp thông tin cá nhân  
EFFICIENT — Hoàn thành task trong ít bước nhất có thể
EMPOWERING — Người dùng cảm thấy mình đang kiểm soát
```

Những keywords này là "la bàn" khi đưa ra quyết định thiết kế. Giải thích ngắn gọn tại sao mỗi keyword quan trọng với dự án này.

### Bước 4 — Routes & Pathways (Tất cả các đường đi có thể)

Vạch ra **toàn bộ** các path mà user có thể đi qua trong sản phẩm:

**4a. User Segments & Entry Points**
- Người dùng là ai? (Personas rút gọn từ Research Report)
- Họ vào sản phẩm từ đâu? (Direct, referral, notification, search…)
- Trạng thái ban đầu khi vào: new user / returning user / logged in / logged out

**4b. Core User Flows**

Với mỗi flow quan trọng, mô tả theo format:

```
FLOW: [Tên flow]
Actor: [Loại user]
Trigger: [Điều gì khiến user bắt đầu flow này]
Goal: [User muốn đạt được gì]
Pre-condition: [Điều kiện cần có trước khi bắt đầu]

Happy Path:
1. [Bước 1] → [Screen/State]
2. [Bước 2] → [Screen/State]
...
N. [Kết quả thành công]

Alternative Paths:
- Nếu [điều kiện X] → rẽ sang [path Y]
- Nếu [điều kiện Z] → rẽ sang [path W]

Error States:
- Khi [lỗi A] xảy ra → hiển thị [xử lý A]
- Khi [lỗi B] xảy ra → hiển thị [xử lý B]

Edge Cases:
- [Trường hợp đặc biệt cần xử lý]
```

Các flow **bắt buộc** phải có:
- Onboarding flow (lần đầu dùng sản phẩm)
- Core task flow (task chính mà sản phẩm giải quyết)
- Error & recovery flow
- Empty state flow (khi chưa có data)
- Tất cả flow khác xác định từ Research Report

**4c. Navigation Architecture**

Mô tả cấu trúc điều hướng tổng thể:
- Loại navigation: Tab bar / Sidebar / Top nav / Hybrid
- Hierarchy: Primary / Secondary / Tertiary navigation
- Breadcrumb logic (nếu cần)
- Back button behavior

### Bước 5 — Interaction & Navigation Description (Mô tả tương tác)

Với mỗi màn hình/component chính, mô tả:

```
SCREEN: [Tên màn hình]
Purpose: [Màn hình này phục vụ mục đích gì]

Vào màn hình này từ: [list các entry points]
Thoát màn hình này tới: [list các possible exits]

Interactions:
- [Element A]: Tap/Click → [Action/Result]
- [Element B]: Long press → [Action/Result]
- [Element C]: Swipe → [Action/Result]
- [Input D]: Focus → [Behavior]; Submit → [Validation logic → Result]

States của màn hình:
- Loading state: [mô tả]
- Empty state: [mô tả + messaging]
- Populated state: [mô tả]
- Error state: [mô tả + recovery action]

Micro-interactions:
- [Mô tả animation/feedback quan trọng nếu có]
```

### Bước 6 — Component Logic (Logic thành phần)

Liệt kê các component UI tái sử dụng và logic của chúng:

```
COMPONENT: [Tên component]
Dùng ở: [List màn hình sử dụng]
Variants: [Các trạng thái/biến thể: default, hover, active, disabled, loading, error]
Props/Data cần: [Dữ liệu component cần nhận]
Behavior:
  - [Mô tả logic xử lý]
  - [Điều kiện hiển thị/ẩn]
  - [Rules validation nếu là input component]
```

Component tối thiểu cần mô tả:
- Navigation component
- Primary CTA button
- Form components (input, select, etc.)
- Card/List item component
- Error/Empty state component
- Loading skeleton

### Bước 7 — Wireframe Descriptions (Mô tả Wireframe)

Với mỗi màn hình trong product, mô tả layout dưới dạng text wireframe:

```
WIREFRAME: [Tên màn hình]
Device: Mobile / Desktop / Both
Resolution: [nếu quan trọng]

Layout (từ trên xuống dưới, trái sang phải):
┌─────────────────────────────┐
│ [Header / Navigation]       │
├─────────────────────────────┤
│ [Hero / Primary content]    │
│   - [Element 1]             │
│   - [Element 2]             │
├─────────────────────────────┤
│ [Secondary content]         │
│   [Left column] [Right col] │
├─────────────────────────────┤
│ [CTA / Footer]              │
└─────────────────────────────┘

Content hierarchy:
H1: [Primary message]
H2: [Secondary message]  
Body: [Supporting content]
CTA: [Action text + destination]

Spacing notes: [Bất kỳ ghi chú quan trọng về layout]
Responsive behavior: [Cách layout thay đổi ở các breakpoints]
```

---

## Output — Tài liệu Thiết kế UX

Tạo file Markdown hoàn chỉnh với cấu trúc sau. Lưu vào `/mnt/user-data/outputs/ux-design-document.md`.

```markdown
# Tài liệu Thiết kế UX — [Tên dự án]
**Version**: 1.0  
**Date**: [ngày tạo]  
**Based on**: Project Scope v[X] + Research Report v[Y]

---

## 1. Tổng quan & Mục tiêu
### 1.1 User Goals
### 1.2 Business Goals  
### 1.3 Success Metrics

## 2. Tổ chức thông tin
### 2.1 Content Inventory & Prioritization
### 2.2 Information Architecture
### 2.3 Navigation Taxonomy

## 3. Design Keywords
[Bảng keywords + giải thích]

## 4. User Flows
### 4.1 User Segments & Entry Points
### 4.2 [Flow 1: Tên]
### 4.3 [Flow 2: Tên]
### ... (tất cả flows)

## 5. Navigation & Interaction
### 5.1 Navigation Architecture
### 5.2 [Screen 1: Tên]
### 5.3 [Screen 2: Tên]
### ... (tất cả screens)

## 6. Component Logic
### 6.1 [Component 1]
### 6.2 [Component 2]
### ...

## 7. Wireframes
### 7.1 [Screen 1]
### 7.2 [Screen 2]
### ...

## 8. Design Decisions Log
[Ghi lại những quyết định thiết kế quan trọng và lý do — giúp team hiểu "tại sao" đằng sau mỗi quyết định]

## 9. Open Questions & Next Steps
[Những điểm còn cần làm rõ, bước tiếp theo]
```

---

## Nguyên tắc chất lượng

**Trong suốt quá trình thực hiện, kiểm tra:**

1. **User-centric**: Mỗi quyết định thiết kế có thể trả lời câu hỏi "điều này giúp user như thế nào?" không?
2. **Business-aligned**: Flow có dẫn user đến hành động tạo giá trị cho business không?
3. **Complete**: Đã xét tất cả error states, empty states, và edge cases chưa?
4. **Consistent**: Terminology, patterns, và behaviors có nhất quán xuyên suốt không?
5. **Feasible**: Những gì mô tả có khả thi về mặt kỹ thuật không? (Nếu không chắc, note lại)

**Độ sâu phù hợp với quy mô:**
- Sản phẩm đơn giản (< 5 screens): Wireframe chi tiết cho tất cả screens
- Sản phẩm trung bình (5–15 screens): Wireframe chi tiết cho core flows, overview cho phần còn lại
- Sản phẩm phức tạp (> 15 screens): Wireframe chi tiết cho critical path, mô tả pattern cho phần còn lại

---

## Lưu ý khi viết

- Viết bằng **tiếng Việt** trừ khi user yêu cầu khác
- Dùng **ngôn ngữ của người dùng cuối** trong labels và flow descriptions
- **Giải thích "tại sao"** cho các quyết định thiết kế quan trọng — tài liệu này là nguồn sự thật cho cả team
- Nếu Research Report cho thấy insight quan trọng ảnh hưởng tới quyết định thiết kế, **trích dẫn rõ ràng**
- Nếu có thông tin mâu thuẫn giữa Scope và Research, **flag rõ** và đề xuất hướng giải quyết
