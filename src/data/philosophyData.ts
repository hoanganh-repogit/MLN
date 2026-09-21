import { Tradition, Philosopher, LectureChapter, LexiconItem, AgoraComment } from '../types';

export const TRADITIONS: Tradition[] = [
  {
    id: 'state-origin',
    title: 'Nguồn gốc & Bản chất của Nhà nước',
    era: 'Giáo trình Triết học Mác - Lênin',
    icon: 'account_balance',
    description: 'Nguyên nhân kinh tế sâu xa (sự xuất hiện chế độ tư hữu) và nguyên nhân xã hội trực tiếp (mâu thuẫn giai cấp gay gắt không thể điều hòa). Bản chất nhà nước là công cụ chuyên chính giai cấp.',
    representatives: ['Ph.Ăngghen', 'V.I. Lênin', 'C.Mác'],
    keyConcepts: ['Chế độ tư hữu', 'Mâu thuẫn giai cấp', 'Công cụ chuyên chính', 'Thế bình quân tương đối'],
    lecturesCount: 6,
    monographsCount: 2,
    highlightQuestion: 'Tại sao nhà nước là hiện tượng lịch sử có tính giai cấp mà không phải là thiết chế vĩnh cửu?',
    fullOverview: 'Trong tác phẩm "Nguồn gốc của gia đình, của chế độ tư hữu và của nhà nước", Ph.Ăngghen chứng minh nhà nước là một phạm trù lịch sử: Nhà nước chỉ ra đời khi xã hội phân chia thành các giai cấp đối kháng không thể điều hòa. Nhà nước nảy sinh từ xã hội nhưng đứng trên xã hội và ngày càng tách rời khỏi xã hội để duy trì trật tự có lợi cho giai cấp thống trị.',
    syllabus: [
      { title: 'Tác phẩm kinh điển: Nguồn gốc của gia đình, của chế độ tư hữu và của nhà nước (Ăngghen)' },
      { title: 'Nguyên nhân sâu xa: Sự phát triển của LLSX và chế độ tư hữu' },
      { title: 'Nguyên nhân trực tiếp: Đấu tranh giai cấp không thể điều hòa' },
      { title: 'Bản chất giai cấp: Công cụ chuyên chính của giai cấp thống trị kinh tế' },
      { title: 'Trường hợp ngoại lệ: Thế bình quân tạm thời giữa các giai cấp đối địch' }
    ]
  },
  {
    id: 'state-features',
    title: 'Ba Đặc trưng Cơ bản của Nhà nước',
    era: 'Giáo trình Triết học Mác - Lênin',
    icon: 'verified_user',
    description: '1. Quản lý cư dân theo địa vực lãnh thổ; 2. Hệ thống cơ quan quyền lực chuyên nghiệp mang tính cưỡng chế (quân đội, nhà tù); 3. Hệ thống thuế khóa để nuôi bộ máy cai trị.',
    representatives: ['V.I. Lênin', 'Ph.Ăngghen'],
    keyConcepts: ['Địa vực lãnh thổ', 'Đội vũ trang đặc biệt', 'Thuế khóa & Quốc trái', 'Pháp luật nhà nước'],
    lecturesCount: 5,
    monographsCount: 2,
    highlightQuestion: 'Điểm khác biệt căn bản giữa tổ chức nhà nước và thể chế thị tộc thời nguyên thủy là gì?',
    fullOverview: 'V.I. Lênin trong tác phẩm "Nhà nước và cách mạng" nhắc lại 3 đặc trưng cơ bản phân biệt nhà nước với tổ chức thị tộc trước kia: Nhà nước phân chia thần dân theo địa vực (lãnh thổ, không theo huyết thống); thiết lập quyền lực công cộng đặc biệt (quân đội, cảnh sát, nhà tù); và thu thuế, quốc trái từ nhân dân để duy trì bộ máy quan lại đặt lên trên xã hội.',
    syllabus: [
      { title: 'Đặc trưng thứ nhất: Quản lý cư dân theo địa vực lãnh thổ và biên giới quốc gia' },
      { title: 'Đặc trưng thứ hai: Cơ quan quyền lực chuyên nghiệp cưỡng chế (Đội vũ trang đặc biệt)' },
      { title: 'Đặc trưng thứ ba: Hệ thống thuế khóa và quốc trái nuôi bộ máy công quyền' },
      { title: 'Vai trò của hệ thống pháp luật trong quản lý xã hội của nhà nước' }
    ]
  },
  {
    id: 'state-types',
    title: 'Chức năng & 4 Kiểu Nhà nước Lịch sử',
    era: 'Giáo trình Triết học Mác - Lênin',
    icon: 'hub',
    description: 'Chức năng thống trị chính trị vs. Chức năng xã hội; Chức năng đối nội vs. Chức năng đối ngoại. 4 kiểu nhà nước: Chủ nô quý tộc, Phong kiến, Tư sản và Vô sản (Nhà nước của số đông).',
    representatives: ['C.Mác', 'Ph.Ăngghen', 'V.I. Lênin'],
    keyConcepts: ['Thống trị chính trị', 'Chức năng xã hội', '4 Kiểu nhà nước', 'Nhà nước tự tiêu vong'],
    lecturesCount: 7,
    monographsCount: 3,
    highlightQuestion: 'Mối quan hệ hữu cơ giữa chức năng thống trị chính trị và chức năng xã hội của nhà nước là gì?',
    fullOverview: 'Chức năng thống trị chính trị giữ vai trò quyết định, chi phối; tuy nhiên, chức năng xã hội là cơ sở nền tảng của sự thống trị chính trị (như bài học lịch sử về hệ thống thủy lợi ở Ba Tư và Ấn Độ cổ đại). Lịch sử đã trải qua 4 kiểu nhà nước, trong đó nhà nước vô sản là kiểu "nhà nước đặc biệt" — nhà nước của số đông thống trị số ít, và sẽ tự tiêu vong khi tiến lên giai đoạn cộng sản chủ nghĩa.',
    syllabus: [
      { title: 'Mối quan hệ hữu cơ giữa chức năng thống trị chính trị và chức năng xã hội' },
      { title: 'Chức năng đối nội và chức năng đối ngoại của nhà nước' },
      { title: 'Kiểu nhà nước Chủ nô và Phong kiến (Quân chủ, Dân chủ Aten, Tập quyền & Phân quyền)' },
      { title: 'Kiểu nhà nước Tư sản: Các hình thức đa dạng và bản chất chuyên chính tư sản' },
      { title: 'Kiểu nhà nước Vô sản: Bản chất dân chủ số đông và quy luật tự tiêu vong' }
    ]
  },
  {
    id: 'revolution-nature',
    title: 'Nguồn gốc & Bản chất Cách mạng Xã hội',
    era: 'Giáo trình Triết học Mác - Lênin',
    icon: 'auto_awesome_motion',
    description: 'Nguồn gốc sâu xa từ mâu thuẫn giữa LLSX tiến bộ và QHSX lỗi thời. Cách mạng xã hội là bước nhảy vọt thay đổi căn bản về chất hình thái KT-XH, phân biệt với Cải cách và Đảo chính.',
    representatives: ['C.Mác', 'V.I. Lênin'],
    keyConcepts: ['Mâu thuẫn LLSX - QHSX', 'Bước nhảy vọt về chất', 'Cải cách xã hội', 'Đảo chính chính trị'],
    lecturesCount: 5,
    monographsCount: 2,
    highlightQuestion: 'Sự khác biệt căn bản giữa Cách mạng xã hội, Cải cách xã hội và Đảo chính chính trị là gì?',
    fullOverview: 'Cách mạng xã hội là phương thức chuyển biến từ hình thái kinh tế - xã hội này lên hình thái kinh tế - xã hội mới cao hơn. Theo nghĩa hẹp, đó là đỉnh cao của đấu tranh giai cấp nhằm giành chính quyền. Cách mạng xã hội khác về chất với cải cách xã hội (chỉ thay đổi từng bộ phận riêng lẻ) và đảo chính (hành vi giành quyền lực của một nhóm người, không thay đổi bản chất chế độ).',
    syllabus: [
      { title: 'Nguồn gốc sâu xa: Mâu thuẫn giữa Lực lượng sản xuất và Quan hệ sản xuất' },
      { title: 'Nguyên nhân trực tiếp: Đấu tranh giai cấp quyết liệt giành chính quyền' },
      { title: 'Bản chất cách mạng xã hội: Bước chuyển vọt căn bản về chất toàn diện' },
      { title: 'Phân biệt Cách mạng xã hội với Tiến hóa xã hội, Cải cách xã hội và Đảo chính' },
      { title: 'Phê phán Chủ nghĩa Cải lương và các khuynh hướng tả khuynh, hữu khuynh' }
    ]
  },
  {
    id: 'revolution-methods',
    title: 'Tình thế, Thời cơ & Phương pháp Cách mạng',
    era: 'Giáo trình Triết học Mác - Lênin',
    icon: 'flag',
    description: '3 dấu hiệu tình thế cách mạng theo V.I. Lênin; Vai trò quyết định của nhân tố chủ quan; Nghệ thuật chớp thời cơ và phương pháp cách mạng bạo lực kết hợp hòa bình (Vận dụng CMT8 năm 1945).',
    representatives: ['V.I. Lênin', 'Hồ Chí Minh'],
    keyConcepts: ['Tình thế cách mạng', 'Thời cơ cách mạng', 'Bạo lực cách mạng', 'Phương pháp hòa bình'],
    lecturesCount: 6,
    monographsCount: 2,
    highlightQuestion: 'V.I. Lênin đã chỉ ra 3 dấu hiệu nào để nhận biết một tình thế cách mạng đã chín muồi?',
    fullOverview: 'Không có tình thế cách mạng thì cách mạng không thể nổ ra. V.I. Lênin chỉ ra 3 dấu hiệu khách quan: tầng lớp trên không thể sống như cũ; tầng lớp dưới không muốn sống như cũ; và tính tích cực của quần chúng tăng vọt. Khi kết hợp với nhân tố chủ quan vững mạnh, thời cơ cách mạng xuất hiện. Bài học Cách mạng Tháng Tám 1945 tại Việt Nam là minh chứng mẫu mực cho nghệ thuật chớp thời cơ.',
    syllabus: [
      { title: 'Ba dấu hiệu của tình thế cách mạng theo V.I. Lênin (Sự phá sản của Quốc tế II)' },
      { title: 'Vai trò quyết định của nhân tố chủ quan: Ý chí, niềm tin và năng lực tổ chức' },
      { title: 'Khái niệm và ý nghĩa sống còn của việc chọn đúng Thời cơ cách mạng' },
      { title: 'Phương pháp cách mạng bạo lực: Tính tất yếu khách quan và công cụ phương tiện' },
      { title: 'Phương pháp hòa bình, điều kiện áp dụng và cảnh giác với Diễn biến hòa bình' }
    ]
  },
  {
    id: 'contemporary-era',
    title: 'Thế giới Đương đại & Nhà nước PQ XHCN VN',
    era: 'Giáo trình Triết học Mác - Lênin',
    icon: 'gavel',
    description: 'Xu thế đối thoại, cải cách tiến bộ trong thời đại kinh tế tri thức. Bản chất Nhà nước pháp quyền xã hội chủ nghĩa Việt Nam: "Đảng lãnh đạo, Nhà nước quản lý, Nhân dân làm chủ".',
    representatives: ['Đảng Cộng sản Việt Nam', 'Chủ tịch Hồ Chí Minh'],
    keyConcepts: ['Nhà nước pháp quyền XHCN', 'Dân giàu nước mạnh', 'Kinh tế tri thức', 'Đảng lãnh đạo'],
    lecturesCount: 5,
    monographsCount: 2,
    highlightQuestion: 'Đặc trưng cơ bản của Nhà nước pháp quyền xã hội chủ nghĩa Việt Nam hiện nay là gì?',
    fullOverview: 'Trong thế giới đương đại, cách mạng khoa học - công nghệ và kinh tế tri thức thúc đẩy xu thế đối thoại hòa giải. Các quốc gia tiến tới xã hội văn minh thông qua cải tổ, cải cách từng bước. Tại Việt Nam, mục tiêu trung tâm là hoàn thiện Nhà nước pháp quyền XHCN của nhân dân, do nhân dân, vì nhân dân; xây dựng chính phủ liêm chính, kiến tạo, phục vụ nhân dân.',
    syllabus: [
      { title: 'Đặc điểm thời đại mới: Cách mạng KH-CN, kinh tế tri thức và xu thế đối thoại' },
      { title: 'Hình thức biến đổi xã hội hiện đại: Chuyển hóa từng bộ phận và cải cách tiến bộ' },
      { title: 'Bản chất Nhà nước pháp quyền XHCN Việt Nam (Văn kiện Đại hội XII của Đảng)' },
      { title: 'Cơ chế: Đảng lãnh đạo, Nhà nước quản lý, Nhân dân làm chủ' },
      { title: 'Mục tiêu: Dân giàu, nước mạnh, dân chủ, công bằng, văn minh' }
    ]
  }
];

