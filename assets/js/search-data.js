// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "projects",
          description: "A growing collection of your cool projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "Associate Fellow of the Higher Education Academy (AFHEA), 2024.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "This is a cv page.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-people",
          title: "people",
          description: "members of the group",
          section: "Navigation",
          handler: () => {
            window.location.href = "/people/";
          },
        },{id: "nav-news",
          title: "news",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "post-a-reflection",
        
          title: "A reflection",
        
        description: "this is what included images could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/images/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-pleased-to-present-our-recent-research-on-multi-modal-robotic-skin-in-iros2022-conference",
          title: 'Pleased to present our recent research on multi-modal robotic skin in IROS2022 conference...',
          description: "",
          section: "News",},{id: "news-dr-mayue-shi-attended-pku-annual-alumni-conference-in-the-uk",
          title: 'Dr Mayue Shi Attended PKU Annual Alumni Conference in the UK',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_20240215/";
            },},{id: "news-dr-mayue-shi-was-selected-as-the-ideas-2-impact-i2i-fellow-at-saïd-business-school-university-of-oxford",
          title: 'Dr Mayue Shi was selected as the Ideas 2 Impact (I2I) Fellow at...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_20240915/";
            },},{id: "news-dr-mayue-shi-was-selected-as-research-member-of-common-room-at-kelloge-college-university-of-oxford",
          title: 'Dr Mayue Shi was selected as Research Member of Common Room at Kelloge...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_20241001/";
            },},{id: "news-happy-to-visit-the-royal-society-summer-science-exhibition-2025",
          title: 'Happy to visit the Royal Society Summer Science Exhibition 2025',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_20250705/";
            },},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6D%61%79%75%65.%73%68%69@%65%6E%67.%6F%78.%61%63.%75%6B", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/mayue-shi", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/mayue-shi-6a972b86", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0002-1234-5678", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=2OKn9p4AAAAJ", "_blank");
        },
      },{
        id: 'social-work',
        title: 'Work',
        section: 'Socials',
        handler: () => {
          window.open("https://www.ibme.ox.ac.uk/", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
