import type { ResourceLink, TopicDetail, TopicLinkHints } from './roadmap-model';

export const curatedTopicLinks: Record<string, TopicLinkHints> = {
  'systems-native': {
    before: ['computer-science', 'operating-systems'],
    next: ['systems-programming-specialist', 'embedded-linux-specialist'],
    alternatives: ['python-engineering', 'game-development'],
  },
  'python-engineering': {
    before: ['core-programming', 'developer-workflow'],
    next: ['python-engineering-specialist', 'backend-specialist'],
    alternatives: ['backend-data', 'data-ai-specialist'],
  },
  'frontend-specialist': {
    before: ['frontend-web', 'developer-workflow'],
    next: ['portfolio-proof-of-work', 'writing-teaching-communication'],
    alternatives: ['product-engineering-specialist', 'mobile-specialist'],
  },
  'browser-storage-offline': {
    before: ['routing-state-fetching', 'frontend-framework'],
    next: ['frontend-testing-quality', 'frontend-specialist'],
    alternatives: ['mobile-native-resource-atlas', 'network-edge-delivery'],
  },
  'frontend-testing-quality': {
    before: ['frontend-framework', 'testing-strategy'],
    next: ['frontend-specialist', 'product-engineering-specialist'],
    alternatives: ['accessibility-performance', 'testing-strategy'],
  },
  'canvas-webgpu-interactive': {
    before: ['javascript-typescript', 'browser-rendering-dom'],
    next: ['web-game-math-rendering', 'game-development'],
    alternatives: ['graphics-low-level', 'frontend-specialist'],
  },
  'backend-specialist': {
    before: ['backend-data', 'architecture-systems'],
    next: ['portfolio-proof-of-work', 'platform-specialist'],
    alternatives: ['product-engineering-specialist', 'python-engineering-specialist'],
  },
  'mobile-specialist': {
    before: ['frontend-web', 'developer-workflow'],
    next: ['portfolio-proof-of-work', 'product-engineering-specialist'],
    alternatives: ['frontend-specialist', 'backend-specialist'],
  },
  'game-specialist': {
    before: ['game-development', 'cpp-modern-core'],
    next: ['portfolio-proof-of-work', 'cpp-performance-specialist'],
    alternatives: ['systems-programming-specialist', 'product-engineering-specialist'],
  },
  'product-engineering-specialist': {
    before: ['frontend-web', 'backend-data'],
    next: ['portfolio-proof-of-work', 'leadership-systems-thinking'],
    alternatives: ['frontend-specialist', 'backend-specialist'],
  },
  'systems-programming-specialist': {
    before: ['systems-native', 'computer-science'],
    next: ['portfolio-proof-of-work', 'research-open-source-specialist'],
    alternatives: ['embedded-linux-specialist', 'cpp-performance-specialist'],
  },
  'linux-libc-linking': {
    before: ['c-linux-systems', 'c-toolchain-debugging'],
    next: ['linux-kernel-uapi-modules', 'cpp-linux-build'],
    alternatives: ['linux-math-libraries', 'cpp-linux-build'],
  },
  'linux-tracing-profiling': {
    before: ['c-toolchain-debugging', 'c-linux-systems'],
    next: ['linux-libc-linking', 'systems-programming-specialist'],
    alternatives: ['performance-capacity', 'cpp-performance-specialist'],
  },
  'linux-kernel-uapi-modules': {
    before: ['linux-libc-linking', 'c-linux-systems'],
    next: ['systems-programming-specialist', 'embedded-linux-specialist'],
    alternatives: ['cpp-linux-build', 'linux-math-libraries'],
  },
  'linux-math-libraries': {
    before: ['linux-libc-linking', 'cpp-linux-build'],
    next: ['cpp-performance-specialist', 'systems-programming-specialist'],
    alternatives: ['cpp-performance-concurrency', 'python-engineering'],
  },
  'linux-threads-sync': {
    before: ['c-linux-systems', 'concurrency-runtime'],
    next: ['linux-sockets-epoll', 'systems-programming-specialist'],
    alternatives: ['cpp-performance-concurrency', 'python-async-services'],
  },
  'linux-sockets-epoll': {
    before: ['linux-threads-sync', 'linux-networking'],
    next: ['systems-programming-specialist', 'backend-data'],
    alternatives: ['background-jobs-integrations', 'cpp-linux-build'],
  },
  'cpp-math-geometry': {
    before: ['cpp-modern-core', 'game-math-physics'],
    next: ['cpp-linux-build', 'graphics-low-level'],
    alternatives: ['linux-math-libraries', 'engine-math-foundations'],
  },
  'python-math-computing': {
    before: ['python-language-core-deep', 'problem-solving'],
    next: ['python-engineering-specialist', 'data-ai-specialist'],
    alternatives: ['linux-math-libraries', 'web-game-math-rendering'],
  },
  'python-tooling-quality': {
    before: ['python-packaging-venvs', 'python-typing-testing'],
    next: ['python-async-services', 'python-profiling-bindings'],
    alternatives: ['developer-workflow', 'quality-security'],
  },
  'python-profiling-bindings': {
    before: ['python-tooling-quality', 'python-math-computing'],
    next: ['python-engineering-specialist', 'systems-native'],
    alternatives: ['cpp-linux-build', 'data-ai-specialist'],
  },
  'web-game-math-rendering': {
    before: ['javascript-typescript', 'game-dev-basics'],
    next: ['game-math-physics', 'graphics-low-level'],
    alternatives: ['unity-unreal-godot', 'python-math-computing'],
  },
  'engine-math-foundations': {
    before: ['game-math-physics', 'game-dev-basics'],
    next: ['engine-architecture', 'graphics-low-level'],
    alternatives: ['cpp-math-geometry', 'web-game-math-rendering'],
  },
  'ecs-game-architecture': {
    before: ['engine-architecture', 'game-dev-basics'],
    next: ['graphics-low-level', 'build-your-own-engine'],
    alternatives: ['monolith-modular', 'game-tools-assets'],
  },
  'game-shaders-materials': {
    before: ['web-game-math-rendering', 'graphics-low-level'],
    next: ['game-profiling-optimization', 'game-specialist'],
    alternatives: ['engine-math-foundations', 'build-your-own-engine'],
  },
  'database-indexes-explain': {
    before: ['sql-modeling', 'transactions-consistency'],
    next: ['backend-queues-webhooks', 'backend-specialist'],
    alternatives: ['performance-capacity', 'database-internals'],
  },
  'architectural-failure-modes': {
    before: ['services-events', 'scalability-resilience'],
    next: ['observability', 'platform-specialist'],
    alternatives: ['ops-runbooks-costs', 'performance-capacity'],
  },
  'fuzzing-incident-response': {
    before: ['testing-strategy', 'secure-coding-review'],
    next: ['platform-specialist', 'research-open-source-specialist'],
    alternatives: ['owasp-appsec', 'threat-modeling-privacy'],
  },
  'virtual-memory-filesystems': {
    before: ['computer-architecture', 'operating-systems'],
    next: ['systems-native', 'database-internals'],
    alternatives: ['linux-libc-linking', 'c-linux-systems'],
  },
  'backend-queues-webhooks': {
    before: ['background-jobs-integrations', 'services-events'],
    next: ['backend-specialist', 'platform-specialist'],
    alternatives: ['caching-queues-search', 'ops-runbooks-costs'],
  },
  'systemd-service-operations': {
    before: ['linux-networking', 'docker-compose'],
    next: ['ci-cd-iac', 'platform-specialist'],
    alternatives: ['ops-runbooks-costs', 'systems-native'],
  },
  'reverse-proxy-tls-dns': {
    before: ['cloud-fundamentals', 'linux-networking'],
    next: ['ops-runbooks-costs', 'platform-specialist'],
    alternatives: ['network-edge-delivery', 'backend-frameworks-deployment'],
  },
  'resource-atlas': {
    before: ['specialization', 'mastery-growth'],
    next: ['portfolio-proof-of-work', 'lifelong-learning-research'],
    alternatives: ['frontend-specialist', 'research-open-source-specialist'],
  },
  'python-engineering-specialist': {
    before: ['python-engineering', 'backend-data'],
    next: ['portfolio-proof-of-work', 'product-engineering-specialist'],
    alternatives: ['backend-specialist', 'data-ai-specialist'],
  },
  'data-ai-specialist': {
    before: ['python-engineering', 'ai-engineering'],
    next: ['portfolio-proof-of-work', 'research-open-source-specialist'],
    alternatives: ['python-engineering-specialist', 'backend-specialist'],
  },
  'platform-specialist': {
    before: ['cloud-platform', 'quality-security'],
    next: ['portfolio-proof-of-work', 'leadership-systems-thinking'],
    alternatives: ['backend-specialist', 'systems-programming-specialist'],
  },
  'research-open-source-specialist': {
    before: ['computer-science', 'writing-teaching-communication'],
    next: ['lifelong-learning-research', 'portfolio-proof-of-work'],
    alternatives: ['systems-programming-specialist', 'data-ai-specialist'],
  },
  'embedded-linux-specialist': {
    before: ['systems-native', 'linux-networking'],
    next: ['portfolio-proof-of-work', 'research-open-source-specialist'],
    alternatives: ['systems-programming-specialist', 'cpp-performance-specialist'],
  },
  'cpp-performance-specialist': {
    before: ['systems-native', 'game-development'],
    next: ['portfolio-proof-of-work', 'research-open-source-specialist'],
    alternatives: ['systems-programming-specialist', 'game-specialist'],
  },
};

