// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-blog",
          title: "Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-anticipating-change-and-ensuring-ai-safety-cam-dtp",
        
          title: 'Anticipating change and ensuring AI safety - CAM-DTP <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://www.cam-dtp.ac.uk/current-students/student-blogs/anticipating-change-and-ensuring-ai-safety/", "_blank");
          
        },
      },{id: "post-just-a-moment",
        
          title: 'Just a moment... <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://aievaluation.substack.com/p/2026-september-ai-evaluation-digest", "_blank");
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-nerd-face-new-preprint-out-on-evlauating-temporal-reasoning",
          title: ':nerd_face: New preprint out on evlauating temporal reasoning!',
          description: "",
          section: "News",},{id: "news-partying-face-i-passed-my-first-year-registration-second-year-i-am-coming",
          title: ':partying_face: I passed my first year registration. Second year, I am coming!',
          description: "",
          section: "News",},{id: "news-i-am-ta-ing-and-supervising-undergrads-in-li18-this-term-computational-linguistics",
          title: 'I am TA-ing and supervising undergrads in Li18 this term (computational linguistics)',
          description: "",
          section: "News",},{id: "news-airplane-to-suzhou-for-emnlp-2025-catch-me-between-1-2-pm-in-hall-c-this-wednesday",
          title: ':airplane: to Suzhou for EMNLP 2025! Catch me between 1–2 pm in Hall...',
          description: "",
          section: "News",},{id: "news-just-gave-my-first-lecture-in-li18-on-distributional-semantics-as-a-stand-in-was-a-lot-of-fun",
          title: 'Just gave my first lecture in Li18 on distributional semantics as a stand-in....',
          description: "",
          section: "News",},{id: "news-journal-article-out-on-ensemble-labeling-of-infectious-disease-time-series-mask",
          title: 'Journal article out on ensemble-labeling of infectious disease time series :mask:',
          description: "",
          section: "News",},{id: "news-just-ran-my-first-hyrox-mixed-doubles-in-under-1-30-️-excited-for-the-next-one",
          title: 'Just ran my first HYROX Mixed Doubles in under 1:30 🏋️ Excited for...',
          description: "",
          section: "News",},{id: "news-started-the-technical-ai-safety-course-by-bluedot-impact-curious-to-meet-other-people-learning-more-about-ai-safety",
          title: 'Started the Technical AI Safety course by BlueDot Impact. Curious to meet other...',
          description: "",
          section: "News",},{id: "news-received-a-bursary-from-the-cambridge-language-centre-to-study-arabic",
          title: 'Received a bursary from the Cambridge Language Centre to study Arabic!',
          description: "",
          section: "News",},{id: "news-finished-my-innovation-fellowship-with-the-science-of-evaluation-team-at-the-uk-ai-security-institute-where-i-worked-on-measuring-research-skills-and-research-taste-in-ai-r-amp-amp-d-tasks-through-transcript-analysis-using-transect-i-ll-be-sharing-more-about-this-work-in-the-near-future",
          title: 'Finished my Innovation Fellowship with the Science of Evaluation team at the UK...',
          description: "",
          section: "News",},{id: "news-new-side-quest-unlocked-started-a-dj-society-at-lucy-cavendish-college-as-co-president-gig-announcements-coming-soon-️",
          title: 'New side quest unlocked 🎧 Started a DJ Society at Lucy Cavendish College...',
          description: "",
          section: "News",},{id: "news-what-does-it-take-to-reason-about-time-working-with-dates-and-clocks-or-understanding-event-order-and-cause-and-effect-our-new-preprint-tests-that-split-through-cross-benchmark-transfer-experiments-and-cognitive-demand-analysis",
          title: 'What does it take to reason about time? 🧮 Working with dates and...',
          description: "",
          section: "News",},{id: "news-check-out-the-recent-ai-evaluation-digest-it-has-been-my-favourite-substack-and-i-now-got-the-chance-to-contribute-to-it",
          title: 'Check out the recent AI Evaluation Digest! It has been my favourite Substack...',
          description: "",
          section: "News",},{id: "news-i-co-facilitated-a-pre-congress-workshop-on-ai-and-big-data-in-infectious-diseases-at-icid-2026-in-madrid",
          title: 'I co-facilitated a pre-congress workshop on AI and big data in infectious diseases...',
          description: "",
          section: "News",},{id: "news-i-wrote-a-blog-post-reflecting-on-my-time-at-the-uk-ai-security-institute-and-why-ai-evaluation-is-important-but-tricky-to-get-right",
          title: 'I wrote a blog post reflecting on my time at the UK AI...',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{id: "teachings-data-science-fundamentals",
          title: 'Data Science Fundamentals',
          description: "This course covers the foundational aspects of data science, including data collection, cleaning, analysis, and visualization. Students will learn practical skills for working with real-world datasets.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/data-science-fundamentals/";
            },},{id: "teachings-introduction-to-machine-learning",
          title: 'Introduction to Machine Learning',
          description: "This course provides an introduction to machine learning concepts, algorithms, and applications. Students will learn about supervised and unsupervised learning, model evaluation, and practical implementations.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/introduction-to-machine-learning/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%63%6F%6E%74%61%63%74@%61%75%73%73%61%62%62%6F%6F%64.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/aauss", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/auss-abbood", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0002-4428-168X", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=K43mA6AAAAAJ", "_blank");
        },
      },{
        id: 'social-stackoverflow',
        title: 'Stackoverflow',
        section: 'Socials',
        handler: () => {
          window.open("https://stackoverflow.com/users/10652408", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/Auss_Abbood", "_blank");
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
