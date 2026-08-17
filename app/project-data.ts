export type ProjectLocale = "en" | "zh";

export type ProjectCopy = {
  period: string;
  type: string;
  title: string;
  summary: string;
  overview: string;
  challenge: string;
  approach: string;
  contributionTitle: string;
  contributions: string[];
  results: string[];
  limitations: string;
  stats: [string, string][];
  stack: string[];
  gallery: { src: string; alt: string; caption: string }[];
};

export type ProjectRecord = {
  slug: string;
  number: string;
  cover: string;
  en: ProjectCopy;
  zh: ProjectCopy;
};

export const projectRecords: ProjectRecord[] = [
  {
    slug: "greenhouse-robot",
    number: "01",
    cover: "/projects/greenhouse-robot.jpg",
    en: {
      period: "Mar — Jun 2026",
      type: "Autonomous robotics · ROS2 · Sim2Real",
      title: "Greenhouse mapping, navigation & Sim2Real deployment",
      summary: "An integrated greenhouse-inspection robot that connects mapping, localization, navigation, plant perception and operator supervision.",
      overview: "This multidisciplinary project turned a collection of ROS2 modules into a supervised greenhouse inspection workflow. The system was developed first in Gazebo, then transferred to a physical MIRTE Master robot operating in a 32 m² greenhouse. It links plant observations to location and greenhouse context so the output can support a future digital twin.",
      challenge: "A greenhouse is a deceptively difficult robotics environment: aisles are narrow, plant rows are repetitive, maps and physical geometry do not match perfectly, and inspection results need to remain understandable to a human operator. The key challenge was therefore integration and reliability—not an isolated algorithm demo.",
      approach: "The stack combines filtered LiDAR and odometry with SLAM Toolbox, Nav2 costmaps and a mission layer. A modular perception pipeline detects flowers, pests and AprilTags, while a custom dashboard exposes live status, inspection output and tele-operation controls. Simulation was used to validate planning logic before hardware tests.",
      contributionTitle: "My focus",
      contributions: [
        "Built and validated the mapping and localization workflow around SLAM Toolbox, Nav2 and reusable occupancy maps.",
        "Compared AMCL with SLAM Toolbox localization and selected the more stable option after observing heading drift during turning.",
        "Derived navigation waypoints from the saved map with a BFS-based table detector instead of relying only on hand-authored coordinates.",
        "Supported system integration and Sim2Real validation, including narrow-aisle costmap tuning and failure analysis on the physical robot.",
      ],
      results: [
        "Six validation scenarios covered mapping, localization, navigation, plant inspection, tele-operation, battery behaviour and travel speed.",
        "The robot completed collision-free waypoint navigation in simulation and demonstrated supervised inspection on physical hardware.",
        "The perception pipeline detected tulips, pests and AprilTags and surfaced results through the operator dashboard.",
      ],
      limitations: "Real-world navigation remained less reliable than simulation because small map–environment discrepancies distorted the Nav2 costmap. The current system should be understood as a supervised research prototype; long-term storage, robust autonomous missions and stronger localization are the next steps.",
      stats: [["32 m²", "physical test site"], ["6", "validation scenarios"], ["Gazebo → MIRTE", "deployment path"]],
      stack: ["ROS2", "Nav2", "SLAM Toolbox", "Gazebo", "TF2", "LiDAR", "Python", "C++"],
      gallery: [
        { src: "/projects/greenhouse-robot.jpg", alt: "MIRTE Master mobile manipulator used in the greenhouse project", caption: "MIRTE Master platform used for physical deployment" },
        { src: "/projects/greenhouse-hardware.jpg", alt: "MIRTE robot hardware close-up", caption: "Hardware integration and sensor platform" },
        { src: "/projects/greenhouse-perception.png", alt: "Flower and AprilTag perception on the physical setup", caption: "Tulip, pest and AprilTag perception on the real setup" },
        { src: "/projects/ros2-architecture.png", alt: "ROS2 greenhouse inspection system architecture", caption: "System architecture: perception, dashboard, mapping, localization and navigation" },
      ],
    },
    zh: {
      period: "2026.03 — 2026.06",
      type: "自主机器人 · ROS2 · Sim2Real",
      title: "温室自主建图、导航与 Sim2Real 真机部署",
      summary: "将建图、定位、导航、植物感知与人机监督连接成一套完整的温室巡检机器人系统。",
      overview: "这是一个多学科团队项目，目标不是展示单一算法，而是把多个 ROS2 模块整合成可监督的温室巡检流程。系统先在 Gazebo 中开发和验证，随后部署到 32 m² 温室中的 MIRTE Master 真机，并将植物观测与位置、温室环境信息关联，为后续数字孪生平台打基础。",
      challenge: "温室看似结构化，实际却有窄通道、重复植物行、地图与真实几何不完全一致等问题。同时，巡检结果还必须让操作人员快速理解。因此核心难点是系统集成与可靠性，而不是孤立的算法演示。",
      approach: "系统使用过滤后的 LiDAR 与里程计，结合 SLAM Toolbox、Nav2 Costmap 和任务层完成建图定位与导航；模块化感知管线负责花朵、害虫和 AprilTag 检测；定制 Dashboard 则汇总机器人状态、巡检结果和遥操作入口。规划逻辑先在仿真验证，再进入真机测试。",
      contributionTitle: "我的重点工作",
      contributions: [
        "围绕 SLAM Toolbox、Nav2 与可复用栅格地图搭建并验证建图、定位工作流。",
        "比较 AMCL 与 SLAM Toolbox 定位，在发现转向过程中的航向漂移后选择更稳定的方案。",
        "通过基于 BFS 的桌面检测器从保存地图中自动推导导航航点，减少对手工坐标的依赖。",
        "参与系统集成和 Sim2Real 验证，包括窄通道 Costmap 调参与真机失败分析。",
      ],
      results: [
        "以 6 类验证场景覆盖建图、定位、导航、植物巡检、遥操作、电池行为和行驶速度。",
        "机器人在仿真中完成无碰撞航点导航，并在真机上完成可监督的巡检流程验证。",
        "感知系统能够识别郁金香、害虫与 AprilTag，并通过 Dashboard 呈现结果。",
      ],
      limitations: "由于地图与真实环境之间的小尺度偏差会影响 Nav2 Costmap，真机导航的可靠性仍低于仿真。当前系统更适合作为可监督的研究原型；后续重点是长期数据存储、自主任务执行与更稳健的定位。",
      stats: [["32 m²", "真机测试场地"], ["6", "验证场景"], ["Gazebo → MIRTE", "部署路径"]],
      stack: ["ROS2", "Nav2", "SLAM Toolbox", "Gazebo", "TF2", "LiDAR", "Python", "C++"],
      gallery: [
        { src: "/projects/greenhouse-robot.jpg", alt: "温室项目使用的 MIRTE Master 移动机械臂", caption: "用于真机部署的 MIRTE Master 平台" },
        { src: "/projects/greenhouse-hardware.jpg", alt: "MIRTE 机器人硬件近景", caption: "硬件集成与传感器平台" },
        { src: "/projects/greenhouse-perception.png", alt: "真机环境中的花朵与 AprilTag 感知", caption: "真实环境中的郁金香、害虫和 AprilTag 感知" },
        { src: "/projects/ros2-architecture.png", alt: "ROS2 温室巡检系统架构", caption: "感知、Dashboard、建图、定位与导航的系统架构" },
      ],
    },
  },
  {
    slug: "hierarchical-motion-planning",
    number: "02",
    cover: "/projects/motion-environment.png",
    en: {
      period: "Nov 2025 — Jan 2026",
      type: "Planning & control · MuJoCo · JAX",
      title: "Hierarchical motion planning for a 10-DoF mobile manipulator",
      summary: "A global–local planning system that pairs Bi-Informed RRT* with GPU-accelerated MPPI for smooth, dynamically feasible motion.",
      overview: "The project explores how a 10-DoF mobile manipulator can move through a cluttered bartender workspace while coordinating its base and arm. A sampling-based global planner produces a collision-free geometric route; a local model-predictive controller then tracks it under robot dynamics.",
      challenge: "Searching directly in a high-dimensional configuration space is expensive, while a purely geometric path does not guarantee smooth or dynamically feasible execution. The system therefore needed to balance global exploration, real-time tracking, collision costs and computational budget.",
      approach: "Bi-Informed RRT* narrows sampling after an initial solution and creates waypoints through the scene. A JAX implementation of MPPI rolls out many candidate controls on the GPU, scoring target tracking, control effort, state constraints and collision penalties before applying the best action in closed loop.",
      contributionTitle: "What I built",
      contributions: [
        "Implemented the modular global–local planner interface and connected it to the MuJoCo simulation loop.",
        "Developed Bi-Informed RRT* path search and collision checking for the bartender workspace.",
        "Designed and tuned an MPPI objective covering path tracking, control effort, dynamics and obstacle avoidance.",
        "Benchmarked planner success, path cost and compute-time trade-offs across sampling budgets and MPPI horizons.",
      ],
      results: [
        "The hierarchy produced collision-free global routes and smooth closed-loop execution across three serving positions.",
        "Bi-Informed sampling reached full success at larger planning budgets while maintaining path costs comparable to RRT*.",
        "The MPPI study exposed a practical trade-off between rollout count, horizon length, tracking error and controller latency.",
      ],
      limitations: "Results were validated in MuJoCo rather than on physical hardware. Remaining work includes latency-aware replanning, stronger dynamic-obstacle handling and systematic transfer of controller parameters to a real mobile manipulator.",
      stats: [["10-DoF", "joint state"], ["RRT* + MPPI", "planning hierarchy"], ["GPU", "parallel rollouts"]],
      stack: ["MuJoCo", "JAX", "MPPI", "Bi-Informed RRT*", "Python", "Collision checking"],
      gallery: [
        { src: "/projects/motion-environment.png", alt: "Bartender robot MuJoCo environment with three serving positions", caption: "MuJoCo bartender workspace and the three evaluated goal positions" },
        { src: "/projects/motion-robot.png", alt: "10 degree of freedom mobile manipulator in MuJoCo", caption: "10-DoF mobile manipulator model" },
        { src: "/projects/motion-path.png", alt: "Bi-Informed RRT star trees and selected path", caption: "Bidirectional search trees, informed sampling region and final path" },
        { src: "/projects/motion-metrics.png", alt: "RRT star and Bi-Informed RRT star benchmark", caption: "Planning success and path-cost comparison" },
        { src: "/projects/motion-execution.png", alt: "MPPI compute time against horizon and rollout count", caption: "MPPI compute-time sensitivity to horizon length and rollout count" },
      ],
    },
    zh: {
      period: "2025.11 — 2026.01",
      type: "规划与控制 · MuJoCo · JAX",
      title: "10-DoF 移动操作机器人的分层运动规划",
      summary: "以 Bi-Informed RRT* 完成全局搜索，并使用 GPU 加速 MPPI 实现平滑且满足动力学约束的闭环运动。",
      overview: "项目研究 10-DoF 移动操作机器人如何在障碍密集的酒吧场景中协调底盘与机械臂运动。采样式全局规划器先生成无碰撞几何路径，再由局部模型预测控制器在动力学约束下跟踪执行。",
      challenge: "直接在高维构型空间搜索代价很高，而纯几何路径又不能保证运动平滑或满足动力学约束。因此系统需要在全局探索、实时跟踪、碰撞代价和计算预算之间取得平衡。",
      approach: "Bi-Informed RRT* 在得到初始解后收缩采样区域并生成场景航点；基于 JAX 的 MPPI 在 GPU 上并行展开大量候选控制序列，对路径跟踪、控制代价、状态约束和碰撞惩罚进行评分，再以闭环方式执行最优动作。",
      contributionTitle: "我的实现",
      contributions: [
        "实现模块化全局—局部规划器接口，并接入 MuJoCo 仿真闭环。",
        "面向酒吧工作空间实现 Bi-Informed RRT* 搜索与碰撞检测。",
        "设计并调试包含路径跟踪、控制代价、动力学约束和避障的 MPPI 目标函数。",
        "对不同采样预算与 MPPI 时域设置下的成功率、路径代价和计算开销进行评测。",
      ],
      results: [
        "分层系统在三个服务位置之间生成无碰撞全局路径，并完成平滑闭环执行。",
        "Bi-Informed 采样在更高规划预算下达到完整成功率，同时保持与 RRT* 接近的路径代价。",
        "MPPI 实验展示了 Rollout 数量、预测时域、跟踪误差与控制延迟之间的实际权衡。",
      ],
      limitations: "结果目前主要在 MuJoCo 中验证，尚未迁移到实体机器人。后续工作包括面向延迟的在线重规划、更强的动态障碍处理，以及真机控制参数迁移。",
      stats: [["10-DoF", "关节状态"], ["RRT* + MPPI", "分层规划"], ["GPU", "并行采样"]],
      stack: ["MuJoCo", "JAX", "MPPI", "Bi-Informed RRT*", "Python", "Collision checking"],
      gallery: [
        { src: "/projects/motion-environment.png", alt: "包含三个服务位置的酒吧机器人 MuJoCo 场景", caption: "MuJoCo 酒吧环境与三个评测目标位置" },
        { src: "/projects/motion-robot.png", alt: "MuJoCo 中的 10 自由度移动操作机器人", caption: "10-DoF 移动操作机器人模型" },
        { src: "/projects/motion-path.png", alt: "Bi-Informed RRT 星搜索树与路径", caption: "双向搜索树、Informed 采样区域与最终路径" },
        { src: "/projects/motion-metrics.png", alt: "RRT 星与 Bi-Informed RRT 星评测", caption: "规划成功率与路径代价对比" },
        { src: "/projects/motion-execution.png", alt: "MPPI 计算耗时与时域、采样数量关系", caption: "预测时域与 Rollout 数量对 MPPI 计算耗时的影响" },
      ],
    },
  },
  {
    slug: "camera-radar-bev-fusion",
    number: "03",
    cover: "/projects/bev-framework-source.png",
    en: {
      period: "Feb — Apr 2026",
      type: "Multimodal perception · 3D detection",
      title: "Camera–radar BEV fusion for robust 3D object detection",
      summary: "A controlled progression from radar-only CenterPoint to multi-frame camera–radar fusion on View-of-Delft.",
      overview: "The work compares radar-only, multi-frame radar, enhanced radar features and camera–radar fusion under one evaluation pipeline, so every improvement can be traced to a specific design change.",
      challenge: "Radar is sparse but geometrically grounded; cameras are dense but depth-ambiguous. Their feature maps also arrive with different resolutions and semantics. Effective fusion therefore requires temporal accumulation, spatial alignment and a mechanism that can decide how much to trust each modality.",
      approach: "Three radar sweeps are accumulated with Doppler, velocity, time-delta, static indicators and normalized RCS. Projected radar points create sparse depth hints for lifting image features into BEV. A 1×1 alignment layer and learnable channel-wise gates then combine camera and radar BEV features before the CenterHead detector.",
      contributionTitle: "What I built",
      contributions: [
        "Established radar-only and multi-frame baselines under one controlled configuration.",
        "Built the 11-channel temporal radar representation and three-sweep accumulation path.",
        "Implemented radar-guided image lifting, BEV alignment and learnable channel-wise fusion.",
        "Made evaluation and result export consistent with each training checkpoint.",
      ],
      results: [
        "The final camera–radar configuration improved BEV mAP by 34.8% relative to the radar baseline.",
        "The shared CenterHead produced one detection output for cars, pedestrians and cyclists.",
        "The ablation path made the contribution of temporal context, radar attributes and camera fusion independently measurable.",
      ],
      limitations: "The fusion pipeline depends on accurate camera–radar calibration and was evaluated on a single dataset. Future work should add calibration-noise studies, stronger image backbones and qualitative error analysis across weather and range conditions.",
      stats: [["+34.8%", "relative BEV mAP"], ["3 sweeps", "temporal radar"], ["11 channels", "radar attributes"]],
      stack: ["PyTorch", "CenterPoint", "CUDA", "Radar", "Camera", "View-of-Delft"],
      gallery: [
        { src: "/projects/bev-framework-source.png", alt: "Camera-radar CenterPoint implementation diagram", caption: "Project framework: radar and camera branches, learnable fusion and CenterHead detection" },
      ],
    },
    zh: {
      period: "2026.02 — 2026.04",
      type: "多模态感知 · 3D 检测",
      title: "相机–毫米波雷达 BEV 融合 3D 目标检测",
      summary: "在 View-of-Delft 上，从 Radar-only CenterPoint 逐步扩展到多帧相机–雷达 BEV 融合。",
      overview: "项目在同一评测管线下依次对比 Radar-only、多帧 Radar、增强 Radar 特征和相机–雷达融合，使每项性能变化都能追溯到明确的设计改动。",
      challenge: "雷达稀疏但具有可靠几何信息，相机稠密却存在深度歧义；两种模态的特征分辨率与语义也并不一致。因此融合需要同时处理时序积累、空间对齐，以及不同通道对两类传感器的信任分配。",
      approach: "系统累积 3 帧 Radar Sweep，并加入 Doppler、速度、时间差、静态标记和归一化 RCS 等属性；投影雷达点为图像特征升维到 BEV 提供稀疏深度提示；随后通过 1×1 对齐层与可学习通道门控融合相机和雷达 BEV 特征，再交给 CenterHead 检测。",
      contributionTitle: "我的实现",
      contributions: [
        "在统一配置下建立 Radar-only 与多帧 Radar 基线。",
        "构建 11 通道时序雷达表示与三帧 Radar Sweep 累积管线。",
        "实现雷达引导的图像升维、BEV 对齐和可学习通道加权融合。",
        "使评测与结果导出严格对应每个训练 Checkpoint。",
      ],
      results: [
        "最终相机–雷达方案相对 Radar 基线获得 34.8% 的 BEV mAP 提升。",
        "共享 CenterHead 统一输出汽车、行人和骑行者三类检测结果。",
        "消融路径能够分别衡量时序上下文、雷达属性和相机融合带来的收益。",
      ],
      limitations: "融合效果依赖准确的相机–雷达标定，目前也只在单一数据集上完成评测。后续可加入标定噪声实验、更强视觉主干，以及不同天气和距离条件下的定性误差分析。",
      stats: [["+34.8%", "BEV mAP 相对提升"], ["3 帧", "时序雷达"], ["11 通道", "雷达属性"]],
      stack: ["PyTorch", "CenterPoint", "CUDA", "Radar", "Camera", "View-of-Delft"],
      gallery: [
        { src: "/projects/bev-framework-source.png", alt: "相机雷达 CenterPoint 实现框架", caption: "项目框架：雷达与相机双分支、可学习融合和 CenterHead 检测" },
      ],
    },
  },
];

export function getProject(slug: string) {
  return projectRecords.find((project) => project.slug === slug);
}
