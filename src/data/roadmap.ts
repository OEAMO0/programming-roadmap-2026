import type { Edge, Node } from '@xyflow/react';
import { MarkerType } from '@xyflow/react';

export type Tone =
  | 'sand'
  | 'reef'
  | 'rose'
  | 'sky'
  | 'lime'
  | 'indigo'
  | 'amber'
  | 'mint'
  | 'plum'
  | 'coral'
  | 'slate';

export type TopicLevel = 'ابدأ' | 'أساسي' | 'عملي' | 'متقدم' | '2026';
export type Journey = 'enter' | 'optional' | 'mastery';

type ResourceLink = {
  label: string;
  url: string;
};

export type TopicDetail = {
  id: string;
  title: string;
  level: TopicLevel;
  category: string;
  summary: string;
  learn: string[];
  build: string[];
  note2026?: string;
  resources: ResourceLink[];
  tags: string[];
  searchKeywords?: string[];
};

type TopicInput = Omit<TopicDetail, 'id'>;

type SectionLayout = {
  id: string;
  tone: Tone;
  right: string[];
  left: string[];
};

export type RoadmapNodeData = {
  title: string;
  category: string;
  level: TopicLevel;
  journey: Journey;
  tone: Tone;
  variant: 'section' | 'topic';
  childCount: number;
  selected?: boolean;
  matched?: boolean;
  dimmed?: boolean;
};

const docs = {
  mdn: 'https://developer.mozilla.org/',
  mdnHtml: 'https://developer.mozilla.org/en-US/docs/Learn/HTML',
  mdnCss: 'https://developer.mozilla.org/en-US/docs/Learn/CSS',
  mdnJs: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  mdnHttp: 'https://developer.mozilla.org/en-US/docs/Web/HTTP',
  mdnA11y: 'https://developer.mozilla.org/en-US/docs/Learn/Accessibility',
  typescript: 'https://www.typescriptlang.org/docs/',
  react: 'https://react.dev/learn',
  vite: 'https://vite.dev/guide/',
  next: 'https://nextjs.org/docs',
  node: 'https://nodejs.org/en/learn',
  git: 'https://git-scm.com/doc',
  githubSkills: 'https://skills.github.com/',
  postgres: 'https://www.postgresql.org/docs/',
  postgresSql: 'https://www.postgresql.org/docs/current/tutorial-sql.html',
  redis: 'https://redis.io/docs/latest/',
  docker: 'https://docs.docker.com/get-started/',
  kubernetes: 'https://kubernetes.io/docs/tutorials/kubernetes-basics/',
  ghActions: 'https://docs.github.com/actions',
  opentofu: 'https://opentofu.org/docs/',
  opentelemetry: 'https://opentelemetry.io/docs/',
  owasp: 'https://owasp.org/Top10/2021/',
  owaspCheatsheets: 'https://cheatsheetseries.owasp.org/',
  owaspLlm: 'https://genai.owasp.org/resource/owasp-top-10-for-llm-applications-2025/',
  mcp: 'https://modelcontextprotocol.io/',
  openai: 'https://platform.openai.com/docs/overview',
  python: 'https://docs.python.org/3/tutorial/',
  go: 'https://go.dev/doc/tutorial/getting-started',
  dotnet: 'https://learn.microsoft.com/aspnet/core/',
  fastapi: 'https://fastapi.tiangolo.com/',
  playwright: 'https://playwright.dev/',
  vitest: 'https://vitest.dev/guide/',
  reactNative: 'https://reactnative.dev/docs/environment-setup',
  flutter: 'https://docs.flutter.dev/get-started/install',
  ubuntuCli: 'https://ubuntu.com/tutorials/command-line-for-beginners',
  mitOcw: 'https://ocw.mit.edu/',
  ostep: 'https://pages.cs.wisc.edu/~remzi/OSTEP/',
  computerHistory: 'https://www.computerhistory.org/',
  nand2tetris: 'https://www.nand2tetris.org/',
  graphql: 'https://graphql.org/learn/',
  cloudflare: 'https://developers.cloudflare.com/fundamentals/',
  sqlite: 'https://www.sqlite.org/docs.html',
  man7: 'https://man7.org/linux/man-pages/',
  cppreferenceC: 'https://en.cppreference.com/w/c',
  cppreferenceCpp: 'https://en.cppreference.com/w/cpp',
  gcc: 'https://gcc.gnu.org/onlinedocs/',
  gdb: 'https://sourceware.org/gdb/current/onlinedocs/gdb/',
  cmake: 'https://cmake.org/documentation/',
  linuxKernel: 'https://docs.kernel.org/',
  unity: 'https://docs.unity3d.com/',
  unreal: 'https://dev.epicgames.com/documentation/unreal-engine/',
  godot: 'https://docs.godotengine.org/en/stable/',
  vulkan: 'https://docs.vulkan.org/guide/latest/',
  vulkanTutorial: 'https://docs.vulkan.org/tutorial/latest/00_Introduction.html',
  directx12: 'https://learn.microsoft.com/en-us/windows/win32/direct3d12/directx-12-programming-guide',
  sdl: 'https://wiki.libsdl.org/',
  learnOpenGL: 'https://learnopengl.com/',
};

