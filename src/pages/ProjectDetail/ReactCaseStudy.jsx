// Every media block is a clip from react-case-study, in page order: hero ->
// preview -> ui structure 1 -> interaction-comment (x4 sub-clips) -> ui
// structure 2 -> interaction-viewing -> icons. The final "Prototype" block
// is a live embed of the deployed prototype, not a static asset.
import heroVideo from '../../assets/react-case-study/react_0.mp4'
import heroPoster from '../../assets/thumbnails/react.jpg'
import previewVideo from '../../assets/react-case-study/react_1.mp4'
import uiStructure1Video from '../../assets/react-case-study/react_2.mp4'
import commentTextVideo from '../../assets/react-case-study/react_3.mp4'
import commentDrawTrackVoiceVideo from '../../assets/react-case-study/react_4.mp4'
import commentTextVideo2 from '../../assets/react-case-study/react_5.mp4'
import commentDrawTrackVideo from '../../assets/react-case-study/react_6.mp4'
import uiStructure2Video from '../../assets/react-case-study/react_7.mp4'
import interactionViewingVideo from '../../assets/react-case-study/react_8.mp4'
import iconsVideo from '../../assets/react-case-study/react_9.mp4'
import SectionIntro from './SectionIntro'
import { CaptionedImage, FullBleedImage, FullBleedEmbed, Media } from './MediaBlocks'
import { useLanguage } from '../../context/LanguageContext'
import { useReveal } from '../../hooks/useReveal'
import { useHeroBlur } from '../../hooks/useHeroBlur'
import reveal from '../../styles/reveal.module.css'
import styles from './LayCaseStudy.module.css'

// metaColumns are already English in the design, so they're shared across
// languages — everything else is translated per language below.
const META_COLUMNS = [
  [{ label: 'Assignment', lines: ['Samsung Design Membership Intensive Course', '(Personal Project)'] }],
  [{ label: 'Disciplines', lines: ['UX/UI Design', 'Interaction Design', 'Motion Design', 'Prototyping'] }],
  [{ label: 'Result', lines: ['Intensive Course Selected Work'] }],
  [{ label: 'Year', lines: ['2023', '2026 (Redesign )'] }],
]

