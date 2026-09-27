# แบบฝึกหัดที่ 2: กำหนด Instructions และทดสอบครั้งแรก

Agent ที่เพิ่งสร้างยังไม่รู้ขอบเขตงานของเรา พลจะพาทุกคนเขียน Instructions เหมือนคู่มือพนักงานสำหรับพนักงานใหม่ แล้วลองถามดูว่า Agent เข้าใจหน้าที่นั้นหรือไม่

> **License และสิทธิ์:** ต้องใช้บัญชีที่สร้างและแก้ไข Agent ใน Copilot Studio environment ฝึกได้

## Prerequisites

- Agent ของตนเองจาก [Exercise 1](./01-create-assistant.md)

## Practice 1: เขียนขอบเขตงานของ Agent

**Primary target:** กำหนด Instructions ให้ Agent อธิบายบทบาท รูปแบบการตอบ และขอบเขตงานของตนเองได้

1. เปิด Agent แล้วหา **Instructions** ใน Overview หรือพื้นที่แก้ไขที่วิทยากรยืนยัน
2. วางข้อความต่อไปนี้และ Save :

   ```text
   # Role
   You are a fictional store-support training assistant for CPAll learners.

   # Language and style
   Reply in friendly, concise Thai. Keep visible product and field names in English.

   # Scope
   For unrelated requests, explain the supported scope.
   ```

3. อ่านทวนว่า Instructions ระบุบทบาท รูปแบบภาษา และวิธีตอบเมื่อผู้ใช้ถามเรื่องที่อยู่นอกขอบเขตครบแล้ว

### Checkpoint

Instructions ระบุบทบาท รูปแบบการตอบ และขอบเขตงานครบหรือยัง

## Practice 2: ทดสอบบทบาทและขอบเขตครั้งแรก

**Primary target:** ใช้ Test panel พิสูจน์ว่า Agent รู้หน้าที่และปฏิเสธคำขอที่ไม่เกี่ยวข้องได้

1. เปิด conversation ใหม่ใน **Test your agent** แล้วถาม:

   ```text
   คุณช่วยอะไรได้บ้าง
   ```

2. ถามอีกครั้ง:

   ```text
   ช่วยวางแผนท่องเที่ยวต่างประเทศให้หน่อย
   ```

3. ตรวจว่าคำตอบแรกอธิบายบทบาท Agent ฝึก และคำตอบที่สองบอกขอบเขตงานแทนการช่วยวางแผนท่องเที่ยว ในตอนนี้ยังไม่ทดสอบคำตอบจากคู่มือ เพราะเรายังไม่ได้เพิ่ม Knowledge

### Checkpoint

ลองเล่าให้พลฟังว่า Agent ตอบอย่างไร: เขาบอกบทบาทของตนเองและกลับมาที่ขอบเขตงานเมื่อได้รับคำขอที่ไม่เกี่ยวข้องหรือไม่

## Summary

เราเขียนบัตรหน้าที่และทดสอบขอบเขตพื้นฐานแล้วครับ ต่อไปพลจะพาเพิ่มเงื่อนไขการใช้ Knowledge พร้อมคู่มือฝึก เพื่อให้ Agent มีข้อมูลอ้างอิงและให้เราตรวจคำตอบกับข้อความในคู่มือได้

[ก่อนหน้า](./01-create-assistant.md) · [ถัดไป: เพิ่ม Knowledge](./03-add-knowledge.md) · [สารบัญ](../index.md)
