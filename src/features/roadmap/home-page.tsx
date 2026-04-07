import { roadmapMeta, roadmapSections, topicCatalog } from '../../data/roadmap';

type HomePageProps = {
  onOpenMap: () => void;
  onOpenTopic: (topicId: string) => void;
};

const starterChoices = [
  {
    title: 'ابدأ من 0 و1',
    description: 'إذا كنت تريد فهمًا حقيقيًا من أسفل الطبقات حتى الذاكرة والتنفيذ.',
    topicId: 'deep-foundations',
  },
  {
    title: 'ابدأ مع لينكس يوميًا',
    description: 'إذا كان هدفك الطرفية والملفات والخدمات والتشغيل العملي.',
    topicId: 'linux-userland-operations',
  },
  {
    title: 'ادخل للنواة',
    description: 'إذا كنت تملك أساسًا جيدًا وتريد الإقلاع والنواة وقراءة docs.kernel.org.',
    topicId: 'linux-kernel-internals',
  },
  {
    title: 'ابنِ توزيعة',
    description: 'إذا كان هدفك النهائي صور لينكس أو توزيعات أو pipelines بناء متقدمة.',
    topicId: 'linux-distribution-engineering',
  },
];

const outsideMapLinks = [
  { label: 'Mobile Native', url: 'https://developer.android.com/guide' },
  { label: 'Security Research', url: 'https://portswigger.net/web-security/learning-path' },
  { label: 'Data Engineering', url: 'https://docs.getdbt.com/docs/introduction' },
];

export function HomePage({ onOpenMap, onOpenTopic }: HomePageProps) {
  return (
    <main className="landing-shell" id="main-content">
      <section className="landing-hero">
        <p className="landing-eyebrow">خريطة عربية تفاعلية مركزة على لينكس والأنظمة</p>
        <h1>{roadmapMeta.title}</h1>
        <p className="landing-copy">
          صفحة عربية مرتبة تقودك من البتات والمنطق والتمثيل الثنائي إلى لينكس اليومي، ثم برمجة الأنظمة،
          النواة، وبناء التوزيعات. أبقيت فقط المسارات التي تستحق أن تظهر، وخففت الضجيج لصالح عمق أوضح
          ومصادر رسمية أقوى.
        </p>
        <div className="landing-hero-actions">
          <button type="button" className="landing-primary-button" onClick={onOpenMap}>
            افتح الخريطة التفاعلية
          </button>
          <button type="button" className="landing-secondary-button" onClick={() => onOpenTopic('linux-userland-operations')}>
            ابدأ من مسار لينكس العملي
          </button>
          <button type="button" className="landing-secondary-button" onClick={() => onOpenTopic('deep-foundations')}>
            ابدأ من 0 و1
          </button>
        </div>
      </section>

      <section className="landing-section">
        <div className="landing-section-head">
          <h2>من أين تبدأ؟</h2>
          <p>اختيارات سريعة تنقلك مباشرة إلى بداية مناسبة بدل أن تضيع داخل الخريطة الكبيرة.</p>
        </div>

        <div className="landing-choice-grid">
          {starterChoices.map((choice) => (
            <button key={choice.topicId} type="button" className="landing-choice-card" onClick={() => onOpenTopic(choice.topicId)}>
              <strong>{choice.title}</strong>
              <span>{choice.description}</span>
            </button>
          ))}
        </div>
      </section>

      <section className="landing-section">
        <div className="landing-section-head">
          <h2>المسارات الظاهرة الآن</h2>
          <p>
            {roadmapMeta.totalTracks} مسارات فعالة و{roadmapMeta.totalTopics} موضوعًا مرتبطًا. أغلب العمق الآن متجه
            إلى لينكس بشكل متعمد.
          </p>
        </div>

        <div className="landing-track-grid">
          {roadmapSections.map((section) => {
            const topic = topicCatalog[section.id];

            return (
              <button key={section.id} type="button" className="landing-track-card" onClick={() => onOpenTopic(section.id)}>
                <div className="landing-track-meta">
                  <span>{topic.category}</span>
                  <span>{section.left.length + section.right.length} موضوعات</span>
                </div>
                <strong>{topic.title}</strong>
                <p>{topic.summary}</p>
                {topic.fits?.length ? <small>{topic.fits[0]}</small> : null}
              </button>
            );
          })}
        </div>
      </section>

      <section className="landing-section landing-process">
        <div className="landing-section-head">
          <h2>كيف تستخدم الموقع بذكاء؟</h2>
          <p>الهدف ليس أن تمر على كل شيء، بل أن تبني مسارًا واضحًا وقابلًا للتطبيق.</p>
        </div>
        <ol className="landing-steps">
          <li>ابدأ بالمسار المناسب لهدفك لا بأكثر مسار يلمع أمامك.</li>
          <li>افتح كل موضوع من الخريطة ثم اقرأ ما الذي ستفهمه وما الذي ستبنيه بعده.</li>
          <li>اعتمد مصدرًا رسميًا واحدًا أولًا، ثم أكمل البقية كتوسعة لا كبديل مشتت.</li>
          <li>استخدم المفضلة وآخر ما فُتح لتبقي رحلتك العملية قريبة من يدك.</li>
        </ol>
      </section>

      <section className="landing-section">
        <div className="landing-section-head">
          <h2>مسارات خارج تركيز النسخة الحالية</h2>
          <p>هذه ليست ضمن الخريطة الأساسية الآن، لكن وضعتها هنا حتى لا يصعب على المتعلم العثور على نقطة انطلاق موثوقة.</p>
        </div>

        <div className="landing-outside-grid">
          {outsideMapLinks.map((item) => (
            <a key={item.label} className="landing-outside-card" href={item.url} target="_blank" rel="noreferrer">
              <strong>{item.label}</strong>
              <span>وثائق ومراجع أولية موثوقة كبداية خارج الخريطة الأساسية.</span>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
