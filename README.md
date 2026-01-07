# TÀI LIỆU THIẾT KẾ CHỨC NĂNG VÀ CẤU TRÚC HỆ THỐNG

## HỆ THỐNG BLOG CÁ NHÂN (ADMIN + CLIENT)

---

## 1. MỤC TIÊU HỆ THỐNG

Hệ thống là một website blog cá nhân.

**Mục tiêu duy nhất của hệ thống là:**

- **Người viết** tạo, chỉnh sửa và đăng bài blog
- **Người đọc** xem và đọc bài blog

> **Lưu ý:** Hệ thống không phục vụ bất kỳ mục đích nào khác ngoài hai mục tiêu trên.

---

## 2. PHẠM VI HỆ THỐNG

Hệ thống bắt buộc phải có:

- **Khu vực quản trị (Admin Application)**
- **Khu vực hiển thị cho người đọc (Client Application)**

Hai khu vực này là hai ứng dụng độc lập, không dùng chung giao diện, không dùng chung logic.

---

## 3. CÁC TRANG BẮT BUỘC PHẢI CÓ

### 3.1. ADMIN PAGES

#### 3.1.1. Trang đăng nhập

**Mục đích:**

- Xác thực người viết
- Ngăn truy cập trái phép vào khu vực quản trị

**Chức năng:**

- Nhập email và mật khẩu
- Chỉ khi đăng nhập thành công mới được truy cập các trang quản trị khác
- Hệ thống chỉ tồn tại một tài khoản Admin duy nhất

#### 3.1.2. Trang danh sách bài viết

**Mục đích:**

- Quản lý toàn bộ bài blog trong hệ thống

**Chức năng:**

- Hiển thị danh sách bài viết
- Hiển thị trạng thái bài viết (nháp hoặc đã đăng)
- Cho phép mở bài viết để chỉnh sửa
- Cho phép tạo bài viết mới

#### 3.1.3. Trang tạo bài viết

**Mục đích:**

- Tạo một bài blog mới

**Chức năng:**

- Nhập tiêu đề bài viết
- Soạn nội dung bài viết theo dạng các khối nội dung
- Lưu bài viết ở trạng thái nháp

#### 3.1.4. Trang chỉnh sửa bài viết

**Mục đích:**

- Chỉnh sửa bài blog đã tồn tại

**Chức năng:**

- Hiển thị nội dung bài viết hiện tại
- Cho phép chỉnh sửa tiêu đề và nội dung
- Lưu lại thay đổi
- Cho phép đăng bài

> **Lưu ý:** Bài viết đã đăng vẫn được phép chỉnh sửa. Việc chỉnh sửa không yêu cầu duyệt lại và ghi đè trực tiếp nội dung cũ.

#### 3.1.5. Trang xem trước bài viết

**Mục đích:**

- Xem trước cách bài viết sẽ được hiển thị trước khi đăng

**Chức năng:**

- Hiển thị nội dung bài viết theo đúng thứ tự khối nội dung
- Chỉ tồn tại trong khu vực Admin
- Không hiển thị công khai
- Không có URL truy cập từ Client

### 3.2. CLIENT PAGES

#### 3.2.1. Trang danh sách bài blog

**Mục đích:**

- Hiển thị các bài blog đã được đăng

**Chức năng:**

- Hiển thị tiêu đề bài viết
- Hiển thị mô tả ngắn
- Chỉ hiển thị các bài có trạng thái đã đăng

#### 3.2.2. Trang chi tiết bài blog

**Mục đích:**

- Hiển thị nội dung chi tiết của một bài blog

**Chức năng:**

- Hiển thị tiêu đề bài viết
- Hiển thị nội dung bài viết theo đúng thứ tự các khối nội dung
- Mỗi bài viết có một URL cố định

> **Lưu ý:** Client không có chức năng chỉnh sửa, tạo hoặc quản lý bài viết.

---

## 4. CẤU TRÚC HỆ THỐNG TỔNG THỂ

### 4.1. Tách ứng dụng

Hệ thống được chia thành ba phần độc lập:

1. **Admin Application**
2. **Client Application**
3. **API Server**

Admin và Client không truy cập trực tiếp vào Database.

### 4.2. API Server

API Server là tầng trung gian duy nhất giữa ứng dụng và Database.

**API chịu trách nhiệm:**

