// Every media block is a clip from pitch-case-study, in page order: hero ->
// interaction concept (as-is / to-be) -> interaction-task flow (x4 groups)
// -> interaction-patterns (x2 groups) -> use case (device visual + x3 groups).
import heroVideo from '../../assets/pitch-case-study/pitch_0.mp4'
import heroPoster from '../../assets/thumbnails/pitch.jpg'
import asIsVideo from '../../assets/pitch-case-study/pitch_1-1.mp4'
import toBeVideo from '../../assets/pitch-case-study/pitch_1-2.mp4'
import taskFlowThreadVideo from '../../assets/pitch-case-study/pitch_2.mp4'
import dataPreviewVideo from '../../assets/pitch-case-study/pitch_3.mp4'
import newThreadHistoryVideo from '../../assets/pitch-case-study/pitch_4.mp4'
import pinVideo from '../../assets/pitch-case-study/pitch_5.mp4'
import applyPatternsVideo from '../../assets/pitch-case-study/pitch_6.mp4'
import extractPatternsVideo from '../../assets/pitch-case-study/pitch_7.mp4'
import deviceVisualVideo from '../../assets/pitch-case-study/pitch_8.mp4'
import pptAppVideo from '../../assets/pitch-case-study/pitch_9.mp4'
import mobileMessageAppVideo from '../../assets/pitch-case-study/pitch_10.mp4'
import memoAppVideo from '../../assets/pitch-case-study/pitch_11.mp4'
import SectionIntro from './SectionIntro'
import { FullBleedImage, GroupIntro, Media } from './MediaBlocks'
import { useLanguage } from '../../context/LanguageContext'
import { useReveal } from '../../hooks/useReveal'
import { useHeroBlur } from '../../hooks/useHeroBlur'
import reveal from '../../styles/reveal.module.css'
import styles from './LayCaseStudy.module.css'
import mediaStyles from './MediaBlocks.module.css'

// metaColumns are already English in the design, so they're shared across
// languages — everything else is translated per language below.
const META_COLUMNS = [
  [
    { label: 'Assignment', lines: ['Samsung Design Membership', 'M.E.P Exhibition'] },
    { label: 'Teams', lines: ['2 3D Designers', '1 Exhibition Designer', '1 UX Designer'] },
  ],
  [{ label: 'Role', lines: ['UX/UI Design', 'Interaction Design', 'Motion Design', 'Prototyping', 'Presentation'] }],
  [{ label: 'Result', lines: ['Samsung Electronics', 'R&D center Exhibition'] }],
  [{ label: 'Year', lines: ['2023'] }],
]