const topicInputs = {
  entry: {
    title: 'المدخل والصورة الكبيرة',
    level: 'ابدأ',
    category: 'الأساسيات',
    summary:
      'هذا المسار يثبت فهمك للصورة العامة قبل القفز إلى الأدوات. الفكرة هنا أن تعرف ما الذي تحاول بناءه، وما الطبقات التي تكوّن أي تطبيق حديث.',
    learn: [
      'فرّق بين البرنامج، التطبيق، الموقع، الخدمة، والواجهة البرمجية.',
      'افهم رحلة الطلب من المتصفح حتى الخادم ثم قاعدة البيانات والعودة للمستخدم.',
      'اختر أول لغة بناءً على نوع المشاريع التي تريدها لا بناءً على الضجة فقط.',
    ],
    build: [
      'ارسم رحلة فتح صفحة ويب من كتابة الرابط حتى ظهور النتيجة، وحدد أين يعمل كل جزء.',
    ],
    note2026:
      'في 2026 لم يعد نقص المصادر هو المشكلة الرئيسية، بل فائضها. الخطة الجيدة هي التي تنتج مشروعًا صغيرًا كل أسبوعين.',
    resources: [
      { label: 'MDN Web Docs', url: docs.mdn },
      { label: 'Introduction to Node.js', url: docs.node },
    ],
    tags: ['بداية', 'ويب', 'صورة كبيرة'],
  },
  'digital-literacy': {
    title: 'محو الأمية التقنية',
    level: 'ابدأ',
    category: 'الأساسيات',
    summary:
      'ابدأ من فهم ما يعنيه software وhardware وruntime وbrowser وserver حتى لا تصبح المصطلحات نفسها حاجزًا.',
    learn: [
      'افهم الفرق بين الجهاز الفعلي والبرنامج الذي يعمل عليه.',
      'تعرف على معنى runtime وframework وlibrary وCLI.',
      'كوّن مفردات أساسية تساعدك على قراءة التوثيق بدون ارتباك.',
    ],
    build: ['اصنع قاموسًا شخصيًا من 30 مصطلحًا تقنيًا مع تعريف عملي لكل واحد.'],
    note2026:
      'المطور الذي يكتب prompts كثيرة بلا فهم للمصطلحات الأساسية يظل محدودًا حتى لو امتلك أفضل أدوات AI.',
    resources: [
      { label: 'MDN Glossary', url: docs.mdn },
      { label: 'MIT OpenCourseWare', url: docs.mitOcw },
    ],
    tags: ['مصطلحات', 'runtime', 'browser'],
  },
  'internet-web-basics': {
    title: 'كيف يعمل الإنترنت والويب',
    level: 'ابدأ',
    category: 'الأساسيات',
    summary:
      'فهم DNS وHTTP وTLS والمتصفح والخادم يجعل أي إطار عمل لاحق أوضح بكثير.',
    learn: [
      'افهم كيف يتحول اسم النطاق إلى عنوان IP.',
      'تعرف على الطلب والاستجابة والرؤوس والكوكيز والتخزين المؤقت.',
      'افهم لماذا HTTPS ليس مجرد خيار تجميلي.',
    ],
    build: ['استخدم DevTools لمراقبة طلبات صفحة حقيقية وفسر أهم خمس طلبات تظهر لك.'],
    note2026:
      'الويب الحديث يعتمد بشدة على CDN وedge caching وserver rendering، لذلك الأساس الشبكي صار أهم من السابق.',
    resources: [
      { label: 'MDN HTTP', url: docs.mdnHttp },
      { label: 'MDN Web Docs', url: docs.mdn },
    ],
    tags: ['DNS', 'HTTP', 'TLS', 'Browser'],
  },
  'problem-solving': {
    title: 'التفكير البرمجي وحل المشكلات',
    level: 'ابدأ',
    category: 'الأساسيات',
    summary:
      'قبل كتابة الكود، تعلم كيف تكسر المشكلة إلى خطوات وحالات وحدود واضحة.',
    learn: [
      'اكتب pseudo code قبل التنفيذ عندما تكون المشكلة جديدة عليك.',
      'حدد المدخلات والمخرجات والحالات الطرفية قبل البدء.',
      'تعلم تقسيم المهمة الكبيرة إلى وظائف أصغر يمكن اختبارها.',
    ],
    build: ['حل 10 مسائل صغيرة مع شرح الفكرة قبل كتابة أي سطر كود.'],
    note2026:
      'أدوات AI ممتازة في التسريع، لكنها ترفع قيمة المطور القادر على تمييز الحل الصحيح من الحل المقنع ظاهريًا.',
    resources: [
      { label: 'Python Tutorial', url: docs.python },
      { label: 'MDN JavaScript', url: docs.mdnJs },
    ],
    tags: ['منطق', 'Pseudo Code', 'حل المشكلات'],
  },
  'choosing-first-language': {
    title: 'اختيار اللغة الأولى بذكاء',
    level: 'ابدأ',
    category: 'الأساسيات',
    summary:
      'لا توجد لغة سحرية. اختر لغة تمنحك أسرع دورة تعلم بحسب المجال الذي تريد دخوله.',
    learn: [
      'اختر JavaScript أو TypeScript إذا كان هدفك الويب الكامل بسرعة.',
      'اختر Python إذا كان هدفك أتمتة أو بيانات أو AI prototypes.',
      'اختر C# أو Go أو Java إذا كنت تستهدف بيئات مؤسسية أو backend قويًا ومنظمًا.',
    ],
    build: ['نفذ نفس المشروع الصغير بلغة واحدة فقط لمدة 6 أسابيع متواصلة قبل التفكير بالتبديل.'],
    note2026:
      'في 2026 ما زالت أفضل استراتيجية هي إتقان لغة واحدة إنتاجيًا ثم توسيع الأفق، لا العكس.',
    resources: [
      { label: 'TypeScript Docs', url: docs.typescript },
      { label: 'Python Tutorial', url: docs.python },
      { label: 'Go Tutorial', url: docs.go },
    ],
    tags: ['لغة أولى', 'JavaScript', 'Python', 'C#'],
  },
  'deep-foundations': {
    title: 'أساس الأساس',
    level: 'أساسي',
    category: 'الأساسيات',
    summary:
      'هذا هو المستوى الذي يجعل فهمك غير سطحي. هنا تربط بين البيانات والذاكرة والتنفيذ والطبقات المختلفة التي تقف بين فكرتك وما يظهر على الشاشة.',
    learn: [
      'افهم كيف تمثل البيانات في الذاكرة والنصوص والترميزات والملفات.',
      'اربط بين الشيفرة المصدرية والـruntime ونظام التشغيل والملفات والعمليات.',
      'تعلم التفكير في الطبقات والحدود بدل النظر إلى الأدوات كصناديق مغلقة.',
    ],
    build: ['خذ برنامجًا صغيرًا واشرح كيف يدخل له النص، وكيف يخزن، وكيف ينفذ، وكيف يخرج الناتج خطوة بخطوة.'],
    note2026:
      'المطور الذي يبني هذا العمق مبكرًا يصبح أسرع في التعلم لاحقًا لأن المصطلحات الجديدة تتصل عنده بنماذج ذهنية واضحة.',
    resources: [
      { label: 'Node.js Learn', url: docs.node },
      { label: 'OSTEP', url: docs.ostep },
      { label: 'MDN Web Docs', url: docs.mdn },
    ],
    tags: ['Binary', 'Memory', 'Runtime', 'Abstraction'],
  },
  'binary-data': {
    title: 'البتات والبايتات والترميز',
    level: 'أساسي',
    category: 'الأساسيات',
    summary:
      'فهم كيف تُمثل الأرقام والنصوص والملفات يزيل كثيرًا من الغموض حول الأخطاء المرتبطة بالترميز والدقة والحجم.',
    learn: [
      'افهم binary وbytes وKB/MB والفرق بين النص الخام والترميز مثل UTF-8.',
      'تعرف على لماذا تظهر مشاكل الترميز في النصوص العربية أو الرموز الخاصة.',
      'اربط بين نوع البيانات في اللغة وبين تمثيلها الحقيقي تقريبيًا في الذاكرة أو الملف.',
    ],
    build: ['جرّب قراءة ملف نصي بترميزين مختلفين وفسر لماذا تتعطل بعض الأحرف أو تظهر بشكل غريب.'],
    note2026:
      'هذه التفاصيل تبدو صغيرة، لكنها تفسر كثيرًا من مشاكل البيانات وAPIs والملفات والسجلات في المشاريع الحقيقية.',
    resources: [
      { label: 'Python Tutorial', url: docs.python },
      { label: 'MDN Web Docs', url: docs.mdn },
    ],
    tags: ['Binary', 'Encoding', 'UTF-8', 'Bytes'],
  },
  'abstraction-layers': {
    title: 'طبقات التجريد',
    level: 'أساسي',
    category: 'الأساسيات',
    summary:
      'أي برنامج حديث يتحرك عبر طبقات: لغة، runtime، مكتبات، نظام تشغيل، شبكة، قاعدة بيانات، أو محرك. فهم الطبقات يفسر أين تبحث عن الخطأ وأين تضع الحل.',
    learn: [
      'ميز بين ما تضمنه اللغة، وما يقدمه runtime، وما يضيفه framework.',
      'افهم لماذا حل المشكلة في طبقة خاطئة يولد تعقيدًا إضافيًا.',
      'تعلم أن ترى التطبيق كسلسلة طبقات لا ككتلة واحدة مبهمة.',
    ],
    build: ['اختر صفحة أو خدمة ودوّن كل الطبقات التي تمر بها من الواجهة حتى التخزين أو النظام.'],
    note2026:
      'هذا التفكير مهم جدًا في عصر الأدوات الجاهزة، لأنه يمنعك من التعامل مع كل شيء كـmagic.',
    resources: [
      { label: 'MDN Web Docs', url: docs.mdn },
      { label: 'Node.js Learn', url: docs.node },
    ],
    tags: ['Abstraction', 'Frameworks', 'Runtime', 'Layers'],
  },
  'memory-references': {
    title: 'الذاكرة والقيم والمراجع',
    level: 'أساسي',
    category: 'الأساسيات',
    summary:
      'هنا تبدأ بفهم لماذا تتغير بعض القيم فجأة، ولماذا النسخ ليس دائمًا نسخًا حقيقيًا، ولماذا الأداء أو السلوك قد يتأثر بنمط التخزين.',
    learn: [
      'افهم value vs reference behavior بصورة عملية.',
      'تعرف على stack وheap بصورة ذهنية مبسطة تساعدك في التصحيح.',
      'اربط بين mutability وside effects وصعوبة تتبع الحالة.',
    ],
    build: ['اكتب أمثلة صغيرة توضح الفرق بين النسخ بالقيمة والمراجع داخل لغتك الأولى.'],
    note2026:
      'فهم الحالة والمراجع من أكثر ما يميز من يفهم البرامج فعلًا عن من يحفظ syntax فقط.',
    resources: [
      { label: 'TypeScript Docs', url: docs.typescript },
      { label: 'Python Tutorial', url: docs.python },
    ],
    tags: ['Memory', 'References', 'Mutability', 'State'],
  },
  'runtime-execution': {
    title: 'الترجمة والتنفيذ والـRuntime',
    level: 'أساسي',
    category: 'الأساسيات',
    summary:
      'ليس كل كود ينفذ بالطريقة نفسها. بعضه يترجم مسبقًا، وبعضه يفسر، وبعضه يمر عبر JIT أو managed runtime أو virtual machine.',
    learn: [
      'افهم الفرق بين compile time وruntime وinterpretation وJIT.',
      'تعرف على لماذا تختلف رسائل الأخطاء أو الأداء بين البيئات المختلفة.',
      'اربط بين بيئة التنفيذ وبين طريقة التوزيع والتشغيل والتصحيح.',
    ],
    build: ['خذ نفس الفكرة البرمجية وقارن كيف تعمل في لغة مترجمة ولغة تعتمد runtime أو interpreter.'],
    note2026:
      'هذه المفاهيم تساعدك كثيرًا عند الانتقال بين JavaScript وPython وC# وGo وغيرها.',
    resources: [
      { label: 'Node.js Learn', url: docs.node },
      { label: 'Go Tutorial', url: docs.go },
      { label: 'ASP.NET Core', url: docs.dotnet },
    ],
    tags: ['Runtime', 'Compile Time', 'Interpreter', 'JIT'],
  },
  'filesystem-processes': {
    title: 'الملفات والمسارات والعمليات',
    level: 'أساسي',
    category: 'الأساسيات',
    summary:
      'كثير من البرامج تتعطل بسبب مسار خاطئ أو صلاحية أو عملية تعمل في مكان غير متوقع. هذا جزء أساسي من الفهم العميق المبكر.',
    learn: [
      'تعرف على المسارات المطلقة والنسبية والامتدادات وبيئات التشغيل.',
      'افهم العملية process كبرنامج يعمل مع ملفات ومنافذ ومتغيرات بيئية.',
      'اربط بين المجلد الحالي وبين أثره على قراءة الملفات والتشغيل والبناء.',
    ],
    build: ['أنشئ برنامجًا صغيرًا يقرأ ملفًا من مسار نسبي ثم بدّله إلى مسار مطلق واشرح الفرق.'],
    note2026:
      'هذه المعرفة تبدو بسيطة لكنها أساس يومي لأي تطوير حقيقي محلي أو في الخوادم أو داخل الحاويات.',
    resources: [
      { label: 'Ubuntu Command Line', url: docs.ubuntuCli },
      { label: 'OSTEP', url: docs.ostep },
    ],
    tags: ['Filesystem', 'Paths', 'Processes', 'Environment'],
  },
  'state-data-flow': {
    title: 'الحالة وتدفق البيانات',
    level: 'أساسي',
    category: 'الأساسيات',
    summary:
      'تقريبًا كل الأنظمة هي حالة تتغير بمرور الوقت. فهم state transitions وتدفق البيانات مبكرًا يجعل المعمارية لاحقًا أسهل بكثير.',
    learn: [
      'افهم أين تنشأ البيانات، وأين تتغير، ومن يملك حق تعديلها.',
      'تعرف على الفارق بين shared mutable state وبين data flow أوضح.',
      'استخدم الرسوم أو الجداول أو state machines لتوضيح التعقيد بدل إخفائه.',
    ],
    build: ['صف شاشة أو خدمة على شكل حالات وانتقالات واضحة، ثم ابنها برمجيًا.'],
    note2026:
      'هذا المفهوم أساسي في الواجهات، الخلفيات، الألعاب، والأنظمة المعتمدة على الأحداث والـAI أيضًا.',
    resources: [
      { label: 'React Learn', url: docs.react },
      { label: 'Node.js Learn', url: docs.node },
    ],
    tags: ['State', 'Data Flow', 'Transitions', 'Ownership'],
  },
  'core-programming': {
    title: 'أساسيات البرمجة',
    level: 'أساسي',
    category: 'البرمجة',
    summary:
      'هنا تتعلم اللبنات التي ستكررها في كل لغة تقريبًا: التحكم بالتدفق، البيانات، الدوال، الأخطاء، والاختبار الأولي.',
    learn: [
      'اربط بين المتغيرات، الشروط، الحلقات، الدوال، والمصفوفات في تمارين عملية.',
      'اكتب برامج صغيرة كاملة بدل الاكتفاء بأمثلة منفصلة.',
      'عوّد نفسك على إصلاح الأخطاء وقراءة الرسائل بدل الهروب منها.',
    ],
    build: ['ابنِ برامج CLI صغيرة: آلة حاسبة، مدير مهام نصي، محول صيغ، وعدة تمارين ملفات.'],
    note2026:
      'كلما كانت قواعدك الأساسية أقوى، أصبحت استفادتك من AI أكبر لأنك ستراجع وتصحح بدل أن تنسخ فقط.',
    resources: [
      { label: 'TypeScript Handbook', url: docs.typescript },
      { label: 'Python Tutorial', url: docs.python },
    ],
    tags: ['أساسيات', 'Control Flow', 'Functions'],
  },
  'variables-control-flow': {
    title: 'المتغيرات وتدفق التنفيذ',
    level: 'أساسي',
    category: 'البرمجة',
    summary:
      'افهم كيف تُخزن القيم، وكيف ينتقل البرنامج بين الحالات المختلفة عبر الشروط والحلقات.',
    learn: [
      'ميز بين الأنواع البدائية والهياكل المركبة.',
      'افهم نطاق المتغيرات والتهيئة والتحويلات الشائعة.',
      'استخدم الحلقات والشروط عندما تحتاجها فعلًا ولا تكرر الكود يدويًا.',
    ],
    build: ['أنشئ برنامجًا يعالج مدخلات المستخدم ويطبع تقارير مختلفة حسب الحالات.'],
    note2026:
      'اللغات الحديثة تقدم type systems ومحللات static قوية، لكن الخطأ المنطقي في الشروط ما زال من أكثر الأخطاء انتشارًا.',
    resources: [
      { label: 'MDN JavaScript', url: docs.mdnJs },
      { label: 'TypeScript Handbook', url: docs.typescript },
    ],
    tags: ['Variables', 'Loops', 'Conditions'],
  },
  'functions-modules': {
    title: 'الدوال والوحدات',
    level: 'أساسي',
    category: 'البرمجة',
    summary:
      'الدوال والوحدات هي بداية التنظيم الحقيقي للكود، ومن دونها يتحول المشروع بسرعة إلى فوضى.',
    learn: [
      'افصل بين منطق العمل وطبقة الإدخال والإخراج.',
      'استخدم التوقيعات الواضحة وأسماء الدوال التي تصف النية.',
      'تعلم تنظيم الملفات والوحدات حتى في المشاريع الصغيرة.',
    ],
    build: ['حوّل برنامجًا واحدًا كبيرًا إلى عدة ملفات ووحدات مع واجهات واضحة بينها.'],
    note2026:
      'مع انتشار code generation، صار التصميم الجيد للدوال والوحدات هو الفرق بين مشروع يتوسع ومشروع يتكسر.',
    resources: [
      { label: 'TypeScript Functions', url: docs.typescript },
      { label: 'Python Tutorial', url: docs.python },
    ],
    tags: ['Functions', 'Modules', 'Structure'],
  },
  'data-structures-core': {
    title: 'هياكل البيانات الأساسية',
    level: 'أساسي',
    category: 'البرمجة',
    summary:
      'المصفوفات، الكائنات، القوائم، الخرائط، والمجموعات هي الأدوات اليومية التي تبني بها الحلول العملية.',
    learn: [
      'اعرف متى تستخدم array ومتى تستخدم map أو set.',
      'افهم تكلفة البحث والإضافة والحذف بشكل تقريبي.',
      'تعلم التفكير في البيانات قبل التفكير في الواجهة.',
    ],
    build: ['ابنِ فهرسًا صغيرًا للكتب أو الملاحظات مع إمكانيات بحث وفرز وتجميع.'],
    note2026:
      'الذكاء الاصطناعي قد يقترح بنى بيانات تعمل، لكنه غالبًا لا يختار الأنسب لقيودك إن لم تحددها بوضوح.',
    resources: [
      { label: 'TypeScript Handbook', url: docs.typescript },
      { label: 'MIT OpenCourseWare', url: docs.mitOcw },
    ],
    tags: ['Array', 'Map', 'Set', 'Data Structures'],
  },
  'debugging-error-handling': {
    title: 'التصحيح والتعامل مع الأخطاء',
    level: 'أساسي',
    category: 'البرمجة',
    summary:
      'التصحيح مهارة يومية وليست مرحلة طارئة. الهدف أن تعرف كيف تعزل المشكلة وتفسر السبب الحقيقي لا العرض الظاهر فقط.',
    learn: [
      'اقرأ stack traces ورسائل الخطأ حتى آخر سطر مهم.',
      'استخدم breakpoints وlogs واختبارات صغيرة لعزل الخلل.',
      'فرّق بين handling الخطأ وابتلاعه بصمت.',
    ],
    build: ['خذ مشروعًا صغيرًا وأدخل فيه ثلاثة bugs مقصودة ثم أصلحها بطريقة موثقة.'],
    note2026:
      'في عصر AI أصبح التصحيح أهم من الكتابة نفسها، لأن الكثير من المخرجات تبدو معقولة لكنها تفشل عند الحواف.',
    resources: [
      { label: 'Node.js Learn', url: docs.node },
      { label: 'MDN JavaScript', url: docs.mdnJs },
    ],
    tags: ['Debugging', 'Stack Trace', 'Errors'],
  },
  'testing-basics': {
    title: 'الاختبارات الأساسية',
    level: 'أساسي',
    category: 'البرمجة',
    summary:
      'تعلم كتابة اختبارات صغيرة على الدوال والمنطق الأساسي قبل أن تنتقل إلى اختبارات الواجهات والتكامل.',
    learn: [
      'ابدأ باختبار السلوك المهم لا كل سطر.',
      'اكتب بيانات إدخال معقولة وحالات طرفية.',
      'اجعل الاختبار مقروءًا مثل وثيقة سلوكية مختصرة.',
    ],
    build: ['أضف suite بسيطة لدوال حسابية أو نصية ثم غطِّ حالات النجاح والفشل والحدود.'],
    note2026:
      'المشاريع التي تستخدم AI في الإنتاج تحتاج اختبارات أوضح لأن التغيير السريع يزيد احتمال الانكسار غير الملحوظ.',
    resources: [
      { label: 'Vitest Guide', url: docs.vitest },
      { label: 'Playwright Docs', url: docs.playwright },
    ],
    tags: ['Testing', 'Assertions', 'Unit Tests'],
  },
  'developer-workflow': {
    title: 'بيئة المطور والتعاون',
    level: 'أساسي',
    category: 'الاحتراف',
    summary:
      'هذا المسار يجهزك للعمل اليومي الحقيقي: محرر، طرفية، Git، حزم، مراجعات كود، وتوثيق.',
    learn: [
      'ابنِ بيئة عمل تعيد استخدامها بدل البدء من الصفر كل مرة.',
      'أتقن Git بما يكفي للعمل ضمن فريق بدون خوف.',
      'تعلم توثيق القرار والمراجعة، لا الكود فقط.',
    ],
    build: ['أنشئ مشروعًا صغيرًا مع README نظيف وhistory واضح من عدة commits منطقية.'],
    note2026:
      'الفرق السريعة اليوم تعتمد على جودة workflow بقدر اعتمادها على جودة الكود، خصوصًا مع كثرة التغييرات المولدة بالـAI.',
    resources: [
      { label: 'Git Documentation', url: docs.git },
      { label: 'GitHub Skills', url: docs.githubSkills },
    ],
    tags: ['Workflow', 'Git', 'Tooling'],
  },
  'editor-terminal': {
    title: 'المحرر والطرفية',
    level: 'أساسي',
    category: 'الاحتراف',
    summary:
      'تعلم أدواتك اليومية بعمق بسيط: التنقل، البحث، الاختصارات، المهام، وإدارة البيئة.',
    learn: [
      'استخدم البحث السريع والـmulti-cursor والـrefactor tools.',
      'أتقن أوامر الملفات، المسارات، المتغيرات البيئية، وإخراج الأوامر.',
      'قلل الاعتماد على الواجهة الرسومية عندما تكون الطرفية أسرع وأكثر قابلية للتكرار.',
    ],
    build: ['نفذ مشروع CLI صغير يدير ملفات ومجلدات ويطبع logs مفهومة.'],
    note2026:
      'أدوات المساعدة الذكية داخل المحرر فعالة جدًا، لكن قيمتها تتضاعف عندما تكون أنت سريعًا في التنقل والتشخيص أصلًا.',
    resources: [
      { label: 'Ubuntu Command Line', url: docs.ubuntuCli },
      { label: 'Vite Guide', url: docs.vite },
    ],
    tags: ['CLI', 'Editor', 'Terminal'],
  },
  'git-github': {
    title: 'Git وGitHub عمليًا',
    level: 'أساسي',
    category: 'الاحتراف',
    summary:
      'المهم ليس حفظ كل الأوامر بل فهم الـhistory، الفروع، المراجعات، وكيف تبقي التغييرات واضحة وقابلة للرجوع.',
    learn: [
      'اعرف الفرق بين working tree وstaging وcommit history.',
      'استخدم branches صغيرة ووصف commits بوضوح.',
      'تعلم pull request وcode review وmerge conflict resolution.',
    ],
    build: ['نفذ feature صغيرة عبر branch منفصل ثم افتح لها PR حتى لو كنت تعمل وحدك.'],
    note2026:
      'مع كثرة المخرجات الآلية، صار commit الصغير الواضح أكثر قيمة من commit الضخم الذي لا يمكن مراجعته.',
    resources: [
      { label: 'Git Documentation', url: docs.git },
      { label: 'GitHub Skills', url: docs.githubSkills },
    ],
    tags: ['Git', 'GitHub', 'Pull Requests'],
  },
  'package-managers': {
    title: 'مديرو الحزم والاعتماديات',
    level: 'أساسي',
    category: 'الاحتراف',
    summary:
      'تعلم كيف تُدار الاعتماديات، الإصدارات، وملفات lock حتى لا يتحول المشروع إلى صندوق أسود.',
    learn: [
      'افهم الفرق بين dependency وdevDependency والحزم العابرة.',
      'تعرف على semver وحدود الإصدارات وملفات lock.',
      'راجع التحديثات من حيث المخاطر والاحتياج لا من حيث الحداثة فقط.',
    ],
    build: ['حدث تبعية واحدة في مشروع تجريبي واكتب ملاحظات عن الأثر والمخاطر وخطة التراجع.'],
    note2026:
      'سلسلة التوريد البرمجية supply chain أصبحت ساحة أمان مهمة، لذلك إدارة الحزم لم تعد مهمة ثانوية.',
    resources: [
      { label: 'Node.js Learn', url: docs.node },
      { label: 'OWASP Cheat Sheet Series', url: docs.owaspCheatsheets },
    ],
    tags: ['Dependencies', 'Semver', 'Lockfile'],
  },
  'docs-code-review': {
    title: 'التوثيق ومراجعة الكود',
    level: 'عملي',
    category: 'الاحتراف',
    summary:
      'الكود الجيد وحده لا يكفي. يجب أن تشرح القرارات وتراجع التغييرات بطريقة تقلل المخاطر وتزيد الفهم المشترك.',
    learn: [
      'اكتب README يشرح التشغيل والهيكل والقرارات الأساسية.',
      'راجع السلوك والمخاطر والاختبارات قبل الأسلوب الشكلي.',
      'استخدم التعليقات لشرح النية أو المقايضة، لا لقراءة الكود بصوت عالٍ.',
    ],
    build: ['خذ feature صغيرة واكتب لها PR description واضح يتضمن السبب والاختبار والمخاطر.'],
    note2026:
      'في فرق 2026 الناجحة، التوثيق السريع والحي أهم من الوثائق الضخمة التي لا يقرأها أحد.',
    resources: [
      { label: 'GitHub Skills', url: docs.githubSkills },
      { label: 'OWASP Cheat Sheet Series', url: docs.owaspCheatsheets },
    ],
    tags: ['Documentation', 'Code Review', 'PRs'],
  },
  'frontend-web': {
    title: 'الويب والواجهة الأمامية',
    level: 'عملي',
    category: 'الويب',
    summary:
      'هذا المسار يحولك من كاتب مكونات إلى مهندس واجهة يفهم المنصة نفسها: HTML وCSS وJS وframeworks والأداء والإتاحة.',
    learn: [
      'ابدأ بالمنصة قبل framework.',
      'اربط بين البيانات والواجهة والانتقال والحالة والتحميل.',
      'ابنِ واجهات قابلة للتطوير وتحترم الأداء والإتاحة.',
    ],
    build: ['أنشئ dashboard حقيقي يقرأ بيانات ويعرض حالات loading وerror وempty بوضوح.'],
    note2026:
      'المسار الأمامي اليوم يتقاطع مع SSR وstreaming وserver actions وdesign systems أكثر من أي وقت مضى.',
    resources: [
      { label: 'MDN Web Docs', url: docs.mdn },
      { label: 'React Learn', url: docs.react },
      { label: 'Next.js Docs', url: docs.next },
    ],
    tags: ['Frontend', 'Web', 'UI'],
  },
  'html-css-layout': {
    title: 'HTML وCSS والتخطيط',
    level: 'أساسي',
    category: 'الويب',
    summary:
      'إذا ضعف أساس HTML وCSS ستقضي وقتك كله في ترقيع الواجهة داخل أي framework تستخدمه.',
    learn: [
      'اكتب HTML دلاليًا قبل التفكير بالشكل.',
      'أتقن Flexbox وGrid والمسافات والاستجابة للشاشات المختلفة.',
      'نظم الأنماط عبر tokens ومتغيرات CSS بدل النسخ العشوائي.',
    ],
    build: ['ابنِ صفحة هبوط متجاوبة بالكامل دون أي framework CSS.'],
    note2026:
      'CSS الحديث أقوى بكثير من الماضي، لذلك كثير من المشاكل التي كانت تحتاج JS صارت تحل أنظف داخل CSS نفسه.',
    resources: [
      { label: 'MDN HTML', url: docs.mdnHtml },
      { label: 'MDN CSS', url: docs.mdnCss },
    ],
    tags: ['HTML', 'CSS', 'Responsive'],
  },
  'javascript-typescript': {
    title: 'JavaScript وTypeScript بعمق عملي',
    level: 'عملي',
    category: 'الويب',
    summary:
      'هنا تتعامل مع اللغة فعلًا: الأنواع، الوعود، الكائنات، الوحدات، والحدود بين وقت الترجمة ووقت التشغيل.',
    learn: [
      'افهم event loop والـasync/await والـpromises.',
      'استخدم TypeScript لتوضيح النماذج والعقود لا لإخفاء الغموض تحت أي نوع.',
      'ميّز بين ما يضمنه compiler وما يجب ضمانه runtime.',
    ],
    build: ['أنشئ client صغيرًا يستهلك API مع types واضحة وتحقق runtime للبيانات القادمة.'],
    note2026:
      'TypeScript في 2026 صار خط الدفاع الأول ضد كثير من أخطاء الواجهات والباك إند المكتوبة بالـJS ecosystem.',
    resources: [
      { label: 'MDN JavaScript', url: docs.mdnJs },
      { label: 'TypeScript Docs', url: docs.typescript },
    ],
    tags: ['JavaScript', 'TypeScript', 'Async'],
  },
  'frontend-framework': {
    title: 'إطار العمل الأمامي',
    level: 'عملي',
    category: 'الويب',
    summary:
      'اختر framework واحدًا تتقنه إنتاجيًا. React شائع جدًا، لكن المهم هو فهم model الحالة والرندر وتدفق البيانات.',
    learn: [
      'افهم كيف يبني framework الواجهة من الحالة.',
      'تعرف على component boundaries وcomposition وfetching patterns.',
      'تعلم متى تستخدم framework full-stack مثل Next.js ومتى يكفيك SPA أخف.',
    ],
    build: ['ابنِ تطبيق مهام متعدد الصفحات مع تخزين محلي ثم اربطه بخادم بسيط.'],
    note2026:
      'أفضل مطور واجهات في 2026 ليس من يحفظ hooks أكثر، بل من يختار أقل بنية تعقيدًا تحقق المطلوب.',
    resources: [
      { label: 'React Learn', url: docs.react },
      { label: 'Next.js Docs', url: docs.next },
      { label: 'Vite Guide', url: docs.vite },
    ],
    tags: ['React', 'Next.js', 'State'],
  },
  'routing-state-fetching': {
    title: 'التنقل والحالة وجلب البيانات',
    level: 'عملي',
    category: 'الويب',
    summary:
      'هذه المنطقة هي قلب التطبيقات الحديثة: من أين تأتي البيانات، أين تُخزن، ومتى تُعرض أو تُحدث.',
    learn: [
      'افصل بين server state وclient state ما أمكن.',
      'صمم loading وerror وempty states من البداية.',
      'استخدم caching وإعادة الطلب الذكية بدل التحديث الأعمى.',
    ],
    build: ['نفذ شاشة قائمة وتفاصيل مع بحث وpagination وتحديث متفائل optimistic update.'],
    note2026:
      'مع ازدياد استخدام server rendering وstreaming، صار قرار مكان جلب البيانات جزءًا معماريًا لا مجرد تفصيل واجهة.',
    resources: [
      { label: 'React Learn', url: docs.react },
      { label: 'Next.js Docs', url: docs.next },
    ],
    tags: ['Routing', 'State', 'Fetching', 'Caching'],
  },
  'accessibility-performance': {
    title: 'الإتاحة والأداء',
    level: 'عملي',
    category: 'الويب',
    summary:
      'واجهة جميلة لا تكفي إذا كانت بطيئة أو غير قابلة للاستخدام بلوحة المفاتيح أو قارئات الشاشة.',
    learn: [
      'استخدم semantic HTML قبل إضافة ARIA.',
      'راقب حجم الحزم، الصور، وأثر الـhydration والرندر المتكرر.',
      'اختبر التباين والتنقل بلوحة المفاتيح والـfocus states باستمرار.',
    ],
    build: ['حسّن صفحة حقيقية عبر Lighthouse وقياسات Web Vitals ثم وثق النتائج قبل وبعد.'],
    note2026:
      'الأداء في 2026 يتأثر كثيرًا بقرارات SSR وbundling والصور والـthird-party scripts أكثر من تأثير micro-optimizations.',
    resources: [
      { label: 'MDN Accessibility', url: docs.mdnA11y },
      { label: 'React Learn', url: docs.react },
    ],
    tags: ['A11y', 'Performance', 'Web Vitals'],
  },
  'backend-data': {
    title: 'الخلفية والبيانات',
    level: 'عملي',
    category: 'الخلفية',
    summary:
      'الواجهة الخلفية ليست endpoints فقط؛ هي نماذج بيانات، مصادقة، معالجة خلفية، caching، وتشغيل موثوق.',
    learn: [
      'صمم API واضحة وسلوكًا متوقعًا للحالات المختلفة.',
      'اربط قاعدة البيانات بالنموذج البرمجي بعناية بدل الاعتماد على ORM وحده.',
      'افهم أين تنتهي مسؤولية الخادم وأين تبدأ مسؤولية المنصة أو قاعدة البيانات.',
    ],
    build: ['ابنِ خدمة CRUD حقيقية مع auth وتسجيل وأعمال background بسيطة.'],
    note2026:
      'المشهد الخلفي الحالي يدفع أكثر نحو modular monolith وmanaged services بدل التعقيد المبكر على شكل microservices.',
    resources: [
      { label: 'Node.js Learn', url: docs.node },
      { label: 'PostgreSQL Docs', url: docs.postgres },
    ],
    tags: ['Backend', 'API', 'Database'],
  },
  'http-apis': {
    title: 'HTTP وAPIs',
    level: 'عملي',
    category: 'الخلفية',
    summary:
      'تعلم بناء APIs مفهومة، مستقرة، وقابلة للتشخيص قبل التفكير في التعقيد الزائد.',
    learn: [
      'استخدم الطرق والحالات والرؤوس بشكل متسق.',
      'صمم رسائل أخطاء قابلة للفهم من العميل ومن المطور.',
      'ضع versioning عندما تحتاجه فعلًا لا بشكل تلقائي.',
    ],
    build: ['ابنِ API لمهام أو ملاحظات مع pagination وfilters وأخطاء منظمة.'],
    note2026:
      'REST ما زال الخيار الافتراضي الممتاز لمعظم الأنظمة، بينما تستخدم GraphQL أو gRPC عندما توجد أسباب واضحة لذلك.',
    resources: [
      { label: 'MDN HTTP', url: docs.mdnHttp },
      { label: 'FastAPI Docs', url: docs.fastapi },
      { label: 'ASP.NET Core', url: docs.dotnet },
    ],
    tags: ['HTTP', 'REST', 'API Design'],
  },
  'auth-sessions': {
    title: 'المصادقة والجلسات والصلاحيات',
    level: 'عملي',
    category: 'الخلفية',
    summary:
      'أكثر جزء يسيء الناس فهمه هو الفرق بين التحقق من الهوية، إدارة الجلسة، وتفويض الصلاحيات.',
    learn: [
      'افهم Authentication مقابل Authorization.',
      'قارن بين session cookies وtoken-based flows بحسب السياق.',
      'صمم الأدوار والصلاحيات وطبقة التحقق من الوصول مبكرًا.',
    ],
    build: ['أضف تسجيل دخول وصلاحيات مستخدم/مشرف إلى مشروعك مع حماية المسارات والموارد.'],
    note2026:
      'الأمان الحديث لا يدور فقط حول JWT؛ بل حول lifecycle كامل يشمل refresh, revocation, audit, device trust.',
    resources: [
      { label: 'OWASP Top 10', url: docs.owasp },
      { label: 'OWASP Cheat Sheet Series', url: docs.owaspCheatsheets },
    ],
    tags: ['Auth', 'Sessions', 'RBAC', 'JWT'],
  },
  'sql-modeling': {
    title: 'SQL ونمذجة البيانات',
    level: 'عملي',
    category: 'الخلفية',
    summary:
      'نموذج البيانات الجيد يقلل الأخطاء والتعقيد والتكرار لاحقًا أكثر من كثير من refactors البرمجية.',
    learn: [
      'صمم الجداول والعلاقات والقيود بما يخدم الواقع لا الواجهة فقط.',
      'اكتب SQL الأساسي بنفسك حتى لو استخدمت ORM.',
      'افهم الفهارس والمعاملات وتأثيرها على الأداء والصحة.',
    ],
    build: ['صمم قاعدة بيانات لتطبيق متجر صغير مع علاقات وتقارير أساسية واستعلامات مفيدة.'],
    note2026:
      'PostgreSQL يظل خيارًا افتراضيًا ممتازًا جدًا في 2026 لكثير من التطبيقات بفضل مرونته ونضجه.',
    resources: [
      { label: 'PostgreSQL Docs', url: docs.postgres },
      { label: 'PostgreSQL SQL Tutorial', url: docs.postgresSql },
    ],
    tags: ['SQL', 'PostgreSQL', 'Modeling', 'Indexes'],
  },
  'caching-queues-search': {
    title: 'الكاش والمهام الخلفية والبحث',
    level: 'عملي',
    category: 'الخلفية',
    summary:
      'عندما يبدأ التطبيق بالنمو، تحتاج لتمييز العمل الفوري من العمل المؤجل، وما يجب تخزينه مؤقتًا وما يجب البحث فيه بشكل خاص.',
    learn: [
      'افهم متى تستخدم cache ومتى يصبح خطرًا يسبب بيانات قديمة.',
      'انقل الأعمال الثقيلة إلى queues أو background jobs.',
      'اعرف متى تحتاج محرك بحث أو indexing خاص بدل SQL عادي.',
    ],
    build: ['أضف queue لإرسال بريد أو توليد تقرير، مع cache لقراءة متكررة ومراقبة invalidation.'],
    note2026:
      'التعقيد هنا مفيد فقط عندما توجد bottlenecks واضحة؛ وإلا فالمونوليث البسيط مع Postgres وRedis يكفي كثيرًا.',
    resources: [
      { label: 'Redis Docs', url: docs.redis },
      { label: 'PostgreSQL Docs', url: docs.postgres },
    ],
    tags: ['Cache', 'Queues', 'Redis', 'Search'],
  },
  'backend-frameworks-deployment': {
    title: 'اختيار إطار الباك إند والنشر',
    level: 'عملي',
    category: 'الخلفية',
    summary:
      'الإطار مجرد وسيلة. المهم أن تختار ما يخدم فريقك، نمط التشغيل، وقابلية الصيانة على المدى المتوسط.',
    learn: [
      'قارن بين Node وPython وGo و.NET بحسب خبرة الفريق والحمولة ومتطلبات المنصة.',
      'حضّر الإعدادات والبيئات والـconfig management بشكل واضح.',
      'افهم ما الذي يحدث بين التطبيق والعكس proxy والمنصة وقاعدة البيانات في الإنتاج.',
    ],
    build: ['انشر خدمة خلفية مع health checks وconfig واضح وسجلات مفهومة.'],
    note2026:
      'تجربة المطور وسرعة iteration صارت عامل اختيار كبير لإطار العمل، وليس benchmark خام فقط.',
    resources: [
      { label: 'Node.js Learn', url: docs.node },
      { label: 'FastAPI Docs', url: docs.fastapi },
      { label: 'ASP.NET Core', url: docs.dotnet },
    ],
    tags: ['Deployment', 'Node.js', 'FastAPI', '.NET'],
  },
  'architecture-systems': {
    title: 'المعمارية والأنظمة',
    level: 'متقدم',
    category: 'الأنظمة',
    summary:
      'هنا تبدأ بالنظر إلى التطبيق كمنظومة كاملة: حدود، موثوقية، مراقبة، وتوسع تحت ضغط واقعي.',
    learn: [
      'ميز بين modular monolith والتجزئة إلى خدمات.',
      'صمم للوضوح والقدرة على التشخيص قبل التصميم للتوسع غير الموجود.',
      'تعلم موازنة الأداء والتكلفة والتعقيد ووقت التسليم.',
    ],
    build: ['وثّق معمارية مشروعك الحالي مع رسم تدفق البيانات ونقاط الفشل والاعتمادات الخارجية.'],
    note2026:
      'في 2026 تعود كثير من الفرق من microservices المبالغ فيها إلى modular monolith أو service boundaries أوضح وأقل تكلفة.',
    resources: [
      { label: 'OpenTelemetry Docs', url: docs.opentelemetry },
      { label: 'PostgreSQL Docs', url: docs.postgres },
    ],
    tags: ['Architecture', 'Scalability', 'Reliability'],
  },
  'monolith-modular': {
    title: 'Monolith مقابل Modular Monolith',
    level: 'متقدم',
    category: 'الأنظمة',
    summary:
      'المونوليث ليس عيبًا. غالبًا هو أفضل نقطة انطلاق إذا كانت حدوده الداخلية واضحة وطبقاته منضبطة.',
    learn: [
      'افهم فوائد البدء بمونوليث منظم قبل القفز إلى خدمات مستقلة.',
      'افصل الوحدات بالواجهات والعقود لا بالفوضى داخل مجلدات مشتركة.',
      'ضع حدودًا للدومينات ومخازن البيانات والصلاحيات.',
    ],
    build: ['أعد تنظيم مشروع متوسط إلى وحدات مستقلة نسبيًا داخل نفس الخدمة.'],
    note2026:
      'كثير من الفرق تنجح أكثر عندما تستثمر في modular monolith قوي بدل تشتيت الجهد على بنية موزعة مبكرًا.',
    resources: [
      { label: 'Node.js Learn', url: docs.node },
      { label: 'ASP.NET Core', url: docs.dotnet },
    ],
    tags: ['Monolith', 'Modularity', 'Boundaries'],
  },
  'services-events': {
    title: 'الخدمات والرسائل والأحداث',
    level: 'متقدم',
    category: 'الأنظمة',
    summary:
      'عندما تنقسم المنظومة إلى أكثر من خدمة، تحتاج لعقود أوضح، تأخير شبكي، وطرق تواصل تتحمل الفشل.',
    learn: [
      'افهم الفرق بين request/response وevent-driven communication.',
      'تعرف على idempotency وإعادة المحاولة والتعويض.',
      'فكر في ownership البيانات قبل التفكير في البروتوكول.',
    ],
    build: ['صمم integration بسيطة بين خدمتين مع queue وإعادة محاولة واضحة.'],
    note2026:
      'الحدث event ليس حلًا سحريًا؛ إن لم تضبط الملكية والتتبع ستزداد صعوبة التشخيص بسرعة.',
    resources: [
      { label: 'OpenTelemetry Docs', url: docs.opentelemetry },
      { label: 'Redis Docs', url: docs.redis },
    ],
    tags: ['Services', 'Events', 'Queues', 'Idempotency'],
  },
  'scalability-resilience': {
    title: 'التوسع والموثوقية',
    level: 'متقدم',
    category: 'الأنظمة',
    summary:
      'التوسع لا يعني فقط المزيد من السيرفرات، بل يعني أيضًا graceful degradation والقدرة على امتصاص الضغط دون انهيار كامل.',
    learn: [
      'افهم bottlenecks في CPU وI/O وقواعد البيانات والاعتمادات الخارجية.',
      'طبق timeouts وretries وcircuit breakers عندما يلزم.',
      'وازن بين consistency والlatency والكلفة.',
    ],
    build: ['اكتب قائمة فشل لخدمة حقيقية: ماذا يحدث إذا تعطلت قاعدة البيانات أو تأخر طرف خارجي؟'],
    note2026:
      'المرونة في 2026 تعني أيضًا التفكير في limits مزودي الذكاء الاصطناعي والاعتمادات المدارة لا الخوادم الخاصة فقط.',
    resources: [
      { label: 'OpenTelemetry Docs', url: docs.opentelemetry },
      { label: 'Kubernetes Basics', url: docs.kubernetes },
    ],
    tags: ['Scalability', 'Reliability', 'Timeouts'],
  },
  observability: {
    title: 'Observability والتشخيص',
    level: 'متقدم',
    category: 'الأنظمة',
    summary:
      'إذا لم تستطع فهم ما يحدث في الإنتاج فأنت تتعامل مع النظام بالتخمين. السجلات والقياسات والتتبعات يجب أن تبنى من البداية.',
    learn: [
      'اجمع logs وmetrics وtraces بشكل مترابط.',
      'عرّف مؤشرات خدمة واضحة مثل latency وerror rate وthroughput.',
      'صمم dashboards وتنبيهات تقلل الضوضاء ولا تزيدها.',
    ],
    build: ['أضف tracing بسيط وstructured logs إلى خدمة صغيرة ثم تابع رحلة طلب واحدة كاملة.'],
    note2026:
      'OpenTelemetry أصبح نقطة مركزية جدًا في أدوات المراقبة الحديثة، لذلك يستحق أن يكون في خطتك مبكرًا.',
    resources: [
      { label: 'OpenTelemetry Docs', url: docs.opentelemetry },
      { label: 'GitHub Actions', url: docs.ghActions },
    ],
    tags: ['Observability', 'Tracing', 'Logs', 'Metrics'],
  },
  'quality-security': {
    title: 'الجودة والأمان',
    level: 'متقدم',
    category: 'الجودة',
    summary:
      'الجودة ليست اختبارات فقط، والأمان ليس فحصًا نهائيًا. كلاهما جزء من طريقة البناء اليومية.',
    learn: [
      'ابنِ استراتيجية اختبار تناسب نوع المخاطر في مشروعك.',
      'تعامل مع الأمان كجزء من التصميم والتنفيذ والمراجعة والنشر.',
      'افهم أثر الأسرار والاعتماديات والخصوصية على المنتج كله.',
    ],
    build: ['راجع مشروعًا واحدًا من زاويتين: مخاطر الجودة ومخاطر الأمان، واكتب خطة تحسين قصيرة.'],
    note2026:
      'في 2026 تتزايد الحاجة إلى security-by-default لأن التغيير السريع وكثرة الأدوات تولدان أسطح هجوم أكثر.',
    resources: [
      { label: 'OWASP Top 10', url: docs.owasp },
      { label: 'OWASP Cheat Sheet Series', url: docs.owaspCheatsheets },
    ],
    tags: ['Quality', 'Security', 'Risk'],
  },
  'testing-strategy': {
    title: 'استراتيجية الاختبارات',
    level: 'متقدم',
    category: 'الجودة',
    summary:
      'فكر في طبقات الاختبار حسب العائد: unit, integration, end-to-end، ومتى تكفي كل واحدة.',
    learn: [
      'اختبر المنطق الحرج في المستوى الأدنى الممكن.',
      'استخدم اختبارات التكامل لتثبيت العقود بين المكونات.',
      'اجعل اختبارات E2E قليلة ولكن مؤثرة وتمثل مسارات العمل الأساسية.',
    ],
    build: ['طبّق pyramid أو trophy بشكل واعٍ على مشروعك الحالي واكتب سبب التوزيع الذي اخترته.'],
    note2026:
      'الفرق التي تستخدم AI بكثافة تحتاج طبقة verification أقوى لأن سرعة التغيير أعلى من الماضي.',
    resources: [
      { label: 'Vitest Guide', url: docs.vitest },
      { label: 'Playwright Docs', url: docs.playwright },
    ],
    tags: ['Testing Strategy', 'Integration', 'E2E'],
  },
  'owasp-appsec': {
    title: 'OWASP وأمن التطبيقات',
    level: 'متقدم',
    category: 'الجودة',
    summary:
      'أغلب الأخطاء الأمنية الشائعة ما زالت متكررة: التحقق الضعيف، الوصول غير المصرح، الإدخال غير الآمن، وسوء الإعداد.',
    learn: [
      'افهم أخطار OWASP الأساسية وكيف تظهر داخل تطبيقاتك الواقعية.',
      'طبق validation وoutput encoding وaccess control بشكل منهجي.',
      'راجع logging والأخطاء والإعدادات لأنها قد تكشف أكثر مما تتوقع.',
    ],
    build: ['اختر تطبيقًا تجريبيًا واكتب قائمة بالأخطار المحتملة وفق OWASP مع اقتراحات تخفيف عملية.'],
    note2026:
      'مع الخدمات المدارة والواجهات السريعة، ما زالت misconfiguration من أكثر الأسباب شيوعًا للحوادث.',
    resources: [
      { label: 'OWASP Top 10', url: docs.owasp },
      { label: 'OWASP Cheat Sheet Series', url: docs.owaspCheatsheets },
    ],
    tags: ['OWASP', 'AppSec', 'Validation'],
  },
  'supply-chain-secrets': {
    title: 'سلسلة التوريد والأسرار',
    level: 'متقدم',
    category: 'الجودة',
    summary:
      'تحديث مكتبة واحدة أو تسريب مفتاح API قد يكون أخطر من bug منطقي عادي، لذلك هذا الملف أصبح جزءًا أساسيًا من الأمن الحديث.',
    learn: [
      'أدر الأسرار عبر secret stores وبيئات منفصلة لا داخل المستودع.',
      'راقب الاعتماديات والإصدارات والتنبيهات الأمنية.',
      'راجع build pipeline والصلاحيات الممنوحة لها.',
    ],
    build: ['أعد تنظيم مشروع تجريبي بحيث لا توجد أسرار في الكود أو ملفات البيئة المشتركة.'],
    note2026:
      'الاعتماديات والمكونات المولدة آليًا تزيد مساحة الخطر، لذا مراجعة السلسلة البرمجية لم تعد رفاهية.',
    resources: [
      { label: 'OWASP Cheat Sheet Series', url: docs.owaspCheatsheets },
      { label: 'GitHub Actions', url: docs.ghActions },
    ],
    tags: ['Secrets', 'Supply Chain', 'Dependencies'],
  },
  'threat-modeling-privacy': {
    title: 'نمذجة التهديد والخصوصية',
    level: 'متقدم',
    category: 'الجودة',
    summary:
      'بدل انتظار المشكلة، فكر مبكرًا: من قد يهاجم؟ ماذا يحاول الوصول إليه؟ وما أثر التسريب أو التلاعب؟',
    learn: [
      'حدد الأصول الحساسة ومنافذ الدخول والحدود بين الأنظمة.',
      'اكتب misuse cases بجانب use cases.',
      'اربط بين البيانات التي تجمعها والحاجة الفعلية لها وسياسات الاحتفاظ بها.',
    ],
    build: ['نفذ threat model مبسطًا لشاشة تسجيل دخول أو نظام رفع ملفات.'],
    note2026:
      'الخصوصية اليوم تمتد أيضًا إلى بيانات الـprompts والسياق والأدوات الخارجية المستخدمة في تطبيقات AI.',
    resources: [
      { label: 'OWASP Cheat Sheet Series', url: docs.owaspCheatsheets },
      { label: 'OWASP Top 10', url: docs.owasp },
    ],
    tags: ['Threat Modeling', 'Privacy', 'Data Protection'],
  },
  'cloud-platform': {
    title: 'السحابة والمنصة',
    level: 'متقدم',
    category: 'المنصة',
    summary:
      'فهم Linux وcontainers وKubernetes وCI/CD وIaC يجعلك أقرب إلى الإنتاج الحقيقي وأقل اعتمادًا على التخمين أثناء النشر.',
    learn: [
      'تعرف على البيئة التي يشغل عليها تطبيقك فعلًا.',
      'حوّل الإعدادات والتشغيل إلى خطوات قابلة للتكرار.',
      'افهم حدود المنصة والسحابة والشبكة قبل أن تحمل التطبيق وحده المسؤولية.',
    ],
    build: ['انشر خدمة داخل container مع pipeline بناء واختبار ونشر بسيطة.'],
    note2026:
      'النجاح في 2026 لا يأتي من حفظ خدمات cloud كثيرة، بل من فهم platform thinking والاعتماد على أبسط بنية تشغيل قابلة للاستمرار.',
    resources: [
      { label: 'Docker Get Started', url: docs.docker },
      { label: 'Kubernetes Basics', url: docs.kubernetes },
      { label: 'OpenTofu Docs', url: docs.opentofu },
    ],
    tags: ['Cloud', 'Platform', 'Containers'],
  },
  'linux-networking': {
    title: 'Linux والشبكات الأساسية',
    level: 'عملي',
    category: 'المنصة',
    summary:
      'يجب أن تعرف أين يعمل التطبيق: العمليات، الملفات، المنافذ، الصلاحيات، والاتصال الشبكي الأساسي.',
    learn: [
      'تعرف على العمليات، الخدمات، الأذونات، السجلات، والمنافذ.',
      'استخدم أدوات بسيطة مثل ps وtop وss وcurl لتشخيص السلوك.',
      'افهم أساسيات DNS وTLS وreverse proxy من زاوية التشغيل.',
    ],
    build: ['شغل خدمة محلية وتحقق من المنافذ والعمليات والlogs الخاصة بها من الطرفية.'],
    note2026:
      'حتى مع المنصات المدارة، يظل فهم Linux والشبكة أساسًا مهمًا لفهم مشاكل الإنتاج وتصحيحها.',
    resources: [
      { label: 'Ubuntu Command Line', url: docs.ubuntuCli },
      { label: 'MDN HTTP', url: docs.mdnHttp },
    ],
    tags: ['Linux', 'Networking', 'Ports'],
  },
  'docker-compose': {
    title: 'Docker وCompose',
    level: 'عملي',
    category: 'المنصة',
    summary:
      'الحاويات تمنحك بيئة تشغيل أكثر اتساقًا، خصوصًا عندما تحتاج تشغيل التطبيق وقاعدة البيانات والكاش معًا.',
    learn: [
      'افهم الصور والطبقات والحاويات والشبكات والأحجام.',
      'اكتب Dockerfile واضحًا وصغيرًا نسبيًا.',
      'استخدم Compose لتجهيز بيئة محلية متعددة الخدمات بسرعة.',
    ],
    build: ['حاوي خدمة API مع قاعدة بيانات وكاش وشغّلها كلها عبر Compose.'],
    note2026:
      'الحاويات اليوم جزء طبيعي من workflow التطويري حتى للمشاريع المتوسطة وليست فقط للبنى المعقدة.',
    resources: [
      { label: 'Docker Get Started', url: docs.docker },
      { label: 'Node.js Learn', url: docs.node },
    ],
    tags: ['Docker', 'Compose', 'Containers'],
  },
  'kubernetes-platform': {
    title: 'Kubernetes والتفكير المنصّي',
    level: 'متقدم',
    category: 'المنصة',
    summary:
      'لا تتعلم Kubernetes كقائمة موارد YAML فقط؛ تعلمه كمنصة تشغيل فيها scheduling وhealth وsecrets وnetworking وpolicy.',
    learn: [
      'افهم Pods وDeployments وServices وConfigMaps وSecrets.',
      'تعرف على readiness وliveness والـrolling updates.',
      'تعلم ما الذي يجب أن تتركه للمنصة وما الذي يبقى مسؤولية التطبيق.',
    ],
    build: ['انشر خدمة containerized مع probes وconfig وservice داخلي على cluster تجريبي.'],
    note2026:
      'ليس كل مشروع يحتاج Kubernetes، لكن فهمه يساعدك على فهم كثير من قرارات المنصات الحديثة حتى إن لم تستخدمه يوميًا.',
    resources: [
      { label: 'Kubernetes Basics', url: docs.kubernetes },
      { label: 'OpenTelemetry Docs', url: docs.opentelemetry },
    ],
    tags: ['Kubernetes', 'Platform', 'Deployments'],
  },
  'ci-cd-iac': {
    title: 'CI/CD وInfrastructure as Code',
    level: 'متقدم',
    category: 'المنصة',
    summary:
      'حوّل ما تفعله يدويًا إلى pipeline قابلة للتكرار: build, test, scan, deploy، مع تعريف للبنية التحتية يمكن مراجعته.',
    learn: [
      'ابدأ بخط pipeline واضح: lint ثم test ثم build ثم deploy.',
      'عرّف البنية أو جزءًا منها ككود يمكن مراجعته وتتبعه.',
      'أضف سياسات approval وrollback ورؤية للإصدارات.',
    ],
    build: ['نفذ GitHub Actions أو ما يعادلها لتشغيل الاختبارات والبناء على كل push.'],
    note2026:
      'الـpipeline الجيدة في 2026 تتضمن أيضًا scanning واعية للتبعيات والأسرار إضافة إلى الاختبارات التقليدية.',
    resources: [
      { label: 'GitHub Actions', url: docs.ghActions },
      { label: 'OpenTofu Docs', url: docs.opentofu },
    ],
    tags: ['CI/CD', 'IaC', 'Automation'],
  },
  'computer-science': {
    title: 'علوم الحاسب التي تفيدك عمليًا',
    level: 'متقدم',
    category: 'علوم الحاسب',
    summary:
      'لا تحتاج دكتوراه لتستفيد من علوم الحاسب. تحتاج فقط اختيار الأجزاء التي تفسر سلوك البرامج والأنظمة التي تبنيها يوميًا.',
    learn: [
      'اربط بين النظرية والمشكلة العملية: الأداء، الذاكرة، التزامن، والاتصال.',
      'اختر العمق الذي يخدم مجال عملك بدل دراسة كل شيء دفعة واحدة.',
      'ارجع لأساسيات CS كلما اصطدمت بحدود لا تفسرها frameworks وحدها.',
    ],
    build: ['اكتب ملاحظات تربط بين bug واقعي في مشروعك ومفهوم CS كان يمكن أن يفسره أو يمنعه.'],
    note2026:
      'كلما زادت أدوات التجريد، زادت قيمة من يفهم ما يحدث تحتها عند الانكسار أو الحاجة إلى تحسين حقيقي.',
    resources: [
      { label: 'MIT OpenCourseWare', url: docs.mitOcw },
      { label: 'OSTEP', url: docs.ostep },
    ],
    tags: ['CS', 'Performance', 'Systems'],
  },
  'operating-systems': {
    title: 'أنظمة التشغيل والعمليات',
    level: 'متقدم',
    category: 'علوم الحاسب',
    summary:
      'فهم العمليات والخيوط والذاكرة والملفات يفسر سلوكًا كثيرًا يبدو غامضًا عند تشغيل البرامج أو نشرها.',
    learn: [
      'تعرف على process, thread, memory space, file descriptors.',
      'افهم كيف تتعامل التطبيقات مع النظام والموارد.',
      'اربط بين استهلاك الموارد وبين أثره على الأداء والاستقرار.',
    ],
    build: ['راقب برنامجًا أثناء التشغيل وحدد استهلاك الذاكرة والمعالج والملفات المفتوحة بشكل تقريبي.'],
    note2026:
      'مع كثرة البيئات المعزولة والحاويات، يظل فهم نظام التشغيل أساسًا لفهم الحدود الحقيقية للموارد.',
    resources: [
      { label: 'OSTEP', url: docs.ostep },
      { label: 'MIT OpenCourseWare', url: docs.mitOcw },
    ],
    tags: ['Operating Systems', 'Processes', 'Memory'],
  },
  'algorithms-complexity': {
    title: 'الخوارزميات والتعقيد',
    level: 'متقدم',
    category: 'علوم الحاسب',
    summary:
      'ليس الهدف من Big O اجتياز المقابلات فقط، بل فهم أثر الخيارات المختلفة عند نمو البيانات والحمل.',
    learn: [
      'افهم Big O بشكل حدسي لا كشعارات محفوظة.',
      'تعرف على خوارزميات الفرز والبحث والعبور الأساسية.',
      'اربط اختيار البنية والخوارزمية بنوع البيانات والحجم المتوقع.',
    ],
    build: ['قارن بين حلين لمشكلة واحدة وفسر أيهما أفضل ولماذا مع أمثلة أحجام مختلفة.'],
    note2026:
      'الأنظمة الحديثة قد تخفي البطء لبعض الوقت، لكن المشاكل الخوارزمية تظهر بقوة عندما تكبر البيانات أو تزيد الكلفة.',
    resources: [
      { label: 'MIT OpenCourseWare', url: docs.mitOcw },
      { label: 'PostgreSQL Docs', url: docs.postgres },
    ],
    tags: ['Algorithms', 'Big O', 'Performance'],
  },
  'concurrency-runtime': {
    title: 'التزامن والـRuntime',
    level: 'متقدم',
    category: 'علوم الحاسب',
    summary:
      'افهم كيف تنفذ اللغة أو المنصة الأعمال المتوازية أو غير المتزامنة، وما الذي يمكن أن يسبب race conditions أو حجبًا.',
    learn: [
      'ميز بين concurrency وparallelism وasync I/O.',
      'افهم event loop أو thread pool بحسب بيئتك.',
      'تعرف على locks وshared state ومتى تتجنبها بتصميم أفضل.',
    ],
    build: ['حلل حالة سباق بسيطة أو مشكلة shared state ثم عدل التصميم لتجنبها.'],
    note2026:
      'مع ازدياد workloads المرتبطة بالذكاء الاصطناعي والـstreaming والمهام الخلفية، صار فهم التزامن أكثر عملية من أي وقت مضى.',
    resources: [
      { label: 'Node.js Learn', url: docs.node },
      { label: 'OSTEP', url: docs.ostep },
    ],
    tags: ['Concurrency', 'Async', 'Runtime'],
  },
  'distributed-systems': {
    title: 'مبادئ الأنظمة الموزعة',
    level: 'متقدم',
    category: 'علوم الحاسب',
    summary:
      'بمجرد أن يتجاوز التطبيق عملية واحدة أو خدمة واحدة تبدأ مشاكل جديدة: التأخير، الفشل الجزئي، والتوافق الزمني.',
    learn: [
      'افهم replication وconsistency والـtimeouts والفشل الجزئي.',
      'تعرف على trade-offs الشهيرة مثل availability مقابل consistency.',
      'اربط بين النظريات وبين اختياراتك اليومية في APIs وقواعد البيانات والqueues.',
    ],
    build: ['اكتب سيناريوهات فشل موزع محتملة في نظامك وكيف يمكن اكتشافها أو التخفيف منها.'],
    note2026:
      'حتى التطبيقات الصغيرة أصبحت تعتمد على خدمات خارجية كثيرة، ما يعني أنك تعمل في بيئة موزعة سواء أحببت ذلك أم لا.',
    resources: [
      { label: 'MIT OpenCourseWare', url: docs.mitOcw },
      { label: 'OpenTelemetry Docs', url: docs.opentelemetry },
    ],
    tags: ['Distributed Systems', 'Consistency', 'Failure'],
  },
  'game-development': {
    title: 'تطوير الألعاب والمحركات',
    level: 'عملي',
    category: 'الألعاب',
    summary:
      'هذا المسار يربط بين تطوير اللعبة نفسها وبين فهم المحرك الذي تعمل فوقه. تبدأ من دورة الإطار والـgameplay، ثم تنتقل إلى الرياضيات، أنظمة المحرك، والرندر منخفض المستوى.',
    learn: [
      'افهم الفرق بين بناء لعبة باستخدام محرك جاهز وبين بناء أجزاء من المحرك بنفسك.',
      'ابدأ من لعبة صغيرة قابلة للإنهاء قبل القفز إلى طموحات عالم مفتوح أو محرك شامل.',
      'اربط بين البرمجة، الرياضيات، الأدوات، والرندر لأنها تعمل معًا داخل أي لعبة حقيقية.',
    ],
    build: ['ابنِ لعبة صغيرة 2D أو prototype ثلاثي الأبعاد، ثم وثق كيف تدير التحديث والرندر والمدخلات والأصول.'],
    note2026:
      'في 2026 ما زال أفضل طريق لتعلم الألعاب هو إنهاء ألعاب صغيرة كثيرة، لا البدء بمحرك ضخم أو لعبة أحلام من أول أسبوع.',
    resources: [
      { label: 'Unity Docs', url: docs.unity },
      { label: 'Unreal Engine Docs', url: docs.unreal },
      { label: 'Godot Docs', url: docs.godot },
    ],
    tags: ['Game Dev', 'Engines', 'Gameplay'],
  },
  'game-dev-basics': {
    title: 'أساس الأساس: كيف تعمل اللعبة؟',
    level: 'أساسي',
    category: 'الألعاب',
    summary:
      'قبل الحديث عن المحركات، يجب أن تفهم ما الذي تفعله اللعبة كل إطار: قراءة المدخلات، تحديث الحالة، ثم الرندر بالصورة الصحيحة والزمن الصحيح.',
    learn: [
      'افهم game loop وdelta time والفرق بين update وrender.',
      'تعرف على scene, entity, component, camera, input, and collision basics.',
      'افهم لماذا تظهر مشاكل jitter وframe pacing وfixed timestep عند الإهمال.',
    ],
    build: ['نفذ لعبة بسيطة جدًا مثل Pong أو منصة 2D مع حركة وتصادمات وعدّاد وقت.'],
    note2026:
      'حتى لو استخدمت Unreal أو Unity أو Godot، فهم الـgame loop بنفسك يزيل كثيرًا من الغموض عندما تكبر اللعبة أو تتعطل.',
    resources: [
      { label: 'Godot Docs', url: docs.godot },
      { label: 'Unity Docs', url: docs.unity },
      { label: 'Unreal Engine Docs', url: docs.unreal },
    ],
    tags: ['Game Loop', 'Input', 'Scene', 'Delta Time'],
  },
  'unity-unreal-godot': {
    title: 'اختيار المحرك: Unity أو Unreal أو Godot',
    level: 'عملي',
    category: 'الألعاب',
    summary:
      'اختيار المحرك ليس مسألة شهرة فقط. يجب أن تنظر إلى نوع اللعبة، خبرتك، اللغة، الأدوات، الأداء المطلوب، وسرعة الإنجاز.',
    learn: [
      'اختر Unity عندما تريد سرعة iteration كبيرة ونظامًا معروفًا لمشاريع كثيرة.',
      'اختر Unreal عندما تحتاج قدرات قوية جدًا في 3D والرسوم والأدوات الإنتاجية الضخمة.',
      'اختر Godot عندما تريد محركًا خفيفًا، مفتوح المصدر، وسهل الفهم والتعديل.',
    ],
    build: ['ابنِ نفس الميكانيكية الصغيرة في محرك واحد على الأقل، ثم اكتب لماذا اخترته وما الذي كسبته أو خسرته.'],
    note2026:
      'أفضل اختيار في 2026 ليس دائمًا “أقوى محرك”، بل المحرك الذي يسمح لك بإنهاء لعبتك بجودة جيدة ووقت معقول.',
    resources: [
      { label: 'Unity Docs', url: docs.unity },
      { label: 'Unreal Engine Docs', url: docs.unreal },
      { label: 'Godot Docs', url: docs.godot },
    ],
    tags: ['Unity', 'Unreal', 'Godot'],
  },
  'gameplay-programming': {
    title: 'برمجة اللعب والأنظمة',
    level: 'عملي',
    category: 'الألعاب',
    summary:
      'هنا تنتقل من تحريك جسم على الشاشة إلى تصميم أنظمة لعب قابلة للتوسعة: حالات، قدرات، AI بسيط، حفظ، UI، وصوت.',
    learn: [
      'صمم gameplay systems بدل حشر كل شيء في script واحد.',
      'استخدم state machines أو event systems عندما يحتاج التصميم ذلك.',
      'افصل منطق اللعب عن أدوات التطوير وعن طبقة العرض ما أمكن.',
    ],
    build: ['ابنِ نظام قتال أو inventory أو abilities بسيط يمكن توسيعه دون إعادة كتابة المشروع كله.'],
    note2026:
      'نجاح مشروع الألعاب يعتمد كثيرًا على جودة أنظمة اللعب الداخلية أكثر من اعتماده على الرسوم وحدها.',
    resources: [
      { label: 'Godot Docs', url: docs.godot },
      { label: 'Unity Docs', url: docs.unity },
      { label: 'Unreal Engine Docs', url: docs.unreal },
    ],
    tags: ['Gameplay', 'State Machines', 'Systems Design'],
  },
  'game-math-physics': {
    title: 'الرياضيات والفيزياء التي تحتاجها الألعاب',
    level: 'متقدم',
    category: 'الألعاب',
    summary:
      'الألعاب لا تحتاج كل الرياضيات من أول يوم، لكنها تحتاج أساسًا قويًا في المتجهات والتحويلات والكاميرات والتصادم والحركة.',
    learn: [
      'افهم vectors وdot product وcross product وmatrices والتحويلات الأساسية.',
      'تعرف على الحركة، الجاذبية، الاصطدام، interpolation، والكاميرا.',
      'اربط المفهوم الرياضي بالمشكلة التي تراها على الشاشة بدل حفظ القوانين مجردة.',
    ],
    build: ['نفذ حركة كاميرا أو مقذوفات أو نظام تصادم بسيط مع شرح رياضي مختصر لما يحدث.'],
    note2026:
      'هذا المجال هو من أهم ما يميز مطور الألعاب القادر على حل المشاكل بنفسه بدل الاعتماد الكامل على جاهزية المحرك.',
    resources: [
      { label: 'LearnOpenGL', url: docs.learnOpenGL },
      { label: 'Godot Docs', url: docs.godot },
      { label: 'Unity Docs', url: docs.unity },
    ],
    tags: ['Vectors', 'Matrices', 'Physics', 'Cameras'],
  },
  'engine-architecture': {
    title: 'معمارية محرك اللعبة',
    level: 'متقدم',
    category: 'المحركات',
    summary:
      'المحرك ليس Renderer فقط. هو مجموعة أنظمة مترابطة: platform layer, input, scene management, assets, audio, physics, scripting, tooling.',
    learn: [
      'افهم كيف تنقسم المحركات إلى subsystems بدل كتلة واحدة.',
      'قارن بين scene graph وentity component systems وما الذي يناسب مشروعك.',
      'افصل بين runtime وبين الأدوات والمحرر والـasset pipeline.',
    ],
    build: ['ارسم معمارية محرك صغير 2D وحدد فيه الأنظمة الأساسية وحدود كل نظام.'],
    note2026:
      'أكبر خطأ شائع هو محاولة كتابة كل شيء دفعة واحدة. المحرك الجيد يبدأ بنواة صغيرة جدًا ثم تنمو حولها الأنظمة اللازمة فقط.',
    resources: [
      { label: 'Godot Docs', url: docs.godot },
      { label: 'SDL Wiki', url: docs.sdl },
      { label: 'Unreal Engine Docs', url: docs.unreal },
    ],
    tags: ['Engine Architecture', 'Subsystems', 'ECS', 'Scene Graph'],
  },
  'graphics-low-level': {
    title: 'الرندر منخفض المستوى',
    level: 'متقدم',
    category: 'المحركات',
    summary:
      'إذا أردت فهم المحركات بعمق أو بناء واحد، ستحتاج فهمًا أوضح لطبقة الرندر: buffers, shaders, command submission, frame synchronization, and GPU pipelines.',
    learn: [
      'تعرف على دور OpenGL أو Vulkan أو Direct3D 12 في إرسال العمل إلى الـGPU.',
      'افهم shaders والـpipeline والـswapchain وإدارة الإطار.',
      'ابدأ بتجربة صغيرة جدًا قبل التوسع إلى renderer كامل متعدد الخصائص.',
    ],
    build: ['اجعل برنامجًا يرسم مثلثًا أو مشهدًا بسيطًا ثم أضف له كاميرا وshader واحدًا فقط.'],
    note2026:
      'لا تحتاج هذه الطبقة لصناعة كل لعبة، لكنها ضرورية إذا كان هدفك فهم المحركات أو بناء Renderer خاص بك.',
    resources: [
      { label: 'Vulkan Guide', url: docs.vulkan },
      { label: 'Vulkan Tutorial', url: docs.vulkanTutorial },
      { label: 'Direct3D 12 Guide', url: docs.directx12 },
      { label: 'LearnOpenGL', url: docs.learnOpenGL },
    ],
    tags: ['Rendering', 'GPU', 'Shaders', 'Vulkan', 'DirectX'],
  },
  'build-your-own-engine': {
    title: 'كيف تصنع محركًا من الصفر؟',
    level: 'متقدم',
    category: 'المحركات',
    summary:
      'بناء محرك لعبة يجب أن يبدأ بتحديد نطاق صغير جدًا. ابدأ بنافذة، إدخال، loop، رسم بسيط، إدارة أصول، ومشهد صغير. لا تبدأ بمنافسة Unity أو Unreal.',
    learn: [
      'ابدأ بطبقة platform ثم rendering بسيط ثم scene وasset loading.',
      'ابنِ 2D أولًا غالبًا، لأن 3D الكامل يقفز بك سريعًا إلى تعقيد هائل.',
      'ركز على الأدوات الأساسية: debug drawing, asset reload, serialization, profiling.',
    ],
    build: ['ابنِ framework أو mini-engine صغيرًا يشغّل مشهدًا بسيطًا مع sprites أو cubes ومدخلات وcamera وassets.'],
    note2026:
      'أفضل غرض من بناء محرك اليوم هو التعلم أو تلبية احتياج محدد جدًا، وليس محاولة استنساخ محرك ضخم عام من البداية.',
    resources: [
      { label: 'SDL Wiki', url: docs.sdl },
      { label: 'LearnOpenGL', url: docs.learnOpenGL },
      { label: 'Vulkan Tutorial', url: docs.vulkanTutorial },
      { label: 'Godot Docs', url: docs.godot },
    ],
    tags: ['Build an Engine', 'Mini Engine', 'Framework', 'Tooling'],
  },
  'game-tools-assets': {
    title: 'الأصول والأدوات وخط الإنتاج',
    level: 'عملي',
    category: 'الألعاب',
    summary:
      'اللعبة ليست كودًا فقط. هناك صور ونماذج وصوت ومشاهد وملفات إعداد وبناء، وكل هذا يحتاج pipeline منظمًا حتى لا يصبح المشروع فوضى.',
    learn: [
      'افهم asset import, folders, naming, versioning, and build outputs.',
      'تعلم كيف تخدم الأدوات الداخلية المطور والمصمم والفنان بدل تعطيلهم.',
      'اربط بين هيكلة الأصول وبين التحميل والذاكرة وسرعة التكرار أثناء التطوير.',
    ],
    build: ['نظم مشروع لعبة صغير بحيث تكون الأصول والأصوات والمشاهد والملفات قابلة للتوسع بدون عشوائية.'],
    note2026:
      'في الألعاب، الفوضى في الأصول والخط الإنتاجي تقتل السرعة أكثر من كثير من مشاكل الكود نفسها.',
    resources: [
      { label: 'Unity Docs', url: docs.unity },
      { label: 'Unreal Engine Docs', url: docs.unreal },
      { label: 'Godot Docs', url: docs.godot },
    ],
    tags: ['Assets', 'Pipeline', 'Tooling', 'Content'],
  },
  'game-profiling-optimization': {
    title: 'القياس والتحسين في الألعاب',
    level: 'متقدم',
    category: 'الألعاب',
    summary:
      'الأداء في الألعاب لا يحل بالتخمين. يجب أن تقيس وقت الإطار، CPU وGPU bottlenecks، الذاكرة، والرسمات المكررة قبل أن تبدأ بالتحسين.',
    learn: [
      'راقب frame time بدل الاكتفاء بعدّاد FPS فقط.',
      'تعرف على draw calls وoverdraw وmemory spikes وgarbage collection بحسب البيئة.',
      'تعلم الفرق بين optimization الحقيقي والتحسين الوهمي الذي يزيد التعقيد دون فائدة.',
    ],
    build: ['خذ مشهدًا بسيطًا ثم قس أداءه وحدد ثلاثة أسباب بطء حقيقية وخطة علاج تدريجية.'],
    note2026:
      'كلما كان مشروعك لحظيًا وتفاعليًا أكثر، أصبحت مهارة القياس profiling أسبق من مهارة التعديل نفسها.',
    resources: [
      { label: 'Unity Docs', url: docs.unity },
      { label: 'Unreal Engine Docs', url: docs.unreal },
      { label: 'Godot Docs', url: docs.godot },
      { label: 'Direct3D 12 Guide', url: docs.directx12 },
    ],
    tags: ['Profiling', 'Optimization', 'Frame Time', 'CPU', 'GPU'],
  },
  'ai-engineering': {
    title: 'هندسة تطبيقات الذكاء الاصطناعي',
    level: '2026',
    category: 'الذكاء الاصطناعي',
    summary:
      'هذا المسار ليس عن تدريب النماذج من الصفر، بل عن بناء منتجات تعتمد على LLMs وtooling وevaluation وgovernance بشكل مسؤول.',
    learn: [
      'افهم الفرق بين prototype سريع ومنتج يمكن الوثوق به.',
      'أضف طبقات تقييم، حماية، وتتبّع قبل توسيع الاستخدام.',
      'تعلم كيف تدمج النماذج مع أدواتك وبياناتك من دون تضخيم معماري مبكر.',
    ],
    build: ['ابنِ مساعدًا صغيرًا يستدعي نموذجًا فعليًا مع logging وتقييم لحالات النجاح والفشل.'],
    note2026:
      'المطلوب اليوم ليس مجرد prompt جيد، بل نظام كامل يدير السياق والأدوات والتقييم والتكلفة والخصوصية.',
    resources: [
      { label: 'OpenAI Docs', url: docs.openai },
      { label: 'Model Context Protocol', url: docs.mcp },
      { label: 'OWASP LLM Top 10', url: docs.owaspLlm },
    ],
    tags: ['AI Engineering', 'LLMs', 'Agents'],
  },
  'ai-assisted-development': {
    title: 'AI-Assisted Development',
    level: '2026',
    category: 'الذكاء الاصطناعي',
    summary:
      'تعلم كيف تستخدم أدوات الذكاء الاصطناعي لتسريع الفهم والكتابة والمراجعة بدون أن تتخلى عن المسؤولية الهندسية.',
    learn: [
      'اكتب طلبات دقيقة تحدد السياق والقيود ومعيار القبول.',
      'افصل بين استخدام AI للاستكشاف وبين اعتماده في تغييرات الإنتاج.',
      'راجع المخرجات بمنهجية: سلوك، أمان، اختبارات، وآثار جانبية.',
    ],
    build: ['خذ مهمة واحدة وجرّب تنفيذها مع AI ثم وثق أين سرّعك وأين أخطأ عليك.'],
    note2026:
      'المطور المميز ليس من يستخدم AI أكثر، بل من يبني workflow يجعله أسرع بدون أن يفقد الجودة أو الفهم.',
    resources: [
      { label: 'OpenAI Docs', url: docs.openai },
      { label: 'GitHub Skills', url: docs.githubSkills },
    ],
    tags: ['AI Tools', 'Prompting', 'Review'],
  },
  'llm-foundations-evals': {
    title: 'أساسيات LLMs والتقييم',
    level: '2026',
    category: 'الذكاء الاصطناعي',
    summary:
      'افهم التوكنز والسياق والهلوسة والقياس حتى لا تبني منتجًا على افتراضات غير صحيحة.',
    learn: [
      'تعرف على حدود السياق، درجة الحرارة، والبنية الرسائلية.',
      'صمم evals بسيطة تقيس ما يهم المنتج حقًا.',
      'فرّق بين جودة output في العرض التجريبي وبين الثبات في الاستخدام الحقيقي.',
    ],
    build: ['أنشئ مجموعة حالات اختبار لمساعدك وقارن المخرجات يدويًا أو آليًا عبر rubrics واضحة.'],
    note2026:
      'الـevals أصبحت من أهم طبقات العمل في AI engineering لأنها تمنع الانخداع بالنتائج المبهرة غير الثابتة.',
    resources: [
      { label: 'OpenAI Docs', url: docs.openai },
      { label: 'OWASP LLM Top 10', url: docs.owaspLlm },
    ],
    tags: ['LLM', 'Evaluation', 'Quality'],
  },
  'embeddings-rag': {
    title: 'Embeddings وRAG',
    level: '2026',
    category: 'الذكاء الاصطناعي',
    summary:
      'عندما يحتاج النموذج إلى معرفة خاصة ببياناتك، يبدأ الحديث عن التضمينات والاسترجاع وإدارة السياق.',
    learn: [
      'افهم chunking وretrieval وreranking وحدود كل منها.',
      'ابدأ بمصادر صغيرة ونظيفة قبل التضخم في البيانات.',
      'راقب الاسترجاع الخاطئ والوثائق القديمة وجودة المراجع.',
    ],
    build: ['ابنِ prototype بسيط يسترجع من مستنداتك ويرفق المصادر في الإجابة النهائية.'],
    note2026:
      'RAG الجيد يعتمد على جودة البيانات وهيكلتها ومراقبتها أكثر من اعتماده على ضخامة الـpipeline.',
    resources: [
      { label: 'OpenAI Docs', url: docs.openai },
      { label: 'PostgreSQL Docs', url: docs.postgres },
    ],
    tags: ['RAG', 'Embeddings', 'Retrieval'],
  },
  'agents-mcp': {
    title: 'Agents وModel Context Protocol',
    level: '2026',
    category: 'الذكاء الاصطناعي',
    summary:
      'المنتجات الوكيلة تحتاج أدوات وعقودًا واضحة للسياق والتنفيذ. هنا يظهر MCP كطريقة منظمة لربط النماذج بالأدوات والبيانات.',
    learn: [
      'افهم متى تحتاج agent loop ومتى يكفي workflow مباشر.',
      'صمم الأدوات بواجهات واضحة ومخرجات قابلة للتحقق.',
      'تعرف على MCP كبروتوكول لربط clients وservers والموارد والأدوات.',
    ],
    build: ['صمم أداة أو خادم MCP صغيرًا يعرض موردًا أو أداة مفيدة لمهام المطور اليومية.'],
    note2026:
      'هذا من أكثر المجالات حركة في 2026، والنجاح فيه يعتمد على تقليل الصلاحيات والغموض لا على تعظيم الاستقلالية بشكل أعمى.',
    resources: [
      { label: 'Model Context Protocol', url: docs.mcp },
      { label: 'OpenAI Docs', url: docs.openai },
      { label: 'OWASP LLM Top 10', url: docs.owaspLlm },
    ],
    tags: ['Agents', 'MCP', 'Tools', 'Context'],
  },
  'ai-security-governance': {
    title: 'أمن وحوكمة تطبيقات AI',
    level: '2026',
    category: 'الذكاء الاصطناعي',
    summary:
      'كلما ربطت النموذج بأدوات وبيانات أكثر، ارتفعت المخاطر: تسريب، prompt injection، tool abuse، وقرارات يصعب تفسيرها.',
    learn: [
      'افهم prompt injection وdata leakage وسوء استخدام الأدوات.',
      'ضع boundaries وصلاحيات وتسجيلًا للعمليات الحساسة.',
      'فكر في التكلفة والامتثال والخصوصية ضمن التصميم، لا بعد الإطلاق.',
    ],
    build: ['اكتب سياسة بسيطة لتطبيق AI: ما البيانات المسموحة، ما الأدوات المتاحة، وما الذي يجب تسجيله.'],
    note2026:
      'أمن AI لم يعد فرعًا تجميليًا؛ بل أصبح شرطًا أساسيًا إذا كان التطبيق يتصل ببيانات أو إجراءات فعلية.',
    resources: [
      { label: 'OWASP LLM Top 10', url: docs.owaspLlm },
      { label: 'Model Context Protocol', url: docs.mcp },
    ],
    tags: ['AI Security', 'Governance', 'Prompt Injection'],
  },
  specialization: {
    title: 'التخصص بعد القاعدة',
    level: 'عملي',
    category: 'المسارات',
    summary:
      'بعد بناء القاعدة، اختر مجالًا أساسيًا تقود فيه مشاريع كاملة. يمكنك التوسع لاحقًا، لكن لا تحاول التخصص في كل شيء في وقت واحد.',
    learn: [
      'اختر المجال بحسب نوع المنتجات التي تحب بناءها ونمط المشاكل التي تستمتع بها.',
      'ابنِ مشروعين أو ثلاثة في المسار قبل إعلان التخصص.',
      'احتفظ بقاعدة عامة جيدة حتى لو تخصصت لاحقًا.',
    ],
    build: ['اختر مسارًا واحدًا الآن وابنِ له مشروعين خلال 8 إلى 12 أسبوعًا.'],
    note2026:
      'أفضل المتخصصين اليوم هم من يملكون قاعدة برمجية مشتركة قوية ثم يضيفون عمقًا واضحًا في مجال واحد.',
    resources: [
      { label: 'React Learn', url: docs.react },
      { label: 'FastAPI Docs', url: docs.fastapi },
      { label: 'Kubernetes Basics', url: docs.kubernetes },
    ],
    tags: ['Specialization', 'Career', 'Tracks'],
  },
  'frontend-specialist': {
    title: 'مسار Frontend Specialist',
    level: 'عملي',
    category: 'المسارات',
    summary:
      'يناسبك إذا كنت تحب بناء تجارب المستخدم، الأنظمة التصميمية، الأداء، والإتاحة.',
    learn: [
      'تعمق في React أو إطار مشابه مع SSR وdata fetching وrouting.',
      'ابنِ design system صغيرًا ومكوّنات قابلة لإعادة الاستخدام.',
      'اجعل الأداء والإتاحة جزءًا من تعريف الجودة لديك.',
    ],
    build: ['ابنِ منتج واجهات كاملًا مع لوحات تحكم ونماذج وحالات استخدام متعددة الأجهزة.'],
    note2026:
      'المسار الأمامي الحديث أقرب إلى product engineering من كونه تجميع مكونات فقط.',
    resources: [
      { label: 'React Learn', url: docs.react },
      { label: 'Next.js Docs', url: docs.next },
      { label: 'MDN Accessibility', url: docs.mdnA11y },
    ],
    tags: ['Frontend', 'Design Systems', 'Accessibility'],
  },
  'backend-specialist': {
    title: 'مسار Backend Specialist',
    level: 'عملي',
    category: 'المسارات',
    summary:
      'يناسبك إذا كنت تستمتع بالنماذج، المنطق، البيانات، الأداء، والأنظمة التي يجب أن تعمل باستقرار.',
    learn: [
      'تعمق في APIs وقواعد البيانات والكاش والأعمال الخلفية.',
      'طور حسًا معماريًا تجاه الوحدات والحدود والموثوقية.',
      'احترف التشخيص والقياس والمراقبة تحت حمل حقيقي.',
    ],
    build: ['ابنِ خدمة خلفية تخدم منتجًا فعليًا مع auth وjobs وmonitoring أساسي.'],
    note2026:
      'التخصص الخلفي الناجح اليوم يتقاطع بقوة مع data modeling وobservability وplatform awareness.',
    resources: [
      { label: 'Node.js Learn', url: docs.node },
      { label: 'PostgreSQL Docs', url: docs.postgres },
      { label: 'OpenTelemetry Docs', url: docs.opentelemetry },
    ],
    tags: ['Backend', 'APIs', 'Databases', 'Reliability'],
  },
  'mobile-specialist': {
    title: 'مسار Mobile Specialist',
    level: 'عملي',
    category: 'المسارات',
    summary:
      'يناسبك إذا كنت تحب المنتجات القريبة من المستخدم النهائي، القيود على الأداء والطاقة، وتجربة المنصات المحمولة.',
    learn: [
      'اختر بين React Native أو Flutter أو التطوير الأصلي بحسب احتياجك.',
      'افهم state وnavigation وoffline handling وpush notifications.',
      'اعتنِ بالأداء واستهلاك الشبكة والتخزين المحلي والـrelease cycle.',
    ],
    build: ['ابنِ تطبيق جوال يتصل بخدمة حقيقية ويعمل جيدًا مع انقطاع الشبكة الجزئي.'],
    note2026:
      'النجاح في الجوال يتطلب فهم دورة حياة التطبيق والقيود العملية أكثر من معرفة الواجهة فقط.',
    resources: [
      { label: 'React Native Docs', url: docs.reactNative },
      { label: 'Flutter Docs', url: docs.flutter },
    ],
    tags: ['Mobile', 'React Native', 'Flutter'],
  },
  'game-specialist': {
    title: 'مسار Game Dev / Engine Specialist',
    level: 'عملي',
    category: 'المسارات',
    summary:
      'يناسبك إذا كنت تستمتع ببناء أنظمة اللعب، الأداء اللحظي، الأدوات، والربط بين البرمجة والرسوم والفيزياء والتجربة التفاعلية.',
    learn: [
      'ابدأ بمحرك جاهز وأنهِ ألعابًا صغيرة قبل التعمق في بناء محركك الخاص.',
      'تدرج من gameplay programming إلى فهم الأنظمة الداخلية والرندر والأدوات.',
      'ركز على الإنهاء، الأداء، والتشخيص لأن مشاريع الألعاب تتكسر سريعًا عند غياب الانضباط الهندسي.',
    ],
    build: ['أنهِ لعبتين صغيرتين، ثم ابنِ prototype لمحرك صغير أو أداة داخلية تخدم لعبة ثالثة.'],
    note2026:
      'أفضل مطور ألعاب في 2026 ليس من يعرف اسم كل تقنية، بل من يستطيع شحن لعبة صغيرة متماسكة ويفهم لماذا تعمل أو تتعطل.',
    resources: [
      { label: 'Unity Docs', url: docs.unity },
      { label: 'Unreal Engine Docs', url: docs.unreal },
      { label: 'Godot Docs', url: docs.godot },
      { label: 'Vulkan Guide', url: docs.vulkan },
    ],
    tags: ['Game Dev', 'Engines', 'Rendering', 'Gameplay'],
  },
  'data-ai-specialist': {
    title: 'مسار Data / AI Specialist',
    level: '2026',
    category: 'المسارات',
    summary:
      'يناسبك إذا كنت تحب البيانات، التحليل، النماذج، pipelines، والمنتجات الذكية التي تعتمد على المعرفة أو التنبؤ.',
    learn: [
      'تعمق في Python وأساسيات البيانات والتنظيف والتقييم.',
      'ابنِ فهمًا قويًا للـLLMs وretrieval وevaluation أو لمجال ML التقليدي بحسب اهتمامك.',
      'تعلم مراقبة الجودة والخصوصية وتكلفة التشغيل في pipelines البيانات.',
    ],
    build: ['نفذ مشروعًا يجمع بيانات، يحللها، ثم يضيف طبقة AI أو تقييم تنبئي واضحة.'],
    note2026:
      'هذا المسار اليوم يفضّل من يربط بين engineering discipline والـAI utility، لا من يكتفي بالتجارب السطحية.',
    resources: [
      { label: 'Python Tutorial', url: docs.python },
      { label: 'OpenAI Docs', url: docs.openai },
      { label: 'OWASP LLM Top 10', url: docs.owaspLlm },
    ],
    tags: ['Data', 'AI', 'Python', 'Evaluation'],
  },
  'platform-specialist': {
    title: 'مسار Platform / DevOps Specialist',
    level: 'متقدم',
    category: 'المسارات',
    summary:
      'يناسبك إذا كنت تستمتع بجعل الفرق الأخرى أسرع وأكثر أمانًا عبر المنصة، الأتمتة، المراقبة، والسياسات.',
    learn: [
      'تعمق في Linux وcontainers وCI/CD وKubernetes وIaC.',
      'ابنِ رؤية جيدة للموثوقية والتكلفة وتجربة المطور الداخلية.',
      'افهم أمن المنصة والصلاحيات والامتثال والتتبع.',
    ],
    build: ['ابنِ منصة تشغيل مصغرة أو template مشروع مع pipeline ومراقبة ونشر منظم.'],
    note2026:
      'Platform engineering يزداد أهمية لأن الفرق تحتاج طبقات مشتركة تقلل التكرار وتضبط الجودة والتشغيل.',
    resources: [
      { label: 'Docker Get Started', url: docs.docker },
      { label: 'Kubernetes Basics', url: docs.kubernetes },
      { label: 'OpenTofu Docs', url: docs.opentofu },
    ],
    tags: ['Platform', 'DevOps', 'SRE', 'Automation'],
  },
  'origins-history': {
    title: 'لماذا البرمجة والكمبيوتر أصلًا؟',
    level: 'ابدأ',
    category: 'الأساسيات',
    summary:
      'هذا هو المدخل الأعمق قبل دخول أي تقنية. هنا تبدأ من السؤال: لماذا احتاج البشر إلى الحوسبة أصلًا؟ كيف انتقلنا من العد والحساب اليدوي إلى الآلات القابلة للبرمجة؟ ولماذا صارت البرمجة اليوم طريقة لبناء الأنظمة والخدمات والمنتجات الحديثة؟',
    learn: [
      'افهم أن أصل الحوسبة كان الحاجة إلى الحساب الأسرع، الأتمتة، وتقليل الخطأ البشري في الأعمال المتكررة.',
      'اربط بين المشكلة، والتعليمات، والآلة، والنتيجة حتى ترى البرمجة كوسيلة لحل المشكلات لا كمجرد كتابة أوامر.',
      'كوّن صورة تاريخية مختصرة: حساب يدوي، آلات ميكانيكية، دوائر إلكترونية، حواسيب عامة الغرض، ثم برمجيات وشبكات وسحابة.',
      'افهم أن الكمبيوتر والبرمجة تطورا معًا: الآلة صارت عامة الغرض، والبرامج صارت اللغة التي تعطيها الدور الذي نريده.',
    ],
    build: [
      'اكتب خطًا زمنيًا شخصيًا يشرح كيف تحولت فكرة “الحساب” إلى “حاسوب” ثم إلى “برمجيات” ثم إلى “إنترنت” ثم إلى “ذكاء اصطناعي”.',
      'فسّر لشخص مبتدئ في صفحة واحدة لماذا أصبح تعلم البرمجة اليوم مهمًا حتى خارج وظيفة المبرمج التقليدية.',
    ],
    note2026:
      'في 2026 صارت البرمجة أقرب إلى “هندسة قرارات وأنظمة” وليست فقط كتابة شيفرة؛ لذلك فهم الأصل والسبب يعطيك اتجاهًا أفضل من حفظ الأدوات وحدها.',
    resources: [
      { label: 'Computer History Museum', url: docs.computerHistory },
      { label: 'Nand2Tetris', url: docs.nand2tetris },
      { label: 'MIT OpenCourseWare', url: docs.mitOcw },
    ],
    tags: ['History', 'Why Programming', 'Computing'],
  },
  'why-programming': {
    title: 'لماذا وُجدت البرمجة؟',
    level: 'ابدأ',
    category: 'الأساسيات',
    summary:
      'البرمجة وُجدت لأن البشر يريدون تحويل المنطق والخطوات المتكررة إلى تعليمات قابلة للتنفيذ آلاف وملايين المرات بسرعة واتساق. هي وسيلة لوصف السلوك المطلوب من آلة عامة الغرض.',
    learn: [
      'افهم أن البرمجة ليست غاية بذاتها؛ هي طريقة لترجمة فكرة أو قاعدة أو تدفق عمل إلى خطوات دقيقة.',
      'فرّق بين تنفيذ مهمة مرة واحدة يدويًا، وبين بناء نظام قادر على تنفيذها باستمرار وبدقة.',
      'افهم معنى التجريد: نحن لا نخاطب الإلكترونات مباشرة، بل نكتب طبقات أعلى تعبر عن نوايانا.',
      'اربط بين البرمجة والأتمتة والقياس وإمكانية التكرار والتطوير المستمر.',
    ],
    build: [
      'اختر مهمة يومية متكررة، مثل ترتيب ملفات أو معالجة نصوص، ثم اشرح كيف يمكن تحويلها إلى برنامج.',
      'اكتب خمس مشكلات من حياتك اليومية يمكن أن تحلها البرمجة بدل العمل اليدوي.',
    ],
    note2026:
      'حتى مع أدوات الذكاء الاصطناعي، ما زالت القيمة الحقيقية في القدرة على تعريف المشكلة والقواعد والقيود بدقة، وهذا هو جوهر البرمجة.',
    resources: [
      { label: 'Computer History Museum', url: docs.computerHistory },
      { label: 'Python Tutorial', url: docs.python },
    ],
    tags: ['Why Programming', 'Automation', 'Abstraction'],
  },
  'history-of-programming': {
    title: 'من أول خوارزمية إلى لغات اليوم',
    level: 'أساسي',
    category: 'الأساسيات',
    summary:
      'يمكن فهم تاريخ البرمجة كرحلة انتقال من أوامر قريبة من الآلة إلى لغات أقرب لطريقة تفكير البشر. من ملاحظات Ada Lovelace في 1843، إلى نموذج Turing في 1936، إلى المترجمات في الخمسينيات، ثم اللغات عالية المستوى، فالويب، فالمنصات الحديثة، فالبرمجة المدعومة بالذكاء الاصطناعي.',
    learn: [
      'تعرّف على بعض المحطات المفصلية: Ada Lovelace، Alan Turing، Grace Hopper، والانتقال من الآلة إلى اللغة عالية المستوى.',
      'افهم لماذا ظهرت المترجمات والمفسرات: حتى نكتب بلغة أكثر تعبيرًا وأقل ارتباطًا بتفاصيل العتاد.',
      'اربط بين تطور اللغات وتطور نوع التطبيقات: أعمال، أنظمة، ألعاب، ويب، جوال، وسحابة.',
      'لاحظ أن كل جيل لغوي يحاول رفع الإنتاجية دون فقدان السيطرة على الأداء أو الصحة.',
    ],
    build: [
      'ابنِ خطًا زمنيًا مختصرًا لعشرة أحداث غيرت تاريخ البرمجة وفسر تأثير كل حدث بجملة أو جملتين.',
      'قارن بين لغة منخفضة المستوى، ولغة عامة عالية المستوى، ولغة سكربت من زاوية الهدف لا الشهرة.',
    ],
    note2026:
      'فهم تاريخ اللغات يوضح لك لماذا ما زالت بعض الأفكار القديمة، مثل الأنواع والذاكرة والتجريد، أساسية جدًا حتى في أحدث الأطر.',
    resources: [
      { label: 'Computer History Museum', url: docs.computerHistory },
      { label: 'TypeScript Docs', url: docs.typescript },
      { label: 'Python Tutorial', url: docs.python },
    ],
    tags: ['Programming History', 'Languages', 'Compilers'],
  },
  'why-computers-matter': {
    title: 'لماذا احتجنا إلى الكمبيوتر؟',
    level: 'ابدأ',
    category: 'الأساسيات',
    summary:
      'الكمبيوتر ليس مجرد جهاز للترفيه أو التصفح؛ هو آلة عامة الغرض لمعالجة المعلومات. قيمته أنه يستطيع استقبال بيانات، تخزينها، معالجتها، ثم إخراج نتائج بسرعة واتساق وبأحجام لا يقدر عليها الإنسان وحده.',
    learn: [
      'افهم أن فكرة الكمبيوتر تقوم على الإدخال، المعالجة، التخزين، والإخراج.',
      'اربط بين الحوسبة وبين العلوم، التجارة، الاتصالات، الألعاب، الطب، والهندسة.',
      'افهم لماذا صارت “المعلومات” مادة خام مثل الطاقة تقريبًا في العالم الحديث.',
      'لاحظ أن الكمبيوتر مفيد لأنه قابل لإعادة البرمجة؛ أي أن نفس الجهاز يؤدي أدوارًا مختلفة ببرامج مختلفة.',
    ],
    build: [
      'اشرح بثلاثة أمثلة لماذا استخدام الكمبيوتر في مؤسسة يختلف جذريًا عن تنفيذ العمل نفسه يدويًا.',
      'اكتب شرحًا مبسطًا يوضح كيف يمكن لنفس الحاسوب أن يكون منصة للويب، والألعاب، والتحليل، والتصميم.',
    ],
    note2026:
      'كلما توسعت الأنظمة الرقمية وازدادت المنتجات الذكية والمرتبطة بالشبكات، زادت أهمية فهم الحاسوب كآلة معلومات عامة الغرض.',
    resources: [
      { label: 'MIT OpenCourseWare', url: docs.mitOcw },
      { label: 'Nand2Tetris', url: docs.nand2tetris },
    ],
    tags: ['Computer', 'Information Processing', 'General Purpose'],
  },
  'history-of-computers': {
    title: 'من الآلات الميكانيكية إلى الحاسوب الحديث',
    level: 'أساسي',
    category: 'الأساسيات',
    summary:
      'تاريخ الكمبيوتر يمر عبر مراحل واضحة: أدوات عد بدائية، آلات حساب ميكانيكية، تصاميم Charles Babbage في القرن التاسع عشر، الحوسبة النظرية، الصمامات المفرغة، الترانزستور في 1947، الدارات المتكاملة، المعالج الدقيق في 1971، ثم الحاسوب الشخصي، فالويب، فالهواتف الذكية، فالسحابة.',
    learn: [
      'افهم كيف خفّض الترانزستور الحجم والحرارة ورفع الاعتمادية مقارنة بالصمامات المفرغة.',
      'اربط بين ولادة المعالج الدقيق وبين ظهور الحوسبة الشخصية لاحقًا.',
      'افهم أن الإنترنت والويب لم يلغيا الحاسوب، بل وسّعا دوره وربطاه بالعالم كله.',
      'لاحظ أن كل قفزة تاريخية جاءت من تحسن في العتاد، أو التصميم، أو تكلفة الوصول، أو سهولة البرمجة.',
    ],
    build: [
      'ابنِ جدولًا من ست مراحل تاريخية للكمبيوتر، واكتب لكل مرحلة: ما المشكلة التي حلتها؟ وما الذي فتحته بعد ذلك؟',
      'اختر تقنية واحدة مثل الترانزستور أو المعالج الدقيق واشرح لماذا كانت نقطة تحول.',
    ],
    note2026:
      'معرفة تاريخ الكمبيوتر تساعدك على فهم لماذا ما زلنا نعيش حتى اليوم مع قيود الأداء والطاقة والذاكرة والتوافقية.',
    resources: [
      { label: 'Computer History Museum', url: docs.computerHistory },
      { label: 'Nand2Tetris', url: docs.nand2tetris },
    ],
    tags: ['Computer History', 'Transistor', 'Microprocessor'],
  },
  'computer-components': {
    title: 'مم يتكون الكمبيوتر؟',
    level: 'أساسي',
    category: 'الأساسيات',
    summary:
      'لفهم الحاسوب عمليًا تحتاج معرفة مكوناته الأساسية: المعالج CPU، الذاكرة RAM، التخزين، اللوحة الأم، مزود الطاقة، البطاقة الرسومية GPU عند الحاجة، وأجهزة الإدخال والإخراج. كل مكوّن له دور واضح في دورة العمل.',
    learn: [
      'افهم وظيفة CPU في تنفيذ التعليمات، وRAM في حفظ البيانات السريعة المؤقتة، والتخزين في حفظ البيانات الدائم.',
      'فرّق بين الأداء اللحظي المرتبط بالمعالج والذاكرة، وبين السعة المرتبطة بالتخزين.',
      'افهم دور GPU في الرسوم، الحوسبة المتوازية، وبعض أعباء الذكاء الاصطناعي والألعاب.',
      'اربط بين القطع المادية وبين أثرها العملي على تجربة التطوير أو الألعاب أو التصميم.',
    ],
    build: [
      'ارسم مخططًا بسيطًا يوضح مكونات الحاسوب الرئيسية وكيف تتبادل البيانات فيما بينها.',
      'اختر جهازًا لديك واكتب ما القطع الأكثر تأثيرًا فيه بالنسبة لنوع استخدامك الحالي.',
    ],
    note2026:
      'ليس مطلوبًا أن تصبح تقني عتاد، لكن فهم المكونات الأساسية يمنحك حسًا أفضل تجاه الأداء والمشكلات والاختيارات الشرائية.',
    resources: [
      { label: 'Nand2Tetris', url: docs.nand2tetris },
      { label: 'OSTEP', url: docs.ostep },
    ],
    tags: ['CPU', 'RAM', 'Storage', 'GPU'],
  },
  'hardware-software-os': {
    title: 'العتاد والبرامج ونظام التشغيل',
    level: 'أساسي',
    category: 'الأساسيات',
    summary:
      'هذا الموضوع يربط بين العتاد الفعلي والبرامج التي تكتبها. نظام التشغيل هو الوسيط الذي يدير الملفات والعمليات والذاكرة والأجهزة، ويمنح برامجك واجهات موحدة بدل التعامل المباشر مع كل قطعة.',
    learn: [
      'افهم الفرق بين hardware وsoftware وfirmware ونظام التشغيل.',
      'اربط بين البرنامج وبين الخدمات التي يطلبها من النظام: ملفات، شبكة، ذاكرة، عمليات، صلاحيات.',
      'افهم لماذا لا تكتب أغلب التطبيقات مباشرة فوق العتاد الخام.',
      'لاحظ أن كثيرًا من أخطاء البرامج هي في الحقيقة سوء فهم للحدود بين التطبيق والنظام.',
    ],
    build: [
      'اختر تطبيقًا تستخدمه يوميًا واشرح ما الذي يعتمد فيه على نظام التشغيل وما الذي ينفذه بنفسه.',
      'جرّب تنفيذ أوامر ملفات وعمليات بسيطة من الطرفية لتشعر بدور نظام التشغيل عمليًا.',
    ],
    note2026:
      'كلما فهمت دور نظام التشغيل مبكرًا، صار فهمك للشبكات، الحاويات، والخوادم أوضح بكثير لاحقًا.',
    resources: [
      { label: 'OSTEP', url: docs.ostep },
      { label: 'Ubuntu CLI Tutorial', url: docs.ubuntuCli },
    ],
    tags: ['Hardware', 'Software', 'Operating System'],
  },
  'how-software-is-made': {
    title: 'كيف يُصنع البرنامج من الفكرة إلى الإطلاق؟',
    level: 'أساسي',
    category: 'الأساسيات',
    summary:
      'البرامج لا تظهر من “كتابة كود” فقط. هناك دورة كاملة تبدأ بالمشكلة، ثم المتطلبات، ثم التصميم، فالبرمجة، فالاختبار، فالنشر، ثم الصيانة والتحسين والتكرار المستمر.',
    learn: [
      'افهم الفرق بين الفكرة، المتطلبات، التصميم، التنفيذ، والاختبار.',
      'تعلم أن المنتج البرمجي يتغير بعد الإطلاق ولا ينتهي عند أول نسخة.',
      'اربط بين كتابة الكود وبين المراجعة والتوثيق وإدارة الإصدارات والتغذية الراجعة.',
      'لاحظ أن المشروع الجيد ليس الأكثر تعقيدًا، بل الأكثر وضوحًا وقابلية للصيانة.',
    ],
    build: [
      'اختر تطبيقًا صغيرًا وفككه إلى مراحل بناء: مشكلة، مستخدم، بيانات، واجهة، منطق، اختبار، نشر.',
      'اكتب خطة مختصرة لأول مشروع لك من 7 إلى 10 خطوات قبل لمس الكود.',
    ],
    note2026:
      'تعلّم “صناعة البرمجيات” أهم من تعلم لغة واحدة فقط؛ لأن الأدوات تتغير بينما دورة الإنتاج الجيدة تبقى.',
    resources: [
      { label: 'Git Docs', url: docs.git },
      { label: 'GitHub Skills', url: docs.githubSkills },
      { label: 'Vite Guide', url: docs.vite },
    ],
    tags: ['Software Lifecycle', 'Requirements', 'Delivery'],
  },
  'learning-strategy-projects': {
    title: 'كيف تتعلم بذكاء وتبني مشاريع فعلًا؟',
    level: 'أساسي',
    category: 'الأساسيات',
    summary:
      'أكبر خطأ شائع هو جمع الموارد بلا تطبيق. التعلم الفعّال في البرمجة قائم على دورات قصيرة: تتعلم فكرة، تطبقها في مشروع صغير، تواجه خطأ، تصلحه، ثم تنتقل لما بعدها.',
    learn: [
      'اعتمد على المشاريع الصغيرة المتتالية بدل انتظار مشروع “مثالي” كبير من البداية.',
      'تعلم تدوين ما فهمته وما لم تفهمه وما يجب أن تعود إليه.',
      'افهم متى تشاهد، ومتى تقرأ التوثيق، ومتى تتوقف عن الاستهلاك وتبدأ التنفيذ.',
      'ابنِ عادة الرجوع إلى مشروع قديم وتحسينه بدل بدء مشروع جديد كل مرة.',
    ],
    build: [
      'صمم خطة 8 أسابيع فيها مشروع صغير كل أسبوعين بدل قائمة مشاهدة مفتوحة.',
      'أنشئ ملف متابعة شخصي تسجل فيه: ماذا تعلمت؟ ماذا بنيت؟ ما الذي تعطل؟ وما الخطوة القادمة؟',
    ],
    note2026:
      'في عصر كثرة الشروحات وأدوات AI، الانضباط في دورة التعلّم والتطبيق هو ما يميز المتقدم الحقيقي عن المستهلك الدائم للمحتوى.',
    resources: [
      { label: 'GitHub Skills', url: docs.githubSkills },
      { label: 'MDN Web Docs', url: docs.mdn },
      { label: 'Python Tutorial', url: docs.python },
    ],
    tags: ['Learning Strategy', 'Projects', 'Practice'],
  },
  'logic-boolean-models': {
    title: 'المنطق، الصواب والخطأ، وكيف يفكر النظام',
    level: 'أساسي',
    category: 'الأساسيات',
    summary:
      'البرامج تبنى على شروط ومسارات وقرارات. فهم المنطق البولياني وكيفية تمثيل الحالات والانتقالات يساعدك على كتابة كود أوضح، وعلى فهم كيف تتحول الأسئلة إلى نتائج داخل النظام.',
    learn: [
      'افهم قيم true وfalse والعمليات AND وOR وNOT في التفكير البرمجي.',
      'تعلّم تحويل القواعد البشرية إلى شروط قابلة للتنفيذ.',
      'اربط بين المنطق وبين التفرعات والتحقق من المدخلات والتصاريح والبحث.',
      'لاحظ أن كثيرًا من الأخطاء تأتي من سوء تعريف الحالات وليس من تعقيد اللغة نفسها.',
    ],
    build: [
      'خذ قاعدة عمل بسيطة، مثل صلاحيات مستخدم أو تحقق من نموذج، وحولها إلى شروط دقيقة.',
      'اكتب جدول حالات صغير يوضح كيف تتغير النتيجة عند تغير المدخلات.',
    ],
    note2026:
      'كلما دخلت في أنظمة أعقد، صار المنطق الواضح أهم من كتابة شيفرة أطول أو “أذكى” ظاهريًا.',
    resources: [
      { label: 'Nand2Tetris', url: docs.nand2tetris },
      { label: 'MIT OpenCourseWare', url: docs.mitOcw },
    ],
    tags: ['Logic', 'Boolean', 'Conditions'],
  },
  'cpu-memory-storage': {
    title: 'المعالج والذاكرة والتخزين: ماذا يحدث فعلًا؟',
    level: 'أساسي',
    category: 'الأساسيات',
    summary:
      'البرنامج لا يعمل في فراغ. التعليمات تنفذ على المعالج، البيانات تنتقل عبر الذاكرة، والملفات تحفظ على التخزين. فهم العلاقة بين هذه الثلاثية يفسر الأداء، البطء، وتكاليف التشغيل.',
    learn: [
      'اربط بين سرعة CPU، وسرعة الوصول إلى RAM، وبطء التخزين نسبيًا.',
      'افهم لماذا الوصول المتكرر إلى القرص أبطأ من العمل في الذاكرة.',
      'لاحظ أن حجم البيانات ونمط الوصول إليها يؤثران على الأداء بشكل كبير.',
      'تعرف على فكرة الذاكرة المؤقتة cache كطبقة وسيطة لتقليل الكلفة.',
    ],
    build: [
      'اختر برنامجًا بسيطًا واشرح أين تُحفظ بياناته أثناء التشغيل وأين تُحفظ بعد الإغلاق.',
      'فسّر لماذا قد يكون برنامج سريع الحساب لكنه بطيء في قراءة الملفات أو الشبكة.',
    ],
    note2026:
      'هذا الفهم مهم جدًا حتى لتطبيقات الويب والذكاء الاصطناعي، لأن مشاكل الأداء دائمًا تقريبًا ترجع إلى حركة البيانات لا إلى الكود فقط.',
    resources: [
      { label: 'OSTEP', url: docs.ostep },
      { label: 'Nand2Tetris', url: docs.nand2tetris },
    ],
    tags: ['CPU', 'Memory', 'Storage', 'Performance'],
  },
  'compilers-interpreters': {
    title: 'المترجمات والمفسرات والـ runtime',
    level: 'عملي',
    category: 'الأساسيات',
    summary:
      'عندما تكتب كودًا، هناك دائمًا طبقة تحوله أو تنفذه. أحيانًا يترجم إلى ملف تنفيذي أو bytecode، وأحيانًا يفسر أو يشغل داخل runtime. فهم هذه الطبقة يوضح الأخطاء، البناء، والتوزيع.',
    learn: [
      'افهم الفرق بين compiler وinterpreter وruntime وbytecode.',
      'لاحظ كيف تختلف تجربة التطوير في JavaScript وPython وGo وC# مثلًا بسبب هذا الفرق.',
      'اربط بين عملية البناء build وبين إنتاج artifact قابل للتشغيل أو النشر.',
      'افهم لماذا تظهر بعض الأخطاء في وقت الكتابة وأخرى وقت البناء وأخرى وقت التشغيل.',
    ],
    build: [
      'اختر لغتين تستخدمهما أو تنوي تعلمهما، ثم اشرح كيف يصل الكود فيهما من ملف نصي إلى برنامج يعمل.',
      'نفذ مشروعًا صغيرًا ثم راقب ملفات البناء أو التنفيذ الناتجة عنه.',
    ],
    note2026:
      'كلما عملت على مشاريع أكبر، صار فهم pipeline التنفيذ والبناء ضروريًا جدًا لحل المشكلات والتشغيل الآلي.',
    resources: [
      { label: 'Node.js Learn', url: docs.node },
      { label: 'TypeScript Docs', url: docs.typescript },
      { label: 'Python Tutorial', url: docs.python },
    ],
    tags: ['Compiler', 'Interpreter', 'Runtime', 'Build'],
  },
  'algorithms-thinking': {
    title: 'التفكير الخوارزمي قبل الكود',
    level: 'أساسي',
    category: 'البرمجة',
    summary:
      'الخوارزمية ليست مادة منفصلة عن البرمجة؛ هي وصف منظم لطريقة حل المشكلة. كلما تحسن تفكيرك الخوارزمي صار كودك أوضح، أسهل للاختبار، وأكثر قابلية للتحسين.',
    learn: [
      'تعلّم وصف الحل كخطوات مرتبة قبل ربطه بلغة معينة.',
      'افهم أن بعض الحلول صحيحة لكنها بطيئة، وبعضها أوضح وأقصر وأسهل صيانة.',
      'اربط بين اختيار البنية المناسبة واختيار الخوارزمية المناسبة.',
      'تعلم كيف تغيّر طريقة التفكير قبل أن تغيّر سطر الكود.',
    ],
    build: [
      'حل مسألة بسيطة بثلاث طرق مختلفة ثم قارن الوضوح وعدد الخطوات والقيود.',
      'اكتب pseudo code لمسألة يومية ثم حوّله إلى برنامج صغير.',
    ],
    note2026:
      'الذكاء الاصطناعي قد يولد كودًا، لكنه لا يغني عن القدرة على تقييم بنية الحل ومنطقه وتعقيده.',
    resources: [
      { label: 'MIT OpenCourseWare', url: docs.mitOcw },
      { label: 'Python Tutorial', url: docs.python },
    ],
    tags: ['Algorithms', 'Thinking', 'Pseudo Code'],
  },
  'recursion-iteration-patterns': {
    title: 'التكرار، العودية، وأنماط الحل',
    level: 'عملي',
    category: 'البرمجة',
    summary:
      'كثير من المشكلات يمكن حلها بالتكرار loops أو العودية recursion أو تقسيم المهمة إلى أنماط متكررة. الفكرة ليست حفظ التقنية بل معرفة متى تكون مناسبة ومتى تتحول إلى تعقيد زائد.',
    learn: [
      'افهم متى يكون loop أوضح من recursion ومتى العكس.',
      'تعلم أنماط traversal والبحث والتجميع والتحويل.',
      'لاحظ أثر كل نمط على الوضوح واستهلاك الذاكرة وسهولة التتبع.',
      'تدرّب على قراءة مشكلات صغيرة من زاوية “النمط” بدل حفظ الحل حرفيًا.',
    ],
    build: [
      'نفذ مسألة شجرية أو متداخلة مرة بالتكرار ومرة بالعودية ثم قارن الوضوح.',
      'أنشئ دالة تحوّل بيانات متداخلة إلى ملخص منظم.',
    ],
    note2026:
      'إتقان الأنماط الصغيرة يرفع جودة كودك اليومي أكثر من مطاردة مسائل المقابلات المعقدة فقط.',
    resources: [
      { label: 'MDN JavaScript', url: docs.mdnJs },
      { label: 'Python Tutorial', url: docs.python },
    ],
    tags: ['Loops', 'Recursion', 'Patterns'],
  },
  'programming-paradigms': {
    title: 'الأنماط البرمجية: إجرائي، كائني، ودالي',
    level: 'عملي',
    category: 'البرمجة',
    summary:
      'لا توجد مدرسة واحدة مناسبة لكل شيء. الأنماط البرمجية هي طرق لتنظيم التفكير والكود. المهم أن تفهم ما الذي يضيفه كل نمط، ومتى يساعدك على الوضوح أو الصيانة، ومتى يزيد الحمل بلا داع.',
    learn: [
      'افهم الفكرة العامة للبرمجة الإجرائية: خطوات واضحة وتحكم مباشر في التدفق.',
      'افهم متى تكون النماذج الكائنية مفيدة في تمثيل السلوك والحالة والعلاقات.',
      'تعرّف على فوائد الأسلوب الدالي في تقليل الآثار الجانبية وتحسين القابلية للاختبار.',
      'تعلم أن أغلب المشاريع الحقيقية تمزج أكثر من نمط بدل الالتزام العقائدي بنمط واحد.',
    ],
    build: [
      'نفذ نفس النموذج الصغير بطريقتين مختلفتين ثم قارن الوضوح والمرونة.',
      'أعد هيكلة جزء من كودك من منطق متشابك إلى وظائف أصغر أو نموذج أوضح.',
    ],
    note2026:
      'المطوّر القوي لا يتفاخر بالنمط، بل يعرف متى يستخدمه ومتى يتجنبه.',
    resources: [
      { label: 'TypeScript Docs', url: docs.typescript },
      { label: 'Go Tutorial', url: docs.go },
      { label: 'Python Tutorial', url: docs.python },
    ],
    tags: ['Paradigms', 'OOP', 'Functional', 'Procedural'],
  },
  'project-structure-environments': {
    title: 'هيكلة المشروع والبيئات والملفات',
    level: 'عملي',
    category: 'بيئة المطور',
    summary:
      'المشروع الجيد ليس فقط كودًا يعمل، بل بنية ملفات واضحة، إعدادات مفهومة، وبيئات تشغيل منفصلة. هذا يسهّل العمل الفردي والجماعي ويقلل الفوضى مع نمو المشروع.',
    learn: [
      'تعلم كيف تنظم مجلدات المشروع بحسب المسؤوليات لا بحسب العادة فقط.',
      'افهم الفرق بين إعدادات التطوير والاختبار والإنتاج.',
      'اربط بين ملفات الإعدادات، المتغيرات البيئية، وسلوك التطبيق النهائي.',
      'افهم أن الهيكلة الجيدة تقلل الحيرة أثناء القراءة والتطوير والتشغيل.',
    ],
    build: [
      'أعد تنظيم مشروع صغير لديك بحيث يصبح هيكله أوضح لزميل جديد لم يره من قبل.',
      'أنشئ بيئتين مختلفتين لمشروع واحد، ثم راقب ما الذي يتغير عند التشغيل.',
    ],
    note2026:
      'مع كثرة الأدوات والقوالب، تبقى الهيكلة المقروءة واحدة من أقوى مزايا المشروع الصحي.',
    resources: [
      { label: 'Node.js Learn', url: docs.node },
      { label: 'GitHub Skills', url: docs.githubSkills },
      { label: 'Vite Guide', url: docs.vite },
    ],
    tags: ['Project Structure', 'Environments', 'Config'],
  },
  'reading-docs-debugging-tools': {
    title: 'قراءة التوثيق واستخدام أدوات التشخيص',
    level: 'عملي',
    category: 'بيئة المطور',
    summary:
      'الانتقال من الاعتماد على الشروحات فقط إلى قراءة التوثيق واستخدام أدوات التشخيص هو نقطة تحول حقيقية. هذا ما يجعل تعلمك أسرع واستقلالك أعلى عند مواجهة الأخطاء.',
    learn: [
      'تعلم كيف تبحث داخل التوثيق الرسمي عن المفهوم والـ API والمثال المناسب.',
      'استخدم console وbreakpoints وnetwork tools وlogs بطريقة منهجية بدل التجريب العشوائي.',
      'فرّق بين الخطأ في الكود والخطأ في البيئة والخطأ في البيانات أو الشبكة.',
      'تعلم أن تسجل فرضية ثم تختبرها بدل القفز بين احتمالات كثيرة دون ترتيب.',
    ],
    build: [
      'حل ثلاثة أخطاء حقيقية باستخدام أدوات المتصفح أو الطرفية مع تدوين طريقة التفكير.',
      'اكتب خطوات تشخيص ثابتة تعود إليها كلما واجهت مشكلة جديدة.',
    ],
    note2026:
      'المطور الذي يقرأ التوثيق جيدًا ويشخّص الأخطاء بهدوء يربح وقتًا هائلًا مقارنة بمن يعتمد على النسخ والتجريب وحده.',
    resources: [
      { label: 'MDN Web Docs', url: docs.mdn },
      { label: 'Git Docs', url: docs.git },
      { label: 'Playwright Docs', url: docs.playwright },
    ],
    tags: ['Docs', 'Debugging', 'DevTools', 'Logs'],
  },
  'browser-rendering-dom': {
    title: 'كيف يرسم المتصفح الواجهة فعلًا؟',
    level: 'عملي',
    category: 'الويب الأمامي',
    summary:
      'لفهم الواجهة الحديثة بعمق، تحتاج أن تعرف كيف يقرأ المتصفح HTML وCSS وJavaScript، وكيف يبني DOM وCSSOM، ثم التخطيط layout، ثم الرسم paint، ثم التركيب compositing.',
    learn: [
      'افهم المراحل الأساسية من تحميل الصفحة إلى ظهورها على الشاشة.',
      'اربط بين تغييرات DOM أو styles وبين الكلفة على layout وpaint.',
      'لاحظ أثر الصور والخطوط والسكريبتات على سرعة البداية والتفاعل.',
      'تعلم لماذا بعض المشاكل “شكلية” في الظاهر لكنها في الأصل مشاكل rendering أو timing.',
    ],
    build: [
      'افتح DevTools وراقب كيف تتغير الصفحة عند تحميل مورد كبير أو عند تعديل CSS كثيف.',
      'أنشئ صفحة بسيطة ثم حسّنها تدريجيًا بمراقبة أثر كل تغيير على الأداء البصري.',
    ],
    note2026:
      'فهم آلية الرسم يجعل أداء الواجهة أكثر قابلية للتفسير بدل الاعتماد على “نصائح سحرية” متفرقة.',
    resources: [
      { label: 'MDN HTML', url: docs.mdnHtml },
      { label: 'MDN CSS', url: docs.mdnCss },
      { label: 'MDN JavaScript', url: docs.mdnJs },
    ],
    tags: ['Browser Rendering', 'DOM', 'CSSOM', 'Performance'],
  },
  'css-systems-responsive': {
    title: 'أنظمة CSS والاستجابة والتناسق',
    level: 'عملي',
    category: 'الويب الأمامي',
    summary:
      'CSS ليس مجرد ألوان وهوامش؛ هو نظام بصري. عندما تفهم الاستجابة، المقاسات، الفراغات، والتسلسل البصري، تصبح الواجهة أكثر اتساقًا ومرونة وقابلية للتوسع.',
    learn: [
      'تعلم التفكير في spacing وtypography وhierarchy وstates بدل تعديل عناصر متفرقة فقط.',
      'افهم متى تستخدم grid ومتى flex ومتى القياسات الثابتة أو المرنة.',
      'ابنِ حسًا حول تصميم الأنظمة الصغيرة: ألوان، أحجام، حدود، ومسافات متناسقة.',
      'تعلم كيف تجعل الواجهة جيدة على الشاشات الصغيرة والكبيرة دون ازدحام.',
    ],
    build: [
      'صمم نظام مسافات وأحجام صغيرًا لمشروعك ثم طبقه على أكثر من شاشة.',
      'أعد بناء واجهة بسيطة بطريقة تعتمد على قواعد واضحة بدل تعديلات موضعية كثيرة.',
    ],
    note2026:
      'الواجهات الأفضل ليست الأكثر بهرجة، بل الأكثر اتساقًا ووضوحًا عند التوسع والتعديل.',
    resources: [
      { label: 'MDN CSS', url: docs.mdnCss },
      { label: 'React Learn', url: docs.react },
    ],
    tags: ['CSS System', 'Responsive', 'Layout', 'UI'],
  },
  'forms-validation-ux': {
    title: 'النماذج، التحقق، وتجربة الإدخال',
    level: 'عملي',
    category: 'الويب الأمامي',
    summary:
      'جزء كبير من التطبيقات عبارة عن إدخال وتعديل وعرض بيانات. لذلك فهم النماذج والتحقق والأخطاء ورسائل الحالة مهم جدًا أكثر مما يظنه كثير من المبتدئين.',
    learn: [
      'تعلم الفرق بين التحقق في الواجهة والتحقق على الخادم.',
      'صمم رسائل خطأ واضحة ومفيدة بدل رسائل عامة مبهمة.',
      'افهم متى يكون التحقق فوريًا ومتى يكون مؤجلًا حتى لا تربك المستخدم.',
      'اربط بين قابلية الاستخدام وسلامة البيانات وتدفق العمل.',
    ],
    build: [
      'ابنِ نموذج تسجيل أو إنشاء عنصر مع تحقق واضح ورسائل مفهومة وحالات تحميل ونجاح.',
      'أعد تصميم نموذج قديم لديك بحيث يصبح أقل إرباكًا وأوضح في الإرشاد.',
    ],
    note2026:
      'جودة المنتج كثيرًا ما تُقاس من تفاصيل النماذج، لأنها النقطة التي يلمس فيها المستخدم دقة النظام مباشرة.',
    resources: [
      { label: 'MDN HTML', url: docs.mdnHtml },
      { label: 'React Learn', url: docs.react },
      { label: 'MDN Accessibility', url: docs.mdnA11y },
    ],
    tags: ['Forms', 'Validation', 'UX', 'Accessibility'],
  },
  'api-design-contracts': {
    title: 'تصميم الـ API والعقود بين الأنظمة',
    level: 'عملي',
    category: 'الخلفية والبيانات',
    summary:
      'الـ API ليس مجرد endpoint يعيد JSON. هو عقد بين أنظمة ومستهلكين. كلما كان واضحًا وثابتًا ومفهومًا، قلّت المشكلات عند التطوير والتكامل والصيانة.',
    learn: [
      'افهم الفرق بين تصميم REST الجيد وGraphQL وحالات كل واحد.',
      'تعلم تسمية الموارد، الحالات، الأخطاء، والنسخ versioning بطريقة منطقية.',
      'اربط بين تصميم الـ API وبين احتياجات الواجهة أو الخدمات الأخرى.',
      'افهم أن وضوح العقد يقلل كلفة التواصل والأخطاء لاحقًا.',
    ],
    build: [
      'صمم API صغيرًا لمشروع CRUD مع حالات خطأ واضحة وتوثيق بسيط.',
      'قارن بين تصميمين مختلفين لنفس الخدمة وحدد أيهما أوضح ولماذا.',
    ],
    note2026:
      'مع كثرة التكاملات والمنتجات المركبة، جودة العقد بين الأنظمة أصبحت من أهم عوامل النجاح.',
    resources: [
      { label: 'MDN HTTP', url: docs.mdnHttp },
      { label: 'GraphQL Learn', url: docs.graphql },
      { label: 'FastAPI Docs', url: docs.fastapi },
    ],
    tags: ['API Design', 'REST', 'GraphQL', 'Contracts'],
  },
  'transactions-consistency': {
    title: 'المعاملات واتساق البيانات',
    level: 'متقدم',
    category: 'الخلفية والبيانات',
    summary:
      'عندما يصبح لديك أكثر من خطوة لحفظ البيانات، يظهر سؤال الاتساق: ماذا يحدث إذا نجحت خطوة وفشلت أخرى؟ هنا تأتي أهمية المعاملات، القيود، واستراتيجيات الحفاظ على صحة الحالة.',
    learn: [
      'افهم معنى transaction وcommit وrollback وكيف تحمي البيانات من الحالات النصفية.',
      'اربط بين قواعد البيانات وبين منطق الأعمال عند تحديث أكثر من جدول أو سجل.',
      'افهم أن الاتساق ليس مجرد خاصية تقنية، بل جزء من صدق النظام مع المستخدم.',
      'تعلم متى يكفي الاتساق الفوري ومتى تتعامل مع eventual consistency.',
    ],
    build: [
      'ابنِ عملية شراء أو حجز بسيطة تحتاج أكثر من تحديث بيانات واحد ثم احمها بمعاملة واضحة.',
      'صمم حالة فشل متعمد وفسر كيف تمنع فساد البيانات عند حدوثها.',
    ],
    note2026:
      'كل نظام حقيقي يصل في مرحلة ما إلى مشاكل اتساق، ومن يفهمها مبكرًا يتجنب أخطاء مكلفة جدًا.',
    resources: [
      { label: 'PostgreSQL Docs', url: docs.postgres },
      { label: 'PostgreSQL SQL Tutorial', url: docs.postgresSql },
      { label: 'SQLite Docs', url: docs.sqlite },
    ],
    tags: ['Transactions', 'Consistency', 'Database'],
  },
  'background-jobs-integrations': {
    title: 'الأعمال الخلفية، الطوابير، والتكاملات',
    level: 'متقدم',
    category: 'الخلفية والبيانات',
    summary:
      'ليس كل شيء يجب أن يحدث داخل الطلب المباشر للمستخدم. هناك أعمال يجب تأجيلها أو توزيعها أو إعادة محاولتها، مثل إرسال البريد، معالجة الملفات، المزامنة، والربط مع أنظمة خارجية.',
    learn: [
      'افهم متى تنفذ العمل مباشرة ومتى ترسله إلى queue أو worker.',
      'تعلم مفاهيم retry وidempotency وdead letters بشكل عملي.',
      'اربط بين التكاملات الخارجية وبين حدود الزمن والموثوقية وفشل الشبكة.',
      'افهم أن الخلفية الجيدة تجعل الواجهة أسرع والنظام أهدأ تحت الحمل.',
    ],
    build: [
      'ابنِ مهمة خلفية بسيطة لمعالجة ملف أو إرسال إشعار مع إعادة محاولة عند الفشل.',
      'صمم تكاملًا مع خدمة خارجية، وحدد كيف ستتعامل مع البطء والانقطاع والتكرار.',
    ],
    note2026:
      'كلما زاد اعتماد الأنظمة على الرسائل والتكاملات، صار هذا الموضوع من مفاتيح النضج الخلفي الحقيقي.',
    resources: [
      { label: 'Redis Docs', url: docs.redis },
      { label: 'Node.js Learn', url: docs.node },
      { label: 'OpenTelemetry Docs', url: docs.opentelemetry },
    ],
    tags: ['Jobs', 'Queues', 'Integrations', 'Reliability'],
  },
  'domain-boundaries': {
    title: 'حدود المجال وتقسيم المسؤوليات',
    level: 'متقدم',
    category: 'المعمارية والأنظمة',
    summary:
      'المعمارية الجيدة تبدأ من الحدود الصحيحة: ما الذي ينتمي إلى هذا الجزء؟ وما الذي يجب أن يبقى في جزء آخر؟ فهم المجال وتقسيم المسؤوليات يمنع التشابك ويجعل التطوير أسرع لاحقًا.',
    learn: [
      'تعلم رؤية الوحدات بحسب المسؤولية والمجال لا بحسب المجلدات أو التقنيات فقط.',
      'افهم أن وضوح الحدود يسهل الاختبار والتطوير والتبديل والصيانة.',
      'اربط بين domain boundaries وبين ownership وواجهات التواصل بين الوحدات.',
      'لاحظ أن أغلب الفوضى المعمارية تبدأ من حدود غير واضحة منذ البداية.',
    ],
    build: [
      'خذ مشروعًا صغيرًا وفككه إلى وحدات واضحة المسؤولية مع حدود بينية معلنة.',
      'أعد تسمية وتجميع أجزاء مشروعك الحالي بحسب الدور الفعلي لكل جزء.',
    ],
    note2026:
      'حتى في المشاريع الصغيرة، التفكير في الحدود مبكرًا يقلل الدَّين التقني لاحقًا بشكل ملحوظ.',
    resources: [
      { label: 'Node.js Learn', url: docs.node },
      { label: 'OpenTelemetry Docs', url: docs.opentelemetry },
    ],
    tags: ['Architecture', 'Boundaries', 'Modules', 'Domain'],
  },
  'performance-capacity': {
    title: 'الأداء، السعة، وأين تختنق الأنظمة',
    level: '2026',
    category: 'المعمارية والأنظمة',
    summary:
      'الأداء ليس رقمًا واحدًا. هناك زمن استجابة، إنتاجية، استخدام ذاكرة، استهلاك شبكة، وحدود سعة. الأنظمة الجيدة تعرف أين تختنق، وكيف تراقب ذلك، ومتى تعالج السبب الحقيقي بدل الأعراض.',
    learn: [
      'افهم الفرق بين latency وthroughput وresource utilization.',
      'تعلم أن تحدد bottleneck: هل هو CPU أم قاعدة البيانات أم الشبكة أم التخزين أم تصميم التدفق نفسه.',
      'اربط بين المراقبة والقياس وبين قرار التحسين، بدل التحسين الأعمى.',
      'افهم أن بعض مشكلات الأداء هي في الحقيقة مشكلات تصميم بيانات أو تدفق أعمال.',
    ],
    build: [
      'اختر خدمة صغيرة وقس زمن الاستجابة لسيناريوهات مختلفة ثم حدد أين يظهر الاختناق.',
      'نفذ تحسينًا واحدًا قابلًا للقياس، ثم اشرح لماذا نجح أو لم ينجح.',
    ],
    note2026:
      'مع ازدياد تكاليف التشغيل والاعتماد على الخدمات السحابية، صار الأداء الجيد يوفر مالًا وتعقيدًا لا وقتًا فقط.',
    resources: [
      { label: 'OpenTelemetry Docs', url: docs.opentelemetry },
      { label: 'Node.js Learn', url: docs.node },
      { label: 'OSTEP', url: docs.ostep },
    ],
    tags: ['Performance', 'Capacity', 'Bottlenecks', 'Metrics'],
  },
  'identity-access-control': {
    title: 'الهوية، الصلاحيات، والتحكم في الوصول',
    level: 'متقدم',
    category: 'الجودة والأمان',
    summary:
      'الهوية تعني من أنت، والمصادقة authentication تعني كيف تثبت ذلك، والتخويل authorization يعني ماذا يحق لك أن تفعل. هذا الفرق البسيط مهم جدًا لبناء أنظمة آمنة ومفهومة.',
    learn: [
      'فرّق بين authentication وauthorization وsession وtoken وroles وpermissions.',
      'افهم أن الصلاحيات جزء من منطق الأعمال لا مجرد طبقة تزيينية.',
      'تعلم نماذج شائعة مثل RBAC وclaims-based access وحدود كل واحد.',
      'لاحظ أن أكثر أخطاء الأمن شيوعًا تأتي من سوء تحديد من يحق له ماذا.',
    ],
    build: [
      'ابنِ نظام صلاحيات صغيرًا فيه أكثر من دور وأكثر من مستوى وصول.',
      'اختبر سيناريوهات مستخدم غير مخول وحاول كسر القيود بشكل واعٍ.',
    ],
    note2026:
      'كلما دخلت الأنظمة متعددة الفرق والعملاء والواجهات، صار هذا الموضوع محوريًا في الأمان والتجربة معًا.',
    resources: [
      { label: 'OWASP Cheat Sheets', url: docs.owaspCheatsheets },
      { label: 'ASP.NET Core Docs', url: docs.dotnet },
    ],
    tags: ['Identity', 'Auth', 'Authorization', 'Access Control'],
  },
  'secure-coding-review': {
    title: 'البرمجة الآمنة والمراجعة الأمنية',
    level: 'متقدم',
    category: 'الجودة والأمان',
    summary:
      'الأمن ليس طبقة تضاف في النهاية. البرمجة الآمنة تبدأ من التحقق من المدخلات، تقليل الصلاحيات، حماية الأسرار، الانتباه للحقن، والمراجعة المستمرة لأنماط الخطورة داخل الكود والبنية.',
    learn: [
      'تعرّف على فئات الأخطار الشائعة مثل الحقن وXSS وSSRF وسوء إدارة الأسرار وسوء التهيئة.',
      'تعلم كيف تراجع الكود بحثًا عن مخاطر حقيقية لا مجرد شكل الكود.',
      'اربط بين الأمن وبين القرارات اليومية في البيانات والتسجيلات والربط مع خدمات خارجية.',
      'افهم أن الأمن عملية مستمرة لا قائمة فحص لمرة واحدة.',
    ],
    build: [
      'راجع جزءًا من مشروعك بحثًا عن ثلاث نقاط ضعف محتملة ثم أصلحها أو وثق علاجها.',
      'أنشئ قائمة مراجعة أمنية صغيرة تستخدمها قبل كل نشر.',
    ],
    note2026:
      'في المشاريع الحديثة، الوعي الأمني العملي من البداية أرخص بكثير من محاولات الإصلاح بعد التوسع.',
    resources: [
      { label: 'OWASP Top 10', url: docs.owasp },
      { label: 'OWASP Cheat Sheets', url: docs.owaspCheatsheets },
      { label: 'OWASP LLM Top 10', url: docs.owaspLlm },
    ],
    tags: ['Security', 'Code Review', 'OWASP', 'Secure Coding'],
  },
  'cloud-fundamentals': {
    title: 'ما هي السحابة فعلًا؟',
    level: 'عملي',
    category: 'السحابة والمنصة',
    summary:
      'السحابة ليست “سيرفر على الإنترنت” فقط. هي طريقة لاستهلاك الحوسبة والتخزين والشبكات والخدمات عند الطلب، مع نماذج تشغيل وقياس ودفع وتوسع تختلف عن الإدارة التقليدية للأجهزة.',
    learn: [
      'افهم معنى compute وstorage وnetworking وmanaged services في السياق السحابي.',
      'فرّق بين IaaS وPaaS وSaaS بطريقة عملية لا مدرسية فقط.',
      'اربط بين السحابة وبين الأتمتة والتوسع والمرونة التشغيلية.',
      'افهم أن السحابة تسهّل أشياء وتضيف تعقيدًا جديدًا في أشياء أخرى مثل التكلفة والحوكمة.',
    ],
    build: [
      'خذ تطبيقًا صغيرًا واشرح كيف سيتغير تشغيله عند نقله من جهاز محلي إلى بيئة سحابية.',
      'صمم بنية سحابية أولية لمشروع بسيط فيها تطبيق وقاعدة بيانات وتخزين ملفات.',
    ],
    note2026:
      'فهم المفاهيم السحابية الأساسية صار ضروريًا حتى للمطور الذي لا يعمل يوميًا في DevOps.',
    resources: [
      { label: 'Docker Get Started', url: docs.docker },
      { label: 'Kubernetes Basics', url: docs.kubernetes },
      { label: 'OpenTofu Docs', url: docs.opentofu },
    ],
    tags: ['Cloud', 'Compute', 'Storage', 'Managed Services'],
  },
  'network-edge-delivery': {
    title: 'الشبكات، الحافة، والتسليم السريع',
    level: 'متقدم',
    category: 'السحابة والمنصة',
    summary:
      'عندما يكبر المنتج، لا يعود الخادم وحده هو القصة. هناك DNS وTLS وCDN وedge caching وload balancing وسياسات توجيه تؤثر مباشرة على السرعة والموثوقية وتجربة المستخدم.',
    learn: [
      'افهم دور DNS وTLS وCDN وload balancer في الرحلة الكاملة للطلب.',
      'اربط بين القرب الجغرافي والتخزين المؤقت وزمن الاستجابة.',
      'تعلم متى تستفيد من الحافة edge ومتى لا تحتاجها أصلًا.',
      'لاحظ أن كثيرًا من تحسينات الأداء الكبيرة تأتي من تقليل الرحلة لا من تسريع الكود فقط.',
    ],
    build: [
      'ارسم مخططًا لرحلة طلب يمر عبر DNS وCDN ثم الخادم ثم قاعدة البيانات ثم يعود للمستخدم.',
      'قارن بين سيناريو فيه caching وسيناريو بدونه وحدد الأثر المتوقع على الحمل.',
    ],
    note2026:
      'مع انتشار المنتجات العالمية والواجهات الثقيلة والـ AI-powered experiences، فهم الحافة والتسليم صار أعلى قيمة من السابق.',
    resources: [
      { label: 'MDN HTTP', url: docs.mdnHttp },
      { label: 'Cloudflare Fundamentals', url: docs.cloudflare },
      { label: 'Docker Get Started', url: docs.docker },
    ],
    tags: ['Edge', 'CDN', 'DNS', 'TLS', 'Load Balancing'],
  },
  'ops-runbooks-costs': {
    title: 'التشغيل، الـ runbooks، والتكلفة',
    level: '2026',
    category: 'السحابة والمنصة',
    summary:
      'التشغيل الناضج لا يعني فقط أن النظام “شغال الآن”، بل أن الفريق يعرف ماذا يفعل عند البطء أو الانقطاع أو امتلاء التكلفة. هنا تظهر قيمة runbooks والتنبيهات ومسؤولية الكلفة.',
    learn: [
      'تعلم كتابة runbook بسيط يشرح الاستجابة للمشكلات المتكررة خطوة بخطوة.',
      'اربط بين التنبيه الجيد وبين قابلية التصرف لا كثرة الضجيج.',
      'افهم أن الكلفة جزء من المعمارية والتشغيل وليست تقريرًا ماليًا منفصلًا.',
      'ابنِ عقلية تشغيلية ترى الخدمة كشيء يحتاج متابعة وتعلمًا بعد الإطلاق.',
    ],
    build: [
      'اكتب runbook لحالة فشل متوقعة في مشروعك: ماذا تراقب، ماذا تفحص، ومتى تصعّد؟',
      'راجع موردًا واحدًا مستهلكًا في مشروعك وحدد كيف يمكن تقليل كلفته دون كسر التجربة.',
    ],
    note2026:
      'في 2026 لم تعد الميزة فقط في بناء النظام، بل في تشغيله بهدوء ووعي وكلفة معقولة.',
    resources: [
      { label: 'GitHub Actions Docs', url: docs.ghActions },
      { label: 'OpenTelemetry Docs', url: docs.opentelemetry },
      { label: 'Kubernetes Basics', url: docs.kubernetes },
    ],
    tags: ['Operations', 'Runbooks', 'Cost', 'Reliability'],
  },
  'computer-architecture': {
    title: 'معمارية الحاسوب: من التعليمات إلى التنفيذ',
    level: 'متقدم',
    category: 'علوم الحاسب',
    summary:
      'هذا الموضوع يربط بين ما تكتبه وبين ما يجري داخل الآلة: التعليمات، المسجلات، الذاكرة، وحدات التنفيذ، والتدرج من طبقة منطقية إلى طبقة مادية. هو من أكثر الموضوعات التي تعطيك “فهمًا تحت السطح”.',
    learn: [
      'افهم الفكرة العامة لمسار التعليمة من الجلب إلى التنفيذ.',
      'تعرّف على دور المسجلات والذاكرة والكاش والناقلات بشكل مبسط لكن مترابط.',
      'اربط بين قرارات البرمجة وبعض آثارها على الوصول إلى الذاكرة والتنفيذ.',
      'افهم لماذا تختلف بعض الأحمال بين CPU-bound وmemory-bound.',
    ],
    build: [
      'اشرح رحلة تعليمة بسيطة أو عملية جمع من منظور مبسط داخل المعالج.',
      'اربط مثالًا برمجيًا صغيرًا بمفاهيم مثل الوصول المتكرر للذاكرة أو تعليمات متسلسلة.',
    ],
    note2026:
      'لا تحتاج هذا الفهم لكل مشروع يومي، لكنه يرفع جودة قراراتك في الأداء والأنظمة والتعليم بشكل كبير.',
    resources: [
      { label: 'Nand2Tetris', url: docs.nand2tetris },
      { label: 'MIT OpenCourseWare', url: docs.mitOcw },
    ],
    tags: ['Computer Architecture', 'CPU', 'Instructions', 'Memory'],
  },
  'networking-protocols': {
    title: 'البروتوكولات والشبكات بعمق أوضح',
    level: 'متقدم',
    category: 'علوم الحاسب',
    summary:
      'كل تطبيق موزع في النهاية يعتمد على بروتوكولات. عندما تفهم الطبقات والحزم والجلسات والموثوقية، تصبح مشكلات الشبكة أهدأ وأوضح بدل أن تبدو سحرًا غامضًا.',
    learn: [
      'اربط بين طبقات الشبكة بشكل عملي، خاصة ما يهمك في التطبيقات الحديثة.',
      'افهم لماذا يوجد TCP ومتى يظهر UDP ولماذا يختلفان.',
      'تعلم أثر التأخير والفقد وإعادة الإرسال على التطبيقات الحية والتفاعلية.',
      'لاحظ أن “المشكلة في السيرفر” أحيانًا تكون في الشبكة أو المسار أو البروتوكول.',
    ],
    build: [
      'افتح أدوات الشبكة وفسر طلبًا بطيئًا من زاوية DNS أو الاتصال أو النقل أو الاستجابة.',
      'قارن بين حالة تحميل ملف وحالة بث حي أو لعبة أونلاين من زاوية البروتوكول.',
    ],
    note2026:
      'كلما زاد اعتماد التطبيقات على الزمن الحقيقي والتوزيع الجغرافي، صار فهم البروتوكولات أكثر قيمة.',
    resources: [
      { label: 'MDN HTTP', url: docs.mdnHttp },
      { label: 'Ubuntu CLI Tutorial', url: docs.ubuntuCli },
    ],
    tags: ['Networking', 'Protocols', 'TCP', 'UDP', 'Latency'],
  },
  'database-internals': {
    title: 'ما الذي يحدث داخل قاعدة البيانات؟',
    level: '2026',
    category: 'علوم الحاسب',
    summary:
      'معرفة SQL وحدها لا تكفي دائمًا. حين تفهم الفهارس والتخزين والتخطيط للاستعلامات والأقفال والاتساق، تصبح قراراتك في النمذجة والاستعلام والأداء أكثر نضجًا بكثير.',
    learn: [
      'افهم معنى index وquery plan ولماذا بعض الاستعلامات تتدهور بسرعة عند النمو.',
      'تعرف على الأقفال والعزل والكتابة المتزامنة بشكل عملي.',
      'اربط بين تصميم الجداول والاستعلامات وبين كلفة التخزين والقراءة.',
      'افهم لماذا قواعد البيانات ليست “مكان حفظ” فقط، بل أنظمة تنفيذ معقدة بحد ذاتها.',
    ],
    build: [
      'قارن بين استعلامين لنفس النتيجة، ثم راقب كيف يختلف الأداء مع البيانات الأكبر.',
      'اشرح لماذا يحتاج جدول معين إلى index محدد ومتى يصبح غير مفيد.',
    ],
    note2026:
      'هذا العمق يميّز من يبني أنظمة مستقرة عن من يصلحها باستمرار بعد فوات الأوان.',
    resources: [
      { label: 'PostgreSQL Docs', url: docs.postgres },
      { label: 'SQLite Docs', url: docs.sqlite },
    ],
    tags: ['Database Internals', 'Indexes', 'Query Planning', 'Locks'],
  },
  'animation-audio-pipelines': {
    title: 'الأنيميشن، الصوت، وخطوط إنتاج المحتوى',
    level: 'عملي',
    category: 'الألعاب والمحركات',
    summary:
      'الألعاب ليست كودًا فقط؛ هناك حركة وصوت وانتقالات واستيراد أصول وربط بين ما ينتجه الفنانون وما يستهلكه المحرك. فهم هذا الخط يجعل مشروع اللعبة أكثر اتساقًا وواقعية.',
    learn: [
      'افهم كيف تنتقل الأصول من برامج التصميم أو الصوت إلى المحرك.',
      'تعرّف على أساسيات animation states والانتقالات والأحداث المرتبطة بها.',
      'اربط بين الصوت والتغذية الراجعة والإحساس العام بجودة اللعبة.',
      'لاحظ أن وضوح pipeline يقلل الفوضى عند نمو المشروع وتعدد المساهمين.',
    ],
    build: [
      'أضف إلى لعبة صغيرة نظام حركة بسيطًا وصوتيات مرتبطة بالأحداث الأساسية.',
      'وثّق pipeline مختصرًا لاستيراد الأصول واستخدامها داخل مشروعك.',
    ],
    note2026:
      'جودة التجربة في الألعاب كثيرًا ما تقفز من “مقبول” إلى “مقنع” بسبب الحركة والصوت لا المنطق فقط.',
    resources: [
      { label: 'Unity Docs', url: docs.unity },
      { label: 'Godot Docs', url: docs.godot },
    ],
    tags: ['Animation', 'Audio', 'Assets', 'Pipeline'],
  },
  'multiplayer-netcode': {
    title: 'الألعاب الشبكية والـ netcode',
    level: 'متقدم',
    category: 'الألعاب والمحركات',
    summary:
      'بناء لعبة متعددة اللاعبين يضيف طبقة جديدة تمامًا من التعقيد: المزامنة والتأخير والتوقع والتصحيح والأمان. هذا المجال وحده يكفي كتخصص فرعي داخل تطوير الألعاب.',
    learn: [
      'افهم الفرق بين authoritative server وpeer-to-peer بشكل مبسط.',
      'تعلم أثر latency وjitter وpacket loss على تجربة اللعب.',
      'اربط بين المزامنة وبين التصميم نفسه: ما الذي يجب أن يكون دقيقًا وما الذي يمكن تقديره.',
      'لاحظ أن ألعاب الشبكة تتطلب قرارات تصميمية مبكرة لا إضافات متأخرة فقط.',
    ],
    build: [
      'نفذ prototype بسيطًا لمزامنة حالة عنصر أو حركة لاعب بين عميلين بشكل مبسط.',
      'اشرح كيف ستتعامل مع التأخير في لعبة تنافسية مقارنة بلعبة تعاونية بطيئة.',
    ],
    note2026:
      'الـ netcode من أكثر الأجزاء التي تكشف الفرق بين “لعبة تعمل” و“نظام لعب قابل للثقة تحت الإنترنت الحقيقي”.',
    resources: [
      { label: 'Unity Docs', url: docs.unity },
      { label: 'SDL Wiki', url: docs.sdl },
      { label: 'Godot Docs', url: docs.godot },
    ],
    tags: ['Multiplayer', 'Netcode', 'Latency', 'Synchronization'],
  },
  'prompting-context-tool-use': {
    title: 'الـ prompting، السياق، واستخدام الأدوات',
    level: 'عملي',
    category: 'AI Engineering',
    summary:
      'هندسة تطبيقات الذكاء الاصطناعي الحديثة لا تتعلق بكتابة prompt طويل فقط، بل بكيفية تحديد الهدف وتنظيم السياق والتحكم في الأدوات وتقييد السلوك وتقييم النتيجة عمليًا.',
    learn: [
      'افهم أن جودة النتائج تعتمد على بنية المهمة والسياق والحواجز أكثر من “الصياغة السحرية”.',
      'تعلم الفرق بين تعليمات النظام وسياق المهمة وأمثلة الإدخال والإخراج وأدوات التنفيذ.',
      'اربط بين prompts وبين workflows التي تستدعي بحثًا أو ملفات أو أدوات خارجية.',
      'لاحظ أن أفضل التجارب تأتي من تصميم المهمة كاملة لا من تحسين جملة واحدة فقط.',
    ],
    build: [
      'ابنِ تدفقًا بسيطًا يستخدم نموذجًا مع سياق محدد وأداة خارجية ويعيد نتيجة قابلة للفحص.',
      'قارن بين ثلاث صيغ للمهمة نفسها وحدد لماذا تختلف النتائج.',
    ],
    note2026:
      'في 2026، المطور الأفضل في AI apps ليس من يكتب prompts أكثر، بل من يصمم حدود السياق والأدوات والتقييم بوضوح.',
    resources: [
      { label: 'OpenAI Docs', url: docs.openai },
      { label: 'Model Context Protocol', url: docs.mcp },
      { label: 'OWASP LLM Top 10', url: docs.owaspLlm },
    ],
    tags: ['Prompting', 'Context', 'Tool Use', 'AI Apps'],
  },
  'model-serving-latency-cost': {
    title: 'خدمة النماذج: السرعة، الكلفة، والاعتمادية',
    level: '2026',
    category: 'AI Engineering',
    summary:
      'حين يخرج النموذج إلى منتج حقيقي، تظهر الأسئلة الصعبة: كم يكلف؟ كم يتأخر؟ ماذا لو فشل؟ كيف نختار النموذج أو pipeline المناسب؟ هذا هو جانب التشغيل الحقيقي لتطبيقات الذكاء الاصطناعي.',
    learn: [
      'اربط بين حجم السياق وطول المخرجات وبين زمن الاستجابة والتكلفة.',
      'افهم متى تحتاج caching أو batching أو fallbacks أو نماذج متعددة المستويات.',
      'تعلم أن reliability في AI apps تشمل الجودة والتكلفة والسرعة لا الصحة التقنية فقط.',
      'لاحظ أن قرار المنتج أحيانًا يكون اختيار تدفق أبسط بدل نموذج أقوى وأغلى.',
    ],
    build: [
      'قارن بين خيارين لخدمة مهمة واحدة من زاوية الجودة والسرعة والتكلفة ثم اختر أحدهما مع تبرير.',
      'صمم fallback بسيطًا عند فشل النموذج أو تجاوز الميزانية أو الوقت.',
    ],
    note2026:
      'مع توسع استخدام النماذج في المنتجات، صار التشغيل الاقتصادي والعملي من أهم مهارات AI engineering.',
    resources: [
      { label: 'OpenAI Docs', url: docs.openai },
      { label: 'OpenTelemetry Docs', url: docs.opentelemetry },
    ],
    tags: ['Model Serving', 'Latency', 'Cost', 'Reliability'],
  },
  'evaluation-guardrails': {
    title: 'التقييم، الحواجز، ومنع الانحراف',
    level: '2026',
    category: 'AI Engineering',
    summary:
      'المنتجات الذكية تحتاج طريقة لقياس الجودة ومنع الانحرافات غير المقبولة. التقييم المستمر والguardrails ليسا رفاهية؛ هما ما يفصل بين demo جميل ومنتج يمكن الوثوق به.',
    learn: [
      'تعلم الفرق بين تقييم يدوي وتقييم آلي ومؤشرات المنتج الفعلية.',
      'افهم معنى guardrails في المحتوى والأدوات والأذونات والنتائج المتوقعة.',
      'اربط بين الأمان والجودة والتكلفة في دورة تقييم واحدة بدلاً من فصلها تمامًا.',
      'لاحظ أن عدم وجود تقييم واضح يجعل التحسين لاحقًا عشوائيًا جدًا.',
    ],
    build: [
      'أنشئ مجموعة حالات اختبار صغيرة لمهمة LLM ثم راقب النتائج وحدد معايير النجاح والفشل.',
      'أضف حاجزًا واحدًا واضحًا يمنع سلوكًا غير مرغوب في تدفق ذكي لديك.',
    ],
    note2026:
      'كلما اقترب تطبيق AI من الاستخدام الحقيقي، زادت قيمة التقييم المنهجي أكثر من اللمعان الأولي.',
    resources: [
      { label: 'OpenAI Docs', url: docs.openai },
      { label: 'OWASP LLM Top 10', url: docs.owaspLlm },
      { label: 'Model Context Protocol', url: docs.mcp },
    ],
    tags: ['Evaluation', 'Guardrails', 'Quality', 'Safety'],
  },
  'product-engineering-specialist': {
    title: 'مسار Product Engineering Specialist',
    level: '2026',
    category: 'المسارات',
    summary:
      'يناسبك إذا كنت تستمتع بربط التقنية بقيمة المستخدم الفعلية: واجهة، خلفية، جودة، بيانات استخدام، تحسين تدريجي، وقرارات مبنية على المنتج لا على التقنية وحدها.',
    learn: [
      'اجمع بين الواجهة والمنطق والقياس والتجربة في دورة تطوير واحدة.',
      'طوّر حسًا تجاه ما يهم المستخدم فعلًا وما الذي يربك أو يبطئ أو يكسر الثقة.',
      'اربط بين الشحن السريع وبين الحفاظ على الجودة والصيانة والتعلم من الاستخدام الحقيقي.',
      'تعلم العمل من المشكلة والسيناريو قبل الانبهار بالأدوات.',
    ],
    build: [
      'ابنِ ميزة متكاملة من الواجهة إلى القياس بعد الإطلاق مع تحليل أثرها على المستخدم.',
      'أعد تحسين تجربة موجودة بناءً على ملاحظات أو بيانات استخدام فعلية.',
    ],
    note2026:
      'هذا المسار يزداد قيمة لأن الفرق تحتاج مطورين يرون المنتج كله لا جزءًا تقنيًا معزولًا فقط.',
    resources: [
      { label: 'React Learn', url: docs.react },
      { label: 'Next.js Docs', url: docs.next },
      { label: 'GitHub Actions Docs', url: docs.ghActions },
    ],
    tags: ['Product Engineering', 'Full Stack', 'User Value'],
  },
  'research-open-source-specialist': {
    title: 'مسار Research / Open Source Specialist',
    level: 'متقدم',
    category: 'المسارات',
    summary:
      'يناسبك إذا كنت تميل إلى الفهم العميق والقراءة والتجريب ومشاركة المعرفة والمساهمة في الأدوات أو الأفكار المفتوحة. هذا المسار قوي لمن يحب البناء الطويل الأمد والشرح والتحسين التراكمي.',
    learn: [
      'تعلم القراءة المتأنية للتوثيق والأوراق والمشاريع المصدرية.',
      'طوّر قدرتك على التجريب المنهجي وكتابة النتائج بوضوح.',
      'ساهم في إصلاحات صغيرة ثم توسع إلى تحسينات أو وثائق أو أدوات أعمق.',
      'اربط بين العمق النظري وبين القيمة العملية للمجتمع أو الفريق.',
    ],
    build: [
      'قدّم مساهمة صغيرة في مشروع مفتوح المصدر أو وثّق مشكلة وحلها بوضوح.',
      'اكتب مقالة أو ملاحظة تقنية تشرح فكرة عميقة من تجربتك بشكل مبسط.',
    ],
    note2026:
      'المساهمات الواضحة والمتكررة في المجتمع والتوثيق والمشاريع المفتوحة تبني سمعة مهنية قوية على المدى الطويل.',
    resources: [
      { label: 'GitHub Skills', url: docs.githubSkills },
      { label: 'Git Docs', url: docs.git },
      { label: 'MIT OpenCourseWare', url: docs.mitOcw },
    ],
    tags: ['Research', 'Open Source', 'Writing', 'Community'],
  },
  'mastery-growth': {
    title: 'ما بعد التخصص: النمو والمرجعية',
    level: 'متقدم',
    category: 'النمو المهني',
    summary:
      'بعد بناء الأساس والتخصص، يبدأ سؤال مختلف: كيف تثبت عملك؟ كيف تبني سمعة؟ كيف تتعلم باستمرار؟ كيف تتحول من منفذ جيد إلى شخص يُرجع إليه الآخرون؟ هذا القسم يغطي ما بعد المهارة الخام.',
    learn: [
      'افهم أن المرجعية المهنية لا تبنى من المعرفة فقط، بل من الوضوح والإنجاز والتواصل والاستمرارية.',
      'اربط بين المشاريع المنجزة والشرح والمشاركة وبين بناء الثقة المهنية.',
      'تعلم أن النمو بعد التخصص يحتاج نظامًا شخصيًا للتعلم والتوثيق والتحسين.',
      'افهم أن التأثير الفني يشمل المساهمة في الأشخاص والقرارات والاتجاهات، لا الكود فقط.',
    ],
    build: [
      'صمم خطة تطور شخصية لسنة تشمل بناء وكتابة ومشاركة وتحسين مهارة عميقة واحدة.',
      'قيّم أعمالك السابقة من زاوية: ما الذي يثبت المستوى؟ وما الذي يحتاج إعادة بناء أو توثيق؟',
    ],
    note2026:
      'في 2026 أصبحت الهوية المهنية تبنى على العمل الموثق والقدرة على الشرح واتخاذ القرارات، لا على عدد التقنيات المذكورة في السيرة فقط.',
    resources: [
      { label: 'GitHub Skills', url: docs.githubSkills },
      { label: 'MIT OpenCourseWare', url: docs.mitOcw },
    ],
    tags: ['Career Growth', 'Mastery', 'Portfolio', 'Leadership'],
  },
  'portfolio-proof-of-work': {
    title: 'البورتفوليو وإثبات العمل الحقيقي',
    level: 'عملي',
    category: 'النمو المهني',
    summary:
      'أفضل بورتفوليو ليس قائمة مشاريع متوقفة، بل أعمال منتهية ومفهومة يمكن شرحها. إثبات العمل الحقيقي يعني أن يرى الآخرون كيف تفكر وماذا بنيت وكيف تعالج التعقيد والقيود.',
    learn: [
      'اعرض المشاريع التي تقول شيئًا واضحًا عن مستواك لا التي تجمع تقنيات كثيرة فقط.',
      'تعلم كيف تشرح الفكرة والقرارات والقيود والنتيجة في كل مشروع.',
      'اربط بين جودة العرض وبين جودة التنفيذ؛ فكلاهما جزء من الصورة المهنية.',
      'افهم أن مشروعين واضحين منتهيين أفضل من عشرة مشاريع نصف مكتملة.',
    ],
    build: [
      'اختر ثلاثة مشاريع فقط وأعد صياغة عرضها بحيث يبين المشكلة والحل والقرارات والنتيجة.',
      'أضف لواحد من مشاريعك README أو صفحة شرح تظهر نضجه بشكل أوضح.',
    ],
    note2026:
      'سوق البرمجة يميل أكثر فأكثر إلى تقييم الأثر والوضوح والإنهاء، لا ادعاء المعرفة فقط.',
    resources: [
      { label: 'GitHub Skills', url: docs.githubSkills },
      { label: 'React Learn', url: docs.react },
    ],
    tags: ['Portfolio', 'Proof of Work', 'Projects'],
  },
  'writing-teaching-communication': {
    title: 'الكتابة، الشرح، ونقل المعرفة',
    level: 'متقدم',
    category: 'النمو المهني',
    summary:
      'القدرة على الشرح والكتابة ليست مهارة جانبية؛ هي ما يجعل تأثيرك يتضاعف. عندما تشرح فكرة بوضوح، أنت غالبًا تفهمها أعمق، وتساعد فريقك، وتبني مرجعًا يعود إليه الآخرون.',
    learn: [
      'تعلم كتابة الملاحظات التقنية والوثائق القصيرة الواضحة.',
      'درّب نفسك على شرح المفاهيم المعقدة بلغة بسيطة دون تضييع الجوهر.',
      'اربط بين التواصل الجيد وبين السرعة الجماعية وتقليل سوء الفهم.',
      'لاحظ أن من ينقل المعرفة جيدًا يصبح مرجعًا أسرع من من يحتفظ بها في رأسه فقط.',
    ],
    build: [
      'اكتب شرحًا مختصرًا لمفهوم تعلمته هذا الشهر بحيث يفهمه مبتدئ ولم يفقد عمقه.',
      'حوّل حل مشكلة واجهتك إلى وثيقة أو تدوينة أو ملاحظة قابلة لإعادة الاستخدام.',
    ],
    note2026:
      'المهندسون الأقوى تأثيرًا غالبًا ليسوا الأكثر كتابة للكود فقط، بل الأكثر وضوحًا في التفكير والتواصل.',
    resources: [
      { label: 'MDN Web Docs', url: docs.mdn },
      { label: 'GitHub Skills', url: docs.githubSkills },
    ],
    tags: ['Writing', 'Teaching', 'Communication', 'Documentation'],
  },
  'leadership-systems-thinking': {
    title: 'القيادة الفنية والتفكير بالنظام الكامل',
    level: '2026',
    category: 'النمو المهني',
    summary:
      'القيادة الفنية ليست رتبة فقط؛ هي القدرة على رؤية الصورة الأكبر وتوضيح الاتجاه وتقليل التشويش ورفع جودة القرار والتنفيذ عبر النظام كله: منتجًا وفريقًا وتشغيلًا.',
    learn: [
      'تعلم كيف تربط بين القرارات التقنية واحتياجات المنتج والفريق والزمن.',
      'افهم أن القيادة الفنية تبدأ من وضوح التفكير والمسؤولية لا من السلطة الشكلية.',
      'طوّر قدرتك على اتخاذ trade-offs وشرحها بإنصاف ووضوح.',
      'انظر إلى النظام كاملًا: الأشخاص والعمليات والأدوات والكود والتشغيل.',
    ],
    build: [
      'حلل قرارًا تقنيًا كبيرًا في مشروعك واكتب بدائله ومقايضاته وأثره على المدى القريب والبعيد.',
      'أعد تصميم تدفق عمل صغير في فريقك أو مشروعك بحيث يصبح أوضح وأقل احتكاكًا.',
    ],
    note2026:
      'كلما تقدمت، صارت قيمة قراراتك وتنسيقك واتجاهك العام مساوية لقيمة الشيفرة التي تكتبها أو أكبر.',
    resources: [
      { label: 'OpenTelemetry Docs', url: docs.opentelemetry },
      { label: 'GitHub Actions Docs', url: docs.ghActions },
    ],
    tags: ['Technical Leadership', 'Systems Thinking', 'Trade-offs'],
  },
  'lifelong-learning-research': {
    title: 'التعلم المستمر، البحث، ومواكبة التغير',
    level: 'متقدم',
    category: 'النمو المهني',
    summary:
      'البرمجة مجال طويل الأمد. من ينجح فيه ليس فقط من يتعلم بسرعة في البداية، بل من يبني نظامًا مستمرًا للقراءة والتجريب والتقييم والتخلص من الضجيج مع مرور الوقت.',
    learn: [
      'ابنِ طريقة شخصية لمتابعة التغيرات دون الوقوع في فوضى المتابعة المستمرة.',
      'تعلم متى تقرأ بعمق ومتى تجرّب ومتى تنتظر حتى ينضج الشيء الجديد.',
      'اربط بين التعلم المستمر وبين تطوير مشاريع حقيقية لا استهلاك الأخبار فقط.',
      'افهم أن النضج المهني يشمل القدرة على ترك ما لا يفيد والتركيز على ما يضيف.',
    ],
    build: [
      'صمم روتينًا شهريًا للتعلم يشمل قراءة وتجربة وتوثيق شيء واحد عميق بدل ملاحقة كل جديد.',
      'اختر تقنية أو فكرة جديدة ثم قيّمها وفق حاجة حقيقية لديك بدل الضجة حولها.',
    ],
    note2026:
      'أهم مهارة طويلة الأمد اليوم هي القدرة على الفرز: ماذا تتعلم الآن، ماذا تؤجل، وماذا تتجاهل تمامًا.',
    resources: [
      { label: 'MIT OpenCourseWare', url: docs.mitOcw },
      { label: 'GitHub Skills', url: docs.githubSkills },
    ],
    tags: ['Lifelong Learning', 'Research', 'Focus', 'Career'],
  },
  'systems-native': {
    title: 'C و C++ و Linux وبرمجة الأنظمة',
    level: 'عملي',
    category: 'اللغات والأنظمة',
    summary:
      'هذا المسار لمن يريد التعمق تحت طبقات الأطر الجاهزة: لغات قريبة من النظام، بناء الأدوات، إدارة الذاكرة، الربط مع Linux، وفهم ما يجري قرب العتاد ونظام التشغيل.',
    learn: [
      'افهم متى تكون C وC++ خيارًا صحيحًا: الأداء، الأدوات، الأنظمة، الألعاب، والبرمجيات القريبة من النظام.',
      'اربط بين اللغة والـtoolchain والـruntime الفعلي والتصحيح وبيئة Linux.',
      'توقع أن هذا المسار يحتاج صبرًا وتجريبًا أكثر من مسارات الأطر الجاهزة، لكنه يعطي عمقًا هندسيًا عاليًا.',
    ],
    build: [
      'حدد مشروعًا صغيرًا واحدًا في الأنظمة، مثل أداة CLI أو برنامج ملفات أو خادم بسيط، واتخذه نقطة بداية لهذا المسار.',
    ],
    note2026:
      'ما زالت C وC++ في 2026 من أكثر المسارات قيمة عندما تحتاج أداءً ووضوحًا في حدود النظام أو أدوات قوية تبنى فوقها بقية الطبقات.',
    resources: [
      { label: 'cppreference C', url: docs.cppreferenceC },
      { label: 'cppreference C++', url: docs.cppreferenceCpp },
      { label: 'Linux Kernel Docs', url: docs.linuxKernel },
    ],
    tags: ['C', 'C++', 'Linux', 'Systems'],
    searchKeywords: ['systems programming roadmap', 'C Linux projects', 'C++ low level engineering'],
  },
  'c-language-core': {
    title: 'C بعمق: اللغة، الذاكرة، وحدودك مع النظام',
    level: 'عملي',
    category: 'اللغات والأنظمة',
    summary:
      'ابدأ هنا إذا أردت C بشكل جدي: المتغيرات، المؤشرات، المصفوفات، الـstructs، الملفات الرأسية، وطرق التفكير التي تميز C عن اللغات الأعلى تجريدًا.',
    learn: [
      'أتقن أنواع البيانات، المؤشرات، والتمرير بالعناوين بدل حفظ أمثلة متفرقة فقط.',
      'افهم العلاقة بين الكود والذاكرة والـstack والـheap.',
      'تعلّم كتابة برامج صغيرة وواضحة بدل القفز مباشرة إلى مشاريع ضخمة منخفضة المستوى.',
    ],
    build: [
      'ابنِ أداة CLI صغيرة في C تقرأ ملفات أو تعالج نصًا أو تنفذ أوامر بسيطة.',
    ],
    note2026:
      'أفضل طريقة لتعلم C اليوم هي مشاريع صغيرة متكررة مع تصحيح وفحص للذاكرة، لا مجرد قراءة قواعد اللغة.',
    resources: [
      { label: 'cppreference C', url: docs.cppreferenceC },
      { label: 'GCC Docs', url: docs.gcc },
      { label: 'GDB Docs', url: docs.gdb },
    ],
    tags: ['C', 'Pointers', 'Memory', 'CLI'],
    searchKeywords: ['C pointers explained', 'C memory model basics', 'C small project ideas'],
  },
  'c-pointers-memory': {
    title: 'المؤشرات، إدارة الذاكرة، والأخطاء الشائعة في C',
    level: 'متقدم',
    category: 'اللغات والأنظمة',
    summary:
      'هذا من أهم أبواب C: كيف تُحجز الذاكرة، كيف تُمرر العناوين، ما معنى المؤشر فعليًا، ولماذا تظهر أخطاء مثل التسرب أو الوصول الخاطئ أو الاستخدام بعد التحرير.',
    learn: [
      'افهم malloc وfree والفرق بين الذاكرة المكدسية والديناميكية.',
      'تعلّم قراءة مشاكل segmentation fault كأعراض لفهم ناقص للذاكرة لا كأخطاء غامضة.',
      'اربط بين المؤشرات والتراكيب والصفائف والسلاسل النصية في C.',
    ],
    build: [
      'ابنِ بنية بيانات صغيرة بنفسك في C مثل قائمة مترابطة أو مخزن نصوص بسيط مع إدارة ذاكرة واضحة.',
    ],
    note2026:
      'التعمق في الذاكرة داخل C يرفع فهمك لاحقًا في C++ والأداء وأنظمة التشغيل بشكل مباشر.',
    resources: [
      { label: 'cppreference C', url: docs.cppreferenceC },
      { label: 'GDB Docs', url: docs.gdb },
      { label: 'OSTEP', url: docs.ostep },
    ],
    tags: ['C', 'Memory', 'Malloc', 'Pointers'],
    searchKeywords: ['segmentation fault debugging C', 'malloc free tutorial C', 'pointer arithmetic C'],
  },
  'c-toolchain-debugging': {
    title: 'الـ toolchain في C: build و debug وملفات التنفيذ',
    level: 'عملي',
    category: 'اللغات والأنظمة',
    summary:
      'تعلم C الحقيقي لا يكتمل دون فهم أداة البناء والمترجم والتصحيح. هنا تدخل GCC أو Clang، ملفات الرؤوس، الربط، والتحليل أثناء التنفيذ.',
    learn: [
      'افهم المراحل الأساسية: preprocessing ثم compilation ثم linking.',
      'تعلّم استخدام GCC وGDB وقراءة رسائل الخطأ بشكل هادئ ومنهجي.',
      'افهم الفرق بين ملفات المصدر وملفات الرؤوس والملفات التنفيذية والمكتبات.',
    ],
    build: [
      'نظّم مشروع C صغيرًا إلى عدة ملفات، ثم ابنِه يدويًا ولاحقًا بأداة build بسيطة.',
    ],
    note2026:
      'إتقان الـtoolchain يختصر عليك ألمًا كبيرًا في المشاريع الأنظمية والأدوات والمكتبات منخفضة المستوى.',
    resources: [
      { label: 'GCC Docs', url: docs.gcc },
      { label: 'GDB Docs', url: docs.gdb },
      { label: 'man7 Linux man pages', url: docs.man7 },
    ],
    tags: ['C', 'Toolchain', 'GCC', 'GDB', 'Linking'],
    searchKeywords: ['linker vs compiler C', 'GDB beginner C', 'C multi file project setup'],
  },
  'c-linux-systems': {
    title: 'C مع Linux: ملفات، عمليات، و system calls',
    level: '2026',
    category: 'اللغات والأنظمة',
    summary:
      'إذا أردت C + Linux بعمق، فهذا الباب مهم جدًا. هنا تبدأ بالملفات والعمليات والوصفات file descriptors والاستدعاءات النظامية الأساسية وبناء أدوات قريبة من بيئة Unix.',
    learn: [
      'افهم open وread وwrite وclose وفكرة file descriptors.',
      'تعلّم أساسيات fork وexec وpipe والإشارات بشكل مبسط ثم عملي.',
      'اربط بين برامج المستخدم userland وبين ما يقدمه Linux فعلًا من واجهات منخفضة المستوى.',
    ],
    build: [
      'ابنِ نسخة مبسطة من أداة Unix صغيرة مثل cat أو grep البسيط أو mini shell محدود جدًا.',
    ],
    note2026:
      'هذا الباب هو أقرب نقطة تجمع بين C ونظام التشغيل وLinux بشكل عملي جدًا.',
    resources: [
      { label: 'Linux Kernel Docs', url: docs.linuxKernel },
      { label: 'man7 Linux man pages', url: docs.man7 },
      { label: 'OSTEP', url: docs.ostep },
    ],
    tags: ['C', 'Linux', 'System Calls', 'Processes'],
    searchKeywords: ['fork exec pipe tutorial', 'Linux system calls C', 'build a mini shell C'],
  },
  'cpp-modern-core': {
    title: 'C++ الحديث: الأساس الصحيح بدل C with classes',
    level: 'عملي',
    category: 'اللغات والأنظمة',
    summary:
      'تعلم C++ الحديث يبدأ من فهم قيمه وأدواته الصحيحة: الأنواع، الكائنات، المراجع، النقل move semantics، والتعبير الواضح، لا من خلط قديم بين أنماط C وC++ بلا وعي.',
    learn: [
      'افهم الفروقات الجوهرية بين C وC++ بدل التعامل مع C++ كلغة أكبر فقط.',
      'تعلّم المراجع، الكائنات، الـconst correctness، وأساسيات الإدارة الآمنة للموارد.',
      'ابنِ فهمًا واضحًا لأجزاء اللغة الحديثة التي تستخدم يوميًا فعلًا.',
    ],
    build: [
      'حوّل مشروع CLI صغيرًا من C أو pseudo code إلى C++ حديث منظم وواضح.',
    ],
    note2026:
      'تعلم C++ الحديث بشكل نظيف من البداية أسهل بكثير من إصلاح عادات قديمة لاحقًا.',
    resources: [
      { label: 'cppreference C++', url: docs.cppreferenceCpp },
      { label: 'GCC Docs', url: docs.gcc },
      { label: 'CMake Docs', url: docs.cmake },
    ],
    tags: ['C++', 'Modern C++', 'Types', 'RAII'],
    searchKeywords: ['modern C++ roadmap', 'C++ core guidelines beginner', 'C++ move semantics basics'],
  },
  'cpp-raii-memory': {
    title: 'RAII والموارد والذاكرة في C++',
    level: 'متقدم',
    category: 'اللغات والأنظمة',
    summary:
      'هنا تنتقل من “إدارة ذاكرة يدويًا” إلى “إدارة موارد صحيحة” في C++. RAII من أهم مفاهيم اللغة لأنه يربط عمر الكائن بعمر المورد ويقلل الأخطاء بشكل جذري.',
    learn: [
      'افهم RAII وsmart pointers ولماذا هي مركزية في C++ الحديث.',
      'اربط بين البناء destructor والاستثناءات وإدارة الملفات والذاكرة والمقابس.',
      'تعلّم متى تستخدم unique_ptr ومتى shared_ptr ومتى تتجنب كليهما.',
    ],
    build: [
      'أعد بناء جزء صغير يتعامل مع ملف أو ذاكرة أو اتصال بطريقة RAII واضحة.',
    ],
    note2026:
      'فهم RAII جيدًا يختصر جزءًا كبيرًا من سبب حب الناس لـ C++ الحديث أو معاناتهم منه.',
    resources: [
      { label: 'cppreference C++', url: docs.cppreferenceCpp },
      { label: 'CMake Docs', url: docs.cmake },
      { label: 'GDB Docs', url: docs.gdb },
    ],
    tags: ['C++', 'RAII', 'Smart Pointers', 'Resources'],
    searchKeywords: ['RAII explained C++', 'unique_ptr vs shared_ptr', 'resource management C++'],
  },
  'cpp-stl-templates': {
    title: 'STL و templates في C++ بدون خوف',
    level: 'متقدم',
    category: 'اللغات والأنظمة',
    summary:
      'جزء كبير من قوة C++ يأتي من STL والـtemplates. المهم هنا ألا تحفظ أسماء فقط، بل تفهم كيف تستخدم الحاويات والخوارزميات والأنماط الجاهزة بوعي وتدرج.',
    learn: [
      'تعرف على vector وstring وmap وunordered_map وalgorithms الشائعة.',
      'افهم templates كآلية تعميم قوية وليست سحرًا غامضًا فقط.',
      'تعلّم قراءة رسائل أخطاء C++ الطويلة تدريجيًا بدل النفور منها.',
    ],
    build: [
      'ابنِ أداة صغيرة تعتمد على STL بشكل واضح ثم حسّنها بتعميم جزء صغير عبر template بسيط.',
    ],
    note2026:
      'أفضل طريقة لفهم STL والـtemplates هي استخدامها في أدوات صغيرة جدًا ومتكررة بدل البدء بميتا-برمجة معقدة.',
    resources: [
      { label: 'cppreference C++', url: docs.cppreferenceCpp },
      { label: 'GCC Docs', url: docs.gcc },
    ],
    tags: ['C++', 'STL', 'Templates', 'Containers'],
    searchKeywords: ['STL containers overview', 'C++ templates basics', 'reading template errors C++'],
  },
  'cpp-performance-concurrency': {
    title: 'الأداء والتوازي في C++',
    level: '2026',
    category: 'اللغات والأنظمة',
    summary:
      'هذا المسار يربط C++ بالأداء الحقيقي: التخصيصات، الوصول إلى الذاكرة، القياس profiling، والخيوط والتزامن. هنا تظهر قيمة اللغة في البرمجيات الحساسة للأداء.',
    learn: [
      'افهم أن الأداء في C++ لا يعني “كتابة كود صعب”، بل فهم حركة البيانات والتخصيصات والاختناقات.',
      'تعرّف على أساسيات threads وmutex وatomic بشكل عملي ومسؤول.',
      'تعلّم أن تقيس أولًا، ثم تحسن بناءً على دليل لا إحساس.',
    ],
    build: [
      'خذ برنامجًا صغيرًا وقس أداءه، ثم نفذ تحسينًا واحدًا واضح السبب والأثر.',
    ],
    note2026:
      'أفضل مهندس C++ ليس من يطارد micro-optimizations دائمًا، بل من يفهم أين تضيع الموارد فعلًا.',
    resources: [
      { label: 'cppreference C++', url: docs.cppreferenceCpp },
      { label: 'GDB Docs', url: docs.gdb },
      { label: 'Linux Kernel Docs', url: docs.linuxKernel },
    ],
    tags: ['C++', 'Performance', 'Concurrency', 'Profiling'],
    searchKeywords: ['C++ profiling basics', 'C++ concurrency roadmap', 'data oriented performance C++'],
  },
  'cpp-linux-build': {
    title: 'C++ مع Linux: build systems ومكتبات وأدوات',
    level: 'متقدم',
    category: 'اللغات والأنظمة',
    summary:
      'هذا الباب عملي جدًا لمن يريد C++ + Linux. ستحتاج هنا إلى CMake، الربط مع مكتبات، فهم الـABI بشكل عام، والتعامل مع بيئات بناء أقرب إلى المشاريع الحقيقية.',
    learn: [
      'تعلم أساسيات CMake وتنظيم مشروع C++ متوسط بدل ملفات مفردة.',
      'افهم معنى linking وstatic/dynamic libraries بشكل عملي.',
      'اربط بين Linux وبيئة البناء والتصحيح والتشغيل والاعتماديات.',
    ],
    build: [
      'نظّم مشروع C++ صغيرًا باستخدام CMake مع أكثر من ملف ومكتبة خارجية بسيطة.',
    ],
    note2026:
      'هذا الباب يجهزك فعليًا للتعامل مع مشاريع C++ الحقيقية أكثر من تعلم اللغة وحدها.',
    resources: [
      { label: 'CMake Docs', url: docs.cmake },
      { label: 'GCC Docs', url: docs.gcc },
      { label: 'man7 Linux man pages', url: docs.man7 },
    ],
    tags: ['C++', 'Linux', 'CMake', 'Build Systems'],
    searchKeywords: ['CMake beginner project', 'Linux shared library C++', 'C++ project structure Linux'],
  },
  'python-engineering': {
    title: 'Python بعمق والهندسة العملية',
    level: 'عملي',
    category: 'اللغات والأنظمة',
    summary:
      'هذا المسار ليس لتعلم Python كسكربت فقط، بل كأداة هندسية: تنظيم المشاريع، البيئات، الـstdlib، الأنواع، الأداء، الـasync، والخدمات أو الأتمتة العملية.',
    learn: [
      'انقل Python من مجرد لغة سهلة إلى أداة هندسية منظمة وموثوقة.',
      'افهم متى تناسب Python الأتمتة والخدمات والبيانات وأين يجب الانتباه للأداء والتوزيع.',
      'تعلّم بناء مشاريع Python قابلة للصيانة بدل ملفات متفرقة متراكمة.',
    ],
    build: [
      'ابنِ مشروع Python صغيرًا منظمًا ببيئة واضحة واختبارات أساسية وأوامر تشغيل مقروءة.',
    ],
    note2026:
      'في 2026 ما زالت Python من أقوى اللغات عندما تستخدم بانضباط هندسي لا فقط كسكربتات سريعة.',
    resources: [
      { label: 'Python Tutorial', url: docs.python },
      { label: 'Node.js Learn', url: docs.node },
    ],
    tags: ['Python', 'Engineering', 'Automation', 'Services'],
    searchKeywords: ['python engineering roadmap', 'python project structure', 'python async service basics'],
  },
  'python-language-core-deep': {
    title: 'Python بعمق: اللغة والأنماط الأساسية',
    level: 'عملي',
    category: 'اللغات والأنظمة',
    summary:
      'تعلم Python بجدية يعني أن تفهم الأنواع والكائنات والنطاقات والاستثناءات والـiterators والـcomprehensions والأنماط الشائعة التي تجعل الكود واضحًا ومقروءًا.',
    learn: [
      'أتقن الأساس الذي يجعل كود Python مختصرًا لكن واضحًا لا مختصرًا ومربكًا.',
      'افهم كيف تبنى الأنواع والكائنات والوظائف والسلوكيات المتكررة في اللغة.',
      'تجنب التحول إلى “كتابة كل شيء بسرعة” دون تنظيم أو naming جيد.',
    ],
    build: [
      'أعد كتابة مشروع Python صغير بأسلوب أوضح مع دوال أصغر وأسماء أفضل وتدفق أسهل للقراءة.',
    ],
    resources: [
      { label: 'Python Tutorial', url: docs.python },
    ],
    tags: ['Python', 'Core', 'Readability', 'Idioms'],
    searchKeywords: ['python iterators comprehensions', 'python exception handling style', 'python clean code basics'],
  },
  'python-packaging-venvs': {
    title: 'البيئات، الحزم، وتوزيع مشاريع Python',
    level: 'عملي',
    category: 'اللغات والأنظمة',
    summary:
      'أحد أكبر الفروق بين الهواية والهندسة في Python هو فهم البيئات الافتراضية والاعتماديات وبنية المشروع والتوزيع، بحيث لا يصبح المشروع هشًا أو معلقًا على جهاز واحد.',
    learn: [
      'افهم virtual environments والاعتماديات والإصدارات وكيفية تثبيت المشروع بشكل منظم.',
      'نظّم مشروع Python إلى package واضح بدل ملف أو ملفين عشوائيين.',
      'تعلّم أساسيات التشغيل والأوامر والاعتماديات بما يسهل المشاركة أو النشر لاحقًا.',
    ],
    build: [
      'حوّل سكربت Python واحدًا إلى مشروع منظم ببيئة واعتماديات ووثيقة تشغيل مختصرة.',
    ],
    resources: [
      { label: 'Python Tutorial', url: docs.python },
    ],
    tags: ['Python', 'Packaging', 'venv', 'Project Structure'],
    searchKeywords: ['python packaging beginner', 'venv vs poetry basics', 'python project layout'],
  },
  'python-stdlib-automation': {
    title: 'Python للأتمتة والـ stdlib بشكل يفيد فعلاً',
    level: 'عملي',
    category: 'اللغات والأنظمة',
    summary:
      'قوة Python الحقيقية كثيرًا ما تظهر في مكتبتها القياسية وفي الأتمتة العملية: ملفات، JSON، CSV، subprocess، pathlib، argparse، الشبكات البسيطة، وتحويل العمل اليدوي إلى أدوات نافعة.',
    learn: [
      'تعلم استخدام المكتبة القياسية بدل إضافة مكتبات لكل شيء صغير.',
      'ابنِ حسًا في أتمتة المهام المتكررة داخل جهازك أو مشروعك.',
      'استخدم Python كأداة إنتاج شخصية لا كلغة تعليم فقط.',
    ],
    build: [
      'ابنِ أداتين صغيرتين للأتمتة: واحدة للملفات أو النصوص، وأخرى للتقارير أو المعالجة أو التشغيل الآلي.',
    ],
    resources: [
      { label: 'Python Tutorial', url: docs.python },
    ],
    tags: ['Python', 'Automation', 'Stdlib', 'CLI'],
    searchKeywords: ['python automation projects', 'argparse pathlib json tutorial', 'python subprocess examples'],
  },
  'python-typing-testing': {
    title: 'الأنواع والاختبارات وجودة الكود في Python',
    level: 'متقدم',
    category: 'اللغات والأنظمة',
    summary:
      'عندما يكبر مشروع Python، تظهر أهمية typing والاختبارات والانضباط الأسلوبي. هذا الباب يجعلك تستخدم Python بطريقة هندسية قابلة للصيانة وليست فقط سريعة في البداية.',
    learn: [
      'استخدم type hints لتحسين الفهم والقراءة والتكامل مع الأدوات.',
      'اربط بين الاختبارات وبين الثقة في التغيير لا مجرد زيادة عدد الملفات.',
      'تعلّم متى يكفي البساطة ومتى تحتاج تنظيمًا أشد في الجودة.',
    ],
    build: [
      'أضف أنواعًا واختبارات أساسية إلى مشروع Python قائم ثم لاحظ كيف تحسن القراءة والأمان عند التعديل.',
    ],
    resources: [
      { label: 'Python Tutorial', url: docs.python },
      { label: 'Vitest Guide', url: docs.vitest },
    ],
    tags: ['Python', 'Typing', 'Testing', 'Quality'],
    searchKeywords: ['python type hints roadmap', 'pytest basics project', 'python maintainable code'],
  },
  'python-async-services': {
    title: 'Python للخدمات و async I/O',
    level: '2026',
    category: 'اللغات والأنظمة',
    summary:
      'هذا الباب مناسب إذا أردت Python في الخدمات الخلفية أو المهام الشبكية أو المعالجة المتوازية على مستوى I/O. هنا تفهم async/await، حدودها، ومتى تكون مفيدة فعلًا.',
    learn: [
      'افهم الفرق بين concurrency في I/O وبين الأداء الحسابي البحت.',
      'تعلّم async/await بوعي بدل إضافتها لكل مكان.',
      'اربط Python بالخدمات وAPIs والمعالجات الخلفية والـjobs بشكل عملي.',
    ],
    build: [
      'ابنِ خدمة Python بسيطة أو أداة تسحب بيانات من عدة مصادر ثم تعالجها بشكل منظم.',
    ],
    resources: [
      { label: 'Python Tutorial', url: docs.python },
      { label: 'FastAPI Docs', url: docs.fastapi },
    ],
    tags: ['Python', 'Async', 'Services', 'I/O'],
    searchKeywords: ['python async await explained', 'fastapi async basics', 'python background jobs'],
  },
  'systems-programming-specialist': {
    title: 'مسار Systems Programming Specialist',
    level: 'متقدم',
    category: 'المسارات',
    summary:
      'يناسبك إذا كنت تستمتع بالعمق القريب من النظام: الأدوات، الأداء، الملفات، الذاكرة، العمليات، وبيئات Linux وما يدور تحت سطح التطبيقات الشائعة.',
    learn: [
      'اجمع بين C أو C++ وLinux والتصحيح والأداء بدل دراسة كل جزء منفصلًا فقط.',
      'ابنِ مشاريع صغيرة أنظمية تنتهي فعلًا: أدوات، CLI، mini shell، parsers، أو خدمات منخفضة المستوى.',
      'تدرج من البسيط إلى القريب من النظام بدل محاولة بناء kernel أو compiler من اليوم الأول.',
    ],
    build: [
      'أنهِ مشروعين صغيرين في Linux باستخدام C أو C++ يثبتان فهمك للملفات أو العمليات أو أدوات النظام.',
    ],
    resources: [
      { label: 'Linux Kernel Docs', url: docs.linuxKernel },
      { label: 'cppreference C', url: docs.cppreferenceC },
      { label: 'cppreference C++', url: docs.cppreferenceCpp },
    ],
    tags: ['Systems', 'Linux', 'C', 'C++'],
    searchKeywords: ['systems programming portfolio ideas', 'linux systems engineer roadmap'],
  },
  'python-engineering-specialist': {
    title: 'مسار Python Engineering Specialist',
    level: 'عملي',
    category: 'المسارات',
    summary:
      'يناسبك إذا كنت تحب الإنتاجية العالية مع انضباط هندسي جيد: أتمتة، خدمات، أدوات داخلية، بيانات، وتطبيقات عملية تُبنى بسرعة لكن تبقى قابلة للصيانة.',
    learn: [
      'وحّد بين Python والأتمتة والخدمات والاختبارات والتنظيم بدل اعتبارها لغة سكربتات فقط.',
      'ابنِ مشاريع نافعة ومتكررة الاستعمال لتستفيد من قوة Python الفعلية.',
      'حافظ على الوضوح والبنية لأن سرعة Python قد تغري بالفوضى.',
    ],
    build: [
      'ابنِ مشروع Python متكامل فيه package واضح وCLI أو API واختبارات أساسية.',
    ],
    resources: [
      { label: 'Python Tutorial', url: docs.python },
      { label: 'FastAPI Docs', url: docs.fastapi },
    ],
    tags: ['Python', 'Engineering', 'Automation', 'Services'],
    searchKeywords: ['python engineer roadmap', 'python service project ideas'],
  },
  'embedded-linux-specialist': {
    title: 'مسار Embedded / Linux Specialist',
    level: '2026',
    category: 'المسارات',
    summary:
      'يناسبك إذا كنت تميل إلى الأجهزة والأنظمة القريبة من العتاد وLinux والبرمجيات التي تعيش في بيئات مقيدة أو متخصصة. هذا المسار يحتاج صبرًا وعمقًا لكنه قوي جدًا.',
    learn: [
      'اربط بين C أو C++ وبين Linux وبيئات تشغيل أقرب إلى الأجهزة أو الأنظمة المخصصة.',
      'تعرّف على حدود الذاكرة والأداء والأدوات والـcross-compilation تدريجيًا.',
      'ابنِ حسًا هندسيًا عمليًا حول ما يعنيه تشغيل البرمجيات خارج بيئة التطوير المريحة.',
    ],
    build: [
      'ابدأ بأداة صغيرة على Linux ثم وسّعها لاحقًا إلى مشروع أقرب إلى embedded tooling أو runtime محدود.',
    ],
    resources: [
      { label: 'Linux Kernel Docs', url: docs.linuxKernel },
      { label: 'GCC Docs', url: docs.gcc },
      { label: 'man7 Linux man pages', url: docs.man7 },
    ],
    tags: ['Embedded', 'Linux', 'C', 'Tooling'],
    searchKeywords: ['embedded linux beginner roadmap', 'cross compilation basics linux'],
  },
  'cpp-performance-specialist': {
    title: 'مسار C++ Performance Specialist',
    level: '2026',
    category: 'المسارات',
    summary:
      'يناسبك إذا كنت تحب الأداء العالي والأنظمة الحساسة للزمن والذاكرة والألعاب والأدوات القوية. هذا المسار يركز على C++ عندما تكون السرعة والموارد والموثوقية عوامل رئيسية.',
    learn: [
      'تعمق في C++ الحديث مع RAII والـSTL والأداء والقياس والتوازي.',
      'تعلّم أن تقرأ الاختناقات وتفهم حركة البيانات قبل التفكير في التحسينات الصغيرة.',
      'ابنِ مشاريع تثبت أنك لا تكتب C++ فقط، بل تفهم لماذا يستخدم ومتى.',
    ],
    build: [
      'أنهِ مشروع C++ متوسطًا مع build system وقياس أداء وتوثيق قراراتك الفنية.',
    ],
    resources: [
      { label: 'cppreference C++', url: docs.cppreferenceCpp },
      { label: 'CMake Docs', url: docs.cmake },
      { label: 'GDB Docs', url: docs.gdb },
    ],
    tags: ['C++', 'Performance', 'Systems', 'Tooling'],
    searchKeywords: ['C++ performance roadmap', 'C++ systems portfolio ideas'],
  },
} satisfies Record<string, TopicInput>;