export const TRADITIONS_DATA = TRADITIONS;

export const LECTURE_CHAPTERS: LectureChapter[] = [
  {
    id: 'chap-1-state-origin',
    title: '1. Nguồn gốc & Bản chất của Nhà nước',
    subtitle: 'Nguyên nhân kinh tế sâu xa và nguyên nhân trực tiếp dẫn tới sự xuất hiện nhà nước',
    readTime: 'Slide 01 • Khái luận',
    chapterNumber: 'Chuyên đề I',
    quote: 'Nhà nước chẳng qua chỉ là một bộ máy của một giai cấp này dùng để trấn áp một giai cấp khác, điều đó trong chế độ Cộng hòa dân chủ cũng hoàn toàn giống như trong chế độ quân chủ.',
    quoteAuthor: 'Ph.Ăngghen — Nguồn gốc của gia đình, của chế độ tư hữu và của nhà nước (Toàn tập, t.22)',
    authorImageUrl: '/images/engels.jpg',
    lexiconKey: 'Nhà nước',
    lexiconDefinition: 'Nhà nước là tổ chức chính trị của giai cấp thống trị về mặt kinh tế nhằm bảo vệ trật tự hiện hành và đàn áp sự phản kháng của các giai cấp khác.',
    content: [
      'Trong lịch sử tư tưởng nhân loại, có nhiều quan điểm ngoài mácxít coi nhà nước là "sự thực hiện ý niệm đạo đức" hay "sự ngự trị của thượng đế trên trái đất". Chủ nghĩa Mác - Lênin kế thừa và phát triển quan điểm duy vật biện chứng, khẳng định nhà nước là một hiện tượng lịch sử, nảy sinh khi xã hội phân chia thành các giai cấp đối kháng.',
      '1. Nguyên nhân sâu xa: Sự phát triển của lực lượng sản xuất ở cuối thời kỳ cộng sản nguyên thủy dẫn đến sự dư thừa tương đối của cải, làm xuất hiện chế độ tư hữu về tư liệu sản xuất và phân hóa xã hội thành kẻ giàu người nghèo, giai cấp bóc lột và bị bóc lột.',
      '2. Nguyên nhân trực tiếp: Mâu thuẫn giai cấp gay gắt không thể điều hòa được giữa giai cấp thống trị và giai cấp bị trị. Cuộc đấu tranh giai cấp đầu tiên mang tính quyết liệt giữa chủ nô và nô lệ thời cổ đại làm cho nhà nước ra đời như một tất yếu khách quan.',
      'Ph.Ăngghen chỉ rõ: Để những mặt đối lập đó không đi đến chỗ tiêu diệt lẫn nhau và tiêu diệt luôn cả xã hội trong một cuộc đấu tranh vô ích, cần có một lực lượng đứng trên xã hội, làm dịu bớt xung đột và giữ cho sự xung đột nằm trong vòng "trật tự" — đó chính là nhà nước.',
      'Về bản chất, nhà nước là công cụ chuyên chính của giai cấp thống trị về kinh tế nhằm đàn áp sự phản kháng của các giai cấp khác. Trong những trường hợp ngoại lệ (khi hai giai cấp đối kháng đạt thế bình quân tạm thời như chế độ quân chủ chuyên chế Pháp TK XVII–XVIII), nhà nước tạm thời giữ vai trò trung gian độc lập tương đối.'
    ]
  },
  {
    id: 'chap-2-state-features',
    title: '2. Ba Đặc trưng Cơ bản của Nhà nước',
    subtitle: 'Tiêu chuẩn khoa học phân biệt Nhà nước với tổ chức Thị tộc thời nguyên thủy',
    readTime: 'Slide 02 • Cấu trúc',
    chapterNumber: 'Chuyên đề II',
    quote: 'So với tổ chức thị tộc trước kia thì đặc trưng thứ nhất của nhà nước là ở chỗ nó phân chia thần dân của nó theo địa vực... Đặc trưng thứ hai là sự thiết lập một quyền lực công cộng... Đặc trưng thứ ba là thuế má và quốc trái.',
    quoteAuthor: 'V.I. Lênin — Nhà nước và cách mạng (Toàn tập, t.33)',
    authorImageUrl: '/images/lenin.jpg',
    lexiconKey: 'Địa vực lãnh thổ',
    lexiconDefinition: 'Phân chia thần dân theo địa vực lãnh thổ là đặc trưng đầu tiên của nhà nước, xóa bỏ sự liên kết theo huyết thống của thị tộc nguyên thủy.',
    content: [
      'V.I. Lênin trong tác phẩm "Nhà nước và cách mạng" đã hệ thống lại ba đặc trưng cơ bản phân biệt nhà nước với bất kỳ tổ chức xã hội nào khác:',
      'Đặc trưng 1 — Quản lý cư dân theo địa vực lãnh thổ: Nếu như thị tộc, bộ lạc hình thành trên quan hệ huyết thống thì nhà nước phân chia cư dân theo địa giới hành chính, lãnh thổ. Xác lập biên giới quốc gia, quyền lực nhà nước có hiệu lực đối với mọi thành viên cư trú trên lãnh thổ đó bất kể quan hệ huyết thống hay thành phần dân tộc.',
      'Đặc trưng 2 — Hệ thống cơ quan quyền lực chuyên nghiệp mang tính cưỡng chế: Nhà nước sở hữu các "đội vũ trang đặc biệt" như quân đội nhà nghề, cảnh sát vũ trang, hệ thống nhà tù và các cơ quan hành chính cai trị để bắt buộc mọi cá nhân phải phục tùng ý chí của giai cấp cầm quyền.',
      'Đặc trưng 3 — Hệ thống thuế khóa để nuôi dưỡng bộ máy chính quyền: Để duy trì đội ngũ quan lại, quân đội tách rời khỏi sản xuất, nhà nước sử dụng quyền lực cưỡng chế để thu thuế và phát hành quốc trái. Nắm quyền lực công và quyền thu thuế, bộ máy cai trị được đặt lên trên xã hội.',
      'Nhà nước quản lý xã hội chủ yếu bằng hệ thống pháp luật — biến ý chí của giai cấp thống trị thành ý chí của nhà nước, buộc toàn thể xã hội phải tuân thủ nghiêm ngặt.'
    ]
  },
  {
    id: 'chap-3-state-types',
    title: '3. Chức năng & Các Kiểu Nhà nước Lịch sử',
    subtitle: 'Thống trị chính trị vs. Xã hội, Đối nội vs. Đối ngoại & Tiến trình 4 kiểu nhà nước',
    readTime: 'Slide 03 • Tiến trình',
    chapterNumber: 'Chuyên đề III',
    quote: 'Chức năng xã hội là cơ sở của sự thống trị chính trị; và sự thống trị chính trị cũng chỉ kéo dài chừng nào nó còn thực hiện chức năng xã hội đó của nó.',
    quoteAuthor: 'Ph.Ăngghen — Chống Đuy-rinh (Toàn tập, t.20)',
    authorImageUrl: '/images/engels.jpg',
    lexiconKey: 'Kiểu nhà nước',
    lexiconDefinition: 'Kiểu nhà nước là khái niệm chỉ bản chất giai cấp của nhà nước tương ứng với một hình thái kinh tế - xã hội nhất định.',
    content: [
      'Mối quan hệ giữa Chức năng thống trị chính trị và Chức năng xã hội: Chức năng thống trị chính trị giữ vai trò quyết định, chi phối định hướng; nhưng chức năng xã hội (thủy lợi, giao thông, y tế, giáo dục) là cơ sở tồn tại. Nếu nhà nước không chăm lo chức năng xã hội (như các chính quyền Ba Tư, Ấn Độ cổ đại không chăm lo tưới tiêu thung lũng) thì sự thống trị chính trị sẽ sụp đổ.',
      'Chức năng đối nội (giữ vai trò chủ yếu, duy trì trật tự kinh tế - chính trị trong nước) và Chức năng đối ngoại (bảo vệ chủ quyền lãnh thổ, mở rộng quan hệ quốc tế) là hai mặt thống nhất tác động qua lại chặt chẽ.',
      'Lịch sử nhân loại đã trải qua 4 kiểu nhà nước:',
      '1. Nhà nước chủ nô quý tộc: Điển hình là Quân chủ Xpác và Cộng hòa dân chủ Aten. Đều là công cụ thống trị tàn khốc của chủ nô đối với nô lệ.',
      '2. Nhà nước phong kiến: Tồn tại dưới dạng Phong kiến tập quyền (vua nắm quyền lực tuyệt đối) hoặc Phong kiến phân quyền (cát cứ cát địa), bảo vệ địa vị của giai cấp địa chủ.',
      '3. Nhà nước tư sản: Tồn tại đa dạng (Cộng hòa đại nghị, Tổng thống, Quân chủ lập hiến...) nhưng bản chất bất biến là nền chuyên chính của giai cấp tư sản, dân chủ của số ít người có tiền của.',
      '4. Nhà nước vô sản: Kiểu nhà nước đặc biệt — nhà nước của số đông nhân dân lao động trấn áp số ít bóc lột đã bị lật đổ. Khi tiến lên giai đoạn cao của chủ nghĩa cộng sản, nhà nước sẽ "tự tiêu vong".'
    ]
  },
  {
    id: 'chap-4-revolution-nature',
    title: '4. Nguồn gốc & Bản chất Cách mạng Xã hội',
    subtitle: 'Quy luật chuyển biến hình thái KT-XH & Phân biệt với Cải cách, Đảo chính',
    readTime: 'Slide 04 • Quy luật',
    chapterNumber: 'Chuyên đề IV',
    quote: 'Từ chỗ là những hình thức phát triển của lực lượng sản xuất, những quan hệ ấy trở thành những xiềng xích của các lực lượng sản xuất. Khi đó bắt đầu thời đại một cuộc cách mạng xã hội.',
    quoteAuthor: 'C.Mác — Góp phần phê phán khoa kinh tế chính trị (Toàn tập, t.13)',
    authorImageUrl: '/images/marx.jpg',
    lexiconKey: 'Cách mạng xã hội',
    lexiconDefinition: 'Cách mạng xã hội là bước nhảy vọt làm thay đổi căn bản về chất của toàn bộ các lĩnh vực đời sống xã hội, chuyển biến từ hình thái kinh tế - xã hội cũ lên hình thái mới cao hơn.',
    content: [
      'Nguồn gốc sâu xa của cách mạng xã hội là mâu thuẫn gay gắt giữa Lực lượng sản xuất tiến bộ đòi hỏi được giải phóng và Quan hệ sản xuất lỗi thời, lạc hậu đang kìm hãm nó.',
      'Mâu thuẫn kinh tế này biểu hiện thành mâu thuẫn chính trị - xã hội: Cuộc đấu tranh giai cấp giữa giai cấp bị trị (đại diện cho LLSX mới) và giai cấp thống trị (đại diện cho QHSX cũ). Đấu tranh giai cấp là nguyên nhân trực tiếp dẫn đến cách mạng xã hội.',
      'Phân biệt Cách mạng xã hội với các hiện tượng xã hội khác:',
      '• Khác với Tiến hóa xã hội: Tiến hóa là sự thay đổi dần dần từng bộ phận; Cách mạng là bước nhảy vọt về chất làm thay đổi toàn bộ đời sống xã hội.',
      '• Khác với Cải cách xã hội: Cải cách chỉ tạo biến đổi ở những bộ phận, lĩnh vực riêng lẻ. V.I. Lênin kịch liệt phê phán "Chủ nghĩa cải lương" vì từ bỏ cách mạng xã hội, tuyệt đối hóa đấu tranh nghị trường.',
      '• Khác với Đảo chính: Đảo chính là hành động của một nhóm người giành giật chính quyền nhưng không làm thay đổi bản chất chế độ xã hội.',
      'Hai cuộc cách mạng điển hình và triệt để nhất trong lịch sử nhân loại là Cách mạng tư sản và Cách mạng vô sản.'
    ]
  },
  {
    id: 'chap-5-revolution-methods',
    title: '5. Tình thế, Thời cơ & Phương pháp Cách mạng',
    subtitle: '3 dấu hiệu của Lênin, vai trò nhân tố chủ quan & Thực tiễn Cách mạng Tháng Tám 1945',
    readTime: 'Slide 05 • Thực tiễn',
    chapterNumber: 'Chuyên đề V',
    quote: 'Giờ quyết định cho vận mệnh dân tộc đã đến. Toàn quốc đồng bào hãy đứng dậy đem sức ta mà tự giải phóng cho ta!',
    quoteAuthor: 'Hồ Chí Minh — Thư kêu gọi Tổng khởi nghĩa (Toàn tập, t.3)',
    authorImageUrl: '/images/hochiminh.jpg',
    lexiconKey: 'Tình thế cách mạng',
    lexiconDefinition: 'Tình thế cách mạng là trạng thái khách quan khi mâu thuẫn xã hội chín muồi đến đỉnh cao, khiến tầng lớp trên không thể sống như cũ và tầng lớp dưới không muốn sống như cũ.',
    content: [
      'Trong tác phẩm "Sự phá sản của Quốc tế II", V.I. Lênin nêu rõ 3 dấu hiệu của Tình thế cách mạng:',
      '1. Khủng hoảng của tầng lớp trên: Giai cấp thống trị không thể duy trì nền thống trị như trước nữa; khủng hoảng chính trị tạo kẽ hở cho sự phẫn nộ của quần chúng bùng nổ.',
      '2. Nỗi cùng khổ, quẫn bách của giai cấp bị áp bức trở nên nặng nề hơn mức bình thường.',
      '3. Tính tích cực của quần chúng được nâng cao rõ rệt, bị toàn bộ cuộc khủng hoảng đẩy đến hành động lịch sử độc lập.',
      'Nhân tố chủ quan giữ vai trò quyết định thắng lợi: Bao gồm ý chí giác ngộ của quần chúng và năng lực tổ chức, lãnh đạo của Đảng tiên phong. V.I. Lênin nhấn mạnh: Không có một hành động chủ quan đẩy cho chính phủ cũ "ngã" thì khủng hoảng mấy nó cũng không tự sụp đổ.',
      'Thời cơ cách mạng: Điểm giao thời đặc biệt khi cả điều kiện khách quan và nhân tố chủ quan đều chín muồi cao độ. Tại Việt Nam tháng 8/1945, nạn đói 2 triệu người, Nhật đảo chính Pháp và đầu hàng Đồng minh là tình thế cách mạng; sự lãnh đạo của Đảng Cộng sản Đông Dương và Việt Minh là nhân tố chủ quan tạo nên thời cơ ngàn năm có một.',
      'Phương pháp cách mạng: Gồm phương pháp Bạo lực cách mạng (phổ biến, tất yếu để đập tan bộ máy phản động) và phương pháp Hòa bình (đấu tranh nghị trường khi đối phương mất hết ý chí — rất quý nhưng hiếm có).'
    ]
  },
  {
    id: 'chap-6-contemporary-era',
    title: '6. Thời đại Mới & Nhà nước PQ XHCN Việt Nam',
    subtitle: 'Xu thế cải cách tiến bộ toàn cầu và thực tiễn xây dựng Nhà nước của Nhân dân',
    readTime: 'Slide 06 • Ứng dụng',
    chapterNumber: 'Chuyên đề VI',
    quote: 'Nhà nước pháp quyền xã hội chủ nghĩa là nhà nước của nhân dân, do nhân dân, vì nhân dân. Về bản chất, tất cả quyền lực nhà nước thuộc về nhân dân.',
    quoteAuthor: 'Đảng Cộng sản Việt Nam — Văn kiện Đại hội đại biểu toàn quốc lần thứ XII',
    authorImageUrl: '/images/marxism_hero.jpg',
    lexiconKey: 'Nhà nước Pháp quyền XHCN',
    lexiconDefinition: 'Nhà nước pháp quyền XHCN Việt Nam hoạt động trên nguyên tắc "Đảng lãnh đạo, Nhà nước quản lý, Nhân dân làm chủ", thượng tôn pháp luật và coi trọng đạo đức xã hội.',
    content: [
      'Đặc điểm của cách mạng xã hội trong thế giới đương đại: Cuộc cách mạng khoa học - công nghệ hiện đại và nền kinh tế tri thức đang thúc đẩy xu hướng đối thoại thay cho đối đầu. Thay đổi xã hội ngày nay thường diễn ra thông qua cải cách, cải tổ, đổi mới từng bộ phận để hoàn thiện cơ cấu kinh tế - xã hội.',
      'Tuy nhiên, các nguy cơ bất ổn mới như phân hóa giàu nghèo, ô nhiễm môi trường, xung đột sắc tộc, tôn giáo và âm mưu "diễn biến hòa bình" vẫn đang diễn biến phức tạp, đòi hỏi tinh thần cảnh giác cao độ.',
      'Tại Việt Nam, quá trình phát triển nhà nước đi từ phong kiến (thế kỷ X - XIX), thuộc địa nửa phong kiến (1884 - 1945) đến nước Việt Nam Dân chủ Cộng hòa (1945) và nay là Cộng hòa Xã hội Chủ nghĩa Việt Nam.',
      'Đặc trưng cốt lõi của Nhà nước pháp quyền XHCN Việt Nam hiện nay:',
      '• Đặt dưới sự lãnh đạo của Đảng Cộng sản Việt Nam theo cơ chế: "Đảng lãnh đạo, Nhà nước quản lý, Nhân dân làm chủ".',
      '• Mọi quyền lực nhà nước đều thuộc về nhân dân; quyền lực là thống nhất, có sự phân công, phối hợp và kiểm soát chặt chẽ giữa các cơ quan lập pháp, hành pháp và tư pháp.',
      '• Hoạt động trên tinh thần thượng tôn Hiến pháp và Pháp luật, đẩy mạnh cải cách hành chính, tinh gọn bộ máy, xây dựng chính phủ kiến tạo liêm chính, hướng tới mục tiêu: Dân giàu, nước mạnh, dân chủ, công bằng, văn minh.'
    ]
  }
];