export const projectIdeasByTopicId: Record<string, string[]> = {
  'systems-native': [
    'ابنِ mini shell بسيط يدعم أوامر أساسية وعمليات فرعية ثم وثّق كيف يعمل fork وexec لديك.',
    'ابنِ أداة فهرسة ملفات CLI في C أو C++ مع تحليل أداء بسيط وقرارات واضحة حول الذاكرة.',
  ],
  'browser-storage-offline': [
    'حوّل أداة ملاحظات أو قائمة مهام إلى نسخة PWA تحفظ محليًا وتتعامل مع انقطاع الشبكة بتدرج واضح بدل فقدان العمل.',
    'ابنِ cache strategy صغيرة لصفحة أو dashboard ثم اختبر ماذا يحدث عند تحديث الأصول أو البيانات القديمة.',
  ],
  'frontend-testing-quality': [
    'ثبّت ثلاث طبقات فقط لواجهة صغيرة: اختبار منطق واحد، اختبار interaction واحد، ومسار E2E واحد يغطي رحلة المستخدم الحرجة.',
    'ابنِ لوحة تحكم صغيرة ثم اكتب test يغطي keyboard navigation وcopy state وerror state بدل الاكتفاء بصور snapshot.',
  ],
  'architectural-failure-modes': [
    'صمّم جدول failure modes لخدمة أو workflow واحد يوضح degraded mode وretry limits وfallback وownership لكل حالة.',
    'ابنِ queue أو workflow صغيرًا ثم أضف عليه ضغطًا متعمدًا لترى أين تحتاج backpressure أو load shedding.',
  ],
  'fuzzing-incident-response': [
    'شغّل fuzzer بسيطًا على parser أو input validator واحتفظ بثلاث حالات فشل أو edge cases خرجت بها كمادة تعلم عملية.',
    'اكتب runbook من صفحة واحدة لحادث تعطل أو تسريب محتمل ثم جرّب عليه tabletop exercise قصيرة مع نفسك أو مع الفريق.',
  ],
  'virtual-memory-filesystems': [
    'قارن بين قراءة ملف كبير عبر read وmmap ثم دوّن كيف اختلف التفكير في الذاكرة والملفات والقياس بين الطريقتين.',
    'ابنِ أداة صغيرة تمشي على ملفات كثيرة، ثم راقب أثر page cache أو directory traversal على الأداء والانطباع الأولي.',
  ],
  'linux-tracing-profiling': [
    'خذ أداة CLI أو خادمًا محليًا وشخّصه بثلاث لقطات: strace لطلب واحد، perf لhotspot واحدة، وValgrind لمسار ذاكرة واحد.',
    'ابنِ تقريرًا صغيرًا من صفحة واحدة يربط بين مخرجات الأدوات وبين تغيير واحد فقط أجريته على البرنامج بعد القياس.',
  ],
  'python-engineering': [
    'ابنِ مجموعة أدوات أتمتة CLI تنظف ملفات أو تقارير أو بيانات وتعمل من مشروع منظم باختبارات أساسية.',
    'ابنِ خدمة Python صغيرة مع API و jobs خلفية واستخدام واضح للـasync أو الـstdlib حيث يلزم.',
  ],
  'frontend-specialist': [
    'ابنِ تطبيق واجهة غني بالحالات مثل dashboard أو knowledge app مع اهتمام واضح بالوصولية والأداء.',
    'أنهِ مشروع واجهة responsive كامل مع forms وfetching وrouting وتوثيق قرارات الـUX التي اتخذتها.',
  ],
  'backend-specialist': [
    'ابنِ API حقيقية فيها auth وSQL وtransactions وbackground jobs ثم اكتب runbook تشغيل مختصر.',
    'ابنِ خدمة تكاملات أو notifications متعددة المراحل مع retries وlogging ومراقبة أساسية.',
  ],
  'mobile-specialist': [
    'ابنِ تطبيق موبايل offline-first نسبيًا مع مزامنة بسيطة وإدارة حالة وتجربة استخدام نظيفة.',
    'أنهِ تطبيقًا صغيرًا فيه رفع ملفات أو موقع جغرافي أو notifications ليثبت فهمك لقيود الهاتف الفعلية.',
  ],
  'game-specialist': [
    'أنهِ لعبة صغيرة كاملة loop واضحة مع قائمة ومراحل وحفظ بسيط ثم حلل ما كسر الأداء أو الإنتاجية لديك.',
    'ابنِ أداة داخلية أو subsystem صغيرة للمحرك مثل level editor مصغر أو asset pipeline مبسط.',
  ],
  'product-engineering-specialist': [
    'ابنِ منتجًا صغيرًا من الواجهة إلى الخلفية مع analytics وأخطاء وملاحظات استخدام وتحسينين متتاليين.',
    'نفذ feature كاملة مع experiment أو flags ثم وثّق كيف قست أثرها على الاستخدام والجودة.',
  ],
  'systems-programming-specialist': [
    'ابنِ mini shell أو file tool بواجهة CLI نظيفة وتصحيح فعلي للأخطاء وشرح لتعامل البرنامج مع العمليات أو الملفات.',
    'ابنِ parser أو runtime صغير أو daemon بسيط على Linux مع logging واختبار يدوي منظم.',
  ],
  'linux-libc-linking': [
    'ابنِ مكتبة مشتركة صغيرة فيها واجهة header واضحة وملف تنفيذ .so ثم اربط بها برنامجين: واحد وقت البناء وآخر وقت التشغيل عبر dlopen.',
    'خذ برنامجًا صغيرًا في Linux ودوّن شجرة الاعتماديات التي يحملها، ثم اشرح أين يدخل glibc وأين يتدخل ld.so وأين يظهر الـABI في القصة.',
  ],
  'linux-kernel-uapi-modules': [
    'ابنِ أداة userland تستخرج معلومات من /proc و/sys وتربط كل قيمة بمكانها داخل واجهات Linux بدل قراءتها كملفات غامضة فقط.',
    'أنشئ external module تعليمية صغيرة جدًا مع kbuild، ثم وثّق لماذا كان هذا المثال مناسبًا للتعلم ولماذا لا ينبغي القفز مباشرة إلى driver معقد.',
  ],
  'linux-math-libraries': [
    'ابنِ أداة عددية صغيرة في C أو C++ تستخدم libm وتتعامل بوضوح مع حالات NaN وInf وoverflow، ثم اشرح أين كان الخطأ العددي أو الربط بـ -lm مهمًا.',
    'جرّب مسألة جبر خطي أو تكامل عددي باستخدام GSL أو واجهات BLAS الأساسية، ثم قارن بينها وبين تنفيذ أبسط لتفهم متى تستحق مكتبة متخصصة.',
  ],
  'linux-threads-sync': [
    'ابنِ queue مهام صغيرة بخيوط متعددة ودوّن بدقة أين احتجت mutex وأين كان atomic أو flag بسيطًا كافيًا.',
    'جرّب مثالًا صغيرًا على race condition ثم أصلحه واحتفظ بنسختي before/after كمادة تعليمية لنفسك.',
  ],
  'linux-sockets-epoll': [
    'ابنِ echo server بسيطًا أولًا ثم أضف نسخة epoll مصغرة، وقارن بين البنية والقياس تحت أكثر من اتصال.',
    'اكتب أداة تشخيص صغيرة تستعرض الاتصالات أو file descriptors أثناء عمل خادمك المحلي وتربط المخرجات بما يحدث داخل الكود.',
  ],
  'cpp-math-geometry': [
    'ابنِ demo transforms صغيرة في C++ توضح الفرق بين translation وrotation وscale وlocal/world space، ثم اختبرها عدديًا وليس بصريًا فقط.',
    'استخدم Eigen أو بنية رياضية بسيطة لبناء كاميرا أو تحويلات هندسية، ثم وثّق أين ساعدتك المكتبة وأين كان التنفيذ اليدوي كافيًا.',
  ],
  'python-math-computing': [
    'ابنِ mini notebook أو أداة CLI تقارن بين float وdecimal وNumPy في مسألة صغيرة، ثم دوّن أين ظهرت الدقة أو الأداء أو الوضوح.',
    'نفّذ vector math أو تكاملًا عدديًا أو optimization بسيطة في Python مع مصادر رسمية فقط، ثم اشرح لماذا كان NumPy أو SciPy مناسبًا هنا.',
  ],
  'python-tooling-quality': [
    'حوّل مشروع Python بسيطًا إلى pyproject واضح مع Ruff وMypy واختبار واحد، ثم دوّن ما الذي تحسن فعليًا في القراءة والتشغيل.',
    'ابنِ template مشروع صغير تعيد استخدامه لاحقًا بدل إعداد الأدوات من الصفر كل مرة.',
  ],
  'python-profiling-bindings': [
    'قِس سكربت Python بطيئًا ثم حسّن hotspot واحدة فقط مع توثيق الوقت قبل وبعد بدل تحسينات عشوائية.',
    'ابنِ binding صغيرة عبر pybind11 لدالة حسابية أو تحويل بيانات، ثم قرر بصدق هل كانت الكلفة الهندسية تستحق المكسب.',
  ],
  'web-game-math-rendering': [
    'ابنِ لعبة 2D صغيرة في المتصفح باستخدام canvas وdelta time وcollision basic، ثم وثّق ما الذي كان رياضيًا بوضوح داخل اللعبة.',
    'جهّز demo rendering صغيرة على الويب فيها transforms أو camera بسيطة، أو جرّب نقل وحدة رسومية من C/C++ إلى المتصفح عبر Emscripten.',
  ],
  'engine-math-foundations': [
    'ابنِ mini engine toy أو framework صغير يمر عبر transform hierarchy وكاميرا وتصادم بسيط، ثم دوّن قائمة الرياضيات التي احتجتها فعلًا لا التي ظننت أنك تحتاجها.',
    'خذ subsystem واحدة من محرك صغير مثل camera أو collision أو animation blending، ثم اشرح أي مفاهيم رياضية تخدمها وأي أجزاء تنظيمية أو معمارية حولها.',
  ],
  'ecs-game-architecture': [
    'حوّل لعبة صغيرة أو مشهدًا بسيطًا من كائنات متداخلة إلى ECS مبسط وقارن وضوح التعديل والإضافة.',
    'ابنِ نظامين فقط داخل ECS صغيرة مثل movement وlifetime ثم راقب أين أصبحت البيانات أوضح وأين ازداد التعقيد.',
  ],
  'game-shaders-materials': [
    'ابنِ shader واحدة بسيطة بمدخلات واضحة ثم جرّب تعديل material parameters من داخل المحرك أو الـdemo بدل نسخ مؤثرات كثيرة.',
    'جهّز مقارنة بصرية صغيرة بين unlit وlit surface على نفس المجسم أو العنصر لتثبيت فهمك للـnormals والإضاءة.',
  ],
  'database-indexes-explain': [
    'خذ endpoint أو تقريرًا بطيئًا واستخدم EXPLAIN ANALYZE لتحديد عقدة واحدة فقط تسبب البطء ثم أصلحها بفهرس أو تعديل query.',
    'أنشئ قاعدة بيانات تجريبية صغيرة مع بيانات كافية لتلاحظ الفرق بين وجود الفهرس وعدم وجوده فعليًا.',
  ],
  'backend-queues-webhooks': [
    'ابنِ webhook receiver بسيطًا يمنع التكرار ويكتب trace id أو request id مع كل معالجة.',
    'صمم worker صغيرة تتعامل مع إعادة المحاولة والـdead-letter بشكل مبسط ثم جرّب عليها فشلًا متعمدًا.',
  ],
  'systemd-service-operations': [
    'حوّل خدمة محلية إلى systemd service مع restart policy وenvironment file ثم اكتب أوامر التشغيل والفحص في runbook من صفحة واحدة.',
    'اختبر فشلًا متعمدًا في الخدمة ودوّن كيف التقطته من journalctl وما التعديل الذي حسّن التشخيص.',
  ],
  'reverse-proxy-tls-dns': [
    'شغّل تطبيقًا خلف Nginx مع دومين أو subdomain تجريبي ثم اختبر طلبًا كاملًا من DNS حتى التطبيق.',
    'فعّل HTTPS على بيئة staging صغيرة وسجل الخطوات التي ستعيد استخدامها في أي مشروع لاحق.',
  ],
  'resource-atlas': [
    'اختر مسارًا واحدًا من الأطلس وأنهِ منه مصدرًا رسميًا واحدًا وtutorial واحدة خلال أسبوعين بدل التنقل بين خمسة مسارات معًا.',
    'ابنِ جدول مقارنة صغيرًا بين مسارين من الأطلس يوضح لماذا ستؤجل أحدهما الآن وتبدأ بالآخر.',
  ],
  'python-engineering-specialist': [
    'ابنِ مشروع Python يجمع بين package واضح وCLI أو API واختبارات وملف تشغيل بسيط للفريق أو للمستخدم.',
    'ابنِ خدمة أو automation pipeline تعالج ملفات أو بيانات أو تكاملات ثم وثّق حدود Python فيها بصدق.',
  ],
  'data-ai-specialist': [
    'ابنِ pipeline بيانات صغيرة تنتهي بلوحة أو تقرير أو تنبؤ واضح مع تقييم للجودة وانحرافات البيانات.',
    'ابنِ تطبيق RAG أو agent صغير مع مصادر موثوقة وقياس بسيط للجودة والهلوسة والتكلفة.',
  ],
  'platform-specialist': [
    'ابنِ template منصة مشروع فيه CI/CD ومراقبة ونشر وrunbook مختصر حتى لو على نطاق صغير.',
    'أنشئ بيئة تشغيل محلية تشبه الإنتاج نسبيًا مع containers وdashboards وتنبيهات أساسية.',
  ],
  'research-open-source-specialist': [
    'ساهم بإصلاح أو تحسين صغير في مشروع مفتوح المصدر ثم اكتب شرحًا يبين كيف فهمت الكود وكيف اختبرت التعديل.',
    'ابنِ repo تجريبي يقارن فكرتين أو مكتبتين أو approachين مع benchmark أو ملاحظات واضحة قابلة للمراجعة.',
  ],
  'embedded-linux-specialist': [
    'ابنِ أداة Linux صغيرة تتواصل مع ملفات أجهزة أو socket أو serial واجعلها قابلة للبناء على بيئة مختلفة.',
    'جهز مشروعًا مبسطًا يوضح cross-compilation أو deployment إلى جهاز محدود مع توثيق الخطوات والعقبات.',
  ],
  'cpp-performance-specialist': [
    'ابنِ أداة أو محاكاة صغيرة في C++ ثم قس الأداء فعليًا وحسّن bottleneck واحدًا موثقًا بالأرقام.',
    'أنهِ مشروع C++ متوسطًا باستخدام CMake وprofiling وشرح لقرارات الذاكرة والحاويات والتوازي التي اخترتها.',
  ],
};

