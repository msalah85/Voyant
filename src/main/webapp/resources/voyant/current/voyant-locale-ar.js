Voyant.util.Localization.LANGUAGE='ar'
Ext.apply(Voyant.panel.VoyantHeader.i18n, {
"homeConfirm":"هل  تريد البدء من جديد (والخروج من المكنزة الحالية)؟",
"title":"فواينت تولز",
"helpTip":" فوايانت تولز هو محيط متوفر على شبكة الانترنت  لقراءة وتحليل النصوص الرقمية",
"homeTip":"إضغط للرجوع الى شاسة إنشاء المكنز",
"home":"البدأ من جديد"});
Ext.apply(Voyant.panel.Cirrus.i18n, {
"maxTerms":"العدد الأقصى من الكلمات",
"visible":"إظهار",
"options":"الخيارات",
"scale":"حجم",
"title":"سيروس",
"helpTip":"</p><p>يقدم سيريس عرض سحابة الكلمات لاكثر الكلمات تواجدا في المكنز او المستند –&nbsp;يقدم هذا نظرة عامة مناسبة (قد تكون مختزلة). تتضمن الميزات</p><ul><li>تظهر تواتر الكلمات عند التحويم فوق الكلمات</li><li>النقر على الكلمات قد تظهر نتائج في أدوات اخرى اذا عرضت اي منها</li></ul>",
"visibleTerms":"الكلمات"});
Ext.apply(Voyant.panel.DocumentsFinder.i18n, {
"emptyQuery":"ادخل الاستعلام هنا",
"queryMatches":"A total of {0} matching documents (out of {1}).",
"titleField":"العنوان",
"emptyText":"No matching results.",
"query":"Query",
"count":"Count",
"exportNewCorpus":"New Corpus",
"title":"العنوان",
"loading":"تحميل المكنز جاري",
"addRow":"اضافة سطر",
"operator":"Operator",
"textField":"text (default)",
"unsuccessfulQuery":"لا يمكن إنجار الاستعلام",
"pubPlaceField":"مكان النشر",
"advancedField":"<i>استعلام متقدم</i>",
"authorField":"المؤلف",
"noMatches":"No matches (out of {0} documents).",
"field":"Field",
"deleteRowTip":"انقر لمحي السطر",
"publisherField":"الناشر",
"pubDateField":"تاريخ النشر",
"exportNewCorpusTip":"Create a new corpus from matching documents (button will be disabled if there are no matches)."});
Ext.apply(Voyant.panel.TermsRadio.i18n, {
"displayPanelTip":"إطارالتحكم بإعدادات كشف الكلمات",
"linear":"خطي",
"log":"لوغارتمي",
"displayPanel":"إطار الكشف",
"completingTransition":"التحويل جاري",
"removeTerm":"إزالة <b>{0}</b>",
"yScale":"المحور العمودي",
"title":"ترمز راديو",
"type":"عرض مرئي",
"speed":"سرعة",
"segments":"شرائح",
"fraction":"كشف الكلمات",
"duration":"سرعة",
"help":"بالامكان اكتشاف عدد وقوع الكلمات في مكنز يمتدد فترة زمنية",
"resetTip":"إعادة تنضيد العرض المرئي الى البداية",
"terms":"كلمات",
"visibleSegments":"ظاهر",
"visibleSegmentsTip":"بالامكان تحديد عدد الشرائح المعروضة في المستند في وقت واحد",
"reset":"إعادة تنضيد ",
"segmentsTip":"بالامكان تحديد عدد الشرائح في المستند (ملاحظة الخيار ينطبق فقط على توزيع الشرائح في مستند واحد وليس عبر المكنز ككل)",
"termNotFound":"كلمة غير متوفرة",
"fractionTip":"بالامكان تحديد العدد الادنى لتواترالكلمات في الكشف. مثلا 20 تظهر فقط الكلمات التي تظهراقل من 20% في الكشف."});
Ext.apply(Voyant.util.Downloadable.i18n, {
"exportTitle":"تصدير ",
"downloadButton":"تحميل",
"cancelButton":"إلغاء"});
Ext.apply(Voyant.panel.CorpusCollocates.i18n, {
"contextTermRawFreq":"عدد (السياق)",
"matchingTerms":"{count}",
"contextTerm":"تضام ",
"emptyText":"لا يوجد نتائج مطابقة",
"termTip":"الكلمة المفتاحية التي تعد حولها تضام الكلمات (في السياق) ",
"termRawFreqTip":"عدد مرات وقوع الكلمات المفتاحية في المكنز",
"title":"الكلمات المتضامة",
"termRawFreq":"عدد (الكلمة المفتاحية)",
"context":"السياق",
"term":"كلمة",
"helpTip":"كوربوس كولوكايتز: يظهر جدول الكلمات اكبر تواتر للكلمات التي تتواجد بالقرب من الكلمات المفتاحية في سائر المكنز. الوظائف المتاحة: </p><ul><li>إعادة الترتيب بحسب الكلمة المفتاحية, تضام الكلمات, عدد تضام الكلمات</li><li>مربع بحث الاستعلام (يرجى التحليق فوق ايقونة المكبرة للمساعدة في تركيب الجمل)</li></ul>",
"contextTermRawFreqTip":"عدد وقوع الكلمة المتضامة بالقرب من الكلمة المفتاحية في المكنز",
"contextTermTip":"الكلمة المتضامة (في السياق) التي تقع بالقرب من كلمة البحث"});
Ext.apply(Voyant.panel.Documents.i18n, {
"keepTip":"إضغط هنا لإنشاء مكنز جديد بناء",
"reorderFilteredError":"You cannot reorder a filtered (after search query) corpus. Please create a new corpus first (with the <i>Remove</i> or <i>Keep</i> button) and then reorder the new corpus.",
"typesCountLexical":"أنواع",
"emptyText":"No matching results.",
"removeFilteredDocuments":"Create a <i>new</i> corpus that removes (does NOT include) the {0:plural('filtered document')}?",
"language":"لغة",
"reorder":"إعادة التنظيم",
"removeSelectedDocuments":"Create a <i>new</i> corpus that removes (does NOT include) the {0:plural('selected document')}?",
"title":"Documents",
"error":"وقع خطأ",
"addTip":"إضغط هنا لإضافة مستندات جديدة  إلى هذا المكنز ",
"keepFilteredDocuments":"Create a <i>new</i> corpus that only keeps the {0:plural('filtered document')}?",
"remove":"إزالة",
"documentAuthor":"مؤلف",
"selectOrFilterError":"You need to first select documents by clicking on one or more rows or by performing a search query.",
"keepSelectedDocuments":"Create a <i>new</i> corpus that only keeps the {0:plural('selected document')}?",
"tokensCountLexical":"كلمات",
"removeTip":" إضغط هنا لإنشاء مكنز جديد يستبعد المستندات المختارة اوالمرشحة حسب استعلام البحث",
"matchingDocuments":"Matching documents: {count}",
"id":"ID",
"documentTitle":"عنوان",
"helpTip":"<p>Documents is a table view of the documents in the corpus. Features include:</p><ul><li>reordering by <i>Title</i>, <i>Words</i> count (tokens), word forms count (<i>Types</i>), and <i>Ratio</i> (Types/Tokens Ratio) (click on the column headers)</li><li>a search box for queries (by default in the full-text, title and author fields —&nbsp;hover over the magnifying icon for help with the syntax)</li></ul>",
"add":"إضافة",
"downloadButton":"تحميل",
"newCorpus":"مكنزجديد",
"allSelectedError":"You have selected all documents, you must select a subset of documents to remove or keep.",
"reorderTip":"إضغط هنا لإنشاء مكنز جديد بناء على أعادة التنظيم للمستندات (بواسطة سحب والقاء السطور لاعادة التنظيم)",
"onlyOneError":"Your corpus has only one document, you can't remove or keep documents to create a new corpus.",
"modify":"تعديل",
"typeTokenRatioLexical":"نسبة",
"modifyTip":"Click this button to create a new corpus by adding new documents, by selecting a subset of documents or by re-ordering documents.",
"reorderDocuments":"Create a <i>new</i> corpus based on the order shown?",
"keep":"حفظ",
"reorderOriginalError":"Please reorder the corpus first (drag and drop the rows in the table)."});
Ext.apply(Voyant.panel.Panel.i18n, {
"trend":"إتجاه",
"relativeFreq":"نسبة",
"colon":": ",
"term":"كلمة",
"rawFreq":"عدد",
"loading":"تحميل",
"error":"وقع خطأ",
"info":"معلومات"});
Ext.apply(Voyant.panel.Bubbles.i18n, {
"soundTip":"تبديل الصوت",
"sound":"صوت",
"adaptation":"<a href=\"https://www.m-i-b.com.ar/letters/en/\"  target=\"_blank\"><i>Letter Pairs</i> ل Martin Ignacio  Bereciartua</a>مستوحاة من ",
"title":"  بوبلز(فقاعات)",
"speedTip":"التحكم بسرعة العرض المرئ",
"helpTip":"بوبلزهو عرض مرئي ممتع للكلمات المتكررة في مستند",
"speed":"سرعة"});
Ext.apply(Voyant.widget.CorpusDocumentSelector.i18n, {
"corpus":"مكنز",
"scale":"حجم"});
Ext.apply(Voyant.panel.Reader.i18n, {
"documentFrequency":"تواتر المستند:",
"limitedAccess":"This is a limited access corpus and this tool's functionality is restricted.",
"title":"القاريء",
"helpTip":"<p>The Reader tool provides a view of text from the corpus. Features include:</p><ul><li>frequency information appears when hovering over a word</li><li>distribution information appears in a graph at the bottom when clicking on a word</li><li>a bar graph at the bottom indicates the relative size of each document in the corpus</li><li>a search box for queries (hover over the magnifying icon for help with the syntax)</li></ul>"});
Ext.apply(Voyant.VoyantCorpusApp.i18n, {
"fetchingCorpus":"توصيل المكنز",
"moreToolsTypeViz":"أدوات العرض المرئي",
"noPasswordGiven":"يرجى ادخال رمز النفاذ",
"passwordValidationError":"عذرا  وقع خطأ غير متوقع عند التحقق من رمز النفاذ",
"passwordRequiredMessage":"رمز النفاذ مطلوب لهذا المكنز",
"passwordRequiredTitle":"رمز النفاذ مطلوب",
"password":"رمز النفاذ",
"moreToolsScaleDocument":"أدوات المستند",
"moreToolsTypeGrid":"أدوات جدولية",
"moreToolsType":"أدوات بحسب النوع",
"moreToolsTypeOther":"أدوات اخرى",
"nonConsumptiveButton":"نفاذ محدود ",
"moreToolsScaleCorpus":"أدوات المكنز",
"nonConsumptiveMessage":"Alternatively, you can click on the <i>Limited Access</i> button to continue with limited functionality (generally speaking, this non-consumptive access allows you to explore derivative data from the corpus without allowing you to read text from the corpus).",
"passwordValidateButton":"التحقق",
"moreToolsScale":"أدوات بحسب الحجم",
"badPassword":"عذرا هذا رمز النفاذ غير صحيح"});
Ext.apply(Voyant.panel.Bubblelines.i18n, {
"findTerm":"البحث عن كلمات",
"showTerm":"كشف الكلمة",
"corpusTooSmall":"حجم المكنز صغير جداً",
"clearTerms":"محي",
"removeTerm":"إزالة الكلمة",
"hideTerm":"حجب الكلمة",
"title":"بوبل لاينز (خط الفقاعات)",
"type":"عرض مرئي",
"separateLines":"خطوط مختلفة للكلمات",
"help":"بابل لاينز (خط الفقاعات) هو أداة مرئية تظهر التوتر والتكرار لكلمة ما موجودة في مكنز. يمثل كل خط افقي مستند في المكنز ويتم تقسيم الخط الى شرائح متساوية الطول. تمثل كل فقاعة كلمة واحدة. وقطر الفقاعة تتناسب طردا مع العدد التصاعدي لتكرار الكلمة في شريحة النص المذكور   ",
"total":"المجموع",
"granularity":"التَّحَبُّب",
"options":"خيارات"});
Ext.apply(Voyant.panel.CorpusTerms.i18n, {
"corpusComparisonDifference":"Comparison",
"matchingTerms":"Matching terms: {count}",
"corpusComparisonDifferenceTip":"This is the difference between the term's relative frequency in this corpus and the relative frequency in a comparison corpus (you can define a comparison corpus in the tool's options).",
"emptyText":"No matching results.",
"termTip":"The term in the corpus.",
"title":"كلمة",
"relativePeakednessTip":"This is a statistical measure of how much the relative frequencies of a term in a corpus are bunched up into peaks (regions with higher values where the rest are lower).",
"relativePeakedness":"Peakedness",
"noCorpusComparison":"You have selected to show the <i>Comparison</i> column but you haven't yet defined a comparison corpus (you can do so in the tool's options).",
"rawFreqTip":"The total count (raw frequency) of this term in the entire corpus.",
"relativeSkewness":"Skew",
"relativeFreqTip":"The relative frequency (per million) of this term in the entire corpus.",
"trendTip":"This represents the trend of the relative frequencies for each term in each document in the corpus.",
"helpTip":"</p><p>Corpus Terms is a table view of terms that appear in the entire corpus. Features include:</p><ul><li>reordering by <i>term</i> and <i>count</i> (click on the column headers)</li><li>a sparkline graph of the term frequency trends across the corpus (if the corpus has multiple documents) or across the document (if the corpus has only one document)</li><li>additional columns available (relative frequency, distribution peakedness and skew) by clicking on the arrow that appears when hovering over a header</li><li>a search box for queries (hover over the magnifying icon for help with the syntax)</li></ul>",
"relativeSkewnessTip":"This is a statistical measure of the symmetry of the relative frequencies of a term across the corpus."});
Ext.apply(Voyant.panel.NoTool.i18n, {
"notImplemented":"هذه الاداة موجودة في نسخة قديمة ولم يتم تنفيذها في هذه النسخة. سيتم تنفيذ بعض الأدوات لاحقا ولكن لن يشمل ذالك بعض منها لانها اما كانت تجريبية او غير ناجحة اوتابعة لبرامج  غير مدعومة حاليا (مثل ادوب فلاش وجافا ابليتس) الرجاء اختيار النسخة الحالية او النسخة السابقة.",
"badToolSpecified":"لا توجد أداة <i>{0}</i>. سيتم اعادة توجيهك للصفحة الرئيسية لفوايانت تولز.",
"currentButton":"اختر النسخة الجديدة",
"oldButton":"اخترالنسخة السابقة",
"noToolSpecified":"لم يتم تحديد الأداة. سيتم اعادة توجيهك للصفحة الرئيسية لفوايانت تولز.",
"title":"لا تجد هذه الأداة",
"error":"خطأ"});
Ext.apply(Voyant.panel.CustomSet.i18n, {
"noSuchTool":"الأدة المطلوبة ({0}) غير متوفرة ",
"title":"عرض تفصيلي",
"helpTip":"هذا العرض تفصيلي"});
Ext.apply(Voyant.panel.CollocatesGraph.i18n, {
"cleaning":"ترتيب",
"releaseToRemove":"أفلت لإزالة الكلمة",
"context":"سياق",
"clearTerms":"محي ",
"title":"روابط",
"helpTip":"<p>كولوكايتز: تظهر شبكة الرسم بياني اكبر تواترللكلمات المتضامة (التي تتواجد بالقرب من بعضها). تظهر الكلمات المفتاحية باللون الازرق  والكلمات المتضامة باللون البرتقالي. الوظائف المتاحة:</p><ul><li>التحويم فوق الكلمات المفتاحية تظهر تواترها في المكنز</li><li>التحويم فوق الكلمات المتضامة تظهر تواترها  عن قرب وليس على مستوى المكنز</li><li>النقر المزدوج على اية كلمة يحضر نتائج اضافية</li><li>مربع البحث للاستفسارات الخاصة (التحويم فوق ايقونة التكبيرللمساعدة في طريقة البحث)</li></ul>"});
Ext.apply(Voyant.panel.CorpusCreator.i18n, {
"cancel":"إلغاء",
"accessModeWithoutPassword":"نفاذ آخر",
"xpathGroupBy":"تصنيف",
"reveal":"كشف",
"OpenExisting":"فتح مكنز متاح",
"tableNoHeadersRow":"لا توجد ترويسة",
"accessOptionsText":"بالامكان تحديد اكثر من كلمة سرللنفاذ (فاصلة محددة) ",
"tableDocumentsRows":"من الخلايا في كل صف",
"gearTip":"خيارات",
"tokenizationWordBoundaries":"حدود بسيطة  للكلمة",
"numberEmpty":"يوجد على الاقل عمود واحد فارغ حاليا",
"tokenization":"تفصيل الكلمات",
"xpathContent":"محتويات",
"numbersNeedCommas":"الرجاء إستعمال الفاصلة للفصل بين الأرقام المتعددة",
"tableDocumentsTable":"من الجدول الكامل",
"UploadLocal":"تحميل مستند واحد او اكثر من حاسوبك",
"helpTip":"تتيح الأداة إنشاء مكنزبثلاثة طرق:<ol><li>عند طباعة اولصق نص في مربع النصوص و النقر على مفتاح <i>الكشف</i>;عند استعمال قائمة URL على كل سطر مربع النصوص يتم إحضار النص من هذه المواقع والا سيتم معاجة المحتويات كمستند واحد</li><li>النقر على مفتاح<i>فتح</i>لإستخدام المكنزالمتاح</li><li>النقر على مفتاح<i>تحميل</i>لتحميل مستند او اكثر من حسوبك (بالامكان اختيار عدد من المستندات بالضغط على مفتاحي SHIFT او التحكم)</li></ol>",
"xmlOptionsText":"تحديد تعابير XPath لكل من الآتي",
"tableTitle":"عنوان",
"noTextProvided":"لا يوجد نص",
"tableContent":"محتويات",
"xpathDocuments":"مستندات",
"tokenizationAuto":"تلقائي (يوصى به بشدة)",
"numbersCommasOnly":"ارقام محددة بفاصلة فقط",
"tableOptionsText":"اختيار طريقة إستخراج المستندات (الصيغات المعتمدة حصريا من MS Excel: .XLS, XLSX فقط). للمزيد من المعلومات انظرالتوثيق حول انشاء مكنزمن<a href=\"{0}\" target=\"voyantdoc\"\" البيانات المجدولة</a>.",
"PleaseSelectExisting":"الرجاء إختيار مكنز",
"inputFormat":"صيغة الإدخال",
"tableDocumentsColumns":"من جميع الخلايا في العمود",
"accessModeWithoutPasswordText":"اذا حُددت <i>كلمة سر النفاذ</i> يمكنك أيضا تحديد مجال النفاذ لمستخدمين ليس لديهم كلمة السر",
"tableContentText":"تحديد العواميد التي تحتوي بيانات او تجنب الاختيار لاستخدام جميع العواميد. العمود الاول في اقصى اليسار. تخصيص المستندات المتعددة باستخدام فاصلة محددة لكل من العواميد اوباستخدام رمز +. مثلا \"1+2,3\" من غيرالقوسين سيدمج العمود الاول و الثاني في مستند واحد وسينقل محتويات العمود الثالث الى مستند اخر.  ",
"numberZero":"0 غير صالح, العمود الاول 1",
"inputFormatAuto":" كشف تلقائي (يوصى به)",
"unknownFiles":"غير معرفة (خطأ محتمل)",
"fileTypesWarning":"تحذير: أنواع الملفات",
"accessModeNone":"غير متوفر",
"tokenizationOptions":"خيارات تفصيل الكلمات",
"advancedOptionsText":"للمزيد من المعلومات عن الخيارات المتقدمة المتاحة, انظرالتوثيق حول <a href=\"{0}\" target=\"voyantdocs\">إنشاء المكنز</a>.",
"tableDocuments":"مستندات",
"fileTypesMessage":"ملحقات بعض الملفات غير صالحة او غير معرفة قد تسبب اخطأ.",
"errorNotXmlContinue":"تم اختيارتنسيق الإدخال XML ولكن المدخلات ليس بصيغة XML. هل تريد الإستمرار؟",
"SelectExisting":"اختيار مكنز محدد",
"tableOptions":"جداول",
"xmlOptions":"XML",
"Upload":"تحميل",
"title":"إدخال النصوص",
"error":"وقع خطأ",
"sureContinue":"هل تريد الإستمرار؟",
"Open":"فتح",
"badFiles":"غير صالحة (خطأ محتمل)",
"emptyInput":"إدخال URL واحد او اكثر على سطور مختلفة او لصق نص كامل ",
"ok":"متابع",
"accessPassword":"رمز النفاذ",
"adminPassword":"رمز الإدارة",
"accessModeNonConsumptive":"محدود (عدم الاستهلاك)",
"tableMetadataText":"الخيارات متاحة فقط عندما تستخرج البيانات من الخلايا في كل صف كما في الخيار الاول في هذا القسم. اتبع ذات الطريقة الموجودة في خيار المضمون في الاعلى. ارقام العواميد المفصولة او مدموجة برمز +.",
"xpathAuthor":"مؤلف",
"xpathTitle":"عنوان",
"pleaseProvideText":"الرجاء إدخال نص في الاطار او اختيار فتح \ تحميل",
"invalidForm":"قيم غير صالحة. يرجى التحليق فوق الاطارات الحمرأ للإرشادات",
"tableAuthor":"مؤلف",
"gearWinTitle":"خيارات",
"uploadingCorpus":"تحميل المكنز...",
"accessOptions":"إدارة النفاذ",
"tableNoHeadersRowText":"في حال وجود ترويسة سيتم تخطي الصف الاول. وستستخدم الترويسة لتحديد عنوان المستند تلقائيا عند استخراج المستند كليا من العمود. في هذه الحالة يجب ترك رأس العمود خال. "});
Ext.apply(Voyant.util.DetailedError.i18n, {
"error":"وقع خطأ"});
Ext.apply(Voyant.panel.Summary.i18n, {
"longest":"اطول:",
"documentType":"<tpl for=\"types\"><a href=\"#\" onclick=\"return false\" class=\"document-type keyword\" voyant:recordid=\"{id}\" voyant:docindex=\"{docIndex}\">{type}</a> ({val})<tpl if=\"xindex < xcount\">, </tpl></tpl>",
"more":"للمزيد...",
"mostFrequentWords":"Most <b>frequent words</b> in the corpus: ",
"title":"ملخص",
"numberOfTerms":"عدد الكلمات في هذا المستند",
"lowest":"اقل:",
"docsLength":"طول المستند:",
"corpusType":"<tpl for=\"types\"><a href=\"#\" onclick=\"return false\" class=\"corpus-type keyword\" voyant:recordid=\"{id}\">{type}</a> ({val})<tpl if=\"xindex < xcount\">, </tpl></tpl>",
"seeAll":"الجميع:",
"highest":"اعلى:",
"distinctiveWords":"<b>Distinctive words</b> (compared to the rest of the corpus): ",
"docsDensity":"كثافة المفردات:",
"helpTip":"<p>The <i>Summary</i> tool provides general information about the corpus. Many elements in the tool are links that trigger other views. Features include:</p><ul><li>total words (tokens) and word forms (types) and age of the corpus</li><li>most frequent terms in the corpus</li><li>for corpora with more than one document<ul><li>documents ordered by length and vocabulary density</li><li>distinctive words for each document (by TF-IDF score)</li></ul></li></ul>",
"moreDistinctiveWords":"<a href=\"#\" onclick=\"return false\">Next {0} of {1} remaining</a>",
"items":"عناصر",
"shortest":"اقصر:"});
Ext.apply(Voyant.panel.CorpusSet.i18n, {
"title":"عرض للمكنز",
"helpTip":"هذا  هو العرض الاعتيادي للغايات العامة للمكنزة "});
Ext.apply(Voyant.widget.FontFamilyOption.i18n, {
"label":"Font family"});
Ext.apply(Voyant.panel.Subset.i18n, {
"publisherLabel":"النشرون",
"sendToVoyantButton":"مكنز فويانت جديد",
"downloadButton":"تحميل الارشيف المضغوط",
"sendToVoyantNoQuery":"There's currently no query specified, but you can <a href=\"{0}\" target=\"_blank\">open the current corpus in a new window</a>.",
"lexicalLabel":"الص الكامل",
"noMatches":"المعاير الحالية لا تطابق اي من المستندات, يرجى تعديل البحث اولا",
"titleLabel":"العناوين",
"authorLabel":"المؤلفون",
"title":"إنشاء المكنز الجزئي "});
Ext.apply(Voyant.widget.DownloadFilenameBuilder.i18n, {
"titleLabel":"عنوان",
"authorLabel":"مؤلف",
"availableLabel":"إستبعاد",
"enabledLabel":"إدراج",
"fieldLabel":"إسم الملفات",
"pubDateLabel":"تاريخ"});
Ext.apply(Voyant.panel.Mandala.i18n, {
"add":"إضافة",
"cancel":"الغاء",
"clearTip":"إزالة جميع المغناطيسات (كلمة البحث)",
"EditMagnet":"حرر المغناطيس",
"clear":"إزالة",
"labelsTip":"تبديل مظهر السمات",
"update":"تحديث",
"title":"مندالا",
"addTip":"إضافة مغناطيس (كلمة البحث)",
"helpTip":"مندالا هو عرض مرئي مفهومي يبين العلاقات بين الكلمات والمستندات. تجر كل كلمة بحث (أي مغناطيس) المستندات باتجاها حسب التواتر النسبي للكلمات في المكنز.",
"remove":"حذف",
"labels":"سمات"});
Ext.apply(Voyant.widget.CorpusSelector.i18n, {
"chooseCorpus":"إختيار مكنز"});
Ext.apply(Voyant.panel.DocumentTerms.i18n, {
"matchingTerms":"Matching terms: {count}",
"tfidfTip":"The significance is measured here using an TF-IDF score, a common way of expressing how important a term is in a document relative to the rest of the corpus.",
"rawFreqTip":"The count (raw frequency) of this term in this document.",
"emptyText":"No matching results.",
"relativeFreqTip":"The relative frequency (per million) of this term in each document.",
"termTip":"The term in a single, specific document.",
"zscore":"Z-Score",
"trendTip":"This is a sparkline graph that represents the distribution of the term within linear segments of the document (by default 10 segments of equal size).",
"tfidf":"Significance",
"title":"Document Terms",
"helpTip":"<p>Document Terms is a table view of terms that appear in each document. Features include:</p><ul><li>reordering by <i>Term</i>, <i>Count</i> (raw frequency), and <i>Relative</i> frequency (click on the column headers)</li><li>a sparkline graph of the distribution of term frequencies across the documents</li><li>additional columns available (<i>Significance</i> or TF-IDF) by clicking on the arrow that appears when hovering over a header</li><li>a search box for queries (hover over the magnifying icon for help with the syntax)</li></ul>",
"zscoreTip":"The Z-Score, or standard score, is a normalized value for the term's raw frequency compared to other term frequencies in the same document.<table><tbody><tr><td style=\"text-align: center; font-size: smaller; font-family: mono;\">frequency of term - mean of term frequencies<hr>standard deviation of term frequencies</td></tr></tbody></table>."});
Ext.apply(Voyant.data.model.Corpus.i18n, {
"hasNdocuments":"يحتوي عدد من مستندات : {count}",
"daysAgo":"منذ  حوالي عدد من الأيام : {count}",
"monthsAgo":"منذ حوالي عدد من الأشهر : {count}",
"thisCorpus":"هذا المكنز",
"created":"إنشاء",
"isEmpty":"فارغ",
"widthNwordsAndNTypes":"عند {words} <span class=\"info-tip\" data-qtip= \"يتم عد كل ظهور لكلمة ما مرة واحدة\" >total words</span> and {types} <span class=\"info-tip\" data-qtip= كما تعد الكلمات المتكررة (like &quot;the&quot;) مرة واحدة \">unique word forms</span>",
"hoursAgo":"منذ  حوالي عدد من الساعات : {count}",
"minutesAgo":"منذ  حوالي عدد من الدقائق : {count}",
"minuteAgo":"منذ حوالي دقيقة",
"monthAgo":"منذ حوالي شهر",
"hourAgo":"منذ حوالي ساعة",
"failedCreateCorpus":"محاولة فاشلة لإنشاء مكنز",
"has1document":"يحتوي مستند واحد",
"yearsAgo":"منذ  حوالي عدد من السنوات : {count}",
"secondAgo":"منذ حوالي ثانية",
"now":"الآن",
"yearAgo":"منذ حوالي سنة",
"secondsAgo":"منذ  حوالي عدد من الثوان : {count}",
"dayAgo":"منذ حوالي يوم"});
Ext.apply(Voyant.panel.WordTree.i18n, {
"emptyText":"لا يوجد نتائج مطابقة",
"title":"شجرة الكلمات"});
Ext.apply(Voyant.widget.DownloadFileFormat.i18n, {
"original":"أصلي",
"VOYANTTip":"النسخة التالية قد تم تسويتها: يظهر المستند بشكله الاصيل عند كتابة المحتوى بصيغة XML بينما يظهر المحتوى بصيغة HTML عندما تكون المستندات بصيغة إدخال مختلفة ",
"fieldLabel":"صيغة الملف",
"voyantXml":"فوايانت XML",
"plainText":"نص خالص",
"SOURCETip":"انتاج المستندات بصيغتها الاصيلة جاري. قد يتم انتاج ملف مضغوط واحد على سبيل المثال. ",
"TXTTip":"انتاج نص خالص لكل مستند. "});
Ext.apply(Voyant.panel.ScatterSet.i18n, {
"title":"سكاتر (تشتت)",
"helpTip":"هذا العرض خاص لمخطط التشتت"});
Ext.apply(Voyant.util.Toolable.i18n, {
"exportTitle":"تصدير",
"exportError":"تصديرخطأ",
"exportDataTsvMessage":"نسخ البيانات التالية ولصقها داخل جدول بيانات اوملف نصي",
"exportViewFieldset":"تصدير العرض (أدوات وبيانات)",
"exportSvgMessage":"صورة مصغرة لل SVG: بالإمكان النقر على اليمين او النقر على مفتاح التحكم لحفظ الصورة بالحجم الكامل اونسخ ال SVG",
"exportDataJsonMessage":"نسخ البيانات التالية ولصقها داخل تطبيقات متوفرة على الانترنت",
"plusTip":"إضغط لإختيار أداة جديدة في هذا الإطار. سيتم إستبدال الأداة الحالية",
"gearTip":"اختيارات الأداة",
"cancelTitle":"إلغاء",
"exportViewHtmlEmbed":" جزيء HTML لتضمين العرض في صفحة جديدة ",
"exportGridCurrent":"تصدير البيانات الحاضرة",
"exportSvgTitle":"تصدير بصيغة SVG",
"maximizeTip":"فتح الاداة في نافذة جديدة",
"exportGridCurrentTsv":"تصدير البيانات الحاضرة بصيغة TSV ",
"exportVizTitle":"تصدير العرض المرئي",
"exportDataTitle":"تصدير البيانات",
"optionsTitle":"إختيارات",
"exportBiblioTitle":"تصدير المرجع البيبليوغرافي",
"confirmTitle":"تأكيد",
"moreHelp":"لمزيد من المعلومات",
"exportViewUrl":"طلب URL لهذا العرض (أدوات وبيانات)",
"helpTip":"لائحة المساعدة الخاصة  بالأداة غير متوفرة: إضغط الأيقونة للوصل الى موقع توثيق فوايانت تولز <a href=\"http://docs.voyant-tools.org/\" target=\"_blank\">Voyant Tools Documentation</a> site.",
"export":"تصدير",
"exportDataHtmlMessage":"نسخ البيانات التالية ولصقها داخل صفحة HTML اوإستخدامها كXML",
"exportPngTitle":"تصدير بصيغة PNG",
"exportPngMessage":"صورة مصغرة لل PNG: بالإمكان النقر على اليمين او النقر على مفتاح التحكم لحفظ الصورة بالحجم الكامل اونسخ ال HTML",
"exportGridCurrentHtml":"تصدير البيانات الحاضرة  بصيغة HTML ",
"exportViewEmbedMessage":"نسخ ولصق جزيء HTML من الاسفل الى صفحة جديدة. ملاحظة!  تحتاج بعض نظم إدارة المحتوى ك WordPress الى مساعد لقبول وسوم  &lt;iframe&gt; ",
"exportPng":"تصدير العرض المرئي بصيغة PNG ",
"reset":"إعادة ضبط الخيارات",
"exportViewBiblio":"مرجع بيبليوغرافي للعرض",
"exportViewEmbedTitle":"تضمين  جزيء HTML ",
"exportNoFunction":"وظيفة التصدير غير معرّفة ",
"exportGridCurrentJson":"تصدير البيانات الحاضرة بصيغة JSON ",
"exportSvg":"تصدير العرض المرئي بصيغة SVG ",
"saveTip":"تصدير: URL , أداة قابلة للتضمين , بيانات او مرجع بيبليوغرافي"});
Ext.apply(Voyant.panel.TextualArc.i18n, {
"minRawFreqTip":"العدد الأدنى لظهور الكلمات. بشكل افتراضي يحدد العدد 2 (للكلمات المتكررة)  لتحسين الأداء, تحديده بواحد (1) يبطيء العملية بشكل ملحوظ. ",
"search":"ترشيح",
"minRawFreq":"تواتر الحد الأدنى",
"adaptation":" W. Bradford Paley <a href=\"http://textarc.org\" target=\"_blank\">TextArc</a>مستوحاة من",
"title":"تكستوال ارك (القوس النصي)",
"speedTip":"التحكم بسرعة العرض المرئي",
"helpTip":"تكستوال ارك هو عرض مرئي  للكلمات الموجودة في المستند والذي يتضمن نقطة مركزية مرجحة للكلمات وقوس الذي يتبع الكلمات في ترتيبها في المنستند  ",
"speed":"سرعة"});
Ext.apply(Voyant.panel.StreamGraph.i18n, {
"freqsMode":"التواترات",
"freqsModeTip":"Determines if frequencies are expressed as raw counts or as relative counts (per document or segment).",
"relativeFrequencies":"التواترات النسبية",
"documents":"مستندات",
"documentSegments":"شرائح المستند ",
"clearTerms":"إزالة الكلمات",
"title":"StreamGraph",
"rawFrequencies":"التواترات الاساسية",
"helpTip":"StreamGraph is a visualization that depicts the change of the frequency of words in a corpus (or within a single document).",
"segments":"شرائح"});
Ext.apply(Voyant.notebook.util.Embed.i18n, {
"tryWidget":"اختيار احد هذه الودجات",
"widgetNotRecognized":"التضمين غير متوفر"});
Ext.apply(Voyant.widget.ListEditor.i18n, {
"cancel":"Cancel",
"editList":"Edit List",
"new":"New User-Defined List",
"editListMessage":"This is the list, one term per line.",
"editListTitle":"Edit List",
"label":"List:",
"none":"None",
"ok":"Save",
"whiteListLabel":"White List:"});
Ext.apply(Voyant.widget.DownloadOptions.i18n, {
"title":"إختيارات التنزيل "});
Ext.apply(Voyant.widget.TotalPropertyStatus.i18n, {
"totalPropertyStatus":"{count:number(\"0,000\")}"});
Ext.apply(Voyant.panel.Phrases.i18n, {
"overlapNone":"الكل",
"overlapTip":"تحديد كيفية ترشيح العبارات المتراكبة",
"matchingTerms":"{count}",
"overlapFreq":"الاولوية للعبارات الاكثر تكرارا",
"emptyText":"لا توجد نتائج مطابقة",
"length":"طول",
"termTip":"العبارة المفتاحية كما تظهر بشكل عام قد تختلف قليلا في بعض الحالات",
"termRawFreqTip":"عدد وقوع العبارة في المكنز",
"title":"عبارات",
"lengthTip":"الحد الأقصى و الحد الإدنى لطول الأعبارات (عدد الكلمات في كل العبارة)",
"termRawFreq":"عدد",
"overlap":"تراكب",
"overlapLength":"الاولوية لاطول العبارات",
"overlapMenu":"اختيار ترشيح التراكب",
"term":"كلمة",
"helpTip":"  <p>كوربوس فرايسيس هو عرض جدولي لعبارات متكررة من مجمل المكنز.<!-- الميزات المطاحة:</p<ul><li> اعادة الترتيب حسب الكلمة المفتاحية او الكلمة المتضامة او عدد الكلمة المتضامة</li><li>مربع البحث للإستفسارات (التحويم على أيقونة التكبير للمساعدة في طريقة البحث)</li></ul>-->"});
Ext.apply(Voyant.panel.Trends.i18n, {
"relativeFrequencies":"التواترالنسبية",
"documents":"المستندات",
"raw":"أساسي",
"segmentsSlider":"شرائح",
"scale":"الحجم",
"title":" ترندز(اتجاهات)",
"segments":"شرائح المستند",
"freqsMode":"التواترات",
"freqsModeTip":"تحدد التواتر كعدد أساسي او نسبي (في كل مستند او شريحة)",
"options":"فواينت تولز",
"rawFrequencies":"التواترالاساسية",
"helpTip":"<p><i>ترندز</i> يظهر خط الرسم البياني للتواترات النسبية عبر المكنز (في حالة وجود مستندات متعددة) او داخل المستند. الوظائف المتاحة:</p><ul><li>مربع البحث للإستفسارات (التحويم على أيقونة التكبير للمساعدة في طريقة البحث)",
"relative":"نسبي"});
Ext.apply(Voyant.widget.StopListOption.i18n, {
"cancel":"الغاء",
"de":"الماني",
"hi":"هندي",
"no":"نرويجي",
"auto":"تحديد اللغة تلقائيا",
"bg":"بلغاري",
"noEditAutoMessage":"لا يمكن تعديل قائمة الكلمات المستبعدة بحسب اللغة المختارة, الرجاء اختيار قائمة تفصيلية اخرى \"كالقائمة الشخصية الجديدة\"",
"lt":"لاتفي",
"lv":"ليتواني",
"none":"غير موجود",
"fr":"فرنسي",
"hu":"هنغاري",
"br":"بريتاني",
"editStopListTitle":"تعديل قائمة الكلمات المستبعدة",
"hy":"ارمني",
"se":"سويدي",
"ga":"ايرلندي",
"id":"اندونسي",
"ok":"حفظ",
"ca":"قاطالوني",
"new":"قائمة شخصية جديدة ",
"gl":"غاليسي",
"el":"يوناني",
"mu":"متعدد اللغات",
"en":"انكليزي",
"label":"كلمات مستبعدة",
"cn":"صيني",
"it":"ايطالي",
"noEditAutoTitle":"خطأ في تعديل قائمة الكلمات المستبعدة",
"es":"اسباني",
"editStopListMessage":"الرجاء إدخال كلمة واحدة على كل سطر",
"applyGlobally":"تطبيق شامل",
"eu":"باسكي",
"editList":"تعديل القائمة ",
"ar":"عربي",
"th":"تايلندي",
"cz":"تشيكي",
"ja":"ياباني",
"ckb":"كردي",
"fa":"فارسي",
"ro":"روماني",
"nl":"هولندي",
"tr":"تركي"});
Ext.apply(Voyant.panel.Catalogue.i18n, {
"sendToVoyantButton":"مكنز فويانت جديد",
"cancel":"إلغاء",
"select":"إختيار",
"exportInProgress":"إعداد المكنز للتصدير",
"facet.titleTitle":"عناوين",
"title":"كاتلوغ (فهرس)",
"lexicalTitle":"كلمات",
"clickToOpenCorpus":"الرجاء <a href=\"{0}\" target=\"_blank\" class=\"link\">النقر هنا</a> للوصول اى المكنز الجديد (حيث تم حجب النوافذ المنبثقة).",
"rawFreqs":"مجموع عدد الظهور (التواتر الاساسية)",
"facet.languageTitle":"لغات",
"noMatches":"لا يوجد تطابق من عدد من المستنادات :{0}",
"selectValidFacet":"الرجاء إختيار سطيح صالح",
"plusFacetTip":"إضافة سطيح جديد",
"facet.collectionTitle":"مجموعات",
"matchingDocuments":"عدد المستندات المطابقة",
"helpTip":"توفر أداة الفهرس واجهة لاكتشاف محتويات مكنز كبير الحجم  أومتعدد المستندات بالاضافة الى إنشاء مكنز ثانوي بحسب معايير البحث. يقوم بعمل قاعدة البيانات أو متجر على الانترنت ليتيح لك امكانية ترشيح المستندات",
"export":"تصدير ",
"downloadButton":"تحميل",
"facet.pubPlaceTitle":"مكان النشر",
"queryMatches":"عدد من المستندات مطابقة {0} من {1}",
"facet.keywordTitle":"كلمات مفتاحية",
"exportTip":"إنشاء مكنزجديد لفوايانت من المستندات المختارة",
"facet.authorTitle":"مؤلفون",
"closeFacetTip":"إزالة السطيح",
"selectFacet":"إختيار السطيح",
"loadingSnippets":"تحميل جزيئات نصية",
"facet.pubDateTitle":"تواريخ النشر",
"facet.publisherTitle":"دور النشر"});
Ext.apply(Voyant.panel.CollocatesSet.i18n, {
"title":"سكاتر (تشتت)",
"helpTip":"هذا العرض خاص لمخطط التشتت"});
Ext.apply(Voyant.panel.MicroSearch.i18n, {
"title":"بحث دقيق",
"loading":"تحميل الكلمات",
"helpTip":"تعرض هذه الاداة  تقدمة عامة للمكنز وتظهر توزيع كلمات البحث"});
Ext.apply(Voyant.panel.TopicContexts.i18n, {
"reset":"إعادة تنضيد ",
"title":"سياقات المواضيع",
"helpTip":"سياقات المواضيع"});
Ext.apply(Voyant.panel.BubblelinesSet.i18n, {
"title":"غلاف (بوبل لاينز)",
"helpTip":"هذا العرض خاص  (بوبل لاينز) "});
Ext.apply(Voyant.panel.Knots.i18n, {
"findTerm":" الكلمة",
"settings":"إعدادات",
"startAngle":"البدء",
"tangles":"قلب",
"showTerm":"كشف الكلمة",
"sound":"صوت",
"clearTerms":"محي ",
"removeTerm":"إزالة الكلمة",
"hideTerm":"إخفاء الكلمة",
"title":"نوتز (عقد)",
"type":"عرض مرئي",
"noTermsFound":"لا توجد كلمات في المكنز",
"speed":"سرعة",
"soundTip":"تشغيل الصوت عند نوتز ",
"options":"خيارات",
"context":"سياق"});
Ext.apply(Voyant.VoyantApp.i18n, {
"serverResponseError":"رسالة خطأ من النظام الخادم:",
"error":"وقع خطأ",
"translatedBy":" الترجمة العربية بقلم ديفيد جوزيف رزلي و نجلاء جركس"});
Ext.apply(Voyant.panel.RezoViz.i18n, {
"noEntitiesForEdgeCount":"No entities were found. Would you like to reduce the minimum edge count to improve results?",
"loadingEntities":"تحميل العناصر جاري",
"minEdgeCount":"Min. Edge Count",
"noEntities":"No entities to graph.",
"title":"RezoViz",
"stiffness":"Stiffness",
"people":"People",
"friction":"Friction",
"repulsion":"Repulsion",
"reload":"Reload",
"organizations":"Organizations",
"locations":"Locations",
"categories":"Categories"});
Ext.apply(Voyant.widget.DocumentSelector.i18n, {
"cancel":"إلغاء",
"all":"جميع",
"selectAll":"جميع",
"documents":"المستندات",
"ok":"تم",
"selectNone":"لا شيء"});
Ext.apply(Voyant.panel.Contexts.i18n, {
"emptyText":"لا يوجد نتائج مطابقة",
"document":"مستند",
"corpus":"مكنز",
"limitedAccess":"المكنز محدود النفاذ فتم حجب تشغيل الاداة ",
"termTip":"الكلمة المفتاحية للسياق",
"right":"يمين",
"title":"سياقات",
"expand":"توسيع",
"documentTip":"المستند الحاوي لكلمات الظهور",
"left":"يسار",
"corpusTip":"الرجوع الى نسق المكنز (السياقات من جميع المستندات)",
"rightTip":"السياق يميناً",
"context":"سياق",
"leftTip":"سياق يساراً",
"position":"الموضع",
"positionTip":"موضع الكلمة المفتاحية داخل المستند",
"helpTip":"الكلمات المفتاحية في أداة السياق تظهراي تكرارللكلمة المفتاحية مرفقة ببعض من النص المحيط (السياق). يمكن الاستفادة منه للتحقق عن قرب عن كيفية إستعمال الكلمات في سياقات مختلفة. الوظائف المتاحة:<p></p>اعادة ترتيب المستند، بواسطة الكلمة المفتاحية أو بالسياق من اليمين أو اليسار</li><li>للحصول على مربع البحث للاستعلام (يرجى التحليق فوق ايقونة المكبرة للمساعدة في تركيب الجمل)"});
Ext.apply(Voyant.VoyantDefaultApp.i18n, {
"voyantIs":"<a href=\"./docs/#!/guide/about\"> فوايانت تولز هي محيط لقراءة وتحليل النصوص الرقمية وهي متوفرة على شبكة الانترنت</a>.",
"noViewKnownErrorTpl":"The selected view ({view}) has not been migrated from the previous version of Voyant (and probably won't be). {additional} The default view will be used instead.",
"convertSkinMsg":"The convert skin was used for document exporting and that functionality is now available from the Documents tool.",
"noViewErrorTitle":"كشف الخطأ",
"helpTip":" فوايانت تولز هي محيط لقراءة وتحليل النصوص الرقمية وهي متوفرة على شبكة الانترنت",
"noViewErrorTpl":"No view was found with the name \"<i>{view}</i>\". The default view will be used instead."});
Ext.apply(Voyant.widget.Facet.i18n, {
"emptyText":"لا توجد نتائج"});
Ext.apply(Voyant.panel.ScatterPlot.i18n, {
"relFreq":"نسبي",
"xAxis":"المحور الافقي",
"termsLabel":"الكلمات",
"summaryLabel":"ملخص",
"title":"ScatterPlot",
"nearby":"بالقرب ",
"remove":"إزالة",
"pca":"Principal Components Analysis",
"docSim":"Document Similarity",
"noTermSelected":"لم يتم اختيار كلمة",
"freqsMode":"Frequencies",
"terms":"كلمات",
"tokenFreqTip":"<b>{0}</b><br><b>التواتر الاساسي</b><br>{1}<br><b>التواتر النسبي</b><br>{2}",
"term":"كلمة",
"docFreqTip":"<b>{0}</b><br><b> عدد الكلمات </b><br>{1}",
"rawFrequencies":"التواتر الأساسي",
"dimension":"بُعد",
"helpTip":"<p>ScatterPlot displays the correspondance of word use in a corpus. This visualization relies on a statistical analysis that takes the word’s correspondance from each document (where each document represents a dimension) and reduces it to a three-dimensional space to easily visualize the data through a scatterplot.</p>",
"ca":"Correspondence Analysis",
"clusters":"مقاطع تخزين",
"pcTitle":"النسبة المؤية لكل اختلاف مشروحة في كل  ",
"relativeFrequencies":"التواتر النسبي",
"addTerm":"اضافة كلمة",
"numTerms":"كلمات",
"removeTerm":"إزالة <b>{0}</b>",
"tfidf":"TF-IDF",
"analysis":"Analysis",
"fill":"Fill",
"loading":"التحميل جاري",
"labels":"وسوم",
"freqsModeTip":"Determines if frequencies are expressed as relative counts, raw counts, or as TF-IDF.",
"yAxis":"المحور العمودي",
"pc":"PC",
"nearbyTerm":"بالقرب <b>{0}</b>",
"docsLabel":"المستندات",
"rawFreq":"أساسي",
"caTitle":"Percentage of Total Association Explained by Each Dimension",
"dimensions":"احداثيات"});
Ext.apply(Voyant.panel.VoyantFooter.i18n, {
"voyantTools":"فواينت تولز",
"privacy":"سياسة الخصوصية",
"voyantLink":"<a href=\"http://docs.voyant-tools.org/\" target=\"_blank\">فواينت تولز</a>",
"privacyMsg":"The developers of Voyant Tools gather data from the site about what tools are invoked and with what parameters (IP addresses are also logged in order to be able to identify multiple requests during a same session). In addition, Voyant Tools uses Google Analytics (see Google's Privacy Policy and the <em>Log Information</em> section in particular). Locally logged data and Google Analytics data will be used by the development team in order to debug and improve the tools, as well as to understand how researchers are using them. This data may also be used for research purposes in anonymous and aggregate forms. Please note that texts submitted to Voyant Tools are stored in order to allow persistent access during a work session and between work sessions. If you have questions about the data being collected and how it is being used, or to request that a corpus be removed, please contact Stéfan Sinclair. Click on this link for more information."});
Ext.apply(Voyant.widget.QuerySearchField.i18n, {
"querySearchTip":"<div>إضغط على مفتاح الدخول للبحث في الجمل </div><ul style=\"margin-top: 3px; margin-bottom: 3px;\"><li><b>معطف</b>: طابق كلمة <i>معطف</i></li><li><b>معطف*</b>: طابق الكلمات التي تبدأ بحروف <i>معطف</i> ككلمة واحدة</li><li><b>^معطف*</b>: طابق الكلمات التي تبدأ بحروف <i>معطف</i> </li><li><b>*عطف</b>: طابق الكلمات التي تنتهي بالاحرف<i>عطف</i>  ككلمات منفصلة معطف معطفي او معطفين</li><li><b>^*عطف</b>: طابق الكلمات التي تنتهي بالاحرف<i>عطف</i> ككلمات منفصلة</li><li><b>معطف,جاكيت</b>: طابق الكلمات المحددة بفاصلة ككلمات منفصلة</li><li><b>معطف|جاكيت</b>: طابق الكلمات المحددة بانبوبة الاتصال ككلمة واحدة </li><li><b>\" معطف شتوي\"</b>: <i>معطف شتوي</i> كعبارة </li><li><b>\"معطف قفاز\"~5</b>: <i>معطف</i> بالقرب من <i>قفاز </i>ما بين خمسة كلكات</li><li><b>^معطف*,معطف|جاكيت,\"معطف قفاز\"~5</b>: جمع البحوث الثلاثة</li></ul>",
"querySearchDocsModeTip":"<div>طريقة البحث عن المستندات (مفتاح الدخول يبدأ البحث) :</div><ul style=\"margin-top: 3px; margin-bottom: 3px;\"><li><b> تطابق حرفي للكلمة  <i>معطف </i></li><li><b>معطف *</b>: تطابق الكلمات التي تبدأ ب <i>معطف </i></li><li><b>معطف ,جاكيت</b> طابق الكلمات المحددة بفاصلة ككلمات منفصلة</li><li><b>\" معطف شتوي\"</b>: <i>معطف شتوي</i> كعبارة </li><li><b>\"معطف,قفاز\"~5</b>:<i>معطف</i> بالقرب من <i>قفاز </i>ما بين خمسة كلمات</li><li><b>+معطف+شتوي</li></ul>طابق كل كلمة مسبوقة ب (+) +معطف+ قفاز*</b>: جمع طرق البحث</li></ul>",
"querySearch":"بحث",
"aggregateInDocumentsCount":"عدد المستندات التي تعادل معاير البحث (كل مستند ظاهر يحتوي على الاقل كلمة بحث واحدة)"});
Ext.apply(Voyant.util.Localization.i18n, {
"de":"الماني",
"thisLanguage":"عربي",
"autoRecommended":" كشف تلقائي (يوصى به)",
"en":"انكليزي",
"hr":"Croatian",
"it":"ايطالي",
"languageTitle":"Language Interface Options",
"fr":"فرنسي",
"ar":"عربي",
"bs":"Bosnian",
"chooseLanguage":"Interface Language",
"cz":"تشيكي",
"ja":"ياباني",
"he":"Hebrew",
"ro":"روماني",
"sr":"Serbian"});
