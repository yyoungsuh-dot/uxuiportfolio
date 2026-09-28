// Every media block is a still from centralsquare_case-study, in page order:
// hero -> Rebranding Strategy (x1) -> Brand Identity (x2) -> Icons (x1) ->
// Key Visual (x4 captioned) -> IA (x1) -> GUI (x2) -> Style Guide (x1) ->
// Responsive Design (x1).
//
// Copy supplied directly by the client (no Figma source for this project).
import heroImage from '../../assets/centralsquare_case-study/csq_0.png'
import strategyImg from '../../assets/centralsquare_case-study/csq_1.png'
import identity1 from '../../assets/centralsquare_case-study/csq_2.png'
import identity2 from '../../assets/centralsquare_case-study/csq_3.png'
import iconsImg from '../../assets/centralsquare_case-study/csq_4.png'
import keyVisual1 from '../../assets/centralsquare_case-study/csq_5-1.png'
import keyVisual2 from '../../assets/centralsquare_case-study/csq_5-2.png'
import keyVisual3 from '../../assets/centralsquare_case-study/csq_6-1.png'
import keyVisual4 from '../../assets/centralsquare_case-study/csq_6-2.png'
import iaImg from '../../assets/centralsquare_case-study/csq_7.png'
import gui1 from '../../assets/centralsquare_case-study/csq_8.png'
import gui2 from '../../assets/centralsquare_case-study/csq_9.png'
import styleGuideImg from '../../assets/centralsquare_case-study/csq_10.png'
import responsiveImg from '../../assets/centralsquare_case-study/csq_11.png'
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
    { label: 'Assignment', lines: ['MBLM (New York design agency) hands-on project'] },
    { label: 'Teams', lines: ['2 Designers', '1 Brand Strategist', '1 Web Developer'] },
  ],
  [{ label: 'Role', lines: ['Branding', 'UX/UI Design', 'Prototyping'] }],
  [
    {
      label: 'Result',
      lines: [
        '6% increase in returning users',
        '8.5% increase in views per active user',
        '7.5% improvement in bounce rate',
        '20% increase in average engagement time per active user',
      ],
    },
  ],
  [{ label: 'Year', lines: ['2025'] }],
]

