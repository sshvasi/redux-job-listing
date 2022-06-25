import { useDispatch, useSelector } from 'react-redux';
import { clearFilters, removeFilter } from 'store/filters/filters-actions';
import { selectFilters } from 'store/filters/filters-selectors';
import { Badge } from 'UI/Badge';
import { Card } from 'UI/Card';
import { Stack } from 'UI/Stack';

const FilterPanel = () => {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);

  const removeFilterHandler = (filter) => {
    dispatch(removeFilter(filter));
  };

  const clearFiltersHandler = (filter) => {
    dispatch(clearFilters());
  };

  if (filters.length === 0) return null;

  return (
    <Card className="filter-panel">
      <div className="filter-panel-wrapper">
        <Stack>
          {filters.map((filter) => (
            <Badge
              variant="clearable"
              onClear={() => removeFilterHandler(filter)}
            >
              {filter}
            </Badge>
          ))}
        </Stack>

        <button className="link" onClick={clearFiltersHandler}>
          Clear
        </button>
      </div>
    </Card>
  );
};

export { FilterPanel };
