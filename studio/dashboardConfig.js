export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fbf8dcb613244860cf96286',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-kckm48kj',
                  apiId: 'b4ecf854-02cc-436b-a9ea-5d0b4dcd9d47'
                },
                {
                  buildHookId: '5fbf8dcb330a584b7bac33bb',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-b17gjumz',
                  apiId: 'e6a5d3f3-ccd4-4e02-b0dc-697da0ba6df7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/MHutchbot/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-b17gjumz.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
