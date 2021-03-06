import {
  connect,
  MyHead as Head,
  VoteWithLinkedIn,
  WidgetContestantCompanies,
  WidgetContestantCompany,
  WidgetVoteStatus,
  LayoutMain as Layout,
  MyTypography as Typography,
  Markdown,
  WidgetVideoWithEventInfo,
  WidgetContestantCompaniesArchiveWinners,
  reduxWrapper,
  configure
} from 'eventjuicer-site-components';

/*
  'err',
  'req',
  'res',
  'pathname',
  'query',
  'asPath',
  'AppTree',
  'store',
  'isServer'
*/

import settings from '../../settings'

import {Categories} from '../../src/icons' 


const PageVote = (props) => (

  <div>

      <WidgetContestantCompanies
          first
          intro={
            <div style={{ width: '80%' }}>
              <WidgetVoteStatus  max_votes={10} />
              <Typography template="benefitsText">
                <Markdown label="awards.contestants.voting-rules.description" />
              </Typography>
            </div>
          }
          limit={500}
          keyword_source="awards_category"
          label='awards.contestants.categories.title'
          show_votes={false}
          resolveTitle={function(item){ return item.profile.cname2 } }
        />


       <Categories  dense={false} typography={undefined} secondaryTypography={undefined} />

      <WidgetContestantCompaniesArchiveWinners  />
      <WidgetVideoWithEventInfo />


      

  </div>

)



export const getStaticProps = reduxWrapper.getStaticProps(async ({ store }) => {

  await configure(store, {
    settings: settings,
    preload: ['contestant_companies']
  })

  return {
    props: {}, 
    revalidate: 1
  }
  
})


export default connect()(PageVote);
