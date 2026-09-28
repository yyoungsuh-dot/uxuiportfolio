// Every media block is a still/clip from synce_case-study, in page order:
// hero -> Checklist: Onboarding (x1 video) -> Checklist: Icons & Micro
// Interaction (x1 video) -> Home (x1) -> Consult (x1) -> Journal (x1) ->
// Record (x1) -> Dashboard (x1) -> Localization (x2 triple, captioned).
//
// Copy supplied directly by the client (no Figma source for this project).
import heroImage from '../../assets/synce_case-study/synce_0.png'
import onboardingVideo from '../../assets/synce_case-study/synce_1.mp4'
import checklistVideo from '../../assets/synce_case-study/synce_2.mp4'
import homeImg from '../../assets/synce_case-study/synce_3.png'
import consultImg from '../../assets/synce_case-study/synce_4.png'
import journalImg from '../../assets/synce_case-study/synce_5.png'
import recordImg from '../../assets/synce_case-study/synce_6.png'
import dashboardImg from '../../assets/synce_case-study/synce_7.png'
import loc1 from '../../assets/synce_case-study/synce_8-1.png'
import loc2 from '../../assets/synce_case-study/synce_8-2.png'
import loc3 from '../../assets/synce_case-study/synce_9-1.png'
import loc4 from '../../assets/synce_case-study/synce_9-2.png'
import SectionIntro from './SectionIntro'
import { FullBleedImage, Media, TripleRow } from './MediaBlocks'
import { useLanguage } from '../../context/LanguageContext'
import { useReveal } from '../../hooks/useReveal'
import { useHeroBlur } from '../../hooks/useHeroBlur'
import reveal from '../../styles/reveal.module.css'
import styles from './LayCaseStudy.module.css'

// Already English in the design, shared across languages — same convention
// as the other case-study pages' META_COLUMNS.
const META_COLUMNS = [
  [
    { label: 'Assignment', lines: ['Start-up Project'] },
    { label: 'Teams', lines: ['1 PM', '3 Medical Consultants', '1 Backend Developer', '2 Frontend Developers'] },
  ],
  [{ label: 'Role', lines: ['Branding', 'UX/UI Design', 'Prototyping'] }],
  [
    {
      label: 'Result',
      lines: [
        '34% increase in views per active user',
        '183.9% increase in average engagement time per active user',
      ],
    },
  ],
  [{ label: 'Year', lines: ['2025'] }],
]