export function getFallbackProjectIdeas(topic: TopicDetail) {
  if (topic.category === 'المسارات') {
    return [
      `حوّل ${topic.title} إلى خطة 4 أسابيع فيها هدف أسبوعي واحد ومشروع صغير يثبت التقدم.`,
      `اختر مشروعًا من المجال الذي يخدمه ${topic.title} ثم دوّن المهارات التي تحتاجها الآن وما الذي ستؤجله لمرحلة لاحقة.`,
    ];
  }

  if (topic.level === 'ابدأ' || topic.level === 'أساسي') {
    return [
      `حوّل ${topic.title} إلى mini lab صغير: مثال صحيح، مثال خاطئ، ثم ملاحظة قصيرة تشرح الفرق بينهما.`,
      `اشرح ${topic.title} لصديق أو لنفسك في صفحة واحدة مع مثال عملي بسيط يثبت أنك فهمت الفكرة لا الاسم فقط.`,
    ];
  }

  if (topic.level === 'عملي') {
    return [
      `ابنِ تطبيقًا أو أداة صغيرة تستخدم ${topic.title} في سيناريو قريب من الواقع ثم سجّل أين ساعدك فعليًا.`,
      `أعد تنفيذ جزء صغير مرتين باستخدام ${topic.title}: مرة بسرعة، ومرة بعناية هندسية، ثم قارن النتيجة.`,
    ];
  }

  return [
    `نفّذ تجربة أعمق حول ${topic.title} مع قياس أو logging أو ملاحظات هندسية توضّح الحدود والقرارات.`,
    `ابنِ نسخة مصغرة أقرب لبيئة حقيقية تستخدم ${topic.title} ثم دوّن trade-offs بدل الاكتفاء بالقراءة.`,
  ];
}

