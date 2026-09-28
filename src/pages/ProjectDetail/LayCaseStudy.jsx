import dashboard1 from '../../assets/lay-case-study/dashboard-1.png'
import dashboard2 from '../../assets/lay-case-study/dashboard-2.png'
// Every other section media is a clip from the shoot, in page order:
// hero -> onboarding -> UI structure -> space mapping (x3) -> adaptability (x3)
// -> interaction (x3) -> selection gestures (x3) -> usecase (x4). Dashboard
// stays a still since it's a composited screenshot, not a filmed shot.
import heroVideo from '../../assets/lay-case-study/lay_0.mp4'
import heroPoster from '../../assets/thumbnails/lay.jpg'
import onboardingVideo from '../../assets/lay-case-study/lay_1.mp4'
import uiStructureVideo from '../../assets/lay-case-study/lay_2.mp4'
import spaceMapping1 from '../../assets/lay-case-study/lay_3-1.mp4'
import spaceMapping2 from '../../assets/lay-case-study/lay_3-2.mp4'
import spaceMapping3 from '../../assets/lay-case-study/lay_3-3.mp4'
import adaptability1 from '../../assets/lay-case-study/lay_4-1.mp4'
import adaptability2 from '../../assets/lay-case-study/lay_4-2.mp4'
import adaptability3 from '../../assets/lay-case-study/lay_4-3.mp4'
import interaction1 from '../../assets/lay-case-study/lay_5-1.mp4'
import interaction2 from '../../assets/lay-case-study/lay_5-2.mp4'
import interaction3 from '../../assets/lay-case-study/lay_5-3.mp4'
import selectionGestures1 from '../../assets/lay-case-study/lay_6-1.mp4'
import selectionGestures2 from '../../assets/lay-case-study/lay_6-2.mp4'
import selectionGestures3 from '../../assets/lay-case-study/lay_6-3.mp4'
import usecaseEnvironment from '../../assets/lay-case-study/lay_7.mp4'
import usecaseObject from '../../assets/lay-case-study/lay_8.mp4'
import usecaseSelection from '../../assets/lay-case-study/lay_9.mp4'
import usecaseSelection2 from '../../assets/lay-case-study/lay_10.mp4'
import SectionIntro from './SectionIntro'
import { CaptionedImage, FullBleedImage, Media, TripleRow } from './MediaBlocks'
import { useLanguage } from '../../context/LanguageContext'
import { useReveal } from '../../hooks/useReveal'
import { useHeroBlur } from '../../hooks/useHeroBlur'
import reveal from '../../styles/reveal.module.css'
import styles from './LayCaseStudy.module.css'

// metaColumns are already English in the design (labels + values), so they're
// shared across languages. Everything else — subtitle, body copy, headings,
// usecase captions — is translated per language below.
const META_COLUMNS = [
  [
    { label: 'Assignment', lines: ['Side Project'] },
    { label: 'Teams', lines: ['3 Industrial Designers'] },
  ],
  [{ label: 'Role', lines: ['UX/UI', 'Interaction Design', 'Motion Design', 'Prototyping'] }],
  [
    {
      label: 'Result',
      lines: ['IDEA design awards fianalist', 'Behance pd curated', 'Keyshot curated', 'Yanko design curated'],
    },
  ],
  [{ label: 'Year', lines: ['2024'] }],
]

const USECASE_MEDIA = [usecaseEnvironment, usecaseObject, usecaseSelection, usecaseSelection2]

