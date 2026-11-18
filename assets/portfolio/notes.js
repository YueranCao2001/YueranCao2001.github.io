const REPO = 'YueranCao2001/learning-record';
const RAW = 'https://raw.githubusercontent.com/' + REPO + '/main/';
const GIT = 'https://github.com/' + REPO + '/blob/main/';
const CACHE_KEY = 'evren-notes-index-v3';
const PREF_KEY = 'evren-notes-view-v1';
const TTL = 300000;
export const topics = [
  {id:'transformer-foundations',zh:'Transformer 基础与生成',en:'Transformer Foundations & Generation',description:{zh:'注意力、位置机制与逐步生成，沿着张量和数据流理解模型。',en:'Attention, positional mechanisms, and generation through the lens of tensors and data flow.'}},
  {id:'training-engineering',zh:'训练与数据工程',en:'Training & Data Engineering',description:{zh:'优化、并行、性能与数据管线，连接模型训练的数值与系统问题。',en:'Optimization, parallelism, performance, and data pipelines across numerical and systems concerns.'}},
  {id:'post-training',zh:'后训练与偏好优化',en:'Post-training & Preference Optimization',description:{zh:'微调、偏好学习与强化学习，梳理训练目标、方法和验证边界。',en:'Fine-tuning, preference learning, and reinforcement learning: objectives, methods, and validation.'}},
  {id:'evaluation-experiments',zh:'评估与实验方法',en:'Evaluation & Experiment Design',description:{zh:'对照、统计解释与错误分析，让结论有依据、过程可复查。',en:'Controls, statistical interpretation, and error analysis for evidence-based, reproducible conclusions.'}},
  {id:'inference-tools',zh:'推理部署与工具执行',en:'Inference Systems & Tool Execution',description:{zh:'从服务调度到解码与可靠执行，理解模型走向应用的系统约束。',en:'Serving, scheduling, decoding, and reliable execution under real systems constraints.'}},
  {id:'rag',zh:'RAG 检索与应用工程',en:'Retrieval & RAG Engineering',description:{zh:'检索、证据、引用与回归验证，持续打磨一个可运行的学习项目。',en:'Retrieval, evidence, citations, and regression testing in an evolving hands-on project.'}}
];
const SEED = [{"path":"daily/2026/10/2026-10-20-citation-prompt-date-regression.md","title":"引用候选提示的日期题退化","date":"2026-10-20","topic":"rag","sha":"30c78155a7a9a514f4c772c7ad0d51d457331717"},{"path":"daily/2026/10/2026-10-19-citation-prompt-single-factor-comparison.md","title":"引用充分性提示的单因素对照","date":"2026-10-19","topic":"rag","sha":"5fad677920104ff8307b18ac66ee44897660ef65"},{"path":"daily/2026/10/2026-10-18-policy-version-first-pass-review.md","title":"验证日期版本并冻结五题首次基线","date":"2026-10-18","topic":"rag","sha":"a01c29f649e33dd671ed7ce0a6019e7573b688a3"},{"path":"daily/2026/10/2026-10-17-exceptions-and-insufficient-evidence.md","title":"验证定制例外与证据不足响应","date":"2026-10-17","topic":"rag","sha":"e26419d4e72ed3e955f21cbd98355f551e7dd058"},{"path":"daily/2026/10/2026-10-16-ollama-first-local-generation.md","title":"使用 Ollama 完成第一道本地生成测试","date":"2026-10-16","topic":"rag","sha":"918fa867018758db8a7209bd3f564868440710c5"},{"path":"daily/2026/10/2026-10-15-pilot-sources-and-scoring-rubric.md","title":"补齐生成试跑来源与评分依据","date":"2026-10-15","topic":"rag","sha":"59547dfd8c85a810c051b0418bddb143c633f6a9"},{"path":"daily/2026/10/2026-10-14-generation-contract-review-draft.md","title":"固定生成协议与待审查问题集","date":"2026-10-14","topic":"rag","sha":"1ff1973e30994d025a21f9054b3f687835e54319"},{"path":"daily/2026/10/2026-10-13-source-citation-checks.md","title":"将原文引用检查接入共享检索项目","date":"2026-10-13","topic":"rag","sha":"8354262de48706386b68678215ad025c39446208"},{"path":"daily/2026/10/2026-10-12-retrieval-ranking-diagnostic-cases.md","title":"用诊断案例区分检索表示与排序","date":"2026-10-12","topic":"rag","sha":"92005c55b06f1ccfafc389d2d3dd233f05a044e7"},{"path":"daily/2026/10/2026-10-11-reusable-retrieval-baseline.md","title":"将文本检索练习整理为共享基线","date":"2026-10-11","topic":"rag","sha":"bf584d04e2848b93cafe70cc680af4c9c791f98a"},{"path":"daily/2026/10/2026-10-10-chinese-tokenization-bm25-experiment.md","title":"中文文本检索与 BM25 对照实验","date":"2026-10-10","topic":"rag","sha":"1fbc21dc4294a360be8740fcc7e59327146bdb05"},{"path":"daily/2026/10/2026-10-09-offline-rag-retrieval-evidence-experiment.md","title":"最小离线 RAG 检索与证据实验","date":"2026-10-09","topic":"rag","sha":"870d93d83416094e24a937dc16cceddc922f19ba"},{"path":"daily/2026/10/2026-10-08-rag-end-to-end-acceptance-review.md","title":"RAG 工程端到端复盘与统一验收","date":"2026-10-08","topic":"rag","sha":"079838154f4d6df247c74f51e4a077d7203b3471"},{"path":"daily/2026/10/2026-10-07-rag-admission-overload-protection.md","title":"RAG 流量控制与过载保护","date":"2026-10-07","topic":"rag","sha":"0c9b31fd9e73ab588c4ae47d053ad19827a435f4"},{"path":"daily/2026/10/2026-10-06-rag-deadlines-retries-fallbacks.md","title":"RAG 超时预算与降级策略","date":"2026-10-06","topic":"rag","sha":"b51c7f54473f63a8cf16d3a7577483b060a6ab5c"},{"path":"daily/2026/10/2026-10-05-rag-observability-trace-diagnostics.md","title":"RAG 可观测性与故障定位","date":"2026-10-05","topic":"rag","sha":"d7fb2a4b63ee45ff82a5678ea90811b661212b5f"},{"path":"daily/2026/10/2026-10-04-rag-incremental-index-publication.md","title":"RAG 增量索引与版本发布","date":"2026-10-04","topic":"rag","sha":"5e40ab0e7412d795ac9404d39fef8ce912ec77c0"},{"path":"daily/2026/10/2026-10-03-rag-cache-invalidation.md","title":"RAG 缓存与失效策略","date":"2026-10-03","topic":"rag","sha":"2227d936d2d0604edba8c3127f3355c1bef3b375"},{"path":"daily/2026/10/2026-10-02-rag-prompt-injection-trust-boundaries.md","title":"RAG 提示注入与信任边界","date":"2026-10-02","topic":"rag","sha":"d8665a52ba5c15cf77eee5930f3935c86779836a"},{"path":"daily/2026/10/2026-10-01-long-context-evidence-compression.md","title":"长上下文与上下文压缩","date":"2026-10-01","topic":"rag","sha":"1d6eece439902a87bb95de296e3358c4c062a3fb"},{"path":"daily/2026/09/2026-09-30-rag-evaluation-regression-tests.md","title":"RAG 端到端评估与回归测试","date":"2026-09-30","topic":"rag","sha":"2667f1d8146603ccdfb5a1576e43be7ed5dffcaf"},{"path":"daily/2026/09/2026-09-29-query-rewriting-multi-hop-retrieval.md","title":"查询改写与多跳检索：意图保留、证据依赖和停止条件","date":"2026-09-29","topic":"rag","sha":"c7758e6a62eef3d23dc7ebfac7ff8b3ad4a99f25"},{"path":"daily/2026/09/2026-09-28-retrieval-ranking-bm25-rrf-evaluation.md","title":"检索排序：BM25、向量检索、RRF 与评估","date":"2026-09-28","topic":"rag","sha":"f5512df110ce5e66cb331668d65536f495f3729e"},{"path":"daily/2026/09/2026-09-27-rag-retrieval-evidence-citations.md","title":"检索增强生成：检索、证据组织与引用核验","date":"2026-09-27","topic":"rag","sha":"c3bba616e1cc2d6fca4ca4ad46289c45c56d2499"},{"path":"daily/2026/09/2026-09-26-reliable-tool-execution-idempotency.md","title":"工具调用的可靠执行：权限、幂等键、重试与结果回传","date":"2026-09-26","topic":"inference-tools","sha":"08d544460ef9eddb6f89a13b56cec3775864a9ce"},{"path":"daily/2026/09/2026-09-25-structured-output-constrained-decoding.md","title":"结构化输出与约束解码：Schema、语法状态和 Token Mask","date":"2026-09-25","topic":"inference-tools","sha":"a226a419e5c19b3fe66fca2c328d0dd55ac442ef"},{"path":"daily/2026/09/2026-09-24-speculative-decoding-rejection-sampling.md","title":"投机解码：草稿、目标验证与拒绝采样","date":"2026-09-24","topic":"inference-tools","sha":"76bb2ae9e4fdde5251286b7c5da52c02fe17502c"},{"path":"daily/2026/09/2026-09-23-inference-weight-kv-quantization.md","title":"推理量化：权重、KV Cache、Scale 与质量验收","date":"2026-09-23","topic":"inference-tools","sha":"3d2694edc8d58a7ef1f3a0c69e9c0cf899656bba"},{"path":"daily/2026/09/2026-09-22-paged-attention-kv-block-management.md","title":"PagedAttention 与 KV 块管理：映射、共享、写时复制和释放","date":"2026-09-22","topic":"inference-tools","sha":"3f14e7665d6be3e30d3636c84365464f57cc716a"},{"path":"daily/2026/09/2026-09-21-continuous-batching-request-scheduling.md","title":"连续批处理与请求调度：Prefill、Decode 和 KV 容量","date":"2026-09-21","topic":"inference-tools","sha":"d13b69dfaade30ba6d01c8b8c87e9bf2ed9a910f"},{"path":"daily/2026/09/2026-09-20-inference-serving-acceptance.md","title":"推理部署验收：延迟、吞吐、显存与失败率","date":"2026-09-20","topic":"inference-tools","sha":"e0bced16a34d940eab1a888371e0a5cc97dbaa90"},{"path":"daily/2026/09/2026-09-18-experiment-tracking-reproducible-reports.md","title":"实验追踪与可复现报告：Run Manifest、内容指纹与结果重算","date":"2026-09-18","topic":"evaluation-experiments","sha":"3721a55eae3893a21daf25b891a055e6a5057699"},{"path":"daily/2026/09/2026-09-17-error-analysis-ablation-experiments.md","title":"错误分析与消融实验：从失败案例到可检验的改进假设","date":"2026-09-17","topic":"evaluation-experiments","sha":"46b1e801d21c906373668ebb0cee20d3d1950a0f"},{"path":"daily/2026/09/2026-09-16-paired-evaluation-group-bootstrap.md","title":"评估结果的统计解释：配对比较、分组 Bootstrap 与选择偏差","date":"2026-09-16","topic":"evaluation-experiments","sha":"ea5969a0f91174674bb14b12e56827bc76e6db6e"},{"path":"daily/2026/09/2026-09-15-small-model-experiment-design.md","title":"小模型后训练实验设计：固定 Baseline、数据切分、一步训练与恢复对照","date":"2026-09-15","topic":"evaluation-experiments","sha":"a4de0ce03ed7238f7e011f22978cb15a9aa7489f"},{"path":"daily/2026/09/2026-09-14-post-training-end-to-end-review.md","title":"后训练链路复盘：SFT、DPO、PPO/GRPO 的统一实验协议与验收","date":"2026-09-14","topic":"post-training","sha":"c7e8cadd158a7a470be5580df99c72ca87995d61"},{"path":"daily/2026/09/2026-09-11-verifiable-rewards-evaluator.md","title":"可验证奖励与评估器工程：答案抽取、容差、失败分类与 Reward Hacking","date":"2026-09-11","topic":"post-training","sha":"5689e22c9e33c03fa17405aa126d83846148959d"},{"path":"daily/2026/09/2026-09-10-rl-rollout-engineering.md","title":"RL Rollout 工程：权重同步、采样 Log Probability、异步队列与 Policy Staleness","date":"2026-09-10","topic":"post-training","sha":"f48351c035b10a479d0f56af38b32e26f34d3e1e"},{"path":"daily/2026/09/2026-09-09-online-rl-ppo-grpo.md","title":"在线强化学习后训练：Rollout、Advantage、PPO 与 GRPO","date":"2026-09-09","topic":"post-training","sha":"136c0eb14636c81d5e3e8355cfd861dab532720b"},{"path":"daily/2026/09/2026-09-08-direct-preference-optimization.md","title":"Direct Preference Optimization：偏好对、Reference Model、DPO Loss 与长度偏差","date":"2026-09-08","topic":"post-training","sha":"aaccbd6175e47a9f8c43ba1cce661fe7296e70cc"},{"path":"daily/2026/09/2026-09-07-supervised-fine-tuning-chat-template-lora.md","title":"Supervised Fine-Tuning：Chat Template、Assistant-only Loss、Packing 与 LoRA","date":"2026-09-07","topic":"post-training","sha":"3d1b97c873b3545dd778ffa8a9d956aad605599d"},{"path":"daily/2026/09/2026-09-04-checkpoint-evaluation-harness.md","title":"Checkpoint 评估：Validation Loss、任务指标、Calibration 与 Evaluation Harness","date":"2026-09-04","topic":"evaluation-experiments","sha":"d5cb9d3edaf6ef1f5fa4a2f7a230bce29171da19"},{"path":"daily/2026/09/2026-09-03-training-instability-loss-spike-nan-recovery.md","title":"训练异常诊断：Loss Spike、梯度范数、NaN/Inf 与 Checkpoint Rollback","date":"2026-09-03","topic":"training-engineering","sha":"9650602c770c0d8b62a5c158ea0bdde6236c88eb"},{"path":"daily/2026/09/2026-09-02-data-quality-dedup-contamination.md","title":"训练数据治理：质量过滤、去重、污染检测、Provenance 与数据混合","date":"2026-09-02","topic":"training-engineering","sha":"6b35f71f60316346eb1b051ff935f040fa152210"},{"path":"daily/2026/09/2026-09-01-training-data-pipeline.md","title":"训练数据流水线：Packing、Shuffling、Prefetch 与可恢复采样","date":"2026-09-01","topic":"training-engineering","sha":"58988f55b082529eda66862bb4e2fd7408181453"},{"path":"daily/2026/08/2026-08-31-training-performance-roofline-mfu.md","title":"训练性能诊断：FLOPs、MFU、Roofline 与 Profiling","date":"2026-08-31","topic":"training-engineering","sha":"cea3a6c767a0791b62601f41666a4c06ed55ab3a"},{"path":"daily/2026/08/2026-08-28-distributed-parallelism-collectives.md","title":"大模型并行全景：DP、TP、PP、SP 与 EP","date":"2026-08-28","topic":"training-engineering","sha":"9bfc5bb23c4c10618ceba309ef998564b46e1ad0"},{"path":"daily/2026/08/2026-08-27-training-memory-fsdp-zero.md","title":"训练显存拆解：Activation Checkpointing、ZeRO 与 FSDP","date":"2026-08-27","topic":"training-engineering","sha":"67b0142fe4132803544958d468b44452caa25cd4"},{"path":"daily/2026/08/2026-08-26-backprop-adamw-training-step.md","title":"稳定训练一步：反向传播、AdamW、梯度裁剪与 Warmup","date":"2026-08-26","topic":"training-engineering","sha":"eafb7b691b2efdd92ad45f8ed403c4c76c0a1f50"},{"path":"daily/2026/08/2026-08-25-next-token-training.md","title":"语言模型训练目标：Label Shift、Cross-Entropy 与 Perplexity","date":"2026-08-25","topic":"training-engineering","sha":"37b6dad66a4afa35f2c06a9c7372beb0f4adae7e"},{"path":"daily/2026/08/2026-08-24-logits-sampling.md","title":"从 Logits 到 Token：Temperature、Top-k 与 Top-p","date":"2026-08-24","topic":"transformer-foundations","sha":"a826adc02f5a9b77a8bec04ca1dbbee12c6700e7"},{"path":"daily/2026/08/2026-08-18-kv-cache-mqa-gqa.md","title":"KV Cache：从显存公式到 MQA 与 GQA","date":"2026-08-18","topic":"transformer-foundations","sha":"d6aace4c8434c15a1a38eaffcdd9ea99321303fd"},{"path":"daily/2026/08/2026-08-12-transformer-decoder-block.md","title":"Transformer 解码器块：串起完整前向传播","date":"2026-08-12","topic":"transformer-foundations","sha":"79145d2b5338ec41f66cf0a3c10065096ca509d9"},{"path":"daily/2026/08/2026-08-11-rope.md","title":"RoPE：用旋转编码相对位置","date":"2026-08-11","topic":"transformer-foundations","sha":"4e976ddf23d5e0388102643c989993c09aab1745"},{"path":"daily/2026/08/2026-08-10-positional-encoding.md","title":"位置编码：让 Attention 理解顺序","date":"2026-08-10","topic":"transformer-foundations","sha":"e4b3b5f175dc351db548ab17f4f2239d91a7f01d"},{"path":"daily/2026/08/2026-08-05-multi-head-attention.md","title":"Multi-Head Attention：多头拆分、计算与合并","date":"2026-08-05","topic":"transformer-foundations","sha":"068bca97dc022c49dad851c30e303c58c62e4a69"},{"path":"daily/2026/08/2026-08-04-attention-implementation.md","title":"Attention：从公式到最小实现","date":"2026-08-04","topic":"transformer-foundations","sha":"a083af815e35a80cc977ec4f0f85e52e240dddc1"},{"path":"daily/2026/08/2026-08-03-attention.md","title":"Attention：从直觉到公式","date":"2026-08-03","topic":"transformer-foundations","sha":"2f475c2480148f522ef773f3c973bd54d0859d80"}];
const topicMap = new Map(topics.map(t=>[t.id,t]));
const subscribers = new Set();
const noteCache = new Map();
const libraries = new Map();
let index = SEED.map(e=>({...e}));
let indexTime = 0, syncState = 'seed', syncPromise = null;
let listSnapshot = {scroll:0};
let preferences = {mode:'date',query:'',topic:'all'};
const enc = p=>p.split('/').map(encodeURIComponent).join('/');
const route = p=>'#learning/' + encodeURIComponent(p);
const dateOf = p=>(p.match(/(?:^|\/)(\d{4}-\d{2}-\d{2})/)||[])[1]||'';
const validPath = p=>typeof p==='string' && p.length<600 && /^(daily|topics)\/[\w\u0080-\uffff/ .()-]+\.md$/i.test(p) && !p.split('/').some(s=>s==='..'||s==='.'||!s);
const validDaily = p=>validPath(p)&&/^daily\/\d{4}\/\d{2}\/\d{4}-\d{2}-\d{2}[^/]*\.md$/i.test(p);
const titleOf = p=>p.split('/').pop().replace(/\.md$/i,'').replace(/^\d{4}-\d{2}-\d{2}-?/,'').replace(/-/g,' ');
const label = (id,lang)=>topicMap.get(id)?.[lang]||(lang==='en'?'Other notes':'其他记录');
const fallbackRules = [
  ['rag',/rag|retriev|bm25|rrf|multi-hop|citation|evidence|检索|引用|证据|长上下文|上下文压缩/i],
  ['inference-tools',/inference|serving|continuous-batching|paged-attention|speculative-decoding|constrained-decoding|structured-output|tool-execution|推理|投机解码|工具调用|结构化输出/i],
  ['post-training',/post-training|fine-tun|lora|preference|dpo|ppo|grpo|rollout|verifiable-reward|后训练|偏好|强化学习|奖励/i],
  ['evaluation-experiments',/evaluation|experiment|bootstrap|ablation|error-analysis|reproducib|checkpoint-evaluation|评估|实验|消融|统计解释|可复现/i],
  ['training-engineering',/train|adamw|backprop|fsdp|zero|distributed|roofline|data-quality|dedup|训练|并行|数据治理|数据流水线/i],
  ['transformer-foundations',/transformer|attention|rope|position|kv-cache|mqa|gqa|logits|sampling|位置编码|采样|解码器/i]
];
function guessTopic(entry,membership) {
  const explicit=[entry.topic,entry.category].find(v=>topicMap.has(v));
  return explicit || membership?.get(entry.path) || fallbackRules.find(([,re])=>re.test(entry.path+' '+entry.title))?.[0] || 'other';
}
function cleanEntries(entries) {
  const unique=new Map();
  for(const e of entries) {
    if(!e||!validDaily(e.path)||typeof e.title!=='string'||e.title.length>600) continue;
    unique.set(e.path,{path:e.path,title:e.title,date:dateOf(e.path),topic:topicMap.has(e.topic)?e.topic:guessTopic(e),sha:/^[a-f0-9]{40}$/.test(e.sha||'')?e.sha:''});
  }
  return [...unique.values()].sort((a,b)=>b.date.localeCompare(a.date)||a.path.localeCompare(b.path));
}
try {
  const saved=JSON.parse(localStorage.getItem(CACHE_KEY)||'null');
  if(saved&&Array.isArray(saved.entries)&&saved.entries.length&&Number.isFinite(saved.time)) {
    const clean=cleanEntries(saved.entries);
    if(clean.length) {index=clean;indexTime=saved.time;syncState='cached';}
  }
  const pref=JSON.parse(localStorage.getItem(PREF_KEY)||'null');
  if(pref) preferences={mode:pref.mode==='topic'?'topic':'date',query:typeof pref.query==='string'?pref.query.slice(0,200):'',topic:topicMap.has(pref.topic)||pref.topic==='other'?pref.topic:'all'};
} catch {}
function rememberPreferences() {
  try {localStorage.setItem(PREF_KEY,JSON.stringify(preferences));} catch {}
}
function notify() {for(const fn of subscribers) fn();}
function element(tag,className,text) {
  const node=document.createElement(tag);
  if(className)node.className=className;
  if(text!==undefined)node.textContent=text;
  return node;
}
function button(text,className='button button-secondary') {
  const node=element('button',className,text);node.type='button';return node;
}
function external(text,url,className='text-link') {
  const node=element('a',className,text);node.href=url;node.target='_blank';node.rel='noopener noreferrer';return node;
}
async function request(url,json=false,signal) {
  const controller=new AbortController();
  const abort=()=>controller.abort();
  if(signal?.aborted)controller.abort();else signal?.addEventListener('abort',abort,{once:true});
  const timer=setTimeout(abort,14000);
  try {
    const response=await fetch(url,{signal:controller.signal,credentials:'omit',cache:'no-cache'});
    if(!response.ok)throw new Error('HTTP '+response.status);
    const content=await response.text();
    if(content.length>8000000)throw new Error('Response too large');
    return json?JSON.parse(content):content;
  } finally {clearTimeout(timer);signal?.removeEventListener('abort',abort);}
}
function topicMembership(markdown,id,allowed) {
  const result=[];let active=false;
  for(const line of markdown.replace(/\r\n?/g,'\n').split('\n')) {
    if(/^##\s+日期笔记\s*$/.test(line)){active=true;continue;}
    if(active&&/^##\s/.test(line))break;
    if(!active)continue;
    for(const match of line.matchAll(/\[([^\]]+)\]\(([^)\s]+)\)/g)) {
      try {
        const url=new URL(match[2],'https://notes.invalid/topics/'+id+'.md');
        if(url.origin!=='https://notes.invalid')continue;
        const path=decodeURIComponent(url.pathname.slice(1));
        if(allowed.has(path))result.push({path,topic:id,title:match[1]});
      }catch{}
    }
  }
  return result;
}
async function syncIndex(force=false) {
  if(syncPromise)return syncPromise;
  if(!force&&indexTime&&Date.now()-indexTime<TTL)return;
  syncState='loading';notify();
  syncPromise=(async()=>{
    try {
      const requests=await Promise.allSettled([
        request('https://api.github.com/repos/'+REPO+'/git/trees/main?recursive=1',true),
        request(RAW+'README.md'),
        ...topics.map(t=>request(RAW+'topics/'+t.id+'.md'))
      ]);
      if(requests[0].status!=='fulfilled')throw new Error('Index unavailable');
      const tree=requests[0].value;
      if(!Array.isArray(tree.tree))throw new Error('Invalid index');
      if(tree.truncated){syncState='partial';return;}
      const files=tree.tree.filter(e=>e.type==='blob'&&/^100(644|755)$/.test(e.mode)&&validDaily(e.path));
      const allowed=new Set(files.map(e=>e.path));
      const names=new Map(index.map(e=>[e.path,e.title]));
      if(requests[1].status==='fulfilled') {
        for(const match of requests[1].value.matchAll(/\[([^\]]+)\]\(([^)\s]+\.md)\)/g)) {
          try {
            const path=decodeURIComponent(match[2].replace(/^\.\//,''));
            if(allowed.has(path))names.set(path,match[1]);
          }catch{}
        }
      }
      const membership=new Map();
      let incompleteTopics=false;
      for(let i=0;i<topics.length;i++) {
        const id=topics[i].id,res=requests[i+2];
        if(res.status==='fulfilled') {
          for(const item of topicMembership(res.value,id,allowed)){
            if(!membership.has(item.path))membership.set(item.path,id);
            names.set(item.path,item.title);
          }
        } else {
          incompleteTopics=true;
          for(const item of index)if(item.topic===id&&allowed.has(item.path)&&!membership.has(item.path))membership.set(item.path,id);
        }
      }
      index=cleanEntries(files.map(e=>{
        const entry={path:e.path,title:names.get(e.path)||titleOf(e.path),sha:e.sha};
        return {...entry,topic:membership.get(e.path)||guessTopic(entry)};
      }));
      indexTime=Date.now();syncState=incompleteTopics?'topics-partial':'ready';
      try{localStorage.setItem(CACHE_KEY,JSON.stringify({time:indexTime,entries:index}));}catch{}
    } catch {syncState='error';}
    finally {syncPromise=null;notify();}
  })();
  return syncPromise;
}
export function subscribeNotes(listener) {
  if(typeof listener!=='function')return ()=>{};
  subscribers.add(listener);
  listener();
  syncIndex();
  return ()=>subscribers.delete(listener);
}
export function getLatestNotes(limit=3) {
  return index.slice(0,Math.max(0,Math.min(20,limit))).map(e=>({...e}));
}
function loadScript(url,test) {
  if(test())return Promise.resolve();
  if(libraries.has(url))return libraries.get(url);
  const promise=new Promise((resolve,reject)=>{
    const script=document.createElement('script');
    const timer=setTimeout(()=>{script.remove();reject(new Error('Library timeout'));},12000);
    script.src=url;script.crossOrigin='anonymous';
    script.onload=()=>{clearTimeout(timer);test()?resolve():reject(new Error('Library unavailable'));};
    script.onerror=()=>{clearTimeout(timer);script.remove();reject(new Error('Library unavailable'));};
    document.head.append(script);
  }).catch(error=>{libraries.delete(url);throw error;});
  libraries.set(url,promise);return promise;
}
async function markdown() {
  try {
    await loadScript('https://cdn.jsdelivr.net/npm/markdown-it@15.0.1/dist/browser/markdown-it.umd.min.js',()=>typeof window.markdownit==='function');
    return window.markdownit({html:false,linkify:false,typographer:false,breaks:false});
  } catch {return null;}
}
async function renderMath(body,current) {
  const text=body.textContent||'';
  if(!body.querySelector('code.language-math')&&!/\$\$|\\\(|\\\[|\$[^$\n]+\$/.test(text))return;
  try {
    if(!document.getElementById('notes-katex-style')) {
      const link=element('link');link.id='notes-katex-style';link.rel='stylesheet';
      link.href='https://cdn.jsdelivr.net/npm/katex@0.16.22/dist/katex.min.css';document.head.append(link);
    }
    await loadScript('https://cdn.jsdelivr.net/npm/katex@0.16.22/dist/katex.min.js',()=>!!window.katex);
    if(!current())return;
    for(const code of body.querySelectorAll('code.language-math')){
      const box=element('div','note-equation');
      window.katex.render(code.textContent,box,{displayMode:true,throwOnError:false,trust:false,strict:'ignore',maxExpand:1000});
      (code.closest('.code-block')||code.parentElement).replaceWith(box);
    }
    // Existing notes also use $ + inline-code + $ around inline equations.
    for(const code of body.querySelectorAll('p code,li code,td code')){
      const before=code.previousSibling,after=code.nextSibling;
      if(before?.nodeType!==3||after?.nodeType!==3||!before.nodeValue.endsWith('$')||!after.nodeValue.startsWith('$'))continue;
      const box=element('span');
      window.katex.render(code.textContent,box,{throwOnError:false,trust:false,strict:'ignore',maxExpand:1000});
      before.nodeValue=before.nodeValue.slice(0,-1);after.nodeValue=after.nodeValue.slice(1);code.replaceWith(box);
    }
    await loadScript('https://cdn.jsdelivr.net/npm/katex@0.16.22/dist/contrib/auto-render.min.js',()=>typeof window.renderMathInElement==='function');
    if(current())window.renderMathInElement(body,{delimiters:[{left:'$$',right:'$$',display:true},{left:'\\[',right:'\\]',display:true},{left:'\\(',right:'\\)',display:false},{left:'$',right:'$',display:false}],throwOnError:false,trust:false,strict:'ignore',maxExpand:1000,ignoredTags:['script','noscript','style','textarea','pre','code','option'],ignoredClasses:['katex','note-equation']});
  } catch {}
}
function translate(lang,zh,en){return lang==='en'?en:zh;}
function normalizedSearch(value){return value.normalize('NFKC').toLocaleLowerCase().trim();}
function renderNoteRow(entry,lang,navigate,savePosition,topicVisible=true) {
  const row=element('a','note-row');row.href=route(entry.path);
  const date=element('time','note-date',entry.date);date.dateTime=entry.date;
  const title=element('span','note-title',entry.title);
  row.append(date,title);
  if(topicVisible)row.append(element('span','note-topic',label(entry.topic,lang)));
  const arrow=element('span','note-arrow','→');arrow.setAttribute('aria-hidden','true');row.append(arrow);
  row.addEventListener('click',event=>{
    if(event.button!==0||event.metaKey||event.ctrlKey||event.shiftKey||event.altKey)return;
    event.preventDefault();event.stopPropagation();savePosition();navigate(route(entry.path));
  });
  return row;
}
export function mountNotes({container,lang='zh',path='',onNavigate,onReady}) {
  lang=lang==='en'?'en':'zh';
  const t=(zh,en)=>translate(lang,zh,en);
  const navigate=typeof onNavigate==='function'?onNavigate:hash=>{location.hash=hash;};
  const controller=new AbortController();
  let disposed=false,readerVersion=0;
  const events={signal:controller.signal};
  const timers=new Set();
  const later=(fn,ms)=>{const id=setTimeout(()=>{timers.delete(id);if(!disposed)fn();},ms);timers.add(id);return id;};
  container.replaceChildren();
  let normalizedPath=path||'';
  if(normalizedPath&&!validPath(normalizedPath)){try{normalizedPath=decodeURIComponent(normalizedPath);}catch{}}
  const header=element('header','page-heading');
  const title=element('h1','',t('学习笔记','Learning notes'));header.append(title);
  const intro=element('p','lede',t('从模型原理到系统实践，记录概念推导、代码验证与实验复盘。按时间追踪思考，也可以沿话题深入阅读。','From model foundations to systems practice: derivations, code, and experiments. Follow the work chronologically or explore a topic in depth.'));
  header.append(intro);
  const languageNote=element('p','notes-language',t('笔记按仓库原文展示，持续同步自 GitHub。','Notes retain their original language and sync from GitHub.'));
  header.append(languageNote);
  container.append(header);

  function cleanup(){
    if(!normalizedPath)listSnapshot.scroll=window.scrollY;
    disposed=true;readerVersion++;controller.abort();
    for(const id of timers)clearTimeout(id);
    subscribers.delete(onIndexUpdate);
  }
  let onIndexUpdate=()=>{};
  if(normalizedPath) {
    header.classList.add('reader-header');
    intro.remove();
    languageNote.remove();
    const back=element('a','reader-back text-link',t('← 返回笔记','← Back to notes'));
    back.href='#learning';back.addEventListener('click',event=>{if(event.button===0&&!event.metaKey&&!event.ctrlKey&&!event.shiftKey&&!event.altKey){event.preventDefault();event.stopPropagation();navigate('#learning');}});
    header.prepend(back);
    const controls=element('div','notes-toolbar');
    const original=external(t('GitHub 原文 ↗','View on GitHub ↗'),GIT+enc(normalizedPath));
    const retry=button(t('重新加载','Retry'));
    controls.append(original);
    const readerStatus=element('p','notes-status');readerStatus.setAttribute('role','status');readerStatus.setAttribute('aria-live','polite');
    const toc=element('details','reader-toc');toc.hidden=true;
    const article=element('article','markdown-body');article.setAttribute('aria-busy','true');
    container.append(controls,readerStatus,toc,article);
    if(!validPath(normalizedPath)){
      title.textContent=t('无法打开这篇笔记','This note cannot be opened');
      readerStatus.textContent=t('笔记地址无效，请返回列表选择。','The note address is invalid. Please choose a note from the list.');
      original.remove();article.setAttribute('aria-busy','false');return cleanup;
    }
    const entry=index.find(e=>e.path===normalizedPath);
    title.textContent=entry?.title||topicMap.get(normalizedPath.replace(/^topics\/|\.md$/g,''))?.[lang]||titleOf(normalizedPath);
    async function showNote(force=false) {
      const own=++readerVersion,current=()=>!disposed&&readerVersion===own;
      const cacheId=normalizedPath+':'+(entry?.sha||'latest');
      readerStatus.textContent=t('正在读取笔记…','Loading note…');
      article.setAttribute('aria-busy','true');article.replaceChildren();toc.replaceChildren();toc.hidden=true;retry.remove();
      try {
        const [content,md]=await Promise.all([
          !force&&noteCache.has(cacheId)?Promise.resolve(noteCache.get(cacheId)):request(RAW+enc(normalizedPath)+(entry?.sha?'?v='+entry.sha:''),false,controller.signal),
          markdown()
        ]);
        if(!current())return;
        if(content.length>700000)throw new Error('Note too large');
        noteCache.set(cacheId,content);
        if(noteCache.size>12)noteCache.delete(noteCache.keys().next().value);
        if(!md){
          const pre=element('pre','note-raw',content);article.append(pre);
          readerStatus.textContent=t('排版组件暂不可用，已显示笔记原文。','Formatting is unavailable; the original note is shown below.');
        }else{
          article.innerHTML=md.render(content);
          const firstHeading=article.querySelector('h1');
          if(firstHeading){title.textContent=firstHeading.textContent;firstHeading.remove();}
          readerStatus.textContent=entry?[entry.date,label(entry.topic,lang)].join(' · '):t('主题概览','Topic overview');
          prepareArticle(article,toc,normalizedPath,lang,navigate,current);
          renderMath(article,current);
        }
      }catch(error){
        if(!current())return;
        readerStatus.textContent=t('暂时无法读取笔记。可以重试，或通过 GitHub 查看原文。','The note could not be loaded. Retry or read the original on GitHub.');
        controls.append(retry);
      }finally{if(current()){article.setAttribute('aria-busy','false');if(typeof onReady==='function')requestAnimationFrame(()=>{if(current())onReady();});}}
    }
    retry.addEventListener('click',()=>showNote(true),events);
    showNote();
    return cleanup;
  }

  const toolbar=element('div','notes-toolbar');
  const segmented=element('div','segmented');segmented.setAttribute('role','group');segmented.setAttribute('aria-label',t('笔记显示方式','Note view'));
  const dateButton=button(t('按日期','By date'),'');
  const topicButton=button(t('按话题','By topic'),'');
  segmented.append(dateButton,topicButton);
  const searchLabel=element('label','search-field');
  const search=element('input');search.type='search';search.placeholder=t('搜索笔记与话题','Search notes and topics');search.setAttribute('aria-label',search.placeholder);search.value=preferences.query;search.maxLength=200;search.autocomplete='off';search.spellcheck=false;
  searchLabel.append(search);
  const select=element('select','topic-filter');select.setAttribute('aria-label',t('筛选话题','Filter by topic'));
  const all=element('option','',t('全部话题','All topics'));all.value='all';select.append(all);
  for(const item of topics){const option=element('option','',item[lang]);option.value=item.id;select.append(option);}
  const other=element('option','',t('其他记录','Other notes'));other.value='other';select.append(other);
  select.value=preferences.topic;
  toolbar.append(segmented,searchLabel,select);
  const actions=element('div','notes-toolbar notes-actions');
  const refresh=button(t('同步更新','Refresh notes'));
  actions.append(external(t('GitHub 仓库 ↗','GitHub repository ↗'),'https://github.com/'+REPO),refresh);
  const status=element('p','notes-status');status.setAttribute('role','status');status.setAttribute('aria-live','polite');
  const results=element('div','notes-results');
  container.append(toolbar,actions,status,results);

  function filteredEntries(){
    const query=normalizedSearch(preferences.query);
    return index.filter(entry=>(preferences.topic==='all'||entry.topic===preferences.topic)&&(!query||normalizedSearch(entry.title+' '+entry.path+' '+label(entry.topic,'zh')+' '+label(entry.topic,'en')).includes(query)));
  }
  function renderStatus(count) {
    refresh.disabled=syncState==='loading';
    let syncLabel='';
    if(syncState==='loading')syncLabel=t('正在同步…','Syncing…');
    else if(syncState==='error')syncLabel=t('暂时无法同步，保留已保存记录','Sync unavailable; saved notes are shown');
    else if(syncState==='partial')syncLabel=t('远端目录不完整，保留已保存记录','The remote index is incomplete; saved notes are shown');
    else if(syncState==='topics-partial')syncLabel=t('笔记已同步，部分话题沿用上次分类','Notes are synced; some topics use saved classifications');
    else if(indexTime)syncLabel=t('最近同步 ','Last synced ')+new Date(indexTime).toLocaleString(lang==='en'?'en-US':'zh-CN',{month:'short',day:'numeric',hour:'2-digit',minute:'2-digit'});
    else syncLabel=t('已保存索引，可同步最新记录','Saved index; refresh for the latest notes');
    const quantity=count===index.length?t(index.length+' 篇笔记',index.length+' notes'):t(count+' / '+index.length+' 篇笔记',count+' of '+index.length+' notes');
    status.textContent=quantity+' · '+syncLabel;
  }
  function groupHeading(text,count,topic){
    const header=element('div','topic-header');
    const heading=element('h2','',text);
    heading.append(element('span','topic-count',' '+count));
    header.append(heading);
    if(topic){
      const link=element('a','text-link',t('主题概览 ↗','Topic overview ↗'));link.href=route('topics/'+topic.id+'.md');
      link.addEventListener('click',event=>{if(event.button===0&&!event.ctrlKey&&!event.metaKey&&!event.shiftKey&&!event.altKey){event.preventDefault();event.stopPropagation();savePosition();navigate(link.getAttribute('href'));}});
      header.append(link);
    }
    return header;
  }
  function savePosition(){listSnapshot.scroll=window.scrollY;}
  function renderResults(reset=false){
    if(disposed)return;
    dateButton.setAttribute('aria-pressed',String(preferences.mode==='date'));
    topicButton.setAttribute('aria-pressed',String(preferences.mode==='topic'));
    dateButton.classList.toggle('active',preferences.mode==='date');
    topicButton.classList.toggle('active',preferences.mode==='topic');
    const entries=filteredEntries();const frag=document.createDocumentFragment();
    if(!entries.length){
      const empty=element('div','notes-empty');empty.append(element('h2','',t('没有找到匹配的笔记','No matching notes')),element('p','',t('试试其他关键词，或重置筛选。','Try another keyword or reset the filters.')));
      const clear=button(t('重置筛选','Reset filters'));
      clear.addEventListener('click',()=>{preferences.query='';preferences.topic='all';search.value='';select.value='all';rememberPreferences();renderResults(true);search.focus();});
      empty.append(clear);frag.append(empty);
    }else if(preferences.mode==='date'){
      const groups=new Map();
      for(const entry of entries){const month=entry.date.slice(0,7);if(!groups.has(month))groups.set(month,[]);groups.get(month).push(entry);}
      for(const [month,items]of groups){
        const section=element('section','topic-section date-section');
        const [year,number]=month.split('-').map(Number);
        const monthTitle=lang==='en'?new Intl.DateTimeFormat('en-US',{year:'numeric',month:'long',timeZone:'UTC'}).format(new Date(Date.UTC(year,number-1,1))):year+' 年 '+number+' 月';
        section.append(groupHeading(monthTitle,items.length));
        for(const item of items)section.append(renderNoteRow(item,lang,navigate,savePosition));
        frag.append(section);
      }
    }else{
      const ordered=[...topics,{id:'other',zh:'其他记录',en:'Other notes'}];
      for(const topic of ordered){
        const items=entries.filter(e=>e.topic===topic.id);
        if(!items.length)continue;
        const section=element('section','topic-section');section.dataset.topic=topic.id;
        section.append(groupHeading(topic[lang],items.length,topic.id==='other'?null:topic));
        if(topic.description)section.append(element('p','topic-description',topic.description[lang]));
        for(const item of items)section.append(renderNoteRow(item,lang,navigate,savePosition,false));
        frag.append(section);
      }
    }
    results.replaceChildren(frag);renderStatus(entries.length);
    if(reset)listSnapshot.scroll=0;
  }
  function setMode(mode){if(preferences.mode===mode)return;preferences.mode=mode;rememberPreferences();renderResults(true);}
  dateButton.addEventListener('click',()=>setMode('date'),events);
  topicButton.addEventListener('click',()=>setMode('topic'),events);
  search.addEventListener('input',()=>{preferences.query=search.value;rememberPreferences();renderResults(true);},events);
  select.addEventListener('change',()=>{preferences.topic=select.value;rememberPreferences();renderResults(true);},events);
  refresh.addEventListener('click',()=>syncIndex(true),events);
  onIndexUpdate=()=>renderResults(false);subscribers.add(onIndexUpdate);
  renderResults();
  later(()=>window.scrollTo({top:listSnapshot.scroll,behavior:'instant'}),0);
  syncIndex();
  return cleanup;
}
function prepareArticle(body,toc,path,lang,navigate,current){
  const t=(zh,en)=>translate(lang,zh,en);
  const used=new Map(),headingList=[];
  for(const h of body.querySelectorAll('h1,h2,h3,h4,h5,h6')){
    const stem=h.textContent.toLowerCase().replace(/[^\p{L}\p{N}\s_-]/gu,'').trim().replace(/\s+/g,'-')||'section';
    const times=used.get(stem)||0;used.set(stem,times+1);
    h.id='note-'+stem+(times?'-'+times:'');
    if(h.matches('h2,h3'))headingList.push(h);
  }
  if(headingList.length>2){
    toc.hidden=false;toc.append(element('summary','',t('本篇目录','On this page')));
    const nav=element('nav');nav.setAttribute('aria-label',t('笔记目录','Note contents'));
    for(const h of headingList){
      const link=element('a',h.tagName==='H3'?'toc-sub':'',h.textContent);link.href='#'+h.id;
      link.addEventListener('click',event=>{event.preventDefault();event.stopPropagation();h.tabIndex=-1;h.focus({preventScroll:true});h.scrollIntoView({block:'start',behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});});
      nav.append(link);
    }
    toc.append(nav);
  }
  const base=RAW+enc(path);
  for(const a of body.querySelectorAll('a')){
    const value=a.getAttribute('href');if(!value)continue;
    if(value.startsWith('#')){
      a.addEventListener('click',event=>{
        event.preventDefault();event.stopPropagation();
        try{
          const slug=decodeURIComponent(value.slice(1)).replace(/^note-/,'');
          const target=[...body.querySelectorAll('[id]')].find(node=>node.id==='note-'+slug);
          if(target){target.tabIndex=-1;target.focus({preventScroll:true});target.scrollIntoView({block:'start'});}
        }catch{}
      });
      continue;
    }
    try{
      const url=new URL(value,base);
      if(!['https:','http:','mailto:'].includes(url.protocol)){a.removeAttribute('href');continue;}
      let target='';
      if(url.origin==='https://raw.githubusercontent.com'&&url.pathname.startsWith('/'+REPO+'/main/'))target=decodeURIComponent(url.pathname.slice(('/'+REPO+'/main/').length));
      else if(url.origin==='https://github.com'&&url.pathname.startsWith('/'+REPO+'/blob/main/'))target=decodeURIComponent(url.pathname.slice(('/'+REPO+'/blob/main/').length));
      if(target&&validPath(target)){
        a.href=route(target);
        a.addEventListener('click',event=>{if(event.button!==0||event.ctrlKey||event.metaKey||event.shiftKey||event.altKey)return;event.preventDefault();event.stopPropagation();navigate(a.getAttribute('href'));});
      }else{
        a.href=target?GIT+enc(target)+url.hash:url.href;a.target='_blank';a.rel='noopener noreferrer';
      }
    }catch{a.removeAttribute('href');}
  }
  for(const img of body.querySelectorAll('img')){
    try{
      const url=new URL(img.getAttribute('src'),base);
      if(!['http:','https:'].includes(url.protocol)){img.removeAttribute('src');continue;}
      img.src=url.href;img.loading='lazy';img.decoding='async';
    }catch{img.removeAttribute('src');}
  }
  for(const table of body.querySelectorAll('table')){
    const wrapper=element('div','table-scroll');wrapper.tabIndex=0;wrapper.setAttribute('role','region');wrapper.setAttribute('aria-label',t('可横向滚动的表格','Scrollable table'));table.replaceWith(wrapper);wrapper.append(table);
  }
  for(const pre of body.querySelectorAll('pre')){
    const code=pre.querySelector('code');
    if(!code||code.classList.contains('language-math'))continue;
    const wrapper=element('div','code-block'),copy=button(t('复制','Copy'),'copy-code');
    copy.setAttribute('aria-label',t('复制代码','Copy code'));
    pre.replaceWith(wrapper);wrapper.append(copy,pre);
    copy.addEventListener('click',async()=>{
      try{
        if(!navigator.clipboard?.writeText)throw new Error('Clipboard unavailable');
        await navigator.clipboard.writeText(code.textContent);
        if(current())copy.textContent=t('已复制','Copied');
      }catch{if(current())copy.textContent=t('请选中代码复制','Select code to copy');}
    });
  }
}
