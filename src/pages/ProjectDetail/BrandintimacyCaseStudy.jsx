// Every media block is a still/clip from brandintimacy_case-study, in page
// order: hero -> Visual Concept (x3 triple + x1 strip) -> Prompt (x3 triple)
// -> Key Visual (x3 triple + x3 triple) -> Home (x1) -> Industries &
// Industries Detail (x1) -> Brand Detail (x1) -> SNS (x3 triple) -> Style
// Guide (x1) -> Video (x1 YouTube embed).
//
// Copy supplied directly by the client (no Figma source for this project).
import heroVideo from '../../assets/brandintimacy_case-study/bis_0.mp4'
import heroPoster from '../../assets/thumbnails/brandintimacy.jpg'
import concept1 from '../../assets/brandintimacy_case-study/bis_1-1.png'
import concept2 from '../../assets/brandintimacy_case-study/bis_1-2.png'
import concept3 from '../../assets/brandintimacy_case-study/bis_1-3.png'
import conceptStrip from '../../assets/brandintimacy_case-study/bis_2.png'
import prompt1 from '../../assets/brandintimacy_case-study/bis_3-1.png'
import prompt2 from '../../assets/brandintimacy_case-study/bis_3-2.png'
import prompt3 from '../../assets/brandintimacy_case-study/bis_3-3.png'
import keyVisual1 from '../../assets/brandintimacy_case-study/bis_4-1.png'
import keyVisual2 from '../../assets/brandintimacy_case-study/bis_4-2.png'
import keyVisual3 from '../../assets/brandintimacy_case-study/bis_4-3.png'
import keyVisual4 from '../../assets/brandintimacy_case-study/bis_5-1.png'
import keyVisual5 from '../../assets/brandintimacy_case-study/bis_5-2.png'
import keyVisual6 from '../../assets/brandintimacy_case-study/bis_5-3.png'
import homeImg from '../../assets/brandintimacy_case-study/bis_6.png'
import industriesImg from '../../assets/brandintimacy_case-study/bis_7.png'
import brandDetailImg from '../../assets/brandintimacy_case-study/bis_8.png'
import sns1 from '../../assets/brandintimacy_case-study/bis_9-1.png'
import sns2 from '../../assets/brandintimacy_case-study/bis_9-2.png'
import sns3 from '../../assets/brandintimacy_case-study/bis_9-3.png'
import styleGuideImg from '../../assets/brandintimacy_case-study/bis_10.png'
import SectionIntro from './SectionIntro'
import { FullBleedEmbed, FullBleedImage, Media, TripleRow } from './MediaBlocks'
import { useLanguage } from '../../context/LanguageContext'
import { useReveal } from '../../hooks/useReveal'
import { useHeroBlur } from '../../hooks/useHeroBlur'
import reveal from '../../styles/reveal.module.css'
import styles from './LayCaseStudy.module.css'
import introStyles from './SectionIntro.module.css'
import mediaStyles from './MediaBlocks.module.css'

