"use client";

import { useEffect, useState } from "react";
import { projectRecords } from "./project-data";

type Locale = "en" | "zh";

const content = {
  en: {
    nav: ["Experience", "Publication", "Projects", "Contact"],
    switchLabel: "中文",
    switchAria: "Switch to Chinese",
    eyebrow: "Robotics · World Models · Multimodal AI",
    headlineA: "I build intelligent systems that",
    headlineB: "perceive, reason",
    headlineC: "and move",
    intro: "I’m Zilong (Francis) Zheng, a Robotics MSc candidate at TU Delft working across world models, embodied intelligence and real-world robot deployment.",
    workCta: "Explore selected work",
    talkCta: "Let’s talk",
    location: "Based in Beijing, CN",
    availability: "Open to embodied AI internships",
    nowKicker: "Now / Currently",
    nowTitle: "What I’m working on",
    nowUpdated: "Updated Aug 2026",
    nowItems: [
      ["V-JEPA 2", "Reproducing and evaluating V-JEPA 2 on IntPhys 2 and Diving to probe temporal prediction, latent dynamics and physical consistency."],
      ["PH-Dreamer", "Reproducing PH-Dreamer and testing Hamiltonian structure and physics priors for video latent-state dynamics."],
      ["Open to", "World-model and embodied-AI internships or research collaborations focused on robot learning and physically grounded video models."],
    ],
    workKicker: "Engineering portfolio",
    workTitle: "Projects",
    projects: [
      {
        slug: "greenhouse-robot",
        cardImage: "/projects/greenhouse-robot-square.jpg",
        number: "01",
        period: "Mar — Jun 2026",
        type: "Autonomous robotics · ROS2",
        title: "Greenhouse mapping, navigation & Sim2Real deployment",
        summary: "An eight-week delivery from system design and ROS2 integration to simulation validation and supervised deployment on a MIRTE Master robot.",
        image: "/projects/ros2-architecture.png",
        imageAlt: "ROS2 greenhouse robot software architecture",
        bullets: [
          "Owned mapping and localization: scan filtering, SLAM Toolbox and reusable occupancy maps.",
          "Connected row extraction, Nav2 mission execution and plant-perception outputs in one ROS2 stack.",
          "Validated collision-free missions in Gazebo and deployed a supervised workflow to MIRTE hardware.",
        ],
        stats: [["8 weeks", "design to field test"], ["6", "validation scenarios"], ["Gazebo → MIRTE", "deployment path"]],
        stack: ["ROS2", "Nav2", "SLAM Toolbox", "Gazebo", "YOLO", "React"],
        secondary: "/projects/greenhouse-perception.png",
        secondaryAlt: "Tulip and pest perception results",
      },
      {
        slug: "hierarchical-motion-planning",
        cardImage: "/projects/motion-environment.png",
        number: "03",
        period: "Nov 2025 — Jan 2026",
        type: "Planning & control · MuJoCo / JAX",
        title: "Hierarchical motion planning for a 10-DoF mobile manipulator",
        summary: "A global-local planning system pairing Bi-Informed RRT* with GPU-accelerated MPPI for smooth, dynamically feasible motion.",
        image: "/projects/motion-path.png",
        imageAlt: "Bi-Informed RRT star search trees and path",
        bullets: [
          "Implemented feasible global path search in cluttered bartender-robot scenes.",
          "Designed an MPPI cost combining target tracking, control effort, dynamics and collision penalties.",
          "Benchmarked RRT* variants and tuned the closed-loop controller in MuJoCo simulation.",
        ],
        stats: [["10-DoF", "robot state"], ["RRT* + MPPI", "hierarchy"], ["GPU", "sampling control"]],
        stack: ["MuJoCo", "JAX", "MPPI", "Bi-Informed RRT*", "Python"],
        secondary: "/projects/motion-metrics.png",
        secondaryAlt: "RRT star planning success and cost benchmark",
      },
      {
        slug: "camera-radar-bev-fusion",
        cardImage: "/projects/view-of-delft-car.jpg",
        number: "02",
        period: "Feb — Apr 2026",
        type: "Radar-camera perception · LiDAR-free 3D detection",
        title: "Radar-guided camera BEV fusion for robust 3D detection",
        summary: "Three ego-motion-aligned radar sweeps guide monocular features into BEV, producing a 34.8% relative mAP uplift over the radar baseline.",
        image: "/projects/bev-system-teaser.png",
        imageAlt: "TU Delft research vehicle used for the View-of-Delft perception task",
        bullets: [
          "Converted three aligned radar sweeps into an 11-D temporal point representation.",
          "Lifted ResNet-50 features with sparse radar depth hints and 8-bin depth confidence.",
          "Delivered checkpoint-consistent three-class inference with a 34.8% relative BEV mAP uplift.",
        ],
        stats: [["+34.8%", "relative BEV mAP"], ["3 × 11-D", "temporal radar"], ["8 bins", "depth lift"]],
        stack: ["PyTorch", "CenterPoint", "ResNet-50", "Radar", "View-of-Delft"],
        secondary: "/projects/bev-technical-architecture.png",
        secondaryAlt: "Radar-guided camera BEV fusion technical architecture",
      },
    ],
    experienceKicker: "Experience",
    roles: [
      { date: "Jul 2026 — Present", org: "Sunrising Lab", role: "World Model Algorithm Intern", text: "Reproducing and evaluating V-JEPA 2 on IntPhys 2 and Diving; studying latent dynamics, temporal prediction and physically consistent representation. Reproducing PH-Dreamer and exploring Hamiltonian structure and physics priors for video latent-state dynamics." },
      { date: "Sep 2024 — Feb 2025", org: "Siemens China · Digital Industries", role: "Smart Manufacturing Intern", text: "Built a client carbon-footprint estimation model from multi-source business-travel data, covering data cleaning, rule modelling and visual deployment." },
      { date: "Dec 2023 — Aug 2024", org: "Shanghai AI Laboratory", role: "Large Language Model Algorithm Intern", text: "Designed the MathBench evaluation framework, built its OpenCompass pipeline and benchmarked 30+ leading models. Diagnosed an InternLM2 Russian tokenizer anomaly through cross-language compression analysis and supported the validated fix." },
      { date: "Jul — Oct 2022", org: "Institute of Automation, CAS", role: "Vision Model Algorithm Intern", text: "Reproduced core ViT and Swin Transformer modules, then migrated and verified an UperNet semantic segmentation stack from PyTorch to MindSpore." },
    ],
    educationLabel: "Education",
    education: [
      ["Delft University of Technology", "MSc Robotics", "2025 — 2027", "World models · Multimodal perception"],
      ["Beihang University", "BSc Automation", "2019 — 2024", "GPA 89.61 / 100 · Rank 36 / 242"],
    ],
    researchKicker: "Research & publication",
    researchTitle: "Learning representations that respect the physical world",
    researchText: "My current interests sit at the intersection of action-conditioned video models, latent physical representations and robot learning — with a bias toward ideas that survive contact with real systems.",
    paperVenue: "ACL Findings · 2024",
    paperTitle: "MathBench: Evaluating the Theory and Application Proficiency of LLMs with a Hierarchical Mathematics Benchmark",
    paperAuthors: "H. Liu, Z. Zheng et al.",
    paperExpand: "Expand case study",
    paperCollapse: "Collapse case study",
    paperDetailsKicker: "Case study",
    paperDetailsTitle: "From raw mathematics data to a reproducible benchmark",
    paperDetailsIntro: "MathBench was built as a diagnostic benchmark rather than another leaderboard number. It separates theoretical knowledge from application ability across educational stages and languages, making model weaknesses traceable.",
    paperAxesTitle: "Benchmark design",
    paperAxes: [
      ["Five stages", "Arithmetic, primary, middle, high-school and college mathematics."],
      ["Theory + application", "Foundational knowledge is evaluated separately from practical problem solving."],
      ["Bilingual evaluation", "Chinese and English variants reveal language-dependent performance."],
      ["Circular evaluation", "Answer choices are rotated to reduce position bias and lucky guesses."],
    ],
    paperContributionTitle: "My contribution",
    paperContributionIntro: "I delivered an end-to-end path from heterogeneous raw data to large-scale, interpretable model evaluation. The concrete outcomes were:",
    paperContributions: [
      "Established a 17-dataset MathBench pool spanning five educational stages, MCQ and open-ended QA. It combines self-collected GSM-X-CN/Plus, Hungarian-Math-MCQ, AMC-8 & 12, SAT, Zhongkao, Gaokao, Kaoyan and stage-specific Theory-Knowledge with open-source CEVAL-Math, MMLU-College-Math, Math401, SciBench and Arithmetic-HG.",
      "Converted heterogeneous raw material into evaluation-ready data by cleaning, deduplicating and standardizing question text, answer choices, solutions and bilingual formatting.",
      "Created a traceable multi-level taxonomy for all 3,709 questions, enabling fine-grained diagnosis by educational stage, theory or application, subject area, topic, language and source, with sample-level quality checks.",
      "Delivered a reproducible OpenCompass evaluation pipeline from dataset configuration through inference and result aggregation, supporting systematic comparison of 30+ open- and closed-source models.",
    ],
    paperFindingsTitle: "Core findings",
    paperFindingsIntro: "Across difficulty, robustness, language, error types and interventions, MathBench shows where mathematical competence actually breaks down.",
    paperCaptions: [
      "A clear difficulty cliff appears after primary mathematics; application ability degrades faster than theoretical knowledge.",
      "Language is a genuine capability axis: GPT-4 scores 65.2 in Chinese and 69.0 in English, while most models show wider gaps.",
    ],
    paperFindingPoints: [
      "Across model families, performance drops from primary to middle school and beyond; applied problem solving deteriorates more sharply than theoretical recall.",
      "CircularEval exposes answer-position sensitivity: the gap from one-pass accuracy narrows only as models become stronger and more stable.",
      "Error analysis attributes 49.5% of failures to concept misunderstandings and 33.4% to flawed reasoning, making knowledge and reasoning the dominant bottlenecks.",
      "Knowledge-infused CoT raises accuracy from 26.6% to 33.4%; code tools strongly help arithmetic but add little on theory or college-level application.",
    ],
    paperTakeaway: "A single average score can hide fragile application, language and answer-order sensitivity. MathBench turns those failure modes into visible, actionable evidence.",
    skillTitle: "Working toolkit",
    skillGroups: [
      ["Learning", "PyTorch · NumPy · Scikit-Learn · Vision Transformers"],
      ["Robotics", "ROS2 · Nav2 · Gazebo · MuJoCo · PCL · OpenCV"],
      ["Languages", "Python · C / C++ · MATLAB"],
      ["Systems", "Linux · Git · CUDA · JAX"],
    ],
    contactKicker: "Contact",
    contactTitle: "Let’s build robots that understand what happens next",
    emailCta: "Start a conversation",
    downloadResume: "Download résumé",
    footer: "Designed from research notes, code and real-world tests.",
  },
  zh: {
    nav: ["经历", "论文", "项目", "联系"],
    switchLabel: "EN",
    switchAria: "切换到英文",
    eyebrow: "机器人学 · 世界模型 · 多模态智能",
    headlineA: "我构建能够",
    headlineB: "感知、推理",
    headlineC: "并行动的智能系统",
    intro: "我是郑子龙（Francis Zheng），代尔夫特理工大学机器人学硕士研究生，专注于世界模型、具身智能与机器人真机部署。",
    workCta: "查看代表项目",
    talkCta: "联系我",
    location: "现居北京",
    availability: "正在寻找具身智能实习机会",
    nowKicker: "当前 / 正在进行",
    nowTitle: "我目前在做什么",
    nowUpdated: "更新于 2026 年 8 月",
    nowItems: [
      ["V-JEPA 2", "在 IntPhys 2 与 Diving 数据集上复现并评测 V-JEPA 2，重点分析时序预测、潜空间动力学与物理一致性表征。"],
      ["PH-Dreamer", "复现 PH-Dreamer，并验证哈密顿结构与物理先验对视频潜空间状态建模和动力学预测的作用。"],
      ["机会方向", "正在寻找世界模型与具身智能方向的实习或研究合作，重点关注机器人学习和具有物理约束的视频模型。"],
    ],
    workKicker: "工程实践",
    workTitle: "代表项目",
    projects: [
      { slug: "greenhouse-robot", cardImage: "/projects/greenhouse-robot-square.jpg", number: "01", period: "2026.03 — 2026.06", type: "自主机器人 · ROS2", title: "温室自主建图、导航与 Sim2Real 真机部署", summary: "在八周内完成从系统设计、ROS2 集成、仿真验证到 MIRTE 真机监督部署的完整交付。", image: "/projects/ros2-architecture.png", imageAlt: "ROS2 温室机器人软件架构", bullets: ["负责建图定位：扫描过滤、SLAM Toolbox 配置与可复用栅格地图。", "将植物行提取、Nav2 任务执行和植物感知结果接入同一 ROS2 系统。", "在 Gazebo 验证无碰撞任务，并将可监督流程部署到 MIRTE 真机。"], stats: [["8 周", "设计到现场验证"], ["6", "验证场景"], ["Gazebo → MIRTE", "部署路径"]], stack: ["ROS2", "Nav2", "SLAM Toolbox", "Gazebo", "YOLO", "React"], secondary: "/projects/greenhouse-perception.png", secondaryAlt: "郁金香和害虫检测结果" },
      { slug: "hierarchical-motion-planning", cardImage: "/projects/motion-environment.png", number: "03", period: "2025.11 — 2026.01", type: "规划与控制 · MuJoCo / JAX", title: "10-DoF 移动操作机器人的分层运动规划", summary: "结合 Bi-Informed RRT* 与 GPU 加速 MPPI，实现连续、平滑且满足动力学约束的无碰撞运动。", image: "/projects/motion-path.png", imageAlt: "Bi-Informed RRT 星搜索树与路径", bullets: ["在复杂酒吧机器人场景中实现全局可行路径搜索。", "设计融合目标跟踪、控制代价、动力学和碰撞惩罚的 MPPI 代价函数。", "对比 RRT* 变体，并在 MuJoCo 中完成闭环控制调参与验证。"], stats: [["10-DoF", "机器人状态"], ["RRT* + MPPI", "分层架构"], ["GPU", "采样控制"]], stack: ["MuJoCo", "JAX", "MPPI", "Bi-Informed RRT*", "Python"], secondary: "/projects/motion-metrics.png", secondaryAlt: "RRT 星规划成功率与路径代价对比" },
      { slug: "camera-radar-bev-fusion", cardImage: "/projects/view-of-delft-car.jpg", number: "02", period: "2026.02 — 2026.04", type: "雷达–相机感知 · 无 LiDAR 3D 检测", title: "雷达引导的相机 BEV 融合 3D 目标检测", summary: "三帧自车运动对齐雷达引导单目视觉特征升维到 BEV，相对 Radar-only 基线实现 34.8% 的 BEV mAP 提升。", image: "/projects/bev-system-teaser.png", imageAlt: "用于 View-of-Delft 感知任务的代尔夫特理工研究车辆", bullets: ["将三帧对齐雷达构建为 11 维时序点表示。", "使用稀疏雷达深度提示与 8 档深度置信度升维 ResNet-50 特征。", "交付配置一致的三类检测推理链路，并实现 34.8% 的 BEV mAP 相对提升。"], stats: [["+34.8%", "BEV mAP 相对提升"], ["3 × 11 维", "时序雷达"], ["8 档", "深度升维"]], stack: ["PyTorch", "CenterPoint", "ResNet-50", "毫米波雷达", "View-of-Delft"], secondary: "/projects/bev-technical-architecture.png", secondaryAlt: "雷达引导相机 BEV 融合技术架构" },
    ],
    experienceKicker: "实习经历",
    roles: [
      { date: "2026.07 — 至今", org: "光象（北京）科技有限公司", role: "世界模型算法实习生", text: "复现并评测 V-JEPA 2 在 IntPhys 2、Diving 数据集上的表现，分析潜空间动力学、时序预测和物理一致性表征；复现 PH-Dreamer，并探索将哈密顿结构与物理先验引入视频潜空间状态建模。" },
      { date: "2024.09 — 2025.02", org: "西门子（中国）· 数字化工业集团", role: "智能制造实习生", text: "基于多源差旅数据构建客户碳足迹计算模型，完成数据清洗、规则建模与可视化部署。" },
      { date: "2023.12 — 2024.08", org: "上海人工智能实验室 · 大模型中心", role: "大语言模型算法实习生", text: "设计 MathBench 数学推理评测体系，基于 OpenCompass 搭建评测流水线并完成 30+ 主流模型对比；通过跨语言压缩率分析定位 InternLM2 俄语 tokenizer 异常，并协助完成修复验证。" },
      { date: "2022.07 — 2022.10", org: "中科院自动化所 · 视觉计算组", role: "视觉模型算法实习生", text: "复现 ViT 与 Swin Transformer 核心模块，并完成 UperNet 语义分割框架从 PyTorch 到 MindSpore 的迁移验证。" },
    ],
    educationLabel: "教育背景",
    education: [["代尔夫特理工大学", "机器人学硕士", "2025 — 2027", "世界模型 · 多模态感知"], ["北京航空航天大学", "自动化学士", "2019 — 2024", "GPA 89.61 / 100 · 排名 36 / 242"]],
    researchKicker: "研究与论文",
    researchTitle: "让学习到的表征尊重真实世界的物理规律",
    researchText: "我目前关注 Action-Conditioned 视频模型、潜空间物理表征与机器人学习的交叉方向，并偏爱那些最终能够经受真实系统检验的研究思路。",
    paperVenue: "ACL Findings · 2024",
    paperTitle: "MathBench：基于分层数学基准评估大语言模型的理论与应用能力",
    paperAuthors: "H. Liu, Z. Zheng et al.",
    paperExpand: "展开论文详情",
    paperCollapse: "收起论文详情",
    paperDetailsKicker: "论文详情",
    paperDetailsTitle: "从原始数学数据到可复现的评测基准",
    paperDetailsIntro: "MathBench 的目标不是再提供一个排行榜数字，而是构建具有诊断意义的数学能力基准。它按教育阶段和语言区分理论知识与应用能力，使模型的能力短板可以被定位和解释。",
    paperAxesTitle: "基准设计",
    paperAxes: [
      ["五级难度", "覆盖基础运算、小学、初中、高中与大学数学。"],
      ["理论 + 应用", "分别评估基础理论知识与实际问题求解能力。"],
      ["双语评测", "通过中文与英文版本呈现模型的语言依赖差异。"],
      ["循环评测", "轮换选择题选项，减少位置偏差与偶然猜测。"],
    ],
    paperContributionTitle: "我的贡献",
    paperContributionIntro: "我交付了从异构原始数据到大规模、可解释模型评测的完整链路，最终形成四项明确成果：",
    paperContributions: [
      "形成由 17 个数据集组成的 MathBench 数据池，覆盖五级教育阶段、选择题与开放式问答；整合自建的 GSM-X-CN/Plus、Hungarian-Math-MCQ、AMC-8 & 12、SAT、中考、高考、考研及各阶段 Theory-Knowledge，并纳入 CEVAL-Math、MMLU-College-Math、Math401、SciBench 与 Arithmetic-HG 等开源数据。",
      "将异构原始材料转化为可直接执行评测的标准化数据，通过清洗、去重与格式统一，规范题干、选项、答案、解析及中英文表达。",
      "为全部 3,709 道题建立可追溯的多层标签体系，使结果能够按教育阶段、理论或应用、学科领域、知识主题、语言与来源进行细粒度诊断，并通过抽检保证标签质量。",
      "交付可复现的 OpenCompass 端到端评测流水线，贯通数据配置、模型推理与结果汇总，支持对 30+ 个开源和闭源代表模型进行系统比较。",
    ],
    paperFindingsTitle: "核心结论",
    paperFindingsIntro: "MathBench 从难度、稳定性、语言、错误类型与干预效果等维度，揭示数学能力究竟在何处失效。",
    paperCaptions: [
      "小学阶段之后出现明显的难度断层，应用能力比理论知识衰减得更快。",
      "语言本身就是一条能力轴：GPT-4 中文得分 65.2、英文得分 69.0，而多数模型的双语差距更大。",
    ],
    paperFindingPoints: [
      "不同模型家族呈现相似趋势：进入初中及以上阶段后表现明显下降，应用问题求解比理论记忆退化得更快。",
      "CircularEval 揭示模型对选项顺序的敏感性；只有能力更强、输出更稳定的模型，其循环评测与单次准确率差距才明显缩小。",
      "错误分析显示，49.5% 的失败来自概念误解，33.4% 来自错误推理，说明知识掌握与推理路径是主要瓶颈。",
      "知识注入结合 CoT 将准确率从 26.6% 提升至 33.4%；代码工具显著改善基础运算，却难以提升理论题和大学阶段应用题。",
    ],
    paperTakeaway: "单一平均分会掩盖应用能力、语言表现与答案顺序敏感性。MathBench 将这些失效模式转化为可定位、可改进的证据。",
    skillTitle: "技术栈",
    skillGroups: [["机器学习", "PyTorch · NumPy · Scikit-Learn · Vision Transformers"], ["机器人", "ROS2 · Nav2 · Gazebo · MuJoCo · PCL · OpenCV"], ["编程语言", "Python · C / C++ · MATLAB"], ["系统工具", "Linux · Git · CUDA · JAX"]],
    contactKicker: "联系",
    contactTitle: "一起构建能够理解“下一步会发生什么”的机器人",
    emailCta: "开始交流",
    downloadResume: "下载英文简历",
    footer: "基于真实研究、代码与真机实验构建。",
  },
};