export const topicCatalog = Object.fromEntries(
  Object.entries(topicInputs).map(([id, topic]) => [id, { id, ...topic }]),
) as Record<string, TopicDetail>;

export const roadmapSections: SectionLayout[] = [
  {
    id: 'origins-history',
    tone: 'sand',
    right: ['why-programming', 'history-of-programming', 'why-computers-matter'],
    left: ['history-of-computers', 'computer-components', 'hardware-software-os'],
  },
  {
    id: 'entry',
    tone: 'sand',
    right: ['digital-literacy', 'internet-web-basics', 'problem-solving', 'how-software-is-made'],
    left: ['choosing-first-language', 'learning-strategy-projects'],
  },
  {
    id: 'deep-foundations',
    tone: 'reef',
    right: ['binary-data', 'abstraction-layers', 'memory-references', 'logic-boolean-models', 'cpu-memory-storage'],
    left: ['runtime-execution', 'filesystem-processes', 'state-data-flow', 'compilers-interpreters'],
  },
  {
    id: 'core-programming',
    tone: 'rose',
    right: ['variables-control-flow', 'functions-modules', 'data-structures-core', 'algorithms-thinking'],
    left: ['debugging-error-handling', 'testing-basics', 'recursion-iteration-patterns', 'programming-paradigms'],
  },
  {
    id: 'developer-workflow',
    tone: 'sky',
    right: ['editor-terminal', 'git-github', 'project-structure-environments'],
    left: ['package-managers', 'docs-code-review', 'reading-docs-debugging-tools'],
  },
  {
    id: 'frontend-web',
    tone: 'lime',
    right: ['html-css-layout', 'javascript-typescript', 'frontend-framework', 'browser-rendering-dom', 'css-systems-responsive'],
    left: ['routing-state-fetching', 'accessibility-performance', 'forms-validation-ux'],
  },
  {
    id: 'backend-data',
    tone: 'indigo',
    right: ['http-apis', 'auth-sessions', 'sql-modeling', 'api-design-contracts', 'transactions-consistency'],
    left: ['caching-queues-search', 'backend-frameworks-deployment', 'background-jobs-integrations'],
  },
  {
    id: 'architecture-systems',
    tone: 'amber',
    right: ['monolith-modular', 'services-events', 'domain-boundaries'],
    left: ['scalability-resilience', 'observability', 'performance-capacity'],
  },
  {
    id: 'quality-security',
    tone: 'mint',
    right: ['testing-strategy', 'owasp-appsec', 'identity-access-control'],
    left: ['supply-chain-secrets', 'threat-modeling-privacy', 'secure-coding-review'],
  },
  {
    id: 'cloud-platform',
    tone: 'plum',
    right: ['linux-networking', 'docker-compose', 'cloud-fundamentals', 'network-edge-delivery'],
    left: ['kubernetes-platform', 'ci-cd-iac', 'ops-runbooks-costs'],
  },
  {
    id: 'computer-science',
    tone: 'coral',
    right: ['operating-systems', 'algorithms-complexity', 'computer-architecture', 'networking-protocols'],
    left: ['concurrency-runtime', 'distributed-systems', 'database-internals'],
  },
  {
    id: 'systems-native',
    tone: 'slate',
    right: ['c-language-core', 'c-pointers-memory', 'c-toolchain-debugging', 'c-linux-systems'],
    left: ['cpp-modern-core', 'cpp-raii-memory', 'cpp-stl-templates', 'cpp-performance-concurrency', 'cpp-linux-build'],
  },
  {
    id: 'python-engineering',
    tone: 'sky',
    right: ['python-language-core-deep', 'python-packaging-venvs', 'python-stdlib-automation'],
    left: ['python-typing-testing', 'python-async-services'],
  },
  {
    id: 'game-development',
    tone: 'slate',
    right: [
      'game-dev-basics',
      'unity-unreal-godot',
      'gameplay-programming',
      'game-tools-assets',
      'animation-audio-pipelines',
    ],
    left: [
      'game-math-physics',
      'engine-architecture',
      'graphics-low-level',
      'build-your-own-engine',
      'game-profiling-optimization',
      'multiplayer-netcode',
    ],
  },
  {
    id: 'ai-engineering',
    tone: 'coral',
    right: [
      'ai-assisted-development',
      'llm-foundations-evals',
      'embeddings-rag',
      'prompting-context-tool-use',
      'model-serving-latency-cost',
    ],
    left: ['agents-mcp', 'ai-security-governance', 'evaluation-guardrails'],
  },
  {
    id: 'specialization',
    tone: 'slate',
    right: [
      'frontend-specialist',
      'backend-specialist',
      'mobile-specialist',
      'game-specialist',
      'product-engineering-specialist',
      'systems-programming-specialist',
      'python-engineering-specialist',
    ],
    left: [
      'data-ai-specialist',
      'platform-specialist',
      'research-open-source-specialist',
      'embedded-linux-specialist',
      'cpp-performance-specialist',
    ],
  },
  {
    id: 'mastery-growth',
    tone: 'slate',
    right: ['portfolio-proof-of-work', 'writing-teaching-communication'],
    left: ['leadership-systems-thinking', 'lifelong-learning-research'],
  },
];