const CONTENT = {
  ko: {
    overview: {
      subtitle: '병원과 환자를 연결해 성형 수술 후 관리를 돕는 플랫폼',
      paragraphs: [
        '성형은 수술 후 관리가 더 중요함에도 불구하고, 대부분의 병원과 관련 서비스는 수술 전·중 경험에 집중되어 있습니다. 환자들은 관리를 위한 정보 검색에 어려움을 겪고, 심리적 불안감을 느끼며, 잘못된 관리로 부작용을 경험하기도 합니다. 이는 병원의 만족도 저하로도 이어지며, 병원 측 역시 해당 문제를 인식해 수술 후 관리 서비스 확대를 고민하고 있는 상황입니다.',
        '이 지점에서 시장성을 발견하고 병원과 환자를 연결하고, 정보 제공·상담·기록을 제공해 성형 수술 후 전문적이고 지속적인 회복을 돕는 플랫폼을 기획했습니다. 의료진과의 협업을 통해 복잡한 의료 정보를 사용자 친화적으로 전달하는 디자인을 고민했으며, 개발팀과의 협업으로 실제 구현 가능한 UI와 디자인 시스템을 구축했습니다.',
      ],
    },
    onboarding: {
      heading: ['핵심 기능과 이용 방법을', '쉽게 이해할 수 있는 온보딩'],
      paragraphs: [
        '서비스가 제공하는 핵심 기능과 병원 연계를 위한 방법까지 안내해주는 온보딩을 제작했습니다. 쉽고 직관적인 일러스트와 함께 설계하고, 단계를 3단계로 최대한 간소화해 이탈을 방지했습니다.',
      ],
    },
    checklistIcons: {
      heading: ['관리 체크 리스트', '아이콘 & 마이크로 인터랙션'],
      paragraphs: [
        '관리 체크리스트 정보를 명확히 인지하고 브랜드 아이덴티티를 강화하기 위해 아이콘을 제작했습니다. 글자가 지워지며 체크 표시되는 마이크로 인터랙션으로 태스크 완료의 성취와 흥미를 강화했습니다.',
      ],
    },
    home: {
      heading: ['행동 유도 및 정보', '우선 순위 기반 홈 화면'],
      paragraphs: [
        '최우선으로 즉각적인 확인과 행동 유도가 필요한 수술 정보 및 회복 기록을, 그다음으로 수술 정보에 따라 매일 업데이트되는 관리 체크리스트를, 마지막으로 주치의 상담 정보를 배치했습니다.',
      ],
    },
    consult: {
      heading: ['다양한 진입점에서', '주치의 상담 유도'],
      paragraphs: [
        '핵심 비즈니스 모델인 상담 기능 전환율을 높이기 위해 상담이 필요한 시점마다 자연스럽게 유도하는 다양한 진입점을 설계했습니다.',
      ],
    },
    journal: {
      heading: ['변화를 빠르게 훑어볼 수 있는', '원페이지 기록장'],
      paragraphs: [
        '사용자 관찰 결과, 개별 기록보다 변화 과정을 빠르게 훑어보는 행태를 발견했습니다. 이에 따라 페이지 전환 없이 사진을 넘기고 텍스트를 펼치는 카드 형태로 원페이지 레이아웃을 설계했습니다.',
      ],
    },
    record: {
      heading: ['원하는 정보를 손쉽게', '찾을 수 있는 기록하기'],
      paragraphs: [
        '메디컬 자문을 통해 아카이빙한 수술 후 증상을 공통 증상 및 수술 종류별로 분류했고, 증상을 수술별로 손쉽게 찾을 수 있도록 아코디언 UI를 제작했습니다. 매일 증상을 선택하는 번거로움을 덜기 위해 직전에 선택했던 증상을 불러올 수 있도록 설계했습니다.',
      ],
    },
    dashboard: {
      heading: ['정확하고 빠른 답변이 가능한', '의사용 대시보드'],
      paragraphs: [
        '환자 관리부터 상담 답변까지 한 번에 할 수 있는 대시보드를 제작했습니다. 수술 종류를 구분한 태그와 필터를 이용해 직관적으로 상담 내역을 관리할 수 있도록 했고, 환자 정보와 상담 내역, 환자의 기록장까지 충분한 정보를 기반으로 상담 답변을 작성할 수 있도록 설계했습니다. 메디컬 팀원들과 함께 의료법을 검토해 답변 시 의료 활동 제한에 대한 유의사항을 추가했습니다. 환자들이 자주 묻는 질문에 대한 답변 템플릿을 저장해두고, 환자에 맞춰 수정해 사용할 수 있도록 했습니다.',
      ],
    },
    localization: {
      heading: ['다국어 확장을 고려한', '디자인 시스템 설계'],
      paragraphs: [
        '외국인의 한국 성형 열풍과 함께 글로벌 수요가 있을 것이라고 판단하여 다국어 확장을 고려했습니다. 텍스트 길이, 정보 밀도, 가독성 차이 등을 반영한 디자인 시스템과 컴포넌트 Variant 구조를 설계했습니다.',
      ],
      captions: [
        { title: '글자 수 및 길이 조정', desc: '같은 정보 대비 글자가 길어지는 영문은 Minimum Height를 늘려 충분한 정보를 확인할 수 있도록 했습니다.' },
        { title: 'UX Writing 조정', desc: '빠른 인지와 UI 균형을 위해 상대적으로 길이가 긴 영문은 명사형으로, 국문은 동사형 명사로 제작했습니다.' },
        { title: '날짜, 시간 규칙', desc: '영문, 국문 표기법에 따라 날짜 및 시간을 표기했습니다.' },
        { title: '디자인 시스템 제작 및 Variant 지정', desc: '유지보수와 확장성을 위해 언어별 Text Styles와 Variant를 적용했습니다.' },
      ],
    },
  },
  en: {
    overview: {
      subtitle: 'A platform connecting hospitals and patients for post-surgery recovery care',
      paragraphs: [
        'Even though post-surgery care matters more than the surgery itself in cosmetic procedures, most hospitals and related services focus on the pre- and mid-surgery experience. Patients struggle to find information for their recovery, feel anxious, and sometimes experience side effects from improper care. This also lowers hospital satisfaction, and hospitals themselves are aware of the problem and are considering expanding their post-surgery care services.',
        'Seeing a market opportunity here, I planned a platform that connects hospitals and patients, providing information, consultation, and record-keeping to support a professional, continuous recovery after cosmetic surgery. I worked with medical staff to design a way of delivering complex medical information in a user-friendly way, and collaborated with the development team to build a UI and design system that could actually be implemented.',
      ],
    },
    onboarding: {
      heading: ['Onboarding that makes', 'core features easy to grasp'],
      paragraphs: [
        "I designed an onboarding flow that walks users through the service's core features and how to connect with a hospital, paired with simple, intuitive illustrations, and kept it to just three steps to minimize drop-off.",
      ],
    },
    checklistIcons: {
      heading: ['Care checklist icons', 'and micro-interactions'],
      paragraphs: [
        "I designed icons to make care-checklist items easy to recognize at a glance and to reinforce the brand identity. A micro-interaction where the text strikes through as it's checked off adds a sense of accomplishment and makes completing tasks more engaging.",
      ],
    },
    home: {
      heading: ['A home screen prioritized', 'by action and information'],
      paragraphs: [
        'At the top, I placed surgery information and recovery records that need to be checked and acted on immediately; below that, a care checklist that updates daily based on the surgery details; and at the bottom, information for consulting with the attending physician.',
      ],
    },
    consult: {
      heading: ['Multiple entry points that', "lead into a physician's consultation"],
      paragraphs: [
        'To raise the conversion rate into consultations — the core business model — I designed a range of entry points that naturally prompt users toward a consultation whenever one is needed.',
      ],
    },
    journal: {
      heading: ['A one-page journal for', 'scanning changes at a glance'],
      paragraphs: [
        'User observation showed that people tend to quickly scan through the process of change rather than look at individual entries. So I designed a one-page, card-based layout where photos can be swiped through and text expanded, without switching pages.',
      ],
    },
    record: {
      heading: ['Record-keeping that makes', 'finding the right information easy'],
      paragraphs: [
        'With medical advisory input, I archived post-surgery symptoms and organized them by common symptoms and by surgery type, then built an accordion UI so symptoms can easily be found by surgery. To reduce the hassle of selecting symptoms every day, I designed it so the previously selected symptoms can be recalled.',
      ],
    },
    dashboard: {
      heading: ['A physician dashboard for', 'fast, accurate responses'],
      paragraphs: [
        "I designed a dashboard that handles everything from patient management to answering consultations in one place. Tags and filters by surgery type let physicians manage consultation records intuitively, and I designed it so a response can be written with enough context — patient information, consultation history, and even the patient's journal — all in view. Working with the medical team, I reviewed relevant medical regulations and added notices about restrictions on medical activity when writing a response. I also let physicians save response templates for frequently asked questions, which they can edit to fit each patient.",
      ],
    },
    localization: {
      heading: ['A design system built', 'for multilingual expansion'],
      paragraphs: [
        'Given the surge of interest from foreign patients in Korean cosmetic surgery, I judged there would be global demand and designed with multilingual expansion in mind. I built a design system and component variant structure that accounts for differences in text length, information density, and readability.',
      ],
      captions: [
        { title: 'Character count & length', desc: 'Since English text runs longer than Korean for the same information, I increased the minimum height so the full content stays legible.' },
        { title: 'UX writing adjustments', desc: 'For quick recognition and UI balance, the relatively longer English copy uses noun phrases, while the Korean uses verb-based nouns.' },
        { title: 'Date & time conventions', desc: "Dates and times follow each language's own notation conventions, in English and Korean." },
        { title: 'Design system & variants', desc: 'For maintainability and scalability, I applied language-specific text styles and variants.' },
      ],
    },
  },
}

