## 2024-05-23 - SkillsChart Re-render Optimization
**Learning:** `SkillsChart` was performing O(N) data transformation and grouping on every render. While N is currently small, this pattern scales poorly and contributes to main thread work during interactions.
**Action:** Implemented `useMemo` to cache the derived `chartGroups` data structure. This separates data processing from UI rendering, ensuring the chart configuration is only rebuilt when the raw `skills` prop actually changes.
