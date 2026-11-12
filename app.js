'use strict';
const topics = [
  {
    id: 'origins', label: '亚当与智人', range: '人的起源 · 数十万年尺度', title: '第一个人，指的是哪一种“人”？',
    question: '物种起源、伦理主体与经文人物，是否正在回答同一个问题？',
    textTitle: '亚当与人的起源', text: '《创世记》2—3章通过受造、园子、命令与选择叙述人的处境。文本中的亚当并不自带可以与化石样本对接的年代或遗传标记。',
    evidenceTitle: '早期智人与非洲起源', evidence: '智人的演化涉及约30万年的尺度。杰贝尔·伊鲁德研究报告的相关年代为约31.5±3.4万年前；这不是一个单独祖先被命名的时刻。',
    relation: '需要区分概念', judgment: '把亚当理解为第一位具有某种宗教或伦理身份的人，是一种释经或哲学模型；把他认定为某具化石、某一单倍群祖先，则需要额外可检验的桥梁。化石能够约束历史解释，却不能替某项神学身份直接作证。',
    questionNext: '下一步：先定义“人”是物种分类、第一人称主体，还是一种与神的关系，再讨论对应。',
    sources: [['经文 · 创世记2章','https://bible.usccb.org/bible/genesis/2'],['Smithsonian · Homo sapiens','https://humanorigins.si.edu/evidence/human-fossils/species/homo-sapiens'],['Hublin等 · 2017原始研究','https://pubmed.ncbi.nlm.nih.gov/28593953/']]
  },
  {
    id: 'farming', label: '农耕与牧养', range: '食物生产 · 约一万年尺度', title: '园子、土地与食物生产',
    question: '文化生活的背景联系，能够支持到哪一步？',
    textTitle: '耕种与牧养的叙述', text: '《创世记》2章涉及园子与耕作，4章将该隐与亚伯分别放在耕地和牧羊的生活中。叙述在土地、劳动与人的关系中展开。',
    evidenceTitle: '食物生产的长期转变', evidence: 'Smithsonian 将过去约12,000年中的食物生产转变，放在人类改变环境的长期历史中。这个过程涉及群体与文化变化，不是已被识别的一对人物事件。',
    relation: '可比较的文化背景', judgment: '农耕、牧养与定居生活能帮助理解古代文本的社会经验，但背景相似不能证明亚当、该隐或亚伯已经与某个考古群体一一对应。经文人物的叙事顺序，也不能直接成为农业发明的考古年表。',
    questionNext: '下一步：比较具体地点、年代与生活方式，避免把“背景可理解”扩展为“人物已获证实”。',
    sources: [['经文 · 创世记4章','https://bible.usccb.org/bible/genesis/4'],['Smithsonian · Humans Change the World','https://humanorigins.si.edu/human-characteristics/humans-change-world']]
  },
  {
    id: 'flood', label: '洪水与古近东', range: '灾难记忆 · 文学传统', title: '洪水故事之间，连接着什么？',
    question: '共同母题与同一场灾难，是两种不同的对应。',
    textTitle: '挪亚洪水', text: '《创世记》6—9章围绕洪水、保存生命与立约展开。叙述的范围、神学意义与历史解释，需要分别讨论。',
    evidenceTitle: '古近东洪水叙事材料', evidence: '《吉尔伽美什史诗》第十一泥板包含洪水叙事。Getty 的对象目录记录了英国博物馆所藏的公元前7世纪“洪水泥板”；泥板年代不等于故事中灾难的年代。',
    relation: '有材料的母题比较', judgment: '这类材料使比较洪水传统成为具体研究，但不能仅凭相似就确认所有故事来自同一场灾难，更不能直接证明全球洪水。传播、共同传统与不同地方的灾难记忆，都应在具体材料中检验。',
    questionNext: '下一步：分别记录泥板的制作年代、文本传统与拟议事件年代，再比较异同。',
    sources: [['经文 · 创世记6章','https://bible.usccb.org/bible/genesis/6'],['Getty · 洪水泥板目录','https://www.getty.edu/cona/CONAFullSubject.aspx?subid=700009476'],['UC Berkeley ORIAS · Epic of Gilgamesh','https://orias.berkeley.edu/node/114']]
  },
  {
    id: 'nations', label: '含、闪与雅弗', range: '族谱 · 地理 · 语言', title: '列国表，不是一张现代DNA树',
    question: '古代世界的分类方式，怎样与现代祖源研究相遇？',
    textTitle: '挪亚三子的列国表', text: '《创世记》10章把列国组织在闪、含、雅弗的后裔之下，并按土地、语言、宗族与国家描述分布。它首先是一份古代文本中的谱系叙述。',
    evidenceTitle: '古代地名与遗传祖源', evidence: 'USCCB注释把其中一些名称联系到米底人、希腊人及塞浦路斯等古代地理。遗传祖源研究则依据生物遗传关系，并可结合历史信息讨论祖先的位置。',
    relation: '地理联系与血缘证明分开', judgment: '名称可以具有可考的古代地理指向，却不能因此把三支直接等同于现代种族、语系或单倍群。把谱系放大到数十万年、另排先后嵌套关系，是额外假说，不是经文或DNA数据已经给出的结论。',
    questionNext: '下一步：对每一个对应分别列出经文用法、历史地理与遗传资料，不让三类信息互相替代。',
    sources: [['经文与注释 · 创世记10章','https://bible.usccb.org/bible/genesis/10'],['NHGRI · Genetic Ancestry','https://www.genome.gov/genetics-glossary/Genetic-Ancestry'],['NHGRI · Y Chromosome','https://www.genome.gov/about-genomics/Y-chromosome']]
  },
  {
    id: 'babel', label: '巴别与城市', range: '城市 · 建造 · 语言分化', title: '巴别塔与城市世界的想象',
    question: '一个熟悉的文化场景，是否就是某一事件的记录？',
    textTitle: '城、塔与语言分散', text: '《创世记》11章描述示拿地区的城市、砖与塔，并将人群分散与语言差异放入叙事。USCCB注释提出，塔的形象可能涉及巴比伦的庙塔背景。',
    evidenceTitle: '城市与早期文字', evidence: '大都会艺术博物馆的资料介绍公元前第四千纪后期的乌鲁克城市与行政记录，及文字发展的复杂过程。这提供古近东城市文化的真实背景。',
    relation: '可研究的背景联系', judgment: '城市、建造和书写可以进入比较，但它们没有证实全人类曾在同一天发生语言分裂。庙塔与经文形象的联系，也不能只凭建筑相似便确定故事发生的地点、时间与全部过程。',
    questionNext: '下一步：把考古背景、语言史与文本如何解释分散分别列出，再讨论它们能否形成同一历史解释。',
    sources: [['经文与注释 · 创世记11章','https://bible.usccb.org/bible/genesis/11'],['The Met · The Origins of Writing','https://www.metmuseum.org/essays/the-origins-of-writing']]
  },
  {
    id: 'chronology', label: '族谱与年代', range: '叙事时间 · 实测时间', title: '一串年龄，能够成为绝对年代吗？',
    question: '文本内部的计算与独立测年的约束，需要在哪里相遇？',
    textTitle: '生育年龄与家谱累加', text: '《创世记》5章和11章列出人物、生育年龄与寿命。把数字逐项累加，可以得到基于所选文本和解释的相对年表。',
    evidenceTitle: '不同材料有不同的时间尺度', evidence: '人类化石的年代、农业的形成、城市与文字的发展，来自各自的材料与研究方法。它们不能只由经文数字重新命名，便与某一条家谱合并。',
    relation: '计算成立仍需验证前提', judgment: '相加正确，不等于已证明家谱没有省略、数字只作实龄使用，或某一基准年份真实。若我选择非字面解释，应把新前提写清；若保留字面历史，也必须面对独立年代材料。',
    questionNext: '下一步：同时保留“经文内年表”与“外部材料年表”，把每一次连接标成一项需要支持的推断。',
    sources: [['经文 · 创世记5章','https://bible.usccb.org/bible/genesis/5'],['经文 · 创世记11章','https://bible.usccb.org/bible/genesis/11'],['Hublin等 · 化石与年代','https://pubmed.ncbi.nlm.nih.gov/28593953/']]
  }
];
const topicsContainer = document.querySelector('#atlas-topics');
const detail = document.querySelector('#atlas-detail');
topics.forEach((topic, index) => {
  const button = document.createElement('button');
  button.type = 'button'; button.className = 'topic-button'; button.dataset.topic = topic.id;
  button.setAttribute('aria-controls', 'atlas-detail'); button.setAttribute('aria-pressed', 'false');
  button.innerHTML = `<span class="topic-index">${String(index+1).padStart(2,'0')}</span><span><strong>${topic.label}</strong><small>${topic.range}</small></span>`;
  button.addEventListener('click', () => selectTopic(topic.id)); topicsContainer.append(button);
});
function selectTopic(id) {
  const topic = topics.find(t => t.id === id) || topics[0];
  document.querySelectorAll('[data-topic]').forEach(button => {
    const selected = button.dataset.topic === topic.id;
    button.classList.toggle('active', selected); button.setAttribute('aria-pressed', String(selected));
  });
  detail.innerHTML = `<p class="topic-kicker">${topic.range}</p><h3>${topic.title}</h3><p class="topic-question">${topic.question}</p><div class="relation-flow"><section class="relation-box"><small>TEXT / 经文叙事</small><h4>${topic.textTitle}</h4><p>${topic.text}</p></section><span class="relation-arrow" aria-label="比较关系">↔</span><section class="relation-box evidence"><small>EVIDENCE / 材料</small><h4>${topic.evidenceTitle}</h4><p>${topic.evidence}</p></section></div><section class="interpretation"><h4>RELATION / ${topic.relation}</h4><p>${topic.judgment}</p><p>${topic.questionNext}</p></section><div class="topic-sources" aria-label="主题来源">${topic.sources.map(([name,url])=>`<a href="${url}" target="_blank" rel="noopener noreferrer">${name} ↗</a>`).join('')}</div>`;
}
selectTopic('origins');

