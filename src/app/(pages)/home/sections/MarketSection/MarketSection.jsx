"use client";

import { motion } from "framer-motion";
import SectionTitle from "../../components/SectionTitle";
import { useInViewAnimation, containerVariants, itemVariants } from "../../../../../hooks";
import styles from './MarketSection.module.css';

const MarketSection = () => {
  const { ref, isInView } = useInViewAnimation();

  const problems = [
    {
      icon: "/images/Opaque_Revenue.png",
      title: "Opaque Revenue",
      description:
        "Content creators don't see where their revenue goes or how it's calculated",
    },
    {
      icon: "/images/Weak_Competition.png",
      title: "Weak Competition",
      description:
        "Small businesses struggle to compete with large platforms and middlemen",
    },
    {
      icon: "/images/Unfair_Voting.png",
      title: "Unfair Voting",
      description:
        "Event voting systems lack transparency and can be easily manipulated",
    },
    {
      icon: "/images/No_Rewards.png",
      title: "No Rewards",
      description:
        "Community members contribute value but receive no meaningful rewards",
    },
  ];

  const solutions = [
    {
      icon: "/images/FULL_TRANSPARENCY.png",
      title: "Full Transparency",
      subtitle: "Through Blockchain",
      description: "Every transaction visible and verifiable on-chain",
      gradientColors: "#22d3ee, #38bdf8",
    },
    {
      icon: "/images/NFT_ASSETIZATION.png",
      title: "NFT Assetization",
      subtitle: "Digital Ownership",
      description: "True ownership of digital assets and content",
      gradientColors: "#2dd4bf, #14b8a6",
    },
    {
      icon: "/images/OPEN_MODEL.png",
      title: "Open Model",
      subtitle: "Inclusive Participation",
      description: "Everyone can participate and benefit equally",
      gradientColors: "#ff7849, #f472b6",
    },
  ];

  return (
    <section
      ref={ref}
      className={styles.marketSection}
    >
      <div className={styles.container}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className={styles.content}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className={styles.header}>
            <SectionTitle
              title="Market Analysis"
              subtitle="A Growing Industry Lacking Transparency"
              className={styles.sectionTitle}
            />
          </motion.div>

          {/* Market Size Card */}
          <motion.div
            style={{
              backgroundImage:
                'url("/images/Market Analysis_banner_center.png")',
              backgroundSize: "fill",
              backgroundPosition: "center",
            }}
            variants={itemVariants}
            className={styles.marketCard}
          >
            {/* Decorative elements */}
            <div className={styles.decorativeElement1} />
            <div className={styles.decorativeElement2} />

            <div className={styles.marketContent}>
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                className={styles.marketStats}
              >
                <div className={styles.marketValue}>
                  $300B 📈
                </div>
                <div className={styles.marketLabel}>
                  Global Pet Industry 2024
                </div>
                <div className={styles.marketDescription}>
                  Growing rapidly year over year
                </div>
              </motion.div>

              {/* Growth indicator */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8 }}
                className={styles.growthIndicator}
              >
                <span className={styles.growthIcon}>📈</span>
                <span className={styles.growthText}>
                  Continuous Growth
                </span>
              </motion.div>
            </div>
          </motion.div>

          {/* Problems Section */}
          <motion.div variants={itemVariants} className={styles.problemsSection}>
            <h3 className={styles.problemsTitle}>
              But Behind That Growth...
            </h3>
            <p className={styles.problemsDescription}>
              Unresolved problems preventing true value creation
            </p>

            <div className={styles.problemsGrid}>
              {problems.map((problem, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className={styles.problemCard}
                >
                  <motion.img
                    src={problem.icon}
                    alt={problem.title}
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    className={styles.problemIcon}
                  />
                  <h4 className={styles.problemTitle}>
                    {problem.title}
                  </h4>
                  <p className={styles.problemDescription}>
                    {problem.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Arrow Transition */}
          <motion.div
            variants={itemVariants}
            className={styles.arrowContainer}
          >
            <div className={styles.arrowWrapper}>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className={styles.arrowIcon}
              >
                ⬇️
              </motion.div>
            </div>
          </motion.div>

          {/* Solutions Section */}
          <motion.div variants={itemVariants} className={styles.solutionsSection}>
            <h3 className={styles.solutionsTitle}>
              K-LovePet's Approach
            </h3>

            <div className={styles.solutionsGrid}>
              {solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -15, rotateY: 5 }}
                  className={styles.solutionCard}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* Glow effect */}
                  <motion.div
                    animate={{
                      opacity: [0.3, 0.6, 0.3],
                      scale: [1, 1.05, 1],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className={styles.solutionGlow}
                  />

                  {/* Card */}
                  <div className={styles.solutionCardContent}>
                    {/* Top accent */}
                    <div
                      className={styles.solutionAccent}
                      style={{ background: `linear-gradient(to right, ${solution.gradientColors})` }}
                    />

                    {/* Icon */}
                    <motion.img
                      src={solution.icon}
                      alt={solution.title}
                      whileHover={{ scale: 1.3, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className={styles.solutionIcon}
                    />

                    {/* Content */}
                    <h4 className={styles.solutionTitle}>
                      {solution.title}
                    </h4>
                    <p className={styles.solutionSubtitle}>
                      {solution.subtitle}
                    </p>
                    <p className={styles.solutionDescription}>
                      {solution.description}
                    </p>

                    {/* Checkmark */}
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
                      className={styles.checkmark}
                    >
                      ✓
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div variants={itemVariants} className={styles.ctaSection}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={styles.ctaButton}
            >
              Learn More About Our Solution →
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default MarketSection;
