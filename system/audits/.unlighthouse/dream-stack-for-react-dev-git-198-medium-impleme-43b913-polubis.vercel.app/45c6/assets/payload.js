window.__unlighthouse_payload = {
  reports: [],
  scanMeta: {
    monitor: {
      status: 'completed',
      timeRunning: 304,
      doneTargets: 0,
      allTargets: 0,
      donePercStr: '100',
      errorPerc: '0.00',
      timeRemaining: 0,
      pagesPerSecond: '0',
      cpuUsage: '13.9%',
      memoryUsage: '53.2%',
      workers: 0,
    },
    routes: 0,
    score: 0,
  },
  options: {
    moduleWorkingDir:
      'C:/Users/apolubinski/AppData/Local/npm-cache/_npx/944abecbf21dfffb/node_modules/@unlighthouse/core/dist',
    configCacheKey: '45c6',
    lighthouseProcessPath:
      'C:/Users/apolubinski/AppData/Local/npm-cache/_npx/944abecbf21dfffb/node_modules/@unlighthouse/core/dist/process/lighthouse.mjs',
    siteUrl:
      'https://dream-stack-for-react-dev-git-198-medium-impleme-43b913-polubis.vercel.app/',
    outputPath: '.unlighthouse',
    generatedClientPath:
      'C:\\Users\\apolubinski\\Dream-stack-for-React-dev\\system\\audits\\.unlighthouse\\dream-stack-for-react-dev-git-198-medium-impleme-43b913-polubis.vercel.app\\45c6',
    serverUrl: 'http://localhost:5678/',
    apiPath: '/api',
    server: { port: 5678, showURL: false, open: true },
    resolvedClientPath:
      'C:/Users/apolubinski/AppData/Local/npm-cache/_npx/944abecbf21dfffb/node_modules/@unlighthouse/client/dist/index.html',
    clientUrl: 'http://localhost:5678/',
    apiUrl: 'http://localhost:5678/api',
    websocketUrl: 'ws://localhost:5678/api/ws',
    routerPrefix: '/',
    apiPrefix: '/api',
    cache: true,
    client: {
      groupRoutesKey: 'route.definition.name',
      columns: {
        overview: [
          {
            label: 'Screenshot Timeline',
            key: 'report.audits.screenshot-thumbnails',
            cols: 6,
          },
        ],
        performance: [
          {
            cols: 2,
            label: 'Largest Contentful Paint',
            tooltip:
              'Largest Contentful Paint marks the time at which the largest text or image is painted. [Learn more](https://web.dev/lighthouse-largest-contentful-paint/)',
            key: 'report.audits.largest-contentful-paint',
            sortKey: 'numericValue',
          },
          {
            cols: 2,
            label: 'Cumulative Layout Shift',
            tooltip:
              'Cumulative Layout Shift measures the movement of visible elements within the viewport.',
            sortKey: 'numericValue',
            key: 'report.audits.cumulative-layout-shift',
          },
          {
            cols: 1,
            label: 'FID',
            tooltip:
              'The maximum potential First Input Delay that your users could experience is the duration of the longest task. [Learn more](https://web.dev/lighthouse-max-potential-fid/).',
            sortKey: 'numericValue',
            key: 'report.audits.max-potential-fid',
          },
          {
            cols: 1,
            label: 'Blocking',
            tooltip:
              'Sum of all time periods between FCP and Time to Interactive, when task length exceeded 50ms, expressed in milliseconds. [Learn more](https://web.dev/lighthouse-total-blocking-time/).',
            sortKey: 'numericValue',
            key: 'report.audits.total-blocking-time',
          },
          {
            cols: 2,
            label: 'Network Requests',
            sortKey: 'length:details.items',
            tooltip:
              'The requests made during the page render. The size unit is the transfer size of the resources, typically gziped.',
            key: 'report.audits.network-requests',
          },
        ],
        accessibility: [
          {
            cols: 3,
            label: 'Color Contrast',
            tooltip:
              'Background and foreground colors do not have a sufficient contrast ratio.',
            sortKey: 'length:details.items',
            key: 'report.audits.color-contrast',
          },
          {
            cols: 1,
            label: 'Headings',
            tooltip:
              'Heading elements appear in a sequentially-descending order',
            sortKey: 'length:details.items',
            key: 'report.audits.heading-order',
          },
          {
            cols: 1,
            label: 'ARIA',
            tooltip: 'An aggregate of all ARIA audits.',
            sortKey: 'displayValue',
            sortable: true,
            key: 'report.computed.ariaIssues',
          },
          {
            cols: 1,
            label: 'Labels',
            tooltip: 'Form elements have associated labels',
            sortKey: 'length:details.items',
            key: 'report.audits.label',
          },
          {
            cols: 1,
            label: 'Image Alts',
            tooltip: 'Image elements have [alt] attributes',
            sortKey: 'length:details.items',
            key: 'report.audits.image-alt',
          },
          {
            cols: 1,
            label: 'Link Names',
            tooltip: 'Links do not have a discernible name',
            sortKey: 'length:details.items',
            key: 'report.audits.link-name',
          },
        ],
        'best-practices': [
          {
            cols: 2,
            label: 'Errors',
            tooltip: 'No browser errors logged to the console',
            sortKey: 'length:details.items',
            key: 'report.audits.errors-in-console',
          },
          {
            cols: 2,
            label: 'Inspector Issues',
            tooltip: 'No issues in the `Issues` panel in Chrome Devtools',
            sortKey: 'length:details.items',
            key: 'report.audits.inspector-issues',
          },
          {
            cols: 2,
            label: 'Images Responsive',
            tooltip: 'Serves images with appropriate resolution',
            sortKey: 'length:details.items',
            key: 'report.audits.image-size-responsive',
          },
          {
            cols: 2,
            label: 'Image Aspect Ratio',
            tooltip: 'Displays images with correct aspect ratio',
            sortKey: 'length:details.items',
            key: 'report.audits.image-aspect-ratio',
          },
        ],
        seo: [
          {
            cols: 1,
            label: 'Indexable',
            tooltip: 'Page isn’t blocked from indexing',
            key: 'report.audits.is-crawlable',
          },
          {
            cols: 1,
            label: 'Internal link',
            sortable: true,
            key: 'seo.internalLinks',
          },
          {
            cols: 1,
            label: 'External link',
            sortable: true,
            key: 'seo.externalLinks',
          },
          {
            cols: 1,
            label: 'Tap Targets',
            tooltip: 'Tap targets are sized appropriately',
            key: 'report.audits.tap-targets',
          },
          { cols: 2, label: 'Description', key: 'seo.description' },
          { cols: 2, label: 'Share Image', key: 'seo.og.image' },
        ],
      },
    },
    scanner: {
      customSampling: {},
      ignoreI18nPages: true,
      maxRoutes: 200,
      skipJavascript: true,
      samples: 1,
      throttle: false,
      crawler: true,
      dynamicSampling: 5,
      sitemap: true,
      device: 'mobile',
    },
    discovery: false,
    root: 'C:\\Users\\apolubinski\\Dream-stack-for-React-dev\\system\\audits',
    debug: false,
    puppeteerOptions: {
      executablePath:
        'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
      defaultViewport: { width: 360, height: 640 },
    },
    puppeteerClusterOptions: {
      monitor: true,
      workerCreationDelay: 500,
      retryLimit: 3,
      timeout: 300000,
      maxConcurrency: 8,
      skipDuplicateUrls: false,
      retryDelay: 2000,
      concurrency: 3,
      puppeteer: {
        _changedProduct: false,
        _isPuppeteerCore: true,
        configuration: { defaultProduct: 'chrome' },
        defaultBrowserRevision: '1108766',
      },
    },
    lighthouseOptions: {
      onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'],
      throttlingMethod: 'provided',
      throttling: {
        rttMs: 0,
        throughputKbps: 0,
        cpuSlowdownMultiplier: 1,
        requestLatencyMs: 0,
        downloadThroughputKbps: 0,
        uploadThroughputKbps: 0,
      },
      formFactor: 'mobile',
      screenEmulation: {
        mobile: true,
        width: 360,
        height: 640,
        deviceScaleFactor: 2,
      },
    },
    urls: [],
    site: 'https://dream-stack-for-react-dev-git-198-medium-impleme-43b913-polubis.vercel.app/',
    hooks: {},
  },
};
