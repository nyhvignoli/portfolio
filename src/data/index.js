import { getCommunities } from './communities'
import { getProjects } from './projects'
import { getMyJourneySteps } from './myJourneySteps'
import { getKnowledges } from './knowledges'
import { getCertificates } from './certificates'

export const DATA_TYPE = {
  communities: 'communities',
  projects: 'projects',
  myJourneySteps: 'myJourneySteps',
  knowledges: 'knowledges',
  certificates: 'certificates'
}

export const getData = (dictionary, type) => {
  const Data = {
    communities: getCommunities(dictionary),
    projects: getProjects(dictionary),
    myJourneySteps: getMyJourneySteps(dictionary),
    knowledges: getKnowledges(dictionary),
    certificates: getCertificates(dictionary)
  }

  return Data[type]
}
