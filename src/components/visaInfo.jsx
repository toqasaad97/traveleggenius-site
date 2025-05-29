import React from "react";

const styles = {
  container: {
    color: "#262751",
    direction: "rtl",
    textAlign: "right",
    fontFamily: "'Tajawal', 'Noto Sans Arabic', 'Segoe UI', 'Cairo', 'Droid Arabic Naskh', sans-serif",
    lineHeight: 1.6,
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 20px",
    marginTop: "20px",
  },
  heroSection: {
    position: "relative",
    width: "100%",
    height: "400px",
    marginBottom: "40px",
    borderRadius: "8px",
    overflow: "hidden",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  },
  heroImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  heroOverlay: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    background: "linear-gradient(to left, rgba(0,0,0,0.7), rgba(0,0,0,0.3))",
    display: "flex",
    alignItems: "center",
    padding: "0 60px",
  },
  heroTitle: {
    color: "#fff",
    fontSize: "2.5rem",
    fontWeight: "700",
    textShadow: "1px 1px 3px rgba(0,0,0,0.5)",
  },
  flexContainer: {
    display: "flex",
    gap: "40px",
    flexWrap: "wrap",
    marginBottom: "40px",
    alignItems: "center",
  },
  flexItem: {
    flex: "1 1 45%",
    minWidth: "300px",
  },
  imageRight: {
    width: "100%",
    maxHeight: "400px",
    borderRadius: "8px",
    objectFit: "cover",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  heading: {
    color: "#1A84C4",
    marginBottom: "20px",
    fontSize: "1.8rem",
    fontWeight: "600",
  },
  strongText: {
    color: "#1A84C4",
  },
  fullWidthImage: {
    width: "100%",
    maxHeight: "500px",
    objectFit: "cover",
    margin: "30px 0",
    borderRadius: "8px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
  },
  ul: {
    paddingInlineStart: "20px",
    marginBottom: "25px",
    listStyleType: "none",
  },
  li: {
    marginBottom: "10px",
    position: "relative",
    paddingRight: "20px",
  },
  liBullet: {
    position: "absolute",
    right: "0",
    top: "8px",
    width: "8px",
    height: "8px",
    backgroundColor: "#1A84C4",
    borderRadius: "50%",
  },
  paragraph: {
    marginBottom: "20px",
    fontSize: "1.1rem",
  },
};