export const LECTURE_CHAPTERS_DATA = LECTURE_CHAPTERS;

export const PHILOSOPHERS: Philosopher[] = [
  {
    id: 'karl-marx',
    name: 'Karl Marx (C.Mác)',
    symbol: 'M',
    imageUrl: '/images/marx.jpg',
    era: '1818 – 1883',
    school: 'Chủ nghĩa duy vật biện chứng & lịch sử',
    location: 'Trier (Đức) / London (Anh)',
    quote: 'Mỗi một cuộc cách mạng xã hội đều phá hủy xã hội cũ, và vì thế nó mang tính chất xã hội. Mỗi cuộc cách mạng đều lật đổ chính quyền cũ, và bởi vậy nó có tính cách chính trị.',
    quoteContext: 'C.Mác toàn tập, t.1 — Về bản chất chính trị và bản chất xã hội của cách mạng.',
    topic: 'Quy luật Hình thái Kinh tế - Xã hội & Cách mạng Xã hội',
    bio: 'Nhà tư tưởng vĩ đại sáng lập chủ nghĩa cộng sản khoa học. Cùng Ph.Ăngghen phát hiện ra quy luật phát triển của lịch sử loài người: mâu thuẫn giữa LLSX và QHSX là nguồn gốc sâu xa của cách mạng xã hội.',
    masterpiece: 'Tư bản (Das Kapital), Tuyên ngôn của Đảng Cộng sản, Góp phần phê phán khoa kinh tế chính trị',
    coreIdeas: [
      'Mâu thuẫn Lực lượng sản xuất và Quan hệ sản xuất là cội nguồn cách mạng',
      'Giai cấp vô sản là lực lượng lãnh đạo và động lực triệt để nhất',
      'Chuyên chính vô sản là thời kỳ quá độ tất yếu lên Chủ nghĩa cộng sản'
    ]
  },
  {
    id: 'friedrich-engels',
    name: 'Friedrich Engels (Ph.Ăngghen)',
    symbol: 'E',
    imageUrl: '/images/engels.jpg',
    era: '1820 – 1895',
    school: 'Chủ nghĩa duy vật lịch sử & Triết học Mác',
    location: 'Barmen (Đức) / London (Anh)',
    quote: 'Nhà nước là sản phẩm của một xã hội đã phát triển tới một giai đoạn nhất định, khi xã hội đó đã bị phân thành những mặt đối lập không thể điều hòa...',
    quoteContext: 'Nguồn gốc của gia đình, của chế độ tư hữu và của nhà nước (Toàn tập, t.21)',
    topic: 'Học thuyết Nguồn gốc, Bản chất và 3 Đặc trưng của Nhà nước',
    bio: 'Người bạn chiến đấu vĩ đại của C.Mác. Tác phẩm kinh điển năm 1884 của ông đã luận giải sâu sắc nguồn gốc kinh tế và xã hội của sự xuất hiện nhà nước từ công xã nguyên thủy.',
    masterpiece: 'Nguồn gốc của gia đình, của chế độ tư hữu và của nhà nước; Chống Đuy-rinh; Biện chứng của tự nhiên',
    coreIdeas: [
      'Nhà nước là phạm trù lịch sử, xuất hiện cùng chế độ tư hữu và giai cấp',
      'Ba đặc trưng cơ bản: Địa vực lãnh thổ, Cơ quan cưỡng chế, Thuế khóa',
      'Chức năng xã hội là cơ sở nền tảng của sự thống trị chính trị'
    ]
  },
  {
    id: 'v-i-lenin',
    name: 'V.I. Lênin (Vladimir Ilyich Lenin)',
    symbol: 'L',
    imageUrl: '/images/lenin.jpg',
    era: '1870 – 1924',
    school: 'Chủ nghĩa Mác - Lênin & Cách mạng Vô sản',
    location: 'Simbirsk / Moskva (Nga)',
    quote: 'Nhà nước là một cơ quan thống trị giai cấp, là một cơ quan áp bức của một giai cấp này đối với một giai cấp khác; đó là sự kiến lập một "trật tự"...',
    quoteContext: 'Nhà nước và cách mạng (Toàn tập, t.33)',
    topic: 'Học thuyết Nhà nước, Cách mạng Vô sản & Tình thế Cách mạng',
    bio: 'Nhà lý luận thiên tài và lãnh tụ kiệt xuất của giai cấp vô sản thế giới. Phát triển toàn diện học thuyết về nhà nước, 3 dấu hiệu của tình thế cách mạng và lãnh đạo thành công Cách mạng Tháng Mười Nga 1917.',
    masterpiece: 'Nhà nước và cách mạng; Sự phá sản của Quốc tế II; Bàn về nhà nước',
    coreIdeas: [
      'Nhà nước chứng tỏ những mâu thuẫn giai cấp là không thể điều hòa được',
      'Ba dấu hiệu khách quan của Tình thế cách mạng chín muồi',
      'Quy luật phổ biến của cách mạng bạo lực và bản chất nền Dân chủ vô sản'
    ]
  },
  {
    id: 'ho-chi-minh',
    name: 'Hồ Chí Minh',
    symbol: 'H',
    imageUrl: '/images/hochiminh.jpg',
    era: '1890 – 1969',
    school: 'Tư tưởng Hồ Chí Minh & Triết học Mác - Lênin',
    location: 'Nghệ An / Hà Nội (Việt Nam)',
    quote: 'Nước ta là nước dân chủ. Bao nhiêu lợi ích đều vì dân. Bao nhiêu quyền hạn đều của dân. Quyền hành và lực lượng đều ở nơi dân.',
    quoteContext: 'Bài báo "Dân vận" (15/10/1949) — Thể chế Nhà nước dân chủ kiểu mới',
    topic: 'Nghệ thuật Chớp thời cơ Khởi nghĩa & Nhà nước của Dân, do Dân, vì Dân',
    bio: 'Anh hùng giải phóng dân tộc, Danh nhân văn hóa kiệt xuất. Người đã vận dụng sáng tạo chủ nghĩa Mác - Lênin vào hoàn cảnh cụ thể của Việt Nam, chớp thời cơ lãnh đạo thắng lợi Cách mạng Tháng Tám 1945.',
    masterpiece: 'Đường Kách mệnh; Tuyên ngôn Độc lập (1945); Sửa đổi lối làm việc',
    coreIdeas: [
      'Nghệ thuật dự báo và chớp đúng thời cơ cách mạng ngàn năm có một',
      'Kết hợp giải phóng dân tộc với giải phóng giai cấp và giải phóng con người',
      'Xây dựng Nhà nước pháp quyền dân chủ của nhân dân, do nhân dân, vì nhân dân'
    ]
  }
];

