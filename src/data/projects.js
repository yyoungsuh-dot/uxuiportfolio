import projectPitch from '../assets/thumbnails/pitch.jpg'
import projectSynce from '../assets/thumbnails/synce.jpg'
import projectBrandintimacy from '../assets/thumbnails/brandintimacy.jpg'
import projectCentralsquare from '../assets/thumbnails/centralsquare.jpg'
import projectLay from '../assets/thumbnails/lay.jpg'
import projectReact from '../assets/thumbnails/react.jpg'

// Only "lay" has real copy sourced from Figma (node 368:44235). The other three
// are placeholder titles/descriptions — replace with real project content.
// Each thumbnail is the first frame of that project's case-study hero video
// (extracted via ffmpeg), so the carousel circle matches what plays at the
// top of the detail page it leads into.
export const PROJECTS = [
  {
    id: 'brandintimacy',
    slug: 'brandintimacy',
    img: projectBrandintimacy,
    title: 'Brand Intimacy',
    desc: ['AI-driven global brand study web design', 'evaluating 475 brands across 22 industries'],
  },
  {
    id: 'centralsquare',
    slug: 'centralsquare',
    img: projectCentralsquare,
    title: 'CentralSquare',
    desc: ['Rebranding & web design', 'for a public-sector software company'],
  },
  {
    id: 'react',
    slug: 'react',
    img: projectReact,
    title: 'React',
    desc: ['From a viewing experience to an engaging experience,', 'the interactive comments and viewing UX of video content platforms.'],
  },
  {
    id: 'synce',
    slug: 'synce',
    img: projectSynce,
    title: 'Synce',
    desc: ['A platform connecting hospitals and patients', 'for post-surgery recovery care'],
  },
  {
    id: 'pitch',
    slug: 'pitch',
    img: projectPitch,
    title: 'pitch',
    desc: ['AI-powered OS interaction', 'for data productivity via side panel'],
  },
  {
    id: 'lay',
    slug: 'lay',
    img: projectLay,
    title: 'Lay',
    desc: ['AI-powered beam projector UX', 'connecting physical environments and digital layers'],
  },
]
