const selectAllPositions = ({ positions }) => positions;

const selectVisiblePositions = ({ positions }, filters = []) => {
  const isFiltersEmpty = filters.length === 0;
  if (isFiltersEmpty) return positions;

  const filteredPositions = positions.filter((pos) => {
    const posFilters = [pos.role, pos.level, ...pos.languages, ...pos.tools];
    const isPositionValid = filters.every((filter) => posFilters.includes(filter));
    return isPositionValid;
  });

  return filteredPositions;
};

export { selectAllPositions, selectVisiblePositions };
