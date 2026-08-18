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
  contextTitle?: string;
  evidenceTitle?: string;
  outcomeTitle?: string;
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
        { src: "/projects/greenhouse-gantt.png", alt: "Eight-week greenhouse robotics project Gantt chart", caption: "Eight-week delivery plan from requirements and architecture to integration, field validation and hand-off" },
        { src: "/projects/greenhouse-functional-flow.png", alt: "Functional flow across robot control, plant detection and dashboard", caption: "Functional allocation across control software, motion controller, plant perception and dashboard" },
        { src: "/projects/greenhouse-node-overview.png", alt: "ROS2 node overview for the greenhouse inspection system", caption: "ROS2 node graph connecting perception, dashboard, mapping, localization, navigation, sensors and robot commands" },
        { src: "/projects/greenhouse-slam-map.png", alt: "Greenhouse layout and generated occupancy map comparison", caption: "Real greenhouse layout compared with the occupancy map used for localization and row-waypoint extraction" },
        { src: "/projects/greenhouse-perception-results.jpeg", alt: "Tulip pest and AprilTag detections in the greenhouse", caption: "YOLO tulip and pest detections merged with AprilTag observations in one ROS2 visualization stream" },
        { src: "/projects/greenhouse-battery-feedback.png", alt: "MIRTE battery status and LED feedback on physical hardware", caption: "Battery state shown on the robot display with green and red LED feedback verified on hardware" },
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
        { src: "/projects/greenhouse-gantt.png", alt: "温室机器人项目八周甘特计划", caption: "从需求、架构到集成、现场验证与交付的八周执行计划" },
        { src: "/projects/greenhouse-functional-flow.png", alt: "机器人控制、植物检测与 Dashboard 的功能流", caption: "控制软件、运动控制器、植物感知与 Dashboard 之间的功能分配" },
        { src: "/projects/greenhouse-node-overview.png", alt: "温室巡检系统 ROS2 节点总览", caption: "连接感知、Dashboard、建图定位、导航、传感器与机器人指令的 ROS2 节点图" },
        { src: "/projects/greenhouse-slam-map.png", alt: "温室实景布局与生成栅格地图对比", caption: "真实温室布局与用于定位、植物行航点提取的栅格地图对比" },
        { src: "/projects/greenhouse-perception-results.jpeg", alt: "温室中的郁金香害虫与 AprilTag 检测", caption: "将 YOLO 郁金香、害虫检测与 AprilTag 观测合并到同一 ROS2 可视化流" },
        { src: "/projects/greenhouse-battery-feedback.png", alt: "MIRTE 真机电池状态与 LED 反馈", caption: "在真机上验证电池状态显示，以及绿色和红色 LED 状态反馈" },
      ],
    },
  },
  {
    slug: "hierarchical-motion-planning",
    number: "03",
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
    number: "02",
    cover: "/projects/view-of-delft-car.jpg",
    en: {
      period: "Feb — Apr 2026",
      type: "Radar–camera perception · LiDAR-free 3D detection",
      title: "Radar-guided camera BEV fusion for robust 3D detection",
      summary: "A LiDAR-free CenterPoint pipeline that combines three temporally aligned radar sweeps with radar-guided monocular BEV features, delivering a 34.8% relative BEV mAP uplift over the radar baseline.",
      overview: "Starting from the course radar-only CenterPoint baseline, I built a checkpoint-consistent radar–camera detector for View-of-Delft under DelftBlue's four-hour training budget. The delivered stack covers temporal radar preprocessing, radar-guided camera lifting, per-channel BEV fusion, three-class CenterHead prediction, validation tracking and leaderboard-ready result export.",
      challenge: "Radar points are sparse, noisy and temporally displaced; monocular images are dense but depth-ambiguous. Past sweeps must be ego-motion aligned before aggregation, camera features must be lifted into the same 51.2 m × 51.2 m BEV grid, and fusion must preserve radar geometry without letting dense visual activations dominate. LiDAR and stereo input were prohibited, so every gain had to come from radar, monocular RGB or temporal metadata.",
      approach: "Three radar sweeps are transformed into the current frame and encoded as an 11-D point vector: the original seven fields plus time offset, absolute compensated velocity, a static-point flag and normalized RCS. PillarFeatureNet and SECOND produce a 384-channel radar BEV tensor. A pretrained ResNet-50 and 128-channel neck extract image features; projected radar points form sparse depth and mask hints for an 8-bin 1–60 m depth head, whose expected depth and confidence splat image features into BEV. A 1×1 alignment layer and non-negative, normalized per-channel gates fuse radar and camera before three CenterHead tasks and circle NMS.",
      contextTitle: "From radar baseline to fused BEV detector",
      contributionTitle: "Detection stack delivered",
      evidenceTitle: "Model architecture, fusion path & training evidence",
      outcomeTitle: "Measured gains and engineering takeaways",
      contributions: [
        "Reworked the data pipeline for three-sweep temporal fusion: transformed historical radar into the current ego frame, attached time offsets, rejected invalid frame gaps and preserved sweep configuration at checkpoint level.",
        "Built the 11-channel radar representation and 0.16 m BEV pillar encoder, adding absolute compensated velocity, static/moving state and normalized RCS to the original radar attributes.",
        "Implemented RadarGuidedCameraBEV: projected radar points into RGB, kept the nearest valid depth per pixel, predicted an 8-bin depth distribution and confidence-weighted the splat into a 320 × 320 BEV grid.",
        "Implemented trainable per-channel radar–camera fusion, connected the fused tensor to Car/Pedestrian/Cyclist CenterHead tasks, and made validation, checkpoint loading, NMS and leaderboard export configuration-consistent.",
      ],
      results: [
        "Structured a controlled ablation ladder from single-frame Radar-only to enhanced radar attributes, three-sweep accumulation and camera–radar BEV fusion. The complete model delivered a 34.8% relative BEV mAP uplift over the Radar-only baseline, showing that temporal density, physically meaningful radar channels and visual context contributed cumulatively.",
        "Delivered a LiDAR-free inference path from ego-motion-aligned radar sweeps and monocular RGB to Car, Pedestrian and Cyclist 3D boxes, with checkpoint-bound sweep and feature settings preventing silent train–test mismatches.",
        "Used validation-driven model selection rather than the final epoch or prediction ensembling: training retained the Top-K checkpoints ranked by entire-area validation mAP, while two independently trained runs were exported and compared before the stronger run was selected for the final leaderboard submission.",
      ],
      limitations: "A strict four-hour DelftBlue training budget ruled out compute-heavy Transformer fusion such as a BEVFormer-style encoder and a learned temporal sequence model; temporal information is currently introduced through ego-motion-aligned sweep accumulation rather than temporal attention. The deliberate priority was to establish a reproducible, competitive CenterPoint baseline and push it toward the state of the art before adding architectural novelty. The next stage is therefore Transformer-based cross-modal fusion and learned temporal modeling, followed by calibration-noise, range and weather robustness tests.",
      stats: [["+34.8%", "relative BEV mAP"], ["3 × 11-D", "temporal radar input"], ["8 bins", "1–60 m depth lift"]],
      stack: ["PyTorch", "CenterPoint", "ResNet-50", "CUDA", "Radar", "View-of-Delft"],
      gallery: [
        { src: "/projects/view-of-delft-car.jpg", alt: "TU Delft autonomous vehicle used to introduce the View-of-Delft perception task", caption: "TU Delft research vehicle and the urban multimodal setting behind View-of-Delft" },
        { src: "/projects/bev-system-teaser.png", alt: "Camera-radar BEV fusion system overview from sensor inputs to 3D detections", caption: "System overview: multi-sweep radar guidance, camera-to-BEV lifting, adaptive feature fusion and three-class detection" },
        { src: "/projects/bev-technical-architecture.png", alt: "Technical architecture of the radar-guided camera BEV fusion system", caption: "Technical architecture: temporal radar encoding, radar-guided camera lifting, channel-wise fusion and CenterHead decoding" },
        { src: "/projects/bev-validation-loss.png", alt: "Validation loss across camera-radar model training", caption: "Validation loss reveals the late-training stability limit and supports early checkpoint selection" },
        { src: "/projects/bev-validation-map.png", alt: "Validation BEV mean average precision across training", caption: "Validation BEV mAP progression used to select and verify the strongest checkpoint" },
      ],
    },
    zh: {
      period: "2026.02 — 2026.04",
      type: "雷达–相机感知 · 无 LiDAR 3D 检测",
      title: "雷达引导的相机 BEV 融合 3D 目标检测",
      summary: "在不使用 LiDAR 的前提下，将三帧时序毫米波雷达与雷达引导的单目相机 BEV 特征融合，相对 Radar-only 基线实现 34.8% 的 BEV mAP 提升。",
      overview: "项目从课程提供的 Radar-only CenterPoint 基线出发，在 DelftBlue 四小时训练预算内，交付一套训练、评测与导出配置一致的 View-of-Delft 雷达–相机检测器。完整链路覆盖时序雷达预处理、雷达引导的相机升维、逐通道 BEV 融合、三类 CenterHead 预测、验证曲线跟踪和面向排行榜的结果导出。",
      challenge: "雷达点稀疏、有噪声且跨帧存在时空位移，相机特征稠密却缺乏可靠深度。历史 Radar Sweep 必须先进行自车运动补偿，再与当前帧聚合；相机特征需要被升维到同一个 51.2 m × 51.2 m BEV 网格；融合还要保留雷达几何约束，避免稠密视觉激活主导结果。任务同时禁止使用 LiDAR 和双目相机，因此增益只能来自毫米波雷达、单目 RGB 与时序信息。",
      approach: "系统将三帧雷达变换到当前坐标系，并构建 11 维点特征：原始七项属性加时间偏移、绝对补偿速度、静态点标记与归一化 RCS。PillarFeatureNet 与 SECOND 生成 384 通道雷达 BEV；预训练 ResNet-50 和 128 通道 Neck 提取图像特征，投影雷达点形成稀疏深度与 Mask 提示，8 档、1–60 m 深度头预测期望深度与置信度，再将图像特征散射到 BEV。最后经 1×1 对齐层和非负归一化的逐通道门控完成雷达–相机融合，接入三组 CenterHead 与 Circle NMS。",
      contextTitle: "从雷达基线到融合式 BEV 检测器",
      contributionTitle: "交付的检测系统",
      evidenceTitle: "模型结构、融合链路与训练证据",
      outcomeTitle: "量化结果与工程结论",
      contributions: [
        "重构三帧时序融合数据链路：将历史 Radar Sweep 变换到当前自车坐标系，附加时间偏移，过滤异常帧间隔，并将 Sweep 配置写入 Checkpoint 对应流程。",
        "实现 11 通道雷达表示与 0.16 m 分辨率 BEV Pillar 编码，在原始属性上加入绝对补偿速度、静止或运动状态与归一化 RCS。",
        "实现 RadarGuidedCameraBEV：将雷达投影到 RGB，逐像素保留最近有效深度，预测 8 档深度分布，并用置信度加权方式散射到 320 × 320 BEV 网格。",
        "实现逐通道可训练的雷达–相机融合，接入汽车、行人、骑行者三组 CenterHead，并统一验证、Checkpoint 加载、NMS 与排行榜结果导出配置。",
      ],
      results: [
        "构建由单帧 Radar-only、增强雷达属性、三帧累积到相机–雷达 BEV 融合的逐级消融链路。完整模型相对 Radar-only 基线实现 34.8% 的 BEV mAP 提升，验证了时序点云密度、物理雷达特征与视觉上下文能够形成累积增益。",
        "交付从自车运动对齐的 Radar Sweep 与单目 RGB，到汽车、行人和骑行者 3D 框的无 LiDAR 推理链路；Sweep 数量与增强特征配置随 Checkpoint 固化，避免训练和测试之间出现隐性配置失配。",
        "采用验证集驱动的模型选择，而非直接使用最终 Epoch 或进行预测集成：训练阶段按 entire-area 验证集 mAP 保留 Top-K Checkpoint，并分别导出两个独立训练实验的排行榜结果，比较后选择表现更强的模型作为最终提交。",
      ],
      limitations: "受 DelftBlue 四小时训练预算与可用算力限制，本阶段没有采用 BEVFormer 式 Transformer 融合，也没有训练可学习的时序模型；时间信息目前通过自车运动补偿后的多帧累积引入，而非 Temporal Attention。项目策略是先建立可复现的强 CenterPoint 基线并向 SOTA 靠近，再开展结构创新。下一步将尝试 Transformer 跨模态融合与可学习时序建模，并补充标定噪声、距离和天气条件下的鲁棒性评测。",
      stats: [["+34.8%", "BEV mAP 相对提升"], ["3 × 11 维", "时序雷达输入"], ["8 档", "1–60 m 深度升维"]],
      stack: ["PyTorch", "CenterPoint", "ResNet-50", "CUDA", "毫米波雷达", "View-of-Delft"],
      gallery: [
        { src: "/projects/view-of-delft-car.jpg", alt: "用于介绍 View-of-Delft 感知任务的代尔夫特理工自动驾驶研究车辆", caption: "代尔夫特理工研究车辆，以及 View-of-Delft 所对应的城市多模态感知场景" },
        { src: "/projects/bev-system-teaser.png", alt: "从传感器输入到三维检测的相机雷达 BEV 融合系统主图", caption: "系统主图：多帧雷达引导、相机特征升维、BEV 自适应融合与三类目标检测" },
        { src: "/projects/bev-technical-architecture.png", alt: "雷达引导相机 BEV 融合系统的技术架构", caption: "技术架构：时序雷达编码、雷达引导相机升维、逐通道融合与 CenterHead 解码" },
        { src: "/projects/bev-validation-loss.png", alt: "相机雷达模型训练过程中的验证损失", caption: "验证集 Loss 揭示训练后期的稳定性边界，并支持提前选择 Checkpoint" },
        { src: "/projects/bev-validation-map.png", alt: "训练过程中的验证集 BEV 平均精度", caption: "依据验证集 BEV mAP 变化选择并核验表现最强的 Checkpoint" },
      ],
    },
  },
];

export function getProject(slug: string) {
  return projectRecords.find((project) => project.slug === slug);
}