const player = document.querySelector('#film-player');
const versions = {
  narrated: {label: '旁白版'},
  'no-narration': {label: '无旁白版'}
};
const languages = {zh:{label:'中文',edition:'中文原版'},en:{label:'英文',edition:'ENGLISH'}};
let selectedLanguage='zh';
let selectedVersion='narrated';
function selectFilm(language,version) {
  if(language===selectedLanguage && version===selectedVersion) return;
  selectedLanguage=language; selectedVersion=version;
  const mediaPath=`media/god-remains-${language}-${version}.mp4`;
  player.pause();
  player.querySelector('source').src = mediaPath;
  player.poster = `media/poster-${language==='zh'?'zh-':''}${version}.jpg`;
  player.setAttribute('aria-label', `基督教破产之后，上帝仍在 ${languages[language].label}${versions[version].label}`);
  player.load();
  const description=language==='zh'?(version==='narrated'?'原版十字架开场，中文画面与中文解说。':'原版十字架开场，保留中文画面，没有解说旁白。'):(version==='narrated'?'英文画面与英文解说。':'保留英文画面，没有解说旁白。');
  document.querySelector('#film-description').textContent = `${languages[language].label}${versions[version].label}：${description}点击播放后开始加载。`;
  document.querySelector('#film-download').href=mediaPath;
  document.querySelector('#film-edition').textContent=`1.2-v5 · ${languages[language].edition} · 720P`;
  document.querySelectorAll('[data-video]').forEach(b => {
    const selected = b.dataset.video === version; b.classList.toggle('active',selected); b.setAttribute('aria-pressed',String(selected));
  });
  document.querySelectorAll('[data-language]').forEach(b=>{
    const selected=b.dataset.language===language;b.classList.toggle('active',selected);b.setAttribute('aria-pressed',String(selected));
  });
}
document.querySelectorAll('[data-video]').forEach(button=>button.addEventListener('click',()=>selectFilm(selectedLanguage,button.dataset.video)));
document.querySelectorAll('[data-language]').forEach(button=>button.addEventListener('click',()=>selectFilm(button.dataset.language,selectedVersion)));
const responses = {
  memory:'记忆能建立心理联系。但若两人同时拥有同样记忆，为什么它能唯一决定谁是原来的主体？需要进一步说明同一性是否允许分支。',
  body:'身体与因果来源能区分原体和复制体。接着要问：逐步替换组织，或暂停后恢复时，哪种连续关系是必须保留的？',
  open:'保留问题是一个起点。候选理论仍须具体回答分割、暂停与复制，才能比较它究竟解释了什么。'
};
document.querySelectorAll('input[name="identity"]').forEach(input=>input.addEventListener('change',()=>{
  document.querySelector('#thought-response').textContent=responses[input.value];
}));