const VisaInfoArabic = () => {
  return (
    <div style={styles.container} lang="ar">
      {/* Hero Section */}
      <div style={styles.heroSection}>
        <img
          alt="تأشيرة"
          src="/assets/images/visainfo1.webp"
          style={styles.heroImage}
        />
        <div style={styles.heroOverlay}>
          <h1 style={styles.heroTitle}>كل ما تحتاج معرفته عن التأشيرات والسفر</h1>
        </div>
      </div>

      <div style={styles.flexContainer}>
        <div style={styles.flexItem}>
          <h2 style={styles.heading}>ما هي التأشيرة؟</h2>
          <p style={styles.paragraph}>
            التأشيرة هي إذن يجب الحصول عليه من الجهات المختصة لدخول أو الخروج من بلد معين. يتم الحصول على هذه الوثيقة من قنصلية البلد المراد زيارته أو من نقاط الدخول إلى البلد. تختلف متطلبات التأشيرة حسب كل دولة.
          </p>
          <p style={styles.paragraph}>
            من المهم تجهيز المستندات التي تثبت سبب زيارتك للبلد عند تقديم طلب التأشيرة. تختلف أنواع طلبات التأشيرة حسب الغرض، سواء للعمل، أو السفر، أو التعليم. تأشيرات العمل في الخارج، وتأشيرات السفر، وتأشيرات الدراسة تخدم أغراضاً مختلفة ومحتويات متنوعة.
          </p>
        </div>
        <div style={styles.flexItem}>
          <img
            alt="تأشيرة"
            src="/assets/images/visainfo2.jpg"
            style={styles.imageRight}
          />
        </div>
      </div>

      <h2 style={styles.heading}>كيف تحصل على التأشيرة؟</h2>
      <p style={styles.paragraph}>
        للحصول على التأشيرة، يجب أولاً إعداد ملف دقيق، ونحن ننصح بشدة بالعمل مع شركة استشارية محترفة. يجب أن تحدد نوع التأشيرة التي ستتقدم لها، ثم تبدأ بجمع المستندات المطلوبة والتحقق من صحتها. الغرض من السفر مهم جداً في هذه المرحلة. عليك معرفة الأوراق المطلوبة من الدولة التي ستتقدم إليها ودعم طلبك برسائل مرفقة عند الحاجة. لمزيد من التفاصيل والخدمات، يمكنك التواصل معنا. مستشارونا الذين لديهم خبرة في هذه الإجراءات سيسعدون بمساعدتك.
      </p>

      <h2 style={styles.heading}>
        <strong style={styles.strongText}>طلبات تأشيرة العمل في الخارج</strong>
      </h2>
      <p style={styles.paragraph}>
        العمل في الخارج هو فرصة رائعة للأشخاص خصوصاً لأنه يساهم في تطوير مسيرتهم المهنية بالإضافة إلى تحسين مهارات اللغة. العمل في الخارج له العديد من الفوائد، ولكن تجربته أمر مختلف تمامًا.
      </p>
      <p style={styles.paragraph}>
        العمل في الخارج يعني التعرف على أشخاص من ثقافات مختلفة، والتحدث بلغات متقدمة، والعمل في بيئة متعددة الثقافات، وهذا خيار جذاب للغاية من الناحية المهنية. ينصح بأن تكون مدة العمل في الخارج على الأقل سنة واحدة حتى تتكيف مع الثقافة والبيئة الجديدة. هناك العديد من النصائح الخاصة بتأشيرة العمل حسب البلد والوظيفة، ومن المهم إجراء بحث دقيق والحصول على استشارة من جهة مختصة.
      </p>

      <h2 style={styles.heading}>
        <strong style={styles.strongText}>طلبات تأشيرة السفر</strong>
      </h2>
      <p style={styles.paragraph}>
        تُعرف أيضاً بتأشيرة الرحلات الخارجية، سواء كانت للسياحة أو البحث أو مؤقتة. تختلف متطلبات التقديم حسب كل دولة. تختلف الأوراق المطلوبة حسب البلد، ويجب الانتباه إلى مصداقية وكفاءة الشركة التي تقدم خدمات استشارات التأشيرات. اختيار نوع التأشيرة الصحيح حسب الغرض أمر ضروري جداً.
      </p>

      <h2 style={styles.heading}>
        <strong style={styles.strongText}>أهمية تقديم طلب التأشيرة الصحيح</strong>
      </h2>
      <p style={styles.paragraph}>
        يجب تقديم طلب التأشيرة المناسب لغرضك. مثلاً، إذا تقدمت بتأشيرة سياحية بغرض العمل في الخارج، فهذا يُعد عملاً غير قانوني وقد يؤدي إلى ترحيلك. قد تحاول بعض الشركات تجنب رسوم التأشيرة عبر توجيهك للعمل بتأشيرة سياحية، مما يوقعك في موقف صعب. لذلك، من المهم العمل مع وكالات ذات خبرة وكفاءة عند تقديم طلب التأشيرة.
      </p>

      <p style={styles.paragraph}>شركة تشيليك للتأشيرات جاهزة تمامًا لمساعدتك في هذا المجال.</p>

      <div>
        <img
          alt="خدمات التأشيرات"
          src="/assets/images/visainfo.jpg"
          style={styles.fullWidthImage}
        />
      </div>

      <h2 style={styles.heading}>
        <strong style={styles.strongText}>كيف يمكنني السفر إلى الخارج؟</strong>
      </h2>
      <p style={styles.paragraph}>
        <strong>السفر إلى الخارج</strong> ليس عملية معقدة. الأهم هو إعداد كل شيء بدقة. الخطوة الأولى هي تحديد البلد الذي ترغب في السفر إليه. بعد ذلك، يجب إصدار جواز السفر الخاص بك. هناك أربعة أنواع من جوازات السفر:
      </p>
      <ul style={styles.ul}>
        <li style={styles.li}>
          <span style={styles.liBullet}></span>
          <strong>جواز السفر الأحمر:</strong> مخصص للأشخاص الذين يسافرون بغرض السياحة أو التعليم.
        </li>
        <li style={styles.li}>
          <span style={styles.liBullet}></span>
          <strong>الجواز الأخضر:</strong> يُمنح للموظفين الحكوميين، الأطباء، والمعلمين، ويمكن لحامليه دخول العديد من الدول بدون تأشيرة.
        </li>
        <li style={styles.li}>
          <span style={styles.liBullet}></span>
          <strong>الجواز الرمادي:</strong> يُعطى للعاملين في المهمات الرسمية بالخارج.
        </li>
        <li style={styles.li}>
          <span style={styles.liBullet}></span>
          <strong>الجواز الأسود:</strong> يُمنح للدبلوماسيين، المحافظين، ورؤساء المجالس.
        </li>
      </ul>
      <p style={styles.paragraph}>
        للحصول على جواز السفر، يجب التقدم إلى مكاتب النفوس. يجب ملاحظة أن معالجة جوازات السفر انتقلت من إدارات الشرطة إلى مكاتب النفوس. مدة صلاحية جواز السفر تختلف بين 6 أشهر، سنة، سنتين، ثلاث سنوات، وحتى 4 إلى 10 سنوات.
      </p>

      <p style={styles.paragraph}>
        <strong>للسفر إلى الخارج</strong> يجب تأكيد حجز تذكرتك. إذا كانت هذه هي المرة الأولى التي تسافر فيها، فمن الأفضل اختيار دولة لا تتطلب تأشيرة لتسهيل الإجراءات والتعلم. يمكنك الاستعانة بمواقع مثل Skyscanner لحجز التذاكر. ومن الأفضل الحجز في منتصف الأسبوع لأن الأسعار عادةً تكون أفضل.
      </p>

      <p style={styles.paragraph}>
        <strong>إجراءات التأشيرة</strong> هي من أهم الخطوات، ويمكن التقديم بشكل فردي أو من خلال مؤسسة وسيطة. تختلف الإجراءات حسب الدولة. بعض الدول تتطلب التعامل مع وكالات معتمدة، وبعضها يسمح بالتقديم الفردي. إذا كنت ترغب في الحصول على تأشيرة بريطانيا أو أمريكا، فمن الأفضل العمل مع وكالة متخصصة. يجب تجهيز المستندات كاملة ودقيقة، لأن نقص الأوراق قد يسبب تأخيراً أو رفض الطلب.
      </p>

      <p style={styles.paragraph}>
        حجز مكان الإقامة في البلد الذي ستسافر إليه هو أمر مهم جداً يجب إثباته عند تقديم طلب التأشيرة.
      </p>

      <p style={styles.paragraph}>
        التأمين الصحي للسفر هو أيضاً من الأمور الضرورية. يقيك من المواقف غير المتوقعة ويساعد في تقليل فرص رفض التأشيرة، خاصةً عند التقديم لتأشيرة شنغن.
      </p>

      <h2 style={styles.heading}>
        <strong style={styles.strongText}>فرص العمل في الخارج</strong>
      </h2>
      <p style={styles.paragraph}>
        عند الحديث عن الخارج، هناك العديد من فرص العمل المتاحة. يمكنك العمل في مهنتك الأصلية، ولكن يجب إقناع الشركة التي ستوظفك بسبب اختيارك بدلًا من مواطنيها. إلى جانب ذلك، هناك فرص للعمل بدوام جزئي، خصوصاً في المقاهي وقطاع الترفيه. عند الدخول في تدريب مهني (internship) في شركة، يمكن لعزيمتك والتزامك أن يساعدوك في البقاء هناك. المهم هو المثابرة والإثبات. بالإضافة لذلك، يجب الحفاظ على تجديد مهاراتك الذهنية والشبابية لتقديم أفضل أداء.
      </p>

      <h2 style={styles.heading}>
        <strong style={styles.strongText}>كيف هي الحياة في الخارج؟</strong>
      </h2>
      <p style={styles.paragraph}>
        <strong>الاستقرار في الخارج</strong> قد يفتح أمامك آفاقاً جديدة ثقافياً وشخصياً. التجربة الخارجية تفيد بشكل كبير في التطور الشخصي، حيث تعيش ثقافة جديدة وتتعلم لغة جديدة. التعرض لبيئة غير مألوفة يساعد في التغلب على المخاوف الذاتية. العيش والعمل في الخارج يُعد فرصة لتعزيز خبرتك المهنية والشخصية.
      </p>
    </div>
  );
};

export default VisaInfoArabic;