export const tonePalette: Record<
  Tone,
  { solid: string; soft: string; line: string }
> = {
  sand: { solid: '#c2410c', soft: 'rgba(251, 146, 60, 0.22)', line: '#ea580c' },
  reef: { solid: '#0f766e', soft: 'rgba(45, 212, 191, 0.18)', line: '#0f766e' },
  rose: { solid: '#be123c', soft: 'rgba(244, 114, 182, 0.18)', line: '#e11d48' },
  sky: { solid: '#0369a1', soft: 'rgba(56, 189, 248, 0.18)', line: '#0284c7' },
  lime: { solid: '#4d7c0f', soft: 'rgba(163, 230, 53, 0.16)', line: '#65a30d' },
  indigo: { solid: '#4338ca', soft: 'rgba(129, 140, 248, 0.18)', line: '#4f46e5' },
  amber: { solid: '#b45309', soft: 'rgba(251, 191, 36, 0.2)', line: '#d97706' },
  mint: { solid: '#15803d', soft: 'rgba(74, 222, 128, 0.18)', line: '#16a34a' },
  plum: { solid: '#7c3aed', soft: 'rgba(196, 181, 253, 0.18)', line: '#8b5cf6' },
  coral: { solid: '#c2410c', soft: 'rgba(251, 113, 133, 0.18)', line: '#ea580c' },
  slate: { solid: '#334155', soft: 'rgba(148, 163, 184, 0.2)', line: '#475569' },
};

