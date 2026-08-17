"use client";

import { useEffect, useState } from "react";
import type { ProjectLocale, ProjectRecord } from "../../project-data";

type Props = {
  project: ProjectRecord;
  nextProject: ProjectRecord;
};

export default function ProjectDetailClient({ project, nextProject }: Props) {
  const [locale, setLocale] = useState<ProjectLocale>("en");
  const copy = project[locale];
  const nextCopy = nextProject[locale];

  useEffect(() => {
    const requestedLocale = new URLSearchParams(window.location.search).get("lang");
    if (requestedLocale === "zh") setLocale("zh");
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

  const homeHref = locale === "zh" ? "/?lang=zh#projects" : "/#projects";
  const nextHref = `/projects/${nextProject.slug}${locale === "zh" ? "?lang=zh" : ""}`;

  return (
    <main className="project-detail-page">
      <header className="detail-header">
        <a className="wordmark" href="/" aria-label="Zilong Zheng home">ZZ<span> / 26</span></a>
        <a className="detail-back" href={homeHref}>← {locale === "en" ? "All projects" : "返回项目列表"}</a>
        <button className="language-toggle" type="button" onClick={toggleLocale} aria-label={locale === "en" ? "Switch to Chinese" : "切换到英文"}>{locale === "en" ? "中文" : "EN"}</button>
      </header>

      <article>
        <section className="detail-hero">
          <div className="detail-hero-copy">
            <p className="detail-index">{locale === "en" ? "PROJECT" : "项目"} {project.number} <span>{copy.period}</span></p>
            <p className="project-type">{copy.type}</p>
            <h1>{copy.title}</h1>
            <p className="detail-summary">{copy.summary}</p>
            <div className="tag-row detail-tags">{copy.stack.map((tag) => <span key={tag}>{tag}</span>)}</div>
          </div>
          <figure className={`detail-cover detail-cover-${project.slug}`}>
            <img src={project.cover} alt={copy.gallery[0].alt} />
            <figcaption>{copy.gallery[0].caption}</figcaption>
          </figure>
        </section>

        <section className="detail-stats" aria-label={locale === "en" ? "Project highlights" : "项目亮点"}>
          {copy.stats.map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}
        </section>

        {project.slug === "camera-radar-bev-fusion" ? <>
          <section className="bev-case-core">
            <div className="bev-case-heading"><p className="detail-section-label">01 / {locale === "en" ? "System design" : "系统设计"}</p><h2>{locale === "en" ? "Two sensors, one BEV representation" : "两类传感器，一套 BEV 表征"}</h2></div>
            <div className="bev-case-grid">
              <article><span>{locale === "en" ? "The problem" : "核心问题"}</span><p>{copy.challenge}</p></article>
              <article><span>{locale === "en" ? "The design" : "融合设计"}</span><p>{copy.approach}</p></article>
            </div>
          </section>

          <section className="bev-case-build">
            <div><p className="detail-section-label">02 / {copy.contributionTitle}</p><h2>{locale === "en" ? "What I implemented" : "我的具体实现"}</h2></div>
            <ol>{copy.contributions.map((item, index) => <li key={item}><span>0{index + 1}</span><p>{item}</p></li>)}</ol>
          </section>

          <section className="bev-case-outcome">
            <div><p className="detail-section-label">03 / {locale === "en" ? "Result" : "结果"}</p><h2>{locale === "en" ? "Measured gain, explicit scope" : "可量化的提升，明确的边界"}</h2></div>
            <div><ul>{copy.results.slice(1).map((result) => <li key={result}>{result}</li>)}</ul><aside><span>{locale === "en" ? "Limits & next step" : "局限与下一步"}</span><p>{copy.limitations}</p></aside></div>
          </section>
        </> : <>
          <section className="detail-narrative">
            <div className="detail-section-label">01 / {locale === "en" ? "Context" : "项目背景"}</div>
            <div className="detail-text-block"><h2>{locale === "en" ? "From problem to system" : "从问题到系统"}</h2><p>{copy.overview}</p></div>
            <div className="detail-text-block"><h3>{locale === "en" ? "The challenge" : "核心挑战"}</h3><p>{copy.challenge}</p></div>
            <div className="detail-text-block"><h3>{locale === "en" ? "Technical approach" : "技术路线"}</h3><p>{copy.approach}</p></div>
          </section>

          <section className="detail-contribution">
            <div className="detail-section-label">02 / {copy.contributionTitle}</div>
            <div className="detail-contribution-grid">
              <h2>{locale === "en" ? "Responsibilities made explicit" : "把个人贡献说清楚"}</h2>
              <ol>{copy.contributions.map((item, index) => <li key={item}><span>0{index + 1}</span><p>{item}</p></li>)}</ol>
            </div>
          </section>

          <section className="detail-gallery-section">
            <div className="detail-gallery-heading"><div><p className="detail-section-label">03 / {locale === "en" ? "Evidence" : "项目证据"}</p><h2>{locale === "en" ? "Architecture, experiments and deployment" : "架构、实验与部署"}</h2></div><p>{locale === "en" ? "Selected artifacts from the actual project—not decorative stock imagery." : "全部来自项目本身的真实产出，而非装饰性素材。"}</p></div>
            <div className={`detail-gallery detail-gallery-${project.slug}`}>
              {copy.gallery.slice(1).map((item, index) => (
                <figure
                  key={item.src}
                  className={index === 2 || (project.slug === "hierarchical-motion-planning" && item.src.endsWith("motion-execution.png")) ? "gallery-wide" : ""}
                >
                  <div><img src={item.src} alt={item.alt} /></div>
                  <figcaption><span>0{index + 2}</span>{item.caption}</figcaption>
                </figure>
              ))}
            </div>
          </section>

          <section className="detail-results">
            <div className="detail-section-label">04 / {locale === "en" ? "Outcome" : "项目结果"}</div>
            <div className="detail-results-grid">
              <h2>{locale === "en" ? "What the work demonstrates" : "这个项目证明了什么"}</h2>
              <ul>{copy.results.map((result) => <li key={result}>{result}</li>)}</ul>
            </div>
            <div className="detail-limitations"><span>{locale === "en" ? "Limits & next step" : "局限与下一步"}</span><p>{copy.limitations}</p></div>
          </section>
        </>}

        <a className="next-project" href={nextHref}>
          <span>{locale === "en" ? "Next project" : "下一个项目"} · {nextProject.number}</span>
          <strong>{nextCopy.title}</strong>
          <b>↗</b>
        </a>
      </article>
    </main>
  );
}
