/**
 * Define all of your application routes here
 * for more information on routes, see the
 * official documentation https://router.vuejs.org/en/
 */
export default [
  {
    path: "/dashboard",
    // Relative to /src/views
    view: "Dashboard",
    meta: {
      requiresAuth: true,
      hasLayout: true
    }
  },
  // {
  // 	path: '/m/:id',
  // 	name: 'meeting',
  // 	view: 'Meeting'
  // },
  {
    path: "/login",
    view: "Login",
    meta: {
      hasLayout: false
    }
  },
  {
    path: "/signup",
    view: "Signup",
    meta: {
      hasLayout: false
    }
  },
  {
    path: "/calendar",
    view: "Calendar",
    meta: {
      requiresAuth: false,
      hasLayout: true
    }
  },
  {
    path: "/billing",
    view: "Billing",
    meta: {
      requiresAuth: false,
      hasLayout: true
    }
  },
  {
    path: "/calls",
    view: "Calls",
    meta: {
      requiresAuth: false,
      hasLayout: true
    }
  },
  {
    path: "/contacts",
    view: "Contacts",
    meta: {
      requiresAuth: false,
      hasLayout: true
    }
  },
  {
    path: "/faqs",
    view: "Faqs",
    meta: {
      requiresAuth: false,
      hasLayout: true
    }
  },
  {
    path: "/invoices",
    view: "Invoices",
    meta: {
      requiresAuth: true,
      hasLayout: true
    }
  },
  {
    path: "/plans",
    view: "Plans",
    meta: {
      requiresAuth: false,
      hasLayout: true
    }
  },
  {
    path: "/reports",
    view: "Reports",
    meta: {
      requiresAuth: false,
      hasLayout: true
    }
  },
  {
    path: "/team",
    view: "Team",
    meta: {
      requiresAuth: false,
      hasLayout: true
    }
  },
  {
    path: "/types",
    view: "Types",
    meta: {
      requiresAuth: false,
      hasLayout: true
    }
  },
  {
    path: "/account",
    view: "Account",
    meta: {
      requiresAuth: true,
      hasLayout: true
    }
  },
  {
    path: "/todos",
    view: "Todos",
    meta: {
      requiresAuth: false,
      hasLayout: true
    }
  },
  {
	  path: '/incoming',
	  view: 'Incoming',
	  meta: {
		  requiresAuth: true,
		  hasLayout: false
	  }
  },
  {
	  path: '/tour',
	  view: 'Tour',
	  meta: {
		  requiresAuth: false,
		  hasLayout: true
	  }
  },
  {
    path: '/user-settings',
    view: 'User-Settings',
    meta: {
      requiresAuth: true,
      hasLayout: true
    }
  }
  // {
  // 	path: '/user-profile',
  // 	name: 'User Profile',
  // 	view: 'UserProfile'
  // },
  // {
  // 	path: '/customers',
  // 	name: 'Kunden',
  // 	view: 'CustomerList'
  // },
  // {
  // 	path: '/customers/create',
  // 	name: 'Kunden erstellen',
  // 	view: 'CustomerForm'
  // },
  // {
  // 	path: '/customers/edit/:id',
  // 	name: 'Kunde editieren',
  // 	view: 'CustomerForm'
  // },
  // {
  // 	path: '/meetings',
  // 	name: 'Sitzungen',
  // 	view: 'MeetingList'
  // },
  // {
  // 	path: '/meeting/edit/:id',
  // 	name: 'Meeting editieren',
  // 	view: 'MeetingForm'
  // },
  // {
  // 	path: '/meeting/create',
  // 	name: 'Meeting erstellen',
  // 	view: 'MeetingForm'
  // },
  // {
  // 	path: '/documents',
  // 	name: 'Dokumente',
  // 	view: 'DocumentList'
  // },
  // {
  // 	path: '/documents/create',
  // 	name: 'Dokumente erstellen',
  // 	view: 'DocumentForm'
  // },
  // {
  // 	path: '/documents/edit/:id',
  // 	name: 'Dokumente editieren',
  // 	view: 'DocumentForm'
  // },
  // {
  // 	path: '/campaign',
  // 	name: 'Kampagnen',
  // 	view: 'CampaignList'
  // },
  // {
  // 	path: '/campaign/create',
  // 	name: 'Kampagne erstellen',
  // 	view: 'CampaignForm'
  // },
  // {
  // 	path: '/campaign/edit/:id',
  // 	name: 'Kampagne editieren',
  // 	view: 'CampaignForm'
  // },
  // {
  // 	path: '/typography',
  // 	view: 'Typography'
  // },
  // {
  // 	path: '/icons',
  // 	view: 'Icons'
  // },
  // {
  // 	path: '/maps',
  // 	view: 'Maps'
  // },
  // {
  // 	path: '/notifications',
  // 	view: 'Notifications'
  // },
  // {
  // 	path: '/upgrade',
  // 	name: 'Upgrade to PRO2',
  // 	view: 'Upgrade'
  // },
  // {
  // 	path: '/users',
  // 	name: 'Benutzer',
  // 	view: 'UserList'
  // },
  // {
  // 	path: '/users/create',
  // 	name: 'Benutzer erstellen',
  // 	view: 'UserForm'
  // },
  // {
  // 	path: '/users/edit/:id',
  // 	name: 'Benutzer bearbeiten',
  // 	view: 'UserForm'
  // },
  // {
  // 	path: '/company',
  // 	name: 'Unternehmen',
  // 	view: 'CompanyList'
  // },
  // {
  // 	path: '/company/create',
  // 	name: 'Unternehmen erstellen',
  // 	view: 'CompanyForm'
  // },
  // {
  // 	path: '/company/edit/:id',
  // 	name: 'Unternehmen bearbeiten',
  // 	view: 'CompanyForm'
  // }
];