const CONTENT = {
  ko: {
    overview: {
      subtitle: '사이드 패널로 데이터 작업의 생산성을 높이는\nAI 기반 OS 인터랙션',
      paragraphs: [
        '유용한 디바이스와 AI 서비스가 넘쳐나는 지금, 작업자들은 더 이상 한 도구에 머물지 않고, 그때그때 작업 맥락에 가장 특화된 도구를 선택해 활용합니다. 이는 데이터 작업의 품질을 높여주었지만, 데이터를 서로 다른 디바이스와 서비스로 옮기고, 파일명을 지정하고, 혼잡한 저장소에서 당장 사용할 데이터를 탐색하는 등 부수적인 작업이 늘어나게 되면서 작업자의 전반적인 생산성은 오히려 저하되고 있었습니다.',
        '​',
        'Pitch는 사용자 작업 영역의 맥락을 인식해 데이터와 AI 기능을 먼저 제안하고, 작업 환경의 이탈 없이 활용하도록 도와 생산성을 극대화하는 OS입니다. 심리스한 작업을 위한 인터페이스와 AI 기능을 직관적으로 적용할 수 있는 인터랙션을 설계했습니다.',
      ],
    },
    interactionConcept: {
      heading: ['미리 준비된 데이터와 AI 기능을', '던져(pitch) 한 번에 적용'],
      paragraphs: [
        '프로페셔널 유저 대상으로 복잡한 디자인 작업 과정에 사용된 데이터를 되짚어보는 유저 테스트를 진행하며, 이들은 파일 하나하나를 기억하기보다 작업의 맥락과 흐름으로 기억한다는 인사이트를 얻었습니다. 반면 기존의 OS 클라우드는 개별 데이터가 독립적으로 저장되는 구조적 한계로 작업자들은 번거로운 공유 및 탐색 과정을 거쳐야 하며, 활용에도 어려움을 겪습니다.',
        '​',
        "이러한 문제를 해결하기 위해 Pitch는 AI가 데이터가 저장되고 사용되는 작업 맥락을 파악해 작업 종류와 워크 플로우에 맞춰 자동 분류·정리하고, 적합한 AI 기능을 미리 불러옵니다. 탐색하고 AI 도구를 실행하는 등 기존의 데이터 작업은 준비된 데이터와 기능을 작업 영역에 '던지는 (pitch)' 직관적인 인터랙션 하나로 통합됩니다.",
      ],
      asIsCaption: 'As-is:\n파일 단위의 저장 공간',
      toBeCaption: 'To-be:\n테스크 단위 저장 및 맥락에 맞는 활용을 돕는 사이드 패널',
    },
    taskFlow: {
      heading: ['심리스한 작업 흐름을', '위한 인터랙션'],
      paragraph:
        '데이터 탐색-활용-상세 작업-재작업까지의 과정 중의 반복적인 워크 스페이스 이탈과 pain point를 도출하여 인지적 부하를 줄이고 작업의 맥락과 흐름을 그대로 이어가도록 돕는 인터랙션을 설계했습니다.',
      groups: [
        {
          title: 'Task Flow Thread',
          paragraphs: [
            '저장되고 열렸던 작업 플로우와 맥락에 맞춰 데이터가 하나의 Thread로 정리됩니다. 함께 저장된 유사 포맷의 데이터는 붙어 저장되기도 합니다.',
            '작업 중 데이터 추가가 필요한 시점에는 태스크 플로우 중 적합한 데이터를 추천해 줍니다.',
          ],
        },
        {
          title: 'Data Preview',
          paragraphs: ['데이터를 선택하면 프리뷰 형태로 데이터를 미리 확인해 볼 수 있으며, 바로 작업창에 던져 적용할 수 있습니다.'],
        },
        {
          title: 'New Thread & History',
          paragraphs: ['데이터를 끌어내려 새로운 작업 스레드를 시작할 수 있습니다. 작업 내용과 순서 등을 기반으로 히스토리 제목이 자동 생성됩니다.'],
        },
        {
          title: 'Pin',
          paragraphs: ['중요하거나 나중에 다시 봐야 할 데이터는 하단에 고정해 둘 수 있습니다.'],
        },
      ],
    },
    patterns: {
      heading: ['AI 기능을 직관적으로', '적용하기 위한 인터랙션'],
      paragraph:
        '데이터 성격에 맞는 AI 툴 탐색-대화형 AI에 작업 맥락 설명 및 기능 명령-레퍼런스 데이터의 참조할 부분 설명-작업에 적용하는 과정 중의 반복적인 워크 스페이스 이탈과 대화형 프롬프팅의 부담 등 pain point를 도출하였습니다. 생각의 속도대로 AI를 직접 다루고, 적용 상태를 파악할 수 있는 가장 직관적인 인터랙션을 고민했습니다.',
      groups: [
        {
          title: 'Apply Patterns',
          paragraphs: [
            '작업 맥락에 맞는 AI 기능을 버블 형태로 미리 보여주고, 바로 작업창에 던져 적용할 수 있도록 합니다. + 버튼으로 AI 기능을 추가할 수 있습니다.',
            '적용된 패턴은 데이터 칩 옆에 붙어 표시되며, 칩을 떼어내는 간단한 인터랙션으로 효과를 제거할 수 있습니다.',
          ],
        },
        {
          title: 'Extract Patterns',
          paragraphs: [
            '색감, 음성, 세팅 값 등 참조하고 싶은 데이터가 있다면, Extract 버블을 던져 값을 추출하고, 패턴으로 만듭니다.',
            '추출된 데이터는 패턴화되었다는 것을 시각적으로 보여주기 위해 유기적으로 색이 합쳐지는 듯한 모션을 주었습니다.',
          ],
        },
      ],
    },
    usecase: {
      heading: ['모든 OS', '사용 맥락에 맞춰'],
      paragraph: 'PC뿐만 아니라 모바일, 태블릿까지 각 디바이스와 네이티브 앱의 사용 환경과 맥락에 맞춰 다양한 Use case와 인터페이스를 설계했습니다.',
      groups: [
        {
          title: 'PPT 앱',
          paragraphs: ['메시지 대화를 인식하여 친구가 나온 영상을 바로 추천해줍니다.'],
        },
        {
          title: '모바일 메시지 앱',
          paragraphs: ['메시지 대화를 인식하여 친구가 나온 영상을 바로 추천해줍니다.'],
        },
        {
          title: '메모 앱',
          paragraphs: ['디바이스마다 달라지는 필체를 패턴을 이용해 통일시킬 수 있습니다.'],
        },
      ],
    },
  },
  en: {
    overview: {
      subtitle: 'An AI-driven OS interaction that boosts data-work\nproductivity through a side panel',
      paragraphs: [
        "With useful devices and AI services everywhere today, workers no longer stick to one tool — they pick whichever tool best fits the task at hand. This has raised the quality of data work, but it has also added overhead: moving data between different devices and services, naming files, and searching through cluttered storage for the data you need right now. As a result, overall productivity has actually been declining.",
        '​',
        'Pitch is an OS that recognizes the context of a user\'s work area, proactively suggests data and AI features, and helps them be used without ever leaving the work environment — maximizing productivity. We designed an interface for seamless work and an interaction that lets AI features be applied intuitively.',
      ],
    },
    interactionConcept: {
      heading: ['Prepared data and AI features,', 'applied at once by pitching'],
      paragraphs: [
        "In user tests with professional users, retracing the data used throughout complex design work, we found that they remember work by its context and flow rather than by individual files. Existing OS-level cloud storage, however, stores each piece of data independently — a structural limit that forces workers through tedious sharing and search steps, making the data hard to put to use.",
        '​',
        "To solve this, Pitch has AI recognize the work context in which data is stored and used, automatically sorting and organizing it to match the type of work and workflow, and pre-loading the right AI features. Exploring files and launching AI tools — the usual steps of data work — are unified into one intuitive interaction: 'pitching' prepared data and features into the work area.",
      ],
      asIsCaption: 'As-is:\nFile-unit storage space',
      toBeCaption: 'To-be:\nSide panel for task-based storage and contextual use',
    },
    taskFlow: {
      heading: ['An interaction for', 'seamless work flow'],
      paragraph:
        "We surfaced repeated departures from the workspace and pain points across exploring, using, detailed work, and reworking data, and designed an interaction that lowers cognitive load while keeping the context and flow of the work intact.",
      groups: [
        {
          title: 'Task Flow Thread',
          paragraphs: [
            "Data that was saved and opened is organized into a single Thread based on its work flow and context. Similar-format data saved together may also be grouped side by side.",
            "When more data is needed mid-task, Pitch recommends data that fits the current task flow.",
          ],
        },
        {
          title: 'Data Preview',
          paragraphs: ["Selecting a piece of data shows a preview, which can be thrown straight into the work window to apply it."],
        },
        {
          title: 'New Thread & History',
          paragraphs: ["Dragging data down starts a new work thread. History titles are generated automatically based on the work content and order."],
        },
        {
          title: 'Pin',
          paragraphs: ["Data that's important or needs to be revisited later can be pinned at the bottom."],
        },
      ],
    },
    patterns: {
      heading: ['An interaction for applying', 'AI features intuitively'],
      paragraph:
        "We surfaced pain points across exploring the right AI tool for the data, explaining work context and commanding features to a conversational AI, describing which part of a reference to use, and repeatedly leaving the workspace during conversational prompting. We looked for the most intuitive interaction to handle AI directly at the speed of thought and see its applied state at a glance.",
      groups: [
        {
          title: 'Apply Patterns',
          paragraphs: [
            "AI features that fit the work context are previewed as bubbles that can be thrown straight into the work window to apply. New AI features can be added with the + button.",
            "Applied patterns are shown attached beside the data chip, and can be removed with the simple interaction of detaching the chip.",
          ],
        },
        {
          title: 'Extract Patterns',
          paragraphs: [
            "For data you'd like to reference — color, voice, a setting value — throw an Extract bubble to pull the value out and turn it into a pattern.",
            "Extracted data is given a motion where colors organically merge together, to visually show that it has become a pattern.",
          ],
        },
      ],
    },
    usecase: {
      heading: ['Fitted to the context', 'of every OS'],
      paragraph:
        "We designed a range of use cases and interfaces fitted to the usage environment and context of each device and native app, spanning PC, mobile, and tablet.",
      groups: [
        {
          title: 'PPT app',
          paragraphs: ["Recognizes the message conversation and instantly recommends a video featuring the friend it mentions."],
        },
        {
          title: 'Mobile message app',
          paragraphs: ["Recognizes the message conversation and instantly recommends a video featuring the friend it mentions."],
        },
        {
          title: 'Memo app',
          paragraphs: ["Handwriting that differs across devices can be unified using a pattern."],
        },
      ],
    },
  },
}