// Already English in the design, shared across languages — same convention
// as the other case-study pages' META_COLUMNS.
const META_COLUMNS = [
  [
    { label: 'Assignment', lines: ['MBLM (New York design agency) hands-on project'] },
    { label: 'Teams', lines: ['2 Designers', '1 Brand Strategist', '1 Web Developer'] },
  ],
  [{ label: 'Role', lines: ['AI Visual Design', 'UX/UI Design', 'Prototyping', 'Video'] }],
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
      subtitle: 'AI 기반 글로벌 브랜드 스터디 웹 디자인',
      paragraphs: [
        '뉴욕 브랜딩 에이전시 MBLM의 인터널 프로젝트로, AI 기반 분석을 통해 22개 산업군과 전 세계 475개 브랜드를 평가한 스터디 리포트 웹사이트입니다.',
        'AI 이미지/영상 생성 기반 콘텐츠부터 모션 인터랙션까지, 다양한 산업군과 데이터를 효과적으로 전달하기 위한 웹을 제작했습니다.',
      ],
    },
    visualConcept: {
      heading: ['디자인 원칙', '및 비주얼 컨셉'],
      paragraphs: [
        "다양한 산업군과 브랜드, 그리고 이를 즐기는 소비자들을 표현하기 위해 디자인 원칙을 수립했습니다. 성별·인종·연령 등 특정 범주에 국한되지 않는 다양성, 브랜드를 자연스럽게 즐기는 순간, 각자의 개성을 유지하면서도 하나의 경험으로 어우러지는 일관성을 핵심 원칙으로 정의했습니다. 이를 다양한 소비자와 산업이 공존하는 '다채로운 스펙트럼'이라는 비주얼 컨셉으로 구체화했습니다.",
      ],
      captions: ['Diversity beyond Stereotypes', 'Enjoyable & Natural Moments', 'Together with Individuality'],
    },
    prompt: {
      heading: ['프롬프트 설계', '및 문서화'],
      paragraphs: [
        '산업군을 대표하는 인물을 성별·연령·인종·체형 등의 속성을 기준으로 구체적으로 설계했습니다. 다양한 생성형 AI 툴을 테스트해 의도한 표현에 가장 적합한 툴과 제작 방식을 선정하고, 프롬프트 구조와 생성 결과를 문서화해 반복 제작에도 일관성을 유지할 수 있는 가이드라인을 구축했습니다.',
      ],
    },
    keyVisual: {
      heading: ['산업군별 키비주얼과', '인포그래픽'],
      paragraphs: [
        '산업별 주요 데이터를 직관적으로 전달하는 인포그래픽을 제작하고, 해당 산업을 경험하는 소비자의 모습과 스펙트럼을 상징하는 다채로운 컬러 조명을 결합해 산업군별 키비주얼을 제작했습니다. 서로 다른 산업의 특성을 드러내면서도 하나의 스터디로 인식될 수 있도록 일관된 비주얼 시스템을 적용했습니다.',
      ],
    },
    home: {
      heading: ['AI 인물 에셋과', '브랜드 카드 기반 웹 디자인'],
      paragraphs: [
        '산업–브랜드–데이터 간 정보 위계를 정리하고 카드 기반의 UI 구조를 설계했습니다. 브랜드별 핵심 정보는 반복 가능한 카드 컴포넌트로 모듈화하고, 산업군별 AI 인물 비주얼 에셋을 주요 탐색 지점에 배치해 데이터 중심의 화면에서도 각 산업의 특성이 직관적으로 인지되도록 했습니다.',
        '또한 브랜드와 산업군이 달라져도 동일한 정보 구조와 시각적 리듬을 유지할 수 있도록 이미지·타이포그래피·데이터 영역의 비율과 카드 규칙을 일관되게 적용했습니다. 이를 통해 방대한 데이터를 효율적으로 탐색하면서도 Brand Intimacy Study만의 비주얼 아이덴티티가 지속되는 확장 가능한 웹 시스템을 구축했습니다.',
      ],
    },
    brandDetail: {
      heading: ['데이터를 강조한', '레이아웃과 인터랙션'],
      paragraphs: [
        'Brand Intimacy Study의 아이덴티티인 하트 심볼에 맥박처럼 두근거리는 애니메이션을 적용해 브랜드 컨셉을 인터랙션으로 확장했습니다. 그래프가 채워지고 그려지는 모션과 숫자 카운팅 등의 마이크로 인터랙션을 적용해 데이터가 나타나는 과정을 시각화하고, 정적인 데이터 중심의 화면에 리듬과 몰입감을 더했습니다.',
      ],
    },
    sns: {
      heading: ['다양한 포맷의', '매체로 확장'],
      paragraphs: [
        '웹을 위해 구축한 비주얼 에셋과 데이터 시각화 시스템을 기반으로 인스타그램, 스레드 등 다양한 소셜미디어 포맷으로 콘텐츠를 확장했습니다. 매체별 비율과 정보량에 맞춰 비주얼과 데이터를 재구성하면서도 일관된 브랜드 경험을 유지했습니다.',
      ],
    },
    styleGuide: {
      heading: ['프론트 & 스타일가이드', '기반 개발'],
      paragraphs: [
        '프로토타입과 Easing·Duration 등의 모션 원칙을 정리한 모션 가이드부터 UI 스타일가이드까지 개발에 필요한 디자인 스펙을 문서화했습니다. 개발 과정에서는 웹 성능과 인터랙션 구현 방식을 함께 점검하며, 로딩 속도를 느리게 하는 복잡한 모션은 이미지로 대체하거나 라이브러리를 사용하는 등 시각적 경험을 유지하면서도 가볍고 안정적으로 구현될 수 있도록 최적화했습니다.',
      ],
    },
    video: {
      heading: ['비주얼 에셋 기반', '영상 제작'],
      paragraphs: [
        '생성한 이미지 에셋에 영상 생성형 AI를 활용해 움직임을 더하고, 움직임의 강도와 표정 변화 등의 요소를 반복적으로 조정해 산업별 영상의 톤앤매너를 일관되게 맞췄습니다. 완성된 영상 에셋을 컴포지션화하고 트랜지션과 타이포그래피를 결합해 Brand Intimacy Study를 소개하는 영상 콘텐츠로 제작했습니다.',
      ],
    },
  },
  en: {
    overview: {
      subtitle: 'AI-driven global brand study web design',
      paragraphs: [
        'An internal project for MBLM, a New York branding agency — a study report website evaluating 475 brands across 22 industries through AI-driven analysis.',
        'From AI-generated image and video content to motion interaction, I built a web experience to effectively communicate a wide range of industries and data.',
      ],
    },
    visualConcept: {
      heading: ['Design principles', 'and visual concept'],
      paragraphs: [
        "To represent the diverse industries, brands, and the consumers who enjoy them, I established a set of core design principles: diversity that isn't confined to categories like gender, race, or age; natural, unguarded moments of enjoying a brand; and a consistency where each individual keeps their own character while still coming together as one experience. These principles came together as the visual concept of a 'colorful spectrum,' where diverse consumers and industries coexist.",
      ],
      captions: ['Diversity beyond Stereotypes', 'Enjoyable & Natural Moments', 'Together with Individuality'],
    },
    prompt: {
      heading: ['Prompt design', 'and documentation'],
      paragraphs: [
        'I designed the figures representing each industry in detail, based on attributes like gender, age, ethnicity, and body type. After testing a range of generative AI tools to find the one best suited to the intended expression, I documented the prompt structure and generation results, building guidelines that kept output consistent through repeated production.',
      ],
    },
    keyVisual: {
      heading: ['Key visuals and', 'infographics by industry'],
      paragraphs: [
        "I produced infographics that convey each industry's key data at a glance, and combined them with colorful lighting symbolizing the consumers who experience that industry and the spectrum itself, to create key visuals for each industry. A consistent visual system was applied so each industry's distinct character comes through while the whole still reads as one unified study.",
      ],
    },
    home: {
      heading: ['A web design built on', 'AI figure assets and brand cards'],
      paragraphs: [
        "I organized the information hierarchy across industry, brand, and data, and designed a card-based UI structure. Core information for each brand was modularized into a reusable card component, and AI-generated figure visuals for each industry were placed at key navigation points, so each industry's character reads intuitively even on a data-heavy screen.",
        "I also applied consistent ratios and card rules across the image, typography, and data areas, so the same information structure and visual rhythm carry through as the brand and industry change. This built a scalable web system that lets people navigate a huge amount of data efficiently while keeping Brand Intimacy Study's own visual identity intact.",
      ],
    },
    brandDetail: {
      heading: ['A layout and interaction', 'built around data'],
      paragraphs: [
        "I extended the heart symbol — Brand Intimacy Study's identity — into an interaction by giving it a heartbeat-like pulsing animation, carrying the brand concept through into motion. Micro-interactions such as graphs filling and drawing in, and numbers counting up, visualize the process of data appearing, adding rhythm and immersion to an otherwise static, data-heavy screen.",
      ],
    },
    sns: {
      heading: ['Extended across', 'a range of media formats'],
      paragraphs: [
        "Building on the visual assets and data visualization system built for the web, I extended the content into a range of social media formats such as Instagram and Threads. Visuals and data were reorganized to fit each platform's ratio and amount of information, while keeping a consistent brand experience.",
      ],
    },
    styleGuide: {
      heading: ['Built on a front-end', 'and style guide foundation'],
      paragraphs: [
        'I documented the design specs needed for development, from a motion guide covering prototypes and principles like easing and duration, to a full UI style guide. During development, I reviewed web performance alongside how interactions were implemented — replacing motion that was too complex and slowed load times with images, or using libraries instead — optimizing so the experience stayed lightweight and stable without losing its visual quality.',
      ],
    },
    video: {
      heading: ['Video production', 'built on the visual assets'],
      paragraphs: [
        "I used generative video AI to add motion to the image assets I'd created, repeatedly adjusting factors like the intensity of movement and changes in expression to keep a consistent tone and manner across each industry's video. The finished video assets were composited together and combined with transitions and typography into video content introducing Brand Intimacy Study.",
      ],
    },
  },
}

