# مفكرة المشروع العربية

آخر تحديث موثّق هنا: `2026-04-06`

## الفكرة الحالية

المشروع لم يعد مجرد خريطة عامة كبيرة لكل شيء. النسخة الحالية تعمدت أن تكون:

- أقل ازدحامًا
- أوضح في نقطة البداية
- وأقوى بكثير في لينكس

الواجهة الآن تبدأ من `صفحة هبوط` على `/`، ثم تنتقل إلى الخريطة التفاعلية في `/map`.

## لماذا تغيّر الاتجاه؟

لأن النسخة السابقة كانت تملك اتساعًا كبيرًا، لكن بعض الأبواب كانت أضعف من غيرها في العمق أو المصادر. القرار الجديد كان:

- إبقاء عدد المسارات الظاهرة محدودًا
- إزالة الأبواب الضعيفة من الواجهة الظاهرة
- تحويل معظم العمق إلى لينكس والأنظمة والنواة والتوزيعات

## شكل المحتوى الآن

المسارات الظاهرة حاليًا هي:

1. `origins-history`
2. `deep-foundations`
3. `core-programming`
4. `developer-workflow`
5. `frontend-web`
6. `linux-userland-operations`
7. `linux-systems-programming`
8. `linux-kernel-internals`
9. `linux-distribution-engineering`

هذه البنية تعطي توازنًا جيدًا:

- أساس منطقي من تحت الصفر
- مسار ويب واحد واضح
- ثم ثقل حقيقي في لينكس

## أهم توسعات المحتوى

### 1. من 0 و1 فعلًا

أُضيفت موضوعات تبدأ من:

- البتات والبوابات والمنطق
- تمثيل الأعداد والنصوص والتعليمات
- طبقات التجريد
- الذاكرة والتنفيذ والمترجمات

الهدف هنا كان أن يصبح الانتقال إلى لينكس والنواة مبنيًا على فهم حقيقي لا على حفظ مصطلحات.

### 2. لينكس اليومي

أصبح لدينا مسار واضح في:

- الملفات والصلاحيات
- shell pipelines
- العمليات والخدمات والسجلات
- الشبكات
- systemd
- الإقلاع و`initramfs`

### 3. Linux Systems Programming

المحتوى صار أوضح في:

- `C`
- `glibc`
- `ELF`
- الربط
- الخيوط
- sockets / epoll
- `strace`
- `perf`
- `valgrind`

### 4. النواة

المحتوى صار أقوى في:

- بناء النواة
- `Kconfig / Kbuild`
- `UAPI`
- subsystems
- نموذج الأجهزة والتعريفات
- debugging
- رحلة الإقلاع
- خطة مختبرات عملية للنواة

### 5. التوزيعات

هذا هو الباب الذي تمت إضافته قصديًا لأنه كان طلبًا واضحًا:

- `Linux From Scratch`
- `Buildroot`
- `Yocto`
- `FHS`
- packaging
- repositories/signing
- images/installers
- cross compilation
- init/userspace integration
- testing/maintenance

## تجربة الاستخدام الجديدة

### ما الذي أُزيل؟

- شريط البحث الكبير
- الاعتماد على quick results
- فكرة الصفحة التي تظهر لحظة ثم تختفي

### ما الذي أُضيف؟

- `صفحة هبوط`
- `/map`
- فهرس جانبي سريع
- `MiniMap`
- `وضع مبتدئ`
- `المفضلة`
- `آخر ما فُتح`
- `skip link`
- `aria-live`

هذه التغييرات جعلت الموقع أوضح للمستخدم وأهدأ بصريًا.

## SEO والفهرسة

النسخة الجديدة أفضل لأن:

- `/` صفحة قابلة للقراءة والفهرسة فعلًا
- `/map` صفحة الخريطة الفعلية
- صفحات الموضوعات صار canonical الخاص بها في `/map?topic=...`
- `sitemap.xml` و`robots.txt` و`site.webmanifest` يتم توليدها من السكربت
- metadata و`JSON-LD` محدثة مع البنية الجديدة

## PWA

المشروع لم يعد Manifest فقط. يوجد الآن:

- `site.webmanifest`
- `Service Worker`

الـ `Service Worker` بسيط ومقصوده:

- حفظ shell أساسي
- دعم أخف للتنقلات
- وعدم جعل المشروع يبدو كأنه يعلن PWA بينما لا يوجد أي تنفيذ حقيقي

## الاختبارات

المشروع الآن مغطى على عدة طبقات:

- `npm run test:run`
- `npm run test:e2e`
- `npm run check:content`
- `npm run check:links`
- `npm run smoke:deploy`

وهناك `GitHub Actions` لتشغيل هذه الفحوص تلقائيًا.

## الملفات المهمة

- [src/App.tsx](/D:/vscodeFiles/map/src/App.tsx)
- [src/features/roadmap/home-page.tsx](/D:/vscodeFiles/map/src/features/roadmap/home-page.tsx)
- [src/features/roadmap/map-workspace.tsx](/D:/vscodeFiles/map/src/features/roadmap/map-workspace.tsx)
- [src/data/roadmap-structure.ts](/D:/vscodeFiles/map/src/data/roadmap-structure.ts)
- [src/data/roadmap-focused-inputs.ts](/D:/vscodeFiles/map/src/data/roadmap-focused-inputs.ts)
- [src/data/roadmap-topic-inputs.ts](/D:/vscodeFiles/map/src/data/roadmap-topic-inputs.ts)
- [src/data/roadmap-docs.ts](/D:/vscodeFiles/map/src/data/roadmap-docs.ts)
- [src/features/roadmap/filtering.ts](/D:/vscodeFiles/map/src/features/roadmap/filtering.ts)
- [src/features/roadmap/seo.ts](/D:/vscodeFiles/map/src/features/roadmap/seo.ts)
- [public/sw.js](/D:/vscodeFiles/map/public/sw.js)

## ملاحظات تصميمية

- لم أُبقِ أطلس المصادر كمسار ظاهر مستقل، لأن التركيز الحالي أهم من التمدد.
- أبقيت مسار ويب واحدًا فقط كي لا يتحول المشروع إلى خريطة عامة جديدة بلا هوية.
- إذا كانت هناك توسعة قادمة منطقية بعد هذا، فهي ليست زيادة عدد المسارات، بل زيادة عمق بعض موضوعات لينكس الحالية أكثر فأكثر.

## أفضل خطوة تالية لاحقًا

إذا أردنا توسعة أخرى بعد هذه النسخة، فالأولوية ليست المزيد من الأبواب، بل:

1. زيادة مصادر بعض الموضوعات العامة التي ما زالت أخف من عمق لينكس
2. توسيع مختبرات النواة والتوزيعات أكثر
3. إضافة صفحات هبوط مستقلة لبعض المسارات الكبيرة إذا أردنا SEO أقوى من الحالي