export const roadmapMeta = {
  title: 'خريطة تعلّم البرمجة 2026',
  subtitle:
    'واجهة تفاعلية بالعربية تغطي الرحلة من لماذا وُجدت البرمجة والكمبيوتر أصلًا، حتى التخصص والمرجعية المهنية الحديثة.',
  updatedAt: '2026-04-05',
  totalTracks: roadmapSections.length,
  totalTopics: Object.keys(topicCatalog).length,
};

function getJourney(level: TopicLevel): Journey {
  switch (level) {
    case 'ابدأ':
    case 'أساسي':
      return 'enter';
    case 'عملي':
      return 'optional';
    case 'متقدم':
    case '2026':
      return 'mastery';
  }
}

function buildAdjacency(edges: Edge[]) {
  const neighbors = new Map<string, Set<string>>();

  for (const edge of edges) {
    const sourceSet = neighbors.get(edge.source) ?? new Set<string>();
    const targetSet = neighbors.get(edge.target) ?? new Set<string>();

    sourceSet.add(edge.target);
    targetSet.add(edge.source);

    neighbors.set(edge.source, sourceSet);
    neighbors.set(edge.target, targetSet);
  }

  return neighbors;
}

export function buildRoadmapGraph() {
  const nodes: Node<RoadmapNodeData>[] = [];
  const edges: Edge[] = [];

  let cursorY = 64;
  let previousSectionId: string | null = null;

  for (const section of roadmapSections) {
    const leftCount = section.left.length;
    const rightCount = section.right.length;
    const maxBranches = Math.max(leftCount, rightCount, 1);
    const sectionHeight = Math.max(260, (maxBranches - 1) * 132 + 220);
    const centerY = cursorY + sectionHeight / 2;
    const tone = section.tone;
    const sectionTopic = topicCatalog[section.id];

    nodes.push({
      id: section.id,
      type: 'roadmapNode',
      position: { x: 0, y: centerY },
      data: {
        title: sectionTopic.title,
        category: sectionTopic.category,
        level: sectionTopic.level,
        journey: getJourney(sectionTopic.level),
        tone,
        variant: 'section',
        childCount: section.left.length + section.right.length,
      },
    });

    if (previousSectionId) {
      edges.push({
        id: `${previousSectionId}-${section.id}-spine`,
        source: previousSectionId,
        target: section.id,
        sourceHandle: 'source-bottom',
        targetHandle: 'target-top',
        type: 'smoothstep',
        markerEnd: {
          type: MarkerType.ArrowClosed,
          color: '#64748b',
        },
        style: {
          stroke: '#94a3b8',
          strokeWidth: 2.1,
          opacity: 0.9,
        },
      });
    }

    for (const [side, topicIds] of [
      ['right', section.right] as const,
      ['left', section.left] as const,
    ]) {
      const branchOffset = side === 'right' ? 392 : -392;
      const sourceHandle = side === 'right' ? 'source-right' : 'source-left';
      const targetHandle = side === 'right' ? 'target-left' : 'target-right';

      for (const [index, topicId] of topicIds.entries()) {
        const topic = topicCatalog[topicId];
        const y = centerY + (index - (topicIds.length - 1) / 2) * 132;

        nodes.push({
          id: topicId,
          type: 'roadmapNode',
          position: { x: branchOffset, y },
          data: {
            title: topic.title,
            category: topic.category,
            level: topic.level,
            journey: getJourney(topic.level),
            tone,
            variant: 'topic',
            childCount: 0,
          },
        });

        edges.push({
          id: `${section.id}-${topicId}`,
          source: section.id,
          target: topicId,
          sourceHandle,
          targetHandle,
          type: 'smoothstep',
          markerEnd: {
            type: MarkerType.ArrowClosed,
            color: tonePalette[tone].line,
          },
          style: {
            stroke: tonePalette[tone].line,
            strokeWidth: 1.5,
            opacity: 0.62,
          },
        });
      }
    }

    previousSectionId = section.id;
    cursorY += sectionHeight;
  }

  return { nodes, edges };
}

