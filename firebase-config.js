// ════════════════════════════════════════════
//  إعداد Firebase — مطعم كص وكبة الحدباء
//  مشروع منفصل: kas-hadbaa · مسار البيانات: kass_menu
// ════════════════════════════════════════════
const firebaseConfig = {
  apiKey: "AIzaSyAeJnDT3Rg-695MXH6eGZDv5dfKr5T6J5A",
  authDomain: "kas-hadbaa.firebaseapp.com",
  databaseURL: "https://kas-hadbaa-default-rtdb.firebaseio.com",
  projectId: "kas-hadbaa",
  storageBucket: "kas-hadbaa.firebasestorage.app",
  messagingSenderId: "451068495302",
  appId: "1:451068495302:web:2327ad2b2aaad35b0d1ec7",
  measurementId: "G-Z1HQ64BH3S"
};

// Initialize Firebase
if (typeof firebase !== 'undefined') {
  firebase.initializeApp(firebaseConfig);
}

// ────────────────────────────────────────────
//  المنيو الاحتياطي — كص وكبة الحدباء
//
//  هذه النسخة تُعرض للحظات ريثما يصل المنيو من السحابة، وتبقى
//  معروضة إن فشل الاتصال تماماً. لذلك يجب أن تبقى أسعارها مطابقة
//  للأسعار الحقيقية — أي اختلاف هنا يعني أن زبوناً بشبكة ضعيفة
//  سيرى سعراً خاطئاً.
//
//  آخر مزامنة مع قاعدة البيانات: 2026-08-05
//  الصور غير مذكورة هنا؛ تُجلب كل واحدة على حدة من kass_menu/images.
// ────────────────────────────────────────────
const initialData = {
  categories: [
    { id: 'kass', name: 'الكص', order: 0 },
    { id: 'kubba', name: 'الكبة', order: 1 },
    { id: 'plates', name: 'الأطباق', order: 2 },
    { id: 'sides', name: 'المقبلات', order: 3 },
    { id: 'drinks', name: 'المشروبات', order: 4 },
    { id: 'cat_1785944034302', name: 'فنكر', order: 5 }
  ],
  items: [
    // ── الكص ──
    { id: '101', cat: 'kass', name: 'تشريب كص', desc: 'تشريب مرق مع قطع الكص واللحم العراقي، خبز مبلّل بالمرق', price: 13000, img: '', hasImg: true },
    { id: '102', cat: 'kass', name: 'ماعون كص', desc: 'ماعون كص لحم عراقي مع الخضار وطرشي', price: 13000, img: '', hasImg: true },
    { id: '103', cat: 'kass', name: 'كص على التمن', desc: 'شرائح كص لحم عراقي على رز مع نوعين من المرق وطرشي وخضروات', price: 14000, img: '', hasImg: true },
    { id: '104', cat: 'kass', name: 'لفة كص', desc: 'لفة كص لحم بالصمون الفرنسي او العراقي', price: 6500, img: '', hasImg: true },

    // ── الكبة ──
    { id: '201', cat: 'kubba', name: 'كبة مصلاوية دائرية (سلق)', desc: 'كبة موصلية دائرية محشوة باللحم المفروم والبهارات', price: 8500, img: '', hasImg: true },
    { id: '202', cat: 'kubba', name: 'كبة سراي', desc: 'كبة سراي هشّة محشوة باللحم المفروم مغموسة بالسوب العراقي مع طرشي وخضروات', price: 6000, img: '', hasImg: true },

    // ── الأطباق ──
    { id: '301', cat: 'plates', name: 'كص على تمن مع مرق', desc: 'شرائح كص طرية تُقدَّم فوق رز أبيض، مع مرق بنوعين، ويُرافقها طرشي طازج وخضروات مشكلة.', price: 14000, img: '', hasImg: true },

    // ── المقبلات ──
    { id: '401', cat: 'sides', name: 'مقبلات', desc: 'صحن مقبلات وطرشي متنوّع', price: 3500, img: '', hasImg: true },

    // ── المشروبات ──
    { id: '501', cat: 'drinks', name: 'مشروبات غازية', desc: 'مشروب غازي بارد من اختيارك', price: 500, img: '', hasImg: true },
    { id: '502', cat: 'drinks', name: 'لبن', desc: 'لبن عيران بارد ومنعش', price: 500, img: '', hasImg: true },
    { id: '503', cat: 'drinks', name: 'شاي', desc: 'شاي عراقي', price: 500, img: '', hasImg: true },
    { id: '504', cat: 'drinks', name: 'ماء', desc: 'قنينة ماء معدني', price: 250, img: '', hasImg: true }
  ]
};