- Nhận dữ liệu bài viết từ Admin
- Lưu dữ liệu bài viết vào Database
- Cung cấp dữ liệu bài viết cho Client

> **Lưu ý:** API không render giao diện và không xử lý layout.

### 4.3. Database

Database chỉ có nhiệm vụ lưu trữ dữ liệu.

**Database:**

- Lưu bài blog
- Lưu trạng thái bài viết

> **Lưu ý:** Database không xử lý logic nghiệp vụ và không xử lý hiển thị.

---

## 5. CẤU TRÚC DỮ LIỆU NỘI DUNG

### 5.1. Cấu trúc bài blog

Một bài blog bao gồm:

- Tiêu đề
- Trạng thái bài viết
- Danh sách các khối nội dung

### 5.2. Khối nội dung

Nội dung bài viết được tổ chức theo dạng danh sách phẳng các khối nội dung.

**Mỗi khối nội dung:**

- Có một loại riêng (ví dụ: chữ, hình ảnh, đoạn code)
- Có dữ liệu tương ứng với loại khối
- Có thứ tự cố định

**Các khối nội dung:**

- Không được lồng nhau
- Không được tự động thay đổi thứ tự
- Thứ tự lưu trữ quyết định thứ tự hiển thị

> **Quan trọng:** Nội dung không được lưu dưới dạng HTML.

---

## 6. CẤU TRÚC ỨNG DỤNG THEO NHÓM CHỨC NĂNG

### 6.1. Admin Application

Admin Application chỉ bao gồm các nhóm chức năng sau:

- Xác thực người dùng
- Quản lý bài blog
- Soạn nội dung bài blog
- Đăng bài

> **Lưu ý:** Không tồn tại chức năng nào khác ngoài các nhóm trên.

### 6.2. Client Application

Client Application chỉ bao gồm các nhóm chức năng sau:

- Hiển thị danh sách bài blog
- Hiển thị chi tiết bài blog

> **Lưu ý:** Client không có quyền ghi dữ liệu và không quản lý nội dung.

---

## 7. LUỒNG DỮ LIỆU GIỮA CÁC THÀNH PHẦN

**Luồng dữ liệu duy nhất trong hệ thống:**

1. Admin tạo hoặc chỉnh sửa bài viết
2. Nội dung bài viết được gửi lên API
3. API lưu bài viết vào Database
4. Client lấy dữ liệu bài viết từ API
5. Client hiển thị bài viết cho người đọc

> **Lưu ý:** Không tồn tại luồng dữ liệu nào khác.

---

## 8. CÔNG NGHỆ VÀ THƯ VIỆN BẮT BUỘC

### 8.1. Admin Application (Next.js)

**Framework & Core:** Next.js 15+ (App Router - bắt buộc), TypeScript (bắt buộc), React 19 | **Styling:** Tailwind CSS (bắt buộc), shadcn/ui (bắt buộc) | **Form Handling:** React Hook Form (bắt buộc), Zod (bắt buộc) | **Content Editor:** Tiptap v2 (bắt buộc - khuyến khích nhất) | **HTTP Client:** fetch built-in (bắt buộc) | **Authentication:** Auth.js v5 (NextAuth v5 - bắt buộc), JWT | **State Management:** Zustand (bắt buộc)

### 8.2. Client Application (Next.js)

**Framework & Core:** Next.js 15+ (App Router - bắt buộc), TypeScript (bắt buộc), React 19 | **Styling:** Tailwind CSS (bắt buộc) | **Content Rendering:** Tiptap renderer (bắt buộc) | **SEO:** Built-in Metadata API (bắt buộc) | **HTTP Client:** fetch built-in (bắt buộc) | **Image:** next/image (bắt buộc)

### 8.3. API Server (NestJS)

**Framework & Core:** NestJS 10+, TypeScript, Node.js 20 LTS (bắt buộc) | **Database:** PostgreSQL 16+ (bắt buộc) | **ORM:** Prisma 5+ (bắt buộc) | **Authentication:** @nestjs/jwt, @nestjs/passport, passport-jwt, bcrypt (tất cả bắt buộc) | **Validation:** class-validator, class-transformer (bắt buộc) | **Configuration:** @nestjs/config (bắt buộc) | **CORS:** Enabled trong NestJS (bắt buộc) | **Documentation:** @nestjs/swagger (khuyến khích mạnh)