export function getFallbackSearchKeywords(topic: TopicDetail) {
  const firstTag = topic.tags[0] ?? topic.category;

  return [
    `${topic.title} شرح عملي`,
    `${topic.title} common mistakes`,
    `${topic.title} project ideas`,
    `${firstTag} ${topic.level} roadmap`,
  ];
}

export const commonMistakesByTopicId: Record<string, string[]> = {
  'systems-native': [
    'القفز إلى مشروع أنظمي كبير قبل تثبيت برنامج صغير تستطيع تشغيله وتصحيحه وقياسه بسهولة.',
    'نسخ أوامر build أو flags من الإنترنت دون فهم أثرها على الربط والبيئة والـABI.',
  ],
  'linux-libc-linking': [
    'الخلط بين ما توفره glibc وما توفره النواة مباشرة ثم لوم Linux كله عند أول خطأ ربط.',
    'إضافة أعلام مثل -lm أو -ldl أو مسارات مكتبات عشوائيًا دون معرفة لماذا يحتاجها البرنامج.',
  ],
  'linux-kernel-uapi-modules': [
    'القفز إلى kernel module معقدة قبل فهم ما إذا كان userland أو /proc أو /sys يكفي أصلًا.',
    'اعتبار UAPI وواجهات النواة الداخلية شيئًا واحدًا ثم التعجب من انكسار الكود بين الإصدارات.',
  ],
  'linux-math-libraries': [
    'معاملة float وdouble وكأنهما أعداد مثالية ثم تجاهل NaN وInf وأخطاء التقريب.',
    'نسيان الربط بـ -lm أو اختيار مكتبة عددية ثقيلة قبل التأكد أن libm لا تكفيك.',
  ],
  'linux-threads-sync': [
    'استخدام أكثر من lock أو atomic قبل رسم المشكلة نفسها على الورق أو في log بسيط.',
    'تصحيح مشاكل التزامن بالحدس فقط بدل بناء repro صغير يمكن تكراره.',
  ],
  'linux-sockets-epoll': [
    'الخلط بين blocking وnon-blocking I/O داخل نفس الخادم بلا خطة واضحة.',
    'إهمال timeouts والأخطاء الشبكية واعتبار أن كل client سيتصرف بشكل مثالي دائمًا.',
  ],
  'backend-data': [
    'وضع كل العمل داخل request واحد حتى لو كان بطيئًا أو قابلًا للتأجيل.',
    'الاعتماد على الإطار أو ORM دون قراءة SQL أو logs أو سلوك قاعدة البيانات نفسها.',
  ],
  'database-indexes-explain': [
    'إضافة فهرس لكل عمود يبدو مهمًا دون قراءة خطة التنفيذ أو ملاحظة أثره على الكتابة.',
    'الحكم على البطء من زمن endpoint فقط دون معرفة أي عقدة في query plan سببت المشكلة.',
  ],
  'backend-queues-webhooks': [
    'افتراض أن webhook تصل مرة واحدة دائمًا أو أن إعادة الإرسال لن تحدث.',
    'إضافة retries بلا idempotency أو tracing ثم صعوبة معرفة لماذا تكرر التنفيذ.',
  ],
  'cloud-platform': [
    'القفز إلى بنية تشغيل معقدة قبل فهم الخدمة على Linux محلي أو داخل container بسيط.',
    'إهمال runbook والسجلات والصلاحيات والاعتماد على ذاكرة الفريق فقط.',
  ],
  'systemd-service-operations': [
    'تشغيل الخدمة يدويًا في الطرفية ثم افتراض أن هذا يكفي كتشغيل مستقر للخادم.',
    'ترك رسائل الخطأ غامضة داخل journalctl بسبب غياب logs واضحة أو environment file منضبط.',
  ],
  'reverse-proxy-tls-dns': [
    'اعتبار DNS وproxy وTLS إعدادات مستقلة ثم تجاهل كيف تؤثر على بعضها في الإطلاق الفعلي.',
    'نسخ إعداد Nginx أو HTTPS من مشروع آخر دون اختبار headers والتجديد والمسارات الفعلية.',
  ],
  'python-engineering': [
    'تحويل المشروع إلى سكربتات كثيرة بلا بيئة واضحة أو أوامر تشغيل موحدة.',
    'افتراض أن Python بطيئة أو فوضوية بطبيعتها قبل تحسين الهيكل وقياس الأداء.',
  ],
  'python-tooling-quality': [
    'إدخال كل الأدوات دفعة واحدة على مشروع متعب ثم كرهها بدل إدخالها تدريجيًا.',
    'اعتبار Ruff وMypy أهدافًا بحد ذاتها بدل استخدامها لتحسين القراءة والثقة في التغيير.',
  ],
  'python-profiling-bindings': [
    'القفز إلى C أو C++ قبل قياس bottleneck الحقيقية داخل Python.',
    'نقل جزء صغير إلى binding أصلية ثم إهمال بساطة الـAPI أو اختبارها من جهة Python.',
  ],
  'game-development': [
    'البدء بمحرك أو لعبة أحلام قبل إنهاء لعبة صغيرة كاملة وقابلة للعب.',
    'خلط منطق اللعب والرندر والأدوات في كتلة واحدة من أول يوم.',
  ],
  'ecs-game-architecture': [
    'استخدام ECS بدافع الموضة ثم نشر components وأنظمة كثيرة بلا حدود أو naming واضح.',
    'نسيان أن ترتيب التحديث وملكية البيانات أهم من شكل الجداول أو الحاويات نفسها.',
  ],
  'game-shaders-materials': [
    'نسخ shader جاهزة كثيرة قبل فهم واحدة بسيطة جدًا تعمل من أول إلى آخر السطر.',
    'مطاردة نتيجة بصرية فورية مع تجاهل الـnormals والتحويلات والقيم الأساسية للـmaterial.',
  ],
  'resource-atlas': [
    'فتح ثلاثة أو أربعة أبواب من الأطلس في وقت واحد ثم عدم إنهاء أي واحد منها.',
    'معاملة أطلس المصادر كبديل عن مشروع صغير يثبت أنك جرّبت المسار فعلًا.',
  ],
};