function BrandintimacyCaseStudy() {
  const { language } = useLanguage()
  const t = CONTENT[language]
  const heroBlur = useHeroBlur()
  const [overviewRef, overviewInView] = useReveal()
  const [metaRef, metaInView] = useReveal()
  const [industriesRef, industriesInView] = useReveal()
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
            <h1 className={styles.title}>
              Brand
              <br />
              Intimacy
            </h1>
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
          <SectionIntro label="Visual Concept" headingLines={t.visualConcept.heading}>
            {t.visualConcept.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </SectionIntro>

          <div className={styles.sectionMedia}>
            <TripleRow
              aspect="1536 / 963"
              items={[
                { src: concept1, caption: t.visualConcept.captions[0] },
                { src: concept2, caption: t.visualConcept.captions[1] },
                { src: concept3, caption: t.visualConcept.captions[2] },
              ]}
            />
            <FullBleedImage
              src={conceptStrip}
              aspect="1568 / 70"
              fit="contain"
            />
          </div> 
        </section>

        <section className={styles.section}>
          <SectionIntro label="Prompt" headingLines={t.prompt.heading}>
            {t.prompt.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </SectionIntro>

          <div className={styles.sectionMedia}>
            <TripleRow
              aspect="1024 / 576"
              items={[{ src: prompt1 }, { src: prompt2 }, { src: prompt3 }]}
            />
          </div>
        </section>

        <section className={styles.section}>
          <SectionIntro label="Key Visual" headingLines={t.keyVisual.heading}>
            {t.keyVisual.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </SectionIntro>

          <div className={styles.sectionMedia}>
            <TripleRow
              aspect="1536 / 780"
              items={[{ src: keyVisual1 }, { src: keyVisual2 }, { src: keyVisual3 }]}
            />
            <TripleRow
              aspect="1536 / 780"
              items={[{ src: keyVisual4 }, { src: keyVisual5 }, { src: keyVisual6 }]}
            />
          </div>
        </section>

        <section className={styles.section}>
          <SectionIntro label="Home" headingLines={t.home.heading}>
            {t.home.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </SectionIntro>

          <div className={styles.sectionMedia}>
            <FullBleedImage src={homeImg} aspect="1568 / 1403" />
          </div>
        </section>

        <section className={styles.section}>
          <div className={introStyles.row} style={{ alignItems: 'flex-start' }}>
            <p className={introStyles.label}>Industries & Industries Detail</p>
            <div
              ref={industriesRef}
              className={`${mediaStyles.fullBleedInner} ${reveal.reveal} ${industriesInView ? reveal.revealIn : ''}`}
              style={{ aspectRatio: '1580 / 835', flex: '1 1 auto', minWidth: 0 }}
            >
              <Media src={industriesImg} className={mediaStyles.img} />
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <SectionIntro label="Brand Detail" headingLines={t.brandDetail.heading}>
            {t.brandDetail.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </SectionIntro>

          <div className={styles.sectionMedia}>
            <FullBleedImage src={brandDetailImg} aspect="1568 / 1112" />
          </div>
        </section>

        <section className={styles.section}>
          <SectionIntro label="SNS" headingLines={t.sns.heading}>
            {t.sns.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </SectionIntro>

          <div className={styles.sectionMedia}>
            <TripleRow aspect="1 / 1" items={[{ src: sns1 }, { src: sns2 }, { src: sns3 }]} />
          </div>
        </section>

        <section className={styles.section}>
          <SectionIntro label="Style Guide" headingLines={t.styleGuide.heading}>
            {t.styleGuide.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </SectionIntro>

          <div className={styles.sectionMedia}>
            <FullBleedImage src={styleGuideImg} aspect="1568 / 587" />
          </div>
        </section>

        <section className={styles.section}>
          <SectionIntro label="Video" headingLines={t.video.heading}>
            {t.video.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </SectionIntro>

          <div className={styles.sectionMedia}>
            <FullBleedEmbed
              src="https://www.youtube.com/embed/kyxxR8Lrc20"
              aspect="16 / 9"
              title="Brand Intimacy Study video"
            />
          </div>
        </section>
      </div>
    </div>
  )
}

export default BrandintimacyCaseStudy