const CONTENT = {
  ko: {
    overview: {
      subtitle: '공공기관을 위한 소프트웨어 기업 리브랜딩 & 웹 디자인',
      paragraphs: [
        '미국 공공기관을 위한 소프트웨어 솔루션 기업 CentralSquare의 리브랜딩을 진행했습니다. 전략팀 및 개발팀과 협업해 브랜드 전략을 수립하고, 이를 기반으로 브랜드 아이덴티티, 키비주얼, 웹사이트까지 일관된 비주얼 시스템을 구축했습니다.',
      ],
    },
    strategy: {
      heading: ['공공서비스의 사명감을', '담은 브랜드 전략'],
      paragraphs: [
        "클라이언트 인터뷰와 경쟁사 분석, 브레인스토밍 세션을 통해 전략팀과 함께 브랜드의 핵심 가치와 차별점을 정의했습니다. 특히 시민의 일상과 안전을 지키는 공공서비스 종사자의 사명감과 헌신에 주목하고, 이들의 중요한 임무를 뒷받침하는 기술이라는 관점에서 'HERO-GRADE' 브랜드 전략을 도출했습니다.",
      ],
    },
    identity: {
      heading: ['Hero 모티프 기반', '아이덴티티'],
      paragraphs: [
        "HERO-GRADE 전략을 시각화하기 위해 히어로를 올려다보는 시선에서 착안한 Perspective를 핵심 비주얼 언어로 정의했습니다. 서로 다른 원근의 형태가 하나의 중심을 향해 모이며 커뮤니티를 상징하는 'Square'를 형성하도록 로고와 그래픽 모티프를 설계했습니다. 컬러 시스템은 지역 커뮤니티의 시설물과 공공안전 종사자의 유니폼에서 모티프를 추출해 구축했습니다. 다양한 디지털 환경에서도 정보가 명확하게 전달될 수 있도록 ADA 접근성 기준에 따른 색상 대비를 검토하고 시인성을 확보했습니다.",
      ],
    },
    icons: {
      heading: ['Square 그리드에', '맞춘 아이콘'],
      paragraphs: [
        'Material Icon을 기반으로 Square 브랜드 아이덴티티에 맞춰 각진 형태로 변형하고, 그리드에 정렬했습니다. 웹 콘텐츠에 필요한 아이콘을 리스트업 후 추가 제작했습니다. Benefit을 보여주는 커스텀 아이콘을 제작했습니다. 일관된 인상을 위해 선 두께, 여백, 끝 처리(End Cap) 등을 통일했습니다.',
      ],
    },
    keyVisual: {
      heading: ['다양한 매체에 조합 가능한', '키 비주얼'],
      paragraphs: [
        '각 스타일을 독립적으로 활용하거나 서로 조합할 수 있도록 그래픽 규칙을 설계해, 웹부터 다양한 브랜드 커뮤니케이션 매체까지 일관된 아이덴티티를 유지하면서 유연하게 확장할 수 있도록 했습니다.',
      ],
      captions: ['Typography', 'Geometric Graphic', 'Pattern Graphic', 'Duotone'],
    },
    ia: {
      heading: ['제품과 기술 분류로', '직관적 정보구조 개선'],
      paragraphs: [
        '기존 사이트맵과 페이지별 트래픽, 경쟁사 웹사이트의 정보구조를 분석해 복잡하게 운영되던 브랜드와 제품군을 사용자 관점에서 재분류했습니다. 제품 중심으로 혼재되어 있던 정보를 제품과 기술 솔루션의 두 가지 탐색 축으로 구조화하고, 기술 솔루션 소개 영역을 별도로 분리했습니다. 이를 통해 공공기관 관계자부터 기술 담당자까지 서로 다른 이해관계자가 각자의 목적에 따라 필요한 정보에 직관적으로 접근할 수 있도록 IA를 개선했습니다.',
      ],
    },
    gui: {
      heading: ['인물과 카피를 강조한', '그리드 기반 레이아웃'],
      paragraphs: [
        '다양한 제품과 솔루션 페이지에 일관되게 확장할 수 있도록 키비주얼과 콘텐츠 모듈을 조합하는 방식으로 페이지 구조를 설계했습니다. Perspective 기반의 그래픽과 공공서비스 종사자의 인물 이미지, 핵심 메시지가 명확하게 드러나도록 여백과 그리드를 활용하고, 반복되는 콘텐츠는 카드형 컴포넌트로 모듈화했습니다. 또한 섹션별 배경과 콘텐츠의 컬러 대비를 활용해 긴 페이지에서도 정보 영역이 명확하게 구분되고 시각적 리듬이 이어지도록 설계했습니다. 이를 통해 브랜드의 새로운 아이덴티티를 유지하면서도 다양한 콘텐츠와 페이지로 확장 가능한 웹 시스템을 구축했습니다.',
      ],
    },
    styleGuide: {
      heading: ['프론트 & 스타일가이드', '기반 개발'],
      paragraphs: [
        '다양한 페이지에서도 일관된 UI를 유지하고 효율적으로 확장할 수 있도록 컴포넌트와 Properties 체계를 구축했습니다. 반복되는 UI의 상태와 유형을 정의하고 Property 네이밍 규칙을 통일해 디자이너와 개발자가 동일한 구조를 이해하고 활용할 수 있도록 정리했습니다. 또한 컬러·타이포그래피·그리드·컴포넌트 사용 규칙과 프로토타입을 스타일가이드로 문서화하고, 이를 기반으로 개발자와 구현 방식을 지속적으로 조율하며 브랜드 아이덴티티가 실제 웹에서도 일관되게 구현될 수 있도록 협업했습니다.',
      ],
    },
    responsive: {
      heading: ['반응형을 고려한', '그리드 시스템'],
      paragraphs: ['반응형으로 제작하여 다양한 디바이스 환경에서도 일관성있는 경험을 제공할 수 있도록 했습니다.'],
    },
  },
  en: {
    overview: {
      subtitle: 'Rebranding & web design for a\npublic-sector software company',
      paragraphs: [
        "I led the rebranding of CentralSquare, a U.S. software solutions company for public-sector agencies. Working with the strategy and development teams, I established a brand strategy and used it to build a consistent visual system spanning brand identity, key visuals, and the website.",
      ],
    },
    strategy: {
      heading: ['A brand strategy rooted in', 'the mission of public service'],
      paragraphs: [
        "Through client interviews, competitor analysis, and brainstorming sessions, I worked with the strategy team to define the brand's core values and points of differentiation. Focusing on the sense of mission and dedication of public-service workers who protect citizens' daily lives and safety, we arrived at the 'HERO-GRADE' brand strategy — positioning the technology as what supports their critical work.",
      ],
    },
    identity: {
      heading: ['An identity built on', 'a hero motif'],
      paragraphs: [
        "To visualize the HERO-GRADE strategy, I defined Perspective — inspired by the upward gaze of looking up at a hero — as the core visual language. The logo and graphic motifs were designed so that shapes in different perspectives converge toward a single center, forming a 'Square' that symbolizes community. The color system was built by drawing motifs from local community facilities and the uniforms of public-safety workers. I reviewed color contrast against ADA accessibility standards to keep information legible across a range of digital environments.",
      ],
    },
    icons: {
      heading: ['Icons aligned to', 'the Square grid'],
      paragraphs: [
        'Starting from Material Icons, I reshaped them into angular forms to match the Square brand identity and aligned them to the grid. After listing out the icons needed for the web content, I produced additional custom icons — including a set illustrating product benefits. Stroke weight, padding, and end caps were all standardized for a consistent impression.',
      ],
    },
    keyVisual: {
      heading: ['Key visuals built to combine', 'across different media'],
      paragraphs: [
        "The graphic rules were designed so each style can be used on its own or combined with the others — keeping the identity consistent from the website to a range of brand communication materials, while staying flexible enough to scale.",
      ],
      captions: ['Typography', 'Geometric Graphic', 'Pattern Graphic', 'Duotone'],
    },
    ia: {
      heading: ['A clearer information structure,', 'organized by product and technology'],
      paragraphs: [
        "By analyzing the existing sitemap, page-level traffic, and the information architecture of competitor websites, I reclassified a brand and product lineup that had grown complex, from the user's point of view. Information that had been mixed together around individual products was restructured into two navigation axes — products and technology solutions — with a dedicated section carved out to introduce the technology solutions. This improved IA lets different stakeholders, from public-sector officials to technical staff, intuitively reach the information they need for their own purposes.",
      ],
    },
    gui: {
      heading: ['A grid-based layout that', 'foregrounds people and copy'],
      paragraphs: [
        "I designed the page structure as a combination of key visuals and content modules so it could scale consistently across a variety of product and solution pages. Whitespace and grid were used to keep Perspective-based graphics, images of public-service workers, and core messaging clearly legible, and recurring content was modularized into card components. Color contrast between each section's background and its content also keeps information areas clearly distinguished and maintains a visual rhythm even on long pages. The result is a web system that carries the brand's new identity while remaining flexible enough to expand across a wide range of content and pages.",
      ],
    },
    styleGuide: {
      heading: ['Built on a front-end', 'and style guide foundation'],
      paragraphs: [
        'I built a component and properties system so the UI would stay consistent and scale efficiently across a wide range of pages. Recurring UI states and types were defined and property-naming rules unified, so designers and developers could work from the same shared structure. Color, typography, grid, and component usage rules, along with prototypes, were documented in a style guide, and I continuously coordinated implementation with the development team so the brand identity would carry through consistently on the live site.',
      ],
    },
    responsive: {
      heading: ['A grid system built', 'for a responsive web'],
      paragraphs: ['The site was built responsively to deliver a consistent experience across a range of devices.'],
    },
  },
}