const CONTENT = {
  ko: {
    overview: {
      subtitle: '물리-디지털 작업 환경을 연결하는 AI 프로젝션 인터랙션',
      paragraphs: [
        '언어가 다른 친구와 대화 중 스마트폰으로 번역기를 켜거나, 책을 읽던 중 모르는 단어를 노트북에서 다시 타이핑해 검색한 경험이 있을 것입니다. 이렇듯 일상의 편리한 기능들은 대부분 디지털에 한정되어 있어, 하던 행동을 중단하고 스크린을 열어야 하는 번거로운 단절이 발생합니다. 이러한 간극은 작업을 번거롭게 만들 뿐만 아니라 몰입을 방해하며, 스크린 밖에서만 얻을 수 있는 창의성을 놓치게 만듭니다.',
        '​',
        'Lay는 물리적 작업 환경 및 사물을 인식하여 AI 기능을 직접 투사하고 조작하는 프로젝션으로, 디지털을 오갈 필요 없이 심리스한 오프라인 작업을 가능하게 합니다. 물리 환경에 AI 레이어가 자연스럽게 융합되면서도 명확하게 인지하고 조작할 수 있는 인터랙션 패턴을 설계했습니다.',
      ],
    },
    usecaseCaptions: [
      'Environment Control- 대화 중 실시간 번역',
      'Object Control- 책 내용 전체 요약',
      'Selection Control- (Image) 드로잉 중 실시간 렌더링 / (Text) 모르는 단어 검색',
      null,
    ],
    uiStructure: {
      heading: ['물리 환경과', '디지털을 잇는 레이어'],
      paragraph:
        '작업 흐름을 끊지 않고 물리 환경에 직접 사용 맥락에 맞는 AI 기능을 투사하여 심리스한 오프라인 작업이 가능한 빔 프로젝터 인터페이스를 설계했습니다. 사용자가 공간을 인식하는 범위를 고려하여 레이어 UI 구조를 정리했습니다.',
      list: [
        'Environment- 상단 고정 컴포넌트로 환경 전반에서 일어나는 지속적인 테스크에 빠르게 접근할 수 있게 합니다.',
        'Object -LiDAR 센서를 통해 사물을 인지하며, 해당 사물에 맞는 테스크를 추천 및 실행하도록 합니다.',
        'Selection- 제스처를 통해 사물 내 구체적인 영역을 선택하고, 그에 맞는 테스크를 추천 및 실행하도록 합니다.',
      ],
    },
    adaptability: {
      heading: ['사용 환경에 맞춰', '최적화되는 UI'],
      paragraphs: [
        '굴곡에 맞춰 자동으로 UI를 왜곡 없이 보정하는 Auto keystone과 밝기 및 광원 방향을 실시간으로 반영하는 환경 적응형 비주얼 시스템을 통해 시인성과 환경과의 일체감을 극대화했습니다.',
        '​',
        '또한 사용자가 직접 환경에 맞춰 텍스트 및 패널의 사이즈를 자유롭게 조절할 수 있도록 설계했습니다.',
      ],
    },
    interaction: {
      heading: ['목적에 맞게', '변화하는 UI'],
      paragraphs: [
        'Object와 Selection 패널은 대상을 명확하게 인지할 수 있도록 말풍선 형태로 디자인했습니다. 기본 상태에서는 어시스턴트만을, 확장 시에는 물체 및 선택 영역에 따른 기능만을 선별적으로 노출하며, 기능 실행 시에는 콘텐츠에 맞춰 확장되도록 설계했습니다.',
        '​',
        'AI 인식과 생성 시에는 부드러운 그라디언트와 모션을 통해 작업 중임을 명확하게 인지할 수 있도록 합니다.',
      ],
    },
    selectionGestures: {
      heading: ['물리 공간과 구분되는', '제스처로 선택'],
      paragraphs: [
        '물리 공간에서의 태스크와 중복되지 않도록 제스처를 통해 Selection 기능을 활성화하도록 했습니다.',
        '​',
        '텍스트는 Drag 제스처로, 이미지는 주변을 자유롭게 그리는 Free-form 제스처를 통해 선택합니다. 또한 입체적인 영역을 선택할 때는 Free-form 제스처와 실제 높이만큼 손을 들어 올리는 Z축 인터랙션을 결합해, 콘텐츠 특성에 맞는 직관적인 선택 방식을 설계했습니다.',
      ],
    },
    usecase: {
      heading: ['물리 환경의 창의적 가치를', '극대화하는 레이어'],
      paragraphs: [
        'Lay는 사람 간의 대화, 종이를 넘겨야하는 책, 손으로 그리는 그림처럼 물리 환경에서 발휘할 수 있는 창의성과 생산성을 극대화하고, 작업에 더욱 집중할 수 있도록 돕습니다. 뿐만 아니라 기존에 디지털 환경에서만 쌓이던 데이터는 Lay를 통해 기록되고 학습된 물리 환경에서의 데이터와 함께 더욱 정확한 학습과 폭넓은 활용이 가능합니다.',
      ],
    },
    dashboard: {
      heading: ['디지털로 확장되는', '데이터'],
      paragraph:
        '물리 공간에서 수집된 데이터를 한눈에 파악하고, 이를 기반으로 더 구체적인 작업으로 확장할 수 있도록 직관적인 대시보드를 설계했습니다. Task별로 분류된 데이터를 직관적으로 확인하고, 온오프라인 데이터를 통합 학습한 챗봇을 통해 AI 기능을 사용할 수 있습니다. 또한 물리 공간에서 선택한 텍스트와 이미지를 pc쪽으로 드래그하여 복사할 수 있어 심리스한 작업이 가능합니다.',
    },
  },
  en: {
    overview: {
      subtitle: 'An AI projection interaction connecting physical and digital workspaces',
      paragraphs: [
        "You may have experienced turning on a translator on your smartphone while talking to a friend who speaks a different language, or retyping an unfamiliar word on your laptop while reading a book to look it up. Most convenient everyday functions like these are limited to digital devices, causing inconvenient interruptions where you have to stop what you're doing and open a screen. This gap not only makes the workflow more cumbersome but also disrupts immersion, causing us to miss out on the creativity that can only be found beyond the screen.",
        '​',
        "Lay is a projector that recognizes physical environments and objects to directly project and manipulate AI functions, enabling seamless offline work without switching between digital devices. I designed interaction patterns where physical environments and digital layers naturally merge while remaining clearly perceivable and controllable.",
      ],
    },
    usecaseCaptions: [
      'Environment Control — real-time translation during conversation',
      'Object Control — summarizing an entire book',
      'Selection Control — (Image) real-time rendering while drawing / (Text) looking up an unfamiliar word',
      null,
    ],
    uiStructure: {
      heading: ['A layer connecting', 'physical and digital'],
      paragraph:
        "I designed a beam-projector interface that projects context-aware AI features directly onto the physical environment without breaking the user's workflow, enabling seamless offline work. The layered UI structure was organized around how far a user can perceive their surrounding space.",
      list: [
        'Environment — a component fixed at the top for quick access to ongoing tasks across the whole environment.',
        'Object — recognizes objects via a LiDAR sensor and recommends and runs tasks suited to that object.',
        'Selection — lets you select a specific area within an object using gestures, then recommends and runs a matching task.',
      ],
    },
    adaptability: {
      heading: ['A UI optimized', 'for its environment'],
      paragraphs: [
        'Auto keystone automatically corrects the UI for surface curvature without distortion, and an environment-adaptive visual system reflects ambient brightness and light direction in real time — together maximizing legibility and a sense of belonging to the space.',
        '​',
        'Users can also freely resize text and panels themselves to fit their environment.',
      ],
    },
    interaction: {
      heading: ['A UI that adapts', 'to its purpose'],
      paragraphs: [
        'The Object and Selection panels are designed as speech-bubble shapes so the target is always clear. In its default state, only the assistant is shown; on expansion, it selectively surfaces only the functions relevant to the object or selected area; and when a function runs, the panel expands to fit its content.',
        '​',
        'During AI recognition and generation, a soft gradient and motion clearly signal that something is in progress.',
      ],
    },
    selectionGestures: {
      heading: ['Selecting with gestures', 'distinct from physical space'],
      paragraphs: [
        'Selection is activated through a dedicated gesture so it never overlaps with tasks already happening in physical space.',
        '​',
        'Text is selected with a drag gesture, and images with a free-form gesture that traces freely around them. For selecting a three-dimensional area, I combined the free-form gesture with a Z-axis interaction — lifting your hand to the object\'s actual height — designing an intuitive selection method suited to each type of content.',
      ],
    },
    usecase: {
      heading: ['A layer that maximizes', 'the creative value of physical space'],
      paragraphs: [
        'Lay maximizes the creativity and productivity you can only find in physical settings — a conversation between people, a book you flip through page by page, a drawing made by hand — and helps you stay more focused on the work itself.',
        '​',
        'Beyond that, data that used to accumulate only in digital environments is now recorded through Lay and combined with data learned from the physical environment, enabling more accurate learning and broader use.',
      ],
    },
    dashboard: {
      heading: ['Data that extends', 'into the digital'],
      paragraph:
        'I designed an intuitive dashboard for viewing data collected from physical space at a glance and extending it into more specific tasks. You can browse data organized by task, and use AI features through a chatbot trained on combined online and offline data. Text and images selected in physical space can also be dragged straight onto your PC, making the workflow completely seamless.',
    },
  },
}

