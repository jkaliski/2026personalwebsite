import {appointment} from './appointment'
import {award} from './award'
import {educationItem} from './educationItem'
import {homePage} from './homePage'
import {languageSkill} from './languageSkill'
import {lyricCourse} from './lyricCourse'
import {imageWithCaption} from './objects/imageWithCaption'
import {linkItem} from './objects/linkItem'
import {metaPair} from './objects/metaPair'
import {richText} from './objects/richText'
import {roleCredit} from './objects/roleCredit'
import {production} from './production'
import {repertoireGroup} from './repertoireGroup'
import {siteSettings} from './siteSettings'
import {testimonial} from './testimonial'
import {videoFeature} from './videoFeature'

export const schemaTypes = [
  siteSettings,
  homePage,
  production,
  appointment,
  videoFeature,
  lyricCourse,
  repertoireGroup,
  educationItem,
  award,
  languageSkill,
  testimonial,
  imageWithCaption,
  richText,
  linkItem,
  metaPair,
  roleCredit,
]
