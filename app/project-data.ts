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
  gallery: { src: string; alt: string; caption: string; wide?: boolean }[];
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
      summary: "An eight-week delivery from requirements and system design to ROS2 integration, simulation validation and supervised deployment on a physical MIRTE robot.",
      overview: "A five-person multidisciplinary team turned a greenhouse-monitoring brief into an integrated inspection prototype in eight weeks. We began by translating user needs into a delivery plan and functional architecture, then connected mapping, localization, navigation, plant perception, environmental sensing and operator supervision in one ROS2 system. The stack was developed in Gazebo and deployed on a MIRTE Master for supervised trials in a 32 m² greenhouse.",
      challenge: "The robot had to work in narrow, repetitive plant rows while maintaining a reusable map, a stable pose estimate and an operator-readable inspection record. Small differences between the saved map and the physical greenhouse could distort the Nav2 costmap, and data from LiDAR, odometry, camera detections, AprilTags and robot health all had to arrive through one coherent workflow.",
      approach: "We used the Gantt plan and functional flow to divide the system into mapping and localization, Nav2 mission execution, perception and dashboard layers. Filtered LiDAR and odometry feed SLAM Toolbox; a table locator extracts row geometry and safe waypoints from the saved occupancy map; the mission planner sequences Nav2 goals and image captures. YOLO, AprilTag and environmental readings are merged into a dashboard that also exposes tele-operation and battery status.",
      contributionTitle: "Mapping, localization and system integration",
      contributions: [
        "Owned the mapping and localization workflow: removed robot self-reflections from LiDAR scans, configured SLAM Toolbox, and saved reusable occupancy grids and pose graphs for later missions.",
        "Compared AMCL with SLAM Toolbox localization on the saved map; after reproducing heading drift during turns, selected and documented the more stable localization path for the integrated system.",
        "Turned the map into executable inspection missions by integrating a BFS-based table detector, safe row-offset waypoints, Nav2 planning and a YAML-driven mission queue—reducing reliance on hand-authored coordinates.",
        "Supported cross-stack deployment and verification from Gazebo to MIRTE hardware, including perception hand-off, narrow-aisle costmap tuning, launch/configuration packaging and evidence-based failure analysis.",
      ],
      results: [
        "Delivered a reusable greenhouse map and stable localization configuration, with table-row waypoints generated directly from the occupancy map.",
        "Demonstrated collision-free waypoint missions in Gazebo and transferred the integrated stack to MIRTE hardware for supervised greenhouse trials.",
        "Integrated tulip, pest and AprilTag detections with environmental readings, live robot status and tele-operation in a custom operator dashboard.",
        "Completed six end-to-end validation scenarios; battery feedback worked on hardware and the measured 1.4 km/h travel speed remained below the 5 km/h safety limit.",
      ],
      limitations: "Real-world navigation remained less reliable than simulation because map–environment discrepancies distorted the Nav2 costmap. The delivered system is therefore a supervised research prototype rather than a fully autonomous product. The next engineering steps are better scan and map calibration, robust relocalization, long-term inspection storage and recovery-aware mission execution.",
      stats: [["32 m²", "physical test site"], ["6", "validation scenarios"], ["Gazebo → MIRTE", "deployment path"]],
      stack: ["ROS2", "Nav2", "SLAM Toolbox", "Gazebo", "LiDAR", "YOLO", "AprilTag", "React"],
      gallery: [
        { src: "/projects/greenhouse-robot-square.jpg", alt: "MIRTE Master mobile manipulator used for greenhouse deployment", caption: "MIRTE Master platform used for physical deployment" },
        { src: "/projects/greenhouse-gantt.png", alt: "Eight-week greenhouse robotics project Gantt chart", caption: "Eight-week delivery plan from requirements and architecture to integration, field validation and hand-off", wide: true },
        { src: "/projects/greenhouse-functional-flow.png", alt: "Functional flow across robot control, plant detection and dashboard", caption: "Functional allocation across control software, motion controller, plant perception and dashboard", wide: true },
        { src: "/projects/greenhouse-node-overview.png", alt: "ROS2 node overview for the greenhouse inspection system", caption: "ROS2 node graph connecting perception, dashboard, mapping, localization, navigation, sensors and robot commands", wide: true },
        { src: "/projects/greenhouse-slam-map.png", alt: "Greenhouse layout and generated occupancy map comparison", caption: "Real greenhouse layout compared with the occupancy map used for localization and row-waypoint extraction" },
        { src: "/projects/greenhouse-perception-results.jpeg", alt: "Tulip pest and AprilTag detections in the greenhouse", caption: "YOLO tulip and pest detections merged with AprilTag observations in one ROS2 visualization stream" },
      ],
    },
    zh: {
      period: "2026.03 — 2026.06",
      type: "自主机器人 · ROS2 · Sim2Real",
      title: "温室自主建图、导航与 Sim2Real 真机部署",
      summary: "在八周内完成从需求与系统设计、ROS2 集成、仿真验证到 MIRTE 真机监督部署的完整交付。",
      overview: "五人多学科团队在八周内将温室监测需求落地为一套集成式巡检原型。项目先把用户需求转化为甘特计划与功能架构，再将建图、定位、导航、植物感知、环境数据与人机监督接入同一 ROS2 系统；软件栈在 Gazebo 中开发验证，最终部署到 MIRTE Master，并在 32 m² 温室中开展受监督真机试验。",
      challenge: "机器人需要在狭窄且高度重复的植物行间工作，同时维持可复用地图、稳定定位和便于操作员理解的巡检记录。保存地图与真实温室的细小偏差会扭曲 Nav2 Costmap，而 LiDAR、里程计、相机检测、AprilTag 与机器人健康状态也必须被组织成一条一致的数据链路。",
      approach: "我们先以甘特图和功能流划分建图定位、Nav2 任务执行、感知与 Dashboard 四层。过滤后的 LiDAR 与里程计进入 SLAM Toolbox；桌面定位器从栅格地图提取植物行几何和安全航点；任务规划器依次发送 Nav2 目标并触发图像采集；YOLO、AprilTag 与环境数据最终汇总到支持遥操作和电池监控的 Dashboard。",
      contributionTitle: "建图定位与跨模块集成",
      contributions: [
        "负责建图与定位工作流：过滤 LiDAR 中的机器人自反射，配置 SLAM Toolbox，并保存可复用的栅格地图与 Pose Graph 供后续任务调用。",
        "在保存地图上对比 AMCL 与 SLAM Toolbox 定位，复现转向时的航向漂移后，选择并记录更稳定的定位方案供集成系统使用。",
        "把地图转化为可执行巡检任务：接入基于 BFS 的桌面检测、安全行间偏置航点、Nav2 规划与 YAML 任务队列，减少对手工坐标的依赖。",
        "参与从 Gazebo 到 MIRTE 真机的跨模块部署与验证，包括感知结果接入、窄通道 Costmap 调参、启动配置封装和基于证据的失败分析。",
      ],
      results: [
        "交付可复用温室地图与稳定定位配置，并能直接从栅格地图生成植物行巡检航点。",
        "在 Gazebo 中完成无碰撞航点任务，并将整套软件迁移到 MIRTE 真机开展受监督温室试验。",
        "将郁金香、害虫和 AprilTag 检测与环境读数、机器人状态及遥操作能力集成到定制 Dashboard。",
        "完成六类端到端验证；电池反馈在真机生效，实测 1.4 km/h 行驶速度低于 5 km/h 安全上限。",
      ],
      limitations: "地图与真实温室之间的偏差会扭曲 Nav2 Costmap，因此真机导航的可靠性仍低于仿真。当前交付是一套可监督的研究原型，而非完全自主产品；下一步需要改善扫描与地图标定、重定位鲁棒性、长期巡检数据存储和具备故障恢复的任务执行。",
      stats: [["32 m²", "真机测试场地"], ["6", "验证场景"], ["Gazebo → MIRTE", "部署路径"]],
      stack: ["ROS2", "Nav2", "SLAM Toolbox", "Gazebo", "LiDAR", "YOLO", "AprilTag", "React"],
      gallery: [
        { src: "/projects/greenhouse-robot-square.jpg", alt: "用于温室部署的 MIRTE Master 移动机械臂", caption: "用于真机部署的 MIRTE Master 平台" },
        { src: "/projects/greenhouse-gantt.png", alt: "温室机器人项目八周甘特计划", caption: "从需求、架构到集成、现场验证与交付的八周执行计划", wide: true },
        { src: "/projects/greenhouse-functional-flow.png", alt: "机器人控制、植物检测与 Dashboard 的功能流", caption: "控制软件、运动控制器、植物感知与 Dashboard 之间的功能分配", wide: true },
        { src: "/projects/greenhouse-node-overview.png", alt: "温室巡检系统 ROS2 节点总览", caption: "连接感知、Dashboard、建图定位、导航、传感器与机器人指令的 ROS2 节点图", wide: true },
        { src: "/projects/greenhouse-slam-map.png", alt: "温室实景布局与生成栅格地图对比", caption: "真实温室布局与用于定位、植物行航点提取的栅格地图对比" },
        { src: "/projects/greenhouse-perception-results.jpeg", alt: "温室中的郁金香害虫与 AprilTag 检测", caption: "将 YOLO 郁金香、害虫检测与 AprilTag 观测合并到同一 ROS2 可视化流" },
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