function LayCaseStudy() {
  const { language } = useLanguage()
  const t = CONTENT[language]
  const heroBlur = useHeroBlur()
  const usecases = USECASE_MEDIA.map((src, index) => ({ src, caption: t.usecaseCaptions[index] }))
  const [onboardingRef, onboardingInView] = useReveal()
  const [overviewRef, overviewInView] = useReveal()
  const [metaRef, metaInView] = useReveal()
  // English copy runs on Space Grotesk (regular weight everywhere), with
  // tighter tracking than the Korean/Pretendard defaults: -7% at 24px sizes,
  // -6% at 16px sizes, and a uniform 140% line-height throughout.
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
        <Media src={heroVideo} className={styles.heroImg} eager poster={heroPoster} />
      </section>

      <section className={styles.overview}>
        <div
          ref={overviewRef}
          className={`${styles.overviewRow} ${reveal.reveal} ${overviewInView ? reveal.revealIn : ''}`}
        >
          <p className={styles.overviewLabel}>Overview</p>
          <div className={styles.overviewContent}>
            <h1 className={styles.title}>Lay</h1>
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
        {/* Onboarding — label + single full-bleed image, no heading/body copy in the design */}
        <section
          ref={onboardingRef}
          className={`${styles.onboarding} ${reveal.reveal} ${onboardingInView ? reveal.revealIn : ''}`}
        >
          <p className={styles.onboardingLabel}>Onboarding</p>
          <div className={styles.onboardingImgWrap} style={{ aspectRatio: '1814 / 1096' }}>
            <Media src={onboardingVideo} className={styles.onboardingImg} />
          </div>
        </section>

        <section className={styles.section}>
          <SectionIntro label="UI Structure" headingLines={t.uiStructure.heading}>
            <p>{t.uiStructure.paragraph}</p>
            <p>​</p>
            {t.uiStructure.list.map((line, i) => (
              <p key={line}>
                {i + 1}. {line}
              </p>
            ))}
          </SectionIntro>

          <div className={styles.sectionMedia}>
            <FullBleedImage src={uiStructureVideo} aspect="1568 / 882" />

            <div className={styles.subRow}>
              <p className={styles.subRowLabel}>Space Mapping</p>
              <TripleRow
                bare
                items={[{ src: spaceMapping1 }, { src: spaceMapping2 }, { src: spaceMapping3 }]}
              />
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <SectionIntro label="Adaptability" headingLines={t.adaptability.heading}>
            {t.adaptability.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </SectionIntro>

          <div className={styles.sectionMedia}>
            <TripleRow items={[{ src: adaptability1 }, { src: adaptability2 }, { src: adaptability3 }]} />
          </div>
        </section>

        <section className={styles.section}>
          <SectionIntro label="Interaction" headingLines={t.interaction.heading}>
            {t.interaction.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </SectionIntro>

          <div className={styles.sectionMedia}>
            <TripleRow items={[{ src: interaction1 }, { src: interaction2 }, { src: interaction3 }]} />
          </div>
        </section>

        <section className={styles.section}>
          <SectionIntro label="Selection Gestures" headingLines={t.selectionGestures.heading}>
            {t.selectionGestures.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </SectionIntro>

          <div className={styles.sectionMedia}>
            <TripleRow
              aspect="512 / 700"
              items={[{ src: selectionGestures1 }, { src: selectionGestures2 }, { src: selectionGestures3 }]}
            />
          </div>
        </section>

        <section className={styles.section}>
          <SectionIntro label="Usecase" headingLines={t.usecase.heading} dim>
            {t.usecase.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </SectionIntro>

          <div className={styles.sectionMedia}>
            {usecases.map((item) => (
              <CaptionedImage key={item.src} caption={item.caption} src={item.src} aspect="1568 / 882" />
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <SectionIntro label="Dashboard" headingLines={t.dashboard.heading}>
            <p>{t.dashboard.paragraph}</p>
          </SectionIntro>

          <div className={styles.sectionMedia}>
            <FullBleedImage src={dashboard1} aspect="3136 / 1764" />
            <FullBleedImage src={dashboard2} aspect="3136 / 1764" />
          </div>
        </section>
      </div>
    </div>
  )
}

export default LayCaseStudy
