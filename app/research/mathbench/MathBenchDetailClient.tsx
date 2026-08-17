"use client";

import { useEffect, useState } from "react";

type Locale = "en" | "zh";

const content = {
  en: {
    back: "Back to publication",
    switchAria: "Switch to Chinese",
    kicker: "Publication · ACL Findings 2024",
    title: "MathBench: Evaluating the Theory and Application Proficiency of LLMs with a Hierarchical Mathematics Benchmark",
    authors: "Hongwei Liu, Zilong Zheng, Yuxuan Qiao, Haodong Duan, Zhiwei Fei, Fengzhe Zhou, Wenwei Zhang, Songyang Zhang, Dahua Lin, Kai Chen",
    intro: "A bilingual benchmark designed to reveal not only whether a language model can solve mathematics, but what level of theory it understands and whether it can apply that knowledge.",
    stats: [["3,709", "bilingual questions"], ["5", "difficulty stages"], ["30+", "models evaluated"], ["6884–6915", "ACL pages"]],
    problemTitle: "Why another mathematics benchmark?",
    problem: "Many earlier benchmarks compress mathematical ability into a single score or concentrate on one difficulty band. That makes it hard to distinguish memorized patterns from genuine conceptual understanding, or to see where a model’s ability begins to break down. MathBench was designed as a diagnostic benchmark rather than another leaderboard number.",
    designTitle: "A benchmark with four diagnostic axes",
    pillars: [
      ["Five stages", "Arithmetic, primary, middle, high-school and college mathematics create an interpretable difficulty gradient."],
      ["Theory + application", "Each stage separates foundational knowledge from the ability to use that knowledge in practical problems."],
      ["Bilingual evaluation", "Chinese and English variants expose language-dependent performance differences instead of hiding them in an average."],
      ["Circular evaluation", "Multiple-choice options are rotated across repeated trials; a question counts as correct only when every rotation is answered correctly."],
    ],
    contributionTitle: "My contribution",
    contributionIntro: "I owned the path from raw-data discovery to a labeled, runnable benchmark: sourcing, cleaning, taxonomy design and evaluation delivery.",
    contributions: [
      "Sourced heterogeneous mathematics data from AMC competitions, Gaokao and postgraduate entrance examinations, plus K–12 textbook theory, spanning both conceptual knowledge and worked problems.",
      "Cleaned, deduplicated and normalized the collected material, standardizing question text, answer choices, solutions and bilingual formatting for reliable evaluation.",
      "Designed and applied a structured annotation taxonomy across educational stage, theory or application, subject area, topic, language and source, then quality-checked labels and samples.",
      "Integrated the curated benchmark into OpenCompass, completed dataset configuration, inference and result aggregation, and systematically evaluated 30+ open- and closed-source models.",
    ],
    findingsTitle: "What the benchmark revealed",
    findingsIntro: "Two core views show why the curated data and labels matter: they turn a model score into an interpretable capability profile.",
    captions: [
      "Average application performance drops sharply as questions move from primary to middle, high-school and college levels.",
      "Chinese and English scores can diverge substantially for the same model, motivating explicit bilingual reporting.",
    ],
    takeaway: "The main takeaway",
    takeawayText: "Performance falls sharply beyond primary mathematics, while Chinese and English gaps vary by model. MathBench makes those differences traceable through a cleaned, labeled and reproducible evaluation pipeline—not just a single leaderboard score.",
    linksTitle: "Read, reproduce, compare",
    linksText: "The paper, dataset and OpenCompass configuration are publicly available for reproducible evaluation.",
  },
  zh: {
    back: "返回论文模块",
    switchAria: "切换到英文",
    kicker: "论文发表 · ACL Findings 2024",
    title: "MathBench：基于分层数学基准评估大语言模型的理论理解与应用能力",
    authors: "Hongwei Liu, Zilong Zheng, Yuxuan Qiao, Haodong Duan, Zhiwei Fei, Fengzhe Zhou, Wenwei Zhang, Songyang Zhang, Dahua Lin, Kai Chen",
    intro: "一个双语数学评测基准，不只回答模型“能不能做对”，还要解释它理解到什么层级，以及能否把理论知识真正用于问题求解。",
    stats: [["3,709", "双语题目"], ["5", "难度阶段"], ["30+", "评测模型"], ["6884–6915", "ACL 页码"]],
    problemTitle: "为什么还需要一个数学基准？",
    problem: "许多既有评测把数学能力压缩成单一分数，或只覆盖某一难度区间。这很难区分模型是在复现熟悉模式，还是确实掌握了概念，也无法清楚定位能力从哪个阶段开始失效。因此，MathBench 的目标不是再制造一个排行榜数字，而是提供具有诊断意义的能力剖面。",
    designTitle: "四个诊断维度",
    pillars: [
      ["五级难度", "从基础运算、小学、初中、高中到大学数学，形成可解释的难度梯度。"],
      ["理论 + 应用", "每个阶段区分基础理论知识与将知识用于实际问题求解的能力。"],
      ["双语评测", "分别报告中文与英文表现，显式暴露同一模型的语言依赖差异。"],
      ["循环评测", "多次轮换选择题选项顺序，只有每次都回答正确，题目才被判定为正确。"],
    ],
    contributionTitle: "我的贡献",
    contributionIntro: "我完整参与了从原始数据搜集到可运行评测基准的落地过程：数据搜集、清洗、标签体系设计与评测交付。",
    contributions: [
      "搜集 AMC 数学竞赛、高考、研究生入学考试题目及 K–12 教科书理论知识等异构数据，覆盖概念知识与应用型问题。",
      "对大规模原始数据进行清洗、去重与格式规范，统一题干、选项、答案、解析和中英文表达，使其能够稳定进入评测流程。",
      "建立并执行多层标签体系，按教育阶段、理论或应用、学科领域、知识主题、语言与数据来源完成标注，并抽检标签和样本质量。",
      "将整理后的 MathBench 接入 OpenCompass，完成数据配置、推理与结果汇总，并对 30+ 个开源和闭源代表模型开展系统评测。",
    ],
    findingsTitle: "基准揭示了什么",
    findingsIntro: "两个核心视角体现了数据清洗与标签体系的价值：将模型分数转化为可解释的能力画像。",
    captions: [
      "随着题目从小学进入初中、高中和大学阶段，模型的平均应用能力明显下降。",
      "同一模型的中文与英文成绩可能存在明显差异，因此需要显式报告双语表现。",
    ],
    takeaway: "核心结论",
    takeawayText: "模型表现从小学阶段之后明显下降，且中英文差异因模型而异。MathBench 通过经过清洗、标注且可复现的评测流程，使这些差异可以被追踪和解释，而不只是给出一个排行榜分数。",
    linksTitle: "阅读、复现与比较",
    linksText: "论文、数据集与 OpenCompass 评测配置均已公开，可用于复现实验。",
  },
};