const graph = buildRoadmapGraph();

export const baseNodes = graph.nodes;
export const baseEdges = graph.edges;

const adjacency = buildAdjacency(baseEdges);
const sectionByTopicId = new Map<string, SectionLayout>();
const sectionIndexById = new Map<string, number>();

for (const [index, section] of roadmapSections.entries()) {
  sectionIndexById.set(section.id, index);
  sectionByTopicId.set(section.id, section);

  for (const topicId of [...section.right, ...section.left]) {
    sectionByTopicId.set(topicId, section);
  }
}

export function getRelatedTopicIds(id: string) {
  const related = Array.from(adjacency.get(id) ?? []);

  return related.sort((left, right) =>
    topicCatalog[left].title.localeCompare(topicCatalog[right].title, 'ar'),
  );
}

export function getSuggestedTopicIds(id: string, limit = 2) {
  const section = sectionByTopicId.get(id);

  if (!section) {
    return [];
  }

  const suggestions: string[] = [];
  const sectionTopics = [...section.right, ...section.left];

  if (id === section.id) {
    suggestions.push(...sectionTopics.slice(0, limit));
  } else {
    const branch =
      section.right.includes(id) ? section.right : section.left.includes(id) ? section.left : sectionTopics;
    const branchIndex = branch.indexOf(id);

    if (branchIndex >= 0) {
      const nextInBranch = branch[branchIndex + 1];

      if (nextInBranch) {
        suggestions.push(nextInBranch);
      }
    }

    for (const topicId of sectionTopics) {
      if (topicId !== id && !suggestions.includes(topicId)) {
        suggestions.push(topicId);
      }

      if (suggestions.length >= limit) {
        break;
      }
    }
  }

  const nextSection = roadmapSections[(sectionIndexById.get(section.id) ?? -1) + 1];

  if (nextSection) {
    for (const topicId of [...nextSection.right, ...nextSection.left]) {
      if (topicId !== id && !suggestions.includes(topicId)) {
        suggestions.push(topicId);
      }

      if (suggestions.length >= limit) {
        break;
      }
    }
  }

  return suggestions.filter((topicId) => topicCatalog[topicId] && topicId !== id).slice(0, limit);
}