### 8.4. Development Tools

**Version Control:** Git (bắt buộc) | **Package Manager:** pnpm (bắt buộc - nhanh nhất) | **Code Quality:** ESLint (bắt buộc), Prettier (bắt buộc) | **API Testing:** Thunder Client (khuyến khích) | **Database GUI:** Prisma Studio (bắt buộc - built-in)

---

## 9. CẤU TRÚC DATABASE

### 9.1. Danh sách bảng (7 TABLES)

**1. users** - Quản lý tài khoản admin/editor

```
id (uuid, pk), email (varchar, unique), password (varchar), name (varchar),
role (admin | editor), created_at (timestamp), updated_at (timestamp)
```

**2. posts** - LINH HỒN HỆ THỐNG

```
id (uuid, pk), title (varchar), slug (varchar, unique), excerpt (text),
thumbnail_url (varchar), status (draft | published | archived), blocks (jsonb),
user_id (uuid, fk -> users.id), published_at (timestamp),
created_at (timestamp), updated_at (timestamp)
```

**Cấu trúc blocks (JSONB):**

```json
[
  { "type": "heading", "data": { "text": "Giới thiệu" } },
  { "type": "text", "data": { "content": "Next.js là..." } },
  { "type": "image", "data": { "url": "/img.png", "caption": "Demo" } },
  { "type": "code", "data": { "lang": "ts", "code": "const a = 1" } },
  { "type": "markdown", "data": { "content": "## Hello MD" } }
]
```

**3. post_versions** - Version control cho bài viết

```
id (uuid, pk), post_id (uuid, fk -> posts.id), blocks (jsonb),
user_id (uuid, fk -> users.id)
```

> Cho phép: Undo, xem lịch sử chỉnh sửa, preview version

**4. categories** - Phân loại bài viết

```
id (uuid, pk), name (varchar), slug (varchar, unique),
created_at (timestamp), updated_at (timestamp)
```

**5. post_categories** - Many-to-many relationship

```
post_id (uuid, fk -> posts.id), category_id (uuid, fk -> categories.id)
```

**6. tags** - Gắn thẻ bài viết

```
id (uuid, pk), name (varchar), slug (varchar, unique),
created_at (timestamp), updated_at (timestamp)
```

**7. post_tags** - Many-to-many relationship

```
post_id (uuid, fk -> posts.id), tag_id (uuid, fk -> tags.id)
```

### 9.2. Quan hệ tổng kết

- User 1 → n Post (qua user_id)
- Post 1 → n PostVersion (qua post_id)
- User 1 → n PostVersion (qua user_id)
- Post n → n Category (qua post_categories)
- Post n → n Tag (qua post_tags)

### 9.3. Ràng buộc và Index

- **Unique constraints**: email (users), slug (posts, categories, tags)
- **Foreign keys**: user_id, post_id, category_id, tag_id
- **Indexes**: Tự động trên primary keys và foreign keys; unique indexes trên các trường unique

### 9.4. Ưu điểm của cấu trúc này

✅ Không lock UI - thay đổi editor không cần đổi DB | ✅ SEO tốt với slug, excerpt, thumbnail | ✅ Linh hoạt - mở rộng sang course, landing page | ✅ Version control - theo dõi lịch sử thay đổi | ✅ Phân quyền rõ ràng - admin/editor roles | ✅ JSONB blocks - lưu trữ nội dung linh hoạt, không phụ thuộc HTML

---

## 10. CÁC QUY TẮC BẮT BUỘC TUÂN THỦ

- Admin không được ghi trực tiếp vào Database
- Client không được ghi dữ liệu
- Không lưu nội dung dưới dạng HTML
- API không render giao diện
- Không trộn logic quản trị với logic hiển thị
- Bắt buộc sử dụng TypeScript cho toàn bộ dự án
- Bắt buộc validate dữ liệu ở cả Frontend và Backend

---

## 11. KẾT LUẬN

Tài liệu này mô tả đầy đủ và chính xác hệ thống blog cá nhân cần xây dựng.

- **Mục tiêu hệ thống rõ ràng**
- **Phạm vi chức năng giới hạn và kiểm soát được**
- **Luồng dữ liệu đơn giản và minh bạch**
- **Trách nhiệm của từng thành phần được phân tách rõ ràng**
