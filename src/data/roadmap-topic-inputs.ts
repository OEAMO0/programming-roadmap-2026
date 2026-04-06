import { docs } from './roadmap-docs';
import type { TopicInput } from './roadmap-model';

export const topicInputs = {
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
      'هذا المسار يحولك من كاتب مكونات إلى مهندس واجهة يفهم المنصة نفسها: HTML وCSS وJS وframeworks والأداء والإتاحة، وصولًا إلى التخزين المحلي وتجارب PWA والاختبارات الفعلية وحدود الرسم والتفاعل داخل المتصفح.',
    learn: [
      'ابدأ بالمنصة قبل framework.',
      'اربط بين البيانات والواجهة والانتقال والحالة والتحميل.',
      'ابنِ واجهات قابلة للتطوير وتحترم الأداء والإتاحة.',
      'وسّع فهمك لاحقًا إلى قدرات المتصفح الأعمق مثل التخزين المحلي والعمل دون اتصال واختبارات الواجهة والرسم التفاعلي.',
    ],
    build: ['أنشئ dashboard حقيقي يقرأ بيانات ويعرض حالات loading وerror وempty بوضوح.'],
    note2026:
      'المسار الأمامي اليوم يتقاطع مع SSR وstreaming وserver actions وdesign systems، ومع توقعات أعلى تجاه offline support وUX testing وقدرات المنصة نفسها أكثر من أي وقت مضى.',
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
  'browser-storage-offline': {
    title: 'التخزين في المتصفح، Service Workers، وPWA',
    level: 'متقدم',
    category: 'الويب',
    summary:
      'بعض تطبيقات الويب الحديثة تحتاج أن تعيش خارج جلسة الصفحة الحالية: حفظ محلي، عمل جزئيًا دون اتصال، مزامنة لاحقة، وتجربة تشبه التطبيق. هنا تفهم Web Storage وIndexedDB وService Workers وPWA بعقلية هندسية لا كحيل متفرقة.',
    learn: [
      'فرّق بين Web Storage وIndexedDB وCache Storage: متى يكفي كل واحد، وما حدوده.',
      'افهم كيف يعمل Service Worker كطبقة تحكم للطلبات والأصول والتحديثات والإشعارات والمزامنة.',
      'تعلم معنى offline-first وbackground sync وتحديثات الـPWA من دون تخريب تجربة المستخدم أو نسخ البيانات.',
      'صمم استراتيجية صلاحية وإبطال cache واضحة بدل تحويل التخزين المحلي إلى قاعدة بيانات فوضوية.',
    ],
    build: ['حوّل تطبيق قائمة مهام أو ملاحظات إلى تجربة PWA بسيطة تحفظ محليًا وتستعيد البيانات بعد انقطاع الشبكة ثم تزامنها عند العودة.'],
    note2026:
      'مع التطبيقات السريعة وتوقعات المستخدمين العالية، صارت ميزات التخزين المحلي والعمل دون اتصال ذات قيمة عملية حقيقية في لوحات التحكم والأدوات الداخلية ومنتجات الويب المتنقلة.',
    resources: [
      { label: 'MDN Progressive Web Apps', url: docs.mdnPwa },
      { label: 'MDN Service Worker API', url: docs.mdnServiceWorker },
      { label: 'MDN IndexedDB API', url: docs.mdnIndexedDb },
      { label: 'MDN Web Storage API', url: docs.mdnWebStorage },
    ],
    tags: ['PWA', 'Service Worker', 'IndexedDB', 'Web Storage', 'Offline'],
    searchKeywords: [
      'service worker pwa indexeddb web storage roadmap',
      'offline first web app mdn',
      'cache storage indexeddb difference',
      'pwa update flow service worker',
    ],
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
  'frontend-testing-quality': {
    title: 'اختبارات الواجهة وتجربة المستخدم الحقيقية',
    level: 'متقدم',
    category: 'الويب',
    summary:
      'واجهة الويب لا تكفيها unit tests فقط. تحتاج اختبارات component وintegration وbrowser E2E تثبت أن البحث والتنقل والنسخ والحالات الحرجة تعمل فعلًا كما يراها المستخدم.',
    learn: [
      'فرّق بين اختبار المنطق، render، interaction، network mocking، وE2E داخل المتصفح الحقيقي.',
      'اجعل اختبارات الواجهة تقيس السلوك الذي يراه المستخدم: loading, keyboard navigation, copy/share, focus, وerror states.',
      'استخدم أدوات سريعة مثل Vitest وTesting Library للمسارات الصغيرة، ثم ثبت الرحلات الحرجة بـ Playwright أو ما شابهه.',
      'تجنب الاختبارات الهشة المرتبطة بالتنفيذ الداخلي أو selectors غير مستقرة أو snapshots لا تقول شيئًا عن السلوك.',
    ],
    build: ['اكتب مسار E2E صغيرًا يفتح الصفحة ويبحث ويفتح التفاصيل وينسخ رابط الحالة، ثم شغّله تلقائيًا مع CI أو قبل النشر.'],
    note2026:
      'كثرة تغييرات الواجهة المولدة بسرعة تجعل اختبارات المتصفح الحقيقية أكثر أهمية من الماضي، خصوصًا في المنتجات التي تعتمد على حالات كثيرة واختصارات ولوحات تحكم.',
    resources: [
      { label: 'Vitest Guide', url: docs.vitest },
      { label: 'Playwright Docs', url: docs.playwright },
      { label: 'MDN Accessibility', url: docs.mdnA11y },
    ],
    tags: ['Frontend Testing', 'Component Tests', 'E2E', 'UX'],
    searchKeywords: [
      'frontend testing vitest playwright roadmap',
      'ui e2e testing real user flows',
      'component testing vs e2e frontend',
    ],
  },
  'canvas-webgpu-interactive': {
    title: 'Canvas وWebGPU وواجهات الويب التفاعلية',
    level: 'متقدم',
    category: 'الويب',
    summary:
      'المنصة الأمامية لا تقف عند DOM فقط. عندما تدخل الرسوم التفاعلية أو أدوات الرسم أو visualizations أو أجزاء قريبة من الألعاب، تحتاج Canvas وWebGL وWebGPU وفهم حدود الـGPU في الويب.',
    learn: [
      'حدد متى يكفي DOM وCSS ومتى تصبح Canvas أو WebGPU أو WebGL أنسب.',
      'افهم دورة الرسم وإدارة الإطار وتحويل البيانات من CPU إلى GPU بشكل مبسط لكن عملي.',
      'ابدأ بـ Canvas 2D ثم تعرّف على الفرق بين WebGL وWebGPU من زاوية الاستخدام لا الضجيج التسويقي.',
      'راقب أثر الرسم المكثف على الأداء والذاكرة والتفاعل، ولا تنسَ حدود الوصولية عندما تخرج من DOM التقليدي.',
    ],
    build: ['ابنِ demo صغيرة للرسم أو visualization أو محرر مصغر يستخدم Canvas أولًا، ثم جرّب جزءًا محدودًا من WebGPU أو WebGL عند الحاجة الفعلية.'],
    note2026:
      'ظهور أدوات الويب التفاعلية الثقيلة وواجهات البيانات الغنية جعل معرفة حدود الـDOM وحدها غير كافية لبعض فئات المنتجات الحديثة.',
    resources: [
      { label: 'MDN Canvas Tutorial', url: docs.mdnCanvas },
      { label: 'MDN WebGL Tutorial', url: docs.mdnWebgl },
      { label: 'MDN WebGPU API', url: docs.mdnWebgpu },
      { label: 'MDN Games', url: docs.mdnGames },
    ],
    tags: ['Canvas', 'WebGL', 'WebGPU', 'Graphics', 'Visualization'],
    searchKeywords: [
      'canvas webgpu webgl roadmap frontend',
      'web visualization canvas gpu basics',
      'when to use canvas vs dom',
    ],
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
      'تعرف على idempotency وإعادة المحاولة والتعويض من زاوية معمارية لا من زاوية queue واحدة فقط.',
      'فكر في ownership البيانات قبل التفكير في البروتوكول.',
      'خطط من البداية لسلوك التكرار أو التأخير أو فقدان الرسائل بدل افتراض أن الشبكة نظيفة دائمًا.',
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
      'تعلم متى تستخدم backpressure أو queue sizing أو load shedding بدل ترك النظام يختنق بصمت.',
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
  'architectural-failure-modes': {
    title: 'أنماط الفشل، backpressure، وgraceful degradation',
    level: '2026',
    category: 'الأنظمة',
    summary:
      'الأنظمة الكبيرة لا تفشل بشكل ثنائي فقط. هناك بطء، امتلاء طوابير، limits مزودين، تضاعف طلبات، وpartial outages. هذا الباب يعلّمك كيف تصمم سلوك النظام عندما تسوء الأمور بدل الاكتفاء بالتمني.',
    learn: [
      'سمِّ failure modes مبكرًا: timeout, slow dependency, full queue, duplicate event, stale cache, exhausted rate limit.',
      'افهم backpressure وload shedding وqueue sizing ومتى ترفض العمل أو تبطئه بدل دفن المشكلة تحت الضغط.',
      'صمم graceful degradation: ما الذي يمكن تعطيله أو تبسيطه مع بقاء الخدمة مفيدة للمستخدم أو للفريق.',
      'اربط idempotency والتعافي من الفشل بالمعمارية نفسها، لا بطبقة worker أو retry policy معزولة فقط.',
    ],
    build: ['خذ خدمة أو workflow واحدًا واكتب جدول failure modes يوضح الاكتشاف والتخفيف ووضع degraded mode وسلوك الاسترجاع لكل حالة.'],
    note2026:
      'مع الاعتماد على APIs مدارة وLLM providers وأنظمة event-driven، صار التعامل الهادئ مع الفشل والضغط جزءًا أساسيًا من العمارة الحديثة.',
    resources: [
      { label: 'OpenTelemetry Docs', url: docs.opentelemetry },
      { label: 'RabbitMQ Tutorials', url: docs.rabbitmqTutorials },
      { label: 'Kubernetes Basics', url: docs.kubernetes },
    ],
    tags: ['Failure Modes', 'Backpressure', 'Graceful Degradation', 'Idempotency', 'Reliability'],
    searchKeywords: [
      'backpressure graceful degradation architecture',
      'system failure modes idempotency design',
      'load shedding retry timeout resilience',
    ],
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
      'راقب الاعتماديات والإصدارات والتنبيهات الأمنية، ولا تؤجل dependency auditing حتى نهاية المشروع.',
      'افهم فائدة SBOM في رؤية ما يدخل منتجك فعلًا من مكونات ونسخ واعتماديات عابرة.',
      'راجع build pipeline والصلاحيات الممنوحة لها.',
    ],
    build: ['أعد تنظيم مشروع تجريبي بحيث لا توجد أسرار في الكود أو ملفات البيئة المشتركة.'],
    note2026:
      'الاعتماديات والمكونات المولدة آليًا تزيد مساحة الخطر، لذا مراجعة السلسلة البرمجية لم تعد رفاهية.',
    resources: [
      { label: 'OWASP Cheat Sheet Series', url: docs.owaspCheatsheets },
      { label: 'GitHub Actions', url: docs.ghActions },
      { label: 'SPDX Learn', url: docs.spdxLearn },
      { label: 'CycloneDX SBOM', url: docs.cyclonedxSbom },
    ],
    tags: ['Secrets', 'Supply Chain', 'Dependencies', 'SBOM'],
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
      'كوّن صورة أولية عن virtual memory وpage cache والفرق بين الذاكرة الفعلية والمنطقية التي يراها البرنامج.',
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
  'virtual-memory-filesystems': {
    title: 'الذاكرة الافتراضية وداخل أنظمة الملفات',
    level: '2026',
    category: 'علوم الحاسب',
    summary:
      'كثير من السلوك الغامض في الأداء والأنظمة يرجع إلى شيئين يختبئان تحت التجريد: كيف تُترجم العناوين وتدار الصفحات، وكيف تُنظم الملفات والبلوكات والكاش والmetadata على القرص. هذا الباب يربط virtual memory وfilesystem internals بفهمك اليومي للبرامج.',
    learn: [
      'افهم الصفحات page tables وpage faults وworking set وmmap من زاوية عملية لا رياضية فقط.',
      'تعرف على الفرق بين page cache وbuffering ولماذا يختلف أداء القراءة والكتابة بين مرة وأخرى.',
      'افهم كيف تنظر أنظمة الملفات إلى inode وdirectories وjournaling وallocation بشكل مبسط لكن عملي.',
      'اربط بين virtual memory وfilesystem behavior وبين استهلاك الذاكرة وstartup time وأدوات البيانات وقواعد البيانات.',
    ],
    build: ['قارن بين قراءة ملف كبير بطرق مختلفة أو راقب أثر page cache وmmap على أداة صغيرة، ثم اكتب شرحًا مبسطًا لما حدث داخل الذاكرة والملفات.'],
    note2026:
      'فهم هذه الطبقة يختصر كثيرًا من التخمين في مشاكل الأداء، قواعد البيانات، أدوات التطوير، والخدمات التي تتعامل مع ملفات أو بيانات كبيرة.',
    resources: [
      { label: 'OSTEP', url: docs.ostep },
      { label: 'man7 mmap(2)', url: docs.manMmap },
      { label: 'SQLite Docs', url: docs.sqlite },
    ],
    tags: ['Virtual Memory', 'Filesystems', 'mmap', 'Page Cache', 'Operating Systems'],
    searchKeywords: [
      'virtual memory filesystem internals roadmap',
      'page cache mmap basics',
      'inode journaling explained',
    ],
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
      'تعرف على memory model وحدود الترتيب visibility وordering عندما تتعامل مع shared state وatomics.',
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
      'تعرف على consensus basics مثل Raft أو Paxos على مستوى الفكرة: لماذا نحتاجها، ومتى لا نحتاجها.',
      'تعرف على trade-offs الشهيرة مثل availability مقابل consistency.',
      'اربط بين النظريات وبين اختياراتك اليومية في APIs وقواعد البيانات والqueues.',
    ],
    build: ['اكتب سيناريوهات فشل موزع محتملة في نظامك وكيف يمكن اكتشافها أو التخفيف منها.'],
    note2026:
      'حتى التطبيقات الصغيرة أصبحت تعتمد على خدمات خارجية كثيرة، ما يعني أنك تعمل في بيئة موزعة سواء أحببت ذلك أم لا.',
    resources: [
      { label: 'MIT OpenCourseWare', url: docs.mitOcw },
      { label: 'Raft', url: docs.raft },
      { label: 'OpenTelemetry Docs', url: docs.opentelemetry },
    ],
    tags: ['Distributed Systems', 'Consistency', 'Failure', 'Consensus', 'Replication'],
  },
  'game-development': {
    title: 'تطوير الألعاب والمحركات',
    level: 'عملي',
    category: 'الألعاب',
    summary:
      'هذا المسار يربط بين تطوير اللعبة نفسها وبين فهم المحرك الذي تعمل فوقه. تبدأ من دورة الإطار والـgameplay، ثم تنتقل إلى الرياضيات، أنظمة المحرك، والرندر منخفض المستوى عبر بيئات شائعة مثل C وC++ وPython والويب.',
    learn: [
      'افهم الفرق بين بناء لعبة باستخدام محرك جاهز وبين بناء أجزاء من المحرك بنفسك.',
      'ابدأ من لعبة صغيرة قابلة للإنهاء قبل القفز إلى طموحات عالم مفتوح أو محرك شامل.',
      'اربط بين البرمجة، الرياضيات، الأدوات، والرندر لأنها تعمل معًا داخل أي لعبة حقيقية.',
      'اختر stack مناسبًا لهدفك: C وC++ للعمق والأداء، Python للبروتوتايب والأدوات، والويب لتجارب سريعة قابلة للمشاركة.',
    ],
    build: ['ابنِ لعبة صغيرة 2D أو prototype ثلاثي الأبعاد، ثم وثق كيف تدير التحديث والرندر والمدخلات والأصول.'],
    note2026:
      'في 2026 ما زال أفضل طريق لتعلم الألعاب هو إنهاء ألعاب صغيرة كثيرة، لا البدء بمحرك ضخم أو لعبة أحلام من أول أسبوع.',
    resources: [
      { label: 'Unity Docs', url: docs.unity },
      { label: 'Unreal Engine Docs', url: docs.unreal },
      { label: 'Godot Docs', url: docs.godot },
      { label: 'SDL Wiki', url: docs.sdl },
      { label: 'MDN Games', url: docs.mdnGames },
    ],
    tags: ['Game Dev', 'Engines', 'Gameplay', 'C', 'C++', 'Python', 'Web'],
    searchKeywords: ['game development roadmap c++ python web', 'engine programming learning path', 'game dev math roadmap'],
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
      'الألعاب لا تحتاج كل الرياضيات من أول يوم، لكنها تحتاج أساسًا قويًا في المتجهات والتحويلات والكاميرات والتصادم والحركة. المهم أن تعرف ما الذي تحتاجه فعلًا في C وC++ وPython والويب بدل جمع مواضيع رياضية بلا استخدام واضح.',
    learn: [
      'افهم vectors وdot product وcross product وmatrices والتحويلات الأساسية.',
      'في C وC++ ستحتاج حسًا أعلى بالدقة والأنواع وlayout البيانات لأن الرياضيات ترتبط بالأداء والرندر والمحاكاة مباشرة.',
      'في Python ستستفيد من vectors وinterpolation والتصادم والزمن الثابت أكثر من حاجتك المبكرة إلى معادلات ثقيلة، خصوصًا مع prototyping أو Pygame.',
      'في الويب ستحتاج فهم الإحداثيات داخل canvas والتحويلات وdelta time وmatrices عندما تدخل WebGL أو محاكاة كاميرا.',
      'اربط المفهوم الرياضي بالمشكلة التي تراها على الشاشة بدل حفظ القوانين مجردة.',
    ],
    build: ['نفذ حركة كاميرا أو مقذوفات أو نظام تصادم بسيط مع شرح رياضي مختصر لما يحدث.'],
    note2026:
      'هذا المجال هو من أهم ما يميز مطور الألعاب القادر على حل المشاكل بنفسه بدل الاعتماد الكامل على جاهزية المحرك.',
    resources: [
      { label: 'Godot Docs', url: docs.godot },
      { label: 'Godot Math Docs', url: docs.godotMath },
      { label: 'Unity Docs', url: docs.unity },
      { label: 'Eigen Geometry Tutorial', url: docs.eigenGeometry },
      { label: 'MDN WebGL Tutorial', url: docs.mdnWebgl },
    ],
    tags: ['Vectors', 'Matrices', 'Physics', 'Cameras', 'C++', 'Python', 'Web'],
    searchKeywords: ['game math vectors matrices collision', 'webgl camera math basics', 'pygame vector movement tutorial'],
  },
  'engine-math-foundations': {
    title: 'ما الرياضيات التي تحتاجها لبناء محرك؟',
    level: 'متقدم',
    category: 'المحركات',
    summary:
      'بناء محرك لا يحتاج “كل الرياضيات” دفعة واحدة، لكنه يحتاج باقة واضحة بحسب طبقتك: جبر خطي للتحويلات، هندسة للتصادمات، حسابًا عدديًا للاستقرار، وفهمًا عمليًا للدقة والوحدات. هذا الباب يوضح ما تحتاجه أولًا وماذا تؤجل.',
    learn: [
      'لبناء طبقة مشهد أو كاميرا أو renderer ستحتاج vectors وmatrices وcoordinate spaces وaffine transforms وprojection basics.',
      'للدوران ثلاثي الأبعاد ستدخل quaternions وdot/cross products وnormals عندما تصبح مشاكل الالتفاف والاتجاه واقعية في مشروعك.',
      'للفيزياء والمحاكاة ستحتاج مفهومًا عمليًا عن المشتقات والتكامل العددي والثبات stability وtolerances أكثر من حاجتك المبكرة إلى رياضيات أكاديمية ثقيلة.',
      'في C وC++ يظهر أثر الرياضيات سريعًا في الأداء والدقة، وفي الويب وPython يظهر أثرها في timing وtransforms وسهولة بناء الأدوات والنماذج الأولية.',
    ],
    build: [
      'ارسم قائمة طبقات لمحرك صغير 2D أو 3D ثم اكتب بجانب كل طبقة ما الرياضيات التي تحتاجها الآن وما الذي يمكنك تأجيله دون ضرر.',
      'نفذ demo صغيرة تجمع transform hierarchy وكاميرا وتصادمًا بسيطًا، ثم وثّق أي جزء كان رياضيًا وأي جزء كان تنظيميًا أو هندسيًا فقط.',
    ],
    note2026:
      'أكبر فخ في هذا المسار هو أن تفتح كتب رياضيات كثيرة بلا مشروع. ما تحتاجه فعلًا يتضح عندما تربط كل مفهوم بطبقة محددة من المحرك.',
    resources: [
      { label: 'Godot Math Docs', url: docs.godotMath },
      { label: 'Eigen Geometry Tutorial', url: docs.eigenGeometry },
      { label: 'SDL Render Category', url: docs.sdlRender },
      { label: 'Vulkan Guide', url: docs.vulkan },
      { label: 'MDN WebGL Tutorial', url: docs.mdnWebgl },
    ],
    tags: ['Engine Math', 'Linear Algebra', 'Transforms', 'Simulation', 'Rendering'],
    searchKeywords: [
      'engine math roadmap vectors matrices quaternions',
      'renderer math basics projection spaces',
      'simulation stability collision geometry',
    ],
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
      'اربط كل subsystem بالرياضيات التي تخدمه فقط: transforms للمشهد، هندسة للتصادم، وتوقيت واستقرار للمحاكاة.',
    ],
    build: ['ارسم معمارية محرك صغير 2D وحدد فيه الأنظمة الأساسية وحدود كل نظام.'],
    note2026:
      'أكبر خطأ شائع هو محاولة كتابة كل شيء دفعة واحدة. المحرك الجيد يبدأ بنواة صغيرة جدًا ثم تنمو حولها الأنظمة اللازمة فقط.',
    resources: [
      { label: 'Godot Docs', url: docs.godot },
      { label: 'Godot Math Docs', url: docs.godotMath },
      { label: 'SDL Wiki', url: docs.sdl },
      { label: 'SDL Render Category', url: docs.sdlRender },
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
      'صمم evals بسيطة تقيس ما يهم المنتج حقًا، لا ما يبدو رائعًا في demo سريع.',
      'ابنِ eval datasets صغيرة لكنها ممثلة للحالات الحرجة وحدود المنتج بدل أمثلة عشوائية جميلة فقط.',
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
      'افهم chunking وindexing وretrieval وreranking وحدود كل منها.',
      'ابدأ بمصادر صغيرة ونظيفة قبل التضخم في البيانات.',
      'راقب الاسترجاع الخاطئ والوثائق القديمة وجودة المراجع، ولا تفصل جودة الفهرسة عن جودة الإجابة.',
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
      'خطط من البداية لحالات فشل الأدوات أو الوكلاء: timeout، tool error، incomplete step، وfallback البشري أو البرمجي.',
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
  'database-indexes-explain': {
    title: 'الفهارس و EXPLAIN وتحسين الاستعلامات',
    level: 'متقدم',
    category: 'الخلفية والبيانات',
    summary:
      'كثير من بطء الخلفية لا يأتي من “اختيار لغة خاطئ”، بل من استعلامات لا تستخدم الفهارس جيدًا أو لا تُقرأ خطتها أصلًا. هذا الباب يجعلك ترى قاعدة البيانات كمنفذ تنفيذ حقيقي لا كصندوق أسود خلف ORM.',
    learn: [
      'افهم الفرق بين sequential scan وindex scan وbitmap scan، ومتى يصبح كل واحد منطقيًا أو مكلفًا.',
      'استخدم EXPLAIN وEXPLAIN ANALYZE لقراءة خطة التنفيذ بعين عملية: أين يضيع الوقت؟ وأين تتضخم الصفوف؟',
      'صمّم الفهارس بناءً على أنماط القراءة والفرز والربط الفعلية، لا بمجرد إضافة index لكل عمود يظهر كثيرًا.',
      'انتبه إلى أثر الفهارس على الكتابة والتخزين، لأن التحسين الجيد يوازن بين القراءة والكلفة اليومية للنظام.',
    ],
    build: [
      'خذ استعلامين بطيئين من مشروع تجريبي أو قاعدة بيانات محلية، ثم اقرأ خطتهما قبل وبعد إضافة فهرس واحد مدروس ودوّن الفرق.',
      'ابنِ تقريرًا صغيرًا أو صفحة إدارة فيها فلترة وفرز، ثم اختبر كيف تتغير الخطة عند تغيير ترتيب الشروط أو الفهرس.',
    ],
    note2026:
      'مع انتشار الخدمات المدارة وORMs السهلة، صار من يقرأ خطة التنفيذ بوعي يختصر ساعات طويلة من التخمين ويقدّم أثرًا واضحًا بسرعة.',
    resources: [
      { label: 'PostgreSQL: Indexes', url: docs.postgresIndexes },
      { label: 'PostgreSQL: Using EXPLAIN', url: docs.postgresExplain },
      { label: 'PostgreSQL SQL Tutorial', url: docs.postgresSql },
    ],
    tags: ['PostgreSQL', 'Indexes', 'EXPLAIN', 'Query Performance'],
    searchKeywords: [
      'postgres explain analyze tutorial',
      'postgres indexes practical guide',
      'query plan index scan seq scan',
      'sql performance debugging postgres',
    ],
  },
  'backend-queues-webhooks': {
    title: 'الرسائل والـ webhooks وإعادة المحاولة',
    level: '2026',
    category: 'الخلفية والبيانات',
    summary:
      'حين يبدأ نظامك بالتكامل مع خدمات خارجية أو يعتمد على الأحداث، تظهر مشاكل جديدة: التكرار، الترتيب، الفشل الجزئي، وضياع الرسائل. هذا الباب يربط بين الطوابير والـwebhooks وidempotency بطريقة عملية جدًا.',
    learn: [
      'ميّز بين queue داخلية وwebhook خارجي وevent bus، لأن لكل واحد حدودًا مختلفة في الملكية والموثوقية.',
      'صمّم retries وbackoff وdead-letter handling بحيث لا يتحول الفشل المؤقت إلى انهيار أو تكرار غير مسيطر عليه.',
      'استخدم idempotency keys أو أساليب مكافئة عندما تتوقع إعادة الإرسال أو ازدواج التنفيذ.',
      'أضف tracing أو logging منظّم حتى تستطيع متابعة الرسالة من نقطة دخولها حتى معالجتها النهائية.',
    ],
    build: [
      'ابنِ webhook receiver بسيطًا يسجل الحدث ويمنع التكرار، ثم اختبر إعادة الإرسال المتعمدة أكثر من مرة.',
      'أضف queue صغيرة لمهمة بطيئة مثل إرسال بريد أو مزامنة بيانات، ثم وثق كيف تتعامل مع الفشل وإعادة المحاولة.',
    ],
    note2026:
      'في 2026 كثير من الأنظمة تعتمد على تكاملات SaaS وwebhooks، لذلك النضج الخلفي الحقيقي يظهر في التعامل الهادئ مع الفشل لا في وصول الحدث المثالي فقط.',
    resources: [
      { label: 'RabbitMQ Tutorials', url: docs.rabbitmqTutorials },
      { label: 'OpenTelemetry Docs', url: docs.opentelemetry },
      { label: 'FastAPI Docs', url: docs.fastapi },
    ],
    tags: ['Queues', 'Webhooks', 'Retries', 'Idempotency', 'Tracing'],
    searchKeywords: [
      'webhooks idempotency retries',
      'rabbitmq tutorials retry dead letter',
      'event driven backend reliability',
      'background jobs webhook handling',
    ],
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
      'لاحظ متى تكون المشكلة في الحقيقة غياب backpressure أو queue limits أو load shedding لا بطء خادم واحد فقط.',
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
      'تعرّف على OAuth 2 وOpenID Connect عمليًا: authorization code flow وPKCE وtokens وحدود الاعتماد على provider خارجي.',
      'لاحظ أن أكثر أخطاء الأمن شيوعًا تأتي من سوء تحديد من يحق له ماذا.',
    ],
    build: [
      'ابنِ نظام صلاحيات صغيرًا فيه أكثر من دور وأكثر من مستوى وصول.',
      'اختبر سيناريوهات مستخدم غير مخول وحاول كسر القيود بشكل واعٍ.',
    ],
    note2026:
      'كلما دخلت الأنظمة متعددة الفرق والعملاء والواجهات وSSO وواجهات الطرف الثالث، صار هذا الموضوع محوريًا في الأمان والتجربة معًا.',
    resources: [
      { label: 'OWASP Cheat Sheets', url: docs.owaspCheatsheets },
      { label: 'OAuth 2.0', url: docs.oauth },
      { label: 'OpenID Connect', url: docs.oidc },
      { label: 'ASP.NET Core Docs', url: docs.dotnet },
    ],
    tags: ['Identity', 'Auth', 'Authorization', 'Access Control', 'OAuth', 'OIDC'],
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
  'fuzzing-incident-response': {
    title: 'Fuzzing والاستجابة الأولية للحوادث',
    level: '2026',
    category: 'الجودة والأمان',
    summary:
      'بعض العيوب لا تظهر في الاختبارات اليدوية أو unit tests. الفَزّينغ fuzzing يكشف سلوك الحواف غير المتوقع، والاستجابة للحوادث تعلّم الفريق ماذا يفعل عندما يفشل المنع أصلًا.',
    learn: [
      'افهم متى يفيد fuzzing خاصة في parsers وinput-heavy code وواجهات الأمن والبرمجيات القريبة من النظام.',
      'تعلم الفرق بين crash وrepro وtriage وcontainment وrecovery وpostmortem.',
      'احتفظ بخطوات أولية واضحة: من يعلن؟ ما الذي تجمعه؟ كيف تقلل الضرر؟ ومتى تصعّد؟',
      'اجعل incident response جزءًا من الجودة التشغيلية، لا وثيقة تُكتب بعد الأزمة فقط.',
    ],
    build: ['شغّل fuzzer بسيطًا على parser أو دالة تقبل مدخلات معقدة، ثم اكتب mini-runbook من صفحة واحدة لحادث أمني أو تعطّل إنتاجي محتمل.'],
    note2026:
      'سرعة التطوير لا تلغي الحوادث؛ بل تجعل وجود runbooks قصيرة وتجارب تحقق على الحواف أكثر قيمة من السابق.',
    resources: [
      { label: 'LLVM LibFuzzer', url: docs.libfuzzer },
      { label: 'NIST Incident Response Guide', url: docs.nistIncidentResponse },
      { label: 'OWASP Cheat Sheet Series', url: docs.owaspCheatsheets },
    ],
    tags: ['Fuzzing', 'Incident Response', 'Runbooks', 'Verification', 'Security Testing'],
    searchKeywords: [
      'fuzzing basics incident response roadmap',
      'libfuzzer quickstart security testing',
      'incident response runbook basics',
    ],
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
  'systemd-service-operations': {
    title: 'systemd والخدمات والسجلات اليومية',
    level: 'متقدم',
    category: 'السحابة والمنصة',
    summary:
      'بعد أن تعمل الخدمة محليًا، تحتاج تشغيلًا منضبطًا على Linux: service units، restart policies، environment files، وقراءة السجلات بشكل هادئ عند المشكلة. هذا الباب عملي جدًا لأي خدمة تريدها قريبة من الإنتاج.',
    learn: [
      'افهم unit files وExecStart وRestart وWantedBy حتى لا تبقى الخدمة مجرد أمر طويل في الطرفية.',
      'استخدم journalctl وsystemctl لفهم لماذا لم تبدأ الخدمة أو لماذا أعادت التشغيل أكثر من مرة.',
      'افصل بين إعدادات التطبيق والملفات والهوية والصلاحيات بدل تشغيل كل شيء كمستخدمك الشخصي.',
      'دوّن خطوات التشغيل الأساسية بحيث يستطيع شخص آخر أو خادم جديد إعادة نفس النتيجة بلا تخمين.',
    ],
    build: [
      'حوّل خدمة API أو worker صغيرة إلى systemd service حقيقية مع ملف unit واضح وrunbook قصير للتشغيل والإيقاف والفحص.',
      'اختبر فشلًا متعمدًا في الخدمة ثم راقب كيف تظهر المشكلة داخل journalctl وما الذي يجب أن تضبطه لتصبح الرسائل أوضح.',
    ],
    note2026:
      'حتى مع الحاويات والمنصات المدارة، يظل systemd من أكثر الأدوات أهمية لفهم التشغيل الفعلي على Linux وخوادم التطوير والبيئات الداخلية.',
    resources: [
      { label: 'systemd.io', url: docs.systemd },
      { label: 'systemd.service Manual', url: docs.systemdService },
      { label: 'Ubuntu Command Line', url: docs.ubuntuCli },
    ],
    tags: ['systemd', 'Linux Services', 'journalctl', 'Operations'],
    searchKeywords: [
      'systemd service tutorial linux',
      'journalctl systemctl debugging',
      'linux service unit file example',
      'systemd restart policy basics',
    ],
  },
  'reverse-proxy-tls-dns': {
    title: 'Nginx وTLS وDNS قبل الإنتاج',
    level: '2026',
    category: 'السحابة والمنصة',
    summary:
      'قبل أن تضع خدمتك أمام المستخدمين تحتاج فهمًا عمليًا لثلاثية شائعة جدًا: DNS للوصول، reverse proxy للتوجيه والحماية الأساسية، وTLS للتشفير والشهادات. هذا الباب يربطها ببعضها دون تعقيد غير ضروري.',
    learn: [
      'افهم كيف يصل اسم النطاق إلى خدمتك، وما الذي يفعله DNS فعلًا قبل أن يبدأ HTTP.',
      'استخدم Nginx أو ما يشبهه كطبقة أمامية للـrouting، الضغط، headers، والملفات الثابتة عندما يلزم.',
      'طبّق HTTPS بطريقة واعية: الشهادة، التجديد، والرؤوس الأساسية بدل الاكتفاء بقفل أخضر في المتصفح.',
      'راقب أثر misconfiguration البسيطة في proxy أو TLS أو DNS، لأنها من أكثر أسباب أعطال الإطلاق الأولى شيوعًا.',
    ],
    build: [
      'شغّل تطبيقًا محليًا خلف Nginx ثم أضف دومينًا أو subdomain تجريبيًا ودوّن كيف يمر الطلب من DNS إلى الخادم ثم التطبيق.',
      'فعّل HTTPS لموقع تجريبي أو بيئة staging بسيطة، ثم اختبر ماذا يحدث عند شهادة منتهية أو إعداد header ناقص.',
    ],
    note2026:
      'في 2026 ما زال كثير من إطلاقات النسخ الأولى يفشل بسبب تفاصيل تشغيلية صغيرة في DNS أو proxy أو TLS أكثر من فشل منطق التطبيق نفسه.',
    resources: [
      { label: 'Nginx Beginner’s Guide', url: docs.nginxBeginnersGuide },
      { label: 'Let’s Encrypt Getting Started', url: docs.letsEncryptGettingStarted },
      { label: 'Cloudflare Fundamentals', url: docs.cloudflare },
    ],
    tags: ['Nginx', 'TLS', 'DNS', 'Reverse Proxy', 'HTTPS'],
    searchKeywords: [
      'nginx reverse proxy https basics',
      'lets encrypt getting started',
      'dns reverse proxy application flow',
      'cloudflare dns fundamentals',
    ],
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
  'ecs-game-architecture': {
    title: 'ECS وتنظيم اللعبة على شكل بيانات وأنظمة',
    level: 'متقدم',
    category: 'المحركات',
    summary:
      'عندما تكبر اللعبة، يبدأ السؤال المهم: كيف تنظّم الحالة والسلوك؟ ECS ليس شعارًا سحريًا، لكنه أسلوب قوي عندما تريد فصل البيانات عن الأنظمة وتحسين الوضوح أو الأداء في أجزاء معينة من اللعبة أو المحرك.',
    learn: [
      'افهم الفرق بين scene graph التقليدي وECS، ومتى يكفيك كل واحد منهما دون حروب فكرية فارغة.',
      'قسّم عالم اللعبة إلى entities وcomponents وsystems بشكل يخدم التغيير والاختبار، لا بشكل أكاديمي فقط.',
      'انتبه إلى ملكية البيانات وترتيب التحديث، لأن الفوضى في ECS قد تصبح أصعب من فوضى الكائنات إذا غاب الانضباط.',
      'اربط ECS بفكرة data-oriented design عندما يكون الهدف أداءً أعلى أو سهولة أكبر في معالجة عدد كبير من الكيانات.',
    ],
    build: [
      'حوّل ميكانيكية صغيرة مثل الحركة والتصادم إلى نموذج ECS مبسط، ثم قارن سهولة الإضافة والتعديل مع نموذج كائنات تقليدي.',
      'صمّم جدولًا أو مخططًا يوضح أين تعيش البيانات وأين تعمل الأنظمة داخل prototype لعبة صغير.',
    ],
    note2026:
      'كثير من مشاريع الألعاب تتبنى ECS بدافع الموضة، بينما القيمة الحقيقية تظهر عندما تستخدمه لحل ازدحام السلوك والبيانات في مشروع بدأ يكبر فعلًا.',
    resources: [
      { label: 'Unity Entities Manual', url: docs.unityEntities },
      { label: 'Godot Docs', url: docs.godot },
      { label: 'SDL Wiki', url: docs.sdl },
    ],
    tags: ['Game Dev', 'ECS', 'Data-Oriented Design', 'Engine Architecture'],
    searchKeywords: [
      'ecs game architecture basics',
      'unity entities manual beginner',
      'scene graph vs ecs practical',
      'data oriented design game dev',
    ],
  },
  'game-shaders-materials': {
    title: 'Shaders والمواد والإضاءة العملية',
    level: 'متقدم',
    category: 'الألعاب والمحركات',
    summary:
      'عندما تريد أن تبدو لعبتك أو محركك مقصودًا لا مجرد أشكال مرسومة، ستدخل عالم الـmaterials والـshaders والإضاءة. هذا الباب يربط بين الفكرة البصرية والكود الذي ينفذها على الـGPU بشكل مبسط لكن عملي.',
    learn: [
      'افهم دور vertex وfragment shaders وكيف تنتقل البيانات بين المراحل المختلفة في pipeline الرندر.',
      'تعامل مع المواد materials كطبقة تعبير عن السطح واللون والقيم البصرية، لا كملفات غامضة داخل المحرك فقط.',
      'ابدأ بإضاءة بسيطة جدًا وتدرجات واضحة قبل الدخول في PBR أو المؤثرات الثقيلة، حتى ترى أثر كل خطوة بوضوح.',
      'اربط بين الرياضيات هنا وبين الـnormals والاتجاهات والتحويلات، لأن مشاكل الشيدرز غالبًا تكون نصفها منطق بصري ونصفها رياضيات.',
    ],
    build: [
      'اكتب shader واحدة بسيطة تغيّر اللون أو تعتمد على الوقت أو الاتجاه، ثم أضف material parameters يمكن تعديلها من المشهد.',
      'ابنِ demo صغيرًا يوضح الفرق بين unlit وlit surface أو بين materialين مختلفين على نفس المجسم أو العنصر.',
    ],
    note2026:
      'الطريق الأذكى هنا ليس جمع عشرات المؤثرات، بل فهم shader واحدة جيدة وmaterial واحدة واضحة ثم التوسع من هناك.',
    resources: [
      { label: 'Godot Shaders', url: docs.godotShaders },
      { label: 'LearnOpenGL', url: docs.learnOpenGL },
      { label: 'Vulkan Tutorial', url: docs.vulkanTutorial },
    ],
    tags: ['Shaders', 'Materials', 'Lighting', 'Rendering', 'GPU'],
    searchKeywords: [
      'godot shaders tutorial',
      'learnopengl lighting basics',
      'game materials shader fundamentals',
      'vertex fragment shader practical',
    ],
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
      'افهم متى تحتاج caching أو batching أو fallbacks أو نماذج متعددة المستويات، ومتى يكفي تقليل السياق أو ضغطه.',
      'تعلم budget واضح للتكلفة والtokens والlatency بدل اعتبارها نتيجة جانبية للتجريب.',
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
      'اربط guardrails أيضًا بحالات فشل الأدوات أو الإجابات الناقصة أو الاستدعاءات المتكررة غير الضرورية.',
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
      'تعرف على mmap كجسر عملي بين الملفات والذاكرة عندما تحتاج أداءً أو نموذج تعامل مختلفًا مع البيانات.',
      'اربط بين برامج المستخدم userland وبين ما يقدمه Linux فعلًا من واجهات منخفضة المستوى.',
    ],
    build: [
      'ابنِ نسخة مبسطة من أداة Unix صغيرة مثل cat أو grep البسيط أو mini shell محدود جدًا.',
      'جرّب قراءة ملف كبير مرة عبر read ومرة عبر mmap ولاحظ أين يختلف الأسلوب الذهني والأداء.',
    ],
    note2026:
      'هذا الباب هو أقرب نقطة تجمع بين C ونظام التشغيل وLinux بشكل عملي جدًا.',
    resources: [
      { label: 'Linux Kernel Docs', url: docs.linuxKernel },
      { label: 'man7 Linux man pages', url: docs.man7 },
      { label: 'man7 mmap(2)', url: docs.manMmap },
      { label: 'OSTEP', url: docs.ostep },
    ],
    tags: ['C', 'Linux', 'System Calls', 'Processes', 'mmap'],
    searchKeywords: ['fork exec pipe tutorial', 'Linux system calls C', 'build a mini shell C', 'mmap tutorial C Linux'],
  },
  'linux-tracing-profiling': {
    title: 'تشخيص Linux عمليًا: strace و perf و Valgrind',
    level: '2026',
    category: 'اللغات والأنظمة',
    summary:
      'عندما لا يشرح لك الكود وحده ما يحدث، تحتاج أن ترى النظام من الخارج. أدوات مثل strace وperf وValgrind تكشف system calls وhotspots والتسريبات والأعطال بطريقة تقرّبك من السبب الحقيقي بدل التخمين.',
    learn: [
      'استخدم strace لرؤية system calls والملفات والاتصالات بدل تخمين أين يعلق البرنامج أو ماذا يفتح فعلًا.',
      'افهم متى يلائم perf قياس CPU hotspots ومتى تحتاج benchmark أو profiler أبسط أو أدق.',
      'استفد من Valgrind أو أدوات مشابهة لكشف memory leaks واستخدام الذاكرة غير الصحيح في المراحل المناسبة.',
      'اربط ناتج الأدوات مع logs وreadelf وقياساتك التطبيقية حتى لا تعالج أعراضًا منفصلة عن السبب الحقيقي.',
    ],
    build: [
      'خذ أداة أو خدمة Linux صغيرة وشخّصها بثلاث زوايا: system calls عبر strace، hotspot واحد عبر perf، وتسريب أو خطأ ذاكرة عبر Valgrind أو أداة مماثلة.',
      'دوّن لكل أداة سؤالًا واحدًا تجيب عنه بوضوح بدل تشغيل عشر أدوات دفعة واحدة بلا فرضية.',
    ],
    note2026:
      'المهندس الأنظمي الأقوى ليس من يملك حدسًا غامضًا، بل من يعرف أي أداة تقرّبه من الإجابة الصحيحة بأقل ضوضاء.',
    resources: [
      { label: 'strace Documentation', url: docs.strace },
      { label: 'Linux perf docs', url: docs.kernelPerf },
      { label: 'Valgrind Quick Start', url: docs.valgrindQuickStart },
      { label: 'man7 Linux man pages', url: docs.man7 },
    ],
    tags: ['Linux', 'strace', 'perf', 'Valgrind', 'Profiling', 'Debugging'],
    searchKeywords: [
      'linux strace perf valgrind tutorial',
      'debug linux process system calls',
      'linux memory leak valgrind perf',
    ],
  },
  'linux-libc-linking': {
    title: 'مكتبات Linux و glibc: headers والربط الديناميكي',
    level: 'متقدم',
    category: 'اللغات والأنظمة',
    summary:
      'بعد فهم system calls الأساسية، تحتاج أن تعرف ما الذي يحدث بين كودك وبين بيئة Linux اليومية: ما دور glibc؟ ما الفرق بين header وlibrary وsymbol وABI؟ وكيف يعمل الربط static أو dynamic فعلًا عند البناء والتشغيل؟',
    learn: [
      'افهم الفرق بين واجهات libc وواجهات Linux الخاصة بالنواة، ومتى تمر عبر glibc ومتى تقترب من syscall أو دوال أكثر انخفاضًا.',
      'تعلّم معنى shared objects وstatic libraries وSONAME والـloader، ولماذا قد يعمل البرنامج على جهاز ويكسر على جهاز آخر بسبب الربط أو النسخ.',
      'تمرّن على قراءة include files وfeature test macros وشرح سبب استخدام -lm أو -ldl أو أعلام بناء أخرى بدل نسخ الأوامر عشوائيًا.',
      'افهم كيف تتعامل dlopen وdlsym وld.so مع تحميل الرموز والمكتبات وقت التشغيل في برامج Linux الحقيقية، وكيف يساعدك readelf في قراءة صورة ELF نفسها.',
    ],
    build: [
      'ابنِ مكتبة مشتركة صغيرة .so ثم اربط بها برنامجًا بسيطًا، وبعدها أنشئ مثالًا ثانيًا يحملها وقت التشغيل باستخدام dlopen وdlsym.',
      'افحص برنامجك بعد البناء باستخدام أدوات مثل ldd أو readelf ثم دوّن ما الذي تم ربطه أثناء البناء وما الذي يُحل أثناء التشغيل.',
    ],
    note2026:
      'جزء كبير من مشاكل “الكود يعمل عندي فقط” في Linux ليس من منطق البرنامج، بل من الربط والـABI وتحميل المكتبات والاعتماد على تفاصيل بيئة غير واضحة.',
    resources: [
      { label: 'GNU C Library', url: docs.glibc },
      { label: 'glibc Manual: Dynamic Linker', url: docs.glibcDynamicLinker },
      { label: 'libc(7)', url: docs.manLibc },
      { label: 'elf(5)', url: docs.manElf },
      { label: 'ld.so(8)', url: docs.manLdSo },
      { label: 'dlopen(3)', url: docs.manDlopen },
      { label: 'dlsym(3)', url: docs.manDlsym },
      { label: 'feature_test_macros(7)', url: docs.manFeatureTestMacros },
    ],
    tags: ['Linux', 'glibc', 'Dynamic Linking', 'ELF', 'Shared Libraries'],
    searchKeywords: [
      'glibc dynamic linker explained',
      'linux shared library dlopen dlsym',
      'ld.so SONAME tutorial',
      'feature test macros linux C',
    ],
  },
  'linux-kernel-uapi-modules': {
    title: 'واجهات نواة Linux ومدخل كتابة modules',
    level: '2026',
    category: 'اللغات والأنظمة',
    summary:
      'هذا الموضوع يوضح الفرق المهم بين user space وkernel space: ما هي UAPI headers؟ متى يكفيك /proc و/sys وioctl؟ ومتى يصبح لكتابة module أو driver مصغر معنى؟ الفكرة هنا ليست القفز مباشرة إلى driver معقد، بل فهم الحدود الصحيحة ثم كتابة شيء صغير واعٍ.',
    learn: [
      'افهم ما الذي تعتبره النواة واجهة مستقرة نسبيًا للمستخدم، وما الذي يبقى داخليًا وقد يتغير بين الإصدارات.',
      'تعرّف على UAPI headers وواجهات مثل /proc و/sys وioctl وكيف يتواصل برنامج المستخدم مع قدرات Linux أو الأجهزة دون خلط بين الجانبين.',
      'تعلّم أساسيات بناء external module باستخدام kbuild وما معنى أن تبني ضد شجرة kernel أو headers مطابقة للنواة العاملة.',
      'افهم أن كتابة module ليست الخطوة الأولى دائمًا؛ أحيانًا الحل الصحيح هو برنامج userland جيد، وأحيانًا تحتاج hook أو driver أو امتدادًا للنواة.',
      'التزم بأسلوب كتابة محافظ وواضح لأن كود النواة لا يسامح مثل userland: الذاكرة، التزامن، والسياق التنفيذي كلها أكثر حساسية.',
    ],
    build: [
      'اكتب أداة userland صغيرة تقرأ معلومات من /proc أو /sys وتشرح ما الذي تحصل عليه من النواة مباشرة وما الذي يظل مسؤولية برنامجك.',
      'ابنِ external module تجريبية صغيرة جدًا وفق kbuild، مثل hello module أو module تسجل رسائل بسيطة، ثم وثّق حدودها ومتى لا ينبغي أصلًا الذهاب إلى kernel space.',
    ],
    note2026:
      'في 2026 ما يزال الفرق بين من “يحب Linux” ومن يفهمه فعلًا يظهر بسرعة عند الحديث عن حدود UAPI، بناء modules، وتحديد متى يبقى الحل في userland بدل الحماس الزائد للغوص في النواة.',
    resources: [
      { label: 'Linux Kernel Docs', url: docs.linuxKernel },
      { label: 'Userspace API Guide', url: docs.kernelUserspaceApi },
      { label: 'Building External Modules', url: docs.kernelExternalModules },
      { label: 'Driver API Basics', url: docs.kernelDriverBasics },
      { label: 'Kernel Coding Style', url: docs.kernelCodingStyle },
      { label: 'man7 Linux man pages', url: docs.man7 },
    ],
    tags: ['Linux Kernel', 'UAPI', 'Kernel Modules', 'kbuild', 'Drivers'],
    searchKeywords: [
      'linux userspace api kernel module basics',
      'kbuild external module tutorial',
      'linux kernel coding style module',
      'proc sysfs ioctl explained',
    ],
  },
  'linux-math-libraries': {
    title: 'الرياضيات على Linux بلغة C: libm و GSL والكتابة الدقيقة',
    level: 'متقدم',
    category: 'اللغات والأنظمة',
    summary:
      'الرياضيات في Linux ليست مجرد #include <math.h>. هنا تحتاج أن تفهم libm، الربط بـ -lm، التعامل مع floating point وNaN وInf والأخطاء العددية، ومتى تكفيك الدوال القياسية في C ومتى يصبح GSL أو BLAS أكثر ملاءمة لمسائل عددية أو علمية أعمق.',
    learn: [
      'استخدم math.h وcomplex.h بوعي، وافهم لماذا تتطلب بعض البرامج الربط الصريح بـ libm عبر -lm بدل افتراض أن كل شيء يأتي تلقائيًا.',
      'تعلّم أساسيات الأخطاء العددية: التقريب، overflow وunderflow وdomain errors وكيف تكتشف مشاكل الرياضيات في C على Linux بدل تفسيرها كأخطاء عشوائية.',
      'افهم متى يكفيك libm للدوال القياسية مثل sin وcos وsqrt وpow، ومتى تحتاج GSL أو BLAS عندما تدخل في تكامل عددي أو جبر خطي أو خوارزميات عددية أكثر جدية.',
      'تمرّن على كتابة كود رياضي واضح: اختيار النوع المناسب، تقليل المزج غير المقصود بين int وdouble، وتوثيق الحدود والوحدات وافتراضات الدقة.',
      'في مسار Linux نفسه ستحتاج غالبًا رياضيات عملية لا أكاديمية: حسابات الوقت، القياس profiling، وحدات البيانات، التقريب العددي، وأحيانًا الجبر الخطي أو الإحصاء عندما تدخل رسوميات أو أدوات علمية أو تحليل أداء.',
    ],
    build: [
      'ابنِ أداة CLI صغيرة تقارن بين مجموعة حسابات باستخدام libm مع تسجيل حالات الخطأ أو NaN أو Inf وشرح سبب ظهورها.',
      'نفّذ برنامجًا عدديًا بسيطًا يستخدم GSL أو واجهات BLAS الأساسية، مثل تقريب تكامل أو حل مسألة جبر خطي صغيرة، ثم قارن بينه وبين نسخة أبسط تعتمد على libm فقط.',
    ],
    note2026:
      'كثير من أخطاء “الرياضيات” في Linux تأتي من سوء الربط أو سوء اختيار الأنواع أو تجاهل خصائص floating point، لا من صعوبة المعادلات نفسها فقط.',
    resources: [
      { label: 'glibc Manual: Mathematics', url: docs.glibcMath },
      { label: 'math_error(7)', url: docs.manMathError },
      { label: 'complex(7)', url: docs.manComplex },
      { label: 'GNU Scientific Library', url: docs.gslDocs },
      { label: 'GSL Mathematical Functions', url: docs.gslMath },
      { label: 'GSL BLAS Support', url: docs.gslBlas },
    ],
    tags: ['Linux', 'libm', 'GSL', 'BLAS', 'Numerics', 'Floating Point'],
    searchKeywords: [
      'libm -lm tutorial linux',
      'math_error floating point linux C',
      'GSL tutorial C numerical methods',
      'GSL BLAS matrix example',
    ],
  },
  'linux-threads-sync': {
    title: 'الخيوط والتزامن على Linux: pthreads و mutex و atomics',
    level: 'متقدم',
    category: 'اللغات والأنظمة',
    summary:
      'بعد العمليات والملفات تأتي طبقة التزامن داخل user space: خيوط، ذاكرة مشتركة، أقفال، condition variables، وatomics. هذا الباب يشرحها من زاوية عملية حتى لا يتحول التزامن إلى أخطاء متقطعة يصعب إعادة إنتاجها.',
    learn: [
      'افهم lifecycle الخيط thread وما الذي تشاركه الخيوط داخل العملية وما الذي يبقى محليًا لكل واحدة.',
      'استخدم mutex وcondition variable عندما تحتاج تنسيقًا واضحًا، ولا تقفز إلى atomics قبل فهم المشكلة التي تحلها.',
      'انتبه إلى race conditions وdeadlocks وdata races، ودرّب نفسك على تبسيط التصميم قبل زيادة الأقفال.',
      'اربط بين التزامن والأدوات: القياس، التسجيل، والاختبارات الصغيرة التي تعيد الخطأ بدل انتظار ظهوره صدفة.',
    ],
    build: [
      'ابنِ worker pool صغيرة في C أو C++ تعالج queue مهام بسيطة مع إيقاف نظيف وإشارات واضحة لبداية ونهاية كل مهمة.',
      'نفّذ مثالًا متعمدًا على race condition ثم أصلحه باستخدام mutex أو atomic واحد فقط، ودوّن لماذا اخترت هذا الحل.',
    ],
    note2026:
      'كثير من مشاكل الأداء أو الانهيار في أدوات Linux والخدمات المحلية لا تأتي من “ضعف اللغة”، بل من تزامن غير منضبط يصعب تشخيصه بعد أن يكبر البرنامج.',
    resources: [
      { label: 'pthreads(7)', url: docs.manPthreads },
      { label: 'OSTEP', url: docs.ostep },
      { label: 'cppreference C++', url: docs.cppreferenceCpp },
    ],
    tags: ['Linux', 'Threads', 'pthreads', 'Mutex', 'Atomics', 'Concurrency'],
    searchKeywords: [
      'linux pthread mutex tutorial',
      'race condition pthreads example',
      'condition variable basics linux',
      'atomics vs mutex practical',
    ],
  },
  'linux-sockets-epoll': {
    title: 'Sockets و epoll على Linux: خادم I/O عملي',
    level: '2026',
    category: 'اللغات والأنظمة',
    summary:
      'إذا أردت أدوات شبكة أو خوادم حقيقية على Linux، فستحتاج إلى sockets وnon-blocking I/O وepoll. هذا الباب يربط بين برمجة الشبكات وبيئة Linux اليومية دون الدخول في تعقيد إطار كامل من البداية.',
    learn: [
      'افهم socket وbind وlisten وaccept وconnect كواجهة أساسية لأي خادم أو عميل شبكي منخفض المستوى.',
      'تعلّم متى يكفيك نموذج thread-per-connection ومتى تحتاج non-blocking I/O أو event loop يعتمد على epoll.',
      'راقب file descriptors والأخطاء الشبكية والtimeouts لأن الخادم الجيد يحتاج تشخيصًا بقدر حاجته إلى منطق التطبيق.',
      'اربط بين sockets وLinux tools مثل ss وstrace وlogs حتى تستطيع رؤية ما يحدث خارج الكود نفسه.',
    ],
    build: [
      'ابنِ echo server أو chat server صغيرًا باستخدام sockets فقط، ثم أضف نسخة ثانية تستخدم epoll لمتابعة اتصالات متعددة بهدوء.',
      'قارن بين خادم blocking بسيط وخادم non-blocking من حيث الكود والتصرف تحت أكثر من عميل متزامن.',
    ],
    note2026:
      'هذا الباب من أكثر الأبواب التي ترفع فهمك للخدمات الخلفية والـruntime والأنظمة معًا، لأنك ترى الشبكة والملفات والأخطاء والتزامن في مكان واحد.',
    resources: [
      { label: 'socket(2)', url: docs.manSocket },
      { label: 'epoll(7)', url: docs.manEpoll },
      { label: 'man7 Linux man pages', url: docs.man7 },
    ],
    tags: ['Linux', 'Sockets', 'epoll', 'Networking', 'Servers'],
    searchKeywords: [
      'linux socket epoll tutorial',
      'non blocking server epoll C',
      'socket accept bind listen explained',
      'linux echo server epoll example',
    ],
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
  'cpp-math-geometry': {
    title: 'رياضيات C++: المتجهات، المصفوفات، والهندسة العملية',
    level: 'متقدم',
    category: 'اللغات والأنظمة',
    summary:
      'إذا دخلت C++ في الألعاب أو الرندر أو المحاكاة أو الأدوات الهندسية، فستحتاج إلى جبر خطي عملي لا نظري فقط: vectors, matrices, transforms, quaternions, precision, and data layout. هذا الباب يربط الرياضيات بما ستكتبه فعلًا في الكود.',
    learn: [
      'افهم vectors وmatrices وaffine transforms وquaternions من زاوية ما الذي تحله في الكاميرا والحركة والتصادم، لا من زاوية حفظ الصيغ فقط.',
      'تعلّم متى تستخدم مكتبة جاهزة مثل Eigen للجبر الخطي والهندسة بدل كتابة كل شيء يدويًا، ومتى يكفيك struct بسيط لمشروع صغير أو مسألة محدودة.',
      'انتبه إلى precision والـlayout وحركة البيانات لأن الرياضيات في C++ ترتبط بالأداء والذاكرة بقدر ارتباطها بالمعادلات.',
    ],
    build: [
      'ابنِ demo صغيرة تحسب سلسلة world-view-projection أو transform hierarchy لكائنات 2D/3D ثم اختبرها بحالات واضحة وسهلة التتبع.',
      'استخدم Eigen لحل مسألة جبر خطي أو تحويلات هندسية صغيرة، ثم قارن بين الوضوح والموثوقية وبين تنفيذ يدوي مبسط.',
    ],
    note2026:
      'في C++ تحديدًا، قيمة الرياضيات تظهر عندما تتجنب الأخطاء الصامتة: اتجاهات مقلوبة، مسافات غير صحيحة، precision سيئة، أو نسخ غير ضرورية في البيانات.',
    resources: [
      { label: 'Eigen Getting Started', url: docs.eigenGettingStarted },
      { label: 'Eigen Geometry Tutorial', url: docs.eigenGeometry },
      { label: 'SDL Wiki', url: docs.sdl },
      { label: 'Godot Math Docs', url: docs.godotMath },
    ],
    tags: ['C++', 'Linear Algebra', 'Geometry', 'Transforms', 'Eigen'],
    searchKeywords: [
      'C++ linear algebra for game engines',
      'Eigen geometry transform tutorial',
      'C++ vectors matrices quaternions basics',
    ],
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
      { label: 'Python Standard Library', url: docs.pythonLibrary },
      { label: 'NumPy Quickstart', url: docs.numpyQuickstart },
      { label: 'SciPy Tutorial', url: docs.scipyTutorial },
    ],
    tags: ['Python', 'Engineering', 'Automation', 'Services', 'Math'],
    searchKeywords: ['python engineering roadmap', 'python project structure', 'python async service basics', 'python math numpy scipy roadmap'],
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
      { label: 'Python Packaging User Guide', url: docs.pythonPackaging },
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
      { label: 'Python Typing Docs', url: docs.pythonTyping },
      { label: 'Pytest Docs', url: docs.pytest },
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
      { label: 'asyncio Docs', url: docs.pythonAsyncio },
      { label: 'FastAPI Docs', url: docs.fastapi },
    ],
    tags: ['Python', 'Async', 'Services', 'I/O'],
    searchKeywords: ['python async await explained', 'fastapi async basics', 'python background jobs'],
  },
  'python-math-computing': {
    title: 'رياضيات Python: math و NumPy و SciPy بوعي عملي',
    level: 'متقدم',
    category: 'اللغات والأنظمة',
    summary:
      'Python ممتازة عندما تحتاج كتابة رياضيات واضحة بسرعة: من math وcmath وdecimal للمسائل الدقيقة، إلى NumPy للجبر الخطي والمصفوفات، ثم SciPy للتكامل والتحسين والخوارزميات العددية. الفكرة هنا أن تختار المستوى المناسب من الأدوات بدل القفز مباشرة إلى مكتبة ضخمة أو إعادة اختراع كل شيء يدويًا.',
    learn: [
      'ابدأ من math وcmath وdecimal وfractions قبل القفز إلى مكتبات أكبر، حتى تفهم نوع المسألة ونوع الأعداد الذي تحتاجه فعلًا.',
      'استخدم NumPy عندما تصبح بياناتك متجهات أو مصفوفات أو عمليات عددية جماعية، ولا تتعامل معه كقائمة Python كبيرة فقط.',
      'انتقل إلى SciPy عندما تدخل في integration أو optimization أو linear algebra الجدي بدل إعادة كتابة خوارزميات عددية حساسة بنفسك.',
      'إذا كان هدفك الألعاب أو المحاكاة أو الرسوم، فاحرص على ربط الرياضيات بالتوقيت والـvectors والتجارب الصغيرة بدل الدراسة المجردة فقط.',
    ],
    build: [
      'ابنِ mini lab في Python يحل مسألة واحدة بثلاث طبقات: math فقط، ثم NumPy، ثم SciPy أو أداة عددية أعلى، وقارن الوضوح والدقة.',
      'نفّذ vector simulation أو curve fitting أو مسألة تحسين صغيرة، ثم اشرح لماذا كانت الأداة التي اخترتها مناسبة لهذه الدرجة من التعقيد.',
    ],
    note2026:
      'ميزة Python هنا ليست “أنها أسهل فقط”، بل أنها تسمح لك بتجريب أفكار رياضية أو عددية بسرعة ثم نقلها لاحقًا إلى بيئة أسرع عندما تحتاج ذلك.',
    resources: [
      { label: 'Python math', url: docs.pythonMath },
      { label: 'Python cmath', url: docs.pythonCmath },
      { label: 'Python decimal', url: docs.pythonDecimal },
      { label: 'NumPy Linear Algebra', url: docs.numpyLinalg },
      { label: 'SciPy Integrate Tutorial', url: docs.scipyIntegrate },
      { label: 'SciPy Optimize Tutorial', url: docs.scipyOptimize },
    ],
    tags: ['Python', 'Math', 'NumPy', 'SciPy', 'Numerics'],
    searchKeywords: [
      'python math numpy scipy roadmap',
      'numpy linear algebra basics',
      'scipy integrate optimize tutorial',
      'python decimal vs float practical',
    ],
  },
  'python-tooling-quality': {
    title: 'pyproject وRuff وMypy وتنظيم أدوات Python',
    level: 'متقدم',
    category: 'اللغات والأنظمة',
    summary:
      'عندما يكبر مشروع Python، لا يكفي وجود كود “يعمل”. تحتاج نقطة دخول واضحة للأدوات، تنسيقًا موحدًا، فحص أنواع تدريجيًا، وتشغيلًا يسهل على بقية الفريق فهمه. هذا الباب يجمع هذه الطبقة الهندسية في مكان واحد.',
    learn: [
      'استخدم pyproject.toml كنقطة تجمع للإعدادات كلما كان ذلك منطقيًا، بدل نشر الإعدادات في ملفات كثيرة بلا سبب.',
      'شغّل Ruff للتنسيق أو الفحص السريع، ثم أدخل Mypy تدريجيًا في الأجزاء التي تستفيد فعلًا من وضوح الأنواع.',
      'وحّد أوامر الفريق الشائعة: lint، test، run، build، حتى لا يصبح المشروع معرفة ضمنية داخل رأس شخص واحد.',
      'تعامل مع الأدوات كوسيلة لتحسين القراءة والثقة في التغيير، لا كعقوبات شكلية على كل سطر.',
    ],
    build: [
      'حوّل مشروع Python صغيرًا إلى pyproject واضح، وأضف Ruff وMypy وأمر اختبار واحد ثم وثق كيف يشغله شخص جديد خلال خمس دقائق.',
      'اختر ملفين أو ثلاثة فقط وطبّق عليهما typing أدق، ثم قارن وضوح الأخطاء قبل وبعد إدخال الفحص.',
    ],
    note2026:
      'في 2026 الفرق التي تبني Python بسرعة تحتاج طبقة أدوات أخف لكنها منضبطة، لأن سرعة التعديل مع AI أو السكربتات الكثيرة قد تولد فوضى أسرع من الماضي.',
    resources: [
      { label: 'Packaging Python Projects', url: docs.pythonPackagingProjects },
      { label: 'Mypy Getting Started', url: docs.mypyGettingStarted },
      { label: 'Ruff Tutorial', url: docs.ruffTutorial },
    ],
    tags: ['Python', 'pyproject', 'Ruff', 'Mypy', 'Tooling', 'Quality'],
    searchKeywords: [
      'pyproject ruff mypy tutorial',
      'python tooling setup 2026',
      'mypy getting started project',
      'ruff tutorial python project',
    ],
  },
  'python-profiling-bindings': {
    title: 'قياس الأداء وربط Python مع C و C++',
    level: '2026',
    category: 'اللغات والأنظمة',
    summary:
      'أحيانًا لا تحتاج مغادرة Python بالكامل؛ تحتاج فقط أن تعرف أين البطء، ثم تقرر هل يكفي تحسين الكود نفسه أم يجب نقل جزء محدود إلى C أو C++ أو مكتبة أصلية. هذا الباب يربط بين القياس profiling وبين الحدود العملية للـbindings.',
    learn: [
      'استخدم cProfile أو أدوات قريبة أولًا لتحديد أين يضيع الوقت فعلًا، بدل افتراض أن المشكلة في اللغة كلها.',
      'ميّز بين بطء Python بسبب الخوارزمية أو I/O أو كثرة الكائنات الصغيرة أو الحلقة الساخنة hot path.',
      'افهم متى يكفيك NumPy أو stdlib، ومتى يصبح من المنطقي كتابة binding عبر pybind11 أو استخدام امتداد أصلي صغير.',
      'حافظ على واجهة Python واضحة حتى لو نقلت جزءًا من الحساب أو المعالجة إلى C أو C++، لأن مكسب الأداء لا يستحق API مربكة أو صيانة مؤلمة.',
    ],
    build: [
      'خذ سكربت Python بطيئًا نسبيًا، ثم قِسه بـ cProfile وحدد دالة واحدة فقط لتحسينها أو إعادة كتابتها بطريقة أوضح.',
      'نفّذ binding بسيطة جدًا عبر pybind11 لدالة حسابية أو تحويل بيانات، ثم قارن المكسب والتكلفة المعرفية بصدق.',
    ],
    note2026:
      'النضج في Python ليس أن تقول “Python بطيئة” بسرعة، بل أن تعرف أين تختنق، وما أصغر تدخل يعطي أثرًا حقيقيًا دون تهديم بساطة المشروع.',
    resources: [
      { label: 'Python profile and cProfile', url: docs.pythonProfile },
      { label: 'pybind11 Basics', url: docs.pybind11Basics },
      { label: 'NumPy Quickstart', url: docs.numpyQuickstart },
    ],
    tags: ['Python', 'Profiling', 'cProfile', 'pybind11', 'Performance'],
    searchKeywords: [
      'python cprofile tutorial practical',
      'pybind11 basics example',
      'python performance profiling roadmap',
      'python C++ binding small example',
    ],
  },
  'web-game-math-rendering': {
    title: 'رياضيات الألعاب على الويب: Canvas و WebGL والتوقيت',
    level: 'عملي',
    category: 'الألعاب',
    summary:
      'إذا بنيت لعبة أو محاكاة على الويب، فستحتاج نفس جوهر الرياضيات الموجود في الألعاب عمومًا لكن بخصائص منصة الويب: screen coordinates, vectors, transforms, timing, interpolation، ثم matrices وprojection عندما تدخل WebGL أو ثلاثي الأبعاد.',
    learn: [
      'افهم نظام الإحداثيات داخل canvas، والتحويلات الأساسية، وحساب السرعة والموقع باستخدام delta time بدل الاعتماد على التخمين البصري.',
      'استخدم vectors وinterpolation وbounding boxes في ألعاب 2D على الويب قبل القفز إلى رسوميات ثلاثية الأبعاد أو محاكاة أثقل.',
      'عندما تدخل WebGL أو WebGPU لاحقًا، ستحتاج matrices وprojection وcamera spaces وshader thinking بشكل أوضح من ألعاب DOM أو canvas البسيطة.',
      'إذا أردت تشغيل كود C أو C++ على الويب، فافهم من البداية أن Emscripten ليس فقط أداة build، بل جسر لقيود مختلفة في التوقيت والرسم والتعامل مع المنصة.',
    ],
    build: [
      'ابنِ لعبة 2D صغيرة على canvas فيها حركة وتصادمات وتوقيت واضح، ثم دوّن أين استخدمت الرياضيات فعليًا بدل وصفها نظريًا.',
      'أنشئ demo WebGL أو rendering simple prototype يوضح camera transform أو projection واحدًا بوضوح، أو جرّب نقل جزء صغير من مشروع C/C++ إلى الويب عبر Emscripten.',
    ],
    note2026:
      'هذا الباب مهم جدًا لأن كثيرًا من مطوري الويب يدخلون الألعاب أو الرسوميات من باب JavaScript أولًا، بينما المشكلات الحقيقية التي تظهر لهم تكون رياضية وتوقيتية قبل أن تكون “framework problems”.',
    resources: [
      { label: 'MDN Games', url: docs.mdnGames },
      { label: 'Canvas Tutorial', url: docs.mdnCanvas },
      { label: 'MDN WebGL Tutorial', url: docs.mdnWebgl },
      { label: 'Emscripten Porting', url: docs.emscriptenPorting },
    ],
    tags: ['Web Games', 'Canvas', 'WebGL', 'Timing', 'Transforms'],
    searchKeywords: [
      'canvas game math delta time',
      'webgl projection matrix basics',
      'browser game collision vectors',
      'emscripten game porting web',
    ],
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
  'resource-atlas': {
    title: 'أطلس المصادر لمسارات خارج الخريطة',
    level: '2026',
    category: 'المراجع',
    summary:
      'هذا باب مرجعي فقط لمسارات لم تدخل الخريطة الأساسية بعد. هدفه أن يسهّل عليك العثور على نقطة بداية رسمية لمسار آخر، لا أن يستبدل المسارات المفصلة داخل الخريطة.',
    learn: [
      'ابدأ من الصفحة التعريفية الرسمية أو الدليل التمهيدي، ثم اختر أداة واحدة فقط للتجربة العملية الأولى.',
      'لا تفتح كل الروابط دفعة واحدة؛ حدد مسارًا واحدًا من الأطلس ثم ابنِ له خطة قراءة وتجربة قصيرة.',
      'إذا وجدت أن مسارًا من الأطلس أصبح مهمًا لمشروعك فعليًا، فهذه إشارة جيدة لإضافته لاحقًا إلى الخريطة الأساسية.',
    ],
    build: [
      'اختر بابًا واحدًا من أطلس المصادر، ثم ابنِ خطة 10 أيام فيها مصدر رسمي واحد ومصدر تمهيدي وتجربة صغيرة واحدة فقط.',
    ],
    note2026:
      'الإبقاء على هذه الأبواب في أطلس مستقل يحافظ على الخريطة الأساسية واضحة، لكنه يمنحك طريقًا مرتبًا لاكتشاف مسارات أخرى عند الحاجة. أقوى المرشحين للتحويل لاحقًا إلى مسارات كاملة ما زالوا: هندسة البيانات، الأمن البحثي، والموبايل الأصلي.',
    resources: [
      { label: 'GitHub Skills', url: docs.githubSkills },
      { label: 'MIT OpenCourseWare', url: docs.mitOcw },
      { label: 'MDN Web Docs', url: docs.mdn },
      { label: 'Microsoft Learn', url: docs.microsoftLearn },
    ],
    tags: ['Resource Atlas', 'References', 'Exploration', 'Learning Paths'],
    searchKeywords: ['resource atlas programming paths', 'official docs learning map', 'extra paths references'],
  },
  'mobile-native-resource-atlas': {
    title: 'مراجع الموبايل الأصلي: Android و iOS وFlutter وReact Native',
    level: 'عملي',
    category: 'دليل المصادر',
    summary:
      'مرجع سريع لاختيار طريق موبايل واحد والبدء من وثائقه الرسمية بدل التشتت بين عشرات المقارنات.',
    learn: [
      'قارن بين native mobile وبين cross-platform من زاوية الفريق والأداء وسرعة البناء والصيانة.',
      'ابدأ بإطار واحد فقط أو منصة واحدة فقط، لأن التشتت هنا أسرع من الاستفادة.',
      'ابحث عن الدروس التي تنتهي بتطبيق صغير حقيقي: تنقل، حالة، استهلاك API، وبناء نسخة تشغيلية.',
    ],
    build: [
      'اختر منصة واحدة من هذه المراجع وأنهِ tutorial رسميًا صغيرًا مع شاشة قائمة وتفاصيل واستهلاك API بسيط.',
    ],
    resources: [
      { label: 'Android Developers Guide', url: docs.androidGuide },
      { label: 'Jetpack Compose', url: docs.jetpackCompose },
      { label: 'Apple Developer Documentation', url: docs.appleDeveloperDocs },
      { label: 'SwiftUI Tutorials', url: docs.swiftuiTutorial },
      { label: 'Flutter Get Started', url: docs.flutter },
      { label: 'Expo Docs', url: docs.expoDocs },
      { label: 'React Native Docs', url: docs.reactNative },
    ],
    tags: ['Mobile', 'Android', 'iOS', 'Flutter', 'React Native'],
    searchKeywords: ['android ios flutter react native official docs', 'mobile roadmap resources'],
  },
  'security-research-resource-atlas': {
    title: 'مراجع الأمن والاختبار الأمني',
    level: 'متقدم',
    category: 'دليل المصادر',
    summary:
      'مرجع ابتدائي لمسارات AppSec وWeb Security والاختبار الأمني بالمراجع الرسمية والمختبرات التعليمية.',
    learn: [
      'ابدأ بفهم الأخطار والأنماط الشائعة، ثم انتقل إلى تدريب عملي موجّه بدل قراءة قوائم طويلة بلا تطبيق.',
      'اجعل هدفك الأول معرفة كيف تُكتشف الثغرة وتُشرح وتُخفف، لا مجرد حفظ أسماء الهجمات.',
      'التدرج مهم جدًا هنا لأن المجال واسع وحسّاس، والممارسة العشوائية قد تبني فهمًا مشوشًا.',
    ],
    build: [
      'أنهِ مختبرًا تعليميًا واحدًا في Web Security، ثم وثق الثغرة وأثرها وطريقة إصلاحها بلغة بسيطة وواضحة.',
    ],
    resources: [
      { label: 'OWASP Top 10', url: docs.owasp },
      { label: 'OWASP Cheat Sheet Series', url: docs.owaspCheatsheets },
      { label: 'OWASP Web Security Testing Guide', url: docs.owaspWstg },
      { label: 'PortSwigger Web Security Academy', url: docs.portswiggerWebSecurity },
      { label: 'Burp Suite Documentation', url: docs.burpDocs },
      { label: 'MITRE ATT&CK', url: docs.mitreAttack },
    ],
    tags: ['Security', 'AppSec', 'Web Security', 'Learning Resources'],
    searchKeywords: ['owasp web security academy roadmap', 'appsec resources official'],
  },
  'desktop-apps-resource-atlas': {
    title: 'مراجع تطبيقات سطح المكتب: Electron وTauri وQt و.NET MAUI',
    level: 'عملي',
    category: 'دليل المصادر',
    summary:
      'باب مرجعي سريع لمسارات تطبيقات سطح المكتب التي لم تُفصل بعد داخل الخريطة.',
    learn: [
      'قارن بين desktop المبني على تقنيات الويب وبين toolkits الأصلية من زاوية الأداء والحجم والتوزيع وصيانة الفريق.',
      'ابدأ بإطار واحد فقط، ثم ابنِ نافذة بسيطة وقائمة إعدادات وتكاملًا صغيرًا مع ملفات النظام أو طلب HTTP.',
      'انتبه مبكرًا لطريقة packaging والتحديث والتوقيع لأن هذه النقاط تغيّر قرارك أكثر مما يبدو في البداية.',
    ],
    build: [
      'ابنِ تطبيق سطح مكتب صغيرًا فيه نافذة رئيسية وإعدادات وقراءة ملف محلي أو طلب HTTP واحد فقط، ثم جرّب إخراج نسخة تشغيلية.',
    ],
    resources: [
      { label: 'Electron Docs', url: docs.electronDocs },
      { label: 'Tauri Docs', url: docs.tauriDocs },
      { label: 'Qt Documentation', url: docs.qtDocs },
      { label: '.NET MAUI Docs', url: docs.dotnetMaui },
    ],
    tags: ['Desktop', 'Electron', 'Tauri', 'Qt', '.NET MAUI'],
    searchKeywords: ['desktop app electron tauri qt maui official docs', 'desktop roadmap resources'],
  },
  'data-engineering-resource-atlas': {
    title: 'مراجع هندسة البيانات والتحليلات',
    level: 'متقدم',
    category: 'دليل المصادر',
    summary:
      'مرجع عملي لمسار هندسة البيانات عندما تريد نقطة بداية واضحة في orchestration والتحويل والتحليل وخطوط البيانات.',
    learn: [
      'افهم أن هندسة البيانات ليست مكتبة واحدة، بل تدفق عمل: ingest ثم transform ثم orchestration ثم serving أو analytics.',
      'ابدأ بأداة واحدة للأوركسترا وأداة واحدة للتحويل أو التحليل قبل مقارنة عشر أدوات دفعة واحدة.',
      'اختر مشروعًا صغيرًا مثل pipeline تقارير أو مزامنة بيانات حتى ترى القيمة العملية للمراجع.',
    ],
    build: [
      'ابنِ pipeline صغيرة من ملف CSV أو API إلى طبقة تحويل ثم تقرير أو استعلام تحليلي نهائي باستخدام أداة واحدة فقط من هذه المراجع.',
    ],
    resources: [
      { label: 'Apache Airflow Docs', url: docs.airflowDocs },
      { label: 'dbt Introduction', url: docs.dbtIntro },
      { label: 'DuckDB Docs', url: docs.duckdbDocs },
      { label: 'Apache Spark Docs', url: docs.sparkDocs },
      { label: 'Apache Kafka Documentation', url: docs.kafkaDocs },
      { label: 'Trino Docs', url: docs.trinoDocs },
    ],
    tags: ['Data Engineering', 'Airflow', 'dbt', 'DuckDB', 'Spark'],
    searchKeywords: ['data engineering official docs airflow dbt duckdb spark'],
  },
  'embedded-robotics-resource-atlas': {
    title: 'مراجع الأنظمة المضمنة والروبوتات',
    level: 'متقدم',
    category: 'دليل المصادر',
    summary:
      'مرجع يجمع بدايات رسمية لمسارات embedded وrobotics بدون الاعتماد على شروحات متفرقة منزوعة السياق.',
    learn: [
      'ابدأ بمتحكم أو بيئة واحدة فقط حتى تفهم دورة التطوير من البناء إلى الرفع والتجريب.',
      'إذا دخلت robotics، فتعامل مع ROS كمنصة عمل تحتاج مشروعًا صغيرًا واضحًا، لا كمية هائلة من المصطلحات أولًا.',
      'أبقِ التركيز على input/output والحساسات والمحركات وسير العمل التشغيلي قبل التعمق في النظريات الأعرض.',
    ],
    build: [
      'أنهِ مشروعًا صغيرًا يقرأ حساسًا أو يشغّل actuator بسيطًا، أو prototype ROS صغيرًا يمرر رسالة واضحة بين عقدتين.',
    ],
    resources: [
      { label: 'Arduino Docs', url: docs.arduinoDocs },
      { label: 'PlatformIO Docs', url: docs.platformio },
      { label: 'ROS 2 Docs', url: docs.rosDocs },
      { label: 'Zephyr Project Docs', url: docs.zephyrDocs },
      { label: 'MicroPython Docs', url: docs.microPythonDocs },
    ],
    tags: ['Embedded', 'Robotics', 'Arduino', 'ROS', 'PlatformIO'],
    searchKeywords: ['embedded robotics resources arduino ros platformio'],
  },
  'compiler-tools-resource-atlas': {
    title: 'مراجع المترجمات وأدوات اللغات',
    level: '2026',
    category: 'دليل المصادر',
    summary:
      'مرجع مختصر لمسار compilers وlanguage tooling عندما تريد بداية واضحة في parsing وAST والتحليل وبناء الأدوات.',
    learn: [
      'ابدأ بمشروع parser أو syntax tree صغير قبل الغوص في backend كامل للمترجم أو optimizer ثقيل.',
      'قسّم المجال في ذهنك إلى parsing وAST وanalysis وcode generation بدل اعتباره كتلة واحدة غامضة.',
      'استخدم المراجع الرسمية لتفهم الأدوات والبيئات، ثم ابنِ toy project يثبت المفهوم.',
    ],
    build: [
      'ابنِ parser أو highlighter أو linter مصغرًا جدًا لجزء من لغة تعرفها، ثم اربطه بمصدر واحد رسمي من هذه القائمة.',
    ],
    resources: [
      { label: 'LLVM Documentation', url: docs.llvmDocs },
      { label: 'LLVM Tutorial', url: docs.llvmTutorial },
      { label: 'Tree-sitter Documentation', url: docs.treeSitter },
      { label: 'Nand2Tetris', url: docs.nand2tetris },
      { label: 'Crafting Interpreters', url: docs.craftingInterpreters },
      { label: 'ANTLR', url: docs.antlrDocs },
    ],
    tags: ['Compilers', 'Language Tooling', 'LLVM', 'Tree-sitter', 'Parsing'],
    searchKeywords: ['compiler tooling resources llvm tree sitter nand2tetris'],
  },
} satisfies Record<string, TopicInput>;