export const miniLabsByTopicId: Record<string, string[]> = {
  'systems-native': [
    'اكتب برنامجًا واحدًا من ملفين فقط يتعامل مع ملف أو عملية أو socket واحدة، ثم أضف logging قصيرًا يشرح ما يحدث.',
    'نفّذ نسخة أولى صغيرة جدًا ثم نسخة ثانية أكثر ترتيبًا، وقارن أين ظهر الفرق في البناء أو التصحيح.',
  ],
  'linux-libc-linking': [
    'ابنِ مكتبة .so صغيرة فيها دالة واحدة ثم اربط بها برنامجًا تجريبيًا ولاحظ ما يتغير عند استخدام ldd.',
  ],
  'linux-kernel-uapi-modules': [
    'اقرأ قيمة مفهومة من /proc أو /sys ثم اربطها بسطر شرح واحد: ما الذي أتى من kernel وما الذي أضفته أنت في userland.',
  ],
  'linux-math-libraries': [
    'اكتب برنامجًا صغيرًا يقارن بين نتيجة float وdouble أو بين قيمة صحيحة وNaN/Inf عند إدخال خاطئ متعمد.',
  ],
  'linux-threads-sync': [
    'ابنِ queue مهام من منتج واحد ومستهلك واحد فقط قبل توسيعها إلى أكثر من خيط.',
  ],
  'linux-sockets-epoll': [
    'نفّذ echo server بعميل واحد أولًا، ثم افتح عميلين فقط ولاحظ أين يصبح non-blocking مفيدًا.',
  ],
  'backend-data': [
    'أنشئ endpoint واحدة مع log واضح وvalidation بسيطة وخطأ مفهوم، بدل API كاملة دفعة واحدة.',
  ],
  'database-indexes-explain': [
    'شغّل EXPLAIN ANALYZE على query واحدة ثم أضف فهرسًا واحدًا فقط واحتفظ بصورة قبل/بعد للخطة.',
  ],
  'backend-queues-webhooks': [
    'ابنِ webhook receiver واحدة ترفض التكرار عبر idempotency key بسيط أو جدول صغير.',
  ],
  'cloud-platform': [
    'شغّل خدمة واحدة داخل container أو systemd فقط، ثم دوّن 5 أوامر تحتاجها لفهم حالتها عند أول عطل.',
  ],
  'systemd-service-operations': [
    'حوّل خدمة محلية إلى unit واحدة مع Restart=on-failure ثم اختبر فشلًا متعمدًا وشاهد كيف تتصرف.',
  ],
  'reverse-proxy-tls-dns': [
    'مرّر طلبًا واحدًا من دومين أو subdomain إلى تطبيقك خلف proxy ثم تحقق من header واحدة وlog واحدة فقط.',
  ],
  'python-engineering': [
    'ابنِ CLI صغيرة من ملفين مع venv وpyproject وأمر test أو lint واحد.',
  ],
  'python-tooling-quality': [
    'أدخل Ruff وMypy على ملف واحد أو اثنين فقط أولًا، ثم قرر ما الذي يستحق التعميم لاحقًا.',
  ],
  'python-profiling-bindings': [
    'قِس دالة واحدة بـ cProfile ثم جرّب تحسينًا واحدًا فقط قبل التفكير في binding أصلية.',
  ],
  'game-development': [
    'ابنِ loop واحدة ومشهدًا صغيرًا جدًا أو شخصية تتحرك فقط، ولا تضف نظام حفظ أو قوائم قبل إنهاء هذا الجزء.',
  ],
  'ecs-game-architecture': [
    'حوّل entity واحدة أو نظام حركة واحدًا إلى ECS مبسط بدل إعادة هيكلة مشروع اللعبة كله دفعة واحدة.',
  ],
  'game-shaders-materials': [
    'اكتب shader واحدة تغيّر اللون أو تعتمد على الوقت ثم أضف parameter واحدًا يمكن تعديله من المحرك أو الـdemo.',
  ],
  'resource-atlas': [
    'اختر مصدرًا رسميًا واحدًا ومصدرًا تمهيديًا واحدًا فقط من الأطلس، ثم اكتب ما المشروع الصغير الذي ستبنيه بعدهما.',
  ],
};