function captionNode({ title, desc }) {
  return (
    <>
      <strong>{title}</strong>
      <br />
      {desc}
    </>
  )
}

function SynceCaseStudy() {
  const { language } = useLanguage()
  const t = CONTENT[language]
  const heroBlur = useHeroBlur()
  const [overviewRef, overviewInView] = useReveal()
  const [metaRef, metaInView] = useReveal()
  const langVars =
    language === 'en'
      ? {
          '--detail-lang-font': "'Space Grotesk', sans-serif",
          '--detail-lang-weight': 400,
          '--detail-lang-lh': 1.4,
          '--detail-lang-ls-24': '-0.07em',
          '--detail-lang-ls-16': '-0.06em',
        }
      : {}

  return (
    <div style={langVars}>
      <section className={styles.hero} style={{ filter: `blur(${heroBlur}px)` }}>
        <Media src={heroImage} className={styles.heroImg} eager />
      </section>

      <section className={styles.overview}>
        <div
          ref={overviewRef}
          className={`${styles.overviewRow} ${reveal.reveal} ${overviewInView ? reveal.revealIn : ''}`}
        >
          <p className={styles.overviewLabel}>Overview</p>
          <div className={styles.overviewContent}>
            <h1 className={styles.title}>Synce</h1>
            <div className={styles.description}>
              <p className={styles.subtitle}>{t.overview.subtitle}</p>
              <div className={styles.paragraphs}>
                {t.overview.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div ref={metaRef} className={styles.metaRow}>
          {META_COLUMNS.map((column, i) => (
            <div
              key={column[0].label}
              className={`${styles.metaColumn} ${reveal.reveal} ${metaInView ? reveal.revealIn : ''}`}
              style={{ transitionDelay: `${120 + i * 150}ms` }}
            >
              {column.map((item) => (
                <div key={item.label} className={styles.metaItem}>
                  <p className={styles.metaLabel}>{item.label}</p>
                  <div className={styles.metaValue}>
                    {item.lines.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      <div className={styles.divider}>
        <div className={styles.dividerLine} />
      </div>

      <div className={styles.content}>
        <section className={styles.section}>
          <SectionIntro label="Checklist" headingLines={t.onboarding.heading}>
            {t.onboarding.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </SectionIntro>

          <div className={styles.sectionMedia}>
            <FullBleedImage src={onboardingVideo} aspect="1568 / 882" />
          </div>
        </section>

        <section className={styles.section}>
          <SectionIntro label="Checklist" headingLines={t.checklistIcons.heading}>
            {t.checklistIcons.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </SectionIntro>

          <div className={styles.sectionMedia}>
            <FullBleedImage src={checklistVideo} aspect="1568 / 882" />
          </div>
        </section>

        <section className={styles.section}>
          <SectionIntro label="Home" headingLines={t.home.heading}>
            {t.home.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </SectionIntro>

          <div className={styles.sectionMedia}>
            <FullBleedImage src={homeImg} aspect="1568 / 1100" />
          </div>
        </section>

        <section className={styles.section}>
          <SectionIntro label="Consult" headingLines={t.consult.heading}>
            {t.consult.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </SectionIntro>

          <div className={styles.sectionMedia}>
            <FullBleedImage src={consultImg} aspect="1568 / 882" />
          </div>
        </section>

        <section className={styles.section}>
          <SectionIntro label="Journal" headingLines={t.journal.heading}>
            {t.journal.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </SectionIntro>

          <div className={styles.sectionMedia}>
            <FullBleedImage src={journalImg} aspect="1568 / 1100" />
          </div>
        </section>

        <section className={styles.section}>
          <SectionIntro label="Record" headingLines={t.record.heading}>
            {t.record.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </SectionIntro>

          <div className={styles.sectionMedia}>
            <FullBleedImage src={recordImg} aspect="1568 / 882" />
          </div>
        </section>

        <section className={styles.section}>
          <SectionIntro label="Dashboard" headingLines={t.dashboard.heading}>
            {t.dashboard.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </SectionIntro>

          <div className={styles.sectionMedia}>
            <FullBleedImage src={dashboardImg} aspect="1568 / 980" />
          </div>
        </section>

        <section className={styles.section}>
          <SectionIntro label="Localization" headingLines={t.localization.heading}>
            {t.localization.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </SectionIntro>

          <div className={styles.sectionMedia}>
            <TripleRow
              aspect="784 / 441"
              items={[
                { src: loc1, caption: captionNode(t.localization.captions[0]) },
                { src: loc2, caption: captionNode(t.localization.captions[1]) },
              ]}
            />
            <TripleRow
              aspect="784 / 441"
              items={[
                { src: loc3, caption: captionNode(t.localization.captions[2]) },
                { src: loc4, caption: captionNode(t.localization.captions[3]) },
              ]}
            />
          </div>
        </section>
      </div>
    </div>
  )
}

export default SynceCaseStudy
