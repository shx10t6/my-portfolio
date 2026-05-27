import { useState } from "react";
import "./App.css";

import profile from "./assets/profile.jpg";

import hatem2 from "./assets/hatem2.png";
import hatemcamp1 from "./assets/hatemcamp1.png";

import Form from "./assets/Form.png";
import Google from "./assets/Google.png";
import Analytics1 from "./assets/Analytics1.png";
import analytics2 from "./assets/analytics2.png";
import analytics3 from "./assets/analytics3.png";
import clarity from "./assets/clarity.png";
import tagmanager from "./assets/tagmanager.png";

import ecommerce1 from "./assets/e-commerce.png";
import ecommerce2 from "./assets/e-commerce 2.png";
import ecommerce3 from "./assets/e-commerce3.png";
import ecommerce4 from "./assets/e-commerce4.png";
import ecommerce5 from "./assets/e-commerce5.png";

import pipelines from "./assets/pipelines.png";
import workflow from "./assets/workflow.png";

function App() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="app">
      {/* BACKGROUND */}
      <div className="gradient-left"></div>
      <div className="gradient-right"></div>

      {/* HERO */}
      <section className="hero">
        <img
          src={profile}
          alt="Hesham"
          className="profile-img"
        />

        <h1>Hesham Ayman</h1>

        <p className="subtitle">
          Media Buyer • CRM Systems • AI Automation • Frontend Developer
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="primary-btn">
            View Projects
          </a>

          <a href="#contact" className="secondary-btn">
            Contact Me
          </a>
        </div>

        <div className="stats">
          <div className="stat">
            <h2>1M+</h2>
            <p>Impressions Generated</p>
          </div>

          <div className="stat">
            <h2>700K+</h2>
            <p>Revenue Generated</p>
          </div>

          <div className="stat">
            <h2>300K+</h2>
            <p>Ad Spend Managed</p>
          </div>
        </div>
      </section>

      {/* HORSE CASE STUDY */}
      <section className="case-study" id="projects">
        <div className="case-label">FEATURED CASE STUDY</div>

        <h1>Horse Training Lead Generation Campaign</h1>

        <p className="case-desc">
          Built and optimized a high-converting Meta Ads lead generation
          system for a premium horse training business focused on
          generating qualified high-ticket clients at scale.
        </p>

        <div className="stats-grid">
          <div className="stat-card">
            <h3>5,353+</h3>
            <p>Messaging Conversations</p>
          </div>

          <div className="stat-card">
            <h3>27%</h3>
            <p>Qualified Leads Rate</p>
          </div>

          <div className="stat-card green">
            <h3>700K+</h3>
            <p>Revenue Generated</p>
          </div>

          <div className="stat-card">
            <h3>60K</h3>
            <p>EGP Ad Spend Managed</p>
          </div>
        </div>

        <div className="impact-box">
          <div className="impact-content">
            <h3>Strategy & Creative Optimization</h3>

            <p>
              Developed conversion-focused Meta Ads campaigns using
              premium positioning, real customer review angles,
              trending reels hooks and optimized Messenger qualification
              flows to improve lead quality and increase conversion rates.
            </p>

            <div className="tags">
              <span>Meta Ads</span>
              <span>Creative Strategy</span>
              <span>Chat Builder</span>
              <span>Lead Generation</span>
              <span>Premium Positioning</span>
              <span>Conversion Optimization</span>
            </div>
          </div>

          <div className="results-gallery">
            <div className="results-item">
              <img
                src={hatemcamp1}
                alt="Horse Campaign Results"
                onClick={() => setSelectedImage(hatemcamp1)}
              />

              <div className="results-caption">
                Generated over 5,353 conversations with optimized
                Meta Ads creative strategy and messaging funnels.
              </div>
            </div>

            <div className="results-item">
              <img
                src={hatem2}
                alt="Horse Campaign Metrics"
                onClick={() => setSelectedImage(hatem2)}
              />

              <div className="results-caption">
                Achieved 27% qualified leads rate and generated
                over 700K EGP in revenue.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EVENT CASE STUDY */}
      <section className="case-study">
        <div className="case-label">EVENT TICKET CAMPAIGN</div>

        <h1>Event Ticket Sales Campaign</h1>

        <p className="case-desc">
          Built and optimized a Meta Ads lead generation funnel
          for event ticket sales using Ticket March integration
          and conversion-focused form optimization.
        </p>

        <div className="stats-grid">
          <div className="stat-card">
            <h3>775+</h3>
            <p>Generated Leads</p>
          </div>

          <div className="stat-card">
            <h3>7.27 EGP</h3>
            <p>Cost Per Lead</p>
          </div>

          <div className="stat-card green">
            <h3>Sold Out</h3>
            <p>Tickets Status</p>
          </div>

          <div className="stat-card">
            <h3>124K+</h3>
            <p>Impressions</p>
          </div>
        </div>

        <div className="impact-box">
          <div className="impact-content">
            <h3>Lead Form Funnel Optimization</h3>

            <p>
              Optimized instant lead forms and event ticket conversion
              flow using high-converting messaging, audience targeting,
              and Meta Ads optimization strategies to reduce lead cost
              and maximize ticket sales.
            </p>

            <div className="tags">
              <span>Meta Ads</span>
              <span>Ticket March</span>
              <span>Event Marketing</span>
              <span>Lead Forms</span>
              <span>Sold Out Campaign</span>
            </div>
          </div>

          <img
            src={Form}
            alt="Event Ticket Campaign"
            className="form-image"
            onClick={() => setSelectedImage(Form)}
          />
        </div>
      </section>

      {/* GOOGLE ADS CASE STUDY */}
      <section className="google-case-study">
        <div className="section-label">GOOGLE ADS CASE STUDY</div>

        <h2>Luxury Car Rental Google Ads Campaign</h2>

        <p className="section-desc">
          Built and optimized high-intent Google Ads campaigns
          focused on generating qualified luxury car rental leads
          with strong conversion rates and efficient acquisition costs.
        </p>

        <div className="stats-grid">
          <div className="stat-card">
            <h3>280+</h3>
            <p>Conversions</p>
          </div>

          <div className="stat-card">
            <h3>25.93%</h3>
            <p>Conversion Rate</p>
          </div>

          <div className="stat-card green">
            <h3>$3.06</h3>
            <p>Cost Per Conversion</p>
          </div>

          <div className="stat-card">
            <h3>$856</h3>
            <p>Ad Spend</p>
          </div>
        </div>

        <div className="impact-box">
          <div className="impact-content">
            <h3>Campaign Strategy</h3>

            <p>
              Focused on high-intent search traffic targeting luxury
              car rental customers using optimized keyword segmentation,
              conversion-focused search campaigns and smart bidding
              optimization strategies.
            </p>

            <div className="tags">
              <span>Google Ads</span>
              <span>Luxury Cars</span>
              <span>Lead Generation</span>
              <span>High Intent Traffic</span>
              <span>Conversion Optimization</span>
            </div>
          </div>

          <div className="results-gallery">
            <div className="results-item">
              <img
                src={Google}
                alt="Google Ads Results"
                onClick={() => setSelectedImage(Google)}
              />

              <div className="results-caption">
                Achieved 280+ conversions with a 25.93%
                conversion rate and efficient acquisition costs.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ECOMMERCE PERFORMANCE SECTION */}
      <section className="case-study">
        <div className="case-label">ECOMMERCE PERFORMANCE</div>

        <h1>Ecommerce Tracking, Sales & Performance Systems</h1>

        <p className="case-desc">
          Built ecommerce tracking and performance systems using Meta Ads,
          Google Analytics, Microsoft Clarity and Google Tag Manager to measure
          purchases, revenue, user behavior and conversion events.
        </p>

        <div className="stats-grid">
          <div className="stat-card green">
            <h3>690K SAR</h3>
            <p>Ecommerce Revenue Tracked</p>
          </div>

          <div className="stat-card">
            <h3>3.1K</h3>
            <p>Total Purchasers</p>
          </div>

          <div className="stat-card">
            <h3>68K+</h3>
            <p>Clarity Sessions</p>
          </div>

          <div className="stat-card">
            <h3>109K</h3>
            <p>GA4 Event Count</p>
          </div>
        </div>

        <div className="impact-box">
          <div className="impact-content">
            <h3>Analytics & Ecommerce Measurement</h3>

            <p>
              Implemented a full measurement stack to track ecommerce revenue,
              purchases, traffic sources, event actions, user behavior and funnel
              performance across Google Analytics, Microsoft Clarity and Google Tag Manager.
            </p>

            <div className="tags">
              <span>Google Analytics</span>
              <span>GA4 Ecommerce</span>
              <span>Microsoft Clarity</span>
              <span>Google Tag Manager</span>
              <span>Meta Pixel</span>
              <span>Purchase Tracking</span>
              <span>Conversion Events</span>
            </div>
          </div>

          <div className="results-gallery">
            <div className="results-item">
              <img
                src={Analytics1}
                alt="GA4 Ecommerce Revenue"
                onClick={() => setSelectedImage(Analytics1)}
              />
              <div className="results-caption">
                GA4 ecommerce dashboard tracking 690K SAR revenue and 3.1K purchasers.
              </div>
            </div>

            <div className="results-item">
              <img
                src={analytics2}
                alt="GA4 Traffic Overview"
                onClick={() => setSelectedImage(analytics2)}
              />
              <div className="results-caption">
                Google Analytics report showing active users, traffic sources, engagement and event activity.
              </div>
            </div>

            <div className="results-item">
              <img
                src={analytics3}
                alt="GA4 Event Tracking"
                onClick={() => setSelectedImage(analytics3)}
              />
              <div className="results-caption">
                GA4 reporting setup with 14K active users, 13K new users and 109K tracked events.
              </div>
            </div>

            <div className="results-item">
              <img
                src={clarity}
                alt="Microsoft Clarity Dashboard"
                onClick={() => setSelectedImage(clarity)}
              />
              <div className="results-caption">
                Microsoft Clarity setup for session recordings, scroll depth, rage clicks and behavior analysis.
              </div>
            </div>

            <div className="results-item">
              <img
                src={tagmanager}
                alt="Google Tag Manager Setup"
                onClick={() => setSelectedImage(tagmanager)}
              />
              <div className="results-caption">
                Google Tag Manager setup including GA4 events, purchase events, checkout, add to cart, Meta Pixel and Clarity tags.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ECOMMERCE CASE STUDIES SECTION */}
      <section className="case-study">
        <div className="case-label">ECOMMERCE SALES RESULTS</div>

        <h1>Ecommerce Campaigns & Store Revenue Tracking</h1>

        <p className="case-desc">
          Managed ecommerce performance campaigns and tracked store sales,
          purchases, order volume and revenue changes across multiple online stores.
        </p>

        <div className="stats-grid">
          <div className="stat-card">
            <h3>373</h3>
            <p>Monthly Orders Example</p>
          </div>

          <div className="stat-card green">
            <h3>238K SAR</h3>
            <p>Monthly Sales Example</p>
          </div>

          <div className="stat-card">
            <h3>ROAS</h3>
            <p>Purchase Optimization</p>
          </div>

          <div className="stat-card">
            <h3>Pixel</h3>
            <p>Purchase Tracking</p>
          </div>
        </div>

        <div className="impact-box">
          <div className="impact-content">
            <h3>Ecommerce Growth System</h3>

            <p>
              Worked on ecommerce campaigns focused on purchase optimization,
              catalog performance, product testing, retargeting and revenue tracking
              using Meta Ads, store dashboards and analytics reporting.
            </p>

            <div className="tags">
              <span>Ecommerce Ads</span>
              <span>Purchase Campaigns</span>
              <span>Catalog Sales</span>
              <span>Retargeting</span>
              <span>Revenue Tracking</span>
              <span>Product Testing</span>
            </div>
          </div>

          <div className="results-gallery">
            <div className="results-item">
              <img
                src={ecommerce1}
                alt="Ecommerce Sales Dashboard"
                onClick={() => setSelectedImage(ecommerce1)}
              />
              <div className="results-caption">
                Ecommerce dashboard showing monthly orders and sales performance tracking.
              </div>
            </div>

            <div className="results-item">
              <img
                src={ecommerce2}
                alt="Ecommerce Monthly Sales"
                onClick={() => setSelectedImage(ecommerce2)}
              />
              <div className="results-caption">
                Store performance report showing 373 orders and 238K+ SAR sales during the selected period.
              </div>
            </div>

            <div className="results-item">
              <img
                src={ecommerce3}
                alt="Ecommerce Revenue Report"
                onClick={() => setSelectedImage(ecommerce3)}
              />
              <div className="results-caption">
                Ecommerce revenue report used to monitor sales, orders and net performance.
              </div>
            </div>

            <div className="results-item">
              <img
                src={ecommerce4}
                alt="Meta Ecommerce Campaigns"
                onClick={() => setSelectedImage(ecommerce4)}
              />
              <div className="results-caption">
                Meta ecommerce campaigns optimized for website purchases and cost per purchase.
              </div>
            </div>

            <div className="results-item">
              <img
                src={ecommerce5}
                alt="Ecommerce Meta Campaigns"
                onClick={() => setSelectedImage(ecommerce5)}
              />
              <div className="results-caption">
                Product-level ecommerce campaign testing with purchase results and spend tracking.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CRM & AUTOMATION SECTION */}
      <section className="case-study">
        <div className="case-label">CRM & AUTOMATION</div>

        <h1>HubSpot CRM Pipeline & Sales Automation</h1>

        <p className="case-desc">
          Built CRM systems and sales workflows to track leads, manage deal stages,
          automate follow-ups and improve sales team visibility.
        </p>

        <div className="stats-grid">
          <div className="stat-card">
            <h3>HubSpot</h3>
            <p>CRM Platform</p>
          </div>

          <div className="stat-card">
            <h3>Pipeline</h3>
            <p>Lead Stage Tracking</p>
          </div>

          <div className="stat-card green">
            <h3>Workflow</h3>
            <p>Follow-up Automation</p>
          </div>

          <div className="stat-card">
            <h3>Tasks</h3>
            <p>Sales Team Reminders</p>
          </div>
        </div>

        <div className="impact-box">
          <div className="impact-content">
            <h3>CRM Pipeline & Automation System</h3>

            <p>
              Designed HubSpot deal pipelines and automated workflows to move leads
              through sales stages, create follow-up tasks, remind sales teams and
              improve lead handling after campaigns.
            </p>

            <div className="tags">
              <span>HubSpot CRM</span>
              <span>Deal Pipeline</span>
              <span>Sales Automation</span>
              <span>Follow-up Tasks</span>
              <span>Lead Tracking</span>
              <span>Workflow Automation</span>
            </div>
          </div>

          <div className="results-gallery">
            <div className="results-item">
              <img
                src={pipelines}
                alt="HubSpot CRM Pipeline"
                onClick={() => setSelectedImage(pipelines)}
              />
              <div className="results-caption">
                HubSpot CRM pipeline built to track leads from new lead stage to closed won.
              </div>
            </div>

            <div className="results-item">
              <img
                src={workflow}
                alt="HubSpot Workflow Automation"
                onClick={() => setSelectedImage(workflow)}
              />
              <div className="results-caption">
                Automated HubSpot workflow for visit reminders, branching logic and task creation.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section className="skills-section">
        <div className="section-label">SKILLS & TOOLS</div>

        <h2>Technologies & Marketing Stack</h2>

        <p className="section-desc">
          Performance marketing, automation systems and frontend technologies
          used across client campaigns and scalable digital systems.
        </p>

        <div className="skills-grid">
          <div className="skill-card">
            <h3>Media Buying</h3>

            <div className="skill-tags">
              <span>Meta Ads</span>
              <span>Google Ads</span>
              <span>TikTok Ads</span>
              <span>Lead Generation</span>
              <span>Retargeting</span>
            </div>
          </div>

          <div className="skill-card">
            <h3>Automation</h3>

            <div className="skill-tags">
              <span>CRM Systems</span>
              <span>Chat Builder</span>
              <span>AI Automation</span>
              <span>Zapier</span>
              <span>Workflows</span>
            </div>
          </div>

          <div className="skill-card">
            <h3>Frontend</h3>

            <div className="skill-tags">
              <span>React</span>
              <span>JavaScript</span>
              <span>HTML</span>
              <span>CSS</span>
              <span>Vite</span>
            </div>
          </div>

          <div className="skill-card">
            <h3>Creative Strategy</h3>

            <div className="skill-tags">
              <span>Hooks</span>
              <span>UGC</span>
              <span>Reels Trends</span>
              <span>Creative Testing</span>
              <span>Positioning</span>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="case-study" id="contact">
        <div className="case-label">CONTACT</div>

        <h1>Let's Work Together</h1>

        <p className="case-desc">
          Available for Media Buying, CRM Systems,
          AI Automation and Performance Marketing projects.
        </p>

        <div className="hero-buttons">
          <a
            href="https://wa.me/"
            target="_blank"
            rel="noreferrer"
            className="primary-btn"
          >
            WhatsApp
          </a>

          <a
            href="https://www.facebook.com/shx10t6/"
            target="_blank"
            rel="noreferrer"
            className="secondary-btn"
          >
            Facebook
          </a>
        </div>
      </section>

      {/* FULLSCREEN IMAGE PREVIEW */}
      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <button
            className="lightbox-close"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>

          <img
            src={selectedImage}
            alt="Fullscreen Preview"
            className="lightbox-image"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}

export default App;