function CentralsquareCaseStudy() {
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
            <h1 className={styles.title}>
              CENTRAL
              <br />
              SQUARE
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
          <SectionIntro label="Rebranding Strategy" headingLines={t.strategy.heading}>
            {t.strategy.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </SectionIntro>

          <div className={styles.sectionMedia}>
            <FullBleedImage src={strategyImg} aspect="1568 / 630" />
          </div>
        </section>

        <section className={styles.section}>
          <SectionIntro label="Brand Identity" headingLines={t.identity.heading}>
            {t.identity.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </SectionIntro>

          <div className={styles.sectionMedia}>
            <FullBleedImage src={identity1} aspect="1568 / 508" />
            <FullBleedImage src={identity2} aspect="1568 / 784" />
          </div>
        </section>

        <section className={styles.section}>
          <SectionIntro label="Icons" headingLines={t.icons.heading}>
            {t.icons.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </SectionIntro>

          <div className={styles.sectionMedia}>
            <FullBleedImage src={iconsImg} aspect="1568 / 758" />
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
              aspect="784 / 441"
              items={[
                { src: keyVisual1, caption: t.keyVisual.captions[0] },
                { src: keyVisual2, caption: t.keyVisual.captions[1] },
              ]}
            />
            <TripleRow
              aspect="784 / 441"
              items={[
                { src: keyVisual3, caption: t.keyVisual.captions[2] },
                { src: keyVisual4, caption: t.keyVisual.captions[3] },
              ]}
            />
          </div>
        </section>

        <section className={styles.section}>
          <SectionIntro label="IA" headingLines={t.ia.heading}>
            {t.ia.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </SectionIntro>

          <div className={styles.sectionMedia}>
            <FullBleedImage src={iaImg} aspect="1568 / 882" />
          </div>
        </section>

        <section className={styles.section}>
          <SectionIntro label="GUI" headingLines={t.gui.heading}>
            {t.gui.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </SectionIntro>

          <div className={styles.sectionMedia}>
            <FullBleedImage src={gui1} aspect="1568 / 2559" />
            <FullBleedImage src={gui2} aspect="1568 / 1572" />
          </div>
        </section>

        <section className={styles.section}>
          <SectionIntro label="Style Guide" headingLines={t.styleGuide.heading}>
            {t.styleGuide.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </SectionIntro>

          <div className={styles.sectionMedia}>
            <FullBleedImage src={styleGuideImg} aspect="1568 / 882" />
          </div>
        </section>

        <section className={styles.section}>
          <SectionIntro label="Responsive Design" headingLines={t.responsive.heading}>
            {t.responsive.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </SectionIntro>

          <div className={styles.sectionMedia}>
            <FullBleedImage src={responsiveImg} aspect="1568 / 475" />
          </div>
        </section>
      </div>
    </div>
  )
}

export default CentralsquareCaseStudy
