import { docs } from './roadmap-docs';
import type { ResourceLink, TopicInput } from './roadmap-model';
import { topicInputs } from './roadmap-topic-inputs';

type TopicOverride = Partial<TopicInput>;
const baseTopicInputs = topicInputs as Record<string, TopicInput>;

const resource = (label: string, url: string): ResourceLink => ({ label, url });
const patchTopic = <T extends TopicOverride>(topic: T) => topic;
const createTopic = <T extends TopicInput>(topic: T) => topic;

function mergedResources(topicId: string, extras: ResourceLink[]) {
  const baseResources = baseTopicInputs[topicId]?.resources ?? [];
  const seen = new Set<string>();

  return [...baseResources, ...extras].filter((item) => {
    if (seen.has(item.url)) {
      return false;
    }

    seen.add(item.url);
    return true;
  });
}

const systemBasicsResources = [
  resource('Nand2Tetris', docs.nand2tetris),
  resource('OSTEP', docs.ostep),
  resource('MIT OpenCourseWare', docs.mitOcw),
];

const linuxLearningStack = [
  resource('Linux man-pages', docs.man7),
  resource('ArchWiki', docs.archWiki),
  resource('Ubuntu CLI', docs.ubuntuCli),
];

const distroEngineeringStack = [
  resource('Linux From Scratch', docs.lfs),
  resource('Beyond Linux From Scratch', docs.blfs),
  resource('Buildroot Manual', docs.buildrootManual),
  resource('Yocto Project Docs', docs.yocto),
];