export const PHILOSOPHERS_DATA = PHILOSOPHERS;

export const LEXICON: LexiconItem[] = [
  {
    term: 'Nhà nước (The State)',
    subtext: 'Phạm trù lịch sử và công cụ chuyên chính giai cấp',
    definition: 'Tổ chức chính trị của một giai cấp thống trị về mặt kinh tế nhằm bảo vệ trật tự hiện hành và đàn áp sự phản kháng của các giai cấp khác. Nhà nước nảy sinh khi mâu thuẫn giai cấp không thể điều hòa được.',
    origin: 'Triết học Mác - Lênin (Ăngghen: Nguồn gốc gia đình, tư hữu và nhà nước)',
    philosopher: 'Ph.Ăngghen, V.I. Lênin',
    application: 'Nhận thức rõ bản chất giai cấp của mọi nhà nước trong lịch sử, tránh quan niệm mơ hồ xem nhà nước là tổ chức đứng trên xã hội.'
  },
  {
    term: 'Chế độ tư hữu (Private Property)',
    subtext: 'Nguyên nhân kinh tế sâu xa dẫn đến sự ra đời của nhà nước',
    definition: 'Hình thức sở hữu trong đó tư liệu sản xuất và của cải xã hội tập trung vào tay một số ít cá nhân hoặc tập đoàn, dẫn tới phân hóa giàu nghèo và hình thành các giai cấp có lợi ích đối kháng.',
    origin: 'Học thuyết Duy vật Lịch sử',
    philosopher: 'C.Mác, Ph.Ăngghen',
    application: 'Cơ sở lý giải tại sao xã hội nguyên thủy không có nhà nước và tại sao đến một trình độ LLSX nhất định nhà nước lại xuất hiện.'
  },
  {
    term: 'Địa vực lãnh thổ (Territorial Division)',
    subtext: 'Đặc trưng thứ nhất phân biệt nhà nước với thị tộc',
    definition: 'Nguyên tắc quản lý dân cư dựa theo ranh giới hành chính và địa lý không gian, thay thế hoàn toàn cho quan hệ liên kết bằng huyết thống của thời kỳ thị tộc, bộ lạc.',
    origin: 'Ăngghen & Lênin: Nhà nước và cách mạng',
    philosopher: 'Ph.Ăngghen, V.I. Lênin',
    application: 'Hình thành khái niệm chủ quyền quốc gia, biên giới lãnh thổ và quyền tài phán pháp lý đối với mọi cư dân sinh sống bên trong.'
  },
  {
    term: 'Thuế khóa & Quốc trái (Taxation & Public Credit)',
    subtext: 'Đặc trưng thứ ba đảm bảo vật chất cho bộ máy nhà nước',
    definition: 'Hệ thống các khoản đóng góp tài chính bắt buộc của công dân để duy trì quyền lực công cộng đặc biệt và nuôi sống đội ngũ quan lại, quân đội đứng trên xã hội.',
    origin: 'Triết học chính trị Mácxít',
    philosopher: 'Ph.Ăngghen, V.I. Lênin',
    application: 'Bản chất ngân sách nhà nước và công cụ kinh tế để thực thi cả chức năng thống trị lẫn chức năng xã hội.'
  },
  {
    term: 'Chức năng xã hội (Social Function)',
    subtext: 'Cơ sở nền tảng duy trì quyền thống trị chính trị',
    definition: 'Hoạt động của nhà nước nhân danh xã hội để điều hành các công việc chung như đê điều thủy lợi, giao thông, y tế, giáo dục nhằm duy trì trật tự và ổn định cuộc sống cộng đồng.',
    origin: 'Ph.Ăngghen: Chống Đuy-rinh',
    philosopher: 'Ph.Ăngghen',
    application: 'Một chính quyền chỉ có thể tồn tại lâu dài chừng nào nó còn giải quyết thỏa đáng lợi ích chung của toàn xã hội.'
  },
  {
    term: 'Kiểu nhà nước (Types of State)',
    subtext: 'Bản chất giai cấp của nhà nước qua các hình thái KT-XH',
    definition: 'Tổng thể những đặc trưng cơ bản của nhà nước phản ánh bản chất giai cấp và điều kiện kinh tế của một hình thái KT-XH nhất định. Lịch sử có 4 kiểu: Chủ nô, Phong kiến, Tư sản và Vô sản.',
    origin: 'Chủ nghĩa duy vật lịch sử',
    philosopher: 'C.Mác, V.I. Lênin',
    application: 'Phương pháp phân loại khoa học các nhà nước trong lịch sử dựa trên lăng kính giai cấp thống trị.'
  },
  {
    term: 'Nhà nước tự tiêu vong (Withering Away of the State)',
    subtext: 'Quy luật phát triển của nhà nước vô sản',
    definition: 'Hiện tượng nhà nước vô sản dần dần biến mất một cách tự nhiên khi xã hội đạt tới giai đoạn cộng sản chủ nghĩa phát triển cao, giai cấp bị xóa bỏ và mọi người tự giác thực hiện quy tắc cộng đồng.',
    origin: 'Phê phán Cương lĩnh Gôta & Nhà nước và cách mạng',
    philosopher: 'C.Mác, Ph.Ăngghen, V.I. Lênin',
    application: 'Khẳng định nhà nước không bị thủ tiêu cơ học mà sẽ tự tiêu vong khi tiền đề kinh tế - xã hội của nó không còn.'
  },
  {
    term: 'Nhà nước Pháp quyền XHCN (Socialist Rule of Law State)',
    subtext: 'Mô hình nhà nước của Nhân dân tại Việt Nam',
    definition: 'Nhà nước do Đảng Cộng sản lãnh đạo, trong đó quyền lực thuộc về nhân dân, hoạt động trên tinh thần thượng tôn Hiến pháp và pháp luật, bảo đảm quyền con người, phục vụ nhân dân.',
    origin: 'Văn kiện Đảng Cộng sản Việt Nam (Đại hội XII)',
    philosopher: 'Đảng Cộng sản Việt Nam, Hồ Chí Minh',
    application: 'Kim chỉ nam cho công cuộc cải cách hành chính, tinh gọn bộ máy và xây dựng chính phủ liêm chính, kiến tạo ở Việt Nam.'
  },
  {
    term: 'Cách mạng xã hội (Social Revolution)',
    subtext: 'Bước nhảy vọt căn bản về chất của hình thái KT-XH',
    definition: 'Sự thay đổi căn bản về chất toàn bộ các lĩnh vực của đời sống xã hội, là đỉnh cao của đấu tranh giai cấp nhằm xóa bỏ chế độ xã hội cũ, lật đổ chính quyền cũ và thiết lập trật tự xã hội mới tiến bộ.',
    origin: 'C.Mác: Góp phần phê phán khoa kinh tế chính trị',
    philosopher: 'C.Mác',
    application: 'Quy luật vận động thay thế giữa các hình thái kinh tế - xã hội trong lịch sử loài người.'
  },
  {
    term: 'Tiến hóa xã hội (Social Evolution)',
    subtext: 'Sự biến đổi dần dần tích lũy tiền đề cho cách mạng',
    definition: 'Quá trình biến đổi dần dần, thay đổi từng bộ phận, từng yếu tố của đời sống xã hội. Tiến hóa tạo ra tiền đề lượng đổi cho cách mạng xã hội (chất đổi).',
    origin: 'Phép biện chứng duy vật lịch sử',
    philosopher: 'C.Mác, V.I. Lênin',
    application: 'Mối quan hệ biện chứng giữa lượng và chất trong tiến trình lịch sử nhân loại.'
  },
  {
    term: 'Cải cách xã hội (Social Reform)',
    subtext: 'Sự thay đổi bộ phận trong khuôn khổ chế độ hiện hành',
    definition: 'Những biện pháp cải biến từng mặt, từng lĩnh vực riêng lẻ trong đời sống xã hội do áp lực đấu tranh của quần chúng hoặc do giai cấp thống trị chủ động thực hiện nhằm xoa dịu mâu thuẫn.',
    origin: 'Lý luận đấu tranh giai cấp',
    philosopher: 'V.I. Lênin',
    application: 'Tránh rơi vào chủ nghĩa cải lương (từ bỏ cách mạng) nhưng cũng không được xem nhẹ các cải cách tiến bộ.'
  },
  {
    term: 'Đảo chính (Coup d\'État)',
    subtext: 'Tranh giành chính quyền nội bộ không đổi bản chất chế độ',
    definition: 'Phương thức dùng bạo lực bất ngờ của một phe nhóm chính trị nhằm lật đổ những người cầm quyền đương thời để giành ghế quyền lực mà không làm thay đổi căn bản quan hệ sản xuất hay bản chất chế độ.',
    origin: 'Khoa học chính trị & Triết học Mác - Lênin',
    philosopher: 'V.I. Lênin',
    application: 'Phân biệt rõ ràng đảo chính cung đình với phong trào cách mạng xã hội chân chính của quần chúng nhân dân.'
  },
  {
    term: 'Tình thế cách mạng (Revolutionary Situation)',
    subtext: 'Sự chín muồi cao độ của các điều kiện khách quan',
    definition: 'Trạng thái đặc biệt của xã hội khi mâu thuẫn giai cấp lên đỉnh điểm với 3 dấu hiệu: Tầng lớp trên không thể sống như cũ; Tầng lớp dưới không muốn sống như cũ; và Quần chúng vùng lên hành động.',
    origin: 'V.I. Lênin: Sự phá sản của Quốc tế II (1915)',
    philosopher: 'V.I. Lênin',
    application: 'Điều kiện tiên quyết khách quan; không có tình thế cách mạng thì cách mạng không thể nổ ra.'
  },
  {
    term: 'Thời cơ cách mạng (Revolutionary Opportunity)',
    subtext: 'Điểm giao thời chín muồi giữa khách quan và chủ quan',
    definition: 'Thời điểm thuận lợi nhất khi điều kiện khách quan và nhân tố chủ quan đều đạt đến độ chín muồi tối ưu, có ý nghĩa quyết định sống còn đối với sự thành bại của cuộc khởi nghĩa giành chính quyền.',
    origin: 'Nghệ thuật quân sự & khởi nghĩa vũ trang Mácxít',
    philosopher: 'V.I. Lênin, Hồ Chí Minh',
    application: 'Bài học chớp thời cơ trong Cách mạng Tháng Tám năm 1945: "Chậm trễ là tự sát, sớm quá thì non yếu".'
  },
  {
    term: 'Bạo lực cách mạng (Revolutionary Violence)',
    subtext: 'Công cụ tất yếu đập tan bộ máy phản động lỗi thời',
    definition: 'Hành động vũ lực của lực lượng cách mạng dưới sự lãnh đạo của giai cấp tiên phong nhằm vượt qua giới hạn luật pháp cũ, đập tan bộ máy trấn áp của giai cấp thống trị để giành chính quyền.',
    origin: 'Tuyên ngôn của Đảng Cộng sản & Nhà nước và cách mạng',
    philosopher: 'C.Mác, Ph.Ăngghen, V.I. Lênin',
    application: 'Bạo lực chỉ là phương tiện giải phóng khi giai cấp thống trị ngoan cố sử dụng vũ lực chống lại nhân dân.'
  },
  {
    term: 'Diễn biến hòa bình (Peaceful Evolution)',
    subtext: 'Chiến lược lật đổ phi quân sự của các thế lực thù địch',
    definition: 'Chiến lược của các thế lực phản động sử dụng tổng hợp các biện pháp phi quân sự (chính trị, kinh tế, tư tưởng, văn hóa) để làm tha hóa, "tự diễn biến", "tự chuyển hóa" từ bên trong nội bộ các nước XHCN.',
    origin: 'Học thuyết bảo vệ Tổ quốc XHCN',
    philosopher: 'Đảng Cộng sản Việt Nam',
    application: 'Nâng cao cảnh giác cách mạng, bảo vệ nền tảng tư tưởng của Đảng trong thời kỳ hội nhập quốc tế.'
  }
];

