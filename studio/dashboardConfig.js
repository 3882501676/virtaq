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
                  buildHookId: '5ebfe10768f986d9b801f810',
                  title: 'Sanity Studio',
                  name: 'virtaq-studio',
                  apiId: 'dab6215b-0dbe-4f4e-b0e2-b46ef5edb21f'
                },
                {
                  buildHookId: '5ebfe107496fb53a261e1f1f',
                  title: 'Landing pages Website',
                  name: 'virtaq',
                  apiId: '22e4d767-90af-40be-ae67-8286323b2e95'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/3882501676/virtaq',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://virtaq.netlify.app', category: 'apps'}
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