export default function MathBenchDetailClient() {
  const [locale, setLocale] = useState<Locale>("en");
  const t = content[locale];

  useEffect(() => {
    if (new URLSearchParams(window.location.search).get("lang") === "zh") setLocale("zh");
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale === "en" ? "en" : "zh-CN";
  }, [locale]);

  function toggleLocale() {
    const nextLocale = locale === "en" ? "zh" : "en";
    setLocale(nextLocale);
    const url = new URL(window.location.href);
    if (nextLocale === "zh") url.searchParams.set("lang", "zh");
    else url.searchParams.delete("lang");
    window.history.replaceState({}, "", url);
  }

  return (
    <main className="research-detail-page">
      <header className="detail-header">
        <a className="wordmark" href="/" aria-label="Zilong Zheng home">ZZ<span> / 26</span></a>
        <a className="detail-back" href={`/${locale === "zh" ? "?lang=zh" : ""}#publication`}><span className="detail-back-icon" aria-hidden="true">←</span><span className="detail-back-label">{t.back}</span></a>
        <button className="language-toggle" type="button" onClick={toggleLocale} aria-label={t.switchAria}>{locale === "en" ? "中文" : "EN"}</button>
      </header>

      <article>
        <section className="research-hero">
          <div className="research-hero-copy">
            <p className="detail-index">{locale === "en" ? "RESEARCH" : "论文"} 01 <span>2024</span></p>
            <p className="project-type">{t.kicker}</p>
            <h1>{t.title}</h1>
            <p className="research-authors">{t.authors}</p>
            <p className="detail-summary">{t.intro}</p>
            <div className="research-actions"><a href="https://aclanthology.org/2024.findings-acl.411/" target="_blank" rel="noreferrer">ACL Anthology ↗</a><a href="https://github.com/open-compass/MathBench" target="_blank" rel="noreferrer">{locale === "en" ? "Code & dataset" : "代码与数据"} ↗</a></div>
          </div>
          <figure className="research-cover"><img src="/academic/mathbench-structure.png" alt="MathBench stages, theory questions and application questions" /><figcaption>{locale === "en" ? "MathBench spans educational stages, theory and application, with bilingual questions." : "MathBench 同时覆盖教育阶段、理论与应用，并提供双语题目。"}</figcaption></figure>
        </section>

        <section className="research-stats">{t.stats.map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}</section>

        <section className="research-problem">
          <p className="detail-section-label">01 / {locale === "en" ? "Research question" : "研究问题"}</p>
          <div><h2>{t.problemTitle}</h2><p>{t.problem}</p></div>
        </section>

        <section className="research-design">
          <div className="research-section-heading"><p className="detail-section-label">02 / {locale === "en" ? "Benchmark design" : "基准设计"}</p><h2>{t.designTitle}</h2></div>
          <div className="research-pillars">{t.pillars.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
        </section>

        <section className="research-contribution">
          <div><p className="detail-section-label">03 / {t.contributionTitle}</p><h2>{t.contributionTitle}</h2><p>{t.contributionIntro}</p><figure className="research-taxonomy-figure"><img src="/academic/mathbench-taxonomy.png" alt={locale === "en" ? "MathBench hierarchical annotation taxonomy" : "MathBench 分层标签体系"} /><figcaption>{locale === "en" ? "The annotation taxonomy connects educational stage, subject area and topic." : "标签体系连接教育阶段、学科领域与知识主题。"}</figcaption></figure></div>
          <ol>{t.contributions.map((item, index) => <li key={item}><span>0{index + 1}</span><p>{item}</p></li>)}</ol>
        </section>

        <section className="research-findings">
          <div className="research-findings-heading"><div><p className="detail-section-label">04 / {locale === "en" ? "Evidence" : "实验发现"}</p><h2>{t.findingsTitle}</h2></div><p>{t.findingsIntro}</p></div>
          <div className="research-chart-grid">
            {[
              ["/academic/mathbench-stage-results.png", "Average model performance across five MathBench difficulty stages"],
              ["/academic/mathbench-bilingual.png", "Chinese and English MathBench performance by model"],
            ].map(([src, alt], index) => <figure key={src}><div><img src={src} alt={alt} /></div><figcaption><span>0{index + 1}</span>{t.captions[index]}</figcaption></figure>)}
          </div>
          <div className="research-takeaway"><span>{t.takeaway}</span><p>{t.takeawayText}</p></div>
        </section>

        <section className="research-links-panel"><div><p className="detail-section-label">05 / {locale === "en" ? "Resources" : "公开资源"}</p><h2>{t.linksTitle}</h2><p>{t.linksText}</p></div><div><a href="https://aclanthology.org/2024.findings-acl.411.pdf" target="_blank" rel="noreferrer">{locale === "en" ? "Paper PDF" : "论文 PDF"} ↗</a><a href="https://github.com/open-compass/MathBench" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://open-compass.github.io/MathBench/" target="_blank" rel="noreferrer">{locale === "en" ? "Leaderboard" : "排行榜"} ↗</a></div></section>
      </article>
    </main>
  );
}
