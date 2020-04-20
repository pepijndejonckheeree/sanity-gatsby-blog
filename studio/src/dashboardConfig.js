export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5e9dfab2d4931f80919f19aa',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-o55vpo9v',
                  apiId: 'fd01f31f-0fae-4436-b5b8-f13019a07e6a'
                },
                {
                  buildHookId: '5e9dfab28da662849d377965',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-m3ebpcdg',
                  apiId: 'cef0dfb1-d469-4881-bc3f-21834dc94b8c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/pepijndejonckheeree/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-m3ebpcdg.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