const CONTENT = {
  ko: {
    overview: {
      subtitle: '보는 경험에서 참여하는 경험으로,\n영상 콘텐츠 플랫폼의 인터랙티브 댓글 & 시청 인터랙션',
      paragraphs: [
        '콘텐츠를 즐기는 방식은 그 자체로 하나의 콘텐츠가 되어가고 있습니다. 댓글이 영상보다 더 큰 인기를 끌기도, 영상을 즐기는 모습 자체가 새로운 콘텐츠가 되기도 하죠. 소비자와 창작자가 서로 영향을 주고받으며 활발한 생태계를 만들어가고 있는 것입니다. 하지만 콘텐츠 플랫폼은 여전히 가만히 보기만 하는 방식에 머물러 있습니다. 시청자들은 더 적극적으로 콘텐츠에 참여하고 소통하고 싶어 하지만, 이를 담아낼 수 있는 환경과 표현 수단은 부족한 상황입니다.',
        '​',
        'React는 영상 콘텐츠를 단순히 시청하는 경험을 넘어, 사용자가 콘텐츠와 직접 소통하고 창작하는 새로운 소비 경험을 제안합니다. 다양한 인터랙티브 댓글과 시청 기능을 통해 소비만으로 콘텐츠의 일부가 되는 특별한 순간을 경험해 보세요!',
      ],
    },
    uiStructure1: {
      heading: ['영상의 동적', '표현 요소'],
      paragraph:
        '영상을 expressive하게 만드는 동적 요소를 영상 내 모든 객체의 위치, 그 객체의 형태, 움직임, 그리고 소리로 정의했습니다. 이 4가지 요소들을 텍스트 기반의 댓글 경험에 접목시켜, 댓글 창작자가 직접 동적 요소를 제어할 수 있는 인터랙티브 기능을 도출했습니다.',
    },
    interactionComment: {
      heading: ['인터랙티브', '댓글 기능'],
      paragraphs: [
        '인터랙티브 댓글 기능은 사용자가 영상을 감상하는 동시에 영상 속 객체와 유기적으로 상호작용하고, 영상과 어울리는 댓글을 창작할 수 있는 co-creation 경험을 제공합니다. 댓글은 이제 화면 하단과 뎁스 안에 머무는 정적인 텍스트가 아닌, 영상과 함께 살아 움직이는 콘텐츠의 일부로 거듭납니다.',
        '​',
        '1. Text: 영상 위 원하는 위치와 시간에 댓글을 자유롭게 배치해요',
        '2. Draw: 콘텐츠에 어울리는 라인을 그려 텍스트 라인으로 변화시켜요',
        '3. Track: 움직이는 물체를 프레스 해 모션을 추적하고 댓글을 매핑시켜요',
        '4. Voice: 목소리 크기에 따라 크기가 변화하는 댓글로 생동감을 더해요',
      ],
    },
    uiStructure2: {
      heading: ['콘텐츠의', '후킹 패턴'],
      paragraph:
        '후킹 하는 콘텐츠는 핵심 정보를 의도적으로 감춰 참여를 유도하고, 비교를 통해 자연스러운 논쟁을 만들며, 팬덤간의 경쟁을 부추기거나, 후반에 반전 요소를 배치해 콘텐츠를 끝까지 시청하도록 합니다. 이 4가지 후킹 패턴을 시청 경험에 접목해, 시청자가 더 적극적으로 참여하고, 체류할 수 있는 인터랙티브 시청 기능을 도출했습니다.',
    },
    interactionViewing: {
      heading: ['인터랙티브', '시청 기능'],
      paragraphs: [
        '인터랙티브 시청 기능은 다양한 인터랙션을 통해 콘텐츠에 직접 참여하고 소통하는 몰입형 경험을 제공합니다. 이를 통해 시청자들에게는 능동적이고 즐거운 시청 경험을, 크리에이터에게는 더 다양한 콘텐츠 기회영역과 시청자의 즉각적인 반응을 이끌어내는 소통 창구를 제공합니다.',
        '​',
        '화면을 긁어 크리에이터가 숨겨놓은 콘텐츠를 발견하는 Scratch, 스마트폰을 기울여 더 마음에 드는 콘텐츠에 투표하는 Tilt, 좋아요를 연달아 눌러 마음을 표현하는 Tap, 화면을 옆으로 뒤집어 반전이나 비하인드 콘텐츠를 시청하는 Flip까지 — 네 가지 인터랙션으로 시청 경험을 확장했습니다.',
      ],
    },
    icons: {
      heading: ['아이콘', '마이크로모션'],
      paragraph:
        '인터랙티브 기능 및 UI에 사용된 모션 시스템에 맞춰 아이콘에도 마이크로 모션을 적용함으로써 Expressive한 브랜드 아이덴티티를 강화합니다.',
    },
    prototype: {
      heading: ['인터랙션', '프로토타입 구현'],
      paragraphs: [
        'Claude code를 활용해 동작하는 인터랙션 프로토타입을 구현하였습니다.',
        '​',
        '직접 사용하며 댓글의 노출 개수, 등장 속도, 유지 시간 등 디테일한 사용성을 개선했습니다.',
      ],
      embedCaption: '아래 웹에서 직접 체험해보세요!',
    },
  },
  en: {
    overview: {
      subtitle:
        'From a viewing experience to an engaging experience — the interactive comments and viewing UX of video content platforms',
      paragraphs: [
        "The way we enjoy content is becoming content in itself. Comments sometimes gain more popularity than the video, and the act of enjoying a video can itself become new content. Consumers and creators are shaping a lively ecosystem by influencing one another. Yet content platforms are still stuck in a purely passive way of watching. Viewers want to participate in and engage with content more actively, but the environment and means of expression to support that are still lacking.",
        '​',
        'React proposes a new way of consuming video content — one that goes beyond simply watching, letting users communicate with and create alongside the content directly. Through a range of interactive comment and viewing features, experience the special moment where simply consuming becomes part of the content itself!',
      ],
    },
    uiStructure1: {
      heading: ['Dynamic elements', 'of video expression'],
      paragraph:
        "I defined the dynamic elements that make a video expressive as four things: the position of every object in the video, that object's shape, its movement, and sound. By grafting these four elements onto the text-based comment experience, I derived interactive features that let comment creators directly control dynamic elements.",
    },
    interactionComment: {
      heading: ['Interactive', 'comment features'],
      paragraphs: [
        'Interactive comment features let users organically interact with objects in the video while watching it, offering a co-creation experience where they can craft comments that fit the video. Comments are no longer static text confined to the bottom of the screen — they become part of content that moves and lives together with the video.',
        '​',
        '1. Text: Freely place a comment at any position and moment on the video',
        '2. Draw: Draw a line that fits the content and turn it into a text line',
        '3. Track: Press a moving object to track its motion and map a comment to it',
        '4. Voice: Add liveliness with a comment that changes size along with your voice volume',
      ],
    },
    uiStructure2: {
      heading: ['Hooking patterns', 'of content'],
      paragraph:
        'Content that hooks viewers deliberately withholds key information to drive participation, sparks natural debate through comparison, stokes competition between fandoms, or places a twist near the end to keep people watching until the finish. By grafting these four hooking patterns onto the viewing experience, I derived interactive viewing features that let viewers participate more actively and stay longer.',
    },
    interactionViewing: {
      heading: ['Interactive', 'viewing features'],
      paragraphs: [
        "Interactive viewing features offer an immersive experience where viewers directly participate in and engage with content through a range of interactions. This gives viewers an active, enjoyable viewing experience, and gives creators a wider range of content opportunities along with a channel for drawing out viewers' immediate reactions.",
        '​',
        "Scratch the screen to reveal content the creator has hidden, tilt your phone to vote for whichever content you like more, tap as many times as you want with Tap to show how much you love it, or flip the screen sideways with Flip to watch twists and behind-the-scenes clips — four interactions that expand the viewing experience.",
      ],
    },
    icons: {
      heading: ['Icon', 'micro-motion'],
      paragraph:
        'We applied micro-motion to icons as well, matching the motion system used across the interactive features and UI, to reinforce an expressive brand identity.',
    },
    prototype: {
      heading: ['Building the', 'interaction prototype'],
      paragraphs: [
        'I built a working interaction prototype using Claude Code.',
        '​',
        'Using it firsthand, I refined detailed usability aspects such as the number of comments shown, their appearance speed, and how long they stay on screen.',
      ],
      embedCaption: 'Try it yourself in the embed below!',
    },
  },
}

