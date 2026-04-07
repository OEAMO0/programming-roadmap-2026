# خريطة تعلّم البرمجة 2026

واجهة عربية تفاعلية محدثة حتى `2026-04-06`، لكن تركيزها الآن صار أوضح بكثير: مسارات أقل عددًا، أعلى قيمة، ومعظم العمق الحقيقي متجه إلى لينكس والأنظمة والنواة وبناء التوزيعات.

## الموقع الرسمي

[افتح النسخة المنشورة للموقع](https://programming-roadmap-2026.devbread.workers.dev/)

## ما الذي تغيّر؟

- يوجد الآن `صفحة هبوط` حقيقية على `/` بدل النص الذي كان يومض ثم يختفي.
- الخريطة التفاعلية انتقلت إلى `/map`.
- أُزيل شريط البحث الكبير نهائيًا.
- استُبدل البحث بفلترة صغيرة وذكية: المسار، المستوى، و`وضع مبتدئ`.
- أُضيفت `المفضلة` و`آخر ما فُتح` بدل أي محاولة لتتبع التقدم.
- أُضيف فهرس جانبي سريع + `MiniMap` لتسهيل التنقل في الخريطة الكبيرة.
- طبقة الوصول تحسنت عبر `skip link` و`aria-live` والفهرس القابل للوصول بلوحة المفاتيح.
- صار هناك `Service Worker` فعلي مع `PWA` أبسط من السابق، وليس مجرد manifest فقط.

## شكل المحتوى الآن

- `9` مسارات ظاهرة فقط بدل التمدد الكبير السابق.
- يوجد مسار ويب واحد واضح، لكن أكثر العمق الآن مخصص لـ:
  - `Linux Userland / Operations`
  - `Linux Systems Programming`
  - `Linux Kernel Internals`
  - `Linux Distribution Engineering`
- في الأساسيات أُضيف عمق فعلي يبدأ من:
  - البتات والبوابات والمنطق
  - تمثيل الأعداد والنصوص والتعليمات
  - الذاكرة والتنفيذ والترجمة
- مسار `Linux Distribution Engineering` جديد ومقصود به صراحة:
  - Linux From Scratch
  - Buildroot
  - Yocto
  - packaging
  - repositories/signing
  - initramfs
  - images/installers
  - cross compilation
  - testing/maintenance

## أهم الميزات الحالية

- صفحة هبوط تقود المستخدم إلى بداية مناسبة بدل إدخاله للخريطة مباشرة
- خريطة قابلة للسحب والتكبير والتصغير
- فلترة صغيرة بدل شريط بحث كبير
- `وضع مبتدئ`
- `المفضلة`
- `آخر ما فُتح`
- روابط مباشرة قابلة للمشاركة لكل موضوع
- وضع فاتح ووضع داكن
- `Service Worker` + `site.webmanifest`
- `GitHub Actions`
- فحص محتوى وروابط وSEO قبل البناء والنشر

## التشغيل

```bash
npm install
npm run dev
```

ثم افتح الرابط الذي يعرضه Vite.

## البناء

```bash
npm run build
```

## الاختبارات والفحوص

```bash
npm run test:run
npm run test:e2e
npm run check:content
npm run check:links
```

## النشر

```bash
npm run deploy
```

أمر `deploy` يشغّل البناء ثم `wrangler deploy` ثم `smoke:deploy` على الرابط الرسمي.

## أهم الملفات

- [src/App.tsx](/D:/vscodeFiles/map/src/App.tsx)
  نقطة الدخول بين `صفحة هبوط` و`/map`.

- [src/features/roadmap/home-page.tsx](/D:/vscodeFiles/map/src/features/roadmap/home-page.tsx)
  واجهة الصفحة الرئيسية واختيارات البدء السريع.

- [src/features/roadmap/map-workspace.tsx](/D:/vscodeFiles/map/src/features/roadmap/map-workspace.tsx)
  الخريطة التفاعلية والفلاتر والمفضلة وآخر ما فُتح ونافذة التفاصيل.

- [src/data/roadmap-structure.ts](/D:/vscodeFiles/map/src/data/roadmap-structure.ts)
  يحدد ترتيب المسارات الظاهرة الجديدة.

- [src/data/roadmap-focused-inputs.ts](/D:/vscodeFiles/map/src/data/roadmap-focused-inputs.ts)
  طبقة override للمحتوى الظاهر الآن، خصوصًا لينكس والنواة والتوزيعات.

- [src/data/roadmap-topic-inputs.ts](/D:/vscodeFiles/map/src/data/roadmap-topic-inputs.ts)
  المخزون التاريخي الكبير للمحتوى الأساسي.

- [src/data/roadmap-docs.ts](/D:/vscodeFiles/map/src/data/roadmap-docs.ts)
  روابط المصادر الرسمية والمرجعية المشتركة.

- [src/features/roadmap/filtering.ts](/D:/vscodeFiles/map/src/features/roadmap/filtering.ts)
  منطق الفلترة الصغيرة الجديدة.

- [src/features/roadmap/seo.ts](/D:/vscodeFiles/map/src/features/roadmap/seo.ts)
  SEO للصفحة الرئيسية، `/map`، وصفحات الموضوعات.

- [public/sw.js](/D:/vscodeFiles/map/public/sw.js)
  الـ `Service Worker` الخاص بالكاش البسيط والتنقلات.

- [scripts/generate-seo-files.ts](/D:/vscodeFiles/map/scripts/generate-seo-files.ts)
  يولد `sitemap.xml` و`robots.txt` و`site.webmanifest`.

- [.github/workflows/ci.yml](/D:/vscodeFiles/map/.github/workflows/ci.yml)
  `GitHub Actions` للبناء والاختبارات وفحوص المحتوى والـ smoke check.

## لماذا هذا الترتيب؟

- لأن الخريطة كانت واسعة أكثر من اللازم مقارنة بعمق بعض الأبواب.
- لأن تجربة المستخدم لم تكن تستفيد فعليًا من شريط بحث كبير.
- لأن أفضل قيمة في المشروع الآن هي جعل لينكس من مستوى الاستخدام اليومي حتى بناء التوزيعات مسارًا متماسكًا ومفصلًا.

## ملاحظة

إذا كنت تريد المرجع العربي الداخلي الأشمل للمشروع، ابدأ من [PROJECT_NOTEBOOK_AR.md](/D:/vscodeFiles/map/PROJECT_NOTEBOOK_AR.md).