export const focusedTopicInputs = {
  'origins-history': patchTopic({
    summary:
      'هذا الباب يثبت الصورة الكبيرة قبل أي كود: لماذا ظهرت الحواسيب أصلًا، كيف تطورت البرمجة، وكيف ترتبط المكونات المادية بالنظام والبرامج التي تراها اليوم.',
    resources: mergedResources('origins-history', [
      resource('Computer History Museum', docs.computerHistory),
      resource('Nand2Tetris', docs.nand2tetris),
    ]),
    fits: ['يناسب من يبدأ من الصفر ويريد فهم لماذا توجد كل طبقة قبل الأدوات.', 'مفيد لمن يشعر أن المصطلحات التقنية تظهر بلا سياق مترابط.'],
    effort: 'من 4 إلى 6 أيام لفهم الصورة الذهنية جيدًا مع تدوين الملاحظات.',
    finalProject: ['اكتب خريطة ذهنية تشرح رحلة البيانات من الدوائر وحتى التطبيق الذي تستخدمه يوميًا.'],
  }),
  'deep-foundations': patchTopic({
    summary:
      'هنا تنزل طبقة أعمق: البتات، التمثيل الثنائي، المنطق، الذاكرة، التنفيذ، والترجمة. هذه المرحلة هي التي تجعل لينكس والنواة والأنظمة مفهومة بدل أن تبدو سحرًا.',
    resources: [...systemBasicsResources, resource('Computer Systems (MIT OCW)', docs.mitOcw)],
    fits: ['يناسب من يريد التخصص لاحقًا في الأنظمة أو لينكس أو البرمجة منخفضة المستوى.', 'مهم جدًا لمن يريد فهم 0 و1 وما بعدهما بشكل فعلي لا شعاري.'],
    effort: 'من أسبوعين إلى ثلاثة أسابيع مع تمارين كتابة وقراءة وتمثيل ثنائي.',
    finalProject: ['ابنِ شرحًا مرئيًا صغيرًا يربط بين البتات والمنطق والذاكرة والتنفيذ والمترجم في برنامج بسيط.'],
  }),
  'core-programming': patchTopic({
    summary:
      'هذا الباب يحول التفكير إلى كود: تقسيم المشكلة، التحكم في التدفق، الدوال، هياكل البيانات، والاختبار. أبقيته موجودًا لكنه الآن يخدم الرحلة نحو لينكس بدل أن يكون مسارًا عامًا معزولًا.',
    resources: mergedResources('core-programming', [
      resource('Python Tutorial', docs.python),
      resource('GitHub Skills', docs.githubSkills),
    ]),
    fits: ['يناسب من يحتاج قاعدة عملية قبل الدخول إلى C أو أدوات لينكس.', 'مفيد لمن يفهم المفاهيم لكن يتعثر عند كتابة حلول صغيرة نظيفة.'],
    effort: 'من أسبوعين إلى أربعة أسابيع حسب خبرتك السابقة.',
    finalProject: ['اصنع مجموعة أدوات CLI صغيرة فيها parsing وعمليات ملفات واختبارات أساسية.'],
  }),
  'developer-workflow': patchTopic({
    summary:
      'أدوات المطور هنا ليست رفاهية: الطرفية، Git، قراءة التوثيق، هيكلة المشاريع، وإدارة البيئات. هذا الباب هو الجسر العملي قبل الغوص في بيئة لينكس بشكل كامل.',
    resources: mergedResources('developer-workflow', [
      resource('Git Documentation', docs.git),
      resource('GitHub Skills', docs.githubSkills),
      resource('Bash Manual', docs.bashManual),
    ]),
    fits: ['يناسب من يضيع بسبب كثرة الأدوات ولا يعرف ما الذي يتعلمه أولًا.', 'مفيد لأي شخص سيعمل يوميًا من الطرفية أو على خوادم لينكس.'],
    effort: 'من أسبوع إلى أسبوعين مع ممارسة يومية داخل الطرفية وGit.',
    finalProject: ['جهز مشروعًا محليًا كاملًا مع README واضح وScripts وبيئة تطوير قابلة لإعادة التشغيل.'],
  }),
  'frontend-web': patchTopic({
    summary:
      'هذا هو المسار العام غير اللينكسي الذي أبقيته لأنه ما يزال عمليًا ومطلوبًا. صار أخف من قبل لكنه يظل قويًا في HTML وJavaScript والأداء والتخزين والاختبار.',
    resources: mergedResources('frontend-web', [
      resource('MDN Web Docs', docs.mdn),
      resource('MDN PWA', docs.mdnPwa),
    ]),
    fits: ['يناسب من يريد بناء واجهات فعلية فوق معرفة أنظمة أقوى.', 'مفيد لمن يحتاج مسار ويب واحدًا واضحًا بدل عشرات المسارات المتفرقة.'],
    effort: 'من أسبوعين إلى شهر حسب مستوى التطبيق العملي الذي تريده.',
    finalProject: ['ابنِ لوحة أدوات ويب تعمل offline وتستخدم IndexedDB وتغطيها اختبارات واجهة أساسية.'],
  }),
  'linux-userland-operations': createTopic({
    title: 'Linux Userland / Operations',
    level: 'أساسي',
    category: 'Linux',
    summary:
      'هذا الباب يبدأ من البيئة اليومية: الملفات، الصلاحيات، الشِل، النصوص، الشبكات، الخدمات، والـ initramfs. الفكرة أن تتعامل مع لينكس كمستخدم محترف ومسؤول تشغيل لا كمجرد أوامر متناثرة.',
    learn: [
      'تفهم بنية الملفات والصلاحيات والـ ownership والـ PATH والروابط الرمزية.',
      'تستخدم shell pipelines وgrep وsed وawk وxargs وfind بشكل عملي لتفكيك المشاكل.',
      'تقرأ حالة النظام: العمليات، الخدمات، المنافذ، السجلات، والإقلاع.',
    ],
    build: [
      'جهز VM لينكس واكتب runbook يومي: إنشاء مستخدم، ضبط صلاحيات، تشغيل خدمة، فحص السجلات، ونسخ احتياطي بسيط.',
      'ابنِ سكربت shell يجمع معلومات الصحة الأساسية عن النظام ويكتب تقريرًا قابلاً للمشاركة.',
    ],
    note2026:
      'التميّز في لينكس لم يعد مجرد حفظ أوامر. القيمة الحقيقية الآن في تفسير حالة النظام وربط السلوك بالأسباب بسرعة وثقة.',
    resources: [...linuxLearningStack, resource('systemd', docs.systemd), resource('Bash Manual', docs.bashManual)],
    tags: ['linux', 'shell', 'filesystem', 'systemd'],
    searchKeywords: ['linux userland', 'bash', 'permissions', 'services', 'logs'],
    fits: ['يناسب كل من يريد أن يعمل داخل لينكس يوميًا بثقة.', 'هو أفضل مدخل قبل الأنظمة البرمجية أو النواة أو بناء التوزيعات.'],
    effort: 'من أسبوعين إلى شهر مع تطبيق يومي على جهاز أو VM.',
    finalProject: ['أنشئ بيئة لينكس عملية موثقة بالكامل مع خدمات صغيرة وسجلات وتشخيص أعطال أساسية.'],
  }),
  'linux-systems-programming': createTopic({
    title: 'Linux Systems Programming',
    level: 'عملي',
    category: 'Linux',
    summary:
      'هنا تنتقل من استخدام لينكس إلى البرمجة فوقه: C، الذاكرة، libc، الربط، الخيوط، sockets، التتبع، والـ tooling التي تشرح كيف يتكلم البرنامج مع النظام فعلًا.',
    learn: [
      'تفهم system calls والـ libc والربط الثابت والديناميكي والعلاقة بين ELF واللودر.',
      'تتعامل مع الملفات والعمليات والخيوط والمزامنة والمقابس داخل بيئة لينكس الحقيقية.',
      'تقرأ الأداء والأعطال باستخدام strace وperf وgdb وvalgrind.',
    ],
    build: [
      'ابنِ أدوات C صغيرة تتعامل مع الملفات والعمليات والمقابس والتزامن، ثم افحصها بأدوات تتبع لينكس.',
      'اصنع خدمة شبكية صغيرة وراقب سلوكها باستخدام perf وstrace وgdb.',
    ],
    note2026:
      'في 2026 صار الفرق واضحًا بين من يكتب C فوق لينكس ومن يفهم فعلًا حدود النظام وواجهاته وأدوات تشخيصه. هذا الباب هو ما يصنع ذلك الفرق.',
    resources: [
      resource('man7 Linux man-pages', docs.man7),
      resource('The Linux Programming Interface references', docs.man7),
      resource('glibc Manual', docs.glibc),
      resource('GDB Manual', docs.gdb),
      resource('GCC Manuals', docs.gcc),
    ],
    tags: ['linux', 'c', 'systems programming', 'elf', 'syscalls'],
    searchKeywords: ['linux programming', 'system calls', 'epoll', 'perf', 'glibc'],
    fits: ['يناسب من يريد الانتقال من أوامر لينكس إلى كتابة برامج أنظمة حقيقية.', 'ضروري قبل التعمق الجدي في النواة أو التوزيعات.'],
    effort: 'من شهر إلى شهرين مع تطبيقات C واختبارات عملية مستمرة.',
    finalProject: ['ابنِ daemon بسيط عالي الملاحظة observability مع service file وأدوات tracing ودليل تشغيل.'],
  }),
  'linux-kernel-internals': createTopic({
    title: 'Linux Kernel Internals',
    level: 'متقدم',
    category: 'Linux',
    summary:
      'هذا الباب يشرح ما وراء user space: الإقلاع، الذاكرة الافتراضية، الملفات، بناء النواة، UAPI، النماذج التعريفية، وأدوات تتبع وتصحيح سلوك النواة نفسها.',
    learn: [
      'تفهم حدود user space وkernel space، ومسار الإقلاع من الـ firmware وحتى init.',
      'تقرأ وثائق النواة وتبني إعدادًا مخصصًا وتشغل kernel داخل VM بشكل آمن.',
      'تربط بين subsystems مختلفة مثل الذاكرة والملفات والأجهزة والـ scheduler من زاوية عملية.',
    ],
    build: [
      'ابنِ kernel مخصصًا لـ VM، وجرّب تفعيل وتعطيل خيارات محددة مع ملاحظة أثرها.',
      'وثّق رحلة إقلاع النواة حتى userspace على جهاز افتراضي وحدد نقاط المراقبة المناسبة.',
    ],
    note2026:
      'الدخول إلى النواة بدون عادة قراءة docs.kernel.org وبدون مختبر VM معزول يؤدي غالبًا إلى معرفة سطحية جدًا. اعمل هنا ببطء لكن بدقة.',
    resources: [
      resource('Linux Kernel Docs', docs.linuxKernel),
      resource('Kernel Admin Guide', docs.kernelAdminGuide),
      resource('Kernel Kbuild Docs', docs.kernelKbuild),
      resource('Bootlin Kernel Training', docs.bootlinKernelLabs),
      resource('KernelNewbies', docs.kernelNewbies),
    ],
    tags: ['linux kernel', 'kernel build', 'uapi', 'drivers', 'boot'],
    searchKeywords: ['kernel internals', 'kbuild', 'drivers', 'virtual memory', 'boot flow'],
    fits: ['يناسب من استقر في C ولينكس ويريد فهم النواة من الوثائق والمختبرات بدل الشرح العام.', 'ليس باب بداية، بل باب تعمق موجه.'],
    effort: 'من شهرين إلى ثلاثة أشهر مع مختبرات افتراضية متكررة.',
    finalProject: ['جهز مختبر kernel شخصي يبني النواة ويقلعها ويجمع logs ويقارن بين إعدادات مختلفة.'],
  }),
  'linux-distribution-engineering': createTopic({
    title: 'Linux Distribution Engineering',
    level: '2026',
    category: 'Linux',
    summary:
      'هذا هو الباب الإضافي الذي طلبته بشكل واضح: كيف تبني توزيعة لينكس أو image قابلة للإقلاع، من مسار LFS إلى Buildroot وYocto، أو فوق توزيعة موجودة مع packaging وinitramfs وimages وrepositories وصيانة الإصدارات.',
    learn: [
      'تفهم ما الذي يجعل “توزيعة” توزيعة: toolchain، packages، init، bootloader، image format، repositories، signatures، release flow.',
      'تميّز بين البناء من الصفر بالكامل وبين البناء فوق قاعدة موجودة مثل Debian أو Fedora أو Arch أو image factory tools.',
      'تعرف المتطلبات العملية: VM، cross toolchain، system integration، testing، reproducibility، والتوثيق.',
    ],
    build: [
      'ابدأ بمختبر LFS أو Buildroot صغير، ثم وثّق ما يبنيه كل جزء ولماذا.',
      'ابنِ image قابلة للإقلاع فوق توزيعة موجودة، مع تخصيص الحزم والإقلاع والتحديث والاختبار.',
    ],
    note2026:
      'بناء توزيعة لا يعني فقط “جمع حزم”. القيمة الحقيقية هي القدرة على تفسير سلسلة البناء والتكامل والإقلاع والتحديث والاسترداد عندما يفشل شيء في المنتصف.',
    resources: [...distroEngineeringStack, resource('Debian Handbook', docs.debianHandbook), resource('mkosi', docs.mkosi)],
    tags: ['linux distro', 'buildroot', 'yocto', 'lfs', 'packaging'],
    searchKeywords: ['linux distribution', 'build distro', 'buildroot', 'yocto', 'lfs', 'initramfs'],
    fits: ['يناسب من يريد التعمق جدًا في لينكس وأن يذهب من الاستهلاك إلى البناء.', 'هو أقوى مسار تخصصي في الخريطة الحالية لمن يهتم بلينكس حقًا.'],
    effort: 'من شهرين إلى أربعة أشهر بحسب عمق التجارب وعدد الأدوات التي ستجربها.',
    finalProject: ['اصنع توزيعة أو image موثقة بالكامل: build pipeline، packages، boot flow، testing matrix، وخطة تحديث واسترداد.'],
  }),
  'bits-logic-circuits': createTopic({
    title: 'البتات والمنطق والدوائر من تحت الصفر',
    level: 'ابدأ',
    category: 'الأساسيات العميقة',
    summary:
      'هنا تبدأ من المستوى الذي طلبته حرفيًا: ما هو الـ bit، كيف يتحول 0 و1 إلى بوابات منطقية، وكيف تتراكم هذه البوابات لتصبح دوائر قادرة على الحساب والتخزين والقرار.',
    learn: [
      'تفهم معنى bit وbyte ولماذا التمثيل الثنائي مناسب للدوائر الإلكترونية.',
      'تتعرف على AND وOR وNOT وXOR والجداول المنطقية وكيف تركب عليها دوائر أكبر.',
      'ترى كيف يظهر الجمع والاختيار والحالة من تراكيب بسيطة جدًا.',
    ],
    build: [
      'ارسم جداول منطقية وابنِ نصف جامع half-adder ثم full-adder بشكل يدوي أو بأداة محاكاة بسيطة.',
      'فسر كيف يمكن لبوابات قليلة أن تشكل وحدة حساب أو قرار أولية.',
    ],
    note2026:
      'كلما نزلت إلى هذا المستوى أصبحت مفاهيم الذاكرة والمعالج والـ registers والنواة أقل غموضًا بكثير.',
    resources: [
      resource('Nand2Tetris', docs.nand2tetris),
      resource('MIT OpenCourseWare', docs.mitOcw),
      resource('Computer History Museum', docs.computerHistory),
    ],
    tags: ['bit', 'logic gates', 'circuits', 'binary'],
    searchKeywords: ['0 and 1', 'logic gates', 'half adder', 'full adder'],
    fits: ['يناسب من يريد فهمًا حقيقيًا من تحت الصفر قبل القفز إلى البرمجة والأنظمة.'],
    effort: 'من 3 إلى 5 أيام مع تمارين رسم وتفسير.',
    finalProject: ['أنشئ شرحًا مصورًا يربط بين البوابات المنطقية والجامع الثنائي والتمثيل الثنائي في الحاسوب.'],
  }),
  'number-representation-encodings': createTopic({
    title: 'تمثيل الأعداد والنصوص والتعليمات داخل الذاكرة',
    level: 'أساسي',
    category: 'الأساسيات العميقة',
    summary:
      'بعد فهم البتات، تحتاج إلى فهم كيف تُمثَّل الأعداد الموقعة والعائمة والنصوص والترميزات والتعليمات داخل الذاكرة، لأن هذا الباب هو الذي يفسر كثيرًا من أخطاء الأنظمة والبرامج لاحقًا.',
    learn: [
      'تفهم signed vs unsigned وtwo’s complement والـ overflow بشكل عملي.',
      'تتعرف على ASCII وUnicode وUTF-8 ولماذا الترميز يؤثر على القراءة والتخزين.',
      'ترى كيف تبدو التعليمات والبيانات داخل الذاكرة على مستوى التمثيل لا على مستوى اللغة فقط.',
    ],
    build: [
      'حوّل يدويًا أمثلة بين decimal وbinary وhex واشرح أثر الطول الثابت والتجاوز overflow.',
      'اختبر ملفات نصية بترميزات مختلفة ولاحظ كيف يفسرها النظام أو البرنامج.',
    ],
    note2026:
      'جزء كبير من البقز الغريبة في الأنظمة والملفات والشبكات يعود في النهاية إلى التمثيل والترميز، لا إلى “تعقيد سحري” في الأداة.',
    resources: [
      resource('Nand2Tetris', docs.nand2tetris),
      resource('OSTEP', docs.ostep),
      resource('MIT OpenCourseWare', docs.mitOcw),
    ],
    tags: ['binary', 'hex', 'encoding', 'unicode', 'overflow'],
    searchKeywords: ['two complement', 'utf8', 'hex representation'],
    fits: ['يناسب من يريد أن يفهم الذاكرة والملفات والشبكات على أرضية صحيحة.'],
    effort: 'من 4 إلى 6 أيام مع مسائل تمثيل وتحويل عملية.',
    finalProject: ['اصنع ملاحظات عملية فيها أمثلة binary وhex وUTF-8 وتفسير لثلاثة أخطاء شائعة بسبب التمثيل.'],
  }),
  'abstraction-layers': patchTopic({
    resources: mergedResources('abstraction-layers', [
      resource('Nand2Tetris', docs.nand2tetris),
      resource('OSTEP', docs.ostep),
    ]),
    fits: ['مهم جدًا قبل أن تتعامل مع لينكس أو النواة كطبقة واحدة مبهمة.'],
  }),
  'cpu-memory-storage': patchTopic({
    resources: mergedResources('cpu-memory-storage', [
      resource('OSTEP', docs.ostep),
      resource('Nand2Tetris', docs.nand2tetris),
      resource('Linux Kernel Docs', docs.linuxKernel),
      resource('mmap(2)', docs.manMmap),
    ]),
    fits: ['هذا الباب يربط بين التنفيذ والذاكرة والتخزين بشكل مفيد جدًا لكل مسارات لينكس اللاحقة.'],
  }),
  'memory-references': patchTopic({
    resources: mergedResources('memory-references', [
      resource('OSTEP', docs.ostep),
      resource('man mmap(2)', docs.manMmap),
    ]),
  }),
  'runtime-execution': patchTopic({
    resources: mergedResources('runtime-execution', [
      resource('ELF format man page', docs.manElf),
      resource('Dynamic Linker', docs.glibcDynamicLinker),
    ]),
  }),
  'compilers-interpreters': patchTopic({
    resources: mergedResources('compilers-interpreters', [
      resource('Crafting Interpreters', docs.craftingInterpreters),
      resource('LLVM Tutorial', docs.llvmTutorial),
    ]),
  }),
  'problem-solving': patchTopic({
    resources: mergedResources('problem-solving', [
      resource('MIT OpenCourseWare', docs.mitOcw),
      resource('Python Tutorial', docs.python),
    ]),
  }),
  'editor-terminal': patchTopic({
    resources: mergedResources('editor-terminal', [
      resource('Ubuntu CLI', docs.ubuntuCli),
      resource('Bash Manual', docs.bashManual),
    ]),
  }),
  'git-github': patchTopic({
    resources: mergedResources('git-github', [
      resource('Getting Started with Git', docs.githubGettingStartedGit),
      resource('GitHub Hello World', docs.githubHelloWorld),
      resource('Git Documentation', docs.git),
      resource('GitHub Skills', docs.githubSkills),
    ]),
  }),
  'html-css-layout': patchTopic({
    resources: mergedResources('html-css-layout', [
      resource('web.dev Learn HTML', docs.webDevLearnHtml),
      resource('web.dev Learn CSS', docs.webDevLearnCss),
      resource('MDN HTML', docs.mdnHtml),
      resource('MDN CSS', docs.mdnCss),
    ]),
  }),
  'javascript-typescript': patchTopic({
    resources: mergedResources('javascript-typescript', [
      resource('web.dev Learn JavaScript', docs.webDevLearnJavascript),
      resource('MDN JavaScript', docs.mdnJs),
      resource('TypeScript Handbook', docs.typescript),
      resource('web.dev Learn', docs.webDevLearn),
    ]),
  }),
  'browser-storage-offline': patchTopic({
    resources: mergedResources('browser-storage-offline', [
      resource('MDN Web Storage', docs.mdnWebStorage),
      resource('MDN IndexedDB', docs.mdnIndexedDb),
      resource('MDN Service Worker', docs.mdnServiceWorker),
    ]),
  }),
  'accessibility-performance': patchTopic({
    resources: mergedResources('accessibility-performance', [
      resource('MDN Accessibility', docs.mdnA11y),
      resource('Playwright', docs.playwright),
    ]),
  }),
  'linux-networking': patchTopic({
    resources: mergedResources('linux-networking', [
      resource('Linux man-pages', docs.man7),
      resource('ArchWiki', docs.archWiki),
      resource('socket(2)', docs.manSocket),
    ]),
    fits: ['يناسب من بدأ يستخدم لينكس ويريد أن يفهم الشبكات من النظام نفسه لا من لوحات جاهزة.'],
  }),
  'systemd-service-operations': patchTopic({
    resources: mergedResources('systemd-service-operations', [
      resource('systemd', docs.systemd),
      resource('systemd.service', docs.systemdService),
    ]),
  }),
  'reverse-proxy-tls-dns': patchTopic({
    resources: mergedResources('reverse-proxy-tls-dns', [
      resource('Nginx Beginner Guide', docs.nginxBeginnersGuide),
      resource('Let’s Encrypt', docs.letsEncryptGettingStarted),
    ]),
  }),
  'docker-compose': patchTopic({
    resources: mergedResources('docker-compose', [
      resource('Docker Get Started', docs.docker),
      resource('QEMU Docs', docs.qemu),
    ]),
  }),
  'c-language-core': patchTopic({
    resources: mergedResources('c-language-core', [
      resource('cppreference C', docs.cppreferenceC),
      resource('GCC Manuals', docs.gcc),
    ]),
  }),
  'c-toolchain-debugging': patchTopic({
    resources: mergedResources('c-toolchain-debugging', [
      resource('GDB Manual', docs.gdb),
      resource('Valgrind Quick Start', docs.valgrindQuickStart),
    ]),
  }),
  'c-linux-systems': patchTopic({
    resources: mergedResources('c-linux-systems', [
      resource('Linux man-pages', docs.man7),
      resource('glibc Manual', docs.glibc),
    ]),
    fits: ['هذا الباب يجب أن يُدرس مع تجارب system calls فعلية داخل VM أو جهاز لينكس.'],
  }),
  'linux-libc-linking': patchTopic({
    fits: ['يناسب من يريد فهم ELF وld.so وواجهات الربط قبل أي تعمق في الحزم أو النواة.'],
  }),
  'linux-tracing-profiling': patchTopic({
    resources: mergedResources('linux-tracing-profiling', [
      resource('strace', docs.strace),
      resource('perf', docs.kernelPerf),
      resource('Valgrind Quick Start', docs.valgrindQuickStart),
    ]),
  }),
  'linux-threads-sync': patchTopic({
    resources: mergedResources('linux-threads-sync', [
      resource('pthreads(7)', docs.manPthreads),
      resource('OSTEP', docs.ostep),
    ]),
  }),
  'linux-sockets-epoll': patchTopic({
    resources: mergedResources('linux-sockets-epoll', [
      resource('socket(2)', docs.manSocket),
      resource('epoll(7)', docs.manEpoll),
    ]),
  }),
  'operating-systems': patchTopic({
    resources: mergedResources('operating-systems', [
      resource('OSTEP', docs.ostep),
      resource('MIT OpenCourseWare', docs.mitOcw),
      resource('Linux Kernel Docs', docs.linuxKernel),
      resource('man7 Linux man-pages', docs.man7),
    ]),
  }),
  'virtual-memory-filesystems': patchTopic({
    resources: mergedResources('virtual-memory-filesystems', [
      resource('mmap(2)', docs.manMmap),
      resource('FHS 3.0', docs.fhs),
    ]),
  }),
  'linux-kernel-uapi-modules': patchTopic({
    resources: mergedResources('linux-kernel-uapi-modules', [
      resource('Kernel Userspace API', docs.kernelUserspaceApi),
      resource('External Modules', docs.kernelExternalModules),
    ]),
  }),
  'linux-cli-filesystem-permissions': createTopic({
    title: 'سطر الأوامر والملفات والصلاحيات في لينكس',
    level: 'ابدأ',
    category: 'Linux',
    summary:
      'ابدأ من التعامل اليومي الحقيقي مع لينكس: التنقل في الشجرة، الصلاحيات، الملكية، الروابط، المتغيرات البيئية، والفرق بين ما تراه في shell وما يحدث في النظام فعلًا.',
    learn: [
      'تفهم شجرة الملفات، home وetc وvar وtmp وproc وsys بشكل عملي.',
      'تتعامل مع chmod وchown وumask وPATH وlinks وsudo بوعي لا بحفظ.',
    ],
    build: [
      'أنشئ مستخدمًا جديدًا، واضبط مجموعات وصلاحيات ومجلدات مشتركة، ثم وثّق سبب كل خطوة.',
      'ابنِ دليل استخدام شخصي يشرح أهم أوامر الملفات والصلاحيات مع أمثلة من جهازك.',
    ],
    note2026: 'كل مسار لينكس لاحقًا سيفترض أنك مرتاح جدًا هنا. لا تتجاوزه بسرعة.',
    resources: [
      resource('Ubuntu CLI', docs.ubuntuCli),
      resource('ArchWiki', docs.archWiki),
      resource('Bash Manual', docs.bashManual),
      resource('GNU Coreutils Manual', docs.gnuCoreutils),
    ],
    tags: ['linux cli', 'permissions', 'filesystem', 'bash'],
    searchKeywords: ['chmod', 'chown', 'umask', 'filesystem tree'],
    fits: ['أفضل بداية عملية قبل الخدمات والشبكات والتوزيعات.'],
    effort: 'من 4 إلى 7 أيام مع ممارسة يومية.',
    finalProject: ['جهز بيئة مستخدم عملية على VM مع صلاحيات ومجلدات وروابط موثقة بالكامل.'],
  }),
  'linux-shell-text-pipelines': createTopic({
    title: 'Shell pipelines وقراءة النصوص بشكل احترافي',
    level: 'أساسي',
    category: 'Linux',
    summary:
      'هذا الباب يحول الطرفية من مكان لتشغيل أوامر منفردة إلى بيئة تحليل وتصفية وتحويل بيانات باستخدام grep وsed وawk وfind وxargs وpipes.',
    learn: [
      'تفهم stdin وstdout وstderr وإعادة التوجيه والpipes بشكل واضح.',
      'تستخدم أدوات النصوص لتصفية السجلات والملفات ونتائج الأوامر بأقل جهد وأعلى وضوح.',
    ],
    build: [
      'حل خمس مهام يومية على سجلات أو ملفات CSV أو نصوص كبيرة باستخدام pipelines فقط.',
      'أنشئ cheatsheet شخصي يشرح متى تستخدم grep أو sed أو awk أو xargs.',
    ],
    note2026: 'هذا الباب يختصر ساعات من العمل اليدوي إذا أتقنته جيدًا.',
    resources: [
      resource('Bash Manual', docs.bashManual),
      resource('GNU grep Manual', docs.gnuGrep),
      resource('GNU sed Manual', docs.gnuSed),
      resource('GNU gawk Manual', docs.gnuGawk),
    ],
    tags: ['shell', 'grep', 'sed', 'awk', 'pipes'],
    searchKeywords: ['stdin stdout stderr', 'grep sed awk', 'find xargs'],
    fits: ['يناسب من يريد أن يقرأ logs أو ملفات نظام أو مخرجات أوامر بسرعة وذكاء.'],
    effort: 'من 5 إلى 8 أيام مع تمارين يومية قصيرة.',
    finalProject: ['ابنِ مجموعة scripts صغيرة لتحليل logs النظام وإخراج تقارير مختصرة.'],
  }),
  'linux-processes-services': createTopic({
    title: 'العمليات والخدمات والسجلات في لينكس',
    level: 'أساسي',
    category: 'Linux',
    summary:
      'هنا تنتقل إلى ما يجعل النظام حيًا: processes وsignals وjobs وservices وjournals وكيف تقرأ حالة النظام وتفسرها عند الأعطال.',
    learn: [
      'تفهم process tree وsignals وforeground/background وexit codes.',
      'تستخدم ps وtop وjournalctl وsystemctl وss لفهم الحالة الجارية للنظام.',
    ],
    build: [
      'شغّل خدمة بسيطة، راقب logs، أرسل signals مختلفة، وسجل النتيجة في runbook.',
      'أنشئ checklist تشخيص لعطل خدمة يبدأ من process state وينتهي عند logs والports.',
    ],
    note2026: 'إدارة الأعطال تبدأ من قراءة العملية والخدمة والسجل بشكل مترابط، لا من إعادة التشغيل العشوائي.',
    resources: [
      resource('systemd', docs.systemd),
      resource('systemd.service', docs.systemdService),
      resource('Linux man-pages', docs.man7),
      resource('ArchWiki', docs.archWiki),
    ],
    tags: ['processes', 'services', 'systemd', 'logs'],
    searchKeywords: ['journalctl', 'systemctl', 'signals', 'process state'],
    fits: ['يناسب من يريد الانتقال من استخدام أوامر لينكس إلى فهم تشغيل النظام فعلًا.'],
    effort: 'من أسبوع إلى أسبوعين مع خدمات وتجارب أعطال صغيرة.',
    finalProject: ['جهز خدمة صغيرة مع دليل تشغيل وتشخيص يشمل logs وsignals وrestart policy.'],
  }),
  'linux-boot-initramfs': createTopic({
    title: 'الإقلاع وinitramfs وما قبل userspace',
    level: 'عملي',
    category: 'Linux',
    summary:
      'هذا الباب يشرح كيف يصل النظام من الـ firmware والـ bootloader إلى kernel ثم initramfs ثم أول userspace process. هو باب محوري قبل بناء التوزيعات أو تخصيص النواة.',
    learn: [
      'تفهم العلاقة بين bootloader وkernel وinitramfs وroot filesystem وinit.',
      'تقرأ kernel parameters وتربطها بمراحل الإقلاع وحل مشاكل boot الأساسية.',
    ],
    build: [
      'التقط log أو trace لرحلة الإقلاع داخل VM واشرح كل مرحلة باختصار واضح.',
      'بدّل kernel parameters وجرب حالات فشل بسيطة ثم وثّق كيف تتعافى منها.',
    ],
    note2026: 'أي شخص يريد بناء image أو توزيعة أو نواة مخصصة يحتاج فهمًا جيدًا لهذا الباب.',
    resources: [
      resource('Kernel Initrd Docs', docs.kernelInitrd),
      resource('Kernel Parameters', docs.kernelBootParams),
      resource('dracut', docs.dracut),
      resource('systemd-boot', docs.systemdBoot),
    ],
    tags: ['boot', 'initramfs', 'kernel parameters', 'userspace'],
    searchKeywords: ['initramfs', 'boot flow', 'kernel parameters', 'systemd-boot'],
    fits: ['يناسب من يتجه نحو النواة أو images أو التوزيعات.'],
    effort: 'من أسبوع إلى أسبوعين مع مختبرات VM.',
    finalProject: ['أنشئ تقريرًا يشرح مسار الإقلاع الكامل لنظامك من bootloader حتى init.'],
  }),
  'linux-kernel-config-build': createTopic({
    title: 'إعداد وبناء نواة لينكس بشكل عملي',
    level: 'عملي',
    category: 'Linux Kernel',
    summary:
      'تعلم هنا كيف تقرأ خيارات النواة، تبني config مناسبًا، تخرج kernel قابلة للإقلاع، وتفهم أثر الخيارات الأساسية بدل نسخ إعدادات لا تعرفها.',
    learn: [
      'تفهم Kconfig وmenuconfig والفرق بين built-in وmodule.',
      'تربط خيارات النواة بما تحتاجه الأجهزة والإقلاع والتجارب داخل VM.',
    ],
    build: [
      'ابنِ نواة مخصصة لـ VM مع config موثق واحتفظ بالفروقات بين الإصدارات.',
      'جرّب تفعيل أو تعطيل subsystems محددة ولاحظ أثرها على الحجم والإقلاع والسلوك.',
    ],
    note2026: 'ابنِ أولًا داخل VM. هذا يوفر بيئة آمنة للتجريب دون إفساد جهازك الرئيسي.',
    resources: [
      resource('Kernel Kbuild Docs', docs.kernelKbuild),
      resource('Kernel Admin Guide', docs.kernelAdminGuide),
      resource('Kernel External Modules', docs.kernelExternalModules),
      resource('QEMU Docs', docs.qemu),
    ],
    tags: ['kernel build', 'kconfig', 'menuconfig', 'qemu'],
    searchKeywords: ['kernel config', 'menuconfig', 'kbuild'],
    fits: ['يناسب من يريد الدخول إلى النواة من باب منظم وقابل للتكرار.'],
    effort: 'من أسبوعين إلى ثلاثة أسابيع مع بناءات متعددة داخل VM.',
    finalProject: ['ابنِ pipeline صغيرة تبني نواة VM وتقلعها وتجمع logs تلقائيًا.'],
  }),
  'linux-device-model-drivers': createTopic({
    title: 'نموذج الأجهزة والتعريفات داخل النواة',
    level: 'متقدم',
    category: 'Linux Kernel',
    summary:
      'هذا الباب يشرح كيف ترى النواة الأجهزة وكيف ترتبط bus وdevice وdriver وsysfs وudev والـ modules، وما الذي تحتاجه قبل الاقتراب من كتابة driver أو تحليل واحد قائم.',
    learn: [
      'تفهم device model وsysfs وudev وhotplug وmodule lifecycle.',
      'تقرأ تعريفًا أو driver بسيطًا وتحدد أين يلتقي مع userspace ومع subsystems الأخرى.',
    ],
    build: [
      'حلل driver صغيرًا قائمًا واشرح مسار probe/remove والربط مع sysfs.',
      'التقط شجرة الأجهزة والـ modules على VM واكتب شرحًا للعلاقة بينها.',
    ],
    note2026: 'حتى لو لم تكتب driver كاملًا الآن، فهم هذا النموذج يفتح لك قراءة جزء كبير من النواة بثقة أكبر.',
    resources: [
      resource('Driver Basics', docs.kernelDriverBasics),
      resource('Kernel Docs', docs.linuxKernel),
      resource('KernelNewbies', docs.kernelNewbies),
      resource('ArchWiki', docs.archWiki),
    ],
    tags: ['drivers', 'device model', 'sysfs', 'udev'],
    searchKeywords: ['linux driver model', 'sysfs', 'udev', 'modules'],
    fits: ['يناسب من يتجه للنواة أو الأنظمة المضمنة أو debugging عتادي برمجي.'],
    effort: 'من أسبوعين إلى ثلاثة أسابيع مع قراءة وتحليل لا مع حفظ فقط.',
    finalProject: ['اكتب وثيقة قصيرة تشرح lifecycle لتعريف أو subsystem محدد مع أمثلة من sysfs وlogs.'],
  }),
  'linux-kernel-debugging': createTopic({
    title: 'تشخيص النواة وتتبعها',
    level: 'متقدم',
    category: 'Linux Kernel',
    summary:
      'بدل القراءة النظرية فقط، هذا الباب يركز على كيف تشخّص سلوك النواة: logs، tracing، perf، debug options، وقراءة المؤشرات التي تساعدك على تضييق المشكلة.',
    learn: [
      'تفهم متى تستخدم dmesg وtracepoints وperf وftrace وأدوات dev-tools الخاصة بالنواة.',
      'تتعلم جمع أدلة كافية قبل تغيير config أو patch عشوائي.',
    ],
    build: [
      'شغّل trace أو perf session على VM واشرح ماذا تعلمت منها.',
      'ابنِ checklist تشخيص يبدأ من logs وينتقل إلى tracing ثم إلى config والتحقق من reproducer.',
    ],
    note2026: 'أفضل من يتقدم في النواة ليس من يحفظ subsystems أكثر، بل من يجمع أدلة أوضح عند المشكلة.',
    resources: [
      resource('Kernel Dev Tools', docs.kernelDevTools),
      resource('perf docs', docs.kernelPerf),
      resource('strace', docs.strace),
      resource('Valgrind Quick Start', docs.valgrindQuickStart),
    ],
    tags: ['kernel debugging', 'perf', 'ftrace', 'dmesg'],
    searchKeywords: ['kernel tracing', 'perf', 'ftrace', 'dmesg'],
    fits: ['يناسب من بدأ يقرأ النواة ويريد منهجية تشخيص قبل الكتابة أو التعديل.'],
    effort: 'من أسبوعين إلى ثلاثة أسابيع مع مختبرات tracing متكررة.',
    finalProject: ['جهز playbook تشخيص kernel issue على VM من أول log إلى أول فرضية قابلة للاختبار.'],
  }),
  'linux-kernel-boot-flow': createTopic({
    title: 'رحلة إقلاع النواة خطوة بخطوة',
    level: 'متقدم',
    category: 'Linux Kernel',
    summary:
      'هذا الباب يربط كل ما قبله: firmware، bootloader، kernel image، initramfs، mount root، وبدء init. الهدف أن ترى flow كاملًا لا أجزاء متفرقة.',
    learn: [
      'ترتب مراحل الإقلاع ترتيبًا صحيحًا مع فهم مسؤولية كل مرحلة.',
      'تميز بين مشاكل bootloader ومشاكل kernel ومشاكل initramfs أو userspace المبكر.',
    ],
    build: [
      'ارسم تسلسل الإقلاع لنظامك داخل VM مع أمثلة على نقاط فشل محتملة في كل مرحلة.',
      'جرب سيناريوهات boot parameters وrootfs مختلفة وسجل ما يتغير.',
    ],
    note2026: 'هذا الباب مهم جدًا لمن يريد images أو distros أو kernels مخصصة، لأنه يجمع الصورة كلها في مسار واحد.',
    resources: [
      resource('Kernel Initrd Docs', docs.kernelInitrd),
      resource('Kernel Parameters', docs.kernelBootParams),
      resource('systemd-boot', docs.systemdBoot),
      resource('QEMU Docs', docs.qemu),
    ],
    tags: ['boot flow', 'bootloader', 'initramfs', 'rootfs'],
    searchKeywords: ['boot sequence', 'kernel boot flow', 'rootfs'],
    fits: ['يناسب من يريد فهم الإقلاع كقصة واحدة لا كأدوات منفصلة.'],
    effort: 'من أسبوع إلى أسبوعين.',
    finalProject: ['أنشئ مخططًا تفصيليًا لمسار الإقلاع مع ملاحظات debugging لكل مرحلة.'],
  }),
  'linux-kernel-labs-roadmap': createTopic({
    title: 'خطة مختبرات عملية للتعمق في النواة',
    level: '2026',
    category: 'Linux Kernel',
    summary:
      'بدل التشتت بين عشرات المقالات، هذا الباب يرسم خطة مختبرات مرتبة: VM، build، boot، tracing، قراءة subsystems، وتحليل patch أو bug صغير بشكل واقعي.',
    learn: [
      'تبني مسار تدريب تدريجي من قراءة docs إلى مختبرات reproducible وآمنة.',
      'تعرف كيف ترتب وقتك بين build وقراءة الكود وقياس السلوك وكتابة الملاحظات.',
    ],
    build: [
      'جهز مختبر kernel متكرر بآلة افتراضية وصور snapshots ومجلد ملاحظات وlogs.',
      'اختر subsystem واحدة ودوّن خطة 4 أسابيع لقراءتها وتجريبها وقياسها.',
    ],
    note2026: 'أفضل طريقة للتقدم هنا هي المختبرات الصغيرة المتكررة، لا القفز مباشرة إلى patchات كبيرة.',
    resources: [
      resource('Bootlin Kernel Training', docs.bootlinKernelLabs),
      resource('Kernel Docs', docs.linuxKernel),
      resource('KernelNewbies', docs.kernelNewbies),
      resource('QEMU Docs', docs.qemu),
    ],
    tags: ['kernel labs', 'linux vm', 'kernel study plan'],
    searchKeywords: ['kernel labs roadmap', 'kernel training', 'qemu kernel lab'],
    fits: ['يناسب من يريد مسارًا تطبيقيًا واضحًا بدل الغرق في القراءة فقط.'],
    effort: 'من 3 إلى 6 أسابيع كمختبر تأسيسي.',
    finalProject: ['ابنِ roadmap تعلم شخصية للنواة مع مختبرات أسبوعية ومخرجات قابلة للقياس.'],
  }),
  'linux-filesystem-hierarchy-packaging': createTopic({
    title: 'FHS والحزم وتقسيم النظام في التوزيعات',
    level: 'عملي',
    category: 'Linux Distribution',
    summary:
      'لفهم بناء التوزيعات يجب أن تعرف أين تذهب الملفات ولماذا، وكيف تختلف الحزم runtime وdevelopment وdebug، وكيف يتقاطع ذلك مع FHS والـ ABI والاعتماديات.',
    learn: [
      'تفهم FHS، layout النظام، والفرق بين /usr و/etc و/var وغيرها من زوايا تشغيلية وحزميّة.',
      'تتعرف على بنية الحزم والاعتماديات والـ metadata والـ scripts المصاحبة للتثبيت.',
    ],
    build: [
      'حلل عدة حزم من توزيعات مختلفة واشرح أين تضع الملفات ولماذا.',
      'اكتب مقارنة قصيرة بين .deb و.rpm من زاوية البنية وسير التثبيت.',
    ],
    note2026: 'هذا الباب يوضح أن بناء التوزيعات ليس جمع ملفات فحسب، بل بناء تعاقدات layout وpackaging واضحة.',
    resources: [
      resource('FHS 3.0', docs.fhs),
      resource('Debian Maint Guide', docs.debianMaintGuide),
      resource('Fedora Packaging Guidelines', docs.fedoraPackaging),
      resource('RPM Packaging Guide', docs.rpmPackagingGuide),
    ],
    tags: ['fhs', 'packaging', 'deb', 'rpm'],
    searchKeywords: ['filesystem hierarchy', 'linux packaging', 'deb rpm'],
    fits: ['يناسب من بدأ يدخل فعليًا في هندسة التوزيعات أو images.'],
    effort: 'من أسبوع إلى أسبوعين.',
    finalProject: ['أنشئ وثيقة packaging notes تشرح layout النظام وسياسة ملفات حزمة بسيطة.'],
  }),
  'linux-buildroot-lfs': createTopic({
    title: 'من Linux From Scratch إلى Buildroot: البناء من الجذور',
    level: 'متقدم',
    category: 'Linux Distribution',
    summary:
      'هذا هو الباب الذي يربط بين البناء التعليمي الصريح في LFS والبناء العملي الأكثر إنتاجية في Buildroot. هنا ترى toolchain والجذر الأساسي rootfs وما الذي تبنيه بنفسك وما الذي تؤتمته الأدوات.',
    learn: [
      'تفهم لماذا LFS ممتاز للفهم ولماذا Buildroot ممتاز للبناء السريع القابل للتكرار.',
      'تتعرف على مراحل toolchain وroot filesystem وpackage selection وصور الإقلاع.',
    ],
    build: [
      'ابنِ مختبر LFS أو جزءًا منه لتفهم السلسلة يدويًا، ثم كرر الفكرة عبر Buildroot.',
      'قارن بين artifactات المخرجات وما الذي بنته كل أداة وما الذي تتوقعه أنت.',
    ],
    note2026: 'LFS يعطيك الفهم، وBuildroot يعطيك السرعة والعملية. استخدامهما معًا قرار ذكي لا تناقض فيه.',
    resources: [
      resource('Linux From Scratch', docs.lfs),
      resource('Beyond Linux From Scratch', docs.blfs),
      resource('Buildroot Manual', docs.buildrootManual),
      resource('BusyBox', docs.busybox),
    ],
    tags: ['lfs', 'buildroot', 'rootfs', 'toolchain'],
    searchKeywords: ['linux from scratch', 'buildroot rootfs', 'busybox'],
    fits: ['يناسب من يريد أن يفهم ويطبق معًا، خاصة قبل الانتقال إلى Yocto أو الصور المتقدمة.'],
    effort: 'من أسبوعين إلى شهر.',
    finalProject: ['ابنِ rootfs صغيرة موثقة عبر Buildroot وقارنها بمختبر LFS تعليمي مختصر.'],
  }),
  'linux-distro-on-existing-base': createTopic({
    title: 'بناء توزيعة أو image فوق توزيعة موجودة',
    level: 'متقدم',
    category: 'Linux Distribution',
    summary:
      'ليس كل بناء توزيعة يبدأ من الصفر. هذا الباب يشرح كيف تبني فوق Debian أو Fedora أو قاعدة موجودة باستخدام أدوات مثل mkosi أو KIWI أو live-build مع فهم ما الذي تعيد استخدامه وما الذي تخصصه.',
    learn: [
      'تميّز بين full distro engineering وبين image engineering فوق base distro.',
      'تفهم اختيار الحزم، init، boot، users، configuration presets، والتحديثات فوق قاعدة جاهزة.',
    ],
    build: [
      'ابنِ image قابلة للإقلاع فوق Debian أو Fedora وحدد ما الذي خصصته في الطبقة العليا.',
      'قارن بين أدوات image factory مثل mkosi وKIWI أو Debian live من زاوية workflow والمخرجات.',
    ],
    note2026: 'هذا المسار عملي جدًا لمن يريد نتيجة قوية بسرعة قبل الدخول في بناء السلسلة كاملة من الصفر.',
    resources: [
      resource('mkosi', docs.mkosi),
      resource('KIWI', docs.kiwi),
      resource('Debian Live Manual', docs.debianLiveManual),
      resource('Debian Handbook', docs.debianHandbook),
    ],
    tags: ['linux image', 'mkosi', 'kiwi', 'debian live'],
    searchKeywords: ['build linux image', 'mkosi', 'kiwi', 'debian live'],
    fits: ['يناسب من يريد منتجًا عمليًا بسرعة مع بقاء الفهم المعماري حاضرًا.'],
    effort: 'من أسبوعين إلى ثلاثة أسابيع.',
    finalProject: ['اصنع image مخصصة قابلة للإقلاع مع README يشرح الطبقات والقرارات والمخرجات.'],
  }),
  'linux-package-repositories-signing': createTopic({
    title: 'المستودعات والتوقيع وسلسلة الثقة',
    level: 'متقدم',
    category: 'Linux Distribution',
    summary:
      'الحزم وحدها لا تكفي. تحتاج أيضًا إلى repository metadata وتواقيع ومفاتيح وسياسات تحديث وثقة. هذا الباب يشرح كيف تتحرك الحزمة من build إلى مستودع إلى جهاز المستخدم بأمان واتساق.',
    learn: [
      'تفهم metadata الخاصة بالمستودعات، المفاتيح، التواقيع، والتحقق عند التحديث.',
      'تربط بين packaging وrelease engineering وsupply chain من زاوية توزيعات لينكس.',
    ],
    build: [
      'وثّق سلسلة الثقة من بناء حزمة حتى استهلاكها من جهاز عميل.',
      'صمّم سياسة مفاتيح وتوقيع وتدوير للمفاتيح على مستوى مشروع تعليمي.',
    ],
    note2026: 'هذا الباب مهم جدًا لأن جودة التوزيعة تقاس أيضًا بثقتها وسلامة تحديثها، لا بمجرد نجاح الإقلاع.',
    resources: [
      resource('SPDX Learn', docs.spdxLearn),
      resource('CycloneDX', docs.cyclonedxSbom),
      resource('Debian Maint Guide', docs.debianMaintGuide),
      resource('Fedora Packaging Guidelines', docs.fedoraPackaging),
    ],
    tags: ['repositories', 'signing', 'sbom', 'supply chain'],
    searchKeywords: ['package signing', 'repository metadata', 'linux supply chain'],
    fits: ['يناسب من يريد بناء توزيعة موثوقة لا مجرد image تجريبية.'],
    effort: 'من أسبوع إلى أسبوعين.',
    finalProject: ['اكتب تصميمًا لسلسلة الثقة الخاصة بتوزيعتك أو image مشروعك مع مخطط توقيع وتحديث.'],
  }),
  'linux-release-images-installers': createTopic({
    title: 'الإصدارات والصور ووسائط التثبيت',
    level: 'متقدم',
    category: 'Linux Distribution',
    summary:
      'الانتقال من build ناجح إلى إصدار usable يحتاج فهم image formats وinstallers وboot media وإدارة الإصدارات وقنوات النشر وما الذي يجب اختباره قبل الإعلان عن release.',
    learn: [
      'تتعرف على صور raw وqcow2 وiso وغيرها حسب غرض الاستخدام.',
      'تفهم الفرق بين image development وrelease image ووسائط التثبيت ومسؤوليات كل واحدة.',
    ],
    build: [
      'ولّد أكثر من نوع image لمشروع واحد وقارن حجمها وطريقة إقلاعها واستعمالها.',
      'صمّم checklist release قبل نشر image: boot، update، rollback، docs، hashes.',
    ],
    note2026: 'كثير من المشاريع تصل إلى build ناجح ثم تتعثر عند مرحلة “كيف أوصل هذا للمستخدم بأمان ووضوح”.',
    resources: [
      resource('QEMU Docs', docs.qemu),
      resource('mkosi', docs.mkosi),
      resource('KIWI', docs.kiwi),
      resource('Debian Live Manual', docs.debianLiveManual),
    ],
    tags: ['release engineering', 'iso', 'qcow2', 'installer'],
    searchKeywords: ['linux image formats', 'installer image', 'release checklist'],
    fits: ['يناسب من بدأ ينتقل من التجارب الشخصية إلى artifactات قابلة للنشر.'],
    effort: 'من أسبوع إلى أسبوعين.',
    finalProject: ['أخرج release candidate لتوزيعتك أو image مشروعك مع checklist وإرشادات تجربة.'],
  }),
  'linux-cross-compilation-toolchains': createTopic({
    title: 'الـ toolchains والبناء المتقاطع cross compilation',
    level: '2026',
    category: 'Linux Distribution',
    summary:
      'حين تنتقل من جهازك الحالي إلى target مختلف، يظهر باب الـ cross toolchains والـ sysroots والـ ABI والتجميع المتقاطع. هذا الباب مهم جدًا للتوزيعات والأجهزة المضمنة وصور لينكس المخصصة.',
    learn: [
      'تفهم sysroot وtriplets وhost/build/target والفرق بينها.',
      'ترى كيف تتحكم الأدوات في compiler وlinker وheaders وlibraries للمنصة الهدف.',
    ],
    build: [
      'جهز toolchain متقاطعة بسيطة وابنِ بها برنامجًا وتجربة rootfs موجهة لـ target مختلف.',
      'قارن بين Buildroot وYocto وcrosstool-NG من زاوية إدارة toolchain.',
    ],
    note2026: 'هذا الباب هو الذي يفصل بين “أبني على جهازي فقط” و“أبني لمنصة هدف حقيقية”.',
    resources: [
      resource('crosstool-NG', docs.crosstoolNg),
      resource('Buildroot Manual', docs.buildrootManual),
      resource('Yocto Project Docs', docs.yocto),
      resource('Binutils Docs', docs.binutils),
    ],
    tags: ['cross compilation', 'toolchain', 'sysroot', 'abi'],
    searchKeywords: ['cross compilation linux', 'sysroot', 'host build target'],
    fits: ['يناسب من يريد صورًا أو توزيعات لأهداف مختلفة أو أجهزة مضمنة.'],
    effort: 'من أسبوعين إلى ثلاثة أسابيع.',
    finalProject: ['ابنِ artifact يعمل على target مختلف مع توثيق كامل لسلسلة البناء المتقاطعة.'],
  }),
  'linux-init-userspace-integration': createTopic({
    title: 'تكامل init وuserspace والخدمات',
    level: '2026',
    category: 'Linux Distribution',
    summary:
      'بعد الإقلاع الأولي، تحتاج التوزيعة إلى userspace منظم: init، services، defaults، users، logs، networking، وpolicies واضحة. هذا الباب يربط بين النواة والحزم وتجربة النظام القابلة للاستخدام.',
    learn: [
      'تفهم ما الذي يجعل النظام “يصلح للاستخدام” بعد boot: init، service presets، configs، users، policies.',
      'تربط بين initramfs وrootfs وservice layout وfirst boot experience.',
    ],
    build: [
      'جهز صورة نظام فيها service presets واضحة وfirst boot behavior موثق.',
      'وثّق كيف تنتقل من boot ناجح إلى userspace منظّم قابل للتشغيل والصيانة.',
    ],
    note2026: 'تجربة المستخدم الأولى للنظام تأتي من هذا الباب أكثر مما تأتي من build system نفسه.',
    resources: [
      resource('systemd', docs.systemd),
      resource('systemd.service', docs.systemdService),
      resource('dracut', docs.dracut),
      resource('Debian Handbook', docs.debianHandbook),
    ],
    tags: ['userspace integration', 'init', 'systemd', 'services'],
    searchKeywords: ['first boot', 'userspace integration', 'systemd presets'],
    fits: ['يناسب من يريد أن يحول image قابلة للإقلاع إلى نظام usable فعلاً.'],
    effort: 'من أسبوع إلى أسبوعين.',
    finalProject: ['ابنِ userspace integration plan لتوزيعتك يشمل services وdefaults وlogs وnetworking.'],
  }),
  'linux-distribution-testing-maintenance': createTopic({
    title: 'اختبار التوزيعة وصيانتها وتكرارية البناء',
    level: '2026',
    category: 'Linux Distribution',
    summary:
      'آخر خطوة تجعل العمل ناضجًا: كيف تختبر الإقلاع والتحديث والتراجع rollback والصيانة المستمرة وتكرارية البناء reproducibility والتوثيق بعد كل release.',
    learn: [
      'تفهم testing matrix الخاصة بالتوزيعات: boot، install، update، service health، rollback، packages.',
      'تربط بين الصيانة المستمرة والوثائق وملاحظات الإصدارات وتكرارية البناء.',
    ],
    build: [
      'أنشئ testing matrix حقيقية لصورة أو توزيعة صغيرة مع سيناريوهات boot/update/failure.',
      'اكتب runbook صيانة بعد release يشمل checklists وknown issues وخطة rollback.',
    ],
    note2026: 'المشروع الذي ينجح في build واحدة فقط ليس بعدُ توزيعة محترمة. النضج يظهر في الاختبار والصيانة وإعادة البناء بثقة.',
    resources: [
      resource('Reproducible Builds Docs', docs.reproducibleBuilds),
      resource('Playwright', docs.playwright),
      resource('QEMU Docs', docs.qemu),
      resource('Linux From Scratch', docs.lfs),
    ],
    tags: ['distribution testing', 'reproducible builds', 'release maintenance'],
    searchKeywords: ['reproducible builds', 'linux release testing', 'rollback'],
    fits: ['يناسب من يريد أن يحول التجربة التعليمية إلى هندسة إصدار قابلة للاستمرار.'],
    effort: 'من أسبوعين إلى ثلاثة أسابيع.',
    finalProject: ['ابنِ testing and maintenance playbook لتوزيعة أو image مشروعك مع matrix واضحة.'],
  }),
  'why-programming': patchTopic({
    resources: mergedResources('why-programming', [
      resource('Computer History Museum', docs.computerHistory),
      resource('MIT OpenCourseWare', docs.mitOcw),
    ]),
  }),
  'why-computers-matter': patchTopic({
    resources: mergedResources('why-computers-matter', [
      resource('Computer History Museum', docs.computerHistory),
      resource('Nand2Tetris', docs.nand2tetris),
    ]),
  }),
  'history-of-computers': patchTopic({
    resources: mergedResources('history-of-computers', [
      resource('Computer History Museum', docs.computerHistory),
      resource('MIT OpenCourseWare', docs.mitOcw),
    ]),
  }),
  'computer-components': patchTopic({
    resources: mergedResources('computer-components', [
      resource('Nand2Tetris', docs.nand2tetris),
      resource('OSTEP', docs.ostep),
      resource('Computer History Museum', docs.computerHistory),
      resource('MIT OpenCourseWare', docs.mitOcw),
    ]),
  }),
  'hardware-software-os': patchTopic({
    resources: mergedResources('hardware-software-os', [
      resource('OSTEP', docs.ostep),
      resource('Nand2Tetris', docs.nand2tetris),
    ]),
  }),
  'logic-boolean-models': patchTopic({
    resources: mergedResources('logic-boolean-models', [
      resource('Nand2Tetris', docs.nand2tetris),
      resource('MIT OpenCourseWare', docs.mitOcw),
      resource('OSTEP', docs.ostep),
      resource('Computer History Museum', docs.computerHistory),
    ]),
  }),
  'variables-control-flow': patchTopic({
    resources: mergedResources('variables-control-flow', [
      resource('Python Tutorial', docs.python),
      resource('Node.js Learn', docs.node),
    ]),
  }),
  'functions-modules': patchTopic({
    resources: mergedResources('functions-modules', [
      resource('Python Library Reference', docs.pythonLibrary),
      resource('Node.js Learn', docs.node),
    ]),
  }),
  'data-structures-core': patchTopic({
    resources: mergedResources('data-structures-core', [
      resource('MIT OpenCourseWare', docs.mitOcw),
      resource('Python Tutorial', docs.python),
    ]),
  }),
  'algorithms-thinking': patchTopic({
    resources: mergedResources('algorithms-thinking', [
      resource('MIT OpenCourseWare', docs.mitOcw),
      resource('Nand2Tetris', docs.nand2tetris),
    ]),
  }),
  'debugging-error-handling': patchTopic({
    resources: mergedResources('debugging-error-handling', [
      resource('GDB Manual', docs.gdb),
      resource('Node.js Learn', docs.node),
    ]),
  }),
  'testing-basics': patchTopic({
    resources: mergedResources('testing-basics', [
      resource('Vitest', docs.vitest),
      resource('Pytest', docs.pytest),
      resource('Playwright', docs.playwright),
    ]),
  }),
  'recursion-iteration-patterns': patchTopic({
    resources: mergedResources('recursion-iteration-patterns', [
      resource('MIT OpenCourseWare', docs.mitOcw),
      resource('Crafting Interpreters', docs.craftingInterpreters),
    ]),
  }),
  'docs-code-review': patchTopic({
    resources: mergedResources('docs-code-review', [
      resource('GitHub Skills', docs.githubSkills),
      resource('GitHub Actions Docs', docs.ghActions),
    ]),
  }),
  'package-managers': patchTopic({
    resources: mergedResources('package-managers', [
      resource('Python Packaging', docs.pythonPackaging),
      resource('Docker Get Started', docs.docker),
    ]),
  }),
  'linux-namespaces-cgroups-isolation': createTopic({
    title: 'العزل في لينكس: namespaces وcgroups والحاويات من الداخل',
    level: 'عملي',
    category: 'Linux',
    summary:
      'هذا الباب يشرح لماذا تبدو الحاويات خفيفة داخل لينكس: namespaces لعزل الرؤية، وcgroups لضبط الموارد، وربط ذلك بالعمليات والـPID tree والـmounts والشبكات والـuser namespaces.',
    learn: [
      'تفهم أنواع namespaces الأساسية: PID وmount وnetwork وUTS وIPC وuser.',
      'تتعرف على cgroups v2 ولماذا هي أساس ضبط CPU والذاكرة والـIO في الأنظمة الحديثة.',
      'تربط بين العزل والعمليات وsystemd والحاويات بدل النظر إليها كأدوات متفرقة.',
    ],
    build: [
      'جرّب عزل عملية داخل namespace بسيطة ثم افحص ما الذي تراه وما الذي يختفي عنها.',
      'راقب حدود الموارد عبر cgroups وشغّل workload صغيرة لتفهم أثرها بوضوح.',
    ],
    note2026:
      'أي فهم جاد للحاويات أو service isolation في لينكس يحتاج المرور من هذا الباب، لا من أوامر Docker وحدها.',
    resources: [
      resource('namespaces(7)', docs.manNamespaces),
      resource('user_namespaces(7)', docs.manUserNamespaces),
      resource('Kernel cgroup v2 Docs', docs.kernelCgroupV2),
      resource('systemd', docs.systemd),
    ],
    tags: ['namespaces', 'cgroups', 'containers', 'isolation'],
    searchKeywords: ['linux namespaces', 'cgroups v2', 'container isolation'],
    fits: ['يناسب من يريد فهم الحاويات من داخل لينكس نفسه لا من واجهات الأدوات فقط.'],
    effort: 'من أسبوع إلى أسبوعين مع تجارب namespaced processes وقيود موارد صغيرة.',
    finalProject: ['ابنِ مختبرًا يشرح عزل عملية واحدة عبر namespaces وحدودها عبر cgroups مع تقرير ملاحظات واضح.'],
  }),
  'linux-ebpf-observability': createTopic({
    title: 'eBPF والمراقبة الحديثة في لينكس',
    level: 'متقدم',
    category: 'Linux',
    summary:
      'بعد strace وperf، يأتي هذا الباب ليوضح eBPF كأداة مراقبة وقياس وتفسير سلوك متقدم داخل لينكس، مع فهم أولي لـBPF programs وhooks وlibbpf بدل مجرد تشغيل أدوات جاهزة بلا سياق.',
    learn: [
      'تفهم أين يدخل eBPF في مسار الملاحظة tracing والقياس داخل النواة.',
      'تتعرف على الفكرة العامة للـhooks والـmaps وlibbpf وكيف تختلف عن أدوات التتبع التقليدية.',
      'تربط بين perf وtracepoints وeBPF بدل أن تراها عوالم منفصلة.',
    ],
    build: [
      'شغّل مثال مراقبة بسيط مبني على eBPF أو tracepoints وفسر ما الذي يقيسه فعلًا.',
      'قارن بين نفس المشكلة عند تحليلها بـstrace ثم perf ثم eBPF لتعرف متى تختار كل أداة.',
    ],
    note2026:
      'هذا الباب ليس للمبتدئ، لكنه صار مهمًا جدًا لأي شخص يريد observability عميقة على لينكس الحديث.',
    resources: [
      resource('Kernel BPF Docs', docs.kernelBpf),
      resource('libbpf Docs', docs.kernelLibbpf),
      resource('perf docs', docs.kernelPerf),
      resource('Linux man-pages', docs.man7),
    ],
    tags: ['ebpf', 'observability', 'tracing', 'perf'],
    searchKeywords: ['linux ebpf', 'libbpf', 'tracepoints', 'perf'],
    fits: ['يناسب من تعدى أدوات التتبع الأساسية ويريد طبقة أقوى للملاحظة والتشخيص.'],
    effort: 'من أسبوعين إلى ثلاثة أسابيع مع أمثلة tracing عملية.',
    finalProject: ['وثّق مقارنة عملية بين strace وperf وeBPF على نفس workload أو خدمة صغيرة.'],
  }),
  'linux-capabilities-seccomp': createTopic({
    title: 'capabilities وseccomp وLandlock: الصلاحيات الحديثة في لينكس',
    level: 'متقدم',
    category: 'Linux',
    summary:
      'هذا الباب يشرح كيف خرج لينكس من نموذج root/non-root البسيط إلى نموذج أدق: capabilities لتجزئة القوة، وseccomp لتقليل surface الخاصة بالـsyscalls، وLandlock لتقييد الوصول بأسلوب حديث.',
    learn: [
      'تفهم لماذا capabilities أدق من SUID ولماذا تهم في الخدمات والبرامج الحساسة.',
      'تتعرف على seccomp كأسلوب لتقليل واجهة النظام المتاحة للعملية.',
      'ترى أين يدخل Landlock في نماذج التقييد الحديثة داخل userspace.',
    ],
    build: [
      'حلل برنامجًا أو خدمة صغيرة وحدد ما القدرات capabilities التي تحتاجها فعلًا وما الذي يمكن سحبه منها.',
      'جرّب نموذج seccomp أو تقييد وصول ملفات صغيرًا داخل مختبر VM وآمن.',
    ],
    note2026:
      'هذا الباب مهم جدًا لمن يريد فهم أمني لينكسي حقيقي داخل الخدمات والحاويات وأدوات التوزيعات.',
    resources: [
      resource('capabilities(7)', docs.manCapabilities),
      resource('seccomp(2)', docs.manSeccomp),
      resource('landlock(7)', docs.manLandlock),
      resource('Kernel Docs', docs.linuxKernel),
    ],
    tags: ['capabilities', 'seccomp', 'landlock', 'linux security'],
    searchKeywords: ['linux capabilities', 'seccomp', 'landlock'],
    fits: ['يناسب من يريد ربط الأنظمة بالأمن العملي داخل لينكس نفسه.'],
    effort: 'من أسبوع إلى أسبوعين مع مختبرات تقييد آمنة.',
    finalProject: ['اكتب policy notes لخدمة صغيرة تحدد capabilities وقيود seccomp وما الذي تحميه ولماذا.'],
  }),
  'linux-kernel-contribution-workflow': createTopic({
    title: 'كيف تقترب من مساهمات النواة فعليًا',
    level: '2026',
    category: 'Linux Kernel',
    summary:
      'هذا الباب لا يشرح الكود فقط، بل workflow الحقيقي للاقترب من المساهمة: قراءة docs/process، تجهيز patches، فهم mailing lists، checklists الإرسال، وكيف تدخل تدريجيًا بلا قفزة عمياء.',
    learn: [
      'تفهم لماذا ثقافة النواة مبنية على process واضح بقدر ما هي مبنية على الكود نفسه.',
      'تتعرف على أساسيات patch submission وreview etiquette والـmaintainers والـmailing list flow.',
      'تتعلم كيف تختار أول مساهمة مناسبة بدل محاولة قفزة كبيرة جدًا من البداية.',
    ],
    build: [
      'جهز مختبرًا يمر على patch صغيرة أو تحليل issue أو قراءة commit history مع notes واضحة.',
      'اكتب checklist شخصية لأول مساهمة محتملة في subsystem اخترتها.',
    ],
    note2026:
      'من يريد دخول النواة بجد يحتاج أن يفهم process المساهمة بقدر فهمه للكود، وإلا سيتوقف عند القراءة فقط.',
    resources: [
      resource('Kernel Process Docs', docs.kernelProcessDocs),
      resource('Submitting Patches', docs.kernelSubmittingPatches),
      resource('Kernel Submit Checklist', docs.kernelSubmitChecklist),
      resource('KernelNewbies', docs.kernelNewbies),
    ],
    tags: ['linux kernel contribution', 'patches', 'mailing list', 'maintainers'],
    searchKeywords: ['linux kernel submitting patches', 'kernel contribution workflow'],
    fits: ['يناسب من صار قريبًا من النواة ويريد أول اقتراب عملي من المساهمة لا مجرد الدراسة.'],
    effort: 'من أسبوع إلى أسبوعين كمدخل أولي قبل أول patch حقيقية.',
    finalProject: ['أنشئ contribution plan لأول subsystem تريد الاقتراب منه مع checklist وقراءات ومخاطر معروفة.'],
  }),
  'linux-yocto-layers-recipes': createTopic({
    title: 'Yocto layers وrecipes وكيف تبني metadata نظيفة',
    level: '2026',
    category: 'Linux Distribution',
    summary:
      'هذا الباب يركز على الجزء الذي يربك كثيرين في Yocto: layers وrecipes وmetadata والعلاقة بين التخصيص والـreproducibility والاعتماديات. الهدف هو فهم البناء المنهجي لا مجرد تشغيل أوامر bitbake.',
    learn: [
      'تفهم بنية layer ولماذا تفصل التخصيصات بهذا الشكل في Yocto.',
      'تتعرف على recipes والـtasks والـmetadata وكيف تتراكم فوق بعضها.',
      'ترى متى يكون Yocto أنسب من Buildroot ومتى يصبح overkill.',
    ],
    build: [
      'أضف layer صغيرة فيها recipe أو تخصيص واضح ثم وثّق كيف دخلت في build graph.',
      'قارن بين تخصيص بسيط في Buildroot وتخصيص مشابه في Yocto من زاوية التعقيد والقوة.',
    ],
    note2026:
      'Yocto قوي جدًا، لكن من دون فهم layers وrecipes يتحول سريعًا إلى صندوق أسود ضخم. هذا الباب يكسر ذلك.',
    resources: [
      resource('Yocto Project Docs', docs.yocto),
      resource('Yocto Layers Manual', docs.yoctoLayers),
      resource('Buildroot Manual', docs.buildrootManual),
      resource('crosstool-NG', docs.crosstoolNg),
    ],
    tags: ['yocto', 'layers', 'recipes', 'bitbake', 'distribution metadata'],
    searchKeywords: ['yocto layers', 'yocto recipes', 'bitbake metadata'],
    fits: ['يناسب من يريد أن يبني توزيعات أو images قابلة للتخصيص المنهجي طويل المدى.'],
    effort: 'من أسبوعين إلى ثلاثة أسابيع مع buildات وتجارب layer صغيرة.',
    finalProject: ['ابنِ layer تعليمية صغيرة توضح recipe واحدة وتخصيص image واحد مع شرح pipeline البناء.'],
  }),
} satisfies Record<string, TopicOverride>;
