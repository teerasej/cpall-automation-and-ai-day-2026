# แบบฝึกหัดที่ 6: เตรียมเผยแพร่และแชร์ Agent

เราจะดูว่าผู้ใช้เข้าถึงผู้ช่วยได้อย่างไร ใครมีสิทธิ์ใช้ แล้วทดสอบเวอร์ชันที่เผยแพร่จริง หาก tenant ไม่อนุญาต ให้เรียนผ่านการสาธิตของวิทยากร

> **License:** สิทธิ์สร้าง/test, publish, ใช้ channel และใช้ connection ต้องตรวจแยกกัน Trial ไม่ควรถูกถือว่ามีสิทธิ์ publish เสมอ ให้ IT ตรวจ entitlement ปัจจุบันก่อนวันเรียน

## Prerequisites

- Exercises 1–5 ผ่าน checkpoints
- วิทยากรประกาศเส้นทางที่ยืนยันแล้ว: **Teams**, **Microsoft 365 Copilot**, หรือ **instructor demonstration** ใช้เพียงหนึ่ง channel ในการฝึก
- ใช้ creator และผู้ทดสอบที่ IT ระบุ พร้อม fixed training mailbox ไม่แชร์ flow ให้คนอื่นใช้ connection ของผู้สร้างโดยไม่ตรวจสิทธิ์

## Practice 1: ยืนยัน Channel และ Authentication

**Primary target:** ระบุผู้ใช้และการลงชื่อเข้าใช้สำหรับเส้นทางที่องค์กรอนุญาต

1. ตรวจชื่อ channel ที่วิทยากรแจ้งและบัญชีผู้ทดสอบ ไม่มีการเลือก public website ใน Exercise นี้
2. เปิด **Settings > Security > Authentication** ของ agent
3. ใช้ **Authenticate with Microsoft** สำหรับเส้นทาง Teams/Microsoft 365 Copilot ตามที่ IT ยืนยัน แล้วบันทึก
4. ถ้าติด policy หรือแก้ไม่ได้ให้จดข้อความและใช้ demo path ไม่เปลี่ยนเป็น No authentication เพื่อข้ามปัญหา
5. ถ้าใช้ demo path ให้บันทึกว่าเห็นวิทยากรสาธิต และระบุสิทธิ์ที่ยังขาดก่อนจะทำเองได้

### Checkpoint

ระบุได้ว่าใครใช้ agent นี้ได้ ผ่าน channel ใด และใช้บัญชีใดเชื่อมต่อ Outlook

## Practice 2: Publish และเปิดผ่าน Channel ที่ยืนยันแล้ว

**Primary target:** เปิดเวอร์ชันที่ publish แล้วจากปลายทางจริง หรือบันทึกข้อจำกัดที่ทำให้ยังเผยแพร่ไม่ได้

1. ในเส้นทาง hands-on เลือก **Publish** ใน agent และรอผลสำเร็จ
2. เปิด **Channels > Teams and Microsoft 365 Copilot** แล้วทำเฉพาะเส้นทางที่วิทยากรเลือก:

   | Route | สิ่งที่ทำ |
   |---|---|
   | Teams | เพิ่ม channel และใช้ตัวเลือกเปิด/เพิ่ม agent ใน Teams ที่หน้า channel จัดให้ |
   | Microsoft 365 Copilot | เลือกให้ agent ใช้ได้ใน Microsoft 365 Copilot แล้วใช้ช่องทางติดตั้ง/เปิดที่หน้า channel จัดให้ |
   | Demo | ดูวิทยากรเปิด agent ที่ได้รับอนุมัติไว้แล้วและบันทึกขั้นตอนที่ต้องรอ IT |

3. หากต้องผ่าน admin approval ให้หยุดรอ ไม่ถือว่า publish สำเร็จหมายถึงผู้ใช้ทุกคนติดตั้งได้แล้ว
4. เปิด conversation ใหม่ใน channel จริง ถาม `ถ้าสินค้าตัวอย่างมาไม่ครบ ต้องเตรียมข้อมูลอะไร`
5. ทำคำขอฝึกใหม่หนึ่งรายการและยืนยันส่งไป fixed training mailbox ตรวจอีเมลกับ flow run; การทดสอบเฉพาะ Test panel ไม่ใช่หลักฐานว่า channel ใช้ได้
6. แชร์หรือเพิ่มผู้ทดสอบเฉพาะรายชื่อที่อนุมัติ แล้วให้เขาตรวจการเข้าถึง หากไม่มี permission ให้บันทึกเป็น pending

### Checkpoint

บันทึกเป็น `ผ่าน channel จริง` เมื่อเห็นคำตอบและ action ของเวอร์ชันเผยแพร่ หรือ `สังเกต demo / รอสิทธิ์` เมื่อยังไม่ผ่าน ไม่รายงานแทนกัน

## Summary

ผู้ช่วยของเราต่อครบตั้งแต่ Knowledge ถึงการส่งคำขอ บอกได้ว่าทดสอบถึงระดับใดและอะไรต้องรอ IT เก็บชื่อ agent และหลักฐานผลทดสอบไว้ใช้ในช่วงแบ่งปันผลงาน

[ก่อนหน้า](../05-email-agent-flow/README.md) · [กลับสารบัญ](../../README.md)
