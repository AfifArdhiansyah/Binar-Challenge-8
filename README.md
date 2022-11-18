# BCR API

Di dalam repository ini terdapat implementasi API dari Binar Car Rental.
Tugas kalian disini adalah:
1. Fork repository
2. Tulis unit test di dalam repository ini menggunakan `jest`.
3. Coverage minimal 70%

Good luck!

# Hasil Pengerjaan Challenge Chapter 8

Hasil pengerjaan challenge chapter 8 ini sebagai berikut:

## Unit Test
<img width="491" alt="image" src="https://user-images.githubusercontent.com/87472849/202732618-38adb6fb-1407-4e66-b726-3b9979e62563.png">

## Deployment

link deploy : https://binar-challenge-8-production.up.railway.app/

### Untuk akses DB:
- DB terdiri dari 4 tabel (cars, roles, usercars, cars) dengan semua nama tabel dan kolom nya small case
<img width="700" alt="image" src="https://user-images.githubusercontent.com/87472849/202734852-c7b191bb-7939-4767-b3f7-95849e3d23b4.png">

- Tabel users memiliki 2 data (1 admin dan 1 customer)
- Data admin:
1. name: Admin
2. email: admin@binar.co.id
3. password: 123456
- Data customer:
1. name: Johnny
2. email: johnny@binar.co.id
3. password: 123456
- contoh akses endpoint (mendapatkan data daftar mobil): </br>
https://binar-challenge-8-production.up.railway.app/v1/cars (GET)
