# แบบฝึกหัดที่ 1: รู้จัก Portal และสร้าง Agent สาขา

แบบฝึกหัดแรก พลจะพาทุกคนเดินดูพื้นที่ทำงานของ Copilot Studio ก่อนสร้าง Agent สาขาหนึ่งตัวครับ เหมือนเดินดูร้านและเลือกเคาน์เตอร์ให้ถูกก่อนเริ่มงาน ช่วงนี้ยังไม่ต้องทำให้ Agent ตอบเก่ง แค่รู้ว่าเราสร้างเขาไว้ที่ไหน

<img class="concept-illustration" src="/images/day2-front-counter-assistant.png" alt="Agent หน้าร้านที่รู้หน้าที่และขอบเขตของตนเอง">

> **Learner prerequisite:** ใช้บัญชีและ Copilot Studio environment ที่ผู้จัดอบรมเตรียมให้ Exercise นี้ยังไม่ต้อง publish Agent

## Prerequisites

- ใช้ [Copilot Studio](https://copilotstudio.microsoft.com/) ด้วยบัญชีที่เตรียมไว้
- ชื่อเรียกและธุรกิจในแบบฝึกหัดเป็นสถานการณ์สมมติ

## Practice 1: เลือก environment และรู้จักพื้นที่ทำงาน

**Primary target:** ระบุ environment ที่ผู้จัดอบรมเตรียมไว้และหาเมนูที่ต้องใช้ตลอดวันได้

1. เปิด [Microsoft Copilot Studio](https://copilotstudio.microsoft.com/) ด้วยบัญชีฝึก แล้วตรวจชื่อบัญชีและ environment ตามที่วิทยากรแจ้ง

   > **หมายเหตุ:** ผู้เรียนอาจพบหน้าตาใหม่ของ Copilot Studio (new experience) หากพบ ให้ไปที่มุมล่างซ้าย เปิดเมนู **Settings** แล้วเลือก **Open classic experience**

2. มองหา **Agents** และพื้นที่สำหรับสร้าง Agent ใหม่ จากนั้นสำรวจว่าเมื่อเปิด Agent จะพบ **Overview**, **Knowledge**, **Topics**, **Tools/Flows** และ **Test** ที่ใดในหน้าจอของตน
3. จดชื่อ environment ไว้ก่อนเริ่ม ห้ามสร้างหรือสลับ environment เองเพื่อแก้ปัญหาสิทธิ์

### Checkpoint

พลชวนหยุดเช็กก่อนสร้าง Agent: บอกชื่อ environment ที่ใช้และชี้ตำแหน่งพื้นที่สร้าง Agent กับ Test panel ได้หรือยัง

## Practice 2: สร้าง Agent ตั้งต้น

**Primary target:** สร้าง Agent หนึ่งตัวใน environment ที่ถูกต้องเพื่อใช้ต่อเนื่องตลอดวัน

1. ไปที่ **Agents** แล้วเลือกสร้าง Agent ใหม่ หากหน้าจอมีหลายวิธี ให้ใช้เส้นทางตั้งค่ารายละเอียดด้วยตนเองที่วิทยากรชี้ให้ดู
2. ตั้งชื่อโดยใช้คำนำหน้าต่อไปนี้แล้วพิมพ์ชื่อเล่นต่อท้ายเครื่องหมายขีด เช่น `CPAll Store Support Assistant - Noi`:

   ```text
   CPAll Store Support Assistant - [ชื่อเล่น]
   ```

3. กดปุ่ม Create และรอจนเห็นแถบสีเขียวที่ชื่อว่า 'Agent has been provisioned'
4. ในหน้า Overview ของ Agent ที่สร้างใหม่ > หาส่วนที่ชื่อว่า **Details**
5. ให้กดปุ่ม **Edit** เพื่อแก้ไขรายละเอียดเบื้องต้น
6. ใส่คำอธิบายสั้น ๆ ในส่วน **Description**:

   ```text
   Agent ฝึกตอบคำถามคู่มือสาขาและเตรียมคำขอช่วยเหลือจากข้อมูลสมมติในคู่มือฝึก
   ```



### Checkpoint

ลองเปิด Agent ที่เพิ่งสร้างให้พลดู: พบ Agent ของตนเองใน environment ที่ถูกต้อง และเปิด Overview กับ Test panel ได้

> **💡 ทางเลือก:** หากวิทยากรยืนยันว่าหน้าสร้างด้วย natural language ใช้ได้ใน tenant นี้ สามารถบรรยาย Agent ด้วยภาษาธรรมชาติแทนได้ แต่ต้องตรวจชื่อ คำอธิบาย และการตั้งค่าที่ระบบสร้างก่อนใช้ต่อ ไม่ต้องลองทั้งสองวิธี

## Summary

เราได้ Agent ตั้งต้นในพื้นที่ที่ถูกต้องแล้วครับ แบบฝึกหัดถัดไป พลจะพาเขียนบัตรหน้าที่ให้ Agent และลองคุยครั้งแรก

[ถัดไป: Instructions และทดสอบ](./02-instructions-and-test.md) · [กลับสารบัญ](../index.md)