export const officialResourcePattern = /(docs|documentation|manual|reference|man(?:\b|-)|kernel|library|api|guide|standard|tutorial)/i;
export const friendlyResourcePattern = /(tutorial|quickstart|quick start|getting started|get started|learn|beginner|academy|basics|guide)/i;

export function getFallbackCommonMistakes(topic: TopicDetail) {
  if (topic.category.includes('اللغات والأنظمة') || topic.tags.some((tag) => ['Linux', 'C', 'C++'].includes(tag))) {
    return [
      'الانتقال من مثال صغير إلى مشروع كبير بسرعة أكبر من قدرتك على التصحيح والقياس.',
      'ترك الأدوات والتجارب الصغيرة لصالح قراءة نظرية طويلة ثم التعثر عند أول خطأ عملي.',
    ];
  }

  if (topic.category.includes('الخلفية')) {
    return [
      'التركيز على framework أو endpoint ونسيان logs وقاعدة البيانات وحدود العمل البطيء.',
      'بناء مسار سعيد فقط دون التفكير في الفشل والتكرار والبيانات غير الصالحة.',
    ];
  }

  if (topic.category.includes('السحابة') || topic.category.includes('المنصة')) {
    return [
      'إضافة طبقات تشغيل كثيرة قبل إتقان نسخة محلية واضحة يمكن لأي شخص إعادتها.',
      'إهمال التوثيق التشغيلي القصير ثم الاعتماد على الذاكرة عند كل مشكلة.',
    ];
  }

  if (topic.tags.includes('Python') || topic.title.includes('Python')) {
    return [
      'ترك المشروع يتحول إلى سكربتات كثيرة بلا نقطة دخول واضحة ولا بيئة ثابتة.',
      'الحديث عن الأداء أو الجودة قبل القياس أو قبل تطبيق أبسط أدوات التنظيم.',
    ];
  }

  if (topic.category.includes('الألعاب') || topic.category.includes('المحركات')) {
    return [
      'بدء لعبة أو محرك كبير قبل إنهاء نموذج صغير واضح وممتع وقابل للتجربة.',
      'مزج الأنظمة البصرية والمنطقية والأصول دون حدود أو naming واضح منذ البداية.',
    ];
  }

  if (topic.category.includes('دليل المصادر') || topic.category.includes('المراجع')) {
    return [
      'التنقل بين المصادر بلا مشروع أو ملخص صغير يثبت أنك فهمت ما قرأت.',
      'التوسع في أكثر من باب في وقت واحد بدل إنهاء مسار واحد قصير ثم تقييمه.',
    ];
  }

  return [
    'الانتقال بين مصادر كثيرة قبل إنهاء مصدر واحد واضح والرجوع إليه عند الالتباس.',
    'القراءة فقط دون مثال صغير أو ملاحظة قصيرة تثبت ما فهمته فعليًا.',
  ];
}

