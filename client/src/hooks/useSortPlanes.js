import  { useState, useMemo } from 'react';

export const useSortPlanes = (planes = []) => {
    const [isDescSort, setIsDescSort] = useState(false);

    const sortedPlanes = useMemo(() => {
        const sortablePlanes = [...planes];

        sortablePlanes.sort((a, b) => {
            if (+a.price < +b.price) return isDescSort ? 1 : -1;
            if (+a.price > +b.price) return isDescSort ? -1 : 1;

            return 0;
        })

        return sortablePlanes;
    }, [isDescSort, planes])

    return {
        sortedPlanes,
        isDescSort,
        setIsDescSort
    }
}