function ReactCaseStudy() {
  const { language } = useLanguage()
  const t = CONTENT[language]
  const heroBlur = useHeroBlur()
  const [previewRef, previewInView] = useReveal()
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
            <h1 className={styles.title}>React</h1>
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
        {/* Preview — label + single full-bleed clip, no heading/body copy in the design */}
        <section
          ref={previewRef}
          className={`${styles.onboarding} ${reveal.reveal} ${previewInView ? reveal.revealIn : ''}`}
        >
          <p className={styles.onboardingLabel}>Preview</p>
          <div className={styles.onboardingImgWrap} style={{ aspectRatio: '1581 / 728' }}>
            <Media src={previewVideo} className={styles.onboardingImg} />
          </div>
        </section>

        <section className={styles.section}>
          <SectionIntro label="UI Structure" headingLines={t.uiStructure1.heading}>
            <p>{t.uiStructure1.paragraph}</p>
          </SectionIntro>

          <div className={styles.sectionMedia}>
            <FullBleedImage src={uiStructure1Video} aspect="1568 / 882" />
          </div>
        </section>

        <section className={styles.section}>
          <SectionIntro label="Interaction - Comment" headingLines={t.interactionComment.heading}>
            {t.interactionComment.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </SectionIntro>

          <div className={styles.sectionMedia}>
            <CaptionedImage caption="Text" src={commentTextVideo} aspect="1568 / 882" />
            <CaptionedImage caption="Draw, Track, Voice" src={commentDrawTrackVoiceVideo} aspect="1568 / 1103" />
            <CaptionedImage caption="Text" src={commentTextVideo2} aspect="1568 / 882" />
            <CaptionedImage caption="Draw, Track" src={commentDrawTrackVideo} aspect="1568 / 882" />
          </div>
        </section>

        <section className={styles.section}>
          <SectionIntro label="UI Structure" headingLines={t.uiStructure2.heading}>
            <p>{t.uiStructure2.paragraph}</p>
          </SectionIntro>

          <div className={styles.sectionMedia}>
            <FullBleedImage src={uiStructure2Video} aspect="1568 / 882" />
          </div>
        </section>

        <section className={styles.section}>
          <SectionIntro label="Interaction - Viewing" headingLines={t.interactionViewing.heading}>
            {t.interactionViewing.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </SectionIntro>

          <div className={styles.sectionMedia}>
            <FullBleedImage src={interactionViewingVideo} aspect="1568 / 882" />
          </div>
        </section>

        <section className={styles.section}>
          <SectionIntro label="Icons" headingLines={t.icons.heading}>
            <p>{t.icons.paragraph}</p>
          </SectionIntro>

          <div className={styles.sectionMedia}>
            <FullBleedImage src={iconsVideo} aspect="1568 / 882" />
          </div>
        </section>

        <section className={styles.section}>
          <SectionIntro label="Prototype" headingLines={t.prototype.heading}>
            {t.prototype.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </SectionIntro>

          <div className={styles.sectionMedia}>
            <FullBleedEmbed
              src="https://react-p7gs56a8t-yyoungsuh-9621s-projects.vercel.app/"
              aspect="3136 / 1764"
              title="React prototype"
              caption={t.prototype.embedCaption}
            />
          </div>
        </section>
      </div>
    </div>
  )
}

export default ReactCaseStudy
