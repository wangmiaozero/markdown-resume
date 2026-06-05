export interface TemplateCategory {
  id: string;
  name: string;
}

/** 分组顺序（不含 all） */
export const TEMPLATE_CATEGORIES: TemplateCategory[] = [
  { id: 'it', name: 'IT / 研发' },
  { id: 'ai', name: 'AI / Agent' },
  { id: 'product', name: '产品 / 设计' },
  { id: 'game', name: '游戏 / 媒体' },
  { id: 'ops', name: '运营 / 市场' },
  { id: 'trade', name: '外贸 / 跨境' },
  { id: 'intl', name: '海归 / 外籍' },
  { id: 'medical', name: '医疗 / 健康' },
  { id: 'edu', name: '教育 / 培训' },
  { id: 'finance', name: '财务 / 法务' },
  { id: 'hr', name: '人事 / 行政' },
  { id: 'logistics', name: '物流 / 运输' },
  { id: 'food', name: '餐饮 / 零售' },
  { id: 'service', name: '生活服务 / 技工' },
  { id: 'design', name: '设计 / 建筑 / 室内' },
  { id: 'other', name: '其他' },
];

type CategoryRule = { id: string; test: (role: string) => boolean };

const CATEGORY_RULES: CategoryRule[] = [
  { id: 'intl', test: (r) => /海归|外籍|Foreign|Expat|ESL Instructor|Returnee/.test(r) },
  { id: 'ai', test: (r) => /Agent/.test(r) },
  {
    id: 'design',
    test: (r) => /室内|软装|家装|空间设计|家居顾问|工业设计师|橱柜|全屋定制|建筑设计师/.test(r),
  },
  { id: 'trade', test: (r) => /外贸|报关|跨境|进出口|海外销售/.test(r) },
  {
    id: 'game',
    test: (r) =>
      /游戏|UE关卡|UE界面|杂志编辑|内容编辑|广告导演|纪录片导演|商业摄影师|婚礼摄影师|游戏编辑|游戏文案|游戏策划|游戏运营|游戏主播|带货主播/.test(
        r,
      ),
  },
  {
    id: 'medical',
    test: (r) =>
      /医生|护士|护工|月嫂|HIS|心理|口腔|全科|急诊|手术|社区护士|养老护工/.test(r),
  },
  { id: 'edu', test: (r) => /教师|老师|幼师|托育|培训|英语/.test(r) && !/翻译|口译/.test(r) },
  { id: 'finance', test: (r) => /会计|出纳|审计|律师|财务/.test(r) },
  { id: 'hr', test: (r) => /HR|人事|前台|行政|招聘/.test(r) },
  {
    id: 'ops',
    test: (r) =>
      /运营|商务|拓展|公众号|新媒体|翻译|口译|项目经理|交付工程师|数据分析师|房产中介|商场导购/.test(
        r,
      ) && !/跨境|外贸|游戏运营|跨境电商/.test(r),
  },
  {
    id: 'product',
    test: (r) => /产品经理|B端产品|UI设计师|视觉设计师/.test(r),
  },
  {
    id: 'it',
    test: (r) =>
      /工程师|开发|架构|测试|运维|DevOps|Linux|网管|网络安全|安全运营|嵌入式|算法|前端|后端|全栈|实习|总监|顾问|首席|数字化|研发|自动化测试|测试开发|网安|机房|实施|HIS|资深|高级前端|前端架构|基础平台|产品技术/.test(
        r,
      ),
  },
  { id: 'logistics', test: (r) => /快递|外卖|司机|货车|物流|网约车|出租|配送|分拣/.test(r) },
  { id: 'food', test: (r) => /餐厅|厨师/.test(r) },
  {
    id: 'service',
    test: (r) =>
      /保洁|保安|物业|美发|美容|酒店|客房|客服|钟点|育儿|月嫂|健身|瑜伽|服务员|工人|木工|电工|水电|工厂|质检|汽修|种植|农技|汽车维修|汽车美容/.test(
        r,
      ),
  },
];

/** 从文件名解析职位段（最后一个 `-` 之前） */
export function getTemplateRole(filename: string): string {
  const base = filename.replace(/\.md$/i, '');
  const idx = base.lastIndexOf('-');
  return idx > 0 ? base.slice(0, idx) : base;
}

export function getTemplateCategoryId(filename: string): string {
  const role = getTemplateRole(filename);
  for (const rule of CATEGORY_RULES) {
    if (rule.test(role)) return rule.id;
  }
  return 'other';
}

export function getTemplateCategoryName(filename: string): string {
  const id = getTemplateCategoryId(filename);
  return TEMPLATE_CATEGORIES.find((c) => c.id === id)?.name ?? '其他';
}

export interface TemplateOption {
  value: string;
  label: string;
  categoryId: string;
  categoryName: string;
  role: string;
  person: string;
}

export function buildTemplateOptions(
  files: string[],
  labelFn: (f: string) => string,
): TemplateOption[] {
  return files.map((file) => {
    const base = file.replace(/\.md$/i, '');
    const idx = base.lastIndexOf('-');
    const role = idx > 0 ? base.slice(0, idx) : base;
    const person = idx > 0 ? base.slice(idx + 1) : '';
    const categoryId = getTemplateCategoryId(file);
    return {
      value: file,
      label: labelFn(file),
      categoryId,
      categoryName: getTemplateCategoryName(file),
      role,
      person,
    };
  });
}

export interface TemplateGroup {
  id: string;
  name: string;
  items: TemplateOption[];
}

export function groupTemplateOptions(options: TemplateOption[]): TemplateGroup[] {
  const map = new Map<string, TemplateOption[]>();
  for (const opt of options) {
    const list = map.get(opt.categoryId) ?? [];
    list.push(opt);
    map.set(opt.categoryId, list);
  }
  return TEMPLATE_CATEGORIES.map((cat) => ({
    id: cat.id,
    name: cat.name,
    items: map.get(cat.id) ?? [],
  })).filter((g) => g.items.length > 0);
}

export function filterTemplateOptions(
  options: TemplateOption[],
  query: string,
  categoryId: string,
): TemplateOption[] {
  let result = options;
  if (categoryId && categoryId !== 'all') {
    result = result.filter((o) => o.categoryId === categoryId);
  }
  const q = query.trim().toLowerCase();
  if (!q) return result;
  return result.filter((o) => {
    const haystack = [o.label, o.role, o.person, o.categoryName, o.value]
      .join(' ')
      .toLowerCase();
    return haystack.includes(q);
  });
}
