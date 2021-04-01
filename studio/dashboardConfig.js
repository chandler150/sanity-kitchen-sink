export default {
  widgets: [
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
                  buildHookId: '606552ab30e13d601a934df1',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-mwi2mcsu',
                  apiId: '6f13b0a2-0e64-437e-85b3-f60905efe9f5'
                },
                {
                  buildHookId: '606552ab755d7867110ac56d',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-emzn482n',
                  apiId: 'ad98cbd0-c5de-4060-91d9-32867e09ac54'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/chandler150/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-emzn482n.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
