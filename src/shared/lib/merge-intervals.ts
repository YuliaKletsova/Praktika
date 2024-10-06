export function mergeIntervals(
    intervals: { id: number; value: string; label: string }[],
) {
    if (intervals.length < 2) return intervals;

    const parseTime = (str: string) => {
        const [start, end] = str.split('-').map(Number);
        return { start, end };
    };

    intervals.sort(
        (a, b) => parseTime(a.value).start - parseTime(b.value).start,
    );

    const merged = [];

    for (const interval of intervals) {
        const current = parseTime(interval.value);

        if (!merged.length || merged[merged.length - 1].end < current.start) {
            merged.push(current);
        } else {
            merged[merged.length - 1].end = Math.max(
                merged[merged.length - 1].end,
                current.end,
            );
        }
    }

    return merged.map((interval, index) => ({
        id: index,
        value: `${interval.start}-${interval.end}`,
        label: `${String(interval.start).padStart(2, '0')}:00 - ${String(
            interval.end,
        ).padStart(2, '0')}:00`,
    }));
}