export function getFallbackMiniLabs(topic: TopicDetail) {
  if (topic.category.includes('اللغات والأنظمة') || topic.tags.some((tag) => ['Linux', 'C', 'C++'].includes(tag))) {
    return [
      'اكتب برنامجًا صغيرًا من ملف واحد أو ملفين فقط يطبق الفكرة الأساسية، ثم أضف log واحدة أو check واحدة تكشف السلوك.',
      'اختبر الحالة الصحيحة والحالة الخاطئة عمدًا، ثم دوّن في سطرين ما الذي تغير.',
    ];
  }

  if (topic.category.includes('الخلفية')) {
    return [
      'ابنِ endpoint أو query واحدة مع validation وlog واضحين بدل خدمة كاملة.',
      'حوّل خطوة بطيئة واحدة إلى background job أو تحسين query صغير ثم راقب الفرق.',
    ];
  }

  if (topic.category.includes('السحابة') || topic.category.includes('المنصة')) {
    return [
      'شغّل service واحدة محليًا مع proxy أو container أو service unit واحدة فقط ثم وثق الخطوات.',
      'نفّذ failure صغيرًا متعمدًا واكتب كيف اكتشفته بأداة واحدة من أدوات التشغيل.',
    ];
  }

  if (topic.tags.includes('Python') || topic.title.includes('Python')) {
    return [
      'ابنِ CLI صغيرة مع أمر تشغيل واحد واختبار أو lint واحد فقط.',
      'حسّن ملفًا واحدًا بالأنواع أو القياس أو التنظيم قبل تعميم التغيير على المشروع كله.',
    ];
  }

  if (topic.category.includes('الألعاب') || topic.category.includes('المحركات')) {
    return [
      'ابنِ مشهدًا صغيرًا أو loop أو shader واحدة بدل نظام لعب كامل.',
      'اختبر عنصرًا واحدًا متحركًا أو مادة واحدة أو تصادمًا واحدًا قبل التوسع.',
    ];
  }

  if (topic.category.includes('دليل المصادر') || topic.category.includes('المراجع')) {
    return [
      'اختر مصدرًا رسميًا واحدًا ومصدرًا تمهيديًا واحدًا فقط من هذا الباب ثم حدد مشروعك الصغير التالي.',
      'اكتب خطة 7 أيام قصيرة بدل تجميع عشرات الروابط مرة واحدة.',
    ];
  }

  return [
    'حوّل أول فكرة في الموضوع إلى مثال صغير جدًا أو خطوة عملية واحدة لا تستغرق وقتًا طويلًا.',
    'اكتب سطرين: ماذا فهمت، ما الذي لم يتضح، وما السؤال التالي الذي ستبحث عنه.',
  ];
}

export function uniqueResources(resources: ResourceLink[]) {
  return resources.filter((resource, index, collection) => collection.findIndex((item) => item.url === resource.url) === index);
}
