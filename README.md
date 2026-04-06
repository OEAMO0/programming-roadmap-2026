# خريطة تعلّم البرمجة 2026

واجهة ويب تفاعلية بالعربية لعرض خريطة تعلّم برمجة حديثة حتى تاريخ `2026-04-06`، مبنية فوق مكتبة جاهزة للرودماب والـ flow بدل بناء محرك الرسم من الصفر.

## الموقع الرسمي

[افتح النسخة المنشورة للموقع](https://programming-roadmap-2026.devbread.workers.dev/)

## ما الموجود الآن؟

- خريطة كبيرة قابلة للسحب والتكبير والتصغير
- شريط علوي أخف مع بحث وفلترة دون تغيير شكل التصميم الأساسي
- أزرار علوية مضغوطة بالأيقونات مع قائمة أدوات صغيرة لتقليل المساحة على البي سي والجوال
- نافذة شرح جانبية تظهر عند الضغط على أي عنصر
- وضع فاتح ووضع داكن
- اختصارات سريعة للبحث: `/` أو `Ctrl/Cmd + K` ثم `Enter` لفتح أول نتيجة مطابقة
- تنقل بالأسهم داخل نتائج البحث السريعة نفسها قبل الفتح
- اختصار عملي باسم `اذهب إلى المسار مباشرة` للانتقال السريع إلى المسارات الكبيرة دون فلترة ثم تحريك يدوي داخل الخريطة
- مسارات مترابطة من لماذا وُجدت البرمجة والكمبيوتر أصلًا حتى التخصص والنمو المهني
- مسار إضافي لتطوير الألعاب والمحركات
- مسارات أعمق للبرمجة منخفضة المستوى: `C` و `C++` و `Linux / OS`
- مسار إضافي لهندسة `Python` بشكل عملي ومتدرج
- تخصصات جديدة مثل `Systems Programming Specialist` و `Python Engineering Specialist` و `Embedded / Linux Specialist` و `C++ Performance Specialist`
- محتوى أعمق بكثير في كل مسار مع توسعة واضحة في البداية والنهاية
- بحث وفلترة داخل الخريطة حسب المسار أو المستوى أو الكلمات المفتاحية
- رابط مباشر يشارك نفس حالة الخريطة الحالية: الموضوع المفتوح، البحث، والفلاتر
- نتائج بحث سريعة مختصرة تظهر عند الكتابة بدل الاعتماد فقط على تمييز العقد
- أيقونات حالة بدل الشريط اللوني الجانبي داخل العقد
- كلمات بحث مفيدة داخل نافذة الشرح عندما يكون الموضوع مناسبًا للبحث الذاتي
- روابط إرشادية داخل نافذة الشرح: ما الذي يفيد قبله، ما الذي يأتي بعده، ومسار قريب أو بديل
- أقسام إرشادية جديدة داخل نافذة الشرح: أخطاء شائعة بشكل مبسط، mini-lab صغير، ومصادر مقسمة إلى مصدر رسمي ومصدر مبسط ومصادر إضافية
- مشاريع ختامية خفيفة للمسارات والتخصصات الأساسية لتقوية البورتفوليو والتطبيق العملي
- تحسينات خفيفة لعرض الواجهة على الجوال والأجهزة الضيقة
- نافذة شرح أغنى تعرض إرشادًا عمليًا: ما الذي تراجعه قبل الموضوع، ماذا بعده، أفكار مشاريع، وعبارات بحث مفيدة
- توسعة أوضح داخل `Frontend / Web` تشمل التخزين المحلي و `Service Workers / PWA` و `IndexedDB` و `Canvas / WebGPU` و `frontend testing`
- توسعة أوضح داخل `Architecture / Systems` تشمل `backpressure` و `graceful degradation` و `failure modes`
- توسعة أوضح داخل `Quality / Security` تشمل `OAuth / OIDC` و `SBOM` و `dependency auditing` و `fuzzing` و `incident response basics`
- توسعة أوضح داخل `AI Engineering` تشمل `chunking / indexing` و `eval datasets` و `cost control / caching` و `tool/agent failure handling`
- توسعة أوضح داخل `Computer Science` تشمل `virtual memory` و `memory model` و `filesystems internals` و `consensus / replication basics`
- تعميق إضافي داخل مسار `Linux / Systems` يشمل `glibc` والربط الديناميكي وواجهات النواة و `libm / GSL`
- تعميق إضافي داخل مسار `Linux / Systems` يشمل أيضًا `strace / perf / valgrind` و `mmap` وقراءة `ELF`
- تعميق رياضي جديد داخل `C++` و `Python` وألعاب الويب ومسار المحركات نفسه، مع مصادر رسمية أقوى مثل `Python docs` و `NumPy / SciPy` و `Eigen` و `MDN` و `Godot`
- توسيع المسارات المطلوبة في `Linux / Systems` و`Backend / Data` و`Cloud / Platform` و`Python Engineering` و`Game Dev / Engines`
- مسار مرجعي مستقل على شكل `أطلس المصادر` يجمع وثائق وروابط رسمية لمسارات خارج الخريطة الأساسية مثل الموبايل الأصلي، الأمن، هندسة البيانات، الأنظمة المضمنة، تطبيقات سطح المكتب، وأدوات اللغات
- فحص محتوى وتوثيق وروابط عبر:
  - `npm run check:content`
  - `npm run check:links`
- smoke check للرابط الرسمي بعد النشر عبر:
  - `npm run smoke:deploy`
- اختبارات أساسية للبحث ومشاركة الحالة وفتح النافذة عبر:
  - `npm run test:run`
  - `npm run test:e2e`
- يوجد الآن `GitHub Actions` يشغّل البناء والاختبارات وsmoke check المحلي وE2E وفحص الروابط تلقائيًا
- المشروع متعمد أن يبقى مرجعًا متعدد المسارات، لذلك لا يضيف نظام تتبع تقدم شخصي داخل الخريطة

## التقنية المستخدمة

- `React + Vite`
- `@xyflow/react` لعرض العقد والأسهم والزوم والتحريك
- تصميم RTL عربي

## التشغيل

```bash
npm install
npm run dev
```

ثم افتح الرابط الذي يعرضه Vite في المتصفح.

## البناء

```bash
npm run build
```

## النشر

```bash
npm run deploy
```

أمر `deploy` يشغّل النشر ثم يتبعه `smoke:deploy` على الرابط الرسمي مباشرة.

## أهم الملفات

- [src/data/roadmap-model.ts](/D:/vscodeFiles/map/src/data/roadmap-model.ts)
  هذا الملف يحتوي الأنواع الأساسية والألوان المشتركة بين أجزاء بيانات الخريطة.

- [src/data/roadmap-docs.ts](/D:/vscodeFiles/map/src/data/roadmap-docs.ts)
  هذا الملف يجمع روابط المصادر المشتركة والمرجعية حتى لا تتكرر داخل المحتوى.

- [src/data/roadmap-structure.ts](/D:/vscodeFiles/map/src/data/roadmap-structure.ts)
  هذا الملف يحدد ترتيب المسارات الرئيسية وتوزيع الموضوعات داخل كل مسار.

- [src/data/roadmap-topic-inputs.ts](/D:/vscodeFiles/map/src/data/roadmap-topic-inputs.ts)
  هذا الملف يحتوي نصوص الموضوعات نفسها: العنوان، الشرح، نقاط التعلم، التدريب العملي، والمصادر.

- [src/data/roadmap-guidance.ts](/D:/vscodeFiles/map/src/data/roadmap-guidance.ts)
  هذا الملف يجمع الربط الإرشادي الإضافي مثل أفكار المشاريع والأخطاء الشائعة والمختبرات الصغيرة والمصادر المصنفة.

- [src/data/roadmap.ts](/D:/vscodeFiles/map/src/data/roadmap.ts)
  هذا الملف هو نقطة التجميع الأساسية: يجمع الملفات السابقة، ويبني `topicCatalog` و`nodes` و`edges` وروابط الاقتراحات داخل الخريطة.

- [.github/workflows/ci.yml](/D:/vscodeFiles/map/.github/workflows/ci.yml)
  هذا الملف يشغّل GitHub Actions لفحص المحتوى والبناء والاختبارات وsmoke check وE2E وفحص الروابط.

- [src/App.tsx](/D:/vscodeFiles/map/src/App.tsx)
  هذا الملف يحتوي منطق الواجهة التفاعلية، اختيار العقد، فتح نافذة الشرح، ضبط الكاميرا، وتبديل الوضع الفاتح والداكن.

- [src/styles.css](/D:/vscodeFiles/map/src/styles.css)
  هذا الملف يحتوي نظام الألوان، الأحجام، شكل العقد، الشريط العلوي، ولوحة الشرح.

- [PROJECT_NOTEBOOK_AR.md](/D:/vscodeFiles/map/PROJECT_NOTEBOOK_AR.md)
  هذا هو ملف المفكرة الكامل للمشروع، ويشرح الفكرة، الهيكل، التعديلات، طريقة التوسعة، وكل القرارات المهمة.

## كيف تعدل المحتوى؟

1. عدّل نص الموضوع ومحتواه داخل [src/data/roadmap-topic-inputs.ts](/D:/vscodeFiles/map/src/data/roadmap-topic-inputs.ts)
2. إذا احتجت مصادر مرجعية مشتركة فحدّث [src/data/roadmap-docs.ts](/D:/vscodeFiles/map/src/data/roadmap-docs.ts)
3. إذا أردت تعديل الأخطاء الشائعة أو أفكار المشاريع أو منطق المصادر الإضافي فحدّث [src/data/roadmap-guidance.ts](/D:/vscodeFiles/map/src/data/roadmap-guidance.ts)
4. اربط الموضوع أو أعد ترتيبه داخل [src/data/roadmap-structure.ts](/D:/vscodeFiles/map/src/data/roadmap-structure.ts)
5. شغّل المشروع وستظهر العقدة تلقائيًا داخل الخريطة

## أفضل فرص التوسعة القادمة

- `Frontend / Web`
- `Architecture / Systems`
- `Quality / Security`
- `AI Engineering`
- `Computer Science`

ومن `أطلس المصادر`، أقوى المرشحين للتحويل لاحقًا إلى مسارات كاملة هم:

- `Data Engineering`
- `Security Research`
- `Mobile Native`

## ملاحظة

إذا كنت تريد فهم المشروع بالكامل قبل التعديل، ابدأ من [PROJECT_NOTEBOOK_AR.md](/D:/vscodeFiles/map/PROJECT_NOTEBOOK_AR.md) لأنه المرجع الأشمل للمشروع.