function ParagraphGroup({ number, title, paragraphs, video }) {
  return (
    <div className={mediaStyles.captionedGroup}>
      <GroupIntro number={number} title={title}>
        {paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </GroupIntro>
      <FullBleedImage src={video} aspect="1568 / 882" />
    </div>
  )
}

function PitchCaseStudy() {
  const { language } = useLanguage()
  const t = CONTENT[language]
  const heroBlur = useHeroBlur()
  const [asIsRef, asIsInView] = useReveal()
  const [toBeRef, toBeInView] = useReveal()
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
        <Media src={heroVideo} className={styles.heroImg} eager poster={heroPoster} />
      </section>

      <section className={styles.overview}>
        <div
          ref={overviewRef}
          className={`${styles.overviewRow} ${reveal.reveal} ${overviewInView ? reveal.revealIn : ''}`}
        >
          <p className={styles.overviewLabel}>Overview</p>
          <div className={styles.overviewContent}>
            <h1 className={styles.title}>Pitch</h1>
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
          <SectionIntro label="Interaction Concept" headingLines={t.interactionConcept.heading}>
            {t.interactionConcept.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </SectionIntro>

          <div className={styles.sectionMedia}>
            <div className={mediaStyles.compareRow}>
              <div
                ref={asIsRef}
                className={`${mediaStyles.compareItem} ${reveal.reveal} ${asIsInView ? reveal.revealIn : ''}`}
              >
                <p className={mediaStyles.caption} style={{ padding: 0, whiteSpace: 'pre-line' }}>
                  {t.interactionConcept.asIsCaption}
                </p>
                <div style={{ aspectRatio: '784 / 441', overflow: 'hidden', background: '#000' }}>
                  <Media src={asIsVideo} className={mediaStyles.img} />
                </div>
              </div>
              <div
                ref={toBeRef}
                className={`${mediaStyles.compareItem} ${reveal.reveal} ${toBeInView ? reveal.revealIn : ''}`}
                style={{ transitionDelay: '120ms' }}
              >
                <p className={mediaStyles.caption} style={{ padding: 0, whiteSpace: 'pre-line' }}>
                  {t.interactionConcept.toBeCaption}
                </p>
                <div style={{ aspectRatio: '784 / 441', overflow: 'hidden', background: '#000' }}>
                  <Media src={toBeVideo} className={mediaStyles.img} />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <SectionIntro label="Interaction - Task Flow" headingLines={t.taskFlow.heading}>
            <p>{t.taskFlow.paragraph}</p>
          </SectionIntro>

          <div className={styles.sectionMedia}>
            <ParagraphGroup number={1} title={t.taskFlow.groups[0].title} paragraphs={t.taskFlow.groups[0].paragraphs} video={taskFlowThreadVideo} />
            <ParagraphGroup number={2} title={t.taskFlow.groups[1].title} paragraphs={t.taskFlow.groups[1].paragraphs} video={dataPreviewVideo} />
            <ParagraphGroup number={3} title={t.taskFlow.groups[2].title} paragraphs={t.taskFlow.groups[2].paragraphs} video={newThreadHistoryVideo} />
            <ParagraphGroup number={4} title={t.taskFlow.groups[3].title} paragraphs={t.taskFlow.groups[3].paragraphs} video={pinVideo} />
          </div>
        </section>

        <section className={styles.section}>
          <SectionIntro label="Interaction - Patterns" headingLines={t.patterns.heading}>
            <p>{t.patterns.paragraph}</p>
          </SectionIntro>

          <div className={styles.sectionMedia}>
            <ParagraphGroup number={1} title={t.patterns.groups[0].title} paragraphs={t.patterns.groups[0].paragraphs} video={applyPatternsVideo} />
            <ParagraphGroup number={2} title={t.patterns.groups[1].title} paragraphs={t.patterns.groups[1].paragraphs} video={extractPatternsVideo} />
          </div>
        </section>

        <section className={styles.section}>
          <SectionIntro label="Use case" headingLines={t.usecase.heading}>
            <p>{t.usecase.paragraph}</p>
          </SectionIntro>

          <div className={styles.sectionMedia}>
            <FullBleedImage src={deviceVisualVideo} aspect="1568 / 882" />
            <ParagraphGroup number={1} title={t.usecase.groups[0].title} paragraphs={t.usecase.groups[0].paragraphs} video={pptAppVideo} />
            <ParagraphGroup number={2} title={t.usecase.groups[1].title} paragraphs={t.usecase.groups[1].paragraphs} video={mobileMessageAppVideo} />
            <ParagraphGroup number={3} title={t.usecase.groups[2].title} paragraphs={t.usecase.groups[2].paragraphs} video={memoAppVideo} />
          </div>
        </section>
      </div>
    </div>
  )
}

export default PitchCaseStudy
