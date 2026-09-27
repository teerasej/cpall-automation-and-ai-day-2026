import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'

export default withMermaid(
  defineConfig({
    lang: 'th-TH',
    title: 'Copilot Studio Day 2',
    description: 'แบบฝึกหัด Microsoft Copilot Studio สำหรับผู้เริ่มต้น',
    base: '/cpall-automation-and-ai-day-2026/',
    cleanUrls: true,
    lastUpdated: true,
    ignoreDeadLinks: [/^\/downloads\//],
    head: [
      ['meta', { name: 'theme-color', content: '#17324d' }],
      ['meta', { name: 'color-scheme', content: 'light dark' }]
    ],
    themeConfig: {
      siteTitle: 'Copilot Studio Day 2',
      nav: [
        { text: 'หน้าแรก', link: '/' },
        { text: 'แบบฝึกหัด', link: '/exercises/01-create-assistant' },
        {
          text: 'ไฟล์ประกอบ',
          items: [
            { text: 'ดาวน์โหลดไฟล์ Day 2', link: '/resources/downloads' },
            { text: 'ดาวน์โหลดสไลด์ผู้เรียน (PDF)', link: '/downloads/CPAll-Copilot-Studio-Day-2-final.pdf' },
            { text: 'บทสนทนาฝึก', link: '/resources/sample-conversations' }
          ]
        }
      ],
      sidebar: [
        {
          text: 'Copilot Studio Day 2',
          items: [{ text: 'ภาพรวมการเรียน', link: '/' }]
        },
        {
          text: 'เส้นทางการฝึก',
          collapsed: false,
          items: [
            { text: '1 · Portal และสร้าง Agent', link: '/exercises/01-create-assistant' },
            { text: '2 · Instructions และ Test', link: '/exercises/02-instructions-and-test' },
            { text: '3 · เพิ่ม Knowledge', link: '/exercises/03-add-knowledge' },
            { text: '4 · Topic สั้น ๆ', link: '/exercises/04-request-topic' },
            { text: '5 · Agent Flow และ Test', link: '/exercises/05-agent-flow-and-test' },
            { text: '6 · เตรียมเผยแพร่', link: '/exercises/06-publish-and-share' }
          ]
        },
        {
          text: 'ไฟล์ประกอบ',
          items: [
            { text: 'ดาวน์โหลดไฟล์', link: '/resources/downloads' },
            { text: 'บทสนทนาฝึก', link: '/resources/sample-conversations' }
          ]
        }
      ],
      outline: { level: [2, 4], label: 'ในหน้านี้' },
      docFooter: { prev: 'ก่อนหน้า', next: 'ถัดไป' },
      lastUpdated: {
        text: 'อัปเดตล่าสุด',
        formatOptions: { dateStyle: 'medium', timeStyle: 'short' }
      },
      search: {
        provider: 'local',
        options: {
          translations: {
            button: { buttonText: 'ค้นหา', buttonAriaLabel: 'ค้นหาเอกสาร' },
            modal: {
              noResultsText: 'ไม่พบผลลัพธ์',
              resetButtonTitle: 'ล้างการค้นหา',
              footer: {
                selectText: 'เลือก',
                navigateText: 'เลื่อน',
                closeText: 'ปิด'
              }
            }
          }
        }
      },
      footer: {
        message: 'เนื้อหาจำลองสำหรับการฝึกอบรม Microsoft Copilot Studio',
        copyright: 'All right reserved. Teerasej Jiraphatchandej · <a href="https://www.facebook.com/teerasej" target="_blank" rel="noopener noreferrer">Facebook</a> · <a href="https://www.youtube.com/teerasej" target="_blank" rel="noopener noreferrer">YouTube</a>'
      }
    },
    mermaid: {
      theme: 'base',
      themeVariables: {
        primaryColor: '#edf3f8',
        primaryTextColor: '#17324d',
        primaryBorderColor: '#c83c42',
        lineColor: '#52738f',
        secondaryColor: '#fff4f4',
        tertiaryColor: '#f7f9fb'
      }
    }
  })
)
