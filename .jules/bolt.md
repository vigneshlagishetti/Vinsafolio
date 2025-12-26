## 2024-12-26 - Optimized SkillsChart Grouping
**Learning:** Found an O(N^2) array spreading pattern inside a loop in `SkillsChart.tsx`.
**Action:** Replaced with O(N) `push` operations and wrapped in `useMemo`. This is a common anti-pattern in React codebases.
