import { resolvePublicUrl } from '@/utils/resolvePublicUrl';

export const DEFAULT_TEMPLATE = '高级前端工程师-张三.md';

export const FALLBACK_TEMPLATES = [
  '高级前端工程师-张三.md',
  '安全运营-张三.md',
  '保安员-李四.md',
  '保洁员-王五.md',
  '报关员-赵六.md',
  '财务会计-钱七.md',
  '餐厅服务员-孙八.md',
  '测试开发工程师-周九.md',
  '产品经理-吴十.md',
  '成本会计-张甲.md',
  '出纳-李甲.md',
  '出租车司机-王甲.md',
  '厨师-赵甲.md',
  '带货主播-钱甲.md',
  '电工-孙甲.md',
  '电话客服-周甲.md',
  '房产中介-吴甲.md',
  '工厂普工-陈甲.md',
  '工业设计师-刘甲.md',
  '工业设计师-杨甲.md',
  '公众号运营-黄甲.md',
  '广告导演-林甲.md',
  '海归产品经理-张归.md',
  '海归金融分析师-王归.md',
  '海归算法工程师-李归.md',
  '海归战略咨询-赵归.md',
  '海外销售-何甲.md',
  '海外销售经理-冯甲.md',
  '护士-唐甲.md',
  '婚礼摄影师-韩甲.md',
  '货车司机-曹甲.md',
  '机房网管-沈甲.md',
  '基础平台首席架构师-张乙.md',
  '急诊护士-李乙.md',
  '纪录片导演-王乙.md',
  '家装顾问-赵乙.md',
  '建筑工人-钱乙.md',
  '建筑设计师-孙乙.md',
  '建筑设计师-周乙.md',
  '健身教练-吴乙.md',
  '交付工程师-陈乙.md',
  '交付工程师-郑乙.md',
  '酒店前台-刘乙.md',
  '客房服务员-杨乙.md',
  '口腔医生-黄乙.md',
  '口译翻译-林乙.md',
  '跨境电商运营-冯乙.md',
  '跨境电商运营-何乙.md',
  '快递分拣员-唐乙.md',
  '快递员-韩乙.md',
  '律师助理-曹乙.md',
  '美发师-沈乙.md',
  '美容师-张丙.md',
  '内容编辑-李丙.md',
  '农技员-王丙.md',
  '汽车美容-赵丙.md',
  '汽车维修工-钱丙.md',
  '前端架构负责人-孙丙.md',
  '前端开发-周丙.md',
  '前台接待-吴丙.md',
  '嵌入式工程师-陈丙.md',
  '嵌入式工程师-郑丙.md',
  '全科医生-刘丙.md',
  '全栈开发实习-杨丙.md',
  '人事专员-黄丙.md',
  '软装设计师-林丙.md',
  '商场保洁-何丙.md',
  '商场导购-冯丙.md',
  '商务经理-唐丙.md',
  '商务拓展-韩丙.md',
  '商业摄影师-曹丙.md',
  '社区护士-沈丙.md',
  '审计助理-张丁.md',
  '视觉设计师-李丁.md',
  '室内设计师-王丁.md',
  '手术室护士-赵丁.md',
  '数据分析师-钱丁.md',
  '数据分析师-孙丁.md',
  '数字化交付总监-周丁.md',
  '水电工-吴丁.md',
  '算法工程师-陈丁.md',
  '算法工程师-郑丁.md',
  '托育老师-刘丁.md',
  '外籍产品顾问-David.md',
  '外籍软件工程师-Michael.md',
  '外籍市场营销-Sarah.md',
  '外籍英文教师-John.md',
  '外卖配送员-杨丁.md',
  '外卖骑手-黄丁.md',
  '外贸跟单员-林丁.md',
  '外贸业务员-何丁.md',
  '网管-冯丁.md',
  '网络安全-唐丁.md',
  '网约车司机-韩丁.md',
  '物流调度-曹丁.md',
  '物业保安-沈丁.md',
  '项目经理-李戊.md',
  '项目经理-张戊.md',
  '心理咨询师-王戊.md',
  '心理咨询师-赵戊.md',
  '新媒体运营-钱戊.md',
  '行政前台-孙戊.md',
  '研发总监-周戊.md',
  '养老护工-吴戊.md',
  '英语翻译-郑戊.md',
  '英语老师-陈戊.md',
  '游戏编辑-刘戊.md',
  '游戏策划-杨戊.md',
  '游戏文案-黄戊.md',
  '游戏运营-林戊.md',
  '游戏主播-何戊.md',
  '幼师-冯戊.md',
  '瑜伽教练-唐戊.md',
  '育儿嫂-韩戊.md',
  '月嫂-曹戊.md',
  '杂志编辑-沈戊.md',
  '在线客服-张己.md',
  '执业律师-李己.md',
  '质检员-王己.md',
  '中学教师-赵己.md',
  '钟点工-钱己.md',
  '种植员-孙己.md',
  '装修木工-周己.md',
  '资深产品技术专家-吴己.md',
  '资深全栈技术顾问-郑己.md',
  '自动化测试-陈己.md',
  'Agent后端开发工程师-刘己.md',
  'Agent后端开发工程师-杨己.md',
  'Agent架构师-黄己.md',
  'Agent架构师-林己.md',
  'Agent开发工程师-冯己.md',
  'Agent开发工程师-何己.md',
  'Agent前端开发工程师-韩己.md',
  'Agent前端开发工程师-唐己.md',
  'B端产品经理-曹己.md',
  'DevOps工程师-沈己.md',
  'HIS工程师-李庚.md',
  'HIS工程师-张庚.md',
  'HR招聘专员-王庚.md',
  'Linux运维-赵庚.md',
  'UE关卡设计师-钱庚.md',
  'UE界面设计师-孙庚.md',
  'UI设计师-周庚.md',
] as const;

export function sortTemplateFiles(files: string[]): string[] {
  return [...new Set(files)].sort((a, b) => {
    if (a === DEFAULT_TEMPLATE) return -1;
    if (b === DEFAULT_TEMPLATE) return 1;
    return a.localeCompare(b, 'zh-CN');
  });
}

export function templateLabel(filename: string): string {
  const base = filename.replace(/\.md$/i, '');
  const idx = base.lastIndexOf('-');
  if (idx <= 0) return base;
  const role = base.slice(0, idx);
  const person = base.slice(idx + 1);
  if (filename === DEFAULT_TEMPLATE) return `默认 · ${role} · ${person}`;
  return `${role} · ${person}`;
}

export async function discoverResumeTemplates(): Promise<string[]> {
  try {
    const res = await fetch(resolvePublicUrl('templates/manifest.json'), { cache: 'no-store' });
    if (res.ok) {
      const files = (await res.json()) as string[];
      if (files.length) return sortTemplateFiles(files);
    }
  } catch {
    /* fallback below */
  }
  return sortTemplateFiles([...FALLBACK_TEMPLATES]);
}

export async function loadTemplateFile(filename: string): Promise<string> {
  const res = await fetch(resolvePublicUrl(`templates/${encodeURIComponent(filename)}`), {
    cache: 'no-store',
  });
  if (!res.ok) throw new Error(`无法加载 ${filename}`);
  return res.text();
}
