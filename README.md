# TodoApp

![TodoApp Logo](https://via.placeholder.com/150)

**TodoApp** adalah aplikasi manajemen tugas berbasis web yang dibangun menggunakan **React** untuk front-end dan **Node.js** untuk back-end. Aplikasi ini memungkinkan pengguna untuk membuat, mengedit, menghapus, dan mengelompokkan tugas berdasarkan status seperti **Pending**, **In Progress**, dan **Completed**.

## 📋 Fitur Utama

- **CRUD Todo**: Tambahkan, Edit, Hapus todo.
- **Status Tugas**: Mengelompokkan tugas berdasarkan status (Pending, In Progress, Completed).
- **Prioritas Tugas**: Setel prioritas (Low, Medium, High) untuk setiap todo.
- **Desain Responsif**: Aplikasi ini dioptimalkan untuk berbagai perangkat.

## 🖥️ Teknologi yang Digunakan

- **Front-end**: React, Bootstrap, FontAwesome
- **Back-end**: Node.js, Express
- **Database**: MySQL (atau database lain yang digunakan di back-end)

## 🚀 Prasyarat

Pastikan kamu memiliki perangkat lunak berikut sebelum menjalankan aplikasi ini:

- [Node.js](https://nodejs.org/en/) (versi terbaru).
- [MySQL](https://www.mysql.com/) (atau database lain yang digunakan di back-end).

## 🔧 Instalasi

### 1. Clone Repository
Clone repositori ini ke dalam folder lokal kamu:

```bash
git clone <repository-url>
```

### 2. Install Dependencies
#### Frontend
Masuk ke folder todo-app dan instal dependencies menggunakan npm atau yarn:

```bash
cd todo-app
npm install
```

#### Backend
Masuk ke folder api-todoApp dan instal dependencies menggunakan npm atau yarn:

```bash
cd api-todoApp
npm install
```

### 3. Konfigurasi Database
Sesuai dengan konfigurasi database kamu, ganti nilai variabel di file `config/dbconnect.js`:

```javascript
module.exports = {
    HOST: 'localhost',
    USER: 'root',
    PASS: 'root',
    DB: 'todoapp',
    PORT: 8889
}
```

### 4. Jalankan Aplikasi
#### Frontend

```bash
cd todo-app
npm start
```

#### Backend

```bash
cd api-todoApp
npm start
```
### 🖱️ Penggunaan Aplikasi

- Tambah Todo: Di halaman utama, pengguna dapat menambahkan tugas baru dengan judul, prioritas, dan status.
- Edit Todo: Pengguna dapat mengedit todo yang telah dibuat.
- Hapus Todo: Pengguna dapat menghapus todo menggunakan tombol samping.
- Tab Status: Gunakan tab untuk mengelompokkan todo berdasarkan status tugas: Pending, In Progress, Completed.

### 📝 Catatan
Pastikan server back-end berjalan dengan baik dan database sudah terhubung.
API dapat dimodifikasi sesuai kebutuhan, pastikan untuk menyesuaikan endpoint jika diperlukan.