export const LEXICON_DATA = LEXICON;

export const AGORA_COMMENTS: AgoraComment[] = [
  {
    id: 'c-1',
    author: 'TS. Nguyễn Hoàng Long',
    role: 'Giảng viên Bộ môn Triết học Mác - Lênin',
    timeAgo: 'Hôm qua',
    content: 'Chủ đề 1: Tại sao nói Nhà nước là một hiện tượng lịch sử có tính giai cấp, không phải là một thiết chế vĩnh cửu? Theo Ph.Ăngghen, nhà nước chỉ sinh ra khi xã hội phân chia giai cấp đối kháng và chế độ tư hữu xuất hiện. Khi tiến tới xã hội cộng sản văn minh, khi nguyên nhân sinh ra nhà nước mất đi thì nhà nước sẽ tự tiêu vong.',
    likes: 42,
    userLiked: true
  },
  {
    id: 'c-2',
    author: 'Nhóm nghiên cứu MLN - Đại học FPT',
    role: 'Sinh viên Khóa K18 - K19',
    timeAgo: '2 ngày trước',
    content: 'Chủ đề 2: Vận dụng 3 dấu hiệu tình thế cách mạng của Lênin vào Cách mạng Tháng Tám 1945: Tầng lớp trên (Nhật - Pháp) chia rẽ, tê liệt sau ngày 9/3; Tầng lớp dưới (nhân dân) cùng quẫn đến tột cùng vì nạn đói 2 triệu người; Mặt trận Việt Minh dấy lên phong trào phá kho thóc cứu đói. Khi thời cơ chín muồi vào giữa tháng 8, Bác Hồ đã phát động Tổng khởi nghĩa giành thắng lợi hoàn toàn.',
    likes: 85,
    userLiked: true
  },
  {
    id: 'c-3',
    author: 'Học giả Lê Thu Thủy',
    role: 'Nghiên cứu sinh Chủ nghĩa Duy vật Lịch sử',
    timeAgo: '3 ngày trước',
    content: 'Chủ đề 3: Phân biệt rõ ranh giới giữa Cách mạng xã hội và Cải cách xã hội. Trong bối cảnh kinh tế tri thức hiện nay, các cuộc cải cách tiến bộ từng bộ phận đang chiếm ưu thế. Tuy nhiên, bài học của Lênin về việc cảnh giác với Chủ nghĩa Cải lương (từ bỏ mục tiêu cách mạng) và âm mưu "diễn biến hòa bình" vẫn còn nguyên giá trị thời đại đối với Việt Nam.',
    likes: 31,
    userLiked: false
  }
];

export const AGORA_COMMENTS_DATA = AGORA_COMMENTS;