export default function Home() {
  const [locale, setLocale] = useState<Locale>(() =>
    typeof window !== "undefined" && new URLSearchParams(window.location.search).get("lang") === "zh" ? "zh" : "en",
  );
  const [paperOpen, setPaperOpen] = useState(false);
  const [openProject, setOpenProject] = useState<string | null>(null);
  const t = content[locale];
  const experienceEvidence = locale === "en"
    ? [
        { contribution: "Reproducing V-JEPA 2 and PH-Dreamer for physically consistent video representations.", evidence: "Latent dynamics · IntPhys 2 · Diving" },
        { contribution: "Built a client carbon-footprint model from multi-source business-travel data.", evidence: "Data cleaning · rule modelling · visual deployment" },
        { contribution: "Designed MathBench and built its evaluation pipeline in OpenCompass.", evidence: "ACL Findings 2024 · 30+ models" },
        { contribution: "Rebuilt ViT/Swin modules and migrated the UperNet stack to MindSpore.", evidence: "PyTorch → MindSpore · verified pipeline" },
      ]
    : [
        { contribution: "复现 V-JEPA 2 与 PH-Dreamer，研究具有物理一致性的视频表征。", evidence: "潜空间动力学 · IntPhys 2 · Diving" },
        { contribution: "基于多源差旅数据构建客户碳足迹估算模型。", evidence: "数据清洗 · 规则建模 · 可视化部署" },
        { contribution: "设计 MathBench，并在 OpenCompass 中搭建完整评测流水线。", evidence: "ACL Findings 2024 · 30+ 模型" },
        { contribution: "复现 ViT/Swin，并将 UperNet 完整迁移至 MindSpore。", evidence: "PyTorch → MindSpore · 流程验证" },
      ];
  const experienceBrands = [
    { name: "Sunrising Lab", src: "/organizations/sunrising-ai.webp", href: "https://www.sunrisingai.com/", wide: true },
    { name: "Siemens", src: "/organizations/siemens.svg", href: locale === "en" ? "https://www.siemens.com/en-us/company/about/siemens-in-china/" : "https://www.siemens.com/zh-cn/" },
    { name: "Shanghai AI Laboratory", src: "/organizations/shanghai-ai-lab.png", href: "https://www.shlab.org.cn/", wide: true },
    { name: "Institute of Automation, CAS", src: "/organizations/casia.png", href: locale === "en" ? "https://english.ia.cas.cn/" : "https://ia.cas.cn/", markOnly: true },
  ];
  useEffect(() => {
    document.documentElement.lang = locale === "en" ? "en" : "zh-CN";
  }, [locale]);

  const navTargets = ["experience", "publication", "projects", "contact"];

  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Zilong Zheng home">ZZ<span> / 26</span></a>
        <nav aria-label="Primary navigation">
          {t.nav.map((item, index) => <a href={`#${navTargets[index]}`} key={item}>{item}</a>)}
        </nav>
        <button className="language-toggle" type="button" aria-label={t.switchAria} onClick={() => setLocale(locale === "en" ? "zh" : "en")}>{t.switchLabel}</button>
      </header>

      <section className="hero" id="top">
        <div className="hero-photo">
          <img src="/portrait.jpg" alt={locale === "en" ? "Zilong Zheng holding a cat" : "郑子龙的生活照"} />
          <span>{t.location}</span>
        </div>
        <div className="hero-copy">
          <p className="eyebrow"><span /> {t.eyebrow}</p>
          <h1>Zilong <em>Zheng</em></h1>
          <p className="hero-role">{locale === "en" ? "MSc Robotics · TU Delft  /  World Model Algorithm Intern" : "代尔夫特理工机器人学硕士  /  世界模型算法实习生"}</p>
          <p className="hero-intro">{t.intro}</p>
          <div className="focus-row">
            {(locale === "en" ? ["World Models", "Embodied AI", "Robot Systems"] : ["世界模型", "具身智能", "机器人系统"]).map((item) => <span key={item}>{item}</span>)}
          </div>
          <div className="hero-actions">
            <a className="primary-action" href="#projects">{t.workCta} <span>↘</span></a>
            <a className="text-action" href="mailto:franciszheng221@gmail.com">{t.talkCta} ↗</a>
          </div>
          <div className="hero-education">
            <div className="hero-education-grid">
              {t.education.map(([school, degree], index) => <a
                className="hero-education-card"
                href={index === 0 ? "https://www.topuniversities.com/universities/delft-university-technology" : "https://www.buaa.edu.cn/"}
                target="_blank"
                rel="noreferrer"
                aria-label={`${school} — ${index === 0 ? "QS" : locale === "en" ? "official website" : "学校官网"}`}
                key={school}
              >
                <div className={`hero-school-logo ${index === 1 ? "hero-school-logo-round" : ""}`}><img src={index === 0 ? "/academic/tu-delft-logo.png" : "/academic/beihang-logo.jpg"} alt={`${school} logo`} /></div>
                <div className="hero-school-copy"><h3>{school}</h3><strong>{degree}</strong></div>
              </a>)}
            </div>
          </div>
        </div>
      </section>

      <section className="now-section content-section" id="now">
        <div className="now-shell">
          <header className="now-heading">
            <div><p className="section-kicker">{t.nowKicker}</p><h2>{t.nowTitle}</h2></div>
            <p className="now-updated"><span aria-hidden="true" />{t.nowUpdated}</p>
          </header>
          <div className="now-panel">
            {t.nowItems.map(([label, text], index) => <article key={label}>
              <div className="now-index"><span>0{index + 1}</span><i aria-hidden="true" /></div>
              <h3>{label}</h3>
              <p>{text}</p>
            </article>)}
          </div>
        </div>
      </section>

      <section className="experience-section content-section" id="experience">
        <div className="section-heading experience-heading">
          <div><p className="section-kicker">{t.experienceKicker}</p><h2>{locale === "en" ? "Experience" : "实习经历"}</h2></div>
        </div>
        <div className="experience-table">
          <div className="experience-labels" aria-hidden="true"><span>{locale === "en" ? "Role" : "职位"}</span><span>{locale === "en" ? "Contribution & evidence" : "核心贡献与证据"}</span></div>
          {t.roles.map((role, index) => (
            <article className="experience-row" key={role.org}>
              <div className="experience-role">
                <div className={`experience-logo${experienceBrands[index].wide ? " experience-logo-wide" : ""}${experienceBrands[index].markOnly ? " experience-logo-mark" : ""}`}>
                  <img src={experienceBrands[index].src} alt={`${experienceBrands[index].name} logo`} />
                </div>
                <div className="experience-role-copy"><p>{role.date}</p><h3><a href={experienceBrands[index].href} target="_blank" rel="noreferrer">{role.org}</a></h3><h4>{role.role}</h4></div>
              </div>
              <div className="experience-work"><p className="experience-contribution">{experienceEvidence[index].contribution}</p><p className="experience-evidence">{experienceEvidence[index].evidence}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="publication-section content-section" id="publication">
        <div className="section-heading compact">
          <div><p className="section-kicker">{t.researchKicker}</p><h2>{locale === "en" ? "Publication" : "论文发表"}</h2></div>
        </div>
        <article className={`publication-disclosure${paperOpen ? " is-open" : ""}`}>
          <button className="publication-card" type="button" aria-expanded={paperOpen} aria-controls="mathbench-details" onClick={() => setPaperOpen(!paperOpen)}>
            <div className="publication-figure"><img src="/academic/mathbench-overview.png" alt="MathBench hierarchical benchmark overview" /></div>
            <div className="publication-copy">
              <p>{t.paperVenue}</p><h3>{t.paperTitle}</h3><span>{t.paperAuthors}</span>
              <div className="publication-facts"><div><strong>5</strong><span>{locale === "en" ? "difficulty stages" : "难度阶段"}</span></div><div><strong>3,709</strong><span>{locale === "en" ? "bilingual questions" : "双语题目"}</span></div><div><strong>30+</strong><span>{locale === "en" ? "models evaluated" : "评测模型"}</span></div></div>
              <span className="publication-expand-cue"><span>{paperOpen ? t.paperCollapse : t.paperExpand}</span><b aria-hidden="true">{paperOpen ? "↑" : "↓"}</b></span>
            </div>
          </button>

          <div className="publication-details" id="mathbench-details" hidden={!paperOpen}>
            <header className="publication-detail-lead"><div><p className="section-kicker">{t.paperDetailsKicker}</p><h3>{t.paperDetailsTitle}</h3></div><p>{t.paperDetailsIntro}</p></header>

            <section className="publication-detail-axes"><h4>{t.paperAxesTitle}</h4><div>{t.paperAxes.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><strong>{title}</strong><p>{text}</p></article>)}</div></section>

            <section className="publication-detail-contribution">
              <div><h4>{t.paperContributionTitle}</h4><p>{t.paperContributionIntro}</p><figure><img src="/academic/mathbench-taxonomy.png" alt={locale === "en" ? "MathBench hierarchical annotation taxonomy" : "MathBench 分层标签体系"} /><figcaption>{locale === "en" ? "Annotation taxonomy: educational stage, subject area and topic" : "标签体系：教育阶段、学科领域与知识主题"}</figcaption></figure></div>
              <ol>{t.paperContributions.map((item, index) => <li key={item}><span>0{index + 1}</span><p>{item}</p></li>)}</ol>
            </section>

            <section className="publication-detail-findings"><div className="publication-detail-findings-heading"><div><h4>{t.paperFindingsTitle}</h4><p>{t.paperFindingsIntro}</p></div></div><div className="publication-detail-charts">{[["/academic/mathbench-stage-results.png", "MathBench performance across difficulty stages"], ["/academic/mathbench-bilingual.png", "Chinese and English MathBench performance"]].map(([src, alt], index) => <figure key={src}><div><img src={src} alt={alt} /></div><figcaption><span>0{index + 1}</span>{t.paperCaptions[index]}</figcaption></figure>)}</div><div className="publication-finding-grid">{t.paperFindingPoints.map((finding, index) => <article key={finding}><span>0{index + 3}</span><p>{finding}</p></article>)}</div><p className="publication-detail-takeaway">{t.paperTakeaway}</p></section>

            <div className="publication-detail-links"><a href="https://aclanthology.org/2024.findings-acl.411/" target="_blank" rel="noreferrer">ACL Anthology ↗</a><a href="https://github.com/open-compass/MathBench" target="_blank" rel="noreferrer">{locale === "en" ? "Code & dataset" : "代码与数据"} ↗</a><button type="button" onClick={() => setPaperOpen(false)}>{t.paperCollapse} ↑</button></div>
          </div>
        </article>
      </section>

      <section className="work-section content-section" id="projects">
        <div className="section-heading"><div><p className="section-kicker">{t.workKicker}</p><h2>{t.workTitle}</h2></div></div>
        <div className="project-list">
          {[...t.projects].sort((a, b) => a.number.localeCompare(b.number)).map((project) => {
            const fullProject = projectRecords.find((item) => item.slug === project.slug)!;
            const detail = fullProject[locale];
            const isOpen = openProject === project.slug;
            const detailId = `project-details-${project.slug}`;
            const gallery = detail.gallery.slice(1);
            const hasExplicitGalleryLayout = gallery.some((item) => item.wide);

            return <article className={`project-disclosure${isOpen ? " is-open" : ""}`} key={project.number}>
              <button className={`project-index-card project-index-${project.slug}`} type="button" aria-expanded={isOpen} aria-controls={detailId} onClick={() => setOpenProject(isOpen ? null : project.slug)}>
                <div className="project-index-visual"><span className="project-number">{project.number}</span><img src={project.cardImage} alt={project.slug === "greenhouse-robot" ? (locale === "en" ? "MIRTE Master hardware used for greenhouse deployment" : "用于温室真机部署的 MIRTE Master 硬件") : project.slug === "hierarchical-motion-planning" ? (locale === "en" ? "MuJoCo bartender workspace and mobile manipulator goal positions" : "MuJoCo 酒吧场景与移动操作机器人目标位置") : project.imageAlt} /></div>
                <div className="project-index-copy">
                  <p className="project-type">{project.type}</p><h3>{project.title}</h3><p className="project-summary">{project.summary}</p>
                  <div className="project-index-evidence">{project.stats.slice(0, 2).map(([value, label]) => <span key={label}><strong>{value}</strong>{label}</span>)}</div>
                  <div className="project-index-highlights"><span>{locale === "en" ? "Delivered system" : "落地内容"}</span><ul>{project.bullets.slice(0, 3).map((item) => <li key={item}>{item}</li>)}</ul></div>
                  <div className="project-index-footer"><div className="tag-row">{project.stack.slice(0, 4).map((tag) => <span key={tag}>{tag}</span>)}</div><b>{isOpen ? (locale === "en" ? "Collapse details ↑" : "收起项目详情 ↑") : (locale === "en" ? "Expand details ↓" : "展开项目详情 ↓")}</b></div>
                </div>
              </button>

              <div className="project-inline-details" id={detailId} hidden={!isOpen}>
                <section className="project-inline-context">
                  <div><p className="section-kicker">{locale === "en" ? `Project ${project.number} · Context` : `项目 ${project.number} · 背景`}</p><h4>{detail.contextTitle ?? (locale === "en" ? "From problem to system" : "从问题到系统")}</h4><p>{detail.overview}</p></div>
                  <div className="project-inline-story"><article><span>{locale === "en" ? "The challenge" : "核心挑战"}</span><p>{detail.challenge}</p></article><article><span>{locale === "en" ? "Technical approach" : "技术路线"}</span><p>{detail.approach}</p></article></div>
                </section>

                <section className="project-inline-contribution"><div><p className="section-kicker">{locale === "en" ? "My contribution" : "个人贡献"}</p><h4>{detail.contributionTitle}</h4><div className="tag-row">{detail.stack.map((tag) => <span key={tag}>{tag}</span>)}</div></div><ol>{detail.contributions.map((item, index) => <li key={item}><span>0{index + 1}</span><p>{item}</p></li>)}</ol></section>

                {gallery.length > 0 && <section className={`project-inline-gallery project-inline-gallery-${project.slug}`}><div><p className="section-kicker">{locale === "en" ? "Project evidence" : "项目证据"}</p><h4>{detail.evidenceTitle ?? (project.slug === "greenhouse-robot" ? (locale === "en" ? "Plan, system design and field results" : "计划、系统设计与现场成果") : (locale === "en" ? "Architecture, experiments and deployment" : "架构、实验与部署"))}</h4></div><div>{gallery.map((item, index) => <figure key={item.src} className={item.wide || (!hasExplicitGalleryLayout && index === gallery.length - 1 && gallery.length % 2 === 1) ? "gallery-wide" : ""}><div><img src={item.src} alt={item.alt} /></div><figcaption><span>0{index + 1}</span>{item.caption}</figcaption></figure>)}</div></section>}

                <section className="project-inline-outcome"><div><p className="section-kicker">{locale === "en" ? "Outcome" : "项目结果"}</p><h4>{detail.outcomeTitle ?? (locale === "en" ? "What the work demonstrates" : "这个项目证明了什么")}</h4></div><div><ul>{detail.results.map((result) => <li key={result}>{result}</li>)}</ul><aside><span>{locale === "en" ? "Limits & next step" : "局限与下一步"}</span><p>{detail.limitations}</p></aside></div></section>

                <button className="project-inline-collapse" type="button" onClick={() => setOpenProject(null)}>{locale === "en" ? "Collapse project" : "收起项目"} ↑</button>
              </div>
            </article>;
          })}
        </div>
      </section>

      <section className="skills-section content-section">
        <div className="section-heading compact"><div><p className="section-kicker">{t.skillTitle}</p><h2>{locale === "en" ? "Tools I build with" : "我的技术工具箱"}</h2></div></div>
        <div className="skills-block">{t.skillGroups.map(([label, skills]) => <p key={label}><span>{label}</span>{skills}</p>)}</div>
      </section>

      <footer id="contact">
        <p className="section-kicker">{t.contactKicker}</p>
        <h2>{t.contactTitle}</h2>
        <div className="contact-actions">
          <a className="contact-email" href="mailto:franciszheng221@gmail.com"><span>{t.emailCta}</span><strong>franciszheng221@gmail.com</strong><b>↗</b></a>
          <div className="footer-link-grid">
            {[
              ["GitHub", "https://github.com/Francis-llgg", false],
              ["Google Scholar", "https://scholar.google.com/citations?user=GdER77kAAAAJ&hl=zh-CN&oi=sra", false],
              ["LinkedIn", "https://www.linkedin.com/in/francis-z-07a53431a/", false],
              [t.downloadResume, "/files/Zilong-Zheng-Resume.pdf", true],
            ].map(([label, href, download], index) => <a href={href as string} target={download ? undefined : "_blank"} rel={download ? undefined : "noreferrer"} download={download ? "Zilong-Zheng-Resume.pdf" : undefined} key={label as string}><span>0{index + 1}</span><strong>{label}</strong><b>{download ? "↓" : "↗"}</b></a>)}
          </div>
        </div>
        <div className="footer-bottom"><span>© 2026 Zilong Zheng</span><span>{t.footer}</span><a href="#top">↑ {locale === "en" ? "Top" : "顶部"}</a></div>
      </footer>
    </main>
  );
}
