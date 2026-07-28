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
//  المنيو الأولي — كص وكبة الحدباء
//  الصور فارغة، ترفعها لاحقاً من لوحة الإدارة.
// ────────────────────────────────────────────
const initialData = {
  categories: [
    { id: 'kass', name: 'الكص', order: 0 },
    { id: 'kubba', name: 'الكبة', order: 1 },
    { id: 'plates', name: 'الأطباق', order: 2 },
    { id: 'sides', name: 'المقبلات', order: 3 },
    { id: 'drinks', name: 'المشروبات', order: 4 }
  ],
  items: [
    // ── الكص ──
    { id: 101, cat: 'kass', name: 'تشريب كص', desc: 'تشريب مرق مع قطع الكص واللحم العراقي، خبز مبلّل بالمرق', price: 12000, img: '' },
    { id: 102, cat: 'kass', name: 'ماعون كص', desc: 'ماعون كص لحم عراقي مع الخضار والمرق', price: 12000, img: '' },
    { id: 103, cat: 'kass', name: 'كص على التمن', desc: 'كص لحم عراقي على رز أصفر', price: 13000, img: '' },
    { id: 104, cat: 'kass', name: 'لفة كص', desc: 'لفة كص لحم بالخبز مع المخلل', price: 6000, img: '' },

    // ── الكبة ──
    { id: 201, cat: 'kubba', name: 'كبة مصلاوية دائرية', desc: 'كبة موصلية دائرية محشوة باللحم المفروم والبهارات', price: 8000, img: '' },
    { id: 202, cat: 'kubba', name: 'كبة سراي', desc: 'كبة سراي هشّة محشوة باللحم المفروم', price: 6000, img: '' },

    // ── الأطباق ──
    { id: 301, cat: 'plates', name: 'تمن ومرق', desc: 'رز أصفر مع مرق اللحم العراقي', price: 5000, img: '' },

    // ── المقبلات ──
    { id: 401, cat: 'sides', name: 'مقبلات', desc: 'صحن مقبلات وطرشي متنوّع', price: 3500, img: '' },

    // ── المشروبات ──
    { id: 501, cat: 'drinks', name: 'مشروبات غازية', desc: 'مشروب غازي بارد من اختيارك', price: 500, img: '' },
    { id: 502, cat: 'drinks', name: 'لبن', desc: 'لبن عيران بارد ومنعش', price: 500, img: '' },
    { id: 503, cat: 'drinks', name: 'شاي', desc: 'شاي عراقي', price: 500, img: '' },
    { id: 504, cat: 'drinks', name: 'ماء', desc: 'قنينة ماء معدني', price: 250, img: '' }
  ]
};
